import { getCountries, getCountryCallingCode } from 'react-phone-number-input/core';


export const  countryOptions = ({value,labels,...rest})=>(getCountries().map((country) => (
   {
  label: `${labels[country]} (+${getCountryCallingCode(country)})`,
  value: `+${getCountryCallingCode(country)}`,
})));

