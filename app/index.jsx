import { StyleSheet, Text, View , Image} from 'react-native'
import Logo from '../assets/icon.png'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'

const Home = () => {
  return (
    <ThemedView style={styles.container} >
      <ThemedLogo style={styles.img}/>
      <ThemedText style={styles.title} title={true}>The Number 1 </ThemedText>
      <Spacer height={20}/>
      <ThemedText>Reading List App </ThemedText>
      <Spacer/>

      <Link href="/login" style={styles.link}>
        <ThemedText>Login Page</ThemedText>
      </Link>

      <Link href="/register" style={styles.link}>
        <ThemedText>Register Page</ThemedText>
      </Link>

       <Link href="/profile" style={styles.link}>
        <ThemedText>Profile</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18

    },
    
    img:{
        marginVertical: 20,

    }
})