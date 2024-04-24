import React from "react";
import { View, StyleSheet, Text, Image, TouchableNativeFeedback } from "react-native";

const Body2UI = ({ books }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: books.img}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{books.title}</Text>
        <Text style={styles.sinopsis}>{books.sinopsis}</Text>
      </View>
      <View style = {styles.button}>
         <TouchableNativeFeedback>
            <Text style = {styles.text}>
               Read
            </Text>
         </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 150, // Diganti menjadi nilai absolut untuk tinggi
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    flexDirection: "row", // Diganti menjadi "row" agar sesuai dengan layout yang diinginkan
    alignItems: "center",
    marginBottom: 16,
    marginTop: 15,
    marginHorizontal: 15,
  },
  
  image: {
    width: 100,
    height: '90%',
    borderRadius: 10,
    marginLeft: 20, // Diganti menjadi marginLeft agar gambar berada di sisi kiri
  },
  details: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    marginBottom: 'auto',
    marginRight: '20',
    marginTop: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E4A6A",
  },
  sinopsis: {
    fontSize: 12,
    color: "#2E4A6A",
  },
  button: {
    lexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 'auto',
    borderWidth: 1,
    backgroundColor: '#eaa831',
    borderRadius: 5,
    borderColor: '#eaa831',
    width: 60,
    height: 40, 
    alignItems: "center",
    marginBottom: 5,
    marginRight: 50
 },
 text: {
  color: 'white',
  alignContent: 'center'
 }
});

export default Body2UI;
