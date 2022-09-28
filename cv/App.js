 import React, {useEffect, useState} from 'react'
 import {SafeAreaView, Text, Image} from 'react-native'

 export default function App(){

  useEffect(() => {
    fetch('https://api.covid19api.com/countries',{
  method: 'GET', 
  headers: {
    "Accept": 'aplication/json '
  }
    })
  }, [])

return(
   <SafeAreaView>
    
   </SafeAreaView>
)
 }