import React from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";

import "./index.css";
import pfp from "../assets/jojolions.png";
import Ideabar from "../components/IdeaBar/ideabar";

const Home = () => {
    return (
        <div>
            <div className="py-5 flex place-content-center">
                <div className="bg-[#AAB9CF] w-1/2 h-fit rounded-md shadow-basic py-10 grid gap-3 justify-items-center">
                    <div className="flex">
                        <img src={pfp} alt="Emilie's profile picture" className="h-20 w-20 bg-white rounded-full" />
                        <div className="px-5 content-center">
                            <div className="font-sans sans-serif text-xl">
                                Emilie Baunifais
                            </div>
                            <div className="text-center font-sans sans-serif text-base text-txt-gray">
                                IT Student
                            </div>
                        </div>
                    </div>
                    <div className="w-4/6 py-2 text-center font-sans sans-serif text-lg text-white leading-7">
                        Hi ! I am Emilie, a last year student at Epitech. Nice to meet you here on my website !
                        I like programming and trying out new things. I'm curious, dedicated and organized and these helped me to stay motivated throughout the years.
                        Enjoy your stay here !~
                    </div>
                    <div className="flex gap-3">
                        <a href="https://github.com/Nelryn" className="flex bg-white w-8 h-8 place-content-center place-items-center rounded-md">
                            <VscGithubInverted className="w-6 h-6"/>
                        </a>
                        <a href="https://linkedin.com/in/emilie-baunifais" className="flex bg-white w-8 h-8 place-content-center place-items-center rounded-md">
                            <SiLinkedin className="w-5 h-5"/>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="font-sans sans-serif text-3xl font-bold">
                    Projects Highlight !
                </h1>
            </div>
            <Ideabar />
        </div>
    )
}

export default Home;