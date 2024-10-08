import { View, Text } from 'react-native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen 
          name="login"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="registration"
          options={{
            headerShown: false
          }}
        />
      </Stack>
      
      <StatusBar 
        backgroundColor='#fff' style='dark'
      /> 
    </>
  )
}

export default AuthLayout