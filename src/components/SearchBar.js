import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Ionicons, AntDesign } from '@expo/vector-icons';

export default function SearchBar() {
      return (
            <View style={styles.container}>
                  <GooglePlacesAutocomplete
                        placeholder='Search'
                        styles={{
                              textInput: {
                                    backgroundColor: "#eee",

                                    height: 35,
                                    paddingHorizontal: 10,
                                    paddingVertical: 5,
                                    fontSize: 15,
                                    flex: 1,
                                    borderRadius: 40

                              },
                              textInputContainer: {
                                    flexDirection: "row",
                                    backgroundColor: "#eee",
                                    borderRadius: 50,
                                    alignItems: "center",
                                    marginRight: 10
                              }

                        }}
                        renderLeftButton={() => (
                              <View style={{ marginLeft: 10 }}>
                                    <Ionicons name="location-sharp" size={20} color="black" />


                              </View>
                        )}
                        renderRightButton={() => (

                              <View style={{
                                    flexDirection: "row",
                                    marginRight: 10,
                                    backgroundColor: "white",
                                    padding: 5,
                                    borderRadius: 10,
                                    alignItems: "center"
                              }}>
                                    <AntDesign style={{ marginRight: 7 }} name="clockcircle" size={20} color="black" />
                                    <Text>Search</Text>
                              </View>
                        )}

                  />
            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            flexDirection: "row",
            marginTop: 14
      }

});
