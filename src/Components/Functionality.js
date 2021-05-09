import { Tab, Tabs, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  tabs: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderBottom: '1px solid #fff',
  },
  tab: {
    textTransform: 'uppercase',
    color: '#5DAAE0BF',
    '&$selected': {
      opacity: 1,
      color: '#fff',
    },
    '&:focus': {
      opacity: 1,
      color: '#fff',
    },
  },
});

const Functionality = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        centered
        classes={{
          indicator: classes.tabs,
        }}
      >
        <Tab label="To Call List" className={classes.tab} />
        <Tab label="Finished Call List" className={classes.tab} />
        <Tab label="Search Result" className={classes.tab} />
      </Tabs>
    </div>
  );
};

export default Functionality;
