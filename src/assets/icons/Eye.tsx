import React, { SVGProps } from 'react';

export const Eye: React.FC<SVGProps<SVGSVGElement>> = ({
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
    <g id='SVGRepo_bgCarrier' stroke-width='0' />

    <g
      id='SVGRepo_tracerCarrier'
      stroke-linecap='round'
      stroke-linejoin='round'
    />

    <g id='SVGRepo_iconCarrier'>
      {' '}
      <path
        d='M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z'
        stroke='#000000'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />{' '}
      <path
        d='M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z'
        stroke={stroke}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />{' '}
    </g>
  </svg>
);
