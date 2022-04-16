const { Report,Transaction,User,Item,Company} = require('../models/index')


const getReport = async (req,res,next) => {
    try {
        const result = await Report.findAll({
            include: [
                {
                    model: Item,
                    
                },
                {
                    model: Company,
                  
                },
                {
                    model: User,
                  
                },
                {
                    model: Transaction,
                  
                }
            ]
        })

        res.status(200).json(result)
        
    } catch (error) {
        next(err)
    }
}



const getReportId = async (req,res,next) => {
    try {
        const { id } = req.params
        const result = await Report.findByPk(id,{
            include: [
                {
                    model: Item,
                    
                },
                {
                    model: Company,
                  
                },
                {
                    model: User,
                  
                },
                {
                    model: Transaction,
                  
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





module.exports = {getReport,getReportId}