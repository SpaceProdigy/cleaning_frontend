import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Typography, Link } from "@mui/material";
import PropTypes from "prop-types";

// Компонент для обработки Markdown
const UniversalReactMarkdown = ({ children }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ href, children }) => (
          <Link href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </Link>
        ),
        blockquote: ({ children }) => (
          <Typography
            component="span"
            variant="body1"
            sx={{ fontStyle: "italic" }}
          >
            {children}
          </Typography>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

UniversalReactMarkdown.propTypes = {
  children: PropTypes.node,
};

export default UniversalReactMarkdown;
