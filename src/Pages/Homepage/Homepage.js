import axios from 'axios';
import React, {useState,useEffect}  from 'react';
import Card from '../../Components/Card/Card';
import Navbar from '../../Components/Navbar/Navbar';


function Homepage() {
  const [countries,setCountries] = useState([]);
  const [search,setSearch] = useState('');
  
  
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
    .then(res => {
      setCountries(res.data)
      //console.log(res.data)
    })
    .catch(error => console.log(error));
  }, []);
  
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <div className="row">
      {countries.map((c)=>{
        return <Card city ={c["capital"]} src={c["flags"]["png"]} name ={c["name"]["common"]}></Card>
      })}
         </div>
      </div>

    </div>
  );
}

export default Homepage;