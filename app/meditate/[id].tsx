import {
  View,
  Text,
  ImageBackground,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Audio } from "expo-av"
import { MEDITATION_DATA, AUDIO_FILES } from "@/constants/meditation-data";
import { TimerContext } from "@/context/TimerContext";

const Meditate = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const {duration: secondsRemaining, setDuration: setSecondsRemaining} = useContext(TimerContext);
  
  const [isMeditating, setIsMeditating] = useState(false);
  const [audioSound, setSound] = useState<Audio.Sound>();
  const [isPlayingAudio, setPlayingAudio] = useState(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (secondsRemaining == 0) {
      setIsMeditating(false);
      return;
    }

    if (isMeditating) {
      timerId = setTimeout(() => {
        setSecondsRemaining(secondsRemaining - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [secondsRemaining, isMeditating]);

  useEffect(() => {
    return () => {
      audioSound?.unloadAsync();
    }
  }, [audioSound]);

  const toggleMeditationSessonStatus = async() => {
    if (secondsRemaining === 0) setSecondsRemaining(120);
    
    setIsMeditating(!isMeditating);

    await toggleSound();
  }

  const toggleSound = async () => {
    const sound = audioSound ? audioSound : await initializeSound();

    const status = await sound?.getStatusAsync();

    if (status?.isLoaded && !isPlayingAudio) {
      await sound.playAsync();
      setPlayingAudio(true);
    } else {
      await sound.pauseAsync();
      setPlayingAudio(false);
    }
  }

  const initializeSound = async () => {
    const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;

    const { sound } = await Audio.Sound.createAsync(
      AUDIO_FILES[audioFileName]
    );
    
    setSound(sound);
    return sound;
  }

  const handleAdjustDuration = () => {
    if (isMeditating) toggleMeditationSessonStatus();

    router.push("(modal)/adjust-meditation-duration");
  }

  const formattedTimeMinutes = String(
    Math.floor(secondsRemaining / 60)
  ).padStart(2, "0");

  const formattedTimeSeconds = String(secondsRemaining % 60).padStart(2, "0");

  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[Number(id) - 1]}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          colors={["transparent", "rgba(0, 0, 0, 0.8)"]}
          className="flex-1"
        >
          <Pressable
            onPress={() => router.back()}
            className="absolute top-16 left-6 z-10"
          >
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>

          <View className="flex-1 justify-center">
            <View className="mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center">
              <Text className="text-4xl text-blue-800 font-rmono">
                {formattedTimeMinutes}:{formattedTimeSeconds}
              </Text>
            </View>
          </View>

          <View className="mb-5">
            <TouchableOpacity
              onPress={handleAdjustDuration}
              className="bg-white rounded-xl min-h-[62px] mb-6 justify-center items-center"
            >
              <Text className="text-xl">Adjust Duration</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={toggleMeditationSessonStatus}
              className="bg-white rounded-xl min-h-[62px] mb-6 justify-center items-center"
            >
              <Text className="text-xl">{isMeditating ? "Pause" : "Start Meditation"}</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default Meditate;
