
let countdown = document.querySelector('.countdown');
function countDown(seconds) {
    let counter = seconds;
    const interval = setInterval(() => {
        if (counter < 1) {
            clearInterval(interval);
        }
        let minute = parseInt(counter / 60);
        let sec = (counter % 60) < 10 ? `0${(counter % 60)}` : (counter % 60);
        let rs = `${minute}:${sec}`;
        countdown.innerText = rs;
        counter--;
    }, 1000);
}
countDown(109);

// --- ITEM SELECTED | SIDE MENU --- //
const menuItems = document.querySelectorAll('.component')

menuItems.forEach(item =>
    item.addEventListener('click', function () {
        menuItems.forEach(item => item.classList.remove('selected'))
        this.classList.add('selected')
    })
)

// --- HIDDEN | SIDE MENU --- //
const sideMenu = document.querySelector('.nav')
const button = document.querySelector('.chevron-icon')
const container = document.querySelector('.container')

button.addEventListener('click', () => {
    sideMenu.classList.toggle('hidden')
    container.classList.toggle('changed')
})

// --- BAR CHART | DEMOGRAPHIC --- //
const demographic = {
    first: 30,
    second: 42,
    third: 18,
    fourth: 10
}

const progressBars = document.querySelectorAll('.progress-bar-group div')

for (let progressBar of progressBars) {
    const progressBarName = progressBar.className

    progressBar.setAttribute(
        'style',
        `width: ${demographic[`${progressBarName}`]}%`
    )
}

// --- PROGRESS BAR | TOP CHANNEL --- //
const topChannels = {
    Facebook: 70,
    Instagram: 50,
    Linkedin: 90,
    Youtube: 30
}

const channels = document.querySelectorAll('.channel-name')

for (let channel of channels) {
    const channelName = channel.textContent
    const bar = channel.parentElement.childNodes[9].childNodes[1]

    bar.setAttribute('style', `width: ${topChannels[`${channelName}`]}%`)
}

// --- CHARTS.JS --- //
// Doughnut //
const doughnutChart = document.getElementById('myChart')

const dataDoughnut = {
    labels: ['Male', 'Female', 'Other'],
    datasets: [
        {
            label: 'Demographic',
            data: [53, 35, 12],
            backgroundColor: [
                'rgba(1, 126, 250, 1)',
                'rgba(81, 203, 255, 1)',
                'rgba(48, 216, 135, 1)'
            ],
            hoverOffset: 4,
            cutout: '60%'
        }
    ]
}

const configDoughnut = {
    type: 'doughnut',
    data: dataDoughnut,
    options: {
        responsive: true,

        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        family: "'Poppins', 'sans-serif'",
                        size: 10,
                        weight: 400
                    },
                    padding: 15,
                    color: 'rgba(0, 0, 0, 1)',
                    usePointStyle: true
                }
            },
            tooltip: {
                enable: false,
                position: 'average',
                external: 'abc'
            }
        }
    }
}

const myChart = new Chart(doughnutChart, configDoughnut)

// Line //
const lineChart = document.getElementById('chartMain')

const dataLine = {
    labels: [
        'Jan',
        'Fev',
        'Mar',
        'Apr',
        'Mei',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ],
    datasets: [
        {
            label: 'Reach',
            data: [65, 92, 53, 114, 72, 98, 185, 176, 99, 135, 152, 147],
            backgroundColor: 'rgba(1, 126, 250, 1)',
            borderColor: 'rgba(1, 126, 250, 1)',
            borderWidth: 2
        },
        {
            label: 'Paid Reach',
            data: [49, 111, 102, 49, 58, 140, 133, 115, 128, 89, 138, 190],
            backgroundColor: 'rgba(48, 217, 135, 1)',
            borderColor: 'rgba(48, 217, 135, 1)',
            borderWidth: 2
        },
        {
            label: 'Organic Reach',
            data: [22, 48, 41, 53, 82, 64, 55, 47, 50, 62, 58, 84],
            backgroundColor: 'rgba(253, 31, 155, 1)',
            borderColor: 'rgba(253, 31, 155, 1)',
            borderWidth: 2
        }
    ]
}

const genericOptions = {
    responsive: true,
    hoverBackgroundColor: 'white',
    hoverRadius: 7,
    hoverBorderWidth: 3,
    onHover: { mode: ['dataset', 'tooltip'] },
    scales: {
        x: { grid: { display: false } },
        y: {
            min: 0,
            max: 200,
            ticks: { stepSize: 50 },
            grid: { borderDash: [5, 5] }
        }
    },
    layout: {
        padding: {
            bottom: 10,
            left: 15,
            right: 25
        }
    },
    interaction: {
        mode: 'index',
        intersect: false
    },
    plugins: {
        legend: { display: false },
        tooltip: {
            padding: 16,
            titleFont: {
                family: "'Poppins', 'sans-serif'",
                size: 16,
                weight: 'normal'
            },
            backgroundColor: 'rgba(8, 26, 81, 1)',
            bodyColor: 'rgba(255, 255, 255, 0.7)',
            bodyFont: {
                family: "'Poppins', 'sans-serif'",
                size: 15
            },
            bodySpacing: 8,
            boxHeight: 6,
            boxPadding: 8,
            usePointStyle: true,
            callbacks: {
                title: ctx => {
                    return `${ctx[0].label} 2021`
                },
                label: ctx => {
                    return `${ctx.dataset.label}:  ${ctx.raw}K`
                }
            }
        }
    }
}

const annotationLine = {
    id: 'annotationLine',
    beforeDraw: chart => {
        if (chart.tooltip._active && chart.tooltip._active.length) {
            const ctx = chart.ctx
            ctx.save()
            const activePoint = chart.tooltip._active[0]
            const display = lineChart.getContext('2d')

            const gradient = display.createLinearGradient(0, 0, 0, 330)

            gradient.addColorStop(0, 'rgba(37, 75, 209, 0)')
            gradient.addColorStop(1, 'rgba(37, 75, 209, 0.1)')

            ctx.beginPath()
            ctx.moveTo(activePoint.element.x, chart.chartArea.top)
            ctx.lineTo(activePoint.element.x, chart.chartArea.bottom)
            ctx.lineWidth = 40
            ctx.strokeStyle = gradient
            // ctx.strokeStyle = 'rgba(37, 75, 209, 0.2)'
            ctx.strokeRect(activePoint.element.x, chart.chartArea.top, 0, 282)
            ctx.restore()
        }
    }
}

const lineDash = {
    id: 'lineDash',
    beforeDraw: chart => {
        if (chart.tooltip._active && chart.tooltip._active.length) {
            const ctx = chart.ctx
            ctx.save()
            const activePoint = chart.tooltip._active[0]

            ctx.beginPath()
            ctx.setLineDash([5, 5])
            ctx.moveTo(activePoint.element.x, chart.chartArea.top)
            ctx.lineTo(activePoint.element.x, chart.chartArea.bottom)
            ctx.lineWidth = 1
            ctx.strokeStyle = 'rgba(1, 126, 250, 0.8)'
            ctx.stroke()
            ctx.restore()
        }
    }
}

const configLine = {
    type: 'line',
    data: dataLine,
    options: genericOptions,
    plugins: [annotationLine, lineDash]
}

const chartMain = new Chart(lineChart, configLine)