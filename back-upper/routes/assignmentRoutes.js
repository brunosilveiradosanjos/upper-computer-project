const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController')

router.route('/')
    .get(assignmentController.getAllAssignments)
    .post(assignmentController.createAssignment)

router.route('/:id')
    .get(assignmentController.getOneAssignment)
    .patch(assignmentController.updateAssignment)
    .delete(assignmentController.deleteAssignment);

module.exports = router;