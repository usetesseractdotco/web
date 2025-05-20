'use client'

import { motion } from 'motion/react'

export function FeaturesBentoBox() {
  return (
    <section className="flex flex-col gap-16 items-center justify-center pt-32">
      <div className="flex flex-col gap-6 items-center justify-center text-center">
        <h1 className="font-medium text-4xl leading-[1.1] tracking-[-0.4] max-w-xs md:text-5xl md:max-w-3xl">
          Powerful features, ready to build with
        </h1>
        <p className="text-base text-muted-foreground max-w-xs md:max-w-lg md:text-lg">
          Everything you need to launch, scale, and manage modern blockchain
          apps — without the complexity.
        </p>
      </div>

      <div className="relative flex flex-col max-w-md sm:max-w-3xl sm:min-w-3xl lg:max-w-4xl -z-10 items-center justify-center">
        <div className="absolute h-full w-[1.5em] md:w-screen md:left-[-100em] -left-[1.5em] rotate-180 overflow-hidden border-t border-b border-r bg-transparent bg-[linear-gradient(-45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] bg-[size:15px_15px]" />
        <div className="absolute h-full w-[1.5em] md:w-screen md:right-[-100em] -right-[1.5em] border-t border-b border-r overflow-hidden bg-transparent bg-[linear-gradient(45deg,rgba(0,0,0,0.01)_40%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.01)_45%,rgba(0,0,0,0.01)_90%,rgba(0,0,0,0.15)_90%,rgba(0,0,0,0.01)_95%)] bg-[size:15px_15px]" />

        <div className="absolute size-[2.5em] sm:size-[4.25em] lg:size-[6.25em] -left-[2.5em] sm:left-[-4.2em] lg:left-[-6.2em] -top-[2.5em] sm:top-[-4.2em] lg:top-[-6.2em] border-r bg-transparent" />
        <div className="absolute size-[2.5em] sm:size-[4.25em] lg:size-[6.25em] -right-[2.5em] sm:right-[-4.2em] lg:right-[-6.2em] -top-[2.5em] sm:top-[-4.2em] lg:top-[-6.2em] border-l bg-transparent" />
        <div className="absolute size-[2.5em] sm:size-[4.25em] lg:size-[6.25em] -left-[2.5em] sm:left-[-4.2em] lg:left-[-6.2em] -bottom-[2.5em] sm:bottom-[-4.2em] lg:bottom-[-6.2em] border-t border-r bg-transparent" />
        <div className="absolute size-[2.5em] sm:size-[4.25em] lg:size-[6.25em] -right-[2.5em] sm:right-[-4.2em] lg:right-[-6.2em] -bottom-[2.5em] sm:bottom-[-4.2em] lg:bottom-[-6.2em] border-t border-l bg-transparent" />

        <div className="flex flex-col md:flex-row w-full">
          <div className="flex flex-col w-full h-[16em] items-start justify-between border md:border-r-0 p-4">
            <div className="md:block hidden">
              <svg
                width="100%"
                height="154"
                viewBox="0 0 382 154"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="30.6" width="382" height="1" fill="#D9D9D9" />
                <rect y="61.2" width="382" height="1" fill="#D9D9D9" />
                <rect y="91.8" width="382" height="1" fill="#D9D9D9" />
                <rect y="122.4" width="382" height="1" fill="#D9D9D9" />
                <rect x="34.6362" width="1" height="154" fill="#D9D9D9" />
                <rect x="69.2729" width="1" height="154" fill="#D9D9D9" />
                <rect x="103.909" width="1" height="154" fill="#D9D9D9" />
                <rect x="138.545" width="1" height="154" fill="#D9D9D9" />
                <rect x="173.182" width="1" height="154" fill="#D9D9D9" />
                <rect x="207.818" width="1" height="154" fill="#D9D9D9" />
                <rect x="242.454" width="1" height="154" fill="#D9D9D9" />
                <rect x="277.091" width="1" height="154" fill="#D9D9D9" />
                <rect x="311.728" width="1" height="154" fill="#D9D9D9" />
                <rect x="346.363" width="1" height="154" fill="#D9D9D9" />
                <g clipPath="url(#clip0_267_135)">
                  <mask
                    id="mask0_267_135"
                    style={{ maskType: 'luminance' }}
                    maskUnits="userSpaceOnUse"
                    x="10"
                    y="7"
                    width="16"
                    height="16"
                  >
                    <path d="M26 7H10V23H26V7Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_267_135)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22.5 8.5H13.5V14.5H22.5V8.5ZM13.5 7H12V8.5V14.5C12 15.3284 12.6716 16 13.5 16H17.375L17.375 18.0788C16.4552 18.3155 15.7403 19.0625 15.55 20H10.75H10V21.5H10.75H15.708C16.0938 22.383 16.9748 23 18 23C19.0252 23 19.9062 22.383 20.292 21.5H25.25H26V20H25.25H20.45C20.2597 19.0625 19.5448 18.3155 18.625 18.0788L18.625 16H22.5C23.3284 16 24 15.3284 24 14.5V8.5V7H22.5H13.5ZM18 21.5C18.5523 21.5 19 21.0523 19 20.5C19 19.9477 18.5523 19.5 18 19.5C17.4477 19.5 17 19.9477 17 20.5C17 21.0523 17.4477 21.5 18 21.5Z"
                      fill="#0052FF"
                    />
                  </g>
                </g>
                <g clipPath="url(#clip1_267_135)">
                  <mask
                    id="mask1_267_135"
                    style={{ maskType: 'luminance' }}
                    maskUnits="userSpaceOnUse"
                    x="253"
                    y="7"
                    width="16"
                    height="16"
                  >
                    <path d="M269 7H253V23H269V7Z" fill="white" />
                  </mask>
                  <g mask="url(#mask1_267_135)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M265.5 8.5H256.5V14.5H265.5V8.5ZM256.5 7H255V8.5V14.5C255 15.3284 255.672 16 256.5 16H260.375L260.375 18.0788C259.455 18.3155 258.74 19.0625 258.55 20H253.75H253V21.5H253.75H258.708C259.094 22.383 259.975 23 261 23C262.025 23 262.906 22.383 263.292 21.5H268.25H269V20H268.25H263.45C263.26 19.0625 262.545 18.3155 261.625 18.0788L261.625 16H265.5C266.328 16 267 15.3284 267 14.5V8.5V7H265.5H256.5ZM261 21.5C261.552 21.5 262 21.0523 262 20.5C262 19.9477 261.552 19.5 261 19.5C260.448 19.5 260 19.9477 260 20.5C260 21.0523 260.448 21.5 261 21.5Z"
                      fill="#0052FF"
                    />
                  </g>
                </g>
                <g clipPath="url(#clip2_267_135)">
                  <mask
                    id="mask2_267_135"
                    style={{ maskType: 'luminance' }}
                    maskUnits="userSpaceOnUse"
                    x="149"
                    y="38"
                    width="16"
                    height="16"
                  >
                    <path d="M165 38H149V54H165V38Z" fill="white" />
                  </mask>
                  <g mask="url(#mask2_267_135)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M161.5 39.5H152.5V45.5H161.5V39.5ZM152.5 38H151V39.5V45.5C151 46.3284 151.672 47 152.5 47H156.375L156.375 49.0788C155.455 49.3155 154.74 50.0625 154.55 51H149.75H149V52.5H149.75H154.708C155.094 53.383 155.975 54 157 54C158.025 54 158.906 53.383 159.292 52.5H164.25H165V51H164.25H159.45C159.26 50.0625 158.545 49.3155 157.625 49.0788L157.625 47H161.5C162.328 47 163 46.3284 163 45.5V39.5V38H161.5H152.5ZM157 52.5C157.552 52.5 158 52.0523 158 51.5C158 50.9477 157.552 50.5 157 50.5C156.448 50.5 156 50.9477 156 51.5C156 52.0523 156.448 52.5 157 52.5Z"
                      fill="#0052FF"
                    />
                  </g>
                </g>
                <g clipPath="url(#clip3_267_135)">
                  <mask
                    id="mask3_267_135"
                    style={{ maskType: 'luminance' }}
                    maskUnits="userSpaceOnUse"
                    x="322"
                    y="38"
                    width="16"
                    height="16"
                  >
                    <path d="M338 38H322V54H338V38Z" fill="white" />
                  </mask>
                  <g mask="url(#mask3_267_135)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M334.5 39.5H325.5V45.5H334.5V39.5ZM325.5 38H324V39.5V45.5C324 46.3284 324.672 47 325.5 47H329.375L329.375 49.0788C328.455 49.3155 327.74 50.0625 327.55 51H322.75H322V52.5H322.75H327.708C328.094 53.383 328.975 54 330 54C331.025 54 331.906 53.383 332.292 52.5H337.25H338V51H337.25H332.45C332.26 50.0625 331.545 49.3155 330.625 49.0788L330.625 47H334.5C335.328 47 336 46.3284 336 45.5V39.5V38H334.5H325.5ZM330 52.5C330.552 52.5 331 52.0523 331 51.5C331 50.9477 330.552 50.5 330 50.5C329.448 50.5 329 50.9477 329 51.5C329 52.0523 329.448 52.5 330 52.5Z"
                      fill="#0052FF"
                    />
                  </g>
                </g>
                <g clipPath="url(#clip4_267_135)">
                  <mask
                    id="mask4_267_135"
                    style={{ maskType: 'luminance' }}
                    maskUnits="userSpaceOnUse"
                    x="45"
                    y="69"
                    width="16"
                    height="16"
                  >
                    <path d="M61 69H45V85H61V69Z" fill="white" />
                  </mask>
                  <g mask="url(#mask4_267_135)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M57.5 70.5H48.5V76.5H57.5V70.5ZM48.5 69H47V70.5V76.5C47 77.3284 47.6716 78 48.5 78H52.375L52.375 80.0788C51.4552 80.3155 50.7403 81.0625 50.55 82H45.75H45V83.5H45.75H50.708C51.0938 84.383 51.9748 85 53 85C54.0252 85 54.9062 84.383 55.292 83.5H60.25H61V82H60.25H55.45C55.2597 81.0625 54.5448 80.3155 53.625 80.0788L53.625 78H57.5C58.3284 78 59 77.3284 59 76.5V70.5V69H57.5H48.5ZM53 83.5C53.5523 83.5 54 83.0523 54 82.5C54 81.9477 53.5523 81.5 53 81.5C52.4477 81.5 52 81.9477 52 82.5C52 83.0523 52.4477 83.5 53 83.5Z"
                      fill="#0052FF"
                    />
                  </g>
                </g>
                <g clipPath="url(#clip5_267_135)">
                  <mask
                    id="mask5_267_135"
                    style={{ maskType: 'luminance' }}
                    maskUnits="userSpaceOnUse"
                    x="115"
                    y="99"
                    width="16"
                    height="16"
                  >
                    <path d="M131 99H115V115H131V99Z" fill="white" />
                  </mask>
                  <g mask="url(#mask5_267_135)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M127.5 100.5H118.5V106.5H127.5V100.5ZM118.5 99H117V100.5V106.5C117 107.328 117.672 108 118.5 108H122.375L122.375 110.079C121.455 110.316 120.74 111.062 120.55 112H115.75H115V113.5H115.75H120.708C121.094 114.383 121.975 115 123 115C124.025 115 124.906 114.383 125.292 113.5H130.25H131V112H130.25H125.45C125.26 111.062 124.545 110.316 123.625 110.079L123.625 108H127.5C128.328 108 129 107.328 129 106.5V100.5V99H127.5H118.5ZM123 113.5C123.552 113.5 124 113.052 124 112.5C124 111.948 123.552 111.5 123 111.5C122.448 111.5 122 111.948 122 112.5C122 113.052 122.448 113.5 123 113.5Z"
                      fill="#0052FF"
                    />
                  </g>
                </g>
                <g clipPath="url(#clip6_267_135)">
                  <mask
                    id="mask6_267_135"
                    style={{ maskType: 'luminance' }}
                    maskUnits="userSpaceOnUse"
                    x="218"
                    y="99"
                    width="16"
                    height="16"
                  >
                    <path d="M234 99H218V115H234V99Z" fill="white" />
                  </mask>
                  <g mask="url(#mask6_267_135)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M230.5 100.5H221.5V106.5H230.5V100.5ZM221.5 99H220V100.5V106.5C220 107.328 220.672 108 221.5 108H225.375L225.375 110.079C224.455 110.316 223.74 111.062 223.55 112H218.75H218V113.5H218.75H223.708C224.094 114.383 224.975 115 226 115C227.025 115 227.906 114.383 228.292 113.5H233.25H234V112H233.25H228.45C228.26 111.062 227.545 110.316 226.625 110.079L226.625 108H230.5C231.328 108 232 107.328 232 106.5V100.5V99H230.5H221.5ZM226 113.5C226.552 113.5 227 113.052 227 112.5C227 111.948 226.552 111.5 226 111.5C225.448 111.5 225 111.948 225 112.5C225 113.052 225.448 113.5 226 113.5Z"
                      fill="#0052FF"
                    />
                  </g>
                </g>
                <g clipPath="url(#clip7_267_135)">
                  <mask
                    id="mask7_267_135"
                    style={{ maskType: 'luminance' }}
                    maskUnits="userSpaceOnUse"
                    x="357"
                    y="130"
                    width="16"
                    height="16"
                  >
                    <path d="M373 130H357V146H373V130Z" fill="white" />
                  </mask>
                  <g mask="url(#mask7_267_135)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M369.5 131.5H360.5V137.5H369.5V131.5ZM360.5 130H359V131.5V137.5C359 138.328 359.672 139 360.5 139H364.375L364.375 141.079C363.455 141.316 362.74 142.062 362.55 143H357.75H357V144.5H357.75H362.708C363.094 145.383 363.975 146 365 146C366.025 146 366.906 145.383 367.292 144.5H372.25H373V143H372.25H367.45C367.26 142.062 366.545 141.316 365.625 141.079L365.625 139H369.5C370.328 139 371 138.328 371 137.5V131.5V130H369.5H360.5ZM365 144.5C365.552 144.5 366 144.052 366 143.5C366 142.948 365.552 142.5 365 142.5C364.448 142.5 364 142.948 364 143.5C364 144.052 364.448 144.5 365 144.5Z"
                      fill="#0052FF"
                    />
                  </g>
                </g>
                <path d="M36 17H53V61" stroke="#0052FF" strokeDasharray="6 6" />
                <path
                  d="M53 93V109H104"
                  stroke="#0052FF"
                  strokeDasharray="6 6"
                />
                <path d="M140 109H207" stroke="#0052FF" strokeDasharray="6 6" />
                <path
                  d="M138 47H122V92"
                  stroke="#0052FF"
                  strokeDasharray="6 6"
                />
                <path
                  d="M62 17H122V47"
                  stroke="#0052FF"
                  strokeDasharray="6 6"
                />
                <path
                  d="M242 15H226V92"
                  stroke="#0052FF"
                  strokeDasharray="6 6"
                />
                <path
                  d="M226 52V47H175"
                  stroke="#0052FF"
                  strokeDasharray="6 6"
                />
                <path
                  d="M348 46H365V122"
                  stroke="#0052FF"
                  strokeDasharray="6 6"
                />
                <path
                  d="M346 139H226V124"
                  stroke="#0052FF"
                  strokeDasharray="6 6"
                />
                <path
                  d="M70 77H122V92"
                  stroke="#0052FF"
                  strokeDasharray="6 6"
                />
                <path
                  d="M244 109H330V62"
                  stroke="#0052FF"
                  strokeDasharray="6 6"
                />
                <path
                  d="M279 15H330V30"
                  stroke="#0052FF"
                  strokeDasharray="6 6"
                />
                <defs>
                  <clipPath id="clip0_267_135">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(10 7)"
                    />
                  </clipPath>
                  <clipPath id="clip1_267_135">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(253 7)"
                    />
                  </clipPath>
                  <clipPath id="clip2_267_135">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(149 38)"
                    />
                  </clipPath>
                  <clipPath id="clip3_267_135">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(322 38)"
                    />
                  </clipPath>
                  <clipPath id="clip4_267_135">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(45 69)"
                    />
                  </clipPath>
                  <clipPath id="clip5_267_135">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(115 99)"
                    />
                  </clipPath>
                  <clipPath id="clip6_267_135">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(218 99)"
                    />
                  </clipPath>
                  <clipPath id="clip7_267_135">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(357 130)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="md:hidden block">
              <svg
                width="293"
                height="119"
                viewBox="0 0 293 119"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.362305"
                  y="23.7753"
                  width="292.274"
                  height="0.765116"
                  fill="#D9D9D9"
                />
                <rect
                  x="0.362305"
                  y="47.1879"
                  width="292.274"
                  height="0.765116"
                  fill="#D9D9D9"
                />
                <rect
                  x="0.362305"
                  y="70.6005"
                  width="292.274"
                  height="0.765116"
                  fill="#D9D9D9"
                />
                <rect
                  x="0.362305"
                  y="94.0131"
                  width="292.274"
                  height="0.765116"
                  fill="#D9D9D9"
                />
                <rect
                  x="26.8643"
                  y="0.362793"
                  width="0.765116"
                  height="117.828"
                  fill="#D9D9D9"
                />
                <rect
                  x="53.3652"
                  y="0.362793"
                  width="0.765116"
                  height="117.828"
                  fill="#D9D9D9"
                />
                <rect
                  x="79.8652"
                  y="0.362793"
                  width="0.765116"
                  height="117.828"
                  fill="#D9D9D9"
                />
                <rect
                  x="106.366"
                  y="0.362793"
                  width="0.765116"
                  height="117.828"
                  fill="#D9D9D9"
                />
                <rect
                  x="132.867"
                  y="0.362793"
                  width="0.765116"
                  height="117.828"
                  fill="#D9D9D9"
                />
                <rect
                  x="159.368"
                  y="0.362793"
                  width="0.765116"
                  height="117.828"
                  fill="#D9D9D9"
                />
                <rect
                  x="185.868"
                  y="0.362793"
                  width="0.765116"
                  height="117.828"
                  fill="#D9D9D9"
                />
                <rect
                  x="212.369"
                  y="0.362793"
                  width="0.765116"
                  height="117.828"
                  fill="#D9D9D9"
                />
                <rect
                  x="238.871"
                  y="0.362793"
                  width="0.765116"
                  height="117.828"
                  fill="#D9D9D9"
                />
                <rect
                  x="265.371"
                  y="0.362793"
                  width="0.765116"
                  height="117.828"
                  fill="#D9D9D9"
                />
                <g clipPath="url(#clip0_288_298)">
                  <mask
                    id="mask0_288_298"
                    style={{ maskType: 'luminance' }}
                    maskUnits="userSpaceOnUse"
                    x="7"
                    y="5"
                    width="13"
                    height="13"
                  >
                    <path
                      d="M19.8727 5.71863H7.63086V17.9605H19.8727V5.71863Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_288_298)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.1948 6.8663H10.3088V11.457H17.1948V6.8663ZM10.3088 5.71863H9.16109V6.8663V11.457C9.16109 12.0908 9.67492 12.6047 10.3088 12.6047H13.2736L13.2736 14.1952C12.5699 14.3763 12.0229 14.9478 11.8773 15.6651H8.2047H7.63086V16.8128H8.2047H11.9982C12.2933 17.4884 12.9674 17.9605 13.7518 17.9605C14.5362 17.9605 15.2103 17.4884 15.5054 16.8128H19.2989H19.8727V15.6651H19.2989H15.6263C15.4807 14.9478 14.9337 14.3763 14.23 14.1952L14.23 12.6047H17.1948C17.8286 12.6047 18.3425 12.0908 18.3425 11.457V6.8663V5.71863H17.1948H10.3088ZM13.7518 16.8128C14.1743 16.8128 14.5169 16.4703 14.5169 16.0477C14.5169 15.6251 14.1743 15.2826 13.7518 15.2826C13.3292 15.2826 12.9867 15.6251 12.9867 16.0477C12.9867 16.4703 13.3292 16.8128 13.7518 16.8128Z"
                      fill="#0052FF"
                    />
                  </g>
                </g>
                <g clipPath="url(#clip1_288_298)">
                  <mask
                    id="mask1_288_298"
                    style={{ maskType: 'luminance' }}
                    maskUnits="userSpaceOnUse"
                    x="193"
                    y="5"
                    width="13"
                    height="13"
                  >
                    <path
                      d="M205.414 5.71863H193.172V17.9605H205.414V5.71863Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask1_288_298)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M202.736 6.8663H195.85V11.457H202.736V6.8663ZM195.85 5.71863H194.702V6.8663V11.457C194.702 12.0908 195.216 12.6047 195.85 12.6047H198.815L198.815 14.1952C198.111 14.3763 197.564 14.9478 197.418 15.6651H193.746H193.172V16.8128H193.746H197.539C197.834 17.4884 198.508 17.9605 199.293 17.9605C200.077 17.9605 200.751 17.4884 201.046 16.8128H204.84H205.414V15.6651H204.84H201.167C201.022 14.9478 200.475 14.3763 199.771 14.1952L199.771 12.6047H202.736C203.37 12.6047 203.884 12.0908 203.884 11.457V6.8663V5.71863H202.736H195.85ZM199.293 16.8128C199.715 16.8128 200.058 16.4703 200.058 16.0477C200.058 15.6251 199.715 15.2826 199.293 15.2826C198.87 15.2826 198.528 15.6251 198.528 16.0477C198.528 16.4703 198.87 16.8128 199.293 16.8128Z"
                      fill="#0052FF"
                    />
                  </g>
                </g>
                <g clipPath="url(#clip2_288_298)">
                  <mask
                    id="mask2_288_298"
                    style={{ maskType: 'luminance' }}
                    maskUnits="userSpaceOnUse"
                    x="113"
                    y="29"
                    width="14"
                    height="13"
                  >
                    <path
                      d="M126.224 29.4373H113.982V41.6791H126.224V29.4373Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask2_288_298)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M123.546 30.5849H116.66V35.1756H123.546V30.5849ZM116.66 29.4373H115.513V30.5849V35.1756C115.513 35.8095 116.026 36.3233 116.66 36.3233H119.625L119.625 37.9138C118.921 38.0949 118.374 38.6665 118.229 39.3838H114.556H113.982V40.5314H114.556H118.35C118.645 41.207 119.319 41.6791 120.103 41.6791C120.888 41.6791 121.562 41.207 121.857 40.5314H125.65H126.224V39.3838H125.65H121.978C121.832 38.6665 121.285 38.0949 120.582 37.9138L120.582 36.3233H123.546C124.18 36.3233 124.694 35.8095 124.694 35.1756V30.5849V29.4373H123.546H116.66ZM120.103 40.5314C120.526 40.5314 120.868 40.1889 120.868 39.7663C120.868 39.3438 120.526 39.0012 120.103 39.0012C119.681 39.0012 119.338 39.3438 119.338 39.7663C119.338 40.1889 119.681 40.5314 120.103 40.5314Z"
                      fill="#0052FF"
                    />
                  </g>
                </g>
                <g clipPath="url(#clip3_288_298)">
                  <mask
                    id="mask3_288_298"
                    style={{ maskType: 'luminance' }}
                    maskUnits="userSpaceOnUse"
                    x="246"
                    y="29"
                    width="13"
                    height="13"
                  >
                    <path
                      d="M258.59 29.4373H246.348V41.6791H258.59V29.4373Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask3_288_298)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M255.912 30.5849H249.026V35.1756H255.912V30.5849ZM249.026 29.4373H247.878V30.5849V35.1756C247.878 35.8095 248.392 36.3233 249.026 36.3233H251.99L251.99 37.9138C251.287 38.0949 250.74 38.6665 250.594 39.3838H246.921H246.348V40.5314H246.921H250.715C251.01 41.207 251.684 41.6791 252.469 41.6791C253.253 41.6791 253.927 41.207 254.222 40.5314H258.016H258.59V39.3838H258.016H254.343C254.198 38.6665 253.651 38.0949 252.947 37.9138L252.947 36.3233H255.912C256.545 36.3233 257.059 35.8095 257.059 35.1756V30.5849V29.4373H255.912H249.026ZM252.469 40.5314C252.891 40.5314 253.234 40.1889 253.234 39.7663C253.234 39.3438 252.891 39.0012 252.469 39.0012C252.046 39.0012 251.703 39.3438 251.703 39.7663C251.703 40.1889 252.046 40.5314 252.469 40.5314Z"
                      fill="#0052FF"
                    />
                  </g>
                </g>
                <g clipPath="url(#clip4_288_298)">
                  <mask
                    id="mask4_288_298"
                    style={{ maskType: 'luminance' }}
                    maskUnits="userSpaceOnUse"
                    x="34"
                    y="53"
                    width="13"
                    height="13"
                  >
                    <path
                      d="M46.652 53.1558H34.4102V65.3976H46.652V53.1558Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask4_288_298)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M43.9741 54.3034H37.0881V58.8941H43.9741V54.3034ZM37.0881 53.1558H35.9404V54.3034V58.8941C35.9404 59.528 36.4542 60.0418 37.0881 60.0418H40.0529L40.0529 61.6323C39.3492 61.8134 38.8022 62.385 38.6566 63.1023H34.984H34.4102V64.2499H34.984H38.7775C39.0726 64.9255 39.7467 65.3976 40.5311 65.3976C41.3155 65.3976 41.9896 64.9255 42.2847 64.2499H46.0782H46.652V63.1023H46.0782H42.4056C42.26 62.385 41.713 61.8134 41.0093 61.6323L41.0093 60.0418H43.9741C44.6079 60.0418 45.1218 59.528 45.1218 58.8941V54.3034V53.1558H43.9741H37.0881ZM40.5311 64.2499C40.9536 64.2499 41.2962 63.9074 41.2962 63.4848C41.2962 63.0623 40.9536 62.7197 40.5311 62.7197C40.1085 62.7197 39.766 63.0623 39.766 63.4848C39.766 63.9074 40.1085 64.2499 40.5311 64.2499Z"
                      fill="#0052FF"
                    />
                  </g>
                </g>
                <g clipPath="url(#clip5_288_298)">
                  <mask
                    id="mask5_288_298"
                    style={{ maskType: 'luminance' }}
                    maskUnits="userSpaceOnUse"
                    x="87"
                    y="76"
                    width="13"
                    height="13"
                  >
                    <path
                      d="M99.8278 76.1093H87.5859V88.3511H99.8278V76.1093Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask5_288_298)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M97.1499 77.2569H90.2638V81.8476H97.1499V77.2569ZM90.2638 76.1093H89.1162V77.2569V81.8476C89.1162 82.4815 89.63 82.9953 90.2638 82.9953H93.2287L93.2287 84.5858C92.5249 84.7669 91.9779 85.3385 91.8323 86.0558H88.1598H87.5859V87.2034H88.1598H91.9532C92.2484 87.879 92.9225 88.3511 93.7069 88.3511C94.4912 88.3511 95.1653 87.879 95.4605 87.2034H99.254H99.8278V86.0558H99.254H95.5814C95.4358 85.3385 94.8888 84.7669 94.1851 84.5858L94.1851 82.9953H97.1499C97.7837 82.9953 98.2976 82.4815 98.2976 81.8476V77.2569V76.1093H97.1499H90.2638ZM93.7069 87.2034C94.1294 87.2034 94.472 86.8609 94.472 86.4383C94.472 86.0157 94.1294 85.6732 93.7069 85.6732C93.2843 85.6732 92.9418 86.0157 92.9418 86.4383C92.9418 86.8609 93.2843 87.2034 93.7069 87.2034Z"
                      fill="#0052FF"
                    />
                  </g>
                </g>
                <g clipPath="url(#clip6_288_298)">
                  <mask
                    id="mask6_288_298"
                    style={{ maskType: 'luminance' }}
                    maskUnits="userSpaceOnUse"
                    x="166"
                    y="76"
                    width="14"
                    height="13"
                  >
                    <path
                      d="M179.017 76.1093H166.775V88.3511H179.017V76.1093Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask6_288_298)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M176.339 77.2569H169.453V81.8476H176.339V77.2569ZM169.453 76.1093H168.306V77.2569V81.8476C168.306 82.4815 168.819 82.9953 169.453 82.9953H172.418L172.418 84.5858C171.714 84.7669 171.167 85.3385 171.022 86.0558H167.349H166.775V87.2034H167.349H171.143C171.438 87.879 172.112 88.3511 172.896 88.3511C173.681 88.3511 174.355 87.879 174.65 87.2034H178.443H179.017V86.0558H178.443H174.771C174.625 85.3385 174.078 84.7669 173.375 84.5858L173.375 82.9953H176.339C176.973 82.9953 177.487 82.4815 177.487 81.8476V77.2569V76.1093H176.339H169.453ZM172.896 87.2034C173.319 87.2034 173.661 86.8609 173.661 86.4383C173.661 86.0157 173.319 85.6732 172.896 85.6732C172.474 85.6732 172.131 86.0157 172.131 86.4383C172.131 86.8609 172.474 87.2034 172.896 87.2034Z"
                      fill="#0052FF"
                    />
                  </g>
                </g>
                <g clipPath="url(#clip7_288_298)">
                  <mask
                    id="mask7_288_298"
                    style={{ maskType: 'luminance' }}
                    maskUnits="userSpaceOnUse"
                    x="273"
                    y="99"
                    width="13"
                    height="14"
                  >
                    <path
                      d="M285.369 99.8279H273.127V112.07H285.369V99.8279Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask7_288_298)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M282.691 100.976H275.805V105.566H282.691V100.976ZM275.805 99.8279H274.657V100.976V105.566C274.657 106.2 275.171 106.714 275.805 106.714H278.77L278.77 108.304C278.066 108.486 277.519 109.057 277.373 109.774H273.701H273.127V110.922H273.701H277.494C277.789 111.598 278.464 112.07 279.248 112.07C280.032 112.07 280.706 111.598 281.002 110.922H284.795H285.369V109.774H284.795H281.122C280.977 109.057 280.43 108.486 279.726 108.304L279.726 106.714H282.691C283.325 106.714 283.839 106.2 283.839 105.566V100.976V99.8279H282.691H275.805ZM279.248 110.922C279.67 110.922 280.013 110.58 280.013 110.157C280.013 109.734 279.67 109.392 279.248 109.392C278.825 109.392 278.483 109.734 278.483 110.157C278.483 110.58 278.825 110.922 279.248 110.922Z"
                      fill="#0052FF"
                    />
                  </g>
                </g>
                <path
                  d="M27.9072 13.3698H40.9142V47.0349"
                  stroke="#0052FF"
                  strokeWidth="0.765116"
                  strokeDasharray="4.59 4.59"
                />
                <path
                  d="M40.9141 71.5186V83.7604H79.935"
                  stroke="#0052FF"
                  strokeWidth="0.765116"
                  strokeDasharray="4.59 4.59"
                />
                <path
                  d="M107.479 83.7605H158.742"
                  stroke="#0052FF"
                  strokeWidth="0.765116"
                  strokeDasharray="4.59 4.59"
                />
                <path
                  d="M105.949 36.3232H93.7074V70.7535"
                  stroke="#0052FF"
                  strokeWidth="0.765116"
                  strokeDasharray="4.59 4.59"
                />
                <path
                  d="M47.7998 13.3698H93.7068V36.3232"
                  stroke="#0052FF"
                  strokeWidth="0.765116"
                  strokeDasharray="4.59 4.59"
                />
                <path
                  d="M185.521 11.8395H173.279V70.7534"
                  stroke="#0052FF"
                  strokeWidth="0.765116"
                  strokeDasharray="4.59 4.59"
                />
                <path
                  d="M173.279 40.1488V36.3232H134.258"
                  stroke="#0052FF"
                  strokeWidth="0.765116"
                  strokeDasharray="4.59 4.59"
                />
                <path
                  d="M266.623 35.5581H279.63V93.7069"
                  stroke="#0052FF"
                  strokeWidth="0.765116"
                  strokeDasharray="4.59 4.59"
                />
                <path
                  d="M265.093 106.714H173.279V95.2372"
                  stroke="#0052FF"
                  strokeWidth="0.765116"
                  strokeDasharray="4.59 4.59"
                />
                <path
                  d="M53.9209 59.2767H93.7069V70.7535"
                  stroke="#0052FF"
                  strokeWidth="0.765116"
                  strokeDasharray="4.59 4.59"
                />
                <path
                  d="M187.051 83.7605H252.851V47.8"
                  stroke="#0052FF"
                  strokeWidth="0.765116"
                  strokeDasharray="4.59 4.59"
                />
                <path
                  d="M213.83 11.8395H252.851V23.3163"
                  stroke="#0052FF"
                  strokeWidth="0.765116"
                  strokeDasharray="4.59 4.59"
                />
                <defs>
                  <clipPath id="clip0_288_298">
                    <rect
                      width="12.2419"
                      height="12.2419"
                      fill="white"
                      transform="translate(7.63086 5.71863)"
                    />
                  </clipPath>
                  <clipPath id="clip1_288_298">
                    <rect
                      width="12.2419"
                      height="12.2419"
                      fill="white"
                      transform="translate(193.172 5.71863)"
                    />
                  </clipPath>
                  <clipPath id="clip2_288_298">
                    <rect
                      width="12.2419"
                      height="12.2419"
                      fill="white"
                      transform="translate(113.982 29.4373)"
                    />
                  </clipPath>
                  <clipPath id="clip3_288_298">
                    <rect
                      width="12.2419"
                      height="12.2419"
                      fill="white"
                      transform="translate(246.348 29.4373)"
                    />
                  </clipPath>
                  <clipPath id="clip4_288_298">
                    <rect
                      width="12.2419"
                      height="12.2419"
                      fill="white"
                      transform="translate(34.4102 53.1558)"
                    />
                  </clipPath>
                  <clipPath id="clip5_288_298">
                    <rect
                      width="12.2419"
                      height="12.2419"
                      fill="white"
                      transform="translate(87.5859 76.1093)"
                    />
                  </clipPath>
                  <clipPath id="clip6_288_298">
                    <rect
                      width="12.2419"
                      height="12.2419"
                      fill="white"
                      transform="translate(166.775 76.1093)"
                    />
                  </clipPath>
                  <clipPath id="clip7_288_298">
                    <rect
                      width="12.2419"
                      height="12.2419"
                      fill="white"
                      transform="translate(273.127 99.8279)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="flex flex-col gap-2 items-start justify-start">
              <h3 className="text-base font-medium">IPFS built-in</h3>
              <p className="text-sm text-muted-foreground max-w-lg leading-[1.5] tracking-[-0.2]">
                Decentralized storage, out of the box.
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full h-[16em] items-start justify-between border-b border-l border-r md:border-t p-4">
            <div
              className="relative w-full h-full bg-cover bg-center flex flex-col items-center justify-center gap-5 overflow-hidden"
              style={{
                backgroundImage: 'url(/smart-contract-bg.png)',
              }}
            >
              {/*
              <motion.div
                animate={{
                  filter: ['blur(4px)', 'blur(0px)'],
                  opacity: [0, 1],
                  y: [-100, 0],
                }}
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                }}
                className="absolute h-full w-px bg-[#D1D1D1] -z-10"
              />
            */}

              <motion.div
                whileInView={{
                  filter: ['blur(4px)', 'blur(0px)'],
                  opacity: [0, 1],
                  y: [-100, 0],
                }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
                viewport={{
                  once: true,
                }}
                className="flex flex-row gap-2.5 pl-3 pr-3.5 items-center justify-center bg-muted text-[#686868] py-2.5 border overflow-hidden"
              >
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.8125 3.5C8.8125 4.22488 9.40015 4.8125 10.125 4.8125C10.8498 4.8125 11.4375 4.22488 11.4375 3.5C11.4375 2.77512 10.8498 2.1875 10.125 2.1875C9.40015 2.1875 8.8125 2.77512 8.8125 3.5ZM7.86344 4.83347C7.63252 4.44267 7.5 3.98681 7.5 3.5C7.5 2.05026 8.67521 0.875 10.125 0.875C11.5748 0.875 12.75 2.05026 12.75 3.5C12.75 4.94974 11.5748 6.125 10.125 6.125C9.63815 6.125 9.18236 5.99248 8.7915 5.76156L5.38656 9.1665C5.61748 9.55736 5.75 10.0132 5.75 10.5C5.75 11.9498 4.57474 13.125 3.125 13.125C1.67526 13.125 0.5 11.9498 0.5 10.5C0.5 9.05021 1.67526 7.875 3.125 7.875C3.61181 7.875 4.06767 8.00752 4.45848 8.23845L7.86344 4.83347ZM1.8125 10.5C1.8125 11.2248 2.40012 11.8125 3.125 11.8125C3.84988 11.8125 4.4375 11.2248 4.4375 10.5C4.4375 9.77515 3.84988 9.1875 3.125 9.1875C2.40012 9.1875 1.8125 9.77515 1.8125 10.5Z"
                    fill="currentColor"
                  />
                </svg>
                <span>API</span>
              </motion.div>

              <motion.div
                whileInView={{
                  filter: ['blur(4px)', 'blur(0px)'],
                  opacity: [0, 1],
                  y: [-20, 0],
                  scale: [0.9, 1],
                  color: ['black', 'white'],
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                  ease: 'easeInOut',
                  scale: {
                    delay: 1,
                    duration: 0.5,
                    ease: 'easeInOut',
                  },
                  color: {
                    delay: 1,
                    duration: 1.2,
                    ease: 'easeInOut',
                  },
                }}
                viewport={{
                  once: true,
                }}
                className="flex flex-row gap-2.5 pl-3 pr-3.5 items-center justify-center border py-2.5 text-blacky"
              >
                <span className="font-mono">transferFunds()</span>
              </motion.div>

              <div className="flex flex-row gap-2.5 pl-3 pr-3.5 items-center justify-center bg-muted text-[#686868] py-2.5 border">
                <svg
                  width="12"
                  height="14"
                  viewBox="0 0 12 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.6875 11.8125C11.6875 13.0206 10.7081 14 9.5 14H2.5C1.29188 14 0.3125 13.0206 0.3125 11.8125V0H6.95007C7.18212 0 7.40469 0.0921874 7.56878 0.256281L11.4312 4.11872C11.5953 4.28281 11.6875 4.50537 11.6875 4.73743V11.8125ZM10.375 5.6875V11.8125C10.375 12.2958 9.98326 12.6875 9.5 12.6875H2.5C2.01675 12.6875 1.625 12.2958 1.625 11.8125V1.3125H6V5.6875H10.375ZM7.3125 1.85616V4.375H9.83136L7.3125 1.85616Z"
                    fill="currentColor"
                  />
                </svg>
                <span>Response</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-start justify-start">
              <h3 className="text-base font-medium">
                Smart Contract Integration
              </h3>
              <p className="text-sm text-muted-foreground max-w-lg leading-[1.5] tracking-[-0.2]">
                Easy smart contract calls.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full">
          <div className="flex flex-col w-full md:w-2/3 h-[13.75em] border-b border-l md:border-r-0 border-r p-4">
            <svg
              width="294"
              height="154"
              viewBox="0 0 294 154"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M222 131.5L133 121L35 133L27.5 43L82 81L139 40M139 40L192 81L237 31L253.5 83.5L222 127L194 83.5H250M139 40L133 117L82 85L37.5 129.5M189 83.5L139 117"
                stroke="#E6E6E6"
                strokeWidth="0.5"
              />
              <path
                d="M38 116L50.9904 123.5V138.5L38 146L25.0096 138.5V123.5L38 116Z"
                fill="#E6E6E6"
              />
              <rect
                width="34"
                height="18"
                transform="translate(38 116)"
                fill="#0052FF"
              />
              <path
                d="M44.85 129.9V121H45.59V129.9H44.85ZM45.3 129.16C44.7667 129.16 44.3 129.06 43.9 128.86C43.5067 128.653 43.1933 128.373 42.96 128.02C42.7267 127.66 42.59 127.247 42.55 126.78L43.43 126.72C43.4767 127.067 43.5767 127.36 43.73 127.6C43.89 127.84 44.1 128.023 44.36 128.15C44.6267 128.27 44.9467 128.33 45.32 128.33C45.6467 128.33 45.9233 128.29 46.15 128.21C46.3833 128.123 46.56 128 46.68 127.84C46.8 127.673 46.86 127.473 46.86 127.24C46.86 127.02 46.81 126.827 46.71 126.66C46.61 126.493 46.4167 126.34 46.13 126.2C45.8433 126.06 45.4233 125.923 44.87 125.79C44.3367 125.65 43.91 125.5 43.59 125.34C43.27 125.173 43.04 124.973 42.9 124.74C42.7667 124.5 42.7 124.207 42.7 123.86C42.7 123.473 42.7933 123.133 42.98 122.84C43.1667 122.54 43.43 122.307 43.77 122.14C44.1167 121.973 44.53 121.89 45.01 121.89C45.5167 121.89 45.9533 121.987 46.32 122.18C46.6867 122.367 46.9767 122.627 47.19 122.96C47.41 123.293 47.5467 123.673 47.6 124.1L46.71 124.16C46.6767 123.88 46.59 123.63 46.45 123.41C46.31 123.19 46.1167 123.02 45.87 122.9C45.63 122.773 45.3367 122.71 44.99 122.71C44.5567 122.71 44.2133 122.813 43.96 123.02C43.7067 123.227 43.58 123.497 43.58 123.83C43.58 124.043 43.63 124.223 43.73 124.37C43.83 124.51 44.01 124.633 44.27 124.74C44.5367 124.847 44.9133 124.96 45.4 125.08C45.98 125.227 46.44 125.4 46.78 125.6C47.1267 125.793 47.3733 126.023 47.52 126.29C47.6667 126.55 47.74 126.847 47.74 127.18C47.74 127.58 47.6333 127.93 47.42 128.23C47.2133 128.523 46.9267 128.753 46.56 128.92C46.1933 129.08 45.7733 129.16 45.3 129.16ZM51.9991 129V127.46H48.3891V126.68L51.9391 121.9H52.8591V126.62H53.7391V127.46H52.8591V129H51.9991ZM49.4291 126.62H51.9991V123.22L49.4291 126.62ZM57.3514 129.16C56.7781 129.16 56.2814 129.01 55.8614 128.71C55.4414 128.41 55.1147 127.983 54.8814 127.43C54.6547 126.877 54.5414 126.22 54.5414 125.46C54.5414 124.7 54.6547 124.043 54.8814 123.49C55.1147 122.93 55.4414 122.5 55.8614 122.2C56.2814 121.893 56.7781 121.74 57.3514 121.74C57.9314 121.74 58.4314 121.893 58.8514 122.2C59.2714 122.5 59.5947 122.927 59.8214 123.48C60.0547 124.033 60.1714 124.693 60.1714 125.46C60.1714 126.22 60.0547 126.877 59.8214 127.43C59.5947 127.983 59.2714 128.41 58.8514 128.71C58.4314 129.01 57.9314 129.16 57.3514 129.16ZM57.3514 128.32C57.9647 128.32 58.4381 128.073 58.7714 127.58C59.1047 127.08 59.2714 126.373 59.2714 125.46C59.2714 124.847 59.1947 124.327 59.0414 123.9C58.8947 123.467 58.6781 123.14 58.3914 122.92C58.1114 122.693 57.7647 122.58 57.3514 122.58C56.9447 122.58 56.5981 122.693 56.3114 122.92C56.0314 123.14 55.8147 123.467 55.6614 123.9C55.5147 124.327 55.4414 124.847 55.4414 125.46C55.4414 126.373 55.6081 127.08 55.9414 127.58C56.2747 128.073 56.7447 128.32 57.3514 128.32ZM63.7823 129.16C63.2089 129.16 62.7123 129.01 62.2923 128.71C61.8723 128.41 61.5456 127.983 61.3123 127.43C61.0856 126.877 60.9723 126.22 60.9723 125.46C60.9723 124.7 61.0856 124.043 61.3123 123.49C61.5456 122.93 61.8723 122.5 62.2923 122.2C62.7123 121.893 63.2089 121.74 63.7823 121.74C64.3623 121.74 64.8623 121.893 65.2823 122.2C65.7023 122.5 66.0256 122.927 66.2523 123.48C66.4856 124.033 66.6023 124.693 66.6023 125.46C66.6023 126.22 66.4856 126.877 66.2523 127.43C66.0256 127.983 65.7023 128.41 65.2823 128.71C64.8623 129.01 64.3623 129.16 63.7823 129.16ZM63.7823 128.32C64.3956 128.32 64.8689 128.073 65.2023 127.58C65.5356 127.08 65.7023 126.373 65.7023 125.46C65.7023 124.847 65.6256 124.327 65.4723 123.9C65.3256 123.467 65.1089 123.14 64.8223 122.92C64.5423 122.693 64.1956 122.58 63.7823 122.58C63.3756 122.58 63.0289 122.693 62.7423 122.92C62.4623 123.14 62.2456 123.467 62.0923 123.9C61.9456 124.327 61.8723 124.847 61.8723 125.46C61.8723 126.373 62.0389 127.08 62.3723 127.58C62.7056 128.073 63.1756 128.32 63.7823 128.32Z"
                fill="white"
              />
              <path
                d="M134 104L146.99 111.5V126.5L134 134L121.01 126.5V111.5L134 104Z"
                fill="#E6E6E6"
              />
              <rect
                width="33"
                height="18"
                transform="translate(134 104)"
                fill="#0052FF"
              />
              <path
                d="M140.85 117.9V109H141.59V117.9H140.85ZM141.3 117.16C140.767 117.16 140.3 117.06 139.9 116.86C139.507 116.653 139.193 116.373 138.96 116.02C138.727 115.66 138.59 115.247 138.55 114.78L139.43 114.72C139.477 115.067 139.577 115.36 139.73 115.6C139.89 115.84 140.1 116.023 140.36 116.15C140.627 116.27 140.947 116.33 141.32 116.33C141.647 116.33 141.923 116.29 142.15 116.21C142.383 116.123 142.56 116 142.68 115.84C142.8 115.673 142.86 115.473 142.86 115.24C142.86 115.02 142.81 114.827 142.71 114.66C142.61 114.493 142.417 114.34 142.13 114.2C141.843 114.06 141.423 113.923 140.87 113.79C140.337 113.65 139.91 113.5 139.59 113.34C139.27 113.173 139.04 112.973 138.9 112.74C138.767 112.5 138.7 112.207 138.7 111.86C138.7 111.473 138.793 111.133 138.98 110.84C139.167 110.54 139.43 110.307 139.77 110.14C140.117 109.973 140.53 109.89 141.01 109.89C141.517 109.89 141.953 109.987 142.32 110.18C142.687 110.367 142.977 110.627 143.19 110.96C143.41 111.293 143.547 111.673 143.6 112.1L142.71 112.16C142.677 111.88 142.59 111.63 142.45 111.41C142.31 111.19 142.117 111.02 141.87 110.9C141.63 110.773 141.337 110.71 140.99 110.71C140.557 110.71 140.213 110.813 139.96 111.02C139.707 111.227 139.58 111.497 139.58 111.83C139.58 112.043 139.63 112.223 139.73 112.37C139.83 112.51 140.01 112.633 140.27 112.74C140.537 112.847 140.913 112.96 141.4 113.08C141.98 113.227 142.44 113.4 142.78 113.6C143.127 113.793 143.373 114.023 143.52 114.29C143.667 114.55 143.74 114.847 143.74 115.18C143.74 115.58 143.633 115.93 143.42 116.23C143.213 116.523 142.927 116.753 142.56 116.92C142.193 117.08 141.773 117.16 141.3 117.16ZM147.099 117.16C146.312 117.16 145.706 116.977 145.279 116.61C144.852 116.237 144.622 115.757 144.589 115.17L145.479 115.11C145.519 115.543 145.686 115.853 145.979 116.04C146.279 116.227 146.652 116.32 147.099 116.32C147.406 116.32 147.689 116.28 147.949 116.2C148.209 116.113 148.419 115.977 148.579 115.79C148.739 115.597 148.819 115.34 148.819 115.02C148.819 114.547 148.662 114.2 148.349 113.98C148.036 113.76 147.622 113.65 147.109 113.65H146.549V112.81H147.109C147.529 112.81 147.876 112.727 148.149 112.56C148.429 112.393 148.569 112.107 148.569 111.7C148.569 111.333 148.449 111.057 148.209 110.87C147.976 110.677 147.622 110.58 147.149 110.58C146.682 110.58 146.329 110.67 146.089 110.85C145.856 111.03 145.716 111.277 145.669 111.59L144.769 111.53C144.836 110.997 145.072 110.567 145.479 110.24C145.886 109.907 146.442 109.74 147.149 109.74C147.629 109.74 148.042 109.82 148.389 109.98C148.736 110.133 149.002 110.353 149.189 110.64C149.376 110.927 149.469 111.267 149.469 111.66C149.469 112.1 149.329 112.457 149.049 112.73C148.776 112.997 148.369 113.18 147.829 113.28V113.1C148.409 113.167 148.869 113.373 149.209 113.72C149.549 114.067 149.719 114.5 149.719 115.02C149.719 115.473 149.606 115.86 149.379 116.18C149.159 116.5 148.852 116.743 148.459 116.91C148.066 117.077 147.612 117.16 147.099 117.16ZM152.902 117.16C152.315 117.16 151.835 117.017 151.462 116.73C151.095 116.437 150.845 116.07 150.712 115.63L151.622 115.56C151.702 115.8 151.849 115.987 152.062 116.12C152.275 116.253 152.555 116.32 152.902 116.32C153.495 116.32 153.949 116.083 154.262 115.61C154.582 115.13 154.745 114.36 154.752 113.3L154.962 113.34C154.795 113.787 154.539 114.133 154.192 114.38C153.845 114.62 153.442 114.74 152.982 114.74C152.522 114.74 152.115 114.637 151.762 114.43C151.409 114.223 151.129 113.933 150.922 113.56C150.722 113.187 150.622 112.753 150.622 112.26C150.622 111.74 150.729 111.293 150.942 110.92C151.155 110.54 151.445 110.25 151.812 110.05C152.185 109.843 152.612 109.74 153.092 109.74C153.685 109.74 154.169 109.877 154.542 110.15C154.922 110.423 155.202 110.807 155.382 111.3C155.562 111.787 155.652 112.363 155.652 113.03C155.652 113.623 155.605 114.173 155.512 114.68C155.419 115.18 155.265 115.617 155.052 115.99C154.839 116.357 154.555 116.643 154.202 116.85C153.855 117.057 153.422 117.16 152.902 117.16ZM153.042 113.89C153.369 113.89 153.655 113.827 153.902 113.7C154.149 113.573 154.342 113.39 154.482 113.15C154.629 112.91 154.702 112.62 154.702 112.28C154.702 111.953 154.635 111.663 154.502 111.41C154.375 111.15 154.192 110.947 153.952 110.8C153.712 110.653 153.425 110.58 153.092 110.58C152.765 110.58 152.485 110.653 152.252 110.8C152.019 110.94 151.839 111.137 151.712 111.39C151.585 111.643 151.522 111.933 151.522 112.26C151.522 112.593 151.585 112.883 151.712 113.13C151.845 113.37 152.025 113.557 152.252 113.69C152.479 113.823 152.742 113.89 153.042 113.89ZM158.942 117.16C158.355 117.16 157.875 117.017 157.502 116.73C157.135 116.437 156.885 116.07 156.752 115.63L157.662 115.56C157.742 115.8 157.889 115.987 158.102 116.12C158.315 116.253 158.595 116.32 158.942 116.32C159.535 116.32 159.989 116.083 160.302 115.61C160.622 115.13 160.785 114.36 160.792 113.3L161.002 113.34C160.835 113.787 160.579 114.133 160.232 114.38C159.885 114.62 159.482 114.74 159.022 114.74C158.562 114.74 158.155 114.637 157.802 114.43C157.449 114.223 157.169 113.933 156.962 113.56C156.762 113.187 156.662 112.753 156.662 112.26C156.662 111.74 156.769 111.293 156.982 110.92C157.195 110.54 157.485 110.25 157.852 110.05C158.225 109.843 158.652 109.74 159.132 109.74C159.725 109.74 160.209 109.877 160.582 110.15C160.962 110.423 161.242 110.807 161.422 111.3C161.602 111.787 161.692 112.363 161.692 113.03C161.692 113.623 161.645 114.173 161.552 114.68C161.459 115.18 161.305 115.617 161.092 115.99C160.879 116.357 160.595 116.643 160.242 116.85C159.895 117.057 159.462 117.16 158.942 117.16ZM159.082 113.89C159.409 113.89 159.695 113.827 159.942 113.7C160.189 113.573 160.382 113.39 160.522 113.15C160.669 112.91 160.742 112.62 160.742 112.28C160.742 111.953 160.675 111.663 160.542 111.41C160.415 111.15 160.232 110.947 159.992 110.8C159.752 110.653 159.465 110.58 159.132 110.58C158.805 110.58 158.525 110.653 158.292 110.8C158.059 110.94 157.879 111.137 157.752 111.39C157.625 111.643 157.562 111.933 157.562 112.26C157.562 112.593 157.625 112.883 157.752 113.13C157.885 113.37 158.065 113.557 158.292 113.69C158.519 113.823 158.782 113.89 159.082 113.89Z"
                fill="white"
              />
              <path
                d="M82 65L94.9904 72.5V87.5L82 95L69.0096 87.5V72.5L82 65Z"
                fill="#E6E6E6"
              />
              <rect
                width="33"
                height="18"
                transform="translate(82 65)"
                fill="#0052FF"
              />
              <path
                d="M88.85 78.9V70H89.59V78.9H88.85ZM89.3 78.16C88.7667 78.16 88.3 78.06 87.9 77.86C87.5067 77.6533 87.1933 77.3733 86.96 77.02C86.7267 76.66 86.59 76.2467 86.55 75.78L87.43 75.72C87.4767 76.0667 87.5767 76.36 87.73 76.6C87.89 76.84 88.1 77.0233 88.36 77.15C88.6267 77.27 88.9467 77.33 89.32 77.33C89.6467 77.33 89.9233 77.29 90.15 77.21C90.3833 77.1233 90.56 77 90.68 76.84C90.8 76.6733 90.86 76.4733 90.86 76.24C90.86 76.02 90.81 75.8267 90.71 75.66C90.61 75.4933 90.4167 75.34 90.13 75.2C89.8433 75.06 89.4233 74.9233 88.87 74.79C88.3367 74.65 87.91 74.5 87.59 74.34C87.27 74.1733 87.04 73.9733 86.9 73.74C86.7667 73.5 86.7 73.2067 86.7 72.86C86.7 72.4733 86.7933 72.1333 86.98 71.84C87.1667 71.54 87.43 71.3067 87.77 71.14C88.1167 70.9733 88.53 70.89 89.01 70.89C89.5167 70.89 89.9533 70.9867 90.32 71.18C90.6867 71.3667 90.9767 71.6267 91.19 71.96C91.41 72.2933 91.5467 72.6733 91.6 73.1L90.71 73.16C90.6767 72.88 90.59 72.63 90.45 72.41C90.31 72.19 90.1167 72.02 89.87 71.9C89.63 71.7733 89.3367 71.71 88.99 71.71C88.5567 71.71 88.2133 71.8133 87.96 72.02C87.7067 72.2267 87.58 72.4967 87.58 72.83C87.58 73.0433 87.63 73.2233 87.73 73.37C87.83 73.51 88.01 73.6333 88.27 73.74C88.5367 73.8467 88.9133 73.96 89.4 74.08C89.98 74.2267 90.44 74.4 90.78 74.6C91.1267 74.7933 91.3733 75.0233 91.52 75.29C91.6667 75.55 91.74 75.8467 91.74 76.18C91.74 76.58 91.6333 76.93 91.42 77.23C91.2133 77.5233 90.9267 77.7533 90.56 77.92C90.1933 78.08 89.7733 78.16 89.3 78.16ZM95.9991 78V76.46H92.3891V75.68L95.9391 70.9H96.8591V75.62H97.7391V76.46H96.8591V78H95.9991ZM93.4291 75.62H95.9991V72.22L93.4291 75.62ZM101.351 78.16C100.778 78.16 100.281 78.01 99.8614 77.71C99.4414 77.41 99.1147 76.9833 98.8814 76.43C98.6547 75.8767 98.5414 75.22 98.5414 74.46C98.5414 73.7 98.6547 73.0433 98.8814 72.49C99.1147 71.93 99.4414 71.5 99.8614 71.2C100.281 70.8933 100.778 70.74 101.351 70.74C101.931 70.74 102.431 70.8933 102.851 71.2C103.271 71.5 103.595 71.9267 103.821 72.48C104.055 73.0333 104.171 73.6933 104.171 74.46C104.171 75.22 104.055 75.8767 103.821 76.43C103.595 76.9833 103.271 77.41 102.851 77.71C102.431 78.01 101.931 78.16 101.351 78.16ZM101.351 77.32C101.965 77.32 102.438 77.0733 102.771 76.58C103.105 76.08 103.271 75.3733 103.271 74.46C103.271 73.8467 103.195 73.3267 103.041 72.9C102.895 72.4667 102.678 72.14 102.391 71.92C102.111 71.6933 101.765 71.58 101.351 71.58C100.945 71.58 100.598 71.6933 100.311 71.92C100.031 72.14 99.8147 72.4667 99.6614 72.9C99.5147 73.3267 99.4414 73.8467 99.4414 74.46C99.4414 75.3733 99.6081 76.08 99.9414 76.58C100.275 77.0733 100.745 77.32 101.351 77.32ZM107.482 78.16C106.696 78.16 106.089 77.9767 105.662 77.61C105.236 77.2367 105.006 76.7567 104.972 76.17L105.862 76.11C105.902 76.5433 106.069 76.8533 106.362 77.04C106.662 77.2267 107.036 77.32 107.482 77.32C107.789 77.32 108.072 77.28 108.332 77.2C108.592 77.1133 108.802 76.9767 108.962 76.79C109.122 76.5967 109.202 76.34 109.202 76.02C109.202 75.5467 109.046 75.2 108.732 74.98C108.419 74.76 108.006 74.65 107.492 74.65H106.932V73.81H107.492C107.912 73.81 108.259 73.7267 108.532 73.56C108.812 73.3933 108.952 73.1067 108.952 72.7C108.952 72.3333 108.832 72.0567 108.592 71.87C108.359 71.6767 108.006 71.58 107.532 71.58C107.066 71.58 106.712 71.67 106.472 71.85C106.239 72.03 106.099 72.2767 106.052 72.59L105.152 72.53C105.219 71.9967 105.456 71.5667 105.862 71.24C106.269 70.9067 106.826 70.74 107.532 70.74C108.012 70.74 108.426 70.82 108.772 70.98C109.119 71.1333 109.386 71.3533 109.572 71.64C109.759 71.9267 109.852 72.2667 109.852 72.66C109.852 73.1 109.712 73.4567 109.432 73.73C109.159 73.9967 108.752 74.18 108.212 74.28V74.1C108.792 74.1667 109.252 74.3733 109.592 74.72C109.932 75.0667 110.102 75.5 110.102 76.02C110.102 76.4733 109.989 76.86 109.762 77.18C109.542 77.5 109.236 77.7433 108.842 77.91C108.449 78.0767 107.996 78.16 107.482 78.16Z"
                fill="white"
              />
              <path
                d="M35 38L47.9904 45.5V60.5L35 68L22.0096 60.5V45.5L35 38Z"
                fill="#E6E6E6"
              />
              <rect
                width="31"
                height="18"
                transform="translate(35 38)"
                fill="#0052FF"
              />
              <path
                d="M41.85 51.9V43H42.59V51.9H41.85ZM42.3 51.16C41.7667 51.16 41.3 51.06 40.9 50.86C40.5067 50.6533 40.1933 50.3733 39.96 50.02C39.7267 49.66 39.59 49.2467 39.55 48.78L40.43 48.72C40.4767 49.0667 40.5767 49.36 40.73 49.6C40.89 49.84 41.1 50.0233 41.36 50.15C41.6267 50.27 41.9467 50.33 42.32 50.33C42.6467 50.33 42.9233 50.29 43.15 50.21C43.3833 50.1233 43.56 50 43.68 49.84C43.8 49.6733 43.86 49.4733 43.86 49.24C43.86 49.02 43.81 48.8267 43.71 48.66C43.61 48.4933 43.4167 48.34 43.13 48.2C42.8433 48.06 42.4233 47.9233 41.87 47.79C41.3367 47.65 40.91 47.5 40.59 47.34C40.27 47.1733 40.04 46.9733 39.9 46.74C39.7667 46.5 39.7 46.2067 39.7 45.86C39.7 45.4733 39.7933 45.1333 39.98 44.84C40.1667 44.54 40.43 44.3067 40.77 44.14C41.1167 43.9733 41.53 43.89 42.01 43.89C42.5167 43.89 42.9533 43.9867 43.32 44.18C43.6867 44.3667 43.9767 44.6267 44.19 44.96C44.41 45.2933 44.5467 45.6733 44.6 46.1L43.71 46.16C43.6767 45.88 43.59 45.63 43.45 45.41C43.31 45.19 43.1167 45.02 42.87 44.9C42.63 44.7733 42.3367 44.71 41.99 44.71C41.5567 44.71 41.2133 44.8133 40.96 45.02C40.7067 45.2267 40.58 45.4967 40.58 45.83C40.58 46.0433 40.63 46.2233 40.73 46.37C40.83 46.51 41.01 46.6333 41.27 46.74C41.5367 46.8467 41.9133 46.96 42.4 47.08C42.98 47.2267 43.44 47.4 43.78 47.6C44.1267 47.7933 44.3733 48.0233 44.52 48.29C44.6667 48.55 44.74 48.8467 44.74 49.18C44.74 49.58 44.6333 49.93 44.42 50.23C44.2133 50.5233 43.9267 50.7533 43.56 50.92C43.1933 51.08 42.7733 51.16 42.3 51.16ZM48.9991 51V49.46H45.3891V48.68L48.9391 43.9H49.8591V48.62H50.7391V49.46H49.8591V51H48.9991ZM46.4291 48.62H48.9991V45.22L46.4291 48.62ZM54.3514 51.16C53.7781 51.16 53.2814 51.01 52.8614 50.71C52.4414 50.41 52.1147 49.9833 51.8814 49.43C51.6547 48.8767 51.5414 48.22 51.5414 47.46C51.5414 46.7 51.6547 46.0433 51.8814 45.49C52.1147 44.93 52.4414 44.5 52.8614 44.2C53.2814 43.8933 53.7781 43.74 54.3514 43.74C54.9314 43.74 55.4314 43.8933 55.8514 44.2C56.2714 44.5 56.5947 44.9267 56.8214 45.48C57.0547 46.0333 57.1714 46.6933 57.1714 47.46C57.1714 48.22 57.0547 48.8767 56.8214 49.43C56.5947 49.9833 56.2714 50.41 55.8514 50.71C55.4314 51.01 54.9314 51.16 54.3514 51.16ZM54.3514 50.32C54.9647 50.32 55.4381 50.0733 55.7714 49.58C56.1047 49.08 56.2714 48.3733 56.2714 47.46C56.2714 46.8467 56.1947 46.3267 56.0414 45.9C55.8947 45.4667 55.6781 45.14 55.3914 44.92C55.1114 44.6933 54.7647 44.58 54.3514 44.58C53.9447 44.58 53.5981 44.6933 53.3114 44.92C53.0314 45.14 52.8147 45.4667 52.6614 45.9C52.5147 46.3267 52.4414 46.8467 52.4414 47.46C52.4414 48.3733 52.6081 49.08 52.9414 49.58C53.2747 50.0733 53.7447 50.32 54.3514 50.32ZM59.3523 51V45.74H57.8723V45H58.4723C58.7323 45 58.9389 44.9667 59.0923 44.9C59.2523 44.8333 59.3656 44.72 59.4323 44.56C59.4989 44.4 59.5323 44.18 59.5323 43.9H60.2123V51H59.3523Z"
                fill="white"
              />
              <path
                d="M137 25L149.99 32.5V47.5L137 55L124.01 47.5V32.5L137 25Z"
                fill="#E6E6E6"
              />
              <rect
                width="31"
                height="18"
                transform="translate(137 25)"
                fill="#0052FF"
              />
              <path
                d="M143.85 38.9V30H144.59V38.9H143.85ZM144.3 38.16C143.767 38.16 143.3 38.06 142.9 37.86C142.507 37.6533 142.193 37.3733 141.96 37.02C141.727 36.66 141.59 36.2467 141.55 35.78L142.43 35.72C142.477 36.0667 142.577 36.36 142.73 36.6C142.89 36.84 143.1 37.0233 143.36 37.15C143.627 37.27 143.947 37.33 144.32 37.33C144.647 37.33 144.923 37.29 145.15 37.21C145.383 37.1233 145.56 37 145.68 36.84C145.8 36.6733 145.86 36.4733 145.86 36.24C145.86 36.02 145.81 35.8267 145.71 35.66C145.61 35.4933 145.417 35.34 145.13 35.2C144.843 35.06 144.423 34.9233 143.87 34.79C143.337 34.65 142.91 34.5 142.59 34.34C142.27 34.1733 142.04 33.9733 141.9 33.74C141.767 33.5 141.7 33.2067 141.7 32.86C141.7 32.4733 141.793 32.1333 141.98 31.84C142.167 31.54 142.43 31.3067 142.77 31.14C143.117 30.9733 143.53 30.89 144.01 30.89C144.517 30.89 144.953 30.9867 145.32 31.18C145.687 31.3667 145.977 31.6267 146.19 31.96C146.41 32.2933 146.547 32.6733 146.6 33.1L145.71 33.16C145.677 32.88 145.59 32.63 145.45 32.41C145.31 32.19 145.117 32.02 144.87 31.9C144.63 31.7733 144.337 31.71 143.99 31.71C143.557 31.71 143.213 31.8133 142.96 32.02C142.707 32.2267 142.58 32.4967 142.58 32.83C142.58 33.0433 142.63 33.2233 142.73 33.37C142.83 33.51 143.01 33.6333 143.27 33.74C143.537 33.8467 143.913 33.96 144.4 34.08C144.98 34.2267 145.44 34.4 145.78 34.6C146.127 34.7933 146.373 35.0233 146.52 35.29C146.667 35.55 146.74 35.8467 146.74 36.18C146.74 36.58 146.633 36.93 146.42 37.23C146.213 37.5233 145.927 37.7533 145.56 37.92C145.193 38.08 144.773 38.16 144.3 38.16ZM150.099 38.16C149.312 38.16 148.706 37.9767 148.279 37.61C147.852 37.2367 147.622 36.7567 147.589 36.17L148.479 36.11C148.519 36.5433 148.686 36.8533 148.979 37.04C149.279 37.2267 149.652 37.32 150.099 37.32C150.406 37.32 150.689 37.28 150.949 37.2C151.209 37.1133 151.419 36.9767 151.579 36.79C151.739 36.5967 151.819 36.34 151.819 36.02C151.819 35.5467 151.662 35.2 151.349 34.98C151.036 34.76 150.622 34.65 150.109 34.65H149.549V33.81H150.109C150.529 33.81 150.876 33.7267 151.149 33.56C151.429 33.3933 151.569 33.1067 151.569 32.7C151.569 32.3333 151.449 32.0567 151.209 31.87C150.976 31.6767 150.622 31.58 150.149 31.58C149.682 31.58 149.329 31.67 149.089 31.85C148.856 32.03 148.716 32.2767 148.669 32.59L147.769 32.53C147.836 31.9967 148.072 31.5667 148.479 31.24C148.886 30.9067 149.442 30.74 150.149 30.74C150.629 30.74 151.042 30.82 151.389 30.98C151.736 31.1333 152.002 31.3533 152.189 31.64C152.376 31.9267 152.469 32.2667 152.469 32.66C152.469 33.1 152.329 33.4567 152.049 33.73C151.776 33.9967 151.369 34.18 150.829 34.28V34.1C151.409 34.1667 151.869 34.3733 152.209 34.72C152.549 35.0667 152.719 35.5 152.719 36.02C152.719 36.4733 152.606 36.86 152.379 37.18C152.159 37.5 151.852 37.7433 151.459 37.91C151.066 38.0767 150.612 38.16 150.099 38.16ZM155.902 38.16C155.315 38.16 154.835 38.0167 154.462 37.73C154.095 37.4367 153.845 37.07 153.712 36.63L154.622 36.56C154.702 36.8 154.849 36.9867 155.062 37.12C155.275 37.2533 155.555 37.32 155.902 37.32C156.495 37.32 156.949 37.0833 157.262 36.61C157.582 36.13 157.745 35.36 157.752 34.3L157.962 34.34C157.795 34.7867 157.539 35.1333 157.192 35.38C156.845 35.62 156.442 35.74 155.982 35.74C155.522 35.74 155.115 35.6367 154.762 35.43C154.409 35.2233 154.129 34.9333 153.922 34.56C153.722 34.1867 153.622 33.7533 153.622 33.26C153.622 32.74 153.729 32.2933 153.942 31.92C154.155 31.54 154.445 31.25 154.812 31.05C155.185 30.8433 155.612 30.74 156.092 30.74C156.685 30.74 157.169 30.8767 157.542 31.15C157.922 31.4233 158.202 31.8067 158.382 32.3C158.562 32.7867 158.652 33.3633 158.652 34.03C158.652 34.6233 158.605 35.1733 158.512 35.68C158.419 36.18 158.265 36.6167 158.052 36.99C157.839 37.3567 157.555 37.6433 157.202 37.85C156.855 38.0567 156.422 38.16 155.902 38.16ZM156.042 34.89C156.369 34.89 156.655 34.8267 156.902 34.7C157.149 34.5733 157.342 34.39 157.482 34.15C157.629 33.91 157.702 33.62 157.702 33.28C157.702 32.9533 157.635 32.6633 157.502 32.41C157.375 32.15 157.192 31.9467 156.952 31.8C156.712 31.6533 156.425 31.58 156.092 31.58C155.765 31.58 155.485 31.6533 155.252 31.8C155.019 31.94 154.839 32.1367 154.712 32.39C154.585 32.6433 154.522 32.9333 154.522 33.26C154.522 33.5933 154.585 33.8833 154.712 34.13C154.845 34.37 155.025 34.5567 155.252 34.69C155.479 34.8233 155.742 34.89 156.042 34.89ZM160.442 38C160.442 37.2667 160.542 36.5367 160.742 35.81C160.942 35.0767 161.228 34.3667 161.602 33.68C161.982 32.9933 162.435 32.3467 162.962 31.74H158.862V30.9H163.902V31.68C163.308 32.36 162.818 33.0333 162.432 33.7C162.052 34.36 161.772 35.0433 161.592 35.75C161.412 36.45 161.322 37.2 161.322 38H160.442Z"
                fill="white"
              />
              <path
                d="M253 69L265.99 76.5V91.5L253 99L240.01 91.5V76.5L253 69Z"
                fill="#E6E6E6"
              />
              <rect
                width="31"
                height="18"
                transform="translate(253 69)"
                fill="#0052FF"
              />
              <path
                d="M259.85 82.9V74H260.59V82.9H259.85ZM260.3 82.16C259.767 82.16 259.3 82.06 258.9 81.86C258.507 81.6533 258.193 81.3733 257.96 81.02C257.727 80.66 257.59 80.2467 257.55 79.78L258.43 79.72C258.477 80.0667 258.577 80.36 258.73 80.6C258.89 80.84 259.1 81.0233 259.36 81.15C259.627 81.27 259.947 81.33 260.32 81.33C260.647 81.33 260.923 81.29 261.15 81.21C261.383 81.1233 261.56 81 261.68 80.84C261.8 80.6733 261.86 80.4733 261.86 80.24C261.86 80.02 261.81 79.8267 261.71 79.66C261.61 79.4933 261.417 79.34 261.13 79.2C260.843 79.06 260.423 78.9233 259.87 78.79C259.337 78.65 258.91 78.5 258.59 78.34C258.27 78.1733 258.04 77.9733 257.9 77.74C257.767 77.5 257.7 77.2067 257.7 76.86C257.7 76.4733 257.793 76.1333 257.98 75.84C258.167 75.54 258.43 75.3067 258.77 75.14C259.117 74.9733 259.53 74.89 260.01 74.89C260.517 74.89 260.953 74.9867 261.32 75.18C261.687 75.3667 261.977 75.6267 262.19 75.96C262.41 76.2933 262.547 76.6733 262.6 77.1L261.71 77.16C261.677 76.88 261.59 76.63 261.45 76.41C261.31 76.19 261.117 76.02 260.87 75.9C260.63 75.7733 260.337 75.71 259.99 75.71C259.557 75.71 259.213 75.8133 258.96 76.02C258.707 76.2267 258.58 76.4967 258.58 76.83C258.58 77.0433 258.63 77.2233 258.73 77.37C258.83 77.51 259.01 77.6333 259.27 77.74C259.537 77.8467 259.913 77.96 260.4 78.08C260.98 78.2267 261.44 78.4 261.78 78.6C262.127 78.7933 262.373 79.0233 262.52 79.29C262.667 79.55 262.74 79.8467 262.74 80.18C262.74 80.58 262.633 80.93 262.42 81.23C262.213 81.5233 261.927 81.7533 261.56 81.92C261.193 82.08 260.773 82.16 260.3 82.16ZM266.099 82.16C265.312 82.16 264.706 81.9767 264.279 81.61C263.852 81.2367 263.622 80.7567 263.589 80.17L264.479 80.11C264.519 80.5433 264.686 80.8533 264.979 81.04C265.279 81.2267 265.652 81.32 266.099 81.32C266.406 81.32 266.689 81.28 266.949 81.2C267.209 81.1133 267.419 80.9767 267.579 80.79C267.739 80.5967 267.819 80.34 267.819 80.02C267.819 79.5467 267.662 79.2 267.349 78.98C267.036 78.76 266.622 78.65 266.109 78.65H265.549V77.81H266.109C266.529 77.81 266.876 77.7267 267.149 77.56C267.429 77.3933 267.569 77.1067 267.569 76.7C267.569 76.3333 267.449 76.0567 267.209 75.87C266.976 75.6767 266.622 75.58 266.149 75.58C265.682 75.58 265.329 75.67 265.089 75.85C264.856 76.03 264.716 76.2767 264.669 76.59L263.769 76.53C263.836 75.9967 264.072 75.5667 264.479 75.24C264.886 74.9067 265.442 74.74 266.149 74.74C266.629 74.74 267.042 74.82 267.389 74.98C267.736 75.1333 268.002 75.3533 268.189 75.64C268.376 75.9267 268.469 76.2667 268.469 76.66C268.469 77.1 268.329 77.4567 268.049 77.73C267.776 77.9967 267.369 78.18 266.829 78.28V78.1C267.409 78.1667 267.869 78.3733 268.209 78.72C268.549 79.0667 268.719 79.5 268.719 80.02C268.719 80.4733 268.606 80.86 268.379 81.18C268.159 81.5 267.852 81.7433 267.459 81.91C267.066 82.0767 266.612 82.16 266.099 82.16ZM271.902 82.16C271.315 82.16 270.835 82.0167 270.462 81.73C270.095 81.4367 269.845 81.07 269.712 80.63L270.622 80.56C270.702 80.8 270.849 80.9867 271.062 81.12C271.275 81.2533 271.555 81.32 271.902 81.32C272.495 81.32 272.949 81.0833 273.262 80.61C273.582 80.13 273.745 79.36 273.752 78.3L273.962 78.34C273.795 78.7867 273.539 79.1333 273.192 79.38C272.845 79.62 272.442 79.74 271.982 79.74C271.522 79.74 271.115 79.6367 270.762 79.43C270.409 79.2233 270.129 78.9333 269.922 78.56C269.722 78.1867 269.622 77.7533 269.622 77.26C269.622 76.74 269.729 76.2933 269.942 75.92C270.155 75.54 270.445 75.25 270.812 75.05C271.185 74.8433 271.612 74.74 272.092 74.74C272.685 74.74 273.169 74.8767 273.542 75.15C273.922 75.4233 274.202 75.8067 274.382 76.3C274.562 76.7867 274.652 77.3633 274.652 78.03C274.652 78.6233 274.605 79.1733 274.512 79.68C274.419 80.18 274.265 80.6167 274.052 80.99C273.839 81.3567 273.555 81.6433 273.202 81.85C272.855 82.0567 272.422 82.16 271.902 82.16ZM272.042 78.89C272.369 78.89 272.655 78.8267 272.902 78.7C273.149 78.5733 273.342 78.39 273.482 78.15C273.629 77.91 273.702 77.62 273.702 77.28C273.702 76.9533 273.635 76.6633 273.502 76.41C273.375 76.15 273.192 75.9467 272.952 75.8C272.712 75.6533 272.425 75.58 272.092 75.58C271.765 75.58 271.485 75.6533 271.252 75.8C271.019 75.94 270.839 76.1367 270.712 76.39C270.585 76.6433 270.522 76.9333 270.522 77.26C270.522 77.5933 270.585 77.8833 270.712 78.13C270.845 78.37 271.025 78.5567 271.252 78.69C271.479 78.8233 271.742 78.89 272.042 78.89ZM276.442 82C276.442 81.2667 276.542 80.5367 276.742 79.81C276.942 79.0767 277.228 78.3667 277.602 77.68C277.982 76.9933 278.435 76.3467 278.962 75.74H274.862V74.9H279.902V75.68C279.308 76.36 278.818 77.0333 278.432 77.7C278.052 78.36 277.772 79.0433 277.592 79.75C277.412 80.45 277.322 81.2 277.322 82H276.442Z"
                fill="white"
              />
              <path
                d="M238 16L250.99 23.5V38.5L238 46L225.01 38.5V23.5L238 16Z"
                fill="#E6E6E6"
              />
              <rect
                width="34"
                height="18"
                transform="translate(238 16)"
                fill="#0052FF"
              />
              <path
                d="M244.85 29.9V21H245.59V29.9H244.85ZM245.3 29.16C244.767 29.16 244.3 29.06 243.9 28.86C243.507 28.6533 243.193 28.3733 242.96 28.02C242.727 27.66 242.59 27.2467 242.55 26.78L243.43 26.72C243.477 27.0667 243.577 27.36 243.73 27.6C243.89 27.84 244.1 28.0233 244.36 28.15C244.627 28.27 244.947 28.33 245.32 28.33C245.647 28.33 245.923 28.29 246.15 28.21C246.383 28.1233 246.56 28 246.68 27.84C246.8 27.6733 246.86 27.4733 246.86 27.24C246.86 27.02 246.81 26.8267 246.71 26.66C246.61 26.4933 246.417 26.34 246.13 26.2C245.843 26.06 245.423 25.9233 244.87 25.79C244.337 25.65 243.91 25.5 243.59 25.34C243.27 25.1733 243.04 24.9733 242.9 24.74C242.767 24.5 242.7 24.2067 242.7 23.86C242.7 23.4733 242.793 23.1333 242.98 22.84C243.167 22.54 243.43 22.3067 243.77 22.14C244.117 21.9733 244.53 21.89 245.01 21.89C245.517 21.89 245.953 21.9867 246.32 22.18C246.687 22.3667 246.977 22.6267 247.19 22.96C247.41 23.2933 247.547 23.6733 247.6 24.1L246.71 24.16C246.677 23.88 246.59 23.63 246.45 23.41C246.31 23.19 246.117 23.02 245.87 22.9C245.63 22.7733 245.337 22.71 244.99 22.71C244.557 22.71 244.213 22.8133 243.96 23.02C243.707 23.2267 243.58 23.4967 243.58 23.83C243.58 24.0433 243.63 24.2233 243.73 24.37C243.83 24.51 244.01 24.6333 244.27 24.74C244.537 24.8467 244.913 24.96 245.4 25.08C245.98 25.2267 246.44 25.4 246.78 25.6C247.127 25.7933 247.373 26.0233 247.52 26.29C247.667 26.55 247.74 26.8467 247.74 27.18C247.74 27.58 247.633 27.93 247.42 28.23C247.213 28.5233 246.927 28.7533 246.56 28.92C246.193 29.08 245.773 29.16 245.3 29.16ZM251.999 29V27.46H248.389V26.68L251.939 21.9H252.859V26.62H253.739V27.46H252.859V29H251.999ZM249.429 26.62H251.999V23.22L249.429 26.62ZM257.351 29.16C256.778 29.16 256.281 29.01 255.861 28.71C255.441 28.41 255.115 27.9833 254.881 27.43C254.655 26.8767 254.541 26.22 254.541 25.46C254.541 24.7 254.655 24.0433 254.881 23.49C255.115 22.93 255.441 22.5 255.861 22.2C256.281 21.8933 256.778 21.74 257.351 21.74C257.931 21.74 258.431 21.8933 258.851 22.2C259.271 22.5 259.595 22.9267 259.821 23.48C260.055 24.0333 260.171 24.6933 260.171 25.46C260.171 26.22 260.055 26.8767 259.821 27.43C259.595 27.9833 259.271 28.41 258.851 28.71C258.431 29.01 257.931 29.16 257.351 29.16ZM257.351 28.32C257.965 28.32 258.438 28.0733 258.771 27.58C259.105 27.08 259.271 26.3733 259.271 25.46C259.271 24.8467 259.195 24.3267 259.041 23.9C258.895 23.4667 258.678 23.14 258.391 22.92C258.111 22.6933 257.765 22.58 257.351 22.58C256.945 22.58 256.598 22.6933 256.311 22.92C256.031 23.14 255.815 23.4667 255.661 23.9C255.515 24.3267 255.441 24.8467 255.441 25.46C255.441 26.3733 255.608 27.08 255.941 27.58C256.275 28.0733 256.745 28.32 257.351 28.32ZM263.782 29.16C263.209 29.16 262.712 29.01 262.292 28.71C261.872 28.41 261.546 27.9833 261.312 27.43C261.086 26.8767 260.972 26.22 260.972 25.46C260.972 24.7 261.086 24.0433 261.312 23.49C261.546 22.93 261.872 22.5 262.292 22.2C262.712 21.8933 263.209 21.74 263.782 21.74C264.362 21.74 264.862 21.8933 265.282 22.2C265.702 22.5 266.026 22.9267 266.252 23.48C266.486 24.0333 266.602 24.6933 266.602 25.46C266.602 26.22 266.486 26.8767 266.252 27.43C266.026 27.9833 265.702 28.41 265.282 28.71C264.862 29.01 264.362 29.16 263.782 29.16ZM263.782 28.32C264.396 28.32 264.869 28.0733 265.202 27.58C265.536 27.08 265.702 26.3733 265.702 25.46C265.702 24.8467 265.626 24.3267 265.472 23.9C265.326 23.4667 265.109 23.14 264.822 22.92C264.542 22.6933 264.196 22.58 263.782 22.58C263.376 22.58 263.029 22.6933 262.742 22.92C262.462 23.14 262.246 23.4667 262.092 23.9C261.946 24.3267 261.872 24.8467 261.872 25.46C261.872 26.3733 262.039 27.08 262.372 27.58C262.706 28.0733 263.176 28.32 263.782 28.32Z"
                fill="white"
              />
              <path
                d="M193 64L205.99 71.5V86.5L193 94L180.01 86.5V71.5L193 64Z"
                fill="#E6E6E6"
              />
              <rect
                width="33"
                height="18"
                transform="translate(193 64)"
                fill="#0052FF"
              />
              <path
                d="M199.85 77.9V69H200.59V77.9H199.85ZM200.3 77.16C199.767 77.16 199.3 77.06 198.9 76.86C198.507 76.6533 198.193 76.3733 197.96 76.02C197.727 75.66 197.59 75.2467 197.55 74.78L198.43 74.72C198.477 75.0667 198.577 75.36 198.73 75.6C198.89 75.84 199.1 76.0233 199.36 76.15C199.627 76.27 199.947 76.33 200.32 76.33C200.647 76.33 200.923 76.29 201.15 76.21C201.383 76.1233 201.56 76 201.68 75.84C201.8 75.6733 201.86 75.4733 201.86 75.24C201.86 75.02 201.81 74.8267 201.71 74.66C201.61 74.4933 201.417 74.34 201.13 74.2C200.843 74.06 200.423 73.9233 199.87 73.79C199.337 73.65 198.91 73.5 198.59 73.34C198.27 73.1733 198.04 72.9733 197.9 72.74C197.767 72.5 197.7 72.2067 197.7 71.86C197.7 71.4733 197.793 71.1333 197.98 70.84C198.167 70.54 198.43 70.3067 198.77 70.14C199.117 69.9733 199.53 69.89 200.01 69.89C200.517 69.89 200.953 69.9867 201.32 70.18C201.687 70.3667 201.977 70.6267 202.19 70.96C202.41 71.2933 202.547 71.6733 202.6 72.1L201.71 72.16C201.677 71.88 201.59 71.63 201.45 71.41C201.31 71.19 201.117 71.02 200.87 70.9C200.63 70.7733 200.337 70.71 199.99 70.71C199.557 70.71 199.213 70.8133 198.96 71.02C198.707 71.2267 198.58 71.4967 198.58 71.83C198.58 72.0433 198.63 72.2233 198.73 72.37C198.83 72.51 199.01 72.6333 199.27 72.74C199.537 72.8467 199.913 72.96 200.4 73.08C200.98 73.2267 201.44 73.4 201.78 73.6C202.127 73.7933 202.373 74.0233 202.52 74.29C202.667 74.55 202.74 74.8467 202.74 75.18C202.74 75.58 202.633 75.93 202.42 76.23C202.213 76.5233 201.927 76.7533 201.56 76.92C201.193 77.08 200.773 77.16 200.3 77.16ZM206.099 77.16C205.312 77.16 204.706 76.9767 204.279 76.61C203.852 76.2367 203.622 75.7567 203.589 75.17L204.479 75.11C204.519 75.5433 204.686 75.8533 204.979 76.04C205.279 76.2267 205.652 76.32 206.099 76.32C206.406 76.32 206.689 76.28 206.949 76.2C207.209 76.1133 207.419 75.9767 207.579 75.79C207.739 75.5967 207.819 75.34 207.819 75.02C207.819 74.5467 207.662 74.2 207.349 73.98C207.036 73.76 206.622 73.65 206.109 73.65H205.549V72.81H206.109C206.529 72.81 206.876 72.7267 207.149 72.56C207.429 72.3933 207.569 72.1067 207.569 71.7C207.569 71.3333 207.449 71.0567 207.209 70.87C206.976 70.6767 206.622 70.58 206.149 70.58C205.682 70.58 205.329 70.67 205.089 70.85C204.856 71.03 204.716 71.2767 204.669 71.59L203.769 71.53C203.836 70.9967 204.072 70.5667 204.479 70.24C204.886 69.9067 205.442 69.74 206.149 69.74C206.629 69.74 207.042 69.82 207.389 69.98C207.736 70.1333 208.002 70.3533 208.189 70.64C208.376 70.9267 208.469 71.2667 208.469 71.66C208.469 72.1 208.329 72.4567 208.049 72.73C207.776 72.9967 207.369 73.18 206.829 73.28V73.1C207.409 73.1667 207.869 73.3733 208.209 73.72C208.549 74.0667 208.719 74.5 208.719 75.02C208.719 75.4733 208.606 75.86 208.379 76.18C208.159 76.5 207.852 76.7433 207.459 76.91C207.066 77.0767 206.612 77.16 206.099 77.16ZM211.902 77.16C211.315 77.16 210.835 77.0167 210.462 76.73C210.095 76.4367 209.845 76.07 209.712 75.63L210.622 75.56C210.702 75.8 210.849 75.9867 211.062 76.12C211.275 76.2533 211.555 76.32 211.902 76.32C212.495 76.32 212.949 76.0833 213.262 75.61C213.582 75.13 213.745 74.36 213.752 73.3L213.962 73.34C213.795 73.7867 213.539 74.1333 213.192 74.38C212.845 74.62 212.442 74.74 211.982 74.74C211.522 74.74 211.115 74.6367 210.762 74.43C210.409 74.2233 210.129 73.9333 209.922 73.56C209.722 73.1867 209.622 72.7533 209.622 72.26C209.622 71.74 209.729 71.2933 209.942 70.92C210.155 70.54 210.445 70.25 210.812 70.05C211.185 69.8433 211.612 69.74 212.092 69.74C212.685 69.74 213.169 69.8767 213.542 70.15C213.922 70.4233 214.202 70.8067 214.382 71.3C214.562 71.7867 214.652 72.3633 214.652 73.03C214.652 73.6233 214.605 74.1733 214.512 74.68C214.419 75.18 214.265 75.6167 214.052 75.99C213.839 76.3567 213.555 76.6433 213.202 76.85C212.855 77.0567 212.422 77.16 211.902 77.16ZM212.042 73.89C212.369 73.89 212.655 73.8267 212.902 73.7C213.149 73.5733 213.342 73.39 213.482 73.15C213.629 72.91 213.702 72.62 213.702 72.28C213.702 71.9533 213.635 71.6633 213.502 71.41C213.375 71.15 213.192 70.9467 212.952 70.8C212.712 70.6533 212.425 70.58 212.092 70.58C211.765 70.58 211.485 70.6533 211.252 70.8C211.019 70.94 210.839 71.1367 210.712 71.39C210.585 71.6433 210.522 71.9333 210.522 72.26C210.522 72.5933 210.585 72.8833 210.712 73.13C210.845 73.37 211.025 73.5567 211.252 73.69C211.479 73.8233 211.742 73.89 212.042 73.89ZM218.082 77.16C217.575 77.16 217.122 77.08 216.722 76.92C216.329 76.76 216.019 76.5233 215.792 76.21C215.572 75.8967 215.462 75.51 215.462 75.05C215.462 74.5367 215.615 74.1133 215.922 73.78C216.229 73.44 216.635 73.21 217.142 73.09L217.162 73.29C216.755 73.1767 216.425 72.9933 216.172 72.74C215.925 72.48 215.802 72.13 215.802 71.69C215.802 71.3167 215.895 70.9833 216.082 70.69C216.275 70.3967 216.542 70.1667 216.882 70C217.222 69.8267 217.622 69.74 218.082 69.74C218.542 69.74 218.942 69.8267 219.282 70C219.629 70.1667 219.895 70.3967 220.082 70.69C220.269 70.9833 220.362 71.3167 220.362 71.69C220.362 72.13 220.239 72.48 219.992 72.74C219.745 72.9933 219.415 73.1767 219.002 73.29L219.022 73.09C219.535 73.21 219.942 73.44 220.242 73.78C220.549 74.1133 220.702 74.5367 220.702 75.05C220.702 75.51 220.589 75.8967 220.362 76.21C220.142 76.5233 219.835 76.76 219.442 76.92C219.049 77.08 218.595 77.16 218.082 77.16ZM218.082 76.32C218.609 76.32 219.025 76.2133 219.332 76C219.645 75.78 219.802 75.4467 219.802 75C219.802 74.5867 219.662 74.2567 219.382 74.01C219.109 73.7567 218.675 73.63 218.082 73.63C217.495 73.63 217.062 73.7567 216.782 74.01C216.502 74.2567 216.362 74.5867 216.362 75C216.362 75.4467 216.515 75.78 216.822 76C217.135 76.2133 217.555 76.32 218.082 76.32ZM218.082 72.83C218.522 72.83 218.862 72.7367 219.102 72.55C219.342 72.3567 219.462 72.07 219.462 71.69C219.462 71.35 219.345 71.08 219.112 70.88C218.879 70.68 218.535 70.58 218.082 70.58C217.635 70.58 217.292 70.68 217.052 70.88C216.819 71.08 216.702 71.35 216.702 71.69C216.702 72.07 216.822 72.3567 217.062 72.55C217.302 72.7367 217.642 72.83 218.082 72.83Z"
                fill="white"
              />
              <path
                d="M223 116L235.99 123.5V138.5L223 146L210.01 138.5V123.5L223 116Z"
                fill="#E6E6E6"
              />
              <rect
                width="33"
                height="18"
                transform="translate(223 116)"
                fill="#0052FF"
              />
              <path
                d="M229.85 129.9V121H230.59V129.9H229.85ZM230.3 129.16C229.767 129.16 229.3 129.06 228.9 128.86C228.507 128.653 228.193 128.373 227.96 128.02C227.727 127.66 227.59 127.247 227.55 126.78L228.43 126.72C228.477 127.067 228.577 127.36 228.73 127.6C228.89 127.84 229.1 128.023 229.36 128.15C229.627 128.27 229.947 128.33 230.32 128.33C230.647 128.33 230.923 128.29 231.15 128.21C231.383 128.123 231.56 128 231.68 127.84C231.8 127.673 231.86 127.473 231.86 127.24C231.86 127.02 231.81 126.827 231.71 126.66C231.61 126.493 231.417 126.34 231.13 126.2C230.843 126.06 230.423 125.923 229.87 125.79C229.337 125.65 228.91 125.5 228.59 125.34C228.27 125.173 228.04 124.973 227.9 124.74C227.767 124.5 227.7 124.207 227.7 123.86C227.7 123.473 227.793 123.133 227.98 122.84C228.167 122.54 228.43 122.307 228.77 122.14C229.117 121.973 229.53 121.89 230.01 121.89C230.517 121.89 230.953 121.987 231.32 122.18C231.687 122.367 231.977 122.627 232.19 122.96C232.41 123.293 232.547 123.673 232.6 124.1L231.71 124.16C231.677 123.88 231.59 123.63 231.45 123.41C231.31 123.19 231.117 123.02 230.87 122.9C230.63 122.773 230.337 122.71 229.99 122.71C229.557 122.71 229.213 122.813 228.96 123.02C228.707 123.227 228.58 123.497 228.58 123.83C228.58 124.043 228.63 124.223 228.73 124.37C228.83 124.51 229.01 124.633 229.27 124.74C229.537 124.847 229.913 124.96 230.4 125.08C230.98 125.227 231.44 125.4 231.78 125.6C232.127 125.793 232.373 126.023 232.52 126.29C232.667 126.55 232.74 126.847 232.74 127.18C232.74 127.58 232.633 127.93 232.42 128.23C232.213 128.523 231.927 128.753 231.56 128.92C231.193 129.08 230.773 129.16 230.3 129.16ZM236.999 129V127.46H233.389V126.68L236.939 121.9H237.859V126.62H238.739V127.46H237.859V129H236.999ZM234.429 126.62H236.999V123.22L234.429 126.62ZM242.351 129.16C241.778 129.16 241.281 129.01 240.861 128.71C240.441 128.41 240.115 127.983 239.881 127.43C239.655 126.877 239.541 126.22 239.541 125.46C239.541 124.7 239.655 124.043 239.881 123.49C240.115 122.93 240.441 122.5 240.861 122.2C241.281 121.893 241.778 121.74 242.351 121.74C242.931 121.74 243.431 121.893 243.851 122.2C244.271 122.5 244.595 122.927 244.821 123.48C245.055 124.033 245.171 124.693 245.171 125.46C245.171 126.22 245.055 126.877 244.821 127.43C244.595 127.983 244.271 128.41 243.851 128.71C243.431 129.01 242.931 129.16 242.351 129.16ZM242.351 128.32C242.965 128.32 243.438 128.073 243.771 127.58C244.105 127.08 244.271 126.373 244.271 125.46C244.271 124.847 244.195 124.327 244.041 123.9C243.895 123.467 243.678 123.14 243.391 122.92C243.111 122.693 242.765 122.58 242.351 122.58C241.945 122.58 241.598 122.693 241.311 122.92C241.031 123.14 240.815 123.467 240.661 123.9C240.515 124.327 240.441 124.847 240.441 125.46C240.441 126.373 240.608 127.08 240.941 127.58C241.275 128.073 241.745 128.32 242.351 128.32ZM245.975 129C245.975 128.5 246.051 128.05 246.205 127.65C246.365 127.243 246.641 126.857 247.035 126.49C247.435 126.123 247.988 125.753 248.695 125.38C249.021 125.207 249.285 125.047 249.485 124.9C249.685 124.753 249.831 124.597 249.925 124.43C250.018 124.263 250.065 124.06 250.065 123.82C250.065 123.573 250.011 123.36 249.905 123.18C249.798 122.993 249.638 122.847 249.425 122.74C249.218 122.633 248.958 122.58 248.645 122.58C248.145 122.58 247.748 122.71 247.455 122.97C247.168 123.23 246.988 123.6 246.915 124.08L246.015 124.02C246.095 123.327 246.361 122.773 246.815 122.36C247.268 121.947 247.878 121.74 248.645 121.74C249.131 121.74 249.548 121.827 249.895 122C250.241 122.173 250.505 122.417 250.685 122.73C250.871 123.037 250.965 123.393 250.965 123.8C250.965 124.16 250.905 124.473 250.785 124.74C250.665 125 250.461 125.243 250.175 125.47C249.895 125.697 249.508 125.94 249.015 126.2C248.375 126.54 247.888 126.883 247.555 127.23C247.228 127.577 247.055 127.887 247.035 128.16H250.965V129H245.975Z"
                fill="white"
              />
            </svg>

            <div className="flex flex-col gap-2 items-start justify-start">
              <h3 className="text-base font-medium">DeFi price feeds</h3>
              <p className="text-sm text-muted-foreground max-w-lg leading-[1.5] tracking-[-0.2]">
                Access real-time market data.
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full h-[13.75em] border-b border-l border-r p-4">
            <div className="w-full h-full flex flex-col">
              <svg
                width="293"
                height="100"
                viewBox="0 0 293 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_288_6397)">
                  <mask id="path-1-inside-1_288_6397" fill="white">
                    <path d="M0.665039 0.679199H292.335V21.0303H0.665039V0.679199Z" />
                  </mask>
                  <path
                    d="M2.15537 12.6566V8.65255H0.741794V8.11526H4.11903V8.65255H2.70545V12.6566H2.15537ZM4.25944 12.6566V9.26659H4.73277L4.75196 9.89343C4.87349 9.46488 5.14213 9.26659 5.55789 9.26659H5.89049V9.77829H5.56428C5.05258 9.77829 4.79673 10.0533 4.79673 10.6098V12.6566H4.25944ZM7.21367 12.7334C6.51008 12.7334 6.06874 12.3944 6.06874 11.8123C6.06874 11.2366 6.39495 10.9168 7.13692 10.7761L8.33942 10.5522C8.33942 9.98297 8.07077 9.70154 7.53349 9.70154C7.06016 9.70154 6.79791 9.91901 6.69557 10.3092L6.12631 10.2644C6.25423 9.62478 6.76593 9.18984 7.53349 9.18984C8.40338 9.18984 8.8767 9.71433 8.8767 10.5714V11.9722C8.8767 12.1257 8.92787 12.1833 9.0558 12.1833H9.19012V12.6566C9.15174 12.663 9.06859 12.6694 8.98544 12.6694C8.57608 12.6694 8.39059 12.5095 8.34581 12.1321C8.17951 12.4839 7.71258 12.7334 7.21367 12.7334ZM7.26484 12.26C7.94285 12.26 8.33942 11.8251 8.33942 11.2622V11.0192L7.23926 11.2239C6.77873 11.307 6.63161 11.4797 6.63161 11.7611C6.63161 12.081 6.86827 12.26 7.26484 12.26ZM9.66904 12.6566V9.26659H10.1616L10.1743 9.87424C10.3534 9.40731 10.75 9.18984 11.2169 9.18984C11.9909 9.18984 12.3619 9.7591 12.3619 10.4755V12.6566H11.8246V10.629C11.8246 10.0022 11.6135 9.66316 11.1018 9.66316C10.5773 9.66316 10.2063 10.0022 10.2063 10.629V12.6566H9.66904ZM14.4172 12.7334C13.509 12.7334 13.0036 12.2537 12.9525 11.5884L13.5153 11.5501C13.5793 11.9594 13.8416 12.2217 14.4172 12.2217C14.8778 12.2217 15.1784 12.081 15.1784 11.7483C15.1784 11.4797 15.0441 11.3646 14.3149 11.2366C13.3427 11.0639 13.0356 10.7633 13.0356 10.226C13.0356 9.62478 13.4962 9.18984 14.3149 9.18984C15.14 9.18984 15.5749 9.68875 15.6773 10.2772L15.1144 10.3156C15.0377 9.95739 14.769 9.70154 14.3085 9.70154C13.8224 9.70154 13.5985 9.91262 13.5985 10.2004C13.5985 10.5331 13.816 10.661 14.4172 10.7633C15.4534 10.9424 15.7413 11.2111 15.7413 11.7483C15.7413 12.3752 15.1656 12.7334 14.4172 12.7334ZM17.3488 12.7334C16.6452 12.7334 16.2038 12.3944 16.2038 11.8123C16.2038 11.2366 16.53 10.9168 17.272 10.7761L18.4745 10.5522C18.4745 9.98297 18.2059 9.70154 17.6686 9.70154C17.1953 9.70154 16.933 9.91901 16.8307 10.3092L16.2614 10.2644C16.3893 9.62478 16.901 9.18984 17.6686 9.18984C18.5385 9.18984 19.0118 9.71433 19.0118 10.5714V11.9722C19.0118 12.1257 19.063 12.1833 19.1909 12.1833H19.3252V12.6566C19.2868 12.663 19.2037 12.6694 19.1205 12.6694C18.7112 12.6694 18.5257 12.5095 18.4809 12.1321C18.3146 12.4839 17.8477 12.7334 17.3488 12.7334ZM17.3999 12.26C18.0779 12.26 18.4745 11.8251 18.4745 11.2622V11.0192L17.3744 11.2239C16.9138 11.307 16.7667 11.4797 16.7667 11.7611C16.7667 12.081 17.0034 12.26 17.3999 12.26ZM21.1157 12.7334C20.169 12.7334 19.5614 12.0362 19.5614 10.9616C19.5614 9.88703 20.169 9.18984 21.1157 9.18984C21.896 9.18984 22.4397 9.61199 22.5548 10.3668L21.992 10.4051C21.9152 9.95739 21.5762 9.70154 21.1157 9.70154C20.4888 9.70154 20.1242 10.1749 20.1242 10.9616C20.1242 11.7483 20.4888 12.2217 21.1157 12.2217C21.5762 12.2217 21.9152 11.9658 21.992 11.4541L22.5548 11.4925C22.4397 12.2473 21.896 12.7334 21.1157 12.7334ZM24.2027 12.6566C23.5886 12.6566 23.3008 12.388 23.3008 11.7867V9.73992H22.8019V9.26659H23.3008V8.47345H23.8381V9.26659H24.74V9.73992H23.8381V11.7739C23.8381 12.081 23.9724 12.1833 24.2538 12.1833H24.74V12.6566H24.2027ZM25.2884 8.7357V8.10887H25.8513V8.7357H25.2884ZM25.3012 12.6566V9.26659H25.8385V12.6566H25.3012ZM27.9964 12.7334C27.0562 12.7334 26.4421 12.0426 26.4421 10.9616C26.4421 9.88063 27.0562 9.18984 27.9964 9.18984C28.9303 9.18984 29.5443 9.88063 29.5443 10.9616C29.5443 12.0426 28.9303 12.7334 27.9964 12.7334ZM27.9964 12.2217C28.6168 12.2217 28.9814 11.7483 28.9814 10.9616C28.9814 10.1749 28.6168 9.70154 27.9964 9.70154C27.3696 9.70154 27.005 10.1749 27.005 10.9616C27.005 11.7483 27.3696 12.2217 27.9964 12.2217ZM30.1486 12.6566V9.26659H30.6411L30.6539 9.87424C30.833 9.40731 31.2296 9.18984 31.6965 9.18984C32.4705 9.18984 32.8414 9.7591 32.8414 10.4755V12.6566H32.3041V10.629C32.3041 10.0022 32.0931 9.66316 31.5814 9.66316C31.0569 9.66316 30.6859 10.0022 30.6859 10.629V12.6566H30.1486Z"
                    fill="#757575"
                  />
                  <path
                    d="M189.263 12.3547V9.3971C189.263 9.19583 189.321 9.03379 189.437 8.91098C189.553 8.78476 189.734 8.72165 189.98 8.72165H190.41V9.10031H190.01C189.905 9.10031 189.825 9.12931 189.77 9.1873C189.719 9.24529 189.693 9.32546 189.693 9.4278V12.3547H189.263ZM188.895 10.0214V9.64272H190.374V10.0214H188.895ZM190.759 12.3547V9.64272H191.137L191.158 10.3284L191.117 10.313C191.151 10.0811 191.224 9.91221 191.337 9.80646C191.453 9.6973 191.607 9.64272 191.798 9.64272H192.064V10.0521H191.803C191.666 10.0521 191.552 10.0777 191.46 10.1288C191.371 10.1766 191.303 10.2499 191.255 10.3489C191.211 10.4444 191.189 10.5672 191.189 10.7173V12.3547H190.759ZM193.45 12.4161C193.201 12.4161 192.982 12.3581 192.795 12.2422C192.607 12.1262 192.462 11.9624 192.36 11.7509C192.257 11.536 192.206 11.2853 192.206 10.9987C192.206 10.7088 192.257 10.458 192.36 10.2465C192.462 10.035 192.607 9.87128 192.795 9.75529C192.982 9.63931 193.201 9.58131 193.45 9.58131C193.699 9.58131 193.915 9.63931 194.1 9.75529C194.287 9.87128 194.432 10.035 194.535 10.2465C194.637 10.458 194.688 10.7088 194.688 10.9987C194.688 11.2853 194.637 11.536 194.535 11.7509C194.432 11.9624 194.287 12.1262 194.1 12.2422C193.915 12.3581 193.699 12.4161 193.45 12.4161ZM193.45 12.0068C193.699 12.0068 193.891 11.9181 194.028 11.7407C194.168 11.5599 194.238 11.3126 194.238 10.9987C194.238 10.6849 194.168 10.4393 194.028 10.2619C193.891 10.0811 193.699 9.99067 193.45 9.99067C193.201 9.99067 193.006 10.0811 192.866 10.2619C192.726 10.4393 192.657 10.6849 192.657 10.9987C192.657 11.3126 192.726 11.5599 192.866 11.7407C193.006 11.9181 193.201 12.0068 193.45 12.0068ZM195.171 12.3547V9.64272H195.565L195.581 10.3284L195.519 10.3079C195.55 10.1578 195.603 10.0299 195.678 9.92415C195.756 9.81499 195.852 9.73141 195.965 9.67342C196.077 9.61201 196.202 9.58131 196.338 9.58131C196.574 9.58131 196.765 9.64613 196.911 9.77576C197.061 9.90539 197.155 10.0862 197.193 10.3182L197.111 10.313C197.138 10.1561 197.188 10.0248 197.259 9.91904C197.334 9.80987 197.43 9.72629 197.546 9.6683C197.662 9.61031 197.795 9.58131 197.945 9.58131C198.139 9.58131 198.303 9.62225 198.436 9.70412C198.569 9.78258 198.67 9.89857 198.738 10.0521C198.806 10.2056 198.84 10.3915 198.84 10.6098V12.3547H198.411V10.7019C198.411 10.4563 198.363 10.2721 198.267 10.1493C198.172 10.0231 198.03 9.95997 197.843 9.95997C197.716 9.95997 197.605 9.99067 197.51 10.0521C197.418 10.1135 197.346 10.2022 197.295 10.3182C197.244 10.4307 197.218 10.5689 197.218 10.7326V12.3547H196.788V10.7326C196.788 10.4904 196.746 10.3011 196.661 10.1647C196.575 10.0282 196.432 9.95997 196.231 9.95997C196.104 9.95997 195.994 9.99067 195.898 10.0521C195.806 10.1135 195.733 10.2022 195.678 10.3182C195.627 10.4341 195.601 10.5723 195.601 10.7326V12.3547H195.171Z"
                    fill="#AEAEAE"
                  />
                  <rect
                    width="38.117"
                    height="10.117"
                    transform="translate(203.426 5.7962)"
                    fill="#0052FF"
                  />
                  <path
                    d="M206.967 12.3547C206.967 11.9795 207.018 11.6059 207.12 11.2341C207.226 10.8589 207.376 10.4956 207.571 10.1442C207.765 9.79282 207.997 9.46192 208.267 9.15148H206.291V8.72165H208.748V9.12078C208.519 9.38004 208.321 9.6376 208.154 9.89345C207.99 10.1493 207.855 10.4086 207.75 10.6712C207.644 10.9305 207.566 11.2 207.514 11.4797C207.463 11.756 207.438 12.0477 207.438 12.3547H206.967ZM210.475 12.4366C210.24 12.4366 210.033 12.394 209.856 12.3087C209.682 12.2234 209.542 12.104 209.436 11.9505C209.334 11.797 209.274 11.6196 209.257 11.4183L209.718 11.3876C209.745 11.5923 209.825 11.7475 209.958 11.8533C210.095 11.9556 210.267 12.0068 210.475 12.0068C210.711 12.0068 210.898 11.9351 211.038 11.7919C211.181 11.6452 211.253 11.4439 211.253 11.1881C211.253 11.0175 211.222 10.8708 211.161 10.748C211.099 10.6218 211.011 10.5263 210.895 10.4614C210.782 10.3932 210.646 10.3591 210.485 10.3591C210.342 10.3591 210.204 10.3949 210.071 10.4666C209.941 10.5348 209.847 10.6337 209.789 10.7633H209.319L209.559 8.72165H211.493V9.15148H209.963L209.8 10.4921L209.718 10.4103C209.772 10.3045 209.844 10.2175 209.933 10.1493C210.021 10.0811 210.119 10.0299 210.224 9.99579C210.334 9.95827 210.441 9.9395 210.547 9.9395C210.779 9.9395 210.982 9.99409 211.156 10.1032C211.333 10.209 211.47 10.3557 211.565 10.5433C211.664 10.7309 211.713 10.9459 211.713 11.1881C211.713 11.4303 211.661 11.6469 211.555 11.8379C211.449 12.0255 211.302 12.1722 211.115 12.278C210.931 12.3837 210.717 12.4366 210.475 12.4366ZM214.577 13.1223H214.147V11.7714L214.209 11.843C214.178 11.959 214.12 12.0597 214.035 12.1449C213.953 12.2302 213.85 12.2967 213.728 12.3445C213.608 12.3923 213.479 12.4161 213.339 12.4161C213.069 12.4161 212.847 12.3496 212.673 12.2166C212.503 12.0835 212.377 11.9096 212.295 11.6946C212.213 11.4797 212.172 11.2478 212.172 10.9987C212.172 10.7497 212.213 10.5177 212.295 10.3028C212.377 10.0879 212.503 9.91392 212.673 9.78088C212.847 9.64783 213.069 9.58131 213.339 9.58131C213.55 9.58131 213.734 9.63589 213.891 9.74506C214.052 9.85422 214.164 10.0146 214.229 10.2261L214.168 10.2568L214.178 9.64272H214.577V13.1223ZM213.38 12.0068C213.54 12.0068 213.676 11.9693 213.789 11.8942C213.905 11.8192 213.994 11.7066 214.055 11.5565C214.116 11.4064 214.147 11.2205 214.147 10.9987C214.147 10.777 214.115 10.5911 214.05 10.441C213.989 10.2909 213.9 10.1783 213.784 10.1032C213.671 10.0282 213.537 9.99067 213.38 9.99067C213.144 9.99067 212.958 10.0794 212.822 10.2568C212.689 10.4341 212.622 10.6815 212.622 10.9987C212.622 11.316 212.689 11.5633 212.822 11.7407C212.958 11.9181 213.144 12.0068 213.38 12.0068ZM215.343 12.3547V8.72165H216.448C216.7 8.72165 216.92 8.766 217.108 8.8547C217.296 8.94339 217.44 9.07132 217.543 9.23847C217.645 9.40222 217.696 9.60007 217.696 9.83205C217.696 10.064 217.645 10.2636 217.543 10.4307C217.44 10.5945 217.296 10.7207 217.108 10.8094C216.92 10.8981 216.7 10.9424 216.448 10.9424H215.783V12.3547H215.343ZM215.783 10.5126H216.397C216.683 10.5126 216.895 10.4546 217.031 10.3386C217.168 10.2192 217.236 10.0504 217.236 9.83205C217.236 9.61031 217.168 9.44145 217.031 9.32546C216.895 9.20948 216.683 9.15148 216.397 9.15148H215.783V10.5126ZM219.65 12.3547V11.7305H220.285V12.3547H219.65ZM221.927 12.3547V11.7305H222.562V12.3547H221.927ZM224.199 12.3547V11.7305H224.834V12.3547H224.199ZM228.281 12.4366C228.042 12.4366 227.825 12.3957 227.631 12.3138C227.436 12.2319 227.283 12.1108 227.17 11.9505C227.058 11.7902 227.001 11.5923 227.001 11.3569C227.001 11.0942 227.08 10.8776 227.237 10.7071C227.394 10.5331 227.602 10.4154 227.861 10.354L227.871 10.4563C227.663 10.3983 227.494 10.3045 227.365 10.1749C227.238 10.0418 227.175 9.86275 227.175 9.6376C227.175 9.44656 227.223 9.276 227.319 9.1259C227.414 8.9758 227.544 8.85811 227.707 8.77282C227.875 8.68413 228.066 8.63978 228.281 8.63978C228.495 8.63978 228.687 8.68413 228.854 8.77282C229.021 8.85811 229.15 8.9758 229.243 9.1259C229.338 9.276 229.386 9.44656 229.386 9.6376C229.386 9.86275 229.323 10.0418 229.197 10.1749C229.07 10.3045 228.901 10.3983 228.69 10.4563L228.7 10.354C228.963 10.4154 229.171 10.5331 229.324 10.7071C229.481 10.8776 229.56 11.0942 229.56 11.3569C229.56 11.5923 229.504 11.7902 229.391 11.9505C229.278 12.1108 229.125 12.2319 228.93 12.3138C228.739 12.3957 228.523 12.4366 228.281 12.4366ZM228.281 12.0068C228.519 12.0068 228.716 11.9522 228.869 11.843C229.023 11.7305 229.099 11.5599 229.099 11.3313C229.099 11.1198 229.031 10.951 228.895 10.8247C228.758 10.6951 228.553 10.6303 228.281 10.6303C228.011 10.6303 227.806 10.6951 227.667 10.8247C227.53 10.951 227.462 11.1198 227.462 11.3313C227.462 11.5599 227.539 11.7305 227.692 11.843C227.846 11.9522 228.042 12.0068 228.281 12.0068ZM228.281 10.2209C228.475 10.2209 228.63 10.1732 228.746 10.0777C228.866 9.97873 228.925 9.83205 228.925 9.6376C228.925 9.46362 228.867 9.32546 228.751 9.22312C228.639 9.12078 228.482 9.06961 228.281 9.06961C228.083 9.06961 227.926 9.12078 227.81 9.22312C227.694 9.32546 227.636 9.46362 227.636 9.6376C227.636 9.83205 227.694 9.97873 227.81 10.0777C227.929 10.1732 228.086 10.2209 228.281 10.2209ZM231.257 12.4366C230.984 12.4366 230.75 12.3752 230.556 12.2524C230.365 12.1262 230.218 11.942 230.116 11.6998C230.017 11.4576 229.967 11.1642 229.967 10.8196C229.967 10.5194 229.991 10.238 230.039 9.97532C230.09 9.71265 230.17 9.48238 230.279 9.28453C230.392 9.08326 230.539 8.92633 230.719 8.81376C230.904 8.69777 231.13 8.63978 231.4 8.63978C231.615 8.63978 231.797 8.6756 231.947 8.74724C232.098 8.81888 232.219 8.91951 232.311 9.04914C232.406 9.17877 232.478 9.32887 232.526 9.49944L232.065 9.54038C232.024 9.3971 231.953 9.28282 231.85 9.19754C231.751 9.11225 231.601 9.06961 231.4 9.06961C231.199 9.06961 231.026 9.1276 230.883 9.24359C230.74 9.35616 230.627 9.52673 230.545 9.75529C230.467 9.98385 230.424 10.2704 230.417 10.615L230.325 10.5945C230.363 10.4717 230.428 10.3591 230.52 10.2568C230.615 10.151 230.731 10.0674 230.868 10.006C231.008 9.94121 231.165 9.9088 231.339 9.9088C231.577 9.9088 231.785 9.95997 231.963 10.0623C232.14 10.1647 232.278 10.3096 232.377 10.4973C232.476 10.6815 232.526 10.8981 232.526 11.1471C232.526 11.4132 232.471 11.6435 232.362 11.8379C232.256 12.029 232.108 12.1773 231.917 12.2831C231.729 12.3854 231.509 12.4366 231.257 12.4366ZM231.267 12.0068C231.506 12.0068 231.698 11.9317 231.845 11.7816C231.992 11.6281 232.065 11.4166 232.065 11.1471C232.065 10.8947 231.995 10.6951 231.855 10.5484C231.719 10.4017 231.536 10.3284 231.308 10.3284C231.144 10.3284 230.997 10.3625 230.868 10.4307C230.738 10.4956 230.636 10.5894 230.561 10.7122C230.486 10.835 230.448 10.98 230.448 11.1471C230.448 11.3143 230.481 11.4627 230.545 11.5923C230.614 11.7219 230.709 11.8243 230.832 11.8993C230.955 11.971 231.1 12.0068 231.267 12.0068ZM233.087 13.1223V9.64272H233.486L233.496 10.2568L233.435 10.2261C233.503 10.0146 233.615 9.85422 233.772 9.74506C233.933 9.63589 234.117 9.58131 234.325 9.58131C234.594 9.58131 234.814 9.64783 234.985 9.78088C235.159 9.91392 235.287 10.0879 235.369 10.3028C235.451 10.5177 235.492 10.7497 235.492 10.9987C235.492 11.2478 235.451 11.4797 235.369 11.6946C235.287 11.9096 235.159 12.0835 234.985 12.2166C234.814 12.3496 234.594 12.4161 234.325 12.4161C234.185 12.4161 234.054 12.3923 233.931 12.3445C233.811 12.2967 233.709 12.2302 233.624 12.1449C233.542 12.0597 233.486 11.959 233.455 11.843L233.516 11.7714V13.1223H233.087ZM234.284 12.0068C234.519 12.0068 234.704 11.9181 234.837 11.7407C234.973 11.5633 235.041 11.316 235.041 10.9987C235.041 10.6815 234.973 10.4341 234.837 10.2568C234.704 10.0794 234.519 9.99067 234.284 9.99067C234.127 9.99067 233.991 10.0282 233.875 10.1032C233.762 10.1783 233.673 10.2909 233.609 10.441C233.547 10.5911 233.516 10.777 233.516 10.9987C233.516 11.2205 233.547 11.4064 233.609 11.5565C233.67 11.7066 233.759 11.8192 233.875 11.8942C233.991 11.9693 234.127 12.0068 234.284 12.0068ZM237.009 12.4161C236.771 12.4161 236.564 12.3581 236.39 12.2422C236.216 12.1262 236.081 11.9624 235.986 11.7509C235.894 11.5394 235.848 11.2887 235.848 10.9987C235.848 10.7088 235.894 10.458 235.986 10.2465C236.081 10.035 236.216 9.87128 236.39 9.75529C236.564 9.63931 236.771 9.58131 237.009 9.58131C237.2 9.58131 237.368 9.62737 237.511 9.71947C237.654 9.80817 237.758 9.9088 237.823 10.0214V8.72165H238.253V12.3547H237.864L237.849 11.9454C237.773 12.0921 237.663 12.208 237.516 12.2933C237.369 12.3752 237.2 12.4161 237.009 12.4161ZM237.035 12.0068C237.199 12.0068 237.339 11.9658 237.455 11.884C237.574 11.8021 237.664 11.6861 237.726 11.536C237.791 11.3825 237.823 11.2034 237.823 10.9987C237.823 10.7872 237.791 10.6064 237.726 10.4563C237.664 10.3062 237.574 10.1919 237.455 10.1135C237.335 10.0316 237.192 9.99067 237.025 9.99067C236.803 9.99067 236.626 10.0811 236.493 10.2619C236.363 10.4393 236.298 10.6849 236.298 10.9987C236.298 11.3092 236.363 11.5548 236.493 11.7356C236.626 11.9164 236.806 12.0068 237.035 12.0068Z"
                    fill="white"
                  />
                  <path
                    d="M246.783 12.3547C246.537 12.3547 246.355 12.2984 246.235 12.1859C246.119 12.0733 246.061 11.8976 246.061 11.6588V9.00821H246.491V11.6486C246.491 11.7714 246.519 11.8567 246.573 11.9044C246.628 11.9522 246.711 11.9761 246.824 11.9761H247.213V12.3547H246.783ZM245.662 10.0214V9.64272H247.213V10.0214H245.662ZM248.671 12.4161C248.422 12.4161 248.204 12.3581 248.016 12.2422C247.828 12.1262 247.683 11.9624 247.581 11.7509C247.479 11.536 247.428 11.2853 247.428 10.9987C247.428 10.7088 247.479 10.458 247.581 10.2465C247.683 10.035 247.828 9.87128 248.016 9.75529C248.204 9.63931 248.422 9.58131 248.671 9.58131C248.92 9.58131 249.137 9.63931 249.321 9.75529C249.508 9.87128 249.653 10.035 249.756 10.2465C249.858 10.458 249.909 10.7088 249.909 10.9987C249.909 11.2853 249.858 11.536 249.756 11.7509C249.653 11.9624 249.508 12.1262 249.321 12.2422C249.137 12.3581 248.92 12.4161 248.671 12.4161ZM248.671 12.0068C248.92 12.0068 249.113 11.9181 249.249 11.7407C249.389 11.5599 249.459 11.3126 249.459 10.9987C249.459 10.6849 249.389 10.4393 249.249 10.2619C249.113 10.0811 248.92 9.99067 248.671 9.99067C248.422 9.99067 248.228 10.0811 248.088 10.2619C247.948 10.4393 247.878 10.6849 247.878 10.9987C247.878 11.3126 247.948 11.5599 248.088 11.7407C248.228 11.9181 248.422 12.0068 248.671 12.0068Z"
                    fill="#AEAEAE"
                  />
                  <rect
                    width="38.117"
                    height="10.117"
                    transform="translate(254.218 5.7962)"
                    fill="#0052FF"
                  />
                  <path
                    d="M258.322 12.4366C258.049 12.4366 257.815 12.3752 257.621 12.2524C257.43 12.1262 257.283 11.942 257.181 11.6998C257.082 11.4576 257.032 11.1642 257.032 10.8196C257.032 10.5194 257.056 10.238 257.104 9.97532C257.155 9.71265 257.235 9.48238 257.344 9.28453C257.457 9.08326 257.604 8.92633 257.784 8.81376C257.969 8.69777 258.195 8.63978 258.465 8.63978C258.68 8.63978 258.862 8.6756 259.013 8.74724C259.163 8.81888 259.284 8.91951 259.376 9.04914C259.471 9.17877 259.543 9.32887 259.591 9.49944L259.13 9.54038C259.089 9.3971 259.018 9.28282 258.915 9.19754C258.816 9.11225 258.666 9.06961 258.465 9.06961C258.264 9.06961 258.091 9.1276 257.948 9.24359C257.805 9.35616 257.692 9.52673 257.61 9.75529C257.532 9.98385 257.489 10.2704 257.483 10.615L257.39 10.5945C257.428 10.4717 257.493 10.3591 257.585 10.2568C257.68 10.151 257.796 10.0674 257.933 10.006C258.073 9.94121 258.23 9.9088 258.404 9.9088C258.642 9.9088 258.85 9.95997 259.028 10.0623C259.205 10.1647 259.343 10.3096 259.442 10.4973C259.541 10.6815 259.591 10.8981 259.591 11.1471C259.591 11.4132 259.536 11.6435 259.427 11.8379C259.321 12.029 259.173 12.1773 258.982 12.2831C258.794 12.3854 258.574 12.4366 258.322 12.4366ZM258.332 12.0068C258.571 12.0068 258.763 11.9317 258.91 11.7816C259.057 11.6281 259.13 11.4166 259.13 11.1471C259.13 10.8947 259.06 10.6951 258.92 10.5484C258.784 10.4017 258.601 10.3284 258.373 10.3284C258.209 10.3284 258.062 10.3625 257.933 10.4307C257.803 10.4956 257.701 10.5894 257.626 10.7122C257.551 10.835 257.513 10.98 257.513 11.1471C257.513 11.3143 257.546 11.4627 257.61 11.5923C257.679 11.7219 257.774 11.8243 257.897 11.8993C258.02 11.971 258.165 12.0068 258.332 12.0068ZM261.242 12.3547V9.64272H261.671V12.3547H261.242ZM260.152 12.3547V11.9761H262.608V12.3547H260.152ZM260.203 10.0214V9.64272H261.671V10.0214H260.203ZM261.201 9.218V8.71654H261.651V9.218H261.201ZM262.841 12.3547L263.946 8.72165H264.54L265.645 12.3547H265.175L264.243 9.12078L263.312 12.3547H262.841ZM263.399 11.3211L263.552 10.8913H264.934L265.088 11.3211H263.399ZM266.923 12.3547L265.827 8.72165H266.298L267.27 12.0682H267.148L268.12 8.72165H268.591L267.496 12.3547H266.923ZM270.442 12.3547V11.7305H271.077V12.3547H270.442ZM272.719 12.3547V11.7305H273.354V12.3547H272.719ZM274.991 12.3547V11.7305H275.626V12.3547H274.991ZM277.957 12.3547V11.9249L279.676 10.0214H278.008V9.64272H280.147V10.0725L278.428 11.9761H280.188V12.3547H277.957ZM282.038 12.4161C281.789 12.4161 281.571 12.3581 281.383 12.2422C281.199 12.1262 281.056 11.9624 280.954 11.7509C280.851 11.536 280.8 11.2853 280.8 10.9987C280.8 10.7088 280.851 10.458 280.954 10.2465C281.056 10.035 281.199 9.87128 281.383 9.75529C281.571 9.63931 281.789 9.58131 282.038 9.58131C282.287 9.58131 282.504 9.63931 282.688 9.75529C282.876 9.87128 283.021 10.035 283.123 10.2465C283.226 10.458 283.277 10.7088 283.277 10.9987C283.277 11.2853 283.226 11.536 283.123 11.7509C283.021 11.9624 282.876 12.1262 282.688 12.2422C282.504 12.3581 282.287 12.4161 282.038 12.4161ZM282.038 12.0068C282.287 12.0068 282.48 11.9181 282.617 11.7407C282.757 11.5599 282.826 11.3126 282.826 10.9987C282.826 10.6849 282.757 10.4393 282.617 10.2619C282.48 10.0811 282.287 9.99067 282.038 9.99067C281.789 9.99067 281.595 10.0811 281.455 10.2619C281.319 10.4393 281.25 10.6849 281.25 10.9987C281.25 11.3126 281.319 11.5599 281.455 11.7407C281.595 11.9181 281.789 12.0068 282.038 12.0068ZM284.815 12.4161C284.545 12.4161 284.331 12.3257 284.17 12.1449C284.01 11.9607 283.93 11.7083 283.93 11.3876V9.64272H284.36V11.2699C284.36 11.5326 284.406 11.727 284.498 11.8533C284.593 11.9761 284.738 12.0375 284.933 12.0375C285.144 12.0375 285.311 11.9693 285.434 11.8328C285.557 11.6929 285.618 11.5019 285.618 11.2597V9.64272H286.048V12.3547H285.639V11.6844L285.705 11.7202C285.651 11.942 285.547 12.1142 285.393 12.237C285.24 12.3564 285.047 12.4161 284.815 12.4161ZM287.96 12.4366C287.704 12.4366 287.476 12.3667 287.274 12.2268C287.076 12.0835 286.919 11.872 286.804 11.5923C286.688 11.3092 286.63 10.9595 286.63 10.5433C286.63 10.151 286.682 9.81328 286.788 9.53014C286.897 9.247 287.053 9.02867 287.254 8.87516C287.455 8.71824 287.697 8.63978 287.98 8.63978C288.202 8.63978 288.398 8.68925 288.569 8.78817C288.743 8.8871 288.888 9.02526 289.004 9.20265C289.12 9.37663 289.203 9.5779 289.255 9.80646L288.794 9.83716C288.736 9.61201 288.639 9.4278 288.502 9.28453C288.369 9.14125 288.195 9.06961 287.98 9.06961C287.793 9.06961 287.632 9.1276 287.499 9.24359C287.366 9.35616 287.264 9.52332 287.192 9.74506C287.124 9.96338 287.09 10.2295 287.09 10.5433C287.09 10.8537 287.126 11.1181 287.198 11.3364C287.269 11.5548 287.371 11.7219 287.505 11.8379C287.641 11.9505 287.806 12.0068 288.001 12.0068C288.175 12.0068 288.323 11.9624 288.446 11.8737C288.572 11.7816 288.671 11.6554 288.743 11.4951C288.814 11.3313 288.854 11.1454 288.861 10.9373H287.991V10.5177H289.27V12.3547H288.861L288.84 11.4951L288.963 11.536C288.915 11.71 288.849 11.8652 288.763 12.0017C288.681 12.1381 288.574 12.2456 288.441 12.324C288.311 12.3991 288.151 12.4366 287.96 12.4366Z"
                    fill="white"
                  />
                </g>
                <path
                  d="M292.335 21.0303V20.7104H0.665039V21.0303V21.3501H292.335V21.0303Z"
                  fill="#CACACA"
                  mask="url(#path-1-inside-1_288_6397)"
                />
                <g clipPath="url(#clip1_288_6397)">
                  <mask id="path-8-inside-2_288_6397" fill="white">
                    <path d="M0.665039 23.5887H292.335V43.9398H0.665039V23.5887Z" />
                  </mask>
                  <path
                    d="M2.81419 35.6685C2.46452 35.6685 2.15963 35.6024 1.89952 35.4702C1.6394 35.338 1.43259 35.1568 1.27908 34.9265C1.12983 34.692 1.04242 34.4212 1.01683 34.1142L1.5925 34.0758C1.62235 34.3018 1.68844 34.4937 1.79078 34.6515C1.89312 34.8093 2.02958 34.9287 2.20014 35.0097C2.37498 35.0907 2.58392 35.1312 2.82698 35.1312C3.04019 35.1312 3.22142 35.1035 3.37066 35.0481C3.51991 34.9926 3.63291 34.9116 3.70966 34.805C3.79068 34.6984 3.83119 34.5683 3.83119 34.4148C3.83119 34.2741 3.79708 34.1505 3.72885 34.0438C3.66489 33.933 3.5391 33.8328 3.35147 33.7432C3.16811 33.6494 2.89521 33.5577 2.53275 33.4682C2.18309 33.3786 1.90378 33.2806 1.69484 33.174C1.49016 33.0674 1.34091 32.9373 1.2471 32.7838C1.15755 32.6303 1.11278 32.4405 1.11278 32.2145C1.11278 31.9587 1.17248 31.7348 1.29187 31.5429C1.41554 31.3468 1.59037 31.1954 1.81637 31.0888C2.04237 30.9779 2.31101 30.9225 2.6223 30.9225C2.9549 30.9225 3.2406 30.9864 3.4794 31.1144C3.71819 31.238 3.90795 31.4086 4.04867 31.6261C4.18939 31.8435 4.2768 32.0909 4.31091 32.368L3.73525 32.4064C3.70966 32.223 3.64997 32.061 3.55615 31.9203C3.46661 31.7753 3.34295 31.6623 3.18517 31.5813C3.0274 31.5003 2.83551 31.4598 2.60951 31.4598C2.32807 31.4598 2.1042 31.528 1.9379 31.6644C1.77159 31.7966 1.68844 31.9715 1.68844 32.1889C1.68844 32.3296 1.72042 32.4469 1.78439 32.5407C1.85261 32.6303 1.97201 32.7113 2.14258 32.7838C2.31315 32.852 2.55834 32.9266 2.87815 33.0077C3.25766 33.1015 3.55829 33.2145 3.78002 33.3467C4.00603 33.4746 4.16593 33.6238 4.25974 33.7944C4.35782 33.965 4.40686 34.159 4.40686 34.3765C4.40686 34.6408 4.33863 34.8711 4.20218 35.0673C4.06572 35.2591 3.8781 35.4084 3.63931 35.515C3.40051 35.6173 3.12547 35.6685 2.81419 35.6685ZM5.14018 35.5662V32.1761H5.63269L5.65188 33.0332L5.57513 33.0077C5.6135 32.82 5.6796 32.6601 5.77341 32.5279C5.87149 32.3915 5.99089 32.287 6.1316 32.2145C6.27232 32.1378 6.42796 32.0994 6.59853 32.0994C6.89276 32.0994 7.13155 32.1804 7.31491 32.3424C7.50254 32.5045 7.6198 32.7305 7.66671 33.0204L7.56437 33.014C7.59848 32.8179 7.66031 32.6537 7.74986 32.5215C7.84367 32.3851 7.96307 32.2806 8.10805 32.2081C8.25303 32.1356 8.41934 32.0994 8.60696 32.0994C8.85002 32.0994 9.0547 32.1506 9.221 32.2529C9.38731 32.351 9.5131 32.496 9.59838 32.6878C9.68367 32.8797 9.72631 33.1121 9.72631 33.385V35.5662H9.18902V33.5002C9.18902 33.1931 9.12932 32.9629 9.00993 32.8094C8.89053 32.6516 8.71356 32.5727 8.47904 32.5727C8.32126 32.5727 8.18267 32.6111 8.06328 32.6878C7.94814 32.7646 7.8586 32.8755 7.79463 33.0204C7.73067 33.1612 7.69869 33.3339 7.69869 33.5385V35.5662H7.1614V33.5385C7.1614 33.2358 7.1081 32.9991 7.0015 32.8286C6.89489 32.658 6.7158 32.5727 6.46421 32.5727C6.30643 32.5727 6.16785 32.6111 6.04845 32.6878C5.93332 32.7646 5.84164 32.8755 5.77341 33.0204C5.70945 33.1654 5.67747 33.3381 5.67747 33.5385V35.5662H5.14018ZM11.4737 35.6429C11.124 35.6429 10.8447 35.5619 10.6358 35.3999C10.4311 35.2378 10.3288 35.0118 10.3288 34.7219C10.3288 34.4319 10.414 34.2038 10.5846 34.0375C10.7552 33.8711 11.026 33.7539 11.3969 33.6857L12.5994 33.4618C12.5994 33.1761 12.5312 32.9629 12.3948 32.8222C12.2626 32.6814 12.0621 32.6111 11.7935 32.6111C11.559 32.6111 11.3735 32.6644 11.237 32.771C11.1006 32.8733 11.0068 33.0226 10.9556 33.2187L10.3863 33.174C10.4503 32.8541 10.6038 32.5962 10.8469 32.4C11.0942 32.1996 11.4097 32.0994 11.7935 32.0994C12.2284 32.0994 12.5611 32.223 12.7913 32.4704C13.0216 32.7134 13.1367 33.0503 13.1367 33.481V34.8818C13.1367 34.9585 13.1495 35.014 13.1751 35.0481C13.2049 35.0779 13.2519 35.0928 13.3158 35.0928H13.4501V35.5662C13.4331 35.5704 13.4054 35.5726 13.367 35.5726C13.3286 35.5768 13.2881 35.579 13.2455 35.579C13.0919 35.579 12.9662 35.5555 12.8681 35.5086C12.7743 35.4574 12.706 35.3807 12.6634 35.2783C12.6208 35.1717 12.5994 35.0331 12.5994 34.8626L12.6634 34.8754C12.6335 35.0203 12.5611 35.1525 12.4459 35.2719C12.3308 35.3871 12.1879 35.4787 12.0174 35.547C11.8468 35.6109 11.6656 35.6429 11.4737 35.6429ZM11.5249 35.1696C11.7509 35.1696 11.9427 35.127 12.1005 35.0417C12.2626 34.9521 12.3862 34.8327 12.4715 34.6835C12.5568 34.53 12.5994 34.3594 12.5994 34.1718V33.9287L11.4993 34.1334C11.269 34.176 11.1091 34.2421 11.0196 34.3317C10.9343 34.417 10.8916 34.53 10.8916 34.6707C10.8916 34.8285 10.9471 34.9521 11.0579 35.0417C11.1731 35.127 11.3287 35.1696 11.5249 35.1696ZM13.9291 35.5662V32.1761H14.4024L14.428 33.0332L14.3768 33.014C14.4194 32.7241 14.5111 32.513 14.6518 32.3808C14.7968 32.2444 14.9887 32.1761 15.2275 32.1761H15.5601V32.6878H15.2339C15.0633 32.6878 14.9205 32.7198 14.8053 32.7838C14.6945 32.8435 14.6092 32.9352 14.5495 33.0588C14.4941 33.1782 14.4663 33.3317 14.4663 33.5194V35.5662H13.9291ZM17.147 35.5662C16.84 35.5662 16.6119 35.4958 16.4626 35.3551C16.3176 35.2144 16.2452 34.9948 16.2452 34.6963V31.383H16.7824V34.6835C16.7824 34.837 16.8166 34.9436 16.8848 35.0033C16.953 35.063 17.0575 35.0928 17.1982 35.0928H17.6843V35.5662H17.147ZM15.7462 32.6495V32.1761H17.6843V32.6495H15.7462ZM21.5707 35.6685C21.1656 35.6685 20.8095 35.5747 20.5025 35.3871C20.1955 35.1952 19.9567 34.9223 19.7861 34.5683C19.6156 34.2144 19.5303 33.7923 19.5303 33.3019C19.5303 32.8115 19.6156 32.3893 19.7861 32.0354C19.9567 31.6772 20.1955 31.4022 20.5025 31.2103C20.8095 31.0184 21.1656 30.9225 21.5707 30.9225C22.1208 30.9225 22.5472 31.0611 22.85 31.3382C23.1527 31.6154 23.351 31.9928 23.4448 32.4704L22.8628 32.5087C22.7988 32.1847 22.6623 31.9288 22.4534 31.7412C22.2444 31.5536 21.9502 31.4598 21.5707 31.4598C21.2807 31.4598 21.0249 31.5344 20.8032 31.6836C20.5857 31.8286 20.4151 32.0397 20.2915 32.3169C20.1678 32.5898 20.106 32.9181 20.106 33.3019C20.106 33.6857 20.1678 34.014 20.2915 34.2869C20.4151 34.5598 20.5857 34.7688 20.8032 34.9137C21.0249 35.0587 21.2807 35.1312 21.5707 35.1312C21.9673 35.1312 22.2743 35.0289 22.4918 34.8242C22.7092 34.6152 22.8457 34.3338 22.9011 33.9799L23.4832 34.0183C23.4278 34.3466 23.319 34.6344 23.157 34.8818C22.9949 35.1291 22.7796 35.3231 22.511 35.4638C22.2466 35.6003 21.9332 35.6685 21.5707 35.6685ZM25.3977 35.6429C25.0864 35.6429 24.8135 35.5704 24.579 35.4254C24.3444 35.2805 24.1632 35.0758 24.0353 34.8114C23.9073 34.5428 23.8434 34.2293 23.8434 33.8711C23.8434 33.5087 23.9073 33.1953 24.0353 32.9309C24.1632 32.6665 24.3444 32.4618 24.579 32.3169C24.8135 32.1719 25.0864 32.0994 25.3977 32.0994C25.709 32.0994 25.9797 32.1719 26.21 32.3169C26.4445 32.4618 26.6258 32.6665 26.7537 32.9309C26.8816 33.1953 26.9456 33.5087 26.9456 33.8711C26.9456 34.2293 26.8816 34.5428 26.7537 34.8114C26.6258 35.0758 26.4445 35.2805 26.21 35.4254C25.9797 35.5704 25.709 35.6429 25.3977 35.6429ZM25.3977 35.1312C25.709 35.1312 25.9499 35.0203 26.1205 34.7986C26.2953 34.5726 26.3827 34.2635 26.3827 33.8711C26.3827 33.4788 26.2953 33.1718 26.1205 32.9501C25.9499 32.7241 25.709 32.6111 25.3977 32.6111C25.0864 32.6111 24.8433 32.7241 24.6685 32.9501C24.4937 33.1718 24.4063 33.4788 24.4063 33.8711C24.4063 34.2635 24.4937 34.5726 24.6685 34.7986C24.8433 35.0203 25.0864 35.1312 25.3977 35.1312ZM27.5499 35.5662V32.1761H28.0424L28.0616 33.0396L27.9976 32.9821C28.0403 32.7817 28.1149 32.6175 28.2215 32.4896C28.3281 32.3574 28.456 32.2593 28.6053 32.1953C28.7588 32.1314 28.9229 32.0994 29.0978 32.0994C29.3579 32.0994 29.5711 32.1569 29.7374 32.2721C29.908 32.3872 30.0338 32.5429 30.1148 32.739C30.2001 32.9309 30.2427 33.1462 30.2427 33.385V35.5662H29.7054V33.5385C29.7054 33.3296 29.6798 33.1548 29.6287 33.014C29.5818 32.8691 29.505 32.7603 29.3984 32.6878C29.2918 32.6111 29.1532 32.5727 28.9826 32.5727C28.7225 32.5727 28.5072 32.6559 28.3366 32.8222C28.1703 32.9842 28.0872 33.223 28.0872 33.5385V35.5662H27.5499ZM32.1233 35.5662C31.8163 35.5662 31.5881 35.4958 31.4389 35.3551C31.2939 35.2144 31.2214 34.9948 31.2214 34.6963V31.383H31.7587V34.6835C31.7587 34.837 31.7928 34.9436 31.8611 35.0033C31.9293 35.063 32.0338 35.0928 32.1745 35.0928H32.6606V35.5662H32.1233ZM30.7225 32.6495V32.1761H32.6606V32.6495H30.7225ZM33.2905 35.5662V32.1761H33.7638L33.7894 33.0332L33.7383 33.014C33.7809 32.7241 33.8726 32.513 34.0133 32.3808C34.1583 32.2444 34.3502 32.1761 34.589 32.1761H34.9216V32.6878H34.5954C34.4248 32.6878 34.2819 32.7198 34.1668 32.7838C34.0559 32.8435 33.9707 32.9352 33.911 33.0588C33.8555 33.1782 33.8278 33.3317 33.8278 33.5194V35.5662H33.2905ZM36.2448 35.6429C35.8951 35.6429 35.6158 35.5619 35.4068 35.3999C35.2022 35.2378 35.0998 35.0118 35.0998 34.7219C35.0998 34.4319 35.1851 34.2038 35.3557 34.0375C35.5262 33.8711 35.797 33.7539 36.168 33.6857L37.3705 33.4618C37.3705 33.1761 37.3023 32.9629 37.1658 32.8222C37.0336 32.6814 36.8332 32.6111 36.5646 32.6111C36.33 32.6111 36.1445 32.6644 36.0081 32.771C35.8716 32.8733 35.7778 33.0226 35.7267 33.2187L35.1574 33.174C35.2213 32.8541 35.3749 32.5962 35.6179 32.4C35.8652 32.1996 36.1808 32.0994 36.5646 32.0994C36.9995 32.0994 37.3321 32.223 37.5624 32.4704C37.7926 32.7134 37.9078 33.0503 37.9078 33.481V34.8818C37.9078 34.9585 37.9206 35.014 37.9462 35.0481C37.976 35.0779 38.0229 35.0928 38.0869 35.0928H38.2212V35.5662C38.2041 35.5704 38.1764 35.5726 38.138 35.5726C38.0997 35.5768 38.0592 35.579 38.0165 35.579C37.863 35.579 37.7372 35.5555 37.6391 35.5086C37.5453 35.4574 37.4771 35.3807 37.4345 35.2783C37.3918 35.1717 37.3705 35.0331 37.3705 34.8626L37.4345 34.8754C37.4046 35.0203 37.3321 35.1525 37.217 35.2719C37.1019 35.3871 36.959 35.4787 36.7884 35.547C36.6179 35.6109 36.4366 35.6429 36.2448 35.6429ZM36.2959 35.1696C36.5219 35.1696 36.7138 35.127 36.8716 35.0417C37.0336 34.9521 37.1573 34.8327 37.2426 34.6835C37.3279 34.53 37.3705 34.3594 37.3705 34.1718V33.9287L36.2703 34.1334C36.0401 34.176 35.8802 34.2421 35.7906 34.3317C35.7053 34.417 35.6627 34.53 35.6627 34.6707C35.6627 34.8285 35.7181 34.9521 35.829 35.0417C35.9441 35.127 36.0998 35.1696 36.2959 35.1696ZM40.0117 35.6429C39.6961 35.6429 39.4211 35.5704 39.1865 35.4254C38.9563 35.2805 38.7772 35.0758 38.6493 34.8114C38.5213 34.5428 38.4574 34.2293 38.4574 33.8711C38.4574 33.513 38.5213 33.2017 38.6493 32.9373C38.7772 32.6729 38.9563 32.4682 39.1865 32.3233C39.4211 32.174 39.6961 32.0994 40.0117 32.0994C40.2718 32.0994 40.502 32.1463 40.7025 32.2401C40.9071 32.3296 41.0734 32.4618 41.2014 32.6367C41.3293 32.8115 41.4124 33.0247 41.4508 33.2763L40.8879 33.3147C40.8496 33.0887 40.7515 32.916 40.5937 32.7966C40.4359 32.6729 40.2419 32.6111 40.0117 32.6111C39.7004 32.6111 39.4573 32.7241 39.2825 32.9501C39.1076 33.1718 39.0202 33.4788 39.0202 33.8711C39.0202 34.2635 39.1076 34.5726 39.2825 34.7986C39.4573 35.0203 39.7004 35.1312 40.0117 35.1312C40.2419 35.1312 40.4359 35.0673 40.5937 34.9393C40.7515 34.8114 40.8496 34.6195 40.8879 34.3637L41.4508 34.402C41.4124 34.6536 41.3293 34.8732 41.2014 35.0609C41.0734 35.2442 40.9071 35.3871 40.7025 35.4894C40.502 35.5917 40.2718 35.6429 40.0117 35.6429ZM43.0987 35.5662C42.7916 35.5662 42.5635 35.4958 42.4143 35.3551C42.2693 35.2144 42.1968 34.9948 42.1968 34.6963V31.383H42.7341V34.6835C42.7341 34.837 42.7682 34.9436 42.8364 35.0033C42.9046 35.063 43.0091 35.0928 43.1498 35.0928H43.6359V35.5662H43.0987ZM41.6979 32.6495V32.1761H43.6359V32.6495H41.6979Z"
                    fill="#757575"
                  />
                  <path
                    d="M189.003 35.2643V32.3066C189.003 32.1054 189.061 31.9433 189.177 31.8205C189.293 31.6943 189.473 31.6312 189.719 31.6312H190.149V32.0099H189.75C189.644 32.0099 189.564 32.0389 189.509 32.0968C189.458 32.1548 189.432 32.235 189.432 32.3373V35.2643H189.003ZM188.634 32.9309V32.5523H190.113V32.9309H188.634ZM190.498 35.2643V32.5523H190.877L190.897 33.2379L190.856 33.2226C190.89 32.9906 190.964 32.8218 191.076 32.716C191.192 32.6068 191.346 32.5523 191.537 32.5523H191.803V32.9616H191.542C191.406 32.9616 191.291 32.9872 191.199 33.0384C191.11 33.0861 191.042 33.1595 190.994 33.2584C190.95 33.3539 190.928 33.4767 190.928 33.6268V35.2643H190.498ZM193.189 35.3257C192.94 35.3257 192.722 35.2677 192.534 35.1517C192.346 35.0357 192.201 34.872 192.099 34.6605C191.997 34.4456 191.946 34.1948 191.946 33.9083C191.946 33.6183 191.997 33.3676 192.099 33.1561C192.201 32.9446 192.346 32.7808 192.534 32.6648C192.722 32.5489 192.94 32.4909 193.189 32.4909C193.438 32.4909 193.655 32.5489 193.839 32.6648C194.026 32.7808 194.171 32.9446 194.274 33.1561C194.376 33.3676 194.427 33.6183 194.427 33.9083C194.427 34.1948 194.376 34.4456 194.274 34.6605C194.171 34.872 194.026 35.0357 193.839 35.1517C193.655 35.2677 193.438 35.3257 193.189 35.3257ZM193.189 34.9163C193.438 34.9163 193.631 34.8276 193.767 34.6502C193.907 34.4694 193.977 34.2221 193.977 33.9083C193.977 33.5944 193.907 33.3488 193.767 33.1714C193.631 32.9906 193.438 32.9002 193.189 32.9002C192.94 32.9002 192.745 32.9906 192.606 33.1714C192.466 33.3488 192.396 33.5944 192.396 33.9083C192.396 34.2221 192.466 34.4694 192.606 34.6502C192.745 34.8276 192.94 34.9163 193.189 34.9163ZM194.911 35.2643V32.5523H195.305L195.32 33.2379L195.259 33.2175C195.289 33.0674 195.342 32.9395 195.417 32.8337C195.496 32.7245 195.591 32.641 195.704 32.583C195.816 32.5216 195.941 32.4909 196.077 32.4909C196.313 32.4909 196.504 32.5557 196.65 32.6853C196.801 32.8149 196.894 32.9957 196.932 33.2277L196.85 33.2226C196.877 33.0657 196.927 32.9343 196.998 32.8286C197.074 32.7194 197.169 32.6358 197.285 32.5778C197.401 32.5199 197.534 32.4909 197.684 32.4909C197.879 32.4909 198.042 32.5318 198.175 32.6137C198.308 32.6921 198.409 32.8081 198.477 32.9616C198.545 33.1151 198.58 33.3011 198.58 33.5194V35.2643H198.15V33.6115C198.15 33.3659 198.102 33.1817 198.007 33.0588C197.911 32.9326 197.769 32.8695 197.582 32.8695C197.456 32.8695 197.345 32.9002 197.249 32.9616C197.157 33.023 197.085 33.1117 197.034 33.2277C196.983 33.3403 196.958 33.4784 196.958 33.6422V35.2643H196.528V33.6422C196.528 33.4 196.485 33.2107 196.4 33.0742C196.314 32.9377 196.171 32.8695 195.97 32.8695C195.844 32.8695 195.733 32.9002 195.637 32.9616C195.545 33.023 195.472 33.1117 195.417 33.2277C195.366 33.3437 195.341 33.4819 195.341 33.6422V35.2643H194.911Z"
                    fill="#AEAEAE"
                  />
                  <rect
                    width="38.117"
                    height="10.117"
                    transform="translate(203.165 28.7057)"
                    fill="#0052FF"
                  />
                  <path
                    d="M206.184 35.2643V31.6312H208.395V32.061H206.624V33.2328H208.333V33.6524H206.624V34.8345H208.436V35.2643H206.184ZM209.099 36.0318V32.5523H209.498L209.508 33.1663L209.447 33.1356C209.515 32.9241 209.628 32.7638 209.785 32.6546C209.945 32.5454 210.129 32.4909 210.337 32.4909C210.607 32.4909 210.827 32.5574 210.997 32.6904C211.171 32.8235 211.299 32.9974 211.381 33.2124C211.463 33.4273 211.504 33.6592 211.504 33.9083C211.504 34.1573 211.463 34.3893 211.381 34.6042C211.299 34.8191 211.171 34.9931 210.997 35.1261C210.827 35.2592 210.607 35.3257 210.337 35.3257C210.197 35.3257 210.066 35.3018 209.943 35.254C209.824 35.2063 209.721 35.1398 209.636 35.0545C209.554 34.9692 209.498 34.8686 209.467 34.7526L209.529 34.6809V36.0318H209.099ZM210.296 34.9163C210.532 34.9163 210.716 34.8276 210.849 34.6502C210.985 34.4729 211.054 34.2255 211.054 33.9083C211.054 33.591 210.985 33.3437 210.849 33.1663C210.716 32.9889 210.532 32.9002 210.296 32.9002C210.139 32.9002 210.003 32.9377 209.887 33.0128C209.774 33.0878 209.686 33.2004 209.621 33.3505C209.559 33.5006 209.529 33.6865 209.529 33.9083C209.529 34.13 209.559 34.3159 209.621 34.466C209.682 34.6161 209.771 34.7287 209.887 34.8038C210.003 34.8788 210.139 34.9163 210.296 34.9163ZM212.075 35.2643V34.8345L213.794 32.9309H212.126V32.5523H214.265V32.9821L212.546 34.8856H214.306V35.2643H212.075ZM216.146 35.3462C215.89 35.3462 215.662 35.2762 215.46 35.1364C215.263 34.9931 215.106 34.7816 214.99 34.5018C214.874 34.2187 214.816 33.869 214.816 33.4529C214.816 33.0606 214.869 32.7228 214.974 32.4397C215.083 32.1565 215.239 31.9382 215.44 31.7847C215.641 31.6278 215.883 31.5493 216.167 31.5493C216.388 31.5493 216.584 31.5988 216.755 31.6977C216.929 31.7966 217.074 31.9348 217.19 32.1122C217.306 32.2862 217.39 32.4874 217.441 32.716L216.98 32.7467C216.922 32.5216 216.825 32.3373 216.689 32.1941C216.555 32.0508 216.382 31.9792 216.167 31.9792C215.979 31.9792 215.819 32.0371 215.686 32.1531C215.553 32.2657 215.45 32.4329 215.379 32.6546C215.31 32.8729 215.276 33.139 215.276 33.4529C215.276 33.7633 215.312 34.0277 215.384 34.246C215.455 34.4643 215.558 34.6315 215.691 34.7475C215.827 34.86 215.993 34.9163 216.187 34.9163C216.361 34.9163 216.509 34.872 216.632 34.7833C216.758 34.6912 216.857 34.565 216.929 34.4046C217.001 34.2409 217.04 34.055 217.047 33.8469H216.177V33.4273H217.456V35.2643H217.047L217.026 34.4046L217.149 34.4456C217.101 34.6195 217.035 34.7748 216.949 34.9112C216.868 35.0477 216.76 35.1551 216.627 35.2336C216.497 35.3086 216.337 35.3462 216.146 35.3462ZM219.389 35.2643V34.64H220.024V35.2643H219.389ZM221.667 35.2643V34.64H222.301V35.2643H221.667ZM223.938 35.2643V34.64H224.573V35.2643H223.938ZM226.792 35.2643V31.6312H227.232V33.3966L227.007 33.2226H229.033L228.808 33.3966V31.6312H229.248V35.2643H228.808V33.4784L229.033 33.6524H227.007L227.232 33.4784V35.2643H226.792ZM229.809 35.2643V31.6312H230.914C231.296 31.6312 231.598 31.7284 231.82 31.9229C232.042 32.1139 232.152 32.3783 232.152 32.716C232.152 32.8866 232.113 33.0384 232.035 33.1714C231.956 33.3011 231.856 33.4034 231.733 33.4784C231.61 33.5535 231.484 33.5961 231.354 33.6064L231.334 33.545C231.576 33.5586 231.757 33.6166 231.876 33.7189C231.999 33.8213 232.071 33.9884 232.091 34.2204L232.183 35.2643H231.743L231.656 34.2767C231.646 34.1641 231.619 34.0737 231.574 34.0055C231.533 33.9339 231.467 33.8827 231.375 33.852C231.286 33.8179 231.163 33.8008 231.006 33.8008H230.249V35.2643H229.809ZM230.249 33.371H230.914C231.167 33.371 231.359 33.3147 231.492 33.2021C231.625 33.0861 231.692 32.9241 231.692 32.716C231.692 32.5045 231.625 32.3425 231.492 32.2299C231.359 32.1173 231.167 32.061 230.914 32.061H230.249V33.371ZM232.877 35.2643V31.6312H233.737C234.051 31.6312 234.323 31.7028 234.555 31.8461C234.791 31.986 234.972 32.1924 235.098 32.4653C235.227 32.7348 235.292 33.064 235.292 33.4529C235.292 33.8418 235.227 34.1709 235.098 34.4404C234.972 34.7099 234.791 34.9146 234.555 35.0545C234.323 35.1943 234.051 35.2643 233.737 35.2643H232.877ZM233.317 34.8345H233.711C234.066 34.8345 234.34 34.7202 234.535 34.4916C234.733 34.2596 234.832 33.9134 234.832 33.4529C234.832 32.9923 234.733 32.6461 234.535 32.4141C234.34 32.1787 234.066 32.061 233.711 32.061H233.317V34.8345ZM236.022 35.2643L235.485 32.5523H235.955L236.309 34.814L236.708 32.9309H237.127L237.526 34.814L237.879 32.5523H238.35L237.818 35.2643H237.276L236.917 33.5552L236.559 35.2643H236.022Z"
                    fill="white"
                  />
                  <path
                    d="M246.522 35.2643C246.277 35.2643 246.094 35.208 245.975 35.0954C245.859 34.9828 245.801 34.8072 245.801 34.5684V31.9178H246.231V34.5581C246.231 34.6809 246.258 34.7662 246.312 34.814C246.367 34.8617 246.451 34.8856 246.563 34.8856H246.952V35.2643H246.522ZM245.402 32.9309V32.5523H246.952V32.9309H245.402ZM248.41 35.3257C248.161 35.3257 247.943 35.2677 247.755 35.1517C247.568 35.0357 247.423 34.872 247.32 34.6605C247.218 34.4456 247.167 34.1948 247.167 33.9083C247.167 33.6183 247.218 33.3676 247.32 33.1561C247.423 32.9446 247.568 32.7808 247.755 32.6648C247.943 32.5489 248.161 32.4909 248.41 32.4909C248.659 32.4909 248.876 32.5489 249.06 32.6648C249.248 32.7808 249.393 32.9446 249.495 33.1561C249.597 33.3676 249.649 33.6183 249.649 33.9083C249.649 34.1948 249.597 34.4456 249.495 34.6605C249.393 34.872 249.248 35.0357 249.06 35.1517C248.876 35.2677 248.659 35.3257 248.41 35.3257ZM248.41 34.9163C248.659 34.9163 248.852 34.8276 248.988 34.6502C249.128 34.4694 249.198 34.2221 249.198 33.9083C249.198 33.5944 249.128 33.3488 248.988 33.1714C248.852 32.9906 248.659 32.9002 248.41 32.9002C248.161 32.9002 247.967 32.9906 247.827 33.1714C247.687 33.3488 247.617 33.5944 247.617 33.9083C247.617 34.2221 247.687 34.4694 247.827 34.6502C247.967 34.8276 248.161 34.9163 248.41 34.9163Z"
                    fill="#AEAEAE"
                  />
                  <rect
                    width="38.3776"
                    height="10.117"
                    transform="translate(253.957 28.7057)"
                    fill="#0052FF"
                  />
                  <path
                    d="M262.461 35.2643V32.061H261.35V31.6312H264.011V32.061H262.901V35.2643H262.461ZM265.278 35.2643V32.5523H265.636L265.677 33.2379L265.636 33.2277C265.67 32.9957 265.744 32.8252 265.856 32.716C265.972 32.6068 266.126 32.5523 266.317 32.5523H266.875V32.9412H266.322C266.189 32.9412 266.076 32.9684 265.984 33.023C265.896 33.0742 265.827 33.151 265.78 33.2533C265.732 33.3522 265.708 33.4767 265.708 33.6268V35.2643H265.278ZM264.572 35.2643V34.8856H266.568V35.2643H264.572ZM264.572 32.9309V32.5523H265.513V32.9309H264.572ZM268.254 35.3257C268.084 35.3257 267.93 35.295 267.794 35.2336C267.657 35.1722 267.55 35.0869 267.471 34.9777C267.393 34.8652 267.354 34.7355 267.354 34.5888C267.354 34.3569 267.422 34.1778 267.558 34.0515C267.698 33.9219 267.916 33.8281 268.213 33.7701L269.124 33.5859C269.124 33.3539 269.071 33.1817 268.965 33.0691C268.863 32.9565 268.715 32.9002 268.52 32.9002C268.333 32.9002 268.186 32.9429 268.08 33.0281C267.974 33.11 267.901 33.2294 267.86 33.3863L267.405 33.3505C267.456 33.0947 267.577 32.8883 267.768 32.7314C267.962 32.571 268.213 32.4909 268.52 32.4909C268.848 32.4909 269.102 32.5898 269.283 32.7876C269.463 32.9821 269.554 33.2516 269.554 33.5961V34.7219C269.554 34.7833 269.568 34.8259 269.595 34.8498C269.622 34.8737 269.663 34.8856 269.718 34.8856H269.892V35.2643C269.871 35.2677 269.839 35.2694 269.794 35.2694C269.75 35.2728 269.707 35.2745 269.666 35.2745C269.55 35.2745 269.452 35.2558 269.37 35.2182C269.291 35.1807 269.232 35.121 269.191 35.0391C269.15 34.9538 269.127 34.8447 269.124 34.7116H269.206C269.182 34.8276 269.124 34.9334 269.032 35.0289C268.943 35.121 268.831 35.1943 268.694 35.2489C268.558 35.3001 268.411 35.3257 268.254 35.3257ZM268.295 34.947C268.479 34.947 268.633 34.9163 268.756 34.8549C268.878 34.7901 268.971 34.7014 269.032 34.5888C269.093 34.4729 269.124 34.3398 269.124 34.1897V33.9543L268.295 34.1181C268.111 34.1522 267.983 34.2051 267.911 34.2767C267.84 34.3449 267.804 34.4353 267.804 34.5479C267.804 34.6741 267.847 34.773 267.932 34.8447C268.02 34.9129 268.142 34.947 268.295 34.947ZM270.473 35.2643V32.5523H270.867L270.882 33.2431L270.831 33.197C270.865 33.0367 270.927 32.9053 271.015 32.803C271.107 32.6972 271.217 32.6188 271.343 32.5676C271.469 32.5164 271.602 32.4909 271.742 32.4909C271.95 32.4909 272.122 32.5369 272.259 32.629C272.399 32.7211 272.504 32.8456 272.576 33.0026C272.648 33.1561 272.684 33.3283 272.684 33.5194V35.2643H272.254V33.6422C272.254 33.3897 272.204 33.1987 272.105 33.0691C272.006 32.936 271.855 32.8695 271.65 32.8695C271.51 32.8695 271.384 32.9002 271.271 32.9616C271.159 33.0196 271.068 33.1066 271 33.2226C270.935 33.3352 270.903 33.475 270.903 33.6422V35.2643H270.473ZM274.595 35.3257C274.36 35.3257 274.157 35.2848 273.986 35.2029C273.816 35.121 273.681 35.0118 273.582 34.8754C273.487 34.7355 273.432 34.5803 273.418 34.4097L273.869 34.379C273.896 34.5462 273.969 34.6775 274.089 34.773C274.211 34.8686 274.38 34.9163 274.595 34.9163C274.797 34.9163 274.952 34.8873 275.061 34.8293C275.173 34.7713 275.23 34.6809 275.23 34.5581C275.23 34.4797 275.211 34.4149 275.173 34.3637C275.136 34.3125 275.066 34.2699 274.964 34.2358C274.861 34.1982 274.711 34.1624 274.513 34.1283C274.251 34.0805 274.044 34.0226 273.894 33.9543C273.748 33.8827 273.644 33.794 273.582 33.6882C273.521 33.5825 273.49 33.4563 273.49 33.3096C273.49 33.1527 273.529 33.0128 273.608 32.89C273.686 32.7672 273.802 32.67 273.956 32.5983C274.109 32.5267 274.297 32.4909 274.519 32.4909C274.744 32.4909 274.931 32.5318 275.081 32.6137C275.235 32.6921 275.356 32.7979 275.445 32.9309C275.533 33.0606 275.591 33.2038 275.619 33.3608L275.168 33.3915C275.148 33.2959 275.109 33.2124 275.051 33.1407C274.996 33.0657 274.923 33.0077 274.831 32.9667C274.742 32.9224 274.636 32.9002 274.513 32.9002C274.316 32.9002 274.169 32.9395 274.073 33.0179C273.978 33.0964 273.93 33.1936 273.93 33.3096C273.93 33.4017 273.952 33.475 273.997 33.5296C274.041 33.5842 274.113 33.6285 274.211 33.6627C274.31 33.6934 274.442 33.7224 274.606 33.7496C274.885 33.794 275.102 33.852 275.255 33.9236C275.409 33.9919 275.516 34.0771 275.578 34.1795C275.639 34.2818 275.67 34.408 275.67 34.5581C275.67 34.7185 275.622 34.8566 275.527 34.9726C275.434 35.0852 275.307 35.1722 275.143 35.2336C274.982 35.295 274.8 35.3257 274.595 35.3257ZM277.06 35.2643V32.3783C277.06 32.1361 277.121 31.9519 277.244 31.8256C277.37 31.696 277.561 31.6312 277.817 31.6312H278.687V32.0099H277.817C277.711 32.0099 277.629 32.044 277.571 32.1122C277.517 32.177 277.49 32.2657 277.49 32.3783V35.2643H277.06ZM276.333 32.9309V32.5523H278.636V32.9309H276.333ZM280.522 35.3257C280.266 35.3257 280.044 35.2677 279.857 35.1517C279.672 35.0357 279.529 34.872 279.427 34.6605C279.328 34.4456 279.278 34.1948 279.278 33.9083C279.278 33.6217 279.328 33.3727 279.427 33.1612C279.529 32.9497 279.671 32.7859 279.852 32.67C280.036 32.5506 280.252 32.4909 280.501 32.4909C280.737 32.4909 280.945 32.5471 281.126 32.6597C281.307 32.7689 281.448 32.9292 281.55 33.1407C281.653 33.3522 281.704 33.6098 281.704 33.9134V34.0413H279.729C279.746 34.3313 279.823 34.5496 279.959 34.6963C280.099 34.843 280.287 34.9163 280.522 34.9163C280.699 34.9163 280.844 34.8754 280.957 34.7935C281.073 34.7082 281.153 34.5974 281.197 34.4609L281.658 34.4967C281.586 34.7389 281.45 34.9385 281.249 35.0954C281.051 35.2489 280.808 35.3257 280.522 35.3257ZM279.729 33.6627H281.233C281.213 33.4 281.136 33.2072 281.003 33.0844C280.87 32.9616 280.703 32.9002 280.501 32.9002C280.293 32.9002 280.121 32.965 279.985 33.0947C279.852 33.2209 279.766 33.4102 279.729 33.6627ZM283.073 35.2643V32.5523H283.431L283.472 33.2379L283.431 33.2277C283.466 32.9957 283.539 32.8252 283.652 32.716C283.767 32.6068 283.921 32.5523 284.112 32.5523H284.67V32.9412H284.117C283.984 32.9412 283.872 32.9684 283.779 33.023C283.691 33.0742 283.623 33.151 283.575 33.2533C283.527 33.3522 283.503 33.4767 283.503 33.6268V35.2643H283.073ZM282.367 35.2643V34.8856H284.363V35.2643H282.367ZM282.367 32.9309V32.5523H283.309V32.9309H282.367Z"
                    fill="white"
                  />
                </g>
                <path
                  d="M292.335 43.9398V43.62H0.665039V43.9398V44.2596H292.335V43.9398Z"
                  fill="#CACACA"
                  mask="url(#path-8-inside-2_288_6397)"
                />
                <g clipPath="url(#clip2_288_6397)">
                  <mask id="path-15-inside-3_288_6397" fill="white">
                    <path d="M0.665039 46.4983H292.335V66.8493H0.665039V46.4983Z" />
                  </mask>
                  <path
                    d="M2.15537 58.4757V54.4716H0.741794V53.9344H4.11903V54.4716H2.70545V58.4757H2.15537ZM4.25944 58.4757V55.0857H4.73277L4.75835 55.9428L4.70718 55.9236C4.74983 55.6336 4.84151 55.4226 4.98222 55.2904C5.12721 55.1539 5.31909 55.0857 5.55789 55.0857H5.89049V55.5974H5.56428C5.39372 55.5974 5.25087 55.6294 5.13573 55.6933C5.02486 55.753 4.93958 55.8447 4.87988 55.9684C4.82445 56.0878 4.79673 56.2413 4.79673 56.4289V58.4757H4.25944ZM7.21367 58.5525C6.86401 58.5525 6.58471 58.4714 6.37576 58.3094C6.17108 58.1474 6.06874 57.9214 6.06874 57.6314C6.06874 57.3414 6.15402 57.1133 6.32459 56.947C6.49516 56.7807 6.76593 56.6634 7.13692 56.5952L8.33942 56.3713C8.33942 56.0856 8.27119 55.8724 8.13474 55.7317C8.00255 55.591 7.80213 55.5206 7.53349 55.5206C7.29896 55.5206 7.11346 55.5739 6.97701 55.6805C6.84056 55.7829 6.74674 55.9321 6.69557 56.1283L6.12631 56.0835C6.19027 55.7637 6.34378 55.5057 6.58684 55.3096C6.83416 55.1091 7.14971 55.0089 7.53349 55.0089C7.96843 55.0089 8.30104 55.1326 8.5313 55.3799C8.76157 55.623 8.8767 55.9598 8.8767 56.3905V57.7913C8.8767 57.8681 8.8895 57.9235 8.91508 57.9576C8.94493 57.9875 8.99184 58.0024 9.0558 58.0024H9.19012V58.4757C9.17306 58.48 9.14535 58.4821 9.10697 58.4821C9.06859 58.4864 9.02808 58.4885 8.98544 58.4885C8.83193 58.4885 8.70614 58.465 8.60806 58.4181C8.51425 58.367 8.44602 58.2902 8.40338 58.1879C8.36074 58.0813 8.33942 57.9427 8.33942 57.7721L8.40338 57.7849C8.37353 57.9299 8.30104 58.0621 8.18591 58.1815C8.07077 58.2966 7.92792 58.3883 7.75736 58.4565C7.58679 58.5205 7.40556 58.5525 7.21367 58.5525ZM7.26484 58.0791C7.49084 58.0791 7.68273 58.0365 7.84051 57.9512C8.00255 57.8617 8.12621 57.7423 8.21149 57.593C8.29677 57.4395 8.33942 57.2689 8.33942 57.0813V56.8383L7.23926 57.0429C7.00899 57.0856 6.84908 57.1517 6.75954 57.2412C6.67425 57.3265 6.63161 57.4395 6.63161 57.5802C6.63161 57.738 6.68705 57.8617 6.79791 57.9512C6.91305 58.0365 7.06869 58.0791 7.26484 58.0791ZM9.66904 58.4757V55.0857H10.1616L10.1807 55.9492L10.1168 55.8916C10.1594 55.6912 10.234 55.527 10.3406 55.3991C10.4473 55.2669 10.5752 55.1688 10.7244 55.1049C10.8779 55.0409 11.0421 55.0089 11.2169 55.0089C11.4771 55.0089 11.6903 55.0665 11.8566 55.1816C12.0271 55.2968 12.1529 55.4524 12.2339 55.6486C12.3192 55.8404 12.3619 56.0558 12.3619 56.2946V58.4757H11.8246V56.4481C11.8246 56.2391 11.799 56.0643 11.7478 55.9236C11.7009 55.7786 11.6242 55.6699 11.5176 55.5974C11.411 55.5206 11.2724 55.4823 11.1018 55.4823C10.8417 55.4823 10.6263 55.5654 10.4558 55.7317C10.2895 55.8937 10.2063 56.1325 10.2063 56.4481V58.4757H9.66904ZM14.4172 58.5525C14.1145 58.5525 13.8565 58.5034 13.6433 58.4053C13.4343 58.3073 13.2702 58.173 13.1508 58.0024C13.0356 57.8276 12.9695 57.6293 12.9525 57.4075L13.5153 57.3692C13.5495 57.5738 13.6369 57.738 13.7776 57.8617C13.9183 57.9811 14.1315 58.0408 14.4172 58.0408C14.6475 58.0408 14.8308 58.0045 14.9673 57.932C15.108 57.8553 15.1784 57.7337 15.1784 57.5674C15.1784 57.4779 15.1571 57.4033 15.1144 57.3436C15.0718 57.2839 14.9886 57.2327 14.865 57.1901C14.7413 57.1432 14.5579 57.0984 14.3149 57.0557C13.9908 56.996 13.735 56.9235 13.5473 56.8383C13.364 56.7487 13.2318 56.64 13.1508 56.5121C13.074 56.3799 13.0356 56.2242 13.0356 56.0451C13.0356 55.7424 13.1465 55.495 13.3682 55.3032C13.59 55.107 13.9055 55.0089 14.3149 55.0089C14.5921 55.0089 14.8245 55.0601 15.0121 55.1624C15.204 55.2605 15.3532 55.3927 15.4598 55.559C15.5707 55.721 15.6432 55.9001 15.6773 56.0963L15.1144 56.1347C15.0888 56.0153 15.0419 55.9108 14.9737 55.8213C14.9055 55.7274 14.8159 55.655 14.7051 55.6038C14.5942 55.5483 14.462 55.5206 14.3085 55.5206C14.0654 55.5206 13.8863 55.5675 13.7712 55.6613C13.6561 55.7552 13.5985 55.8746 13.5985 56.0195C13.5985 56.1304 13.6241 56.2221 13.6753 56.2946C13.7307 56.3628 13.8181 56.4204 13.9375 56.4673C14.0569 56.5099 14.2168 56.5483 14.4172 56.5824C14.7626 56.6421 15.0313 56.7146 15.2232 56.7999C15.415 56.8852 15.5494 56.9896 15.6261 57.1133C15.7029 57.237 15.7413 57.3883 15.7413 57.5674C15.7413 57.7764 15.6816 57.9555 15.5622 58.1047C15.447 58.2497 15.2892 58.3606 15.0888 58.4373C14.8927 58.5141 14.6688 58.5525 14.4172 58.5525ZM17.3488 58.5525C16.9991 58.5525 16.7198 58.4714 16.5109 58.3094C16.3062 58.1474 16.2038 57.9214 16.2038 57.6314C16.2038 57.3414 16.2891 57.1133 16.4597 56.947C16.6303 56.7807 16.901 56.6634 17.272 56.5952L18.4745 56.3713C18.4745 56.0856 18.4063 55.8724 18.2698 55.7317C18.1376 55.591 17.9372 55.5206 17.6686 55.5206C17.434 55.5206 17.2486 55.5739 17.1121 55.6805C16.9756 55.7829 16.8818 55.9321 16.8307 56.1283L16.2614 56.0835C16.3254 55.7637 16.4789 55.5057 16.7219 55.3096C16.9693 55.1091 17.2848 55.0089 17.6686 55.0089C18.1035 55.0089 18.4361 55.1326 18.6664 55.3799C18.8967 55.623 19.0118 55.9598 19.0118 56.3905V57.7913C19.0118 57.8681 19.0246 57.9235 19.0502 57.9576C19.08 57.9875 19.1269 58.0024 19.1909 58.0024H19.3252V58.4757C19.3082 58.48 19.2804 58.4821 19.2421 58.4821C19.2037 58.4864 19.1632 58.4885 19.1205 58.4885C18.967 58.4885 18.8412 58.465 18.7432 58.4181C18.6493 58.367 18.5811 58.2902 18.5385 58.1879C18.4958 58.0813 18.4745 57.9427 18.4745 57.7721L18.5385 57.7849C18.5086 57.9299 18.4361 58.0621 18.321 58.1815C18.2059 58.2966 18.063 58.3883 17.8924 58.4565C17.7219 58.5205 17.5407 58.5525 17.3488 58.5525ZM17.3999 58.0791C17.6259 58.0791 17.8178 58.0365 17.9756 57.9512C18.1376 57.8617 18.2613 57.7423 18.3466 57.593C18.4319 57.4395 18.4745 57.2689 18.4745 57.0813V56.8383L17.3744 57.0429C17.1441 57.0856 16.9842 57.1517 16.8946 57.2412C16.8093 57.3265 16.7667 57.4395 16.7667 57.5802C16.7667 57.738 16.8221 57.8617 16.933 57.9512C17.0481 58.0365 17.2038 58.0791 17.3999 58.0791ZM21.1157 58.5525C20.8001 58.5525 20.5251 58.48 20.2906 58.335C20.0603 58.19 19.8812 57.9853 19.7533 57.7209C19.6253 57.4523 19.5614 57.1389 19.5614 56.7807C19.5614 56.4225 19.6253 56.1112 19.7533 55.8468C19.8812 55.5825 20.0603 55.3778 20.2906 55.2328C20.5251 55.0836 20.8001 55.0089 21.1157 55.0089C21.3758 55.0089 21.6061 55.0558 21.8065 55.1496C22.0111 55.2392 22.1775 55.3714 22.3054 55.5462C22.4333 55.721 22.5165 55.9343 22.5548 56.1858L21.992 56.2242C21.9536 55.9982 21.8555 55.8255 21.6977 55.7061C21.54 55.5825 21.3459 55.5206 21.1157 55.5206C20.8044 55.5206 20.5613 55.6336 20.3865 55.8596C20.2117 56.0814 20.1242 56.3884 20.1242 56.7807C20.1242 57.173 20.2117 57.4822 20.3865 57.7082C20.5613 57.9299 20.8044 58.0408 21.1157 58.0408C21.3459 58.0408 21.54 57.9768 21.6977 57.8489C21.8555 57.7209 21.9536 57.5291 21.992 57.2732L22.5548 57.3116C22.5165 57.5632 22.4333 57.7828 22.3054 57.9704C22.1775 58.1538 22.0111 58.2966 21.8065 58.399C21.6061 58.5013 21.3758 58.5525 21.1157 58.5525ZM24.2027 58.4757C23.8956 58.4757 23.6675 58.4053 23.5183 58.2646C23.3733 58.1239 23.3008 57.9043 23.3008 57.6058V54.2925H23.8381V57.593C23.8381 57.7465 23.8722 57.8531 23.9404 57.9128C24.0087 57.9725 24.1131 58.0024 24.2538 58.0024H24.74V58.4757H24.2027ZM22.8019 55.559V55.0857H24.74V55.559H22.8019ZM25.3012 58.4757V55.0857H25.8385V58.4757H25.3012ZM25.2884 54.5548V53.928H25.8513V54.5548H25.2884ZM27.9964 58.5525C27.6851 58.5525 27.4122 58.48 27.1777 58.335C26.9432 58.19 26.7619 57.9853 26.634 57.7209C26.5061 57.4523 26.4421 57.1389 26.4421 56.7807C26.4421 56.4182 26.5061 56.1048 26.634 55.8404C26.7619 55.5761 26.9432 55.3714 27.1777 55.2264C27.4122 55.0814 27.6851 55.0089 27.9964 55.0089C28.3077 55.0089 28.5785 55.0814 28.8087 55.2264C29.0433 55.3714 29.2245 55.5761 29.3524 55.8404C29.4803 56.1048 29.5443 56.4182 29.5443 56.7807C29.5443 57.1389 29.4803 57.4523 29.3524 57.7209C29.2245 57.9853 29.0433 58.19 28.8087 58.335C28.5785 58.48 28.3077 58.5525 27.9964 58.5525ZM27.9964 58.0408C28.3077 58.0408 28.5486 57.9299 28.7192 57.7082C28.894 57.4822 28.9814 57.173 28.9814 56.7807C28.9814 56.3884 28.894 56.0814 28.7192 55.8596C28.5486 55.6336 28.3077 55.5206 27.9964 55.5206C27.6851 55.5206 27.4421 55.6336 27.2672 55.8596C27.0924 56.0814 27.005 56.3884 27.005 56.7807C27.005 57.173 27.0924 57.4822 27.2672 57.7082C27.4421 57.9299 27.6851 58.0408 27.9964 58.0408ZM30.1486 58.4757V55.0857H30.6411L30.6603 55.9492L30.5963 55.8916C30.639 55.6912 30.7136 55.527 30.8202 55.3991C30.9268 55.2669 31.0547 55.1688 31.204 55.1049C31.3575 55.0409 31.5217 55.0089 31.6965 55.0089C31.9566 55.0089 32.1698 55.0665 32.3361 55.1816C32.5067 55.2968 32.6325 55.4524 32.7135 55.6486C32.7988 55.8404 32.8414 56.0558 32.8414 56.2946V58.4757H32.3041V56.4481C32.3041 56.2391 32.2786 56.0643 32.2274 55.9236C32.1805 55.7786 32.1037 55.6699 31.9971 55.5974C31.8905 55.5206 31.7519 55.4823 31.5814 55.4823C31.3213 55.4823 31.1059 55.5654 30.9353 55.7317C30.769 55.8937 30.6859 56.1325 30.6859 56.4481V58.4757H30.1486Z"
                    fill="#757575"
                  />
                  <path
                    d="M189.263 58.1738V55.2162C189.263 55.0149 189.321 54.8529 189.437 54.7301C189.553 54.6039 189.734 54.5407 189.98 54.5407H190.41V54.9194H190.01C189.905 54.9194 189.825 54.9484 189.77 55.0064C189.719 55.0644 189.693 55.1446 189.693 55.2469V58.1738H189.263ZM188.895 55.8405V55.4618H190.374V55.8405H188.895ZM190.759 58.1738V55.4618H191.137L191.158 56.1475L191.117 56.1321C191.151 55.9002 191.224 55.7313 191.337 55.6256C191.453 55.5164 191.607 55.4618 191.798 55.4618H192.064V55.8712H191.803C191.666 55.8712 191.552 55.8968 191.46 55.9479C191.371 55.9957 191.303 56.069 191.255 56.168C191.211 56.2635 191.189 56.3863 191.189 56.5364V58.1738H190.759ZM193.45 58.2352C193.201 58.2352 192.982 58.1772 192.795 58.0613C192.607 57.9453 192.462 57.7815 192.36 57.57C192.257 57.3551 192.206 57.1044 192.206 56.8178C192.206 56.5279 192.257 56.2771 192.36 56.0656C192.462 55.8541 192.607 55.6904 192.795 55.5744C192.982 55.4584 193.201 55.4004 193.45 55.4004C193.699 55.4004 193.915 55.4584 194.1 55.5744C194.287 55.6904 194.432 55.8541 194.535 56.0656C194.637 56.2771 194.688 56.5279 194.688 56.8178C194.688 57.1044 194.637 57.3551 194.535 57.57C194.432 57.7815 194.287 57.9453 194.1 58.0613C193.915 58.1772 193.699 58.2352 193.45 58.2352ZM193.45 57.8259C193.699 57.8259 193.891 57.7372 194.028 57.5598C194.168 57.379 194.238 57.1317 194.238 56.8178C194.238 56.504 194.168 56.2584 194.028 56.081C193.891 55.9002 193.699 55.8098 193.45 55.8098C193.201 55.8098 193.006 55.9002 192.866 56.081C192.726 56.2584 192.657 56.504 192.657 56.8178C192.657 57.1317 192.726 57.379 192.866 57.5598C193.006 57.7372 193.201 57.8259 193.45 57.8259ZM195.171 58.1738V55.4618H195.565L195.581 56.1475L195.519 56.127C195.55 55.9769 195.603 55.849 195.678 55.7432C195.756 55.6341 195.852 55.5505 195.965 55.4925C196.077 55.4311 196.202 55.4004 196.338 55.4004C196.574 55.4004 196.765 55.4652 196.911 55.5949C197.061 55.7245 197.155 55.9053 197.193 56.1373L197.111 56.1321C197.138 55.9752 197.188 55.8439 197.259 55.7381C197.334 55.629 197.43 55.5454 197.546 55.4874C197.662 55.4294 197.795 55.4004 197.945 55.4004C198.139 55.4004 198.303 55.4413 198.436 55.5232C198.569 55.6017 198.67 55.7177 198.738 55.8712C198.806 56.0247 198.84 56.2106 198.84 56.4289V58.1738H198.411V56.521C198.411 56.2754 198.363 56.0912 198.267 55.9684C198.172 55.8422 198.03 55.7791 197.843 55.7791C197.716 55.7791 197.605 55.8098 197.51 55.8712C197.418 55.9326 197.346 56.0213 197.295 56.1373C197.244 56.2498 197.218 56.388 197.218 56.5517V58.1738H196.788V56.5517C196.788 56.3095 196.746 56.1202 196.661 55.9837C196.575 55.8473 196.432 55.7791 196.231 55.7791C196.104 55.7791 195.994 55.8098 195.898 55.8712C195.806 55.9326 195.733 56.0213 195.678 56.1373C195.627 56.2532 195.601 56.3914 195.601 56.5517V58.1738H195.171Z"
                    fill="#AEAEAE"
                  />
                  <rect
                    width="38.117"
                    height="10.117"
                    transform="translate(203.426 51.6153)"
                    fill="#0052FF"
                  />
                  <path
                    d="M206.445 58.1738V54.5407H208.655V54.9706H206.885V56.1424H208.594V56.562H206.885V57.744H208.696V58.1738H206.445ZM209.36 58.9414V55.4618H209.759L209.769 56.0759L209.708 56.0451C209.776 55.8336 209.888 55.6733 210.045 55.5641C210.206 55.455 210.39 55.4004 210.598 55.4004C210.867 55.4004 211.087 55.4669 211.258 55.6C211.432 55.733 211.56 55.907 211.642 56.1219C211.724 56.3368 211.765 56.5688 211.765 56.8178C211.765 57.0668 211.724 57.2988 211.642 57.5137C211.56 57.7286 211.432 57.9026 211.258 58.0357C211.087 58.1687 210.867 58.2352 210.598 58.2352C210.458 58.2352 210.327 58.2114 210.204 58.1636C210.085 58.1158 209.982 58.0493 209.897 57.964C209.815 57.8787 209.759 57.7781 209.728 57.6621L209.789 57.5905V58.9414H209.36ZM210.557 57.8259C210.792 57.8259 210.977 57.7372 211.11 57.5598C211.246 57.3824 211.314 57.1351 211.314 56.8178C211.314 56.5006 211.246 56.2532 211.11 56.0759C210.977 55.8985 210.792 55.8098 210.557 55.8098C210.4 55.8098 210.264 55.8473 210.148 55.9223C210.035 55.9974 209.946 56.11 209.882 56.2601C209.82 56.4102 209.789 56.5961 209.789 56.8178C209.789 57.0396 209.82 57.2255 209.882 57.3756C209.943 57.5257 210.032 57.6382 210.148 57.7133C210.264 57.7883 210.4 57.8259 210.557 57.8259ZM212.336 58.1738V57.744L214.055 55.8405H212.387V55.4618H214.526V55.8916L212.806 57.7952H214.567V58.1738H212.336ZM216.407 58.2557C216.151 58.2557 215.922 58.1858 215.721 58.0459C215.523 57.9026 215.366 57.6911 215.25 57.4114C215.134 57.1283 215.076 56.7786 215.076 56.3624C215.076 55.9701 215.129 55.6324 215.235 55.3492C215.344 55.0661 215.499 54.8478 215.701 54.6943C215.902 54.5373 216.144 54.4589 216.427 54.4589C216.649 54.4589 216.845 54.5083 217.016 54.6073C217.19 54.7062 217.335 54.8444 217.451 55.0217C217.567 55.1957 217.65 55.397 217.701 55.6256L217.241 55.6563C217.183 55.4311 217.086 55.2469 216.949 55.1036C216.816 54.9603 216.642 54.8887 216.427 54.8887C216.24 54.8887 216.079 54.9467 215.946 55.0627C215.813 55.1753 215.711 55.3424 215.639 55.5641C215.571 55.7825 215.537 56.0486 215.537 56.3624C215.537 56.6728 215.573 56.9372 215.644 57.1555C215.716 57.3739 215.818 57.541 215.951 57.657C216.088 57.7696 216.253 57.8259 216.448 57.8259C216.622 57.8259 216.77 57.7815 216.893 57.6928C217.019 57.6007 217.118 57.4745 217.19 57.3142C217.261 57.1504 217.301 56.9645 217.307 56.7564H216.438V56.3368H217.717V58.1738H217.307L217.287 57.3142L217.41 57.3551C217.362 57.5291 217.296 57.6843 217.21 57.8208C217.128 57.9572 217.021 58.0647 216.888 58.1431C216.758 58.2182 216.598 58.2557 216.407 58.2557ZM219.65 58.1738V57.5496H220.285V58.1738H219.65ZM221.927 58.1738V57.5496H222.562V58.1738H221.927ZM224.199 58.1738V57.5496H224.834V58.1738H224.199ZM227.052 58.1738V54.5407H227.493V56.3061L227.267 56.1321H229.294L229.069 56.3061V54.5407H229.509V58.1738H229.069V56.388L229.294 56.562H227.267L227.493 56.388V58.1738H227.052ZM230.07 58.1738V54.5407H231.175C231.557 54.5407 231.859 54.638 232.081 54.8324C232.302 55.0235 232.413 55.2878 232.413 55.6256C232.413 55.7961 232.374 55.9479 232.295 56.081C232.217 56.2106 232.116 56.3129 231.994 56.388C231.871 56.463 231.745 56.5057 231.615 56.5159L231.594 56.4545C231.837 56.4682 232.017 56.5261 232.137 56.6285C232.26 56.7308 232.331 56.898 232.352 57.13L232.444 58.1738H232.004L231.917 57.1862C231.907 57.0737 231.879 56.9833 231.835 56.915C231.794 56.8434 231.727 56.7922 231.635 56.7615C231.547 56.7274 231.424 56.7104 231.267 56.7104H230.51V58.1738H230.07ZM230.51 56.2805H231.175C231.427 56.2805 231.62 56.2242 231.753 56.1117C231.886 55.9957 231.953 55.8336 231.953 55.6256C231.953 55.414 231.886 55.252 231.753 55.1394C231.62 55.0269 231.427 54.9706 231.175 54.9706H230.51V56.2805ZM233.138 58.1738V54.5407H233.997C234.311 54.5407 234.584 54.6124 234.816 54.7557C235.052 54.8955 235.232 55.1019 235.359 55.3748C235.488 55.6443 235.553 55.9735 235.553 56.3624C235.553 56.7513 235.488 57.0805 235.359 57.35C235.232 57.6195 235.052 57.8242 234.816 57.964C234.584 58.1039 234.311 58.1738 233.997 58.1738H233.138ZM233.578 57.744H233.972C234.327 57.744 234.601 57.6297 234.796 57.4012C234.994 57.1692 235.092 56.8229 235.092 56.3624C235.092 55.9019 234.994 55.5556 234.796 55.3236C234.601 55.0883 234.327 54.9706 233.972 54.9706H233.578V57.744ZM236.283 58.1738L235.745 55.4618H236.216L236.569 57.7235L236.968 55.8405H237.388L237.787 57.7235L238.14 55.4618H238.611L238.079 58.1738H237.536L237.178 56.4647L236.82 58.1738H236.283Z"
                    fill="white"
                  />
                  <path
                    d="M246.783 58.1738C246.537 58.1738 246.355 58.1175 246.235 58.005C246.119 57.8924 246.061 57.7167 246.061 57.4779V54.8273H246.491V57.4677C246.491 57.5905 246.519 57.6758 246.573 57.7235C246.628 57.7713 246.711 57.7952 246.824 57.7952H247.213V58.1738H246.783ZM245.662 55.8405V55.4618H247.213V55.8405H245.662ZM248.671 58.2352C248.422 58.2352 248.204 58.1772 248.016 58.0613C247.828 57.9453 247.683 57.7815 247.581 57.57C247.479 57.3551 247.428 57.1044 247.428 56.8178C247.428 56.5279 247.479 56.2771 247.581 56.0656C247.683 55.8541 247.828 55.6904 248.016 55.5744C248.204 55.4584 248.422 55.4004 248.671 55.4004C248.92 55.4004 249.137 55.4584 249.321 55.5744C249.508 55.6904 249.653 55.8541 249.756 56.0656C249.858 56.2771 249.909 56.5279 249.909 56.8178C249.909 57.1044 249.858 57.3551 249.756 57.57C249.653 57.7815 249.508 57.9453 249.321 58.0613C249.137 58.1772 248.92 58.2352 248.671 58.2352ZM248.671 57.8259C248.92 57.8259 249.113 57.7372 249.249 57.5598C249.389 57.379 249.459 57.1317 249.459 56.8178C249.459 56.504 249.389 56.2584 249.249 56.081C249.113 55.9002 248.92 55.8098 248.671 55.8098C248.422 55.8098 248.228 55.9002 248.088 56.081C247.948 56.2584 247.878 56.504 247.878 56.8178C247.878 57.1317 247.948 57.379 248.088 57.5598C248.228 57.7372 248.422 57.8259 248.671 57.8259Z"
                    fill="#AEAEAE"
                  />
                  <rect
                    width="38.117"
                    height="10.117"
                    transform="translate(254.218 51.6153)"
                    fill="#0052FF"
                  />
                  <path
                    d="M258.311 58.2352C258.062 58.2352 257.844 58.1772 257.656 58.0613C257.472 57.9453 257.329 57.7815 257.227 57.57C257.124 57.3551 257.073 57.1044 257.073 56.8178C257.073 56.5279 257.124 56.2771 257.227 56.0656C257.329 55.8541 257.472 55.6904 257.656 55.5744C257.844 55.4584 258.062 55.4004 258.311 55.4004C258.561 55.4004 258.777 55.4584 258.961 55.5744C259.149 55.6904 259.294 55.8541 259.396 56.0656C259.499 56.2771 259.55 56.5279 259.55 56.8178C259.55 57.1044 259.499 57.3551 259.396 57.57C259.294 57.7815 259.149 57.9453 258.961 58.0613C258.777 58.1772 258.561 58.2352 258.311 58.2352ZM258.311 57.8259C258.561 57.8259 258.753 57.7372 258.89 57.5598C259.03 57.379 259.099 57.1317 259.099 56.8178C259.099 56.504 259.03 56.2584 258.89 56.081C258.753 55.9002 258.561 55.8098 258.311 55.8098C258.062 55.8098 257.868 55.9002 257.728 56.081C257.592 56.2584 257.523 56.504 257.523 56.8178C257.523 57.1317 257.592 57.379 257.728 57.5598C257.868 57.7372 258.062 57.8259 258.311 57.8259ZM261.943 58.5269L260.97 57.1095H261.441L262.413 58.5269H261.943ZM261.277 58.2557C260.991 58.2557 260.747 58.1824 260.546 58.0357C260.348 57.889 260.196 57.6741 260.09 57.3909C259.988 57.1078 259.937 56.7649 259.937 56.3624C259.937 55.953 259.988 55.6068 260.09 55.3236C260.196 55.0405 260.348 54.8256 260.546 54.6789C260.747 54.5322 260.991 54.4589 261.277 54.4589C261.564 54.4589 261.806 54.5322 262.004 54.6789C262.205 54.8256 262.357 55.0405 262.459 55.3236C262.565 55.6068 262.618 55.953 262.618 56.3624C262.618 56.7649 262.565 57.1078 262.459 57.3909C262.357 57.6741 262.205 57.889 262.004 58.0357C261.806 58.1824 261.564 58.2557 261.277 58.2557ZM261.277 57.8259C261.465 57.8259 261.624 57.7713 261.753 57.6621C261.886 57.5496 261.987 57.3841 262.055 57.1658C262.123 56.9474 262.157 56.6797 262.157 56.3624C262.157 56.0451 262.123 55.7774 262.055 55.559C261.987 55.3373 261.886 55.1701 261.753 55.0576C261.624 54.945 261.465 54.8887 261.277 54.8887C261.09 54.8887 260.929 54.945 260.796 55.0576C260.667 55.1701 260.568 55.3373 260.5 55.559C260.431 55.7774 260.397 56.0451 260.397 56.3624C260.397 56.6797 260.431 56.9474 260.5 57.1658C260.568 57.3841 260.667 57.5496 260.796 57.6621C260.929 57.7713 261.09 57.8259 261.277 57.8259ZM263.169 58.1738V54.5407H264.274C264.526 54.5407 264.746 54.5851 264.934 54.6738C265.122 54.7625 265.267 54.8904 265.369 55.0576C265.471 55.2213 265.522 55.4192 265.522 55.6511C265.522 55.8831 265.471 56.0827 265.369 56.2498C265.267 56.4136 265.122 56.5398 264.934 56.6285C264.746 56.7172 264.526 56.7615 264.274 56.7615H263.609V58.1738H263.169ZM263.609 56.3317H264.223C264.509 56.3317 264.721 56.2737 264.857 56.1577C264.994 56.0383 265.062 55.8695 265.062 55.6511C265.062 55.4294 264.994 55.2605 264.857 55.1446C264.721 55.0286 264.509 54.9706 264.223 54.9706H263.609V56.3317ZM266.104 58.1738V55.4618H266.498L266.513 56.1526L266.462 56.1066C266.496 55.9462 266.558 55.8149 266.646 55.7125C266.738 55.6068 266.847 55.5283 266.974 55.4772C267.1 55.426 267.233 55.4004 267.373 55.4004C267.581 55.4004 267.753 55.4465 267.89 55.5386C268.03 55.6307 268.135 55.7552 268.207 55.9121C268.279 56.0656 268.314 56.2379 268.314 56.4289V58.1738H267.885V56.5517C267.885 56.2993 267.835 56.1083 267.736 55.9786C267.637 55.8456 267.485 55.7791 267.281 55.7791C267.141 55.7791 267.015 55.8098 266.902 55.8712C266.789 55.9292 266.699 56.0162 266.631 56.1321C266.566 56.2447 266.534 56.3846 266.534 56.5517V58.1738H266.104ZM270.442 58.1738V57.5496H271.077V58.1738H270.442ZM272.719 58.1738V57.5496H273.354V58.1738H272.719ZM274.991 58.1738V57.5496H275.626V58.1738H274.991ZM279.083 58.2557C278.793 58.2557 278.547 58.1789 278.346 58.0254C278.145 57.8719 277.991 57.6536 277.885 57.3705C277.783 57.0873 277.732 56.7513 277.732 56.3624C277.732 55.9701 277.783 55.6324 277.885 55.3492C277.991 55.0661 278.145 54.8478 278.346 54.6943C278.547 54.5373 278.793 54.4589 279.083 54.4589C279.403 54.4589 279.676 54.5646 279.902 54.7761C280.127 54.9842 280.277 55.2759 280.352 55.6511L279.881 55.6818C279.823 55.4192 279.722 55.2213 279.579 55.0883C279.439 54.9552 279.274 54.8887 279.083 54.8887C278.888 54.8887 278.725 54.9467 278.592 55.0627C278.462 55.1753 278.363 55.3424 278.295 55.5641C278.227 55.7825 278.192 56.0486 278.192 56.3624C278.192 56.6728 278.227 56.9372 278.295 57.1555C278.363 57.3739 278.462 57.541 278.592 57.657C278.725 57.7696 278.888 57.8259 279.083 57.8259C279.294 57.8259 279.473 57.7525 279.62 57.6058C279.767 57.4592 279.866 57.2408 279.917 56.9509L280.383 56.9764C280.318 57.3756 280.171 57.6894 279.942 57.918C279.714 58.1431 279.427 58.2557 279.083 58.2557ZM281.824 58.1738V56.6899L280.708 54.5407H281.209L282.038 56.2396L282.867 54.5407H283.369L282.264 56.6899V58.1738H281.824ZM284.835 58.2352C284.597 58.2352 284.39 58.1772 284.216 58.0613C284.042 57.9453 283.908 57.7815 283.812 57.57C283.72 57.3585 283.674 57.1078 283.674 56.8178C283.674 56.5279 283.72 56.2771 283.812 56.0656C283.908 55.8541 284.042 55.6904 284.216 55.5744C284.39 55.4584 284.597 55.4004 284.835 55.4004C285.026 55.4004 285.194 55.4465 285.337 55.5386C285.48 55.6273 285.584 55.7279 285.649 55.8405V54.5407H286.079V58.1738H285.69L285.675 57.7645C285.6 57.9112 285.489 58.0271 285.342 58.1124C285.195 58.1943 285.026 58.2352 284.835 58.2352ZM284.861 57.8259C285.025 57.8259 285.165 57.7849 285.281 57.7031C285.4 57.6212 285.49 57.5052 285.552 57.3551C285.617 57.2016 285.649 57.0225 285.649 56.8178C285.649 56.6063 285.617 56.4255 285.552 56.2754C285.49 56.1253 285.4 56.011 285.281 55.9326C285.161 55.8507 285.018 55.8098 284.851 55.8098C284.629 55.8098 284.452 55.9002 284.319 56.081C284.189 56.2584 284.124 56.504 284.124 56.8178C284.124 57.1283 284.189 57.3739 284.319 57.5547C284.452 57.7355 284.632 57.8259 284.861 57.8259ZM287.418 58.1738C287.418 57.7986 287.469 57.425 287.571 57.0532C287.677 56.678 287.827 56.3146 288.021 55.9633C288.216 55.6119 288.448 55.281 288.717 54.9706H286.742V54.5407H289.198V54.9399C288.97 55.1991 288.772 55.4567 288.605 55.7125C288.441 55.9684 288.306 56.2277 288.2 56.4903C288.095 56.7496 288.016 57.0191 287.965 57.2988C287.914 57.5751 287.888 57.8668 287.888 58.1738H287.418Z"
                    fill="white"
                  />
                </g>
                <path
                  d="M292.335 66.8493V66.5295H0.665039V66.8493V67.1692H292.335V66.8493Z"
                  fill="#CACACA"
                  mask="url(#path-15-inside-3_288_6397)"
                />
                <g clipPath="url(#clip3_288_6397)">
                  <mask id="path-22-inside-4_288_6397" fill="white">
                    <path d="M0.665039 69.4079H292.335V89.759H0.665039V69.4079Z" />
                  </mask>
                  <path
                    d="M2.15537 81.3853V77.3812H0.741794V76.844H4.11903V77.3812H2.70545V81.3853H2.15537ZM4.25944 81.3853V77.9953H4.73277L4.75835 78.8524L4.70718 78.8332C4.74983 78.5432 4.84151 78.3322 4.98222 78.2C5.12721 78.0635 5.31909 77.9953 5.55789 77.9953H5.89049V78.507H5.56428C5.39372 78.507 5.25087 78.539 5.13573 78.6029C5.02486 78.6626 4.93958 78.7543 4.87988 78.878C4.82445 78.9974 4.79673 79.1509 4.79673 79.3385V81.3853H4.25944ZM7.21367 81.4621C6.86401 81.4621 6.58471 81.3811 6.37576 81.219C6.17108 81.057 6.06874 80.831 6.06874 80.541C6.06874 80.251 6.15402 80.0229 6.32459 79.8566C6.49516 79.6903 6.76593 79.573 7.13692 79.5048L8.33942 79.2809C8.33942 78.9952 8.27119 78.782 8.13474 78.6413C8.00255 78.5006 7.80213 78.4302 7.53349 78.4302C7.29896 78.4302 7.11346 78.4835 6.97701 78.5901C6.84056 78.6925 6.74674 78.8417 6.69557 79.0379L6.12631 78.9931C6.19027 78.6733 6.34378 78.4153 6.58684 78.2192C6.83416 78.0187 7.14971 77.9185 7.53349 77.9185C7.96843 77.9185 8.30104 78.0422 8.5313 78.2895C8.76157 78.5326 8.8767 78.8694 8.8767 79.3001V80.7009C8.8767 80.7777 8.8895 80.8331 8.91508 80.8672C8.94493 80.8971 8.99184 80.912 9.0558 80.912H9.19012V81.3853C9.17306 81.3896 9.14535 81.3917 9.10697 81.3917C9.06859 81.396 9.02808 81.3981 8.98544 81.3981C8.83193 81.3981 8.70614 81.3747 8.60806 81.3277C8.51425 81.2766 8.44602 81.1998 8.40338 81.0975C8.36074 80.9909 8.33942 80.8523 8.33942 80.6817L8.40338 80.6945C8.37353 80.8395 8.30104 80.9717 8.18591 81.0911C8.07077 81.2062 7.92792 81.2979 7.75736 81.3661C7.58679 81.4301 7.40556 81.4621 7.21367 81.4621ZM7.26484 80.9887C7.49084 80.9887 7.68273 80.9461 7.84051 80.8608C8.00255 80.7713 8.12621 80.6519 8.21149 80.5026C8.29677 80.3491 8.33942 80.1786 8.33942 79.9909V79.7479L7.23926 79.9525C7.00899 79.9952 6.84908 80.0613 6.75954 80.1508C6.67425 80.2361 6.63161 80.3491 6.63161 80.4898C6.63161 80.6476 6.68705 80.7713 6.79791 80.8608C6.91305 80.9461 7.06869 80.9887 7.26484 80.9887ZM9.66904 81.3853V77.9953H10.1616L10.1807 78.8588L10.1168 78.8012C10.1594 78.6008 10.234 78.4366 10.3406 78.3087C10.4473 78.1765 10.5752 78.0784 10.7244 78.0145C10.8779 77.9505 11.0421 77.9185 11.2169 77.9185C11.4771 77.9185 11.6903 77.9761 11.8566 78.0912C12.0271 78.2064 12.1529 78.362 12.2339 78.5582C12.3192 78.7501 12.3619 78.9654 12.3619 79.2042V81.3853H11.8246V79.3577C11.8246 79.1488 11.799 78.9739 11.7478 78.8332C11.7009 78.6882 11.6242 78.5795 11.5176 78.507C11.411 78.4302 11.2724 78.3919 11.1018 78.3919C10.8417 78.3919 10.6263 78.475 10.4558 78.6413C10.2895 78.8034 10.2063 79.0421 10.2063 79.3577V81.3853H9.66904ZM14.4172 81.4621C14.1145 81.4621 13.8565 81.413 13.6433 81.315C13.4343 81.2169 13.2702 81.0826 13.1508 80.912C13.0356 80.7372 12.9695 80.5389 12.9525 80.3171L13.5153 80.2788C13.5495 80.4834 13.6369 80.6476 13.7776 80.7713C13.9183 80.8907 14.1315 80.9504 14.4172 80.9504C14.6475 80.9504 14.8308 80.9141 14.9673 80.8416C15.108 80.7649 15.1784 80.6433 15.1784 80.477C15.1784 80.3875 15.1571 80.3129 15.1144 80.2532C15.0718 80.1935 14.9886 80.1423 14.865 80.0997C14.7413 80.0528 14.5579 80.008 14.3149 79.9653C13.9908 79.9056 13.735 79.8332 13.5473 79.7479C13.364 79.6583 13.2318 79.5496 13.1508 79.4217C13.074 79.2895 13.0356 79.1338 13.0356 78.9547C13.0356 78.652 13.1465 78.4047 13.3682 78.2128C13.59 78.0166 13.9055 77.9185 14.3149 77.9185C14.5921 77.9185 14.8245 77.9697 15.0121 78.072C15.204 78.1701 15.3532 78.3023 15.4598 78.4686C15.5707 78.6307 15.6432 78.8097 15.6773 79.0059L15.1144 79.0443C15.0888 78.9249 15.0419 78.8204 14.9737 78.7309C14.9055 78.637 14.8159 78.5646 14.7051 78.5134C14.5942 78.458 14.462 78.4302 14.3085 78.4302C14.0654 78.4302 13.8863 78.4771 13.7712 78.571C13.6561 78.6648 13.5985 78.7842 13.5985 78.9291C13.5985 79.04 13.6241 79.1317 13.6753 79.2042C13.7307 79.2724 13.8181 79.33 13.9375 79.3769C14.0569 79.4195 14.2168 79.4579 14.4172 79.492C14.7626 79.5517 15.0313 79.6242 15.2232 79.7095C15.415 79.7948 15.5494 79.8992 15.6261 80.0229C15.7029 80.1466 15.7413 80.2979 15.7413 80.477C15.7413 80.686 15.6816 80.8651 15.5622 81.0143C15.447 81.1593 15.2892 81.2702 15.0888 81.3469C14.8927 81.4237 14.6688 81.4621 14.4172 81.4621ZM17.3488 81.4621C16.9991 81.4621 16.7198 81.3811 16.5109 81.219C16.3062 81.057 16.2038 80.831 16.2038 80.541C16.2038 80.251 16.2891 80.0229 16.4597 79.8566C16.6303 79.6903 16.901 79.573 17.272 79.5048L18.4745 79.2809C18.4745 78.9952 18.4063 78.782 18.2698 78.6413C18.1376 78.5006 17.9372 78.4302 17.6686 78.4302C17.434 78.4302 17.2486 78.4835 17.1121 78.5901C16.9756 78.6925 16.8818 78.8417 16.8307 79.0379L16.2614 78.9931C16.3254 78.6733 16.4789 78.4153 16.7219 78.2192C16.9693 78.0187 17.2848 77.9185 17.6686 77.9185C18.1035 77.9185 18.4361 78.0422 18.6664 78.2895C18.8967 78.5326 19.0118 78.8694 19.0118 79.3001V80.7009C19.0118 80.7777 19.0246 80.8331 19.0502 80.8672C19.08 80.8971 19.1269 80.912 19.1909 80.912H19.3252V81.3853C19.3082 81.3896 19.2804 81.3917 19.2421 81.3917C19.2037 81.396 19.1632 81.3981 19.1205 81.3981C18.967 81.3981 18.8412 81.3747 18.7432 81.3277C18.6493 81.2766 18.5811 81.1998 18.5385 81.0975C18.4958 80.9909 18.4745 80.8523 18.4745 80.6817L18.5385 80.6945C18.5086 80.8395 18.4361 80.9717 18.321 81.0911C18.2059 81.2062 18.063 81.2979 17.8924 81.3661C17.7219 81.4301 17.5407 81.4621 17.3488 81.4621ZM17.3999 80.9887C17.6259 80.9887 17.8178 80.9461 17.9756 80.8608C18.1376 80.7713 18.2613 80.6519 18.3466 80.5026C18.4319 80.3491 18.4745 80.1786 18.4745 79.9909V79.7479L17.3744 79.9525C17.1441 79.9952 16.9842 80.0613 16.8946 80.1508C16.8093 80.2361 16.7667 80.3491 16.7667 80.4898C16.7667 80.6476 16.8221 80.7713 16.933 80.8608C17.0481 80.9461 17.2038 80.9887 17.3999 80.9887ZM21.1157 81.4621C20.8001 81.4621 20.5251 81.3896 20.2906 81.2446C20.0603 81.0996 19.8812 80.8949 19.7533 80.6306C19.6253 80.3619 19.5614 80.0485 19.5614 79.6903C19.5614 79.3321 19.6253 79.0208 19.7533 78.7564C19.8812 78.4921 20.0603 78.2874 20.2906 78.1424C20.5251 77.9932 20.8001 77.9185 21.1157 77.9185C21.3758 77.9185 21.6061 77.9654 21.8065 78.0593C22.0111 78.1488 22.1775 78.281 22.3054 78.4558C22.4333 78.6307 22.5165 78.8439 22.5548 79.0954L21.992 79.1338C21.9536 78.9078 21.8555 78.7351 21.6977 78.6157C21.54 78.4921 21.3459 78.4302 21.1157 78.4302C20.8044 78.4302 20.5613 78.5432 20.3865 78.7692C20.2117 78.991 20.1242 79.298 20.1242 79.6903C20.1242 80.0826 20.2117 80.3918 20.3865 80.6178C20.5613 80.8395 20.8044 80.9504 21.1157 80.9504C21.3459 80.9504 21.54 80.8864 21.6977 80.7585C21.8555 80.6306 21.9536 80.4387 21.992 80.1828L22.5548 80.2212C22.5165 80.4728 22.4333 80.6924 22.3054 80.88C22.1775 81.0634 22.0111 81.2062 21.8065 81.3086C21.6061 81.4109 21.3758 81.4621 21.1157 81.4621ZM24.2027 81.3853C23.8956 81.3853 23.6675 81.315 23.5183 81.1742C23.3733 81.0335 23.3008 80.8139 23.3008 80.5154V77.2022H23.8381V80.5026C23.8381 80.6561 23.8722 80.7627 23.9404 80.8224C24.0087 80.8821 24.1131 80.912 24.2538 80.912H24.74V81.3853H24.2027ZM22.8019 78.4686V77.9953H24.74V78.4686H22.8019ZM25.3012 81.3853V77.9953H25.8385V81.3853H25.3012ZM25.2884 77.4644V76.8376H25.8513V77.4644H25.2884ZM27.9964 81.4621C27.6851 81.4621 27.4122 81.3896 27.1777 81.2446C26.9432 81.0996 26.7619 80.8949 26.634 80.6306C26.5061 80.3619 26.4421 80.0485 26.4421 79.6903C26.4421 79.3278 26.5061 79.0144 26.634 78.7501C26.7619 78.4857 26.9432 78.281 27.1777 78.136C27.4122 77.991 27.6851 77.9185 27.9964 77.9185C28.3077 77.9185 28.5785 77.991 28.8087 78.136C29.0433 78.281 29.2245 78.4857 29.3524 78.7501C29.4803 79.0144 29.5443 79.3278 29.5443 79.6903C29.5443 80.0485 29.4803 80.3619 29.3524 80.6306C29.2245 80.8949 29.0433 81.0996 28.8087 81.2446C28.5785 81.3896 28.3077 81.4621 27.9964 81.4621ZM27.9964 80.9504C28.3077 80.9504 28.5486 80.8395 28.7192 80.6178C28.894 80.3918 28.9814 80.0826 28.9814 79.6903C28.9814 79.298 28.894 78.991 28.7192 78.7692C28.5486 78.5432 28.3077 78.4302 27.9964 78.4302C27.6851 78.4302 27.4421 78.5432 27.2672 78.7692C27.0924 78.991 27.005 79.298 27.005 79.6903C27.005 80.0826 27.0924 80.3918 27.2672 80.6178C27.4421 80.8395 27.6851 80.9504 27.9964 80.9504ZM30.1486 81.3853V77.9953H30.6411L30.6603 78.8588L30.5963 78.8012C30.639 78.6008 30.7136 78.4366 30.8202 78.3087C30.9268 78.1765 31.0547 78.0784 31.204 78.0145C31.3575 77.9505 31.5217 77.9185 31.6965 77.9185C31.9566 77.9185 32.1698 77.9761 32.3361 78.0912C32.5067 78.2064 32.6325 78.362 32.7135 78.5582C32.7988 78.7501 32.8414 78.9654 32.8414 79.2042V81.3853H32.3041V79.3577C32.3041 79.1488 32.2786 78.9739 32.2274 78.8332C32.1805 78.6882 32.1037 78.5795 31.9971 78.507C31.8905 78.4302 31.7519 78.3919 31.5814 78.3919C31.3213 78.3919 31.1059 78.475 30.9353 78.6413C30.769 78.8034 30.6859 79.0421 30.6859 79.3577V81.3853H30.1486Z"
                    fill="#757575"
                  />
                  <path
                    d="M189.263 81.0834V78.1258C189.263 77.9245 189.321 77.7625 189.437 77.6397C189.553 77.5135 189.734 77.4504 189.98 77.4504H190.41V77.829H190.01C189.905 77.829 189.825 77.858 189.77 77.916C189.719 77.974 189.693 78.0542 189.693 78.1565V81.0834H189.263ZM188.895 78.7501V78.3714H190.374V78.7501H188.895ZM190.759 81.0834V78.3714H191.137L191.158 79.0571L191.117 79.0417C191.151 78.8098 191.224 78.6409 191.337 78.5352C191.453 78.426 191.607 78.3714 191.798 78.3714H192.064V78.7808H191.803C191.666 78.7808 191.552 78.8064 191.46 78.8575C191.371 78.9053 191.303 78.9786 191.255 79.0776C191.211 79.1731 191.189 79.2959 191.189 79.446V81.0834H190.759ZM193.45 81.1448C193.201 81.1448 192.982 81.0868 192.795 80.9709C192.607 80.8549 192.462 80.6911 192.36 80.4796C192.257 80.2647 192.206 80.014 192.206 79.7274C192.206 79.4375 192.257 79.1867 192.36 78.9752C192.462 78.7637 192.607 78.6 192.795 78.484C192.982 78.368 193.201 78.31 193.45 78.31C193.699 78.31 193.915 78.368 194.1 78.484C194.287 78.6 194.432 78.7637 194.535 78.9752C194.637 79.1867 194.688 79.4375 194.688 79.7274C194.688 80.014 194.637 80.2647 194.535 80.4796C194.432 80.6911 194.287 80.8549 194.1 80.9709C193.915 81.0868 193.699 81.1448 193.45 81.1448ZM193.45 80.7355C193.699 80.7355 193.891 80.6468 194.028 80.4694C194.168 80.2886 194.238 80.0413 194.238 79.7274C194.238 79.4136 194.168 79.168 194.028 78.9906C193.891 78.8098 193.699 78.7194 193.45 78.7194C193.201 78.7194 193.006 78.8098 192.866 78.9906C192.726 79.168 192.657 79.4136 192.657 79.7274C192.657 80.0413 192.726 80.2886 192.866 80.4694C193.006 80.6468 193.201 80.7355 193.45 80.7355ZM195.171 81.0834V78.3714H195.565L195.581 79.0571L195.519 79.0366C195.55 78.8865 195.603 78.7586 195.678 78.6529C195.756 78.5437 195.852 78.4601 195.965 78.4021C196.077 78.3407 196.202 78.31 196.338 78.31C196.574 78.31 196.765 78.3748 196.911 78.5045C197.061 78.6341 197.155 78.8149 197.193 79.0469L197.111 79.0417C197.138 78.8848 197.188 78.7535 197.259 78.6477C197.334 78.5386 197.43 78.455 197.546 78.397C197.662 78.339 197.795 78.31 197.945 78.31C198.139 78.31 198.303 78.3509 198.436 78.4328C198.569 78.5113 198.67 78.6273 198.738 78.7808C198.806 78.9343 198.84 79.1202 198.84 79.3385V81.0834H198.411V79.4306C198.411 79.185 198.363 79.0008 198.267 78.878C198.172 78.7518 198.03 78.6887 197.843 78.6887C197.716 78.6887 197.605 78.7194 197.51 78.7808C197.418 78.8422 197.346 78.9309 197.295 79.0469C197.244 79.1594 197.218 79.2976 197.218 79.4613V81.0834H196.788V79.4613C196.788 79.2191 196.746 79.0298 196.661 78.8934C196.575 78.7569 196.432 78.6887 196.231 78.6887C196.104 78.6887 195.994 78.7194 195.898 78.7808C195.806 78.8422 195.733 78.9309 195.678 79.0469C195.627 79.1628 195.601 79.301 195.601 79.4613V81.0834H195.171Z"
                    fill="#AEAEAE"
                  />
                  <rect
                    width="38.117"
                    height="10.117"
                    transform="translate(203.426 74.5249)"
                    fill="#0052FF"
                  />
                  <path
                    d="M206.445 81.0834V77.4504H207.468C207.867 77.4504 208.168 77.539 208.369 77.7164C208.574 77.8938 208.676 78.136 208.676 78.4431C208.676 78.5932 208.64 78.7279 208.568 78.8473C208.497 78.9667 208.396 79.0605 208.267 79.1287C208.137 79.197 207.987 79.2311 207.816 79.2311V79.2004C208.028 79.2004 208.209 79.2362 208.359 79.3078C208.512 79.3795 208.628 79.4801 208.707 79.6097C208.789 79.7394 208.829 79.8929 208.829 80.0703C208.829 80.3841 208.72 80.6314 208.502 80.8122C208.284 80.993 207.982 81.0834 207.596 81.0834H206.445ZM206.885 80.6536H207.601C207.864 80.6536 208.057 80.6024 208.18 80.5001C208.306 80.3978 208.369 80.2545 208.369 80.0703C208.369 79.8758 208.304 79.724 208.174 79.6149C208.045 79.5057 207.854 79.4511 207.601 79.4511H206.885V80.6536ZM206.885 79.0213H207.489C207.741 79.0213 207.925 78.9718 208.041 78.8729C208.157 78.774 208.215 78.6341 208.215 78.4533C208.215 78.2691 208.157 78.1275 208.041 78.0286C207.925 77.9296 207.741 77.8802 207.489 77.8802H206.885V79.0213ZM211.611 81.851H211.181V80.5001L211.243 80.5717C211.212 80.6877 211.154 80.7884 211.069 80.8736C210.987 80.9589 210.884 81.0254 210.762 81.0732C210.642 81.121 210.513 81.1448 210.373 81.1448C210.103 81.1448 209.882 81.0783 209.708 80.9453C209.537 80.8122 209.411 80.6383 209.329 80.4233C209.247 80.2084 209.206 79.9765 209.206 79.7274C209.206 79.4784 209.247 79.2464 209.329 79.0315C209.411 78.8166 209.537 78.6426 209.708 78.5096C209.882 78.3765 210.103 78.31 210.373 78.31C210.584 78.31 210.768 78.3646 210.925 78.4738C211.086 78.5829 211.198 78.7433 211.263 78.9548L211.202 78.9855L211.212 78.3714H211.611V81.851ZM210.414 80.7355C210.574 80.7355 210.711 80.698 210.823 80.6229C210.939 80.5479 211.028 80.4353 211.089 80.2852C211.151 80.1351 211.181 79.9492 211.181 79.7274C211.181 79.5057 211.149 79.3198 211.084 79.1697C211.023 79.0196 210.934 78.907 210.818 78.8319C210.705 78.7569 210.571 78.7194 210.414 78.7194C210.178 78.7194 209.992 78.8081 209.856 78.9855C209.723 79.1628 209.656 79.4102 209.656 79.7274C209.656 80.0447 209.723 80.292 209.856 80.4694C209.992 80.6468 210.178 80.7355 210.414 80.7355ZM213.415 81.0834V78.3714H213.845V81.0834H213.415ZM212.325 81.0834V80.7048H214.782V81.0834H212.325ZM212.377 78.7501V78.3714H213.845V78.7501H212.377ZM213.374 77.9467V77.4452H213.825V77.9467H213.374ZM216.427 81.1653C216.137 81.1653 215.892 81.0886 215.69 80.935C215.489 80.7815 215.336 80.5632 215.23 80.2801C215.128 79.9969 215.076 79.6609 215.076 79.272C215.076 78.8797 215.128 78.542 215.23 78.2588C215.336 77.9757 215.489 77.7574 215.69 77.6039C215.892 77.4469 216.137 77.3685 216.427 77.3685C216.748 77.3685 217.021 77.4742 217.246 77.6857C217.471 77.8938 217.621 78.1855 217.696 78.5607L217.226 78.5914C217.168 78.3288 217.067 78.1309 216.924 77.9979C216.784 77.8648 216.618 77.7983 216.427 77.7983C216.233 77.7983 216.069 77.8563 215.936 77.9723C215.806 78.0849 215.708 78.252 215.639 78.4738C215.571 78.6921 215.537 78.9582 215.537 79.272C215.537 79.5824 215.571 79.8468 215.639 80.0651C215.708 80.2835 215.806 80.4506 215.936 80.5666C216.069 80.6792 216.233 80.7355 216.427 80.7355C216.639 80.7355 216.818 80.6621 216.965 80.5154C217.111 80.3688 217.21 80.1504 217.261 79.8605L217.727 79.8861C217.662 80.2852 217.516 80.599 217.287 80.8276C217.058 81.0527 216.772 81.1653 216.427 81.1653ZM219.65 81.0834V80.4592H220.285V81.0834H219.65ZM221.927 81.0834V80.4592H222.562V81.0834H221.927ZM224.199 81.0834V80.4592H224.834V81.0834H224.199ZM228.946 81.4365L227.974 80.0191H228.444L229.417 81.4365H228.946ZM228.281 81.1653C227.994 81.1653 227.75 81.092 227.549 80.9453C227.351 80.7986 227.199 80.5837 227.093 80.3005C226.991 80.0174 226.94 79.6745 226.94 79.272C226.94 78.8626 226.991 78.5164 227.093 78.2333C227.199 77.9501 227.351 77.7352 227.549 77.5885C227.75 77.4418 227.994 77.3685 228.281 77.3685C228.567 77.3685 228.809 77.4418 229.007 77.5885C229.208 77.7352 229.36 77.9501 229.463 78.2333C229.568 78.5164 229.621 78.8626 229.621 79.272C229.621 79.6745 229.568 80.0174 229.463 80.3005C229.36 80.5837 229.208 80.7986 229.007 80.9453C228.809 81.092 228.567 81.1653 228.281 81.1653ZM228.281 80.7355C228.468 80.7355 228.627 80.6809 228.756 80.5717C228.89 80.4592 228.99 80.2937 229.058 80.0754C229.127 79.8571 229.161 79.5893 229.161 79.272C229.161 78.9548 229.127 78.687 229.058 78.4686C228.99 78.2469 228.89 78.0797 228.756 77.9672C228.627 77.8546 228.468 77.7983 228.281 77.7983C228.093 77.7983 227.933 77.8546 227.8 77.9672C227.67 78.0797 227.571 78.2469 227.503 78.4686C227.435 78.687 227.4 78.9548 227.4 79.272C227.4 79.5893 227.435 79.8571 227.503 80.0754C227.571 80.2937 227.67 80.4592 227.8 80.5717C227.933 80.6809 228.093 80.7355 228.281 80.7355ZM230.888 81.1448C230.718 81.1448 230.564 81.1141 230.428 81.0527C230.291 80.9913 230.184 80.906 230.105 80.7969C230.027 80.6843 229.988 80.5547 229.988 80.408C229.988 80.176 230.056 79.9969 230.192 79.8707C230.332 79.7411 230.551 79.6473 230.847 79.5893L231.758 79.4051C231.758 79.1731 231.705 79.0008 231.6 78.8882C231.497 78.7757 231.349 78.7194 231.154 78.7194C230.967 78.7194 230.82 78.762 230.714 78.8473C230.609 78.9292 230.535 79.0486 230.494 79.2055L230.039 79.1697C230.09 78.9138 230.211 78.7074 230.402 78.5505C230.597 78.3902 230.847 78.31 231.154 78.31C231.482 78.31 231.736 78.4089 231.917 78.6068C232.098 78.8012 232.188 79.0707 232.188 79.4153V80.541C232.188 80.6024 232.202 80.6451 232.229 80.669C232.256 80.6928 232.297 80.7048 232.352 80.7048H232.526V81.0834C232.505 81.0868 232.473 81.0886 232.428 81.0886C232.384 81.092 232.341 81.0937 232.301 81.0937C232.185 81.0937 232.086 81.0749 232.004 81.0374C231.925 80.9999 231.866 80.9402 231.825 80.8583C231.784 80.773 231.762 80.6638 231.758 80.5308H231.84C231.816 80.6468 231.758 80.7525 231.666 80.8481C231.577 80.9402 231.465 81.0135 231.328 81.0681C231.192 81.1193 231.045 81.1448 230.888 81.1448ZM230.929 80.7662C231.113 80.7662 231.267 80.7355 231.39 80.6741C231.513 80.6093 231.605 80.5206 231.666 80.408C231.727 80.292 231.758 80.159 231.758 80.0089V79.7735L230.929 79.9372C230.745 79.9713 230.617 80.0242 230.545 80.0959C230.474 80.1641 230.438 80.2545 230.438 80.3671C230.438 80.4933 230.481 80.5922 230.566 80.6638C230.655 80.7321 230.776 80.7662 230.929 80.7662ZM234.212 81.1653C233.974 81.1653 233.757 81.1244 233.562 81.0425C233.368 80.9606 233.215 80.8395 233.102 80.6792C232.989 80.5189 232.933 80.321 232.933 80.0856C232.933 79.8229 233.012 79.6063 233.168 79.4358C233.325 79.2618 233.533 79.1441 233.793 79.0827L233.803 79.185C233.595 79.127 233.426 79.0332 233.296 78.9036C233.17 78.7705 233.107 78.5914 233.107 78.3663C233.107 78.1753 233.155 78.0047 233.25 77.8546C233.346 77.7045 233.475 77.5868 233.639 77.5015C233.806 77.4128 233.997 77.3685 234.212 77.3685C234.427 77.3685 234.618 77.4128 234.785 77.5015C234.953 77.5868 235.082 77.7045 235.174 77.8546C235.27 78.0047 235.318 78.1753 235.318 78.3663C235.318 78.5914 235.254 78.7705 235.128 78.9036C235.002 79.0332 234.833 79.127 234.622 79.185L234.632 79.0827C234.895 79.1441 235.103 79.2618 235.256 79.4358C235.413 79.6063 235.492 79.8229 235.492 80.0856C235.492 80.321 235.435 80.5189 235.323 80.6792C235.21 80.8395 235.057 80.9606 234.862 81.0425C234.671 81.1244 234.455 81.1653 234.212 81.1653ZM234.212 80.7355C234.451 80.7355 234.647 80.6809 234.801 80.5717C234.954 80.4592 235.031 80.2886 235.031 80.06C235.031 79.8485 234.963 79.6797 234.826 79.5534C234.69 79.4238 234.485 79.359 234.212 79.359C233.943 79.359 233.738 79.4238 233.598 79.5534C233.462 79.6797 233.394 79.8485 233.394 80.06C233.394 80.2886 233.47 80.4592 233.624 80.5717C233.777 80.6809 233.974 80.7355 234.212 80.7355ZM234.212 78.9496C234.407 78.9496 234.562 78.9019 234.678 78.8064C234.797 78.7074 234.857 78.5607 234.857 78.3663C234.857 78.1923 234.799 78.0542 234.683 77.9518C234.571 77.8495 234.414 77.7983 234.212 77.7983C234.014 77.7983 233.858 77.8495 233.742 77.9518C233.626 78.0542 233.568 78.1923 233.568 78.3663C233.568 78.5607 233.626 78.7074 233.742 78.8064C233.861 78.9019 234.018 78.9496 234.212 78.9496ZM236.984 80.6741L236.298 77.8597H236.339V81.0834H235.899V77.4504H236.564L237.281 80.4387H237.076L237.792 77.4504H238.457V81.0834H238.017V77.8597H238.058L237.373 80.6741H236.984Z"
                    fill="white"
                  />
                  <path
                    d="M246.783 81.0834C246.537 81.0834 246.355 81.0271 246.235 80.9146C246.119 80.802 246.061 80.6263 246.061 80.3875V77.7369H246.491V80.3773C246.491 80.5001 246.519 80.5854 246.573 80.6331C246.628 80.6809 246.711 80.7048 246.824 80.7048H247.213V81.0834H246.783ZM245.662 78.7501V78.3714H247.213V78.7501H245.662ZM248.671 81.1448C248.422 81.1448 248.204 81.0868 248.016 80.9709C247.828 80.8549 247.683 80.6911 247.581 80.4796C247.479 80.2647 247.428 80.014 247.428 79.7274C247.428 79.4375 247.479 79.1867 247.581 78.9752C247.683 78.7637 247.828 78.6 248.016 78.484C248.204 78.368 248.422 78.31 248.671 78.31C248.92 78.31 249.137 78.368 249.321 78.484C249.508 78.6 249.653 78.7637 249.756 78.9752C249.858 79.1867 249.909 79.4375 249.909 79.7274C249.909 80.014 249.858 80.2647 249.756 80.4796C249.653 80.6911 249.508 80.8549 249.321 80.9709C249.137 81.0868 248.92 81.1448 248.671 81.1448ZM248.671 80.7355C248.92 80.7355 249.113 80.6468 249.249 80.4694C249.389 80.2886 249.459 80.0413 249.459 79.7274C249.459 79.4136 249.389 79.168 249.249 78.9906C249.113 78.8098 248.92 78.7194 248.671 78.7194C248.422 78.7194 248.228 78.8098 248.088 78.9906C247.948 79.168 247.878 79.4136 247.878 79.7274C247.878 80.0413 247.948 80.2886 248.088 80.4694C248.228 80.6468 248.422 80.7355 248.671 80.7355Z"
                    fill="#AEAEAE"
                  />
                  <rect
                    width="38.117"
                    height="10.117"
                    transform="translate(254.218 74.5249)"
                    fill="#0052FF"
                  />
                  <path
                    d="M258.281 81.1653C257.888 81.1653 257.587 81.0715 257.375 80.8839C257.164 80.6928 257.049 80.4472 257.032 80.147L257.488 80.1163C257.508 80.3381 257.59 80.4967 257.733 80.5922C257.88 80.6877 258.062 80.7355 258.281 80.7355C258.427 80.7355 258.566 80.715 258.695 80.6741C258.825 80.6297 258.929 80.5598 259.007 80.4643C259.089 80.3653 259.13 80.234 259.13 80.0703C259.13 79.9099 259.094 79.7786 259.023 79.6763C258.951 79.5705 258.852 79.4937 258.726 79.446C258.603 79.3948 258.463 79.3692 258.306 79.3692H258.02V78.9394H258.306C258.433 78.9394 258.549 78.9206 258.654 78.8831C258.76 78.8456 258.844 78.7859 258.905 78.704C258.97 78.6187 259.002 78.5079 259.002 78.3714C259.002 78.1838 258.943 78.0422 258.823 77.9467C258.704 77.8478 258.532 77.7983 258.306 77.7983C258.078 77.7983 257.904 77.8444 257.784 77.9365C257.668 78.0286 257.599 78.1548 257.575 78.3151L257.114 78.2844C257.148 78.0115 257.268 77.7915 257.472 77.6243C257.677 77.4538 257.955 77.3685 258.306 77.3685C258.542 77.3685 258.746 77.4094 258.92 77.4913C259.094 77.5697 259.227 77.6823 259.32 77.829C259.415 77.9757 259.463 78.1497 259.463 78.3509C259.463 78.5761 259.391 78.7586 259.248 78.8985C259.108 79.0349 258.9 79.1287 258.624 79.1799V79.0878C258.92 79.1219 259.156 79.2277 259.33 79.4051C259.504 79.5824 259.591 79.8042 259.591 80.0703C259.591 80.3022 259.534 80.5001 259.422 80.6638C259.309 80.8276 259.154 80.9521 258.956 81.0374C258.758 81.1227 258.533 81.1653 258.281 81.1653ZM259.875 81.0834L260.981 77.4504H261.574L262.679 81.0834H262.209L261.277 77.8495L260.346 81.0834H259.875ZM260.433 80.0498L260.587 79.62H261.968L262.122 80.0498H260.433ZM264.694 81.0834V80.2954H262.913V79.8963L264.663 77.4504H265.134V79.8656H265.574V80.2954H265.134V81.0834H264.694ZM263.363 79.8656H264.694V78.0644L263.363 79.8656ZM265.807 81.0834L266.912 77.4504H267.506L268.611 81.0834H268.14L267.209 77.8495L266.278 81.0834H265.807ZM266.365 80.0498L266.518 79.62H267.9L268.053 80.0498H266.365ZM270.442 81.0834V80.4592H271.077V81.0834H270.442ZM272.719 81.0834V80.4592H273.354V81.0834H272.719ZM274.991 81.0834V80.4592H275.626V81.0834H274.991ZM278.801 81.0834L277.793 78.3714H278.264L279.073 80.6434L279.881 78.3714H280.352L279.344 81.0834H278.801ZM280.708 81.0834V78.3714H281.102L281.117 78.9752L281.066 78.965C281.097 78.7637 281.162 78.6051 281.261 78.4891C281.363 78.3697 281.493 78.31 281.65 78.31C281.81 78.31 281.933 78.368 282.018 78.484C282.107 78.6 282.161 78.7705 282.182 78.9957H282.131C282.161 78.7842 282.229 78.617 282.335 78.4942C282.444 78.3714 282.581 78.31 282.745 78.31C282.963 78.31 283.122 78.3851 283.22 78.5352C283.319 78.6853 283.369 78.9343 283.369 79.2822V81.0834H282.939V79.3436C282.939 79.1014 282.913 78.9326 282.862 78.8371C282.811 78.7381 282.731 78.6887 282.622 78.6887C282.55 78.6887 282.487 78.7126 282.432 78.7603C282.378 78.8047 282.334 78.8763 282.299 78.9752C282.269 79.0742 282.253 79.2004 282.253 79.3539V81.0834H281.824V79.3436C281.824 79.1117 281.798 78.9445 281.747 78.8422C281.699 78.7398 281.619 78.6887 281.506 78.6887C281.435 78.6887 281.372 78.7126 281.317 78.7603C281.262 78.8047 281.218 78.8763 281.184 78.9752C281.153 79.0742 281.138 79.2004 281.138 79.3539V81.0834H280.708ZM284.452 81.0834C284.452 80.7082 284.503 80.3346 284.605 79.9628C284.711 79.5876 284.861 79.2243 285.055 78.8729C285.25 78.5215 285.482 78.1906 285.751 77.8802H283.776V77.4504H286.232V77.8495C286.004 78.1087 285.806 78.3663 285.639 78.6221C285.475 78.878 285.34 79.1373 285.235 79.3999C285.129 79.6592 285.05 79.9287 284.999 80.2084C284.948 80.4847 284.922 80.7764 284.922 81.0834H284.452ZM287.602 81.0834V78.3714H287.96L288.001 79.0571L287.96 79.0469C287.994 78.8149 288.067 78.6443 288.18 78.5352C288.296 78.426 288.449 78.3714 288.641 78.3714H289.198V78.7603H288.646C288.513 78.7603 288.4 78.7876 288.308 78.8422C288.219 78.8934 288.151 78.9701 288.103 79.0724C288.055 79.1714 288.032 79.2959 288.032 79.446V81.0834H287.602ZM286.896 81.0834V80.7048H288.891V81.0834H286.896ZM286.896 78.7501V78.3714H287.837V78.7501H286.896Z"
                    fill="white"
                  />
                </g>
                <path
                  d="M292.335 89.759V89.4391H0.665039V89.759V90.0788H292.335V89.759Z"
                  fill="#CACACA"
                  mask="url(#path-22-inside-4_288_6397)"
                />
                <defs>
                  <clipPath id="clip0_288_6397">
                    <path
                      d="M0.665039 0.679199H292.335V21.0303H0.665039V0.679199Z"
                      fill="white"
                    />
                  </clipPath>
                  <clipPath id="clip1_288_6397">
                    <path
                      d="M0.665039 23.5887H292.335V43.9398H0.665039V23.5887Z"
                      fill="white"
                    />
                  </clipPath>
                  <clipPath id="clip2_288_6397">
                    <path
                      d="M0.665039 46.4983H292.335V66.8493H0.665039V46.4983Z"
                      fill="white"
                    />
                  </clipPath>
                  <clipPath id="clip3_288_6397">
                    <path
                      d="M0.665039 69.4079H292.335V89.759H0.665039V69.4079Z"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="flex flex-col gap-2 items-start justify-start">
              <h3 className="text-base font-medium">
                Block and Event Monitoring
              </h3>
              <p className="text-sm text-muted-foreground max-w-lg leading-[1.5] tracking-[-0.2]">
                Track blocks and events in real time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
