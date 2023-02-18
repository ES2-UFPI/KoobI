import React from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native'
import BackButton from '../../components/BackButton';
// import { MyProducts } from '../myProducts/myProducts';
// import { useNavigation } from '@react-navigation/native';
import styles from './styles'


export function Profile({ navigation }) {
    return (
        <View style={{ backgroundColor: '#E5CF96', height: '100%' }}>
            <View style={styles.boxHeadProfile}>
                <TouchableOpacity
                onPress={() => navigation.goBack()}
                // style={{ width: 77,}}
                >
                    <BackButton />
                </TouchableOpacity>
            </View>
            <View style={styles.imageProfile}>
                <Image
                source={require('../../../assets/IconeDePerfil.png')}
                />
                <Text style={styles.textName}> Usuário comprador </Text>
            </View>
            <View style={styles.boxAbout}>
                <Text style={styles.aboutText}>Sobre</Text>
                <Text style={styles.description} >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
                <TouchableOpacity
                    style={styles.line}
                    onPress={() => navigation.navigate('Produtos')}
                    >
                    
                    <Image
                    source={require('../../../assets/prod.png')}
                    />

                    <Text style={{
                        marginLeft: 20,
                        fontSize: 25,
                        fontWeight: 'bold',
                    }}>
                        Meus Produtos
                    </Text>
                    
                </TouchableOpacity>
                <TouchableOpacity style={styles.line}>
                    <Image
                    source={require('../../../assets/log-out.png')}
                    />
                    <Text style={{
                        marginLeft: 20,
                        fontSize: 25,
                        fontWeight: 'bold',
                    }}>
                        Sair
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}