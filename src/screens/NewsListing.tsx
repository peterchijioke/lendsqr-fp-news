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
import Helper from "../partials/Helper";
import Button from "./components/button/Button";
export let newsListingName = "newsListing";

const NewsListing = () => {
  const dispatch = useDispatch();
  const allNews = useSelector(getAllNews);
  const loading = useSelector(getNewsLoading);
  const helperClass = new Helper();
  useEffect(() => {
    dispatch(NEWS_LOAD(true));
  }, [dispatch]);

  const ItemComponent = ({ item, index }): any => {
    // if (index == 1) {
    return (
      <Button
        onPress={() => console.log("Go to detaild")}
        style={{
          elevation: 10,
          padding: "4%",
          width: "90%",
          alignSelf: "center",
          marginVertical: 10,
          backgroundColor: Colors.secondary,
        }}
      >
        <View style={{ flexDirection: "row", marginBottom: 5 }}>
          <Wrapper
            style={{ height: 20, width: 20, backgroundColor: "black" }}
          ></Wrapper>
          <AppText.Title style={{ marginLeft: 5 }}>
            {item.topic.toUpperCase()}
          </AppText.Title>
        </View>
        <Wrapper style={{ height: 200 }}>
          <Image
            style={{ width: "100%", height: "100%", borderRadius: 5 }}
            source={{ uri: `${item?.media}`, cache: "only-if-cached" }}
          ></Image>
        </Wrapper>
        <AppText.SubTitle style={{ fontWeight: "800" }}>
          {item.title}
        </AppText.SubTitle>
        <Wrapper style={{ marginTop: 5 }}>
          <AppText.Body>{`${helperClass.formatDate(
            item?.published_date
          )}`}</AppText.Body>
        </Wrapper>
      </Button>
    );
    // }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Wrapper
        style={{
          width: "90%",
          alignSelf: "center",
          alignItems: "flex-end",
          marginTop: "2%",
        }}
      >
        <Button onPress={() => console.log("runtime error")} style={{}}>
          <AppText.SubTitle
            style={{ textAlign: "center", color: Colors.secondary }}
          >
            Runtime Error
          </AppText.SubTitle>
        </Button>
      </Wrapper>
      <View
        style={{
          height: "100%",
          width: "100%",
          marginTop: 5,
          marginBottom: 5,
        }}
      >
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
  },
});
