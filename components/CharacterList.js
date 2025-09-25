import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";

export default function CharacterList({ characters, onToggleRecruit, onRemoveCharacter }) {
  const renderCharacter = ({ item }) => (
    <CharacterCard 
      character={item}
      onToggleRecruit={onToggleRecruit}
      onRemoveCharacter={onRemoveCharacter}
    />
  );

  return (
    <>
      <Text style={styles.sectionTitle}>Suas Aventureiras</Text>
      <FlatList
        data={characters}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderCharacter}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#E8B5FF",
    marginBottom: 12,
    marginLeft: 25,
  },
  list: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listContent: {
    paddingBottom: 20,
  },
});

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      recruited: PropTypes.number.isRequired,
    })
  ).isRequired,
  onToggleRecruit: PropTypes.func.isRequired,
  onRemoveCharacter: PropTypes.func.isRequired,
};