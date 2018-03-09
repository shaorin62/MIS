(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("comFusionChartView");
                this.set_classname("comFusionChartView");
                this.set_titletext("FusionChartView");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("__wbrChartArea", "absolute", "2", "2", null, null, "2", "2", this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("comFusionChartView");
            		p.set_titletext("FusionChartView");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("comFusionChartView.xfdl", "script::lib_script_common.xjs");
        this.registerScript("comFusionChartView.xfdl", function() {
        /***************************************************************************************************
         * # Program : comFusionChartView 퓨전차트 출력을 위한 레이어
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.11.07		jsh			Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다. 
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.  
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리  
         *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                         
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         *****************************************************************************INBUS*CO*KR****J*S*H***/

        /**
         * 공통스크립트 Include
         */
        //include "script::lib_script_common.xjs"

        /**
         * 화면 전역변수
         */
        this._oChartJSONData = null;

        
        /**
         * 화면 로드 시 실행
         */
        this.fn_FormLoadSetting = function(obj,e) {
        	//trace("----- ChartViewer Loaded...");
        }

        
        /**
         * 퓨전 차트를 표시하기 위한 함수입니다.
         * 현재 Form을 Div URL로 화면에 표시한 후,
         * 실제 데이터를 이용하여 차트를 표시하기 위한 진입점이 되는 함수입니다.
         */
        this.fn_DrawChart = function(oChartInfo) {
        	
        	this._oChartJSONData = null;
        	
        	if (typeof oChartInfo == "string") {
        		this._oChartJSONData = JSON.parse(oChartInfo);
        		//trace("---- Put JSON String data.");
        	} else {
        		this._oChartJSONData = oChartInfo;
        		//trace("---- Put JSON Object info.");
        	}
        	
        	this.__InitDrawPage();
        	
        }

        
        /**
         * 퓨전차트를 표시하기 위한 웹페이지를 표시합니다.
         */
        this.__InitDrawPage = function() {
        	var url = application.GBL_HTTPURL;
        	url = url + "/html/fusioncharts.html";
        	url = url + "?" + (new Date().getTime());
        	//trace("---- URL : " + url);
        	this.__wbrChartArea.set_url(url);
        }

        
        this.__ActualDrawChartsOnPage = function() {
        	//trace("----- Drawing charts.....");
        	this.__wbrChartArea.callMethod("drawCharts", this._oChartJSONData, null);
        }

        
        /**
         * 웹브라우저 호출 후 처리
         */
        this.__wbrChartArea_onusernotify = function(obj,e) {
        	//trace("----- Browser Ready. Received : " + e.userdata);
        	
        	// 차트 표시를 위한 웹페이지가 준비되었다면...
        	if (e.userdata == "__CHART_PAGE") {
        		this.__ActualDrawChartsOnPage();
        	}
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.__wbrChartArea.addEventHandler("onusernotify", this.__wbrChartArea_onusernotify, this);

        };

        this.loadIncludeScript("comFusionChartView.xfdl");

       
    };
}
)();
