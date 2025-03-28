import { View, Text, ScrollView, Image } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from "expo-router"
import { router } from 'expo-router'

// Initializes empty state for email and password field
const SignUp = () => {

  const [form, setForm] = useState({
    username: "",
    email:  "",
    password: ""
  })
  //Initalizes loading state as false
  const [isSubmitting, setSubmitting] = useState(false)
  const submit = () => {

  }
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image source = {images.logo} resizeMode = "contain" 
          className="w-[115px] h-[35px]"/>
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Sign Up to Aora
          </Text>
          <FormField
            title="Username"
            value = {form.username}
            //Destructures form value and modifies the username to be the text passed into it
            handleChangeText={(e) => setForm({...form, username: e})}
            otherStyles="mt-10"
          />
          <FormField
            title="Email"
            value = {form.email}
            //Destructures form value and modifies the username to be the text passed into it
            handleChangeText={(e) => setForm({...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value = {form.password}
            handleChangeText={(e) => setForm({...form, password: e})}
            otherStyles="mt-7"
          />

          <CustomButton
            title = "Sign Up"
            handlePress={() => router.push("/home") }
            

            containerStyles={"mt-7"}
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link href="/sign-in" className="text-lg font-psemibold text-secondary">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp