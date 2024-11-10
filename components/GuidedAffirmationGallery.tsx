import { View, Text, FlatList, Pressable, Image } from "react-native";
import React from "react";
import { GalleryPreviewData } from "@/models/AffirmationCategory";
import { Link } from "expo-router";

interface GuidedAffirmationGalleryProps {
  title: string;
  previews: GalleryPreviewData[];
}

const GuidedAffirmationGallery = ({
  title,
  previews,
}: GuidedAffirmationGalleryProps) => {
  return (
    <View className="my-5">
      <View className="mb-2">
        <Text className="text-white font-bold text-xl">{title}</Text>
      </View>
      <FlatList
        data={previews}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={`/affirmations/${item.id}`}>
            <Pressable className="mr-4">
              <View className="h-36 w-28 rounded-md overflow-hidden">
                <Image
                  source={item.image}
                  resizeMode="cover"
                  className="w-full h-full"
                />
              </View>
            </Pressable>
          </Link>
        )}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </View>
  );
};

export default GuidedAffirmationGallery;
