import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Discover from '~/pages/Discover';
import Live from '~/pages/Live';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

import { HeaderOnly } from '~/layouts';
import config from '~/config';

const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.following,
    component: Following,
  },
  {
    path: config.routes.discover,
    component: Discover,
  },
  {
    path: config.routes.live,
    component: Live,
  },
  {
    path: config.routes.profile,
    component: Profile,
  },
  {
    path: config.routes.upload,
    component: Upload,
    layout: HeaderOnly,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
