const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
// ctx.fillStyle = "rgba(255, 0, 0, .2)";
// ctx.fillRect(20, 20, 200, 200);
// ctx.fillRect(40, 40, 200, 200);

// // Line
// ctx.beginPath();
// ctx.moveTo(40, 400);
// ctx.lineTo(90, 500);
// ctx.lineTo(400, 600);
// ctx.lineTo(200, 700);
// ctx.strokeStyle = "#760987";
// ctx.stroke();

// // arc or circle
// ctx.beginPath();
// ctx.arc(300, 90, 40, 0, Math.PI * 2, false);
// ctx.strokeStyle = "blue";
// ctx.stroke();

// for (let i = 1; i <= 100; i++) {
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     ctx.beginPath();
//     ctx.arc(x, y, 50, 0, Math.PI * 2, false);
//     ctx.strokeStyle = "blue";
//     ctx.stroke();
// }

class Circle {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = "red";
        ctx.stroke();
        ctx.fillStyle = "red";
        ctx.fill();
    }

    update() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}
// Animating circle

let circleArray = [];

for (let i = 1; i <= 20; i++) {
    let radius = 10;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 8;
    let dy = (Math.random() - 0.5) * 8;

    const circle = new Circle(x, y, dx, dy, radius);
    circleArray.push(circle);
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    circleArray.forEach((c) => {
        c.update();
    });
}

animate();

// Animating circle
// let x = Math.random() * innerWidth;
// let y = Math.random() * innerHeight;
// let dx = (Math.random() - 0.5) * 8;
// let dy = (Math.random() - 0.5) * 8;
// let radius = 50;

// function animate() {
//     requestAnimationFrame(animate);
//     ctx.clearRect(0, 0, innerWidth, innerHeight);

//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//     ctx.strokeStyle = "blue";
//     ctx.stroke();

//     if (x + radius > innerWidth || x - radius < 0) {
//         dx = -dx;
//     }

//     if (y + radius > innerHeight || y - radius < 0) {
//         dy = -dy;
//     }

//     x += dx;
//     y += dy;
// }

// animate();
