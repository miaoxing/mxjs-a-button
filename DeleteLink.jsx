import $ from 'miaoxing';
import PropTypes from 'prop-types';
import {Typography} from 'antd';
import {withAccess} from '@mxjs/auth';

const Link = withAccess(Typography.Link);

const handleDelete = (message, href, onDelete, e) => {
  e.preventDefault();

  $.confirm(message, (result) => {
    if (!result) {
      return;
    }

    $.delete({
      url: href,
      loading: true,
      dataType: 'json',
    }).then(({ret}) => {
      $.ret(ret);
      if (ret.isSuc()) {
        onDelete && onDelete();
      }
    });
  });
};

const DeleteLink = ({message = '删除后将无法还原,确定删除?', href, onDelete, children, ...rest}) => {
  return <Link permission={href} type="danger" href="#" onClick={handleDelete.bind(this, message, href, onDelete)} {...rest}>
    {children || '删除'}
  </Link>;
};

DeleteLink.propTypes = {
  message: PropTypes.string,
  href: PropTypes.string,
  onDelete: PropTypes.func,
  children: PropTypes.node,
};

export default DeleteLink;
