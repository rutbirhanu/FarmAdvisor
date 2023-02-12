import '@testing-library/jest-dom';
  import alert_component from"../alert_component"
import{render,screen,cleanup} from'@testing-library/react';
import {userEvent} from'@testing-library/user-event';

test('test',()=> {expect(true).toBe(true)});
test('shoud render alert_component component',()=>{render(<alert_component/>);
// const alert_componentElement=screen.getAllByTestId('selam');
// expect(todoElement).toBeInTheDocument();
screen.debug();
})