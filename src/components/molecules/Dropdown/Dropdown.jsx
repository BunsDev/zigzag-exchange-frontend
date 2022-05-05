import React, { useState, cloneElement, isValidElement, useRef } from 'react'
import styled from 'styled-components'
import { ExpandableButton } from '../ExpandableButton'
import { IconButton as baseIcon } from "../IconButton";
import Text from '../../atoms/Text/Text'
import { HideMenuOnOutsideClicked } from 'lib/utils'

const DropdownWrapper = styled.div`
    position: relative;
`

const Wrapper = styled.div`
    position: absolute;
    width: ${({ width }) => `${width*2}px`};
    max-width: 250px;
    background-color: ${({ theme }) => theme.colors.backgroundMediumEmphasis};
    border: 1px solid ${({ theme }) => theme.colors.foreground400};
    box-shadow: 0px 8px 16px 0px #0101011A;
    backdrop-filter: blur(8px);
    padding: 20px;
    border-radius: 8px;
    display: grid;
    gap: 16px;
    align-items: start;
    z-index: 100;
`

const DropdownListContainer = styled.div`
    display: grid;
    // grid-auto-flow: column;
    height: 31px;
    align-items: center;
    grid-template-columns: ${({ leftIcon }) => leftIcon ? '32px 1fr' : '1fr 16px'};
    cursor: pointer;
`

const IconButton = styled(baseIcon)`
    width: 24px;
    height: 24px;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.foreground400};
    border-radius: 9999px;
    padding: 0px !important;
    svg {
        margin-right: 0px !important;
        margin-left: 0px !important;
    }
`

const Dropdown = ({width, item, context, leftIcon, rightIcon, transparent, clickFunction}) => {
    const [isOpened, setIsOpened] = useState(false)
    const wrapperRef = useRef(null)

    HideMenuOnOutsideClicked(wrapperRef, setIsOpened)

    const toggle = () => {
        setIsOpened(!isOpened)
    }

    const handleClick = (url, text, value) => {
        if(url !== '#'){
            window.location.href = url
        }else{
            clickFunction(text, value)
            toggle()
        }
    }

    return (
        <DropdownWrapper ref={wrapperRef}> 
            <ExpandableButton width={width} transparent={transparent} expanded={isOpened} onClick={toggle}>{context}</ExpandableButton>
            { isOpened &&
                <Wrapper width={width}>
                        {item.map((items) => {
                            const {text, value, url, icon, selectedIcon, iconSelected} = items
                            const menuIcon = iconSelected ? selectedIcon : icon
                        return (
                        <DropdownListContainer key={items.text} leftIcon={leftIcon} onClick={()=> handleClick(url, text, value)}>
                            {leftIcon && isValidElement(menuIcon) && <IconButton variant="secondary" startIcon={cloneElement(menuIcon)}></IconButton>}
                            <Text font="primaryExtraSmallSemiBold" color="foregroundHighEmphasis">{text}</Text>
			                {rightIcon && isValidElement(menuIcon) && <IconButton variant="secondary" endIcon={cloneElement(menuIcon)}></IconButton>}
                        </DropdownListContainer>
                        )
                    })}     
                </Wrapper> 
            }
        </DropdownWrapper>
    )
}

export default Dropdown