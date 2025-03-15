const con = require('../../config/dbConfig')
const query = require('../../query/queries')


const ViewOrders = (req, resp) => {

    try {
        con.query(query.viewOrders, async function (err, data) {



            if (data.rowCount > 0) { //checking if user with same email exits or not in the database
               resp.send(data.rows)
            }
            else{
                resp.send("No any records")
            }

        
        })

    } catch (error) {
        console.log("An error occurred:", error);
    }

}


module.exports = {
    ViewOrders
}