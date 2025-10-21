<script setup lang="ts">
    import { Chart, registerables } from 'chart.js';
    import gradient from 'chartjs-plugin-gradient';

    const props = defineProps(['id', 'data']);

    Chart.register(...registerables, gradient);

    onMounted(() => {
        nextTick(() => {
            const chartCanvas = document.querySelector('#generic-balance-canvas-' + props.id) as HTMLCanvasElement;

            const chart = new Chart(chartCanvas, {
                type: 'line',
                data: {
                    labels: ['Sep 8', 'Sep 9', 'Sep 10', 'Sep 11', 'Sep 12', 'Sep 13', 'Sep 14'],
                    datasets: [
                        {
                            data: props.data,
                            borderWidth: 2,
                            borderColor: 'rgb(250, 187, 00)',
                            fill: 'start',
                            backgroundColor: (context) => {
                                const {ctx} = context.chart;
                                const gradientAbove = ctx.createLinearGradient(0, 0, 0, 100);
                                gradientAbove.addColorStop(0, 'rgb(250, 187, 0')
                                gradientAbove.addColorStop(.7, 'rgba(255,255,255, 0)')
                                return gradientAbove
                            },
                            tension: 0.5,
                            animation: false,
                            pointStyle: false,
                        }
                    ],

                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    spanGaps: true,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: false
                        },
                    },
                    layout: {
                        autoPadding: false,
                        padding: -5
                    },
                    scales: {
                        x: {
                            grid: {
                                display: false
                            },
                            border: {
                                display: false
                            },
                            display: false,
                        },
                        y: {
                            border: {
                                display: false
                            },
                            grid: {
                                display: false
                            },
                            beginAtZero: true,
                            ticks: {
                                display: false
                            },
                        }
                    }
                }
            });
        })
    })

    const periodeTime = ref<string>('Esta semana');

</script>

<template>
    <div class="w-[117px] h-[64px] relative bg-[url('@/assets/images/generic-balance-bg.png')] bg-cover">
        <canvas :id="'generic-balance-canvas-' + props.id"></canvas>
    </div>
</template>