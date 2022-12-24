import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import '../App.css';
import NavBar from "./NavBar";

export default function Dashboard() {


  return (
    <>
      <NavBar page="dashboard"/>

      <h1 className="text-neutral text-center text-xl mt-10">Welcome to <span className="text-primary font-semibold">Gesture!</span></h1>

      {/* Tablets to Desktop Stats */}
      <div class="w-11/12 shadow stats border mt-4 hidden mx-auto md:flex">
        <div class="stat place-items-center place-content-center bg-neutral-content">
          <div class="stat-title text-black font-semibold">Categories Completed</div> 
          <div class="stat-value text-primary">10</div> 
          <div class="stat-desc text-primary font-semibold w-2/5 text-center">out of 30 <br/>
            <progress class="progress progress-primary" value="10" max="30"></progress>
          </div>
        </div> 
        <div class="stat place-items-center place-content-center bg-neutral-content">
          <div class="stat-title text-black font-semibold">Lessons Completed</div> 
          <div class="stat-value text-success">35</div> 
          <div class="stat-desc text-success font-semibold w-2/5 text-center">out of 100 <br/>
            <progress class="progress progress-success" value="35" max="100"></progress>
          </div>
        </div> 
        <div class="stat place-items-center place-content-center bg-neutral-content">
          <div class="stat-title text-black font-semibold">Quiz Score</div> 
          <div class="stat-value text-error">312</div> 
          <div class="stat-desc text-error font-semibold w-2/5 text-center">out of 1200 <br/>
            <progress class="progress progress-error" value="312" max="1200"></progress>
          </div>
        </div>
      </div>

      {/* Phone Stats */}
      <div class="grid-flow-row stats md:hidden w-full mt-4 text-center">
        <div class="stat bg-neutral-content">
          <div class="stat-title text-black font-semibold">Categories Completed</div> 
          <div class="stat-value text-primary">10</div> 
          <div class="stat-desc text-primary font-semibold w-2/5 mx-auto">out of 30 <br/>
            <progress class="progress progress-primary" value="10" max="30"></progress>
          </div>
        </div> 
        <div class="stat bg-neutral-content">
          <div class="stat-title text-black font-semibold">Lessons Completed</div> 
          <div class="stat-value text-success">35</div> 
          <div class="stat-desc text-success font-semibold w-2/5 mx-auto">out of 100 <br/>
            <progress class="progress progress-success" value="35" max="100"></progress>
          </div>
        </div> 
        <div class="stat bg-neutral-content">
          <div class="stat-title text-black font-semibold">Quiz Score</div> 
          <div class="stat-value text-error">312</div> 
          <div class="stat-desc text-error font-semibold w-2/5 mx-auto">out of 1200 <br/>
            <progress class="progress progress-error" value="312" max="1200"></progress>
          </div>
        </div>
      </div>

      <ul class="w-full steps mt-10 text-neutral">
        <li class="step step-primary">Numbers</li> 
        <li class="step step-primary">Alphabet</li> 
        <li class="step step-accent">Quiz 1</li> 
        <li class="step step-primary">Shortcut: I Love You</li>
      </ul>
      <div className="flex justify-center mb-10">
        <button class="btn btn-wide btn-lg btn-accent mt-8">Continue to Quiz 1..</button> 
      </div>
    </>
  )
}
