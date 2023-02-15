import { ThemeProvider } from 'styled-components';
import { GeneratedPassword, PageTitle, PasswordGenerator } from './components';
import { DataContextProvider } from './contexts/dataContext';
import { MainContainer, PageContainer } from './styles';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <DataContextProvider>
                <PageContainer>
                    <MainContainer>
                        <PageTitle title="Password Generator" />
                        <GeneratedPassword />
                        <PasswordGenerator />
                    </MainContainer>
                </PageContainer>
            </DataContextProvider>
        </ThemeProvider>
    );
}
