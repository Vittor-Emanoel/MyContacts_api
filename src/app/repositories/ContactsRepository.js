const { v4 } = require('uuid')

const contacts = [
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
}

module.exports = new ContactsRepository()
