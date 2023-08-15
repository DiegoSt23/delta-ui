import React, { SVGProps } from 'react';

export const Menu: React.FC<SVGProps<SVGSVGElement>> = ({
  width = 64,
  height = 64,
  fill = '#878787',
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
        d='M14.5 4C14.5 5.38071 13.3807 6.5 12 6.5C10.6193 6.5 9.5 5.38071 9.5 4C9.5 2.61929 10.6193 1.5 12 1.5C13.3807 1.5 14.5 2.61929 14.5 4Z'
        fill={fill}
      />{' '}
      <path
        d='M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z'
        fill={fill}
      />{' '}
      <path
        d='M12 22.5C13.3807 22.5 14.5 21.3807 14.5 20C14.5 18.6193 13.3807 17.5 12 17.5C10.6193 17.5 9.5 18.6193 9.5 20C9.5 21.3807 10.6193 22.5 12 22.5Z'
        fill={fill}
      />{' '}
    </g>
  </svg>
);
