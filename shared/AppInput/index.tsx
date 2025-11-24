import { SCREEN_MEASUREMENTS } from '@/theme';
import { TextInput, TextInputProps, View } from 'react-native';
import AppBox from '../AppBox';
import AppText from '../AppText';

export interface AppInputProps extends TextInputProps {
    hasMargin?: boolean,
    margin?: number;
    iconRight?: React.ReactNode;
    iconRightChanged?: React.ReactNode
}


function AppInput({ hasMargin = false, margin = 16, placeholder, iconRight }: AppInputProps) {
    const { paddingHorizontal, marginFromTop } = SCREEN_MEASUREMENTS;
    return (
        <View className="bg-grey-300 rounded-2xl w-full" style={{ height: 50, marginBottom: hasMargin ? margin : 0 }}>
            <TextInput placeholder={placeholder} className="w-full h-full px-6 rounded-2xl" />
            {!!iconRight && iconRight}
        </View>
    )
}

export default AppInput;