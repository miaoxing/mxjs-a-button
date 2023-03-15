import {AccessLink} from '@mxjs/router';
import PropTypes from 'prop-types';

const ShowLink = ({href, children, ...props}) => (
  <AccessLink to={href} {...props}>{children || '查看'}</AccessLink>
);

ShowLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};

export default ShowLink;
