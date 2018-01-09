$(function (){
	//time
	window.onload=function(){
		//定时器每秒调用一次fnDate()
		setInterval(function(){
			fnDate('time');
		},1000);
	}
	//js 获取当前时间
	function fnDate(id){
		var oDiv=document.getElementById(id);
		var date=new Date();
		var year=date.getFullYear();//当前年份
		var month=date.getMonth();//当前月份
		var data=date.getDate();//天
		var hours=date.getHours();//小时
		var minute=date.getMinutes();//分
		var second=date.getSeconds();//秒
		var time=year+"-"+fnW((month+1))+"-"+fnW(data)+" "+fnW(hours)+":"+fnW(minute)+":"+fnW(second);
		oDiv.innerHTML=time;
	}
	//补位 当某个字段不是两位数时补0
	function fnW(str){
		var num;
		str>10?num=str:num="0"+str;
		return num;
	}
	
//	//left-pie
	(function (){
		var myChart = echarts.init(document.getElementById('left-pie'));
		var i=0;
		var colors = ["#2078d1","#53f5f3"];
		var	option = {
			    tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b}: {c} ({d}%)"
			    },
			    legend: {
			        orient: 'vertical',
			        x: 'left',
			        data:['SWOT Carrier','Reqular Carrier'],
			        textStyle : {
			            color: '#fff'
			        }
			    },
			    series: [
			        {
			            name:'访问来源',
			            type:'pie',
			            radius: ['50%', '70%'],
			            avoidLabelOverlap: false,
			            itemStyle : {  
			                normal : {  
			                    color:function(){  
			                        return colors[i++];   
		                        },  
			                    label : {  
			                        show : true,
			                        formatter: '{b} : {c} ({d}%)' 
			                    },  
			                    labelLine : {  
			                        show : true  
			                    }  
			                },  
			                emphasis : {  
			                    label : {  
			                        show : true,  
			                        position : 'center',  
			                        textStyle : {  
			                            fontSize : '30',  
			                            fontWeight : 'bold'  
			                        }  
			                    }  
			                }  
			            },  
			            data:[
			                {value:33, name:'SWOT Carrier'},
			                {value:310, name:'Reqular Carrier'}
			                
			            ]
			        }
			    ]
			};
		myChart.setOption(option);
	}());
	
	//left-bar
	(function (){
		var myChart = echarts.init(document.getElementById('left-bar'));
		var option = {
			    title : {
			        text: '收件热点区域Top 5 预测',
			        x:'center',
        			y:'top',
			        textAlign:'center',
			        textStyle : {
			            color: '#fff'
			        }
			    },
			    tooltip : {
			        trigger: 'axis'
			    },
			    grid: {
				    left: '2%',
					right: '2%',
					bottom: '3%',
					containLabel: true
				},
			   
			    calculable : true,
			    xAxis : [
			        {
			            type : 'value',
			            boundaryGap : [0, 0.01],
			            axisLabel:{  
		                    margin:5,  
		                    textStyle:{  
		                        fontWeight:"bolder",  
		                        color:"#fff"  
		                    }  
		                }
			        }
			    ],
			    yAxis : [
			        {
			            type : 'category',
			            data : ['5.五角场','4.徐家汇','3.火车站','2.新天地','1.陆家嘴'],
			            axisLabel:{  
		                    margin:5,  
		                    textStyle:{  
		                        fontWeight:"bolder",  
		                        color:"#fff"  
		                    }  
		                }
			        }
			    ],
			    series : [
			       
			        {
			            type:'bar',
			            data:[12, 34, 50, 88, 100]
			        }
			    ]
			};
		myChart.setOption(option);
	}());
	
	//left-line
	(function  () {
		var myChart = echarts.init(document.getElementById('left-line'));
		var option = {
			    title : {
			        text: '运力压力指数',
			        textStyle : {
			            color: '#fff'
			        }
			    },
			    tooltip : {
			        trigger: 'axis'
			    },
			    calculable : true,
			    xAxis : [
			        {
			            type : 'category',
			            boundaryGap : false,
			            data : ['10:49','10:50','10:51','10:52','10:53','10:54','10:55'],
			            axisLabel:{  
		                    margin:5,  
		                    textStyle:{  
		                        fontWeight:"bolder",  
		                        color:"#fff"  
		                    }  
		                }
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value',
			            axisLabel : {
			                formatter: '{value}',
			                margin:5,  
		                    textStyle:{  
		                        fontWeight:"bolder",  
		                        color:"#fff"  
		                    }  
			            }
			        }
			    ],
			    series : [
			
			        {
			            type:'line',
			            data:[6.3, 6.0, 5.7, 5.9, 5.9, 6.1, 6.0]
			            
			           
			        }
			    ]
			};
		myChart.setOption(option);
		
	}());
	
	//main
	(function (){
		var myChart = echarts.init(document.getElementById('main'));


$.get('lines-bus.json', function(data) {
    var hStep = 300 / (data.length - 1);
    var busLines = [].concat.apply([], data.map(function (busLine, idx) {
        var prevPt;
        var points = [];
        for (var i = 0; i < busLine.length; i += 2) {
            var pt = [busLine[i], busLine[i + 1]];
            if (i > 0) {
                pt = [
                    prevPt[0] + pt[0],
                    prevPt[1] + pt[1]
                ];
            }
            prevPt = pt;

            points.push([pt[0] / 1e4, pt[1] / 1e4]);
        }
        return {
            coords: points,
            lineStyle: {
                normal: {
                    color: echarts.color.modifyHSL('#5A94DF', Math.round(hStep * idx))
                }
            }
        };
    }));
    myChart.setOption(option = {
        bmap: {
            center: [116.46, 39.92],
            zoom: 10,
            roam: true,
            mapStyle: {
              'styleJson': [
                {
                  'featureType': 'water',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#031628'
                  }
                },
                {
                  'featureType': 'land',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#000102'
                  }
                },
                {
                  'featureType': 'highway',
                  'elementType': 'all',
                  'stylers': {
                    'visibility': 'off'
                  }
                },
                {
                  'featureType': 'arterial',
                  'elementType': 'geometry.fill',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'arterial',
                  'elementType': 'geometry.stroke',
                  'stylers': {
                    'color': '#0b3d51'
                  }
                },
                {
                  'featureType': 'local',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'railway',
                  'elementType': 'geometry.fill',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'railway',
                  'elementType': 'geometry.stroke',
                  'stylers': {
                    'color': '#08304b'
                  }
                },
                {
                  'featureType': 'subway',
                  'elementType': 'geometry',
                  'stylers': {
                    'lightness': -70
                  }
                },
                {
                  'featureType': 'building',
                  'elementType': 'geometry.fill',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'all',
                  'elementType': 'labels.text.fill',
                  'stylers': {
                    'color': '#857f7f'
                  }
                },
                {
                  'featureType': 'all',
                  'elementType': 'labels.text.stroke',
                  'stylers': {
                    'color': '#000000'
                  }
                },
                {
                  'featureType': 'building',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#022338'
                  }
                },
                {
                  'featureType': 'green',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#062032'
                  }
                },
                {
                  'featureType': 'boundary',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#465b6c'
                  }
                },
                {
                  'featureType': 'manmade',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#022338'
                  }
                },
                {
                  'featureType': 'label',
                  'elementType': 'all',
                  'stylers': {
                    'visibility': 'off'
                  }
                }
              ]
            }
        },
        series: [{
            type: 'lines',
            coordinateSystem: 'bmap',
            polyline: true,
            data: busLines,
            silent: true,
            lineStyle: {
                normal: {
                    // color: '#c23531',
                    // color: 'rgb(200, 35, 45)',
                    opacity: 0.2,
                    width: 1
                }
            },
            progressiveThreshold: 500,
            progressive: 200
        }, {
            type: 'lines',
            coordinateSystem: 'bmap',
            polyline: true,
            data: busLines,
            lineStyle: {
                normal: {
                    width: 0
                }
            },
            effect: {
                constantSpeed: 20,
                show: true,
                trailLength: 0.1,
                symbolSize: 1.5
            },
            zlevel: 1
        }]
    });
});
                    
		
		//myChart.setOption(option);
	}());
	
	
	//right-dashboard
	(function (){
		var myChart = echarts.init(document.getElementById('right-dashboard'));
		var option = {
				title : {
			        text: '实时妥投率',
			        x:'center',
			        textStyle : {
			            color: '#fff'
			        }
			    },
			    tooltip : {
			        formatter: "{a} <br/>{b} : {c}%"
			    },
			    series : [
			        {
			            name:'业务指标',
			            type:'gauge',
			            detail : {formatter:'{value}%'},
			            data:[{value: 50}]
			        }
			    ]
			};
	
			clearInterval(timeTicket);
			var timeTicket = setInterval(function (){
			    option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
			    myChart.setOption(option, true);
			},2000);
		myChart.setOption(option);
	}());
         
    //right-bar
	(function (){
		var myChart = echarts.init(document.getElementById('right-bar'));
		var option = {
			    title : {
			        text: '实时快件数',
			        textStyle : {
			            color: '#fff'
			        }
			    },
			    tooltip : {
			        trigger: 'axis'
			    },
			    calculable : true,
			    xAxis : [
			        {
			            type : 'category',
			            data : ['unattended','Delivered','Pickup'],
			            axisLabel:{  
		                    interval:0,  
		                    rotate:45,//倾斜度 -90 至 90 默认为0  
		                    margin:5,  
		                    textStyle:{  
		                        fontWeight:"bolder",  
		                        color:"#fff"  
		                    }  
		                }
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value',
			            axisLabel:{  
		                    margin:5,  
		                    textStyle:{  
		                        fontWeight:"bolder",  
		                        color:"#fff"  
		                    }  
		                }
			        }
			    ],
			    series : [
			        {
			            type:'bar',
			            barWidth:30,
			            data:["100",'200','300']
			        }
			    ]
			};

		myChart.setOption(option);
	}());
	
	//right-line
	(function (){
		var myChart = echarts.init(document.getElementById('right-line'));
		var option = {
			    title : {
			        text: '最近一小时新增包裹',
			        textStyle : {
			            color: '#fff'
			        }
			    },
			    tooltip : {
			        trigger: 'axis'
			    },
			    calculable : true,
			    xAxis : [
			        {
			            type : 'category',
			            boundaryGap : false,
			            data : ['10:00','11:00','12:00','13:00','14:00','15:00'],
			            axisLabel:{  
		                    margin:5,  
		                    textStyle:{  
		                        fontWeight:"bolder",  
		                        color:"#fff"  
		                    }  
		                }
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value',
			            axisLabel : {
			                formatter: '{value}',
			                margin:5,  
		                    textStyle:{  
		                        fontWeight:"bolder",  
		                        color:"#fff"  
		                    }  
			            }
			        }
			    ],
			    series : [
			
			        {
			            type:'line',
			            data:[3100, 2900, 3117, 3019, 3004, 3008]
			            
			           
			        }
			    ]
			};
		myChart.setOption(option);
	}());
                                                   
 	
	
	
});