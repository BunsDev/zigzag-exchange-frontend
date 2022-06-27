import { Checkbox } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { chartSettingsSelector, setTradingSetting } from "lib/store/features/chart/chartSlice";

const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Items = styled.div`
    display: flex;
    flex-direction: column;
`;

const ResetButton = styled.div`
    margin: 12px;
    padding: 4px 12px;
    background: #3F51B5;
    border: 1px solid #3F51B5;
    border-radius: 2px;
    color: white;
    cursor: pointer;
    &:hover{
        background: #33439c;
    }
`;


const TradingSettings = () => {
    const dispatch = useDispatch();
    const settings = useSelector(chartSettingsSelector);

    const updateSetting = (value) => {
        //setChartSettings({...value})
        console.log(value);
        dispatch(setTradingSetting(value));
    }

    return (
        <Items>
            {/* orders */}
            <Item>
                <Checkbox color="primary" 
                    onChange={(e) => updateSetting({  showOrders: e.checked})}
                    checked={settings.trading.showOrders}/>Show Orders
            </Item>
            <Item>
                <Checkbox color="primary"
                    onChange={(e) => updateSetting({showExecutions: e.checked})}
                    checked={settings.trading.showExecutions} />Show Executions
            </Item>

            {/* lines */}
            <Item>
                <Items>
                    <Item>
                        <Checkbox color="primary" defaultChecked />Extend lines
                    </Item>
                </Items>
            </Item>

            {/* misc */}
            <Item>
                <Checkbox onClick={() => updateSetting({sound: !settings.sound})}  color="primary" checked={false}/>Play sound on order execution
            </Item>

            {/* reset */}
            <Item>
                <ResetButton>Defaults</ResetButton>
            </Item>
        </Items>
    );
}

export default TradingSettings;
