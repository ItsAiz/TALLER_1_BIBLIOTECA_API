const express = require("express");
const service = require("../services/loginService");
const serviceCustomerManagement = require("../services/customerManagementService");
const serviceEmployeeManagement = require("../services/employeeManagementService");
const serviceBook = require("../services/createBookService");

const router = express.Router();

/** Route for validate login user */
router.post("/login/validateUser", service.validateLogin);

/** Routes for customer management and customer dashboard*/
router.get("/dashBoard/customersManagement", serviceCustomerManagement.getCustomerData);
router.post("/dashboard/registerCustomer/register", serviceCustomerManagement.registerCustomer);
router.patch("/dashboard/customersManagement/edit", serviceCustomerManagement.updateCustomer);
router.delete("/dashboard/customersManagement/delete/:id", serviceCustomerManagement.deleteCustomer);
router.patch("/dashBoard/loansManagement/changeStatus/:email/:id", serviceCustomerManagement.updateStatus);
router.get("/dashBoard/loansHistoryManagement/:email", serviceCustomerManagement.getCustomerDataUnique);

/**Routes for loans management */
router.get("/dashBoard/loansManagement", serviceCustomerManagement.getCustomerData);
router.post("/dashboard/registerLoan/register", serviceCustomerManagement.registerLoan);

/** Routes for employees management */
router.get("/dashBoard/EmployeeManagement", serviceEmployeeManagement.getEmployeeData);
router.post("/dashboard/registerEmployee/register", serviceEmployeeManagement.registerEmployee);
router.patch("/dashboard/employeeManagement/edit", serviceEmployeeManagement.updateEmployee);
router.delete("/dashboard/employeeManagement/delete/:id", serviceEmployeeManagement.deleteEmployee);

/**Routes for books management */
router.get("/dashBoard/bookManagement", serviceBook.getBookData);
router.post("/book/createBook", serviceBook.createBook);
router.delete("/dashboard/booksManagement/delete/:id", serviceBook.deleteBook);
router.patch("/dashboard/bookManagement/edit", serviceBook.updateBook);

module.exports = router;
