import Content from '@/components/orders/content';
import OrdersFooter from '@/components/orders/footer';
import Header from '@/components/orders/header';
import { Platform, View } from 'react-native';

export default function OrdersScreen() {
  return (
    <View className="flex-1 bg-[#f4f8f9] dark:bg-[#222238]">
      {Platform.OS === "android" && <View className="h-20" />}
      <Header />
      <Content />
      <OrdersFooter />
    </View>
  );
}