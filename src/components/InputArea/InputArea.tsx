import { FC, useEffect, useState } from "react";
import InputAreaStyled from "./InputArea.Styled";
import { InputAdornment, TextField, Typography } from "@mui/material";
// import {
//   EyeInvisibleOutlined,
//   MailOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
import {
  FieldErrors,
  RegisterOptions,
  UseFormRegisterReturn,
} from "react-hook-form";
import { theme } from "../../theme";

// const Adornments = {//fix?
//   fullName: <UserOutlined className="mail-icon" />,
//   email: <MailOutlined className="mail-icon" />,
//   password: <EyeInvisibleOutlined className="mail-icon" />,
//   confirmPassword: <EyeInvisibleOutlined className="mail-icon" />,
// };

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
              sx={{ color: "#A9A9A9", marginRight: 1, marginLeft: -0.5, marginBottom: 2 }} //fix
              onClick={handleClickShowPassword}
            >
              {/* {Adornments[field]} */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21.5L3.16547 20.4362C3.37405 19.0954 4.24842 17.9469 5.54504 17.5466C7.13654 17.0553 9.49052 16.5 12 16.5C14.5095 16.5 16.8635 17.0553 18.455 17.5466C19.7516 17.9469 20.6259 19.0954 20.8345 20.4362L21 21.5" stroke="#0D1821" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#0D1821" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

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
