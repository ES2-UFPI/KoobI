import React from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native'
import BackButton from '../../components/BackButton';
import styles from './styles'


export function Profile({ navigation }) {
    return (
        <View style={{ backgroundColor: '#FFFDEA', height: '100%' }}>
            <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.boxHeadProfile}
            >
                <BackButton/>
            </TouchableOpacity>
            <View style={styles.imageProfile}>
                <Image
                source={require('../../../assets/IconeDePerfil.png')}
                />
                <Text style={styles.textName}> Nome de Usuário </Text>
            </View>
            <View style={styles.boxAbout}>
                <Text style={styles.aboutText}>Sobre</Text>
                <Text style={styles.description} >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
                <TouchableOpacity style={styles.line}>
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