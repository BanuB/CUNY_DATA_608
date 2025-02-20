d3.csv('ue_industry.csv', data => {

    // Define your scales and generator here.
    
    const xScale = d3.scaleLinear()
            .domain(d3.extent(data, d => +d.index))
            .range([20,1180]);
    
    const yScale = d3.scaleLinear()
            .domain(d3.extent(data,d => +d.Agriculture))
            .range([580, 20]);
    
    const lineA =d3.line()
            .x(d => xScale(+d.index))
            .y(d => yScale(+d.Agriculture));
    
    console.log(lineA(data));
    
    d3.select('#answer1')
        .append('path')
        .attr('d',lineA(data))
        .attr('stroke','#474a4f');

    //d3.select('#answer1')
        // append more elements here

});
