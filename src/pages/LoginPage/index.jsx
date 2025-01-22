import React from "react";
import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";
import { Container } from "../../styles/Containers";
import { StyledLoginPage } from "./styles";

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <Container>
        <Header />
        <LoginForm />
      </Container>
    </StyledLoginPage>
  );
};

export default LoginPage;
