const { uuid } = require('uuidv4')

const contacts = [
  {
    id: uuid(),
    name: 'Vittor',
    email: 'vittor@gmail.com',
    phone: '123456789',

    category_id: uuid(),
  },
]

class ContactsRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      resolve(contacts)
    })
  }
}

module.exports = new ContactsRepository()
