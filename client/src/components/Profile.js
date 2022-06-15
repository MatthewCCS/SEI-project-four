import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Grid, Button, Paper, Container } from '@mui/material'

const Profile = () => {

  // get all albums and tracks

  const [albumlist, serAlbumlist] = useState([])
  const [tracklist, setTracklist] = useState([])
  // dropdown filters

  const [artists, setArtists] = useState([])
  const [genres, setGenres] = useState([])
  const [tracks, setTracks] = useState([])

  const [filteredTracks, setFilteredTracks] = useState([])

  const [filters, setFilters] = useState({
    searchTerm: '',
    artist: 'all',
    track: 'all',
    genre: 'all',
  })

  useEffect(() => {
    const getTracklist = async () => {
      try {
        const { data } = await axios.get('api/tracks')
        setTracklist(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }

    }
    getTracklist()
  }, [])

  //create arrays
  useEffect(() => {
    if (tracklist.length) {
      const tracksList = []
      tracklist.forEach(track => tracksList.includes(track.title) ? '' : tracksList.push(track.title))
      setTracks(tracksList)
    }
  }, [tracklist])
  
  return (
    <Box>
      <Paper className='profile-box'>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper elevation={3} className='profile-user'>User</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={1} className='Profile-tracklist'>
              <h3>Tracklist</h3>
              {tracks.map((track) => {
                console.log(track)
                return <p key={track.id} value={track}>{track}</p>
              })
              }
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={1} className='Profile-playlist'>My Playlist</Paper>
          </Grid>
          <Grid item xs={8}>
            <div>item</div>
          </Grid>
        </Grid>
      </Paper>

    </Box>
  )
}
export default Profile