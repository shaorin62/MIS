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
                this.set_name("FSMD0020");
                this.set_titletext("감가상각집계표");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFS_DPCTXM", this);
            obj.set_useclientlayout("true");
            obj.set_keystring("G:-SORTS");
            obj._setContents("<ColumnInfo><Column id=\"STDS_YMTH\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"DPCT_ACT1\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DPCT_ACT1_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"B_ACQU_BEGN\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"B_ACQU_GROW\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"B_ACQU_DCRS\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"B_ACQU_ENDX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_GROW\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_DCRS\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_ENDX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MONT_DPCT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CRNT_DPCT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"UNDP_BALE\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DPCT_ENDX\" type=\"BIGDECIMAL\" size=\"17\" prop=\"default\"/><Column id=\"B_DPCT_ENDX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"B_UNDP_BALE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SORTS\" type=\"STRING\" size=\"256\"/><Column id=\"ASCL_CODE\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsSHRACCT_UNIT</Col><Col id=\"HEADFLAG\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBRANCH_CD", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BRANCH_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRACCT_GUBN</Col><Col id=\"COMBOID\">FAM0001</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYSNO\">0</Col><Col id=\"PARAM\">사업장</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdFS_DPCTXM", "absolute", "8", "138", null, null, "25", "15", this);
            obj.set_autoenter("none");
            obj.set_binddataset("dsFS_DPCTXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("8");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"115\" band=\"left\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"계정과목\"/><Cell col=\"1\" text=\"전기취득원가\"/><Cell col=\"2\" text=\"전월말상각누계\"/><Cell col=\"3\" text=\"당기증가액\"/><Cell col=\"4\" text=\"당기감소액\"/><Cell col=\"5\" displaytype=\"text\" text=\"당기취득원가\"/><Cell col=\"6\" displaytype=\"normal\" text=\"합계\"/><Cell col=\"7\" text=\"당월상각액\"/><Cell col=\"8\" text=\"당월상각누계액\"/><Cell col=\"9\" displaytype=\"text\" text=\"당월말잔액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:DPCT_ACT1_NAME\" subsumtext=\"expr:this.expr : comp.parent.fnc_Decode(dataset.getRowLevel(currow), 1, dataset.getColumn(currow - 1, 'SORTS') + ' 총계 ')\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:B_UNDP_BALE\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:B_DPCT_ENDX\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ACQU_GROW\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ACQU_DCRS\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:B_ACQU_ENDX\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ACQU_ENDX\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MONT_DPCT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DPCT_ENDX\"/><Cell col=\"9\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:UNDP_BALE\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;B_UNDP_BALE&quot;)\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;B_DPCT_ENDX&quot;)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;ACQU_GROW&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;ACQU_DCRS&quot;)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;B_ACQU_ENDX&quot;)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;ACQU_ENDX&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;MONT_DPCT&quot;)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;DPCT_ENDX&quot;)\"/><Cell col=\"9\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;UNDP_BALE&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACQU_DATE", "absolute", null, "113", "94", "21", "603", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_visible("false");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_type("normal");

            obj = new Edit("edtSHRASCL_CODE", "absolute", null, "113", "75", "21", "450", null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_taborder("11");
            obj.set_visible("false");
            obj.set_cssclass("styFormSearchItem");
            obj.set_maxlength("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRASCL_NAME", "absolute", null, "113", "112", "21", "314", null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("100");
            obj.set_taborder("12");
            obj.set_visible("false");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCLSF_CODE", "absolute", null, "113", "75", "21", "161", null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_taborder("15");
            obj.set_visible("false");
            obj.set_cssclass("styFormSearchItem");
            obj.set_maxlength("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCLSF_NAME", "absolute", null, "113", "112", "21", "25", null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("100");
            obj.set_taborder("18");
            obj.set_visible("false");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "48", "402", "25", null, null, this);
            obj.set_taborder("14");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", null, "113", "71", "21", "696", null, this);
            obj.set_text("취득일자");
            obj.set_visible("false");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", null, "113", "71", "21", "234", null, this);
            obj.set_text("품목분류");
            obj.set_visible("false");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", null, "113", "71", "21", "523", null, this);
            obj.set_text("자산분류");
            obj.set_visible("false");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("19");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("title01", "absolute", "28", "71", "75", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("기준년월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "403", "71", "60", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("사업장");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "460", "71", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("title00", "absolute", "221", "71", "70", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "289", "71", "101", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static06", "absolute", "640", "71", "48", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "682", "71", "75", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.set_maxlength("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "782", "71", "150", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "759", "71", "21", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRASCL_CODE", "absolute", null, "113", "21", "21", "428", null, this);
            obj.set_taborder("25");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_border("0 none #808080ff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCLSF_CODE", "absolute", null, "113", "21", "21", "139", null, this);
            obj.set_taborder("26");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_border("0 none #808080ff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("27");
            obj.set_text("감가상각집계표");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("28");
            obj.set_text("홈 > 자산관리 > 감가상각집계표");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("29");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("33");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("34");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "661", "56", "128", "4", null, null, this);
            obj.set_taborder("35");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("36");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("37");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("38");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "117", "262", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "8", "132", "216", "6", null, null, this);
            obj.set_taborder("41");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "245", "103", "80", "35", null, null, this);
            obj.set_taborder("42");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("divSHRSTDS_YMTH", "absolute", "97", "71", "100", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 402, 25, this.Div0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.set_scrollbars("none");

            	}
            );
            this.Div0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("감가상각집계표");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("FSMD0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FSMD0020.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FSMD0020 감가상각집계표
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.26		오혜성		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                      *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                       *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망   *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/
        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST = "TTFFFFTF"; // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "FSMD0020"; 
        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {

        	this.sUSERAUTH     = "";
        	this.sFORMCAPTION  = "";
        	this.sFORMLOCATION = "";
        	this.sUSERLAVEL    = "";
        	
        } else {

        	this.sUSERAUTH     = this.getOwnerFrame()["sUSERAUTH"];
        	this.sFORMCAPTION  = this.getOwnerFrame()["sFORMCAPTION"];
        	this.sFORMLOCATION = this.getOwnerFrame()["sFORMLOCATION"];
        	this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];

        }

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e){

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	//this.mskSHRSTDS_YMTH.set_value(this.fnc_Left(this.fnc_GetServerDateTime("DATE"), 6));
        	//this.mskSHRSTDS_YMTH.setFocus();	
        	this.divSHRSTDS_YMTH.fn_SetMonth((this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 6) ));
        	this.divSHRSTDS_YMTH.setFocus();
        	this.grdFS_DPCTXM.setCellProperty("body", 5, "background", "#fffcae");
        	this.grdFS_DPCTXM.setCellProperty("body", 5, "background2", "#fffcae");
        	this.grdFS_DPCTXM.setCellProperty("body", 8, "background", "#fffcae");
        	this.grdFS_DPCTXM.setCellProperty("body", 8, "background2", "#fffcae");
        	this.grdFS_DPCTXM.setCellProperty("body", 9, "background", "#fffcae");
        	this.grdFS_DPCTXM.setCellProperty("body", 9, "background2", "#fffcae");

        }

        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj,e){
        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck())	return;
        	this.fnc_DatasetClear("dsFS_DPCTXM");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsFS_DPCTXM=dsFS_DPCTXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_DPCTXM.setFocus();

        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj,e) {
        	//기능 없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj,e) {
        	//기능 없음
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj,e) {
        	//기능 없음
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e) {
        	//기능 없음
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj,e) {
        	this.fnc_ToExcel(this);
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e){

        	if (this.dsFS_DPCTXM.getRowCount() <= 0) {

        		this.fnc_Message("TMM125", "조회 후 인쇄하세요"); //인쇄자료 없음
        		return;

        	}

        	application.GBL_RPTFILEPATH = application.GBL_REPORTURL + "xui/rpt/"; //Context Root
        	application.GBL_RPTFILENAME = "fsmd0120r1.jrf"; //Report File Name

        	var toDay = "";
        	//toDay = this.fnc_SubStr(this.mskSHRSTDS_YMTH.value, 0, 4) + '년 ' + this.fnc_SubStr(this.mskSHRSTDS_YMTH.value, 4, 2) + '월';
        	toDay = this.fnc_SubStr(this.divSHRSTDS_YMTH.fn_GetMonth(), 0, 4) + '년 ' + this.fnc_SubStr(this.divSHRSTDS_YMTH.fn_GetMonth(), 4, 2) + '월';

        	var pleaceBusiness = "";
        	//trace("value: " + this.cmbSHRACCT_GUBN.text);

        	if (this.cmbSHRACCT_GUBN.text != "전체") {

        		pleaceBusiness = this.cmbSHRACCT_GUBN.text;

        	} else {

        		pleaceBusiness = "농심기획";

        	}

        	application.GBL_RPTARGUMENT = 'sArg001,' + toDay + '^';
        	application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + 'sArg002,' + pleaceBusiness + '^';

        	if (!this.IsNull(this.edtSHRDEPT_NAME.value)) {

        		application.GBL_RPTARGUMENT = application.GBL_RPTARGUMENT + 'sArg003,' + this.fnc_Trim(this.edtSHRDEPT_NAME.value);

        	}

        	application.GBL_RPTDATASET = "dsFS_DPCTXM";
        	application.GBL_PRINT = 'Y'; //Dialog Option List
        	var strOpenStyle = "resizable=true openalign='center middle' ";

        	application.dialog("감가상각집계표", "popup::comReportViewer.xfdl", this, "", strOpenStyle);

        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsFS_DPCTXM", this);
        		
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsFS_DPCTXM")) {

        		if (this.fnc_Message("TMM023") == false) return false;

        	}

        	if (!this.fnc_IsDate(this.divSHRSTDS_YMTH.fn_GetMonth() + "01")) {

        		return this.fnc_CheckPostAction("TMM001", "상각년/월", this.dsFS_DPCTXM, 0, this.divSHRSTDS_YMTH, '');

        	} else {

        		if (this.divSHRSTDS_YMTH.fn_GetMonth() + "01" < "20150101") {

        			this.fnc_Message("TMM125", "2014년 이전 자료는 조회할 수 없습니다");
        			return false;

        		}

        	}

        	return true;

        }
        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	//기능없음
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	//기능없음
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind)
        {
        	var sReturnString;

        	if (sKind == 'SEARCH00') {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		//sReturnString += " STDS_YMTH=" + this.fnc_Quote(this.fnc_Trim(this.mskSHRSTDS_YMTH.value));
        		sReturnString += " STDS_YMTH=" + this.fnc_Quote(this.fnc_Trim(this.divSHRSTDS_YMTH.fn_GetMonth()));
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value));
        		sReturnString += " ACCT_GUBN=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value));
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value));

        	}

        	return sReturnString;
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

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName)
        {
        	if (sMethodName == 'SEARCH00') {

        		this.fnc_Information(this.stInformation, this.dsFS_DPCTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsFS_DPCTXM.getCaseCount("dataset.getRowLevel(currow)==0"));		

        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_UNIT,dsSHRACCT_UNIT,0";
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	} else if (sMethodName == "GetUserComboCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_GUBN,dsSHRACCT_GUBN,0";
        		this.fnc_UserComboInnerBind(arrParam);

        	}

        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();

            if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {

        		arrParam[0] = "FAM0001";                                //DEPT01
        		arrParam[1] = "";                                      
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value); 
        		arrParam[3] = "N"; 
        		arrParam[4] = "edtSHRDEPT_NAME";                                
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";         
        		arrParam[6] = "0,1";                                    
        				
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
            } else if ((obj.name == "imgHelpSHRASCL_CODE") || (obj.name == "edtSHRASCL_NAME")) {

                arrParam[0] = "FSM0002";                                //FSM002
                arrParam[1] = "D%";                                      
                arrParam[2] = this.fnc_Trim(this.edtSHRASCL_NAME.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHRASCL_NAME";                         
                arrParam[5] = "edtSHRASCL_CODE,edtSHRASCL_NAME";         
                arrParam[6] = "0,1";                                     
        		this.fnc_HelpDialogeAction(this, obj, arrParam);

            } else if ((obj.name == "imgHelpSHRCLSF_CODE") || (obj.name == "edtSHRCLSF_NAME")) {

                arrParam[0] = "FSM0001";                                //FSM001
                arrParam[1] = "D%";                                      
                arrParam[2] = this.fnc_Trim(this.edtSHRCLSF_NAME.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHRCLSF_NAME";                         
                arrParam[5] = "edtSHRCLSF_CODE,edtSHRCLSF_NAME";         
                arrParam[6] = "0,1";                                     
        		this.fnc_HelpDialogeAction(this, obj, arrParam);

            }

        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/

        /*--------------------------+
         |  감가상각 전표관리 팝업!  |
         +--------------------------*/
        this.fn_DepreciationSlip = function () {

        	var strName = "FSMD0010P01";
        	var strFormURL = "fsm::FSMD0010P01.xfdl";
        	
        	var sOpenStyle  = "modeless=false";           //Open Sytle(되도록 Modal 사용)
        		sOpenStyle += ",autosize=true";           //Autosize true면 width, Height 안먹음
        		sOpenStyle += ",top=-1";                  //원하는 위치(단 -1은 소유창의 Middle)
        		sOpenStyle += ",left=-1";                 //원하는 위치(단 -1은 소유창의 Center)
        		sOpenStyle += ",width=990";                //현재 반응 없음
        		sOpenStyle += ",height=800";              //현재 반응 없음
        		sOpenStyle += ",title=true";              //Form Title Bar Visible 여부
        		sOpenStyle += ",titletext=감가상각집계세부";    //Form Title Bar Visible 여부
        		sOpenStyle += ",status=false";            //Form Title Bar Visible 여부
        		sOpenStyle += ",resizable=true";          //Form Title Bar Visible 여부
        	
        	var objArgumentList = {
        		refform : this, // 변수명은 p를 붙인다 sLoadForm -> pLoadForm
        		//pBASEYMTH : this.refform.fnc_Trim(this.refform.mskSHRSTDS_YMTH.value)
        		pBASEYMTH : this.refform.fnc_Trim(this.refform.divSHRSTDS_YMTH.fn_GetMonth())
        	};

        	
        	var sResponse = this.fnc_OpenPopup(strName, strFormURL, objArgumentList, sOpenStyle);

        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.calSHRACQU_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRASCL_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRASCL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRASCL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCLSF_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCLSF_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCLSF_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRASCL_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRCLSF_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FSMD0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
