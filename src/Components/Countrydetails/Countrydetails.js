import React from 'react'
import {useParams} from "react-router-dom"
import axios from 'axios';
import {useState,useEffect}  from 'react';
import Country from '../Country/Country';
const Countrydetails = () => {
    const {name} = useParams()
    const [country,setCountry] = useState([]);
    useEffect(() => {
        axios.get(`https://restcountries.com/v2/name/${name.toLowerCase()}`)
        .then(res => {
          setCountry(res.data)

        })
        .catch(error => console.log(error));
      }, []);
     return (
        <div>
      {country.map((c)=>{
        return <Country src={c["flags"]["png"]}
                        name ={c["name"]}
                        native_name = {c["nativeName"]}
                        population ={c["population"]} 
                        region = {c["region"]}
                        subregion = {c["subregion"]}
                        capital = {c["capital"]}
                        topLevelDomain={c["topLevelDomain"]}
                        currencies={c["currencies"]["name"]}>
                </Country>
      })}
        </div>
    )
}

export default Countrydetails


































// import React from "react"
// import {useParams} from "react-router-dom"
// import productsData from "./productsData"

// function ProductDetail() {
//     const {productId} = useParams()
//     const thisProduct = productsData.find(prod => prod.id === productId)
    
    // return (
    //     <div>
    //         <h1>{thisProduct.name}</h1>
    //         <p>Price: ${thisProduct.price}</p>
    //         <p>{thisProduct.description}</p>
    //     </div>
    // )
// }

//