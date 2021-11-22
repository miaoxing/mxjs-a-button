import React from 'react';
import {Link} from '@mxjs/router';
import {Button} from 'antd';
import PropTypes from 'prop-types';

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
  return <Link to={to} component={AntdLink} {...rest}/>;
};

BtnLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};

export default BtnLink;
