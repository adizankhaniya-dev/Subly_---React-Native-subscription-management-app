import { Link } from 'expo-router'
import { View, Text } from 'react-native'


const Signin = () => {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text>Signin</Text>
      <Link href={"/"}>GO back</Link>
    </View>
  )
}

export default Signin