import PropTypes from 'prop-types';
import BtnLink from './BtnLink';

const BackBtn = ({href, children, ...props}) => (
  <BtnLink to={href} {...props}>
    {children || '返回'}
  </BtnLink>
);

BackBtn.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};

export default BackBtn;
