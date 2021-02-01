import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

// A hook which provides all base auth0-related quantities
// as well as token and headers, where token fetched automatically
// after authentication
export const useAuth = () => {
  const {
    isAuthenticated,
    isLoading,
    error,
    user,
    loginWithPopup,
    loginWithRedirect,
    logout,
    getAccessTokenSilently,
    getAccessTokenWithPopup,
    getIdTokenClaims,
  } = useAuth0();
  const [token, setToken] = React.useState(null);
  const headers = React.useRef(null);

  // On mount, load the access token
  React.useEffect(() => {
    if (!isAuthenticated) return;
    async function loadToken() {
      try {
        setToken(await getAccessTokenSilently());
      } catch (error) {
        console.log(error);
      }
    }
    loadToken();
  }, [getAccessTokenSilently, isAuthenticated]);

  // When token loaded set request headers
  React.useEffect(() => {
    headers.current = {
      headers: { Authorization: `Bearer ${token}` },
    };
  }, [token]);

  return {
    isAuthenticated,
    isLoading,
    error,
    user,
    loginWithPopup,
    loginWithRedirect,
    logout,
    getAccessTokenSilently,
    getAccessTokenWithPopup,
    getIdTokenClaims,
    token,
    headers,
  };
};
