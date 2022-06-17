import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { Grid, Typography, Paper, Card, Box, FormGroup, Container, CardHeader, CardMedia, CardContent } from '@mui/material'

const MusicDeck = () => {

  const [tracks, setTracks] = useState([])
  const [filteredTracks, setFilteredTracks] = useState([])
  const [filters, setFilters] = useState({
    searchTerm: '',
    title: 'all',

  })

  useEffect(() => {
    const getTracks = async () => {
      try {
        const { data } = await axios.get('api/tracks')
        console.log(data)
        setTracks(data)
      } catch (error) {
        console.log(error)
      }
    }

    getTracks()
  }, [])

  //handlechange for search
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value })
  }

  //useEffect for filter
  useEffect(() => {
    if (tracks.length) {
      const regexSearch = new RegExp(filters.searchTerm, 'i')
      console.log(regexSearch)
      const filtered = tracks.filter(track => {
        return (regexSearch.test(track.title) || regexSearch.test(track.artist)) || (filters.title === 'All')
      })
      setFilteredTracks(filtered)
      // console.log('filtered art ->', filteredTracks)
    }
  }, [filters, tracks])



  return (
    <Box>
      <Paper>
        <form className='md-form'>
          <label htmlFor='search'>Find Tracks</label>
          <input type='search' name='searchTerm' placeholder='search...' value={filters.searchTerm} onChange={handleChange}></input>
        </form>
      </Paper>
      <Grid container spacing={0} alignItems="center" justifyContent="center" mt={2} >
        {filteredTracks.map((tracks) => {
          const { id, title, artist } = tracks
          return (
            <Grid key={id} xs={6} md={4} lg={3} m={1}>
              <Card sx={{ display: 'flex' }}>
                <CardMedia
                  component="img"
                  alt="album"
                  sx={{ width: 150 }}
                  src="https://res.cloudinary.com/ddn3rjqii/image/upload/v1655286046/genericAlbum_olbhs5.png"
                  title="Album"
                  objectFit="cover"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {title}
                  </Typography>
                  {artist}
                </CardContent>

              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Box>

  )
}

export default MusicDeck