import { Link, Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div>
      DashboardLayout
      <div className="space-x-2">
        <Link to="/">Home page</Link>
        <Link to="/main">main page</Link>
        <Link to="/settings">settings page</Link>
        <Link to="/login">login page</Link>
        <Link to="/sign-up">Sign up page</Link>
        <Link to="/forgot-password">Forgot Password page</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default DashboardLayout
