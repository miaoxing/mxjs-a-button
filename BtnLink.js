import React from 'react';
import {Link} from '@mxjs/router';
import {Button} from '@mxjs/bootstrap';

export default ({to, children, ...rest}) => {
  return <Button as={Link} href={to} to={to} {...rest}>{children}</Button>;
};
