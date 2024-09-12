import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MeanlDetail from "../compoents/MealDetails";
import Subtitle from "../compoents/mealDetail/Subtitle";
import DetailList from "../compoents/mealDetail/DetailList";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../compoents/mealDetail/IconButton";
import { FavoritesContext } from "../store/favorites-context";

const DetailsScreen = ({route, navigation}) => {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const mealId = route.params?.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);


  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  const ChangeFavoriteStatusHandler = () => {
    if (mealIsFavorite) favoriteMealsCtx.removeFavorite(mealId);
    else favoriteMealsCtx.addFavorite(mealId);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={ChangeFavoriteStatusHandler}
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
          />
        );
      },
    });
  }, [navigation, ChangeFavoriteStatusHandler]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ url: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View>
        <MeanlDetail
          affordability={selectedMeal.affordability}
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          textStyle={styles.detailText}
        />
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <DetailList list={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <DetailList list={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;
const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    with: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    margin:8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
