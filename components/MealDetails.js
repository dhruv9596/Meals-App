import { View, Text ,StyleSheet } from "react-native";

function MealDetails( { duration , complexity ,affordability , style , textStyle}){
    return <View style = {[style.details , style] }>
    <Text style = {[style.detailItem , textStyle]} >
        {duration}m
    </Text>
    <Text style = {[style.detailItem , textStyle]}>
        {complexity.toUpperCase()}
    </Text>
    <Text style = {[style.detailItem , textStyle]}>
        {affordability.toUpperCase()}
    </Text>
    </View>
}
export default MealDetails;

const style = StyleSheet.create({
    
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
