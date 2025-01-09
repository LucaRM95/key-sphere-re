type booleanParse = "false" | "true";

export const booleanParser = (boolean: booleanParse) => {
  let booleanParsed: boolean;

  switch (boolean) {
    case "false":
      booleanParsed = false;
      break;
    case "true":
      booleanParsed = true;
      break;
  }

  return booleanParsed;
};
