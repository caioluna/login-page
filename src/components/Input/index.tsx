import {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useState,
} from 'react';

import {
  Label,
  InputContainer,
  InputField,
  PasswordVisibilityButton,
} from './styles';

import { MdVisibilityOff, MdVisibility } from 'react-icons/md';

type InputProps = {
  inputAlert: boolean;
  pattern?: string;
  type: string;
  passwordInput?: boolean;
  labelName?: string;
  isRequired: boolean;
  placeholder?: string;
  disabled?: boolean;
};

const InputModel: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    inputAlert,
    type,
    passwordInput,
    labelName,
    isRequired,
    placeholder,
    disabled,
    pattern,
  },
  ref
) => {
  const [passwordVisibilityOn, setPasswordVisibilityOn] = useState(false);
  const [inputType, setInputType] = useState('');

  useEffect(() => {
    setInputType(passwordInput ? 'password' : type);
  }, [passwordInput, type]);

  function handleChangePasswordVisibility() {
    setPasswordVisibilityOn(!passwordVisibilityOn);
    setInputType(passwordVisibilityOn ? 'password' : 'text');
  }

  return (
    <Label>
      <span className='label-text'>{labelName}</span>
      {isRequired ? <span style={{ color: '#EB5757' }}>*</span> : ''}

      <InputContainer>
        <InputField
          type={inputType}
          placeholder={placeholder}
          disabled={disabled}
          ref={ref}
          pattern={pattern}
        />

        {passwordInput && (
          <PasswordVisibilityButton
            type='button'
            onClick={handleChangePasswordVisibility}
            disabled={disabled}
          >
            {passwordVisibilityOn ? <MdVisibilityOff /> : <MdVisibility />}
          </PasswordVisibilityButton>
        )}
        <span
          style={{ color: '#EB5757', fontSize: '12px', paddingLeft: '4px' }}
        >
          {inputAlert ? 'Required field!' : ''}
        </span>
      </InputContainer>
    </Label>
  );
};

export const Input = forwardRef(InputModel);
