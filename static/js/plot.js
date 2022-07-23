fireLocations = "https://raw.githubusercontent.com/ErinBuday/Project-3/main/wildfiresCleaned.json"

d3.json(fireLocations).then(function(data) {

    function init() {

        var monthCounts = [0,0,0,0,0,0,0,0,0,0,0,0]
        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        
        for (var i=0; i < Object.keys(data.FireDiscoveryDateTime).length; i++) {
            
            fireMonth = data.LocalMonth[i] - 1;

            fireHour = data.LocalTimeOfDay[i];

            fireDate = Date(data.FireDiscoveryDateTime[i])

            monthCounts[fireMonth] += 1;
        };       

        var trace1 = {
            x: monthNames,
            y: monthCounts,
            type: "bar"
        };

        var traceData = [trace1];

        var layout = {
            maring: {
                l: 100,
                r: 100,
                t: 100,
                b: 100
            }
        }

        Plotly.newPlot("firesByMonth", traceData, layout);

    }
   init()
})