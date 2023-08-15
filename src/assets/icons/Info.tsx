import React, { SVGProps } from 'react';

export const Info: React.FC<SVGProps<SVGSVGElement>> = ({
  width = 64,
  height = 64,
  stroke = '#000000',
  fill = '#000000',
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
        d='M12 17V11'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
      />{' '}
      <circle
        cx='1'
        cy='1'
        r='1'
        transform='matrix(1 0 0 -1 11 9)'
        fill={fill}
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
