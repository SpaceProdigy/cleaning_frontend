import { Typography, Container, Paper, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/localOperation";

import PropTypes from "prop-types"; // Импортируем prop-types
import UniversalReactMarkdown from "../../components/UniversalReactMarkdown/UniversalReactMarkdown";

// Объект для перевода заголовков
const sectionTitles = {
  ua: {
    headings: "Заголовки",
    boldItalic: "Жирний текст / Курсив",
    links: "Посилання",
    lists: "Списки",
    blockquotes: "Цитати",
    images: "Зображення",
  },
  en: {
    headings: "Headings",
    boldItalic: "Bold / Italic",
    links: "Links",
    lists: "Lists",
    blockquotes: "Quotes",
    images: "Images",
  },
};

const markdownExample = {
  ua: {
    headings:
      "# Заголовок 1\n\n## Заголовок 2\n\n### Заголовок 3\n\n#### Заголовок 4\n\n##### Заголовок 5\n\n###### Заголовок 6",
    boldItalic:
      "**Жирний текст**\n\n*Курсивний текст*\n\n__Жирний курсив__\n\n~Закреслений текст~",
    links: "[Текст посилання](https://example.com)",
    images:
      "![Зображення](https://res.cloudinary.com/dajlyi3lg/image/upload/c_thumb,w_200,g_face/v1741304146/samples/balloons.jpg)",
    lists:
      "- Список 1\n- Список 2\n- Список 3\n1. Перший елемент\n2. Другий елемент",
    blockquotes: "> Це цитата\n\n> І ще одна цитата",
  },
  en: {
    headings:
      "# Heading 1\n## Heading 2\n### Heading 3\n#### Heading 4\n##### Heading 5\n###### Heading 6",
    boldItalic:
      "**Bold text**\n\n*Italic text*\n\n__Bold italic__\n\n~Strikethrough~",
    links: "[Link](https://example.com)",
    images:
      "![Image](https://res.cloudinary.com/dajlyi3lg/image/upload/c_thumb,w_200,g_face/v1741304146/samples/balloons.jpg)",
    lists: "- Item 1\n- Item 2\n- Item 3\n1. First item\n2. Second item",
    blockquotes: "> This is a quote\n\n> Another quote",
  },
};

export default function FormattingGuide() {
  const language = useSelector(selectLanguage);
  const currentText = markdownExample[language];
  const sectionTitlesForLanguage = sectionTitles[language];

  return (
    <Container maxWidth="lg" sx={{ padding: "40px 20px" }}>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ fontWeight: "bold" }}
      >
        {language === "ua" ? "Посібник з форматування" : "Formatting Guide"}
      </Typography>

      <Section title={sectionTitlesForLanguage.headings}>
        {currentText.headings}
      </Section>
      <Section title={sectionTitlesForLanguage.boldItalic}>
        {currentText.boldItalic}
      </Section>
      <Section title={sectionTitlesForLanguage.links}>
        {currentText.links}
      </Section>
      <Section title={sectionTitlesForLanguage.lists}>
        {currentText.lists}
      </Section>
      <Section title={sectionTitlesForLanguage.blockquotes}>
        {currentText.blockquotes}
      </Section>
      <Section title={sectionTitlesForLanguage.images}>
        {currentText.images}
      </Section>
    </Container>
  );
}

function Section({ title, children }) {
  const lines = [children][0].split("\n");
  const filteredLines = lines.filter((line) => line.trim() !== "");

  return (
    <Paper elevation={3} sx={{ padding: 3, marginBottom: 4 }}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Paper component="div" sx={{ padding: "20px", wordWrap: "break-word" }}>
        {filteredLines.map((text, i) => (
          <div key={i}>
            {text}

            <br />
          </div>
        ))}
      </Paper>

      <UniversalReactMarkdown>{children}</UniversalReactMarkdown>
      <Divider sx={{ marginTop: 2 }} />
    </Paper>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired, // Строка с заголовком
  children: PropTypes.node.isRequired, // Содержимое секции, может быть любым узлом React
};
