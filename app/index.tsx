import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="mt-6 mx-2.5">
        <Text className="text-3xl font-work-black text-primary">
          Hola mundo
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
