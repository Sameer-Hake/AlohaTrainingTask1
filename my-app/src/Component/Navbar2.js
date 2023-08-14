import React, { Fragment }  from "react"
import "./Navbar2.css";
const NavigationBar2=()=>{
    return ( 
     <Fragment>
        <div className="navbar_second_container">
        <a href="#" className="ancher">
          <p className="item">Dashboard</p>
        </a>

        <a href="#" className="ancher">
          <p className="item" >Application</p>
        </a>

        <a href="#" className="ancher">
          <p className="item" >Windows Updates</p>
        </a>

        <a href="#" className="ancher">
          <p className="item">OS Deployment</p>
        </a>

        <a href="#" className="ancher">
          <p className="item">MDM</p>
        </a>

        <a href="#" className="ancher trial">
          <p className="item" >Anti-Virus</p>
          <div style={{ marginLeft: "5px", width: "35px", height: "14px", borderRadius: "20px" }}>
             <p style={{ backgroundColor: "rgb(7, 202, 236)", fontSize: "11px", color: "white",textAlign:"center"}}>TRIAL</p>
          </div>

        </a>

        <a href="#" className="ancher">
          <p className="item" >Inventry</p>
        </a>

        <a href="#" className="ancher">
          <p className="item" >Policies</p>
        </a>

      </div>
      <hr className="horizantal_line" style={{ margin: "12px  0"}}></hr>
      </Fragment>
    );
}
export default  NavigationBar2;

