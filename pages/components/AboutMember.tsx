import * as React from 'react'
import Image from 'next/dist/client/image';

export default function AboutMember(props:any){
   const data=props.data;
   return (
       <div className='card' style={{margin:'10px', padding:'10px',flexGrow:'inherit'}} >
           <Image className="card-img-top" src={data.src}  width='450px' height='400px' alt="Profile Pic" />
           <div className='card-body'>
               <h4 className='card-title' > {data.name}</h4>
               <h6 className='card-title'> {data.position} </h6>
               {/* <p style={{fontFamily:'revert'}} className='card-text'> {data.desc}  </p> */}
           </div>

           <ul className="list-group list-group-flush">
                <li className="list-group-item">Team : {data.team}</li>
                <li className="list-group-item">Email :<a href="mailto:webmaster@example.com" >{data.email} </a> </li>
            </ul>
            <a href="#" className="btn btn-primary">Know More</a>
        
       </div>  
   )





}