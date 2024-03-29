import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../components/default-layout'
import { Home } from '../pages/home'
import { Cart } from '../pages/cart'
import { Success } from '../pages/success'
import { NotFound } from '../pages/not-found'
export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
