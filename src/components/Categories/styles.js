import styled from '@emotion/styled';

const generateTwoColorCategories = props => {
  const color = props.index % 2 === 0 ? 'violet' : 'green';

  return `color: ${color};`
};

export const CategoryLinks = styled.span`
  margin-right: .5em;
  &:hover {
    font-size: 1.2rem;
    text-decoration: underline;
    transition: .5s font-size ease-in;
  }
  &:active {
    font-size: 1.2rem;
    text-decoration: underline;
    transition: .5s font-size ease-in;
  }
  & > a {
    ${generateTwoColorCategories}
  }
`