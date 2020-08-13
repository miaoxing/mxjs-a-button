import React from 'react';
import $ from 'miaoxing';
import PropTypes from 'prop-types';

class DeleteLink extends React.Component {
  static propTypes = {
    message: PropTypes.string,
    href: PropTypes.string,
    onDelete: PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();

    $.confirm(this.props.message, (result) => {
      if (!result) {
        return;
      }

      $.post({
        url: this.props.href,
        loading: true,
        dataType: 'json'
      }).then(ret => {
        $.ret(ret);
        if (ret.code === 1) {
          this.props.onDelete && this.props.onDelete();
        }
      });
    });
  }

  render() {
    const {message, href, onDelete, ...rest} = this.props;
    return <a className="text-danger" href="#" onClick={this.handleDelete} {...rest}>
      删除
    </a>;
  }
}

DeleteLink.defaultProps = {
  message: '删除后将无法还原,确定删除?',
};

export default DeleteLink;
