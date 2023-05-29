import React from 'react';
import css from './Gallery.module.css';

const Gallery = ({ children }) => {
  return (
    <section>
      <ul className={css.gallery__list}>{children}</ul>
    </section>
  )
};

export default Gallery;