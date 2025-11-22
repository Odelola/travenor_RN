import { FlatList } from "react-native"
import { AppBox, AppText } from "../ui"
import BookCategoriesCard from "./BookCategoriesCard";
import theme from "../../theme";

type CategoriesSectionProps = {
  categoryTitle: string;
  movieData: { image: string; title: string; description: string; }[]
}
const BookCategoriesSection = ({ categoryTitle, movieData }: CategoriesSectionProps) => {
  const {m: mediumSpacing} = theme.spacing
  return (
    <AppBox >
      <AppText variant="largeHeading" mb="xl" paddingLeft="m">{categoryTitle}</AppText>
      <FlatList
        alwaysBounceHorizontal={false}
        bounces={false}
        data={movieData}
        contentContainerStyle={{ paddingLeft: mediumSpacing }}
        renderItem={({ item }) => <BookCategoriesCard image={item.image} bookTitle={item.title} bookDescription={item.description} />}
        keyExtractor={(item: any, index) => `${item.title} - ${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
      />
    </AppBox>
  )
}

export default BookCategoriesSection