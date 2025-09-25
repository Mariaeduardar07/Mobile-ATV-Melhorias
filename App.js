import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Header, AddCharacter, CharacterList } from "./components";

export default function App() {
  // 🧠 Estados - variáveis que mudam
  const [characters, setCharacters] = useState([
    { id: 1, name: "�‍♀️ Luna a Fada Encantada", recruited: 1 },
    { id: 2, name: "🌸 Seraphina a Curandeira", recruited: 0 },
    { id: 3, name: "🦄 Celeste a Amazona", recruited: 0 },
    { id: 4, name: "🌙 Mystique a Bruxa Sábia", recruited: 1 },
  ]);

  const [newCharacter, setNewCharacter] = useState("");

  // ✨ Adicionar nova aventureira à party
  function addCharacter() {
    if (newCharacter.trim() === "") return; // Se estiver vazio, não adicionar

    const newId = Math.max(...characters.map(c => c.id), 0) + 1; // ID único
    const newCharacterObj = {
      id: newId,
      name: newCharacter.trim(),
      recruited: 0, // 0 = disponível, 1 = na party
    };

    setCharacters([newCharacterObj, ...characters]); // Nova aventureira primeiro
    setNewCharacter(""); // limpar campo
  }

  // 🌟 Adicionar/remover da party
  function toggleRecruit(character) {
    setCharacters(characters.map(char => 
      char.id === character.id 
        ? { ...char, recruited: char.recruited ? 0 : 1 }
        : char
    ));
  }

  // � Remover aventureira
  function removeCharacter(character) {
    Alert.alert(
      "💜 Despedir Aventureira", 
      `Tem certeza que deseja despedir "${character.name}"? Ela partirá em uma nova jornada! ✨`, 
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Despedir",
          style: "destructive",
          onPress: () => {
            setCharacters(characters.filter(char => char.id !== character.id));
          },
        },
      ]
    );
  }



  // 📊 Estatísticas da party
  const partyCount = characters.filter(c => c.recruited).length;
  const availableCount = characters.filter(c => !c.recruited).length;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <Header 
        partyCount={partyCount} 
        availableCount={availableCount} 
      />

      <AddCharacter 
        newCharacter={newCharacter}
        setNewCharacter={setNewCharacter}
        onAddCharacter={addCharacter}
      />

      <CharacterList 
        characters={characters}
        onToggleRecruit={toggleRecruit}
        onRemoveCharacter={removeCharacter}
      />
    </SafeAreaView>
  );
}

// 💜 Estilos simplificados para o container principal
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0B1A", // Roxo escuro místico
    paddingTop: 50,
  },
});
