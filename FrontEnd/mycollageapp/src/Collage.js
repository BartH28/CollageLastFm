import React from 'react'

export default function Collage({name}) {

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


    return (
      <div>Collage</div>
    )
  }

