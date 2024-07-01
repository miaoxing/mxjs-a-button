import BtnLink from './BtnLink';
import PropTypes from 'prop-types';

const NewBtn = ({href, children, ...props}) => (
  <BtnLink to={href} type="primary" {...props}>{children || '添加'}</BtnLink>
);

NewBtn.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};

export default NewBtn;
