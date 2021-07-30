import React from 'react'
import { useHistory } from 'react-router';
export const BuyerPage = (props) => {
    const history = useHistory();
    const logoutHandler=()=>{
            history.push('/');
    }
    console.log(props.b);
    return (
        <div>
        <div className="user-info">
            <h1>Hey {props.b.full_name}! </h1>
            <h2> Would you like to buy some delicious cookies? Let's Go!</h2>
            <button>Marketplace</button>
        </div>
        <button onClick={logoutHandler}>Logout</button>
        </div>
    )
}
