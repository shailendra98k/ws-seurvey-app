import * as React from 'react'
import teamData from '../../public/team.data'
import AboutMember from './AboutMember'

export default function AboutUs(){
    
   return (
       <div>
           <div style={{display:'flex', justifyContent:'space-evenly',flexWrap:'wrap'}}>
            {teamData.map((member,index)=>(
                 <AboutMember key={index} data={member} />
            ))}
            
            </div>
       </div>
   )
}