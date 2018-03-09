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
                this.set_name("FAMG0070");
                this.set_scrollbars("none");
                this.set_titletext("연결채무잔고내역 관리");
                this._setFormPosition(0,0,1187,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsSHRACCT_UNIT</Col><Col id=\"HEADFLAG\">N</Col></Row><Row><Col id=\"DSNAME\">dsCSFS_COM</Col><Col id=\"CODEID\">CSFS_COMM</Col><Col id=\"HEADFLAG\">N</Col></Row><Row><Col id=\"DSNAME\">dsCSFS_TRST</Col><Col id=\"CODEID\">CSFS_TRST</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCSFS_COM", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsNS_CFS_DATA_M", this);
            obj._setContents("<ColumnInfo><Column id=\"TRAN_SEQ\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"FILE_ID\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCOUNT_PERIOD\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"COMP_CODE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CSFS_TRST\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CSFS_TRST_ENABLE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"TRAN_USID\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"TRAN_USNM\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"TRAN_DATE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"INST_USID\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"INST_DATE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"UPDT_USID\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"UPDT_USNM\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"UPDT_DATE\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsNS_CFS_DATA_D", this);
            obj.set_keystring("G:+ATTRIBUTE3");
            obj._setContents("<ColumnInfo><Column id=\"TRAN_SEQ\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"FILE_ID\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCOUNT_PERIOD\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"COMP_CODE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SOURCE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQ\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"INSERTED_FLAG\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"IF_REG_DATE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"MODE_FLAG\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"EAI_FLAG\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"EAI_DATE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE1\" size=\"101\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE2\" size=\"102\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE3\" size=\"22\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE4\" size=\"104\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE5\" size=\"105\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE6\" size=\"106\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ATTRIBUTE7\" size=\"107\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE8\" size=\"108\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE9\" size=\"109\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE10\" size=\"110\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE11\" size=\"111\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE12\" size=\"112\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE13\" size=\"113\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE14\" size=\"114\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE15\" size=\"115\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE16\" size=\"116\" prop=\"default\" type=\"STRING\"/><Column id=\"INST_USID\" size=\"117\" prop=\"default\" type=\"STRING\"/><Column id=\"INST_DATE\" size=\"118\" prop=\"default\" type=\"STRING\"/><Column id=\"UPDT_USID\" size=\"119\" prop=\"default\" type=\"STRING\"/><Column id=\"UPDT_DATE\" size=\"120\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"120\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"120\" prop=\"default\" type=\"STRING\"/><Column id=\"CCOMP_NAME\" size=\"120\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "207", "400", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("6");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "27", "71", "70", "21", null, null, this);
            obj.set_text("회계단위");
            obj.style.set_align("left middle");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "95", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static00", "absolute", "244", "71", "70", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("기준년월");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Button("btnTRAN_DATA", "absolute", null, "203", "74", "21", "25", null, this);
            obj.set_taborder("19");
            obj.set_text("자료전송");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnCREATE_DATA", "absolute", null, "203", "74", "21", "102", null, this);
            obj.set_taborder("20");
            obj.set_text("자료생성");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Grid("grdNS_CFS_DATA_D", "absolute", "8", "228", null, null, "25", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("27");
            obj.set_tabstop("false");
            obj.set_binddataset("dsNS_CFS_DATA_D");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("none");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"54\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\"/><Column size=\"206\"/><Column size=\"77\"/><Column size=\"110\"/><Column size=\"67\"/><Column size=\"120\"/><Column size=\"119\"/><Column size=\"135\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"86\"/><Column size=\"110\"/><Column size=\"339\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"파일ID\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" displaytype=\"text\" text=\"법인계정코드\"/><Cell col=\"3\" displaytype=\"text\" text=\"법인계정명\"/><Cell col=\"4\" text=\"연결법인코드\"/><Cell col=\"5\" text=\"연별법인명\"/><Cell col=\"6\" displaytype=\"text\" text=\"거래통화\"/><Cell col=\"7\" text=\"거래통화금액\"/><Cell col=\"8\" displaytype=\"text\" text=\"장부통화금액\"/><Cell col=\"9\" text=\"전표번호\"/><Cell col=\"10\" displaytype=\"text\" text=\"거래일자\"/><Cell col=\"11\" text=\"증빙일자\"/><Cell col=\"12\" text=\"거래처코드\"/><Cell col=\"13\" text=\"거래처명\"/><Cell col=\"14\" text=\"적요\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;\" text=\"bind:FILE_ID\"/><Cell col=\"1\" style=\"align:right;\" text=\"expr:dataset.getRowLevel(currow)==0 ? SEQ : &quot;&quot;\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:center;\" text=\"bind:ATTRIBUTE1\"/><Cell col=\"3\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:ACCT_NAME\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:ATTRIBUTE3\"/><Cell col=\"5\" style=\"align:left;\" text=\"expr:Eco.decode(dataset.getRowLevel(currow), 1, dataset.getColumn(currow - 1, 'CCOMP_NAME') + ' 소계', CCOMP_NAME)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: right;\" text=\"bind:ATTRIBUTE4\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getRowLevel(currow)==0 ? ATTRIBUTE5 : &quot;&quot;\"/><Cell col=\"8\" displaytype=\"number\" style=\"align: right;\" text=\"bind:ATTRIBUTE6\"/><Cell col=\"9\" text=\"bind:ATTRIBUTE10\"/><Cell col=\"10\" displaytype=\"date\" style=\"align: right;\" text=\"bind:ATTRIBUTE11\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" displaytype=\"date\" text=\"bind:ATTRIBUTE12\" calendardisplaynulltype=\"none\"/><Cell col=\"12\" style=\"align:center;\" text=\"bind:ATTRIBUTE13\"/><Cell col=\"13\" style=\"align:left;\" text=\"bind:CUST_NAME\"/><Cell col=\"14\" style=\"align:left;\" text=\"bind:ATTRIBUTE14\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" text=\"합계\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" displaytype=\"number\" text=\"expr:nexacro.toNumber(dataset.getSum(&quot;ATTRIBUTE6&quot;), 0)\" mask=\"#,###\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Shape1", "absolute", "8", "128", null, "65", "25", null, this);
            obj.set_taborder("28");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "-127", "556", "30", "63", null, null, this);
            obj.set_taborder("67");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("84");
            obj.set_text("연결채무잔고내역 관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("87");
            obj.set_text("홈 > 재무관리>결산관리>재무제표관리>월별 손익계산서 조회황");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("88");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("89");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("90");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "184", "103", "80", "25", null, null, this);
            obj.set_taborder("92");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("93");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("94");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("96");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "538", "193", "80", "35", null, null, this);
            obj.set_taborder("97");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "1069", "193", "80", "10", null, null, this);
            obj.set_taborder("98");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static90", "absolute", "9", "107", "223", "21", null, null, this);
            obj.set_taborder("99");
            obj.set_text("연결결산자료 전송상태");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "28", "137", "91", "21", null, null, this);
            obj.set_taborder("100");
            obj.set_text("I/F 순번");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "28", "163", "91", "21", null, null, this);
            obj.set_taborder("101");
            obj.set_text("법인코드");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTRAN_SEQ", "absolute", "97", "137", "135", "21", null, null, this);
            obj.set_taborder("102");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOMP_CODE", "absolute", "97", "163", "135", "21", null, null, this);
            obj.set_taborder("103");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "261", "137", "91", "21", null, null, this);
            obj.set_taborder("104");
            obj.set_text("기준년월");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "261", "163", "91", "21", null, null, this);
            obj.set_taborder("105");
            obj.set_text("전송상태");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calACCOUNT_PERIOD", "absolute", "329", "137", "149", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("106");
            obj.set_dateformat("yyyy-MM");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_enable("false");
            obj.set_value("null");
            obj.set_editformat("yyyy-MM");

            obj = new Combo("cmbCSFS_TRST", "absolute", "329", "163", "149", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("107");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");

            obj = new Static("Static01", "absolute", "509", "137", "91", "21", null, null, this);
            obj.set_taborder("108");
            obj.set_text("생성일시");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "509", "163", "91", "21", null, null, this);
            obj.set_taborder("109");
            obj.set_text("전송일시");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calUPDT_DATE", "absolute", "577", "137", "135", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("110");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_enable("false");

            obj = new Calendar("calTRAN_DATE", "absolute", "577", "163", "135", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("111");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_enable("false");

            obj = new Static("Static04", "absolute", "743", "137", "91", "21", null, null, this);
            obj.set_taborder("112");
            obj.set_text("생성자");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "743", "163", "91", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_text("전송자");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUPDT_USID", "absolute", "800", "137", "150", "21", null, null, this);
            obj.set_taborder("114");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTRAN_USID", "absolute", "800", "163", "150", "21", null, null, this);
            obj.set_taborder("115");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("calSHRACCOUNT_PERIOD", "absolute", "310", "71", "90", "21", null, null, this);
            obj.set_taborder("116");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_titletext("연결채무잔고내역 관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item8","btnTRAN_DATA","enable","dsNS_CFS_DATA_M","CSFS_TRST_ENABLE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edtTRAN_SEQ","value","dsNS_CFS_DATA_M","TRAN_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtCOMP_CODE","value","dsNS_CFS_DATA_M","COMP_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","calACCOUNT_PERIOD","value","dsNS_CFS_DATA_M","ACCOUNT_PERIOD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","cmbCSFS_TRST","value","dsNS_CFS_DATA_M","CSFS_TRST");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","calUPDT_DATE","value","dsNS_CFS_DATA_M","UPDT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","calTRAN_DATE","value","dsNS_CFS_DATA_M","TRAN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtUPDT_USID","value","dsNS_CFS_DATA_M","UPDT_USNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edtTRAN_USID","value","dsNS_CFS_DATA_M","TRAN_USNM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("FAMG0070.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("FAMG0070.xfdl", "script::lib_gfn.xjs");
        this.addIncludeScript("FAMG0070.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("FAMG0070.xfdl", function() {
        /***************************************************************************************************
         * # Program:	FAMG0070 연결채무잔고내역 관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.27		김기환		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                      *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                       *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망    *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                 *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"
        //include "script::lib_gfn.xjs"
        //include "script::lib_script_ubireport.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFTTF"; // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "FAMG0070";
        this.CSFS_COMM	  = "AP"; 
        this.sCOMP_CODE   = "";
        this.sRetValue	  = "";

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
         *                                         공통 Event 처리 부분                                  *
         **************************************************************************************************/
         /*--------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	//초기 화면 세팅
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this); 		//Grid Sub Cell Property 수정
        	this.fnc_GetComboDs(this.dsCombo);  //공통코드 콤보 설정
        	//this.fnc_GetUserComboDs(this.dsUserCombo); //사용자 콤보 설정
        	
        	// 전표 mask 
        	this.fnc_FormatSlipNumber(this.grdNS_CFS_DATA_D, "ATTRIBUTE10");
        	
        	//초기 날짜 세팅
        	var sDate = this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"));
        	this.calSHRACCOUNT_PERIOD.fn_SetMonth((this.fnc_SubStr(sDate, 0, 6)));

        	//포커스
        	this.calSHRACCOUNT_PERIOD.setFocus();
        }

        /*--------------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ---------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        }

        /*--------------------------+
         |  03.조회 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Search = function (obj) {

        	//변경자료 체크
        	if( obj != "X" ){
        		if (this.fnc_DatasetChangeCheck("dsNS_CFS_DATA_M,dsNS_CFS_DATA_D") && !this.fnc_Message("TMM023")) return;
        	}

        	//조회항목 유효성 체크
        	if (!this.fn_SearchItemCheck()) return;
        	
        	//초기화
        	this.fnc_DatasetClear("dsNS_CFS_DATA_M,dsNS_CFS_DATA_D");

        	this.fn_TransactionCall("SEARCH00");
        }

        /*---------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능없음
        }

        /*---------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능없음
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj) {
        	// 기능없음
        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {
        	
        	if( this.dsNS_CFS_DATA_D.rowcount < 1 ){
        		this.fnc_Message("FAM007", "저장"); // [저장] 가능한 데이터가 없습니다!!
        		return;
        	 }
        	 
        	//유효성 체크 
        	if( !this.fn_FormItemCheck("fn_Save") )	return;

        	var sMsg = "기준년월 ["+ this.calACCOUNT_PERIOD.text + "] [저장] 하시겠습니까";
        			   
        	if (!this.fnc_Message("TMM140", sMsg)) return;
        	
        	this.fn_TransactionCall("SAVE_DATA");
        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this);
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능없음
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +-----------------------------------*/
         
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsNS_CFS_DATA_M,dsNS_CFS_DATA_D", this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)    |
         +-----------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*-------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +-------------------------------------*/
        this.fn_EditFocus = function (obj){
        	this.fnc_EditFocus(obj);
        }

        
        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                  *
         ***************************************************************************************************/
        /*--------------------------+
         |  조회 필수 조건 체크!  |
         +--------------------------*/
        this.fn_SearchItemCheck = function () {

        	if(this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "회계단위", this.cmbSHRACCT_UNIT);	//[회계단위] 은(는) 필수 조회조건 입니다.
        	}
        	
        	if(this.fnc_Length(this.fnc_Trim(this.calSHRACCOUNT_PERIOD.fn_GetMonth())) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "기준연월", this.calSHRACCOUNT_PERIOD); //[기준연월] 은(는) 필수 조회조건 입니다.	
        	}
        	
        	return true;
        }

        /*--------------------------+
         |  내용 필수 조건 체크!  |
         +--------------------------*/
        this.fn_FormItemCheck = function (pAction) {
        	
        	//공통 화면변수값 존재여부 체크
        	if( this.fnc_IsEmpty(this.sSOURCE) )
        	{
        		this.fnc_Message("FAM006", "SOURCE"); //[ SOURCE ] 값이 없습니다. 시스템 담당자에게 문의하시기 바랍니다!
        		return;
        	}
        	
        	if( this.fnc_IsEmpty(this.sCOMP_CODE) )
        	{
        		this.fnc_Message("FAM006", "법인코드"); //[ 법인코드 ] 값이 없습니다. 시스템 담당자에게 문의하시기 바랍니다!
        		return;
        	}
        	
        	if( pAction == "fn_Save" && this.cmbCSFS_TRST.value != "TRCR"){
        		this.fnc_Message("FAM005", "자료생성"); //[자료생성] 상태만 가능합니다.
        		return false;
        	}
        	
        	if( pAction == "btnTRAN_DATA" && this.cmbCSFS_TRST.value != "TRWT"){
        		this.fnc_Message("FAM005", "전송대기"); //[전송대기] 상태만 가능합니다.
        		return false;
        	}
        	
        	return true;
        }

        /*---------------------+
         |  삭제 여부 체크!  |
         +---------------------*/
        this.fn_DeleteCheck = function () {
        	// 기능없음
        	return true;
        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function () {
        	// 기능없음
        	return true;
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind){
        	
        	var sReturnString;
        	
        	//연결회계 IF 마스터 조회
        	if (sKind == "SEARCH00") 
        	{
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);						 //화면ID
        		sReturnString += " action="     + this.fnc_Quote(sKind);									 //요청구분
        		sReturnString += " ACCT_UNIT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)); //회계단위
        		sReturnString += " COMP_CODE="  + this.fnc_Quote(this.fnc_Trim(this.sCOMP_CODE));			 //법인코드	
        		sReturnString += " SOURCE="  	+ this.fnc_Quote(this.fnc_Trim(this.sSOURCE));				 //SOURCE(CON)
        		sReturnString += " ACCOUNT_PERIOD=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACCOUNT_PERIOD.fn_GetMonth())); //회계연월
        		sReturnString += " FILE_ID="  	+ this.fnc_Quote(this.CSFS_COMM);	 //파일ID
        		
        		if(!this.fnc_IsEmpty(this.sRetValue)){
        			sReturnString += " TRAN_SEQ="  	+ this.fnc_Quote(this.fnc_Trim(this.sRetValue));				 //IF순번
        		}
        	} 
        	//연결회계 IF 상세 조회
        	else if ( sKind == "SEARCH01") 
        	{
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);						 //화면ID	
        		sReturnString += " action="     + this.fnc_Quote(sKind);									 //요청구분	
        		sReturnString += " ACCT_UNIT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)); //회계단위
        		sReturnString += " COMP_CODE="  + this.fnc_Quote(this.fnc_Trim(this.sCOMP_CODE));			 //법인코드
        		sReturnString += " SOURCE="  	+ this.fnc_Quote(this.fnc_Trim(this.sSOURCE));				 //SOURCE(CON)
        		sReturnString += " TRAN_SEQ="   + this.fnc_Quote(this.fnc_Trim(this.edtTRAN_SEQ.value));	 //IF순번
        		sReturnString += " ACCOUNT_PERIOD=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACCOUNT_PERIOD.fn_GetMonth())); //회계연월
        		sReturnString += " FILE_ID="    + this.fnc_Quote(this.CSFS_COMM);   //파일ID

        	} 
        	//연결회계 IF 전송상태 조회
        	else if ( sKind == "SEARCH02") 
        	{
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);						 //화면ID	
        		sReturnString += " action="     + this.fnc_Quote(sKind);									 //요청구분
        		sReturnString += " ACCT_UNIT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)); //회계단위
        		sReturnString += " COMP_CODE="  + this.fnc_Quote(this.fnc_Trim(this.sCOMP_CODE));			 //법인코드
        		sReturnString += " TRAN_SEQ="   + this.fnc_Quote(this.fnc_Trim(this.edtTRAN_SEQ.value));     //IF순번
        		sReturnString += " CSFS_TRST="  + this.fnc_Quote("TRCP"); 									 //전송상태(TRCP : '전송완료')
        		sReturnString += " ACCOUNT_PERIOD=" + this.fnc_Quote(this.fnc_Trim(this.calSHRACCOUNT_PERIOD.fn_GetMonth())); //회계연월
        		sReturnString += " FILE_ID="  	+ this.fnc_Quote(this.CSFS_COMM);   						 //파일ID

        	} 
        	//자료생성
        	else if ( sKind == "CREATE_DATA")
        	{
        		var ACCOUNT_PERIOD  = this.calSHRACCOUNT_PERIOD.fn_GetMonth();
        		var ACCOUNT_PERIOD1 = this.fnc_SubStr(ACCOUNT_PERIOD, 0, 4).concat("0101");
        		var	ACCOUNT_PERIOD2 = this.calSHRACCOUNT_PERIOD.fn_GetMonth().concat(this.fnc_GetLastDayOfMonth(ACCOUNT_PERIOD1));

        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);						 //화면ID
        		sReturnString += " action="     + this.fnc_Quote(sKind);									 //요청구분
        		sReturnString += " ACCT_UNIT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)); //회계단위
        		sReturnString += " COMP_CODE="  + this.fnc_Quote(this.fnc_Trim(this.sCOMP_CODE));			 //법인코드
        		sReturnString += " SOURCE="  	+ this.fnc_Quote(this.fnc_Trim(this.sSOURCE));				 //SOURCE(CON)
        		sReturnString += " ACCOUNT_PERIOD="  + this.fnc_Quote(this.fnc_Trim(ACCOUNT_PERIOD)); 		 //회계연월
        		sReturnString += " ACCOUNT_PERIOD1=" + this.fnc_Quote(this.fnc_Trim(ACCOUNT_PERIOD1));		 //회계기간FROM
        		sReturnString += " ACCOUNT_PERIOD2=" + this.fnc_Quote(this.fnc_Trim(ACCOUNT_PERIOD2));		 //회계기간TO
        		sReturnString += " FILE_ID="    + this.fnc_Quote(this.CSFS_COMM);	 						 //파일ID
        		sReturnString += " CSFS_TRST="  + this.fnc_Quote("TRWT"); 									 //전송상태(TRWT : '전송대기')
        		sReturnString += " CMCD_CSFS="  + this.fnc_Quote("CSFS_".concat(this.CSFS_COMM));  			 //연결 IF전송 공통코드구분

        	}
        	//자료저장
        	else if ( sKind == "SAVE_DATA")
        	{
        		var ACCOUNT_PERIOD  = this.dsNS_CFS_DATA_M.getColumn(0,"ACCOUNT_PERIOD");
        		var ACCOUNT_PERIOD1 = this.fnc_SubStr(ACCOUNT_PERIOD, 0, 4).concat("0101");
        		var	ACCOUNT_PERIOD2 = ACCOUNT_PERIOD.concat(this.fnc_GetLastDayOfMonth(ACCOUNT_PERIOD1));

        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);						 //화면ID
        		sReturnString += " action="     + this.fnc_Quote(sKind);									 //요청구분
        		sReturnString += " ACCT_UNIT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)); //회계단위
        		sReturnString += " COMP_CODE="  + this.fnc_Quote(this.fnc_Trim(this.sCOMP_CODE));			 //법인코드
        		sReturnString += " SOURCE="  	+ this.fnc_Quote(this.fnc_Trim(this.sSOURCE));				 //SOURCE(CON)
        		sReturnString += " TRAN_SEQ="   + this.fnc_Quote(this.fnc_Trim(this.edtTRAN_SEQ.value));	 //IF순번	
        		sReturnString += " ACCOUNT_PERIOD="  + this.fnc_Quote(this.fnc_Trim(ACCOUNT_PERIOD)); 		 //회계연월
        		sReturnString += " ACCOUNT_PERIOD1=" + this.fnc_Quote(this.fnc_Trim(ACCOUNT_PERIOD1));		 //회계기간FROM
        		sReturnString += " ACCOUNT_PERIOD2=" + this.fnc_Quote(this.fnc_Trim(ACCOUNT_PERIOD2));		 //회계기간TO
        		sReturnString += " FILE_ID="    + this.fnc_Quote(this.CSFS_COMM);	 						 //파일ID
        		sReturnString += " CSFS_TRST="  + this.fnc_Quote("TRWT"); 									 //전송상태(TRWT : '전송대기')
        		sReturnString += " CMCD_CSFS="  + this.fnc_Quote("CSFS_".concat(this.CSFS_COMM));  			 //연결 IF전송 공통코드구분

        	}
        	
        	//자료전송
        	else if ( sKind == "TRAN_DATA") 
        	{
        		var ACCOUNT_PERIOD  = this.dsNS_CFS_DATA_M.getColumn(0,"ACCOUNT_PERIOD");
        	
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);						 //화면ID			
        		sReturnString += " action="     + this.fnc_Quote(sKind);									 //요청구분
        		sReturnString += " ACCT_UNIT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)); //회계단위
        		sReturnString += " COMP_CODE="  + this.fnc_Quote(this.fnc_Trim(this.sCOMP_CODE));			 //법인코드	
        		sReturnString += " SOURCE="  	+ this.fnc_Quote(this.fnc_Trim(this.sSOURCE));				 //SOURCE(CON)
        		sReturnString += " TRAN_SEQ="   + this.fnc_Quote(this.fnc_Trim(this.edtTRAN_SEQ.value));	 //IF순번	
        		sReturnString += " ACCOUNT_PERIOD=" + this.fnc_Quote(this.fnc_Trim(ACCOUNT_PERIOD)); 		 //회계연월
        		sReturnString += " FILE_ID="    + this.fnc_Quote(this.CSFS_COMM); 	 						 //파일ID
        		sReturnString += " CSFS_TRST="  + this.fnc_Quote("TRCP"); 									 //전송상태(TRCP : '전송완료')
        	
        	}
        	
        	return sReturnString;

        }

        /*---------------------------------------+
         |  Transaction 처리
         +---------------------------------------*/
        this.fn_TransactionCall = function(pMethodName){

        	//Transaction처리 전 JAVA return 변수 초기화
        	this.sRetValue	= "";

        	switch (pMethodName) {
        	
        		//연결회계 IF 마스터 조회
        		case "SEARCH00": 

        			var sMethodName = pMethodName;
        			var sInDataSet  = "";
        			var sOutDataSet = "dsNS_CFS_DATA_M=dsNS_CFS_DATA_M";
        			var sArgument   = this.fn_CreateArgument(sMethodName);

        			break;
        			
        		//연결회계 IF 상세조회
        		case "SEARCH01": 

        			var sMethodName = pMethodName;
        			var sInDataSet  = "";
        			var sOutDataSet = "dsNS_CFS_DATA_D=dsNS_CFS_DATA_D";
        			var sArgument   = this.fn_CreateArgument(sMethodName);

        			break;
        			
        		//연결회계 IF 전송상태 조회
        		case "SEARCH02": 

        			var sMethodName = pMethodName;
        			var sInDataSet  = "";
        			var sOutDataSet = "";
        			var sArgument   = this.fn_CreateArgument(sMethodName);

        			break;
        			
        		//자료생성	
        		case "CREATE_DATA": 

        			var sMethodName = pMethodName;
        			var sInDataSet  = "";
        			var sOutDataSet = "dsNS_CFS_DATA_D=dsNS_CFS_DATA_D";
        			var sArgument   = this.fn_CreateArgument(sMethodName);

        			break;
        		
        		//자료저장	
        		case "SAVE_DATA": 

        			var sMethodName = pMethodName;
        			var sInDataSet  = "dsNS_CFS_DATA_D=dsNS_CFS_DATA_D";
        			var sOutDataSet = "";
        			var sArgument   = this.fn_CreateArgument(sMethodName);

        			break;	
        			
        		//자료전송
        		case "TRAN_DATA": 

        			var sMethodName = pMethodName;
        			var sInDataSet  = "";
        			var sOutDataSet = "";
        			var sArgument   = this.fn_CreateArgument(sMethodName);
        			
        			break;
        	}
        	
        	//Transaction Call!!
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
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
        	
        	//연결회계 IF 마스터 조회
        	if (sMethodName == "SEARCH00") {
        	
        		if(this.dsNS_CFS_DATA_M.rowcount == 1)
        		{
        			//연결회계 IF 상세 조회
        			this.dsNS_CFS_DATA_M.set_rowposition(0);
        			this.fnc_DatasetClear("dsNS_CFS_DATA_D"); 		
        			this.fn_TransactionCall("SEARCH01");
        		}
        		else{
        			this.fnc_Message("TMM018", this.dsNS_CFS_DATA_M.rowcount);
        		}

        	} 
        	//연결회계 IF 상세 조회
        	else if (sMethodName == "SEARCH01") 
        	{

        		this.fnc_Information(this.stInformation, this.dsNS_CFS_DATA_D.rowcount, "SHR"); //조회 결과 Display
        		this.fnc_Message("TMM018", this.dsNS_CFS_DATA_D.rowcount); //[@]건이 조회 되었습니다.

        	} 
        	//연결회계 IF 상태조회
        	else if (sMethodName == "SEARCH02") 
        	{
        		
        		//DB IF 상태가 완료상태일 경우 전송하지 않고 return
        		if ( this.sRetValue > 0)
        		{
        			this.fnc_Message("FAM005", "전송대기"); //[전송대기] 상태만 가능합니다.
        			this.fn_Search("X");	//조회
        			return;
        		}
        		
        		this.fn_TransactionCall("TRAN_DATA");
        	
        	}
        	//자료생성
        	else if (sMethodName == "CREATE_DATA") 
        	{		
        		if(this.dsNS_CFS_DATA_D.rowcount < 1)
        		{
        			this.fnc_Message("FAM007", "자료생성"); //[자료생성] 가능한 데이터가 없습니다!!
        			return;
        		}
        		
        		this.fnc_Information(this.stInformation, this.dsNS_CFS_DATA_D.rowcount, "SHR"); //조회 결과 Display
        		
        		//연결회계 헤더데이터 세팅
        		var nRow = this.dsNS_CFS_DATA_M.addRow();
        		var sDate = this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"));
        		
        		this.dsNS_CFS_DATA_M.setColumn(nRow, "FILE_ID"		   , this.CSFS_COMM); 	//파일ID
        		this.dsNS_CFS_DATA_M.setColumn(nRow, "ACCOUNT_PERIOD"  , this.calSHRACCOUNT_PERIOD.fn_GetMonth()); //회계연월
        		this.dsNS_CFS_DATA_M.setColumn(nRow, "COMP_CODE"	   , this.sCOMP_CODE); 	//법인코드
        		this.dsNS_CFS_DATA_M.setColumn(nRow, "FILE_ID"		   , this.CSFS_COMM); 	//파일ID
        		this.dsNS_CFS_DATA_M.setColumn(nRow, "CSFS_TRST"	   , "TRCR"); 		 	//전송상태(TRCR : '자료생성')
        		this.dsNS_CFS_DATA_M.setColumn(nRow, "CSFS_TRST_ENABLE", 0); 				//전송상태 FLAG
        		this.dsNS_CFS_DATA_M.setColumn(nRow, "UPDT_USID", application.GBL_EMPLNO); 	//생성자ID
        		this.dsNS_CFS_DATA_M.setColumn(nRow, "UPDT_USNM", application.GBL_USERNM); 	//생성자이름
        		this.dsNS_CFS_DATA_M.setColumn(nRow, "UPDT_DATE", sDate); 					//생성일자
        		
        		this.dsNS_CFS_DATA_M.set_rowposition(0);

        	}
        	//자료저장
        	else if (sMethodName == "SAVE_DATA") 
        	{

        		if( this.IsNull(this.sRetValue) || this.fnc_IsEmpty(this.sRetValue) ){
        			this.fnc_Message("FAM007", "저장"); //[저장] 가능한 데이터가 없습니다!!
        			return;
        		}
        		
        		this.fnc_Message("TMM130", "저장"); //[저장] 작업을 정상적으로 완료 하였습니다!
        		this.edtTRAN_SEQ.set_value(this.sRetValue);
        		this.fn_Search("X");	//조회

        	}
        	//자료전송
        	else if (sMethodName == "TRAN_DATA") {
        		
        		this.fnc_Message("TMM130", "자료전송"); //[자료전송] 작업을 정상적으로 완료 하였습니다!
        		this.sRetValue = this.edtTRAN_SEQ.value; //해당 파일순번을 재조회하기 위해
        		this.fn_Search("X");	//조회

        	} 
        	//공통코드조회
        	else if (sMethodName == "GetCommCode") 
        	{
        	
        		//폼변수 할당
        		this.sSOURCE 	= this.dsCSFS_COM.getColumn(this.dsCSFS_COM.findRowExpr("COMD_CODE == 'SOURCE'"), "COMD_CDNM");
        		this.sCOMP_CODE = this.dsCSFS_COM.getColumn(this.dsCSFS_COM.findRowExpr("COMD_CODE == 'COMP_CODE'"), "COMD_CDNM");
        		
        		//콤보박스 바인딩처리
        		var arrParam = new Array();			
        		arrParam[0] = "COMBO,cmbSHRACCT_UNIT,dsSHRACCT_UNIT,0";
        		arrParam[1] = "COMBO,cmbCSFS_TRST,dsCSFS_TRST,0";
        		
        		this.fnc_CommonCodeInnerBind(arrParam);

        	}
        	/*
        	else if (sMethodName == "GetUserComboCode") {

        		//var arrParam = new Array();
        		
        		//arrParam[0] = "COMBO,cmbSHRACCT_GUBN,dsSHRACCT_GUBN,0";
        			
        		//this.fnc_UserComboInnerBind(arrParam);

        	}
        	*/
        	
        	//Transaction처리 후 JAVA return 변수 초기화
        	this.sRetValue	= "";
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리  |
         +------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {
        	// 기능없음
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*------------------------------------+
         |  자료생성 버튼 클릭 시
         +------------------------------------*/
        this.btnCREATE_DATA_onclick = function(obj,e)
        {
        	//조회항목 유효성 체크
        	if (!this.fn_SearchItemCheck()) return;

        	//공통 화면변수값 존재여부 체크
        	if( this.fnc_IsEmpty(this.sSOURCE) || this.fnc_IsEmpty(this.sSOURCE) )
        	{
        		this.fnc_Message("FAM006", "SOURCE"); //[ SOURCE ] 값이 없습니다. 시스템 담당자에게 문의하시기 바랍니다!
        		return;
        	}
        	
        	if( this.fnc_IsEmpty(this.sCOMP_CODE) || this.fnc_IsEmpty(this.sCOMP_CODE) )
        	{
        		this.fnc_Message("FAM006", "법인코드"); //[ 법인코드 ] 값이 없습니다. 시스템 담당자에게 문의하시기 바랍니다!
        		return;
        	}

        	var sMsg = "기준년월 ["+ this.fnc_GetMaskFormat(this.calSHRACCOUNT_PERIOD.fn_GetMonth(), "@@@@-@@") + "] [자료생성] 하시겠습니까";
        			   
        	if (!this.fnc_Message("TMM140", sMsg))	return;
        	
        	//초기화
        	this.fnc_DatasetClear("dsNS_CFS_DATA_M,dsNS_CFS_DATA_D");
        	
        	this.fn_TransactionCall("CREATE_DATA");
        }

        /*------------------------------------+
         |  자료전송 버튼 클릭 시
         +------------------------------------*/
        this.btnTRAN_DATA_onclick = function(obj,e)
        {	
        	//유효성 체크
        	if( !this.fn_FormItemCheck("btnTRAN_DATA") ) return;
        	
        	var sMsg = "기준년월 [" + this.calACCOUNT_PERIOD.text + "] [자료전송] 하시겠습니까";
        			   
        	if (!this.fnc_Message("TMM140", sMsg)) return;
        	
        	//전송상태 체크 트랜잭션 호출
        	this.fn_TransactionCall("SEARCH02");
        }

        /*---------------------------------------+
         |  GRID "grdNS_CFS_DATA_D" CELL 더블클릭 시 
         +---------------------------------------*/
        this.grdNS_CFS_DATA_D_oncelldblclick = function(obj,e)
        {
        	var columnName = this.fnc_getColId(obj, e.cell);
        	var objDs = this.objects[obj.binddataset];

        	var sSLIP_NUMB = "";

        	// 전표번호 클릭
        	if (columnName == "ATTRIBUTE10") {

        		//전표번호가 14자리 미만인지 체크
        		if (this.fnc_Length(objDs.getColumn(e.row, "ATTRIBUTE10")) < 14) return;
        		
        		sSLIP_NUMB = objDs.getColumn(e.row, "ATTRIBUTE10");
        		
        		//전표보기 수행
        		this.fnc_ViewSlipForm(sSLIP_NUMB, "SHR", this.sUSERLAVEL,"",""); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
        	}
        }
        /***************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                	   *
         ***************************************************************************************************/
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnTRAN_DATA.addEventHandler("onclick", this.btnTRAN_DATA_onclick, this);
            this.btnCREATE_DATA.addEventHandler("onclick", this.btnCREATE_DATA_onclick, this);
            this.grdNS_CFS_DATA_D.addEventHandler("oncelldblclick", this.grdNS_CFS_DATA_D_oncelldblclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.Static09.addEventHandler("onclick", this.Static09_onclick, this);
            this.Static16.addEventHandler("onclick", this.Static16_onclick, this);
            this.edtTRAN_SEQ.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCOMP_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("FAMG0070.xfdl");
        this.loadPreloadList();
       
    };
}
)();
