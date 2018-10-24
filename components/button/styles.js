import styled from 'styled-components';
import variables from '../../common/variables';

const Container = styled.div`
  display: inline-block;

  a,
  button {
    width: 100%;
    border-radius: 6px;
    box-sizing: border-box;

    ${props =>
    props.size === 'normal'
      && `
      padding: 9px 16px 10px 16px;
      font-size: 15px;
    `};

    ${props =>
    props.color === 'normal'
      && `
      color: ${variables.colors.gray};
      background: #fff;
    `};

    ${props =>
    props.color === 'primary'
      && `
      color: #fff;
      background: ${variables.colors.primary};
    `};
  }
`;

const Button = styled.button`
  font-weight: 500;
  outline: none;
  border: none;
`;

const Link = styled.a`
  font-weight: 400;
  text-decoration: none;
`;

export default {
  Container,
  Button,
  Link,
};
