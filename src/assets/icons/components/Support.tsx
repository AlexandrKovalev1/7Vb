import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'

const Support = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'36px'}
    ref={ref}
    viewBox={'0 0 35 36'}
    width={'35px'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M1.64429 17.0038C1.64429 8.25466 8.73685 1.16406 17.486 1.16406C26.2351 1.16406 33.3257 8.25466 33.3257 17.0038'
      }
      fill={'none'}
      stroke={'white'}
      strokeMiterlimit={'10'}
      strokeWidth={'2'}
    />
    <path
      d={
        'M32.9932 24.3502C31.2422 29.0936 27.2601 32.877 22.1016 34.207C21.6864 34.3152 21.2634 34.4057 20.8345 34.4804'
      }
      fill={'none'}
      stroke={'white'}
      strokeMiterlimit={'10'}
      strokeWidth={'2'}
    />
    <path
      d={
        'M4.68983 14.3359H6.72808C7.68425 14.3359 8.46138 15.1131 8.46138 16.0692V24.2793C8.46138 25.2355 7.68425 26.0126 6.72808 26.0126H4.68983C3.00768 26.0126 1.64426 24.6472 1.64426 22.967V17.3815C1.64426 15.6994 3.00965 14.3359 4.68983 14.3359Z'
      }
      fill={'none'}
      stroke={'white'}
      strokeMiterlimit={'10'}
      strokeWidth={'2'}
    />
    <path
      d={
        'M15.6917 33.3294L15.5972 32.0742C15.5677 30.9075 16.1422 29.9376 17.2381 29.7468L20.8857 29.9002C22.2078 29.9258 23.0223 30.4452 23.2131 31.5411L23.2958 32.0132C23.4846 33.1091 22.7508 34.1499 21.6549 34.3407L18.0191 34.9703C16.9233 35.1591 15.8825 34.4253 15.6917 33.3294Z'
      }
      fill={'none'}
      stroke={'white'}
      strokeMiterlimit={'10'}
      strokeWidth={'2'}
    />
    <path
      d={
        'M28.2399 14.3359H30.2782C31.9603 14.3359 33.3237 15.7013 33.3237 17.3815V22.967C33.3237 24.6492 31.9584 26.0126 30.2782 26.0126H28.2399C27.2838 26.0126 26.5066 25.2355 26.5066 24.2793V16.0692C26.5066 15.1131 27.2838 14.3359 28.2399 14.3359Z'
      }
      fill={'none'}
      stroke={'white'}
      strokeMiterlimit={'10'}
      strokeWidth={'2'}
    />
  </svg>
)
const ForwardRef = forwardRef(Support)
const Memo = memo(ForwardRef)

export default Memo
