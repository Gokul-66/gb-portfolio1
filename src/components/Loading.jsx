import { useState,useEffect } from 'react';
import React from "react";

export const LoadingScreen = ({onComplete}) =>{
    const [text, setText] = useState('');
    const fullText = 'Loading...';
    
    useEffect(() => {   
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 1000);

            }
        },100)
        return () => clearInterval(interval);
    },[onComplete]);

       

    return (
        <div className="fixed inset-0 z-50 text-gray-100 flex flex-col items-center justify-center app-background">
      <div className="mb-4 text-4xl font-mono font-bold text-cyan-100">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      <div className="w-[200px] h-[2px] bg-slate-700/70 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.8)] animate-loading-bar"></div>
      </div>
    </div>)
}
