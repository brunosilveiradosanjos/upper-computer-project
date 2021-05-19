const Project = require('../models/projectModel');

exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json({
            status: 'success',
            result: projects.length,
            data: {
                projects
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: `Something went wrong: ${err}`
        });
    }
}

exports.getOneProject = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from getOneProject!` })
}

exports.createProject = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from createProject!` })
}

exports.updateProject = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from updateProject!` })
}

exports.deleteProject = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from deleteProject!` })
}