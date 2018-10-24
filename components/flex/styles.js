import styled from 'styled-components';
import variables from '../../common/variables';

const Container = styled.section`
  display: flex;
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
  overflow: visible;

  @media (max-width: ${variables.breakpoints.tablet}px) {
    align-items: ${props => props.tabletAlign};
    justify-content: ${props => props.tabletJustify};
    flex-direction: ${props => props.tabletDirection};
  }

  @media (max-width: ${variables.breakpoints.mobile}px) {
    align-items: ${props => props.mobileAlign};
    justify-content: ${props => props.mobileJustify};
    flex-direction: ${props => props.mobileDirection};
  }
`;

const Item = styled.div`
  ${props => props.flex && `flex: ${props.flex};`};
  display: ${props => props.display};
  max-width: ${props => props.maxWidth};
  align-self: ${props => props.align};
  text-align: ${props => props.textAlign};
  justify-self: ${props => props.justify};
  margin-left: ${props => props.left}px;
  margin-right: ${props => props.right}px;

  @media (max-width: ${variables.breakpoints.tablet}px) {
    ${props => props.tabletFlex && `flex: ${props.tabletFlex};`};
    align-self: ${props => props.tabletAlign};
    max-width: ${props => props.tabletWidth};
    justify-self: ${props => props.tabletJustify};
    margin-left: ${props => props.tabletLeft}px;
    margin-right: ${props => props.tabletRight}px;
  }

  @media (max-width: ${variables.breakpoints.mobile}px) {
    ${props => props.mobileFlex && `flex: ${props.mobileFlex};`};
    align-self: ${props => props.mobileAlign};
    max-width: ${props => props.mobileWidth};
    justify-self: ${props => props.mobileJustify};
    margin-left: ${props => props.mobileLeft}px;
    margin-right: ${props => props.mobileRight}px;
  }
`;

export default {
  Container,
  Item,
};
