import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import StatCard from "./StatCard";

export default function Header({ partyCount, availableCount }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>✨ Enchanted Party ✨</Text>
      <Text style={styles.subtitle}>Gerencie suas aventureiras mágicas</Text>
      
      {/* 📊 Estatísticas */}
      <View style={styles.statsContainer}>
        <StatCard number={partyCount} label="Na Party 💜" />
        <StatCard number={availableCount} label="Disponíveis 💙" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});

Header.propTypes = {
  partyCount: PropTypes.number.isRequired,
  availableCount: PropTypes.number.isRequired,
};