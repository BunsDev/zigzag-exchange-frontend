import React, { useState, useEffect } from "react";
import styled, { css } from "@xstyled/styled-components";
import Text from "components/atoms/Text/Text";

const ToggleButtonWrapper = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: ${({ theme }) => theme.colors.backgroundHighEmphasis};
    border: 1px solid ${({ theme }) => theme.colors.foreground300};
    border-radius: 12px;
    width: fit-content;
    padding: 4px;
`;

const ToggleItem = styled.li`
    display: block;
    width: fit-content;
    border-radius: 8px;
    padding-top: ${({ size }) => size === 'sm' ? '4px' : '8px'};
    padding-bottom: ${({ size }) => size === 'sm' ? '4px' : '8px'};
    padding-left: ${({ type }) => type === 'option' ? '16px' : '51px'};
    padding-right: ${({ type }) => type === 'option' ? '16px' : '51px'};
    box-shadow: ${({ theme, show }) =>  show ? theme.colors.gradientBtnBoxShadow : 'unset'};
    text-align: center;
    text-transform: uppercase;
    user-select: none;
    cursor: pointer;
    background: ${({ show, theme, type, leftLabel, rightLabel }) => show && type === 'option' ? 
    `linear-gradient(93.46deg, ${theme.colors.primaryHighEmphasis} 16.94%, ${theme.colors.secondaryHighEmphasis} 97.24%)` : 
    show && leftLabel === 'BUY' ? theme.colors.successHighEmphasis :
    show && rightLabel === 'SELL' ? theme.colors.dangerHighEmphasis :
    'transparent'};
`;

const ToggleButton = ({...props}) => {
  const {type, leftLabel, size, rightLabel, selectedLayer=1, toggleClick = () => {}} = props

  return (
    <ToggleButtonWrapper>
        <ToggleItem
            onClick={() => toggleClick(1)}
            show={selectedLayer === 1}
            type={type}
            size={size}
            leftLabel={leftLabel}
        >
            <Text font="primaryBoldDisplay" color="foregroundHighEmphasis" textAlign="center">
            {leftLabel}
            </Text>
        </ToggleItem>
        <ToggleItem
            onClick={() => toggleClick(2)}
            show={selectedLayer === 2}
            type={type}
            size={size}
            rightLabel={rightLabel}
        >
            <Text font="primaryBoldDisplay" color="foregroundHighEmphasis" textAlign="center">
            {rightLabel}
            </Text>
        </ToggleItem>
    </ToggleButtonWrapper>
  );
};

export default ToggleButton;