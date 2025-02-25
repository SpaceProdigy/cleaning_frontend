import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import PropTypes from "prop-types";
import { coridorsAndKitchens } from "../../locales/normalize";

const styles = StyleSheet.create({
  page: {
    padding: "20px",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",

    marginBottom: 10,
  },

  tableRow: {
    borderBottom: "1px solid #000",
    borderRight: "1px solid #000",
    borderLeft: "1px solid #000",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tableHeader: {
    borderTop: "1px solid #000",
    backgroundColor: "#11df4d",
    fontWeight: "bold",
  },

  tableCellRoom: {
    width: "130px",
    padding: "5px",
  },
  tableCellDate: {
    width: "130px",
    padding: "5px",
  },
  tableCellTask: {
    width: "100%",
    padding: "5px",
    borderRight: "1px solid #000",
    borderLeft: "1px solid #000",
  },
});

export const PdfList = ({ data, nameCollection }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>
          Графік прибирання {coridorsAndKitchens[nameCollection]?.ua}
        </Text>
        <Text style={styles.title}>
          {coridorsAndKitchens[nameCollection]?.en} Cleaning Schedule
        </Text>

        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={styles.tableCellRoom}>№ Room</Text>
          <Text style={styles.tableCellTask}>Завдання / Task</Text>
          <Text style={styles.tableCellDate}>Дата / Date</Text>
        </View>

        {data &&
          data?.map(({ task, roomNumber, date }, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCellRoom}>{roomNumber}</Text>
              <Text
                style={styles.tableCellTask}
              >{`${task.ua} / ${task.en}`}</Text>
              <Text style={styles.tableCellDate}>{date}</Text>
            </View>
          ))}
      </Page>
    </Document>
  );
};

PdfList.propTypes = {
  data: PropTypes.array.isRequired,
  nameCollection: PropTypes.string.isRequired,
};
