import { Text, View, Image, StyleSheet , ScrollView } from "react-native";
import List from "../components/MealDetail/List";
import { MEALS } from "../data/dummy-data";
import Subtitle from "../components/MealDetail/Subtitle";
function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  const select = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View  style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}
export default MealDetailScreen;

const styles = StyleSheet.create({
    root : {
        marginBottom : 32,
    },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
    fontSize: 24,
    colors: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer : {
    alignItems : 'center',
  },
  listContainer: {
    width: "80%",
  },
});
