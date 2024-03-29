const ContactsRepository = require("../repositories/ContactsRepository");
const isValidUUID = require('../utils/isValidUUID')

class ContactController {
  async index(request, response) {
    const { orderBy } = request.query;
    const contacts = await ContactsRepository.findAll(orderBy);

    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;

    if(!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid user id' })
    }

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: "Contact not found" });
    }

    return response.json(contact);
  }

  async store(request, response) {
    const { name, email, phone, category_id } = request.body;

    if (!name) {
      return response.status(400).json({ error: "Name is required" });
    }

    if(category_id && !isValidUUID(category_id)) {
      return response.status(400).json({ error: 'Invalid category' })
    }

    if(email) {
      const contactExists = await ContactsRepository.findByEmail(email);
      if (contactExists) {
        return response.status(400) .json({ error: "This email is already in use" });
      }  
    }


    const contact = await ContactsRepository.create({
      name,
      email: email || null,
      phone,
      category_id: category_id || null,
    });
    return response.status(201).json(contact);
  }

  async update(request, response) {
    // editar um registro
    const { id } = request.params;
    const { name, email, phone, category_id } = request.body;

    if(!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid user id' })
    }

    if(category_id && !isValidUUID(category_id)) {
      return response.status(400).json({ error: 'Invalid category' })
    }
    
    if (!name) {
      return response.status(400).json({ error: "name is required" });
    }

    const contactExists = await ContactsRepository.findById(id);

    if (!contactExists) {
      return response.status(404).json({
        error: "user not found",
      });
    }

    if(email) {
      const contactByEmail = await ContactsRepository.findByEmail(email);
      if (contactByEmail && contactByEmail.id !== id) {
        return response.status(400).json({ error: "This email is already  in use" });
      }
    }


    const contact = await ContactsRepository.update(id, {
      name,
      email: email || null,
      phone,
      category_id: category_id || null ,
    });
    response.json(contact);
  }

  // deletar um registro
  async delete(request, response) {
    const { id } = request.params;

    if(!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid user id' })
    }

    await ContactsRepository.delete(id);
    // no content
    response.sendStatus(204);
  }
}

// singleton
module.exports = new ContactController();
