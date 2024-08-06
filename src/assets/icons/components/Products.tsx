import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'

const Products = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'32px'}
    ref={ref}
    viewBox={'0 0 31 32'}
    width={'31px'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M25.7915 7.51708C26.9744 7.51708 28.0719 7.98987 28.8846 8.84812C29.6973 9.70636 30.1093 10.8285 30.0466 12.0096L29.2624 26.4649C29.139 28.7244 27.2706 30.496 25.0073 30.496H6.58925C4.32592 30.496 2.45753 28.7263 2.33411 26.4649L1.54992 12.0077C1.48536 10.8266 1.89739 9.70446 2.71196 8.84622C3.52464 7.98797 4.62402 7.51518 5.80506 7.51518H25.7915M25.7915 6.5658H5.80506C2.81639 6.56769 0.441035 9.07597 0.60243 12.0608L1.38662 26.5162C1.53662 29.2808 3.82084 31.4454 6.58925 31.4454H25.0054C27.7738 31.4454 30.058 29.2808 30.208 26.5162L30.9922 12.0608C31.1536 9.07597 28.7783 6.56769 25.7896 6.56769L25.7915 6.5658Z'
      }
      fill={'white'}
    />
    <path
      d={
        'M20.8167 14.0013C20.8167 16.7735 18.5704 19.0198 15.7982 19.0198C13.026 19.0198 10.7798 16.7735 10.7798 14.0013'
      }
      fill={'none'}
      stroke={'white'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={'2'}
    />

    <path
      d={
        'M10.7798 6.56947C10.7798 3.79727 13.026 1.55103 15.7982 1.55103C18.5704 1.55103 20.8167 3.79727 20.8167 6.56947'
      }
      fill={'none'}
      stroke={'white'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={'2'}
    />
  </svg>
)
const ForwardRef = forwardRef(Products)
const Memo = memo(ForwardRef)

export default Memo
