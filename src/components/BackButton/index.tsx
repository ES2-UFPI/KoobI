import { StyleSheet, View, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import themes from '../../themes';
import Header from '../Header';
// import styles from './styles';

export default function BackButton() {
    return (
        <LinearGradient
        style={styles.trownBackButton}
        start={{x:0,y:1}}
	    end={{x:1,y:1}}
        colors={[themes.colors.tela.secondHeaderColor, themes.colors.tela.principalHeaderColor]}
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
        
        paddingLeft: '5%',
        justifyContent: 'center',
    },

});