import styled from 'styled-components'
import { useTranslations } from 'lib/hooks'
import { Images } from 'assets'
import { APP_CONFIG } from 'lib/config'

export const Header = () => {
    const T = useTranslations()

    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo src={Images.Logo}/>
                <Title>
                    {T.components.header.title}
                </Title>
            </LogoContainer>
            <LinkContainer>
                <Link
                    href={APP_CONFIG.GITHUB_URL}
                    target="_blank"
                >
                    {T.components.header.github}
                </Link>
                <Link
                    href={APP_CONFIG.LINKEDIN_URL}
                    target="_blank"
                >
                    {T.components.header.linkedin}
                </Link>
            </LinkContainer>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    height: 60px;
    background-color: ${({ theme }) => theme.colors.foreground};
    padding: 0 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Logo = styled.img`
    width: 160px;
    //height: 36px;
    margin-right: 15vw;
`

const Title = styled.h1`
    display: inline;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.typography}
`

const LinkContainer = styled.div``

const Link = styled.a`
    color: ${({ theme }) => theme.colors.typography};
    text-decoration: underline;
    cursor: pointer;
    padding: 0 10px;
`
