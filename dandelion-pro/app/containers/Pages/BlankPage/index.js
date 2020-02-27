/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import css from './index.scss';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <Link to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

// eslint-disable-next-line react/no-multi-comp
class BlankPage extends React.Component {
  render() {
    const title = brand.name + ' - Blank Page';
    const description = brand.desc;
    return (
      <div className={css.BlankPageComponent}>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <PapperBlock title="" desc="">
          <Button
            variant="contained"
            color=""
            className={css.buttonLink}
            component={LinkBtn}
            to="/app/forms/date-time-picker"
          >
            NIEUW OFFERTE &nbsp; &#x279C;
          </Button>
          {this.props.children}
        </PapperBlock>
      </div>
    );
  }
}

export default BlankPage;
