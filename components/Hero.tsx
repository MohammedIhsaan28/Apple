'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {

    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if(videoRef.current){
            videoRef.current.playbackRate = 2;
        }
    },[]);

    return(
        <section id="hero">
            <div>
                <h1>MacBook Pro</h1>
                <Image src={'/images/title.png'} alt="Title" width={700} height={500}/>
            </div>

            <video ref={videoRef} src={'/videos/hero.mp4'} autoPlay muted playsInline/>

            <button>Buy</button>

            <p className="mb-2">From $1999 or $133/mo for 12 months</p>

        </section>
    )
}