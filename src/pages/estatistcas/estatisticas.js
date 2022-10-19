import { makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { Bar } from 'react-chartjs-2'
const useStyles = makeStyles({
    root: {
        width: '100%',
        marginTop: '10px',
        padding: '20px'
    },
    container: {
        maxHeight: 440,
    },
});

const BarChart = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <div
                style={{ width: '30%' }}
            >
                <Bar
                    data={{
                        labels: ['Casas Ocupadas', 'Casas Disponiveis'],
                        datasets: [
                            {
                                label: '# de Casas',
                                data: [20, 50],
                                backgroundColor: [
                                    'cyan',
                                    'lightblue'
                                ],
                                borderColor: [
                                    'black',
                                    'black'
                                ],
                                borderWidth: 1,
                            },
                        ]
                    }}
                    height={400}
                    width={500}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }
                            ],
                            xAxes: [{
                                barPercentage: 0.4
                            }],
                        }
                    }}
                />
            </div>
        </Paper>
    )
}


export default BarChart