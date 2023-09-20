const { default: mongoose } = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "A note must have a title"]
    },
    body: {
        type: String,
        required: [true, "A note must have a body"]
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
          },
})



const Note = mongoose.model('Note', noteSchema);

module.exports = Note;