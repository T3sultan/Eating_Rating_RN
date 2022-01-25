import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Image1 from '../images/categories_images/helena-lopes-Pd8tLVGx2O4-unsplash.jpg'
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import RestaurantInfo from './RestaurantInfo';

export default function RestaurantItem() {
      return (
            <TouchableOpacity activeOpacity={0.5}>
                  <View style={{ marginTop: 15, padding: 15, backgroundColor: "white" }}>
                        <RestaurantImage />
                        <RestaurantInfo />
                  </View>

            </TouchableOpacity>

      );
}
const RestaurantImage = () => (
      <>
            <Image
                  source={Image1}
                  style={{
                        width: "100%",
                        height: 180,
                  }}
            />
            <TouchableOpacity

                  style={{
                        position: "absolute", right: 30, top: 30
                  }}>
                  <Entypo name="heart-outlined" size={24} color="white" />
            </TouchableOpacity>

      </>

)

const styles = StyleSheet.create({});
