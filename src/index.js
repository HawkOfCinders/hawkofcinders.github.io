import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch, Route, Link
} from "react-router-dom"
import "./assets/main.css"
import hamburgermenuicon from "./hamburgermenu.svg"
import Unity, {UnityContext} from "react-unity-webgl";



const Home = () => (
    <div> <h2>Welcome to my portfolio</h2> </div>
)

const SpaceInvaders = () => (
    <div> <h2>Space Invaders</h2> </div>


)

const Users = () => (
    <div> <h2>Users</h2> </div>
)







    
    



const App = () => {

    const[showMenu, setShowMenu] = useState(false)
    const unityContext = new UnityContext({
        loaderUrl:"../SpaceInvaders/SpaceInvadersWebGL.loader.js",
        dataUrl:"../SpaceInvaders/SpaceInvadersWebGL.data",
        frameworkUrl:"../SpaceInvaders/SpaceInvadersWebGL.framework.js",
        codeUrl: "../SpaceInvaders/SpaceInvadersWebGL.wasm",
    })



    let menu;

    if(showMenu) {
        menu =
            <div>
                <button className="absolute bg-gray-300 top-12 right-0 shadow">
                    <Link className="px-2 flex" onClick={() => setShowMenu(!showMenu)} to="/">Home</Link>
                    <Link className="px-2 flex" onClick={() => setShowMenu(!showMenu)} to="/spaceinvaders">Space Invaders</Link>
                    <Link className="px-2 flex" onClick={() => setShowMenu(!showMenu)} to="/users">Users</Link>
                </button>
            </div>
    }

    return (
        <div className=" inset-0 ">
        <Router>
        <header className="bg-gray-500 flex items-center justify-between px-4 py-3 left-0 right-0">
            <img className="right-0 w-10 fixed block text-gray-200" alt="burger" src={hamburgermenuicon} onClick={() => setShowMenu(!showMenu)}/>
            <h1 className="text-4xl ">Portfolio</h1>
        </header>

            {menu}



            <Switch>
                <Route path="/spaceinvaders">
                    <SpaceInvaders />
                    <Unity unityContext={unityContext} />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>

            <div>
                <i className="absolute bottom-0 text-xl">Made by Miika Haukkala</i>
            </div>
        </div>


    )
}

ReactDOM.render(<App />, document.getElementById('root'))