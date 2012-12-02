var chart;
var chart2;

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
			tickInterval: 3,
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

var chart;
$(document).ready(function() {
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'chart_2',
			defaultSeriesType: 'spline'
		},
		title: {
			text: 'U.S. Unemployement - Apr-Aug 2011'
		},
		subtitle: {
			text: '% (unemployed)',
			align: "left"
		},
		xAxis: {
			categories: ["Apr 11", "May 11", "Jun 11", "Jul 11", "Aug 11"]
		},
		yAxis: {
			title: {
				text: ''
			},
			min: 0,
			max: 15,
			minorGridLineWidth: 0, 
			gridLineWidth: 0,
			alternateGridColor: null,
			plotBands: [{ // 
				from: 0,
				to: 5,
				color: 'rgba(68, 170, 213, 0.1)',
				label: {
					text: '',
					style: {
						color: '#606060'
					}
				}
			}, { // 
				from: 5,
				to: 10,
				color: 'rgba(0, 0, 0, 0)',
				label: {
					text: '',
					style: {
						color: '#606060'
					}
				}
			}, { // 
				from: 10,
				to: 15,
				color: 'rgba(68, 170, 213, 0.1)',
				label: {
					text: '',
					style: {
						color: '#606060'
					}
				}
			}]
		},
		plotOptions: {
			spline: {
	            dataLabels: {
	               enabled: true,
				   y: -15,
	               formatter: function() {
	                  return this.y +'%';
	               }
	            },              
				lineWidth: 4,
				states: {
					hover: {
						lineWidth: 5
					}
				},
				marker: {
					enabled: true,
					states: {
						hover: {
							enabled: true,
							symbol: 'circle',
							radius: 5,
							lineWidth: 1
						}
					}	
				}
			}
		},
		series: [{
			name: 'Unemployment %',
			data: [9, 9.1, 9.2, 9.1, 9.1]
	
		}
		]
		,
		navigation: {
			menuItemStyle: {
				fontSize: '10px'
			}
		}
	});
	
	
});