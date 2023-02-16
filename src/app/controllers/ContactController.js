const ContactsRepository = require('../repositories/ContactsRepository')

class ContactController {
  async index(request, response) {
    // listar
    const contacts = await ContactsRepository.findAll()

    response.json(contacts)
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
