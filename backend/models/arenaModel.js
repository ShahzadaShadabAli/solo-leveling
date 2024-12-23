import mongoose from 'mongoose';
const { Schema } = mongoose;

const arenaSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  winning_award: [{
    type: Schema.Types.ObjectId,
    ref: 'Character',
    required: true
  }],
  image: {
    type: String,
    required: true
  }
});

const Arena = mongoose.model('Arena', arenaSchema);
export default Arena;
