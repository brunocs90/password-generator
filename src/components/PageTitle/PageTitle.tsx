import { PageTitleContainer } from "./styles"

interface IPageTitle {
    title: string;
}

export function PageTitle({ title }: IPageTitle) {
    return (
        <PageTitleContainer>
            {title}
        </PageTitleContainer>
    );
}