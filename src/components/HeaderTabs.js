import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function HeaderTabs() {
      const [activeTag, setActiveTag] = useState('Delivery')
      return (
            <View style={styles.container}>
                  <HeaderButton
                        text="Delivery"
                        btnColor="#2C3E50"
                        textColor="white"
                        activeTag={activeTag}
                        setActiveTag={setActiveTag}

                  />
                  <HeaderButton
                        text="Pickup"
                        btnColor="white"
                        textColor="#2C3E50"
                        activeTag={activeTag}
                        setActiveTag={setActiveTag}

                  />
            </View>
      );
}
const HeaderButton = (props) => (

      <TouchableOpacity style={{
            backgroundColor: props.activeTag === props.text ? '#2C3E50' : 'white',
            paddingHorizontal: 18,
            paddingVertical: 6,
            borderRadius: 30
      }}
            onPress={() => props.setActiveTag(props.text)}
      >
            <Text style={{
                  color: props.activeTag === props.text ? 'white' : '#2C3E50',
                  fontSize: 14,
                  fontWeight: 'bold'

            }}>{props.text}</Text>

      </TouchableOpacity>

)

const styles = StyleSheet.create({
      container: {
            flexDirection: 'row',
            justifyContent: "center"
      },


});
