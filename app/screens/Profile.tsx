import { View, Text, Button } from 'react-native'
import React from 'react'
import { ProfilePageProps } from '../navigation/RootStack'

const Profile = ({navigation}: ProfilePageProps) => {
  return (
    <View>
      <Text>Profile</Text>
      <Button title='Back' onPress={() => navigation.goBack()} />
    </View>
  )
}

export default Profile