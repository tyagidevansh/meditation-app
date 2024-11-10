import { View, Text, ImageBackground, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import beachImage from "@/assets/meditation-images/beach.webp";
import { useRouter } from "expo-router";

const App = () => {
  const router = useRouter();

  return (
    <View className="flex-1">
      <ImageBackground 
        source={beachImage} 
        resizeMode="cover" 
        className="flex-1"
      >
        <LinearGradient 
          className="flex-1"
          colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}
        >
          <View className="mx-5 my-8 flex-1">
            <View className="pt-10 flex-grow">
              <Text className="text-center text-white font-bold text-4xl"> 
                Simple Meditation 
              </Text>
              <Text className="text-center text-white text-regular text-2xl mt-3">
                Simplifying Meditation for Everyone
              </Text>
            </View>

            <View>
              <TouchableOpacity 
                onPress={() => router.push("/nature-meditate")}
                className="bg-white rounded-xl min-h-[62px] justify-center items-center"
              >
                <Text className="text-xl">Get Started</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
