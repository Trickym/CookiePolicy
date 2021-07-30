import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Buyerlogin from './Components/Buyerlogin';
import Sellerlogin from './Components/Sellerlogin';
import { SellerPage } from './Components/SellerPage';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { MainLogin } from './Components/MainLogin';
import {BuyerPage} from './Components/BuyerPage';
function App() {
  const [s,setSeller] = useState({});
  const [b,setBuyer] = useState({});
  const [img,setImg] = useState();
    return (
     <Router>
       <div className="App">
        <Switch>
          <Route exact path='/'>
          <MainLogin s={s} setSeller={setSeller} b={b} setBuyer={setBuyer}/>
          </Route>
          <Route path='/seller'>
            {s && s._id?<SellerPage s={s} setImg={setImg} />:<MainLogin s={s} setSeller={setSeller} b={b} setBuyer={setBuyer}/>}
            </Route>
          <Route path='/buyer'>
            {b && b._id?<BuyerPage b={b}/>:<MainLogin s={s} setSeller={setSeller} b={b} setBuyer={setBuyer}/>}
          </Route>
        </Switch>
        </div>
        </Router>
  );
}

export default App;
