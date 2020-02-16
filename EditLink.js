import React from 'react';
import {Link} from '@miaoxing/router';

export default ({href, children, ...props}) => (
  <Link to={href} {...props}>{children || '编辑'}</Link>
);

