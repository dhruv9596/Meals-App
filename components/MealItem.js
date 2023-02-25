import { View , Pressable , Text , StyleSheet , Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealDetails from './MealDetails';
function MealItem ( { id , title , imageUrl , duration , complexity , affordability } ) {
    
    const navigation = useNavigation();
    function selectMealItemHandler(){
        navigation.navigate('MealDetail' , { 
            mealId : id , 

        });
    }

    
    return 
    <View style = {StyleSheet.mealItem}>
        <Pressable android_ripple={ {color : '#ccc'} }
        style = {({pressed}) => ( pressed ? style.buttonPressed : null)}
        onPress = { selectMealItemHandler }
        >
        <View>
            <View style = {style.mealItem}>
                <Image source={{uri : imageUrl}} style = {style.image}/>
                <Text style = {style.title}>
                    {title}
                </Text>
            </View>
            <MealDetails duration = {duration}
            affordability = {affordability}
            complexity = {complexity} />
            </View>
        </Pressable>
    </View>

}

export default MealItem;
const style = StyleSheet.create({
    mealItem : {
        margin : 16,
        borderRadius : 8,
        overflow : Platform.OS === 'android' ?'hidden' : 'visible',
        backgroundColor : 'white',
        elevation : 4,
        shadowColor : 'black',
        shadowOpacity : 0.25,
        shadowOffset : {width : 0 , height : 2},
        shadowRadius : 8, 
    },
    buttonPressed :{
        opacity : 0.5,
    },
    innerContainer  : {
        borderRadius : 8,
    },
   image : {
    width : '100%',
    height : 200,

   },
   title : {
    fontWeight : 'bold',
    textAlign : 'center',
    fontSize : 18,
    margin : 8,
   }, 
   details : {
    flexDirection : 'row',
    alignItems : 'center',
    padding : 8,
    justifyContent : 'center',
   },
   detailItem : {
    marginHorizontal : 4,
    fontSize : 12,

   }
});