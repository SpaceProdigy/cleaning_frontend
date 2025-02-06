import { Typography } from "@mui/material";

// import { About } from "../../components/About/About";
import { TypingText } from "../../locales/home";
import { Hero, WrapperHero, WrapperTitel } from "./Home.styled";
import { ReactTyped } from "react-typed";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation";
// import { Chat } from "../../components/Chat/Chat";

const Home = () => {
  const language = useSelector(selectLanguage);

  return (
    <>
      <WrapperHero>
        <Hero></Hero>

        <WrapperTitel>
          <Typography textAlign="center" variant="h4" sx={{ fontWeight: 700 }}>
            Maria
            <Typography
              variant="h4"
              component="span"
              sx={(theme) => ({
                bgcolor: "#f90",
                padding: "5px",
                borderRadius: 2,
                fontWeight: 700,
                color: theme.palette.mode === "dark" ? "#111" : "#fff",
              })}
            >
              Mediatrix
            </Typography>
          </Typography>
          <Typography variant="body2" textAlign="center" marginTop={1}>
            <ReactTyped
              strings={[TypingText[language]]}
              typeSpeed={70}
              cursorChar={""}
            />
          </Typography>
        </WrapperTitel>
      </WrapperHero>
      {/* <Chat /> */}
      {/* <About arr={homeInfo[language]} /> */}
    </>
  );
};

export default Home;
