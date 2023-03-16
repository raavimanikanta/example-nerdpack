

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

// export default class Nerdlet1Nerdlet extends React.Component {
//   render() {
//     return <h1>Hello, First Example Nerdlet!</h1>;
//   }
// }

import React from 'react';
import { ChartGroup, Grid, GridItem } from 'nr1';
import NewsletterSignups from './newsettlersignup';
import PastTests from './totals';
import TotalCancellations from './total-cancellations';
import TotalSubscriptions from './total-subscriptions';
import VersionPageViews from './pageviews';
import VersionTotals from './totals';

export default class AbTestNerdletNerdlet extends React.Component {
    render() {
        return <div>
            <Grid className="wrapper">
                <GridItem columnSpan={12}><NewsletterSignups /></GridItem>
                <GridItem columnSpan={6}><TotalSubscriptions /></GridItem>
                <GridItem columnSpan={6}><TotalCancellations /></GridItem>
                
                <ChartGroup>
                    <GridItem columnSpan={6}>
                        <VersionPageViews version='a' />
                    </GridItem>
                    <GridItem columnSpan={6}>
                        <VersionPageViews version='b' />
                    </GridItem>
                </ChartGroup>
                <GridItem columnSpan={12}><PastTests /></GridItem>
            </Grid>
        </div>
    }
}
