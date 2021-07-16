import * as React from 'react'
import teamData from '../../public/team.data'
import AboutMember from '../components/AboutMember'
import AboutUs from '../components/AboutUs'
import Navbar from '../components/Navbar'

export default function aboutUs(){
    return (
        <div>
             <Navbar/>
             <AboutUs/>

        </div>
    
    )
}