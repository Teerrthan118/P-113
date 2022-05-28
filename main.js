function preload() {
    
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide()

    tint_color = "";
}

function draw() {
    image(video, 100, 100, 450, 300);
    tint(tint_color);
    circle(100, 100, 50);
    circle(550, 100, 50);
    circle(100, 400, 50);
    circle(550, 400, 50);
    rect(125, 95, 400, 5);
    rect(100, 125, 5, 250);
    rect(125, 395, 400, 5);
    rect(550, 125, 5, 250);
}

function take_snapshot() {
    save('student_name.png');
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}
