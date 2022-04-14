import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import React from "react";
import SearchResultCard from "../components/SearchResultCard";
import { Stores2,Stores } from "../global/products";

const WIDTH_OF_SCREEN = Dimensions.get("window").width;

const SearchResultScreen = ({navigation,route}) => {
  return (
    <View style={styles.container}>
   
      <View>
        <FlatList
         
         style={{ backgroundColor: "white" }}
         data={Stores}
         keyExtractor={(item, index) => index.toString()}
         renderItem={({ item, index }) => (
                      
              <SearchResultCard
                    screenWidth={WIDTH_OF_SCREEN}
                    images={item.image}
                    averageReview={item.rating}
                    numberOfReview={item.numReviews}
                    storeName={item.name}
                /> 
         )}
         ListHeaderComponent={
          <View>
          <Text style={styles.listHeader}>Search Result for {route.params.item}</Text>
       </View>
         }
         showsVerticalScrollIndicator={false}
        
        />
      </View>

    </View>
  );
};

export default SearchResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:5
  },
  listHeader: {
    color:"gray",
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontWeight: "bold",
    marginTop:0
  },
});
