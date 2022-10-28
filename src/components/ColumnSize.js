export default class ColumnSize {
  constructor(numbersRange, numbersCount, height) {
    this.numbersRange = numbersRange;
    this.numbersCount = numbersCount;
    this.height = height;
  }

  size() {
    const numbersRange = this.numbersRange;
    const numbersCount = this.numbersCount;
    const height = this.height;
    const alignItems = "center";
    const marginLeft = 2;
    const marginRight = 2;
    let columnHeight;
    let fontSize;
    let width;
    let percentOfWidth;
    let percentToDecimal;

    if (numbersRange > 0 && numbersRange <= 10) {
      columnHeight = height * 100 - 20;
    } else if (numbersRange > 10 && numbersRange <= 20) {
      columnHeight = height * 50 - 20;
    } else if (numbersRange > 20 && numbersRange <= 30) {
      columnHeight = height * 33 - 20;
    } else if (numbersRange > 30 && numbersRange <= 40) {
      columnHeight = height * 25 - 20;
    } else if (numbersRange > 40 && numbersRange <= 50) {
      columnHeight = height * 20 - 20;
    }

    percentOfWidth = 100 / numbersCount;
    percentToDecimal = parseFloat(percentOfWidth) / 100;
    if (numbersCount <= 55) {
      width = Math.floor(980 * percentToDecimal - 3);
    } else if (numbersCount <= 89 && numbersCount > 55) {
      width = Math.floor(980 * percentToDecimal - 4);
    } else if (numbersCount <= 100 && numbersCount >= 90) {
      width = Math.floor(980 * percentToDecimal - 3);
    }

    if (width <= 20) {
      fontSize = 0;
    } else if (width <= 40 && width > 20) {
      fontSize = width - 10;
    } else if (width <= 60 && width > 40) {
      fontSize = width - 20;
    } else if (width <= 80 && width > 60) {
      fontSize = width - 30;
    } else if (width <= 100 && width > 80) {
      fontSize = width - 40;
    }
    const columnSizeObject = {
      marginLeft,
      marginRight,
      columnHeight,
      fontSize,
      alignItems,
      width,
    };
    return columnSizeObject;
  }
}
