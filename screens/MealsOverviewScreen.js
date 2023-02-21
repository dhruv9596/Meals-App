import { MEALS , CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { View , Text , FlatList , StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useEffect , useLayoutEffect } from 'react';
function MealsOverViewScreen({ route , navigation }){
    
    const catId = route.params.categoryId;
    const displayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexof(catId) >= 0;
    });

    useLayoutEffect(()=> {
        const categoryTitle = CATEGORIES.find((category) => category.id ===catId ).title;
        navigation.setOptions({
            title : categoryTitle,
        });
    }, [catId , navigation]);
    
    function renderMealItem() {
        const item = itemData.item;

        const mealItemProps = {
            id : item.id,
            title : item.title,
            imageUrl : item.imageUrl,
            affordability : item.affordability,
            duration : item.duration,
            complexity : item.complexity, 
        }
        return 
        <MealItem 
        title  = { itemData.item.title } 
        imageUrl = {itemData.item.imageUrl}
        />
    }
    return (
        <View style = {StyleSheet.container}>
            <FlatList data = { displayMeals }
            keyExtractor = { (item) =>item.id}
            renderItem = {renderMealItem} />
        </View>

    );
};
export default MealsOverViewScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        padding : 16 ,
    },
});