import { ThemeProvider } from "styled-components";
import { GeneratedPassword } from "./components/GeneratedPassword/GeneratedPassword";
import { PasswordGenerator } from "./components/PasswordGenerator/PasswordGenerator";
import { MainContainer, PageContainer, PageTitle } from "./styles";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<PageContainer>
				<PageTitle>
					Password Generator
				</PageTitle>
				<MainContainer>
					<GeneratedPassword />
					<PasswordGenerator />
				</MainContainer>
			</PageContainer>
		</ThemeProvider>
	)
}