import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { Header } from '@components';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function HomePage() {
  const { t } = useTranslation(['home', 'counter', 'contact']);
  const { locale } = useRouter();

  return (
    <div>
      <Head>
        <title>Next.js TypeScript Boilerplate</title>
        <meta name="description" content="Generated by hand" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1 className="mt-16 text-2xl text-center">{t('home:welcome')}</h1>
        <div className="flex justify-around mt-16 underline">
          <Link href="/counter" locale={locale as string}>
            {t('counter:counter')}
          </Link>
          <Link href="/contact" locale={locale as string}>
            {t('contact:contact')}
          </Link>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        'common',
        'home',
        'counter',
        'contact',
      ])),
    },
  };
};
