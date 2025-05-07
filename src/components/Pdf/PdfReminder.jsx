import QRCode from "qrcode";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

import PropTypes from "prop-types";

import { useEffect, useState } from "react";

import { telegramGroups } from "../../locales/telegram";

const styles = StyleSheet.create({
  page: {
    padding: "20px",
    textAlign: "center",
  },
  section: {
    margin: 20,
    padding: 10,
  },
  bottomSection: {
    flexDirection: "row",

    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 14,
    textAlign: "justify",
  },
  emptyBox: {
    width: "100px",
    height: "100px",
  },
});

const generateQRCode = async (text) => {
  try {
    const qrCodeDataUrl = await QRCode.toDataURL(text);
    return qrCodeDataUrl;
  } catch (error) {
    console.error("Ошибка при генерации QR-кода", error);
  }
};

export const PdfReminder = ({ data, nameCollection }) => {
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  useEffect(() => {
    const fetchQRCode = async () => {
      const isGroup = telegramGroups[nameCollection];
      if (isGroup) {
        const qrCode = await generateQRCode(telegramGroups[nameCollection]);
        setQrCodeUrl(qrCode);
      }
    };
    fetchQRCode();
  }, [nameCollection]);

  return (
    <Document style={{ width: "100%" }}>
      <Page size="A4" style={styles.page}>
        {(data || [])?.map(({ task, roomNumber, date }, index) => (
          <View key={index} style={styles.section}>
            <Text
              style={{
                ...styles.text,
                fontSize: 16,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              🔔 Напоминание об уборке! / Cleaning Reminder! 🔔
            </Text>
            <Text style={styles.text}>
              🧹 Пожалуйста, выполните её вовремя. Если не сможете убрать в
              указанный день, сделайте это на день раньше или позже или
              договоритесь с соседями.
            </Text>
            <Text style={styles.text}>
              ⚠️ Важно! Если уборка не выполнена и причина не указана, комната
              попадёт в список пропущенной уборки.
            </Text>
            <Text style={styles.text}>
              🧹 Please complete it on time. If you can’t clean on the assigned
              day, do it a day earlier or later, or arrange it with neighbors.
            </Text>
            <Text style={styles.text}>
              ⚠️ Important! If the cleaning is not done and no reason is given,
              your room will be added to the missed cleaning list.
            </Text>
            <Text
              style={{
                ...styles.text,
                textAlign: "center",
                marginTop: "5px",
              }}
            >
              🙏 Спасибо за участие! / Thank you for your cooperation! 😊
            </Text>
            <Text
              style={{
                ...styles.text,
                textAlign: "center",
                fontWeight: "bold",
                margin: "10px",
                fontSize: 16,
              }}
            >
              {roomNumber && task?.ua && task?.en && date
                ? `${roomNumber} ${task.ua} / ${task.en} ${date}`
                : "Информация отсутствует"}
            </Text>
            <View key={index} style={styles.bottomSection}>
              <View>
                <Text style={styles.text}>
                  ✅ Если уборка выполнена, пожалуйста, сообщите в группу и не
                  забудьте отправить фото. Спасибо за участие! 📸🙌
                </Text>
                <Text style={styles.text}>
                  ✅ If the cleaning is done, please confirm in the group and
                  don’t forget to send a photo. Thank you! 📸🙌
                </Text>
              </View>

              {qrCodeUrl ? (
                <Image
                  src={qrCodeUrl}
                  style={{
                    width: 100,
                    height: 100,
                  }}
                />
              ) : (
                <View
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "#ffffff",
                  }}
                ></View>
              )}
            </View>
          </View>
        ))}
      </Page>
    </Document>
  );
};

PdfReminder.propTypes = {
  data: PropTypes.array.isRequired,
  nameCollection: PropTypes.string.isRequired,
};
