import React, { useState } from "react";

import { View, StyleSheet, useColorScheme, Text, Button, ImageBackground } from "react-native";

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  const [count, setCount] = useState(1)
  return (
    <View style = {styles.container}>
      <ImageBackground style={{width: '100%', height: '100%'}} src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" >
        <View style = {styles.container}>
      <Text style={[isDarkMode ? styles.whiteText : styles.darkText, styles.count]}>Count : {count}</Text>
      <Button onPress={() => {setCount((prev) => prev+1)}} title="Click on me"/>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width : '100%',
    height : '100%',
    display : 'flex',
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems: "center",
  },
  count : {
    fontSize : 50 ,
    color : 'red',
    fontWeight : 'bold'
  },
  whiteText : {
    color: '#FFFFFF',
    padding : 10

  },
  darkText : {
    color : '#000000'
  }
});

export default AppPro;
