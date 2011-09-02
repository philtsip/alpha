var chart;
$(document).ready(function() {
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'chart_1',
			defaultSeriesType: 'column'
		},
		title: {	
			text: 'Motorola Mobile Revenue (2006-2010)'
		},
		xAxis: {	
			categories: [2006, 2007, 2008, 2009, 2010] 
		},
		yAxis: {		
			labels: {
	            formatter: function() {
	                return '$' + Highcharts.numberFormat(this.value, 0, ',');
	            }
	        },
	        min: 0,	
			title: {	
				text: 'Revenue ($M)'
			},

			stackLabels: {
				enabled: true,
				style: {
					fontWeight: 'bold',
					color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
				}
			}
		},
		legend: {
			align: 'right',
			x: -100,
			verticalAlign: 'top',
			y: 20,
			floating: true,
			backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || 'white',
			borderColor: '#CCC',
			borderWidth: 1,
			shadow: false
		},
		tooltip: {
			formatter: function() {
				return '<b>'+ this.x +'</b><br/>'+
					 this.series.name +': $'+ Highcharts.numberFormat(this.y, 0, ',');
			}
		},
		plotOptions: {
			column: {
				stacking: 'normal',
				dataLabels: {
					enabled: false,
					color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
				}
			}
		},
	        series: [{		
			name: 'Motorola Mobile Revenue',
			data: [28383, 18988, 12187, 7146, 7819]
		}]
	});
	
	
});
