import { View, Text } from 'react-native'
import React from 'react'
import { DetailsPageProps } from '../navigation/RootStack'

const Details = ({navigation, route}: DetailsPageProps) => {
    const {itemId} = route.params
  return (
    <View>
      <Text>Details: {itemId}</Text>
    </View>
  )
}

export default Details