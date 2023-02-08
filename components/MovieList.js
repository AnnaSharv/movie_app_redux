import {useState, useEffect} from 'react'
import {Text, View, TextInput, Pressable, StyleSheet, FlatList, Image, Button} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import {useDispatch, useSelector} from 'react-redux'


function MovieList() {
  const dispatch = useDispatch()

  const [movieList, setMovieList] = useState([])
  const [loading, setLoading] = useState(false)

  // const [favorites, setFavorites] = useState(state.favorites)
  // useEffect(() => {
  //     setFavorites(state.favoritesReducer)
  //   }, [state.favoritesReducer])

   function fetchMovies(searchTerm) {
      fetch(`https://www.omdbapi.com/?apikey=7d8ece08&s=${searchTerm}`)
      .then((response) => response.json())
      .then((result) => {
        setMovieList(result.Search);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
   }

  
  return (
    <View style={styles.container}>
        <TextInput style={styles.input} onChangeText={(text) => fetchMovies(text)} placeholder="Search movies"/>
       
        <FlatList 
          style={styles.flatList}
          data={movieList}
          renderItem={({item}) => (
            <View style={styles.itemCard}>
              <Text style={styles.itemCardTitle}>{item.Title}</Text>
              <Image source={{uri: item.Poster}} style={styles.image}/>

              <Pressable android_ripple={{color: "#cecece"}} style={styles.button} onPress={() => dispatch({type: 'ADD_FAVORITE_MOVIE', payload: item})}>
                <Text style={styles.buttonText}>Save</Text>
              </Pressable>
            </View>
          )}
          keyExtractor={(item) => item.imdbID}
        />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex:1
    },
    input: {
      borderWidth: 1,
      backgroundColor: 'white', 
      margin: 20,
      height: 50,
      paddingLeft: 20
    },
    flatList: {
      borderWidth: 1,
      height: 200,
      margin: 20,
      padding: 20
    },
    image: {
      width:150,
      height:200
    },
    itemCardTitle: {
      fontSize:24,
      textAlign: 'center',
      marginBottom:20
    },
    itemCard: {
      marginBottom:20,
      padding:20,
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    button: {
      backgroundColor: '#ae312f',
      paddingHorizontal: 60,
      paddingVertical:10,
      marginTop: 10
    },
    buttonText: {
      fontSize:12,
      fontWeight: 'bold',
      color: 'white'
    }
})

export default MovieList
