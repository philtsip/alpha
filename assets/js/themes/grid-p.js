/**
 * Grid theme for Highcharts JS
 * @author Torstein Hønsi
 */

Highcharts.theme = {
	colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
	chart: {
		backgroundColor: {
			linearGradient: [0, 0, 0, 0],
			stops: [
				[0, 'rgb(255, 255, 255)'],
				[0, 'rgb(255, 255, 255)']
			]
		}
,
		borderWidth: 0,
		plotBackgroundColor: 'rgba(255, 255, 255, .9)',
		plotShadow: false,
		plotBorderWidth: 0
	},
	title: {
		style: { 
			color: '#666',
			font: 'bold 16px "Arial", Verdana, sans-serif'
		}
	},
	subtitle: {
		style: { 
			color: '#666666',
			font: 'bold 12px "Arial", Verdana, sans-serif'
		}
	},
	xAxis: {
		gridLineWidth: 0,
		lineColor: '#999',
		tickColor: '#999',
		labels: {
			style: {
				color: '#000',
				font: '11px Arial, Verdana, sans-serif'
			}
		},
		title: {
			style: {
				color: '#666',
				fontWeight: 'bold',
				fontSize: '12px',
				fontFamily: 'Arial, Verdana, sans-serif'

			}				
		}
	},
	yAxis: {
		minorTickInterval: 'none',
		lineColor: '#000',
		lineWidth: 1,
		tickWidth: 1,
		tickColor: '#000',
		labels: {
			style: {
				color: '#CCC',
				font: '11px Arial, Verdana, sans-serif'
			}
		},
		title: {
			style: {
				color: '#333',
				fontWeight: 'bold',
				fontSize: '12px',
				fontFamily: 'Arial, Verdana, sans-serif'
			}				
		}
	},
	legend: {
		itemStyle: {			
			font: '9pt Arial, Verdana, sans-serif',
			color: 'black'

		},
		itemHoverStyle: {
			color: '#039'
		},
		itemHiddenStyle: {
			color: 'gray'
		}
	},
	labels: {
		style: {
			color: '#99b'
		}
	}
};

// Apply the theme
var highchartsOptions = Highcharts.setOptions(Highcharts.theme);
	
