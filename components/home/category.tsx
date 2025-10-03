import { useColorScheme } from "@/hooks/use-color-scheme";
import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

const categories = [
  {
    name: "All",
    value: "all",
    uri: "https://cdn-icons-png.flaticon.com/512/879/879842.png",
  },
  {
    name: "Meat",
    value: "meat",
    uri: "https://cdn-icons-png.flaticon.com/512/3075/3075926.png",
  },
  {
    name: "Fast Food",
    value: "fast_food",
    uri: "https://cdn-icons-png.flaticon.com/512/1046/1046752.png",
  },
  {
    name: "Sushi",
    value: "sushi",
    uri: "https://cdn-icons-png.flaticon.com/512/3108/3108888.png",
  },
  {
    name: "Drinks",
    value: "drinks",
    uri: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
  },
  {
    name: "Desserts",
    value: "desserts",
    uri: "https://cdn-icons-png.flaticon.com/512/3108/3108837.png",
  },
  {
    name: "Breakfast",
    value: "breakfast",
    uri: "https://cdn-icons-png.flaticon.com/512/3108/3108808.png",
  },
  {
    name: "Chicken",
    value: "chicken",
    uri: "https://cdn-icons-png.flaticon.com/512/3108/3108847.png",
  },
  {
    name: "Pasta",
    value: "pasta",
    uri: "https://cdn-icons-png.flaticon.com/512/3108/3108872.png",
  },
  {
    name: "Salads",
    value: "salads",
    uri: "https://cdn-icons-png.flaticon.com/512/3108/3108828.png",
  },
  {
    name: "Seafood",
    value: "seafood",
    uri: "https://cdn-icons-png.flaticon.com/512/3108/3108891.png",
  },
  {
    name: "Vegetarian",
    value: "vegetarian",
    uri: "https://cdn-icons-png.flaticon.com/512/3108/3108858.png",
  },
  {
    name: "Vegan",
    value: "vegan",
    uri: "https://cdn-icons-png.flaticon.com/512/3108/3108858.png",
  },
  {
    name: "Gluten Free",
    value: "gluten_free",
    uri: "https://cdn-icons-png.flaticon.com/512/3108/3108867.png",
  },
];

const Category = () => {
  const colorScheme = useColorScheme();
  const [activeCategory, setActiveCategory] = useState("all");

  // Define background colors based on theme
  const cardBg = colorScheme === "dark" ? "bg-gray-700" : "bg-white";
  const activeCardBg = colorScheme === "dark" ? "bg-blue-600" : "bg-blue-500";

  return (
    <View className={`my-2 py-2 rounded-xl border-b- border-rounded-lg`}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="px-4"
      >
        <View className="flex-row">
          {categories.map((category, index) => (
            <View
              className={`items-center justify-center`}
              key={category.value}
              onTouchEnd={() => setActiveCategory(category.value)}
            >
              <View className={`${
                activeCategory === category.value ? activeCardBg : cardBg
              } w-20 rounded-xl px-2 py-3 mx-2 shadow-md items-center justify-center`}>
                <Image
                  source={{ uri: category.uri }}
                  className="w-12 h-12 rounded-full"
                />
              </View>
              <Text
                className={`text-xs text-center mt-2 font-semibold dark:text-gray-300`}
              >
                {category.name}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Category;
