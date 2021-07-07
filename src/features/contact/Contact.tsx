import { useAppDispatch } from '@store';
import { Button } from '@components';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { setContactData, ContactData } from './contactSlice';
import { FormErrors } from '@components';

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
  console.log(errors);

  return (
    <div className="mt-4 mb-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container flex flex-col mx-auto mb-4 w-2/3 md:w-1/3"
      >
        <label>{t('gender')}</label>
        <select
          {...register('gender', {
            required: t('gender-msg'),
          })}
        >
          <option value=""></option>
          <option value="female">{t('female')}</option>
          <option value="male">{t('male')}</option>
        </select>
        <FormErrors error={errors.gender} />

        <label>{t('firstname')}</label>
        <input
          {...register('firstname', {
            required: t('firstname-msg'),
          })}
        />
        <FormErrors error={errors.firstname} />

        <label>{t('surename')}</label>
        <input
          {...register('surename', {
            required: t('surename-msg'),
          })}
        />
        <FormErrors error={errors.surename} />

        <label>{t('email')}</label>
        <input
          {...register('email', {
            required: t('email-msg-required'),
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: t('email-msg-pattern'),
            },
          })}
        />
        <FormErrors error={errors.email} />

        <label>{t('message')}</label>
        <textarea
          {...register('message', {
            required: t('message-msg'),
          })}
        />
        <FormErrors error={errors.message} />

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
