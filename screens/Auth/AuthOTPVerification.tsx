import { APP_SCREEN_NAMES } from "@/constants";
import { AppBackNavigator, AppBox, AppButton, AppScreen, AppText } from "@/shared";
import { APP_PALETTE } from "@/theme";
import { NavigationProp } from "@react-navigation/native";
import { OtpInput } from "react-native-otp-entry";

function AuthOTPVerification({ navigation }: { navigation: NavigationProp<any, any> }) {
    const _navigateToSignUpScreen = () => {
        navigation.navigate(APP_SCREEN_NAMES['APP-BOTTOM-TAB-NAVIGATOR']);
    }
    return (
        <AppScreen >
            <AppBackNavigator />
            <AppBox className="items-center my-10">
                <AppText variant="bigHeading">OTP Verification</AppText>
                <AppText>Please check your email www.uihut@gmail.com</AppText>
                <AppText>to see the verification code</AppText>
            </AppBox>
            <AppBox>
                <AppText variant="heading" fontSize={20}>OTP Code</AppText>
                <OtpInput
                    numberOfDigits={4}
                    type="numeric"
                    focusColor={APP_PALETTE.primary.DEFAULT}
                    theme={{
                        pinCodeContainerStyle: { backgroundColor: APP_PALETTE.grey[300], width: "20%" },
                        focusedPinCodeContainerStyle: { borderColor: APP_PALETTE.primary.DEFAULT }
                    }}
                />
            </AppBox>
            <AppBox className="my-6">
                <AppButton buttonText="Verify" onPress={() => _navigateToSignUpScreen()} />
            </AppBox>
            <AppBox className="flex-row justify-between">
                <AppText fontSize={14}>Resend code to</AppText>
                <AppText fontSize={14}>01:26</AppText>
            </AppBox>
        </AppScreen>
    )
}

export default AuthOTPVerification;
