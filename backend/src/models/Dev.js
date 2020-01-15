import mongoose from 'mongoose';
import PointSchema from './utils/PointSchema.js';

const DevSchema = new mongoose.Schema({
  name: String,
  github_username: String,
  bio: String,
  avatarURL: String,
  techs: Array,
  location: {
    type: PointSchema,
    index: '2dsphere'
  }
});

export default mongoose.model('Dev', DevSchema);
