import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { Header } from '@components';
import { Counter } from '@features';

export default function CounterPage() {
  const { t } = useTranslation('counter');

  return (
    <div>
      <Head>
        <title>{t('counter')}</title>
        <meta name="description" content={t('counter')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1 className="mt-16 text-4xl text-center">{t('counter')}</h1>
        <Counter />
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        'common',
        'counter',
      ])),
    },
  };
};
