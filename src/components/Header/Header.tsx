import { useRouter, NextRouter } from 'next/router';
import { ChangeEvent, FC } from 'react';
// use react-i18next instead of next-i18next for use in storybook
// see: https://github.com/isaachinman/next-i18next/issues/935
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export const Header: FC = () => {
  const { t } = useTranslation('common');
  const router: NextRouter = useRouter();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    router.push(router.pathname, {}, { locale: e.target.value });
  };

  return (
    <header
      className={`flex justify-between items-center px-4 h-16 bg-gray-200`}
    >
      <div className="text-2xl font-bold">
        <Link href="/">Next.js Boilerplate</Link>
      </div>

      <div>
        <select value={router.locale} onChange={handleChange}>
          <option value="en">{t('english')}</option>
          <option value="de">{t('german')}</option>
        </select>
      </div>
    </header>
  );
};
