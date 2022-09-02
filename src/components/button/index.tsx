import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from 'utils/theme'

const Button = styled.div`
  width: 4.2667rem;
  height: 0.8rem;
  line-height: 0.8rem;
  margin: auto;
  text-align: center;
  font-size: 0.3733rem;
  font-weight: 400;
  color: #fff;
  background: linear-gradient(
    30deg,
    ${props => props.theme.colors.gradient01},
    ${props => props.theme.colors.gradient02}
  );
  border-radius: 0.4rem;
`
// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: 'palevioletred',
  },
}

const Btn: React.FC<{ title: string; fun?: () => void; cls?: string }> = ({ title, fun, cls }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button className={cls} onClick={fun}>
        {title}
      </Button>
    </ThemeProvider>
  )
}

export default Btn
