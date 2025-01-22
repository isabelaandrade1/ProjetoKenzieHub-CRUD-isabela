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

const TechUpdateModal = () => {
  const { setIsModalUpdateVisible, updateTech, removeTech, selectedTech } =
    useContext(TechContext);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  function submit(data) {
    if (data.status !== "") {
      updateTech(selectedTech.id, data, setLoading);
      reset();
    }
  }

  const modalUpdateRef = useOutClick(() => setIsModalUpdateVisible(null));

  return (
    <StyledModalBg>
      <StyledModalBox
        ref={modalUpdateRef}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <StyledText tag="h5">Editar Tecnologia</StyledText>
          <StyledButton onClick={() => setIsModalUpdateVisible(false)}>
            <CgClose />
          </StyledButton>
        </div>

        <StyledForm onSubmit={handleSubmit(submit)}>
          <InputField
            type="text"
            id="title"
            label="Nome"
            value={selectedTech.title}
            placeholder={selectedTech.title}
            disabled
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

          <div className="flex gap-1rem">
            <StyledButton
              buttonStyle="primary"
              buttonSize="default"
              type="submit"
            >
              Salvar alterações
            </StyledButton>

            <StyledButton
              buttonStyle="secondary"
              buttonSize="default"
              onClick={() => {
                removeTech(selectedTech.id, setLoading)
                setIsModalUpdateVisible(false)}}
              type="button"
            >
              Excluir
            </StyledButton>
          </div>
        </StyledForm>
      </StyledModalBox>
    </StyledModalBg>
  );
};

export default TechUpdateModal;
