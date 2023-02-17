import styled from '@emotion/styled';

const generateTwoColorCategories = props => {
    const color = props.index % 2 === 0 ? 'violet' : 'green';
    
    return `color: ${color};`
};

export const CategoryLinks = styled.span`
    margin-right: .5em;

    & > a {
        ${generateTwoColorCategories}
    }
`