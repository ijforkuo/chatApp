import { View, Text, ImageBackground, StyleSheet, FlatList } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import bg from '../../assets/images/BG.png';
import Message from "../components/Message/Message";
import messages from '../../assets/data/messages.json'; 
import InputBox from "../components/InputBox/InputBox";

const ChatScreen = () => {

    const route = useRoute();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ title: route.params.name});
    }, [route.params.name])
    
    
    return(
        <ImageBackground source={bg} style={StyleSheet.bg}>
            <FlatList data={messages} renderItem={({item}) => <Message message={item} />} style={styles.list} inverted />
            <InputBox/>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    list: {
        padding: 10,
    },
});

export default ChatScreen;