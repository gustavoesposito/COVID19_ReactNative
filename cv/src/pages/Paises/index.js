import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default class Paises extends Component{
    render(){
        return(
            <View>
                <Text style={styles.nomePais}>{this.props.data.nome}</Text>
                <TouchableOpacity onPress={( ) => {
                    
                }}>
                    <Image
                    style={styles.nomePais}
                    source={{uri:this.props.data.foto}}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles  = StyleSheet.create({
    nomePais:{
        color: '#fff',
        fontSize: 22,
        fontWeight:'bold',
        justifyContent:"center",
        alignSelf:'center',
        marginTop:30,
        marginBottom:20
    },
    capaPais:{
        width:120,
        height:150,
        alignSelf:'center', 
        borderRadius:20
    }
})