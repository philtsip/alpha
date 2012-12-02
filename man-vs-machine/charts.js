var chart;
$(document).ready(function() {
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'chart_1',
			defaultSeriesType: 'column'
		},
		title: {	
			text: 'Computing Power Over Time'
		},
		xAxis: {	
			categories: ["1977 (Cray-1)", "1992 (200Mhz PC)", "1993 (300Mhz PC)", "1995 (400Mhz PC)", "1996 (500Mhz PC)", "1998 (600Mhz PC)", "1999 (700Mhz PC)", "2006 (MacBook - Intel Core Due)", " ", "Average Human Brain"]
		},
		yAxis: {		
			labels: {
	            formatter: function() {
	                return Highcharts.numberFormat(this.value, 0, ',');
	            }
	        },
	        min: 0,	
			title: {	
				text: 'Computing Power (MIPS)'
			},

			stackLabels: {
				enabled: true,
				style: {
					fontWeight: 'bold',
					color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
				}
			}
		},
		tooltip: {
			formatter: function() {
				return '<b>'+ this.x +'</b><br/>'+
					 this.series.name +': '+ Highcharts.numberFormat(this.y, 0, ',');
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
			name: 'MIPS',
			data: [150, 400, 600, 1600, 2000, 3600, 4200, 20000, "", ""]
		}]
	});
	
	
});

var chart2;
$(document).ready(function() {
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'chart_2',
			defaultSeriesType: 'column'
		},
		title: {	
			text: 'Computing Power Over Time'
		},
		xAxis: {	
			categories: ["1977 (Cray-1)", "1992 (200Mhz PC)", "1993 (300Mhz PC)", "1995 (400Mhz PC)", "1996 (500Mhz PC)", "1998 (600Mhz PC)", "1999 (700Mhz PC)", "2006 (MacBook - Intel Core Due)", " ", "Average Human Brain"]
		},
		yAxis: {		
			labels: {
	            formatter: function() {
	                return Highcharts.numberFormat(this.value, 0, ',');
	            }
	        },
	        min: 0,	
			title: {	
				text: 'Computing Power (MIPS)'
			},

			stackLabels: {
				enabled: true,
				style: {
					fontWeight: 'bold',
					color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
				}
			}
		},
		tooltip: {
			formatter: function() {
				return '<b>'+ this.x +'</b><br/>'+
					 this.series.name +': '+ Highcharts.numberFormat(this.y, 0, ',');
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
			name: 'MIPS',
			data: [150, 400, 600, 1600, 2000, 3600, 4200, 20000, "",  100000000]
		}]
	});
	
	
});
