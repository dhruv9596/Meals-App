import { View ,Text , StyleSheet } from "react-native";

function List({data}) {
    return (data.map((dataPoint) => (
            <View  key = {dataPoint} style = {styles.listTitle}>
                <Text style = { styles.itemText}>{dataPoint}</Text>
            </View>))
    );
}
export default List;
const styles = StyleSheet.create({
    listTitle : {
        borderRadius : 6,
        paddingHorizontal : 8,
        paddingVertical : 4,
        marginHorizontal : 8,
        marginVertical : 12,
        backgroundColor : '#e2b497',
    },
    itemText : {
        color : '#351401',
        textAlign : 'center'
    }
})