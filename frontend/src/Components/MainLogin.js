import React from 'react'
import Buyerlogin from './Buyerlogin';
import Sellerlogin from './Sellerlogin';
import { useState } from 'react';
import { useHistory} from 'react-router';
import axios from 'axios'
export const MainLogin = (props) => {
    const history = useHistory();
   
    const [sform,setSform] = useState(false);
    const [bform,setBform] = useState(false);
    const setSLogin=()=>{
      var temp = sform;
      if(temp===false){
          setSform(true);
          setBform(false);
      }
    }
    const setBLogin=()=>{
      var temp = bform;
      if(temp===false){
          setSform(false);
          setBform(true);
      }
    }

     //BUYER//
     const [baccess,setBAccess] = useState("buyer");
  const [bfull,setBfull] = useState();
  const [buname,setBuname] = useState();
  const [bmob,setBmob] = useState();
  const [bemail,setBemail] = useState();
  const [bpassword,setBpassword] = useState();
  const [bhasAccount,setBHasAccount] = useState(true);
  const boginHandler=()=>{
    const buyer= { email : bemail,password : bpassword };
    if(buyer.email && buyer.password){
      axios.post("http://localhost:3001/blogin",buyer).then(res=>{

          alert(res.data.message)
          if(res.data.l==="yes"){
        history.push("/buyer");
        props.setBuyer(res.data.user);
        }
          
        
      })
    }
  }
  const bSignupHandler=()=>{
    const buyer= {full_name:bfull,
      username:buname,
      mobile:bmob,
      email:bemail,
      password:bpassword,
      access:baccess};
    if(buyer.full_name && buyer.email && buyer.username && buyer.mobile && buyer.password ){
    axios.post("http://localhost:3001/bregister",buyer).then( res => {
      alert(res.data.message)
      
    })
    }
    else{
      alert("Every Field is important");
    }
  }
//BUYER//

//SELLER//
  const [saccess,setSAccess] = useState("seller");
  const [sfull,setSfull] = useState();
  const [suname,setSuname] = useState();
  const [smob,setSmob] = useState();
  const [semail,setSemail] = useState();
  const [spassword,setSpassword] = useState();
  const [business,setBusiness] = useState();
  const [gst,setGst] = useState();
  const [city,setCity] = useState();
  const [image,setImage] = useState(null);
  const [shasAccount,setSHasAccount] = useState(true);
  
    
  const signupHandler=()=>{
    const seller= {full_name:sfull,
      username:suname,
      mobile:smob,
      email:semail,
      password:spassword,
      business:business,
      gst:gst,
      city:city,
      access:saccess,
      image:image};
    if(seller.full_name && seller.email && seller.username && seller.mobile && seller.password && seller.city){
    alert("Successfull");
    axios.post("http://localhost:3001/sregister",seller).then( res => {
      alert(res.data.message)
    })
    }
    else{
      alert("Every Field is important");
    }


  }
  
  const sloginHandler=()=>{
    const seller= { email : semail,password : spassword ,access:saccess};
    if(seller.email && seller.password){
      axios.post("http://localhost:3001/slogin",seller).then(res=>{

          alert(res.data.message)
          console.log(history);
          if(res.data.l==="yes"){
        history.push("/seller");
        props.setSeller(res.data.user);
        }
          
        
      })
    }
  }

  

  
//SELLER//


    return (
        <div>
            <section className="container">
        <div className="question">Are you a?</div>
      <div className = "slider">
            <button onClick={setSLogin}>Seller</button>
            <button onClick={setBLogin}>Buyer</button>
      </div>
      {
              (sform===false && bform===false)?null:
                
                (sform===true && bform===false)?
                <div><Sellerlogin 
                full={sfull}
                setFull={setSfull}
                uname={suname}
                setUname = {setSuname}
                mob = {smob}
                setMob = {setSmob}
                email = {semail}
                setEmail = {setSemail}
                password = {spassword}
                setPassword = {setSpassword}
                business = {business}
                setBusiness={setBusiness}
                gst = {gst}
                setGst = {setGst}
                city={city}
                setCity={setCity}
                hasAccount={shasAccount}
                setHasAccount={setSHasAccount}
                sloginHandler={sloginHandler}
                signupHandler={signupHandler}
                /></div>:
                <div><Buyerlogin
                bfull={bfull}
                setBfull={setBfull}
                buname={buname}
                setBuname={setBuname}
                bmob={bmob}
                setBmob={setBmob}
                bemail={bemail}
                setBemail={setBemail}
                bpassword={bpassword}
                setBpassword={setBpassword}
                bhasAccount={bhasAccount}
                setBHasAccount={setBHasAccount}
                boginHandler={boginHandler}
                bSignupHandler={bSignupHandler}
                /></div>}
      </section>
        </div>
    )
}

export default MainLogin;