import React from 'react';
import { ThemeContext } from '../../utilities/ThemeContext';

export default function Contact(props) {
  const { theme } = React.useContext(ThemeContext);
  const { handleClick } = props;
  return (
    <div className="flex flex-col mb-20 items-center  ">
    <p className={`text-${theme}-secondary text-3xl`}>Want to get in touch?</p>
      <button
        onClick={() => handleClick('email')}
        className={theme === 'light' ? `bg-light-bg border border-light-secondary border-solid my-8 mx-6 p-3 mt-3` : 'bg-dark-bg border border-dark-secondary border-solid my-8 mx-6 p-3 mt-3'}
      >
        <span
          className={
            theme === 'light'
              ? `text-light-secondary text-2xl font-light`
              : 'text-dark-secondary text-2xl font-light'
          }
        >
          Contact Me!
        </span>
      </button>
    </div>
  );
}
