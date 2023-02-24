const ContactsRepository = require('../repositories/ContactsRepository')

class ContactController {
  // listar
  async index(request, response) {
    const { orderBy } = request.query
    const contacts = await ContactsRepository.findAll(orderBy)

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

  async store(request, response) {
    // criando novo registro
    const { name, email, phone, category_id } = request.body

    if (!name) {
      return response.status(400).json({ error: 'name is required' })
    }

    const contactExists = await ContactsRepository.findByEmail(email)

    if (contactExists) {
      return response
        .status(400)
        .json({ error: 'This email is already  in use' })
    }
    const contact = await ContactsRepository.create({
      name,
      email,
      phone,
      category_id,
    })
    response.json(contact)
  }

  async update(request, response) {
    // editar um registro
    const { id } = request.params
    const { name, email, phone, category_id } = request.body

    const contactExists = await ContactsRepository.findById(id)
    if (!contactExists) {
      return response.status(404).json({
        error: 'user not found',
      })
    }
    if (!name) {
      return response.status(400).json({ error: 'name is required' })
    }

    const contactByEmail = await ContactsRepository.findByEmail(email)

    if (contactByEmail && contactByEmail.id !== id) {
      return response
        .status(400)
        .json({ error: 'This email is already  in use' })
    }

    const contact = await ContactsRepository.update(id, {
      name,
      email,
      phone,
      category_id,
    })
    response.json(contact)
  }

  // deletar um registro
  async delete(request, response) {
    const { id } = request.params

    await ContactsRepository.delete(id)
    // no content
    response.sendStatus(204)
  }
}

// singleton
module.exports = new ContactController()
