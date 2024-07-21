import PropTypes from 'prop-types';
import BtnLink from './BtnLink';

const BackBtn = ({ to, children, ...props }) => {
  return (
    <BtnLink to={to} {...props}>
      {children || '返回'}
    </BtnLink>
  );
};

BackBtn.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};

export default BackBtn;
