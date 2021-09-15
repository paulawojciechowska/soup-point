import React from 'react';
import { Wrapper } from './Select.styles';

const Select = React.forwardRef(({ options, name, ...props }, ref) => (
  <Wrapper name={name} {...props} ref={ref}>
    <option value="">-Pick {name}-</option>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </Wrapper>
));

export default Select;
