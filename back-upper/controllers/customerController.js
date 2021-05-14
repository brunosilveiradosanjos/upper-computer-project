
exports.getAllCustomers = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from getAllCustomers!` })
}

exports.getOneCustomer = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from getOneCustomer!` })
}

exports.createCustomer = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from createCustomer!` })
}

exports.updateCustomer = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from updateCustomer!` })
}

exports.deleteCustomer = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from deleteCustomer!` })
}