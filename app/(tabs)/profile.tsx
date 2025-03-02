
import { Text, View,TextInput, Modal, FlatList,Image, ActivityIndicator, Button, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Link } from 'expo-router'; 
import React, {useState, useEffect} from "react";
const API_ENDPOINT = 'https:randomuser.me/api/?results=30';
//import filter from "lodash.filter";

export default function Profile() {
  const [isLoading,setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [fullData, setFullData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    setIsLoading(true);
    fetchData(API_ENDPOINT);
  }, []);
  const fetchData = async(url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
      console.log(json.results);
      setIsLoading(false);
    }
    catch(error) {
      setError(error);
      console.log(error);
      setIsLoading(false);

    }
  }
  const handleSearch = (query) => {setSearchQuery(query);

  }

  if( isLoading ) {
    return (
      
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color="#5500dc" />
      </View>
    )
  }

  if(error){

    <View style={styles.container}>
    <Text>Error in data fetching ...</Text>
  </View>


  }
  return (
    <View style={styles.container}>
      <TextInput 
      placeholder="Search"
      clearButtonMode="always"
      style={styles.searchBox}
      autoCapitalize="none"
      autoCorrect={false}
      value={searchQuery}
      onChangeText={(query) => handleSearch(query)}/>
      
      <FlatList data={data} keyExtractor={(item) => item.login.username} renderItem={({item}) => (
        <View style={styles.card}>

          <Image source={{uri: item.picture.thumbnail}}/> 
          <Text>{item.name.first} {item.name.last}</Text>
    
     
        </View>

      )}

        
      />

      
      






    </View>
  );
}


const styles = StyleSheet.create({
  searchBox: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginTop: 20,
    padding: 10,
    width: Dimensions.get('window').width * 0.8
  },
  desc: {
      fontSize: 16,
      lineHeight: 24,
      opacity: 0.7,
    },
    title: {
      fontWeight: "600",
      fontSize: 18,
      marginBottom: 12,
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      width: "90%",
      padding: 20,
      backgroundColor: "white",
      borderRadius: 8,
      alignItems: "center",
      
    },
    content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(79, 59, 153, 0.5)",
    },
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      justifyContent: 'flex-start', // Align items to the top
      paddingTop: 20,
      alignItems: 'center'
    },
    text: {
      color: '#fff',
    },
    button: {
  
      backgroundColor: 'white',
      borderRadius: 10,
      marginTop: 20,
      padding: 10,
      width: Dimensions.get('window').width * 0.8
    },
    buttonText: {
      color: '#25292e',
      paddingLeft: 50,
      fontSize: 16,
      fontWeight: 'bold',
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
});

