const ContactsRepository = require('../repositories/ContactsRepository')

class ContactController {
  // listar
  async index(request, response) {
    const contacts = await ContactsRepository.findAll()

    response.json(contacts)
  }

  // obter um registro
  async show(request, response) {
    const { id } = request.params

    const contact = await ContactsRepository.findById(id)

    if (!contact) {
      return response.status(404).json({ error: 'User not found' })
    }
    response.json(contact)
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
