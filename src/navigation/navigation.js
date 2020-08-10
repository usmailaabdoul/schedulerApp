import React from 'react';

import {
  Scene,
  Router,
  Actions,
  Tabs,
  Stack,
  LegacyTabs,
} from 'react-native-router-flux';

import {Home, Drawer, NewSchedule, Splash, Auth} from '../screens';
import styles from './navigation.style';
import Screens from '../components/TabIcons/Screens';
import TabIcons from './../components/TabIcons/TabIcons';

const Navigation = () => {
  return (
    <Router {...sceneConfig}>
      <Scene>
        <Stack key="root" hideNavBar>
          <Scene key="splash" component={Splash} initial hideNavBar={true} />
          <Scene key="auth" component={Auth} hideNavBar={true} />

          {/* Tab Bar */}
          <Scene
            hideNavBar
            panHandlers={null}
            animationEnabled={false}
            key="tabs">
            <Tabs
              key="tabbar"
              swipeEnabled={false}
              showLabel={false}
              tabBarStyle={styles.tabBar}
              tabBarPosition="bottom">
              <Scene
                key="home"
                icon={TabIcons}
                title={Screens.HOME}
                component={Home}
                hideNavBar={true}
              />

              <Scene
                key="newSchedule"
                component={NewSchedule}
                icon={TabIcons}
                hideNavBar={true}
                title={Screens.NewSchedule}
              />

              <Scene
                key="drawer"
                component={Drawer}
                icon={TabIcons}
                hideNavBar={true}
                title={Screens.Drawer}
              />
            </Tabs>
          </Scene>
          {/* <Scene
              key="pooldetails"
              component={PoolDetails}
              hideNavBar={true}
            /> */}
        </Stack>
      </Scene>
    </Router>
  );
};

export default Navigation;

const sceneConfig = {
  cardStyle: {
    backgroundColor: '#f1f1f1',
  },
};
