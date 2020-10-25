import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,

} from 'react-native';


const image = { uri: 'https://img.elo7.com.br/product/zoom/27835C5/big-poster-zelda-breath-of-the-wild-lo07-tamanho-90x60-cm-presente-geek.jpg' }

const ImageComponent = () => {

  return (
    <View style={styles.container}>
      <ImageBackground 
        blurRadius={2} 
        source={image} 
        style={styles.image}>
        <TouchableOpacity
          onPressIn={() => Alert.alert('Click image')}
        >
          <Image
            style={styles.stretch}
            blurRadius={0}
            source= {image}
          />
        </TouchableOpacity>
      </ImageBackground>

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },

  tinyLogo: {
    width: 100,
    height: 100,
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems:"center",
  },

  logo: {
    width: 66,
    height: 58,
  },

  stretch: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 20,
  },
});


export default ImageComponent;
