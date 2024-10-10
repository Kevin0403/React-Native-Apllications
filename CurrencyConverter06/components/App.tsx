import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { StrictMode, useState } from 'react'
import CurrencyButton from './CurrencyButton'
import { currencyByRupee } from './Constants'
import Snackbar from 'react-native-snackbar'

export default function App() {

  const [ammount, setAmount] = useState('')
  const [targetCurrency , setTargetCurrency] = useState("")
  const [result, setResult]  = useState('')
  
  const handlePress = (targetValue : Currency) =>{
    if(!ammount){
      Snackbar.show({
        text: 'Please Enter any amount',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
    const inputAmount = parseFloat(ammount)
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)  }`
      setResult(result)
      setTargetCurrency(targetValue.name)
    } else {
      Snackbar.show({
        text: 'Please enter a valid amount',
        duration: Snackbar.LENGTH_SHORT,
      });
    }

  }  


  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupee}>
            <Text style={styles.symbolText}> ₹ </Text>
            <TextInput
            placeholder='Enter amount'
            keyboardType='numeric'
            value={ammount}
            onChangeText={setAmount}
            style={styles.textInput}
            maxLength={14}

              />          
          </View>
          {result && <View
          style = {styles.reasult} >
            <Text style = {styles.resultText}>Converted amount : {result}</Text>
          </View>}
          
        </View>
        <View 
          style = {styles.bottomContainer}>
            <FlatList
            numColumns={1}
            data = {currencyByRupee}
            keyExtractor={(item) => item.name}
            renderItem={({item}) => {
              return (
                <Pressable 
                style = {
                  [
                    styles.card,
                    targetCurrency === item.name && styles.selected
                  ]
                }
                onPress={() => handlePress(item)}
                >
                  <CurrencyButton {...item} /> 
                </Pressable>
              )
            }}
            />
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,  
    backgroundColor : '#101010',
    // alignContent : 'center',
    alignItems : 'center',
    justifyContent : 'center'
    
  },
  topContainer :{
    
    alignItems : 'center',
    margin : 10
  },
  bottomContainer : {
  },

  rupee : {
    flexDirection : 'row',
    alignItems : 'center',
  },
  symbolText : {
    color : '#ffffff',
    fontSize : 24,
  },
  textInput : {
    backgroundColor : '#909090',
    padding: 5,
    paddingHorizontal : 10,
    borderRadius : 10,
    fontSize : 20,
    // width : 150,
    textAlign : 'center'
  },
  reasult : {
    margin : 10,

  },
  resultText : {
    color : '#ffffff',
    fontSize : 24
  },
  card : {
     backgroundColor : '#999999',
     margin : 5,
     width : 100,
     borderRadius : 10,
     height : 100
  } ,
  selected : {
    backgroundColor : '#906060'
  },
})