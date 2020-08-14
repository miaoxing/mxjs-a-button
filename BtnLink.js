import React from 'react';
import {Link} from '@mxjs/router';
import {Button} from '@mxjs/bootstrap';
import PropTypes from 'prop-types';

const BtnLink = ({to, children, ...rest}) => {
  return <Button active="dd" as={Link} href={to} to={to} {...rest}>{children}</Button>;
};

BtnLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node
};

export default BtnLink;
