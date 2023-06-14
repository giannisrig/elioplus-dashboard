(function ($) {
    'use strict';

    $(document).ready(function() {

        console.log('init charts')

        $('.doughnut-chart').each(function(){

            // console.log('data-labels', $(this).attr('data-labels').split(','))
            // console.log('data-values', $(this).attr('data-values').split(','))
            // console.log('data-colors', $(this).attr('data-colors').split(','))


            new Chart($(this), {
                type: 'doughnut',
                data: {
                    labels: $(this).attr('data-labels').split(','),
                    datasets: [{
                        label: $(this).attr('data-label'),
                        data: $(this).attr('data-values').split(','),
                        backgroundColor: $(this).attr('data-colors').split(','),
                        hoverOffset: 4
                    }]
                },
                options: {
                    plugins: {
                        legend: {
                            display: false
                        },
                    }
                }
            });

        });


        $('.bar-chart-double').each(function(){


            new Chart($(this), {
                type: 'bar',
                data: {
                    labels: $(this).attr('data-labels').split(','),
                    datasets: [
                        {
                            label: $(this).attr('data-datalabels').split(',')[0],
                            data: $(this).attr('data-values').split(','),
                            backgroundColor: $(this).attr('data-colors').split(',')[0],
                            borderWidth: 0,
                            maxBarThickness: 12,
                        },
                        {
                            label: $(this).attr('data-datalabels').split(',')[1],
                            data: $(this).attr('data-values2').split(','),
                            backgroundColor: $(this).attr('data-colors').split(',')[1],
                            borderWidth: 0,
                            maxBarThickness: 12,
                        },
                    ]
                },
                options: {
                    scales: {
                        x: {
                            border: {
                                width:2,
                                color: '#E2EDFF',
                            },
                            grid: {
                                color: 'transparent'
                            },
                            ticks: {
                                color: '#002E47',
                            }
                        },
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'transparent'
                            },
                            border: {
                                width: 2,
                                color: '#E2EDFF',
                            },
                            ticks: {
                                color: '#002E47',
                                // Include a dollar sign in the ticks
                                callback: function(value, index, ticks) {
                                    return '$' + value +'K';
                                }
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                    }
                },
            });

        });



        $('.bar-chart-triple').each(function(){


            new Chart($(this), {
                type: 'bar',
                data: {
                    labels: $(this).attr('data-labels').split(','),
                    datasets: [
                        {
                            label: $(this).attr('data-datalabels').split(',')[0],
                            data: $(this).attr('data-values').split(','),
                            backgroundColor: $(this).attr('data-colors').split(',')[0],
                            borderWidth: 0,
                            maxBarThickness: 14,
                        },
                        {
                            label: $(this).attr('data-datalabels').split(',')[1],
                            data: $(this).attr('data-values2').split(','),
                            backgroundColor: $(this).attr('data-colors').split(',')[1],
                            borderWidth: 0,
                            maxBarThickness: 14,
                        },
                        {
                            label: $(this).attr('data-datalabels').split(',')[2],
                            data: $(this).attr('data-values3').split(','),
                            backgroundColor: $(this).attr('data-colors').split(',')[2],
                            borderWidth: 0,
                            maxBarThickness: 14,
                        }
                    ]
                },
                options: {
                    scales: {
                        x: {
                            border: {
                                width:2,
                                color: '#E2EDFF',
                            },
                            grid: {
                                color: 'transparent'
                            },
                            ticks: {
                                color: '#002E47',
                            }
                        },
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'transparent'
                            },
                            border: {
                                width: 2,
                                color: '#E2EDFF',
                            },
                            ticks: {
                                color: '#002E47',
                                // Include a dollar sign in the ticks
                                callback: function(value, index, ticks) {
                                    return '$' + value +'K';
                                }
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                    }
                },
            });

        });


        $('.line-chart').each(function(){


            new Chart($(this), {
                type: 'line',
                data: {
                    labels: $(this).attr('data-labels').split(','),
                    datasets: [{
                        label: $(this).attr('data-label'),
                        data: $(this).attr('data-values').split(','),
                        backgroundColor: '#C4E9FB',
                        borderColor: $(this).attr('data-colors'),
                        fill:true,
                        hoverOffset: 4
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            border: {
                                width:2,
                                color: '#E2EDFF',
                            },
                            grid: {
                                color: 'transparent'
                            },
                            ticks: {
                                color: '#002E47',
                            }
                        },
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'transparent'
                            },
                            border: {
                                width: 2,
                                color: '#E2EDFF',
                            },
                            ticks: {
                                color: '#002E47',
                                // Include a dollar sign in the ticks
                                callback: function(value, index, ticks) {
                                    return '$' + value +'K';
                                }
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                    }
                },
            });

        });


    });

})( jQuery );
