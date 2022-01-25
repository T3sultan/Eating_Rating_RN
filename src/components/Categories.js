import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';

const items = [
      {
            image: require("../images/categories_images/shopping-bag.png"),
            text: 'Pick-up'
      },
      {
            image: require("../images/categories_images/soft-drink.png"),
            text: 'Soft-Drink'
      },
      {
            image: require("../images/categories_images/fast-food.png"),
            text: 'Fast-Food'
      },
      {
            image: require("../images/categories_images/desserts.png"),
            text: 'Fesserts'
      },
      {
            image: require("../images/categories_images/deals.png"),
            text: 'Deals'
      },
      {
            image: require("../images/categories_images/coffee.png"),
            text: 'Coffee'
      },

]

export default function Categories() {
      return (
            <View style={{ marginTop: 10, backgroundColor: "white", paddingHorizontal: 10, paddingLeft:10}}>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {
                              items.map((item, index) => (
                                    <View key={index} style={{ alignItems: 'center', marginRight: 20 }}>
                                          <Image
                                                source={item.image}
                                                style={{
                                                      width: 50,
                                                      height: 40,
                                                      resizeMode: "contain",
                                                      borderRadius: 10
                                                }}
                                          />
                                          <Text style={{ fontSize: 12, fontWeight: "bold" }}>{item.text}</Text>

                                    </View>

                              ))
                        }



                  </ScrollView>

            </View>

      );
}

const styles = StyleSheet.create({});
