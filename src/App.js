
import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ThemeContext } from './Components/Context/Themecontext';
import Countrydetails from './Components/Countrydetails/Countrydetails';
import Homepage from './Pages/Homepage/Homepage';


function App() {
  
  const {theme,toggle,dark} = useContext(ThemeContext)
  
  return (
<div className = "App" style={{ backgroundColor: theme.backgroundColor,
 color: theme.color}}>   
  <Router>
    <Switch>
      <Route exact path="/">
        <Homepage></Homepage>
      </Route>
      <Route exact path="/:name">
        <Countrydetails></Countrydetails>
      </Route>
    </Switch>
    </Router>   
    </div>
  );
}

export default App;
       









 {/* {countries.map((c)=>{
        return <img src ={c["flags"]["png"]}/>;
      })} */}
       {/* {countries.map((c)=>{
        return <p>{c["capital"]}</p>;
      })} */}
      {/* {countries.map((country)=>{
        return <Card country = {country}/>;
      })} */}

 //console.log(typeof(countries[0].capital))
  //console.log(countries.flags.png)
  //console.log(countries[0].name.common)
  //console.log(countries[0].capital)
   {/* <Card></Card>
      {countries.map((c)=>{
        return <p>{c["name"]["common"]}</p>;
      })} */}