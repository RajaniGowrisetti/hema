import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Audio} from 'expo-av'

export class Sounds extends React.Component(){
     playSound= async(textPhones) =>{
        var soundlink = "https://s3-whitehatjrcontent.whjr.online/phones/"+textPhones+".mp3";
        await Audio.sound.createAsync({
            uri:soundlink,
        },{shouldPlay:true})   
    }

    render(){
        return(
            <TouchableOpacity style={{backgroundColor:"green"}} 
            onPress={()=>{this.playSound(this.props.textPhones)}}>
            <Text>{this.props.textDisplay}</Text>
            </TouchableOpacity>
        );
    }
}
