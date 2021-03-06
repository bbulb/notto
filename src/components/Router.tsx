import { HashRouter, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Result } from '../pages/Result'
import { Scan } from '../pages/Scan'
import { Header } from './Header'

export const Router: React.FC = () => {
  return (
    <HashRouter>
      <Header />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/scan'>
        <Scan />
      </Route>
      <Route path='/result/:v'>
        <Result />
      </Route>
    </HashRouter>
  )
}
