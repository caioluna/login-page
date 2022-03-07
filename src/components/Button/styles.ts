import styled, { css } from 'styled-components';

type ButtonProps = {
  solid?: boolean;
  outlined?: boolean;
  primary?: boolean;
  secondary?: boolean;
};

export const Container = styled.button<ButtonProps>`
  width: 309px;
  height: 40px;

  padding: 8px 16px;
  border-radius: 100px;
  font-weight: 700;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--complementary-white);

  @media screen and (max-width: 1365px) {
    width: 100%;
    padding: 6px 14px;
    height: 33px;
  }

  ${(props) =>
    props.solid &&
    css`
      background-color: ${props.primary && 'var(--primary03)'};
      background-color: ${props.secondary && 'var(--secondary03)'};

      &:hover {
        background-color: ${props.primary && 'var(--primary02)'};
        background-color: ${props.secondary && 'var(--secondary02)'};
      }

      &[disabled] {
        color: ${props.primary && 'var(--complementary-black)'};
        color: ${props.secondary && 'var(--complementary-white)'};

        pointer-events: none;
        opacity: 0.5;
      }
    `};

  ${(props) =>
    props.outlined &&
    css`
      border-width: 2px;
      border-style: solid;
      border-color: ${props.primary && 'var(--primary03)'};
      border-color: ${props.secondary && 'var(--secondary03)'};
      color: ${props.primary && 'var(--primary03)'};
      color: ${props.secondary && 'var(--secondary03)'};
      background-color: transparent;

      &:hover {
        background-color: ${props.primary && 'var(--primary02)'};
        background-color: ${props.secondary && 'var(--secondary02)'};
        border: ${props.primary && 'var(--primary02)'};
        border: ${props.secondary && 'var(--secondary02)'};
        color: ${props.primary && '#FAFAFA'};
        color: ${props.secondary && '#FAFAFA'};
      }

      &[disabled] {
        pointer-events: none;
        opacity: 0.5;
      }
    `};
`;
