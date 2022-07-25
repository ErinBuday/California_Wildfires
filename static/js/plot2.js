fireLocations = "https://raw.githubusercontent.com/ErinBuday/Project-3/main/wildfiresCleaned2.json"

d3.json(fireLocations).then(function(data) {

    function init() {

        var monthCounts = [0,0,0,0,0,0,0,0,0,0,0,0];
        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

        var hourCounts = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        var hourNames = ["12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"];
        
        var fireCauseNames = ['Undetermined','Unknown','Human','Natural']
        var fireCauseCounts = [0,0,0,0]

        var monthCountsUndetermined = [0,0,0,0,0,0,0,0,0,0,0,0];
        var monthCountsUnknown = [0,0,0,0,0,0,0,0,0,0,0,0];
        var monthCountsHuman = [0,0,0,0,0,0,0,0,0,0,0,0];
        var monthCountsNatural = [0,0,0,0,0,0,0,0,0,0,0,0];

        var hourCountsUndetermined = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        var hourCountsUnkown = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        var hourCountsHuman = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        var hourCountsNatural = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        
        
        for (var i=0; i < data.data.length; i++) {
            
            var fireMonth = data.data[i][4] -1;
            var fireHour = data.data[i][3];
            var fireCause = data.data[i][2];

            monthCounts[fireMonth] += 1;
            hourCounts[fireHour] +=1;

            if (fireCause === "Undetermined") {
                fireCauseCounts[0] += 1;
                monthCountsUndetermined[fireMonth] += 1;
                hourCountsUndetermined[fireHour] += 1;
            } else if (fireCause === "Unknown") {
                fireCauseCounts[1] += 1;
                monthCountsUnknown[fireMonth] += 1;
                hourCountsUnkown[fireHour] += 1;
            } else if (fireCause === "Human") {
                fireCauseCounts[2] += 1;
                monthCountsHuman[fireMonth] += 1;
                hourCountsHuman[fireHour] += 1;
            } else if (fireCause === "Natural") {
                fireCauseCounts[3] += 1;
                monthCountsNatural[fireMonth] += 1;
                hourCountsNatural[fireHour] += 1;
            };
        };

        var trace1 = {
            x: monthNames,
            y: monthCounts,
            type: "line",
            marker: {
                color: "red"
            }
        };

        var trace2 = {
            x: hourNames,
            y: hourCounts,
            type: "line",
            marker: {
                color: "red"
            }
        };

        var traceMonthUnknown = {
            x: monthNames,
            y: monthCountsUnknown,
            name: "Unknown",
            type: "bar",
            marker: {
                color: "rgb(255,77,0)"
            }
        }

        var traceMonthHuman = {
            x: monthNames,
            y: monthCountsHuman,
            name: "Human",
            type: "bar",
            marker: {
                color: "rgb(255,154,0)"
            }
        }

        var traceMonthNatural = {
            x: monthNames,
            y: monthCountsNatural,
            name: "Natural",
            type: "bar",
            marker: {
                color: "rgb(255,193,0)"
            }
        }

        var traceMonthUndetermined = {
            x: monthNames,
            y: monthCountsUndetermined,
            name: "Undetermined",
            type: "bar",
            marker: {
                color: "rgb(255,0,0)"
            }
        }

        // Hour counts

        var traceHourUnknown = {
            x: hourNames,
            y: hourCountsUnkown,
            name: "Unknown",
            type: "bar",
            marker: {
                color: "rgb(255,77,0)"
            }
        }

        var traceHourHuman = {
            x: hourNames,
            y: hourCountsHuman,
            name: "Human",
            type: "bar",
            marker: {
                color: "rgb(255,154,0)"
            }
        }

        var traceHourNatural = {
            x: hourNames,
            y: hourCountsNatural,
            name: "Natural",
            type: "bar",
            marker: {
                color: "rgb(255,193,0)"
            }
        }

        var traceHourUndetermined = {
            x: hourNames,
            y: hourCountsUndetermined,
            name: "Undetermined",
            type: "bar",
            marker: {
                color: "rgb(255,0,0)"
            }
        }


        var pieData = [{
            values: fireCauseCounts,
            labels: fireCauseNames,
            type: "pie"
        }];

        var traceData = [trace1];
        var traceData2 = [trace2];
        var traceDataMonthStacked = [traceMonthUndetermined, traceMonthUnknown, traceMonthHuman, traceMonthNatural];
        var traceDataHourStacked = [traceHourUndetermined, traceHourUnknown, traceHourHuman, traceHourNatural];

        var layoutStacked = {
            title: "Number of Fire Incidents by Cause",
            yaxis: {
                text: "Number of Incidents",
                title: 'Months'
            },
            xaxis: {
                tickangle: -45,
                title: 'Hours'
            },
            maring: {
                l: 100,
                r: 100,
                t: 100,
                b: 100,
            },
            barmode: "stack"

        }

        var layout = {
            maring: {
                l: 100,
                r: 100,
                t: 100,
                b: 100,
            }
        }

        var pieLayout = {
            height: 400,
            width: 500
        };

        Plotly.newPlot("firesByMonth", traceDataMonthStacked, layoutStacked);
        Plotly.newPlot("firesByHour", traceDataHourStacked, layoutStacked);
        //Plotly.newPlot("firesByCause", pieData, pieLayout);
    }
   init()
});
