import React from 'react';
import {Switch,Route} from 'react-router-dom';
// import {Link} from 'react-router-dom';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Drawere from './drawer.component';
import Ranking from '../../components/ranking/ranking.component';
import MyClasses from '../../components/myclasses/myclasses.component';
import GpaMentor from '../../components/gpamentor/gpamentor.component';
import AddDrop from '../../components/adddrop/adddrop.component';
import Histogram from '../../components/histogram/histogram.component';
import Profile from '../../components/profile/profile.component';
import Deneme from '../../components/deneme/deneme.component';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    minHeight: 300,
    padding: theme.spacing(3),
  },
}));

const Dashboard = ()  => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawere/>
      
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path='/dashboard/ranking'  component={Ranking}/>
          <Route path='/dashboard/myclasses'  component={MyClasses}/>
          <Route path='/dashboard/gpa_mentor' component={GpaMentor}/>
          <Route path='/dashboard/add_drop' component={AddDrop}/>
          <Route path='/dashboard/histogram' component={Histogram}/>
          <Route path='/dashboard/profile' component={Profile}/>
          <Route path="/dashboard/deneme" component={Deneme}/>

        </Switch>

        
        
      </main>
    </div>
  );
}

export default Dashboard;