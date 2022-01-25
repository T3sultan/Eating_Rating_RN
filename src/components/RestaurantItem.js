import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Image1 from '../images/categories_images/helena-lopes-Pd8tLVGx2O4-unsplash.jpg'
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import RestaurantInfo from './RestaurantInfo';




export const Restaurants = [
      {
            name: "ALMAZ's",
            image_url:
                  "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
            categories: ["Restaurant", "Bar"],
            price: "$$",
            reviews: 1244,
            rating: 4.5,
      },
      {
            name: "Kotom-Bari",
            image_url:
                  "https://m.economictimes.com/thumb/msid-82673285,width-1200,height-900,resizemode-4,imgsize-829462/1.jpg",
            categories: ["Cafe", "Bar"],
            price: "$$",
            reviews: 1244,
            rating: 3.7,
      },
      {
            name: "Comilla's Grill",
            image_url:
                  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
            categories: ["Bangladeshi", "Bar"],
            price: "$$",
            reviews: 700,
            rating: 4.9,
      },
      {
            name: "Kotbari Grill",
            image_url:
                  "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&w=1000&q=80",
            price: "$$",
            reviews: 700,
            rating: 5.0,
      },
];

export default function RestaurantItem(props) {
      return (
            <View activeOpacity={0.5}>
                  {
                        props.restaurantData.map((restaurant, index) => (
                              <TouchableOpacity key={index} style={{ marginTop: 15, padding: 15, backgroundColor: "white" }}>
                                    <RestaurantImage image={restaurant.image_url} />
                                    <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                              </TouchableOpacity>

                        ))


                  }


            </View>

      );
}
const RestaurantImage = (props) => (

      <>
            <Image
                  source={{
                        uri: props.image
                  }}
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
