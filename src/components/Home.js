import React from 'react'
import "../css/Home.css"
import Home1 from "../assets/home1.png";
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const handleLoginClick = ()=>{
    navigate('/login');
  }
  return (
    <div className='mc'>
      <div class="content-first">
        <h1>Pose AI<br /><span>Yoga</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque voluptatibus nobis reprehenderit cupiditate alias incidunt commodi soluta, repellat quo nemo dolorem porro exercitationem, iusto blanditiis perspiciatis, earum deserunt dolorum voluptates ipsam consequuntur molestias sapiente obcaecati repellendus! Rerum fugiat iusto doloribus quasi veniam cupiditate, accusantium, delectus facere aperiam dolores expedita veritatis?</p>
        <button type="button" class="btn btn-dark rounded-pill" onClick={handleLoginClick} >Try Now</button>
      </div>
      <div className="content-first">
        <img src={Home1} alt="img" />
      </div>
    </div>
  )
}

export default Home