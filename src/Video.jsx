
import React, { useEffect, useRef } from 'react';
import Konva from 'konva';
import Dummyvideo from './Assets/videoplayback.mp4'

const Video = () => {
    const containerRef = useRef(null);
    const stageRef = useRef(null);
    const layerRef = useRef(null);
    const videoRef = useRef(null);
    const animRef = useRef(null);

    useEffect(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;


        stageRef.current = new Konva.Stage({
            container: containerRef.current,
            width,
            height,
        });

        layerRef.current = new Konva.Layer();
        stageRef.current.add(layerRef.current);


        videoRef.current = document.createElement('video');
        videoRef.current.src = Dummyvideo;



        const image = new Konva.Image({
            image: videoRef.current,
            draggable: true,
            x: 50,
            y: 20,
        });
        layerRef.current.add(image);

        const text = new Konva.Text({
            width: stageRef.current.width(),
            height: stageRef.current.height(),
            align: 'center',
            verticalAlign: 'middle',
        });
        layerRef.current.add(text);


        animRef.current = new Konva.Animation(function () {

        }, layerRef.current);


        videoRef.current.addEventListener('loadedmetadata', function () {

            image.width(videoRef.current.videoWidth);
            image.height(videoRef.current.videoHeight);
        });

        return () => {
            animRef.current.stop();
            videoRef.current.pause();
        };
    }, []);

    const handlePlay = () => {
        const text = layerRef.current.findOne();
        if (text) {
            text.destroy();
        }
        videoRef.current.play();
        animRef.current.start();
    };

    const handlePause = () => {
        videoRef.current.pause();
        animRef.current.stop();
    };

    return (
        <div>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
            <div ref={containerRef} />
        </div>
    );
};

export default Video;
