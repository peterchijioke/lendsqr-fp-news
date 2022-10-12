import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../assets/colors/Colors";
import Wrapper from "./components/wrapper/Wrapper";
import { elevation } from "../partials/Style";
import AppText from "./components/text/AppText";
export let newsListingName = "newsListing";
const NewsListing = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Wrapper.Card style={{ elevation: 4, width: "95%" }}>
        <AppText>peter</AppText>
      </Wrapper.Card>
    </SafeAreaView>
  );
};

export default NewsListing;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: Colors.secondary,
    alignItems: "center",
  },
});
