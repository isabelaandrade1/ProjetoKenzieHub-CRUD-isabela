import React, { useContext, useState } from "react";
import { StyledButton } from "../../styles/buttons";
import { StyledText } from "../../styles/typhography";
import InputField from "../InputField";
import {
  StyledFieldset,
  StyledLabel,
  StyledSelect,
} from "../InputField/styles";

import { CgClose } from "react-icons/cg";
import { TechContext } from "../../providers/TechContext";
import { StyledForm } from "../../styles/forms";
import { useForm } from "react-hook-form";

import { StyledModalBg, StyledModalBox } from "../../styles/modal";
import useOutClick from "../../hooks/hookOutClick";

const TechCreateModal = () => {
  const { setIsModalVisible, addTech } = useContext(TechContext);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  function submit(data) {
    if (data.title !== "" && data.status !== "") {
      addTech(data, setLoading);
      reset();
    }
  }

  const modalRef = useOutClick(() => setIsModalVisible(null));

  return (
    <StyledModalBg>
      <StyledModalBox ref={modalRef}>
        <div className="modal-header">
          <StyledText tag="h5">Cadastrar Tecnologia</StyledText>
          <StyledButton onClick={() => setIsModalVisible(false)}>
            <CgClose />
          </StyledButton>
        </div>

        <StyledForm onSubmit={handleSubmit(submit)}>
          <InputField
            type="text"
            id="title"
            label="Nome"
            placeholder="Digite aqui o nome da tecnologia"
            register={register("title")}
            disabled={loading}
            required
          />

          <StyledFieldset>
            <StyledLabel>Selecionar status</StyledLabel>
            <StyledSelect {...register("status")} disabled={loading} required>
              <option value="">Selecionar status</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </StyledSelect>
          </StyledFieldset>

          <StyledButton
            buttonStyle="primary"
            buttonSize="default"
            type="submit"
          >
            Cadastrar
          </StyledButton>
        </StyledForm>
      </StyledModalBox>
    </StyledModalBg>
  );
};

export default TechCreateModal;
