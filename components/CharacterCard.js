import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import StatusBadge from "./StatusBadge";
import DeleteButton from "./DeleteButton";

export default function CharacterCard({ character, onToggleRecruit, onRemoveCharacter }) {
  return (
    <View style={[styles.characterCard, character.recruited && styles.characterInParty]}>
      <TouchableOpacity
        style={styles.characterMain}
        onPress={() => onToggleRecruit(character)}
        activeOpacity={0.7}
      >
        <Text style={[styles.characterText, character.recruited && styles.characterInPartyText]}>
          {character.name}
        </Text>
        <StatusBadge recruited={character.recruited} />
      </TouchableOpacity>
      <DeleteButton onPress={() => onRemoveCharacter(character)} />
    </View>
  );
}

const styles = StyleSheet.create({
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
});

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    recruited: PropTypes.number.isRequired,
  }).isRequired,
  onToggleRecruit: PropTypes.func.isRequired,
  onRemoveCharacter: PropTypes.func.isRequired,
};