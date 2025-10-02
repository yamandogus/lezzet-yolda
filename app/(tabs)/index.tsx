import BestSellers from "@/components/home/bestsellers";
import Category from "@/components/home/category";
import Header from "@/components/home/header";
import AdvertSwiper from "@/components/home/swipper";
import { Platform, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 px-4 bg-[#f4f8f9] dark:bg-[#000022]">
      {Platform.OS === "android" && <View className="h-20" />}
      <Header />
      <Category />
      <View className="mt-6">
        <AdvertSwiper />
      </View>
      <BestSellers/>
    </View>
  );
}
