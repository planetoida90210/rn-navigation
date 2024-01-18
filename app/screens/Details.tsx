import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { DetailsPageProps } from '../navigation/RootStack'

const Details = ({navigation, route}: DetailsPageProps) => {

  const {itemId} = route.params

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Details: ${itemId}`,
    })
  }, [navigation])


  return (
    <View>
      <Text>Details: {itemId}</Text>
    </View>
  )
}

export default Details