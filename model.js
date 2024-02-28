import mongoose from 'mongoose';

const foodSchema=new mongoose.Schema({
    id:String,
    foodTitle:String,
    foodContent:String,
    authorId:String,
    subscribedUserId:String,
    activeSubscriber:Boolean 
    })
    
    const userSchema = new mongoose.Schema({
      _id: mongoose.Schema.Types.ObjectId,
      email: String,
      password: String,
      googleId: String,
      role: { type: String, enum: ['user', 'specialUser'], default: 'user' },
    });

    const Blog=mongoose.model('Blog', foodSchema);
    const User = mongoose.model('User', userSchema);

    module.exports = Blog;