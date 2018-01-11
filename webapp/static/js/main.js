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
		str>10?str:"0"+str;
		return str;
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
			            label:{
			            	normal:{
			            		textStyle:{
			            			fontSize:10,
			            			color:"#fff"
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
			            splitLine :{
			            	show:true,
			            	lineStyle:{
								color: '#534d49',//网格线颜色
								width: 1,//网格线宽度
								type: 'dashed'//网格线样式
							},
			            },
			            
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
			            data:[12, 34, 50, 88, 100],
			            itemStyle:{
                    		normal:{color:'#126ff8'}
                		}
			            
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
			    grid: {
				    left: '2%',
					right: '2%',
					bottom: '3%',
					containLabel: true
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
			            splitLine :{
			            	show:true,
			            	lineStyle:{
								color: '#534d49',//网格线颜色
								width: 1,//网格线宽度
								type: 'dashed'//网格线样式
							},
			            },
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
			            data:[6.3, 6.0, 5.7, 5.9, 5.9, 6.1, 6.0],
			            itemStyle:{
			                normal:{color:'#58f4e6'}
			            }
			            
			           
			        }
			    ]
			};
		myChart.setOption(option);
		
	}());
	
	//main
	(function (){
		var myChart = echarts.init(document.getElementById('main'));
		
		var effect = {
		    show: true,
		    period: 30,             // 运动周期，无单位，值越大越慢
		    color: '#fff',
		    shadowColor: 'rgba(220,220,220,0.4)',
		    shadowBlur : 5 
		};
		function itemStyle(idx) {
		    return {
		        normal: {
		            color:'#fff',
		            borderWidth:1,
		            borderColor:['rgba(30,144,255,1)','lime'][idx],
		            lineStyle: {
		                //shadowColor : ['rgba(30,144,255,1)','lime'][idx], //默认透明
		                //shadowBlur: 10,
		                //shadowOffsetX: 0,
		                //shadowOffsetY: 0,
		                type: 'solid'
		            }
		        }
		    }
		};
		
		var app = {};
		option = null;
		app.title = '北京公交路线 - 线特效';
		$.getJSON('lines-bus.json', function(data) {
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
		    var myData = [
		    	{name: '淮海营业部', value: [121.485615, 31.215004,90]},
			  	{name: '打浦营业部', value: [121.489370, 31.198660,120]},
			  	{name: '新昌营业点', value: [121.468964, 31.233949, 142]},
			    {name: '卢湾营业点', value: [121.491280, 31.220435, 123]},
			    {name: '康定营业点', value: [121.448600, 31.234330, 123]},
			    {name: '江宁营业点', value: [121.449507, 31.233018, 123]},
			    {name: '虹桥营业部', value: [121.383852, 31.177376, 100]}
		    ];
		    myChart.setOption(option = {
		        bmap: {
		            center: [121.491280, 31.220435],
		            zoom: 12,
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
		        visualMap: {	// 视觉映射组件
					type: 'continuous',
					min: 0,
					max: 200,
					calculable: true,
					inRange: {
			             	color: ['#50a3ba','#eac736','#d94e5d']
			        },
					textStyle: {
						color: '#fff'
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
		        },
		        
		        {
		        	type: 'scatter',
		            coordinateSystem: 'bmap',
		            data: myData,
		            markLine:{
		            	symbol: ['circle', 'circle'],  
		                symbolSize : 1,
		                effect : effect,
		                itemStyle : itemStyle(0),
		                smooth:true,
		                data:[
		                	
		                ]
		            }
		            
		        	
		        	
		        	
		        	
		        	
		        }
		        
		        
		        
		        ]
		    });
		});;
		if (option && typeof option === "object") {
		    myChart.setOption(option, true);
		}
                    
		
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
			    grid: {
				    left: '2%',
					right: '2%',
					bottom: '3%',
					containLabel: true
				},
			    tooltip : {
			        formatter: "{a} <br/>{b} : {c}%"
			    },
			    series: [{
			        type: 'liquidFill',
			        data: [1.0],
			        radius: '75%'
			    }]
			};
	
//			clearInterval(timeTicket);
//			var timeTicket = setInterval(function (){
//			    option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
//			    myChart.setOption(option, true);
//			},2000);
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
			    grid: {
				    left: '2%',
					right: '2%',
					bottom: '3%',
					containLabel: true
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
		                    rotate:-45,//倾斜度 -90 至 90 默认为0  
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
			            splitLine :{
			            	show:true,
			            	lineStyle:{
								color: '#534d49',//网格线颜色
								width: 1,//网格线宽度
								type: 'dashed'//网格线样式
							},
			            },
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
			            data:["100",'200','300'],
			            itemStyle:{
			                normal:{color:'#358be3'}
			            }
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
			    grid: {
				    left: '2%',
					right: '2%',
					bottom: '3%',
					containLabel: true
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
			            splitLine :{
			            	show:true,
			            	lineStyle:{
								color: '#534d49',//网格线颜色
								width: 1,//网格线宽度
								type: 'dashed'//网格线样式
							},
			            },
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
			            data:[3100, 2900, 3117, 3019, 3004, 3008],
			            itemStyle:{
			                normal:{color:'#58f4e6'}
			            }
			            
			           
			        }
			    ]
			};
		myChart.setOption(option);
	}());
                                                   
 	
	
	
});