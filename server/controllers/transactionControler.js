const { Transaction,User,Item,Company} = require('../models/index')


const getTransaction = async (req,res,next) => {
    try {
        const result = await Transaction.findAll({
            include: [
                {
                    model: Item,
                    
                },
                {
                    model: Company,
                  
                },
                {
                    model: User,
                  
                }
            ]
        })

        res.status(200).json(result)
        
    } catch (error) {
        next(err)
    }
}



const getTransactionId = async (req,res,next) => {
    try {
        const { id } = req.params
        const result = await Transaction.findByPk(id,{
            include: [
                {
                    model: Item,
                    
                },
                {
                    model: Company,
                  
                },
                {
                    model: User,
                  
                }
            ]
        }
    )
    if (!result) {
        throw { name: "notFound"}
    }
        res.status(200).json(result)
        
    } catch (err) {
        next(err)
    }
}

const addTransaction = async (req,res,next) => {
    try {
        const UserId = req.user.id
        
        const { name,total,date,file,ItemId,CompanyId } = req.body
        const result = await Transaction.create({name,total,date,file,UserId,ItemId,CompanyId})
       
        res.status(201).json(result)

    } catch (err) {
        next(err)
    }
}



const editTransaction = async (req,res,next) => {
    try {
        
        const { id } = req.params
        const { name,total,date,file,ItemId,CompanyId} = req.body
        const UserId = req.user.id
        const findTransaction = await Transaction.findByPk(id)
        if (!findTransaction) {
            throw { name: "notFound"}
        } 
      
        const result = await Transaction.update({
            name,total,date,file,ItemId,CompanyId,UserId
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

const deleteTransaction = async (req,res,next) => {
    try {
        const {id} = req.params
        const findTransaction= await Transaction.findByPk(id)

        const result = await Transaction.destroy({
            where:{id}
        })
        res.status(200).json({msg:`id${findTransaction.id} success deleted`})
   } catch (error) {
       next(error)
   }
}




module.exports = {getTransaction,getTransactionId,addTransaction,deleteTransaction,editTransaction}