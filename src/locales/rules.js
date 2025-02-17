export const rulesBlueCorridor = {
  en: `➡️ Each room is cleaned according to the established schedule.
If it is not possible to clean on this particular day, you can do it a day earlier or later, or agree with your neighbor.

 📸 Cleaning confirmation

 ➡️ After cleaning, please send a photo to the group - this way we can monitor the cleanliness together.

❗️ Responsibility

➡️ If the cleaning is not completed within the specified time and no reason is given, the information is immediately transferred to the list. Lists of those who did not clean will be transferred every week.

Cleanliness in the hallway is our common concern. Thank you all for participating!`,
  ua: `➡️ Кожна кімната прибирає відповідно до встановленого розкладу.
Якщо не вдається прибрати саме цього дня, можна зробити це на день раніше чи пізніше, або домовитися з сусідом.

📸 Підтвердження прибирання

➡️ Після прибирання, будь ласка, відправте фото до групи — так ми разом зможемо стежити за чистотою.

❗️ Відповідальність

➡️ Якщо прибирання не виконане у вказаний термін та не вказано причину, інформація одразу передається до списку. Списки тих, хто не прибирав, передаватимуть щотижня.

Чистота в коридорі – наша спільна турбота. Дякуємо всім за участь!
`,
};

export const rulesFnc = (corridor, language) => {
  switch (corridor) {
    case "blueCorridor":
      return rulesBlueCorridor[language];

    default:
      null;
      break;
  }
};
