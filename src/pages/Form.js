import React from "react";
import RecipeForm from "../components/RecipeForm"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Form(){ 
    return(
        <div>
            <Navbar/>
            <RecipeForm/>
            <Footer/>
        </div>
    )
    
}
export default Form;