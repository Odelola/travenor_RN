import { EmailIcon } from "@/assets/svgs";
import { APP_SCREEN_NAMES } from "@/constants";
import { AppBackNavigator, AppBox, AppButton, AppInput, AppScreen, AppText } from "@/shared";
import { NavigationProp } from "@react-navigation/native";
import { useState } from "react";
import { Modal, StyleSheet } from "react-native";

function AuthForgotPassword({ navigation }: { navigation: NavigationProp<any, any> }) {
        const [modalVisible, setModalVisible] = useState(false);
    
    const _navigateToSignUpScreen = () => {
        navigation.navigate(APP_SCREEN_NAMES['AUTH-OTP-VERIFICATION']);
    }
    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <AppBox className="flex-1 justify-center items-center" style={{ backgroundColor: "rgba(27, 30, 40, .2)" }}>
                    <AppBox style={styles.modalView}>
                        <AppBox className="w-11 h-11 rounded-full bg-primary justify-center mb-4 items-center">
                            <EmailIcon />
                        </AppBox>
                        <AppBox className="mb-6 items-center">
                            <AppText variant="heading">Check your email</AppText>
                            <AppText>We have send password recovery</AppText>
                            <AppText>instruction to your email</AppText>
                        </AppBox>
                        <AppButton buttonText="Verify OTP" onPress={() => {setModalVisible(!modalVisible); _navigateToSignUpScreen();}} />
                    </AppBox>
                </AppBox>
            </Modal>
            <AppScreen >
                <AppBackNavigator />
                <AppBox className="items-center my-10">
                    <AppText variant="bigHeading">Forgot Password</AppText>
                    <AppText>Enter your email account to reset</AppText>
                    <AppText>your password</AppText>
                </AppBox>
                <AppBox>
                    <AppInput placeholder="Email" hasMargin />
                </AppBox>
                <AppBox className="my-6">
                    <AppButton buttonText="Reset Password" onPress={() => setModalVisible(!modalVisible)} />
                </AppBox>
            </AppScreen>
        </>
    )
}

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: 'white',
        borderRadius: 24,
        padding: 25,
        alignItems: 'center',
        width: "80%",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
});

export default AuthForgotPassword;
