import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";

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

  // 💜 Como mostrar cada aventureira
  function renderCharacter({ item }) {
    return (
      <View style={[styles.characterCard, item.recruited && styles.characterInParty]}>
        <TouchableOpacity
          style={styles.characterMain}
          onPress={() => toggleRecruit(item)}
          activeOpacity={0.7}
        >
          <Text style={[styles.characterText, item.recruited && styles.characterInPartyText]}>
            {item.name}
          </Text>
          <View style={styles.statusContainer}>
            <Text style={styles.statusIcon}>
              {item.recruited ? "🎉" : "💙"}
            </Text>
            <Text style={[styles.statusText, item.recruited && styles.statusInPartyText]}>
              {item.recruited ? "Na Party" : "Disponível"}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => removeCharacter(item)}
          activeOpacity={0.7}
        >
          <Text style={styles.deleteButtonText}>✕</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // 📊 Estatísticas da party
  const partyCount = characters.filter(c => c.recruited).length;
  const availableCount = characters.filter(c => !c.recruited).length;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      {/* � Header */}
      <View style={styles.header}>
        <Text style={styles.title}>✨ Enchanted Party ✨</Text>
        <Text style={styles.subtitle}>Gerencie suas aventureiras mágicas</Text>
        
        {/* � Estatísticas */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{partyCount}</Text>
            <Text style={styles.statLabel}>Na Party 💜</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{availableCount}</Text>
            <Text style={styles.statLabel}>Disponíveis 💙</Text>
          </View>
        </View>
      </View>

      {/* ✨ Adicionar nova aventureira */}
      <View style={styles.addSection}>
        <Text style={styles.sectionTitle}>Nova Aventureira</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="🌟 Nome da nova aventureira..."
            placeholderTextColor="#B299CC"
            value={newCharacter}
            onChangeText={setNewCharacter}
            onSubmitEditing={addCharacter}
          />
          <TouchableOpacity 
            style={styles.addButton} 
            onPress={addCharacter}
            activeOpacity={0.8}
          >
            <Text style={styles.addButtonText}>✨ Adicionar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* � Lista de aventureiras */}
      <Text style={styles.sectionTitle}>Suas Aventureiras</Text>
      <FlatList
        data={characters}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderCharacter}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

// 💜 Estilos com tema feminino e mágico
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0B1A", // Roxo escuro místico
    paddingTop: 50,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "linear-gradient(135deg, #1A0B2E, #2D1B3D)",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    color: "#E8B5FF", // Lilás claro brilhante
    textShadowColor: "#9333EA",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    color: "#B299CC", // Roxo suave
    fontStyle: "italic",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  statCard: {
    backgroundColor: "#261240",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#7C3AED",
    minWidth: 100,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#E8B5FF",
  },
  statLabel: {
    fontSize: 12,
    color: "#B299CC",
    marginTop: 4,
  },
  addSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#E8B5FF",
    marginBottom: 12,
    marginLeft: 5,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: "#2D1B3D",
    borderWidth: 2,
    borderColor: "#E8B5FF",
    shadowColor: "#9333EA",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  addButton: {
    backgroundColor: "#9333EA",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: "#E8B5FF",
    shadowColor: "#9333EA",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
  },
  list: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listContent: {
    paddingBottom: 20,
  },
  characterCard: {
    backgroundColor: "#261240",
    borderRadius: 20,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "#7C3AED",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#9333EA",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  characterInParty: {
    backgroundColor: "#3D2354",
    borderColor: "#E8B5FF",
    borderWidth: 2,
    shadowColor: "#E8B5FF",
    shadowOpacity: 0.4,
  },
  characterMain: {
    flex: 1,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  characterText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#E8B5FF",
    flex: 1,
    marginRight: 12,
  },
  characterInPartyText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  statusContainer: {
    alignItems: "center",
  },
  statusIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  statusText: {
    fontSize: 12,
    color: "#B299CC",
    fontWeight: "500",
  },
  statusInPartyText: {
    color: "#E8B5FF",
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "#DC2626",
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  deleteButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
