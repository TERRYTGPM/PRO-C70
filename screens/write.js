import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class Write extends React.Component {
  render(){
    return (
      <View style={styles.container}>
          <TextInput
          
          placeholder="Title of the story">

          </TextInput>
          <TextInput
          
          placeholder="Author of the story">

          </TextInput>
          <TextInput
          
          placeholder="Write the story"
          multiline={true}
          >

          </TextInput>

          <TouchableOpacity>
              
                <Text>
                    Submit
                </Text>

          </TouchableOpacity>
      </View>
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
