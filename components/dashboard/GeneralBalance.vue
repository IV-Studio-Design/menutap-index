<script setup lang="ts">
    import { Chart, registerables } from 'chart.js';
    import gradient from 'chartjs-plugin-gradient';

    Chart.register(...registerables, gradient);

    onMounted(() => {
        nextTick(() => {
            const chartCanvas = document.querySelector('#general-balance-canvas') as HTMLCanvasElement;

            const chart = new Chart(chartCanvas, {
                type: 'line',
                data: {
                    labels: ['Sep 8', 'Sep 9', 'Sep 10', 'Sep 11', 'Sep 12', 'Sep 13', 'Sep 14'],
                    datasets: [
                        {
                            data: [-5000, 5000, -5000, 5000, -1200, -6000, 5000],
                            borderWidth: 3,
                            tension: 0.5,
                            gradient: {
                                borderColor: {
                                    axis: 'y',
                                    colors: {
                                        0: 'rgba(40, 111, 209, 1)',
                                        100: 'rgba(53, 203, 161, 1)'
                                    }
                                }
                            },
                            backgroundColor: (context) => {
                                const {ctx} = context.chart;
                                const gradientAbove = ctx.createLinearGradient(0, 0, 0, 265);
                                gradientAbove.addColorStop(1, 'rgba(40, 111, 209, .7)')
                                gradientAbove.addColorStop(0.5, 'rgba(255, 255, 255, .5)')
                                gradientAbove.addColorStop(0, 'rgba(53, 203, 161, .7)')
                                return gradientAbove
                            },
                            fill: 'origin',
                            animation: false,
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
                            backgroundColor: '#dbdbdb',
                            titleColor: '#000',
                            bodyColor: '#000',
                            caretSize: 0,
                            padding: 10,
                            titleFont: ({family: 'Raleway', weight: 700, size: 14}),
                            bodyFont: ({family: 'Raleway', weight: 600}),
                            callbacks: {
                                labelColor: (context) => {
                                    const label_color = (context.raw as number) < 0 ? 'rgb(40, 111, 209)' : 'rgb(53, 203, 161)'
                                    return {
                                        borderRadius: 6,
                                        backgroundColor: label_color,
                                        borderColor: label_color,
                                        borderWidth: 4
                                    }
                                },
                                label(tooltipItem) {
                                    return `  Renda: ${formatter.format(tooltipItem.parsed.y)}`
                                },
                            }
                        }
                    },
                    scales: {
                         x: {
                            grid: {
                                display: false
                            },
                        },
                        y: {
                            max: 6000,
                            min: -6000,
                            ticks: {
                                stepSize: 2000,
                                font: {
                                    family: 'Raleway',
                                    weight: 900,
                                },
                                
                            },
                            border: {
                                dash: [10],
                            },
                            beginAtZero: true,
                        }
                    }
                }
            });
        })
    })

    const periodeTime = ref<string>('Esta semana');

</script>

<template>
    <div class="w-[757px] h-[374px] bg-white px-7 pt-5 pb-16 rounded-3xl relative">
        <div class="w-full flex justify-between items-center mb-5">
            <p class="font-raleway font-semibold text-black text-xl">Balanço Geral</p>

            <Select
                v-model="periodeTime"
                class="cursor-pointer"
                pt:root="w-36 px-2 flex justify-between items-center font-raleway font-semibold"
                pt:listcontainer="bg-white shadow-md rounded-lg p-2"
                pt:option="font-raleway flex gap-x-3 items-center cursor-pointer"
                pt:optionlabel="py-1"
                :options="['Esta semana', 'Este mês', 'Este ano']"
                checkmark
            >
                <template #dropdownicon>
                    <icons-chevron-down width="18" height="18" stroke="#000" />
                </template>
            </Select>
        </div>
        <canvas id="general-balance-canvas"></canvas>
    </div>
</template>