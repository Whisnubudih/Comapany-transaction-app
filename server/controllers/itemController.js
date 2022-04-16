const { Item} = require('../models/index')


const getItem = async (req,res,next) => {
    try {
        const result = await Item.findAll()

        res.status(200).json(result)
        
    } catch (error) {
        next(err)
    }
}



const getItemId = async (req,res,next) => {
    try {
        const { id } = req.params
        const result = await Item.findByPk(id)
    if (!result) {
        throw { name: "notFound"}
    }
        res.status(200).json(result)
        
    } catch (err) {
        next(err)
    }
}

const addItem = async (req,res,next) => {
    try {
        
        const { name } = req.body
        const result = await Item.create({name})
       
        res.status(201).json(result)

    } catch (err) {
        next(err)
    }
}



const editItem = async (req,res,next) => {
    try {
        
        const { id } = req.params
        const { name} = req.body
       
        const findItem = await Item.findByPk(id)
        if (!findItem) {
            throw { name: "notFound"}
        } 
      
        const result = await Item.update({
            name
        },
        {
            where: {id},
            returning: true
        })
    
        res.status(201).json(result[1][0])
    } catch (err) {
        next(err)
    }
}

const deleteItem = async (req,res,next) => {
    try {
        const {id} = req.params
        const findItem= await Item.findByPk(id)

        const result = await Item.destroy({
            where:{id}
        })
        res.status(200).json({msg:`id${findItem.id} success deleted`})
   } catch (error) {
       next(error)
   }
}




module.exports = {getItem,getItemId,addItem,deleteItem,editItem}