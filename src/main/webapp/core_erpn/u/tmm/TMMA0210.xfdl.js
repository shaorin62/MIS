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
                this.set_name("TMMA0210");
                this.set_titletext("공지사항관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_NOTICE", this);
            obj._setContents("<ColumnInfo><Column id=\"POPT_IMGX\" type=\"STRING\" size=\"256\"/><Column id=\"NTCE_SBJT\" type=\"STRING\" size=\"256\"/><Column id=\"SECT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"POPD_BEDE\" type=\"STRING\" size=\"256\"/><Column id=\"POPD_ENDD\" type=\"STRING\" size=\"256\"/><Column id=\"SRAL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"BULT_CNTT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"POPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"WRTR_EMNR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">POPT_CODE</Col><Col id=\"DSNAME\">dsPOPT_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFL_ATTACH", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"FILE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "631", "71", "39", "21", null, null, this);
            obj.set_text("제목");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRNTCE_SBJT", "absolute", "673", "71", "170", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "160", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("12");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_NOTICE", "absolute", "8", "128", null, null, "25", "282", this);
            obj.set_binddataset("dsTM_NOTICE");
            obj.set_taborder("5");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_readonly("true");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"49\"/><Column size=\"603\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" style=\"align:center;\" text=\"공지&#13;&#10;유형\" wordwrap=\"char\"/><Cell col=\"1\" rowspan=\"2\" text=\"제목\"/><Cell col=\"2\" rowspan=\"2\" colspan=\"2\" text=\"부서\"/><Cell col=\"4\" rowspan=\"2\" text=\"작성자\"/><Cell col=\"5\" colspan=\"2\" text=\"게시기간\"/><Cell row=\"1\" col=\"5\" text=\"시작일\"/><Cell row=\"1\" col=\"6\" text=\"종료일\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" text=\"bind:POPT_CODE\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:NTCE_SBJT\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" text=\"bind:EMPL_NAME\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:POPD_BEDE\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:POPD_ENDD\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle7", "absolute", "28", "71", "66", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("게시기간");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRPOPD_BEDE", "absolute", "96", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static15", "absolute", "201", "71", "14", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRPOPD_ENDD", "absolute", "216", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Image01", "absolute", "344", "71", "53", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_text("작성자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRWRTR_EMNR", "absolute", "397", "71", "80", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRWRTR_EMNR", "absolute", "479", "71", "22", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRINST_USNM", "absolute", "502", "71", "100", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle01", "absolute", "872", "71", "39", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("내용");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBULT_CNTT", "absolute", "914", "71", "200", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_imemode("none");
            obj.set_inputmode("normal");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Shape1", "absolute", "8", null, null, "232", "348", "15", this);
            obj.set_taborder("21");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx0", "absolute", "28", null, "97", "21", null, "216", this);
            obj.set_taborder("22");
            obj.set_text("제목");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx1", "absolute", "28", null, "97", "21", null, "192", this);
            obj.set_taborder("23");
            obj.set_text("게시기간");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "345", null, "97", "21", null, "192", this);
            obj.set_taborder("30");
            obj.set_text("공지유형");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "28", null, "97", "21", null, "166", this);
            obj.set_taborder("46");
            obj.set_text("내용");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtBULT_CNTT", "absolute", "96", null, null, "163", "369", "24", this);
            obj.set_taborder("10");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1000");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_NOTICE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtNTCE_SBJT", "absolute", "96", null, null, "21", "369", "218", this);
            obj.set_taborder("6");
            obj.set_imemode("alpha");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_NOTICE");
            this.addChild(obj.name, obj);

            obj = new Calendar("calPOPD_BEDE", "absolute", "96", null, "100", "21", null, "192", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static02", "absolute", "201", null, "14", "21", null, "192", this);
            obj.set_taborder("52");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calPOPD_ENDD", "absolute", "216", null, "100", "21", null, "192", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Combo("cmbPOPT_CODE", "absolute", "413", null, null, "21", "369", "192", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Div("divFILE_UPLOAD", "absolute", null, null, "303", "257", "25", "15", this);
            obj.set_taborder("11");
            obj.set_tabstop("false");
            obj.set_url("common::comFileUploadDiv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("56");
            obj.set_text("공지사항관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("57");
            obj.set_text("홈 > 공통관리 > 공통관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("58");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("59");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("60");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("61");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("62");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("63");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("64");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("65");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("66");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("67");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("68");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("69");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "316", "61", "40", "41", null, null, this);
            obj.set_taborder("70");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "601", "61", "40", "41", null, null, this);
            obj.set_taborder("71");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "9", "481", "30", "41", null, null, this);
            obj.set_taborder("72");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "818", "481", "20", "41", null, null, this);
            obj.set_taborder("73");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "685", "435", "80", "35", null, null, this);
            obj.set_taborder("75");
            obj.set_text("h25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "843", "61", "40", "41", null, null, this);
            obj.set_taborder("76");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("공지사항관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtCOMM_ENNM_value","edtNTCE_SBJT","value","dsTM_NOTICE","NTCE_SBJT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtREMK_100X_value","txtBULT_CNTT","value","dsTM_NOTICE","BULT_CNTT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","calPOPD_BEDE","value","dsTM_NOTICE","POPD_BEDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","calPOPD_ENDD","value","dsTM_NOTICE","POPD_ENDD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","cmbPOPT_CODE","value","dsTM_NOTICE","POPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comFileUploadDiv.xfdl");
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("TMMA0210.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMA0210.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMA0210 공지사항 관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.27		chg			Initial Created. [다중 첨부 로직 있음]
         *   2016.09.26		김준수		주석 수정.
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

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "TMMA0210"; //해당 Form에서 사용 할 Package 명 

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
        	 //Quick View 실행 시 설정
        	 this.sUSERAUTH     = "";   //사용자별 프로그램 사용 권한
        	 this.sFORMCAPTION  = "";   //Form의 Title 정보
        	 this.sFORMLOCATION = "";   //Form의 Location 정보
        	 this.sUSERLAVEL    = "";   //Form의 Location 정보
        } else {
        	 this.sUSERAUTH     = this.getOwnerFrame()["sUSERAUTH"];
        	 this.sFORMCAPTION  = this.getOwnerFrame()["sFORMCAPTION"];
        	 this.sFORMLOCATION = this.getOwnerFrame()["sFORMLOCATION"];
        	 this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];
        }

        /*
        첨부파일 그리드 사용시
        	dsFL_ATTACH updatecontrol:true 필수 선언
        	폼초기화시
        	this.divFILE_UPLOAD.fn_FileDivInit();	
        	this.mobjmainds=this.dsTM_NOTICE;
        	this.mcolname="FILE_IDXX";
        	필수 선언
        	this.dsTM_NOTICE_onrowposchanged 에서 첨부파일 조회 참고
        	
        */
        //첨부파일 div에서 사용하는 전역변수
        this.mobjmainds;
        this.mcolname;

        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	if (this.sUSERLAVEL == "5") this.sBUTTONLIST = "TTFFFFFF";
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	//this.edtSHRMSGE_CNTT.setFocus();
        	this.fn_AuthSetting();
        	
        	//첨부파일DIV에 데이타셋 연결(dsFL_ATTACH은 하드코딩으로 연결 , 업무테이블만 연결하면 된다.
        	//업무화면의 데이타셋이 먼저 완성 된 다음에 FileDiv를 초기화해야 한다.
        	this.divFILE_UPLOAD.fn_FileDivInit();	
        	this.mobjmainds=this.dsTM_NOTICE;
        	this.mcolname="FILE_IDXX";
        	
        	this.fn_Search();

        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {

        	this.close();
        	
        }

        /*------------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {
        	
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear('dsTM_NOTICE');

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTM_NOTICE=dsTM_NOTICE";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_NOTICE.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	
        	var iRow = this.dsTM_NOTICE.insertRow(this.dsTM_NOTICE.rowposition + 1);
        	
        	//입력자의 부서정보는 사번을 조인해서 가져오기 때문에, 여기에서는 단순 네임만 표시해준다. (사번만 저장된다.)
        	
        	this.dsTM_NOTICE.setColumn(iRow,"SECT_NAME",application.GBL_COMPANYNAME);
        	this.dsTM_NOTICE.setColumn(iRow,"DEPT_NAME",application.GBL_DEPTNM);
        	this.dsTM_NOTICE.setColumn(iRow,"EMPL_NAME",application.GBL_USERNM);
        	this.dsTM_NOTICE.setColumn(iRow,"WRTR_EMNR",application.GBL_EMPLNO);
        	this.dsTM_NOTICE.setColumn(iRow,"POPD_BEDE",this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8));
        	
        	this.dsTM_NOTICE.set_rowposition(iRow);
        	//this.fn_ToggleEdit(false);
        	this.fnc_GridSetCellFocus(this.grdTM_NOTICE, "NTCE_SBJT");
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	
        	if (this.fn_DeleteCheck()) this.dsTM_NOTICE.deleteRow(this.dsTM_NOTICE.rowposition);
        	this.grdTM_NOTICE.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsTM_NOTICE");
        	this.grdTM_NOTICE.setFocus();
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsTM_NOTICE=dsTM_NOTICE:U dsFL_ATTACH=dsFL_ATTACH:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_NOTICE.setFocus();
        	
        }

        /*------------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {

        	this.fnc_ToExcel(this.name);
        	
        }

        /*------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능 없음
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTM_NOTICE", this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        } 
         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj,e);
        	
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e){

        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        	
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {

        	this.fnc_EditFocus(obj);
        	
        }

        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	
        	if (this.fnc_DatasetChangeCheck("dsTM_NOTICE")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRPOPD_BEDE.value)) != 8) {
        		
        		return this.fnc_CheckPostAction("TMM008", "게시기간 시작일", '', '', this.calSHRPOPD_BEDE, '');
        	}
        		
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRPOPD_ENDD.value)) != 8) {
        		
        		return this.fnc_CheckPostAction("TMM008", "게시기간 종료일", '', '', this.calSHRPOPD_ENDD, '');
        	}	
        			
        	if (parseInt(this.fnc_Trim(this.calSHRPOPD_BEDE.value)) > parseInt(this.fnc_Trim(this.calSHRPOPD_ENDD.value))) {
        		
        		return this.fnc_CheckPostAction("TMM042", "[게시기간 시작일],[게시기간 종료일]", '', '', this.calSHRPOPD_ENDD, '');
        	}				

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsTM_NOTICE.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	var sQuestionText = this.dsTM_NOTICE.getColumn(this.dsTM_NOTICE.rowposition, "NTCE_SBJT");
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTM_NOTICE")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTM_NOTICE.getRowCount(); i++) {
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_NOTICE.getColumn(i, "NTCE_SBJT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "제목", this.dsTM_NOTICE, i, this.edtNTCE_SBJT, "");
        		} else if (this.fnc_Length(this.fnc_Trim(this.dsTM_NOTICE.getColumn(i, "POPD_BEDE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "게시기간 시작일", this.dsTM_NOTICE, i,  this.calPOPD_BEDE, "");
        		} else if (this.fnc_Length(this.fnc_Trim(this.dsTM_NOTICE.getColumn(i, "POPD_ENDD"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "게시기간 종료일", this.dsTM_NOTICE, i, this.calPOPD_ENDD, "");
        		} else if (this.fnc_Length(this.fnc_Trim(this.cmbPOPT_CODE.value)) < 1) {
        			this.fnc_Message("TMM072", "공지 유형");
        			this.cmbPOPT_CODE.setFocus();
        			return false;
        			
        		}
        	}

        	return true;
        	
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == 'SEARCH00') {
        	
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " POPD_BEDE="  + this.fnc_Quote(this.fnc_Trim(this.calSHRPOPD_BEDE.value));
        		sReturnString += " POPD_ENDD="  + this.fnc_Quote(this.fnc_Trim(this.calSHRPOPD_ENDD.value));
        		sReturnString += " WRTR_EMNR="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRWRTR_EMNR.value));
        		sReturnString += " NTCE_SBJT="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRNTCE_SBJT.value));
        		sReturnString += " BULT_CNTT="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRBULT_CNTT.value));
        		
        	// 저장 Argument 생성
        	} else if (sKind == 'SAVE00') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " DEPT_CODE="		 + this.fnc_Quote(application.GBL_DEPTCD);
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

        /*-------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {
        	
        	if (sMethodName == 'SEARCH00') {
        	
        		this.fnc_Information(this.stInformation, this.dsTM_NOTICE.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_NOTICE.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == 'SAVE00') {
        	
        /*		this.fn_KeyFieldDisible(this.dsTM_NOTICE);*/
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		//this.fn_Search();
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbPOPT_CODE,dsPOPT_CODE,0";
        		arrParam[1] = "GRID,grdTM_NOTICE,dsPOPT_CODE,POPT_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	}

        }

        /*--------------------------------------+
         |  행변경전 데이터 확인     |
         +-------------------------------------*/
        this.dsTM_NOTICE_canrowposchange = function(obj,e)
        {
        	if (e.newrow < 0) return;

        	if (this.fnc_DatasetChangeCheck("dsFL_ATTACH") == false) return;
        	
        	if (this.fnc_Message("M1023") == false) {
        		return false;
        	} else {
        		this.fnc_DataSetCancel("dsFL_ATTACH");
        	}
        	
        }

        /*--------------------------------------+
         |  행변경시 처리     |
         +-------------------------------------*/
        this.dsTM_NOTICE_onrowposchanged = function(obj,e) {
        	var sEmplNo = application.GBL_EMPLNO;
        // 	// 관리자이거나 자신의 글이라면 수정가능.
        // 	if ( this.sUSERLAVEL == '1' || this.dsTM_NOTICE.getColumn(e.newrow, "WRTR_EMNR") == sEmplNo) {
        // 		this.fn_ToggleEdit(false);
        // 	} else {
        // 		this.fn_ToggleEdit(true);
        // 	}
        	//파일아이디 this.mobjmainds, this.mcolname 를 사용해서 가져온다.
        	//dsFL_ATTACH은 하드코딩해서 사용
        	//후처리 할것이 없음.
        	
        	//첨부파일 조회
        	this.fnc_DatasetClear("dsFL_ATTACH");
        	var sMethodName = "GetFile";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsFL_ATTACH=dsFL_ATTACH";
        	var sReturnString = "";
        	
        	sReturnString  = " pgm="        + this.fnc_Quote("comFile");//첨부파일 조회 컨트롤러는 독립적임
        	sReturnString += " action="     + this.fnc_Quote(sMethodName);
        	sReturnString += " FILE_IDXX="   + this.fnc_Quote(this.mobjmainds.getColumn(this.mobjmainds.rowposition, this.mcolname));	
        	
        	//첨부파일 조회 컨트롤러는 독립적임
        	this.fnc_TransactionCall(this, "comFile",sMethodName, sInDataSet, sOutDataSet, sReturnString, "fn_CallBack");
        }

        /*-------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	//사원번호(조회조건)
        	if ((obj.name == 'imgHelpSHRWRTR_EMNR') || (obj.name == 'edtSHRINST_USNM')) {

        		arrParam[0] = 'HRM0001';                                 //Popup ID
        		arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRINST_USNM.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtSHRINST_USNM';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtSHRWRTR_EMNR,edtSHRINST_USNM';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1';                                     //Mapping Column Index

        	// 조회조건 - 부서정보조회(Popup) 텝 박스 안
        	}

        	this.fnc_HelpDialogeAction(this, obj, arrParam);
        }

        
        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                               *
         ***************************************************************************************************/
        this.fn_AuthSetting = function () {

        	this.calSHRPOPD_BEDE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8));
        	this.calSHRPOPD_ENDD.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8));
        	
        	if (this.sUSERLAVEL == "5") { // 개인 권한 
        		this.fn_ToggleEdit(true);
        		this.fnc_SetReadonly(this.calSHRPOPD_BEDE, true);
        		this.fnc_SetReadonly(this.calSHRPOPD_ENDD, true);
        	} else if (this.sUSERLAVEL >= 2 && this.sUSERLAVEL <= 4) { // 중간 관리자
        	
        	} else if (this.sUSERLAVEL == "1") { // 관리자
        		this.fn_ToggleEdit(false);
        	}

        }

        this.fn_ToggleEdit = function (b) {

        	this.divFILE_UPLOAD.btnAddFile.set_visible(!b);
        	this.divFILE_UPLOAD.btnDelFile.set_visible(!b);
        	this.fnc_SetReadonly(this.edtNTCE_SBJT, b);
        	this.fnc_SetReadonly(this.calPOPD_BEDE, b);
        	this.fnc_SetReadonly(this.calPOPD_ENDD, b);
        	this.fnc_SetReadonly(this.cmbPOPT_CODE, b);
        	this.fnc_SetReadonly(this.txtBULT_CNTT, b);
        	
        	//alert(b + " " + this.edtNTCE_SBJT.readonly);

        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_NOTICE.addEventHandler("canrowposchange", this.dsTM_NOTICE_canrowposchange, this);
            this.dsTM_NOTICE.addEventHandler("onrowposchanged", this.dsTM_NOTICE_onrowposchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtSHRNTCE_SBJT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRPOPD_BEDE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRPOPD_ENDD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWRTR_EMNR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRWRTR_EMNR.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRINST_USNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRINST_USNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRBULT_CNTT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.txtBULT_CNTT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calPOPD_BEDE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calPOPD_ENDD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbPOPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("TMMA0210.xfdl");
        this.loadPreloadList();
       
    };
}
)();
