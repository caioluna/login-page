import { FormEvent, ReactNode } from 'react';
import { Container } from './styles';

type ButtonProps = {
  children: ReactNode;
  type: 'button' | 'submit' | 'reset' | undefined;
  solid?: boolean;
  outlined?: boolean;
  primary?: boolean;
  secondary?: boolean;
  onClick?: (e: FormEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

export default function Button({
  children,
  type,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <Container onClick={onClick} type={type} {...props}>
      {children}
    </Container>
  );
}
