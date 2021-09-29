import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Database from './database';
import Sounds from './Sounds';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      textDisplay: [],
      textPhones:[]
    };
  }

  render() {
    return (
      <SafeAreaProvider>
        <Header
          leftComponent={{ icon: 'menu', style: { color: '#fff' } }}
          centerComponent={{ text: 'Monkey Chunky', style: { color: 'black' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Image
          source={require('./download.jpg')}
          style={{
            alignSelf: 'center',
          }}></Image>
        <TextInput
          placeholder="name"
          maxLength={10}
          style={{
            border: 'solid',
            backgroundColor: '#b8b8b8',
            textAlign: 'center',
            width: '50%',
            height: '20',
            marginTop: '10%',
            alignItems: 'center',
            marginLeft: '25%',
          }}
          onChangeText={(textinput) => {
            this.setState({
              text: textinput,
            });
          }}></TextInput>

        <TouchableOpacity
          onPress={() => {
            this.setState({
              textDisplay: Database[this.state.text].chunks,
              textPhones: Database[this.state.text].phones,
            });

          }}
          style={{
            backgroundColor: 'black',
            width: '25%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            alignSelf: 'center',
          }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>click</Text>
        </TouchableOpacity>

        <View>
          {this.state.textDisplay.map((item,index) => {
            return (
              <Sounds>
                {this.state.textDisplay[index]}
                {this.state.textPhones[index]}
              </Sounds>
            );
          })}
        </View>
      </SafeAreaProvider>
    );
  }
}

// const styles = StyleSheet.create({
//  container: {
//     flex: 1,
//     backgroundColor: '#b8b8b8',
//   }
// });
