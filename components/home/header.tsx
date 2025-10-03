import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, TouchableOpacity, View } from "react-native";
const Header = () => {
  return (
    <View className="flex flex-col gap-4 px-4">
      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-col gap-y-1">
          <Text className="text-lg dark:text-gray-300">Hello 👋</Text>
          <Text className="text-2xl font-bold dark:text-gray-300">
            Delisas Agency
          </Text>
        </View>
        <View className="flex flex-row gap-x-4">
          <View className="bg-white rounded-full p-2">
            <TouchableOpacity>
              <EvilIcons name="search" size={28} color="black" />
            </TouchableOpacity>
          </View>
          <View className="bg-white rounded-full p-2">
            <Ionicons name="notifications-outline" size={26} color="black" />
            <View className="absolute -top-2 -right-2 bg-blue-500 w-7 h-7 rounded-full items-center justify-center">
              <Text className="text-white text-xs font-semibold">3</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
