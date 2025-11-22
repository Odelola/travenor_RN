import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthSignIn } from '@/screens';

function AuthScreenNavigator() {
    const AuthStack = createNativeStackNavigator();

    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name='AuthSignIn' component={AuthSignIn} />
        </AuthStack.Navigator>
    )
}

export default AuthScreenNavigator;
