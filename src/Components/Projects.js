import React from 'react'
import ProjectItem from './ProjectItem'
import ShoppingCart from '../Images/shopping-cart.mp4'
import Battleship from '../Images/battleship.mp4'
import TicTacToe from '../Images/tic-tac-toe.mp4'
import TwitterClone from '../Images/twitter-clone.mp4'
import WeatherApp from '../Images/weather-app.mp4'
import WheresWally from '../Images/wheres-wally.mp4'
import { useEffect } from 'react'

export default function Projects() {
  useEffect(() => {
    window.addEventListener("scroll", reveal)
  }, [])

  function reveal(){
    const reveal = document.querySelector(".reveal")
    const windowHeight = window.innerHeight
    const elementTop = reveal.getBoundingClientRect().top
    const elementVisible = 150
    console.log(elementTop)
    console.log(windowHeight - elementVisible)
    console.log("------------------------------------")
    if (elementTop < windowHeight - elementVisible){
      reveal.classList.add("visible")
    }
    else{
      reveal.classList.remove("visible")
    }
  }

  

  return (
    <div>
        <div className='project-preview'>
            <h2>My Projects</h2>
            <h2 className='arrow'>˅</h2>
        </div>
        <div className="projects reveal">
            <ProjectItem video={ShoppingCart} title="Shopping Cart" description={"Browse my fake shop and add items to your basket. Made using React."} link="https://donnieandmooie.github.io/shopping-cart" github="https://github.com/DonnieAndMooie/shopping-cart"></ProjectItem>
            <ProjectItem video={Battleship} title="Battleship" description={"Play the classic game of Battleship, either against an intelligent AI or with a friend. Built using HTML, CSS and Vanilla JavaScript."} link="https://donnieandmooie.github.io/battleship/" github="https://github.com/DonnieAndMooie/battleship"></ProjectItem>
            <ProjectItem video={TicTacToe} title="Tic Tac Toe" description={"Play Tic-Tac-Toe either against a friend, or against an impossible AI which was made using the minimax algorithm."} link="https://donnieandmooie.github.io/tic-tac-toe/" github="https://github.com/DonnieAndMooie/tic-tac-toe"></ProjectItem>
            <ProjectItem video={TwitterClone} title="Twitter Clone" description={"Login to start tweeting, commenting, liking and retweeting! I tried to create Twitter as accurately as possible, using React for the frontend and Firebase for my backend."} link="https://twitter-clone-b2e61.web.app/" github="https://github.com/DonnieAndMooie/twitter-clone"></ProjectItem>
            <ProjectItem video={WeatherApp} title="Weather App" description={"A simple app which shows the weather in any location in the world right now. Created using the OpenWeatherMap API."} link="https://donnieandmooie.github.io/weather-app/" github="https://github.com/DonnieAndMooie/weather-app"></ProjectItem>
            <ProjectItem video={WheresWally} title="Where's Wally?" description={"Can you find Wally and his friends in these 3 levels? All scores are stored in a leaderboard. Created using React and Firebase."} link="https://wheres-wally-1cac2.web.app/" github="https://github.com/DonnieAndMooie/wheres-wally"></ProjectItem>
        </div>
    </div>
    
  )
}
