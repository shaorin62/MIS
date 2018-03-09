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
                this.set_name("HATC0020");
                this.set_titletext("시간외근무신청등록");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYN\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">WORK_GUBN</Col><Col id=\"DSNAME\">dsWORK_GUBN</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYN\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAT_OWAPXD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK_BOX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DOCU_IDXX\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"STRT_TIME\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_TIME\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_TIME\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_RESN\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"SORT_SEQN\" size=\"3\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTime1", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"10\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">08:00</Col><Col id=\"CODEID\">8</Col></Row><Row><Col id=\"DSNAME\">08:30</Col><Col id=\"CODEID\">8.5</Col></Row><Row><Col id=\"DSNAME\">09:00</Col><Col id=\"CODEID\">9</Col></Row><Row><Col id=\"DSNAME\">09:30</Col><Col id=\"CODEID\">9.5</Col></Row><Row><Col id=\"DSNAME\">10:00</Col><Col id=\"CODEID\">10</Col></Row><Row><Col id=\"DSNAME\">10:30</Col><Col id=\"CODEID\">10.5</Col></Row><Row><Col id=\"DSNAME\">11:00</Col><Col id=\"CODEID\">11</Col></Row><Row><Col id=\"DSNAME\">11:30</Col><Col id=\"CODEID\">11.5</Col></Row><Row><Col id=\"DSNAME\">12:00</Col><Col id=\"CODEID\">12</Col></Row><Row><Col id=\"DSNAME\">12:30</Col><Col id=\"CODEID\">12.5</Col></Row><Row><Col id=\"DSNAME\">13:00</Col><Col id=\"CODEID\">13</Col></Row><Row><Col id=\"DSNAME\">13:30</Col><Col id=\"CODEID\">13.5</Col></Row><Row><Col id=\"DSNAME\">14:00</Col><Col id=\"CODEID\">14</Col></Row><Row><Col id=\"DSNAME\">14:30</Col><Col id=\"CODEID\">14.5</Col></Row><Row><Col id=\"DSNAME\">15:00</Col><Col id=\"CODEID\">15</Col></Row><Row><Col id=\"DSNAME\">15:30</Col><Col id=\"CODEID\">15.5</Col></Row><Row><Col id=\"DSNAME\">16:00</Col><Col id=\"CODEID\">16</Col></Row><Row><Col id=\"DSNAME\">16:30</Col><Col id=\"CODEID\">16.5</Col></Row><Row><Col id=\"DSNAME\">17:00</Col><Col id=\"CODEID\">17</Col></Row><Row><Col id=\"DSNAME\">17:30</Col><Col id=\"CODEID\">17.5</Col></Row><Row><Col id=\"DSNAME\">18:00</Col><Col id=\"CODEID\">18</Col></Row><Row><Col id=\"DSNAME\">18:30</Col><Col id=\"CODEID\">18.5</Col></Row><Row><Col id=\"DSNAME\">19:00</Col><Col id=\"CODEID\">19</Col></Row><Row><Col id=\"DSNAME\">19:30</Col><Col id=\"CODEID\">19.5</Col></Row><Row><Col id=\"DSNAME\">20:00</Col><Col id=\"CODEID\">20</Col></Row><Row><Col id=\"DSNAME\">20:30</Col><Col id=\"CODEID\">20.5</Col></Row><Row><Col id=\"DSNAME\">21:00</Col><Col id=\"CODEID\">21</Col></Row><Row><Col id=\"DSNAME\">21:30</Col><Col id=\"CODEID\">21.5</Col></Row><Row><Col id=\"DSNAME\">22:00</Col><Col id=\"CODEID\">22</Col></Row><Row><Col id=\"DSNAME\">22:30</Col><Col id=\"CODEID\">22.5</Col></Row><Row><Col id=\"DSNAME\">23:00</Col><Col id=\"CODEID\">23</Col></Row><Row><Col id=\"DSNAME\">23:30</Col><Col id=\"CODEID\">23.5</Col></Row><Row><Col id=\"DSNAME\">24:00</Col><Col id=\"CODEID\">24</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_APPRXH", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_BOX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DOCU_IDXX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBJ_NAME\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_STR\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_PROC\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_DATE\" size=\"12\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_APPROVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"documentID\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"documentType\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"HtmlDocument\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"subject\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"recipient\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"creator\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"documentStatus\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"isUsedFile\" size=\"3\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTime2", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"10\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">19:00</Col><Col id=\"CODEID\">19</Col></Row><Row><Col id=\"DSNAME\">19:30</Col><Col id=\"CODEID\">19.5</Col></Row><Row><Col id=\"DSNAME\">20:00</Col><Col id=\"CODEID\">20</Col></Row><Row><Col id=\"DSNAME\">20:30</Col><Col id=\"CODEID\">20.5</Col></Row><Row><Col id=\"DSNAME\">21:00</Col><Col id=\"CODEID\">21</Col></Row><Row><Col id=\"DSNAME\">21:30</Col><Col id=\"CODEID\">21.5</Col></Row><Row><Col id=\"DSNAME\">22:00</Col><Col id=\"CODEID\">22</Col></Row><Row><Col id=\"DSNAME\">22:30</Col><Col id=\"CODEID\">22.5</Col></Row><Row><Col id=\"DSNAME\">23:00</Col><Col id=\"CODEID\">23</Col></Row><Row><Col id=\"DSNAME\">23:30</Col><Col id=\"CODEID\">23.5</Col></Row><Row><Col id=\"DSNAME\">24:00</Col><Col id=\"CODEID\">24</Col></Row><Row><Col id=\"DSNAME\">00:30</Col><Col id=\"CODEID\">24.5</Col></Row><Row><Col id=\"DSNAME\">01:00</Col><Col id=\"CODEID\">25</Col></Row><Row><Col id=\"DSNAME\">01:30</Col><Col id=\"CODEID\">25.5</Col></Row><Row><Col id=\"DSNAME\">02:00</Col><Col id=\"CODEID\">26</Col></Row><Row><Col id=\"DSNAME\">02:30</Col><Col id=\"CODEID\">26.5</Col></Row><Row><Col id=\"DSNAME\">03:00</Col><Col id=\"CODEID\">27</Col></Row><Row><Col id=\"DSNAME\">03:30</Col><Col id=\"CODEID\">27.5</Col></Row><Row><Col id=\"DSNAME\">04:00</Col><Col id=\"CODEID\">28</Col></Row><Row><Col id=\"DSNAME\">04:30</Col><Col id=\"CODEID\">28.5</Col></Row><Row><Col id=\"DSNAME\">05:00</Col><Col id=\"CODEID\">29</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAT_ENDDXM", this);
            obj._setContents("<ColumnInfo><Column id=\"ATTE_YMTH\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDD_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
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
            obj.set_text("시간외근무신청등록");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 1메뉴 > 자금계획관리");
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

            obj = new Static("Static30", "absolute", "28", "71", "52", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("제목");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
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
            obj.set_text("h 6");
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

            obj = new Edit("edtSubject", "absolute", "71", "71", null, "21", "48", null, this);
            obj.set_taborder("109");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("110");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC", "absolute", "8", "35", "74", "21", null, null, this);
            obj.set_taborder("111");
            obj.set_text("결재상신");
            obj.set_cssclass("btn_WF_Module");
            obj.set_enable("false");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("112");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CANC", "absolute", "85", "35", "74", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_text("결재취소");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAT_OWAPXD", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_taborder("114");
            obj.set_binddataset("dsAT_OWAPXD");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\"/><Column size=\"116\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"180\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"근무일\"/><Cell col=\"2\" text=\"사원번호\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_essential\" text=\"성명\"/><Cell col=\"4\" text=\"부서\"/><Cell col=\"5\" text=\"직위\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_essential\" text=\"시간외구분\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_essential\" text=\"시작시간\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_essential\" text=\"종료시간\"/><Cell col=\"9\" text=\"시간\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_edit\" text=\"사유\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK_BOX\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" text=\"bind:WORK_DATE\" editlimit=\"0\" calendardisplay=\"edit\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:EMPL_NUMB\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" text=\"bind:EMPL_NAME\" editlimit=\"0\" editdisplay=\"edit\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"5\" text=\"bind:OPOS_NAME\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:WORK_GUBN\" editlimit=\"-1\" editdisplay=\"edit\" combodisplay=\"edit\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:STRT_TIME\" editlimit=\"-1\" editdisplay=\"edit\" combodataset=\"expr:WORK_GUBN == &quot;2&quot; ? &quot;dsTime1&quot; : (WORK_GUBN==&quot;1&quot;? &quot;dsTime2&quot;:&quot;&quot;)\" combocodecol=\"CODEID\" combodatacol=\"DSNAME\" combodisplay=\"edit\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:ENDX_TIME\" editdisplay=\"edit\" combodataset=\"expr:WORK_GUBN == &quot;2&quot; ? &quot;dsTime1&quot; : (WORK_GUBN==&quot;1&quot;? &quot;dsTime2&quot;:&quot;&quot;)\" combocodecol=\"CODEID\" combodatacol=\"DSNAME\" combodisplay=\"edit\"/><Cell col=\"9\" text=\"bind:WORK_TIME\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:REMK_RESN\" editlimit=\"0\" editdisplay=\"edit\" calendardisplay=\"edit\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("시간외근무신청등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edtSubject","value","dsTM_APPRXH","SUBJ_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("HATC0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HATC0020.xfdl", function() {
        /****************************************************************************************************
        /*
         * @explanation		시간외근무신청등록
         * @category	 	인사관리>근태신청>시간외근무신청등록 
         * @author	   		이창운
         * @cdate	  		2016.09.07
         * @version 1.0		최초 작성
         * HATC0020.xml - <Created by Code Template generator>
         *
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                           *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                            *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                       *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망             *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                      *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/
         
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTFTFF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "HATC0020"; 
        this.sDOCUID 	  = "";
        this.sKeyValue    = "";

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
        	this.fnc_GetComboDs(this.dsCombo);
        	
        	/*권한에 따라 사원번호 수정 가능여부 결정*/
        	/*개발을 위해 권한 level을 1로 셋팅*/
        	//this.sUSERLAVEL = 1;
        	
        	switch(this.sUSERLAVEL){
        		case 1: 
        			break;
        	}
        	
        	/*신청 및 내역에서 선택된 신청서 종류를 setting*/
        	this.sDOCUID = this.parent.sDOCUIDXX;
        	
        	if(this.parent.sAPPRGUBN == "cre"){ /*상신일때*/
        		this.btn_PROC.set_enable(true);
        		this.fn_formNotEnable();
        		this.div_ButtonList.btnInput.set_enable(false); 
        		this.div_ButtonList.btnDelete.set_enable(false);
        		this.div_ButtonList.btnSave.set_enable(false);
        	}else if(this.parent.sAPPRGUBN == "del"){ /*취소일때*/
        		this.btn_CANC.set_enable(true);
        		this.fn_formNotEnable();
        		this.div_ButtonList.btnInput.set_enable(false); 
        		this.div_ButtonList.btnDelete.set_enable(false);
        		this.div_ButtonList.btnSave.set_enable(false);
        	}
        	
        	if(this.parent.sAPPRSTAT != "N" && this.parent.sAPPRSTAT != null){
        		this.fn_formNotEnable();
        		this.div_ButtonList.btnInput.set_enable(false); 
        		this.div_ButtonList.btnDelete.set_enable(false);
        		this.div_ButtonList.btnSave.set_enable(false);
        	}
        	
        	if(this.parent.sAPPRSEQN == null || this.parent.sAPPRSEQN == ""){
        		this.dsTM_APPRXH.addRow();
        		this.dsTM_APPRXH.setColumn(0,"DOCU_IDXX",this.sDOCUID);
        		this.dsTM_APPRXH.setColumn(0,"EMPL_NUMB",application.GBL_EMPLNO);
        		this.dsTM_APPRXH.setColumn(0,"APPR_STAT","N");
        		this.dsTM_APPRXH.setColumn(0,"SUBJ_NAME","시간외근무신청서");
        		this.dsTM_APPRXH.setColumn(0,"DEPT_CODE",application.GBL_DEPTCD);
        	}else{
        		this.sKeyValue = this.parent.sAPPRSEQN;
        		this.fnc_DatasetClear('dsTM_APPRXH');
        		this.fnc_DatasetClear('dsAT_OWAPXD');
        		var sMethodName = "SEARCH00";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsAT_OWAPXD=dsAT_OWAPXD dsTM_APPRXH=dsTM_APPRXH";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		this.edtSubject.setFocus();
        	}
        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	
        	this.parent.fn_End();
        }

        /*------------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;
        	
        	this.parent.sAPPRGUBN = "list";	
        	this.parent.sAPPRSEQN = "";
        	this.parent.sDOCUIDXX = "";
        	this.parent.sKeyValue = this.sKeyValue;
        	this.parent.fn_goMenu();
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {  

        	if(this.parent.sAPPRSTAT != "N" && this.parent.sAPPRSTAT != null){
        		return ;
        	}
        	var iNowDate = this.fnc_GetServerDateTime("DATE");
        	var iRow = this.dsAT_OWAPXD.addRow();
        	this.dsAT_OWAPXD.set_rowposition(iRow); 
        	this.dsAT_OWAPXD.setColumn(iRow,"DOCU_IDXX",this.sDOCUID);
        	this.dsAT_OWAPXD.setColumn(iRow,"WORK_DATE",iNowDate);
        	this.grdAT_OWAPXD.setCellPos(this.fnc_GridColumnIndex(this.grdAT_OWAPXD, "EMPL_NAME"));
        	this.grdAT_OWAPXD.setFocus();
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) {
        		
        		/*
        			체크된 내용들만 삭제한다.
        			역순으로 체크하여 삭제해야 아래의 SCRIPT 정상작동한다. 
        		*/
        		for (i = this.dsAT_OWAPXD.getRowCount() - 1 ; i >= 0 ; i -- ){
        			if(this.dsAT_OWAPXD.getColumn(i,"CHK_BOX") == '1'){
        				this.dsAT_OWAPXD.deleteRow(i);
        			}
        		}
        		
        		this.grdAT_OWAPXD.setFocus();
        	}

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsAT_OWAPXD");
        	this.fnc_DataSetCancel("dsTM_APPRXH");
        	this.fnc_DataSetCancel("dsAT_ENDDXM");
        	this.grdAT_OWAPXD.setFocus();
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	
        	if (!this.fn_SaveItemCheck()) return;
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsAT_OWAPXD=dsAT_OWAPXD:A dsTM_APPRXH=dsTM_APPRXH:A";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdAT_OWAPXD.setFocus();
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
        	//var sMessage = this.fnc_FormUnloadCheck("dsHR_RECOJB", this);

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
        	
        	if (this.fnc_DatasetChangeCheck("dsAT_OWAPXD")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsAT_OWAPXD.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;	
        	}
        	
        	var iSelectRowCount = this.dsAT_OWAPXD.getCaseCount("CHK_BOX == '1'");
        	
        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else if (iSelectRowCount == 1){
        		var sQuestionText = "사원명 (" + this.fnc_Trim(this.dsAT_OWAPXD.getColumn(this.dsAT_OWAPXD.rowposition, "EMPL_NAME")) + ")";
        		return this.fnc_Message("TMM002", sQuestionText);
        	} else {	
        		return this.fnc_Message("TMM020");
        	}
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	if (!this.fnc_DatasetChangeCheck("dsAT_OWAPXD") && !this.fnc_DatasetChangeCheck("dsTM_APPRXH") ) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.dsTM_APPRXH.getColumn(0, "SUBJ_NAME"))) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "제목", this.dsTM_APPRXH, 0, this.edtSubject, "SUBJ_NAME");
        	}
        	
        	if (this.dsAT_OWAPXD.getRowCount() < 1){
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsAT_OWAPXD.getRowCount(); i++) {

        		//변경된 로우만 체크
        		if (this.fnc_ToUpper(this.dsAT_OWAPXD.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_OWAPXD.getColumn(i, "EMPL_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사원번호", this.dsAT_OWAPXD, i, this.grdAT_OWAPXD, "EMPL_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_OWAPXD.getColumn(i, "WORK_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "근무일", this.dsAT_OWAPXD, i, this.grdAT_OWAPXD, "WORK_DATE");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_OWAPXD.getColumn(i, "STRT_TIME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "시작시간", this.dsAT_OWAPXD, i, this.grdAT_OWAPXD, "STRT_TIME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_OWAPXD.getColumn(i, "ENDX_TIME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "종료시간", this.dsAT_OWAPXD, i, this.grdAT_OWAPXD, "ENDX_TIME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_OWAPXD.getColumn(i, "WORK_GUBN"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "시간외구분", this.dsAT_OWAPXD, i, this.grdAT_OWAPXD, "WORK_GUBN");
        		}
        		
        		if(nexacro.toNumber(this.dsAT_OWAPXD.getColumn(i,"STRT_TIME")) > nexacro.toNumber(this.dsAT_OWAPXD.getColumn(i,"ENDX_TIME"))){
        			this.fnc_Message("TMM125", "시작시간이 종료시간보다 클 수 없습니다.");
        			return false;
        		}
        		
        		/*SORT_SEQN 값 할당*/		
        		this.dsAT_OWAPXD.setColumn(i,"SORT_SEQN", i+1);
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
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " DOCU_IDXX=" + this.parent.sDOCUIDXX;
        		sReturnString += " APPR_SEQN=" + this.parent.sAPPRSEQN; 	
        	
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);	
        	} else if (sKind == "SEARCH02") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);	
        		sReturnString += " ATTE_YMTH=" + this.fnc_SubStr(this.dsAT_OWAPXD.getColumn(this.dsAT_OWAPXD.rowposition, "WORK_DATE"),0,6);
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
        	
        		this.fnc_Information(this.stInformation, this.dsAT_OWAPXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsAT_OWAPXD.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        	} else if (sMethodName == "SEARCH02") {
        		if(this.dsAT_ENDDXM.getColumn(0,"ENDD_YSNO") == "Y"){
        			this.dsAT_OWAPXD.setColumn(this.dsAT_OWAPXD.rowposition,"EMPL_NUMB","");
        			this.dsAT_OWAPXD.setColumn(this.dsAT_OWAPXD.rowposition,"EMPL_NAME","");
        			this.dsAT_OWAPXD.setColumn(this.dsAT_OWAPXD.rowposition,"WORK_DATE","");
        			this.fnc_Message("TMM125", "해당일 근태가 마감되었습니다.");
        		}
        	} else if (sMethodName == "SAVE00") {
        		
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        		this.parent.sKeyValue = this.sKeyValue;
        		this.fn_Search();
        	
        	} else if (sMethodName == "sendApproval") {
        		
        		/*결재연동 후처리 - 결재상신때만 해당 문서를 열어준다.*/
        		if(this.parent.sAPPRGUBN == "cre"){
        			this.fnc_ShowApproval(this.parent.sAPPRGUBN, 
        								  this.dsTM_APPROVAL.getColumn(0, "documentID"),
        								  this.dsTM_APPROVAL.getColumn(0,"documentType")
        								  );
        		}
        			
        		this.fn_Search();
        			
        	} else if (sMethodName == "GetCommCode") {
        		
        		var arrParam = new Array();
        		arrParam[0] = "GRID,grdAT_OWAPXD,dsWORK_GUBN,WORK_GUBN"; //SHR 신청서 종류SHR 
        		this.dsWORK_GUBN.filter("COMD_CODE < 3");
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	}
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/ 
        /*-----------------------+
        |  해당월 근태 마감여부|
        +------------------------*/
        this.fn_getMagamYsno = function()
        {	
        	this.fnc_DatasetClear('dsAT_ENDDXM');

        	var sMethodName = "SEARCH02";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsAT_ENDDXM=dsAT_ENDDXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

         /*전체화면 비활성화*/
         this.fn_formNotEnable = function(){
        	this.grdAT_OWAPXD.enable = false;
        	this.edtSubject.enable = false;
         }

         /*결재상신/취소*/
         this.fn_apprProcess = function(sGubn){	/* sGubn 값으로 createDoc or deleteDoc 값을 받는다.*/

        	var sXmlStr = "";
        	var sSubject 	= this.dsTM_APPRXH.getColumn(0,"SUBJ_NAME"); 						
        	var sApprDocId	= this.sDOCUID + "-" + this.dsTM_APPRXH.getColumn(0,"APPR_SEQN");/*DOCU_IDXX 과 APPR_SEQN 조합*/ 
        	
        	sXmlStr  = "<style>td {border:1px solid black; Font-size:12px;  height:30px;}";
        	sXmlStr += ".label1 { background-color:#cccccc; font-weight:bold; text-align: center; }";
        	sXmlStr += ".label2 { padding-left: 5px; }";
        	sXmlStr += ".label3 { text-align: center; }";
        	sXmlStr += ".label4 { text-align: right; padding-right: 5px; }";
        	sXmlStr += "</style>";
        	sXmlStr += "<table style='width:670px;border:1px'>";
        	sXmlStr += "  <col width=10%>";
        	sXmlStr += "  <col width=10%>";
        	sXmlStr += "  <col width=10%>";
        	sXmlStr += "  <col width=10%>";
        	sXmlStr += "  <col width=10%>";
        	sXmlStr += "  <col width=8%>";
        	sXmlStr += "  <col width=8%>";
        	sXmlStr += "  <col width=8%>";
        	sXmlStr += "  <col width=6%>";
        	sXmlStr += "  <col width=20%>";
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td class='label1'>근무일</td>";
        	sXmlStr += "    <td class='label1'>사원번호</td>";
        	sXmlStr += "    <td class='label1'>성명</td>";
        	sXmlStr += "    <td class='label1'>부서</td>";
        	sXmlStr += "    <td class='label1'>직위</td>";
        	sXmlStr += "    <td class='label1'>시간외<br>구분</td>";
        	sXmlStr += "    <td class='label1'>시작<br>시간</td>";
        	sXmlStr += "    <td class='label1'>종료<br>시간</td>";
        	sXmlStr += "    <td class='label1'>시간</td>";
        	sXmlStr += "    <td class='label1'>사유</td>";
        	sXmlStr += "  </tr>";
        	for(var i = 0; i < this.dsAT_OWAPXD.getRowCount(); i++){
        		sXmlStr += "  <tr>";
        		sXmlStr += "    <td class='label3'>" + this.grdAT_OWAPXD.getCellText(i,1) + "</td>"; 			/*근무일*/
        		sXmlStr += "    <td class='label3'>" + this.dsAT_OWAPXD.getColumn(i,"EMPL_NUMB") + "</td>";	/*사원번호*/
        		sXmlStr += "    <td class='label3'>" + this.dsAT_OWAPXD.getColumn(i,"EMPL_NAME") + "</td>";	/*성명*/
        		sXmlStr += "    <td class='label2'>" + this.dsAT_OWAPXD.getColumn(i,"DEPT_NAME") + "</td>";	/*부서*/
        		sXmlStr += "    <td class='label3'>" + this.dsAT_OWAPXD.getColumn(i,"OPOS_NAME") + "</td>";	/*직위*/
        		sXmlStr += "    <td class='label3'>" + this.grdAT_OWAPXD.getCellText(i,6) + "</td>";			/*시간외근무*/
        		sXmlStr += "    <td class='label3'>" + this.grdAT_OWAPXD.getCellText(i,7) + "</td>"; 			/*시작시간*/
        		sXmlStr += "    <td class='label3'>" + this.grdAT_OWAPXD.getCellText(i,8) + "</td>";			/*종료시간*/
        		sXmlStr += "    <td class='label3'>" + this.dsAT_OWAPXD.getColumn(i,"WORK_TIME") + "</td>";	/*시간*/
        		sXmlStr += "    <td class='label2'>" + this.dsAT_OWAPXD.getColumn(i,"REMK_RESN") + "</td>";	/*사유*/	
        		sXmlStr += "  </tr>";
        	}
        	sXmlStr += "</table>";	
        	
        	var nRow = this.dsTM_APPROVAL.addRow();
        		
        	this.dsTM_APPROVAL.setColumn(nRow, "documentID", sApprDocId);				/*문서번호*/
        	this.dsTM_APPROVAL.setColumn(nRow, "documentType", this.sDOCUID);			/*문서종류*/
        	this.dsTM_APPROVAL.setColumn(nRow, "HtmlDocument", sXmlStr);				/*결재문서에 그릴HTML*/
        	this.dsTM_APPROVAL.setColumn(nRow, "subject", sSubject);					/*결재문서 제목*/
        	this.dsTM_APPROVAL.setColumn(nRow, "recipient", application.GBL_EMPLNO);    /*기안자사번- 샘플로 gwtest07*/
        	this.dsTM_APPROVAL.setColumn(nRow, "creator", application.GBL_USERNM);		/*기안자성명*/
        	this.dsTM_APPROVAL.setColumn(nRow, "documentStatus", sGubn);				/*결재문서 생성:createDoc, 기안대기문서 삭제:deleteDoc*/
        	this.dsTM_APPROVAL.setColumn(nRow, "isUsedFile", "F");						/*첨부파일여부*/
        	
        	var sMethodName = "sendApproval";
        	var sInDataSet 	= "dsTM_APPROVAL=dsTM_APPROVAL:U"
        	var sOutDataSet = "";
        	var sArgument	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, "gw", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
         }
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
         /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
         this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	if (obj.name == "grdAT_OWAPXD") {	
        		if (sColumnID == "EMPL_NAME" || this.fnc_getGridHelpColName(obj, sFromDs) == "EMPL_NAME") {
        		
        			arrParam[0] = "HRM0051"; 
        			arrParam[1] = "";
        			arrParam[2] = "EMPL_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdAT_OWAPXD";
        			arrParam[5] = "EMPL_NUMB,EMPL_NAME,DEPT_CODE,DEPT_NAME,OPOS_CODE,OPOS_NAME";  
        			arrParam[6] = "0,1,3,4,5,6";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        			
        		}
        	}

        }

        
         /*-----------------------+
         |  헤더 click 시        |
         +------------------------*/
        this.grdTM_APPRXH_onheadclick = function(obj,e)
        {
        	
        	if(e.col == 0){	
        		this.fnc_GridAllCheck(this.grdAT_OWAPXD,"CHK_BOX");	
        	}
        }

        this.dsAT_OWAPXD_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "STRT_TIME"){		
        		var diff_time = 0;
        		if (this.dsAT_OWAPXD.getColumn(e.row,"ENDX_TIME") == null){
        			
        		}else{
        			diff_time = this.dsAT_OWAPXD.getColumn(e.row,"ENDX_TIME") - e.newvalue;
        		}
        		this.dsAT_OWAPXD.setColumn(e.row,"WORK_TIME",diff_time);
        	}else if(e.columnid == "ENDX_TIME"){
        		var diff_time = 0;
        		if (this.dsAT_OWAPXD.getColumn(e.row,"STRT_TIME") == null){
        			
        		}else{
        			diff_time = e.newvalue - this.dsAT_OWAPXD.getColumn(e.row,"STRT_TIME");
        		}
        		this.dsAT_OWAPXD.setColumn(e.row,"WORK_TIME",diff_time);
        	}
        }

        this.dsAT_OWAPXD_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "WORK_DATE"){
        		trace(this.dsAT_OWAPXD.getColumn(e.row,"WORK_DATE"));
        		this.fn_getMagamYsno();
        	}
        	
        	if (e.columnid == "EMPL_NAME") {
        		this.fn_HelpDialoge(this.grdAT_OWAPXD, "YES", e.oldvalue, e.columnid);
        	}
        }

        this.grdAT_OWAPXD_onheadclick = function(obj,e)
        {
        	if(e.col == 0){	
        		this.fnc_GridAllCheck(this.grdAT_OWAPXD,"CHK_BOX");	
        	}
        }

        this.btn_PROC_OnClick = function(obj,e)
        {
        	this.fn_apprProcess("createDoc");
        }

        this.btn_CANC_onclick = function(obj,e)
        {
        	this.fn_apprProcess("deleteDoc");
        }

        this.grdAT_OWAPXD_oncellclick = function(obj,e)
        {		
        	if(e.col =="7" || e.col == "8"){
        		if(this.dsAT_OWAPXD.getColumn(e.row,6) == null){
        			this.fnc_Message("TMM125", "시간외구분을 선택해주세요");
        		}
        	}		
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsAT_OWAPXD.addEventHandler("cancolumnchange", this.dsAT_OWAPXD_cancolumnchange, this);
            this.dsAT_OWAPXD.addEventHandler("oncolumnchanged", this.dsAT_OWAPXD_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);
            this.btn_CANC.addEventHandler("onclick", this.btn_CANC_onclick, this);
            this.grdAT_OWAPXD.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdAT_OWAPXD.addEventHandler("onheadclick", this.grdAT_OWAPXD_onheadclick, this);
            this.grdAT_OWAPXD.addEventHandler("ondropdown", this.grdAT_OWAPXD_ondropdown, this);
            this.grdAT_OWAPXD.addEventHandler("oncellclick", this.grdAT_OWAPXD_oncellclick, this);

        };

        this.loadIncludeScript("HATC0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
