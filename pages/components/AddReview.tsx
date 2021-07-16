import * as React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import $ from 'jquery'
const sample=require('../../public/image.png')
import Image from 'next/dist/client/image';
export default function AddReview(){
    const [email,setEmail]=useState("");
    const [wedingDate,setWeddingDate]=useState("");
    const [venueName,setVenueName]=useState('');
    const [rating,setRating]=useState(0);
    const [exprience,setExprience]=useState('');
    let charLegth=0;
     
    const Emailhandler=(e:any)=>{
        setEmail(e.target.value);
        console.log(e.target.value)
    }
    const DateHandler=(e:any)=>{
        setWeddingDate(e.target.value);
        console.log(e.target.value)
    }

    const VenueHandler=(e:any)=>{
        setVenueName(e.target.value);
        console.log(e.target.value)
    }
    const RatingHandler=(e:any)=>{
        setRating(e.target.value);
        console.log(e.target.value);
    }
    const ExprienceHandler=(e:any)=>{
        setExprience(e.target.value);
        console.log(e.target.value)

    }
    
    const submitHandler=(e:any)=>{
        e.preventDefault();
        let jsonData={
            email,
            venueName,
            wedingDate,
            rating,
            exprience
        };
        console.log("hello");
    }


    useEffect(()=>{
        if(rating!=0 && exprience.length>=30 && email.length>0 && wedingDate!="" && venueName.length>0 ){
            $('#submit-btn').removeAttr('disabled')

        }else{
            
            $('#submit-btn').attr('disabled','true');
        }
        
    })
    

   

   return (
      <div id='review-div' >

            
            {/* <Image src={sample} width='500px' height='600px' />   */}

            <form method='POST' >

            <div id='review-div-child-1' className='review-child-div' >
                <h1>Share ur exprience! Your review helps othercouples choose their venue.</h1>
                <h6 style={{fontFamily:'sans-serif', color:'black'}} >All reveiew will be kept anonymous</h6>
                <span style={{color:'red', fontFamily:'sans-serif'}}>* Required</span>
            </div>

            <div className='review-child-div'>
            <label>Email<span style={{color:'red'}}>*</span> </label>
            <br/>
            <input required type='email' placeholder='Your email' onChange={Emailhandler}/>
            </div>

            <div className='review-child-div'> 
                <label> Weeding date<span style={{color:'red'}}>*</span></label>
                <br/>
                <input required type='date' onChange={DateHandler}/>
            </div>
            <div className='review-child-div'>
                <label>Venue Name<span style={{color:'red'}}>*</span></label>
                <br/>
                <input required  type='text' placeholder='Your answer' onChange={VenueHandler}></input>
            </div >

            <div className='review-child-div'>
                <p>Please rate your venue &apos; s quality of service on a scale of 1 to 5<span style={{color:'red'}}>*</span></p>
                <div style={{display:'flex',justifyContent:'space-evenly'}}>
                    <div >
                    <input type="radio" id="1" name='rating_value' value='1'onChange={RatingHandler}/>
                    <br/>
                    <label htmlFor='id'> 1 </label>
                    </div>
                    <div>
                    <input type="radio" id="2" name='rating_value'value='2' onChange={RatingHandler}/>
                    <br/>
                    <label htmlFor='id'> 2 </label>
                    </div>
                    <div>
                    <input type="radio" id="3" name='rating_value'value='3' onChange={RatingHandler}/>
                    <br/>
                    <label htmlFor='id'> 3 </label>
                    </div>

                    <div>
                    <input type="radio" id="4" name='rating_value'value='4' onChange={RatingHandler}/>
                    <br/>
                    <label htmlFor='id'> 4 </label>
                    </div>
                    <div>
                        <input type="radio" id="5" name='rating_value'value='5' onChange={RatingHandler}/>
                        <br/>
                        <label htmlFor='id'> 5 </label>
                    </div>
                    
                
                </div>
                
            </div>
            
            <div  className='review-child-div'>
                <label>Write at least 30 characters about your exprience with your venue. Include any detail that will help other select their venue.<span style={{color:'red'}}>*</span></label>
                <br/>
                <input required style={{width:'95%'}} type='text' onChange={ExprienceHandler}/> 
            </div>
            
            <button  id='submit-btn' onSubmit={submitHandler} disabled >Submit </button>
            </form>
            <hr style={{margin:'5px'}}></hr>
            
   
     
      </div>
   )
}