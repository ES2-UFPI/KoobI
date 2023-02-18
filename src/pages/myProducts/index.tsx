import React, { useState, useRef } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import BookToSell from "../../components/BookToSell";
import BackButton from "../../components/BackButton/index";

export function MyProducts({ navigation }) {
  const [views, setViews] = useState([]);
  const scrollViewRef = useRef(null);

  return (
    <View
      style={{
        backgroundColor: "#E5CF96",
        height: "100%",
        width: "100%",
        alignItems: "center",
      }}
    >
      <View style={styles.headerBox}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackButton/>
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        ref={scrollViewRef}
        style={{ width: "100%" }}
        onContentSizeChange={() =>
          scrollViewRef?.current?.scrollToEnd({ animated: true })
        }
      >
        <View>{views}</View>
        <TouchableOpacity
          style={styles.addLivro}
          onPress={() => navigation.navigate('BookRegister')}
        >
          <Text style={styles.textAdd}>Adicionar Livro</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBox: {
    backgroundColor: "#16262E",
    justifyContent: "flex-start",
    width: "100%",
  },

  addLivro: {
    width: 250,
    height: 60,

    margin: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 15,
    elevation: 2,
    backgroundColor: "#E7E9D9",

    position: 'relative',
  },

  contentContainer: {
      justifyContent: 'center',
      alignItems: "center",
  },

  textAdd: {
    fontSize: 18,
    color: '#383235',
    fontWeight: "bold",
  },
});


// setViews([
//   ...views,
//   <View key={views.length} style={{alignItems: 'center'}}>
//     <BookToSell/>
//   </View>,
// ])