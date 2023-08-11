import { ScrollView, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function LoginScreen() {
  const [email, onChangeEmail] = React.useState('')
  const [password, onChangePassword] = React.useState('')

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue </Text>
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={onChangeEmail}
        keyboardType={'email-address'}
        placeholder={'Email'}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.inputBox}
        value={password}
        onChangeText={onChangePassword}
        keyboardType={'default'}
        placeholder={'Password'}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
  },
})
