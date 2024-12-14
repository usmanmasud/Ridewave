import { View, Text } from "react-native";
import React, { useState } from "react";
import { Redirect } from "expo-router";

export default function index() {
  const [isLoggenIng, setIsLoggenIng] = useState(false);
  return (
    <Redirect href={!isLoggenIng ? "/(routes)/onboarding" : "/(tabs)/home"} />
  );
}
