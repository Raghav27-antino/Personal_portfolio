import React, { useEffect, useRef } from 'react'
import Who from './Components/Who'
import Want from './Components/Want'
import Contact from './Components/Contact'
import Work from './Components/Work'
import Home from "./Components/Home"
import Navbar from './Components/Navbar'

const Dashboard = () => {

    // 151315
    // 5115A8
    // 9D44C0
    return (
        <div className='bg-[#5115A8] h-[100vh]' >
            <Navbar />
            <Home />
            <Who />
            <Want />
            <Work />
            <Contact />
        </div>
    )
}

export default Dashboard