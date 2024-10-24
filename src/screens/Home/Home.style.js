import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
    flex: 1,
    paddingHorizontal: '3%',
    paddingTop: '2%',
    backgroundColor: '#FFFFFF',
   },
   flatList: {
       width: '100%',
       alignSelf: 'center',
   },
   iconsAndSearchBar: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 1,
    justifyContent: 'space-between',
   },
   textInput:{
    width: '80%',
    height: 35,
    borderWidth: 0.5,
    paddingHorizontal: 5,
   },
   letsStart: {
       fontWeight: 'bold',
       color: '#23232C',
       alignSelf: 'center',
       fontSize: 50,
       textAlign: 'center',
   },
   smallText: {
       marginTop: 5,
       fontSize: 18,
       alignSelf: 'center',
       textAlign: 'center',
       color: '#848484',
       lineHeight: 30
   },
   footerComponent: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
   }
});

export default styles