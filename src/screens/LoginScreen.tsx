import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button } from "react-native";
import { Container } from "../components/Container";
import Heading from "../components/Heading";
import { LoginForm } from "../components/LoginForm";
import { SpacerFixed } from "../components/SpacerFixed";
import { RootStackParamList } from "../routes/MainStack";

type Props = NativeStackScreenProps<RootStackParamList, "LoginScreen">;

export const LoginScreen = ({ navigation }: Props) => {
  return (
    <Container>
      <SpacerFixed />
      <Heading>Login</Heading>
      <SpacerFixed />
      <LoginForm />
      <SpacerFixed />
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate("RegisterScreen")}
      />
    </Container>
  );
};
