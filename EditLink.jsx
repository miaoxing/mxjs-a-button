import {AccessLink} from '@mxjs/router';
import PropTypes from 'prop-types';

const EditLink = ({href, children, ...props}) => (
  <AccessLink to={href} {...props}>{children || '编辑'}</AccessLink>
);

EditLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};

export default EditLink;
