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
                this.set_name("YEAA0070");
                this.set_titletext("연말정산처리");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">WODN_CODE</Col><Col id=\"DSNAME\">dsSHRWODN_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsSHRCLSD_CODE</Col><Col id=\"CODEID\">CLSD_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_MASTXM", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_CHK\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_STD_YY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DEPT_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INOFFICE_YN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INOFFICE_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_POST_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RANK_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DEPT_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_SECTOR_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_DEPT_FULL_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_BRANCH_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_POST_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RANK_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INOFFICE_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PRC_STR001\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PRC_STR002\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR025\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("8");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("9");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("10");
            obj.set_text("연말정산처리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("11");
            obj.set_text("홈 > 급여관리 > 연말정산 > 연말정산처리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "31", null, "27", "430", null, this);
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnYEFAMI", "absolute", "0", "4", "95", "21", null, null, this.divButtonList);
            obj.set_text("부양가족처리");
            obj.set_cssclass("btn_WF_Module");
            this.divButtonList.addChild(obj.name, obj);
            obj = new Button("btnPAYDTL", "absolute", "98", "4", "95", "21", null, null, this.divButtonList);
            obj.set_text("근로소득처리");
            obj.set_cssclass("btn_WF_Module");
            this.divButtonList.addChild(obj.name, obj);
            obj = new Button("btnINCDEC", "absolute", "304", "4", "95", "21", null, null, this.divButtonList);
            obj.set_text("입력마감처리");
            obj.set_cssclass("btn_WF_Module");
            this.divButtonList.addChild(obj.name, obj);
            obj = new Button("btnYEPROC", "absolute", "402", "4", "95", "21", null, null, this.divButtonList);
            obj.set_text("연말정산처리");
            obj.set_cssclass("btn_WF_Module");
            this.divButtonList.addChild(obj.name, obj);
            obj = new Button("btnCADN", "absolute", "500", "4", "95", "21", null, null, this.divButtonList);
            obj.set_text("최종확정처리");
            obj.set_cssclass("btn_WF_Module");
            this.divButtonList.addChild(obj.name, obj);
            obj = new FileUpload("btnUpload", "absolute", "196", "4", "105", "21", null, null, this.divButtonList);
            obj.getSetter("retry").set("0");
            obj.set_scrollbars("none");
            obj.set_cssclass("btn_WF_Module");
            obj.style.set_buttonsize("105");
            obj.style.set_buttonborder("1 solid #9b9b9bff");
            obj.style.set_buttonbordertype("round 0 0");
            obj.style.set_buttontext("공제자료업로드");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("right middle");
            obj.set_index("0");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("12");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "689", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "28", "71", "80", "21", null, null, this);
            obj.set_taborder("126");
            obj.set_text("기준년도");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("stSHRYEA_INOFFICE_CD", "absolute", "28", "98", "80", "21", null, null, this);
            obj.set_taborder("128");
            obj.set_text("재직구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRWODN_CODE", "absolute", "96", "98", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_cssclass("styFormSearchBox");

            obj = new Static("stSHRDEPT_CD", "absolute", "204", "71", "84", "21", null, null, this);
            obj.set_taborder("133");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "273", "71", "80", "21", null, null, this);
            obj.set_taborder("134");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "355", "71", "21", "21", null, null, this);
            obj.set_taborder("135");
            obj.set_cssclass("sytHelpPopup");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "378", "71", "120", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_readonly("false");
            obj.set_imemode("hangul");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "568", "71", "80", "21", null, null, this);
            obj.set_taborder("137");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "650", "71", "21", "21", null, null, this);
            obj.set_taborder("138");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "673", "71", "120", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            this.addChild(obj.name, obj);

            obj = new Static("stSHRYEA_EMP_NO", "absolute", "526", "71", "50", "21", null, null, this);
            obj.set_taborder("140");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("spnSHRYEA_STD_YY", "absolute", "96", "71", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy");
            obj.set_type("spin");
            obj.set_value("null");
            obj.set_editformat("yyyy");

            obj = new Static("stSHRCLSD_CODE", "absolute", "822", "71", "72", "21", null, null, this);
            obj.set_taborder("142");
            obj.set_text("직원구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRCLSD_CODE", "absolute", "890", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_readonly("false");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("0");

            obj = new Calendar("calSHRENDX_DATE", "absolute", "395", "98", "103", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_enable("false");

            obj = new Static("Static16", "absolute", "380", "98", "14", "21", null, null, this);
            obj.set_taborder("152");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBGIN_DATE", "absolute", "272", "98", "103", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_enable("false");

            obj = new Static("imgSearchTitle0", "absolute", "204", "98", "84", "21", null, null, this);
            obj.set_taborder("154");
            obj.set_text("퇴사일자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Div("div_Proc", "absolute", "0", "129", null, null, "17", "0", this);
            obj.set_url("yea::YEAA0070_2016.xfdl");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popPRINT", "absolute", "633", "869", "135", "171", null, null, this);
            obj.style.set_background("#deebfeff");
            obj.style.set_border("2 solid #808080ff");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnReport00", "absolute", "9", "8", "112", "22", null, null, this.popPRINT);
            obj.set_text("   소득공제신고서");
            obj.set_cssclass("styTextButtonBizProc");
            obj.style.set_align("left middle");
            this.popPRINT.addChild(obj.name, obj);
            obj = new Button("btnReport10", "absolute", "9", "32", "112", "22", null, null, this.popPRINT);
            obj.set_text("   의료비명세서");
            obj.set_cssclass("styTextButtonBizProc");
            obj.style.set_align("left middle");
            this.popPRINT.addChild(obj.name, obj);
            obj = new Button("btnReport20", "absolute", "9", "56", "112", "22", null, null, this.popPRINT);
            obj.set_text("   기부금명세서");
            obj.set_cssclass("styTextButtonBizProc");
            obj.style.set_align("left middle");
            this.popPRINT.addChild(obj.name, obj);
            obj = new Button("btnReport30", "absolute", "9", "80", "112", "22", null, null, this.popPRINT);
            obj.set_text("   원천징수영수증");
            obj.set_cssclass("styTextButtonBizProc");
            obj.style.set_align("left middle");
            this.popPRINT.addChild(obj.name, obj);
            obj = new Button("btnReport40", "absolute", "9", "104", "112", "22", null, null, this.popPRINT);
            obj.set_text("   원천징수부");
            obj.set_cssclass("styTextButtonBizProc");
            obj.style.set_align("left middle");
            this.popPRINT.addChild(obj.name, obj);
            obj = new Button("btnClose", "absolute", "71", "136", "50", "22", null, null, this.popPRINT);
            obj.set_text("닫기");
            obj.set_cssclass("styTextButtonBizProc");
            obj.style.set_color("red");
            this.popPRINT.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("157");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("158");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("159");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popPDF_PW", "absolute", "127", "883", "333", "40", null, null, this);
            obj.set_text("  PDF파일 암호를 입력하세요");
            obj.style.set_align("left middle");
            obj.style.set_background("#deebfeff");
            obj.style.set_border("2 solid #808080ff");
            obj.style.set_bordertype("normal 2 0");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "2", "9", "70", "19", null, null, this.popPDF_PW);
            obj.set_taborder("3");
            obj.set_text("  PDF 암호");
            this.popPDF_PW.addChild(obj.name, obj);
            obj = new Button("btnClose", "absolute", "271", "8", "50", "22", null, null, this.popPDF_PW);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_cssclass("styTextButtonBizProc");
            obj.style.set_color("red");
            this.popPDF_PW.addChild(obj.name, obj);
            obj = new Button("btnOk", "absolute", "215", "8", "50", "22", null, null, this.popPDF_PW);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("styTextButtonBizProc");
            obj.style.set_color("red");
            this.popPDF_PW.addChild(obj.name, obj);
            obj = new Edit("edtPDF_PW", "absolute", "70", "9", "133", "19", null, null, this.popPDF_PW);
            obj.set_taborder("0");
            obj.set_password("true");
            obj.set_maxlength("7");
            this.popPDF_PW.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 27, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_text("");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 135, 171, this.popPRINT,
            	//-- Layout function
            	function(p) {
            		p.style.set_background("#deebfeff");
            		p.style.set_border("2 solid #808080ff");
            		p.set_scrollbars("none");

            	}
            );
            this.popPRINT.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 436, 79, this.popPDF_PW,
            	//-- Layout function
            	function(p) {
            		p.set_text("  PDF파일 암호를 입력하세요");
            		p.style.set_align("left middle");
            		p.style.set_background("#deebfeff");
            		p.style.set_border("2 solid #808080ff");
            		p.style.set_bordertype("normal 2 0");

            	}
            );
            this.popPDF_PW.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("연말정산처리");

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
            this._addPreloadList("fdl", "yea::YEAA0070_2016.xfdl");
        };
        
        // User Script
        this.addIncludeScript("YEAA0070.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("YEAA0070.xfdl", "script::lib_script_common_YEA.xjs");
        this.registerScript("YEAA0070.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	YEAA0070 연말정산처리
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.31		김석영		Initial Created.
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
        //include "script::lib_script_common_YEA.xjs";			  //연말정산용 추가!!!

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFTTTT"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "YEAA0070";
        this.sSaveRowChk  = "T";
        this.sSelectGrid  = "1";

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
            var sFORMID = this.getOwnerFrame()["id"]; //["sFORMID"];
        	//sFORMID = "MYEAA0050";	//TEST
        	this.sUSERLAVEL = "5";	//TEST
        	
            //소득공제신고서에서 열릴경우... (권한관리 안됐을 경우 대비)
        	if ( this.fnc_Trim(sFORMID).indexOf("MYEAA0050") >= 0 || this.fnc_Trim(sFORMID).indexOf("MPIMB0200") >= 0 ) {
        		this.sUSERLAVEL = "1";
        	}
        	
        	if ( this.sUSERLAVEL != "5" ) {
        		this.divButtonList.btnYEFAMI.set_visible(false);
        		this.divButtonList.btnPAYDTL.set_visible(false);
        		this.divButtonList.btnUpload.set_left(0);	
        		this.divButtonList.btnINCDEC.set_visible(false);
        		this.divButtonList.btnYEPROC.set_left(107);
        		this.divButtonList.btnYEPROC.set_text("임시정산처리");
        		this.divButtonList.btnCADN.set_left(204);
        		
        		//연말정산 세금 처리 수정건 적용 후 아래의 두줄 없앨것
        		this.divButtonList.btnYEPROC.set_visible(false);
        		this.divButtonList.btnCADN.set_visible(false);
        		////////////////////////////////////////////////////////////
        		
        		if ( this.sUSERLAVEL == "1" ) {
        			this.stSHRDEPT_CD.set_visible(false);
        			this.edtSHRDEPT_CODE.set_visible(false);
        			this.edtSHRDEPT_NAME.set_visible(false);
        			this.imgHelpSHRDEPT_CODE.set_visible(false);
        			
        			this.stSHRYEA_EMP_NO.set_left(this.stSHRDEPT_CD.left);
        			this.stSHRYEA_EMP_NO.set_right(this.stSHRDEPT_CD.right);
        			this.edtSHREMPL_NUMB.set_left(this.edtSHRDEPT_CODE.left);
        			this.edtSHREMPL_NUMB.set_right(this.edtSHRDEPT_CODE.right);
        			this.imgHelpSHREMPL_NUMB.set_left(this.imgHelpSHRDEPT_CODE.left);
        			this.imgHelpSHREMPL_NUMB.set_right(this.imgHelpSHRDEPT_CODE.right);
        			this.edtSHREMPL_NAME.set_left(this.edtSHRDEPT_NAME.left);
        			//this.edtSHREMPL_NAME.set_right(this.edtSHRDEPT_NAME.right - 150);
        			
        		}
        		
        		this.spSearchBox0.set_height(45);
        		this.div_Proc.set_top(105);
        		
        		this.stSHRCLSD_CODE.set_visible(false);
        		this.cmbSHRCLSD_CODE.set_visible(false);
        		this.stSHRYEA_INOFFICE_CD.set_visible(false);
        		this.cmbSHRWODN_CODE.set_visible(false);
        		this.imgSearchTitle0.set_visible(false);
        		this.Static16.set_visible(false);
        		this.calSHRBGIN_DATE.set_visible(false);
        		this.calSHRENDX_DATE.set_visible(false);
        	}
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	//this.fnc_GridSetting(this);
         	this.fnc_GetComboDs(this.dsCombo);
         	
        	//조회 조건 권한 처리 
        	var arrParam = new Array();
        	arrParam[0] = "EMPL,edtSHREMPL_NUMB,edtSHREMPL_NAME"; 
        	//arrParam[1] = "DEPT,edtSHRYEA_DEPT_CD,edtSHRYEA_DEPT_NM"; 

        	this.fnc_AuthSetting(this.sUSERLAVEL, arrParam); 
        	 	
         	//조회조건 초기값 세팅
        	this.cmbSHRWODN_CODE.set_index(1);	
        	
        	if ( nexacro.toNumber(this.fnc_Today().substr(4, 2)) < 3 ) {
        	    var toYear = nexacro.toNumber(this.fnc_Today().substr(0, 4)) - 1;
        	    
        		this.spnSHRYEA_STD_YY.set_value(toYear.toString()); 
        	} else {
        		this.spnSHRYEA_STD_YY.set_value(this.fnc_Today().substr(0, 4)); 
        	}
        	
        	this.spnSHRYEA_STD_YY_onchanged(this.spnSHRYEA_STD_YY, e);
        	
        	if ( this.sUSERLAVEL != "5" ) {
        		this.div_Proc.fn_Search(obj);
        	}
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
        	this.div_Proc.fn_Search(obj);
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능 없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능 없음
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.div_Proc.fn_Cancel(obj);
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	this.div_Proc.fn_Save(obj);
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
        	var nX = system.clientToScreenX(this.div_ButtonList, 0);
        	var nY = system.clientToScreenY(this.div_ButtonList, this.div_ButtonList.getOffsetHeight());
        		nX -= system.clientToScreenX(application.mainframe,0);
        		nY -= system.clientToScreenY(application.mainframe,0);	
        	
        	this.popPRINT.trackPopup(nX + 170, nY + 2);	
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	var sMessage = this.div_Proc.fn_FormUnloadCheckProcess(obj, e);
        	if (!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
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
        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {	
        	// 기능 없음
        	return true;
        }

        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	// 기능 없음
        	return true;
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	// 기능 없음
        	return true;
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {
        	// 기능 없음
        	return "";
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
        this.fn_PostProcess = function (sMethodName) 
        {
        	if (sMethodName == "GetCommCode") {
        	//if (sMethodName == "GetCommCode_YEA") {
        		var arrParam 		= new Array();
        		var arrInt   		= 0;
        		arrParam[arrInt++]  = "COMBO,cmbSHRCLSD_CODE,dsSHRCLSD_CODE,0";//SHR 직원구분SHR
        		arrParam[arrInt++]  = "COMBO,cmbSHRWODN_CODE,dsSHRWODN_CODE,0";//SHR 재직구분SHR
        		this.fnc_CommonCodeInnerBind(arrParam);				
        		//this.fnc_CommonCodeInnerBind_YEA(arrParam);
        	}
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {
        	// 기능 없음
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {
        	
        	var arrParam = new Array();
        	
        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) { // 부서정보조회SHR(Popup)
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRDEPT_NAME";
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
        		arrParam[6] = "0,1";

        	} else if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) { // 사원정보조회SHR(Popup)
        		arrParam[0] = "HRM0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";

        	}	

        	if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        }

        /*------------------------+
        |  정산년도 변경 이벤트  |
        +------------------------*/
        this.spnSHRYEA_STD_YY_onchanged = function(obj,e) {	
        	if ( this.fnc_Trim(this.spnSHRYEA_STD_YY.value).substr(0, 4) != this.fnc_Trim(this.div_Proc.url).substr(this.fnc_Length(this.fnc_Trim(this.div_Proc.url)) - 9, 4) ) {
        		if ( this.fnc_Trim(this.spnSHRYEA_STD_YY.value).substr(0, 4) < "2016" ) { 
        			this.div_Proc.set_url("yea::YEAA0070_2015.xfdl");
        		} else if ( this.fnc_Trim(this.spnSHRYEA_STD_YY.value).substr(0,4) == "2015" ) {
        			this.div_Proc.set_url("yea::YEAA0070_2015.xfdl");
        		} else if ( this.fnc_Trim(this.spnSHRYEA_STD_YY.value).substr(0,4) == "2016" ) {
        			this.div_Proc.set_url("yea::YEAA0070_2016.xfdl");
        		} else if ( this.fnc_Trim(this.spnSHRYEA_STD_YY.value).substr(0,4) > "2015" ) {
        			this.div_Proc.set_url("yea::YEAA0070_2016.xfdl");
        		}
        	}
        }

        /*------------------------+
        |  정산년도 스핀 이벤트  |
        +------------------------*/
        this.spnSHRYEA_STD_YY_onspin = function(obj,e) {
        	this.spnSHRYEA_STD_YY_onchanged(obj, e);
        }

        
        /*-----------------------+
        |  가족사항 처리  |
        +------------------------*/
        this.divButtonList_btnYEFAMI_onclick = function(obj,e) {
        	this.div_Proc.divButtonList_btnYEFAMI_onclick(obj, e);
        }

        /*-----------------------+
        |  근로소득지급명세 처리  |
        +------------------------*/
        this.divButtonList_btnPAYDTL_onclick = function(obj,e) {
        	this.div_Proc.divButtonList_btnPAYDTL_onclick(obj, e);
        }

        /*-----------------------+
        |  입력마감 처리  |
        +------------------------*/
        this.divButtonList_btnINCDEC_onclick = function(obj,e) {
        	this.div_Proc.divButtonList_btnINCDEC_onclick(obj, e);
        }

        /*-----------------------+
        |  연말정산 처리  |
        +------------------------*/
        this.divButtonList_btnYEPROC_onclick = function(obj,e) {
        	this.div_Proc.divButtonList_btnYEPROC_onclick(obj, e);
        }

        /*-----------------------+
        |  확정처리 처리  |
        +------------------------*/
        this.divButtonList_btnCADN_onclick = function(obj,e) {
        	this.div_Proc.divButtonList_btnCADN_onclick(obj, e);
        }

        /*----------------------+
        |  소득공제신고서 인쇄   |
        +-----------------------*/
        this.popPRINT_btnReport00_onclick = function(obj,e) {
        	this.div_Proc.popPRINT_btnReport00_onclick(obj, e);
        	this.popPRINT.closePopup();
        }

        /*----------------------+
        |  의료비명세서 인쇄   |
        +-----------------------*/
        this.popPRINT_btnReport10_onclick = function(obj,e) {
        	this.div_Proc.popPRINT_btnReport10_onclick(obj, e);
        	this.popPRINT.closePopup();
        }

        /*----------------------+
        |  기부금명세서 인쇄   |
        +-----------------------*/
        this.popPRINT_btnReport20_onclick = function(obj,e) {
        	this.div_Proc.popPRINT_btnReport20_onclick(obj, e);
        	this.popPRINT.closePopup();
        }

        /*----------------------+
        |  원천징수영수증 인쇄   |
        +-----------------------*/
        this.popPRINT_btnReport30_onclick = function(obj,e) {
        	this.div_Proc.popPRINT_btnReport30_onclick(obj, e);
        	this.popPRINT.closePopup();
        }

        /*----------------------+
        |  원천징수부 인쇄   |
        +-----------------------*/
        this.popPRINT_btnReport40_onclick = function(obj,e) {
        	this.div_Proc.popPRINT_btnReport40_onclick(obj, e);
        	this.popPRINT.closePopup();
        }

        /*----------------------+
        |  인쇄 팝업 닫기   |
        +-----------------------*/
        this.popPRINT_btnClose_onclick = function(obj,e) {
        	this.popPRINT.closePopup();
        }

        /*------------------------+
        |  재직구분 이벤트  |
        +------------------------*/
        this.cmbSHRWODN_CODE_onitemchanged = function(obj,e)
        {
        	if(obj.value == "2"){
        		this.calSHRBGIN_DATE.set_enable(true);
        		this.calSHRENDX_DATE.set_enable(true);
        	} else {
        		this.calSHRBGIN_DATE.set_enable(false);
        		this.calSHRENDX_DATE.set_enable(false);
        		this.calSHRBGIN_DATE.set_value("");
        		this.calSHRENDX_DATE.set_value("");
        	}
        }

        /*-----------------------+
        |  공제자료 업로드  |
        +------------------------*/
        this.divButtonList_btnUpload_onerror = function(obj,e) 
        {	
        	//trace(e.eventid);
        	//trace(e.statuscode);
        	//trace(e.errorcode);
        	//trace(e.errormsg);

        	this.fnc_Alert("파일 업로드 오류");
        	
        }

        this.divButtonList_btnUpload_onfindclick = function(obj,e) 
        {
        	if (this.div_Proc.dsYEA_MASTXM.getRowCount() < 1) {
        		this.fnc_Alert("조회된 데이터가 없습니다. 조회 후 작업하세요!");
        		return false;
        	}
        	   	
        	if(this.div_Proc.dsYEA_MASTXM.getColumn(this.div_Proc.dsYEA_MASTXM.rowposition, "YEA_PRC_STR001") == "1"){
        	   //확정
        	   this.fnc_Message("YEA012");
        	   return false;
        	}
        	
        	if(this.div_Proc.dsYEA_MASTXM.getColumn(this.div_Proc.dsYEA_MASTXM.rowposition, "YEA_INC_STR025") == "1"){
        	   //마감
        	   this.fnc_Message("YEA007");
        	   return false;
        	}
        }

        this.divButtonList_btnUpload_onitemchanged = function(obj,e) 
        {		
        	var sFileUrl  = application.GBL_HTTPURL + "/core/erp/com/comFile_UploadSingle.do";
        	//var sFileUrl  = application.GBL_HTTPURL + "/core/erp/com/fileUploadSingle.do";
        	var sPath = "CAL_PDF/" + this.spnSHRYEA_STD_YY.value;
        	var sPhyFile = this.div_Proc.dsYEA_INCDEC.getColumn(this.div_Proc.dsYEA_INCDEC.rowposition, "YEA_EMP_NO") + ".pdf";
        	var sLogFile = this.divButtonList.btnUpload.value;
        	sLogFile = sLogFile.substr(sLogFile.lastIndexOf("\\") + 1, this.fnc_Length(this.fnc_Trim(sLogFile)));
        	
        	this.div_Proc.dsYEA_INCDEC.setColumn(this.div_Proc.dsYEA_INCDEC.rowposition, "YEA_INC_STR048", sPhyFile);	//PDF파일 물리파일명
        	this.div_Proc.dsYEA_INCDEC.setColumn(this.div_Proc.dsYEA_INCDEC.rowposition, "YEA_INC_STR049", sPath);		//PDF파일 파일경로
        	this.div_Proc.dsYEA_INCDEC.setColumn(this.div_Proc.dsYEA_INCDEC.rowposition, "YEA_INC_STR050", sLogFile);	//PDF파일 논리파일명

        	this.divButtonList.btnUpload.upload(sFileUrl + "?sPath=" + sPath + "&sPhyFile=" + sPhyFile);
        	this.divButtonList.btnUpload.deleteItem(0);     //업로드 후 업로드 항목 초기화
        	this.divButtonList.btnUpload.appendItem(0);     //업로드 후 업로드 항목 초기화
        	
        }

        this.divButtonList_btnUpload_onsuccess = function(obj,e) 
        {
        	if (e.errorcode == "0") {
        		var nX = system.clientToScreenX(this.divButtonList, 0);
        		var nY = system.clientToScreenY(this.divButtonList, this.divButtonList.getOffsetHeight());
        			nX -= system.clientToScreenX(application.mainframe,0);
        			nY -= system.clientToScreenY(application.mainframe,0);	
        		
        		this.popPDF_PW.trackPopup(nX + 200, nY);		
        		this.popPDF_PW.edtPDF_PW.set_value("");
        		this.popPDF_PW.edtPDF_PW.setFocus();
        		
        		//this.div_Proc.divButtonList_btnUpload_onsuccess(obj, e);
        	}
        }

        
        this.popPDF_PW_btnClose_onclick = function(obj,e)
        {
        	this.popPDF_PW.closePopup();
        }

        this.popPDF_PW_btnOk_onclick = function(obj,e)
        {
        	this.div_Proc.dsYEA_INCDEC.setColumn(this.div_Proc.dsYEA_INCDEC.rowposition, "YEA_INC_STR047", this.fnc_Trim(this.popPDF_PW.edtPDF_PW.value));	//PDF파일 패스워드
        	this.div_Proc.divButtonList_btnUpload_onsuccess(obj, e);
        	this.popPDF_PW.closePopup();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsYEA_MASTXM.addEventHandler("onrowposchanged", this.dsYEA_MASTXM_onrowposchanged, this);
            this.dsYEA_MASTXM.addEventHandler("canrowposchange", this.dsYEA_MASTXM_canrowposchange, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.divButtonList.btnYEFAMI.addEventHandler("onclick", this.divButtonList_btnYEFAMI_onclick, this);
            this.divButtonList.btnPAYDTL.addEventHandler("onclick", this.divButtonList_btnPAYDTL_onclick, this);
            this.divButtonList.btnINCDEC.addEventHandler("onclick", this.divButtonList_btnINCDEC_onclick, this);
            this.divButtonList.btnYEPROC.addEventHandler("onclick", this.divButtonList_btnYEPROC_onclick, this);
            this.divButtonList.btnCADN.addEventHandler("onclick", this.divButtonList_btnCADN_onclick, this);
            this.divButtonList.btnUpload.addEventHandler("onfindclick", this.divButtonList_btnUpload_onfindclick, this);
            this.divButtonList.btnUpload.addEventHandler("onitemchanged", this.divButtonList_btnUpload_onitemchanged, this);
            this.divButtonList.btnUpload.addEventHandler("onerror", this.divButtonList_btnUpload_onerror, this);
            this.divButtonList.btnUpload.addEventHandler("onsuccess", this.divButtonList_btnUpload_onsuccess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.cmbSHRWODN_CODE.addEventHandler("onitemchanged", this.cmbSHRWODN_CODE_onitemchanged, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.spnSHRYEA_STD_YY.addEventHandler("onchanged", this.spnSHRYEA_STD_YY_onchanged, this);
            this.spnSHRYEA_STD_YY.addEventHandler("onspin", this.spnSHRYEA_STD_YY_onspin, this);
            this.spnSHRYEA_STD_YY.addEventHandler("oneditclick", this.spnSHRYEA_STD_YY_oneditclick, this);
            this.cmbSHRCLSD_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRENDX_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRBGIN_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popPRINT.btnReport00.addEventHandler("onclick", this.popPRINT_btnReport00_onclick, this);
            this.popPRINT.btnReport10.addEventHandler("onclick", this.popPRINT_btnReport10_onclick, this);
            this.popPRINT.btnReport20.addEventHandler("onclick", this.popPRINT_btnReport20_onclick, this);
            this.popPRINT.btnReport30.addEventHandler("onclick", this.popPRINT_btnReport30_onclick, this);
            this.popPRINT.btnReport40.addEventHandler("onclick", this.popPRINT_btnReport40_onclick, this);
            this.popPRINT.btnClose.addEventHandler("onclick", this.popPRINT_btnClose_onclick, this);
            this.popPDF_PW.Static00.addEventHandler("onclick", this.popPDF_PW_Static00_onclick, this);
            this.popPDF_PW.btnClose.addEventHandler("onclick", this.popPDF_PW_btnClose_onclick, this);
            this.popPDF_PW.btnOk.addEventHandler("onclick", this.popPDF_PW_btnOk_onclick, this);

        };

        this.loadIncludeScript("YEAA0070.xfdl");
        this.loadPreloadList();
       
    };
}
)();
