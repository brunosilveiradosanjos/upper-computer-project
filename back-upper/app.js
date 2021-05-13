const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.json());

// GET
const getAllAssignments = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from getAllProjects!` })
}
const getAllCustomers = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from getAllCustomers!` })
}
const getAllEmployees = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from getAllTeams!` })
}
const getAllProfiles = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from getAllTools!` })
}
const getAllProjects = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from getAllProfiles!` })
}
const getAllTasks = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from getAllTasks!` })
}
const getAllTeams = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from getAllEmployees!` })
}
const getAllTools = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from getAllAssignments!` })
}


const getOneAssignment = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from getOneAssignment!` })
}
const getOneCustomer = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from getOneCustomer!` })
}
const getOneEmployee = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from getOneEmployee!` })
}
const getOneProfile = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from getOneProfile!` })
}
const getOneProject = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from getOneProject!` })
}
const getOneTask = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from getOneTask!` })
}
const getOneTeam = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from getOneTeam!` })
}
const getOneTool = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from getOneTool!` })
}

// POST

const createAssignment = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from createAssignment!` })
}
const createCustomer = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from createCustomer!` })
}
const createEmployee = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from createEmployee!` })
}
const createProfile = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from createProfile!` })
}
const createProject = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from createProject!` })
}
const createTask = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from createTask!` })
}
const createTeam = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from createTeam!` })
}
const createTool = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from createTool!` })
}
// PATCH

const updateAssignment = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from updateAssignment!` })
}
const updateCustomer = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from updateCustomer!` })
}
const updateEmployee = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from updateEmployee!` })
}
const updateProfile = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from updateProfile!` })
}
const updateProject = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from updateProject!` })
}
const updateTask = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from updateTask!` })
}
const updateTeam = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from updateTeam!` })
}
const updateTool = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from updateTool!` })
}
// DELETE

const deleteAssignment = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from deleteAssignment!` })
}
const deleteCustomer = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from deleteCustomer!` })
}
const deleteEmployee = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from deleteEmployee!` })
}
const deleteProfile = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from deleteProfile!` })
}
const deleteProject = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from deleteProject!` })
}
const deleteTask = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from deleteTask!` })
}
const deleteTeam = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from deleteTeam!` })
}
const deleteTool = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from deleteTool!` })
}
app.route('/api/v1/assignments')
    .get(getAllAssignments)
    .post(createAssignment)
app.route('/api/v1/customers')
    .get(getAllCustomers)
    .post(createCustomer)
app.route('/api/v1/employees')
    .get(getAllEmployees)
    .post(createEmployee)
app.route('/api/v1/profiles')
    .get(getAllProfiles)
    .post(createProfile)
app.route('/api/v1/projects')
    .get(getAllProjects)
    .post(createProject)
app.route('/api/v1/tasks')
    .get(getAllTasks)
    .post(createTask)
app.route('/api/v1/teams')
    .get(getAllTeams)
    .post(createTeam)
app.route('/api/v1/tools')
    .get(getAllTools)
    .post(createTool)

app.route('/api/v1/assignments/:id')
    .get(getOneAssignment)
    .patch(updateAssignment)
    .delete(deleteAssignment);
app.route('/api/v1/customers/:id')
    .get(getOneCustomer)
    .patch(updateCustomer)
    .delete(deleteCustomer);
app.route('/api/v1/employees/:id')
    .get(getOneEmployee)
    .patch(updateEmployee)
    .delete(deleteEmployee);
app.route('/api/v1/profiles/:id')
    .get(getOneProfile)
    .patch(updateProfile)
    .delete(deleteProfile);
app.route('/api/v1/projects/:id')
    .get(getOneProject)
    .patch(updateProject)
    .delete(deleteProject);
app.route('/api/v1/tasks/:id')
    .get(getOneTask)
    .patch(updateTask)
    .delete(deleteTask);
app.route('/api/v1/teams/:id')
    .get(getOneTeam)
    .patch(updateTeam)
    .delete(deleteTeam);
app.route('/api/v1/tools/:id')
    .get(getOneTool)
    .patch(updateTool)
    .delete(deleteTool);

const port = 3000;
app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
})