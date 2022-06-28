import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { Icon } from "react-native-elements";
import * as actions from "../Redux/Actions/cartActions";
import {
  Container,
  H1,
  Left,
  Thumbnail,
  Right,
  ListItem,
  Body,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

var { height } = Dimensions.get("window").width;

const Separator = () => <View style={styles.separator} />;

const CartScreen = (props) => {
  const navigation = useNavigation();
  const count = useState(props.cartItems.count);
  const { cartItems } = useSelector((state) => state.cartItems);

  //total price
  var totalPrice = 0;
  props.cartItems.forEach((cart) => {
    return (totalPrice = totalPrice + cart.product.price * cart.quantity);
  });

  //Add this
  {
    /** const [productUpdate, setProductUpdate] = useState()
  const [totalPrice, setTotalPrice]= useState();
  useEffect(()=>{
     getProducts()
    return () => {
      setProductUpdate()
      setTotalPrice()
    }
  }, [props])*/
  }

  {
    /** const getProducts=()=>{
    var products = [];
    props.cartItems.forEach(cart=>{
      axios.get(`http://localhost:3001/${cart.product}`).then(data=>{
        products.push(data.data)
        setProductUpdate(products)
        var total=0;
        products.forEach(product=>{
          const price=(total+=product.price)
          setTotalPrice(price)
        });
      })
      .catch(e=>{
        console.log(e);
      })
    })
  }*/
  }

  return (
    /*  <View style={{flex:1, alignItems:'center'}}>
      {props.cartItems.map((x)=>{
        return(
             <Text>{x.product.name} {x.product.price}</Text>
        )
      })}
    </View>*/
    <>
      {/*   {productUpdate?(
      <Container>

      </Container>
    )}*/}

      {props.cartItems.length ? (
        <Container style={styles.container}>
          <H1 style={styles.name}>Cart</H1>

          <View style={{ flex: 1, marginBottom: 100 }}>
            <ScrollView showsVerticalScrollIndicator={true} style={{ flex: 1 }}>
              {props.cartItems.map((data) => {
                const price = data.quantity * data.product.price;
                return (
                  <View style={{ flex: 1 }}>
                    <View style={{ backgroundColor: "white" }}>
                      <ListItem style={styles.list} key={Math.random()}>
                        <Body style={styles.body}>
                          <Left>
                            <Text>
                              {data.quantity} x {data.product.productName}
                            </Text>
                          </Left>
                          <View style={{ alignSelf: "flex-end" }}>
                            <Text>Rs.{price}</Text>
                          </View>
                          <View
                            style={{ alignItems: "flex-end", paddingLeft: 20 }}
                          >
                            <Icon
                              name="close"
                              type="material"
                              color="#7393d1"
                              size={25}
                              onPress={() => props.removeFromCart(data)}
                              //onPress={()=> props.removeFromCart(data.item)}
                            />
                          </View>
                        </Body>
                      </ListItem>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>

          <View
            style={{
              position: "absolute",
              width: "100%",
              backgroundColor: "white",
              flex: 1,
              bottom: 0,
            }}
          >
            <View style={styles.bottomView}>
              <View style={styles.bottomContainer}>
                <Left>
                  <Text style={styles.price}>Total Price: </Text>
                </Left>
                <Right>
                  <Text style={styles.price}>Rs. {totalPrice}</Text>
                </Right>
              </View>
              <Separator />
            </View>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("Checkout");
              }}
            >
              <View style={styles.view13}>
                <View style={styles.view17}>
                  <View style={styles.view18}>
                    <Text style={styles.text10}>Checkout</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.clearCart()}>
              <View style={styles.view14}>
                <View style={styles.view12}>
                  <Text style={styles.text9}>Clear</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </Container>
      ) : (
        <Container style={styles.emptyContainer}>
          <Text style={{ fontWeight: "normal", fontSize: 15, flex: 1 }}>
            Your cart is empty!
          </Text>

          {/**<Text style={{ fontSize:15, flex:1}}>Add Products to your cart</Text> */}

          {/**<Link to={{screen:'HomeScreen'}} style={{color:'#88aef7',fontSize:25, paddingTop:10, textDecorationLine:'underline'}}>Go and shop more</Link> */}

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("HomeScreen");
            }}
            style={styles.newOrder}
          >
            <View style={styles.view14}>
              <View style={styles.view12}>
                <Text style={styles.text9}>Create a new order</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Container>
      )}
    </>
  );
};

//to get state(in store) to property
const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
    removeFromCart: (item) => dispatch(actions.removeFromCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 25,
  },
  emptyContainer: {
    height: height,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    flex: 1,
  },
  list: {
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    borderColor: "gray",
    borderWidth: 0.5,
    marginBottom: 10,
    borderRadius: 10,
    marginHorizontal: 15,
    height: 50,
    flex: 1,
  },
  bottomView: {
    width: "100%",
  },
  body: {
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
    height: 20,
  },
  name: {
    alignSelf: "center",
    color: "#65686e",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20,
    fontFamily: "sans-serif-medium",
    paddingTop: 8,
    marginBottom: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: -1,
  },
  bottomContainer: {
    flexDirection: "row",
    bottom: 0,
    backgroundColor: "white",
    paddingBottom: 0.2,
  },
  price: {
    fontSize: 18,
    margin: 20,
    color: "black",
  },
  view12: {
    flexDirection: "column",
    alignItems: "center",
  },
  view13: {
    bottom: 0,
    left: 0,
  },
  view14: {
    flexDirection: "row",
    backgroundColor: "white",
    marginBottom: 50,
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    width: 320,
    borderRadius: 25,
    borderColor: "#7393d1",
    alignItems: "center",
    marginTop: -5,
    alignSelf: "center",
  },
  view15: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "gray",
  },
  view16: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  view17: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "white",
  },

  view18: {
    backgroundColor: "#88aef7",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginBottom: 0,
    width: 320,
    borderRadius: 25,
    height: 45,
  },
  text9: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#7393d1",
    padding: 8,
  },
  text10: { padding: 8, fontWeight: "bold", fontSize: 15, color: "white" },
  newOrder: {
    bottom: 0,
    left: 0,
    position: "absolute",
    alignContent: "center",
    width: "100%",
  },
});
