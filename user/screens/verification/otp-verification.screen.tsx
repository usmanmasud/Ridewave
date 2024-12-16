import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AuthContainer from "@/utils/container/auth-container";
import { windowHeight } from "@/themes/app.constant";
import SignInText from "@/components/login/signin.text";
import OTPTextInput from "react-native-otp-textinput";
import { style } from "./styles";
import color from "@/themes/app.colors";
import { external } from "@/styles/external.style";
import Button from "@/components/common/button";
import { router, useLocalSearchParams } from "expo-router";
import { commonStyles } from "@/styles/common.style";
import { useToast } from "react-native-toast-notifications";
import axios from "axios";

const OtpVerificationScreen = () => {
  const [otp, setOtp] = useState("");
  const toast = useToast();
  const phoneNumber = useLocalSearchParams();

  const handleSubmit = async () => {
    if (otp === "") {
      toast.show("Please fill the fields", {
        placement: "bottom",
      });
    } else {
      // console.log(phoneNumber, countryCode);
      const otpNumbers = `${otp}`;
      console.log(otp, phoneNumber);
      await axios
        .post(`${process.env.EXPO_PUBLIC_SERVER_URI}/verify-otp`, {
          phone_number: phoneNumber,
          otp: otpNumbers,
        })
        .then((res) => {
          // router.push("/(routes)/otp-verification");
          toast.show("Acoount verified!");
        })
        .catch((e) => {
          // console.log(e);
          toast.show("Something went wrong", {
            type: "danger",
            placement: "bottom",
          });
        });
    }
  };

  return (
    <AuthContainer
      topSpace={windowHeight(240)}
      imageShow={true}
      container={
        <View>
          <SignInText
            title="OTP Verification"
            subtitle="Check your phone number for the otp"
          />
          <OTPTextInput
            handleTextChange={(code) => setOtp(code)}
            inputCount={4}
            textInputStyle={style.otpTextInput}
            tintColor={color.subtitle}
            autoFocus={false}
          />
          <View style={external.mt_30}>
            <Button title="Verify" onPress={() => handleSubmit()} />
          </View>
          <View style={external.mb_15}>
            <View
              style={[
                external.pt_10,
                external.Pb_10,
                { flexDirection: "row", gap: 5, justifyContent: "center" },
              ]}
            >
              <Text style={[commonStyles.regularText]}>Not Recieved yet?</Text>
              <TouchableOpacity>
                <Text style={[style.signUpText, { color: "black" }]}>
                  Resend it
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      }
    />
  );
};

export default OtpVerificationScreen;
