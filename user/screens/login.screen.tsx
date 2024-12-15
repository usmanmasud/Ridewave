import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import AuthContainer from "@/utils/container/auth-container";
import { windowHeight } from "@/themes/app.constant";
import styles from "./styles";
import Images from "@/utils/images";
import SignInText from "@/components/login/signin.text";
import { external } from "@/styles/external.style";
import PhoneNumberInput from "@/components/login/phone-number.input";
import Button from "@/components/common/button";
import { router } from "expo-router";
import { useToast } from "react-native-toast-notifications";
import axios from "axios";

export default function LoginScreen() {
  const [phone_number, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+234");
  const toast = useToast();

  const handleSubmit = async () => {
    if (phone_number === "" || countryCode == "") {
      toast.show("Please fill the fields", {
        placement: "bottom",
      });
    } else {
      // console.log(phoneNumber, countryCode);
      const phoneNumber = `$+{countryCode}${phone_number}`;

      await axios
        .post(`${process.env.EXPO_PUBLIC_SERVER_URI}/registration`, {
          phone_number: phoneNumber,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <AuthContainer
      container={
        <View>
          <View>
            <View>
              <Image style={styles.transformLine} source={Images.line} />
              <SignInText />
              <View style={[external.mt_25, external.Pb_10]}>
                <PhoneNumberInput
                  phone_number={phone_number}
                  setPhoneNumber={setPhoneNumber}
                  countryCode={countryCode}
                  setCountryCode={setCountryCode}
                />
                <View style={[external.mt_25, external.Pb_15]}>
                  <Button title="Get Otp" onPress={() => handleSubmit()} />
                </View>
              </View>
            </View>
          </View>
        </View>
      }
      topSpace={windowHeight(150)}
      imageShow={true}
    />
  );
}
