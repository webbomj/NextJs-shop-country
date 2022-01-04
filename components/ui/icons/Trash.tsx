import React from 'react';
import { IconProps } from '../../../types/icons';

const Trash = ({width, height, color}: IconProps):JSX.Element => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width={width} height={height} viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill={color} stroke="none">
        <path d="M1842 4889 c-71 -28 -144 -101 -171 -174 -19 -50 -21 -78 -21 -250 l0 -195 -589 0 -588 0 -33 -23 c-19 -12 -42 -37 -53 -55 -18 -31 -18 -33 0 -64 11 -18 34 -43 53 -55 31 -22 42 -23 221 -23 l189 0 0 -1683 c0 -1855 -4 -1734 63 -1861 41 -79 154 -192 233 -233 125 -66 52 -63 1414 -63 1362 0 1289 -3 1414 63 79 41 192 154 233 233 67 127 63 6 63 1861 l0 1683 189 0 c179 0 190 1 221 23 19 12 42 37 53 55 18 31 18 33 0 64 -11 18 -34 43 -53 55 l-33 23 -588 0 -589 0 0 195 c0 172 -2 200 -21 250 -28 74 -100 146 -174 174 -55 21 -70 21 -718 20 -641 0 -664 -1 -715 -20z m1408 -409 l0 -210 -690 0 -690 0 0 210 0 210 690 0 690 0 0 -210z m798 -2142 l-3 -1713 -21 -45 c-25 -54 -87 -113 -140 -131 -58 -21 -2590 -21 -2648 0 -53 18 -115 77 -140 131 l-21 45 -3 1713 -2 1712 1490 0 1490 0 -2 -1712z"/>
        <path d="M1990 3287 c-19 -12 -43 -38 -54 -57 -21 -35 -21 -47 -24 -968 -1 -614 1 -946 8 -971 13 -48 43 -87 81 -107 28 -14 33 -14 62 3 18 11 42 34 54 53 l23 33 0 966 c0 946 0 967 -20 999 -17 28 -73 72 -91 72 -3 0 -21 -10 -39 -23z"/>
        <path d="M3052 3290 c-18 -11 -41 -34 -52 -52 -20 -32 -20 -53 -20 -999 l0 -966 23 -33 c12 -19 36 -42 54 -53 29 -17 34 -17 62 -3 38 20 68 59 81 107 7 25 9 357 8 971 -3 921 -3 933 -24 968 -17 30 -75 80 -93 80 -3 0 -21 -9 -39 -20z"/>
        </g>
      </svg>
    </div>
  );
};

export default Trash;