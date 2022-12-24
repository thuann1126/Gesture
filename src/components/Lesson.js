/**
 * Page for lesson
 * @author Andy Tran
 */
import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import NavBar from "./NavBar";
import {db} from "../firebase";
import { Link } from "react-router-dom";

export default function Lesson(){

  //Get url params data
  const {s} = useParams();
  const {l} = useParams();
  // console.log(s + " " + l);

  //Subject and Lesson data
  const [subject, setSubject] = useState({});
  const [lesson, setLesson] = useState([]);

  //Link for next lesson / last lesson
  const [link, setLink] = useState(`/learn/${s}/${parseInt(l)+1}`);
  const [linkText, setLinkText] = useState("Go to next lesson");

  //useEffect to fetch and store lesson data
  useEffect(() => {
    async function fetchSubject(){
      const querySnapshot = await db.collection("Lessons").doc(`${s}`).get();
      const data = querySnapshot.data();

      setSubject(data);
      setLesson(data.lessons[l]);

      //Changes link text and location if last item in subject
      if(parseInt(l) === data.lessons.length - 1){
        setLink(`/learn`);
        setLinkText("You Finished! Go back to Subjects");
      }

      console.log(data);
      console.log(data.lessons[l]);
    }

    fetchSubject();
  }, []);

  
  return(
    <>
      <NavBar page="learn"/>

      {/* content */}
      <h1 className="text-primary text-center text-4xl font-bold underline mb-10 mt-12">{lesson.title}</h1>

      <div className="text-center mx-4 md:mx-10">
        <h1 className="text-neutral text-center text-lg text-opacity-80 
        font-semibold rounded-lg border-info border-opacity-30 border-2 inline-block p-4 shadow-lg">
          {lesson.desc}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 stext-neutral my-12">
        <div className="w-11/12 xl:w-8/12 2xl:w-5/12 mx-auto md:mr-0 lg:mr-0 flex justify-center bg-neutral-content rounded-lg border-gray-200 border-2 h-64 shadow-md py-4">
          <img src={lesson.img} alt={lesson.title}/>
        </div>
        <div className="w-11/12 xl:w-8/12 2xl:w-5/12 mx-auto md:ml-0 lg:ml-0 flex justify-center bg-neutral-content rounded-lg border-gray-200 border-2 h-64 shadow-md py-4">
          <img src={lesson.gif} alt={lesson.title}/>
        </div>
      </div>

      <div className="text-center mb-8">
        <a href={link} 
          className="py-4 w-10/12 md:w-5/12 2xl:w-3/12 inline-block 
          border-solid rounded-lg border-success border-2 shadow-md bg-success
          transition duration-300 hover:bg-accent transform hover:-translate-y-2 hover:scale-110">
          <h1 className="text-base-content text-2xl font-semibold">{linkText}</h1>
        </a>
      </div>

      <div className="text-center mb-8">
        <a href="/gesture"
          className="py-4 w-10/12 md:w-5/12 2xl:w-3/12 inline-block 
          border-solid rounded-lg border-primary border-2 shadow-md bg-primary
          transition duration-300 hover:bg-primary-focus transform hover:-translate-y-2 hover:scale-110">
          <h1 className="text-base-content text-2xl font-semibold">Test your form</h1>
        </a>
      </div>
      
    </>
  );
}