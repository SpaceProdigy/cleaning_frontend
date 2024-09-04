export const titleCorridor = (language, corridor) => {
  if (language === "en") {
    return `${String(corridor).slice(0, 1).toLocaleUpperCase()}${String(
      corridor
    ).slice(1)} corridor cleaning schedule`;
  }
  if (language === "ua") {
    return `Графік прибирання ${
      corridor === "yellow"
        ? "жовтого"
        : corridor === "red"
        ? "червоного"
        : corridor === "blue" && "синього"
    } коридору`;
  }
};

export const titleKitchen = (language, number) => {
  if (language === "en") {
    return `Schedule for cleaning the ${number}-th kitchen`;
  }
  if (language === "ua") {
    return `Графік прибирання ${number}-ї кухні `;
  }
};
