import * as React from "react";
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { NavigationHelpersContext } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

//  Funtion Start From Here--------------------------

export default function AddTask({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  const [date, setDate] = React.useState(new Date());
  const [mode, setMode] = React.useState("date");
  const [show, setShow] = React.useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  //  return ------
  return (
    <SafeAreaView style={styles.mainView}>
      <View>
        <Card
          containerStyle={{ borderRadius: width * 0.05, width: width * 0.6 }}
        >
          <Card.Title>Add Calender Event</Card.Title>
          <Card.Divider />

          <TextInput
            // style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Add Title"
          />
          <Card.Divider />
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.buttonView}
              onPress={showDatepicker}
            >
              <Text style={{ marginRight: 90 }}>
                {moment(date).format("MMMM Do YYYY")}
              </Text>
              <AntDesign name="calendar" size={24} color="black" />
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
            <Card.Divider />
          </View>
          <TouchableOpacity
            style={styles.buttonView}
            onPress={() => navigation.navigate("Home")}
          >
            <Text>Submit</Text>
          </TouchableOpacity>
        </Card>
      </View>
    </SafeAreaView>
  );
}

// styles------
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignSelf: "center",
  },
  buttonView: {
    flexDirection: "row",
    backgroundColor: "white",
  },
});
