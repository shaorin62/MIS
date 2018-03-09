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
                this.set_name("sample_fusion_chart");
                this.set_classname("sample_fusion_chart");
                this.set_titletext("퓨전차트 호출 샘플");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new TextArea("txtDataView", "absolute", "8", "58", null, "194", "8", null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", null, "4", "111", "25", "271", null, this);
            obj.set_taborder("2");
            obj.set_text("샘플데이터생성");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", null, "4", "109", "25", "140", null, this);
            obj.set_taborder("3");
            obj.set_text("차트 출력(JSON)");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "8", "255", null, null, "8", "8", this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_url("common::comFusionChartView.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", null, "4", "109", "25", "9", null, this);
            obj.set_taborder("5");
            obj.set_text("차트 출력(String)");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "15", "7", "490", "20", null, null, this);
            obj.set_taborder("6");
            obj.set_text("샘플데이터 생성 후 이용가능합니다.");
            obj.set_cssclass("sta_WF_Info");
            obj.style.set_color("#db3160ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "15", "28", "571", "30", null, null, this);
            obj.set_taborder("7");
            obj.set_text("샘플데이터 생성 후 TextArea 수정 후 '차트출력(String)'버튼으로\r\nTextArea 내의 텍스트 데이터를 이용하여 차트 출력이 가능합니다.");
            obj.set_cssclass("sta_WF_Info");
            obj.style.set_color("#db3160ff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("sample_fusion_chart");
            		p.set_titletext("퓨전차트 호출 샘플");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comFusionChartView.xfdl");
        };
        
        // User Script
        this.registerScript("sample_fusion_chart.xfdl", function() {
        /**
         * FusionCharts 호출
         *
         * FusionCharts 는 웹페이지 동작을 기반으로 합니다.
         * 화면에 차트를 표현하기 위해서는 다음과 같은 순서대로 작업을 진행합니다.
         *  1. 폼의 차트를 표현할 영역에 Div를 생성하여 배치합니다.
         *  2. (1)에서 생성한 Div에 FusionCharts 표현을 지원하기 위한 Form(common::comFusionChartView.xfdl)을 호출합니다.
         *  3. 표시하고자 하는 차트의 기본 설정, 표시할 데이터를 생성합니다.
         *  4. (3)에서 생성한 차트 정보를 이용하여 (2)의 Form에 구현된 fn_DrawChart() 함수를 호출합니다.
         *  5. Div 내에 차트가 표시되는지 확인합니다.
         */

        

        /**
         * 샘플 데이터 생성 버튼 클릭 시
         */
        this.Button00_onclick = function(obj,e)
        {
        	this.fn_SetSampleData();
        }

        
        /**
         * JSON 데이터 차트 출력 버튼 클릭 시
         */
        this.Button01_onclick = function(obj,e)
        {
        	// 샘플데이터 생성을 통해서 생성된 JSON 객체를 전달
        	this.Div00.fn_DrawChart(this.oChartJSON);
        }

        
        /**
         * String 데이터 차트 출력 버튼 클릭 시
         */
        this.Button02_onclick = function(obj,e)
        {
        	// 샘플데이터 생성을 통해서 TextArea에 생성된 JSON 문자열 값을 전달.
        	this.Div00.fn_DrawChart(this.txtDataView.value);
        }

        

        

        
        /**
         * 화면 변수
         */
        this.oChartJSON = null;

        /**
         * 퓨전차트 표현을 위한 샘플 데이터를 생성합니다.
         */
        this.fn_SetSampleData = function() {
        	// Fusion 차트 호출을 위한 샘플데이터를 생성합니다.
        	// 이 샘플은 컬럼차트의 데이터를 표현하기 위한 샘플입니다.
        	// 표현하고자 하는 각 차트별 데이터, 샘플 등은 다음의 링크를 참조하세요.
        	// FusionCharts Developer Center  http://www.fusioncharts.com/dev/
        	
        	// Fusion차트의 구성은 JSON 형식 데이터를 사용합니다.	
        	// 따라서 아래에서는 사용 편의를 위하여 Object형 객체로 생성하여 JSON 객체로 변환을 합니다.
        	// 직접 문자열 형식으로 구성을 하시거나 기타 방법으로 데이터를 구성하셔도 상관없습니다.
        	// 단 웹브라우저에서 차트 호출시 사용하는 데이터 형식은 JSON 형식이므로
        	// JSON 객체 또는 JSON 형식의 문자열을 전달하여 주시기 바랍니다.
        	
        	
        	// 차트를 구성하기 위한 기본 데이터 객체 생성
        	var oChartInfo = new Object();
        	
        	// 1. 차트의 기본정보를 설정합니다.
        	oChartInfo.type = "column2d";
        	//oChartInfo.width = "500";
        	//oChartInfo.height = "300";
        	oChartInfo.DateFormat = "json";
        	
        	// 2. 차트의 구성에 필요한 추가정보(X/Y축 제목, 라벨, 캡션 등)
        	var oChartDataSource = new Object;
        	oChartInfo.dataSource = oChartDataSource;
        	oChartDataSource.chart = new Object;
        	oChartDataSource.chart.caption = "Fusion Charts 샘플";
        	oChartDataSource.chart.subCaption = "퓨전차트로 데이터를 표현합니다.";
        	oChartDataSource.chart.xAxisName = "Month";
        	oChartDataSource.chart.yAxisName = "Value";
        	oChartDataSource.chart.theme = "fint";
        	
        	
        	// 3. 컬럼2D 차트 구성을 위한 데이터를 세팅합니다.
        	oChartDataSource.data = new Array;
        	oChartDataSource.data[0] = new Object;
        	oChartDataSource.data[0].label = "JAN";
        	oChartDataSource.data[0].value = "420000";
        	
        	oChartDataSource.data[1] = new Object;
        	oChartDataSource.data[1].label = "FEB";
        	oChartDataSource.data[1].value = "130000";
        	
        	oChartDataSource.data[2] = new Object;
        	oChartDataSource.data[2].label = "MAR";
        	oChartDataSource.data[2].value = "43000";
        	
        	oChartDataSource.data[3] = new Object;
        	oChartDataSource.data[3].label = "APR";
        	oChartDataSource.data[3].value = "860000";
        	
        	oChartDataSource.data[4] = new Object;
        	oChartDataSource.data[4].label = "MAY";
        	oChartDataSource.data[4].value = "980000";
        	
        	oChartDataSource.data[5] = new Object;
        	oChartDataSource.data[5].label = "JUN";
        	oChartDataSource.data[5].value = "120000";
        	
        	oChartDataSource.data[6] = new Object;
        	oChartDataSource.data[6].label = "JUL";
        	oChartDataSource.data[6].value = "560000";
        	
        	oChartDataSource.data[7] = new Object;
        	oChartDataSource.data[7].label = "AUG";
        	oChartDataSource.data[7].value = "98000";
        	
        	oChartDataSource.data[8] = new Object;
        	oChartDataSource.data[8].label = "SEP";
        	oChartDataSource.data[8].value = "869000";
        	
        	oChartDataSource.data[9] = new Object;
        	oChartDataSource.data[9].label = "OCT";
        	oChartDataSource.data[9].value = "264000";
        	
        	oChartDataSource.data[10] = new Object;
        	oChartDataSource.data[10].label = "NOV";
        	oChartDataSource.data[10].value = "112000";
        	
        	oChartDataSource.data[11] = new Object;
        	oChartDataSource.data[11].label = "DEC";
        	oChartDataSource.data[11].value = "976000";
        	
        	this.oChartJSON = oChartInfo;
        	this.txtDataView.set_value(JSON.stringify(oChartInfo));
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);

        };

        this.loadIncludeScript("sample_fusion_chart.xfdl");
        this.loadPreloadList();
       
    };
}
)();
