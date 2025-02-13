const canvas = document.getElementById('lineGraph');
const ctx = canvas.getContext('2d');

//dummy data
const data = [30, 50, 80, 120, 200, 150, 100, 60, 40, 70, 90, 110];
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// canvas dimensions
const canvasWidth = canvas.width;
const canvasHeight = canvas.clientHeight;
const padding = 40;

// calculate the x and y scale
const xScale = (canvasWidth - padding * 2) / (data.length - 1);
const yScale = (canvasHeight - padding * 2) / (Math.max(...data) - Math.min(...data));

// function to draw the line graph
function drawLineGraph(){
    // clear the canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // draw the axes
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvasHeight - padding);
    ctx.lineTo(canvasWidth - padding, canvasHeight - padding);
    ctx.strokeStyle = '#000';
    ctx.stroke();

    // draw the data points and lines
    ctx.beginPath();
    ctx.moveTo(padding, canvasHeight - padding - (data[0] - Math.min(...data)) * yScale);
    for (let i = 1; i < data.length; i++){
        const x = padding + i * xScale;
        const y = canvasHeight - padding - (data[i] - Math.min(...data)) * yScale;
        ctx.lineTo(x,y);
    }
    ctx.strokeStyle = '#007BFF';
    ctx.lineWidth = 2;
    ctx.stroke();

    // draw the labels
    ctx.fillStyle = '#000';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    for (let i = 0; i < labels.length; i++){
        const x = padding + i * xScale;
        const y = canvasHeight - padding + 20;
        ctx.fillText(labels[i], x, y);
    }

    // draw the y-axis labels
    ctx.textAlign = 'right';
    const maxData = Math.max(...data);
    const minData = Math.min(...data);
    const range = maxData - minData;
    for (let i = 0; i <= 5; i++){
        const value = minData + (range / 5) * i;
        const y = canvasHeight - padding - (value - minData) * yScale;
        ctx.fillText(value.toFixed(0), padding - 10, y + 4);
    }
}

// call the function to draw the graph
drawLineGraph();