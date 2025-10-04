import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const OrdersFooter = () => {
  return (
    <View>
      <View className="px-4 mb-4">
        <TouchableOpacity className="bg-green-500 p-4 rounded-2xl items-center">
          <Text className="text-white font-bold">Complete Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrdersFooter;
