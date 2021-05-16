const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'O cliente deve possuir um nome']
    },
    email: {
        type: String,
        required: [true, 'O cliente deve possuir um e-mail'],
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: [true, 'O cliente deve possuir um celular']
    },
    company: String,
    cpf: {
        type: Number,
        required: [true, 'O cliente deve possuir um CPF'],
        unique: true
    },
    cep: Number,
    login: String,
    password: {
        type: String,
        required: [true, 'O cliente deve possuir um senha']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updateddAt: {
        type: Date,
        default: Date.now()
    }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;