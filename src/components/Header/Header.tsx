import { ChangeEvent, FC, useState } from 'react';

export interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const [lang, setlang] = useState('en');

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setlang(e.target.value);
  };

  return (
    <header
      className={`flex justify-between items-center px-4 h-16 bg-gray-200`}
    >
      <div className="text-2xl font-bold">Next.js Boilerplate</div>
      <div>
        <select value={lang} onChange={handleChange}>
          <option value="en">en</option>
          <option value="de">de</option>
        </select>
      </div>
    </header>
  );
};
