import { View, Text, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableOpacity } from 'react-native';
import { TimerContext } from '@/context/TimerContext';

const AdjustMeditationDuration = () => {
  const { setDuration } = useContext(TimerContext);

  const handlePress = (duration : number) => {
    setDuration(duration);
    router.back();
  }

  return (
    <View className='flex-1 relative'>
      <LinearGradient colors = {["#161b2e", "#0a4d4a", "#766e67"]} className='flex-1'>
        
        <Pressable onPress={() => router.back()} className='absolute top-16 left-6 z-10'>
          <AntDesign name="leftcircleo" size={50} color="white" />
        </Pressable>

        <View className='justify-center h-4/5 mx-5'>
          <Text className='text-center font-bold text-3xl mb-4 text-white'>
            Adjust your meditation duration
          </Text>

          <View>
            <TouchableOpacity
              onPress={() => handlePress(120)}
              className="bg-white rounded-xl min-h-[62px] mb-6 justify-center items-center"
            >
              <Text className="text-xl">2 minutes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handlePress(300)}
              className="bg-white rounded-xl min-h-[62px] mb-6 justify-center items-center"
            >
              <Text className="text-xl">5 minutes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handlePress(600)}
              className="bg-white rounded-xl min-h-[62px] mb-6 justify-center items-center"
            >
              <Text className="text-xl">10 minutes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handlePress(900)}
              className="bg-white rounded-xl min-h-[62px] mb-6 justify-center items-center"
            >
              <Text className="text-xl">15 minutes</Text>
            </TouchableOpacity>
          </View>
        </View>

      </LinearGradient>
    </View>
  )
}

export default AdjustMeditationDuration