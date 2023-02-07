import { StyleSheet, View, Image} from 'react-native';
// import styles from './styles';

export default function BackButton() {
    return (
        <View style={styles.trownBackButton}>
            <Image
            source={require('../../../assets/BackIconNormal.png')}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    trownBackButton: {
        width: 77,
        height: 64,
        backgroundColor: '#A45F21',
        alignItems: 'center',
        justifyContent: 'center',
    },

});