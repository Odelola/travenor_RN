import { SCREEN_MEASUREMENTS } from '@/theme';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, ViewProps } from 'react-native';


function AppScreen({ flex = true, children, ...props }: { flex?: boolean } & ViewProps) {
    const { paddingHorizontal, marginFromTop} = SCREEN_MEASUREMENTS;
    return (
            <SafeAreaView className={flex ? "bg-white" : "" } style={{ paddingTop: marginFromTop,  paddingHorizontal: paddingHorizontal, flex: flex ? 1 : 0 }} {...props}>
                {flex && (<StatusBar style='dark' />)}
                {children}
            </SafeAreaView>
    )
}

export default AppScreen;