import '@testing-library/jest-dom';
import{render,screen ,cleanup} from'@testing-library/react';
import sensorpage from "../../homepage/sensor/sensorpage";
import {userEvent} from'@testing-library/user-event';

test('test',()=> {expect(true).toBe(true)});
test('on initial render,the Add New Sensor  is disabled',async()=>{
    render(<createFarmPage/>)
    screen.debug();
})
test('if Serial Number,Sensor Location,Default GGD,Sensor Installation Dateand Last Cutting Date At This Field is entered, the the Add New Sensor  Button becomes enabled',async()=>{render(<createFarmPage/>)

screen.debug();
});