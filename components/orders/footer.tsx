import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const OrdersFooter = () => {
  return (
    <View>
        <View className='flex-row justify-between items-center p-4 border-gray-300 bg-white dark:bg-gray-800 rounded-2xl m-4 '>
           <View>
            <Text className='text-gray-500 dark:text-gray-200'>Promo Code</Text>
           </View>
           <View>
            <TouchableOpacity className='bg-green-500 px-4 py-2 rounded-2xl'>
                <Text className='text-white'>Apply</Text>
            </TouchableOpacity>
           </View>
        </View>
        <View className='flex-col p-4 gap-4 bg-white dark:bg-gray-800 rounded-2xl m-4'>
           <View className='flex-row justify-between border-b border-gray-300 pb-2'>
            <Text className='text-gray-500 text-base text-lg'>Subtotal</Text>
            <Text className='text-gray-500 text-base text-lg'>100 TL</Text>
           </View>
           <View className='flex-row justify-between border-b border-gray-300 pb-2'>
            <Text className='text-gray-500 text-base text-lg'>Shipping</Text>
            <Text className='text-gray-500 text-base text-lg'>10 TL</Text>
           </View>
           <View className='flex-row justify-between pb-2'>
            <Text className='text-green-500 font-bold text-2xl'>Total</Text>
            <Text className='text-green-500 font-bold text-2xl'>110 TL</Text>
           </View>
        </View>
           <View className='px-4 mb-4'>
            <TouchableOpacity className='bg-green-500 p-4 rounded-2xl items-center'>
               <Text className='text-white font-bold'>Complete Order</Text>
             </TouchableOpacity>
           </View>
    </View>
  )
}

export default OrdersFooter