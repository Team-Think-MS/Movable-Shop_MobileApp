import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
  FlatList,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { React } from "react";
import { Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { products } from "../global/products";
import filter from "lodash/filter";

export default function SearchComponent() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputFocussed, setTextInputFocussed] = useState(true);
  const textInput = useRef(0);
  const [data, setData] = useState(products);

  //filltering
  const contains = ({ name }, query) => {
    if (name.includes(query)) {
      return true;
    }
    return false;
  };

  //handle text input
  const handleSearch = (text) => {
    const dataS = filter(products, (userSearch) => {
      return contains(userSearch, text);
    });

    setData([...dataS]);
  };

  return (
    <View style={{ alignItems: "center" }}>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <View style={styles.SearchArea}>
          <Icon
            name="search"
            style={styles.searchIcon}
            type="material"
            iconStyle={{ marginLeft: 5 }}
            size={25}
            color="#65686e"
          />
          <Text style={{ fontSize: 15, color: "#65686e" }}>Search</Text>
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.view1}>
            <View style={styles.TextInput}>
              <Animatable.View
                animation={textInputFocussed ? "fadeInRight" : "fadeInLeft"}
                duration={400}
              >
                <Icon
                  name={textInputFocussed ? "arrow-back" : "search"}
                  onPress={() => {
                    if (textInputFocussed) setModalVisible(false);
                    setTextInputFocussed(true);
                  }}
                  style={styles.icon2}
                  type="material"
                  iconStyle={{ marginRight: 5 }}
                />
              </Animatable.View>
              <TextInput
                style={{ width: "90%" }}
                placeholder=""
                autoFocus={false}
                ref={textInput}
                onFocus={() => {
                  setTextInputFocussed(true);
                }}
                onBlur={() => {
                  setTextInputFocussed(false);
                }}
                onChangeText={handleSearch}
              />
              <Animatable.View
                animation={textInputFocussed ? "fadeInLeft" : ""}
                duration={400}
              >
                <Icon
                  name={textInputFocussed ? "cancel" : null}
                  iconStyle={{ color: "#65686e" }}
                  type="material"
                  style={{ marginRight: -10 }}
                  onPress={() => {
                    textInput.current.clear();
                    //handleSearch()
                  }}
                />
              </Animatable.View>
            </View>
          </View>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  Keyboard.dismiss;
                  navigation.navigate("Home", { item: item.name });
                  setModalVisible(false);
                  setTextInputFocussed(true);
                }}
              >
                <View style={styles.view2}>
                  <Text style={{ color: "black", fontSize: 15 }}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: "#65686e",
    fontSize: 16,
  },
  TextInput: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 0,
    borderColor: "#65686e",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
  },
  SearchArea: {
    marginTop: 10,
    height: 36.5,
    width: "95%",
    backgroundColor: "#f3f2f2",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#f3f2f2",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  searchIcon: {
    fontSize: 24,
    padding: 5,
    color: "#e4e4e5",
  },
  view1: {
    height: 70,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  view2: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  icon2: {
    fontSize: 24,
    padding: 5,
    color: "#65686e",
  },
  modal: {
    flex: 1,
  },
});
