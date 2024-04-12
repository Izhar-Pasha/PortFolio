import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Components/Loader.css";

function Loader() {
    //   const [isLoading, setIsLoading] = useState(true);
    const [button, setButton] = useState(false);
    const Navigate = useNavigate();

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setButton(true);
        }, 3000); // Adjust the duration as needed (e.g., 3000 milliseconds = 3 seconds)



        // Clean up the timer
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='h-screen flex justify-center items-center flex-col gap-10'>
            <div class="wrapper">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
            </div>
            {button && (
                <div>
                    {/* <button  >Click Me!</button> */}
                    <button class="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white" onClick={() => {
                        Navigate("/Main")
                    }}>Click on me !</button>
                </div>

            )}
        </div>
    );
}

export default Loader;
