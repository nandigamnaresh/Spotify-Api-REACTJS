import React, { useState } from 'react';
import './App.css';
import App2 from './App2';
import New from './New';
import Album from './Album'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add from './Add';
import LoadingBar from 'react-top-loading-bar';





function App() {
  const [a, b] = useState(0)

  const [favorites, setFavorites] = useState([]);


  const addToFavorites = (data) => {
    setFavorites([...favorites, data]);
  };





  return (
    <div>




      <BrowserRouter>
        <LoadingBar color='red' progress={a} height="3px" onLoaderFinished={() => b(0)} />
        <Routes>

          <Route path='/'     element={<App2   addToFavorites={addToFavorites} setProgress={b} />}></Route>
          <Route path='/new'  element={<New    setProgress={b} />}>                                </Route>
          <Route path='/alb'  element={<Album  setProgress={b} />}>                                </Route>
          <Route path='/myl'  element={<Add    favorites={favorites} setFavorites={setFavorites} setProgress={b} />}></Route>

        </Routes>
      </BrowserRouter>







    </div>
  );
}

export default App;
