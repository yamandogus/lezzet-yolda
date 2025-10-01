import React from "react";
import { ScrollView, Text, View } from "react-native";


const categories = [
  { name: "All", value: "all" },
  { name: "Meat", value: "meat" },
  { name: "Fast Food", value: "fast_food" },
  { name: "Sushi", value: "sushi" },
  { name: "Drinks", value: "drinks" },
  { name: "Desserts", value: "desserts" },
  { name: "Breakfast", value: "breakfast" },
  { name: "Chicken", value: "chicken" },
  { name: "Pasta", value: "pasta" },
  { name: "Salads", value: "salads" },
  { name: "Seafood", value: "seafood" },
  { name: "Vegetarian", value: "vegetarian" },
  { name: "Vegan", value: "vegan" },
  { name: "Gluten Free", value: "gluten_free" },
];

const Category = () => {
  return (
    <View className="my-4">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row">
          {categories.map((category, index) => (
            <View 
              className={`bg-white rounded-full p-4 ${index !== categories.length - 1 ? 'mr-4' : ''}`} 
              key={category.value}
            >
              <Text className="text-md">{category.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Category;
