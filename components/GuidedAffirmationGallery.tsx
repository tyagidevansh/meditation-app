import { View, Text, Image, Dimensions, Pressable } from "react-native";
import React from "react";
import { GalleryPreviewData } from "@/models/AffirmationCategory";
import { useRouter } from "expo-router";

interface GuidedAffirmationGalleryProps {
  title: string;
  previews: GalleryPreviewData[];
}

const GuidedAffirmationGallery = ({
  title,
  previews,
}: GuidedAffirmationGalleryProps) => {
  const imageSize = Dimensions.get("window").width * 0.3;
  const limitedPreviews = previews.slice(0, 3); 
  const router = useRouter();

  return (
    <View className="my-4">
      <Text className="text-white text-2xl font-semibold mb-3 mt-6">{title}</Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {limitedPreviews.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => router.push(`/affirmations/${item.id.toString()}`)}
            style={{
              width: imageSize,
              height: imageSize,
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            <Image
              source={item.image}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default GuidedAffirmationGallery;
