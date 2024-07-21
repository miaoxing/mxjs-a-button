import BtnLink from './BtnLink';
import PropTypes from 'prop-types';

const ListBtn = ({to, children, ...props}) => (
  <BtnLink to={to} {...props}>
    {children || '返回列表'}
  </BtnLink>
);

ListBtn.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};

export default ListBtn;
