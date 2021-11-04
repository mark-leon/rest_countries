import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import {ThemeContext} from '../Context/Themecontext';
import "./Card.css";


const Card = (props) => {
    const {theme,toggle,dark} = useContext(ThemeContext)
    return (
            <div className="col-lg-3 col-md-6">
                <div className="card">
                
                 <img className="card-img-top" src={props.src} />

                    <div className="card-block"  style={{backgroundColor: theme.backgroundColor,color: theme.color}}>
                        <h4 className="card-title"><Link to={`/${props.name}`}>{props.name}</Link></h4>
                        <div className="card-title">
                            <h5>{props.city}</h5>
                        </div>
                        <div className="card-text">
                            <p><b>Population</b>  :  {props.population}</p>
                            <p><b>Region</b>  :  {props.region}</p>
                            <p><b>Capital</b>  :   {props.capital}</p>
                        </div>
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