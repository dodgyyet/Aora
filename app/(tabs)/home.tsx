import { View, Text, FlatList, Image, RefreshControl} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context"

import { images } from '../../constants/'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from "../../components/EmptyState"

const Home = () => {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true);
    // recall videos if any one ones appear
    setRefreshing(false);
  }
  return (
    <SafeAreaView className="bg-primary h-full">
      {/* Using flatlist instead of scroll view because vertical and horizontal scrolling from two different flatlist types is used */}
      <FlatList 
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.$id}
        renderItem = {({ item }) => (
          <Text className="text-3xl text-white">{item.id}</Text>
      )}
      //Header component of list of data
      ListHeaderComponent={() => (
        <View className="my-6 px-4 space-y-6">
          <View className="justify-between items-start flex-row mb-6">
            <View>
              <Text className="font-pmedium text-sm text-gray-100">
                Welcome Back
              </Text>
              <Text className="text-2xl font-psemibold text-white">
                Bud
              </Text>
            </View>
            <View className="mt-1.5">
              <Image
                source={images.logoSmall}
                className="w-9 h-10"
                resizeMode="contain"
              />
            </View>
          </View>
          <SearchInput/>
          <View className="w-full flex-1 pt-5 pb-8">
            <Text className="text-gray-100 text-lg font-pregular mb-3">
              Latest Videos 
            </Text>
            <Trending posts={[{ id:1 }, { id:2 }, { id:3 }] 
            // If id doesnt exist maps empty array 
            ?? []}
            />

          </View>
        </View>
      )}
      ListEmptyComponent={() => (
        <EmptyState
          title = "No Videos Found"
          subtitle = "Be the first one to upload a video"
        />
      )}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      />
    </SafeAreaView>
  )
}

export default Home