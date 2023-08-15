import React, { SVGProps } from 'react';

export const Success: React.FC<SVGProps<SVGSVGElement>> = ({
  width = 64,
  height = 64,
  stroke = '#000000',
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g id='SVGRepo_bgCarrier' strokeWidth='0' />

    <g
      id='SVGRepo_tracerCarrier'
      strokeLinecap='round'
      strokeLinejoin='round'
    />

    <g id='SVGRepo_iconCarrier'>
      {' '}
      <path
        d='M8.5 12.5L10.5 14.5L15.5 9.5'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />{' '}
      <path
        d='M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
      />{' '}
    </g>
  </svg>
);