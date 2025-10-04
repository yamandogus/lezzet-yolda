import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from 'expo-router';
import { MotiView } from "moti";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Header = () => {
    const navigation = useNavigation();
  return (
    <MotiView
      from={{
        opacity: 0,
        translateY: 20,
      }}
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{
        type: "timing",
        duration: 300,
      }}
      className="flex flex-row justify-between items-center px-4 "
    >
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()} className="bg-white rounded-full p-2">
            <Ionicons name="arrow-back" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <Text className="font-bold text-2xl text-green-500">Sepetim</Text>
      </View>
      <View>
        <TouchableOpacity className="bg-white rounded-full p-2">
            <MaterialCommunityIcons name="delete-empty-outline"  size={20} color="black" />
        </TouchableOpacity>
      </View>
    </MotiView>
  );
};

export default Header;
