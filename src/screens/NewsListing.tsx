import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Colors } from "../assets/colors/Colors";
import Wrapper from "./components/wrapper/Wrapper";
import { elevation } from "../partials/Style";
import AppText from "./components/text/AppText";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllNews,
  getNewsLoading,
} from "../application/selectors/news/Index";
import { NEWS_LOAD } from "../application/reducers/news/ui";
import { useIsFocused } from "@react-navigation/native";
export let newsListingName = "newsListing";

const NewsListing = () => {
  const dispatch = useDispatch();
  const allNews = useSelector(getAllNews);
  const loading = useSelector(getNewsLoading);

  // useEffect(() => {
  //   console.log("===============================================");
  //   console.log(allNews);
  //   console.log("===============================================");
  // }, [allNews]);

  useEffect(() => {
    dispatch(NEWS_LOAD(true));
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <Wrapper.Card style={{ elevation: 4 }}>
        <AppText.SubTitle>peter</AppText.SubTitle>
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
    padding: "5%",
  },
});
