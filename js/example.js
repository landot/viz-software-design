

$(function() {
    var myChart = Tree()
        .height(800)
        .width(1200)
        .grouping('State')
        .selectedDisplay('State')
        .measure('Pop2015')
    //gathered data on state data   
    d3.csv("data/test3.csv", function(data) {
        var chartWrapper = d3.select("#my-div")
            .datum(data)
            .call(myChart)
    });
    
    setTimeout(function() {
       console.log('changing...')
       myChart.height(500)
       myChart.measure('Pop2010')
    },5000);

    //NOTE: Chart does not update from new functions after being created
    //also creating multiple charts layers themselves on top of each other
    //it would be good to show the data type parameters for functions
    
    
    
    
    
    
    // var myChart2 = Tree()
    //     .height(800)
    //     .width(1200)
    //     .grouping('State')
    //     .selectedDisplay('State')
    //     .measure('Pop2010')
        
    // d3.csv("data/test3.csv", function(data) {
    //     d3.select("#my-div")
    //         .datum(data)
    //         .call(myChart2)
    // });   
})

    
    


