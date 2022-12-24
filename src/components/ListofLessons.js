/**
 * Load all lessons from subject click
 * @author Andy Tran
 */


import { useParams } from "react-router";
import React, { useState, useEffect} from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import app, {db} from "../firebase";
import NavBar from "./NavBar";

export default function ListofLessons(){

  //get id (subject) of current page
  const {id} = useParams();
  // console.log(id);
  
  //Subject and Lesson data
  const [subject, setSubject] = useState({});
  const [lessons, setLessons] = useState([]);

  //useEffect to fetch and store subject data
  useEffect(() => {
    async function fetchSubject(){
      const querySnapshot = await db.collection("Lessons").doc(`${id}`).get();
      const data = querySnapshot.data();

      setSubject(data);
      setLessons(data.lessons);
      console.log(data);
      console.log(data.lessons);
    }

    fetchSubject();
  }, []);

  return(
    <>
      <NavBar page="learn"/>

      <h1 className="text-primary text-center text-4xl font-bold underline mb-10 mt-12">{subject.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 p-4 gap-3">
        {lessons.map(s =>(
          <Link to={`/learn/${id}/${s.link}`} key={s.id}> 
            <div 
              className="text-neutral bg-neutral-content rounded-lg border-gray-200 border-2 
              h-36 flex flex-col justify-center items-center shadow-xl 
              transition duration-300 hover:bg-secondary hover:text-secondary-content transform hover:scale-90">
                <h1 className="text-2xl font-semibold">{s.title}</h1>
            </div>
          </Link>
        ))}
      </div>
      
    </>
  );
}