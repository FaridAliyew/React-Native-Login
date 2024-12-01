import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -160,
    textTransform: 'capitalize',
  },
  formContainer: {
    marginTop: 50,
  },
  input: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    borderBottomWidth: 1,
    borderColor: 'gray',
    justifyContent: 'space-between', 
    paddingVertical: 21,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingRight: 40, 
  },
  forgetText: {
    position: 'absolute',  
    right: 0,  
    fontWeight: 'bold',
    textTransform: 'capitalize', 
  },
  loginButton: {
    backgroundColor: 'black',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5, 
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'capitalize', 
  },
});
