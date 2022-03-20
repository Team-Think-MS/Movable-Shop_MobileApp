import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import Swiper from "react-native-swiper/src";

//

var { width } = Dimensions.get("window");

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      "https://pbs.twimg.com/media/DQ_YGo0WsAAxGhX.jpg",
      "https://img.freepik.com/free-vector/watermelon-juice-bottles-sale-banner_1268-10710.jpg",
      "https://finndit.com//assets/upload_file/company/dairy-Products_-_Copy11.jpg",
      "https://www.starpik.com/wp-content/uploads/2019/07/Strawberry-ice-cream-cone-Vector-realistic.-Swirled-smooth-creamy-toppings.-Fruits-splash-juicy-background-168053.jpg",
      "https://img.freepik.com/free-vector/orange-juice-bottles-with-splashing-juice-ads_46857-698.jpg?size=626&ext=jpg",
      "https://static.vecteezy.com/system/resources/previews/002/596/688/non_2x/summer-banner-template-with-tropical-leaves-vector.jpg",
    ]);

    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            style={{ height: width / 2 }}
            showButtons={false}
            autoplay={true}
            autoplayTimeout={2}
          >
            {bannerData.map((item) => {
              return (
                <Image
                  key={item}
                  style={styles.imageBanner}
                  resizeMode="contain"
                  source={{ uri: item }}
                />
              );
            })}
          </Swiper>
          <View style={{ height: 20 }}></View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  swiper: {
    width: width,
    alignItems: "center",
    marginTop: 10,
  },
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});

export default Banner;
