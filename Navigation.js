import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import {useDispatch, useSelector} from 'react-redux'
import { StyleSheet, Text, View, ImageBackground } from 'react-native';


// coponents
import MovieList from './components/MovieList';
import Favorites from './components/Favorites';

const Tab = createBottomTabNavigator()
function Navigation() {
  const movieNumber = useSelector(state => state.favoritesReducer.movieNumber)

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Tab.Navigator>
        <Tab.Screen name="movielist" component={MovieList} options={{title:"Movie List", tabBarIcon: () => { return <AntDesign name="home" size={24} color="black" />}  }}/>
        <Tab.Screen name="favorites" component={Favorites} options={{title:"My Favorite Movies", tabBarBadge: movieNumber,  tabBarIcon: () => { return <AntDesign name="plussquare" size={24} color="black" />}}} />
      </Tab.Navigator>
   </NavigationContainer>
  )
}

export default Navigation


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:50,
    paddingVertical: 80
  }
})