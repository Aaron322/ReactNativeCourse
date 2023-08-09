import * as React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'

export default function WelcomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container} indicatorStyle="white">
      <Text style={styles.title}>Welcome to Little Lemon</Text>
      <Text style={styles.subheading}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 20,
    // backgroundColor: '#fff', // You can set your preferred background color here
  },
  title: {
    padding: 40,
    fontSize: 50,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  subheading: {
    fontSize: 38,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
})
