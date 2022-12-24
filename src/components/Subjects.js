/**
*This component loads all the asl subjects from firestore and renders it to the page
*using flexbox
*
*@author Andy Tran 
*/
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {db} from "../firebase";

export default function Subjects() {

  //Create subject state to store fetched subject from Firestore
  const [subjects, setSubjects] = useState([]);

  //useEffect to fetch and store subject data
  useEffect(() => {
    async function fetchSubjects(){
      const querySnapshot = await db.collection("Subjects").get();
      const data = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        data.push(doc.data());
      });

      setSubjects(data);
      console.log(subjects);
    }

    fetchSubjects();
  }, []);


  //populate page by display subjects
  return(
    <>
    <h1 className="text-primary text-center text-4xl font-bold underline mb-10 mt-12">Subjects</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 p-4 gap-3">
      {subjects.map(subject =>(
        <Link to={`/learn/${subject.link}`} key={subject.id}>
          <div 
            className="text-neutral bg-neutral-content rounded-lg border-gray-200 border-2 
            h-36 flex flex-col justify-center items-center shadow-xl 
            transition duration-300 hover:bg-accent hover:text-secondary-content transform hover:scale-90">
              <h1 key={subject.id} className="text-2xl font-semibold">{subject.title}</h1>
              <p className="mt-2">{subject.desc}</p>
          </div>
        </Link>
          
      ))}
    </div>
    </>
  );

};