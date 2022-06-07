import './App.css';
import NavBar from "./Components/NavBar/NavBar"
import LearningStates from "./Components/Learning/LearningStates"
import Card from "./Components/Card/card"

import banner1 from "./Images/Banners/img1.jpg"
import banner2 from "./Images/Banners/img2.jpg"
import banner3 from "./Images/Banners/img3.png"
import banner4 from "./Images/Banners/img4.jpg"

function App() {
  
  let cardData  = [
      {
        image:banner1,
        title: "Let’s Celebrate Restaurant Crew and Managers",
        mainText: "Join us by sharing a story about your favorite experience with one of the crew members or managers.*",
        smallText: "*Most McDonald’s restaurants are operated by independent franchisees who are solely responsible for setting the employment policies and practices, including pay and benefits, for the people working in their restaurants. McDonald’s USA has no control over employment matters at any franchisee’s restaurant(s).",
        buttonText: "Submit Your Story",
      },
      {
        image:banner2,
        title: "Let’s Celebrate Restaurant Crew and Managers",
        mainText: "Join us by sharing a story about your favorite experience with one of the crew members or managers.*",
        smallText: "*Most McDonald’s restaurants are operated by independent franchisees who are solely responsible for setting the employment policies and practices, including pay and benefits, for the people working in their restaurants. McDonald’s USA has no control over employment matters at any franchisee’s restaurant(s).",
        buttonText: "Submit Your Story"
      },
      {
        image:banner3,
        title: "Let’s Celebrate Restaurant Crew and Managers",
        mainText: "Join us by sharing a story about your favorite experience with one of the crew members or managers.*",
        smallText: "*Most McDonald’s restaurants are operated by independent franchisees who are solely responsible for setting the employment policies and practices, including pay and benefits, for the people working in their restaurants. McDonald’s USA has no control over employment matters at any franchisee’s restaurant(s).",
        buttonText: "Submit Your Story"
      },
      {
        image:banner4,
        title: "Let’s Celebrate Restaurant Crew and Managers",
        mainText: "Join us by sharing a story about your favorite experience with one of the crew members or managers.*",
        smallText: "*Most McDonald’s restaurants are operated by independent franchisees who are solely responsible for setting the employment policies and practices, including pay and benefits, for the people working in their restaurants. McDonald’s USA has no control over employment matters at any franchisee’s restaurant(s).",
        buttonText: "Submit Your Story"
      }
  ]  

  
  return (
    <div>
      <NavBar />      
      <div>
          {
            cardData.map(
              (card,index) => ( <Card
                 image = {card.image}
                 title = {card.title}
                 mainText = {card.mainText}
                 smallText = {card.smallText}
                 buttonText = {card.buttonText}
               />)              
            )
          }
      </div>
      {/* <LearningStates /> */}

    </div>
  );
}

export default App;
