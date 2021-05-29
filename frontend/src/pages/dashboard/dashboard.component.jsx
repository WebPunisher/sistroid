import React from 'react';
import {Switch,Route} from 'react-router-dom';
// import {Link} from 'react-router-dom';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import Drawere from './drawer.component';
import Ranking from '../../components/ranking/ranking.component';
import MyClasses from '../../components/myclasses/myclasses.component';
import GpaMentor from '../../components/gpamentor/gpamentor.component';
import AddDrop from '../../components/adddrop/adddrop.component';
import Histogram from '../../components/histogram/histogram.component';
import Profile from '../../components/profile/profile.component';

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

        </Switch>

        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography> */}
        
      </main>
    </div>
  );
}

export default Dashboard;