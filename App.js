import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/HomeScreen';
import SobreScreen from './app/screens/SobreScreen';
import CadastroMoradorScreen from './app/screens/CadastroMoradorScreen';
import CadastroVeiculoScreen from './app/screens/CadastroVeiculoScreen';
import CadastroCondominioScreen from './app/screens/CadastroCondominioScreen';
import CadastroBlocoScreen from './app/screens/CadastroBlocoScreen';
import CadastroTorreScreen from './app/screens/CadastroTorreScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sobre" component={SobreScreen} />
        <Stack.Screen name="CadastroMorador" component={CadastroMoradorScreen} />
        <Stack.Screen name="CadastroVeiculo" component={CadastroVeiculoScreen} />
        <Stack.Screen name="CadastroCondominio" component={CadastroCondominioScreen} />
        <Stack.Screen name="CadastroBloco" component={CadastroBlocoScreen} />
        <Stack.Screen name="CadastroTorre" component={CadastroTorreScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
