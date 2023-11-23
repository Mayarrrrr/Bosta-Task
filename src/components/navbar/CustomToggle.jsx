import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { createContext, useContext } from 'react';
import { useTranslation } from 'react-i18next';

export const TrackingNumContext = createContext({
    trackingNum: '67151313',
    updateTrackingNum: () => {
    },
  });

//export let trackingNum = '13737343'


const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));

const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('');
    const { trackingNum, updateTrackingNum } = useContext(TrackingNumContext);
    const handleSearchClick = () => {
        // Pass the value variable to the updateTrackingNum function
        updateTrackingNum(value);
      };

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <Form.Control
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="رقم شحنتك"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <Button variant="danger" style={{marginLeft:'15px'}} onClick={updateTrackingNum}> Search</Button>
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul>
      </div>
    );
  },
);

const CustomDropdown = () => {
  const { t } = useTranslation();

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
      {t('Track your shipment')} 
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu}>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CustomDropdown;
