import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import app from "../firebase";
import Subjects from "./Subjects";
import NavBar from "./NavBar";

export default function Learn () {

  return (
    <>
      <NavBar page="learn"/>
        
      <Subjects/>
    </>
  )
}