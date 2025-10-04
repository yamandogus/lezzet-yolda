import { ThemedText } from '@/components/themed-text';
import { MotiView } from "moti";
import React, { useState } from "react";
import { Dimensions, FlatList, Image, TouchableOpacity, View } from "react-native";
import OrderDetails from "./orderDetails";

type Order = {
  id: number;
  title: string;
  total: number;
  imageUrl: string;
  date: string;
  status: string;
  subtitle?: string;
};

const orders: Order[] = [
  {
    id: 1,
    title: "Melting Cheese Pizza",
    subtitle: "Pizza Italiano",
    total: 1188,
    imageUrl:
      "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1",
    date: "2025-09-28",
    status: "Teslim Edildi",
  },
  {
    id: 2,
    title: "Akdeniz Salata",
    subtitle: "Fresh & Healthy",
    total: 79,
    imageUrl:
      "https://images.unsplash.com/photo-1562007909-8d5f75b3fbb9?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2",
    date: "2025-09-30",
    status: "Hazırlanıyor",
  },
  {
    id: 3,
    title: "Ev Yapımı Burger",
    subtitle: "House Special",
    total: 149,
    imageUrl:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3",
    date: "2025-10-01",
    status: "Yolda",
  },
];

const { width } = Dimensions.get("window");
const CONTAINER_PADDING = 16;
const ROW_IMAGE_SIZE = 80;
const ROW_WIDTH = width - CONTAINER_PADDING * 2;

const Content: React.FC = () => {
  const [quantities, setQuantities] = useState<Record<number, number>>(() =>
    Object.fromEntries(orders.map((o) => [o.id, 1]))
  );

  const increment = (id: number) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const decrement = (id: number) => {
    setQuantities((prev) => {
      const next = Math.max(1, (prev[id] || 1) - 1);
      return { ...prev, [id]: next };
    });
  };

  return (
    <MotiView
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "timing", duration: 300 }}
      className="flex-1 px-4 py-6"
    >
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 48 }}
        renderItem={({ item, index }) => (
          <MotiView
            from={{ opacity: 0, translateY: 14 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: index * 70, type: "timing", duration: 360 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md mb-4 overflow-hidden"
            style={{ width: ROW_WIDTH }}
          >
            <View className="flex-row items-center p-3">
              <Image
                source={{ uri: item.imageUrl }}
                defaultSource={require("../../assets/images/lezzet_yolda.png")}
                accessibilityLabel={item.title}
                className="w-20 h-20 rounded-full"
                style={{ width: ROW_IMAGE_SIZE, height: ROW_IMAGE_SIZE }}
              />

              <View className="flex-1 ml-3 mr-2">
                <ThemedText type="defaultSemiBold" className="text-base">{item.title}</ThemedText>
                {item.subtitle ? (
                  <ThemedText
                    type="default"
                    className="text-sm mt-1"
                    lightColor="#687076"
                    darkColor="#9BA1A6"
                  >
                    {item.subtitle}
                  </ThemedText>
                ) : null}

                <ThemedText
                  type="default"
                  className="text-sm mt-1"
                  lightColor="#687076"
                  darkColor="#9BA1A6"
                >
                  {item.date} • {item.status}
                </ThemedText>

                <View className="flex-row items-center justify-between mt-3">
                  <ThemedText className="text-lg font-semibold text-green-600">{(item.total/100).toFixed(2)} TL</ThemedText>

                  <View className="flex-row items-center">
                    <TouchableOpacity
                      onPress={() => decrement(item.id)}
                      className="bg-green-100 dark:bg-green-600 px-3 py-1 rounded-full mr-2"
                    >
                      <ThemedText className="text-green-700 text-lg">−</ThemedText>
                    </TouchableOpacity>

                    <View className="px-3">
                      <ThemedText type="defaultSemiBold" className="text-base">{quantities[item.id]}</ThemedText>
                    </View>

                    <TouchableOpacity
                      onPress={() => increment(item.id)}
                      className="bg-green-600 px-3 py-1 rounded-full ml-2"
                    >
                      <ThemedText className="text-white text-lg">+</ThemedText>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </MotiView>
        )}
      />
      <OrderDetails />  
    </MotiView>
  );
};

export default Content;
