import axios from 'axios'
import './App.css';
import { useState, useEffect} from 'react';
import Collage from './Collage';


function App() {
const [weekAlbums, setWeekAlbums] = useState([])
const [name, setName] = useState("")
const api_key = 'eb89f11d64e5a3ccced854eb18c83825'

  function getAlbumsWeeklyCharts(event) {

    event.preventDefault()
    
    axios("http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user="+name +"&api_key="+api_key+"&format=json&period=7day&limit=25")
      .then(r => {
        setWeekAlbums(r.data.topalbums.album)
        
      })
      .catch(err => console.log(err))
  }

  console.log(weekAlbums)



  return (
    <div className="App">
      
      <h1>My LastFm Collage Project</h1>
      
      <form onSubmit={getAlbumsWeeklyCharts}>
          <label>LastFm Username</label>
          <input type='text' value={name} onChange={n => setName(n.target.value)}/>
          <button type="submit" >Submit</button>
      </form>
      <div className='MainBox'>
      {/*
        weekAlbums.map((a)=> {
          var imgUrl = Object.values(a.image[2])
          console.log(imgUrl)
          return (
            <img className='albumCover' src={imgUrl[1]}/>
            
          )
        })
      */}
      </div>
    </div>
  );
}

export default App;
