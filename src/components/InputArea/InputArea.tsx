import { FC, useState } from "react";
import InputAreaStyled from "./InputArea.Styled";
import { InputAdornment, TextField, Typography } from "@mui/material";
import {
  EyeInvisibleOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  FieldErrors,
  RegisterOptions,
  UseFormRegisterReturn,
} from "react-hook-form";
import { theme } from "../../theme";

const Adornments = {
  fullName: <UserOutlined className="mail-icon" />,
  email: <MailOutlined className="mail-icon" />,
  password: <EyeInvisibleOutlined className="mail-icon" />,
  confirmPassword: <EyeInvisibleOutlined className="mail-icon" />,
};

type RegisterFieldsType = "fullName" | "password" | "email" | "confirmPassword";

type inputProps = {
  active?: boolean;
  register: (
    name: RegisterFieldsType,
    options?: RegisterOptions
  ) => UseFormRegisterReturn;
  errors: FieldErrors;
  message?: string;
  isFilled: boolean;
  field: RegisterFieldsType;
  label: string;
  isMock?: boolean;
  // value?: string,
  placeholder?: string;
};
const InputArea: FC<inputProps> = ({
  active,
  register,
  errors,
  isFilled,
  field,
  label,
  isMock,
  placeholder,
}) => {
  const isPassword = field === "password" || field === "confirmPassword";

  const [focused, setFocused] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(!isPassword);
  const [isNotEmpty, setIsNotEmpty] = useState(isFilled);

  const handleClickShowPassword = () =>
    isPassword && setShowPassword((show) => !show);

  const calc = (e: any) => {
    setIsNotEmpty(!!e.target.value);
    setFocused(false);
  };

  return (
    <InputAreaStyled>
      <TextField
      helperText="Incorrect entry."
        className="input-area"
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        id="filled-basic"
        variant="filled" //standard?
        label={label}
        fullWidth
        margin="normal"
        InputProps={{
          disableUnderline: true,
          readOnly: !active,
          style: { 
            color: theme.colorTextInput,
            fontFamily:'Poppins, sans-serif',
          },
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{ color: "#A9A9A9", marginRight: 1, marginLeft: -0.5 }} //fix
              onClick={handleClickShowPassword}
            >
              {Adornments[field]}
            </InputAdornment>
          ),
        }}
        {...(!isMock && register(field))}
        error={errors[field] ? true : false}
        InputLabelProps={{
          shrink: isNotEmpty || focused,
          style: { marginLeft: 30, color: theme.colorTextInput, fontFamily:'Poppins, sans-serif' },
        }}
        onFocus={() => setFocused(true)}
        onBlur={calc}
      />
      <Typography variant="inherit" color="textSecondary">
        {Boolean(errors[field]?.message?.toString)}
      </Typography>
    </InputAreaStyled>
  );
};

export default InputArea;
