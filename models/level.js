const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const levelSchema = new Schema ({
    l1:{
        type: String
    },
    l2:{
        type: String
    },
    l3:{
        type: String
    },
    l4:{
        type: String
    },
    l5:{
        type: String
    }
});

mongoose.model('level',levelSchema);