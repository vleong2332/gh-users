import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  layover: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
}));

const body = document.querySelector('body');

export function Layover(props) {
  const { hid = false, children } = props;
  const styles = useStyles(props);

  useEffect(() => {
    body.style.overflow = hid ? 'auto' : 'hidden';
  }, [hid]);

  return hid ? null : (
    <div className={styles.layover}>
      {children}
    </div>
  );
}
