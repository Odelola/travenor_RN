import { createBox } from '@shopify/restyle'
import { Theme } from "../../../theme"
import { View, ViewProps } from 'react-native';
import { Children } from 'react';


function AppBox({ children, ...props }: ViewProps) {
    return (
        <View { ...props }>
        { children }
        </View>
    )
}

export default AppBox;