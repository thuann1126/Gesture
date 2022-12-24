import React, {useRef, useState} from 'react';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHand } from '../gestureUtils';
import * as fp from "fingerpose";
import NavBar from './NavBar';

export default function Gesture(){

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  /**
   * Gestures
   */

  //load Handpose model
  const runHandpose = async () =>{

    const net = await handpose.load();
    console.log("Handpose model loaded.");

    //loop and detect hands
    setInterval(() => {
      detect(net);
    }, 100);
  }

  const detect = async (net) =>{

    //Check data is available
    if(typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4)
      {
        // Get video properties
        const video = webcamRef.current.video;
        const videoWidth = video.videoWidth;
        const videoHeight = video.videoHeight;

        // Set video height and width
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;
        
        // Set canvas height and width
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;

        // Make Detections
        const hand = await net.estimateHands(video);
        //console.log(hand);

        //Gesture Detection
        //-----------------

        // Draw mesh
        const ctx = canvasRef.current.getContext("2d");
        drawHand(hand, ctx); //from utilities
      }
  }

  runHandpose();

  return(
    <>
      <NavBar page="gesture"/>
      <div className="">
        <Webcam ref={webcamRef} id="webcam" className="w-4/12 h-4/12 absolute"/>
        <canvas ref={canvasRef} className="w-4/12 h-4/12 absolute"/>
      </div>
    </>
  );

}