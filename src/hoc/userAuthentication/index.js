import locationHelperBuilder from "redux-auth-wrapper/history4/locationHelper";
import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";
import { createBrowserHistory } from "history";

//import { Login } from "@pages";

const browserHistory = createBrowserHistory();

const locationHelper = locationHelperBuilder({});
// const browserHistory = createBrowserHistory();

export const userIsAuthenticated = connectedRouterRedirect({
  wrapperDisplayName: "UserIsAuthenticated",
  allowRedirectBack: true,
  // The url to redirect user to if they fail
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || "/login",
  authenticatingSelector: ({ firebase: { auth, profile, isInitializing } }) =>
    !auth.isLoaded || isInitializing === true,
  // If selector is true, wrapper will not redirect
  // For example let's check that state contains user data
  authenticatedSelector: ({ firebase: { auth } }) =>
    auth.isLoaded && !auth.isEmpty,
  // A nice display name for this check
  redirectAction: (newLoc) => (dispatch) => {
    browserHistory.replace(newLoc); // or routerActions.replace
    dispatch({ type: "UNAUTHED_REDIRECT" });
  },
});

export const userIsNotAuthenticated = connectedRouterRedirect({
  // A nice display name for this check
  wrapperDisplayName: "UserIsNotAuthenticated",
  // This prevents us from adding the query parameter when we send the user away from the login page
  allowRedirectBack: false,
  // This sends the user either to the query param route if we have one, or to the landing page if none is specified and the user is already logged in
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || "/profile",

  // If selector is true, wrapper will not redirect
  // So if there is no user data, then we show the page
  authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
    !auth.isLoaded || isInitializing === true,
  authenticatedSelector: ({ firebase: { auth } }) =>
    auth.isLoaded && auth.isEmpty,
  redirectAction: (newLoc) => (dispatch) => {
    browserHistory.replace(newLoc); // or routerActions.replace
    dispatch({ type: "UNAUTHED_REDIRECT" });
  },
});
