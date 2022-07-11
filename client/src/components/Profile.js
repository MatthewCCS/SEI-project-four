import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Grid, Button, Paper, Container, Card, CardMedia, Typography } from '@mui/material'
import H5AudioPlayer from 'react-h5-audio-player'
import { getTokenFromLocalStorage } from './helpers/Auth'

const Profile = () => {

  // get all albums and tracks
  const [userPlaylist, setUserPlaylist] = useState([])
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

  // user playlist
  useEffect(() => {
    const getUserPlaylist = async () => {
      try {

        const { data } = await axios.get('/api/userplaylist/', {
          headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage()}`,
          },
        })
        setUserPlaylist(data)
        console.log(userPlaylist)
      } catch (error) {
        console.log(error)
      }

    }
    getUserPlaylist()
  }, [])

  //get all tracks
  useEffect(() => {
    const getTracklist = async () => {
      try {
        const { data } = await axios.get('api/tracks')
        setTracklist(data)
        console.log(tracklist)
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
            <Paper elevation={1} className='profile-user'>Profile</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={1} className='Profile-tracklist'>
              <h3>Tracklist</h3>
              {tracklist.map(({ id, title, trackUrl, artist }) => {
                return <p key={id} value={title}>{title} - {artist}</p>
              })
              }
            </Paper>

            {/* {userPlaylist.length > 0 &&
              <>
                <Paper className='home-card' elevation={5}>
                  <div className='album-img'><img src='https://res.cloudinary.com/ddn3rjqii/image/upload/v1655286046/genericAlbum_olbhs5.png' /></div>
                  <div className='home-card-content'>
                    <Typography variant='h4'>yes</Typography>
                    <Typography variant='h5'>no</Typography>
                  </div>


                </Paper>

              </>
            } */}

          </Grid>

          <Grid item xs={6}>
            <Paper elevation={1}  sx={{ height: '100%' }} className='Profile-playlist'>
              <h3>My Playlists</h3>
            </Paper>
          </Grid>
          <Button>Save</Button>

        </Grid>
      </Paper>





    </Box>
  )
}
export default Profile