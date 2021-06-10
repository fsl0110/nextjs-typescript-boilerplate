import { useAppDispatch } from 'app';
import { Button } from 'components';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { setContactData, ContactData } from './contactSlice';

export const Contact: FC = () => {
  const { t } = useTranslation('contact');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useAppDispatch();
  const onSubmit = (data: ContactData) => {
    dispatch(setContactData(data));
  };

  console.log('errors', errors);
  return (
    <div className="mt-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container flex flex-col mx-auto w-2/3 md:w-1/3"
      >
        <label className="mt-4 form-label">{t('gender')}</label>
        <select
          {...register('gender', {
            required: true,
          })}
        >
          <option value=""></option>
          <option value="female">{t('female')}</option>
          <option value="male">{t('male')}</option>
        </select>
        {errors.gender?.type === 'required' && (
          <p className="text-red-600">{t('gender-msg')}</p>
        )}

        <label className="form-label">{t('firstname')}</label>
        <input
          {...register('firstname', { required: true })}
          className="form-input"
        />
        {errors.firstname?.type === 'required' && (
          <p className="text-red-600">{t('firstname-msg')}</p>
        )}

        <label className="form-label">{t('surename')}</label>
        <input
          {...register('surename', { required: true })}
          className="form-input"
        />
        {errors.surename?.type === 'required' && (
          <p className="text-red-600">{t('surename-msg')}</p>
        )}

        <label className="form-label">{t('email')}</label>
        <input
          {...register('email', {
            required: true,
            pattern:
              /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
          })}
          className="form-input"
        />
        {errors.email?.type === 'required' && (
          <p className="text-red-600">{t('email-msg')}</p>
        )}

        <label className="form-label">{t('message')}</label>
        <textarea
          {...register('message', { required: true })}
          className="form-input"
        />
        {errors.message?.type === 'required' && (
          <p className="text-red-600">{t('message-msg')}</p>
        )}

        <Button
          type="submit"
          color={Object.keys(errors).length === 0 ? 'green' : 'gray'}
          className="mt-8"
        >
          {t('submit')}
        </Button>
      </form>
    </div>
  );
};
