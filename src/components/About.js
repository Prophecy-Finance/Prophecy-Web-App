// src/components/About.js

import {React} from "react";


export default function About() {

    return (
        <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <br></br>
                    <h2 className="title-font text-4xl mb-1 font-medium">
                        Prophecy Finance
                    </h2>
                    <p className="mb-8 leading-relaxed text-subtitle text-xl">
                        Ideate, Innovate, Automate
                        <br></br> 
                        <br></br>
                        <br></br>
                    </p>
                    <p className="mb-8 leading-relaxed text-body-para text-lg">
                    At prophecy, investing is done different. 
                    Instead of placing your money in a basket of various stocks and simply holding this portfolio 
                    in perpetuity, prophecy allows you to select between a variety of algorithms depending on your
                    risk class and tolerance. Each algorithm itself is not a portfolio but rather a methodology that
                    specifies trades to be taken on a daily basis. Daily trading and quick turnover coupled with the fact
                    that each algorithm is updated continously to use the most recent data allows Prophecy users to attain 
                    significantly higher returns on a risk adjusted basis than other competing portfolio managers and Robo Advisors. 
                    </p>
                    {/* <div className="flex justify-center">
                        <a href="https://drive.google.com/file/d/1Qtkfl1HiT_Y3Yk70My_uxTsVyBh8J2BI/view?usp=sharing" rel="noopener"
                            className="hover:animate-pulse-slow inline-flex text-white bg-orange-700 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
                            Check out my Resume
                        </a>
                    </div> */}
                    
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="logo"
                        src="./logo.png"
                    />
                </div>
        </div>
        </section>
    );
}
// repeat the same basic structure for all 6 components