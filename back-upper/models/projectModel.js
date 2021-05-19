const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true, 'O projeto deve possuir um id'],
        unique: true
    },
    company: {
        type: String,
        required: [true, 'O projeto deve possuir uma empresa']
    },
    name: {
        type: String,
        required: [true, 'O projeto deve possuir um nome']
    },
    team: {
        type: String,
        required: [true, 'O projeto deve possuir uma equipe']
    },
    activity: {
        type: String,
        required: [true, 'O projeto deve possuir uma atividade']
    },
    startDate: {
        type: Date,
        required: [true, 'O projeto deve possuir uma data de início']
    },
    expectedDate: {
        type: Date,
        required: [true, 'O projeto deve possuir um prazo de entrega']
    },
    price: {
        type: Number,
        required: [true, 'O projeto deve possuir um preço']
    },
    status: {
        type: String,
        default: 'requisitos'
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

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;