export interface IShapes {
    name: string
    draw(): void

}

export class Circle implements IShapes {
    name = "Circle"
    draw() {
        var c = <HTMLCanvasElement> document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();


    }
}

export class Square implements IShapes {
    name = "Square"
    draw() {
        var c =<HTMLCanvasElement> document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.rect(50, 10, 80, 80);
ctx.stroke();

    }
}

export class Rectangle implements IShapes {
    name = "Rectangle"
    draw() {
        var c =<HTMLCanvasElement> document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.rect(20, 20, 150, 50);
ctx.stroke();

    }
}

