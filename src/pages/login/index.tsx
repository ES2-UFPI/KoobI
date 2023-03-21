import React , {useState} from "react";
import { Modal, View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import TextInputWithLabel from "../../components/TextInputWithLabel";

import styles from  "../Login/styles"

export default function Login({ navigation }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    return(
        <View style={styles.container}>

            <TextInputWithLabel
                name="Email"
                value={email}
                ktype="email-address"
                onChangeText={setEmail}

            />

            <TextInputWithLabel
                name="Senha"
                value={password}
                ktype="default"
                onChangeText={setPassword}
                isPassword = {true}
            />

            <TouchableOpacity
            
            >
                <Text>
                    Entrar
                </Text>
            </TouchableOpacity>




        </View>




    )
}