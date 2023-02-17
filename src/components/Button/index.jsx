import { ButtonStyled, LinkStyled } from './styles';

export default function Button({children, href}) {
    return (
        href 
            ? <LinkStyled href={href}>{children}</LinkStyled>
            : <ButtonStyled>{children}</ButtonStyled>
    )
}