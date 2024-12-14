import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AuthContainer from "@/utils/container/auth-container";
import { windowHeight } from "@/themes/app.constant";
import SignInText from "@/components/login/signin.text";
import OTPTextInput from "react-native-otp-textinput";
import { style } from "./styles";
import color from "@/themes/app.colors";
import { external } from "@/styles/external.style";
import Button from "@/components/common/button";
import { router } from "expo-router";
import { commonStyles } from "@/styles/common.style";

const OtpVerificationScreen = () => {
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
            handleTextChange={(code) => console.log(code)}
            inputCount={4}
            textInputStyle={style.otpTextInput}
            tintColor={color.subtitle}
            autoFocus={false}
          />
          <View style={external.mt_30}>
            <Button
              title="Verify"
              onPress={() => router.push("/(tabs)/home")}
            />
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
