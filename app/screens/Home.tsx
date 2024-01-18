import { View, Text, Button } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { HomePageProps } from '../navigation/RootStack'


const Home = ({navigation}: HomePageProps) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#fff"
        />
      ),
    })
  }, [navigation])

  return (
    <View>
      <Text>Home</Text>
      <Button title='Feed' onPress={() => navigation.push('Feed')} />
      <Button title='Open Profile' onPress={() => navigation.push('Profile')} />
      <Button title='Details 1337' onPress={() => navigation.push('Details', {itemId: 1337})} />
      <Button title='Details 42' onPress={() => navigation.push('Details', {itemId: 42})} />
    </View>
  )
}

export default Home