import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

export const LinkStyled = styled(Link)`
    font-size: 1.2rem;
    border: 0;
    outline: 0;
    padding: .5em;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    background-color: ${props => props.theme.btn.backgroundcolor};

    :hover {
        background-color: rgba(100, 108, 255, 1);
    }

    :disabled {
        opacity: .3;
        pointer-events: none;
    }
`

export const ButtonStyled = LinkStyled.withComponent('button');