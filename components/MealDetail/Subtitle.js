import { View , Text , StyleSheet } from 'react-native';

function Subtitle({ children }) {
        return (
            <View style = {styles.subTitleContainer}>
                <Text>
                    {children}
                </Text>
            </View>
        );
}

export default Subtitle;
const styles = StyleSheet.create({
    subTitle : {
        color : '#e2b497',
        fontSize : 18 ,
        fontWeight : 'bold',
        
        textAlign : 'center',
        
    },
    subTitleContainer : {
        padding : 6,
        borderBottomColor :  '#e2b497',
        borderBottomWidth : 2, 
        margin : 4 , 
        marginHorizontal : 12,
        marginVertical : 2,
    }
});