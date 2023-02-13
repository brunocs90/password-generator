import { ThemeProvider } from 'styled-components';
import { GeneratedPassword, PageTitle, PasswordGenerator } from './components';
import { MainContainer, PageContainer } from './styles';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <PageContainer>
                <MainContainer>
                    <PageTitle title="Password Generator" />
                    <GeneratedPassword />
                    <PasswordGenerator />
                </MainContainer>
            </PageContainer>
        </ThemeProvider>
    );
}
