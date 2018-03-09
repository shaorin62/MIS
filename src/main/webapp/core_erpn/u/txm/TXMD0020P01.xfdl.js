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
                this.set_name("ACMB0055");
                this.set_titletext("지급명세서/영수증 출력");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,470,296);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRADIO", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LABEL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"LABEL\">전  체</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"LABEL\">소득자성명</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"LABEL\">소득자번호</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_INTEXD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PERS_NUMB\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SUPP_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_GUBN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_YYMM\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_GUBN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"EARN_CODE\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"REAL_GUBN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"FPRO_TYPE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"FPRO_CODE\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"INTE_CODE\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"STAN_CODE\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"TAXX_CODE\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"INTE_RATE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SUPP_KMAK\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"INTE_STDT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"INTE_EDDT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"TAXX_RATE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"GABG_SEKM\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"COMP_SEKM\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"JUMI_SEKM\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"NONS_SEKM\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SEKM_TOKM\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TAKE_DEPT\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"TAKE_USER\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"TAXX_CUTX\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"TAKE_DEPTNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TAKE_USERNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FORI_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RESI_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_NATI\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_JUMN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMP_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_POST\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_ADD1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_ADD2\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_CUSTXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JOBS_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_YYMM\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_NUMB\" size=\"7\" prop=\"default\" type=\"STRING\"/><Column id=\"OFFI_NAME\" size=\"40\" prop=\"default\" type=\"STRING\"/><Column id=\"JURI_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"CONP_ADDR\" size=\"300\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_ADDR\" size=\"300\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_BFNM\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CUTY_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"RETY_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"LFTY_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"NANY_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"LCUR_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"MGMT_DTCD\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SACH_EMNR\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCH_EMNR\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CITY_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BIZR_RGNB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"OWNR_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_NUMB\" size=\"13\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_STAT\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_TYPE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_NUMB\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR_DESC\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DTL1_ADDR\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"DTL2_ADDR\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"TELE_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"FAXX_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"ELTR_MLAD\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"MAJR_CUST\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"OPEN_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CLOS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"STBZ_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NOTE\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"TXAP_CUNM\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"MPBZ_NUMB\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"USEX_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"PUCD_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"RELT_STDT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"RELT_EDDT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"INCM_TYCD\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"FORI_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"RESI_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"JOBS_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BIZR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"RERN_NUMB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_INCMXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"INCM_TYCD\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_YYMM\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"SUPP_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"GITA_SEQX\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_GUBN\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_DCNT\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"SUPP_KMAK\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"NTAX_INCM\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"APPL_RATE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"GITA_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"POSS_DAYS\" size=\"3\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"OUTL_KMAK\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"GASE_TOKM\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TAXX_RATE\" size=\"5\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"INCM_TAXX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"COMP_SEKM\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"NONS_SEKM\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"INHA_TAXX\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SEKM_TOKM\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TAKE_DEPT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"TAKE_USER\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NOTE\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"GITA_RMR2\" size=\"60\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_GUBN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsACCT_GUBN</Col><Col id=\"COMBOID\">FAM0001</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYSNO\">0</Col><Col id=\"PARAM\">사업장</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Shape0", "absolute", "15", "137", null, "115", "15", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "15", "116", "243", "21", null, null, this);
            obj.set_text("출력대상 소득자 선택");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoPRNT_TYPE", "absolute", "33", "145", "304", "100", null, null, this);
            this.addChild(obj.name, obj);
            var rdoPRNT_TYPE_innerdataset = new Dataset("rdoPRNT_TYPE_innerdataset", this.rdoPRNT_TYPE);
            rdoPRNT_TYPE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전 체</Col><Col id=\"datacolumn\">0</Col></Row><Row><Col id=\"codecolumn\">소득자성명</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">소득자번호</Col><Col id=\"datacolumn\">2</Col></Row></Rows>");
            obj.set_innerdataset(rdoPRNT_TYPE_innerdataset);
            obj.set_taborder("4");
            obj.set_columncount("0");
            obj.set_rowcount("0");
            obj.set_value("0");
            obj.getSetter("class").set("styFormSearchRdo");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("LABEL");
            obj.set_innerdataset("dsRADIO");
            obj.set_index("0");

            obj = new Static("st_FormTitle", "absolute", "8", "8", null, "29", "8", null, this);
            obj.set_taborder("11");
            obj.set_cssclass("styFormTitle");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "15", "15", null, "95", "15", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "35", "78", "91", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("출력물 선택");
            obj.getSetter("class").set("styFormSearchCap");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbPRNT_GUBN", "absolute", "121", "78", "300", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cmbPRNT_GUBN_innerdataset = new Dataset("cmbPRNT_GUBN_innerdataset", this.cmbPRNT_GUBN);
            cmbPRNT_GUBN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">거주자의 사업소득 원천징수영수증(소득자보관용)</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">거주자의 사업소득 원천징수영수증(발행자보관용)</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">거주자의 기타소득 원천징수영수증(소득자보관용)</Col></Row><Row><Col id=\"codecolumn\">13</Col><Col id=\"datacolumn\">거주자의 기타소득 원천징수영수증(발행자보관용)</Col></Row><Row><Col id=\"codecolumn\">14</Col><Col id=\"datacolumn\">비거주자의 기타/사업소득 원천징수영수증(소득자보관용)</Col></Row><Row><Col id=\"codecolumn\">15</Col><Col id=\"datacolumn\">비거주자의 기타/사업소득 원천징수영수증(발행자보관용)</Col></Row><Row><Col id=\"codecolumn\">16</Col><Col id=\"datacolumn\">일용근로소득 지급명세서(소득자보관용)</Col></Row><Row><Col id=\"codecolumn\">17</Col><Col id=\"datacolumn\">일용근로소득 지급명세서(지급자보관용)</Col></Row></Rows>");
            obj.set_innerdataset(cmbPRNT_GUBN_innerdataset);
            obj.set_taborder("16");
            obj.getSetter("class").set("styFormSearchItem");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("10");
            obj.set_text("거주자의 사업소득 원천징수영수증(소득자보관용)");
            obj.set_index("0");

            obj = new Button("btnPrint", "absolute", "308", "260", "62", "24", null, null, this);
            obj.set_taborder("17");
            obj.style.set_imagealign("left");
            obj.set_text("출력");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose", "absolute", "373", "260", "62", "24", null, null, this);
            obj.set_taborder("18");
            obj.style.set_imagealign("left");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "35", "52", "91", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("귀속연도");
            obj.getSetter("class").set("styFormSearchCap");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "35", "26", "91", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("사업장");
            obj.getSetter("class").set("styFormSearchCapBE");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "121", "26", "300", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.getSetter("class").set("styFormSearchItem");
            obj.set_index("-1");

            obj = new Static("stTERM_GUBN", "absolute", "244", "52", "75", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("지급분기");
            obj.getSetter("class").set("styFormSearchCap");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbTERM_GUBN", "absolute", "312", "52", "109", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cmbTERM_GUBN_innerdataset = new Dataset("cmbTERM_GUBN_innerdataset", this.cmbTERM_GUBN);
            cmbTERM_GUBN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1/4분기</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2/4분기</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3/4분기</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4/4분기</Col></Row></Rows>");
            obj.set_innerdataset(cmbTERM_GUBN_innerdataset);
            obj.set_taborder("24");
            obj.getSetter("class").set("styFormSearchItem");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_text("1/4분기");
            obj.set_index("0");

            obj = new Calendar("calPERS_YEAR", "absolute", "121", "52", "70", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_type("spin");
            obj.getSetter("class").set("styFormItemCalendar");
            obj.set_dateformat("yyyy");
            obj.set_value("null");
            obj.set_editformat("yyyy");

            obj = new Static("Static02", "absolute", "0", "0", "15", "253", null, null, this);
            obj.set_taborder("26");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "455", "7", "15", "253", null, null, this);
            obj.set_taborder("27");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static108", "absolute", "134", "0", "216", "15", null, null, this);
            obj.set_taborder("28");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "244", "217", "18", "21", null, null, this);
            obj.set_text("∼");
            obj.style.set_background("transparent");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRANGE_EDDT", "absolute", "262", "217", "135", "21", null, null, this);
            obj.set_taborder("10");
            obj.getSetter("class").set("styFormSearchItem");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.set_maxlength("8");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_password("false");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPERS_NAME", "absolute", "118", "184", "279", "21", null, null, this);
            obj.set_taborder("8");
            obj.getSetter("class").set("styFormSearchItem");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_password("false");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRANGE_STDT", "absolute", "118", "217", "126", "21", null, null, this);
            obj.set_taborder("9");
            obj.getSetter("class").set("styFormSearchItem");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.set_maxlength("8");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_password("false");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "375", "252", "64", "8", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "375", "284", "64", "12", null, null, this);
            obj.set_taborder("32");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 470, 296, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("지급명세서/영수증 출력");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("TXMD0020P01.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("TXMD0020P01.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("TXMD0020P01.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TXMD0020P01 지급명세서/영수증 출력
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.01		황치웅		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
        /***************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                      *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                       *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망     *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                 *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        
        /************************
        *  공통 Script Include  *
        ************************/
        //include "script::lib_script_common.xjs"
        //include "script::lib_script_ubireport.xjs"

        /*********************
        *  화면 변수 선언부  *
        *********************/
        this.sBUTTONLIST   = "TFTTF";                     
        this.sPACKAGENAME  = 'TXMD0020P01';     

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

        
        /**************************************************************************************************
        *                                         공통 Event 처리 부분                                    *
        ***************************************************************************************************/
        /*-----------------------------------+
        |  01.최초 화면 Load時 처리 할 사항  |
        +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e){

        	//this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	//귀속년도 초기화
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	this.calPERS_YEAR.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("date"), 0, 4));
        	
        	this.stTERM_GUBN.set_visible(false);  //지급분기 visible.
        	this.cmbTERM_GUBN.set_visible(false);	//지급분기 visible.
        	
        	this.rdoPRNT_TYPE.set_value("0");
        	
        }

        /*----------------------------------+
        |  02.화면 종료(닫기) 버튼 클릭 時  |
        ------------------------------------*/
        this.fn_End = function(obj) {
        	this.close();
        }

        /*-----------------------+
        |  03.조회 버튼 클릭 時  |
        +------------------------*/
        this.fn_Search = function(obj) {	
        	
        }

        /*-----------------------------+
        |  04.입력(신규) 버튼 클릭 時  |
        +------------------------------*/
        this.fn_Input = function(obj) {	

        }

        /*-----------------------------+
        |  05.삭제(제거) 버튼 클릭 時  |
        +------------------------------*/
        this.fn_Delete = function(obj) {

        }

        /*-----------------------+
        |  06.취소 버튼 클릭 時  |
        -------------------------*/
        this.fn_Cancel = function(obj) {

        }

        /*-----------------------+
        |  07.저장 버튼 클릭 時  |
        -------------------------*/
        this.fn_Save = function(obj) {

        }

        /*-----------------------+
        |  08.엑셀 버튼 클릭 時  |
        -------------------------*/
        this.fn_ToExcel = function(obj) {
        	
        }

        /*-----------------------+
        |  09.인쇄 버튼 클릭 時  |
        +------------------------*/
        this.fn_Print = function (obj,e) {
        	
        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_GUBN.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "사업장", this.cmbSHRACCT_GUBN);
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calPERS_YEAR.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "귀속연도", this.calPERS_YEAR);
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.cmbPRNT_GUBN.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "출력물 선택", this.cmbPRNT_GUBN);
        	}
        	
        	var reportfile ="";
        	
        	var today = this.fnc_GetMaskFormat(this.fnc_Today(), "@@@@년 @@월 @@일");
        	
        	var params  =  "PERS_YEAR#" + this.fnc_Trim(this.fnc_SubStr(this.calPERS_YEAR.value,0,4));
        		params += "#TODY_DATE#" + today +"일"; 
        		params += "#SIGN_IMGE#" + "http://localhost:9030/NSCOM_MIS/ubireport/jrfdir/JIKIN.png";  
        		
        	if (this.cmbPRNT_GUBN.value == '10') { 	
        	
        		reportfile = "/txm/TXMD0020R01.jrf";
        		params += "#OWNR_NAME#" + this.dsTA_CUSTXM.getColumn(0, "OWNR_NAME");
        		params += "#COMP_NAME#" + this.cmbSHRACCT_GUBN.text;
        		
        	} else if (this.cmbPRNT_GUBN.value == '11') { 
        	
        		reportfile = "/txm/TXMD0020R02.jrf";
        		params += "#OWNR_NAME#" + this.dsTA_CUSTXM.getColumn(0, "OWNR_NAME");
        		params += "#COMP_NAME#" + this.cmbSHRACCT_GUBN.text;
        		
        	} else if (this.cmbPRNT_GUBN.value == '12') { 
        	
        		reportfile = "/txm/TXMD0020R03.jrf";
        		
        	}  else if (this.cmbPRNT_GUBN.value == '13') { 
        	
        		reportfile = "/txm/TXMD0020R04.jrf";
        		
        	} else if (this.cmbPRNT_GUBN.value == '14') { 
        	
        		reportfile = "/txm/TXMD0020R05.jrf";
        		params += "#COMP_NAME#" + this.cmbSHRACCT_GUBN.text;
        		
        	} else if (this.cmbPRNT_GUBN.value == '15') { 
        	
        		reportfile = "/txm/TXMD0020R06.jrf";
        		params += "#OWNR_NAME#" + this.dsTA_CUSTXM.getColumn(0, "OWNR_NAME");
        		
        	} else if (this.cmbPRNT_GUBN.value == '16') { 
        	
        		reportfile = "/txm/TXMD0020R07.jrf";
        		params += "#OWNR_NAME#" + this.dsTA_CUSTXM.getColumn(0, "OWNR_NAME");
        		params += "#TERM_GUBN#" + this.cmbTERM_GUBN.text;
        		
        		
        	} else if (this.cmbPRNT_GUBN.value == '17') { 
        	
        		reportfile = "/txm/TXMD0020R08.jrf";
        		params += "#OWNR_NAME#" + this.dsTA_CUSTXM.getColumn(0, "OWNR_NAME");
        		params += "#TERM_GUBN#" + this.cmbTERM_GUBN.text;
        		
        		
        	} 

        	var dataref = new Array();
        	
        		dataref[0]            = new Object();
        		dataref[0].type       = "TRAN";
        		dataref[0].svcUrl     = "/core/erp/txm/TXMD0020P01_PRINT00.do";
        		dataref[0].inDataset  = ""
        		dataref[0].outDataset = "dsTA_CUSTXM=dsTA_CUSTXM dsTA_INCMXM=dsTA_INCMXM"
        		dataref[0].arg        = this.fn_CreateArgument("PRINT00");
        		
        	this.fn_UbiReport(reportfile, params, dataref);
        	
        	
        }

        /*-----------------------------------+
        |  10.종료 화면 Load時 처리 할 사항  |
        +------------------------------------*/
        this.fn_FormUnloadProcess = function(obj,e) {
        	
        }

        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	
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

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function(sKind) {
        	
        	var sReturnString;
        	
        	if (sKind == "PRINT00") {
        	
        		sReturnString  = " pgm="            + this.fnc_Quote(this.sPACKAGENAME);                   
        		sReturnString += " action="         + this.fnc_Quote(sKind);                          
        		sReturnString += " ACCT_GUBN="      + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value));					//사업장
        		sReturnString += " PRNT_GUBN="      + this.fnc_Quote(this.fnc_Trim(this.cmbPRNT_GUBN.value));   					//인쇄물구분
        		sReturnString += " PERS_YEAR="      + this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.calPERS_YEAR.value, 0, 4)));//귀속년도    
        		sReturnString += " PERS_NAME="      + this.fnc_Quote(this.fnc_Trim(this.edtPERS_NAME.value));   					//소득자    
        		sReturnString += " RANG_STDT="      + this.fnc_Quote(this.fnc_Trim(this.edtRANGE_STDT.value));  					//범위from     
        		sReturnString += " RANG_EDDT="      + this.fnc_Quote(this.fnc_Trim(this.edtRANGE_EDDT.value));    					//범위to
        			
        		if (this.cmbPRNT_GUBN.value == "16" || this.cmbPRNT_GUBN.value =="17") {
        			sReturnString += " TERM_GUBN=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbTERM_GUBN.value));       //지급분기(일용근로소득)
        		} else {
        			sReturnString += " TERM_GUBN=" 	+ this.fnc_Quote('');                                			//지급분기(일용근로소득)		
        		}
        		
        		
        	} else if (sKind == "PRINT01") {
        	
        		sReturnString  = " pgm="            + this.fnc_Quote(this.sPACKAGENAME);                  
        		sReturnString += " action="         + this.fnc_Quote(sKind);                         
        		sReturnString += " ACCT_GUBN="      + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUBN.value));					//사업장
        		sReturnString += " PRNT_GUBN="      + this.fnc_Quote(this.fnc_Trim(this.cmbPRNT_GUBN.value));   					//인쇄물구분   
        		sReturnString += " PERS_YEAR="      + this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.calPERS_YEAR.value, 0, 4)));//귀속년도    
        		sReturnString += " PERS_NAME="      + this.fnc_Quote(this.fnc_Trim(this.edtPERS_NAME.value));   					//소득자    
        		sReturnString += " RANG_STDT="      + this.fnc_Quote(this.fnc_Trim(this.edtRANGE_STDT.value));  					//범위from     
        		sReturnString += " RANG_EDDT="      + this.fnc_Quote(this.fnc_Trim(this.edtRANGE_EDDT.value));    					//범위to
        		sReturnString += " OWNR_NAME="      + this.fnc_Quote(this.fnc_Trim(this.dsTA_CUSTXM.getColumn(0, "OWNR_NAME")));
        		
        	}

        	return sReturnString;                                             
        	
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {
        	
        	if (ErrorCode < 0) 	{
        	
        		if (application.GBL_SESSONCHK == "E0001") {
        			this.fnc_ErrorProcess(ErrorCode, ErrorMSG);
        		} else {
        			this.fnc_Message("SERVERMSG", ErrorMSG);
        		}
        	}
        	else {
        		
        		this.fn_PostProcess(sMethodName);
        	}
        	
        }

        /*------------------------------------+
        |  Transaction 후 Post Process!       |
        +-------------------------------------*/
        this.fn_PostProcess = function(sMethodName) {
        	
        	if (sMethodName == "GetUserComboCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_GUBN,dsACCT_GUBN,0";
        		this.fnc_UserComboInnerBind(arrParam);

        	}
        	
        }

        /**************************************************************************************************
        *                                사용자 정의  Function 처리 부분                                  *
        ***************************************************************************************************/
        /**************************************************************************************************
        *                                  사용자 정의  Event 처리 부분                                   *
        ***************************************************************************************************/

        /*------------------------------------------------+
        |  선택한 출력물 종류에 따라서 입력필드 보여줌!   |
        +-------------------------------------------------*/
        this.cmbPRNT_GUBN_OnChanged = function(obj,e) {
        	
        	// 데이터 필드 초기화
        	this.edtPERS_NAME.value = '';
        	this.edtRANGE_STDT.value = '';
        	this.edtRANGE_EDDT.value = '';
        		
        	var nGUBN = parseInt(e.postvalue);
        			
        	if (nGUBN == 10 || nGUBN == 11) { // 기타소득 원천징수영수증(소득자보관용) 선택
        	
        		this.stTERM_GUBN.set_visible(false);
        		this.cmbTERM_GUBN.set_visible(false);
        			
        	} else if (nGUBN == 12 || nGUBN == 13) { // 사업소득 원천징수영수증(소득자보관용) 선택
        	
        		this.stTERM_GUBN.set_visible(false);
        		this.cmbTERM_GUBN.set_visible(false);
        		
        	} else if (nGUBN == 14 || nGUBN == 15) { // 비거주자 기타사업 소득 원천징수영수증(소득자보관용) 선택
        	
        		this.stTERM_GUBN.set_visible(false);
        		this.cmbTERM_GUBN.set_visible(false);
        			
        	} else if (nGUBN == 16 || nGUBN == 17) { // 일용근로소득 
        		
        		this.stTERM_GUBN.set_visible(true);
        		this.cmbTERM_GUBN.set_visible(true);
        			
        	} else if (nGUBN == 18 || nGUBN == 19 || nGUBN == 20) { // 이자배당
        	
        		this.stTERM_GUBN.set_visible(false);
        		this.cmbTERM_GUBN.set_visible(false);
        		
        	}
        	
        }

        /*-----------------------------------------+
        |  출력대상 라디오 버튼 변경 이벤트!   |
        +------------------------------------------*/
        this.rdoPRNT_TYPE_onitemchanged = function(obj,e) {
        	
        	if (obj.value == "0") {	// 전체
        	
        		this.edtPERS_NAME.set_value("");
        		this.fnc_SetReadonly(this.edtPERS_NAME, true);
        		this.fnc_SetReadonly(this.edtRANGE_STDT, true)
        		this.edtRANGE_STDT.set_value("");
        		this.fnc_SetReadonly(this.edtRANGE_EDDT, true)
        		this.edtRANGE_EDDT.set_value("");
        	
        	} else if (obj.value == "1") {	// 소득자성명
        		
        		this.fnc_SetReadonly(this.edtPERS_NAME, false);
        		this.fnc_SetReadonly(this.edtRANGE_STDT, true)
        		this.edtRANGE_STDT.set_value("");
        		this.fnc_SetReadonly(this.edtRANGE_EDDT, true)
        		this.edtRANGE_EDDT.set_value("");
        		this.edtPERS_NAME.setFocus();
        	
        	} else if (obj.value == "2") { // 범위
        	
        		this.fnc_SetReadonly(this.edtPERS_NAME, true)
        		this.edtPERS_NAME.set_value("");
        		this.fnc_SetReadonly(this.edtRANGE_STDT, false);
        		this.fnc_SetReadonly(this.edtRANGE_EDDT, false);
        		this.edtRANGE_STDT.setFocus();
        		
        	}
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_CUSTXM.addEventHandler("canrowposchange", this.dsTA_INCMXM_CanRowPosChange, this);
            this.dsTA_CUSTXM.addEventHandler("onrowposchanged", this.dsTA_INCMXM_onrowposchanged, this);
            this.dsTA_INCMXM.addEventHandler("onrowposchanged", this.dsTA_INCMXM_onrowposchanged, this);
            this.dsTA_INCMXM.addEventHandler("oncolumnchanged", this.dsTA_INCMXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.rdoPRNT_TYPE.addEventHandler("onitemchanged", this.rdoPRNT_TYPE_onitemchanged, this);
            this.rdoPRNT_TYPE.addEventHandler("onitemclick", this.rdoPRNT_TYPE_onitemclick, this);
            this.cmbPRNT_GUBN.addEventHandler("onitemchanged", this.cmbPRNT_GUBN_OnChanged, this);
            this.cmbPRNT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnPrint.addEventHandler("onclick", this.fn_Print, this);
            this.btnClose.addEventHandler("onclick", this.fn_End, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onitemchanged", this.cmbSHRACCT_GUBN_onitemchanged, this);
            this.cmbTERM_GUBN.addEventHandler("onitemchanged", this.cmbPRNT_GUBN_OnChanged, this);
            this.cmbTERM_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calPERS_YEAR.addEventHandler("onchanged", this.calPERS_YEAR_onchanged, this);
            this.calPERS_YEAR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtRANGE_EDDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPERS_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtRANGE_STDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TXMD0020P01.xfdl");

       
    };
}
)();
