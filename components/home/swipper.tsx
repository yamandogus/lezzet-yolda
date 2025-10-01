import { Image, View } from "react-native";
import Swiper from "react-native-swiper";

const AdvertSwiper = () => (
  <View className="h-48">
    <Swiper
      autoplay
      loop
      showsPagination={true}
      dotStyle={{
        backgroundColor: "rgba(0,0,0,.2)",
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
      }}
      activeDotStyle={{
        backgroundColor: "#000",
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
      }}
    >
      <View className="rounded-lg">
        <Image
          source={{
            uri: "https://img.freepik.com/free-psd/delicious-pizza-restaurant-facebook-template_23-2150201517.jpg?semt=ais_hybrid&w=740&q=80",
          }}
          className="rounded-lg"
          style={{ width: 380, height: 180 }}
        />
      </View>
       <View className=" rounded-lg">
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/fast-food-app-banner-template_23-2149046600.jpg",
          }}
          className="rounded-lg"
          style={{ width: 380, height: 180 }}
        />
      </View>
      <View className=" rounded-lg">
        <Image
          source={{
            uri: "https://img.freepik.com/premium-vector/trendy-minimalistic-food-delivery-service-online-food-order-application-banner-design-template_420121-273.jpg?semt=ais_hybrid&w=740",
          }}
          className="rounded-lg"
          style={{ width: 380, height: 180 }}
        />
      </View>
    </Swiper>
  </View>
);
export default AdvertSwiper;
