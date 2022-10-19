import {Link} from '@mxjs/router';
import PropTypes from 'prop-types';

const ShowLink = ({href, children, ...props}) => (
  <Link to={href} {...props}>{children || '查看'}</Link>
);

ShowLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};

export default ShowLink;
