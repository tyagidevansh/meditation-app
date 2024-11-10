import { View, Text, FlatList, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from "expo-status-bar";
import { MEDITATION_DATA } from '@/constants/meditation-data';
import MEDITATION_IMAGES from '@/constants/meditation-images';

const NatureMeditate = () => {
  return (


    <View className='flex-1'>
      <LinearGradient
        className='flex-1'
        colors = {["#161b2e", "#0a4d4a", "#766e67"]}
      >
        <View className='mt-8 mb-6 p-4'>
          <Text className="text-gray-200 mb-3 font-bold text-4xl"> 
            Welcome Devansh 
          </Text>

          <Text className='text-gray-200 mb-3 font-bold text-2xl'>
            Start your meditation practice today
          </Text>
        </View>
        
        <View>
          <FlatList 
            data = {MEDITATION_DATA}
            className='mb-44 px-4'
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
              <Pressable
                onPress={() => console.log("pressed")}
                className = "h-48 my-3 w-11/12 mx-auto rounded-md overflow-hidden"
              >
                <ImageBackground
                  source = {MEDITATION_IMAGES[item.id - 1]}
                  resizeMode='cover'
                  className='flex-1 rounded-lg justify-center'
                >
                  <LinearGradient
                    colors = {[
                      "transparent",
                      "rgba(0, 0, 0, 0.8)",
                    ]}
                    className='flex-1 justify-center items-center'
                  >
                    <Text className='text-gray-100 text-3xl font-bold text-center'>
                    {item.title}
                  </Text>
                  </LinearGradient>
                  
                </ImageBackground>
              </Pressable>
            )}
          />
        </View>

      </LinearGradient>

      <StatusBar style = "light"/>

    </View>
  )
}

export default NatureMeditate