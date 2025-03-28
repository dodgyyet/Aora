import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import { icons } from '../constants'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    //Initializes state of false for show password
    const [showPassword, setShowPassword] = useState(false)

    return (
    <View className={`space-y-2 ${otherStyles}`}>
        <Text className="text-base text-gray-100 font-pmedium">
            {title}
        </Text>
        <View 
            className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 
            rounded-2xl focus:border-secondary items-center flex-row">
            <TextInput
                className="flex-1 text-white font-psemibold text-base"
                value={value}
                placeholder={placeholder}
                placeholderTextColor="#7b7b8b"
                onChangeText={handleChangeText}
                secureTextEntry={title=='Password' && !showPassword}
            />
            {title==='Password' && (
                //Toggles showPassword state when eye icon is pressed
                <TouchableOpacity onPress={() => 
                setShowPassword(!showPassword)}>
                    {/* When password is shown the eye becomes hidden */}
                    <Image source={!showPassword ? icons.eye : icons.eyehide} 
                    className="w-6 h-6"
                    resizeMode="contain"
                    />
                </TouchableOpacity>
            )}
        </View>
    </View>
  )
}

export default FormField