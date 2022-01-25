import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import HeaderTabs from '../../components/HeaderTabs';
import SearchBar from '../../components/SearchBar';
import Categories from '../../components/Categories';
import { ScrollView } from 'react-native';
import RestaurantItem, { Restaurants } from '../../components/RestaurantItem';


const YELP_API_KEY =
  "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";


export default function Home() {
      const [restaurantData, setRestaurantData] = React.useState(Restaurants)
      return (
            <View style={styles.container}>
                  <StatusBar
                        style="auto"
                        translucent={false}
                        backgroundColor="#eee"
                  />
                  <View style={{ backgroundColor: "white", padding: 10 }}>
                        <HeaderTabs />
                        <SearchBar />

                  </View>
                  <ScrollView style={{}} showsVerticalScrollIndicator={false}>
                        <Categories />
                        <RestaurantItem restaurantData={restaurantData} />


                  </ScrollView>



            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#eee',
      }

});
