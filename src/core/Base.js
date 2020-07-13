import React, { Children } from 'react'

 const Base =({
title="My Title",
description="My description",
className="bg-dark text-white p-4",
children
 })  => (


     <div className ="container-fluid">  
     <div classname= "jumbotron  bg-dark text-white text-center"> 
     <h2  classname="display-4">My Title</h2>
     <p classname="lead">My description </p></div>     

<div className={className}>{Children}</div>

     <footer classname="footer bg-dark mt-auto py-3">
         <h2>If you got any questions feel free to reach out</h2>
         <btn className="btn btn-warning btn-lg bg-success text-white text-center ">Contact us</btn>
         <div classname="container-fluid">
             <h2 className="display-4"> {title}</h2>
             <p className="lead">{description}</p>
             <span className ="text-muted">
             A Tshirt selling website
             </span>
             <div>

             </div>
         </div>
     </footer>

     </div>
 )
 
export default function Base;