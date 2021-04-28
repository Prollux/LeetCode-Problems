/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[0].length; x++) {
            if (grid[y][x] === '1') {
                count++;
                removeIsland(grid, y, x);
            }
        }
    }
    return count;
};

const removeIsland = (grid, y, x) => {
    if (!(y < 0 || y >= grid.length || x < 0 || x >= grid[0].length) && grid[y][x] === '1') {
        grid[y][x] = '0';
        removeIsland(grid, y-1, x)
        removeIsland(grid, y+1, x)
        removeIsland(grid, y, x-1)
        removeIsland(grid, y, x+1)
    }
}