import { View, Text, FlatList } from 'react-native'
import React from 'react'


//Extracts posts data from props and displays it horizontally
const Trending = ({ posts }) => {
  return (
    <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <Text 
            className="text-3xl text-white">
                {item.id}
            </Text>
    )}
    horizontal
    />
  )
}

export default Trending