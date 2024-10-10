import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

// Form validation
import * as Yup from "yup";
import { Formik } from "formik";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, "Should be minimum 4 charecter")
    .max(16, "Should be max of 16 charecters")
    .required("length is required"),
});

export default function App() {
  const [password, setPassword] = useState("");
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowwerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    //
    let chatacterList = "";

    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const digitChars = "0123456789";
    const speciaChars = "!@#$%^&*()";

    if (upperCase) {
      chatacterList += upperCaseChars;
    }

    if (lowerCase) {
      chatacterList += lowerCase;
    }

    if (numbers) {
      chatacterList += digitChars;
    }

    if (symbols) {
      chatacterList += speciaChars;
    }
    

    const passwordReasult = createPassword(chatacterList, passwordLength);
    setPassword(passwordReasult);
    // setPassword('ffdfdfsd')
    setIsPassGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let res = "";
    for (let index = 0; index < passwordLength; index++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      res += characters.charAt(characterIndex);
    }

    return res;
  };

  const resetPassword = () => {
    setIsPassGenerated(false);
    setLowwerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setPassword("");
    setSymbols(false);
  };

  return (
    <SafeAreaView>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{passwordLength : '' }}
            validationSchema={PasswordSchema}
            onSubmit={(values) => {
              console.log(values);
              generatePasswordString(+values.passwordLength)
            }}
          >
            {({
              values,
              errors,
              touched,
              isTouched,
              isValid,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset

              /* and other goodies */
            }) => (
              <>
              <View style={styles.inputWrapper}>
                <View style={styles.inputColumn}>
                  <Text style={styles.heading}>Password Length</Text>
                  {
                    touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>{errors.passwordLength}</Text>
                    ) 
                  }  
                </View>
                <TextInput
                    style={styles.inputStyle}
                    value= {values.passwordLength}
                    onChangeText={handleChange("passwordLength")}
                    placeholder="EX. 8"
                    keyboardType="numeric"
                    />
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include lowercase</Text>
                <BouncyCheckbox
                  disableBuiltInState
                  size={25}
                  isChecked={lowerCase}
                  onPress={() => setLowwerCase(!lowerCase)} 
                />
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include Uppercase</Text>
                <BouncyCheckbox
                  disableBuiltInState
                  size={25}
                  isChecked={upperCase}
                  onPress={() => setUpperCase(!upperCase)} 
                />
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include Numbers</Text>
                <BouncyCheckbox
                  disableBuiltInState
                  size={25}
                  isChecked={numbers}
                  onPress={() => setNumbers(!numbers)} 
                />
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include Symbols</Text>
                <BouncyCheckbox
                  disableBuiltInState
                  size={25}
                  isChecked={symbols}
                  onPress={() => setSymbols(!symbols)} 
                />
              </View>
              <View style={styles.formActions}>
                <TouchableOpacity
                style={styles.primaryBtn}
                onPress={handleSubmit}
                >
                  <Text style={styles.primaryBtnTxt} >Generate</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.secondaryBtn}
                  onPress={()=>{
                    handleReset();
                    resetPassword();
                  }}>
                  <Text style={styles.secondaryBtnTxt}>Reset</Text>
                </TouchableOpacity>
              </View>
              </>
            )}
          </Formik>
        </View>
        {
          isPassGenerated && (
              <View style={[styles.card, styles.cardElevated]}>
                <Text style={styles.subTitle}>Generated Password</Text>
                <Text style={styles.description}>Long press to copy</Text>
                <Text selectable style={styles.generatedPassword}>{password}</Text>
              </View>
          )
        }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: "600",
    marginBottom: 2,
  },
  description: {
    color: "#758283",
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  inputColumn: {
    flexDirection: "column",
  },
  inputStyle: {
    padding: 8,
    width: "30%",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#16213e",
  },
  errorText: {
    fontSize: 12,
    color: "#ff0d10",
  },
  formActions: {
    flexDirection: "row",
    justifyContent: "center",
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: "#5DA3FA",
  },
  primaryBtnTxt: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: "#CAD5E2",
  },
  secondaryBtnTxt: {
    textAlign: "center",
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: "#ffffff",
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 12,
    color: "#000",
  },
});
