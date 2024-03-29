const CategoriesRepository = require('../repositories/CategoriesRepository')

class CategoryController {
  async index(request, response) {
    const categories = await CategoriesRepository.findAll()
    response.json(categories)
  }

  async store(request, response) {
    const { name } = request.body

    if (!name) {
      return response.status(400).json({ error: 'name is required' })
    }

    const category = await CategoriesRepository.create({
      name,
    })
    response.status(201).json(category)
  }

  async show(request, response) {
    const { id } = request.body

    const category = await CategoriesRepository.findById(id)

    if (!category) {
      return response.status(400).json({ error: 'category not found' })
    }
    response.json(category)
  }

  async delete(request, response) {
    const { id } = request.params

    await CategoriesRepository.delete(id)

    response.sendStatus(204)
  }

  async update(request, response) {
    const { id } = request.params
    const { name } = request.body

    const categoryExists = await CategoriesRepository.findById(id)

    if (!categoryExists) {
      return response.status(404).json({ error: 'Category not found' })
    }
    if (!name) {
      return response.status(404).json({ error: 'Category name is required' })
    }

    const category = await CategoriesRepository.update(id, {
      name,
    })
    response.json(category)
  }
}

module.exports = new CategoryController()
