/*import { fromPairs } from "lodash";
import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Button,
} from "react-native";
import { Left, Right, Container, H1 } from "native-base";

const SingleProduct = (props) => {
  const [item, setItem] = useState(props.route.params.item);
  const [availabiity, setAvailability] = useState("");
  return (
    <Container style={styles.container}>
      <ScrollView style={{ marginBottom: 80, padding: 5 }}>
        <View>
          <Image
            source={{
              uri: item.image,
            }}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
  },
  imageContainer: {
    backgroundColor: "white",
    padding: 0,
    margin: 0,
  },
  image: {
    width: "100%",
    height: 250,
  },
});

export default SingleProduct;
*/
