class ContactController {
  index(request, response) {
    // listar
    response.send('send from contact controller')
  }

  show() {
    // obter um registro
  }

  store() {
    // criando novo registro
  }

  update() {
    // editar um registro
  }

  delete() {
    // deletar um registro
  }
}

// singleton
module.exports = new ContactController()
