import React, { useEffect, useState } from 'react';
import './App2.css'
import { Link } from 'react-router-dom';
import Naresh from 'axios';
import { SlHeart } from "react-icons/sl";
import Song from './leo3.mp3'



function New({ setProgress }) {
  const [a, b] = useState('');



  useEffect(() => {
    setProgress(50);
    setTimeout(() => {
      setProgress(100);
    }, 2000);
  }, [setProgress]);



  useEffect(() => {
    // Naresh.get(`https://v1.nocodeapi.com/nandigamchinnodu/spotify/tfWyXNUlFOdidrFZ/browse/new?country=AR&perPage=20&page=1`).then(chinna=>{console.log(chinna.data.albums.items);b(chinna.data.albums.items)});
  }, [])




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
            <Link to="/myl" id='h6'><h6 id='hover' >MY FAVOURITE</h6></Link>
          </div>
          <div className='col-lg-3'></div>
          <div className='col-lg-3' >
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search Country" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>












      <div className='container-fluid'>
        <h2 className='text-center mt-5 mb-5 text-primary'>MUSICS</h2>
        <div className='row ms-5 ps-5'>
          {
            a && a.map(data =>
              <div className='col-lg-4 pb-5  text-center' id='main-body'>
                <div class="card" style={{ width: "20rem", height: "100%" }}>
                  <div class="card-body ">
                    <a href={data.external_urls.spotify} target='_blank'>
                      <img src={data.images[0].url} style={{ width: "100%" }} id='data-img' />
                    </a>
                    <h5 className='card-title'>SONG NAME:{!data.name ? "Leo" : data.name}<SlHeart className='ms-3 fs-5 fw-bold' /></h5>
                    <h6 className='card-text'>Realease Date:{data.release_date}</h6>
                    <audio src={!data.preview_url ? Song : data.preview_url} controls />
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

export default New