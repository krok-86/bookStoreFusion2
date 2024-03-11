import type { FC } from 'react';
import { useEffect, useState } from 'react';
import InputAreaStyled from './InputArea.Styled';
import { InputAdornment, TextField, Typography } from '@mui/material';
import {
  EyeInvisibleOutlined,
  MailOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type {
  FieldErrors,
  RegisterOptions,
  UseFormRegisterReturn,
} from 'react-hook-form';
import { theme } from '../../../theme/theme';

const Adornments = {
  fullName: <UserOutlined className="mail-icon" />,
  email: <MailOutlined className="mail-icon" />,
  password: <EyeInvisibleOutlined className="mail-icon" />,
  confirmPassword: <EyeInvisibleOutlined className="mail-icon" />,
};

type RegisterFieldsType = 'fullName' | 'password' | 'email' | 'confirmPassword';

type InputPropsType = {
  active?: boolean;
  register?: (
    name: RegisterFieldsType,
    options?: RegisterOptions
  ) => UseFormRegisterReturn;
  errors: FieldErrors;
  message?: string;
  isFilled: boolean;
  field: RegisterFieldsType;
  label: string;
  isMock?: boolean;
  placeholder?: string;
};
const InputArea: FC<InputPropsType> = ({
  active,
  register,
  errors,
  isFilled,
  field,
  label,
  placeholder,
}) => {
  const isPassword = field === 'password' || field === 'confirmPassword';

  const [focused, setFocused] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(!isPassword);
  const [isNotEmpty, setIsNotEmpty] = useState(isFilled);
  const [isError, setIsError] = useState(false);

  const handleClickShowPassword = () => isPassword && setShowPassword((show) => !show);

  const calc = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setIsNotEmpty(!!e.target.value);
    setFocused(false);
  };

  useEffect(() => {
    if (active) {
      setIsError(!!errors?.[field]);
    }
  }, [active, errors, errors.field, field]);

  return (
    <InputAreaStyled isError={isError}>
      <TextField
        className="input-area"
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        variant="filled"
        label={label}
        fullWidth
        id="outlined-error-helper-text"
        margin="normal"
        InputProps={{
          disableUnderline: true,
          readOnly: !active,
          style: {
            color: theme.colorTextInput,
            fontFamily: 'Poppins, sans-serif',
          },
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{ color: '#A9A9A9', marginRight: 1, marginLeft: -1.0, marginBottom: 2 }} // fix
              onClick={handleClickShowPassword}
            >
              {Adornments[field]}
            </InputAdornment>
          ),
        }}
         {...register && (register(field))}
        error = {!!errors[field]}
        InputLabelProps={{
          shrink: isNotEmpty || focused,
          style: { marginLeft: 30, color: theme.colorTextInput, fontFamily: 'Poppins, sans-serif' },
        }}
        onFocus={() => setFocused(true)}
        onBlur={calc}
      />
<Typography variant="inherit" color="textSecondary">
        {(errors[field]?.message)?.toString()}
</Typography>
    </InputAreaStyled>
  );
};

export default InputArea;
