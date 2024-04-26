import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import axios from "axios";

const API_URL = "https://gold-anemone-wig.cyclic.app/receitas/todos";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 10 }}>
      <Text>{item.receita}</Text>
      <Text>{item.ingredientes}</Text>
      <Text>{item.modo_preparo}</Text>
    </View>
  );

  return (
    <View>
      <Text>Receitas</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
