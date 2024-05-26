const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    
    userName: { type: String,
         required: true ,trim: true,},

    email: { type: String,
         required: true
        , unique: true ,
        trim: true},


    
    password: { type: String, required: true },
    isAdmin: { type: Boolean, 
        
        default: false },
    birthdayDate: { type: Date ,required: false},

    favPro: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
   
   
    cart: [
        {
            product: { type: Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, min: 1, required: true  }
        }
    ],

    customProduct: [{ type: Schema.Types.ObjectId, ref: 'Product' }]


});

const User = mongoose.model("User", userSchema);

export default User;
