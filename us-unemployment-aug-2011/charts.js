var chart;
$(document).ready(function() {
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'chart_1',
			defaultSeriesType: 'column'
		},
		title: {	
			text: 'U.S. Unemployment - April-August 2011'
		},
		xAxis: {	
			categories: ["Apr 11", "May 11", "Jun 11", "Jul 11", "Aug 11"]
		},
		yAxis: {		
			labels: {
	            formatter: function() {
	                return Highcharts.numberFormat(this.value, 1, '.') + '%';
	            }
	        },
	        min: 0,	
	        max: 15,	
			title: {	
				text: 'Unemployment %'
			},

			stackLabels: {
				enabled: true,
				style: {
					fontWeight: 'bold',
					color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
				},
	            formatter: function() {
	                return Highcharts.numberFormat(this.total, 1, '.') + '%';
	            }
			}
		},
		tooltip: {
			formatter: function() {
				return '<b>'+ this.x +'</b>' + ': '+ Highcharts.numberFormat(this.y, 1, '.') + '%';
			}
		},
		plotOptions: {
			column: {
				stacking: 'normal',
	            dataLabels: {
	               enabled: false,
	               style: {
	                  fontWeight: 'bold'
	               },
	               formatter: function() {
	                  return this.y +'%';
	               }
	            }               
			},
			series: {
			            pointPadding: 0,
			            groupPadding: 0.2,
			            borderWidth: 0, 
			            shadow: false
			        }
		},
	        series: [{		
			name: 'Unemployment %',
			data: [9, 9.1, 9.2, 9.1, 9.1]
			}]
		}
	
	/**	
	,
	function(chart) { // on complete

	    chart.renderer.rect(378, 100, 50, 139, 0)
	        .attr({
	            'stroke-width': 2,
	            stroke: 'red',
	            fill: 'none',
	            zIndex: 1
	        })
	        .add();
	
		chart.renderer.image('http://blogs.westword.com/latestword/frown%20face2.gif', 387, 50, 30, 30)
			        .add();   

	
	} 
**/
	);
		
});