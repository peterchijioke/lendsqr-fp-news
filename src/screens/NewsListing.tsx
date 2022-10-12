import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../assets/colors/Colors";
import Wrapper from "./components/wrapper/Wrapper";
export let newsListingName = "newsListing";
const NewsListing = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Wrapper style={styles.cardWrapper}>
        <Wrapper.Card
          style={{ height: "30%", width: "90%", borderRadius: 5 }}
        ></Wrapper.Card>
      </Wrapper>
    </SafeAreaView>
  );
};

export default NewsListing;

const styles = StyleSheet.create({
  container: { display: "flex", flex: 1, backgroundColor: Colors.secondary },
  cardWrapper: {
    height: "100%",
    width: "100%",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
});
