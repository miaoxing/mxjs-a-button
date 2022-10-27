import $ from 'miaoxing';
import PropTypes from 'prop-types';
import {Typography} from 'antd';

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
  return <Typography.Link type="danger" href="#" onClick={handleDelete.bind(this, message, href, onDelete)} {...rest}>
    {children || '删除'}
  </Typography.Link>;
};

DeleteLink.propTypes = {
  message: PropTypes.string,
  href: PropTypes.string,
  onDelete: PropTypes.func,
  children: PropTypes.node,
};

export default DeleteLink;
