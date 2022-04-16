const express = require('express')
const router = express.Router()
const companyController = require('../controllers/companyController')
const itemController = require('../controllers/itemController')
const transactionController = require('../controllers/transactionControler')
const userController = require('../controllers/userController')
const reportController = require('../controllers/reportController')
const {authenticationMiddleWare} = require('../middleware/authentication')
const upload = require('../middleware/multer')
const {  uploadImagekit } = require('../middleware/uploadImageKit')


// User
router.post('/login',userController.Login)
router.post('/register',userController.Register)


// Company
router.get('/company', companyController.getCompany)
router.post('/company', companyController.addCompany)
router.get('/company/:id', companyController.getCompanyId)
router.delete('/company/:id', companyController.deleteCompany)
router.put('/company/:id', companyController.editCompany)

// Item
router.get('/item', itemController.getItem)
router.post('/item', itemController.addItem)
router.get('/item/:id', itemController.getItemId)
router.delete('/item/:id', itemController.deleteItem)
router.put('/item/:id', itemController.editItem)

//Transaction
router.get('/transaction', transactionController.getTransaction)
router.post('/transaction',authenticationMiddleWare,upload.single("file"),uploadImagekit, transactionController.addTransaction)
router.get('/transaction/:id', transactionController.getTransactionId)
router.delete('/transaction/:id', transactionController.deleteTransaction)
router.put('/transaction/:id',authenticationMiddleWare,upload.single("file"),uploadImagekit, transactionController.editTransaction)



//Report
router.get('/report', reportController.getReport)
router.get('/report/:id', reportController.getReportId)

module.exports = router