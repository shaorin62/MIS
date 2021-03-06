﻿(function()
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
                this.set_name("TMMA0310");
                this.set_titletext("경영계획및실적관리");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTR_MONEPL", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"STDS_YMTH\" type=\"STRING\" size=\"10\"/><Column id=\"MAID_TYCD\" type=\"STRING\" size=\"10\"/><Column id=\"MI01_AMOT\" type=\"STRING\" size=\"15\"/><Column id=\"MI02_AMOT\" type=\"STRING\" size=\"15\"/><Column id=\"MI03_AMOT\" type=\"STRING\" size=\"15\"/><Column id=\"MI04_AMOT\" type=\"STRING\" size=\"15\"/><Column id=\"MI05_AMOT\" type=\"STRING\" size=\"15\"/><Column id=\"MI06_AMOT\" type=\"STRING\" size=\"15\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">MAID_TYCD</Col><Col id=\"DSNAME\">dsMAID_TYCD</Col><Col id=\"HEADFLAG\">A</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("0");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("1");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_text("경영계획및실적관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 경영계획및실적관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("기준년도");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "195", "71", "92", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("경영지표유형");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "166", "61", "40", "41", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("45");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTR_MONEPL", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsTR_MONEPL");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_fillareatype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"FMT10\"><Columns><Column size=\"60\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"131\"/><Column size=\"120\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"월\"/><Cell col=\"1\" colspan=\"3\" text=\"목표\"/><Cell col=\"4\" colspan=\"3\" text=\"실적\"/><Cell row=\"1\" col=\"1\" text=\"계열\"/><Cell row=\"1\" col=\"2\" text=\"비계열\"/><Cell row=\"1\" col=\"3\" text=\"계\"/><Cell row=\"1\" col=\"4\" text=\"계열\"/><Cell row=\"1\" col=\"5\" text=\"비계열\"/><Cell row=\"1\" col=\"6\" text=\"계\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" style=\"align: ;\" text=\"bind:STDS_YMTH\" mask=\"expr:&quot;####-##&quot;\" editlimit=\"0\" suppress=\"1\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:MI01_AMOT\" suppressalign=\"last\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:MI02_AMOT\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:MI03_AMOT\" expr=\"expr:nexacro.toNumber(MI01_AMOT) + nexacro.toNumber(MI02_AMOT)\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:MI04_AMOT\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:MI05_AMOT\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:MI06_AMOT\" expr=\"expr:nexacro.toNumber(MI04_AMOT) + nexacro.toNumber(MI05_AMOT)\"/></Band><Band id=\"summary\"><Cell style=\"align:center;\" text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;MI01_AMOT&quot;, 0)\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;MI02_AMOT&quot;, 0)\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;MI01_AMOT&quot;, 0) + dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;MI02_AMOT&quot;, 0)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;MI04_AMOT&quot;, 0)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;MI05_AMOT&quot;, 0)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;MI04_AMOT&quot;, 0) + dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;MI05_AMOT&quot;, 0)\"/></Band></Format><Format id=\"FMT20\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"월\"/><Cell col=\"1\" text=\"목표\"/><Cell col=\"2\" text=\"실적\"/></Band><Band id=\"body\"><Cell text=\"bind:STDS_YMTH\" mask=\"expr:&quot;####-##&quot;\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:MI03_AMOT\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:MI06_AMOT\"/></Band><Band id=\"summary\"><Cell style=\"align:center;\" text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;MI03_AMOT&quot;, 0)\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;MI06_AMOT&quot;, 0)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popINSERT00", "absolute", "1267", "153", "474", "118", null, null, this);
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_WF_insert");
            this.addChild(obj.name, obj);
            obj = new Static("Shape00", "absolute", "9", "9", "456", "67", null, null, this.popINSERT00);
            obj.set_taborder("29");
            obj.set_cssclass("styFormItemBoxOut");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Button("btnClose", "absolute", "403", "84", "62", "24", null, null, this.popINSERT00);
            obj.set_taborder("30");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Button("btnINSERT", "absolute", "338", "84", "62", "24", null, null, this.popINSERT00);
            obj.set_taborder("31");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGE_CODE_TO", "absolute", "169", "86", "118", "22", null, null, this.popINSERT00);
            obj.set_taborder("32");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGE_CODE_FROM", "absolute", "25", "86", "118", "22", null, null, this.popINSERT00);
            obj.set_taborder("33");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Static("stInformation01", "absolute", "335", "44", "120", "21", null, null, this.popINSERT00);
            obj.set_taborder("34");
            obj.set_text("으로 복사합니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("left middle");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Static("stInformation00", "absolute", "335", "18", "120", "21", null, null, this.popINSERT00);
            obj.set_taborder("35");
            obj.set_text("의 급여조정 데이터를");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("left middle");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGE_NAME_FROM", "absolute", "212", "18", "118", "21", null, null, this.popINSERT00);
            obj.set_taborder("36");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGE_NAME_TO", "absolute", "212", "44", "118", "21", null, null, this.popINSERT00);
            obj.set_taborder("37");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Static("imgHelpSHRPAYX_DATE_TO", "absolute", "189", "44", "22", "21", null, null, this.popINSERT00);
            obj.set_taborder("38");
            obj.set_cssclass("sytHelpPopup");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Static("imgHelpSHRPAYX_DATE_FROM", "absolute", "189", "18", "22", "21", null, null, this.popINSERT00);
            obj.set_taborder("39");
            obj.set_cssclass("sytHelpPopup");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new MaskEdit("medSHRPAYX_DATE_FROM", "absolute", "110", "18", "77", "21", null, null, this.popINSERT00);
            obj.set_taborder("40");
            obj.set_tabstop("false");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new MaskEdit("medSHRPAYX_DATE_TO", "absolute", "110", "44", "77", "21", null, null, this.popINSERT00);
            obj.set_taborder("41");
            obj.set_tabstop("false");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Static("imgSearchTitle_TO", "absolute", "29", "44", "87", "21", null, null, this.popINSERT00);
            obj.set_taborder("42");
            obj.set_text("대상지급일");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Static("imgSearchTitle_FROM", "absolute", "29", "18", "87", "21", null, null, this.popINSERT00);
            obj.set_taborder("43");
            obj.set_text("기준지급일");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.popINSERT00.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "1268", "173", "8", "96", null, null, this);
            obj.set_taborder("112");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "1433", "261", "294", "8", null, null, this);
            obj.set_taborder("113");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "1237", "154", "182", "8", null, null, this);
            obj.set_taborder("114");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "1732", "161", "8", "96", null, null, this);
            obj.set_taborder("115");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSTDYEAR2", "absolute", "120", "238", "80", "21", null, null, this);
            obj.set_taborder("123");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbMAID", "absolute", "289", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cmbMAID_innerdataset = new Dataset("cmbMAID_innerdataset", this.cmbMAID);
            cmbMAID_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택2</Col></Row></Rows>");
            obj.set_innerdataset(cmbMAID_innerdataset);
            obj.set_taborder("124");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_autoselect("true");
            obj.set_value("1");
            obj.set_text("취급액");
            obj.set_index("0");

            obj = new Calendar("edtSTDYEAR", "absolute", "96", "71", "70", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("125");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_cssclass("styFormItemCalendar");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 474, 118, this.popINSERT00,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_cssclass("pdiv_WF_insert");

            	}
            );
            this.popINSERT00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("경영계획및실적관리");

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
        };
        
        // User Script
        this.addIncludeScript("TMMA0310.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMA0310.xfdl", function() {
         /***************************************************************************************************
         * # Program : TMMA0310 경영계획및실적관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.11.01		최인철		Initial Created.
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
         *****************************************************************************INBUS*CO*KR************/
         
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "TMMA0310";

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
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

        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	
        	this.fnc_GetComboDs(this.dsCombo); //콤보 조회 
        	//this.fnc_GetUserComboDs(this.dsUserCombo); //사용자콤보
        		
        		
        	this.edtSTDYEAR.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 4));
        //	var sDate = this.fnc_GetServerDateTime("DATE");
        //	this.edtSTDYEAR.set_value(this.fnc_Left(sDate, 4));
        	//this.calSHRCIP_DAT2.set_value(this.fnc_Left(sDate));
        	//this.edtSTDYEAR.setFocus();

        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {

        	this.close();
        	

        }

        /*--------------------------+
         |  03.조회 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Search = function (obj) {
        	
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsTR_MONEPL"); 
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTR_MONEPL=dsTR_MONEPL";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.dsTR_MONEPL.setFocus();
        	
        	if( this.cmbMAID.value == "FMT10" ){      
                this.grdTR_MONEPL.setFormat("FMT10"); 
              }else
              {    
        	    this.grdTR_MONEPL.setFormat("FMT20");
        	    }

        
        }

        /*--------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Input = function (obj) {

            if (this.dsTR_MONEPL.rowcount > 0) {
            
        			var sQuestionText  ="이미데이터가 존재합니다.";
        			return this.fnc_Message("TMM125", sQuestionText);

        	}
        	
        			
        	var iRow ;
        	
            for (var i = 0; i < 12 ; i++) {
        	    this.dsTR_MONEPL.addRow();	
        	    
        	    if( i < 10 ){
        	    this.dsTR_MONEPL.setColumn(i , "STDS_YMTH" , nexacro.toNumber(this.fnc_SubStr(this.edtSTDYEAR.value, 0, 4) +"0"+ i) + nexacro.toNumber("1")  );	    
        	    }else
        	    {
        	    this.dsTR_MONEPL.setColumn(i , "STDS_YMTH" , nexacro.toNumber(this.fnc_SubStr(this.edtSTDYEAR.value, 0, 4) + i) + nexacro.toNumber("1") );	    
        	    }
        	    
        	    this.dsTR_MONEPL.setColumn(i , "MI01_AMOT" , 0 );	    
        	    this.dsTR_MONEPL.setColumn(i , "MI02_AMOT" , 0 );
        	    this.dsTR_MONEPL.setColumn(i , "MI04_AMOT" , 0 );
        	    this.dsTR_MONEPL.setColumn(i , "MI05_AMOT" , 0 );
        	}
        	
        	//this.dsTR_MONEPL.setColumn(0 , "MI01_AMOT" , 0 );
        	//this.grdTR_MONEPL.setFocus(0, "MI01_AMOT");
        	this.grdTR_MONEPL.setCellPos(0, "MI01_AMOT");
        	//this.fnc_GridSetCellFocus(this.grdTR_MONEPL, "MI01_AMOT");
        	

        }

        /*--------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Delete = function (obj) {	
        	if (this.fn_DeleteCheck()) this.dsTR_MONEPL.deleteAll();
        	this.grdTR_MONEPL.setFocus();
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsTR_MONEPL");
        	this.grdTR_MONEPL.setFocus();
        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {
        	
        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTR_MONEPL=dsTR_MONEPL:U";
        	var sOutDataSet = "dsTR_MONEPL=dsTR_MONEPL";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTR_MONEPL.setFocus();

        
        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this);
        }

        /*--------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Print = function (obj) {
        	// 기능 없음
        }

        
        /*------------------------------------+
         |  10.화면 Close 時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;	
        	
        	var sMessage = this.fnc_FormUnloadCheck("dsTR_MONEPL", this);	
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        
        } 

         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj, e);
        	
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)    |
         +-----------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때   |
         +-----------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        
        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*--------------------------+
         |  조회 필수 조건 체크!  |
         +--------------------------*/
        this.fn_SearchItemCheck = function () {
        	
        	if (this.fnc_DatasetChangeCheck("dsTR_MONEPL")) {
        		if (this.fnc_Message("TMM023") == false) return false;	
        	}

        	return true;

        }

        /*---------------------+
         |  삭제 여부 체크!  |
         +---------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsTR_MONEPL.rowcount < 1) {
        		this.fnc_Message("TMM007");
        		return;
        	}
        	
        		
        	var sQuestionText  ="해당년도의 데이터를 전부 삭제하시겠습니까?";
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function (){

        	if (!this.fnc_DatasetChangeCheck("dsTR_MONEPL")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	return true;
        	
        }

        
        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {
        	
        	var sReturnString;

        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " STDYEAR="  + this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.edtSTDYEAR.value, 0, 4))); 
        		sReturnString += " MAID="     + this.fnc_Quote(this.fnc_Trim(this.cmbMAID.value));         
           
        	
        	} else if ( sKind == "SAVE00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " MAID_TYCD="     + this.fnc_Quote(this.fnc_Trim(this.cmbMAID.value));         
        		
        	}

        	return sReturnString;
        	
        }

        /*---------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +---------------------------------------*/
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

        	if (sMethodName == "SEARCH00") {

        	    this.fnc_Information(this.stInformation, this.dsTR_MONEPL.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTR_MONEPL.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.grdTR_MONEPL.setCellPos(1);

        	} else if (sMethodName == "SAVE00") {

        		this.fnc_Information(this.stInformation, this.dsTR_MONEPL.rowcount , "SAVE");
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "GetCommCode")  {
        	 
        	    var arrParam = new Array();
        	    arrParam[0]  = "COMBO,cmbMAID,dsMAID_TYCD,0"; 	   //경영지표유형
        	    this.fnc_CommonCodeInnerBind(arrParam);
        	    
        	}
        		
        }

        

        

        this.Combo00_onitemchanged = function(obj,e)
        {

        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsTR_MONEPL"); 
        	
        	  if( this.cmbMAID.value == "FMT10" ){      
        		this.grdTR_MONEPL.setFormat("FMT10");         
        	  }else
        	  {    
        		this.grdTR_MONEPL.setFormat("FMT20");
        		}
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTR_MONEPL=dsTR_MONEPL";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.dsTR_MONEPL.setFocus();
        	
        		
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTR_MONEPL.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdTR_MONEPL.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.popINSERT00.btnClose.addEventHandler("onclick", this.popINSERT_btnClose_OnClick, this);
            this.popINSERT00.btnINSERT.addEventHandler("onclick", this.popINSERT_btnINSERT_OnClick, this);
            this.popINSERT00.edtSHRWAGE_CODE_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT00.edtSHRWAGE_CODE_TO.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popINSERT00.edtSHRWAGE_CODE_FROM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT00.edtSHRWAGE_CODE_FROM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popINSERT00.edtSHRWAGE_NAME_FROM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT00.edtSHRWAGE_NAME_FROM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popINSERT00.edtSHRWAGE_NAME_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT00.edtSHRWAGE_NAME_TO.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popINSERT00.imgHelpSHRPAYX_DATE_TO.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.popINSERT00.imgHelpSHRPAYX_DATE_FROM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.popINSERT00.medSHRPAYX_DATE_FROM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT00.medSHRPAYX_DATE_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbMAID.addEventHandler("onitemchanged", this.Combo00_onitemchanged, this);
            this.edtSTDYEAR.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TMMA0310.xfdl");
        this.loadPreloadList();
       
    };
}
)();
