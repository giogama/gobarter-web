import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip/index';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #232129;
    border-radius: 10px;
    padding: 16px;
    width: 100%;  
    display: flex;
    align-items: center;

    border: 2px solid #232129;
    color: #666360;

    & + div {
            margin-top: 8px;
    }   

    ${props => props.isErrored && css`        
        border-color: #C53030;
    `}
    
    ${props => props.isFocused && css`
        border-color: #FF9000;
        color: #FF9000;
    `}

    ${props => props.isFilled && css`        
        color: #FF9000;
    `}

    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #F4EDE8;

        
        &::placeholder {
            color: #666360;
        }
    }

    svg {
        margin-right: 16px;        
    }

    
`; 

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;

    svg {
        margin: 0;
    }

    span {
        background: #c53030;
        color: #FFF;
        
        &::before {
            border-color: #c53030 transparent;
        }
    }
`;