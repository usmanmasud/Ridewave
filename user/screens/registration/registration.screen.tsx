import { View, Text } from "react-native";
import React, { useState } from "react";

export default function RegistrationScreen() {
  const [emailFormatWaring, setEmailFormatWaring] = useState("");
  const [showWarning, setShowWaring] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phomeNumber: "",
    email: "",
    countryCode: "",
    referralId: "",
  });

  return (
    <View>
      <Text>RegistrationScreen</Text>
    </View>
  );
}
