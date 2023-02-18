import { StyleSheet, View, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../Header';
// import styles from './styles';

export default function BackButton() {
    return (
        <LinearGradient
        style={styles.trownBackButton}
        start={{x:0,y:1}}
	    end={{x:1,y:1}}
        colors={['#2E4756', '#16262E']}
        >
            <Image
            source={require('../../../assets/BackIconNormal.png')}
            />
        </LinearGradient>
        

    );
}

const styles = StyleSheet.create({
    trownBackButton: {
        width: '40%',
        height: 64,
        // backgroundColor: '#2E4756',
        
        paddingLeft: '5%',
        justifyContent: 'center',
    },

});