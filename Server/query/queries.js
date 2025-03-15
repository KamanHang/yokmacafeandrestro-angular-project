// Auth Queries
const loginQuery = "SELECT * FROM users WHERE email = $1 AND password = $2";
const signUpCheckQuery = 'SELECT * FROM student WHERE phoneNumber = $1';
const signUpInsertQuery = "INSERT INTO student (firstName, lastName, emailAdd, address, phoneNumber, shiftSchedule, description) VALUES($1,$2,$3,$4,$5,$6,$7)"
const getUserPassword = "SELECT userpassword FROM users WHERE useremail = $1";


//Admin Querires
const studentCheck = 'SELECT * FROM student WHERE phoneNumber = $1';
const studentInsertQuery = "INSERT INTO student (firstName, lastName, emailAdd, address, phoneNumber, shiftSchedule, description) VALUES($1,$2,$3,$4,$5,$6,$7)"
const getAllStudentDataQuery = "SELECT * FROM student";
const deleteStudentByID = "DELETE FROM student WHERE id = $1";


//Place Order
const insertOrder =  "INSERT INTO orders ( table_name, payment_method, total) VALUES($1,$2,$3) RETURNING order_id"
const insertItems = "INSERT INTO order_items (order_id,product_id, product_name, image, price, quantity, new_total, total_bill) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)"

//View Orders
const viewOrders = "SELECT oi.order_items_id, o.order_id, o.table_name, o.payment_method, o.created_at, oi.product_id, oi.product_name, oi.price, oi.quantity, o.total FROM order_items as oi LEFT JOIN orders as o ON oi.order_id = o.order_id   ORDER BY oi.order_items_id ASC;"
module.exports = {
    loginQuery,
    signUpCheckQuery,
    signUpInsertQuery,
    getUserPassword,
    studentCheck,
    studentInsertQuery,
    getAllStudentDataQuery,
    deleteStudentByID,

    insertOrder,
    insertItems,
    viewOrders
}