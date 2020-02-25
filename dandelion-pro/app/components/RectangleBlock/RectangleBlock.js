import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Ionicon from 'react-ionicons';
import styles from './papperStyle-jss';
import 'dan-styles/Rectangle.scss';


class RectangleBlock extends React.Component {
  render() {
    const {
      classes,
      title,
      desc,
      children,
      whiteBg,
      noMargin,
      colorMode,
      overflowX,
      icon,
      data
    } = this.props;
    return (
      <div className="ReactangleConmponent">
          <div >
            <Typography component="h2" >
              {data.title}
            </Typography>
            <Typography component="h1" >
              {data.number}
            </Typography>
            <Typography component="a">
              {data.link}
            </Typography>
          </div>
      </div>
    );
  }
}

RectangleBlock.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
  whiteBg: PropTypes.bool,
  colorMode: PropTypes.bool,
  noMargin: PropTypes.bool,
  overflowX: PropTypes.bool,
};

RectangleBlock.defaultProps = {
  whiteBg: false,
  noMargin: false,
  colorMode: false,
  overflowX: false,
  icon: 'ios-bookmark-outline'
};

export default compose(withStyles(styles))(RectangleBlock);
