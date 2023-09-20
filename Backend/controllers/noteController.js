const Note = require("../models/noteModel");
const catchAsync = require("../utils/catchAsync");
const { authorizeUser } = require("./authController");

module.exports = {
  getAllNotes: async function (req, res, next) {
    const notes = await Note.find();
    res.status(200).json({
      status: "success",
      data: notes,
    });
  },
  getUserNotes: async function (req, res, next) {
    const notes = await Note.find({ createdBy: req.user });
    res.status(200).json({
      status: "success",
      data: notes,
    });
  },
  createNote: catchAsync(async function (req, res, next) {
    const { title, body } = req.body;
    const createdBy = req.user.id;
    const newNote = await Note.create({ title, body, createdBy });
    res.status(201).json({
      status: "success",
      data: newNote,
    });
  }),
  getOneNote: catchAsync(async function (req, res, next) {
    const note = await Note.findById(req.params.id);
    if (!note) return next(new Error("Could not find the note"));
    res.status(200).json({
      status: "success",
      data: note,
    });
  }),
  deleteNote: catchAsync(async function (req, res, next) {
    const noteId = req.params.id
    const note = await Note.findOneAndDelete({_id: noteId, createdBy: req.user.id})
    if(!note) return next(new Error("Note not found or unauthorized"))
    res.status(204).json({
      status: "success",
      data: null,
    });
  }),
  updateNote: catchAsync(async function (req, res, next) {
    const noteId = req.params.id
    const { title, body } = req.body;
    const note = await Note.findOneAndUpdate({_id: noteId, createdBy: req.user.id}, {title, body}, {new: true})
    if(!note) return next(new Error("Note not found or unauthorized"))
    res.status(200).json({
      status: "success",
      data: note,
    });
  }),
};
