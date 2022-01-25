import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const items = [
      {
            image:require("../images/categories_images/shopping-bag.png"),
            text:'Pick Up'
      },
      {
            image:require("../images/categories_images/soft-drink.png"),
            text:'soft-drink'
      },
      {
            image:require("../images/categories_images/fast-food.png"),
            text:'fast-food'
      },
      {
            image:require("../images/categories_images/desserts.png"),
            text:'desserts'
      },
      {
            image:require("../images/categories_images/deals.png"),
            text:'deals'
      },
      {
            image:require("../images/categories_images/coffee.png"),
            text:'coffee'
      },

]

export default function Categories() {
      return (
            <View>
                  <Text>Categories</Text>
            </View>
      );
}

const styles = StyleSheet.create({});
