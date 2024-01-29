import React, { useState, useEffect } from 'react'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import Box from '@mui/material/Box'
import axios from 'axios'
import { Switch, Paper } from '@mui/material'
import Typography from '@mui/material/Typography'




const Home = () => {
 
  //------
  const [tracks, setTracks] = useState([])
  const [currentMusicIndex, SetCurrentMusicIndex] = useState(0)


  useEffect(() => {
    const getTracks = async () => {
      try {
        const { data } = await axios.get('/rest/v1/api/tracks/')
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
            autoPlayAfterSrcChange={true}
            src={tracks[currentMusicIndex].trackUrl}
            header=' '
            showSkipControls={true}
            onClickPrevious={handleClickPrevious}
            onClickNext={handleClickNext}
            customAdditionalControls={
              [
                RHAP_UI.LOOP,
                <div key='aux-tog' className='audio-toggle'>
                  <p>1</p><Switch key='switch' label='playlist' /><p>2</p>
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