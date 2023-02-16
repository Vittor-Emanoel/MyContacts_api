const { v4 } = require('uuid')

const contacts = [
  {
    id: v4(),
    name: 'Vittor',
    email: 'vittor@gmail.com',
    phone: '123456789',

    category_id: v4(),
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
