import Login from '../views/Login/index.svelte';
import Logup from '../views/Logup/index.svelte'
import ResetPassword from '../views/ResetPassword/index.svelte'
import Home from '../views/Home/index.svelte'

const routes = {
  '/': Login,
  '/login': Login,
  '/logup': Logup,
  '/resetPassword': ResetPassword,
  '/home': Home
}

export default routes