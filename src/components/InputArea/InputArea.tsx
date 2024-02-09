import { FC, useEffect, useState } from "react";
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

  const [isError, setIsError] = useState(false);

  const handleClickShowPassword = () =>
    isPassword && setShowPassword((show) => !show);

  const calc = (e: any) => {
    setIsNotEmpty(!!e.target.value);
    setFocused(false);
  };

  useEffect(() => {
    if(active) {
    setIsError(!!errors?.[field]);
    }
  }, [errors?.[field]])

  console.log(errors);

  return (
    <InputAreaStyled isError={isError}>
      <TextField
       
        className="input-area"
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        variant="filled" //standard?
        label={label}
        fullWidth
        id="outlined-error-helper-text"
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
         {...register && (register(field))}
        //  error={errors[field] ? true : false}
        // helperText={errors[field]?.type === "required" && "This field is required."}
        error = {!!errors[field]}
        // helperText={errors[field]?.message}

        // {...register(field, { required: true })}
        // error={errors[field]?.type === "required"}
        
        InputLabelProps={{
          shrink: isNotEmpty || focused,
          style: { marginLeft: 30, color: theme.colorTextInput, fontFamily:'Poppins, sans-serif' },
        }}
        onFocus={() => setFocused(true)}
        onBlur={calc}
        // helperText={(errors[field]?.message)?.toString()}
      />
<Typography variant="inherit" color="textSecondary">
        {(errors[field]?.message)?.toString()}
      </Typography>
    </InputAreaStyled>
  );
};

export default InputArea;
