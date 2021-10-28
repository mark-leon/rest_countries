import axios from 'axios';
import React, {useState,useEffect}  from 'react';
import Card from '../../Components/Card/Card';
import Navbar from '../../Components/Navbar/Navbar';
import Pagination from '../../Components/Pagination/Pagination';


function Homepage() {
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
  
  const indexOfLastPost = currentpage*postsPerPage;
  const indexOfFirstPost  = indexOfLastPost - postsPerPage;
  const currentPosts = countries.slice(indexOfFirstPost,indexOfLastPost)
  

  const paginate = pageNumber => setCurrentpage(pageNumber);
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <div className="row">
      {currentPosts.map((c)=>{
        return <Card city ={c["capital"]} src={c["flags"]["png"]} name ={c["name"]["common"]}></Card>
      })}
         </div>
         <Pagination postsPerPage = {postsPerPage} totalPosts = {countries.length} paginate = {paginate}></Pagination>
      </div>
      

    </div>
  );
}

export default Homepage;