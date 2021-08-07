import mongoose from 'mongoose';
const { Schema } = mongoose;

export const messageSchema = new Schema({
    appointmentId: String,
    author: Schema.Types.ObjectId,
    body: String,
    date: Date,
});

export const Message = mongoose.model('Message', messageSchema);