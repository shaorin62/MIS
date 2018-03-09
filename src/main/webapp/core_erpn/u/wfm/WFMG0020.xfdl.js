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
                this.set_name("WFMG0020");
                this.set_titletext("연수지원신청");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCW_TRAPXM", this);
            obj.set_enableevent("true");
            obj._setContents("<ColumnInfo><Column id=\"DOCU_IDXX\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBJ_NAME\" type=\"STRING\" size=\"150\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"10\"/><Column id=\"WOTM_YCNT\" type=\"STRING\" size=\"2\"/><Column id=\"TRAI_BEDE\" type=\"STRING\" size=\"8\"/><Column id=\"TRAI_ENDD\" type=\"STRING\" size=\"8\"/><Column id=\"TRAI_PROD\" type=\"STRING\" size=\"5\"/><Column id=\"TRPL_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"TRAI_PLAN\" type=\"STRING\" size=\"1000\"/><Column id=\"TRSP_COST\" type=\"STRING\" size=\"15\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"OPOS_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"ENCO_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"WOTM_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"APPR_STAT\" type=\"STRING\" size=\"3\"/><Column id=\"ZERO_YSNO\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_APPRXH", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_BOX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DOCU_IDXX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBJ_NAME\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_STR\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_PROC\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_DATE\" size=\"12\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_APPROVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"documentID\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"documentType\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"HtmlDocument\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"subject\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"recipient\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"creator\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"documentStatus\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"isUsedFile\" size=\"3\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/><Column id=\"COST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "41", "25", null, this);
            obj.set_taborder("36");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("31");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("32");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("33");
            obj.set_text("연수지원신청");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("34");
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
            obj.set_taborder("35");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "29", "70", "80", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_text("제목");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "60", "30", "41", null, null, this);
            obj.set_taborder("37");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "30", "80", "29", null, null, this);
            obj.set_taborder("38");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("39");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("40");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("41");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSubject", "absolute", "110", "70", null, "21", "243", null, this);
            obj.set_taborder("7");
            obj.set_maxlength("150");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("42");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC", "absolute", "8", "35", "74", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_text("결재상신");
            obj.set_cssclass("btn_WF_Module");
            obj.set_enable("false");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("43");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CANC", "absolute", "85", "35", "74", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_text("결재취소");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("spEditBox01", "absolute", "8", "105", null, "228", "25", null, this);
            obj.set_taborder("44");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtWOTM_YCNT", "absolute", "798", "113", "83", "21", null, null, this);
            obj.set_cssclass("styFormItemCapBE");
            obj.set_readonly("true");
            obj.set_maxlength("0");
            obj.set_tabstop("true");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NUMB", "absolute", "112", "113", "80", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpEMPL_NUMB", "absolute", "194", "113", "21", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("sytHelpPopup");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NAME", "absolute", "217", "113", "100", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_maxlength("20");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calTRAI_BEDE", "absolute", "112", "165", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("false");

            obj = new Calendar("calWOTM_DATE", "absolute", "443", "139", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("false");
            obj.set_tabstop("true");

            obj = new Static("Static17", "absolute", "29", "166", "83", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("연수시작일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "29", "140", "68", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("입사일자");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "29", "114", "68", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("사원번호");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTRPL_NAME", "absolute", "112", "191", "532", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_maxlength("100");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "644", "106", "40", "89", null, null, this);
            obj.set_taborder("45");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "673", "115", "70", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("근속년");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "673", "140", "124", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("연수지원신청금액");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "9", "106", "30", "89", null, null, this);
            obj.set_taborder("46");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "1136", "106", "25", "89", null, null, this);
            obj.set_taborder("47");
            obj.set_text("w25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "141", "105", "38", "8", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "29", "216", "68", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("연수계획");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "316", "106", "40", "85", null, null, this);
            obj.set_taborder("49");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "346", "140", "92", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("근속발생일자");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "346", "113", "97", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("부서/직위");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calENCO_DATE", "absolute", "112", "139", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            obj.set_autoselect("false");
            obj.set_tabstop("true");
            obj.set_enable("true");

            obj = new Static("Static23", "absolute", "346", "167", "92", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("연수종료일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Calendar("calTRAI_ENDD", "absolute", "443", "165", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Edit("edtTRAI_PROD", "absolute", "798", "166", "83", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_maxlength("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "966", "106", "38", "8", null, null, this);
            obj.set_taborder("50");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new TextArea("edtTRAI_PLAN", "absolute", "112", "217", "832", "108", null, null, this);
            obj.set_taborder("30");
            obj.set_maxlength("1000");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "29", "191", "68", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("연수장소");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "673", "166", "68", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("연수일수");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAME", "absolute", "443", "113", "108", "21", null, null, this);
            obj.set_cssclass("styFormItemCapBE");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOPOS_NAME", "absolute", "553", "113", "92", "21", null, null, this);
            obj.set_cssclass("styFormItemCapBE");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "541", "325", "38", "8", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtTRSP_COST", "absolute", "798", "139", "114", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_mask("9,999.999");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("52");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "104", "105", "8", "228", null, null, this);
            obj.set_taborder("53");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("sta_txt", "absolute", null, "34", "277", "21", "275", null, this);
            obj.set_taborder("54");
            obj.set_text("조회클릭 시 신청리스트로 돌아갑니다.");
            obj.set_cssclass("sta_WF_Desc01");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkZERO_YSNO", "absolute", "919", "138", "156", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("해외광고제 신청");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("연수지원신청");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edtEMPL_NAME","value","dsCW_TRAPXM","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtEMPL_NUMB","value","dsCW_TRAPXM","EMPL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtWOTM_YCNT","value","dsCW_TRAPXM","WOTM_YCNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","calTRAI_ENDD","value","dsCW_TRAPXM","TRAI_ENDD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edtTRAI_PLAN","value","dsCW_TRAPXM","TRAI_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","calWOTM_DATE","value","dsCW_TRAPXM","WOTM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edtTRAI_PROD","value","dsCW_TRAPXM","TRAI_PROD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","calENCO_DATE","value","dsCW_TRAPXM","ENCO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edtTRPL_NAME","value","dsCW_TRAPXM","TRPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtDEPT_NAME","value","dsCW_TRAPXM","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edtOPOS_NAME","value","dsCW_TRAPXM","OPOS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","calTRAI_BEDE","value","dsCW_TRAPXM","TRAI_BEDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtSubject","value","dsTM_APPRXH","SUBJ_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","edtTRSP_COST","value","dsCW_TRAPXM","TRSP_COST");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","chkZERO_YSNO","value","dsCW_TRAPXM","ZERO_YSNO");
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
        this.addIncludeScript("WFMG0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("WFMG0020.xfdl", function() {
        /****************************************************************************************************
        /*
         * @explanation		연수지원신청
         * @category	 	복리후생> 연수관리> 연수지원신청 
         * @author	   		김혜림
         * @cdate	  		2016.09.21
         * @version 1.0		최초 작성
         * WFMG0020.xml - <Created by Code Template generator>
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
        this.sBUTTONLIST  = "TTFTTTFF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "WFMG0020"; 
        this.sDOCUID 	  = "";
        this.sWOTM_YCNT   = ""; //DB에서 근속년수 조회할 때 필요 변수
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
        	/*권한에 따라 사원번호 수정 가능여부 결정*/
        	//this.sUSERLAVEL = "2";

        	/*연수지원 신청금액 공통코드 가져오기*/
            this.fn_GetCommCode();
           
        	switch(this.sUSERLAVEL){
                case "1": 
                	this.imgHelpEMPL_NUMB.set_enable(true); 	//검색조건 사원 선택
                	this.edtEMPL_NAME.set_readonly(false); 		//검색조건 사원명
                	break;
                }	
        	   
             if(this.parent.sAPPRGUBN == "del" || this.parent.sAPPRGUBN == "createDoc"){/*결재상신, 결재취소일 때 버튼을 막는다.*/
        		this.sBUTTONLIST  = "TTFFFFTF";
        	}else if (this.parent.sAPPRGUBN == "show"){
        		if(this.parent.sAPPRSTAT !="N"){ /*임시저장상태(N)가 아닐때 조회시 버튼을 막는다. 결재 임시저장상태는 수정 가능함*/
        			this.sBUTTONLIST  = "TTFFFFFF";
        		}
        	}
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo); //근속년수에 따른 연수지원금액 조회 

        	/*신청 및 내역에서 선택된 신청서 종류를 setting*/
        	this.sDOCUID = this.parent.sDOCUIDXX; //KHR143
        	/*상신일때*/
        	if(this.parent.sAPPRGUBN == "createDoc"){ 
        		this.btn_PROC.set_enable(true);
        		this.fn_formNotEnable(); // 내용 수정 막기
        	 /*취소일때*/
        	}else if(this.parent.sAPPRGUBN == "del"){
        		if(this.parent.sAPPRSTAT == "T"){ // 임시저장일때만 취소가능
        			this.btn_CANC.set_enable(true);
        			this.fn_formNotEnable(); // 내용 수정 막기
        		}
        	/*보기일때(임시저장상태일때는 수정가능함)*/ 	
        	}else if(this.parent.sAPPRGUBN == "show"){
        		if(this.parent.sAPPRSTAT != "N" && this.parent.sAPPRSTAT != null && this.parent.sAPPRSTAT != ""){ 
        			this.fn_formNotEnable();//내용 수정 막기
        		}
        	}

        	if(this.parent.sAPPRGUBN =="insert"){//신규 입력일때
        		//결재헤더추가
        		this.dsTM_APPRXH.addRow();
        		this.dsTM_APPRXH.setColumn(0,"DOCU_IDXX",this.sDOCUID);
        		this.dsTM_APPRXH.setColumn(0,"EMPL_NUMB",application.GBL_EMPLNO);
        		this.dsTM_APPRXH.setColumn(0,"APPR_STAT","N");
        		this.dsTM_APPRXH.setColumn(0,"SUBJ_NAME","연수지원신청서");
        		this.dsTM_APPRXH.setColumn(0,"DEPT_CODE",application.GBL_DEPTCD);
        		
        		//연수지원신청서 로우 추가
        		var iRow = this.dsCW_TRAPXM.addRow();// 초기에 입력버튼 안눌러도 되도록 미리 행추가 시켜 놓는다.
        		this.dsCW_TRAPXM.set_rowposition(iRow); 
        		this.dsCW_TRAPXM.setColumn(iRow,"DOCU_IDXX",this.sDOCUID);
        		
        		if(this.sUSERLAVEL !="1"){//★관리자 권한이 아닐때 사원자동셋팅
        		   this.dsCW_TRAPXM.setColumn(iRow,"EMPL_NAME",application.GBL_USERNM); //먼저 셋팅
        		   this.dsCW_TRAPXM.setColumn(iRow,"EMPL_NUMB",application.GBL_EMPLNO);
        		   this.fn_HelpDialoge(this.edtEMPL_NUMB, this.dsCW_TRAPXM, application.GBL_EMPLNO, "EMPL_NUMB");
        		}
        		this.edtSubject.setFocus();
        		

        	}else{ // 조회일때
        		this.fnc_DatasetClear('dsTM_APPRXH');
        		this.fnc_DatasetClear('dsCW_TRAPXM');
        		var sMethodName = "SEARCH00";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsCW_TRAPXM=dsCW_TRAPXM dsTM_APPRXH=dsTM_APPRXH";
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
        this.fn_Search = function (obj) { //결재리스트로 돌아간다.
        	if (!this.fn_SearchItemCheck()) return;
        	this.parent.sAPPRGUBN = "list";	
        	this.parent.sAPPRSEQN = "";
        	this.parent.sDOCUIDXX = "";
        	this.parent.fn_goMenu();
        	
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {  
        	//dsCW_TRAPXM 행이 1개여야된다.. 결재 1건씩만 가능
        	if(this.dsCW_TRAPXM.rowcount > 0 ){
        		this.edtSubject.setFocus();
        		return;
        	}else{
        		var iRow = this.dsCW_TRAPXM.addRow();
        		this.dsCW_TRAPXM.set_rowposition(iRow); 
        		this.dsCW_TRAPXM.setColumn(iRow,"DOCU_IDXX",this.sDOCUID);
        		this.dsTM_APPRXH.addRow();//결재헤더추가
        		this.dsTM_APPRXH.setColumn(0,"DOCU_IDXX",this.sDOCUID);
        		this.dsTM_APPRXH.setColumn(0,"EMPL_NUMB",application.GBL_EMPLNO);
        		this.dsTM_APPRXH.setColumn(0,"APPR_STAT","N");
        		this.dsTM_APPRXH.setColumn(0,"SUBJ_NAME","연수지원신청서");
        		this.dsTM_APPRXH.setColumn(0,"DEPT_CODE",application.GBL_DEPTCD);
        		
        	}
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) {
        		
        		this.dsCW_TRAPXM.deleteRow();
        		this.dsTM_APPRXH.deleteRow();
        		
        		//this.grdCW_TRAPXM.setFocus();
        	}

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsCW_TRAPXM");
        	this.fnc_DataSetCancel("dsTM_APPRXH");
        	this.fn_Input(obj);
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsCW_TRAPXM=dsCW_TRAPXM:A dsTM_APPRXH=dsTM_APPRXH:A";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
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
        	var sMessage = this.fnc_FormUnloadCheck("dsCW_TRAPXM", this);
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
        	
        	if (this.fnc_DatasetChangeCheck("dsCW_TRAPXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	} 
        	
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsCW_TRAPXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;	
        	}else{
        		var sQuestionText = "사원명 (" + this.fnc_Trim(this.dsCW_TRAPXM.getColumn(this.dsCW_TRAPXM.rowposition, "EMPL_NAME")) + ")";
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        	

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	if (!this.fnc_DatasetChangeCheck("dsCW_TRAPXM") && !this.fnc_DatasetChangeCheck("dsTM_APPRXH") ) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsCW_TRAPXM.getRowCount(); i++) {

        		
        		//if (this.fnc_ToUpper(this.dsCW_TRAPXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue; //변경된로우만체크
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_TRAPXM.getColumn(i, "EMPL_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사원명", this.dsCW_TRAPXM, i, this.edtEMPL_NAME, "EMPL_NAME");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_TRAPXM.getColumn(i, "TRSP_COST"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "연수지원금액", this.dsCW_TRAPXM, i, this.edtTRSP_COST, "TRSP_COST");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_TRAPXM.getColumn(i, "WOTM_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "근속발생일자", this.dsCW_TRAPXM, i, this.calWOTM_DATE, "WOTM_DATE");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_TRAPXM.getColumn(i, "TRAI_BEDE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "연수시작일", this.dsCW_TRAPXM, i, this.calTRAI_BEDE, "TRAI_BEDE");
        		}
        		
        		if(nexacro.toNumber(this.dsCW_TRAPXM.getColumn(i,"WOTM_DATE")) > nexacro.toNumber(this.dsCW_TRAPXM.getColumn(i,"TRAI_BEDE"))){
        			this.fnc_Message("TMM125", "근속발생일자가 연수시작일보다 클 수 없습니다.");
        			this.calTRAI_BEDE.setFocus();
        			return false;
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_TRAPXM.getColumn(i, "TRAI_ENDD"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "연수종료일", this.dsCW_TRAPXM, i, this.calTRAI_ENDD, "TRAI_ENDD");
        		}		
        		if(nexacro.toNumber(this.dsCW_TRAPXM.getColumn(i,"TRAI_BEDE")) > nexacro.toNumber(this.dsCW_TRAPXM.getColumn(i,"TRAI_ENDD"))){
        			this.fnc_Message("TMM125", "연수시작일이 종료일보다 클 수 없습니다.");
        			this.calTRAI_BEDE.setFocus();
        			return false;
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_TRAPXM.getColumn(i, "TRPL_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "연수장소", this.dsCW_TRAPXM, i, this.edtTRPL_NAME, "TRPL_NAME");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_TRAPXM.getColumn(i, "TRAI_PLAN"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "연수계획", this.dsCW_TRAPXM, i, this.edtTRAI_PLAN, "TRAI_PLAN");
        		}
        		for (var i = 0; i < this.dsTM_APPRXH.getRowCount(); i++) {
        		//변경된 로우만 체크
        		if (this.fnc_ToUpper(this.dsTM_APPRXH.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        			
        			if (this.fnc_Length(this.fnc_Trim(this.dsTM_APPRXH.getColumn(i, "SUBJ_NAME"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "제목", this.dsTM_APPRXH, i, this.edtSubject, "SUBJ_NAME");
        			}
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
        	
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);	
        	
        	} else if (sKind == "SEARCH03") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);	
        	
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
        	
        	if (sMethodName == 'SEARCH00') { /*사번은 키값이어서 수정 불가하다.*/
        		if(this.dsCW_TRAPXM.getRowType() != Dataset.ROWTYPE_INSERT){
        			this.imgHelpEMPL_NUMB.set_enable(false);
        			this.edtEMPL_NAME.set_readonly(true);
        			if(this.chkZERO_YSNO.value == "1"){
        				this.edtTRSP_COST.set_readonly(true);
        			}
        			
        			/*근속년수에 따라 연수지원 신청금액 셋팅*/
        			this.dsCombo.filter("CNT <="+this.edtWOTM_YCNT.value); 
        			if(this.chkZERO_YSNO.value!="1"){
        					if(this.dsCombo.rowcount > 0){
        						this.edtTRSP_COST.set_value(this.dsCombo.getColumn(0,"COST"));
        					}else{
        						this.edtTRSP_COST.set_value("");
        					}	
        			}
        		}
        		
        	} else if (sMethodName == "SAVE00") {
        		
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	
        	} else if (sMethodName == "sendApproval") {
        		/*결재연동 후처리 - 결재상신때만 해당 문서를 열어준다.*/
        		if (this.parent.sAPPRGUBN == "createDoc") {		
        			this.fnc_ShowApproval(this.parent.sAPPR_GUBN , this.dsTM_APPROVAL.getColumn(0, "documentID"), this.dsTM_APPROVAL.getColumn(0, "documentType"));
        		}

        		this.fn_Search();
        			
        	} else if (sMethodName ==  "SEARCH02") { /*근속년수 계산하여 담는 변수*/
        		if(this.sWOTM_YCNT!=null || this.sWOTM_YCNT!=""){
        			this.edtWOTM_YCNT.set_value(this.sWOTM_YCNT);
        			
        			
        			/*근속년수에 따라 연수지원 신청금액 셋팅*/
        			this.dsCombo.filter("CNT <="+this.sWOTM_YCNT); 
        			if(this.chkZERO_YSNO.value!="1"){
        					if(this.dsCombo.rowcount > 0){
        						this.edtTRSP_COST.set_value(this.dsCombo.getColumn(0,"COST"));
        					}else{
        						this.edtTRSP_COST.set_value("");
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
         
        	this.edtSubject.set_readonly(true);
        	this.edtEMPL_NAME.set_readonly(true);
        	this.edtDEPT_NAME.set_readonly(true);
        	this.edtTRSP_COST.set_readonly(true);
        	this.calENCO_DATE.set_readonly(true);
        	this.calWOTM_DATE.set_readonly(true);
        	this.edtWOTM_YCNT.set_readonly(true);
        	this.calTRAI_BEDE.set_readonly(true);
        	this.calTRAI_ENDD.set_readonly(true);
        	this.edtTRAI_PROD.set_readonly(true);
        	this.edtTRPL_NAME.set_readonly(true);
        	this.edtTRAI_PLAN.set_readonly(true);
        	this.edtOPOS_NAME.set_readonly(true);
        	this.chkZERO_YSNO.set_readonly(true);
         }

         /*결재상신 및 취소*/
          this.fn_apprProcess = function(sGubn){	/* sGubn 값으로 createDoc or deleteDoc 값을 받는다.*/
        	var sXmlStr = "";
        	var sSubject 	= this.dsTM_APPRXH.getColumn(0,"SUBJ_NAME"); 						
        	var sApprDocId	= this.sDOCUID + "-" + this.dsTM_APPRXH.getColumn(0,"APPR_SEQN");/*DOCU_IDXX 과 APPR_SEQN 조합*/ 
        	var iNowDate = this.fnc_GetServerDateTime("DATE");
        	sXmlStr  = "<style>td {border:1px solid black; Font-size:12px;  height:30px;}";
        	sXmlStr += ".label1 { background-color:#cccccc; font-weight:bold; text-align: center; }";
        	sXmlStr += ".label2 { padding-left: 5px; }";
        	sXmlStr += ".label3 { text-align: center; }";
        	sXmlStr += ".label4 { text-align: right; padding-right: 5px; }";
        	sXmlStr += "</style>";
        	sXmlStr += "<table style='width:670px;border:1px'>";
        	sXmlStr += "  <col width=10%>";
        	sXmlStr += "  <col width=13%>";
        	sXmlStr += "  <col width=20%>";
        	sXmlStr += "  <col width=11%>";
        	sXmlStr += "  <col width=17%>";
        	sXmlStr += "  <col width=11%>";
        	sXmlStr += "  <col width=18%>";
        	for(var i = 0; i < this.dsCW_TRAPXM.getRowCount(); i++){
        		sXmlStr += "  <tr>";
        		sXmlStr += "    <td class='label1' rowspan='2'>신청인</td>"; 			
        		sXmlStr += "    <td class='label1'>부서</td>"; 						
        		sXmlStr += "    <td class='label3'>" + this.dsCW_TRAPXM.getColumn(i,"DEPT_NAME") + "</td>";	/*부서*/
        		sXmlStr += "    <td class='label1'>직위</td>"; 							
        		sXmlStr += "    <td class='label3'>" + this.dsCW_TRAPXM.getColumn(i,"OPOS_NAME") + "</td>";	/*직위*/
        		sXmlStr += "    <td class='label1'>성명</td>"; 				
        		sXmlStr += "    <td class='label3'>" + this.dsCW_TRAPXM.getColumn(i,"EMPL_NAME") + "</td>";	/*성명*/
        		sXmlStr += "  </tr>";
        		sXmlStr += "  <tr>";
        		sXmlStr += "    <td class='label1'>입사일자</td>"; 
        		sXmlStr += "    <td class='label3' colspan='2'>" + this.fnc_GetMaskFormat(this.dsCW_TRAPXM.getColumn(i,"ENCO_DATE"), '@@@@년 @@월 @@일')+"</td>";	/*입사일자*/
        		sXmlStr += "    <td class='label1'>근속발생일자</td>"; 
        		sXmlStr += "    <td class='label3' colspan='2'>" + this.fnc_GetMaskFormat(this.dsCW_TRAPXM.getColumn(i,"WOTM_DATE"), '@@@@년 @@월 @@일')+ " ( "+this.dsCW_TRAPXM.getColumn(i,"WOTM_YCNT")+" 년 근속)"+ "</td>";	/*근속발생일자*/
        		sXmlStr += "  </tr>";
        		sXmlStr += "  <tr>";
        		sXmlStr += "    <td class='label1' rowspan='3'>연수사항</td>"; 	
        		sXmlStr += "    <td class='label1'>연수희망일</td>"; 
        		sXmlStr += "    <td class='label3' colspan='5'>"+ this.fnc_GetMaskFormat(this.dsCW_TRAPXM.getColumn(i,"TRAI_BEDE"), '@@@@년 @@월 @@일') +" ~ " + this.fnc_GetMaskFormat(this.dsCW_TRAPXM.getColumn(i,"TRAI_ENDD"), '@@@@년 @@월 @@일')+"</td>";/*연수희망일*/
        		sXmlStr += "  </tr>";
        		sXmlStr += "  <tr>";
        		sXmlStr += "    <td class='label1'>연수장소</td>"; 
        		sXmlStr += "    <td class='label3' colspan='5' style='text-align:left;padding-left:10px;'>" + this.dsCW_TRAPXM.getColumn(i,"TRPL_NAME") + "</td>";	/*연수장소*/
        		sXmlStr += "  </tr>";
        		sXmlStr += "  <tr>";
        		sXmlStr += "    <td class='label1'>연수계획</td>"; 
        		sXmlStr += "    <td class='label3' colspan='5' style='text-align:left;padding-left:10px;'>" + nexacro.replaceAll(this.dsCW_TRAPXM.getColumn(i,"TRAI_PLAN"), "\n", "<br/>")+"</td>";	/*연수계획*/
        		sXmlStr += "  </tr>";
        		sXmlStr += "  <tr>";
        		sXmlStr += "    <td class='label1'>연수지원<br/>신청금액</td>"; 
        		sXmlStr += "    <td class='label3' colspan='6' style='text-align:left;padding-left:10px;font-size:12px'>";
        		if(this.dsCW_TRAPXM.getColumn(i, "ZERO_YSNO") == "1"){
        			sXmlStr += " 해외광고제 신청";
        		}else{
        			sXmlStr += " 금 "+this.fnc_NumberToKorean(this.dsCW_TRAPXM.getColumn(i,"TRSP_COST"))+"원정"+" ( ￦"+this.fnc_AddComma(this.dsCW_TRAPXM.getColumn(i,"TRSP_COST"))+" )";
        		}
        		sXmlStr += "<div style='text-align:right; font-size:9px; padding-right:20px;line-height:5px'>"+"*해외광고제 신청시 작성 不"+"</div>"+"</td>";	/*연수계획*/
        		sXmlStr += "  </tr>";
        		sXmlStr += "  <tr>";
        		sXmlStr += "    <td class='label3' colspan='7' style='text-align:left; padding:50px 70px;'>" + "상기와 같이 연수 지원을 신청하오니 승인하여 주시기 바랍니다.";	/*연수계획*/
        		sXmlStr += "   <br/><br/><br/><br/><br/>";
        		sXmlStr += "<div style='text-align:right;'>"+this.fnc_SubStr(iNowDate, 0, 4) +"년 "+this.fnc_SubStr(iNowDate, 4, 2)+"월 "+this.fnc_SubStr(iNowDate, 6, 2)+"일 "+"</div>";	/*연수계획*/
        		sXmlStr += "   <br/><br/>";
        		sXmlStr += "<div style='text-align:right;'>"+this.dsCW_TRAPXM.getColumn(i,"EMPL_NAME")+"</td>"+"</div>";
        		sXmlStr += "  </tr>";
        	}
        	sXmlStr += "</table>";	
        	
        	var nRow = this.dsTM_APPROVAL.addRow();
        		
        	this.dsTM_APPROVAL.setColumn(nRow, "documentID", sApprDocId);				/*문서번호*/
        	this.dsTM_APPROVAL.setColumn(nRow, "documentType", this.sDOCUID);			/*문서종류*/
        	this.dsTM_APPROVAL.setColumn(nRow, "HtmlDocument", sXmlStr);				/*결재문서에 그릴HTML*/
        	this.dsTM_APPROVAL.setColumn(nRow, "subject", sSubject);					/*결재문서 제목*/
        	this.dsTM_APPROVAL.setColumn(nRow, "recipient", application.GBL_EMPLNO);    /*기안자사번- 샘플로 gwtest07*/
        	this.dsTM_APPROVAL.setColumn(nRow, "creator", application.GBL_USERNM);      /*기안자성명*/
        	this.dsTM_APPROVAL.setColumn(nRow, "documentStatus", sGubn);				/*결재문서 생성:createDoc, 기안대기문서 삭제:deleteDoc*/
        	this.dsTM_APPROVAL.setColumn(nRow, "isUsedFile", "F");						/*첨부파일여부*/
        	
        	var sMethodName = "sendApproval";
        	var sInDataSet 	= "dsTM_APPROVAL=dsTM_APPROVAL:U"
        	var sOutDataSet = "";
        	var sArgument	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, "gw", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
         }
         
         
        /*두 날짜의 일수를 구하기.*/
         this.fn_betweenDays = function(calDate1,calDate2){
        	var tmpDt1 = String(calDate1);
        	var tmpDt2 = String(calDate2);
        	
        	var dt1 = new Array(tmpDt1.substr(0,4),tmpDt1.substr(4,2)-1,tmpDt1.substr(6,2));
        	var dt2 = new Array(tmpDt2.substr(0,4),tmpDt2.substr(4,2)-1,tmpDt2.substr(6,2));
        	
        	var sDt = new Date(dt1[0],dt1[1],dt1[2]);
        	var eDt = new Date(dt2[0],dt2[1],dt2[2]);
        	var oneDay = 1000*60*60*24;
        	return ((eDt.getTime() - sDt.getTime())/oneDay)+1;
         }

        
        /*두 날짜의 개월수 구하기 (DB함수이용)*/
         this.fn_betweenMonths = function(calDate1,calDate2){
        	var sMethodName = "SEARCH02";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsWOTM_YCNT=dsWOTM_YCNT";
        	var sArgument = ""; 
        		sArgument += " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sArgument += " action="    + this.fnc_Quote(sMethodName);
        		sArgument += " WOTM_DATE=" + calDate1;
        		sArgument += " TRAI_BEDE=" + calDate2;
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

         }
         /*연수지원금액 공통코드 가져오기*/
         this.fn_GetCommCode = function(){
         	var sMethodName = "SEARCH03";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsCombo=dsCombo";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
         }
         
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                *
         ***************************************************************************************************/
         
         /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
         this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	if(obj.name == "imgHelpEMPL_NUMB" || obj.name == "edtEMPL_NAME" || obj.name =="edtEMPL_NUMB"){
        	
        			arrParam[0] = "WFM0005"; 
        			arrParam[1] = this.edtEMPL_NUMB.value + "%";
        			arrParam[2] = this.fnc_Trim(this.edtEMPL_NAME.value);
        			arrParam[3] = "Y";
        			arrParam[4] = "edtEMPL_NAME";
        			arrParam[5] = "edtEMPL_NUMB,edtEMPL_NAME,edtDEPT_NAME, edtOPOS_NAME, calENCO_DATE, calWOTM_DATE";
        			arrParam[6] = "0,1,3,5,6,7";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;

        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}

        }

        /*결재상신 및 결재취소 버튼처리*/

        this.btn_PROC_OnClick = function(obj,e)
        {
        this.fn_apprProcess("createDoc");
        }

        this.btn_CANC_onclick = function(obj,e)
        {
        this.fn_apprProcess("deleteDoc");
        }

        

        /*사원번호는 수정이 안된다. 키값이다.*/
        /*
        this.dsCW_TRAPXM_onrowposchanged = function(obj:Dataset, e:nexacro.DSRowPosChangeEventInfo)
        {	
        if (this.dsCW_TRAPXM.rowcount > 0){
        	if(this.dsCW_TRAPXM.getRowType(obj.rowposition) == Dataset.ROWTYPE_INSERT){
        		this.imgHelpEMPL_NUMB.set_enable(false);
        		this.edtEMPL_NAME.set_readonly(true);
        	}else{
        		//this.imgHelpEMPL_NUMB.set_enable(true);
        		//this.edtEMPL_NAME.set_readonly(false);
        	}
        }
        }*/

        

        
        /**연수일수와 근속년수를 구하기 위한 이벤트 처리**/
        this.dsCW_TRAPXM_cancolumnchange = function(obj,e)
        {	

        /**근속년수 계산**/
        if (e.columnid == "TRAI_BEDE") { //연수시작일자 변경될 때
        	if(e.newvalue !=""){
        		if(obj.getColumn(e.row, "WOTM_DATE")!= undefined && obj.getColumn(e.row, "WOTM_DATE")!=''){//근속년수시작일자와 계산해야되서 체크함
        			this.fn_betweenMonths(obj.getColumn(e.row, "WOTM_DATE"), e.newvalue); //DB로 근속년수 체크
        			//obj.setColumn(e.row, "WOTM_YCNT" , this.fn_betweenMonths(obj.getColumn(e.row, "WOTM_DATE"),obj.getColumn(e.row, "TRAI_BEDE")));
        		}else{
        			 obj.setColumn(e.row, "WOTM_YCNT" , "");
        		}
        	}
         }

        if (e.columnid == "WOTM_DATE") { //근속년수발생일자 변경될 때
        	if(e.newvalue !=""){
        		if(obj.getColumn(e.row, "TRAI_BEDE")!= undefined && obj.getColumn(e.row, "TRAI_BEDE")!=''){ //연수시작일자와 계산해야되서 체크함
        			this.fn_betweenMonths(e.newvalue, obj.getColumn(e.row, "TRAI_BEDE")); //DB로 근속년수 체크
        		}else{
        			 obj.setColumn(e.row, "WOTM_YCNT" , "");
        		}
        	}
         }

        /**연수일자 계산**/    	
         if (e.columnid == "TRAI_BEDE") { //연수시작일자 변경될때
        	if(e.newvalue !=""){
        		 if(obj.getColumn(e.row, "TRAI_ENDD")!= undefined && obj.getColumn(e.row, "TRAI_ENDD")!=''){ //연수종료일자 체크함
        			obj.setColumn(e.row, "TRAI_PROD" , this.fn_betweenDays(e.newvalue ,obj.getColumn(e.row, "TRAI_ENDD")));
        		  }else{
        				obj.setColumn(e.row, "TRAI_PROD" , "");
        			 }
        	 }
         }
        		
          if (e.columnid == "TRAI_ENDD") { //연수종료일자 변경될때
        	 if(obj.getColumn(e.row, "TRAI_BEDE")!= undefined && obj.getColumn(e.row, "TRAI_BEDE")!=''){//연수시작일자 체크함
        		obj.setColumn(e.row, "TRAI_PROD" , this.fn_betweenDays(obj.getColumn(e.row, "TRAI_BEDE"),e.newvalue));
        	  }else{
        			obj.setColumn(e.row, "TRAI_PROD" , "");
        		 }
          }
          
        }

        
        /*해외광고제 신청 체크*/
        this.chkZERO_YSNO_onclick = function(obj,e)
        {
        	if(obj.value == "1"){
        		this.edtTRSP_COST.set_value("0");
        		this.edtTRSP_COST.set_readonly(true);
        	}else if(obj.value == "0"){
        		//this.edtTRSP_COST.set_readonly(false);
        		
        		if(this.dsCombo.rowcount > 0){
        			if(this.edtWOTM_YCNT.value !="" && this.edtWOTM_YCNT.value !=null){
        				this.edtTRSP_COST.set_value(this.dsCombo.getColumn(0,"COST"));
        			}
        		}else{
        			this.edtTRSP_COST.set_value("");
        		}		
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsCW_TRAPXM.addEventHandler("cancolumnchange", this.dsCW_TRAPXM_cancolumnchange, this);
            this.dsCW_TRAPXM.addEventHandler("onrowposchanged", this.dsCW_TRAPXM_onrowposchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);
            this.btn_CANC.addEventHandler("onclick", this.btn_CANC_onclick, this);
            this.imgHelpEMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtEMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEMPL_NAME.addEventHandler("onchanged", this.fn_HelpDialoge, this);
            this.calTRAI_BEDE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtTRPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calTRAI_ENDD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtTRAI_PROD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtTRAI_PLAN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtTRSP_COST.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.sta_txt.addEventHandler("onclick", this.Static09_onclick, this);
            this.chkZERO_YSNO.addEventHandler("onchanged", this.chkZERO_YSNO_onclick, this);

        };

        this.loadIncludeScript("WFMG0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
