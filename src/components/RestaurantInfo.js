import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function RestaurantInfo() {
      return (
            <View style={styles.container}>
                  <View >
                        <Text style={styles.textContainer}>Your restaurant’s core values</Text>
                        <Text style={styles.minStyle}>40-45 .min</Text>

                  </View>
                  <View style={styles.rating}>
                        <Text>5.5</Text>
                  </View>

            </View>

      );
}

const styles = StyleSheet.create({
      container: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
            alignItems: "center",
      },
      textContainer: {
            fontWeight: "bold",
            fontSize: 13,
      },
      minStyle: {
            color: "gray",
            fontSize: 12
      },
      rating: {
            backgroundColor: "white",
            height: 30,
            color: "black",
            fontWeight: "bold",
            width: 30,
            alignItems: "center",
            borderRadius: 15,
            justifyContent: "center"

      }
});
