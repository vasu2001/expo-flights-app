import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  use,
  createContext,
  type PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { auth } from "./firebase";

const AuthContext = createContext<{
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  user: User | null;
  initialized: boolean;
}>({
  signIn: (email: string, password: string) => null,
  signOut: () => null,
  user: null,
  initialized: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = use(AuthContext);
  if (!value) {
    throw new Error("useSession must be wrapped in a <SessionProvider />");
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  // const [[isLoading, session], setSession] = useStorageState("session");

  const [user, setUser] = useState<User | null>(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setInitialized(true);
    });

    return unsubscribe;
  }, []);

  // return { user, initialized };

  return (
    <AuthContext
      value={{
        signIn: async (email: string, password: string) => {
          try {
            await signInWithEmailAndPassword(auth, email, password);
          } catch (error) {
            console.error("Error signing in:", error);
            throw error;
          }
        },
        signOut: async () => {
          try {
            await auth.signOut();
          } catch (error) {
            console.error("Error signing out:", error);
            throw error;
          }
        },
        user,
        initialized,
      }}
    >
      {children}
    </AuthContext>
  );
}
