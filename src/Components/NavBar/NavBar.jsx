import React, {useState} from "react"
import "./NavBar.css"

import logo from "./../../Images/Logo/mc.jpg"

// Components
import Button from "../Button/Button"

// Icons
import searchIcon from "./../../Images/icons/search.svg"
import locIcon from "./../../Images/icons/location.svg"
import downArrowIcon from  "./../../Images/icons/down-arrow.svg"


const DropDown = (props) =>{

    const [dropdownState, setDropDownState] = useState(false);

    const Data = props.data;

    const toggle = () =>{
        setDropDownState(!dropdownState)    
    }

    return(
        <div onClick={()=>{toggle()}} className="dropDown">
            <div>{props.name}</div>
            <img className = {dropdownState ? "flipArrow" : "" } src={downArrowIcon} />
           

            <div className = {dropdownState ? `dropDownData ${props.className === undefined ? "" : props.className}` : "displayNone" }>
                
                {props.hasPointer && 
                    <div className="pointerContainer">
                        <div className="pointer"></div>                    
                    </div>
                }
                <Data />
            </div>
       
        </div>
    )
}


const SelectLanguage = () => {
    
    const changeLang = (id,event) => {
        event.stopPropagation()
        setCurrentLanguage(id)
    }

    const Laguanges = ["English", "French"]
    const [currentLanguage,setCurrentLanguage] = useState(0)

    return(
        <div className="languageSelector">
            {
                Laguanges.map(
                    (lang,index) => (
                        <div onClick={(e)=>{changeLang(index,e)}} className={currentLanguage == index ? "lagSelected": ""} >{lang}</div>
                    )
                )
            }
        </div>
    )
}

const Menu = () => {
    return(
        <div>This is the menu </div>
    )
} 

const NavBar = () =>{
    return (
        <div id= "navBar">
            <img src = {logo} />
            <div id = "nav-division">
                <div className="nav-group" id = "top-nav">
                    <div>
                        <DropDown name="Location" data = {SelectLanguage} hasPointer = {true}/>
                        <div>Sign Up for Email</div>
                        <div>Careers</div>
                    </div>

                    <div>
                        <div id = "search"> 
                            <img src={searchIcon}/>
                            <div>Search</div>
                        </div>
                        <div id = "nav-location"> 
                            <img src={locIcon} />
                            <a href="#"> Change your Location</a>
                        </div>
                        <Button text = "Order Now" />
                    </div>
                </div>
                <div className="nav-group">
                    <DropDown name="Our Menu" data = {Menu} className ="menu" hasPointer = {false} />
                    <div>Download App</div>
                    <div>MyMcDonald's Rewards</div>
                    <div>Exclusive Deals</div>
                    <div>About Our Food</div>
                    <div>Locate</div>
                </div>
            </div>
        </div>
    )
}

export default NavBar