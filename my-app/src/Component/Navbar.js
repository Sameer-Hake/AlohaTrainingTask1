import React from 'react';
import './Navbar.css'; // Create this CSS file for styling
import logo from "../Resourses/ccon.png"
import NavigationBar2 from "./Navbar2"
const NavigationBar = () => {
  return (
    <>
  {/* Hello world */}
  <div className="navbar_container">
    <div className="nav_first">

      <div style={{ height: "30px"}}>
        <img
          src={logo}
          style={{ height:"100%", marginLeft: "20px", marginTop:"10px"}}
        />
      </div>

      <p style={{ color: "white", marginLeft: "8px",fontSize:15 }}>FARONICS DEPLOY</p>

      <div style={{marginLeft:"5px",width:"35px",height:"15px",borderRadius:"20px"}}> 
        <p style={{backgroundColor:"rgb(242, 95, 4)",fontSize:"12px", color:"white",textAlign:"center"}}>BETA</p>
      </div>
     
    </div>

    <div className="nav_second">
      <a
        href="#"
        className="to_ancher"
        style={{ color: "white", textDecoration: "none" }}
       >
        <i className="fas fa-download fa-sm" /> Download Agent
       
       </a>

      <a href="#" className="to_ancher" style={{ color: "white" }}>
       <i className="fas fa-th fa-sm" /> Control Grid
      </a>

      <a href="#" className="to_ancher" style={{ color: "white" }}>
        <i className="fas fa-chart-line fa-sm" /> Analytics
      </a>

      <a href="#" className="to_ancher" style={{ color: "white" }}>
      <i class="fa fa-thin fa-table-cells fa-sm" ></i> Tickets
      </a>

      <a href="#" className="to_ancher" style={{ color:"white" }}>
         <i class="fa fa-light fa-chevron-down" ></i>
        Aloha
      </a>

      <a href="#" className="to_ancher" style={{ color: "white" }}>
        <i className="fa-solid fa-moon fa-rotate-180 fa-xl" />
      </a>

      <a href="#" className="to_ancher" style={{ color: "white" }}>
         <i class="fa-solid fa-bell" ></i>
      </a>

      <a href="#" className="to_ancher" style={{ color: "white" }}>
      <i class="fa fa-solid fa-cloud-arrow-down" ></i>
      </a>
      
      <a href="#" className="to_ancher" style={{ color: "white" }}>
        <i class="fa-solid fa-circle-user"></i>
      </a>

    </div>
  </div>
  
  <NavigationBar2/>
</>

  );

};

export default NavigationBar;
