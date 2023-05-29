import React from 'react';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <svg className={css.logo} width="50" height="50" viewBox="0 0 32 32">
      <title>film</title>
      <path
        d="M0 4v24h32v-24h-32zM6 26h-4v-4h4v4zM6 18h-4v-4h4v4zM6 10h-4v-4h4v4zM24 26h-16v-20h16v20zM30 26h-4v-4h4v4zM30 18h-4v-4h4v4zM30 10h-4v-4h4v4zM12 10v12l8-6z"
      />
    </svg>
  );
};

export default Logo;