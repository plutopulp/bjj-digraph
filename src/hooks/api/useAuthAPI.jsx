import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

// A hook which provides all auth-related quantities
export const useAuthAPI = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = React.useState(null);
  const headers = React.useRef(null);

  // On mount, load the access token
  React.useEffect(() => {
    async function loadToken() {
      try {
        setToken(await getAccessTokenSilently());
      } catch (error) {
        console.log(error);
      }
    }
    loadToken();
  }, [getAccessTokenSilently]);

  // When token loaded set request headers
  React.useEffect(() => {
    headers.current = {
      headers: { Authorization: `Bearer ${token}` },
    };
  }, [token]);

  return { token, headers };
};
