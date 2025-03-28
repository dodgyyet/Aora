import {StatusBar} from 'expo-status-bar';
import {Text, View, Image, ScrollView} from 'react-native';

import { Redirect, router } from 'expo-router';
import "../global.css";
import { SafeAreaView } from 'react-native-safe-area-context';
// import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import {images} from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    //Safe area view & a scroll view wrapped in a gesture handler root view ensures compatibility with different devices
    <SafeAreaView className = "bg-primary h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className = "w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className = "max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities With{" "}
              <Text className="text-secondary-200">
                Aora
              </Text>
            </Text>
            {/* Curved underline right below app name text */}
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-3 -right-6"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            ..........
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in") }
            containerStyles="w-full mt-7"
          />
        </View>

      </ScrollView>  
      {/* Sets status bar to light theme on dark background to see status bar info */}
      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  );
}



