import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, User, X, Bell, MessageCircle, PlaneTakeoff } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '@/redux/slices/userAuthSlice';
import type { AppDispatch, RootState } from '@/redux/store';
import { toast } from 'sonner';
import { useTotalUnreadCount } from '@/hooks/useTotalUnreadCount';
import { EnumUserRole } from '@/Constants/enums/userEnum';
import { OptionsDropdown } from '../OptionsDropdown ';
import ProtectedLink from '../ProtectedLink';

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();

  const { isAuthenticated, accessToken, user } = useSelector((state: RootState) => state.userAuth);

  const notificationUnread = useSelector((state: RootState) => state.notifications.unreadCount);

  const totalChatUnread = useTotalUnreadCount(EnumUserRole.USER);

  const unreadNotifications = isAuthenticated ? notificationUnread : 0;
  const unreadChats = isAuthenticated ? totalChatUnread : 0;

  useEffect(() => {
    if (!accessToken) {
      dispatch(logoutUser());
    }
  }, [accessToken, dispatch]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const profileImage = user?.profileImage?.url
    ? user.profileImage.url.replace('/upload/', '/upload/f_webp,q_auto/')
    : '/profile-default.jpg';

  // ✅ Active logic
  // const isActive = (path: string) =>
  //   location.pathname === path || location.pathname.startsWith(path);
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'; // exact match only
    }
    return location.pathname.startsWith(path);
  };
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="bg-background shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center space-x-8">
            {/* <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-orange">
              Picnigo
              <PlaneTakeoff className="w-6 h-6" />
            </Link> */}
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
              <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                Picnigo
              </span>
              <PlaneTakeoff className="w-5 h-5 text-orange-500" />
            </Link>
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { to: '/', label: 'Home' },
                { to: '/packages', label: 'Packages' },
                { to: '/blog', label: 'Blog' },
                { to: '/about', label: 'About' },
                { to: '/contact-us', label: 'Contact Us' },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`relative pb-1 ${isActive(item.to) ? 'text-orange font-semibold' : 'hover:text-orange'
                    }`}
                >
                  {item.label}
                  {isActive(item.to) && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-orange rounded"></span>
                  )}
                </Link>
              ))}

              <ProtectedLink
                to="/custom-package"
                requireAuth
                className={`relative pb-1 ${isActive('/custom-package') ? 'text-orange font-semibold' : 'hover:text-orange'
                  }`}
              >
                Custom Package
                {isActive('/custom-package') && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-orange"></span>
                )}
              </ProtectedLink>

              {/* <Link to="/demo" className="bg-orange text-white px-3 py-1 rounded text-sm">
                Demo Access
              </Link> */}
            </nav>
          </div>

          {/* RIGHT */}
          <div className="flex items-center space-x-5">
            {/* ✅ Chat Icon */}
            <ProtectedLink to="/chat" requireAuth className="relative flex flex-col items-center">
              <MessageCircle
                className={`w-6 h-6 ${isActive('/chat') ? 'text-orange' : 'hover:text-orange'}`}
              />
              {unreadChats > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                  {unreadChats}
                </span>
              )}
              {isActive('/chat') && (
                <span className="absolute -bottom-1 w-5 h-[2px] bg-orange rounded"></span>
              )}
            </ProtectedLink>

            {/* ✅ Notification Icon */}
            <ProtectedLink
              to="/notification"
              requireAuth
              className="relative flex flex-col items-center"
            >
              <Bell
                className={`w-6 h-6 ${isActive('/notification') ? 'text-orange' : 'hover:text-orange'
                  }`}
              />
              {unreadNotifications > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                  {unreadNotifications}
                </span>
              )}
              {isActive('/notification') && (
                <span className="absolute -bottom-1 w-5 h-[2px] bg-orange rounded"></span>
              )}
            </ProtectedLink>

            {/* Auth */}
            {isAuthenticated ? (
              <div className="hidden sm:flex">
                <OptionsDropdown
                  options={[
                    { label: 'My Account', value: 'profile' },
                    { label: 'Wishlist', value: 'wishlist' },
                    { label: 'Logout', value: 'logout', className: 'text-red-500' },
                  ]}
                  onSelect={(value) => {
                    if (value === 'profile') navigate('/account/profile');
                    else if (value === 'wishlist') navigate('/account/wishlist');
                    else if (value === 'logout') {
                      dispatch(logoutUser());
                      toast.success('Logout successful');
                    }
                  }}
                  triggerElement={
                    <img src={profileImage} className="w-10 h-10 rounded-full cursor-pointer" />
                  }
                />
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="border-orange text-orange hover:bg-orange hover:text-white hidden sm:flex"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-orange hover:bg-orange-dark text-white hidden sm:flex">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}

            {/* Mobile Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-3 border-t pt-4">
            {[
              { to: '/', label: 'Home' },
              { to: '/packages', label: 'Packages' },
              { to: '/blog', label: 'Blog' },
              { to: '/about', label: 'About' },
              { to: '/contact-us', label: 'Contact Us' },

            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className="block px-2 py-2 rounded hover:bg-gray-100"
              >
                {item.label}
              </Link>
            ))}

            <ProtectedLink
              to="/custom-package"
              requireAuth
              onClick={closeMenu}
              className="px-2 py-2"
            >
              Custom Package
            </ProtectedLink>

            <ProtectedLink to="/chat" requireAuth onClick={closeMenu} className="px-2 py-2">
              Chat ({unreadChats})
            </ProtectedLink>

            <ProtectedLink to="/notification" requireAuth onClick={closeMenu} className="px-2 py-2">
              Notifications ({unreadNotifications})
            </ProtectedLink>
            <ProtectedLink
              to="/account/profile"
              requireAuth
              onClick={closeMenu}
              className="px-2 py-2"
            >
              Account
            </ProtectedLink>
            {isAuthenticated ? (
              <button
                onClick={() => {
                  dispatch(logoutUser());
                  closeMenu();
                }}
                className="text-red-500 px-2 py-2"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" onClick={closeMenu} className="px-2 py-2">
                  Login
                </Link>
                <Link to="/signup" onClick={closeMenu} className="px-2 py-2">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
