import Category from '@/components/home/category';
import Header from '@/components/home/header';
import { Platform, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className='px-4 bg-custom-bg'>
      {Platform.OS === "android" && <View className='h-20' />}
      <Header/>
      <Category/>
    </View>
  );
}