import * as React from 'react'
import AboutUs from './AboutUs'
import Image from 'next/dist/client/image'
import Link from 'next/link'
const logo =require ('../../public/ws-logo.png')

export default function Navbar(){

    return(
    <div  style={{width:'100%', margin:'auto'}}> 
    
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <div>
               <Image src={logo} width='100px' height='50px' alt='WS LOGO' />
           </div>
             
            <div className="collapse navbar-collapse"  style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <div className="navbar-nav mr-auto">
                    <div className="nav-item active">
                            <Link href='/'>
                                <a className="nav-link" >Home </a>
                            </Link>
                            
                    </div>
                    <div className="nav-item">
                       <Link href='/browse_venues'>
                            <a className="nav-link" href="#">Venues</a>
                       </Link>
                        

                    </div>
                    <div className="nav-item">
                        <Link href='/review'>
                          <a className="nav-link" >Review Venue</a>
                        </Link>
                        
                        
                    </div>

                </div>
                

                <div className="navbar-nav mr-auto" >
                    
                    
                    <div className="nav-item">
                        <Link href='/about_us'>
                            <a className="nav-link" >About Us</a>
                        </Link>
                        
                    </div>
                </div>
                
            </div>
        </nav>
    </div>
)}