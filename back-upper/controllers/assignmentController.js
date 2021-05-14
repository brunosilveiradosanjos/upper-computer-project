
exports.getAllAssignments = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from getAllAssignments!` })
}

exports.getOneAssignment = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from getOneAssignment!` })
}

exports.createAssignment = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from createAssignment!` })
}

exports.updateAssignment = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from updateAssignment!` })
}

exports.deleteAssignment = (req, res) => {
    res.status(200).json({ status: 'ok', message: `Hello world from deleteAssignment!` })
}