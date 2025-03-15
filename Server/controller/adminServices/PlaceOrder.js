const con = require('../../config/dbConfig');
const query = require('../../query/queries');

const PlaceOrder = async (req, resp) => {
    const { tableName, products, total, paymentMethod } = req.body;

    console.log(req.body);

    try {
        con.query(query.insertOrder, [tableName, paymentMethod, total], function (err, data) {
            if (err) {
                console.log(err);
                return resp.status(500).json({ message: "Failed to place order." });
            }

            console.log("Order Placed");

            const orderID = data.rows[0].order_id;
            console.log("Order ID:", orderID);

            let itemsProcessed = 0;
            let hasError = false;

            // Process each product and insert into the database
            for (const item of products) {
                con.query(
                    query.insertItems,
                    [
                        orderID,
                        item.id,
                        item.name,
                        item.image,
                        item.price,
                        item.quantity,
                        item.newTotal,
                        item.totalBill
                    ],
                    function (err, data) {
                        if (err) {
                            console.log("Error inserting item:", err);
                            hasError = true;
                        }

                        itemsProcessed++;

                        // Once all items are processed, send the response
                        if (itemsProcessed === products.length) {
                            if (hasError) {
                                return resp.status(500).json({ message: "Some items failed to be inserted." });
                            }
                            return resp.status(201).json({ message: "Order placed successfully!", tablename: tableName });
                        }
                    }
                );
            }
        });
    } catch (error) {
        console.log("An error occurred:", error);
        return resp.status(500).json({ message: "An internal server error occurred." });
    }
};

module.exports = {
    PlaceOrder
};
