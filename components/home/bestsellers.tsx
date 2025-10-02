import { useColorScheme } from '@/hooks/use-color-scheme';
import { MotiView } from "moti";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const bestsellersProduct = [
  {
    id: 1,
    name: "Melting Cheese Pizza",
    price: "600 TL",
    image: "https://images.deliveryhero.io/image/fd-tr/LH/t5vx-listing.jpg",
    calories: "500",
    time: "30",
  },
  {
    id: 2,
    name: "Classic Cheese Burger",
    price: "1,000 TL",
    image:
      "https://images.themodernproper.com/production/posts/2016/ClassicCheeseBurger_9.jpg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1749310239&s=603ff206b8a47f03f208a894e0667621",
    calories: "500",
    time: "30",
  },
];

const BestSellers = () => {
  const colorScheme = useColorScheme();
  
  // Define theme-based colors
  const titleColor = colorScheme === 'dark' ? 'text-gray-100' : 'text-gray-800';
  const textColor = colorScheme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const cardBg = colorScheme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const seeAllColor = colorScheme === 'dark' ? 'text-blue-400' : 'text-blue-600';

  return (
    <MotiView
      from={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "timing", duration: 300 }}
      className="my-6 mx-4"
    >
      <View className="flex-row justify-between items-center mb-4">
        <Text className={`${titleColor} text-lg font-bold`}>
          Best Sellers
        </Text>
        <TouchableOpacity>
          <Text className={`${seeAllColor} text-sm font-semibold`}>See All</Text>
        </TouchableOpacity>
      </View>
      
      <View className="space-y-4">
        {bestsellersProduct.map((item) => (
          <View 
            key={item.id} 
            className={`${cardBg} rounded-xl p-4 flex-row items-center shadow-sm`}
          >
            <View className="w-16 h-16 rounded-xl overflow-hidden">
              <Image
                source={{ uri: item.image }}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
            
            <View className="flex-1 ml-4">
              <Text className={`${titleColor} text-base font-semibold`}>
                {item.name}
              </Text>
              <Text className={`${textColor} text-sm mt-1`}>
                {item.price}
              </Text>
              
              <View className="flex-row mt-2">
                <View className="flex-row items-center mr-3">
                  <Text className="text-xs text-gray-500">⏱️</Text>
                  <Text className="text-xs text-gray-500 ml-1">{item.time} min</Text>
                </View>
                <View className="flex-row items-center">
                  <Text className="text-xs text-gray-500">🔥</Text>
                  <Text className="text-xs text-gray-500 ml-1">{item.calories} cal</Text>
                </View>
              </View>
            </View>
            
            <TouchableOpacity className="bg-blue-500 rounded-full w-8 h-8 items-center justify-center">
              <Text className="text-white text-lg">+</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </MotiView>
  );
};

export default BestSellers;