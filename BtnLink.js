import React from 'react';
import {AccessLink} from '@mxjs/router';
import PropTypes from 'prop-types';
import Button from 'antd-button-color';
import 'antd-button-color/dist/css/style.less';

const AntdLink = React.forwardRef(({navigate, children, ...props}, ref) => {
  return (
    <Button ref={ref} onClick={(e) => {
      e.preventDefault();
      navigate(props.href);
    }} {...props}>{children}</Button>
  );
});

AntdLink.propTypes = {
  navigate: PropTypes.func,
  href: PropTypes.string,
  children: PropTypes.node,
};

const BtnLink = ({to, ...rest}) => {
  return <AccessLink to={to} component={AntdLink} {...rest}/>;
};

BtnLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};

export default BtnLink;
