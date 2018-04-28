import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';

import Button from './Button';
import styles from './index.block.css';

function Loading(props) {
  if (props.isLoading) {
    if (props.timedOut) {
      return <div>Loader timed out!</div>;
    } else if (props.pastDelay) {
      return <div>Loading...</div>;
    } else {
      return null;
    }
  } else if (props.error) {
    return <div>Error! Component failed to load</div>;
  } else {
    return null;
  }
}

const LoadableComponent = Loadable({
  loader: () => import('./Strong.jsx'),
  loading: Loading
});

ReactDOM.render(
  <div className={styles}>Hello CSS Blocks! <Button /> <LoadableComponent /></div>,
  document.getElementById('app')
);
