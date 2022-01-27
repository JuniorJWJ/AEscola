const Auth = require('../models/Auth')

module.exports = {
    async create(req, res) {
        const { login, password, confirmPassword } = req.body

        const auth = {
            login,
            password
        }

        console.log(auth)

        try {
            await Auth.create(auth)

            res.status(201).json({ message: 'Auth inserido no sistema com sucesso' })
        } catch (error) {
            res.status(500).json({ error: error })
        }
    },
    async read(req, res) {
        console.log("eapois")
        try {
            const auth = await Auth.find()

            res.status(200).json(auth)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    },
    async update(req, res) {
        const id = req.params.id
        const { login, password, confirmPassword } = req.body

        const auth = {
            login,
            password
        }
        try {
            console.log("entrou")
            const updatedAuth = await Auth.updateOne({ _id: id }, auth)
            console.log(updatedAuth)

            if (updatedAuth.matchedCount === 0) {
                res.status(422).json({ message: 'Auth not found' })
                return
            }
            console.log(auth)
            await Auth.updateOne({ _id: id }, auth)
            res.status(200).json(auth)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    },
    async delete(req, res) {
        const id = req.params.id

        const auth = await Auth.findOne({ _id: id })

        if (!auth) {
            res.status(422).json({ message: 'Auth not found' })
            return
        }

        try {
            await Auth.deleteOne({ _id: id })
            res.status(200).json({ message: 'Auth deleted' })
        } catch (error) {
            res.status()
        }
    }
}