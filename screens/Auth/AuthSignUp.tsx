import { EyeSlashIcon, FacebookLogo, InstagramLogo, TwitterLogo } from "@/assets/svgs";
import { APP_SCREEN_NAMES } from "@/constants";
import { AppBackNavigator, AppBox, AppButton, AppInput, AppLink, AppScreen, AppText } from "@/shared";
import { NavigationProp } from "@react-navigation/native";

function AuthSignUp({ navigation }: { navigation: NavigationProp<any, any> }) {
    const _navigateToSignInScreen = () => {
        navigation.navigate(APP_SCREEN_NAMES['AUTH-SIGN-IN']);
    }
    return (
        <AppScreen >
            <AppBackNavigator />
            <AppBox className="items-center my-10">
                <AppText variant="bigHeading">Sign up now</AppText>
                <AppText>Please fill the details and create account</AppText>
            </AppBox>
            <AppBox>
                <AppInput placeholder="Name" hasMargin />
                <AppInput placeholder="Email" hasMargin />
                <AppInput placeholder="Password" hasMargin secureTextEntry iconRight={<EyeSlashIcon />} />
            </AppBox>
            <AppBox className="my-12">
                <AppButton buttonText="Sign Up" />
            </AppBox>
            <AppBox className="items-center">
                <AppBox className="flex-row">
                    <AppText>Already have an account?</AppText>
                    <AppLink linkText="Sign in" onPress={() => _navigateToSignInScreen()}  />
                </AppBox>
                <AppBox className="mt-2">
                    <AppText>Or connect</AppText>
                </AppBox>
            </AppBox>
            <AppBox className="flex-row justify-center items-end flex-1 justify-self-end" style={{ columnGap: 24 }}>
                <FacebookLogo />
                <InstagramLogo />
                <TwitterLogo />
            </AppBox>
        </AppScreen>
    )
}

export default AuthSignUp;
