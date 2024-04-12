import React, { useEffect, useState } from 'react';
import './App2.css';
import Add from './Add';
import { Link } from 'react-router-dom';
import Naresh from 'axios';
import { SlHeart } from "react-icons/sl";




function App2({ addToFavorites, setProgress }) {
  const [a, b] = useState('');
  const [c, d] = useState("sp balu")



  const click = (data) => {
    addToFavorites(data);
    alert("Add In Your Favour List 💗")
  };




  useEffect(() => {
    setProgress(50);
    setTimeout(() => {
      setProgress(100);
    }, 2000);
  }, [setProgress]);




  useEffect(() => {
    // Naresh.get(`https://v1.nocodeapi.com/nandigamchinnodu/spotify/tfWyXNUlFOdidrFZ/search?q=${c}&type=track`).then(chinna=>{console.log(chinna.data.tracks.items);b(chinna.data.tracks.items)});
  }, [c])




  const chinna = (e) => {
    d(e.target.value)
  }





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
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search Songs" onChange={chinna} value={c} />
              <button class="btn btn-outline-success" type="submit" onClick={c}>Search</button>
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
                      <img src={data.album.images[0].url} alt={data.album.name} style={{ width: "100%" }} id='data-img' />
                    </a>
                    <h5 className='card-title'>SONG NAME:{data.name}<SlHeart className='ms-3 fs-5 fw-bold' onClick={() => click(data)} id='hello' /></h5>
                    <audio src={data.preview_url} controls />
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

export default App2











