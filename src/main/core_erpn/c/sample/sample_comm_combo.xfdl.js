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
                this.set_name("sample_comm_combo");
                this.set_classname("sample_comm_combo");
                this.set_titletext("콤보 처리 예제");
                this._setFormPosition(0,0,1946,886);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"COLX_SEQ1\" type=\"STRING\" size=\"256\"/><Column id=\"COLX_SEQ2\" type=\"STRING\" size=\"256\"/><Column id=\"COLX_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COLX_SEQ1\">DATA11</Col><Col id=\"COLX_SEQ2\">MST1</Col><Col id=\"COLX_NAME\">데이터1</Col></Row><Row><Col id=\"COLX_SEQ1\">DATA12</Col><Col id=\"COLX_SEQ2\">MST2</Col><Col id=\"COLX_NAME\">데이터2</Col></Row><Row><Col id=\"COLX_SEQ1\">DATA13</Col><Col id=\"COLX_SEQ2\">MST3</Col><Col id=\"COLX_NAME\">데이터3</Col></Row><Row><Col id=\"COLX_SEQ1\">DATA14</Col><Col id=\"COLX_SEQ2\">MST4</Col><Col id=\"COLX_NAME\">데이터4</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSlave", this);
            obj._setContents("<ColumnInfo><Column id=\"COLX_MST1\" type=\"STRING\" size=\"256\"/><Column id=\"COLX_SUB1\" type=\"STRING\" size=\"256\"/><Column id=\"COLX_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COLX_MST1\">MST1</Col><Col id=\"COLX_SUB1\">SUB1</Col><Col id=\"COLX_NAME\">서브1</Col></Row><Row><Col id=\"COLX_MST1\">MST2</Col><Col id=\"COLX_SUB1\">SUB2</Col><Col id=\"COLX_NAME\">서브2</Col></Row><Row><Col id=\"COLX_MST1\">MST3</Col><Col id=\"COLX_SUB1\">SUB3</Col><Col id=\"COLX_NAME\">서브3</Col></Row><Row><Col id=\"COLX_MST1\">MST4</Col><Col id=\"COLX_SUB1\">SUB4</Col><Col id=\"COLX_NAME\">서브4</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGridData", this);
            obj._setContents("<ColumnInfo><Column id=\"DATA_COL1\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_COL2\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_COL3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DATA_COL1\">데이터1</Col></Row><Row><Col id=\"DATA_COL1\">데이터2</Col></Row><Row><Col id=\"DATA_COL1\">데이터3</Col></Row><Row><Col id=\"DATA_COL1\">데이터4</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYN\" type=\"STRING\" size=\"256\" prop=\"default\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsSYST_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYN\">A</Col></Row><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsSHRSYST_CODE</Col><Col id=\"HEADFLAG\">SELECT</Col><Col id=\"USEYN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCol00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"dsname\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">a</Col><Col id=\"name\">a</Col><Col id=\"dsname\">dsCol11</Col></Row><Row><Col id=\"code\">b</Col><Col id=\"name\">b</Col><Col id=\"dsname\">dsCol12</Col></Row><Row><Col id=\"code\">c</Col><Col id=\"name\">c</Col><Col id=\"dsname\">dsCol13</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCol11", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">a</Col><Col id=\"name\">a</Col></Row><Row><Col id=\"code\">b</Col><Col id=\"name\">b</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCol12", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">a</Col><Col id=\"name\">가</Col></Row><Row><Col id=\"code\">b</Col><Col id=\"name\">나</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCol13", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">a</Col><Col id=\"name\">1</Col></Row><Row><Col id=\"code\">b</Col><Col id=\"name\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGridData2", this);
            obj._setContents("<ColumnInfo><Column id=\"data1\" type=\"STRING\" size=\"256\"/><Column id=\"data2\" type=\"STRING\" size=\"256\"/><Column id=\"data3\" type=\"STRING\" size=\"256\"/><Column id=\"data4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data1\">a</Col></Row><Row><Col id=\"data1\">b</Col></Row><Row><Col id=\"data1\">c</Col></Row><Row><Col id=\"data1\">a</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "13", "6", "880", "625", null, null, this);
            obj.set_taborder("23");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "33", "330", "294", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("콤보 필터");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "476", "330", "294", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("그리드 컬럼콤보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "33", "43", "408", "249", null, null, this);
            obj.set_taborder("3");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"COLX_SEQ1\"/><Cell col=\"1\" disptype=\"normal\" text=\"COLX_SEQ2\"/><Cell col=\"2\" disptype=\"normal\" text=\"COLX_NAME\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:COLX_SEQ1\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:COLX_SEQ2\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:COLX_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "476", "43", "408", "249", null, null, this);
            obj.set_taborder("4");
            obj.set_binddataset("dsSlave");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"COLX_MST1\"/><Cell col=\"1\" disptype=\"normal\" text=\"COLX_SUB1\"/><Cell col=\"2\" disptype=\"normal\" text=\"COLX_NAME\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:COLX_MST1\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:COLX_SUB1\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:COLX_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "33", "381", "170", "25", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_innerdataset("@dsMaster");
            obj.set_codecolumn("COLX_SEQ2");
            obj.set_datacolumn("COLX_NAME");

            obj = new Combo("Combo01", "absolute", "230", "380", "170", "25", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_text("Combo00");
            obj.set_innerdataset("@dsSlave");
            obj.set_codecolumn("COLX_MST1");
            obj.set_datacolumn("COLX_NAME");

            obj = new Static("Static95", "absolute", "33", "10", "294", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("데이터 정보 - MASTER");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "476", "10", "294", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_text("데이터 정보 - DETAIL");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "33", "356", "168", "23", null, null, this);
            obj.set_taborder("8");
            obj.set_text("마스터콤보");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "230", "354", "168", "23", null, null, this);
            obj.set_taborder("9");
            obj.set_text("상세콤보");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "33", "434", "367", "36", null, null, this);
            obj.set_taborder("10");
            obj.set_text("마스터콤보 변경 시  상세콤보에 바인딩되어 있는 Inner Dataset에 필터를 설정합니다.");
            obj.set_wordwrap("english");
            this.addChild(obj.name, obj);

            obj = new Grid("grdData", "absolute", "476", "368", "397", "179", null, null, this);
            obj.set_taborder("11");
            obj.set_binddataset("dsGridData");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"컬럼\"/><Cell col=\"1\" text=\"컬럼마스터\"/><Cell col=\"2\" text=\"컬컬럼세부\"/></Band><Band id=\"body\"><Cell text=\"bind:DATA_COL1\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DATA_COL2\" combodataset=\"dsMaster\" combocodecol=\"COLX_SEQ2\" combodatacol=\"COLX_NAME\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DATA_COL3\" combodataset=\"dsSlave\" combocodecol=\"COLX_MST1\" combodatacol=\"COLX_NAME\" combodisplay=\"edit\" combotype=\"filter\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "944", "21", "294", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("공통콤보 처리방법");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtDesc1", "absolute", "941", "47", "459", "209", null, null, this);
            obj.set_taborder("13");
            obj.set_value("1. 공통콤보 데이터셋 생성\r\n   - 컬럼은 \"DSNAME,CODEID,HEADFLAG,USEYN\" 으로 구성\r\n   - DSNAME 컬럼 : 공통코드데이터를 가져와서 데이터셋을 만들 때 데이터셋명\r\n   - CODEID 컬럼 : 공통코드 코드값\r\n   - HEADFLAG 컬럼 : 콤보에 기본 헤더 설정 값.\r\n     -> ALL : \"전체\" 라는 아이템을 추가\r\n     -> SELECT : \"선택\" 이라는 아이템을 추가\r\n     -> EMPTY : 비어있는 (\"\") 아이템을 추가\r\n     -> ETC : \"기타\" 라는 아이템을 추가\r\n   - \"USEYN\" 컬럼 : 공통코드 조회 시 코드 사용여부 조건.\r\n     -> \"Y\", \"1\" 입력 시 사용하는 코드만\r\n     -> \"N\", \"0\" 입력 시 사용하지 않는 공통코드만\r\n     -> \"A\" 는 사용여부 상관없이 모든 코드 조회");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "944", "276", "154", "23", null, null, this);
            obj.set_taborder("14");
            obj.set_text("▶ 콤보 데이터셋 구조");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtDsText", "absolute", "946", "300", "453", "214", null, null, this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "1415", "43", "252", "35", null, null, this);
            obj.set_taborder("16");
            obj.set_text("2. 스크립트 처리\r\n   1) 처리함수 실행 ");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "1429", "80", "320", "45", null, null, this);
            obj.set_taborder("17");
            obj.set_text("- 공통함수, 이벤트 함수 등 필요한 위치에서\r\n   this.fnc_GetComboDs(this.dsCombo);\r\n   함수 실행");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "1413", "131", "252", "35", null, null, this);
            obj.set_taborder("18");
            obj.set_text("   2) 트랜젝션 콜백 부분에서 처리 ");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "1428", "162", "443", "232", null, null, this);
            obj.set_taborder("19");
            obj.set_value("/*-------------------------------------+\r\n |  Transaction 후 Post Process!       |\r\n +-------------------------------------*/\r\nthis.fn_PostProcess = function (sMethodName) {\r\n\t\r\n\tif (sMethodName == \"GetCommCode\") {\r\n\t\tvar arrParam = new Array();\r\n\t\t// 콤보바인딩 : 콤보지시자,객체ID,데이터셋명,기본순번\r\n\t\tarrParam[0] = \"COMBO,cmbSHRSYST_CODE,dsSHRSYST_CODE,1\";\r\n\t\t// 컬럼바인딩 : 그리드지시자,그리드ID,데이터셋명,(데이터셋의)컬럼명\r\n\t\tarrParam[1] = \"GRID,grdGRID_SAMPLE,dsSYST_CODE,COLX_SEQ1\";\r\n\t\tthis.fnc_CommonCodeInnerBind(arrParam);\r\n\t}");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSYST_CODE", "absolute", "1422", "451", "190", "33", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_text("Combo02");

            obj = new Static("Static11", "absolute", "1421", "422", "294", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("실행예제");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdGRID_SAMPLE", "absolute", "1424", "499", "439", "149", null, null, this);
            obj.set_taborder("22");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"COLX_SEQ1\"/><Cell col=\"1\" text=\"COLX_SEQ2\"/><Cell col=\"2\" text=\"COLX_NAME\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" text=\"bind:COLX_SEQ1\"/><Cell col=\"1\" text=\"bind:COLX_SEQ2\"/><Cell col=\"2\" text=\"bind:COLX_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "908", "1", "1", null, null, "1", this);
            obj.set_taborder("24");
            obj.set_text("Static12");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "16", "600", "294", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("그리드 컬럼콤보(바인딩 이용)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02", "absolute", "16", "634", "336", "225", null, null, this);
            obj.set_taborder("26");
            obj.set_binddataset("dsGridData2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"data1\"/><Cell col=\"1\" text=\"data2\"/><Cell col=\"2\" text=\"data3\"/><Cell col=\"3\" text=\"data4\"/></Band><Band id=\"body\"><Cell text=\"bind:data1\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:data2\" combodataset=\"dsCol00\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"2\" text=\"bind:data3\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:data4\" combodataset=\"bind:data3\" combocodecol=\"code\" combodatacol=\"name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1946, 886, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("sample_comm_combo");
            		p.set_titletext("콤보 처리 예제");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("sample_comm_combo.xfdl", "script::lib_script_common.xjs");
        this.registerScript("sample_comm_combo.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	sample_comm_combo.xfdl	콤보 샘플
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.08		장성환		Initial Created.
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
         ********************************************************************************INBUS*CO*KR********/

        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**
         * 01. 화면 초기화 함수
         */
        this.fn_FormLoadSetting = function(obj,e)
        {
        	this.txtDsText.insertText(this.dsCombo.saveXML(), 0);
        	this.fnc_GetComboDs(this.dsCombo);
        }

        

        /*------------------------------------+
        |  Transaction 후 처리 해야 할 내용!  |
        +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	if (ErrorCode < 0) {
        		
        		if (application.GBL_SESSONCHK == "E0001") {
        			this.fnc_ErrorProcess(ErrorCode, ErrorMSG);
        		} else {
        			this.fnc_Message("SERVERMSG", ErrorMSG);
        		}
        		
        	} else {

        		this.fn_PostProcess(sMethodName);

        	}

        }

        /*-------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {
        	
        	if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        		// 콤보바인딩 : 콤보지시자,객체ID,데이터셋명,기본순번
        		arrParam[0] = "COMBO,cmbSHRSYST_CODE,dsSHRSYST_CODE,1";
        		// 컬럼바인딩 : 그리드지시자,그리드ID,데이터셋명,(데이터셋의)컬럼명
        		arrParam[1] = "GRID,grdGRID_SAMPLE,dsSYST_CODE,COLX_SEQ1";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	}

        }

        

        /**
         * 콤보를 사용자가 클릭하여 펼쳐지는 시점에 실행되는 이벤트 핸들러 함수입니다.
         * 필터 처리하고자 하는 해당 콤보의 Inner Dataset에 필터링 처리를 합니다.
         * 사용자가 선택하지 않거나 데이터셋이 다른 콤보/그리드의 Inner Dataset으로 바인딩되어 있더라도
         * 영향을 미치지 않고, 단지 해당 콤보의 실제 드롭다운 시 표시데이터만 변경됩니다.
         */
        this.Combo01_ondropdown = function(obj,e)
        {
        	obj.getInnerDataset().filter("COLX_MST1=='" + this.Combo00.value + "'");
        }

        /**
         * 콤보의 드롭다운 메뉴가 닫힐 때의 이벤트 핸들러 함수입니다.
         * 사용자가 값을 선택하였거나 포커스 아웃 등으로 드롭다운 영역이 접힐 때, 해당 이벤트가 동작하며
         * 이 때, 콤보에 바인딩된  Inner Dataset의 펠터를 제거하여 처리합니다.
         */
        this.Combo01_oncloseup = function(obj,e)
        {
        	this.Combo01.getInnerDataset().filter("");
        }

        
        /**
         * 편집 가능한 그리드에서 컬럼의 콤보를 사용자가 클릭하여 펼쳐지는 시점에 실행되는 이벤트 핸들러 함수입니다.
         * 필터링이 필요한 그리드 컬럼 콤보의 Inner Dataset에 필터링 처리를 합니다.
         */
        this.grdData_ondropdown = function(obj,e)
        {
        	// 그리드에서 사용 시 이벤트가 발생하는 컬럼을 체크하여 처리합니다.
        	if (e.col == 2) {
        		this.dsSlave.filter("COLX_MST1 == '" + this.dsGridData.getColumn(this.dsGridData.rowposition, "DATA_COL2") + "'");
        	}
        }

        /**
         * 편집가능한 그리드에서 컬럼의 타입이 콤보일 때 콤보의 드롭다운 영역이 접힐 때 실행되는 이벤트 핸들러입니다.
         * 처리가 필요한 컬럼의 Inner Dataset의 필터를 해제합니다.
         */
        this.grdData_oncloseup = function(obj,e)
        {
        	// 그리드에서 사용 시 이벤트가 발생하는 컬럼을 체크하여 처리합니다.
        	if (e.col == 2) {
        		this.dsSlave.filter("");
        	}
        }

        
        this.dsGridData2_onvaluechanged = function(obj,e)
        {
        	if (e.columnid == "data1") {

        	} else if (e.columnid == "data2") {
        		var ref_row = this.dsCol00.findRow("code", e.newvalue);
        		var ref_dsname = this.dsCol00.getColumn(ref_row, "dsname");
        		obj.setColumn(e.row, "data3", ref_dsname);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsGridData2.addEventHandler("onvaluechanged", this.dsGridData2_onvaluechanged, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.Combo01.addEventHandler("ondropdown", this.Combo01_ondropdown, this);
            this.Combo01.addEventHandler("oncloseup", this.Combo01_oncloseup, this);
            this.grdData.addEventHandler("ondropdown", this.grdData_ondropdown, this);
            this.grdData.addEventHandler("oncloseup", this.grdData_oncloseup, this);

        };

        this.loadIncludeScript("sample_comm_combo.xfdl");

       
    };
}
)();
