import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FanctCard() {
  return (
    <View>
      <Text style= {styles.headingText}>Trending Places</Text>
      <View  style= {[styles.card, styles.cardElevated]}>
        <Image 
        source={{
            uri : 'https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }}
        style = {styles.cardImage}/>
        <View style= {styles.cardBody}>
            <Text style={styles.cardTitle}>Flower Pot</Text>
            <Text style={styles.cardLabel} >Beautiful , very Nice</Text>
            <Text style= {styles.cardDescription}> Lorem ipsum dolor sit, amet consectetur adipisicin Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati ipsam voluptates, aliquid dolor magni dolore officia ad veniam magnam repellendus doloremque similique consequatur cumque asperiores modi expedita enim, consectetur impedit. </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 8,
    },
    card : {
      // width: 350,
      height: 360,
      marginVertical : 16,
      marginHorizontal : 12,
      borderRadius : 10
    },
    cardElevated : {
      backgroundColor : 'gray',
      elevation : 3

    },
    cardImage : {
        height : 150,
        marginBottom : 8
    },
    cardBody : {
     flex : 1,
     flexGrow : 1,
     paddingHorizontal : 10
      // margin : 5
    },
    cardTitle : {
      color : 'white',
      fontSize : 25,
      marginBottom : 6

    },
    cardLabel : {
      fontSize : 18,
      color : 'black',
      marginBottom : 6
    },
    cardDescription : {
      color : '#101010',
      flexShrink : 1,
      marginBottom : 10
    }
})