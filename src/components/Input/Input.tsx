import { FC, useEffect, useState } from "react";
import InputStyled from "./Input.Styled";
import { InputAdornment, TextField, Typography } from "@mui/material";
import { EyeInvisibleOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { FieldErrors, RegisterOptions, UseFormRegisterReturn } from "react-hook-form";

const Adornments = {
  fullName: <UserOutlined className="mail-icon"/>,
  email: <MailOutlined className="mail-icon" />,
  password: <EyeInvisibleOutlined className="mail-icon" />,
  confirmPassword: <EyeInvisibleOutlined className="mail-icon" />,
}

type RegisterFieldsType = "fullName" | "password" | "email" | "confirmPassword";

type inputProps = {
  active?: boolean;
  register: (name: RegisterFieldsType, options?: RegisterOptions) => UseFormRegisterReturn;
  errors: FieldErrors;
  message?: string;
  isFilled: boolean;
  field: RegisterFieldsType;
  label: string;
  isMock?:boolean;
  // value?: string,
  placeholder?:string;
}
const Input:FC <inputProps>= ({active, register, errors, isFilled, field, label, isMock, placeholder }) => {

  const isPassword = field === 'password' || field === 'confirmPassword';

  const [focused, setFocused] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(!isPassword);
  const [isNotEmpty, setIsNotEmpty] = useState(isFilled);

  const handleClickShowPassword = () => isPassword && setShowPassword((show) => !show);

  const calc = (e: any) => {
    setIsNotEmpty(!!e.target.value);
    setFocused(false);
  }

    return (
<InputStyled>
  <TextField
    className="test"
    type={showPassword ? 'text' : 'password'}
    placeholder={placeholder}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    id="filled-basic"
    variant="filled"//standard?
    label={label}
    fullWidth
    margin="dense"
    InputProps={{
      disableUnderline: true,
      readOnly: !active,
      startAdornment: (
        <InputAdornment 
        position="start"
        sx={{ color: '#A9A9A9', marginRight: 1, marginLeft: -0.5 }}//fix
        onClick={handleClickShowPassword}
        >
          {Adornments[field]}
        </InputAdornment>
      ),
    }}
    { ...!isMock && register(field) }
    error={errors[field] ? true : false}
    InputLabelProps={{
      shrink: isNotEmpty || focused ,
      style: { marginLeft: 30 }
    }}
    onFocus={() => setFocused(true)}
    onBlur={calc}
  />
  <Typography variant="inherit" color="textSecondary">
    {Boolean(errors[field]?.message?.toString)}

  </Typography>
</InputStyled>
    )
}

export default Input;
