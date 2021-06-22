import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { Header } from '@components';
import { Contact } from '@features';

export default function ContactPage() {
  const { t } = useTranslation('contact');

  return (
    <div>
      <Head>
        <title>{t('contact')}</title>
        <meta name="description" content="{t('contact')}" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1 className="mt-16 text-4xl text-center">{t('contact')}</h1>
        <Contact />
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        'common',
        'contact',
      ])),
    },
  };
};
