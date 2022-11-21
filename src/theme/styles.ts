import { css, keyframes } from 'styled-components/macro'

export const flexColumnNoWrap = css`
  display: flex;
  flex-flow: column nowrap;
`

export const flexRowNoWrap = css`
  display: flex;
  flex-flow: row nowrap;
`

const transitions = {
  duration: {
    slow: '500ms',
    medium: '250ms',
    fast: '125ms',
  },
  timing: {
    ease: 'ease',
    in: 'ease-in',
    out: 'ease-out',
    inOut: 'ease-in-out',
  },
}

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const textFadeIn = css`
  animation: ${fadeIn} ${transitions.duration.fast} ${transitions.timing.in};
`
