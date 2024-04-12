import React, { useEffect, useState } from 'react';
import './App2.css';
import { Link } from 'react-router-dom';
import { SlHeart } from "react-icons/sl";



function Add({ favorites, setFavorites, setProgress }) {

    const removeSong = (songId) => {
        const updatedFavorites = favorites.filter(song => song.id !== songId);
        setFavorites(updatedFavorites);
        alert("Remove Favou 💔")
    };




    useEffect(() => {
        setProgress(50);
        setTimeout(() => {
            setProgress(100);
        }, 2000);
    }, [setProgress]);




    return (
        <div>


            <div className='container-fluid' id='spot-nav' >
                <div className='row pt-4 ps-4 pb-3  fw-bolder' >
                    <div className='col-lg-1'>
                        <Link to="/new" id='h6'><h6 id='hover'>NEW REAL</h6></Link>
                    </div>
                    <div className='col-lg-1'>
                        <Link to="/" id='h6'><h6 id='hover'>TRACKS</h6></Link>
                    </div>
                    <div className='col-lg-1'>
                        <Link to="/alb" id='h6'><h6 id='hover'>ALBUM</h6></Link>
                    </div>
                    <div className='col-lg-2'>
                        <Link to="/myl" id='h6'><h6 id='hover'>MY FAVOURITE</h6></Link>
                    </div>
                </div>
            </div>




            <div className='container-fluid'>
                <h2 className='text-center mt-5 mb-5 text-primary'>YOUR FAVOURITE LIST DATA</h2>
                <div className='row ms-5 ps-5'>
                    {
                        favorites.map(a =>
                            <div className='col-lg-4  pb-5  text-center' id='main-body'>
                                <div class="card" style={{ width: "20rem", height: "100%" }}>
                                    <div class="card-body ">
                                        <a href={a.external_urls.spotify} target='_blank'>
                                            <img src={a.album.images[0].url} style={{ width: "100%" }} id='data-img' />
                                        </a>
                                        <h5 className='card-title'>SONG NAME:{a.name}</h5>
                                        <SlHeart onClick={() => removeSong(a.id)} />
                                        <audio src={a.preview_url} controls />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>




        </div>
    )
}

export default Add









