import { Component } from "react";
import { 
    Link
 } from "react-router-dom";

 class NavBar extends Component{
     render(){
         return (<div className="">
         <nav>
             <ul>
                 <li>
                     <Link to="/">Home</Link>
                 </li>
                 <li>
                     <Link to="/login">Login</Link>
                 </li>
             </ul>
         </nav>
     </div>);
     }
 }

 export default NavBar;