
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    createdAt: { type: Date, default: Date.now }
});
