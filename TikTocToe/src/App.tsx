import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { defaultData } from "./constants";

export default function App() {
  const [turn, setTurn] = useState(0);
  const [winner, setWinner] = useState(NaN);
  const [data, setData] = useState(
    defaultData
  );

  function changeTurn(){
    setTurn(turn === 0 ? 1 : 0);
  }

  function checkWinner(){
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for(let i = 0; i < winningConditions.length; i++){
      const [a, b, c] = winningConditions[i];
      if(!isNaN(data[a].value) && data[a].value === data[b].value && data[a].value === data[c].value){
        setWinner(data[a].value);
        return;
      }
    }
  }

  function handlePress(item : Fill){
    return function(){
      if(item.value || winner){
        return;
      }
      const newData = [...data];
      newData[item.index].value = turn;
      setData(newData);
      checkWinner();
      changeTurn();
    }
  }

  function resetGame(){
    for(let i = 0; i < data.length; i++){
      data[i].value = NaN;
    }
    setTurn(0);
    setWinner(NaN);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          {!isNaN(winner) ? (
            <Text style={styles.winnerText}>
              Winner is {winner === 0 ? "O" : "X"}
            </Text>
          ) : (
            <Text style={styles.turnText}>
              {turn === 0 ? "O" : "X"}
              's Turn
            </Text>
          )}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            data={data}
            numColumns={3}
            renderItem={({ item }) => (
              <Pressable
                onPress={handlePress(item)}
                disabled={!isNaN(winner) ? true : !isNaN(item.value) ? true : false}
              >
                <View
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "#aaaaaa",
                    margin: 5,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style = {[{fontSize : 24}, item.value === 0 ? {color : 'red'} : {color : 'green'}]}>{
                    item.value === 0 ? "O" : item.value === 1 ? "X" : ""
                    }</Text>
                </View>
              </Pressable>
            )}
            keyExtractor={(item) => item.index.toString()}

          />
        </View>
       <View style={styles.resetButton}>
          <Pressable
            onPress={() => resetGame()}
          >
            <Text style={styles.resetText}>Reset</Text>
          </Pressable>
          </View> 
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010",
    paddingTop : 10
  },
  topContainer: {
    backgroundColor : '#aaaaaa',
    borderRadius : 10,
    marginHorizontal : 'auto',
    paddingHorizontal : 10,

  },
  winnerText: {
    fontSize : 24,
    paddingHorizontal : 10,
    padding : 5,
    textAlign : 'center'
  },
  turnText: {
    fontSize : 24,
    paddingHorizontal : 10,
    padding : 5,
    textAlign : 'center'
  },
  bottomContainer: {
    marginTop : 10,
    alignItems : 'center'

  },
  resetButton: {
    backgroundColor : 'green',
    padding : 10,
    borderRadius : 10,
    marginHorizontal : 'auto',
    marginTop : 20
  },
  resetText : {
    color : '#aaaaaa',
    fontSize : 20,
  }
});
