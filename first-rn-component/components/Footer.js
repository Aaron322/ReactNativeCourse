import React from 'react'
import { View, Text } from 'react-native'

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
})

export default Footer
