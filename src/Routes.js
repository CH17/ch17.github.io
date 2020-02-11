import Profile from './components/pages/Profile'
import Blog from './components/pages/Blog'
import PetProjects from './components/pages/PetProjects'
import Skills from './components/pages/Skills'
import Contact from './components/pages/Contact'

const Routes = [
    
  {
    path: '/',
    component: Profile,
    activeClassName: 'is-active',
  }, 
  {
    path: '/blog',
    component: Blog,
  },
  {
    path: '/pet-projects',
    component: PetProjects,
    activeClassName: 'is-active',
  },
  {
    path: '/skills',
    component: Skills,
    activeClassName: 'is-active',
  },
  {
    path: '/contact',
    component: Contact,
    activeClassName: 'is-active',
  }]; 



export default Routes  