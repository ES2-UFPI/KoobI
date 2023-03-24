import React from "react";
import { Text,  View, TouchableOpacity } from 'react-native'; 
import styles from "./styles"

interface ImageSelectorProps {
    OnClickCamera?: Function,
    OnClickGallery?: Function
}

export default function ImageSelector({...props}: ImageSelectorProps){
    return(
        <View>
            <View style={styles.textLabelArea}>
                <Text style={styles.textLabel}>
                    Adicione uma foto
                </Text>
            </View>

            <View style={styles.horizontal}>
                <TouchableOpacity 
                    style={styles.cameraButton}
                    onPress={() => props.OnClickCamera}
                    >
                    <Text style={styles.buttonText}>
                        Abrir a Câmera
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.galleryButton}
                    onPress={() => props.OnClickGallery}
                    >
                    <Text style={styles.buttonText}>
                        Abrir a Galeria 
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}