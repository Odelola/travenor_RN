import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthForgotPassword, AuthOTPVerification, AuthSignIn, AuthSignUp } from '@/screens';
import { APP_SCREEN_NAMES } from '@/constants';

function AuthScreenNavigator() {
    const AuthStack = createNativeStackNavigator();

    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name={APP_SCREEN_NAMES['AUTH-SIGN-IN']} component={AuthSignIn} />
            <AuthStack.Screen name={APP_SCREEN_NAMES['AUTH-SIGN-UP']} component={AuthSignUp} />
            <AuthStack.Screen name={APP_SCREEN_NAMES['AUTH-FORGOT-PASSWORD']} component={AuthForgotPassword} />
            <AuthStack.Screen name={APP_SCREEN_NAMES['AUTH-OTP-VERIFICATION']} component={AuthOTPVerification} />
        </AuthStack.Navigator>
    )
}

export default AuthScreenNavigator;
