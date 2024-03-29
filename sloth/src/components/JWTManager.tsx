import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";

const setJWT = (jwt: string) => {
  const cookie = new Cookies();
  const decoded = jwtDecode(jwt);
  if (decoded.exp) {
    cookie.set("jwt_authorization", jwt, {
      expires: new Date(decoded.exp * 1000),
    });
  }
};
const getJWT = () => {
  const cookie = new Cookies();
  return cookie.get("jwt_authorization");
};
const getJWTDecoded = () => {
  const cookie = getJWT();
  if (cookie != undefined) return jwtDecode(cookie);
  return 0;
};
const deleteJWT = (): void => {
  const cookie = new Cookies();
  cookie.remove("jwt_authorization");
  return;
};
export { setJWT, getJWT, getJWTDecoded, deleteJWT };
