import { Text , View , Image , StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";

function MealDetailScreen( { route }){
    const mealId = route.params.mealId;
    const select = MEALS.find((meal) => meal.id === mealId);
    return (
        <View>
            <Image style = {styles.image} source={ {uri  : selectedMeal.imageUrl}  }
            />
            <Text style = {styles.title}>
            <MealDetails 
            duration= {selectedMeal.duration}
            complexity = {selectedMeal.complexity}
            affordability = {selectedMeal.affordability} 
            textStyle = { styles.detailText }
            />
            </Text>
            <View>
                <Text style = { styles.subTitle}>
                    Ingredients
                </Text>
            </View>
            {
                selectedMeal.ingredients.map((ingredient) => <Text key = {ingredient}>{ingredient}</Text>)
            }
            <Text>
                Steps
            </Text>
            {
                selectedMeal.ingredients.map((steps) => <Text key = {steps}>{steps}</Text>)
            }
        </View>
    );
}
export default MealDetailScreen;

const styles = StyleSheet.create({
    image : {
        width : '100%',
        height : 350
    },
    title : {
        fontWeight : 'bold',
        textAlign : 'center',
        margin : 8 ,
        fontSize : 24,
        colors : 'white',
    },
    detailText : {
        color : 'white',
    },
    subTitle : {
        color : 'white',
        fontSize : 18 ,
        fontWeight : 'bold',
        margin : 4 , 
        textAlign : 'center',
        padding : 6,
        borderBottomColor :  'white',
        borderBottomWidth : 2, 
    }
});