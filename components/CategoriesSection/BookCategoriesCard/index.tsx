import { Dimensions, Image } from "react-native";
import { AppBox, AppButton, AppText } from "../../ui"
import { getFontSize } from "../../../utils/functions";


const { width } = Dimensions.get("window");
const widthOfItem = width / 2.1;

type BookCategoriesCardProps = {
    image: any;
    bookTitle: string;
    bookDescription: string;
}
const BookCategoriesCard = ({ image, bookTitle, bookDescription, }: BookCategoriesCardProps) => {
    return (
        <AppBox width={widthOfItem} style={{ marginRight: (widthOfItem / 10) }}>
            <Image source={image} style={{ width: "100%", height: 200, borderRadius: 12, marginBottom: 12 }} />
            <AppText variant="largeHeading" style={{ fontFamily: "PoppinsBold" }} marginBottom="s" numberOfLines={2} adjustsFontSizeToFit>{bookTitle}</AppText>
            <AppText variant="light" marginBottom="m">{bookDescription}</AppText>
            <AppButton />
        </AppBox >
    )
}

export default BookCategoriesCard
