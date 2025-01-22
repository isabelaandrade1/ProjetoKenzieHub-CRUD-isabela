import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

export const ContainerHome = styled.main`
  width: 100vw;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 2rem 6rem;

  @media (max-width: 800px) {
    padding: 1.5rem;
  }
`;

export const StyledLoading = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-4);

  .loading {
    color: white;
    width: 3rem;
    height: 3rem;
    animation: spinner 10s infinite linear;
  }

  @keyframes spinner {
    0% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
