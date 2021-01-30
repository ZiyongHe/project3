const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // post: [{ type: Schema.Types.ObjectId, ref: 'post' }],
  ChatRoom: [{ type: Schema.Types.ObjectId, ref: 'ChatRoom' }],
})

userSchema.methods.validPassword = function (password) {
  console.log(bcrypt.hashSync(this.password, bcrypt.genSaltSync(10)))
  return bcrypt.compareSync(password, this.password)
}

userSchema.pre('save', function (next) {
  // Hash password before saving to database
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10))
  }
  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
