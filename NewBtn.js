import BtnLink from './BtnLink';
import PropTypes from 'prop-types';

const NewBtn = ({href, children, ...props}) => (
  <BtnLink to={href} variant="success" {...props}>{children || '添 加'}</BtnLink>
);

NewBtn.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};

export default NewBtn;
