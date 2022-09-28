import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';
import React, {Component}from 'react'
import api from './src/services/api'
 import Paises from './src/pages/Paises';
 

 

export default class App extends Component(){

  constructor(props){
    super(props)
    this.state = {
      paises:[]
    }
  }

  async componentDidMount(){
    const response = await api.get('/paises')
    this.setState({
      paises: response.data
    })
  }

  render(){ 
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data={this.state.paises}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Paises/>}
      />
  
    </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
