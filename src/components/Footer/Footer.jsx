import { Button, Divider, Typography } from "@mui/material";

import { useEffect, useState } from "react";
import {
  DonateWrapper,
  Link,
  M_QuoteWrapper,
  MainWrapper,
} from "./Footer.styled";
import { quotes } from "../../locales/footer";
import DnsIcon from "@mui/icons-material/Dns";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation";
import { buttons, text } from "../../locales/normalize";
import WifiInfo from "../WifiInfo/WifiInfo";
import { selectAuthentificated } from "../../redux/authSlice";

export const Footer = () => {
  const language = useSelector(selectLanguage);
  const isAuthentificated = useSelector(selectAuthentificated);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes[language]?.length);
      return quotes[language][randomIndex];
    };
    setQuote(getRandomQuote());
  }, [language]);

  return (
    <>
      <Divider />
      <MainWrapper>
        <DonateWrapper>
          <Typography textAlign="center" variant="caption">
            {text.donate[language]}
          </Typography>
          <Button
            endIcon={<DnsIcon />}
            size="small"
            type="button"
            variant="contained"
            sx={{ whiteSpace: "nowrap" }}
          >
            <Link
              href="https://revolut.me/oleh62j9i"
              target="_blank"
              rel="noopener noreferrer"
            >
              {buttons.donate[language]}
            </Link>
          </Button>
        </DonateWrapper>
        <Divider sx={{ width: "100%" }} />
        {isAuthentificated && <WifiInfo />}

        <M_QuoteWrapper>
          <Typography textAlign="center" variant="caption">
            {quote}
          </Typography>
        </M_QuoteWrapper>
      </MainWrapper>
      <Divider />
    </>
  );
};
