import BtnLink from './BtnLink';
import PropTypes from 'prop-types';

const NewBtn = ({to, children, ...props}) => (
  <BtnLink to={to} type="primary" {...props}>{children || '添加'}</BtnLink>
);

NewBtn.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};

export default NewBtn;
