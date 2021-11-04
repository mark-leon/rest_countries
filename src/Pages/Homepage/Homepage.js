import axios from 'axios';
import React, {useState,useEffect}  from 'react';
import { useParams } from 'react-router';
import Card from '../../Components/Card/Card';
import Navbar from '../../Components/Navbar/Navbar';
import Pagination from '../../Components/Pagination/Pagination';


function Homepage() {
  const {region} = useParams() 
  const [countries,setCountries] = useState([]);
  const [currentpage,setCurrentpage] = useState(1)
  const [postsPerPage] = useState(8);
  
  
  useEffect(() => {
    const fetchCountries = async () =>{
      const res = await axios.get('https://restcountries.com/v3.1/all')
      setCountries(res.data)
    };
    fetchCountries();
  },[]);
  var result = countries.filter(reg => reg.region === region);
  const indexOfLastPost = currentpage*postsPerPage;
  const indexOfFirstPost  = indexOfLastPost - postsPerPage;
  const currentPosts = (result.length > 0)? result.slice(indexOfFirstPost,indexOfLastPost) :countries.slice(indexOfFirstPost,indexOfLastPost)
  

  const paginate = pageNumber => setCurrentpage(pageNumber);
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <div className="row">
      {currentPosts.map((c)=>{
        return <Card city ={c["capital"]} src={c["flags"]["png"]} name ={c["name"]["common"]} population ={c["population"]} region = {c["region"]} capital = {c["capital"]}></Card>
      })}
         </div>
         <Pagination postsPerPage = {postsPerPage} totalPosts = {result.length > 0 ? result.length :countries.length} paginate = {paginate}></Pagination>
      </div>
      

    </div>
  );
}

export default Homepage;