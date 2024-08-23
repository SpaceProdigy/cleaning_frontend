import { Suspense, lazy, useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Loader } from "./components/Loader/Loader";
import { HeaderBar } from "./components/AppBar/AppBar.jsx";
import { ScrollToTopButton } from "./components/ScrollToTopButton/ScrollToTopButton.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "./redux/localOperation.js";
import mainTheme from "./styles/theme.js";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig.js";
import { currentUserThunk } from "./redux/authOparations.js";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import { MainConteiner, MainDiv } from "./App.styled.jsx";
import { pathPages } from "./locales/pathPages.js";
import BlueCorridor from "./routs/Cleaning/BlueCorridor";
import { selectAuthentificated } from "./redux/authSlice.js";
import Kitchen4 from "./routs/Cleaning/Kitchen4.jsx";

// ROUTS
const Home = lazy(() => import("./pages/Home/Home.jsx"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound.jsx"));
const SignIn = lazy(() => import("./pages/auth/SignIn/SignIn.jsx"));
const SignUp = lazy(() => import("./pages/auth/SignUp/SignUp.jsx"));

const Account = lazy(() => import("./pages/Account/Account.jsx"));

function App() {
  const mode = useSelector(selectTheme);
  const authentificated = useSelector(selectAuthentificated);
  const dispatch = useDispatch();

  useEffect(
    () => onAuthStateChanged(auth, (user) => dispatch(currentUserThunk(user))),

    [dispatch, authentificated]
  );

  return (
    <ThemeProvider theme={mainTheme(mode)}>
      <CssBaseline enableColorScheme={true}>
        <MainDiv>
          <HeaderBar />

          <main style={{ flex: 1, width: "100%" }}>
            <MainConteiner>
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path={`${pathPages.blueCorridor}`}
                    element={<BlueCorridor />}
                  />
                  <Route
                    path={`${pathPages.kitchen4}`}
                    element={<Kitchen4 />}
                  />

                  <Route path={`${pathPages.signIn}`} element={<SignIn />} />
                  <Route path={`${pathPages.signUp}`} element={<SignUp />} />
                  <Route
                    path={`${pathPages.account}`}
                    element={
                      <PrivateRoute>
                        <Account />
                      </PrivateRoute>
                    }
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <Outlet />
              </Suspense>
              <ScrollToTopButton />
            </MainConteiner>
          </main>
          <footer style={{ flexShrink: 0, width: "100%", maxWidth: 2048 }}>
            <Footer />
          </footer>
        </MainDiv>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
