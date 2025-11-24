import { OnboardingImage1, OnboardingImage2, OnboardingImage3 } from "@assets/static/images";
import { ImageSourcePropType } from "react-native";

export interface ONBOARDING_DATA_TYPE {
    image: ImageSourcePropType;
    heading: string[];
    headingHighlight: string;
    paragraph: string[]
}

export const ONBOARDING_DATA: ONBOARDING_DATA_TYPE[] = [
    {
        image: OnboardingImage1,
        heading: [
            "Life is short and the",
            "world is"
        ],
        headingHighlight: "wide",
        paragraph: [
            "At Friends tours and travel, we customize",
            "reliable and trutworthy educational tours to",
            "destinations all over the world"
        ]
    },
    {
        image: OnboardingImage2,
        heading: [
            "It's a big world out",
            "there go"
        ],
        headingHighlight: "explore",
        paragraph: [
            "To get the best of your adventure you just",
            "need to leave and go where you like. we are",
            "waiting for you"
        ]
    },
    {
        image: OnboardingImage3,
        heading: [
            "People don't take trips,",
            "trip takes"
        ],
        headingHighlight: "people",
        paragraph: [
            "To get the best of your adventure you just",
            "need to leave and go where you like. we are",
            "waiting for you"
        ]
    },
];

export const APP_SCREEN_NAMES ={
    "ONBOARDING": "Onboarding",
    "AUTH-SCREEN-NAVIGATOR": "AuthScreenNavigator",
    "AUTH-SIGN-IN": "AuthSignIn",
    "AUTH-SIGN-UP": "AuthSignUp",
    "AUTH-FORGOT-PASSWORD": "AuthForgotPassword",
    "AUTH-OTP-VERIFICATION": "AuthOTPVerification",
    "APP-BOTTOM-TAB-NAVIGATOR": "AppBottomTabNavigator",
    "HOME": "Home"
}