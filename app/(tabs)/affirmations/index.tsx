import { View, Text, ScrollView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import AFFIRMATION_GALLERY from "@/constants/affirmations-gallery";
import GuidedAffirmationGallery from "@/components/GuidedAffirmationGallery";

const Affirmations = () => {
  return (
    <View className="flex-1">
      <LinearGradient
        colors={["#2e1f58", "#54426b", "#a790af"]}
        className="flex-1"
      >
        <ScrollView showsVerticalScrollIndicator={false} className="p-4">
          <Text className="text-white text-3xl font-bold mt-10 mb-1">
            Strengthen your belief
          </Text>
          <View>
            {AFFIRMATION_GALLERY.map((g) => (
              <GuidedAffirmationGallery
                key={g.title}
                title={g.title}
                previews={g.data}
              />
            ))}
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default Affirmations;
