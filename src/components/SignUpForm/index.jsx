import { useForm } from "react-hook-form";

import InputField from "../InputField";
import { registerSchema } from "./registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledText } from "../../styles/typhography";
import {
  StyledFieldset,
  StyledLabel,
  StyledSelect,
} from "../InputField/styles";

import { StyledButton } from "../../styles/buttons";
import { StyledForm } from "../../styles/forms";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      bio: "",
      contact: "",
      course_module: "",
    },
  });

  const submit = (data) => {
    reset();
    userRegister(data, setLoading);
    navigate("/");
  };

  return (
    <StyledForm noValidate onSubmit={handleSubmit(submit)}>
      <StyledText tag="h2" fontSize="two" textAlign="center">
        Crie sua conta
      </StyledText>
      <StyledText tag="p" fontSize="bodyText" textAlign="center">
        Rápido e grátis, vamos nessa
      </StyledText>

      <InputField
        type="text"
        id="name"
        label="Nome"
        placeholder="Digite aqui seu nome"
        register={register("name")}
        disabled={loading}
      />
      {errors.name?.message && (
        <StyledText tag="p" fontSize="warnText">
          {errors.name.message}
        </StyledText>
      )}

      <InputField
        type="email"
        id="email"
        label="Email"
        placeholder="Digite aqui seu email"
        register={register("email")}
        disabled={loading}
      />
      {errors.email?.message && (
        <StyledText tag="p" fontSize="warnText">
          {errors.email.message}
        </StyledText>
      )}

      <InputField
        type="password"
        id="password"
        label="Senha"
        placeholder="Digite aqui sua senha"
        register={register("password")}
        disabled={loading}
      />
      {errors.password?.message && (
        <StyledText tag="p" fontSize="warnText">
          {errors.password.message}
        </StyledText>
      )}

      <InputField
        type="password"
        id="confirmPassword"
        label="Confirmar senha"
        placeholder="Digite novamente sua senha"
        register={register("confirmPassword")}
        disabled={loading}
      />
      {errors.confirmPassword?.message && (
        <StyledText tag="p" fontSize="warnText">
          {errors.confirmPassword.message}
        </StyledText>
      )}

      <InputField
        type="text"
        id="bio"
        label="Bio"
        placeholder="Fale sobre você"
        register={register("bio")}
        disabled={loading}
      />
      {errors.bio?.message && (
        <StyledText tag="p" fontSize="warnText">
          {errors.bio.message}
        </StyledText>
      )}

      <InputField
        type="text"
        id="contact"
        label="Contato"
        placeholder="Opção de contato"
        register={register("contact")}
        disabled={loading}
      />
      {errors.contact?.message && (
        <StyledText tag="p" fontSize="warnText">
          {errors.contact.message}
        </StyledText>
      )}

      <StyledFieldset>
        <StyledLabel>Selecionar módulo</StyledLabel>
        <StyledSelect {...register("course_module")} disabled={loading}>
          <option value="">Selecionar módulo</option>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </StyledSelect>
      </StyledFieldset>

      {errors.course_module?.message && (
        <StyledText tag="p" fontSize="warnText">
          {errors.course_module.message}
        </StyledText>
      )}

      <StyledButton
        type="submit"
        buttonSize="default"
        buttonStyle="primary"
        disabled={loading}
      >
        {loading ? "Cadastrando..." : "Cadastrar"}
      </StyledButton>
    </StyledForm>
  );
};

export default SignUpForm;
