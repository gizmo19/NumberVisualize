import ColumnSize from "../ColumnSize";

describe("Column Size test", () => {
    it("Column height should change depending on NumbersCount", () => {
        const columnSize = new ColumnSize(10, 10, 5);
        const result = columnSize.getColumnHeight();
        expect(result).toBe(480);
    });
    it("Column width should change depending on NumbersCount", () => {
        const columnSize = new ColumnSize(10, 10, 5);
        const result = columnSize.getColumnWidth();
        expect(result).toBe(95);
    })
    it("Column font size should change depending on column width", () => {
        const columnSize = new ColumnSize(10, 10, 5);
        const result = columnSize.getColumnFont();
        expect(result).toBe(55);
    })
})