import React, {useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import "./Card.css";


const Card = (props) => {
    return (
            <div className="col-lg-3 col-md-6">
                <div className="card">
                
                 <img className="card-img-top" src={props.src} />

                    <div className="card-block">
                        <h4 className="card-title"><Link to={`/${props.name}`}>{props.name}</Link></h4>
                        <div className="card-title">
                            <h5>{props.city}</h5>
                        </div>
                        <div className="card-text">
                            Tawshif is a web designer living in Bangladesh.
                        </div>
                    </div>
                    <div className="card-footer">
                        <span className="float-right">Joined in 2013</span>
                        <span><i className=""></i>75 Friends</span>
                    </div>
                </div>
            </div>
         
    )
}

export default Card























































































  // const [country,setCountry] = useState([]);  
        
        // useEffect(() => {
        // async function getdata() {
        //     const res = await axios.get(`https://restcountries.com/v2/name/${props.name.toLowerCase()}`)
        //     console.log(res.data);
        //     setCountry(res.data.name)
        // }
        // getdata()
        // }, []);
        
    //    function twist()
    //     {country.map((c)=>{
    //         return <Countrydetails city ={c["capital"]} ></Countrydetails>;
    //     })} 
    // function twist(){
    //   <h1>{country}</h1>
    // }
        // let history = useHistory();
        // function handleClick() {
        //     history.push("/home");
        // }