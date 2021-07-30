const express = require('express');
const cors =  require('cors');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const multer = require('multer');

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(express.static(path.join(__dirname,'/public')))

const router = express.Router();

mongoose.connect('mongodb://localhost:27017/cookiePolicyDB', {useNewUrlParser: true, useUnifiedTopology:true},()=>{
    console.log("Backend");
});

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./Backend/public/uploads")
    },
        filename:(req,file,cb)=>{
            cb(null,file.originalname);
        }
    
})

const upload = multer({storage:storage});




const sellerSchema = new mongoose.Schema({
    full_name : String,
    username : String,
    mobile: String,
    email : String,
    password : String,
    business : String,
    gst : String,
    city : String,
    access : String,
    image : String
})

const Seller = new mongoose.model('Seller',sellerSchema);



app.patch("/add/:image",upload.single("image"),(req,res)=>{
    const{email} = req.body;
    console.log("andar");
    Seller.findOneAndUpdate({email:email},(err,suser)=>{
        console.log("andar");
        if(suser){
            image = req.body.image;
            res.send({message:"Photo Uploaded",img:suser.image});
        }
    })
})



  app.post("/blogin",(req,res)=>{
    const {email,password} = req.body;
        Seller.findOne({email:email},(err,suser)=>{
            if(suser){
                    if(suser.password===password){
                        res.send({message:"Login Succesful",user : suser,l:"yes" })
                    }
                    else{
                        res.send({message:"Wrong Password",l:"no"})
                    }
            }
            else{
                res.send({message:"User not found",l:"no"})
            }
        })
  })
  app.post("/bregister",(req,res)=>{
    const {full_name,username,mobile,email,password,access} = req.body;
     

      Seller.findOne({email:email,username:username},(err,suser)=>{
          console.log("Khoj rahe")
          console.log(suser)
          if(suser){
            console.log("Already hai")
            res.send({message: "User already registerd",l:"no"})
          }
          else{
            const suser = new Seller({full_name,username,mobile,email,password,access})
              suser.save(err=>{
                
                if(err){
                    res.send(err);
                    console.log("save nahi hua")
                    console.log({err,l:"no"});
                }
                else{
                    res.send( { message: "Successfully Registered",suser : suser,l:"yes"})
                    console.log("save kr liye")
                }
            })
            
            
          }
      })
      
    
  })

  app.post("/slogin",(req,res)=>{
        const {email,password} = req.body;
        Seller.findOne({email:email},(err,suser)=>{
            if(suser){
                    if(suser.password===password){
                        res.send({message:"Login Succesful",user : suser,l:"yes" })
                    }
                    else{
                        res.send({message:"Wrong Password",l:"no"})
                    }
            }
            else{
                res.send({message:"User not found",l:"no"})
            }
        })
  })

  app.post("/sregister",(req,res)=>{
      const {full_name,username,mobile,email,password,business,gst,city,access,image} = req.body;
     

      Seller.findOne({email:email,username:username},(err,suser)=>{
          console.log("Khoj rahe")
          console.log(suser)
          if(suser){
            console.log("Already hai")
            res.send({message: "User already registerd"})
          }
          else{
            const suser = new Seller({full_name,username,mobile,email,password,business,gst,city,access,image})
              suser.save(err=>{
                
                if(err){
                    res.send(err);
                    console.log("save nahi hua")
                    console.log(err);
                }
                else{
                    res.send( { message: "Successfully Registered",suser : suser})
                    console.log("save kr liye")
                }
            })
            
            
          }
      })
      
  
  })




app.listen(3001,()=>{
    console.log("App is started at 3001");
})