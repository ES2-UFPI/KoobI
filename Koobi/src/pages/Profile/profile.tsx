import React from 'react'
import { View, Text, Image} from 'react-native'
import BackButton from '../../components/BackButton';
import styles from './styles'


export function Profile() {
    return (
        <View style={styles.boxHeadProfile}>
            <BackButton/>
            <View style={styles.imageProfile}>
                <Image
                source={require('../../../assets/IconeDePerfil.png')}
                />
            <Text style={styles.textName}> Nome de Usuário </Text>
            </View>
            <View style={styles.boxAbout}>
                <Text style={styles.aboutText}>Sobre</Text>
                <Text style={styles.description} >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
            </View>
        </View>
    );
}