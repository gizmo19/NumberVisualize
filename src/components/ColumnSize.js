export default class ColumnSize {
  constructor(rangeOfGeneratedNumbers, howManyNumbers, height) {
    this.rangeOfGeneratedNumbers = rangeOfGeneratedNumbers;
    this.howManyNumbers = howManyNumbers;
    this.height = height;
  }

  size() {
    const rangeOfGeneratedNumbers = this.rangeOfGeneratedNumbers;
    const howManyNumbers = this.howManyNumbers;
    const height = this.height;
    const alignItems = "center";
    const marginLeft = 2;
    const marginRight = 2;
    let columnHeight;
    let fontSize;
    let width;
    let percentOfWidth;
    let percentToDecimal;

    if (rangeOfGeneratedNumbers > 0 && rangeOfGeneratedNumbers <= 10) {
      columnHeight = height * 100 - 20;
    } else if (rangeOfGeneratedNumbers > 10 && rangeOfGeneratedNumbers <= 20) {
      columnHeight = height * 50 - 20;
    } else if (rangeOfGeneratedNumbers > 20 && rangeOfGeneratedNumbers <= 30) {
      columnHeight = height * 33 - 20;
    } else if (rangeOfGeneratedNumbers > 30 && rangeOfGeneratedNumbers <= 40) {
      columnHeight = height * 25 - 20;
    } else if (rangeOfGeneratedNumbers > 40 && rangeOfGeneratedNumbers <= 50) {
      columnHeight = height * 20 - 20;
    }

    percentOfWidth = 100 / howManyNumbers;
    percentToDecimal = parseFloat(percentOfWidth) / 100;
    if (howManyNumbers <= 55) {
      width = Math.floor(980 * percentToDecimal - 3);
    } else if (howManyNumbers <= 89 && howManyNumbers > 55) {
      width = Math.floor(980 * percentToDecimal - 4);
    } else if(howManyNumbers <=100 && howManyNumbers >= 90) {
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
