import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function AddCharacter({ newCharacter, setNewCharacter, onAddCharacter }) {
  return (
    <View style={styles.addSection}>
      <Text style={styles.sectionTitle}>Nova Aventureira</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="🌟 Nome da nova aventureira..."
          placeholderTextColor="#B299CC"
          value={newCharacter}
          onChangeText={setNewCharacter}
          onSubmitEditing={onAddCharacter}
        />
        <TouchableOpacity 
          style={styles.addButton} 
          onPress={onAddCharacter}
          activeOpacity={0.8}
        >
          <Text style={styles.addButtonText}>✨ Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});

AddCharacter.propTypes = {
  newCharacter: PropTypes.string.isRequired,
  setNewCharacter: PropTypes.func.isRequired,
  onAddCharacter: PropTypes.func.isRequired,
};