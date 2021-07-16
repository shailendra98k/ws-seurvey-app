import * as React from 'react'
import Link from 'next/dist/client/link';
import Image from 'next/dist/client/image';

export default function Venues(props:any){
   const venue=props.data; 
   



   return (
       <div className='card' style={{width:'500px'}}>  
        
        <Image className="card-img-top" src={venue.src} width='500px' height='350px' alt="Venue Image" />
        <div className="card-body">
            <h5 className="card-title">{venue.name}</h5>
            <h6>{venue.location}</h6>
            <p className="card-text">{venue.desc}</p>
            <strong>{venue.price}$  </strong>
            <strong>{venue.capacity}</strong>
            <br></br>
            <Link href='/review '>
                <a className="btn btn-primary">Add Review</a>
            </Link>
            
            <a href="#" className="btn btn-primary">Request Quote</a>

        </div>
        
       </div>
   )
}