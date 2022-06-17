import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Box, Card, Grid, CardMedia, CardContent, Typography } from '@mui/material'


const SingleArtist = () => {

  const { id } = useParams()
  const [singleArtist, setSingleArtist] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getSingleArtist = async () => {
      try {
        const { data } = await axios.get(`/api/artists/${id}`)
        console.log(data)
        setSingleArtist(data)
      } catch (error) {
        console.log(error)
        setErrors(true)
      }
    }
    getSingleArtist()
  }, [])


  return (
    <Box marginTop={10} display='flex' justifyContent='center'>

      <Card sx={{ display: 'flex' }} m={10}>
        <CardMedia
          component="img"
          alt="album"
          sx={{ width: 150 }}
          src="https://res.cloudinary.com/ddn3rjqii/image/upload/v1655286046/genericAlbum_olbhs5.png"
          title="Album"
          // objectFit="fill"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {singleArtist.name}
          </Typography>
          <Typography  >
            Artist Info
          </Typography>
          <Typography  >
            {singleArtist.info}
          </Typography>
        </CardContent>
      </Card>


    </Box>



  )
}

export default SingleArtist