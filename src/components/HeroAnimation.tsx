"use client";

import React from 'react'
import Lottie from 'lottie-react';
import animation from "../assets/programming-computer.json";

const HeroAnimation = () => {
    return (
       <Lottie animationData={animation} loop={true} className="lg:h-[580px]"  />
    )
}

export default HeroAnimation