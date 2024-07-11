import React, { useEffect, useState } from 'react'
import './Banner.css'
import { API_KEY,imageUrl } from '../../Constants/constant'
import axios from '../axios'
function Banner() {
    const [movie, setMovie] = useState();
   // const [value, setValue] = useState(0)
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) =>{
            console.log("This is that data",response.data.results[2]);
            setMovie(response.data.results[2])
            
        })
    },[])
    // useEffect(() => {
    //     const randomValue = Math.floor(Math.random() * 20);
    //     setValue(randomValue);
    // });
    return (
        <div 
         style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:"No image"})`}}
         className='banner'>
            <div className='content' >
                <h1 className='title'>{movie? movie.title? movie.title:movie.name: "no"}  </h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movie?movie.overview:""}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner