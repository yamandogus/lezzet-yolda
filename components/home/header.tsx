import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";
const Header = () => {
  return (
    <View className="flex flex-row justify-between items-center">
      <View className="flex flex-col gap-y-1">
        <Text className="text-lg">Hello 👋</Text>
        <Text className="text-2xl font-bold">Delisas Agency</Text>
      </View>
      <View className="flex flex-row gap-x-4">
        <View className="bg-white rounded-full p-2">
          <EvilIcons name="search" size={38} color="black" />
        </View>
        <View className="bg-white rounded-full p-2">
          <Ionicons name="notifications-outline" size={34} color="black" />
        </View>
      </View>
    </View>
  );
};

export default Header;
