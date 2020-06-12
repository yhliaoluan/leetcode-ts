class NumMatrix {
  index: number[][] = [];
  constructor(matrix: number[][]) {
    this.initialize(matrix);
  }

  initialize(matrix: number[][]): void {
    const rows = matrix.length;
    const cols = rows > 0 ? matrix[0].length : 0;
    this.index = [...Array(rows + 1)].map(() => Array(cols + 1).fill(0));
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= cols; j++) {
        this.index[i][j] = this.index[i - 1][j] + this.index[i][j - 1] - this.index[i - 1][j - 1]
          + matrix[i - 1][j - 1];
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return this.index[row2 + 1][col2 + 1] - this.index[row2+1][col1] - this.index[row1][col2+1] + this.index[row1][col1];
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
export const NumberMatrix = NumMatrix;
