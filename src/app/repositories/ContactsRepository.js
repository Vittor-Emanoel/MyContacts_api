const { v4 } = require('uuid')

let contacts = [
  {
    id: v4(),
    name: 'Vittor',
    email: 'vittor@gmail.com',
    phone: '123456789',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Noah',
    email: 'noah@gmail.com',
    phone: '987654321',
    category_id: v4(),
  },
]

class ContactsRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      resolve(contacts)
    })
  }

  findById(id) {
    return new Promise((resolve, reject) => {
      resolve(contacts.find((contact) => contact.id === id))
    })
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      contacts = contacts.filter((contact) => contact.id !== id)
      resolve()
    })
  }

  findByEmail(email) {
    return new Promise((resolve, reject) => {
      resolve(contacts.find((contact) => contact.email === email))
    })
  }

  create({ name, email, phone, category_id }) {
    return new Promise((resolve, reject) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      }
      contacts.push(newContact)
      resolve(newContact)
    })
  }

  update(id, { name, email, phone, category_id }) {
    return new Promise((resolve, reject) => {
      const updatedContact = {
        name,
        email,
        phone,
        category_id,
      }
      contacts = contacts.map((contact) =>
        contact.id === id ? updatedContact : contact
      )
      resolve(updatedContact)
    })
  }
}

module.exports = new ContactsRepository()
