import { useRouter, NextRouter } from 'next/router';
import { ChangeEvent, FC } from 'react';
// use react-i18next instead of next-i18next for use in storybook
// see: https://github.com/isaachinman/next-i18next/issues/935
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useAppSelector } from '@store';

export const Header: FC = () => {
  const { t } = useTranslation(['common', 'counter']);
  const router: NextRouter = useRouter();
  const counter = useAppSelector((state) => state.counter);

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
      <span>
        {t('counter:counter')}: {counter.value}
      </span>
      <div>
        <select
          name="language"
          aria-label="select-language"
          value={router.locale}
          onChange={handleChange}
        >
          <option value="en">{t('common:english')}</option>
          <option value="de">{t('common:german')}</option>
        </select>
      </div>
    </header>
  );
};
