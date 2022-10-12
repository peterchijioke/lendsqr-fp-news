import {
  FlatList,
  Image,
  ListRenderItemInfo,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
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

  useEffect(() => {
    dispatch(NEWS_LOAD(true));
  }, [dispatch]);

  const ItemComponent = ({ item, index }): any => {
    if (index == 1) {
      return (
        <Wrapper.Card style={{ elevation: 5 }}>
          <View style={{ flexDirection: "row", padding: 5 }}>
            <Wrapper
              style={{ height: 20, width: 20, backgroundColor: "black" }}
            ></Wrapper>
            <AppText.Title style={{ marginLeft: 5 }}>
              {item.topic.toUpperCase()}
            </AppText.Title>
          </View>
          <Wrapper style={{ width: "100%", height: 200, padding: 5 }}>
            <Image
              style={{ width: "100%", height: "100%", borderRadius: 5 }}
              source={{ uri: `${item?.media}` }}
            ></Image>
          </Wrapper>
          <AppText.SubTitle style={{ marginLeft: 5 }}>
            {item.title}
          </AppText.SubTitle>
          <Wrapper style={{ marginTop: 5 }}>
            <AppText.Body>{item?.published_date}</AppText.Body>
          </Wrapper>
        </Wrapper.Card>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: "100%", width: "100%" }}>
        <FlatList
          style={{ flex: 1 }}
          keyExtractor={(item, index) => `${index}`}
          data={allNews?.articles}
          renderItem={({ item, index }: any) => (
            <ItemComponent item={item} index={index} />
          )}
        />
      </View>
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
