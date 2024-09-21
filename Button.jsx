import { Button as AntdButton } from 'antd';
import { Access } from '@mxjs/auth';
import propTypes from 'prop-types';

const Button = ({ permission, children, ...props }) => {
  return (
    <Access permission={permission}>
      <AntdButton {...props}>
        {children}
      </AntdButton>
    </Access>
  )
};

Button.propTypes = {
  permission: propTypes.string,
  children: propTypes.node,
}

export default Button;