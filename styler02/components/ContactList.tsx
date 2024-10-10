import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
          uid: 1,
          name: 'Hitesh Choudhary',
          status: 'Just an extra ordinary teacher',
          imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
          uid: 2,
          name: 'Kevin Sangani',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://avatars.githubusercontent.com/u/96529851?v=4',
        },
        {
          uid: 3,
          name: 'Sanket Singh',
          status: 'Making your GPay smooth',
          imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
          uid: 4,
          name: 'Anirudh Jwala',
          status: 'Building secure Digital banks',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
      ];
  return (
    <View >
        <Text style= {styles.headingText}>ContactList</Text>
        <ScrollView
        scrollEnabled = {false}
        style= {styles.container}>
      {
        contacts.map(({uid, name, status, imageUrl})=> {
            return (
                <View style={styles.card} >
                    <Image source={{
                        uri : imageUrl
                    }}
                    style = {styles.cardImage}/>
                    <View style= {styles.cardBody}>
                        <Text style={styles.cardName}>{name}</Text>
                        <Text style={styles.cardStatus}>{status}</Text>
                    </View>
                </View>
            )
        })
      }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 8,
    },
    container : {
        
    },
    card : {
        backgroundColor : '#AAAAAA',
        padding : 10,
        margin : 1,
        flex : 1,
        flexDirection : 'row',
        elevation : 3
    },
    cardBody : {
        flex : 1,
        justifyContent : 'center',
        margin : 10,
    },
    cardImage : {
        height : 80,
        width : 80,
        borderRadius : 80,
        
    },
    cardName : {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 20,
        marginBottom : 5
    },
    cardStatus : {

    }

})