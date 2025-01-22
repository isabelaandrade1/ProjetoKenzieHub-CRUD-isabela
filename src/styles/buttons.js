import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: var(--radius-2);
  transition: 0.4s;
  color: ${({ color }) => (color ? color : "white")};
  font-size: 1rem;

  &:hover {
    filter: brightness(1.2);
  }
  ${({ buttonSize }) => {
    // eslint-disable-next-line default-case
    switch (buttonSize) {
      case "default":
        return css`
          height: 3rem;
          padding: 0 1.25rem;
        `;
      case "medium":
        return css`
          height: 2.5rem;
          padding: 0 1.25rem;
        `;
    }
  }}
  ${({ buttonStyle }) => {
    // eslint-disable-next-line default-case
    switch (buttonStyle) {
      case "primary":
        return css`
          background:var(--color-primary);
          color: var(--color-grey-0);
          width: 100%;

          &:hover {
            background:var(--color-primary-focus);
          
            }
          &:disabled{
            background:var(--color-primary-negative);
          
        }
          }

          }
        `;
      case "secondary":
        return css`
          background: var(--color-grey-1);
          color: var(--color-grey-0);

          &:hover {
            background: (--color-grey-2);
          }
        `;
      case "darkGrey":
        return css`
          background: var(--color-grey-2);
          color: var(--color-grey-0);

          &:hover {
            background: (--color-grey-1);
          }
        `;
    }
  }}
`;
