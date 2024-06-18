import mongoose from 'mongoose';
import { profileSchema } from './Profile';


// const deckSchema = new mongoose.Schema({
//     deckname: String
// })

const deckSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    deckname: {
        deckname: String,
        required: true
    },
    deck: { // nested document
        maindeck: [],
        sidedeck: []
    },
    
},
 {timestamps: true});



export default mongoose.model('Deck', deckSchema);