import React from 'react'
import { AppBox, AppButton, AppText, HighlightedSvgHeading } from '@/shared';
import { Animated, FlatList, FlatListProps, Image, TouchableOpacity, useWindowDimensions } from 'react-native'
import { APP_FONTS } from 'theme';
import { OnboardingTextCrescent } from '@assets/svgs';
import { AppTextProps } from '@/shared/AppText';
import { APP_SCREEN_NAMES, ONBOARDING_DATA, ONBOARDING_DATA_TYPE } from '@/constants';
import { StatusBar } from 'expo-status-bar';
import { NavigationProp } from '@react-navigation/native';

function Onboarding({ navigation }: { navigation: NavigationProp<any, any> }) {
    const { width, height } = useWindowDimensions();

    const flatListRef = React.useRef(null);
    const scrollX = React.useRef(new Animated.Value(0)).current;

    const _navigateToAuthScreen = () => {
        navigation.navigate(APP_SCREEN_NAMES['AUTH-SCREEN-NAVIGATOR']);
    }

    const ScrollIndicators = () => {
        return (
            <AppBox className='flex-row gap-x-2 my-4' >
                {ONBOARDING_DATA.map((_, index) => {
                    const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
                    const inputRange2 = [(index) * (width), (index) * width * 2, (index + 1) * width * 4];
                    const colorChange = scrollX.interpolate({
                        inputRange,
                        outputRange: ["#CAEAFF", "#0D6EFD", "#CAEAFF"],
                        extrapolate: 'clamp'
                    });
                    const widthChange = scrollX.interpolate({
                        inputRange: inputRange2,
                        outputRange: [32, 8, 16],
                        extrapolate: 'clamp'
                    })
                    return (
                        <Animated.View className="!w-2 h-2 rounded-lg" style={[{ backgroundColor: colorChange, width: widthChange }]} key={index}></Animated.View>
                    )
                })}
            </AppBox>
        )
    }

    function OnboardingHeading({ children }: AppTextProps) {
        return (
            <AppText fontSize={30} className='text-dark' fontFamily={APP_FONTS.GEOMETR415}>
                {children}
            </AppText>
        )
    }

    function OnboardingText({ children }: AppTextProps) {
        return (
            <AppText fontFamily={APP_FONTS['GILL-SANS']} style={{ lineHeight: 24}}>
                {children}
            </AppText>
        )
    }

    return (
        <AppBox className='pb-4'>
            <StatusBar style='light' />
            <TouchableOpacity className='absolute mt-8 z-50 top-4 right-5' onPress={() => _navigateToAuthScreen()}>
                <AppText fontFamily={APP_FONTS['GILL-SANS']} className='text-primary-100 text-xl'>Skip</AppText>
            </TouchableOpacity>
            <FlatList
                ref={flatListRef}
                data={ONBOARDING_DATA}
                keyExtractor={(_, index) => String(index)}
                renderItem={({ item }) => (
                    <OnboardingSlide item={item} />
                )}
                alwaysBounceHorizontal={false}
                scrollEventThrottle={16}
                horizontal
                bounces={false}
                pagingEnabled
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}

                showsHorizontalScrollIndicator={false}
                overScrollMode='never'
            />
            <AppBox className='items-center mt-4'>
                <ScrollIndicators />
            </AppBox>
            <AppBox style={{ paddingHorizontal: width * .05 }}>
                <AppButton buttonText={"Get Started"} onPress={() => _navigateToAuthScreen()} />
            </AppBox>
        </AppBox>
    )

    function OnboardingSlide({ item }: { item: ONBOARDING_DATA_TYPE }) {
        return (
            <AppBox>
                <AppBox style={{ width, height: height / 1.85 }}>
                    <Image className='rounded-b-[36] w-full h-full' source={item.image} alt='Onboarding Image 1' />
                </AppBox>
                <AppBox className='items-center mt-8'>
                    <OnboardingHeading>
                        {item.heading[0]}
                    </OnboardingHeading>
                    <AppBox className='flex-row'>
                        <OnboardingHeading>
                            {item.heading[1]}
                        </OnboardingHeading>
                        <HighlightedSvgHeading heading='people' />
                        {/* <AppBox className='items-center'>
                            <OnboardingHeading className='text-orange'>
                                {item.headingHighlight}
                            </OnboardingHeading>
                            <OnboardingTextCrescent />
                        </AppBox> */}
                        {/* <Image classN='w-full object-contain' source={OnboardingTextCrescent} /> */}
                    </AppBox>
                    <AppBox className='items-center gap-y-1.5 mt-4'>
                        <OnboardingText>
                            {item.paragraph[0]}
                        </OnboardingText>
                        <OnboardingText>
                            {item.paragraph[1]}
                        </OnboardingText>
                        <OnboardingText>
                            {item.paragraph[2]}
                        </OnboardingText>
                    </AppBox>
                </AppBox>
            </AppBox>
        )
    }
}

export default Onboarding