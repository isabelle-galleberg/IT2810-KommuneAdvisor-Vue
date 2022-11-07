import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "./src/pages/MainPage";
import DetailsPage from "./src/pages/DetailsPage";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const Stack = createNativeStackNavigator();

function App() {
  const client = new ApolloClient({
    uri: process.env.REACT_APP_API_URL + "/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={MainPage} />
          <Stack.Screen name="Details" component={DetailsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
