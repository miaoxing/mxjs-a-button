import { AccessLink } from '@mxjs/router';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const BtnLink = ({ to, ...rest }) => {
  return <AccessLink to={to} component={Button} {...rest}/>;
};

BtnLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};

export default BtnLink;
