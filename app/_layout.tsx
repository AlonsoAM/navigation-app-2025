import React, { useEffect } from "react";
import "./global.css";
import { Slot, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-Light": require("../assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-Medium": require("../assets/fonts/WorkSans-Medium.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    } else if (error) {
      console.error("Error loading fonts:", error);
    }
  }, [fontsLoaded, error]);

  if (error) {
    return (
      <div style={{ color: "red", textAlign: "center", marginTop: "2rem" }}>
        Error loading fonts. Please try reloading the app.
      </div>
    );
  }

  if (!fontsLoaded) {
    return null; // or a loading indicator
  }

  return <Slot />;
};

export default RootLayout;
