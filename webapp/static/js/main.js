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
		var colors = ["#2078d1","#53f5f3","#2078d1","#53f5f3"];
		var	option = {
				color: ["#2078d1","#53f5f3"],
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
			                {value:40, name:'SWOT Carrier'},
			                {value:310, name:'Reqular Carrier'}
			            ]
			        }
			    ]
			};
		var a = [33,40,43];
		var b = [317,310,307];
		clearInterval(timeTicket1);
		var timeTicket1 = setInterval(function (){
			var i =Math.floor(Math.random()*3);
		    option.series[0].data[0].value = a[i];
		    option.series[0].data[1].value = b[i];
		    
		    myChart.setOption(option, true);
		},1000);	
		
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
		var a = [['5.五角场','4.徐家汇','3.火车站','2.新天地','1.陆家嘴'],['5.徐家汇','4.五角场','3.火车站','2.陆家嘴','1.新天地']];
		var b = [[12, 34, 50, 88, 100],[20, 30, 50, 100, 120]];
		clearInterval(timeTicket2);
		var timeTicket2 = setInterval(function (){
			var i =Math.floor(Math.random()*2);
		    option.yAxis[0].data = a[i];
		    option.series[0].data = b[i];
		    
		    myChart.setOption(option, true);
		},2000);
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
		var a=[['10:49','10:50','10:51','10:52','10:53','10:54','10:55'],['11:03','11:04','11:05','11:06','11:07','11:08','11:09']];
		var b = [[6.3, 6.0, 5.7, 5.9, 5.9, 6.1, 6.0],[6.6, 6.2, 5.3, 5.6, 5.5, 6.8, 6.1]];
		clearInterval(timeTicket3);
		var timeTicket3 = setInterval(function (){
			var i =Math.floor(Math.random()*2);
		    option.xAxis[0].data = a[i];
		    option.series[0].data = b[i];
		    
		    myChart.setOption(option, true);
		},3000);
		
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
		
		var app = {},
		option = null;
		app.title = '北京公交路线 - 线特效';
		//$.getJSON('line.json', function(res) {
		    var myData = [
			    {value:[121.485615,31.215004]},
			    {value:[121.489370,31.198660]},
			    {value:[121.468964,31.233949]},
			    {value:[121.416996,31.271868]},
			    {value:[121.414697,31.262978]},
			    {value:[121.407798,31.222965]},
			    {value:[121.404923,31.191832]},
			    {value:[121.467589,31.180464]},
			    {value:[121.366404,31.240257]},
			    {value:[121.489370,31.198660]},
			    {value:[121.478512,31.305442]},
			    {value:[121.593495,31.236305]},
			    {value:[121.352031,31.198257]},
			    {value:[121.485411,31.184912]},
			    {value:[121.466439,31.212589]},
			    {value:[121.574523,31.179475]},
			    {value:[121.413547,31.185901]},
			    {value:[121.420446,31.260015]}
			  ];
			var myData1 = [
			    {value:[121.475615,31.225004]},
			    {value:[121.469370,31.138660]},
			    {value:[121.448964,31.213949]},
			    {value:[121.426996,31.261868]},
			    {value:[121.424697,31.272978]},
			    {value:[121.417798,31.232965]},
			    {value:[121.414923,31.181832]},
			    {value:[121.477589,31.110464]},
			    {value:[121.326404,31.250257]},
			    {value:[121.499370,31.188660]},
			    {value:[121.488512,31.315442]},
			    {value:[121.583495,31.226305]},
			    {value:[121.342031,31.188257]},
			    {value:[121.475411,31.194912]},
			    {value:[121.476439,31.222589]},
			    {value:[121.584523,31.189475]},
			    {value:[121.423547,31.195901]},
			    {value:[121.410446,31.270015]}
			  ];
		    console.log(myData)
		    //var data1 =
		   option = {
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
		        
		        series: [
//		        {
//		            type: 'lines',
//		            coordinateSystem: 'bmap',
//		            polyline: true,
//		            data: busLines,
//		            silent: true,
//		            lineStyle: {
//		                normal: {
//		                    // color: '#c23531',
//		                    // color: 'rgb(200, 35, 45)',
//		                    opacity: 0.2,
//		                    width: 1
//		                }
//		            },
//		            progressiveThreshold: 500,
//		            progressive: 200
//		        }, 
		        {
		            type: 'lines',
		            coordinateSystem: 'bmap',
		            polyline: true,
		            //data: busLines,
		            data:[
				    	{
				    		"coords":[[121.485615, 31.215004],[121.489370, 31.198660]],
				    		"lineStyle":{
				    			"normal":{
				    				color:"rgba(88,186,247,1)"
				    			}
				    		}
				    	},
				    	{
				    		"coords":[[121.366404,31.240257],[121.468964, 31.233949]],
				    		"lineStyle":{
				    			"normal":{
				    				color:"rgba(88,186,247,1)"
				    			}
				    		}
				    	}
				    ],
		            lineStyle: {
		                normal: {
		                    width: 1
		                }
		            },
		            effect: {
		                constantSpeed: 40,
		                show: true,
		                trailLength: 0.5,
		                symbolSize: 5
		            },
		            zlevel: 1
		        },
		        
		        {
		        	type: 'scatter',
		            coordinateSystem: 'bmap',
		            data: myData,
		            itemStyle : {
	                	normal:{
	                		color:"#ddb926"
	                	}
                	}
		            
		        }
		        
		        
		        
		        ]
		    };
		//});
		if (option && typeof option === "object") {
			myChart.setOption(option);
			clearInterval(timeTicket4);
			var timeTicket4 = setInterval(function (){
				var i =Math.floor(Math.random()*18);
				if (i+6>17) {
					i=0;
				}
			    option.series[0].data[0].coords = [myData[i].value,myData[i+3].value];
			    option.series[0].data[1].coords = [myData[i+4].value,myData[i+6].value];
			    myChart.setOption(option);
			},10000);
		}
                    
		
		//myChart.setOption(option);
	}());
	
	
	//right-dashboard
	(function (){
		var myChart = echarts.init(document.getElementById('right-dashboard'));
		//myChart.showLoading();  //加载效果
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
			            max: function(value) {
						    return 600;
						},
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
		var b = [["100",'200','300'],["111",'222','333']];
		clearInterval(timeTicket6);
		var timeTicket6 = setInterval(function (){
			var i =Math.floor(Math.random()*2);
		    option.series[0].data = b[i];
		    
		    myChart.setOption(option, true);
		},3000);

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
		var a = [['10:00','11:00','12:00','13:00','14:00','15:00'],['12:00','13:00','14:00','15:00','16:00','17:00']];
		var b = [[3100, 2900, 3117, 3019, 3004, 3008],[3140, 3000, 3100, 3119, 3034, 3028]];
		clearInterval(timeTicket7);
		var timeTicket7 = setInterval(function (){
			var i =Math.floor(Math.random()*2);
		    option.xAxis[0].data = a[i];
		    option.series[0].data = b[i];
		    
		    myChart.setOption(option, true);
		},3000);
	}());
                                                   
 	
	
	
});