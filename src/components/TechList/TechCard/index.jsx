import React from "react";

import { StyledText } from "../../../styles/typhography";
import { StyledTechCard } from "./styles";

import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

const TechCard = ({ tech }) => {
  const {setIsModalUpdateVisible, setSelectedTech } =
    useContext(TechContext);


  return (
    <StyledTechCard
      onClick={() => {
        setIsModalUpdateVisible(true);
        setSelectedTech(tech);
      }}
    >
      <StyledText tag="h3">{tech.title}</StyledText>
    
        <StyledText tag="p" fontSize="bodyText">
          {tech.status}
        </StyledText>

   
    </StyledTechCard>
  );
};

export default TechCard;
