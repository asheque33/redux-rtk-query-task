import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Signup from '../components/pages/signup/Signup';
import SignIn from '@/components/pages/signIn/SignIn';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import FAQWithToggle from '@/components/pages/faq/FAQ';
import DashboardHome from '@/components/dashboard/home/DashboardHome';
import HelpSupportPage from '@/components/pages/help&support/Help&Support';
import Users from '@/components/pages/users/Users';
import ManageSubscription from '@/components/pages/subscription/ManageSubscription';
import EditProfile from '@/components/pages/EditProfile';
import VerificationCode from '@/components/pages/verification_code/VerificationCode';
import ProtectedRoute from '@/components/shared/ProtectedRoute';
import StripeCheckout from '@/components/pages/stripe/StripeCheckout';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <App />,
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: '/manageSubscription',
        element: <ManageSubscription />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/editProfile',
        element: <EditProfile />,
      },
      {
        path: '/helpAndSupport',
        element: <HelpSupportPage />,
      },
      {
        path: '/faq',
        element: <FAQWithToggle />,
      },
    ],
  },
  {
    path: '/checkout/stripe',
    element: <StripeCheckout />,
  },
  {
    path: '/signUp',
    element: <Signup />,
  },
  {
    path: '/verificationCode',
    element: <VerificationCode />,
  },
  {
    path: '/login',
    element: <SignIn />,
  },
]);
export default router;
