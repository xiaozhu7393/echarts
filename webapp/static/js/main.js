$(function (){
	//time
	window.onload=function(){
		//定时器每秒调用一次fnDate()
		clearInterval(timeTicket0);
		var timeTicket0 = setInterval(function(){
				fnDate('time');
			},1000);
		
	};
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
		var time=year+"-"+add0((month+1))+"-"+add0(data)+" "+add0(hours)+":"+add0(minute)+":"+add0(second);
		oDiv.innerHTML=time;
	};
	//补位 当某个字段不是两位数时补0
	function add0(m){return m<10?'0'+m:m };
	
	//去除重复数据 deport
	//将对象元素转换成字符串以作比较
	function obj2key(obj, keys){
	    var n = keys.length,
	        key = [];
	    while(n--){
	        key.push(obj[keys[n]]);
	    }
	    return key.join('|');
	};
	//去重操作
	function uniqeByKeys(array,keys){
	    var arr = [];
	    var hash = {};
	    for (var i = 0, j = array.length; i < j; i++) {
	        var k = obj2key(array[i], keys);
	        if (!(k in hash)) {
	            hash[k] = true;
	            arr .push(array[i]);
	        }
	    }
	    return arr ;
	};
	//left-pie
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
			                            fontSize : '18',  
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
			                {value:50, name:'SWOT Carrier'},
			                {value:800, name:'Reqular Carrier'}
			            ]
			        }
			    ]
			};
		var a = [48,50,52];
		var b = [802,800,798];
		myChart.setOption(option);
		clearInterval(timeTicket1);
		var timeTicket1 = setInterval(function (){
			var i =Math.floor(Math.random()*3);
		    option.series[0].data[0].value = a[i];
		    option.series[0].data[1].value = b[i];
		    
		    myChart.setOption(option, true);
		},30000);	
		
	}());
	
	//left-bar
	(function (){
		var myChart = echarts.init(document.getElementById('left-bar'));
		var option = {
			    title : {
			        text: 'Top 5 Hot Area',
			        x:'center',
        			y:'top',
			        textStyle : {
			            color: '#fff',
			            fontSize:18
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
		var b = [[12, 34, 50, 88, 100],[20, 30, 50, 90, 100]];
		myChart.setOption(option);
		clearInterval(timeTicket2);
		clearInterval(timeTicket22);
		var timeTicket2 = setInterval(function (){
			var i =Math.floor(Math.random()*2);
		    //option.yAxis[0].data = a[i];
		    option.series[0].data = b[i];
		    
		    myChart.setOption(option, true);
		},2000);
		var timeTicket22 = setInterval(function (){
			var i =Math.floor(Math.random()*2);
		    option.yAxis[0].data = a[i];
		    //option.series[0].data = b[i];
		    
		    myChart.setOption(option, true);
		},30000);
	}());
	
	//left-line
	(function  () {
		var myChart = echarts.init(document.getElementById('left-line'));
		var option = {
			    title : {
			        text: 'transportation/demands',
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
			            data : [],
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
			            data:[5.8, 5.9, 6.0, 6.0, 6.1, 6.1, 6.2],
			            itemStyle:{
			                normal:{color:'#58f4e6'}
			            }
			        }
			    ]
			};
		var getTime = function  () {
			var arr = [];//
			var date=new Date();
  			var hours=date.getHours();//小时
			var minute=date.getMinutes();//分
			for (var i=6;i>-1;i--) 
			{
				var m = minute - i;
				var h = hours - 1;
				if (m < 0) 
				{
					if (h == -1) 
					{
						var hh = 23;
					}
					else
					{
						var hh = add0(h);
					}
					var mm = 60 - Math.abs(m);
				}
				else
				{
					var mm = add0(m);
					var hh = add0(hours);
				}
				var add = hh + ":" + mm;
				arr.push(add);
			}
			return arr;
		}
		option.xAxis[0].data = getTime();
		myChart.setOption(option);
		var b = [5.8, 5.9, 6.0, 6.0, 6.1, 6.1, 6.2];
		var bb = [6.3, 6.2, 6.0, 6.1, 6.0, 6.3, 6.1];
		clearInterval(timeTicket3);
		var timeTicket3 = setInterval(function (){
			var i =Math.floor(Math.random()*7);
			b.shift();
			b.push(bb[i]);
		    option.xAxis[0].data = getTime();
		    option.series[0].data = b;
		    myChart.setOption(option, true);
		},60000);
		
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
		$.post('http://182.254.216.232:80/main').done(function (res){
		//$.get("point.json").done(function  (res) {
			console.log(res);
			if (res.carrierList.length != 0)
			{
				var carr = res.carrierList,
					c_len = carr.length,
					carrlist = [];
				for (var i=0;i<c_len;i++)
				{
					var item = [],
						a = Number(carr[i].currentLong),
						b = Number(carr[i].currentLat);
					item.push(a);
					item.push(b);
					carrlist.push(item);
				}
			}
			
			if (res.parcelList.length != 0)
			{
				var par = res.parcelList,
					p_len = par.length,
					parlist = [],
					parlist_line = [];
				for (var j=0;j<p_len;j++)
				{
					var item_p = [],
						item_pp = [],
						a_p = Number(par[j].origLong),
						b_p = Number(par[j].origLat),
						a_pp = Number(par[j].destLong),
						b_pp = Number(par[j].destLat);
					item_p.push(a_p);
					item_p.push(b_p);
					item_pp.push(a_pp);
					item_pp.push(b_pp);
					parlist.push(item_p);
					parlist.push(item_pp);
				}
				
				for (var k=0;k<p_len;k++)
				{
					var item_orig = [],
						item_dest = [],
						item_all = "";
						a_orig = Number(par[k].origLong),
						b_orig = Number(par[k].origLat),
						a_dest = Number(par[k].destLong),
						b_dest = Number(par[k].destLat);
					item_orig.push(a_orig);
					item_orig.push(b_orig);
					item_dest.push(a_dest);
					item_dest.push(b_dest);
					item_all = {
			    		"coords":[item_orig,item_dest],
			    		"lineStyle":{
			    			"normal":{
			    				color:"rgba(88,186,247,1)"
			    			}
			    		}
			    	}
					parlist_line.push(item_all);
				}
			}
			var myData = carrlist;
			var myData1 = parlist;
			var myLine = parlist_line;
			/*
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
			
			  */
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
		        /*
		        {
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
		        }, 
		        */
		        {
		            type: 'lines',
		            coordinateSystem: 'bmap',
		            polyline: true,
		            //data: busLines,
		            data:myLine,
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
		        },
		        {
		        	type: 'scatter',
		            coordinateSystem: 'bmap',
		            data: myData1,
		            itemStyle : {
	                	normal:{
	                		color:"rgba(88,186,247,1)"
	                	}
                	}
		        }
		        
		        
		        
		        ]
		    };
		
		if (option && typeof option === "object") {
			myChart.setOption(option);
			
			/*
			clearInterval(timeTicket4);
			var timeTicket4 = setInterval(function (){
				var i =Math.floor(Math.random()*18);
				if (i+6>17) {
					i=0;
				}
				if (i%2 == 0) {
					option.series[1].data = myData;
					option.series[0].data[0].coords = [myData[i].value,myData[i+3].value];
			    	option.series[0].data[1].coords = [myData[i+4].value,myData[i+6].value];
				}else{
					option.series[1].data = myData1;
					option.series[0].data[0].coords = [myData1[i].value,myData1[i+3].value];
			    	option.series[0].data[1].coords = [myData1[i+4].value,myData1[i+6].value];
				}
			    
			    myChart.setOption(option);
			},5000);
			*/
		}
        
        }).fail(function  () {
			console.log("fail");
		});
		
		//myChart.setOption(option);
	}());
	
	
	//right-dashboard
	(function (){
		var myChart = echarts.init(document.getElementById('right-dashboard'));
		//myChart.showLoading();  //加载效果
		var option = {
				title : {
			        text: 'Realtime Delevery Rate',
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
			        text: 'Realtime Parcels Status',
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
						    return 10000;
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
			            data:["2000",'2200','4232'],
			            itemStyle:{
			                normal:{color:'#358be3'}
			            }
			        }
			    ]
			};
		myChart.setOption(option);
		var b = [["2000",'2200','4232'],["2153",'2489','4015'],["2233",'2689','4215']];
		clearInterval(timeTicket6);
		var timeTicket6 = setInterval(function (){
			var i =Math.floor(Math.random()*3);
		    option.series[0].data = b[i];
		    
		    myChart.setOption(option, true);
		},60000);

	}());
	
	//right-line
	(function (){
		var myChart = echarts.init(document.getElementById('right-line'));
		var option = {
			    title : {
			        text: 'New Parcels occurred in last one hour',
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
			            data : [],
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
		var getTimeHour = function  () {
			var arr = [];//
			var date=new Date();
  			var hours=date.getHours();//小时
			for (var i=6;i>0;i--) 
			{
				var h = hours - i;
				if (h < 0) 
				{
					var hh = 24 - Math.abs(h);
				}
				else
				{
					var hh = add0(h);
				}
				var add = hh + ":00";
				arr.push(add);
			}
			return arr;
		}
		option.xAxis[0].data = getTimeHour();
		myChart.setOption(option);
		var b = [3100, 2900, 3117, 3019, 3004, 3008];
		var bb = [3140, 3000, 3100, 3119, 3034, 3028];
		clearInterval(timeTicket7);
		var timeTicket7 = setInterval(function (){
			var i =Math.floor(Math.random()*6);
			b.shift();
			b.push(bb[i]);
		    option.xAxis[0].data = getTimeHour();
		    option.series[0].data = b;
		    
		    myChart.setOption(option, true);
		},3600000);
	}());
                                                   
 	
	
	
});