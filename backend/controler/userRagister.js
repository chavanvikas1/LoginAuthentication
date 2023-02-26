const user=require('../model/user')
const bcrypt=require('bcryptjs')
const jwt =require("jsonwebtoken")
exports.ragisteruser=async(req,res)=>{
try {
    console.log(req.body);

    let {password} =req.body;
    const salt=await bcrypt.genSalt(10)
    password=await bcrypt.hash(password,salt)
    const result= await user.create({
        username:req.body.username,
        email:req.body.email,
        password
    })
    res.json({
        success:true,
        message:'ragister success',
        data:result


    })

} catch (error) {
    res.json({
        success:false,
        message:"something went wrong",
        error,
        data:null

    })
}
}

exports.userLogin=async(req,res)=>{
  try {
     const result = await user.findOne({email:req.body.email})
    console.log(result);
     if(!result){
        return res.status(400).json({
            success:false,
            message:"Email or Password Wrong",
            data:null
         })
     }

     let verify= await bcrypt.compare(req.body.password,result.password)
     if(!verify){
      return  res.status(404).json({
           success:false,
           message:"Email or Password Wrong",
           data:null
        })
    }

    let token = jwt.sign({id:result.id,userName:result.username},"vikas123")
    res.status(200).json({
        success:true,
        message:"Login successfully",
        data:token
    })
  } catch (error) {
    res.status(500).json({
        success:false,
        message:"something went wrong"+ error,
        data:null

    })
  }
}