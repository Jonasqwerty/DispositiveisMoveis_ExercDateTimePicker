import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import Lista from "./Lista";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalListaVisible, setModalListaVisible] = useState(false);
  const [itemLista, setItemLista] = useState({ id: "", title: "" });
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalListaVisible}
        onRequestClose={() => {
          Alert.alert("Voce esta tentando fechar incorretamente.");
          setModalListaVisible(!modalListaVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Lista
              setModalListaVisible={setModalListaVisible}
              setItemLista={setItemLista}
            ></Lista>
          </View>
        </View>
      </Modal>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalListaVisible(true)}
      >
        <Text style={styles.textStyle}>Abrir lista</Text>
      </Pressable>
      <Text>ID: {itemLista.id}</Text>
      <Text>Title: {itemLista.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default App;
