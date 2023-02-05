import { ThemeProvider } from "styled-components";
import { GeneratedPassword, PageTitle, PasswordGenerator } from "./components";
import { MainContainer, PageContainer } from "./styles";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<PageContainer>
				<PageTitle title="Password Generator" />
				<MainContainer>
					<GeneratedPassword />
					<PasswordGenerator />
				</MainContainer>
			</PageContainer>
		</ThemeProvider>
	)
}