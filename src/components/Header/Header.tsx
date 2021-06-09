import { useRouter, NextRouter } from 'next/router';
import { ChangeEvent, FC } from 'react';
import { useTranslation } from 'next-i18next';

export interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const { t } = useTranslation('common');
  const router: NextRouter = useRouter();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    router.push('/', {}, { locale: e.target.value });
  };

  return (
    <header
      className={`flex justify-between items-center px-4 h-16 bg-gray-200`}
    >
      <div className="text-2xl font-bold">Next.js Boilerplate</div>
      <div>
        <select value={router.locale} onChange={handleChange}>
          <option value="en">{t('english')}</option>
          <option value="de">{t('german')}</option>
        </select>
      </div>
    </header>
  );
};
