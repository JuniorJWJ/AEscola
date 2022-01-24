const Colegio = require('../models/Colegio')

module.exports = {
    async get (req, res){
        try{
            const colegio = await Colegio.find()
            
            res.status(200).json(colegio)
        }catch (error){
            res.status(500).json({error: error})
        }
    },
    async create (req, res){
        const { nome, id_colegio_turma, id_colegio_comentario, id_colegio_foto, email, localização } = req.body
    
        const colegio = {
            nome,
            id_colegio_turma,
            id_colegio_comentario,
            id_colegio_foto,
            email,
            localização
        }

        console.log(colegio)

        try {
            await Colegio.create(colegio)
    
            res.status(201).json({message: 'Colégio inserido no sistema com sucesso'})
        } catch (error) {
            res.status(500).json({error: error})
        }
    },
    async update(req, res){
        const id = req.params.id

        const { nome, id_colegio_turma, id_colegio_comentario, id_colegio_foto, email, localização } = req.body
    
        const colegio = {
            nome,
            id_colegio_turma,
            id_colegio_comentario,
            id_colegio_foto,
            email,
            localização
        } 
        try {
            console.log("entrou")
            const updatedColegio = await Colegio.updateOne({_id: id}, colegio)
            console.log(updatedColegio)

            if (updatedColegio.matchedCount === 0){
                res.status(422).json({ message: 'Colégio not found'})
                return     
            }
            console.log(colegio)
            await Colegio.updateOne({_id: id}, colegio)
            res.status(200).json(colegio)
        } catch (error) {
            res.status(500).json({ error: error})
        }
    },
    async delete(req, res) {
        const id = req.params.id

        const colegio = await Colegio.findOne({ _id : id})

        if(!colegio){
            res.status(422).json({ message: 'colegio not found'})
            return
        }

        try {
            await Colegio.deleteOne({ _id: id})
            res.status(200).json({message:'Colegio deleted'})
        } catch (error) {
            res.status()
        }
    }
}