import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style= {styles.cardTitle}>What's new in Javascript 21 -ES12</Text>
        </View>
        <Image
          source={{
            uri:
              "https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text style ={styles.bodyText} numberOfLines={4}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            recusandae eos nemo optio debitis distinctio. Officiis voluptatum
            dolores ducimus deserunt explicabo, nam velit distinctio
            consequuntur, non praesentium dignissimos perferendis earum
            accusamus cupiditate dicta! Ut itaque, laboriosam alias maiores
            libero soluta corrupti debitis aliquid? Consequuntur a nostrum
            eligendi quas sunt nesciunt!
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite("https://www.google.com")}
          >
            <Text style={styles.socialLink}>Read more</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite("https://www.linkedin.com/in/kevin-sangani-8160b2230/")}
          >
            <Text style={styles.socialLink}>Follow me on Linkedin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  card: {
    margin : 10,
    flex : 1,
    borderRadius : 10,

  },
  elevatedCard: {
    backgroundColor : 'gray',
    elevation : 3,
    shadowOffset : {
        width : 1,
        height : 1
    }
  },
  headingContainer: {
    padding : 10,
    flex : 1,
    alignItems : 'center',
  },
  cardTitle: {
    fontSize : 20,
    color : 'white',
    fontWeight : 'bold'
  },
  cardImage: {
    height: 200,
    marginBottom : 10
  },
  bodyContainer: {
    marginHorizontal : 10,
    marginBottom : 10
  },
  bodyText : {
    color : '#f5f5f5'

  },
  footerContainer: {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'space-evenly',
    marginBottom : 10,
    marginHorizontal : 16
  },
  socialLink: {
    color : 'blue'
  },
});
