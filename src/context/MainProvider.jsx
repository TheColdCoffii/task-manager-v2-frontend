import { AuthContextProvider } from './AuthContext';

export default function MainProvider({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
