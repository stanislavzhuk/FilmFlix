import React from 'react';

const Gallery = ({ children }) => {
  return (
    <section>
      <ul>{children}</ul>
    </section>
  )
};

export default Gallery;