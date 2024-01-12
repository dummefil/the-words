"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
var react_1 = require("react");
var client_1 = require("react-dom/client");
var App_tsx_1 = require("./App.tsx");
var react_redux_1 = require("react-redux");
var store_1 = require("./store");
var react_router_dom_1 = require("react-router-dom");
var root = client_1.default.createRoot(document.getElementById('root'));
var router = (0, react_router_dom_1.createBrowserRouter)([
    {
        path: "*",
        element: <App_tsx_1.default />,
    }
]);
var AppRouter = function () { return <react_router_dom_1.RouterProvider router={router}/>; };
exports.AppRouter = AppRouter;
root.render(<react_1.default.StrictMode>
      <react_redux_1.Provider store={store_1.default}>
          <exports.AppRouter />
      </react_redux_1.Provider>
  </react_1.default.StrictMode>);
