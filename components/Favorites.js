import React, {useEffect, useState} from 'react'
import {Text, View, TextInput, Pressable, StyleSheet, FlatList, Button, Image} from 'react-native'
import { useSelector, useDispatch } from 'react-redux';

function Favorites() {
  const dispatch = useDispatch()
  const state = useSelector(state => state);
  const favoriteMovies = useSelector(state => state.favoritesReducer)  //has movieList and movieNumber



  return (
    <View>
        <Button title="+" color="red" onPress={() => dispatch({type: 'INCREMENT'})}/>
        <Button title="-" color="red" onPress={() => dispatch({type: 'DECREMENT'})}/>
        <Text>Value is: {state.changeButtonValue.buttonVal} </Text>
        <Text>Even or Odd? {state.changeButtonValue.oddOrEven} </Text>



        <FlatList 
          data={favoriteMovies.movieList}
          keyExtractor={(item, index) => item.imdbID+index}
          renderItem={({item}) => {
            return (
              <View>
                <Text>Item id: {item.id}, imdb id: {item.imdbID}</Text>
                <Text>Title: {item.Title}</Text>
                <Text>Year: {item.Year}</Text>
                <Image source={{uri: item.Poster}} style={styles.image}/>
              </View>
            )
          }}
        />
    </View>
  
  )
}

export default Favorites

const styles = StyleSheet.create({
  image: {
    width:150,
    height:200
  },
})