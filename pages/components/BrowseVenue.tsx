import * as React from 'react'
import venues from '../../public/data'
import Venues from './Venues'

export default function BrowseVenue(){
  
    
     return(
         <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
            {venues.map((venue,index)=> (
                <Venues key={index} data={venue}/>
            ))}

         </div>
     )

}