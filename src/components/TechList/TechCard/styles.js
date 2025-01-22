import styled from "styled-components";

export const StyledTechCard = styled.li`
  width: 100%;
  background-color: var(--color-grey-4);
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-radius: var(--radius-2);

  &:hover {
    background-color: var(--color-grey-2);
  }

  @media (max-width: 375px) {
      flex-direction: column;
      gap: 0.5rem;
    }
`;
