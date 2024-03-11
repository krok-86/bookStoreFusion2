import { useNavigate } from 'react-router-dom';
import InputArea from '../../../components/containers/InputArea/InputArea';
import LogInStyled from './LogIn.styled';
import { useAppDispatch } from '../../../hooks/hook';
import * as Yup from 'yup';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { fetchAuth } from '../../../redux/slices/auth';
import { LocalStorageUtil } from '../../../utils/localStorage/localStorage';
import { errorToast, successToast } from '../../../utils/toasts/toasts';
import {
  ENTER_EMAIL,
  ENTER_PASSWORD,
  TITLE_LOG,
  URLS,
} from '../../../constants/constants';
import type { FormValuesType } from '../../../types/types';
import { Button, Form } from 'antd';

const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    fullName: Yup.string(),
    password: Yup.string()
      .min(4, 'Password must be at least 4 characters')
      .max(20, 'Password must not exceed 20 characters'),
    confirmPassword: Yup.string(),
  });
  const defaultValues = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    reValidateMode: 'onChange',
    defaultValues,
  });
  const onSubmit: SubmitHandler<FormValuesType> = async (formData) => {
    try {
      const data = await dispatch(fetchAuth(formData)).unwrap();
      if (data.token?.length) {
        LocalStorageUtil.setItem('token', data.token);
        successToast('User is authorized');
        navigate(`${URLS.MAIN_PAGE}`);
      } else {
        errorToast(data?.payload?.data || '');
      }
    } catch (err: any) {
      errorToast(err.data || 'Authorization error');
    }
  };
  return (
    <LogInStyled>
      <div className="user-text-wrap">
        <div className="right-column">
          <div className="user-form-wrapper">
            <div className="user-header-wrap">
              <div className="user-text">{TITLE_LOG}</div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-wrap">
                <InputArea
                  active
                  register={register}
                  errors={errors}
                  isFilled={false}
                  field="email"
                  label="Email"
                />
                <div className="change-title">{ENTER_EMAIL}</div>
                <InputArea
                  active
                  register={register}
                  errors={errors}
                  isFilled={false}
                  field="password"
                  label="Password"
                />
                <div className="change-title">{ENTER_PASSWORD}</div>
              </div>
              <div className="button-wrap">
                <Form.Item>
                  <Button
                    className="user-button"
                    type="primary"
                    htmlType="submit"
                  >
                    {TITLE_LOG}
                  </Button>
                </Form.Item>
              </div>
            </form>
          </div>
          <div className="left-column">
            <div className="banner-wrap">
              <img className="banner" src="/images/banner login.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </LogInStyled>
  );
};
export default LogIn;
