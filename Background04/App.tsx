import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Square, Rectangle, Circle, Oval, Triangle, Trapezoid, Pentagon, Hexagon} from 'react-native-shape';
export default function App() {

  const [shape, setShape] = React.useState('circle')
  
  function changeShape() {
    const shapes = ['Square', 'Rectangle', 'Circle', 'Oval', 'Triangle', 'Trapezoid', 'Pentagon', 'Hexagon']
    const randomIndex = Math.floor(Math.random() * shapes.length)
    setShape(shapes[randomIndex])
  }

  return (
    <SafeAreaView style= {{flex : 1}}>
      <View style={styles.main}>
        <TouchableOpacity
        style={styles.button}
          onPress={() => {
            changeShape()
          }}
        >
          <Text style={styles.text}>Change It</Text>
        </TouchableOpacity>
        <View style={styles.shapeContainer}>
          
        {
          shape === 'Square' && <Square size={100} color='red' />
        }
        {
          shape === 'Rectangle' && <Rectangle width={100} height={50} color='blue' />
        }
        {
          shape === 'Circle' && <Circle size={100} color='green' />
        }
        {
          shape === 'Oval' && <Oval width={100} height={50} color='yellow' />
        }
        {
          shape === 'Triangle' && <Triangle width={100} height={50} color='purple' />
        }
        {
          shape === 'Trapezoid' && <Trapezoid width={100} height={50} color='orange' />
        }
        {
          shape === 'Pentagon' && <Pentagon size={100} color='brown' />
        }
        {
          shape === 'Hexagon' && <Hexagon size={100} color='pink' />
        }
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main : {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button : {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 10,
    marginTop : 30,
    
  },
  text : {
    fontSize: 24,
    color: 'black',
  },
  shapeContainer : {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})