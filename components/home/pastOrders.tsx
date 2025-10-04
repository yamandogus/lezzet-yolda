import { MotiView } from "moti";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const orderHistory = [
  { id: 1, item: "Cheese Burger", price: "1,000 TL", date: "2023-10-01", uri: "https://images.themodernproper.com/production/posts/2016/ClassicCheeseBurger_9.jpg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1749310239&s=603ff206b8a47f03f208a894e0667621" },
  { id: 2, item: "Veggie Pizza", price: "800 TL", date: "2023-09-28", uri: "https://images.themodernproper.com/production/posts/2016/ClassicCheeseBurger_9.jpg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1749310239&s=603ff206b8a47f03f208a894e0667621" },
  { id: 3, item: "Sushi Platter", price: "1,500 TL", date: "2023-09-25", uri: "https://images.themodernproper.com/production/posts/2016/ClassicCheeseBurger_9.jpg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1749310239&s=603ff206b8a47f03f208a894e0667621" },
  { id: 4, item: "Pasta Carbonara", price: "900 TL", date: "2023-09-20", uri: "https://images.themodernproper.com/production/posts/2016/ClassicCheeseBurger_9.jpg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1749310239&s=603ff206b8a47f03f208a894e0667621" },
  { id: 5, item: "Caesar Salad", price: "700 TL", date: "2023-09-18", uri: "https://images.themodernproper.com/production/posts/2016/ClassicCheeseBurger_9.jpg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1749310239&s=603ff206b8a47f03f208a894e0667621" },
  { id: 6, item: "Grilled Chicken", price: "1,200 TL", date: "2023-09-15", uri: "https://images.themodernproper.com/production/posts/2016/ClassicCheeseBurger_9.jpg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1749310239&s=603ff206b8a47f03f208a894e0667621" },
];

const PastOrders = () => {
  return (
    <MotiView
      from={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "timing", duration: 300 }}
      className="my-6"
    >
      <Text className="px-4 font-bold text-lg text-green-500">Past Orders</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {orderHistory.map((order) => (
          <View
            key={order.id}
            className="flex flex-col items-center m-2 p-4 bg-custom-bg-light dark:bg-custom-bg-dark rounded-lg shadow-md dark:text-white w-48"
          >
            <View className="w-24 h-24 mb-2">
              <Image
                source={{ uri: order.uri }}
                className="w-full h-full rounded-full"
              />
            </View>
            <Text className="font-bold text-lg text-gray-800 dark:text-white">{order.item}</Text>
            <Text className="text-gray-600 dark:text-gray-400">{order.price}</Text>
            <Text className="text-gray-600 dark:text-gray-400">{order.date}</Text>
            <View className="pb-1">
              <TouchableOpacity className="mt-2 px-4 py-2 bg-blue-500 rounded-full">
                <Text className="text-white dark:text-white">Sirişi Tekrarla</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </MotiView>
  );
};

export default PastOrders;
