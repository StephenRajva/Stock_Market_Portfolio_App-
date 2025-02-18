const ctx = document.getElementById("stockChart").getContext("2d");

// Example Stock Performance Data (Replace with live data later)
const stockPrices = [120, 140, 160, 180, 150, 170, 190, 200];
const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

// Create Gradient Effect for Graph Line
const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "#00E5FF");  // Neon Cyan
gradient.addColorStop(1, "#00E676");  // Neon Green

const stockChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: labels,
        datasets: [
            {
                label: "Stock Performance",
                data: stockPrices,
                borderColor: gradient,
                backgroundColor: "rgba(0, 230, 118, 0.1)", // Soft Green Fill
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: stockPrices.map(price => price >= 160 ? "#00FF00" : "#FF1744") // Green for Bullish, Red for Bearish
            }
        ]
    },
    options: {
        responsive: true,
        animation: {
            duration: 1500,
            easing: "easeInOutQuart"
        },
        scales: {
            y: {
                grid: { color: "#444" },
                ticks: { color: "#00E5FF" }  // Neon Cyan Axis Labels
            },
            x: {
                grid: { color: "#444" },
                ticks: { color: "#00E5FF" }
            }
        },
        plugins: {
            legend: {
                labels: { color: "#00E5FF" }
            }
        }
    }
});
