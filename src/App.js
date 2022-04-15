import React from "react";
// import { useState } from "react";
import './style.css';
import Header from "./components/Header";
import Form from "./components/Form";

export default function App(props) {
    return(
        <main>
            <div>
                <Header />
                <Form />
            </div>
        </main>
    );
};