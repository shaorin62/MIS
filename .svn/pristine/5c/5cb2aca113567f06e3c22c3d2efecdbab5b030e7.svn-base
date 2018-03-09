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
                this.set_name("HATC0040");
                this.set_titletext("휴가신청취소");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAT_HDCPXD", this);
            obj._setContents("<ColumnInfo><Column id=\"DOCU_IDXX\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN\" size=\"11\" prop=\"default\" type=\"STRING\"/><Column id=\"CNCL_IDXX\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CNCL_SEQN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CNCL_RESN\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"CNCL_DATE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"STRT_DATE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_DATE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"HOLY_RESN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"TRGT_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"TRGT_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CNCL_IDXX_SEQN\" size=\"10\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_APPROVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"documentID\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"documentType\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"HtmlDocument\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"subject\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"recipient\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"creator\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"documentStatus\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"isUsedFile\" size=\"3\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_APPRXH", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_BOX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DOCU_IDXX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBJ_NAME\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_STR\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_PROC\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_DATE\" size=\"12\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYN\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">WORK_GUBN</Col><Col id=\"DSNAME\">dsWORK_GUBN</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYN\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAT_HDAPXD", this);
            obj._setContents("<ColumnInfo><Column id=\"DOCU_IDXX\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN\" size=\"11\" prop=\"default\" type=\"STRING\"/><Column id=\"TRGT_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"TRGT_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_GUBN\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_DATE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_TIME\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"STRT_DATE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_DATE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"HOLY_RESN\" size=\"10\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTime", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"10\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">1</Col><Col id=\"CODEID\">1</Col></Row><Row><Col id=\"DSNAME\">0.5</Col><Col id=\"CODEID\">0.5</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAT_ENDDXM", this);
            obj._setContents("<ColumnInfo><Column id=\"ATTE_YMTH\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDD_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "92", "25", null, this);
            obj.set_taborder("11");
            obj.set_cssclass("styFormItemBoxOut");
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
            obj.set_taborder("6");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_text("휴가신청취소");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("8");
            obj.set_text("홈 > 1메뉴 > 자금계획관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("9");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "29", "95", "68", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("취소사유");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "29", "121", "68", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("휴가기간");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "89", null, null, this);
            obj.set_taborder("14");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("15");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("16");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "557", "56", "128", "4", null, null, this);
            obj.set_taborder("17");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "709", "69", "100", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("이전신청서");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCNCL_IDXX_SEQN", "absolute", "790", "69", "80", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCNCL_IDXX", "absolute", "872", "69", "21", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTRGT_EMPL", "absolute", "443", "121", "80", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpTRGT_EMPL", "absolute", "525", "121", "21", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_cssclass("sytHelpPopup");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTRGT_NAME", "absolute", "548", "121", "100", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("22");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC", "absolute", "8", "35", "74", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("결재상신");
            obj.set_cssclass("btn_WF_Module");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("24");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CANC", "absolute", "85", "35", "74", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("결재취소");
            obj.set_cssclass("btn_WF_Module");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSUBJ_NAME", "absolute", "123", "69", "524", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "29", "69", "68", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("제목");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "709", "95", "92", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("취소신청일");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Calendar("calCNCL_DATE", "absolute", "790", "95", "103", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static28", "absolute", "290", "142", "38", "8", null, null, this);
            obj.set_taborder("28");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "290", "61", "38", "8", null, null, this);
            obj.set_taborder("29");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "647", "61", "40", "91", null, null, this);
            obj.set_taborder("30");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "361", "121", "79", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("휴가대상자");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCNCL_RESN", "absolute", "123", "95", "524", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_maxlength("66");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSTRT_DATE", "absolute", "123", "121", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");

            obj = new Static("Static55", "absolute", "225", "121", "14", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calENDX_DATE", "absolute", "240", "121", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");

            obj = new Edit("edtHOLY_RESN", "absolute", "790", "121", null, "21", "51", null, this);
            obj.set_taborder("35");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "709", "121", "73", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("휴가사유");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAT_HDAPXD", "absolute", "8", "186", null, null, "25", "46", this);
            obj.set_taborder("37");
            obj.set_binddataset("dsAT_HDAPXD");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_enable("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"사원번호\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"휴가날짜\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_essential\" text=\"휴가일수\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_essential\" text=\"휴가구분\"/></Band><Band id=\"body\"><Cell text=\"bind:TRGT_EMPL\"/><Cell col=\"1\" text=\"bind:TRGT_NAME\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" text=\"bind:WORK_DATE\" calendardisplay=\"edit\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"align: ;\" text=\"bind:WORK_TIME\" editdisplay=\"display\" combodataset=\"dsTime\" combocodecol=\"CODEID\" combodatacol=\"DSNAME\" combodisplay=\"edit\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:WORK_GUBN\" combodisplay=\"edit\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static90", "absolute", "8", "162", "176", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("취소신청 상세내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("휴가신청취소");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edtSUBJ_NAME","value","dsTM_APPRXH","SUBJ_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtCNCL_RESN","value","dsAT_HDCPXD","CNCL_RESN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtCNCL_IDXX_SEQN","value","dsAT_HDCPXD","CNCL_IDXX_SEQN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","calCNCL_DATE","value","dsAT_HDCPXD","CNCL_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","calSTRT_DATE","value","dsAT_HDAPXD","STRT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","calENDX_DATE","value","dsAT_HDAPXD","ENDX_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edtTRGT_EMPL","value","dsAT_HDAPXD","TRGT_EMPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edtTRGT_NAME","value","dsAT_HDAPXD","TRGT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtHOLY_RESN","value","dsAT_HDAPXD","HOLY_RESN");
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
        this.addIncludeScript("HATC0040.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HATC0040.xfdl", function() {
        /****************************************************************************************************
        /*
         * @explanation		휴가신청등록
         * @category	 	인사관리>근태신청>휴가취소신청등록
         * @author	   		이창운
         * @cdate	  		2016.09.27
         * @version 1.0		최초 작성
         * HATC0030.xml - <Created by Code Template generator>
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
        this.sBUTTONLIST  = "TTFFFTFF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "HATC0040"; 
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

        	var iNowDate = this.fnc_GetServerDateTime("DATE");
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
        		this.div_ButtonList.btnSave.set_enable(false);
        	}else if(this.parent.sAPPRGUBN == "del"){ /*취소일때*/
        		this.btn_CANC.set_enable(true);
        		this.fn_formNotEnable();
        		this.div_ButtonList.btnSave.set_enable(false);
        	}
        	
        	if(this.parent.sAPPRSTAT != "N" && this.parent.sAPPRSTAT != null){
        		this.fn_formNotEnable();
        		this.div_ButtonList.btnSave.set_enable(false);
        	}
        	
        	if(this.parent.sAPPRSEQN == null || this.parent.sAPPRSEQN == ""){
        		
        		this.dsTM_APPRXH.addRow();
        		this.dsTM_APPRXH.setColumn(0,"DOCU_IDXX",this.sDOCUID);
        		this.dsTM_APPRXH.setColumn(0,"EMPL_NUMB",application.GBL_EMPLNO);
        		this.dsTM_APPRXH.setColumn(0,"APPR_STAT","N");
        		this.dsTM_APPRXH.setColumn(0,"SUBJ_NAME","휴가취소신청");
        		this.dsTM_APPRXH.setColumn(0,"DEPT_CODE",application.GBL_DEPTCD);		
        		
        		this.dsAT_HDCPXD.addRow();
        		
        		this.calSTRT_DATE.set_value(this.fnc_SubStr(iNowDate));
        		this.dsAT_HDCPXD.setColumn(0,"DOCU_IDXX",this.sDOCUID);
        		this.dsAT_HDCPXD.setColumn(0,"CNCL_IDXX","KHR111");
        		this.dsAT_HDCPXD.setColumn(0,"CNCL_SEQN","2016092700001");		
        		this.calCNCL_DATE.set_value(this.fnc_SubStr(iNowDate)); 
        		this.calSTRT_DATE.set_value(this.fnc_SubStr(iNowDate)); 
        		this.calENDX_DATE.set_value(this.fnc_SubStr(iNowDate)); 
        		
        	}else{
        		this.sKeyValue = this.parent.sAPPRSEQN;
        		this.fnc_DatasetClear('dsTM_APPRXH');
        		this.fnc_DatasetClear('dsAT_HDCPXD');
        		this.fnc_DatasetClear('dsAT_HDAPXD');
        		var sMethodName = "SEARCH00";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsAT_HDCPXD=dsAT_HDCPXD dsTM_APPRXH=dsTM_APPRXH dsAT_HDAPXD=dsAT_HDAPXD";
        		var sArgument   = this.fn_CreateArgument(sMethodName);

        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		this.edtSUBJ_NAME.setFocus();
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
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsAT_HDCPXD");
        	this.fnc_DataSetCancel("dsTM_APPRXH");	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsAT_HDCPXD=dsAT_HDCPXD:U dsTM_APPRXH=dsTM_APPRXH:A";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	//this.edtSubject.setFocus();
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
        	
        	if (this.fnc_DatasetChangeCheck("dsAT_HDCPXD")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	if (!this.fnc_DatasetChangeCheck("dsAT_HDCPXD") && !this.fnc_DatasetChangeCheck("dsTM_APPRXH") ) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.dsTM_APPRXH.getColumn(0, "SUBJ_NAME"))) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "제목", this.dsTM_APPRXH, 0, this.edtSubject, "SUBJ_NAME");
        	}
        	
        	
        	// 휴가취소신청 입력사항
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsAT_HDCPXD.getRowCount(); i++) {

        		//변경된 로우만 체크
        		if (this.fnc_ToUpper(this.dsAT_HDCPXD.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_HDCPXD.getColumn(i, "CNCL_IDXX_SEQN"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "이전신청서", this.dsAT_HDCPXD, i, this.edtCNCL_IDXX_SEQN, "CNCL_IDXX_SEQN");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_HDCPXD.getColumn(i, "CNCL_RESN"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "취소사유", this.dsAT_HDCPXD, i, this.edtCNCL_RESN, "CNCL_RESN");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_HDCPXD.getColumn(i, "CNCL_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "취소신청일", this.dsAT_HDCPXD, i, this.calAT_HDCPXD, "CNCL_DATE");
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
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " DOCU_IDXX=" + this.parent.sDOCUIDXX;
        		sReturnString += " APPR_SEQN=" + this.parent.sAPPRSEQN; 	
        	
        	} else if (sKind == 'SEARCH01') {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " CNCL_IDXX=" + this.dsAT_HDCPXD.getColumn(0,"CNCL_IDXX");
        		sReturnString += " CNCL_SEQN=" + this.dsAT_HDCPXD.getColumn(0,"CNCL_SEQN");
        	
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);	
        		
        	} else if (sKind == "GetCommCode") {
        		var arrParam = new Array();
        		arrParam[0] = "GRID,grdAT_HDCPXD,dsWORK_GUBN,WORK_GUBN"; //SHR 신청서 종류SHR 
        		this.dsWORK_GUBN.filter("COMD_CODE ==4 || COMD_CODE ==6");
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	} else if (sKind == "SEARCH03") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);	
        		sReturnString += " ATTE_YMTH=" + this.fnc_SubStr(this.sATTE_YMTH,0,6);
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
        	
        		this.fn_getCnclInfo();
        		
        	}   else if (sMethodName == "SAVE00") {
        		this.parent.sKeyValue = this.sKeyValue;
        		this.fnc_Message("TMM103");
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
        		arrParam[0] = "GRID,grdAT_HDAPXD,dsWORK_GUBN,WORK_GUBN"; //SHR 신청서 종류SHR 
        		this.dsWORK_GUBN.filter("COMD_CODE == '4' || COMD_CODE == '6'"); //4:연차, 6:정기휴가
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	}
        }

        /*-----------------+
         |  팝업 CallBack  |
         +-----------------*/
        this.fn_popupAfter = function(sPopupId,Variant) {
        	
        	//전표번호선택조회 팝업
        	if (sPopupId == "HATC0040P01") {
        	
        		var sResponse = this.fnc_GetPopupRtn();
        		
        		if (sResponse instanceof Array) {
        		
        			if (!this.IsNull(sResponse)) {
        			
        				if(sResponse[3] == "Y" || sResponse[4] == "Y"){
        					this.fnc_Message("TMM125", "근태마감으로 취소할수 없습니다.");
        				}else{
        					this.dsAT_HDCPXD.setColumn(0,"CNCL_IDXX",sResponse[0]);
        					this.dsAT_HDCPXD.setColumn(0,"CNCL_SEQN",sResponse[1]);				
        					this.dsAT_HDCPXD.setColumn(0,"CNCL_IDXX_SEQN",sResponse[2]);
        					
        					this.fn_getCnclInfo();
        				}
        			}	
        		}
        	} 
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
         
         
         /*전체화면 비활성화*/
         this.fn_formNotEnable = function(){
        	this.edtSUBJ_NAME.enable = false;
        	this.edtCNCL_RESN.enable = false;	
        	this.calCNCL_DATE.enable = false;
        	this.edtCNCL_IDXX_SEQN.enable = false;
        	this.imgHelpCNCL_IDXX.enable = false;
        	
         }
         
         /* 취소상세내역 조회*/
         this.fn_getCnclInfo = function(){
        	this.fnc_DatasetClear('dsAT_HDAPXD');
        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsAT_HDAPXD=dsAT_HDAPXD";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
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
        	sXmlStr += "  <col width=20%>";
        	sXmlStr += "  <col width=30%>";
        	sXmlStr += "  <col width=15%>";
        	sXmlStr += "  <col width=35%>";
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td class='label1'>이전신청서</td>";
        	sXmlStr += "    <td class='label3'>" + this.dsAT_HDCPXD.getColumn(0,"CNCL_IDXX_SEQN")+"</td>";	
        	sXmlStr += "    <td class='label1'>취소신청일</td>";
        	sXmlStr += "    <td class='label3'>" + this.fn_strToDate(this.dsAT_HDCPXD.getColumn(0,"CNCL_DATE"))+"</td>";	
        	sXmlStr += "  </tr>";
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td class='label1'>취소사유</td>";
        	sXmlStr += "    <td class='label2' colspan='3'>" + this.dsAT_HDCPXD.getColumn(0,"CNCL_RESN") + "</td>";	
        	sXmlStr += "  </tr>";
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td colspan='4'><br>&nbsp;※취소휴가 상네내역 </td>";
        	sXmlStr += "  </tr>";
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td class='label1'>휴가대상자</td>";
        	sXmlStr += "    <td class='label3'>" + this.dsAT_HDCPXD.getColumn(0,"TRGT_NAME") + "("+ this.dsAT_HDCPXD.getColumn(0,"TRGT_EMPL") +")</td>";	
        	sXmlStr += "    <td class='label1'>휴가기간</td>";
        	sXmlStr += "    <td class='label3'>" + this.fn_strToDate(this.dsAT_HDCPXD.getColumn(0,"STRT_DATE")) + " ~ "+ this.fn_strToDate(this.dsAT_HDCPXD.getColumn(0,"ENDX_DATE")) +"</td>";	
        	sXmlStr += "  </tr>";
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td class='label1'>휴가사유</td>";
        	sXmlStr += "    <td class='label2' colspan='3'>" + this.dsAT_HDCPXD.getColumn(0,"HOLY_RESN") + "</td>";	
        	sXmlStr += "  </tr>";
        	sXmlStr += "</table>";	
        	sXmlStr += "<table style='width:670px;border:1px'>";
        	sXmlStr += "  <col width=20%>";
        	sXmlStr += "  <col width=20%>";
        	sXmlStr += "  <col width=20%>";
        	sXmlStr += "  <col width=15%>";
        	sXmlStr += "  <col width=25%>";
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td class='label1'>사원번호</td>";
        	sXmlStr += "    <td class='label1'>성명</td>";
        	sXmlStr += "    <td class='label1'>휴가날짜</td>";
        	sXmlStr += "    <td class='label1'>휴가일수</td>";
        	sXmlStr += "    <td class='label1'>휴가구분</td>";
        	sXmlStr += "  </tr>";
        	
        	for(var i = 0; i < this.dsAT_HDAPXD.getRowCount(); i++){
        		sXmlStr += "  <tr>";
        		sXmlStr += "    <td class='label3'>" + this.dsAT_HDAPXD.getColumn(i,"TRGT_EMPL") + "</td>";  /*사원번호*/
        		sXmlStr += "    <td class='label3'>" + this.dsAT_HDAPXD.getColumn(i,"TRGT_NAME") + "</td>";  /*성명*/
        		sXmlStr += "    <td class='label3'>" + this.fn_strToDate(this.dsAT_HDAPXD.getColumn(i,"WORK_DATE")) + "</td>";	 /*휴가날짜*/
        		sXmlStr += "    <td class='label3'>" + this.grdAT_HDAPXD.getCellText(i,3) + "</td>";		 /*휴가일수*/
        		sXmlStr += "    <td class='label3'>" + this.grdAT_HDAPXD.getCellText(i,4) + "</td>";		 /*휴가구분*/
        		sXmlStr += "  </tr>";
        	}
        	sXmlStr += "</table>";	
        	
        	var nRow = this.dsTM_APPROVAL.addRow();
        	
        	this.dsTM_APPROVAL.setColumn(nRow, "documentID", sApprDocId);				/*문서번호*/
        	this.dsTM_APPROVAL.setColumn(nRow, "documentType", this.sDOCUID);			/*문서종류*/
        	this.dsTM_APPROVAL.setColumn(nRow, "HtmlDocument", sXmlStr);				/*결재문서에 그릴HTML*/
        	this.dsTM_APPROVAL.setColumn(nRow, "subject", sSubject);						/*결재문서 제목*/
        	this.dsTM_APPROVAL.setColumn(nRow, "recipient", application.GBL_EMPLNO);	/*기안자사번- 샘플로 gwtest07*/
        	this.dsTM_APPROVAL.setColumn(nRow, "creator", application.GBL_USERNM);		/*기안자성명*/
        	this.dsTM_APPROVAL.setColumn(nRow, "documentStatus", sGubn);					/*결재문서 생성:createDoc, 기안대기문서 삭제:deleteDoc*/
        	this.dsTM_APPROVAL.setColumn(nRow, "isUsedFile", "F");						/*첨부파일여부*/
        	
        	var sMethodName = "sendApproval";
        	var sInDataSet 	= "dsTM_APPROVAL=dsTM_APPROVAL:U"
        	var sOutDataSet = "";
        	var sArgument	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, "gw", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
         }
         
         /*문자열 날짜전환*/
        this.fn_strToDate = function(str) {
        	var sDate = "";
        	sDate = str.substr(0,4) + "." + str.substr(4,2) + "." + str.substr(6,2);
        	return sDate;
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
         /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
         this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	if ((obj.name == "imgHelpTRGT_EMPL") || (obj.name == "edtTRGT_NAME")) {

        		arrParam[0] = "HRM0004"; //HRM0001
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtTRGT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtTRGT_NAME";
        		arrParam[5] = "edtTRGT_EMPL,edtTRGT_NAME";
        		arrParam[6] = "0,1";
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	}else if (obj.name == "imgHelpCNCL_IDXX"){
        	
        		var sOpenStyle  = "modeless=false";           //Open Sytle(되도록 Modal 사용)
        			sOpenStyle += ",autosize=true";           //Autosize true면 width, Height 안먹음
        			sOpenStyle += ",top=-1";                  //원하는 위치(단 -1은 소유창의 Middle)
        			sOpenStyle += ",left=-1";                 //원하는 위치(단 -1은 소유창의 Center)
        			sOpenStyle += ",width=00";                //현재 반응 없음
        			sOpenStyle += ",height=200";              //현재 반응 없음
        			sOpenStyle += ",title=true";              //Form Title Bar Visible 여부
        			sOpenStyle += ",titletext=휴가신청내역조회";    //Form Title Bar Visible 여부
        			sOpenStyle += ",status=false";            //Form Title Bar Visible 여부
        			sOpenStyle += ",resizable=true";          //Form Title Bar Visible 여부
        		
        		this.fnc_OpenPopup("HATC0040P01", "hat::HATC0040P01.xfdl", {}, sOpenStyle, this.fn_popupAfter);
        	}
        }

        this.btn_PROC_onClick = function(obj,e)
        {
        	this.fn_apprProcess("createDoc");
        }

        this.btn_CANC_onClick = function(obj,e)
        {
        	this.fn_apprProcess("deleteDoc");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsAT_HDCPXD.addEventHandler("cancolumnchange", this.dsAT_HDAPXH_cancolumnchange, this);
            this.dsAT_HDCPXD.addEventHandler("oncolumnchanged", this.dsAT_HDAPXH_oncolumnchanged, this);
            this.dsTM_APPROVAL.addEventHandler("oncolumnchanged", this.dsHR_GRTINS_oncolumnchanged, this);
            this.dsAT_HDAPXD.addEventHandler("oncolumnchanged", this.dsAT_HDAPXD_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.imgHelpCNCL_IDXX.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpTRGT_EMPL.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_PROC.addEventHandler("onclick", this.btn_PROC_onClick, this);
            this.btn_CANC.addEventHandler("onclick", this.btn_CANC_onClick, this);
            this.grdAT_HDAPXD.addEventHandler("oncellclick", this.grdAT_HDAPXD_oncellclick, this);
            this.grdAT_HDAPXD.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("HATC0040.xfdl");
        this.loadPreloadList();
       
    };
}
)();
