const { Company} = require('../models/index')


const getCompany = async (req,res,next) => {
    try {
        const result = await Company.findAll()

        res.status(200).json(result)
        
    } catch (error) {
        next(err)
    }
}



const getCompanyId = async (req,res,next) => {
    try {
        const { id } = req.params
        const result = await Company.findByPk(id)
    if (!result) {
        throw { name: "notFound"}
    }
        res.status(200).json(result)
        
    } catch (err) {
        next(err)
    }
}

const addCompany = async (req,res,next) => {
    try {
        
        
        const { name } = req.body
        const result = await Company.create({name})
       
        res.status(201).json(result)

    } catch (err) {
        next(err)
    }
}



const editCompany = async (req,res,next) => {
    try {
        
        const { id } = req.params
        const { name} = req.body
       
        const findCompany = await Company.findByPk(id)
        if (!findCompany) {
            throw { name: "notFound"}
        } 
      
        const result = await Company.update({
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

const deleteCompany = async (req,res,next) => {
    try {
        const {id} = req.params
        const findCompany= await Company.findByPk(id)

        const result = await Company.destroy({
            where:{id}
        })
        res.status(200).json({msg:`id${findCompany.id} success deleted`})
   } catch (error) {
       next(error)
   }
}




module.exports = {getCompany,getCompanyId,addCompany,deleteCompany,editCompany}