import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Signup = () => {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text>Signup</Text>
      <Link href={"/"}> </Link>
    </View>
  )
}

export default Signup