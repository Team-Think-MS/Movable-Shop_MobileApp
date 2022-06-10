import { StyleSheet, Text, View,FlatList,Dimensions,Pressable,Image } from 'react-native'
import React, { useState } from 'react';
import { data } from '../global/data';
const WIDTH = Dimensions.get("window").width;

const CategoriesPage = ({navigation}) => {
  const [indexCheck, setIndexCheck] = useState("0");
  return (
    <View>
         <View style={{paddingTop:50,backgroundColor:'white'}}>
            <FlatList
              numColumns={2}
             showsHorizontalScrollIndicator={false}
              data={data}
              keyExtractor={(item)=>item.id}
              extraData={indexCheck}
              renderItem={({item,index})=>(
                <Pressable onPress={()=>{navigation.navigate('Categories')}}>
                  
                  <View
                    style={
                      styles.productCardTwo
                    }
                  >
                    <View
                      style={{
                        alignItems: "center",
                        top: -2,
                        marginTop: 5,
                        marginLeft: 10,
                        marginRight: 10,
                      }}
                    >
                      <Image
                        style={{ height:  (WIDTH - 150) / 2, width: (WIDTH-40)/2,  borderTopLeftRadius:20,borderTopRightRadius:20 }}
                        source={item.image}
                      />
                    </View>
                    <View style={{ marginHorizontal: 20 }}>
                      <Text
                        style={
                          styles.productCardTextTwo
                        }
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={
                           { fontSize: 12, color: "#e2e1e1" }
                        }
                      >
                        {item.name}
                      </Text>
                    </View>
                    <View
                      style={{
                        marginTop: 10,
                        marginHorizontal: 20,
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                   
                    </View>
  
                  </View>
                </Pressable>
              )}
            
        
            
            />
          </View>
               {/** <View style={{paddingTop:50,flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{item.name}</Text>
    </View> */}
    </View>
   
   
  
    
  );
}

export default CategoriesPage;

const styles = StyleSheet.create({
  productCardTwo: {
    height: (WIDTH - 40) / 2,
    margin: 10,
    width: (WIDTH - 40) / 2,
    marginHorizontal: 10,
    // marginBottom: 20,
    //marginTop: 50,
    borderRadius: 20,
    elevation: 13,
    backgroundColor: "white",
  },
  productCardTextTwo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginTop: 2,
  },
})