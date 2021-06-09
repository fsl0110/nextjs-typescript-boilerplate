import { render, RenderOptions } from '@testing-library/react';
import { FC, ReactElement } from 'react';
import { RouterContext } from 'next/dist/next-server/lib/router-context';

export const mockUseRouter = jest.spyOn(require('next/router'), 'useRouter');

const Providers: FC = ({ children }) => <>{children}</>;

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

export { customRender as render };
