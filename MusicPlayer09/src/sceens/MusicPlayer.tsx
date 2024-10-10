import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TrackPlayer, {Event, Track, useTrackPlayerEvents} from 'react-native-track-player'
import { playListData } from '../constants'
import SongSlider from '../components/SongSlider'
import ControlCenter from '../components/ControlCenter'
import SongInfo from '../components/SongInfo'
const {width} = Dimensions.get('window')




export default function MusicPlayer() {
    const [track, setTrack] = useState<Track | null>()



    useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
        switch (event.type){
            case Event.PlaybackActiveTrackChanged:
                const playingTrack = await TrackPlayer.getActiveTrack()
                setTrack(playingTrack)
                console.log(`${track} 121235`)

                break;
            default:
                break;
        }
    })

    const renderArtWork = (track) => {
        console.log(track)

        console.log(123)
        return  (
            <View style={styles.listArtWrapper}>
                <View style={styles.albumArtImg}>
                    {track?.artwork && (
                        <Image 
                        style={styles.albumArtImg}
                        source={{uri: track?.artwork?.toString()}}
                        />
                    )}
                </View>
            </View>
        )
    }


  return (
    <View>
      <FlatList
      horizontal
      data =  {playListData}
      renderItem={({item})=> renderArtWork(item)}
      keyExtractor={song => song.id.toString()}
      />
      <SongInfo track={track}/>
      <SongSlider /> 
      <ControlCenter /> 
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#001d23',
      },
      listArtWrapper: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
      },
      albumContainer: {
        width: 300,
        height: 300,
      },
      albumArtImg: {
        height: '100%',
        borderRadius: 4,
      },
    });
