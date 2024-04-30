import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import axios from 'axios';

export default function HomeScreen() {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
        setMeal(res.data.meals[0]);
      } catch {
        console.error('Houve algum erro: ', error);
      }
    };

    fetchRecipes();
  }, [])

  return (
    <View style={styles.container}>
      {meal ? (
        <View style={styles.container}>
          <Image source={{ uri: meal.strMealThumb }} style={{ width: 300, height: 300, marginBottom: 10 }} />
          <Text>Nome: {meal.strMeal}</Text>
          <Text>Categoria: {meal.strCategory}</Text>
          <Text style={styles.texto}>Instruções: {meal.strInstructions}</Text>
        </View>
      ) : (
        <Text>Carregando ...</Text>
      )}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    textAlign: 'center',
  },
  texto: {
    marginLeft: 50,
    marginBottom: 50,
    marginRight: 50,
  }
})