import React from 'react'


export const sellerlogin = (props) => {
    const{full,setFull,uname,setUname,mob,setMob,email,setEmail,password,setPassword,business,setBusiness,gst,setGst,city,setCity,hasAccount,setHasAccount,sloginHandler,signupHandler} = props;
    
    return (
        <div>
            <section className="seller">
            
                {hasAccount?
                <div className="slogin">
                    <div className="h">Seller Login</div>

                    <div className="elem">
                    <label>Email Address</label>
                    <input type="email" autoFocus required value={email} onChange={e=>{setEmail(e.target.value)}}/></div>
                
                <div className="elem">
                <label>Password</label>
                <input type="password" autoFocus required value={password} onChange={e=>{setPassword(e.target.value)}}/></div>
                
                <div className="elem">
                <button onClick={sloginHandler}>Login</button>
                <p>New here?<span onClick={()=>{setHasAccount(!hasAccount)}}> Sign Up</span></p></div>
                
                </div>:

                <div className="signup">
                    <div className="h">Seller Signup</div>

                    <div className="elem">
                    <label>Full Name</label>
                    <input type="text" autoFocus required value={full} onChange={e=>{setFull(e.target.value)}}/></div>
                
                <div className="elem">
                <label>Username</label>
                <input type="text" autoFocus required value={uname} onChange={e=>{setUname(e.target.value)}}/></div>
                
                <div className="elem">
                <label>Mobile</label>
                <input type="number" autoFocus required value={mob} onChange={e=>{setMob(e.target.value)}}/></div>


                <div className="elem">
                <label>Email Address</label>
                <input type="email" autoFocus required value={email} onChange={e=>{setEmail(e.target.value)}}/></div>
                
                <div className="elem">
                <label>Password</label>
                <input type="password" autoFocus required value={password} onChange={e=>{setPassword(e.target.value)}}/></div>


                <div className="elem">
                <label>Business Name</label>
                <input type="text" autoFocus value={business} onChange={e=>{setBusiness(e.target.value)}}/></div>
                
                <div className="elem">
                <label>GSTIN</label>
                <input type="text" autoFocus  value={gst} onChange={e=>{setGst(e.target.value)}}/></div>
                
                <div className="elem">
                <label>City</label>
                <input type="text" autoFocus required value={city} onChange={e=>{setCity(e.target.value)}}/></div>
                
                <div className="elem">
                <button onClick={signupHandler}>Signup</button>
                <p>Already have an account?<span onClick={()=>{setHasAccount(!hasAccount)}}> Login</span></p></div>
                </div>}
            
        </section>
        </div>
    )
}

export default sellerlogin;