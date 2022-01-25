import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HeaderTabs from '../../components/HeaderTabs';

export default function Home() {
      return (
            <View style={styles.container}>
                  <StatusBar
                        style="auto"
                        translucent={false}
                        backgroundColor="white"
                  

                  />
                  <HeaderTabs />

            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            // flex: 1,
            // backgroundColor: 'white',
            // alignItems: 'center',
            // justifyContent: 'center',

      }

});
