import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation<any>()
  return (
    <View>
      <Text>Home</Text>
      <Button title='Feed' onPress={() => navigation.navigate('Feed')} />
    </View>
  )
}

export default Home