import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import '../App.css';
import app from "../firebase";
import UpdateProfile from "./UpdateProfile";
import NavBar from "./NavBar";

export default function Profile () {
  const { currentUser, logout } = useAuth();

  return (
    <>
      <NavBar page="profile"/>

      <div className="text-center mt-10 text-neutral">
          <h2 className="mb-4 text-3xl">Profile</h2>
          <strong>Email:</strong> {currentUser.email} <br />
          <UpdateProfile/>
      </div>
    </>
  )
}