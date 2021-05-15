const Customer = require('../models/customerModel');

exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json({
            status: 'success',
            result: customers.length,
            data: {
                customers
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: `Something went wrong: ${err}`
        });
    }
}

exports.getOneCustomer = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from getOneCustomer!` })
}

exports.createCustomer = async (req, res) => {
    try {
        const newCustomer = await Customer.create(req.body);
        // const myBody = req.body;
        console.log(newCustomer);
        res.status(201).json({
            status: 'success',
            data: {
                // myBody
                customer: newCustomer
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: `You got an error: ${err}`
        })
    }
}

exports.updateCustomer = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from updateCustomer!` })
}

exports.deleteCustomer = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from deleteCustomer!` })
}