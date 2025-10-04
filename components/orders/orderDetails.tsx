import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const OrderDetails = () => {
  const [openPromo, setOpenPromo] = useState(false);
  const [openBreakdown, setOpenBreakdown] = useState(false);

  return (
    <View className="">
      {/* Promo Code Section */}
      <View className="mb-4">
        <TouchableOpacity
          onPress={() => setOpenPromo((prev) => !prev)}
          className="flex-row justify-between items-center border border-green-500 rounded-2xl py-3 px-1"
        >
          <Text className="text-green-500 font-bold">
            {openPromo ? "Hide Promo Code" : "Have a promo code? Tap to enter"}
          </Text>
          <Ionicons
            name={openPromo ? "chevron-up" : "chevron-down"}
            size={20}
            color="#22c55e"
          />
        </TouchableOpacity>

        {openPromo && (
          <View className="flex-row justify-between items-center bg-white dark:bg-gray-800 py-3 rounded-2xl mt-2 shadow">
            <Text className="text-gray-500 dark:text-gray-200">Promo Code</Text>
            <TouchableOpacity className="bg-green-500 px-4 py-2 rounded-2xl">
              <Text className="text-white font-bold">Apply</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Total Section */}
      <View>
        <TouchableOpacity
          onPress={() => setOpenBreakdown((prev) => !prev)}
          className="flex-row justify-between items-center bg-custom-bg-light dark:bg-custom-bg-dark  rounded-2xl"
        >
          <Text className="text-green-500 font-bold text-2xl">Total</Text>
          <View className="flex-row items-center">
            <Text className="text-green-500 font-bold text-2xl mr-2">110 TL</Text>
            <Ionicons
              name={openBreakdown ? "chevron-up" : "chevron-down"}
              size={22}
              color="#22c55e"
            />
          </View>
        </TouchableOpacity>

        {openBreakdown && (
          <View className="mt-3 bg-white dark:bg-gray-800 px-4 py-3 rounded-2xl shadow">
            <View className="flex-row justify-between border-b border-gray-300 pb-2">
              <Text className="text-gray-500 text-lg">Subtotal</Text>
              <Text className="text-gray-500 text-lg">100 TL</Text>
            </View>
            <View className="flex-row justify-between pt-2">
              <Text className="text-gray-500 text-lg">Shipping</Text>
              <Text className="text-gray-500 text-lg">10 TL</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default OrderDetails;
