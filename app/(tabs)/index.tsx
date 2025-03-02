import { Text, View, Modal, Button, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native';
import { Link } from 'expo-router';
import React, {useState} from "react";

export default function Index() {

  const [isModal1Visible, setModal1Visible] = useState(false);
  const [isModal2Visible, setModal2Visible] = useState(false);
  return (
    <View style={styles.container}>


    <Modal animationType="slide"
        transparent={true}
        visible={isModal1Visible}
        onRequestClose={() => setModal1Visible(false)}


      >
    <View style={styles.content}>
          <View style={styles.card}>
            <Text style={styles.title}>Title</Text>
            <Text style={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto deleniti nemo rerum nulla sint consectetur id esse
              earum officia cupiditate aperiam, laboriosam repellat sapiente
              quam, a quisquam mollitia est quasi.
            </Text>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  width: "100%",
                  marginTop: 24,
                  backgroundColor: "rgba(180, 244, 175, 0.1)",
                },
              ]}
              onPress={() => setModal1Visible(false)}
            >
              <Text style={[styles.text, { color: "black" }]}>Close</Text>
            </TouchableOpacity>
          </View>

        </View>


      </Modal>

      <Modal animationType="slide"
        transparent={true}
        visible={isModal2Visible}
        onRequestClose={() => setModal2Visible(false)}


      >
    <View style={styles.content}>
          <View style={styles.card}>
            <Text style={styles.title}>Meeting</Text>
            <Text style={styles.desc}>
            Date : 02/03/2025 <br />
        Time : 19:00 <br />
        Venue : Room 4A, First Floor, Nightengale Wing<br />
        <br />
        Mentor : Dr Jane Doe<br />
        Personal Notes : <br /> ajksjksjklas dadjs
        SAJKLSAJKJSKaannasxdak</Text>
            <TouchableOpacity
              style={
                { justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  marginTop: 20,
                  padding: 10,
                  width: "50%",
                  backgroundColor: "rgba(8, 206, 64, 0.5)",
                }
              }
              onPress={() => setModal2Visible(false)}
            >
              <Text style={[styles.title, { justifyContent: "center", alignItems: "center",color: "black" }]}>Edit Meeting</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                { justifyContent: "right",
                  alignItems: "center",
                  borderRadius: 10,
                  marginTop: 20,
                  padding: 10,
                  width: "50%",
                  backgroundColor: "rgba(236, 14, 14, 0.5)",
                }
              }
              onPress={() => setModal2Visible(false)}
            >
              <Text style={[styles.title, { justifyContent: "center", alignItems: "center",color: "black" }]}>Cancel Meeting</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                { position: 'absolute',
                  top: 10,
                  right: 10,
                  padding: 10,
                  justifyContent: "right",
                  alignItems: "center",
                  borderRadius: 5,
                  marginTop: 5,

                  width: "5%",
                  backgroundColor: "rgba(221, 215, 215, 0.5)",
                }
              }
              onPress={() => setModal2Visible(false)}
            >
              <Text style={{justifyContent: "center", alignItems: "center",color: "black" }}>Close</Text>
            </TouchableOpacity>
          </View>

        </View>


      </Modal>


      <TouchableOpacity style={styles.button} onPress={() => setModal1Visible(true)}>
            <Text style={{paddingLeft: 20,fontSize: 32, fontWeight: 'bold'}}>+</Text>
            <Text style={styles.buttonText}>Schedule New Meeting </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setModal2Visible(true)}>
            <Text style={styles.buttonText}>Upcoming Meeting <br />
        <br />
        Date : 02/03/2025 <br />
        Time : 19:00 <br />
        <br />
        Mentor : Dr Jane Doe<br /> </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setModal2Visible(true)}>
            <Text style={styles.buttonText}>Last Meeting <br />
        <br />
        Mentor : Dr Jane Doe<br /></Text>
      </TouchableOpacity>

{/*
        <Link href="/meeting" style={styles.button}>
        <Text style={styles.buttonText}>Upcoming Meeting <br />
        <br />
        Date : 02/03/2025 <br />
        Time : 19:00 <br />
        <br />
        Mentor : Dr Jane Doe<br />
        </Text>
        </Link>
        <Link href="/index" style={styles.button}>
        <Text style={styles.buttonText}>Last Meeting <br />
        <br />
        Mentor : Dr Jane Doe<br />
        </Text>
        </Link>
*/}
    </View>





  );
}

const styles = StyleSheet.create({
  desc: {
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.7,
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",

  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(79, 59, 153, 0.5)",
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'flex-start', // Align items to the top
    paddingTop: 20,
    alignItems: 'center',
    width: Platform.OS === 'web' ? '100vw' : '100%',
    height: Platform.OS === 'web' ? '100vh' : '100%',
  },
  text: {
    color: '#fff',
  },
  button: {

    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
    width: "80%",
  },
  buttonText: {
    color: '#25292e',
    paddingLeft: 50,
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
