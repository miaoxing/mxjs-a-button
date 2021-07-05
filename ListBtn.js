import BtnLink from './BtnLink';
import PropTypes from 'prop-types';

const ListBtn = ({href, children, ...props}) => (
  <BtnLink to={href} variant="secondary" {...props}>
    {children || '返回列表'}
  </BtnLink>
);

ListBtn.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};

export default ListBtn;
