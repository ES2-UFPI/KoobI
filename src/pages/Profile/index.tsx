import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

import BackButton from '../../components/BackButton';
import themes from '../../themes';
import styles from './styles'


export function Profile({ navigation }) {
    return (
        <ScrollView contentContainerStyle={{ backgroundColor: themes.colors.tela.primaryBackground, height: '120%' }}>
            <View style={styles.boxHeadProfile}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackButton />
                </TouchableOpacity>
            </View>
            <View style={styles.imageProfile}>
                <Image
                source={require('../../../assets/IconeDePerfil.png')}
                />
                <Text style={styles.textName}> Zezim Livros </Text>
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

                    <Text style={styles.textLabels}>
                        Meus Produtos
                    </Text>
                    
                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.line}>
                    <FontAwesome5 name="user-edit" size={24} color="black" />
                    <Text style={styles.textLabels}>Editar Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.line}>
                    <Image
                    source={require('../../../assets/log-out.png')}
                    />
                    <Text style={styles.textLabels}>
                        Sair
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}