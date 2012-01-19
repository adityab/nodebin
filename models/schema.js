var Schema = mongoose.Schema;

var PasteModel = new Schema({
    author: ObjectId,
    content: String,
    timestamp: { type: Date, default: Date.now() },
    language: String
});

var UserModel = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    identity: {
        provider: String,
        account: String
    },
    date: { type: Date, default: Date.now() }
});

mongoose.model('paste', PasteModel, 'paste');
mongoose.model('user', UserModel, 'user');
