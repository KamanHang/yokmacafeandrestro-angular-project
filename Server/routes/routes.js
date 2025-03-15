const { Router } = require('express');
const authController = require('../controller/auth/auth');
const adminController = require('../controller/adminServices/registerStudent')
const adminControllerView = require('../controller/adminServices/viewStudent')
const adminControllerDelete = require('../controller/adminServices/deleteStudent');
const PlaceOrder = require('../controller/adminServices/PlaceOrder');
const  ViewOrders = require('../controller/adminServices/ViewOrders');


// const servicesController = require('../controller/services/')



const router =  Router();

router.post('/login', authController.loginUser)
router.post('/signup', authController.signUpUser)
router.post('/registerstudent', adminController.RegisterStudent)
router.get('/viewstudent', adminControllerView.ViewStudent)
router.post('/deletestudentbyid', adminControllerDelete.DeleteStudent)
router.post('/placeorder', PlaceOrder.PlaceOrder)
router.get('/vieworders', ViewOrders.ViewOrders)








module.exports = router;