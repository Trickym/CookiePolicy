import React from 'react'

export const buyerlogin = (props) => {
    const{bfull,setBfull,buname,setBuname,bmob,setBmob,bemail,setBemail,bpassword,setBpassword,bhasAccount,setBHasAccount,boginHandler,bSignupHandler} = props;
    return (
        <section className="buyer">
            {
                bhasAccount?

                <div className="bogin">
                    <div className="h">Buyer Login</div>
                    <div className="elem">
                    <label>Email Address</label>
                    <input type="email" autoFocus required value={bemail} onChange={e=>{setBemail(e.target.value)}}/></div>

                    <div className="elem">               
                    <label>Password</label>
                    <input type="password" autoFocus required value={bpassword} onChange={e=>{setBpassword(e.target.value)}}/></div> 


                    <div className="elem">
                    <button onClick={boginHandler}>Login</button>
                    <p>Don't have an account?<span onClick={()=>{setBHasAccount(!bhasAccount)}}> Sign up</span></p></div>
                    
                </div> :

                <div className="bsignup">
                
                <div className="h">Buyer Signup</div>
                <div className="elem">
                <label>Full Name</label>
                <input type="text" autoFocus required value={bfull} onChange={e=>{setBfull(e.target.value)}}/>
                </div>
                <div className="elem">
                <label>Username</label>
                <input type="text" autoFocus required value={buname} onChange={e=>{setBuname(e.target.value)}}/>
                </div>

                <div className="elem">
                <label>Mobile</label>
                <input type="number" autoFocus required value={bmob} onChange={e=>{setBmob(e.target.value)}}/>
                </div>

                <div className="elem">
                <label>Email Address</label>
                <input type="email" autoFocus required value={bemail} onChange={e=>{setBemail(e.target.value)}}/>
                </div>

                <div className="elem">
                <label>Password</label>
                <input type="password" autoFocus required value={bpassword} onChange={e=>{setBpassword(e.target.value)}}/>
                </div>

                <div className="elem">
                <button onClick={bSignupHandler}>Signup</button>
                <p>Already have an account?<span onClick={()=>{setBHasAccount(!bhasAccount)}}> Login</span></p></div>
                
                </div>

            }
            
        </section>
    )
}

export default buyerlogin;
