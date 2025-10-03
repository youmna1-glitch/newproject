'use client';

import React from 'react';
import Image from 'next/image';

interface CategoryItemProps {
  name: string;
  imageUrl: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ name, imgUrl }) => {
  return (
    <div style={itemStyle}>
      <img src={imgUrl} alt={name} style={imageStyle} />
      <h3 style={nameStyle}>{name}</h3>
    </div>
  );
};

const itemStyle: React.CSSProperties = {
  textAlign: 'center',
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: '80%',
//   borderRadius: '8px',
};
const nameStyle: React.CSSProperties = {
  fontSize: '1rem',
  fontWeight: '600',
  marginTop: '0.5rem',
};
export default CategoryItem;