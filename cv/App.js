 import { response } from 'express'
import React, {useEffect, useState} from 'react'
 import {SafeAreaView,  View, Text,  Image,FlatList} from 'react-native'
 

 export default function App(){

  const[country, setCountry] = useState([])

  useEffect(() => {
    fetch('https://api.covid19api.com/countries',{
  method: 'GET', 
  headers: {
    "Accept": 'aplication/json '
  }
    })
    .then(response => response.json())
    .then(data => {
      setCountry(data.results)
    })
  }, [])

return(
   <SafeAreaView>
    <FlatList
    data={country}
    keyExtractor={(country) => country.name}
    contentContainerStyle={{ flexGrow: 1}}
    renderItem={showCountry}
    />
   </SafeAreaView>
)
 }

 function showCountry(item){

  const {name, url} = item.item

  const isoCountry = url.replace('https://countryflagsapi.com/:filetype/:code', '').replace()
  
  return(
<View>
  <Image

  />
  <Text> {name} </Text>
</View>
  )
 }