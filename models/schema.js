var Schema = mongoose.Schema;
var ObjectId = mongoose.ObjectId;

var PasteModel = new Schema({
    author: { type: ObjectId, ref = "user" },
    content: { type: String, required: true }
    timestamp: { 
        type: Date, 
        default: Date.now(),
        required: true
    },
    language: { 
        type: String, 
        default: "plaintext", 
        required: true 
    }
});

var UserModel = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    identity: {
        provider: { type: String, default: "nodebin" },
        id: String,
        required: true
    },
    date: { 
        type: Date, 
        default: Date.now(),
        required: true
    }
});

mongoose.model('paste', PasteModel, 'paste');
mongoose.model('user', UserModel, 'user');
