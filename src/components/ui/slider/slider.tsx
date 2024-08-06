import SliderMui from '@mui/material/Slider'
import styled from 'styled-components'

type Props = {
  defaultValue?: number
  marks?: { label: string; value: number }[]
  max?: number
  min?: number
  onChange: (event: Event, value: number | number[], activeThumb: number) => void
}

export const Slider = ({ defaultValue, marks, max, min, onChange }: Props) => {
  return (
    <div>
      <span>Select number of days</span>
      <StyledSlider
        aria-label={'Custom marks'}
        defaultValue={defaultValue}
        marks={marks}
        max={max}
        min={min}
        onChange={onChange}
        step={null}
        valueLabelDisplay={'auto'}
      />
    </div>
  )
}

const StyledSlider = styled(SliderMui)`
  &.MuiSlider-root {
    color: var(--color-dark-accent-1);
  }

  & .MuiSlider-rail {
    background-color: inherit;
    width: 100%;
    height: 12px;
    border: 1px solid var(--color-dark-accent-1);
  }

  & .MuiSlider-markLabel {
    color: var(--color-dark-text);
    font-weight: bold;
  }

  & .MuiSlider-mark {
    display: none;
  }

  .MuiSlider-valueLabel {
    background-color: var(--color-dark-accent-1);
  }

  .css-hzp7sc-MuiSlider-mark {
    display: none;
  }

  .MuiSlider-track {
    opacity: 0;
  }

  .MuiSlider-thumb {
    width: 16px;
    height: 30px;
    border-radius: 10px;
  }
`
