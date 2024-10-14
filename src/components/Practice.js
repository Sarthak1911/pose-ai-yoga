import React, { useRef, useEffect } from 'react';
import * as poseDetection from '@tensorflow-models/pose-detection';
import * as tf from '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-webgl';

const Practice = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  let animationFrameId = null; // To store the requestAnimationFrame ID

  useEffect(() => {
    const setupCamera = async () => {
      try {
        const video = videoRef.current;
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        video.srcObject = stream;

        return new Promise((resolve) => {
          video.onloadedmetadata = () => {
            resolve(video);
          };
        });
      } catch (error) {
        console.error('Error accessing the camera: ', error);
        alert('Error accessing the camera. Please ensure you have granted permission.');
      }
    };

    const drawKeypointsAndSkeleton = (keypoints, ctx) => {
      if (!ctx) return; // Ensure the context exists

      // Draw keypoints
      keypoints.forEach((keypoint) => {
        if (keypoint.score > 0.3) {
          const { x, y } = keypoint;

          // Draw a circle for each keypoint
          ctx.beginPath();
          ctx.arc(x, y, 5, 0, 2 * Math.PI);
          ctx.fillStyle = 'red';
          ctx.fill();
        }
      });

      // Define pairs of keypoints to connect (skeleton)
      const adjacentKeyPoints = poseDetection.util.getAdjacentPairs(poseDetection.SupportedModels.MoveNet);
      
      // Draw lines (green) between the keypoints
      ctx.strokeStyle = 'green';
      ctx.lineWidth = 2;

      adjacentKeyPoints.forEach(([i, j]) => {
        const kp1 = keypoints[i];
        const kp2 = keypoints[j];

        // Only draw if both keypoints have a confidence score above 0.3
        if (kp1.score > 0.3 && kp2.score > 0.3) {
          ctx.beginPath();
          ctx.moveTo(kp1.x, kp1.y);
          ctx.lineTo(kp2.x, kp2.y);
          ctx.stroke();
        }
      });
    };

    const runPoseDetection = async () => {
      try {
        await tf.setBackend('webgl');
        await tf.ready();

        console.log('TensorFlow.js backend initialized:', tf.getBackend());

        const detectorConfig = { modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING };
        const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet, detectorConfig);

        const video = await setupCamera();
        video.play();

        const detectPose = async () => {
          if (!canvasRef.current) return; // Ensure the canvas is still available
          const ctx = canvasRef.current.getContext('2d');
          const poses = await detector.estimatePoses(video);

          // Clear the canvas
          if (ctx) {
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

            // Draw the video frame
            ctx.drawImage(video, 0, 0, canvasRef.current.width, canvasRef.current.height);

            if (poses.length > 0) {
              const keypoints = poses[0].keypoints;

              // Draw keypoints and skeleton
              drawKeypointsAndSkeleton(keypoints, ctx);
            }
          }

          animationFrameId = requestAnimationFrame(detectPose); // Keep the animation loop running
        };

        detectPose();
      } catch (error) {
        console.error('Error initializing pose detection: ', error);
        alert('Error initializing pose detection. Please try again.');
      }
    };

    runPoseDetection();

    // Cleanup function to stop animation and close the video stream when the component unmounts
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId); // Cancel the animation loop
      }

      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop()); // Stop all tracks of the video stream
      }
    };
  }, []);

  return (
    <div>
      <h2>Practice Your Yoga Pose</h2>
      <video ref={videoRef} style={{ display: 'none' }} />
      <canvas ref={canvasRef} width="640" height="480" />
    </div>
  );
};

export default Practice;
