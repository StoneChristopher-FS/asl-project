const { redirect } = require('express/lib/response')
const { Images } = require('../models')

const index = async (req, res) => {
    const images = await Images.findAll()
    res.render('views/images/index', { images })
}

const form = async (req, res) => {
    if(req.params.id) {
        const image = await Images.findByPk(req.params.id)
        res.render('views/images/edit', { image })
    } else {
        res.render('views/images/create')
    }
}

const show = async (req, res) => {
    const image = await Images.findByPk(req.params.id)
    res.render('views/images/show', { image })
}

const create = async (req, res) => {
    const image = await Images.create(req.body)
    res.redirect('/images/' + image.id)

}

const update = async (req, res) => {
    const image = await Images.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.redirect('/images/' + req.params.id)
}

const remove = async (req, res) => {
    const images = await Images.destroy({
        where: {
            id: req.params.id
        }
    })
    res.redirect('/images/')
}

module.exports = { index, form, show, create, update, remove }