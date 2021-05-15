const { Schema, model } = require('mongoose');



const UsuarioSchema = Schema({
    
  nombre: {
      type: String,
      required: [true, 'El nombre es obligatorio']
  },
  correo: {
      type: String,
      required: [true, 'El correo es obligatorio'],
      unique: true
  },
  password: {
      type: String,
      required: [true, 'El password es obligatorio']
  },
  img: {
     type: String,  
  },
  rol: {
    type: String,
    required: true,
    emun: ['ADMIN_ROLE', 'USER_ROLE'] // role sera uno de los 2 ,  
  },
  estado: {
    type: Boolean,
    default: true
  },
  google: {
    type: Boolean,
    default: false
  }

})

// compilar  nuestra esquema en un modelo  => asi Usuario es una class .
module.exports = model('Usuario', UsuarioSchema );