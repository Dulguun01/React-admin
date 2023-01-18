import { SlPlus} from "react-icons/sl";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';



export default function ContentTitle ({title,button,handleShow}){
  
    return(

      
        <>
        <div className="d-flex justify-content-between">
                <div>
                <h1>{title}</h1>
                </div>
                <div>
                <Button variant="primary" size="sm" onClick={handleShow}> {button}  <SlPlus /></Button>
                </div>
        </div>
    
      </>
      
      
    )
}