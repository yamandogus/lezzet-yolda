import BestSellers from "@/components/home/bestsellers";
import Category from "@/components/home/category";
import Header from "@/components/home/header";
import PastOrders from "@/components/home/pastOrders";
import AdvertSwiper from "@/components/home/swipper";
import { Platform, ScrollView, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-[#f4f8f9] dark:bg-[#222238]">
      {Platform.OS === "android" && <View className="h-20" />}
      <Header />
      <Category />
      <ScrollView>
        <View className="mt-6">
          <AdvertSwiper />
        </View>
        <BestSellers />
        <PastOrders />
      </ScrollView>
    </View>
  );
}
