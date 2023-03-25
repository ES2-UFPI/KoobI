import React , {useState} from "react";
import { Modal, View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import Radio from "../../components/Radio/index" 
import styles from "../UserRegister/styles"
import { Masks } from "react-native-mask-input";

import addNewUser from "../../services/addNewUser"

export default function UserRegister({ navigation }){
    return(
        <View style={styles.container}>

        </View>



    )


}

/*
const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log(email,password)
    addNewUser(email, password)
    }
    onPress={() => {
                        handleRegister(email, password);}
*/
