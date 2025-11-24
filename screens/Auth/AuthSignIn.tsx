import { FacebookLogo, InstagramLogo, TwitterLogo } from "@/assets/svgs";
import { AppBackNavigator, AppBox, AppButton, AppInput, AppLink, AppScreen, AppText } from "@/shared";
import { APP_FONTS, APP_PALETTE } from "@/theme";
import { TextInput } from "react-native";

function AuthSignIn() {
    const { primary } = APP_PALETTE;
    return (
        <AppScreen>
            <AppBackNavigator />
            <AppBox className="items-center my-6">
                <AppText variant="bigHeading">Sign in now</AppText>
                <AppText>Please sign in to continue our app</AppText>
            </AppBox>
            <AppBox>
                <AppInput placeholder="Email" hasMargin />
                <AppInput placeholder="Password" hasMargin secureTextEntry />
                {/* <TextInput placeholder="Email" className="bg-grey-300 rounded-2xl py-3 px-6" cursorColor={"red"} /> */}
            </AppBox>
            <AppBox className="items-end">
                <AppLink linkText="Forget Password?" />
            </AppBox>
            <AppBox className="my-12">
                <AppButton buttonText="Sign In" />
            </AppBox>
            <AppBox className="items-center">
                <AppBox className="flex-row">
                    <AppText>Don't have an account?</AppText>
                    <AppLink linkText="Sign up" />
                </AppBox>
                <AppBox className="mt-2">
                    <AppText>Or connect</AppText>
                </AppBox>
            </AppBox>
            <AppBox className="flex-row gap-x-6 ">
                <FacebookLogo />
                <InstagramLogo />
                <TwitterLogo />
            </AppBox>
        </AppScreen>
    )
}

export default AuthSignIn;
