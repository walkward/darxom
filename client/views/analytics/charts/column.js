/*
 * Function to draw the column chart
 */
builtColumn = function(semDomain, semOrganicTraffic) {	
	
    $('#container-column').highcharts({
        
        chart: {
            type: 'column'
        },
        
        title: {
            text: 'Top Domain Analytics'
        },
        
        subtitle: {
            text: 'Source: SEMRush.com'
        },
        
        credits: {
            enabled: false
        },
        
        xAxis: {
            categories: semDomain
        },
        
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Organic Keywords',
            data: (semOrganicTraffic).map(function(x) { return parseInt(x); })
        }]
    });
};