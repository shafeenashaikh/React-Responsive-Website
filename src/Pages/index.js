import React,{useState} from 'react'
import HeroSection from '../Components/HeroSection';
import InfoSection from '../Components/InfoSection';
import { homeOnjOne } from '../Components/InfoSection/Data';
import Navbar from '../Components/Navbar/Index'
import Sidebar from '../Components/Sidebar'

function Home() {
    const [isOpen, setIsOpen] =useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeOnjOne}/>
        </>
    )
}

export default Home
