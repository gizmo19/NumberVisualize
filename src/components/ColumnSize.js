export default class ColumnSize {
  constructor(numbersRange, numbersCount, elementNumber) {
    this.numbersRange = numbersRange;
    this.numbersCount = numbersCount;
    this.elementNumber = elementNumber;
  }

  getColumnHeight() {
    const numbersRange = this.numbersRange;
    const elementNumber = this.elementNumber;
    let columnHeight;

    if (numbersRange > 0 && numbersRange <= 10) {
      columnHeight = elementNumber * 100 - 20;
    } else if (numbersRange > 10 && numbersRange <= 20) {
      columnHeight = elementNumber * 50 - 20;
    } else if (numbersRange > 20 && numbersRange <= 30) {
      columnHeight = elementNumber * 33 - 20;
    } else if (numbersRange > 30 && numbersRange <= 40) {
      columnHeight = elementNumber * 25 - 20;
    } else if (numbersRange > 40 && numbersRange <= 50) {
      columnHeight = elementNumber * 20 - 20;
    }

    return columnHeight;
  }

  getColumnWidth() {
    const numbersCount = this.numbersCount;
    let width;
    let percentOfWidth;
    let percentToDecimal;

    percentOfWidth = 100 / numbersCount;
    percentToDecimal = parseFloat(percentOfWidth) / 100;
    if (numbersCount <= 55) {
      width = Math.floor(980 * percentToDecimal - 3);
    } else if (numbersCount <= 89 && numbersCount > 55) {
      width = Math.floor(980 * percentToDecimal - 4);
    } else if (numbersCount <= 100 && numbersCount >= 90) {
      width = Math.floor(980 * percentToDecimal - 3);
    }

    return width;
  }

  getColumnFont() {
    const width = this.getColumnWidth();
    let fontSize;

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

    return fontSize;
  }

  size() {
    const alignItems = "center";
    const marginLeft = 2;
    const marginRight = 2;

    const columnHeight = this.getColumnHeight();
    const width = this.getColumnWidth();
    const fontSize = this.getColumnFont();

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
