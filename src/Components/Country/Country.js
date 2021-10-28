import React from 'react'
import Navbar from '../Navbar/Navbar'
import {useHistory} from "react-router-dom"

const Country = (props) => {
    let history = useHistory();
    function handleClick() {
        history.push("/");
     }
    return (
            <div>
                <Navbar></Navbar>
                
                <button type="button" className="btn btn-default btn-lg" onClick={handleClick}>
                <i className="fas fa-arrow-right"></i>Go back</button>
                <div className="container" style={{marginTop:"150px"}}> 
                <div className="row">
                    <div className="col-lg-6 ">
                        <img src={props.src} style={{height:"250px"}}/>
                    </div>
                    <div className="col">
                        <h1>{props.name}</h1>
                        <p><b>Native Name</b>  :  {props.native_name}</p>
                        <p><b>Population</b>  :  {props.population}</p>
                        <p><b>Region</b>  :  {props.region}</p>
                        <p><b>Sub region</b>  :  {props.subregion}</p>
                        <p><b>Capital</b>  :   {props.capital}</p>
                    </div>
                    <div className="col" >
                        <p><b>Top Level Domain</b>  :  {props.topLevelDomain}</p>
                        <p><b>Currencies</b>  : { props.currencies}</p>
                        <p><b>Languages</b>  :   {}</p>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Country


//style={{marginTop:"100px"}}
//style={{textAlign:"center"}}
//style={{marginTop:"48px"}}
//style={{height:"300px"}}