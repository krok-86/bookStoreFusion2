import { FC } from "react";
import InputStyled from "./Input.Styled";
import { InputAdornment, TextField, Typography } from "@mui/material";
import { UserOutlined } from "@ant-design/icons";
import { FormValues } from "../../types";
import { FieldErrors, RegisterOptions, UseFormRegisterReturn } from "react-hook-form";

type registerFieldsType = "id" | "fullName" | "password" | "email";

type inputProps = {
  active: boolean;
  register: (name: registerFieldsType, options?: RegisterOptions) => UseFormRegisterReturn;
  errors: FieldErrors;
  focused: boolean;
  currentValue: string;
  message?: string;
  setCurrentValue: (e: string) => void,
  setFocused: (e: boolean) => void,
  // setCurrentValue: Dispatch<SetStateAction<string>>;
  // setFocused: Dispatch<SetStateAction<boolean>>;
// active: boolean,
// register: any,//fix
// errors: FormValues,
// focused: boolean,
// currentValue: string,
// message?: any,//fix
// setCurrentValue: (e: string) => void,
// setFocused: (e: boolean) => void,
}
const Input:FC <inputProps>= ({active, register, errors, focused, currentValue, setFocused, setCurrentValue }) => {


    return (
<InputStyled>
<TextField
           sx={{display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           }}
            id="filled-basic"
            variant="filled"//standard?
            label="Your name"
            fullWidth
            margin="dense"
            InputProps={{
              disableUnderline: true,
              readOnly: !active,
              startAdornment: (
                <InputAdornment 
                position="start"
                sx={{ color: '#A9A9A9', marginRight: 1, marginLeft: -0.5 }}//fix
                >
                  <UserOutlined
                   className="mail-icon"
                  />
                </InputAdornment>
              ),
            }}

            {...register("fullName")}
            error={errors.fullName ? true : false}
            InputLabelProps={{
              shrink: focused,
              style: { marginLeft: 30 }
            }}
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          <Typography variant="inherit" color="textSecondary">
            {Boolean(errors["fullName"]?.message?.toString)}

          </Typography>
</InputStyled>
    )
}

export default Input;
