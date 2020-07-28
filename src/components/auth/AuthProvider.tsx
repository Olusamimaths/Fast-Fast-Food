import React from "react";

// mocking request making
const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

const getUser = () => sleep(1000).then(() => ({ username: "Olusola" }));
// .then(() => null);

const AuthContext = React.createContext<State | undefined>(undefined);

type AuthProviderProps = {
  children: React.ReactNode;
};

type Error = {
  message: string;
  code?: number;
};

type User = {
  username: string;
};

type State = {
  status: string;
  error: Error | null;
  user: User | null;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const [state, setState] = React.useState<State>({
    status: "pending",
    error: null,
    user: null,
  });

  // fetch the user
  React.useEffect(() => {
    getUser().then(
      (user) => setState({ status: "success", error: null, user }),
      (error) => setState({ status: "error", error, user: null })
    );
  }, []);

  return (
    <AuthContext.Provider value={state}>
      {state.status === "pending" ? (
        "Loading..."
      ) : state.status === "error" ? (
        <div>
          Error
          <div>
            <pre>{state?.error?.message}</pre>
          </div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

export function useAuthState() {
  const state = React.useContext(AuthContext);
  const isPending = state?.status === "pending";
  const isError = state?.status === "error";
  const isSuccess = state?.status === "success";
  const isAuthenticated = state?.user && isSuccess;
  return {
    ...state,
    isPending,
    isError,
    isSuccess,
    isAuthenticated,
  };
}
