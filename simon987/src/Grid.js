import * as PIXI from 'pixi.js'
import * as _ from 'lodash'

function Grid(cellSize, tickLen, colScheme) {

    this._c1 = colScheme.c1;
    this._c2 = colScheme.c2;
    this._c3 = colScheme.c3;

    this.seed = function () {
        this._cells = new Uint8Array(this._cellCount).map(() => {
            let x = Math.random();
            if (x < 1 / 3) {
                return 2;
            } else if (x < 2 / 3) {
                return 4;
            }
            return 8;
        });
    };

    this.resize = function () {
        this._pxWidth = window.innerWidth;
        this._pxHeight = window.innerHeight;

        if (this._app) {
            this._app.renderer.view.style.width = this._pxWidth + "px";
            this._app.renderer.view.style.height = this._pxHeight + "px";
            this._app.renderer.resize(window.innerWidth, window.innerHeight);
        }

        this._cellCountX = Math.ceil(this._pxWidth / cellSize);
        this._cellCountY = Math.ceil(this._pxHeight / cellSize);
        this._cellCount = this._cellCountX * this._cellCountY;

        this.seed();

        this._xMap = _.range(0, this._cellCount).map(x => x % this._cellCountX);
        this._xCoordsMap = this._xMap.map(x => x * cellSize);
        this._yCoordsMap = _.range(0, this._cellCount)
            .map(y => Math.floor(y / this._cellCountX))
            .map(y => y * cellSize);
    };

    this._tickLen = tickLen;
    this._tickTime = 0;

    this._cellSize = cellSize;

    this.setup = function () {

        let elem = document.getElementById("grid");

        this._app = new PIXI.Application({
            width: 0,
            height: 0,
            backgroundColor: 0xFFFFFF,
        });

        elem.appendChild(this._app.view);

        this._graphics = new PIXI.Graphics();
        this._app.stage.addChild(this._graphics);

        this._app.ticker.add(() => {

            // Limit to the frame rate
            let timeNow = (new Date()).getTime();
            let timeDiff = timeNow - this._tickTime;
            if (timeDiff < this._tickLen) {
                return;
            }
            this._tickTime = timeNow;

            this.tick();
        });

        window.onresize = () => this.resize();
        elem.onmousedown = () => this.resize();
        setInterval(() => this.resize(), 20000);
    };

    this.paint = function () {

        this._graphics.clear();

        let bgColor = this.getColor(0);

        this._graphics.beginFill(bgColor)
            .drawRect(0, 0, this._pxWidth, this._pxHeight)
            .endFill();

        let cells = _.groupBy(_.range(0, this._cellCount), this.getColor);
        for (let color in cells) {

            let intCol = Number(color);

            if (intCol !== bgColor) {
                this._graphics.beginFill(intCol);

                cells[color].forEach(d => this._graphics
                    .drawRect(
                        this._xCoordsMap[d],
                        this._yCoordsMap[d],
                        this._cellSize,
                        this._cellSize
                    )
                );
                this._graphics.endFill()
            }
        }
    };

    this.tick = function () {

        let xw = this._cellCountX;
        let neighbors = new Uint8Array(8);
        let cells = this._cells;
        let newCells = new Uint8Array(this._cellCount);
        let lastCell = this._cellCount - 1;
        let xw_m1 = xw - 1;
        let xw_p1 = xw + 1;
        let lastRowIndex = this._cellCount - xw;

        for (let i = 0; i < this._cellCount; i++) {

            let x = this._xMap[i];

            if (i < xw) {
                if (i === 0) {
                    neighbors[0] = cells[lastCell];
                    neighbors[1] = cells[lastCell - xw_p1];
                    neighbors[2] = cells[lastRowIndex];
                    neighbors[3] = cells[xw_m1];
                    neighbors[4] = cells[1];
                    neighbors[5] = cells[xw + xw_m1];
                    neighbors[6] = cells[xw];
                    neighbors[7] = cells[xw_p1];
                } else {
                    neighbors[0] = cells[lastCell - (xw - i)];
                    neighbors[1] = cells[lastRowIndex + i];
                    if (i === xw_m1) {
                        neighbors[2] = cells[lastRowIndex];
                    } else {
                        neighbors[2] = cells[lastRowIndex + i + 1];
                    }
                    neighbors[3] = cells[i - 1];
                    neighbors[4] = cells[i + 1];
                    neighbors[5] = cells[i + xw_m1];
                    neighbors[6] = cells[i + xw];
                    neighbors[7] = cells[i + xw_p1];
                }
            } else {
                if (x === 0) {
                    neighbors[0] = cells[i - 1];
                    neighbors[3] = cells[i + xw_m1];
                } else {
                    neighbors[0] = cells[i - xw_p1];
                    neighbors[3] = cells[i - 1];
                }
                neighbors[1] = cells[i - xw];
                if (x === xw_m1) {
                    neighbors[2] = cells[i - xw - xw_p1];
                    neighbors[4] = cells[i - xw_m1];
                } else {
                    neighbors[2] = cells[i - xw_m1];
                    neighbors[4] = cells[i + 1];
                }

                if (i < lastRowIndex) {
                    if (x === 0) {
                        neighbors[5] = cells[i + xw + xw_m1];
                        neighbors[7] = cells[i + xw_p1];
                    } else {
                        neighbors[5] = cells[i + xw_m1];
                        if (x === xw_m1) {
                            neighbors[7] = cells[i + 1];
                        } else {
                            neighbors[7] = cells[i + xw_p1];
                        }
                    }
                    neighbors[6] = cells[i + xw];
                } else if (i > lastRowIndex) {
                    neighbors[5] = cells[x - 1];
                    neighbors[6] = cells[x];
                    if (i === lastCell) {
                        neighbors[7] = cells[0];
                    } else {
                        neighbors[7] = cells[x + 1];
                    }
                } else {
                    neighbors[5] = cells[xw_m1];
                    neighbors[6] = cells[0];
                    neighbors[7] = cells[1];
                }
            }

            newCells[i] = this.computeState(cells[i], neighbors)
        }

        this._cells = newCells;
        this.paint();
    };

    this.getColor = (cell) => {
        if (this._cells[cell] === 2) {
            return this._c1;
        } else if (this._cells[cell] === 4) {
            return this._c2;
        }
        return this._c3;
    };

    this.computeState = (state, neighbors) => {

        let predators = 0;
        let predator;

        if (state === 2) {
            predator = 4;
        } else if (state === 4) {
            predator = 8;
        } else {
            predator = 2;
        }

        for (let i = 0; i < 8; i++) {
            if (neighbors[i] === predator) {
                predators++;
            }
        }

        if (predators >= 3) {
            return predator;
        }

        return state;
    };
}


export default Grid;
