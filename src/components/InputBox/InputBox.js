import { View, TextInput, StyleSheet } from 'react-native';
import { AntDesign, MaterialIcons} from '@expo/vector-icons';
import { useState } from 'react';

const InputBox = () => {
  const [newMessage, setMessage] = useState('');
  
  const onSend = () => {
    console.warn("Send a new message:", newMessage);
    setMessage('');
  };

  return (
    <View style={styles.container}>
        { /* Icon */ }
        <AntDesign name='plus' size={20} color='royalblue' />

        { /* Text Input */ }
        <TextInput value={newMessage} onChangeText={setMessage} style={styles.input} placeholder='Type your message'/>

        { /* Icon */ }
        <MaterialIcons onPress={onSend} style={styles.send} name='send' size={18} color='white' />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        padding: 5,
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    input:{
        fontSize: 15,
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 50,
        paddingHorizontal: 10,
        borderColor: 'lightgray',
        borderWidth: StyleSheet.hairlineWidth,
        marginHorizontal: 10
    },
    send:{
        backgroundColor: 'royalblue',
        padding: 7,
        borderRadius: 20,
        overflow: 'hidden',
    }
});

export default InputBox;