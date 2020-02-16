import Profile from './components/pages/Profile'
import Blog from './components/pages/Blog'
import PetProjects from './components/pages/PetProjects'
import Contact from './components/pages/Contact'

const Routes = [
    
  {
    path: '/',
    component: Blog,
    activeClassName: 'is-active',
  },
  {
    path: '/pet-projects',
    component: PetProjects,
    activeClassName: 'is-active',
  },
  {
    path: '/profile',
    component: Profile,
    activeClassName: 'is-active',
  },
  {
    path: '/contact',
    component: Contact,
    activeClassName: 'is-active',
  }]; 



export default Routes  