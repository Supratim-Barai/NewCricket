import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components/native';
import darkTheme from './dark.theme';
import lightTheme from './light.theme';

const getTheme = (key: string) => ({ dark: darkTheme, light: lightTheme }[key] || lightTheme)

const Theme: FC = (props) => {
    return (
        <ThemeProvider theme={getTheme('light')} {...props} />
    )
}

export default Theme;