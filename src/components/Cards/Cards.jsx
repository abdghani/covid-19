import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css'
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        return 'loading...'
    }
    const duration = 1
    return (
        <div className={styles.container}>
            <Grid container spacing={3}  justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography variant="h4" color="textSecondadry" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                duration={duration}
                                separator=","
                                end={confirmed.value}></CountUp>
                        </Typography>
                        <Typography color="textSecondadry">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">Number of Active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography variant="h4" color="textSecondadry" gutterBottom>Recoveries</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                duration={duration}
                                separator=","
                                end={recovered.value}></CountUp>
                        </Typography>
                        <Typography color="textSecondadry">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                    <Typography variant="h4" color="textSecondadry" gutterBottom>Deaths</Typography>
                    <Typography variant="h5">
                            <CountUp
                                start={0}
                                duration={duration}
                                separator=","
                                end={deaths.value}></CountUp>
                        </Typography>
                        <Typography color="textSecondadry">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19 </Typography>
                    </CardContent>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default Cards;