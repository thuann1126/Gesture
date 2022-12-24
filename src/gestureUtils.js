/**
 * @author Andy Tran
 */

//Points for fingers used to draw path on hand
const fingerJoints = {
  thumb: [0, 1, 2, 3, 4],
  indexFinger: [0, 5, 6, 7, 8],
  middleFinger: [0, 9, 10, 11, 12],
  ringFinger: [0, 13, 14, 15, 16],
  pinky: [0, 17, 18, 19, 20],
}

//Drawing Function used to draw lines on hand
export const drawHand = (predictions, ctx) =>{

  //Check if there are predictions
  if(predictions.length > 0){

    //Loop through each prediction
    predictions.forEach((prediction) =>{

      //Grab landmarks from prediction
      const landmarks = prediction.landmarks;

      //Loop through fingers
      for(let f = 0; f < Object.keys(fingerJoints).length; f++){

        let finger = Object.keys(fingerJoints)[f];

        //Loop through pairs of joints
        for(let j = 0; j < fingerJoints[finger].length - 1; j++){

          //Get pairs of joints to draw path
          const firstJointIndex = fingerJoints[finger][j];
          const secondJointIndex = fingerJoints[finger][j+1];
          
          // Draw path
          ctx.beginPath();
          ctx.moveTo(
            landmarks[firstJointIndex][0],
            landmarks[firstJointIndex][1]
          );
          ctx.lineTo(
            landmarks[secondJointIndex][0],
            landmarks[secondJointIndex][1]
          );
          ctx.strokeStyle = "#f28c18";
          ctx.lineWidth = 5;
          ctx.stroke();
        }
      }

      //Loop through landmarks and add/draw dots
      for(let i = 0; i < landmarks.length; i++){
        // Get x point
        const x = landmarks[i][0];
        // Get y point
        const y = landmarks[i][1];
        // Start drawing
        ctx.beginPath();
        ctx.arc(x, y, 7, 0, 3 * Math.PI)
        // Set line color
        ctx.fillStyle = "#87d039";
        ctx.fill();
      }

    })
    
  }
}