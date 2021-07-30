import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router'
import axios from 'axios';
export const SellerPage = (props) => {
    const [image,setImage] = useState();

    const history = useHistory();
    const logoutHandler=()=>{
            history.push('/');
    }
    const photoAddHandler=()=>{
        alert("Handler");
        
        const seller={email:props.s.email,image:image};
        alert(seller.email);
        if(seller.email){
            alert("andar")
            axios.post("http://localhost:3001/add",seller).then(res=>{
                alert(res.data.message);
                alert(res.data.img);
               // history.push('/seller');
            })
        }
        
    }
    return (
        <div className="slrpge">

            <h1>Hey {props.s.full_name}!</h1>
            <div>
                <h2>Want to serve something hot?</h2>
            <form className="image-up" enctype="multipart/form-data">
            <label  for="img">Select Image</label>
            <input type="file" id="img" name="img" accept="image/*" onChange={(e)=>{setImage(e.target.file)}} />
            <br/>
            <button onClick={photoAddHandler}>Submit</button>
            </form>
            </div>
            <button onClick={logoutHandler}>Logout</button>
           
        </div>
    )
}
