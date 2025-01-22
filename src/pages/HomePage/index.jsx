import React, { useContext } from "react";
import Header from "../../components/Header";
import TechList from "../../components/TechList";
import { UserContext } from "../../providers/UserContext";
import { StyledButton } from "../../styles/buttons";
import { ContainerHome } from "../../styles/Containers";
import { StyledText } from "../../styles/typhography";
import { StyledHomePage } from "./styles";
import { GoPlus } from "react-icons/go";
import { TechContext } from "../../providers/TechContext";
import TechCreateModal from "../../components/TechModalCreate";

const HomePage = () => {
  const { user, userLogout } = useContext(UserContext);
  const { isModalVisible, setIsModalVisible } = useContext(TechContext);

  return (
    <StyledHomePage>
      {isModalVisible && <TechCreateModal />}

      <div className="lines"></div>

      <ContainerHome>
        <div className="flex between align-center">
          <Header />
          {user && (
            <StyledButton
              buttonSize="medium"
              buttonStyle="darkGrey"
              onClick={() => userLogout()}
            >
              Sair
            </StyledButton>
          )}
        </div>

        {user && (
          <div className="intro flex between">
            <StyledText tag="h3" fontSize="three">
              Olá, {user.name}
            </StyledText>
            <StyledText tag="p" fontSize="bodyText">
              {user.course_module}
            </StyledText>
          </div>
        )}

        <div className="flex column gap-1rem">
          <div className="flex between">
            <StyledText tag="h3">Tecnologias</StyledText>

            <StyledButton
              buttonStyle="darkGrey"
              className="btn-plus"
              onClick={() => setIsModalVisible(true)}
            >
              <GoPlus />
            </StyledButton>
          </div>
          <TechList />
        </div>
      </ContainerHome>
    </StyledHomePage>
  );
};

export default HomePage;
