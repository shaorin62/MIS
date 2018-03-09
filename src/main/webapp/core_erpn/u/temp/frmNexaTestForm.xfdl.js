(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            if (Form == this.constructor) {
                this.set_name("frmNexaTestForm");
                this.set_classname("test_screen");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsSHRSYST_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset00", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"AAAA_AAAA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMBOID\">TMM0001</Col><Col id=\"DSNAME\">dsCOMP_CODE</Col><Col id=\"HEADFLAG\"/><Col id=\"PARAM\"/><Col id=\"USEYSNO\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset01", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">000</Col><Col id=\"Column1\">aaa</Col></Row><Row><Col id=\"Column0\">111</Col><Col id=\"Column1\">bbb</Col></Row><Row><Col id=\"Column0\">222</Col><Col id=\"Column1\">ccc</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset02", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTest1", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"C1\" type=\"STRING\" size=\"256\"/><Column id=\"C2\" type=\"STRING\" size=\"256\"/><Column id=\"C3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"C1\">원본 데이터</Col><Col id=\"C2\">팝업 호출 전</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds1", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"A1\" type=\"STRING\" size=\"256\"/><Column id=\"A2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds2", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"B1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"B2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSORT", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"AA\" type=\"STRING\" size=\"256\"/><Column id=\"BB\" type=\"STRING\" size=\"256\"/><Column id=\"CC\" type=\"STRING\" size=\"256\"/><Column id=\"DD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"AA\">1</Col><Col id=\"BB\">100</Col><Col id=\"CC\">11</Col></Row><Row><Col id=\"AA\">1</Col><Col id=\"BB\">200</Col><Col id=\"CC\">11</Col></Row><Row><Col id=\"AA\">1</Col><Col id=\"BB\">300</Col><Col id=\"CC\">22</Col></Row><Row><Col id=\"AA\">2</Col><Col id=\"BB\">200</Col><Col id=\"CC\">33</Col></Row><Row><Col id=\"AA\">2</Col><Col id=\"BB\">300</Col><Col id=\"CC\">33</Col></Row><Row><Col id=\"AA\">2</Col><Col id=\"BB\">400</Col><Col id=\"CC\">44</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "16", "13", "140", "30", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Screen Size\r\n브라우저 실행만 적용");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "708", "9", "124", "25", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_text("Combo00");

            obj = new Button("Button01", "absolute", "439", "8", "257", "204", null, null, this);
            obj.set_taborder("2");
            obj.set_text("공통코드 Inner Binding");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "840", "10", "175", "60", null, null, this);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"123\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"AAAA_AAAA\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" text=\"bind:AAAA_AAAA\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "439", "226", "257", "193", null, null, this);
            obj.set_taborder("4");
            obj.set_text("사용자 콤보");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01", "absolute", "708", "232", "159", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");

            obj = new Grid("Grid01", "absolute", "876", "226", "132", "76", null, null, this);
            obj.set_taborder("6");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"123\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"AAAA_AAAA\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" text=\"bind:AAAA_AAAA\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "8", "467", "199", "37", null, null, this);
            obj.set_taborder("7");
            obj.set_text("Function Check");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00", "absolute", "708", "96", "305", "116", null, null, this);
            obj.set_taborder("8");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab00);
            obj.set_text("tabpage1");
            this.Tab00.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "4", "10", "156", "26", null, null, this.Tab00.tabpage1);
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj = new Grid("Grid02", "absolute", "168", "4", "132", "76", null, null, this.Tab00.tabpage1);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"123\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"AAAA_AAAA\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" text=\"bind:AAAA_AAAA\"/></Band></Format></Formats>");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab00);
            obj.set_text("tabpage2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tab("Tab01", "absolute", "708", "310", "305", "109", null, null, this);
            obj.set_taborder("9");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.set_cssclass("styTabControl");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab01);
            obj.set_text("tabpage1");
            this.Tab01.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "4", "10", "124", "34", null, null, this.Tab01.tabpage1);
            this.Tab01.tabpage1.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj = new Grid("Grid02", "absolute", "144", "4", "148", "76", null, null, this.Tab01.tabpage1);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"123\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"AAAA_AAAA\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" text=\"bind:AAAA_AAAA\"/></Band></Format></Formats>");
            this.Tab01.tabpage1.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab01);
            obj.set_text("tabpage2");
            this.Tab01.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "208", "471", "205", "29", null, null, this);
            obj.set_taborder("10");
            obj.set_value("DATE");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "8", "126", "135", "29", null, null, this);
            obj.set_taborder("11");
            obj.set_text("Auth Setting");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "169", "125", "100", "31", null, null, this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "272", "124", "100", "31", null, null, this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "8", "163", "129", "33", null, null, this);
            obj.set_taborder("14");
            obj.set_text("SearchItemCheck");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME00", "absolute", "152", "161", "93", "30", null, null, this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab02", "absolute", "256", "160", "148", "62", null, null, this);
            obj.set_taborder("16");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab02);
            obj.set_text("tabpage1");
            this.Tab02.addChild(obj.name, obj);
            obj = new Edit("edtSHRDEPT_NAME00", "absolute", "2", "4", "136", "23", null, null, this.Tab02.tabpage1);
            obj.set_taborder("0");
            this.Tab02.tabpage1.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab02);
            obj.set_text("tabpage2");
            this.Tab02.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "8", "204", "122", "246", null, null, this);
            obj.set_taborder("17");
            obj.set_text("Save Item Check");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "145", "207", "92", "27", null, null, this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab03", "absolute", "165", "320", "246", "130", null, null, this);
            obj.set_taborder("19");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab03);
            obj.set_text("tabpage1");
            this.Tab03.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "5", "5", "240", "22", null, null, this.Tab03.tabpage1);
            obj.set_taborder("0");
            this.Tab03.tabpage1.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "5", "30", "240", "66", null, null, this.Tab03.tabpage1);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset01");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:Column1\" editautoselect=\"true\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.Tab03.tabpage1.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab03);
            obj.set_text("tabpage2");
            this.Tab03.addChild(obj.name, obj);

            obj = new Grid("Grid02", "absolute", "249", "224", "163", "87", null, null, this);
            obj.set_taborder("20");
            obj.set_binddataset("Dataset01");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\"/><Column size=\"45\"/><Column size=\"55\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"col1\"/><Cell col=\"1\" text=\"col2\"/><Cell col=\"2\" text=\"col3\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:Column0\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:Column1\" editautoselect=\"true\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "8", "512", "157", "29", null, null, this);
            obj.set_taborder("21");
            obj.set_value("111");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "174", "512", "239", "29", null, null, this);
            obj.set_taborder("22");
            obj.set_value("222");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "456", "436", "140", "30", null, null, this);
            obj.set_taborder("24");
            obj.set_text("Single 사용자 콤모");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02", "absolute", "601", "436", "121", "30", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_text("Combo02");

            obj = new Button("Button08", "absolute", "16", "51", "140", "30", null, null, this);
            obj.set_taborder("26");
            obj.set_text("컴포넌트 존재여부 확인");
            this.addChild(obj.name, obj);

            obj = new Button("Button09", "absolute", "18", "90", "140", "30", null, null, this);
            obj.set_taborder("27");
            obj.set_text("문자로 컴포넌트 접근");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04", "absolute", "164", "88", "102", "30", null, null, this);
            obj.set_taborder("28");
            obj.set_value("Edit04");
            this.addChild(obj.name, obj);

            obj = new Button("Button10", "absolute", "24", "573", "171", "51", null, null, this);
            obj.set_taborder("29");
            obj.set_text("Popup Open");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "198", "575", "216", "48", null, null, this);
            obj.set_taborder("30");
            obj.set_value("팝업 호출 전 텍스트\r\n\r\n테스트를 위한 텍스트");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03", "absolute", "428", "618", "278", "70", null, null, this);
            obj.set_taborder("31");
            obj.set_binddataset("dsTest1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"C1\"/><Cell col=\"1\" disptype=\"normal\" text=\"C2\"/><Cell col=\"2\" disptype=\"normal\" text=\"C3\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:C1\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:C2\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:C3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "26", "625", "386", "15", null, null, this);
            obj.getSetter("taborder").set("33");
            obj.set_text("팝업창에서 전달받은 값");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01", "absolute", "24", "648", "388", "110", null, null, this);
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new Button("Button11", "absolute", "504", "529", "147", "44", null, null, this);
            obj.set_taborder("35");
            obj.set_text("Grid SetCellFocus");
            this.addChild(obj.name, obj);

            obj = new Button("Button12", "absolute", "744", "438", "193", "26", null, null, this);
            obj.set_taborder("36");
            obj.set_text("Get Column Info");
            this.addChild(obj.name, obj);

            obj = new Button("Button13", "absolute", "746", "464", "119", "33", null, null, this);
            obj.set_taborder("37");
            obj.set_text("fn_Floor");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05", "absolute", "869", "467", "108", "29", null, null, this);
            obj.set_taborder("38");
            obj.set_value("-888.9999");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid04", "absolute", "722", "512", "294", "238", null, null, this);
            obj.set_taborder("39");
            obj.set_binddataset("dsSORT");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"AA\"/><Cell col=\"1\" disptype=\"normal\" text=\"BB\"/><Cell col=\"2\" disptype=\"normal\" text=\"CC\"/><Cell col=\"3\" disptype=\"normal\" text=\"DD\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:AA\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:BB\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:CC\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:DD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button14", "absolute", "504", "713", "156", "45", null, null, this);
            obj.set_taborder("40");
            obj.set_text("Button14");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("tabpage1");

            	}
            );
            this.Tab00.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab01.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("tabpage1");

            	}
            );
            this.Tab01.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab02.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("tabpage1");

            	}
            );
            this.Tab02.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab03.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("tabpage1");

            	}
            );
            this.Tab03.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("test_screen");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("frmNexaTestForm.xfdl", "script::lib_script_common.xjs");
        this.registerScript("frmNexaTestForm.xfdl", function() {
        //include "script::lib_script_common.xjs"

        //화면 사이즈 구하기
        this.fn_ScreenSize = function(obj,e) {

        	var sSize  = "ScreenHeight = " + system.getScreenHeight() + " ; " ;
        	    sSize += "ScreenWidth = " + system.getScreenWidth();
        	alert(sSize);

        }

        //특정 컴포넌트가 존재하는지 여부 체크
        this.fn_IsComponect = function(obj,e) {

        	var aaa = this.objects[this.Combo00];
        	alert(aaa);

        }

        //문자열로 컴포넌트 접근
        this.fn_StringComponent= function(obj,e) {

        	eval("this.Edit04").setFocus();

        }

        //권한 처리 체크
        this.Button04_onclick = function(obj,e) {

        	//권한 처리
        	var arrParam    = new Array();
        		arrParam[0] = "EMPL,edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        	this.fnc_AuthSetting("1", arrParam);
        	alert(this.edtSHRDEPT_NAME.userData);

        }

        //조회 조건 체크
        this.fn_SearchItemCheck = function(obj,e) {

        	//this.fnc_SearchCheckPostAction("M1005", "일반 컴포넌트 보내기", this.edtSHRDEPT_NAME00);
        	this.fnc_SearchCheckPostAction("M1005", "텝에 보내기", this.Tab02.tabpage1.edtSHRDEPT_NAME00);

        }

        //입력 항목 체크
        this.fn_SaveItemCheck = function(obj,e){

        	//this.fnc_CheckPostAction("M1005", "일반 컴포넌트", this.Dataset01, 1, this.Edit01, "");
        	this.fnc_CheckPostAction("M1005", "일반 그리드", this.Dataset01, 1, this.Grid02, "Column2");

        	//this.fnc_CheckPostAction("M1005", "텝의 일반 컴포넌트", this.Dataset01, 1, this.Tab03.tabpage1.Edit00, "");
        	//this.fnc_CheckPostAction("M1005", "텝 그리드", this.Dataset01, 1, this.Tab03.tabpage1.Grid00, "Column1");

        }

        //공통 함수 체크
        this.fn_FunctionCheck = function(obj,e) {

        	//alert(this.fnc_GetDay(this.Edit00.value));
        	//alert(this.fnc_IsDate(this.Edit00.value));
        	//alert(this.fnc_Today());
        	//alert("[" + this.fnc_AddComma(this.Edit00.value) + "]");
        	//alert(this.fnc_GridColumnIndex(this.Grid02, this.Edit00.value));
        	//this.fnc_ComponentClear('Edit02,Edit03');
        	//this.fnc_ComponentClear('Tab04.tabpage1.Edit00,Tab04.tabpage1.Edit01');
        	//alert(this.fnc_GetMessage("M1005", "대출 조회시작월"));
        	//alert("[" + this.fnc_CustNumberCheck(this.Edit00.value) + "]");
        	//alert(this.fnc_fnc_ResidenceNumberToBirthday("070725-4167613"));
        	//alert(this.fnc_ResidenceNumberCheck(this.Edit00.value));
        	
            //alert(this.fnc_GetServerDateTiem(this.Edit00.value));
            alert(this.fnc_CorpNumberCheck("1150710000780"));
            
        }

        

        

        //Common Code InnerBind
        this.fn_CommCodeInnerBind = function(obj,e) {
        	this.fnc_GetComboDs(this.dsCombo);
        }

        //User Combo InnerBind
        this.fn_UserComboInnerBind = function(obj,e) {
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        }

        //User Bombo Single
        this.fn_GetComboSingle = function(obj,e) {

            var arrParam1 = new Array();
                arrParam1[0] = "Dataset02";            //받을 Dataset명
                arrParam1[1] = "PAY0003";              //조회 콤보 ID
                arrParam1[2] = "";                     //Head Flas
                arrParam1[3] = "0";                    //사용여부
                arrParam1[4] = this.fnc_Quote("1000"); //조회 조건

        	//Binding
            var arrParam2 = new Array();
                arrParam2[0] = "COMBO,Combo02,Dataset02,0";
            this.fnc_GetUserComboSingle(arrParam1, arrParam2);

        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	// Service에서 오류 발생 시 처리
        	if (ErrorCode < 0) {
        		
        		if (application.GBL_SESSONCHK == "E0001") {
        			// 비인가 접속이나 Session 단절시 처리
        			this.fnc_ErrorProcess(ErrorCode, ErrorMSG);
        		} else {
        			// Server에서 받은 Message 처리
        			this.fnc_Message("SERVERMSG", ErrorMSG);
        		}
        		
        	} else {
        		
        		// 오류가 없이 정상 처리되었다면...
        		this.fn_PostProcess(sMethodName);
        		
        	}
        	
        }

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {
        	
        	if (sMethodName == "GetCommCode") {
        		
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,Combo00,dsSHRSYST_CODE,0";
        		arrParam[1] = "GRID,Grid00,dsSHRSYST_CODE,AAAA_AAAA";
        		arrParam[2] = "COMBO,Tab00.tabpage1.Combo00,dsSHRSYST_CODE,AAAA_AAAA";
        		arrParam[3] = "GRID,Tab00.tabpage1.Grid02,dsSHRSYST_CODE,AAAA_AAAA"
        		this.fnc_CommonCodeInnerBind(arrParam);

        	} else if (sMethodName == "GetUserComboCode") {
        		
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,Combo01,dsCOMP_CODE,0";
        		arrParam[1] = "GRID,Grid01,dsCOMP_CODE,AAAA_AAAA";
        		arrParam[2] = "COMBO,Tab01.tabpage1.Combo00,dsCOMP_CODE,0";
        		arrParam[3] = "GRID,Tab01.tabpage1.Grid02,dsCOMP_CODE,AAAA_AAAA";
        		this.fnc_UserComboInnerBind(arrParam);

        	}
        	
        }

        //팝업 오픈 처리
        this.fn_PopupOpen = function(obj,e) {

            var sText1 = "Parent 변수 1";
            var sText2 = "Parent 변수 2";
        	var sOpenStyle  = "modeless=false";   //Open Sytle(되도록 Modal 사용)
        		sOpenStyle += ",autosize=true";   //Autosize true면 width, Height 안먹음
        		sOpenStyle += ",top=-1";          //원하는 위치(단 -1은 소유창의 Middle)
        		sOpenStyle += ",left=-1";         //원하는 위치(단 -1은 소유창의 Center)
        		sOpenStyle += ",width=200";       //현재 반응 없음
        		sOpenStyle += ",height=200";      //현재 반응 없음
        		sOpenStyle += ",title=true";      //Form Title Bar Visible 여부
        		sOpenStyle += ",titletext=팝업테스트";      //Form Title Bar Visible 여부
        		sOpenStyle += ",status=false";      //Form Title Bar Visible 여부
        		sOpenStyle += ",resizable=true";      //Form Title Bar Visible 여부
        	
        	
            this.fnc_OpenPopup("frmFormOpenTest", "temp::frmNexaTestFormChild.xfdl", {sArg1:sText1,sArg2:sText2}, sOpenStyle);	
            alert("팝업 호출 후 실행되는 스크립트");

        }

        // 팝업 CallBack
        this.fn_popupAfter = function(sPopupId,Variant) {

        	if (sPopupId == "frmFormOpenTest") {
        	
        		//반환 받은 문자열 데이타 형변환(String, Array, Object) 처리
        		var sRtn = this.fnc_GetPopupRtn();

        		if (sRtn instanceof Array) {

        			//반환받은 자료가 Array인 경우
        			var sReceive = "";
        			for (var i in sRtn)  {

        				//반환 받은 값이 Dataset인지 확인
        				if (sRtn[i].indexOf("<Dataset") != -1 && sRtn[i].indexOf("</Dataset>") != -1) {	
        					
        					if (i == 1) {
        						this.ds1.loadXML(sRtn[i]);
        						sReceive += i + " 번째 Array 내용 : " + "\n" + this.ds1.saveXML() + "\n";
        					} else if (i == 2) {
        						this.ds2.loadXML(sRtn[i]);
        						sReceive += i + " 번째 Array 내용 : " + "\n" + this.ds2.saveXML() + "\n";
        					}

        				} else {
        					
        					sReceive += i + " 번째 Array 내용 : " + sRtn[i] + "\n";
        					
        				}
        			
        			}
        			
        			this.TextArea01.set_value(sReceive);
        		
        		} else {
        		
        			//Popup 창에서 단일변수를 Return 한 경우
        			this.TextArea01.set_value(Variant)
        		
        		}

        	}

        }

        //그리드의 특정 셀로 포커스 보내기
        this.fn_SetCellFocus = function(obj,e) {

        	//this.fnc_GridSetCellFocus(this.Tab03.tabpage1.Grid00, "Column1");
        	this.fnc_GridSetCellFocus(this.Grid02, "Column1");
        	
        }

        //그리드의 특정 컬럼의 정보
        this.fn_GetColumnInfo = function(obj,e) {

        	var objColumnInfo = this.ds2.getColumnInfo("B1");
        	alert(objColumnInfo.type);

        }

        this.fn_Floor = function(obj,e)
        {
        	
        		
        	trace(this.fnc_Truncate(this.Edit05.value, 2));
        	
        }

        this.fn_FormLoadSetting = function(obj,e)
        {
        		this.fnc_GridSetting(this);
        }

        this.Button14_onclick = function(obj,e)
        {

        	this.dsSORT.set_keystring("G:BB+AA");
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.Button00.addEventHandler("onclick", this.fn_ScreenSize, this);
            this.Button01.addEventHandler("onclick", this.fn_CommCodeInnerBind, this);
            this.Button02.addEventHandler("onclick", this.fn_UserComboInnerBind, this);
            this.Button03.addEventHandler("onclick", this.fn_FunctionCheck, this);
            this.Button04.addEventHandler("onclick", this.Button04_onclick, this);
            this.Button05.addEventHandler("onclick", this.fn_SearchItemCheck, this);
            this.Button06.addEventHandler("onclick", this.fn_SaveItemCheck, this);
            this.Button07.addEventHandler("onclick", this.fn_GetComboSingle, this);
            this.Button08.addEventHandler("onclick", this.fn_IsComponect, this);
            this.Button09.addEventHandler("onclick", this.fn_StringComponent, this);
            this.Button10.addEventHandler("onclick", this.fn_PopupOpen, this);
            this.Button11.addEventHandler("onclick", this.fn_SetCellFocus, this);
            this.Button12.addEventHandler("onclick", this.fn_GetColumnInfo, this);
            this.Button13.addEventHandler("onclick", this.fn_Floor, this);
            this.Button14.addEventHandler("onclick", this.Button14_onclick, this);

        };

        this.loadIncludeScript("frmNexaTestForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
