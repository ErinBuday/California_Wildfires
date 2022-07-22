fireLocations = "https://raw.githubusercontent.com/ErinBuday/Project-3/main/wildfiresCleaned.json"

d3.json(fireLocations).then(function(data) {

    function init() {

        var jan = 0;
        var feb = 0;
        var mar = 0;
        var apr = 0;
        var may = 0;
        var june = 0;
        var july = 0;
        var aug = 0;
        var sept = 0;
        var oct = 0;
        var nov = 0;
        var dec = 0;

        console.log(data)
        console.log(Object.keys(data.FireDiscoveryDateTime).length)


        for (var i=0; i < Object.keys(data.FireDiscoveryDateTime).length; i++) {
            fireDate = new Date(data.FireDiscoveryDateTime[i]);

            fireMonth = fireDate.getMonth() + 1;

            if (fireMonth === 1) {
                jan += 1;
            } else if (fireMonth === 2) {
                feb += 1;
            } else if (fireMonth === 3) {
                mar += 1;
            } else if (fireMonth === 4) {
                apr += 1;
            } else if (fireMonth === 5) {
                may += 1;
            } else if (fireMonth === 6) {
                june += 1;
            } else if (fireMonth === 7) {
                july += 1;
            } else if (fireMonth === 8) {
                aug += 1;
            } else if (fireMonth === 9) {
                sept += 1;    
            } else if (fireMonth === 10) {
                oct += 1;
            } else if (fireMonth === 11) {
                nov += 1;
            } else if (fireMonth === 12) {
                dec += 1;
            };
        }

        fireCounts = [jan, feb, mar, apr, may, june, july, aug, sept, oct, nov, dec];

        monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
        console.log(fireCounts);

        var trace1 = {
            x: monthNames,
            y: fireCounts,
            type: "bar",
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

        Plotly.newPlot("bar", traceData, layout);
    }
   init()
})

