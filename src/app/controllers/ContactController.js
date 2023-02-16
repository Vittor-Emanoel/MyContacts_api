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

  // deletar um registro
  async delete(request, response) {
    const { id } = request.params

    const contacts = await ContactsRepository.findById(id)

    if (!contacts) {
      return response.status(404).json({ error: 'User not found' })
    }
    await ContactsRepository.delete(id)
    // no content
    response.sendStatus(204)
  }
}

// singleton
module.exports = new ContactController()
