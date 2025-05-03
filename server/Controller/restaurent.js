const Restaurent = require('../Models/restaurent');


module.exports.get = async (req,res)=>{
    try {
        const result = await Restaurent.find();
        res.status(200).json({message: "fetched Rstaurent Succesfully", success:true, result })
    } catch (error) {
        console.log({message: "Internal Server Error ", success: "false"})
    }
}

module.exports.add = async (req,res)=>{
    try {
        const {name, status} = req.body;
        const Rest = await Restaurent.create({name, status});
        res.status(201).json({message:"Resturent Created Succefully", Rest})
    } catch (error) {
        console.log({message: "Internal Server Error ", success: "false"})
    }
}