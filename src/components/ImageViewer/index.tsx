import React from "react"
import { Image } from "react-native-elements";
import styles from "./styles"

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
    const imageSource =
      selectedImage !== null ? { uri: selectedImage } : placeholderImageSource;
  
    return <Image source={imageSource} style={styles.image} />;
}