import {Link} from '@mxjs/router';
import PropTypes from 'prop-types';

const EditLink = ({href, children, ...props}) => (
  <Link to={href} {...props}>{children || '编辑'}</Link>
);

EditLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};

export default EditLink;
