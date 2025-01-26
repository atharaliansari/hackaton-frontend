import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, Touchable, TouchableOpacity, View } from 'react-native'

export default function Home() {

    const navigation = useNavigation()

  return (
    <>
    <View>
        <Text>Home Page</Text>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <Text>Go to About</Text>
    </TouchableOpacity>
    </>
  )
}
