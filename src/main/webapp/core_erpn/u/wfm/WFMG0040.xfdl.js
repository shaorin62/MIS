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
                this.set_name("WFMG0040");
                this.set_titletext("연수지원관리");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCW_TRSPXM", this);
            obj.set_enableevent("true");
            obj._setContents("<ColumnInfo><Column id=\"TRSP_SEQN\" type=\"STRING\" size=\"5\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"10\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"10\"/><Column id=\"WOTM_YCNT\" type=\"STRING\" size=\"2\"/><Column id=\"TRAI_BEDE\" type=\"STRING\" size=\"8\"/><Column id=\"TRAI_ENDD\" type=\"STRING\" size=\"8\"/><Column id=\"TRAI_PROD\" type=\"STRING\" size=\"5\"/><Column id=\"TRPL_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"TRAI_PLAN\" type=\"STRING\" size=\"500\"/><Column id=\"TRSP_COST\" type=\"STRING\" size=\"15\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"OPOS_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"ENCO_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"WOTM_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"REMK_200X\" type=\"STRING\" size=\"256\"/><Column id=\"DOCU_IDXX\" type=\"STRING\" size=\"10\"/><Column id=\"APPR_SEQN\" type=\"STRING\" size=\"20\"/><Column id=\"ZERO_YSNO\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("40");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("41");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("0");
            obj.set_text("연수지원관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("42");
            obj.set_text("홈 > 1메뉴 > 자금계획관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("43");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "63", this);
            obj.set_taborder("14");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "57", "216", "7", null, null, this);
            obj.set_taborder("45");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("46");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "59", "128", "4", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("spEditBox01", "absolute", "8", null, null, "230", "25", "15", this);
            obj.set_taborder("48");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtWOTM_YCNT", "absolute", "813", null, "81", "21", null, "189", this);
            obj.set_taborder("26");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_readonly("false");
            obj.set_maxlength("2");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NUMB", "absolute", "116", null, "80", "21", null, "215", this);
            obj.set_taborder("12");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpEMPL_NUMB", "absolute", "198", null, "21", "21", null, "215", this);
            obj.set_taborder("13");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NAME", "absolute", "221", null, "100", "21", null, "215", this);
            obj.set_taborder("16");
            obj.set_maxlength("20");
            this.addChild(obj.name, obj);

            obj = new Calendar("calTRAI_BEDE", "absolute", "116", null, "100", "21", null, "163", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("28");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("false");

            obj = new Calendar("calWOTM_DATE", "absolute", "452", null, "100", "21", null, "189", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("true");
            obj.set_readonly("false");

            obj = new Static("Static17", "absolute", "29", null, "83", "21", null, "162", this);
            obj.set_taborder("27");
            obj.set_text("연수시작일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "29", null, "68", "21", null, "188", this);
            obj.set_taborder("21");
            obj.set_text("입사일자");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "29", null, "68", "21", null, "214", this);
            obj.set_taborder("11");
            obj.set_text("사원번호");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTRPL_NAME", "absolute", "116", null, "536", "21", null, "137", this);
            obj.set_taborder("34");
            obj.set_maxlength("100");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "655", "474", "40", "89", null, null, this);
            obj.set_taborder("49");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "684", null, "70", "21", null, "189", this);
            obj.set_taborder("25");
            obj.set_text("근속년");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "684", null, "124", "21", null, "214", this);
            obj.set_taborder("19");
            obj.set_text("연수지원신청금액");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "9", "474", "30", "89", null, null, this);
            obj.set_taborder("50");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "1136", "474", "25", "89", null, null, this);
            obj.set_taborder("51");
            obj.set_text("w25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "141", "473", "38", "8", null, null, this);
            obj.set_taborder("52");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "29", null, "68", "21", null, "112", this);
            obj.set_taborder("37");
            obj.set_text("연수계획");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "320", "474", "40", "85", null, null, this);
            obj.set_taborder("53");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "350", null, "92", "21", null, "188", this);
            obj.set_taborder("23");
            obj.set_text("근속발생일자");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "350", null, "97", "21", null, "215", this);
            obj.set_taborder("17");
            obj.set_text("부서/직위");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Calendar("calENCO_DATE", "absolute", "116", null, "100", "21", null, "189", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            obj.style.set_cursor("auto");
            obj.set_enable("true");

            obj = new Static("Static23", "absolute", "350", null, "92", "21", null, "162", this);
            obj.set_taborder("29");
            obj.set_text("연수종료일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Calendar("calTRAI_ENDD", "absolute", "452", null, "100", "21", null, "163", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("30");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Edit("edtTRAI_PROD", "absolute", "813", null, "81", "21", null, "163", this);
            obj.set_taborder("32");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_maxlength("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "966", "474", "38", "8", null, null, this);
            obj.set_taborder("54");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new TextArea("edtTRAI_PLAN", "absolute", "116", null, null, "108", "61", "24", this);
            obj.set_taborder("38");
            obj.set_maxlength("1000");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "29", null, "68", "21", null, "137", this);
            obj.set_taborder("33");
            obj.set_text("연수장소");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "684", null, "68", "21", null, "162", this);
            obj.set_taborder("31");
            obj.set_text("연수일수");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAME", "absolute", "452", null, "108", "21", null, "215", this);
            obj.set_taborder("18");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOPOS_NAME", "absolute", "562", null, "92", "21", null, "215", this);
            obj.set_taborder("39");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "549", "693", "38", "8", null, null, this);
            obj.set_taborder("55");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtTRSP_COST", "absolute", "813", null, "131", "21", null, "215", this);
            obj.set_taborder("20");
            obj.set_mask("9,999.999");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCW_TRSPXM", "absolute", "8", "128", null, null, "25", "260", this);
            obj.set_taborder("9");
            obj.set_binddataset("dsCW_TRSPXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"55\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"55\"/><Column size=\"143\"/><Column size=\"80\"/><Column size=\"180\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"사원번호\"/><Cell col=\"1\" cssclass=\"grd_essential\" text=\"성명\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"직위\"/><Cell col=\"4\" text=\"입사일자\"/><Cell col=\"5\" text=\"근속발생일자\"/><Cell col=\"6\" text=\"근속년\"/><Cell col=\"7\" cssclass=\"grd_essential\" text=\"연수시작일\"/><Cell col=\"8\" cssclass=\"grd_essential\" text=\"연수종료일\"/><Cell col=\"9\" edittype=\"text\" cssclass=\"grd_essential\" text=\"연수일수\"/><Cell col=\"10\" cssclass=\"grd_essential\" text=\"연수장소\"/><Cell col=\"11\" cssclass=\"grd_essential\" text=\"지원금액\"/><Cell col=\"12\" cssclass=\"grd_essential\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_NUMB\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:EMPL_NAME\" editlimit=\"15\" expandshow=\"hide\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"3\" text=\"bind:OPOS_NAME\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"none\" text=\"bind:ENCO_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"none\" text=\"bind:WOTM_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" edittype=\"none\" text=\"bind:WOTM_YCNT\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"none\" text=\"bind:TRAI_BEDE\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"none\" text=\"bind:TRAI_ENDD\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" text=\"bind:TRAI_PROD\" editlimit=\"5\"/><Cell col=\"10\" edittype=\"none\" style=\"align:left;\" text=\"bind:TRPL_NAME\" editlimit=\"50\"/><Cell col=\"11\" edittype=\"none\" style=\"align:right;\" text=\"bind:TRSP_COST\" editlimit=\"15\"/><Cell col=\"12\" edittype=\"none\" style=\"align:left;\" text=\"bind:REMK_200X\" editlimit=\"100\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "108", "262", "21", null, null, this);
            obj.set_taborder("56");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "581", "457", "80", "15", null, null, this);
            obj.set_taborder("57");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("58");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("59");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("60");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "342", "71", "52", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "28", "71", "68", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("연수기간");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("61");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "385", "71", "80", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "490", "71", "100", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_maxlength("30");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRTRAI_BEDE", "absolute", "96", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static55", "absolute", "198", "71", "14", "21", null, null, this);
            obj.set_taborder("66");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRTRAI_ENDD", "absolute", "213", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "467", "71", "21", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_cssclass("sytHelpPopup");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "313", "57", "40", "49", null, null, this);
            obj.set_taborder("69");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("71");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("72");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtREMK_200X", "absolute", "813", null, "313", "21", null, "137", this);
            obj.set_taborder("36");
            obj.set_maxlength("200");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "686", null, "68", "21", null, "136", this);
            obj.set_taborder("35");
            obj.set_text("비고");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "866", "473", "38", "8", null, null, this);
            obj.set_taborder("78");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "557", "701", "38", "8", null, null, this);
            obj.set_taborder("79");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "89", "61", "8", "41", null, null, this);
            obj.set_taborder("80");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "377", "61", "8", "41", null, null, this);
            obj.set_taborder("81");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkZERO_YSNO", "absolute", "951", null, "129", "21", null, "214", this);
            obj.set_taborder("82");
            obj.set_text("해외광고제 신청");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("연수지원관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edtEMPL_NAME","value","dsCW_TRSPXM","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtEMPL_NUMB","value","dsCW_TRSPXM","EMPL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtWOTM_YCNT","value","dsCW_TRSPXM","WOTM_YCNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","calTRAI_ENDD","value","dsCW_TRSPXM","TRAI_ENDD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edtTRAI_PLAN","value","dsCW_TRSPXM","TRAI_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","calWOTM_DATE","value","dsCW_TRSPXM","WOTM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edtTRAI_PROD","value","dsCW_TRSPXM","TRAI_PROD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","calENCO_DATE","value","dsCW_TRSPXM","ENCO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edtTRPL_NAME","value","dsCW_TRSPXM","TRPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtDEPT_NAME","value","dsCW_TRSPXM","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edtOPOS_NAME","value","dsCW_TRSPXM","OPOS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","calTRAI_BEDE","value","dsCW_TRSPXM","TRAI_BEDE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","edtTRSP_COST","value","dsCW_TRSPXM","TRSP_COST");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtREMK_200X","value","dsCW_TRSPXM","REMK_200X");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","chkZERO_YSNO","value","dsCW_TRSPXM","ZERO_YSNO");
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
        this.addIncludeScript("WFMG0040.xfdl", "script::lib_script_common.xjs");
        this.registerScript("WFMG0040.xfdl", function() {
        /****************************************************************************************************
        /*
         * @explanation		연수지원관리
         * @category	 	복리후생> 연수관리> 연수지원관리 
         * @author	   		김혜림
         * @cdate	  		2016.10.04
         * @version 1.0		최초 작성
         * WFMG0040.xml - <Created by Code Template generator>
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
        this.sBUTTONLIST  = "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "WFMG0040"; 
        this.sWOTM_YCNT   = "";//DB에서 근속년수 조회할 때 필요 변수
        this.GBL_KEYROWPOSITION1 =""; // 이전 row 선택시 사용변수
        this.GBL_KEYROWPOSITION2 =""; // 이전 row 선택시 사용변수
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
        	this.calSHRTRAI_BEDE.set_value(this.fnc_SubStr(iNowDate, 0, 6) + '01');
        	this.calSHRTRAI_ENDD.set_value(this.fnc_SubStr(iNowDate)); 
        	this.calSHRTRAI_BEDE.setFocus();

        	this.fn_Search();
        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {

        	this.parent.close();
        	
        }

        /*------------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) { 
        	
        	if (!this.fn_SearchItemCheck()) return; 
        	this.fnc_DatasetClear("dsCW_TRSPXM");
        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsCW_TRSPXM=dsCW_TRSPXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);

        	this.grdCW_TRSPXM.setFocus();
        	
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {  
        	var iRow = this.dsCW_TRSPXM.addRow();
        	this.dsCW_TRSPXM.set_rowposition(iRow); 
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) {

        		this.dsCW_TRSPXM.deleteRow(this.dsCW_TRSPXM.rowposition);  		

        	}

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsCW_TRSPXM");
        	/*var iNowDate = this.fnc_GetServerDateTime("DATE");
        	this.calSHRTRAI_BEDE.set_value(this.fnc_SubStr(iNowDate, 0, 4) + '0101');
        	this.calSHRTRAI_ENDD.set_value(this.fnc_SubStr(iNowDate)); 
        	this.edtSHREMPL_NAME.set_value("");
        	this.edtSHREMPL_NUMB.set_value("");*/
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	this.fn_SaveKeyRowposition();
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsCW_TRSPXM=dsCW_TRSPXM:U";
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
        	var sMessage = this.fnc_FormUnloadCheck("dsCW_TRSPXM", this);
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
        	
        	if (this.fnc_DatasetChangeCheck("dsCW_TRSPXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	} 
        	
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsCW_TRSPXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;	
        	}else{
        		var sQuestionText = "신청자 (" + this.fnc_Trim(this.dsCW_TRSPXM.getColumn(this.dsCW_TRSPXM.rowposition, "EMPL_NAME")) + ")";
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        	

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	if (!this.fnc_DatasetChangeCheck("dsCW_TRSPXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsCW_TRSPXM.getRowCount(); i++) {

        		//변경된 로우만 체크
        		if (this.fnc_ToUpper(this.dsCW_TRSPXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_TRSPXM.getColumn(i, "EMPL_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사원명", this.dsCW_TRSPXM, i, this.edtEMPL_NAME, "EMPL_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_TRSPXM.getColumn(i, "TRSP_COST"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "연수지원금액", this.dsCW_TRSPXM, i, this.edtTRSP_COST, "TRSP_COST");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_TRSPXM.getColumn(i, "WOTM_YCNT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "근속년", this.dsCW_TRSPXM, i, this.edtWOTM_YCNT, "WOTM_YCNT");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_TRSPXM.getColumn(i, "TRAI_BEDE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "연수시작일", this.dsCW_TRSPXM, i, this.calTRAI_BEDE, "TRAI_BEDE");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_TRSPXM.getColumn(i, "TRAI_ENDD"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "연수종료일", this.dsCW_TRSPXM, i, this.calTRAI_ENDD, "TRAI_ENDD");
        		}
        		
        		if(nexacro.toNumber(this.dsCW_TRSPXM.getColumn(i,"TRAI_BEDE")) > nexacro.toNumber(this.dsCW_TRSPXM.getColumn(i,"TRAI_ENDD"))){
        			this.fnc_Message("TMM125", "연수시작일이 종료일보다 클 수 없습니다.");
        			this.setFocus();
        			return false;
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_TRSPXM.getColumn(i, "TRAI_PROD"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "연수일수", this.dsCW_TRSPXM, i, this.edtTRAI_PROD, "TRAI_PROD");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_TRSPXM.getColumn(i, "TRPL_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "연수장소", this.dsCW_TRSPXM, i, this.edtTRPL_NAME, "TRPL_NAME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_TRSPXM.getColumn(i, "TRAI_PLAN"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "연수계획", this.dsCW_TRSPXM, i, this.edtTRAI_PLAN, "TRAI_PLAN");
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
        		sReturnString += " TRAI_BEDE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRTRAI_BEDE.value)); 
        		sReturnString += " TRAI_ENDD=" + this.fnc_Quote(this.fnc_Trim(this.calSHRTRAI_ENDD.value)); 
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); 
        		
        	} else if (sKind == "SAVE00") {
        	
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
        	
        	if (sMethodName == 'SEARCH00') { 
        		var row = this.dsCW_TRSPXM.findRowExpr("TRSP_SEQN=='"+this.GBL_KEYROWPOSITION1+"' && EMPL_NUMB=='"+this.GBL_KEYROWPOSITION2+"'");
        		if(row > -1) {
        			 this.dsCW_TRSPXM.set_rowposition(row);
        		}else {
        			 this.dsCW_TRSPXM.set_rowposition(0);
        		}
        		
        		this.fnc_Information(this.stInformation, this.dsCW_TRSPXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsCW_TRSPXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        		if(this.chkZERO_YSNO.value == "1"){
        				this.edtTRSP_COST.set_readonly(true);
        		}
        	} else if (sMethodName == "SAVE00") {
        		
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	
        	} else if (sMethodName ==  'SEARCH01') { /*근속년수 계산하여 담는 변수*/
        		if(this.sWOTM_YCNT!=null || this.sWOTM_YCNT!="")
        			this.edtWOTM_YCNT.set_value(this.sWOTM_YCNT);
        		
        	}
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
         /*--------------------------+
         | 이전rowposition key저장|
         +--------------------------*/

        this.fn_SaveKeyRowposition = function () {
        	
           this.GBL_KEYROWPOSITION1 =  this.dsCW_TRSPXM.getColumn(this.dsCW_TRSPXM.rowposition, "TRSP_SEQN");
           this.GBL_KEYROWPOSITION2 =  this.dsCW_TRSPXM.getColumn(this.dsCW_TRSPXM.rowposition, "EMPL_NUMB");
           
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
        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "";
        	var sArgument = ""; 
        		sArgument += " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sArgument += " action="    + this.fnc_Quote(sMethodName);
        		sArgument += " WOTM_DATE=" + calDate1;
        		sArgument += " TRAI_BEDE=" + calDate2;
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

         }
         
         
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
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
        			
        	}else  if(obj.name == "imgHelpSHREMPL_NUMB" || obj.name == "edtSHREMPL_NAME"){
        			arrParam[0] = "HRM0001";
        			arrParam[1] = "";
        			arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        			arrParam[3] = "N";
        			arrParam[4] = "edtSHREMPL_NAME";
        			arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        			arrParam[6] = "0,1";
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}

        }

        /*-------------------------------------+
         | Help Popup Open Grid                |
         +-------------------------------------*/
        this.fn_HelpDialoge_Grid = function (obj,sFromDs,sOldValue,sColumnID) {
        	var arrParam = new Array();
        	// 그리드 사원조회 (Popup)
        	if (obj.name == "grdCW_TRSPXM") {
        		if (obj.getCellProperty("body", obj.currentcell, "text") == "bind:EMPL_NAME") {		
        			arrParam[0] = "WFM0005"; 
        			arrParam[1] = ""
        			arrParam[2] = "EMPL_NAME";
        			arrParam[3] = "Y";
        			arrParam[4] = "grdCW_TRSPXM";
        			arrParam[5] = "EMPL_NUMB,EMPL_NAME,DEPT_NAME,OPOS_NAME,ENCO_DATE,WOTM_DATE";
        			arrParam[6] = "0,1,3,5,6,7";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        			
        		}
        	}
        }

        

        /**연수일수와 근속년수를 구하기 위한 이벤트 처리**/
        this.dsCW_TRSPXM_cancolumnchange = function(obj,e)
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

        
        /*사원번호는 수정이 안된다. 키값이다.*/
        this.dsCW_TRSPXM_onrowposchanged = function(obj,e)
        {
        if (this.dsCW_TRSPXM.rowcount > 0){
        	if(this.dsCW_TRSPXM.getRowType(obj.rowposition) == Dataset.ROWTYPE_INSERT){
        		this.imgHelpEMPL_NUMB.set_enable(true);
        		this.edtEMPL_NAME.set_readonly(false);
        	}else{
        		this.imgHelpEMPL_NUMB.set_enable(false);
        		this.edtEMPL_NAME.set_readonly(true);
           }
        }
        }

        this.dsCW_TRSPXM_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "EMPL_NAME") {
        		this.fn_HelpDialoge_Grid(this.grdCW_TRSPXM, "YES", e.oldvalue, e.columnid);
        	}
        }

        

        /*해외광고제 신청 체크*/
        this.chkZERO_YSNO_onclick = function(obj,e)
        {	
        	if(obj.value == "1"){
        		this.edtTRSP_COST.set_value("0");
        		//this.edtTRSP_COST.set_readonly(true);
        	}else if(obj.value == "0"){
        		//this.edtTRSP_COST.set_readonly(false);
        		this.edtTRSP_COST.set_value("");
        	}
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsCW_TRSPXM.addEventHandler("cancolumnchange", this.dsCW_TRSPXM_cancolumnchange, this);
            this.dsCW_TRSPXM.addEventHandler("onrowposchanged", this.dsCW_TRSPXM_onrowposchanged, this);
            this.dsCW_TRSPXM.addEventHandler("oncolumnchanged", this.dsCW_TRSPXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.imgHelpEMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtEMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtEMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calTRAI_BEDE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calWOTM_DATE.addEventHandler("oneditclick", this.calWOTM_DATE_oneditclick, this);
            this.edtTRPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calTRAI_ENDD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtTRAI_PROD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtTRAI_PLAN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtTRSP_COST.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.grdCW_TRSPXM.addEventHandler("onexpanddown", this.fn_HelpDialoge_Grid, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtREMK_200X.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.chkZERO_YSNO.addEventHandler("onchanged", this.chkZERO_YSNO_onclick, this);

        };

        this.loadIncludeScript("WFMG0040.xfdl");
        this.loadPreloadList();
       
    };
}
)();
