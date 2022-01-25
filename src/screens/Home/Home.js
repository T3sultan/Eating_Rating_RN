import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HeaderTabs from '../../components/HeaderTabs';
import SearchBar from '../../components/SearchBar';
import Categories from '../../components/Categories';
import { ScrollView } from 'react-native';
import RestaurantItem from '../../components/RestaurantItem';

export default function Home() {
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
                  <ScrollView style={{  }} showsVerticalScrollIndicator={false}>
                        <Categories />
                        <RestaurantItem />
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
