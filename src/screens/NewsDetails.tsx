import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import Wrapper from "./components/wrapper/Wrapper";
import AppText from "./components/text/AppText";
import Helper from "../partials/Helper";
import { Colors } from "../assets/colors/Colors";
export let newsDetailsName = "newsDetails";
const NewsDetails = ({ route, navigation, ...props }) => {
  const { item } = route.params;
  let Navigation = (screenName: any): void => {
    navigation.navigate(`${screenName}`);
  };

  useEffect(() => {
    console.log(item);
  }, []);

  const helperClass = new Helper();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.secondary }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <Wrapper
          style={{
            width: "90%",
            alignSelf: "center",
            marginVertical: 10,
            padding: 4,
            backgroundColor: Colors.secondary,
          }}
        >
          <AppText.SubTitle style={{ fontWeight: "800", marginBottom: 5 }}>
            {item?.title.toUpperCase()}
          </AppText.SubTitle>
          <Wrapper style={{ height: 200 }}>
            <Image
              style={{ width: "100%", height: "100%", borderRadius: 5 }}
              source={{ uri: `${item?.media}`, cache: "only-if-cached" }}
            />
          </Wrapper>
          {/* Topic and Author */}
          <Wrapper
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 5,
              justifyContent: "space-between",
            }}
          >
            {/* Topic */}
            <Wrapper
              style={{
                flexDirection: "row",
                marginBottom: 2,
                marginTop: 5,
              }}
            >
              <Wrapper
                style={{ height: 20, width: 20, backgroundColor: "black" }}
              ></Wrapper>
              <AppText.Title style={{ marginLeft: 5 }}>
                {item?.topic.toUpperCase()}
              </AppText.Title>
            </Wrapper>

            {/* Author */}

            <AppText style={{}}>{item?.author}</AppText>
          </Wrapper>

          {/* Date */}
          <Wrapper style={{ marginTop: 5 }}>
            <AppText.Body>{`${helperClass.formatDate(
              item?.published_date
            )}`}</AppText.Body>
          </Wrapper>

          <Wrapper style={{ marginTop: 10 }}>
            <AppText.Body>{item?.summary}</AppText.Body>
          </Wrapper>
        </Wrapper>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({});
