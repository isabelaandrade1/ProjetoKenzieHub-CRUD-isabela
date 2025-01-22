import React, { useContext } from "react";

import { TechContext } from "../../providers/TechContext";
import { StyledText } from "../../styles/typhography";
import TechUpdateModal from "../TechModalUpdate";

import { StyledTechList } from "./styles";
import TechCard from "./TechCard";

const TechList = () => {
  const { techList, isModalUpdateVisible } = useContext(TechContext);

  return (
    <StyledTechList>
      {isModalUpdateVisible && <TechUpdateModal />}

      {techList && techList.length > 0 ?
        techList.map((tech) => <TechCard key={tech.id} tech={tech} />)
    : <StyledText tag="p" fontSize="two" textAlign="center" color="white">Adicione novas tecnologias</StyledText>}
    </StyledTechList>
  );
};

export default TechList;
