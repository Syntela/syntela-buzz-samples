import React, { Suspense, lazy } from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from './components/ReduxStore';
import Login from "./pages/token-page/TokenPage"
import Menu from "./pages/menu-page/MenuPage";
import ErrorHandling from './pages/ErrorHandlingPage/ErrorHandling';
import './navigation/MenuPageButtons/MenuPageButtons.css';

const createRouter = () => {
  // Using React.lazy to dynamically import the components
  const ChatRoomListApp = lazy(() => import("./pages/chat-room-list/App"));
  const ListWidgetUiApp = lazy(() => import('./pages/list-widget-ui/App'));
  const SimpleMeetingApp = lazy(() => import("./pages/simple-meeting/App"));
  const PopoutChatApp = lazy(() => import("./pages/popout-chat/App"));
  const TabbedDashboardApp = lazy(() => import("./pages/tabbed-dashboard/App"));
  const MeetingDevicesApp = lazy(() => import("./pages/meeting-devices/App"));

  return createBrowserRouter([
    {
      path: "/syntela-buzz-samples",
      element: <Login />,
    },
    {
      path: "/syntela-buzz-samples/menu",
      element: <Menu />,
    },
    {
      path: "/syntela-buzz-samples/chat-room-list",
      element: <ChatRoomListApp />
    },
    {
      path: "/syntela-buzz-samples/list-widget-ui",
      element: <ListWidgetUiApp />
    },
    {
      path: "/syntela-buzz-samples/simple-meeting",
      element: <SimpleMeetingApp />
    },
    {
      path: "/syntela-buzz-samples/meeting-devices",
      element: <MeetingDevicesApp />
    },
    {
      path: "/syntela-buzz-samples/popout-chat",
      element: <PopoutChatApp />
    },
    {
      path: "/syntela-buzz-samples/tabbed-dashboard",
      element: <TabbedDashboardApp />
    },
    {
      path: "/syntela-buzz-samples/error-handling",
      element: <ErrorHandling />
    },
  ]);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={createRouter()}/>
      </Suspense>
    </Provider>
  </React.StrictMode>
);
