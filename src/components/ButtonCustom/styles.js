import styled, { keyframes } from 'styled-components';

import colors from '~/styles/colors';

export const Button = styled.button`
  position: relative;
  width: ${(props) => (props.width === 'stretch' ? '100%' : 'auto')};
  height: auto;
  padding: ${(props) => (props.size === 'small' ? '2px 8px' : '12px 24px')};
  overflow: hidden;

  text-transform: ${(props) =>
    props.size === 'small' ? 'uppercase' : 'unset'};
  font-size: ${(props) => (props.size === 'small' ? '11px' : '16px')};
  font-weight: ${(props) => (props.size === 'small' ? '300' : '500')};
  color: ${props => { /*eslint-disable-line*/
    switch (props.model) {
      case 'regular':
      case 'callToAction':
        return `${colors.white}`;
      case 'outline':
        return `${props.color}`;
      case 'inactive':
      case 'inactiveOutline':
        return `${colors.greyMedium}`;
      default:
    }
  }};

  border-radius: ${(props) => (props.size === 'small' ? '2.5px' : '6px')};
  border: ${props => { /*eslint-disable-line*/
    switch (props.model) {
      case 'regular':
      case 'callToAction':
      case 'inactive':
        return 'unset';
      case 'outline':
        return `1px solid ${props.color}`;
      case 'inactiveOutline':
        return `1px solid ${colors.greyMedium}`;
      default:
    }
  }};

  background: ${props => { /*eslint-disable-line*/
    switch (props.model) {
      case 'regular':
        return props.color;
      case 'outline':
        return '#00000000';
      case 'callToAction':
        return 'linear-gradient(-45deg, rgba(223,0,255,1) 0%, rgba(49,166,239,1) 100%)';
      case 'inactive':
        return colors.greyLight;
      case 'inactiveOutline':
        return colors.greyLighter;
      default:
    }
  }};

  filter: ${(props) =>
    props.model === 'callToAction'
      ? 'drop-shadow(0px 6px 11px rgba(138, 0, 255, 0.39))'
      : 'unset'};

  cursor: ${(props) =>
    props.model === 'inactive' || props.model === 'inactiveOutline'
      ? 'unset'
      : 'pointer'};

  &:active {
    transform: translate(0.5px, 0.5px);
  }

  :disabled {
    background-color: ${(props) =>
      props.model === 'outiline' ? 'unset' : colors.greyLight};
    color: ${colors.greyMedium};
    border: ${(props) =>
      props.model === 'outiline' ? `2px solid ${colors.greyMedium}` : 'unset'};
    cursor: inactive;

    &:active {
      transform: unset;
    }
  }
`;

const animate = keyframes`
  from {
    width: 0;
    height: 0;
    opacity: 0;
  }


  to {
    width: 200px;
    height: 200px;
    opacity: 1;
  }
`;

export const FeedBack = styled.div`
  position: absolute;
  width: 0px;
  height: 0px;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.1);
  z-index: 0;

  &&.animate {
    animation: ${animate} 100ms ease-out;
  }
`;
