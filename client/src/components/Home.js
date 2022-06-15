import React, { useState } from 'react'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import Box from '@mui/material/Box'



const Home = () => {

  // const playlist = [
  //   {
  //     title: 'song 1',
  //     src: 'https://res.cloudinary.com/ddn3rjqii/video/upload/v1655134425/audio_tracks/fsm-team-banger_geojaj.mp3',
  //   },
  //   {
  //     title: 'song 2',
  //     src: 'https://res.cloudinary.com/ddn3rjqii/video/upload/v1655134420/audio_tracks/twisterium-angels-rock_c6h2di.mp3',
  //   }
  // ]

  // // const PlayListState = {
  // //   currentMusicIndex: number
  // // }
  // const currentMusicIndex =  number 
  // // class PlayList extends Component <PlayListState> {
  // //   state = {
  // //     currentMusicIndex: 0,
  // //   }

  // const handleClickPrevious = () => {
  //   this.setState((prevState) => ({
  //     currentMusicIndex: prevState.currentMusicIndex === 0 ? playlist.length - 1 : prevState.currentMusicIndex - 1,
  //   }))
  // }

  // const handleClickNext = () => {
  //   this.setState((prevState) => ({
  //     currentMusicIndex: prevState.currentMusicIndex < playlist.length - 1 ? prevState.currentMusicIndex + 1 : 0,
  //   }))
  // }

  return (
    <Box className='player-container'>
      <h1>HOME</h1>
      <div className='trackinfo'></div>
      <AudioPlayer className='audioplayer'
        // onEnded={this.handleClickNext}
        autoPlayAfterSrcChange={true}
        src='https://res.cloudinary.com/ddn3rjqii/video/upload/v1655134420/audio_tracks/twisterium-angels-rock_c6h2di.mp3'
        header='track_title'
        showSkipControls={true}
        // onClickPrevious={this.handleClickPrevious}
        // onClickNext={this.handleClickNext}
        customAdditionalControls={
          [
            RHAP_UI.LOOP,
            <button key={'info'}>button 2 </button>
            // <button>button 3 </button>,
            // <button>button 4 </button>
          ]
        }

      />

    </Box>
  )

}

export default Home