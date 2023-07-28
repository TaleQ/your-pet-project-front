import styled from 'styled-components';
import {
  selectDesktop,
  selectPhone,
  selectTablet,
} from '../../utils/selectMediaRequests';

export const FooterStyle = styled.footer`
  width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  /* padding-top: 50px; */
  padding-bottom: 30px;
  /* background-color: #fff; */
  /* display: none; */

  @media ${selectPhone} {
    max-width: 480px;
  }

  @media ${selectTablet} {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media ${selectDesktop} {
    max-width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const SpanIcon = styled.span`
  display: flex;
  align-items: center;
`;

export const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  /* margin-top: 20px; */
`;

export const Wrapper = styled.div`
  animation: pulse 1s infinite;
  width: 24px;
  height: 24px;
`;

export const Pulsingheart = styled.div`
  width: 24px;
  height: 24px;

  &:before,
  &:after {
    position: absolute;
    content: '';
    left: 12px;
    top: 2px;
    width: 12px;
    height: 19.2px;
    background: ${props => props.theme.colors.yellow};
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
    animation: pulsecolor 1s infinite;
  }

  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
    animation: pulsecolor 1s infinite;
  }

  @keyframes pulse {
    10% {
      transform: scale(1.1);
    }
  }

  @keyframes pulsecolor {
    10% {
      background: ${props => props.theme.colors.yellow};
    }
  }
`;

export const MainContainer = styled.div`
  display: flex;
  width: calc(100% / 2);
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Person = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100px;

  /* transform: scale(0.5); */
`;

export const ImgGeneral = styled.img`
  pointer-events: none;
  position: relative;
  transform: translateY(20px) scale(1.15);
  transform-origin: 50% bottom;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Container = styled.div`
  border-radius: 50%;
  height: 312px;
  /* -webkit-tap-highlight-color: transparent; */
  transform: scale(0.48);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 400px;
  cursor: pointer;

  &:hover {
    transform: scale(0.54);
  }

  &:hover ${ImgGeneral} {
    transform: translateY(0) scale(1.2);
  }
`;

export const ContainerInner = styled.div`
  clip-path: path(
    'M 390,400 C 390,504.9341 304.9341,590 200,590 95.065898,590 10,504.9341 10,400 V 10 H 200 390 Z'
  );
  position: relative;
  transform-origin: 50%;
  top: -200px;
`;

export const Circle = styled.img`
  background-color: #fee7d3;
  border-radius: 50%;
  cursor: pointer;
  height: 380px;
  left: 10px;
  pointer-events: none;
  position: absolute;
  top: 210px;
  width: 380px;
`;

export const ImageOne = styled(ImgGeneral)`
  left: 22px;
  top: 164px;
  overflow: hidden;
  width: 340px;
`;

export const ImageTwo = styled(ImgGeneral)`
  left: -46px;
  top: 174px;
  width: 444px;
`;

export const ImageThree = styled(ImgGeneral)`
  left: -16px;
  top: 144px;
  width: 466px;
`;

export const Divider = styled.div`
  background-color: ${props => props.theme.colors.yellow};
  height: 1px;
  width: 80px;
`;

export const Name = styled.div`
  color: #404245;
  font-size: ${props => props.theme.fontSizes.sm};
  margin-top: 10px;
  text-align: center;
  font-family: ${props => props.theme.fonts.main.bold};
`;

export const TitlePosition = styled.div`
  color: #6e6e6e;
  font-family: arial;
  font-size: ${props => props.theme.fontSizes.xs};
  font-style: italic;
  margin-top: 4px;
`;
