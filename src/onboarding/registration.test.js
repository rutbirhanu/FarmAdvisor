import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Register from './register';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders phone number input and country select', () => {
  act(() => {
    render ( 
   
        <Routes>   
            <Route path="/register" element= {<Register />}/>
        </Routes>,
   
     container
     );

  });
  const phoneInput = container.querySelector('input[type="tel"]');
  const countrySelect = container.querySelector('select');
  expect(phoneInput).toBeTruthy();
  expect(countrySelect).toBeTruthy();
});

it('updates phone number on input change', () => {
  act(() => {
    render( 
    
    <BrowserRouter>
        <Routes>   
            <Route path="/register" element= {<Register />}/>
        </Routes>
    </BrowserRouter>, container );
  });
  const phoneInput = container.querySelector('input[type="tel"]');
  act(() => {
    phoneInput.value = '1234567890';
    phoneInput.dispatchEvent(new Event('change'));
  });
  expect(phoneInput.value).toBe('1234567890');
});

it('renders continue button and navigates to verify page', () => {
  act(() => {
    render(<Register />, container);
  });
  const button = container.querySelector('.button');
  expect(button).toBeTruthy();
  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(window.location.pathname).toBe('/verify');
});
