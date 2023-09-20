const express = require("express");
const router = express.Router();

const {
  getAllNotes,
  createNote,
  getOneNote,
  deleteNote,
  updateNote,
  getUserNotes
} = require("../controllers/noteController");

const {authenticateToken} = require('../controllers/authController')
router.get('/all', getAllNotes)
router.get('/:id', getOneNote)

router.use(authenticateToken)
router.route('/').get(getUserNotes).post(createNote);
router.route('/:id').delete(deleteNote).patch(updateNote);

module.exports = router;
