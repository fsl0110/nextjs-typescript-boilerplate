import { FC, useRef } from 'react';
import {
  decrement,
  increment,
  incrementByAmount,
  counterValue,
} from './counterSlice';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@store';
import { Button } from '@components';

export const Counter: FC = () => {
  const { t } = useTranslation('counter');
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const value = useAppSelector(counterValue);

  const handleIncrementByAmount = () => {
    const value = ref.current && ref.current.value;
    dispatch(incrementByAmount(Number(value)));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-8 mb-4 text-5xl" aria-label="count">
        {value}
      </div>
      <div>
        <Button className="mx-2" onClick={() => dispatch(decrement())}>
          -
        </Button>
        <Button className="mx-2" onClick={() => dispatch(increment())}>
          +
        </Button>
      </div>
      <div className="mt-8">
        <input
          ref={ref}
          aria-label="input"
          className="w-16 text-2xl text-center border-2 border-gray-900"
        />
      </div>
      <div>
        <Button className="mt-2" onClick={handleIncrementByAmount}>
          {t('add')}
        </Button>
      </div>
    </div>
  );
};
