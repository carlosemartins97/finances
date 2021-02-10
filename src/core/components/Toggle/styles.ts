import styled, { ThemeConsumer } from 'styled-components';
import Switch, {ReactSwitchProps} from 'react-switch';

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const ToggleLabel = styled.span`
    color: ${props => props.theme.colors.white};
    margin: 0 7px;

`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
    ({theme }) => ({
        onColor: theme.colors.info,
        offColor: theme.colors.warning,
    })
)<ReactSwitchProps>``;