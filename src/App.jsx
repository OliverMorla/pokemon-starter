import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import "./App.css"
import "./Card.css"

export default function App(){
    return(
        <div className="container">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}
