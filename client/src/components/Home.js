import React, { useState, useEffect } from 'react'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import Box from '@mui/material/Box'
import axios from 'axios'
import { Switch, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'



const Home = () => {
  //---card
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }))


  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }



  //------
  const [tracks, setTracks] = useState([])
  const [currentMusicIndex, SetCurrentMusicIndex] = useState(0)


  useEffect(() => {
    const getTracks = async () => {
      try {
        const { data } = await axios.get('api/tracks')
        console.log(data)
        console.log(data[1].trackUrl)
        setTracks(data)
      } catch (error) {
        console.log(error)
      }
    }

    getTracks()
  }, [])



  // const randomMusicIndex = [Math.floor(Math.random() * tracks.length)]


  console.log(currentMusicIndex)



  const handleClickPrevious = () => {
    console.log('back clicked')
    currentMusicIndex <= 1 ? SetCurrentMusicIndex(tracks.length - 1) : SetCurrentMusicIndex(currentMusicIndex - 1)
    console.log('current index-->', currentMusicIndex)
  }

  const handleClickNext = () => {
    console.log('next clicked')
    currentMusicIndex >= tracks.length - 1 ? SetCurrentMusicIndex(0) : SetCurrentMusicIndex(currentMusicIndex + 1)
    console.log('current index-->', currentMusicIndex)
  }




  return (
    <Box className='player-container'>
      {tracks.length > 0 &&
        <>
          <Paper className='home-card' elevation={5}>
            <div className='album-img'><img src='https://res.cloudinary.com/ddn3rjqii/image/upload/v1655286046/genericAlbum_olbhs5.png' /></div>
            <div className='home-card-content'>
              <Typography variant='h4'>{tracks[currentMusicIndex].title}</Typography>
              <Typography variant='h5'>{tracks[currentMusicIndex].artist}</Typography>
            </div>


          </Paper>

          <AudioPlayer className='audioplayer'
            onEnded={handleClickNext}
            autoPlayAfterSrcChange={false}
            src={tracks[currentMusicIndex].trackUrl}
            header=' '
            showSkipControls={true}
            onClickPrevious={handleClickPrevious}
            onClickNext={handleClickNext}
            customAdditionalControls={
              [
                RHAP_UI.LOOP,
                <div key='aux-tog' className='audio-toggle'>
                  <p> All</p><Switch key='switch' label='playlist' /><p> User</p>
                </div>
              ]
            }

          />
        </>
      }

    </Box>
  )

}

export default Home