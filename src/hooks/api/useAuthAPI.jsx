import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

// A hook which provides all auth-related quantities
export const useAuthAPI = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = React.useState(null);

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
  return { token };
};
