const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true
  },
  title:       { type: String,  required: true },
  description: { type: String,  default: '' },

  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },

  completed:   { type: Boolean, default: false },
  createdAt:   { type: Date,    default: Date.now },
  dueDate:     { type: Date }     
});



module.exports = mongoose.model('Task', TaskSchema);