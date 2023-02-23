const { v4 } = require('uuid')
const db = require('../../database')

let contacts = [
  {
    id: v4(),
    name: 'Vittor',
    email: 'vittodddr@gmail.com',
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
  async findAll() {
    const rows = await db.query('SELECT * FROM contacts')
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

  async create({ name, email, phone, category_id }) {
    const [rows] = await db.query(
      'INSERT INTO contacts(name, email, phone, category_id) VALUES ($1, $2, $3, $4) RETURNING * ',
      [name, email, phone, category_id]
    )
    return rows
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
