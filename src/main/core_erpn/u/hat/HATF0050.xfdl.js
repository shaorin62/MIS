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
                this.set_name("HATF0050");
                this.set_titletext("출장승인신청 등록");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsBUTR_GUBN</Col><Col id=\"CODEID\">BUTR_GUBN</Col><Col id=\"HEADFLAG\">SELECT</Col></Row><Row><Col id=\"DSNAME\">dsSHRDPAY_CODE</Col><Col id=\"CODEID\">DPAY_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsSHRBUTR_PURS</Col><Col id=\"CODEID\">BUTR_PURS</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAT_BUTRXD", this);
            obj._setContents("<ColumnInfo><Column id=\"DOCU_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"BSRP_SEQ1\" size=\"256\" prop=\"defalult\" type=\"STRING\"/><Column id=\"BSRP_SEQ2\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"APLT_EMNR\" type=\"STRING\" size=\"256\"/><Column id=\"APLT_EMNM\" type=\"STRING\" size=\"256\"/><Column id=\"APLT_OPCD\" type=\"STRING\" size=\"256\"/><Column id=\"APLT_OPNM\" type=\"STRING\" size=\"256\"/><Column id=\"APLT_DTCD\" type=\"STRING\" size=\"256\"/><Column id=\"APLT_DTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ADNV_AMNT\" type=\"STRING\" size=\"256\"/><Column id=\"PERS_TREX\" type=\"STRING\" size=\"10\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_APPRXH", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_BOX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DOCU_IDXX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBJ_NAME\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_STR\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_PROC\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_DATE\" size=\"12\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_APPROVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"documentID\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"documentType\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"HtmlDocument\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"subject\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"recipient\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"creator\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"documentStatus\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"isUsedFile\" size=\"3\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBsrpCode", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"10\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">임직원</Col><Col id=\"CODEID\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBsrpGubn", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"10\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">국내</Col><Col id=\"CODEID\">10</Col></Row><Row><Col id=\"DSNAME\">국외</Col><Col id=\"CODEID\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsButrPurs", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"10\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">업무출장</Col><Col id=\"CODEID\">10</Col></Row><Row><Col id=\"DSNAME\">연수출장</Col><Col id=\"CODEID\">20</Col></Row><Row><Col id=\"DSNAME\">업무+연수</Col><Col id=\"CODEID\">30</Col></Row><Row><Col id=\"DSNAME\">상사지원</Col><Col id=\"CODEID\">40</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAT_HARMXM", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SECT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OPOS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OPOS_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"WABK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"WABK_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"WAGE_ACNO\" type=\"STRING\" size=\"256\"/><Column id=\"WAGE_DPST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAT_BUTRXM", this);
            obj._setContents("<ColumnInfo><Column id=\"APPR_SEQN\" size=\"20\" type=\"STRING\"/><Column id=\"BSRP_SEQ1\" size=\"20\" type=\"STRING\"/><Column id=\"BTCL_SEQ1\" size=\"20\" type=\"STRING\"/><Column id=\"TITL_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"DCSN_YENO\" size=\"2\" type=\"STRING\"/><Column id=\"BSRP_STDT\" size=\"10\" type=\"STRING\"/><Column id=\"BSRP_ENDD\" size=\"10\" type=\"STRING\"/><Column id=\"SDYT_STDT\" size=\"10\" type=\"STRING\"/><Column id=\"SDYT_ENDD\" size=\"10\" type=\"STRING\"/><Column id=\"BSRP_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"BSRP_CDNM\" size=\"100\" type=\"STRING\"/><Column id=\"BSRP_DSTN\" size=\"100\" type=\"STRING\"/><Column id=\"BSRP_PLAC\" size=\"256\" type=\"STRING\"/><Column id=\"BSRP_PURC\" type=\"STRING\" size=\"10\"/><Column id=\"BSRP_PUNM\" type=\"STRING\" size=\"100\"/><Column id=\"BSRP_PURE\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_RAIL\" type=\"STRING\" size=\"2\"/><Column id=\"TRAP_RAIL\" type=\"INT\" size=\"10\"/><Column id=\"TRAN_BUSB\" type=\"STRING\" size=\"2\"/><Column id=\"TRAP_BUSB\" type=\"INT\" size=\"10\"/><Column id=\"TRAN_CARM\" type=\"STRING\" size=\"2\"/><Column id=\"TRAP_CARM\" type=\"INT\" size=\"10\"/><Column id=\"TRAN_AIRB\" type=\"STRING\" size=\"2\"/><Column id=\"TRAP_AIRB\" type=\"INT\" size=\"10\"/><Column id=\"TRAN_SHIP\" type=\"STRING\" size=\"2\"/><Column id=\"TRAP_SHIP\" type=\"INT\" size=\"10\"/><Column id=\"TRAN_CARB\" type=\"STRING\" size=\"2\"/><Column id=\"TRAP_CARB\" type=\"INT\" size=\"10\"/><Column id=\"TRAN_ETCR\" type=\"STRING\" size=\"2\"/><Column id=\"TRAP_ETCR\" type=\"INT\" size=\"10\"/><Column id=\"TRAN_ETCD\" type=\"STRING\" size=\"256\"/><Column id=\"BTCL_TRAN\" type=\"INT\" size=\"10\"/><Column id=\"BTCL_ROOM\" type=\"INT\" size=\"10\"/><Column id=\"BTCL_DAYP\" type=\"INT\" size=\"10\"/><Column id=\"BTCL_ETCP\" type=\"INT\" size=\"10\"/><Column id=\"BTCL_ADDP\" type=\"INT\" size=\"10\"/><Column id=\"BTCL_LDDP\" type=\"INT\" size=\"10\"/><Column id=\"BTCL_ALLP\" type=\"INT\" size=\"10\"/><Column id=\"RCPX_DNSP\" type=\"INT\" size=\"10\"/><Column id=\"RCPX_PNSP\" type=\"INT\" size=\"10\"/><Column id=\"RCPX_ALLP\" type=\"INT\" size=\"10\"/><Column id=\"DETL_ETCR\" type=\"STRING\" size=\"3000\"/><Column id=\"BTCL_RPDT\" type=\"STRING\" size=\"2000\"/><Column id=\"STAT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"STAT_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"STAT_DATE\" type=\"STRING\" size=\"10\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"10\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"10\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"10\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"10\"/><Column id=\"DRFT_DATE\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "65", "25", null, this);
            obj.set_taborder("39");
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
            obj.set_taborder("13");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("35");
            obj.set_text("출장승인신청등록");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("36");
            obj.set_text("홈 > 1메뉴 > 자금계획관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("37");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("38");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "52", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("제목");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "63", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("42");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("43");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "154", "216", "6", null, null, this);
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

            obj = new Button("btn_PROC", "absolute", "8", "35", "74", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_text("결재상신");
            obj.set_cssclass("btn_WF_Module");
            obj.set_enable("false");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CANC", "absolute", "85", "35", "74", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_text("결재취소");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "28", "95", "52", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_text("작성자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "83", "95", "80", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "165", "95", "21", "21", null, null, this);
            obj.set_taborder("52");
            obj.set_cssclass("sytHelpPopup");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "188", "95", "84", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_DEPT", "absolute", "274", "95", "116", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "390", "90", "40", "34", null, null, this);
            obj.set_taborder("55");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "418", "95", "76", "21", null, null, this);
            obj.set_taborder("56");
            obj.set_text("출장기간");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBSRP_DATE1", "absolute", "487", "95", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static55", "absolute", "589", "95", "14", "21", null, null, this);
            obj.set_taborder("57");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBSRP_DATE2", "absolute", "604", "95", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static27", "absolute", "704", "90", "40", "34", null, null, this);
            obj.set_taborder("58");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "732", "95", "76", "21", null, null, this);
            obj.set_taborder("59");
            obj.set_text("연수일정");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSDYT_DATE1", "absolute", "802", "95", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static12", "absolute", "904", "95", "14", "21", null, null, this);
            obj.set_taborder("60");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSDYT_DATE2", "absolute", "919", "95", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Edit("edt_TITL_NAME", "absolute", "83", "69", "936", "21", null, null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "591", "125", "48", "35", null, null, this);
            obj.set_taborder("61");
            obj.set_text("H35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRow", "absolute", null, "135", "62", "21", "90", null, this);
            obj.set_taborder("6");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRow", "absolute", null, "135", "62", "21", "25", null, this);
            obj.set_taborder("7");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static95", "absolute", "8", "139", "294", "21", null, null, this);
            obj.set_taborder("63");
            obj.set_text("출장자 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox01", "absolute", "8", null, null, "350", "25", "14", this);
            obj.set_taborder("64");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "589", "327", "48", "25", null, null, this);
            obj.set_taborder("65");
            obj.set_text("H25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "8", "347", "216", "6", null, null, this);
            obj.set_taborder("66");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "28", null, "80", "21", null, "339", this);
            obj.set_taborder("67");
            obj.set_text("출장구분");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "28", null, "56", "21", null, "312", this);
            obj.set_taborder("68");
            obj.set_text("출장지");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "56", "626", "128", "5", null, null, this);
            obj.set_taborder("69");
            obj.set_text("h 5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "56", "557", "128", "5", null, null, this);
            obj.set_taborder("70");
            obj.set_text("h 5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "9", "519", "30", "131", null, null, this);
            obj.set_taborder("71");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_BSRP_CODE", "absolute", "123", null, "199", "21", null, "338", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_innerdataset("@dsBsrpGubn");
            obj.set_codecolumn("CODEID");
            obj.set_datacolumn("DSNAME");
            obj.set_value("10");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new Static("Static24", "absolute", "339", null, "107", "21", null, "338", this);
            obj.set_taborder("72");
            obj.set_text("출장목적");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_BSRP_PURC", "absolute", "417", null, "416", "21", null, "338", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_innerdataset("@dsButrPurs");
            obj.set_codecolumn("CODEID");
            obj.set_datacolumn("DSNAME");
            obj.set_value("10");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new Edit("edt_BSRP_PURE", "absolute", "807", null, "300", "21", null, "338", this);
            obj.set_taborder("10");
            obj.set_maxlength("100");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_BSRP_PLAC", "absolute", "118", null, "408", "21", null, "313", this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_DETL_ETCR", "absolute", "116", null, null, "63", "46", "92", this);
            obj.set_taborder("33");
            obj.set_maxlength("2000");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_BTCL_RPDT", "absolute", "116", null, null, "63", "46", "22", this);
            obj.set_taborder("34");
            obj.set_maxlength("2000");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAT_BUTRXD", "absolute", "8", "160", null, null, "25", "391", this);
            obj.set_taborder("62");
            obj.set_binddataset("dsAT_BUTRXD");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"구분\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"사번\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_essential\" text=\"성명\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_essential\" text=\"직급\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_essential\" text=\"부서\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_edit\" text=\"전도금\"/></Band><Band id=\"body\"><Cell style=\"align: ;\" text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"none\" style=\"align:center middle;\" text=\"bind:EMPL_CODE\" editdisplay=\"edit\" suppress=\"0\" combodisplay=\"edit\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"align: ;\" text=\"bind:APLT_EMNR\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" style=\"align:center middle;\" text=\"bind:APLT_EMNM\" editlimit=\"20\" editimemode=\"hangul\" editdisplay=\"edit\" editlengthunit=\"utf8\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"expr:dataset.EMPL_CODE == '10' ? 'none' : 'text'\" style=\"align:center middle;\" text=\"bind:APLT_OPNM\" editlimit=\"20\" editdisplay=\"edit\" editlengthunit=\"utf8\"/><Cell col=\"5\" edittype=\"expr:dataset.EMPL_CODE == '10' ? 'none' : 'text'\" style=\"align:center middle;\" text=\"bind:APLT_DTNM\" editdisplay=\"edit\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right middle;\" text=\"bind:ADNV_AMNT\" mask=\"###,###,###\" editlimit=\"10\" editdisplay=\"edit\" editlimitbymask=\"integer\" editlengthunit=\"utf8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "8", null, "294", "21", null, "365", this);
            obj.set_taborder("73");
            obj.set_text("여비정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", "28", null, "80", "21", null, "284", this);
            obj.set_taborder("74");
            obj.set_text("교통편");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_TRAN_RAIL", "absolute", "116", null, "60", "21", null, "284", this);
            obj.set_taborder("12");
            obj.set_text("철도");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_TRAN_AIRB", "absolute", "116", null, "60", "21", null, "258", this);
            obj.set_taborder("19");
            obj.set_text("항공");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_TRAP_RAIL", "absolute", "168", null, "100", "21", null, "284", this);
            obj.set_taborder("14");
            obj.set_mask("@@@,@@@,@@@");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_TRAP_AIRB", "absolute", "168", null, "100", "21", null, "258", this);
            obj.set_taborder("20");
            obj.set_mask("@@@,@@@,@@@");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_TRAN_BUSB", "absolute", "292", null, "60", "21", null, "284", this);
            obj.set_taborder("15");
            obj.set_text("버스");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_TRAN_SHIP", "absolute", "292", null, "60", "21", null, "258", this);
            obj.set_taborder("21");
            obj.set_text("선박");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_TRAP_BUSB", "absolute", "344", null, "100", "21", null, "284", this);
            obj.set_taborder("16");
            obj.set_mask("@@@,@@@,@@@");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_TRAP_SHIP", "absolute", "344", null, "100", "21", null, "258", this);
            obj.set_taborder("22");
            obj.set_mask("@@@,@@@,@@@");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_TRAN_CARM", "absolute", "468", null, "60", "21", null, "284", this);
            obj.set_taborder("17");
            obj.set_text("자가차");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_TRAN_CARB", "absolute", "468", null, "60", "21", null, "258", this);
            obj.set_taborder("23");
            obj.set_text("회사차");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_TRAP_CARM", "absolute", "532", null, "100", "21", null, "284", this);
            obj.set_taborder("18");
            obj.set_mask("@@@,@@@,@@@");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_TRAP_CARB", "absolute", "532", null, "100", "21", null, "258", this);
            obj.set_taborder("24");
            obj.set_mask("@@@,@@@,@@@");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelp_TRAN_CARM", "absolute", "634", null, "21", "21", null, "284", this);
            obj.set_taborder("75");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_BSRP_DSTN", "absolute", "748", null, "100", "21", null, "284", this);
            obj.set_taborder("93");
            obj.set_mask("@@@,@@@,@@@");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_TRAP_ETCR", "absolute", "748", null, "100", "21", null, "258", this);
            obj.set_taborder("26");
            obj.set_mask("@@@,@@@,@@@");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_TRAN_ETCR", "absolute", "688", null, "60", "21", null, "258", this);
            obj.set_taborder("25");
            obj.set_text("기타");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "688", null, "80", "21", null, "284", this);
            obj.set_taborder("76");
            obj.set_text("출장거리");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_TRAN_ETCD", "absolute", "850", null, "291", "21", null, "258", this);
            obj.set_taborder("27");
            obj.set_maxlength("100");
            this.addChild(obj.name, obj);

            obj = new Static("Static76", "absolute", "28", null, "80", "21", null, "222", this);
            obj.set_taborder("77");
            obj.set_text("출장여비");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "116", null, "56", "21", null, "222", this);
            obj.set_taborder("78");
            obj.set_text("교통비");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "116", null, "56", "21", null, "196", this);
            obj.set_taborder("79");
            obj.set_text("공제액");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "116", null, "80", "21", null, "170", this);
            obj.set_taborder("80");
            obj.set_text("자료수집비");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_BTCL_TRAN", "absolute", "191", null, "100", "21", null, "222", this);
            obj.set_taborder("94");
            obj.set_mask("@@@,@@@,@@@");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_BTCL_ADDP", "absolute", "191", null, "100", "21", null, "196", this);
            obj.set_taborder("97");
            obj.set_mask("@@@,@@@,@@@");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_RCPX_DNSP", "absolute", "191", null, "100", "21", null, "170", this);
            obj.set_taborder("31");
            obj.set_mask("@@@,@@@,@@@");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "336", null, "49", "21", null, "222", this);
            obj.set_taborder("81");
            obj.set_text("숙박비");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "336", null, "110", "21", null, "196", this);
            obj.set_taborder("82");
            obj.set_text("장기출장공제액");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "336", null, "110", "21", null, "170", this);
            obj.set_taborder("83");
            obj.set_text("접대비");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_BTCL_ROOM", "absolute", "434", null, "100", "21", null, "222", this);
            obj.set_taborder("95");
            obj.set_mask("@@@,@@@,@@@");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_BTCL_LDDP", "absolute", "434", null, "100", "21", null, "196", this);
            obj.set_taborder("98");
            obj.set_mask("@@@,@@@,@@@");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_RCPX_PNSP", "absolute", "434", null, "100", "21", null, "170", this);
            obj.set_taborder("32");
            obj.set_mask("@@@,@@@,@@@");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelp_BTCL_ROOM", "absolute", "536", null, "21", "21", null, "222", this);
            obj.set_taborder("28");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "605", null, "49", "21", null, "222", this);
            obj.set_taborder("84");
            obj.set_text("일비");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_BTCL_DAYP", "absolute", "643", null, "100", "21", null, "222", this);
            obj.set_taborder("96");
            obj.set_mask("@@@,@@@,@@@");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelp_BTCL_DAYP", "absolute", "745", null, "21", "21", null, "222", this);
            obj.set_taborder("29");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "814", null, "49", "21", null, "222", this);
            obj.set_taborder("85");
            obj.set_text("기타");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "814", null, "49", "21", null, "196", this);
            obj.set_taborder("86");
            obj.set_text("계");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "814", null, "49", "21", null, "170", this);
            obj.set_taborder("87");
            obj.set_text("계");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_BTCL_ETCP", "absolute", "855", null, "100", "21", null, "222", this);
            obj.set_taborder("30");
            obj.set_mask("@@@,@@@,@@@");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_BTCL_ALLP", "absolute", "855", null, "100", "21", null, "196", this);
            obj.set_taborder("99");
            obj.set_mask("@@@,@@@,@@@");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_RCPX_ALLP", "absolute", "855", null, "100", "21", null, "170", this);
            obj.set_taborder("100");
            obj.set_mask("@@@,@@@,@@@");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "28", null, "104", "48", null, "103", this);
            obj.set_taborder("88");
            obj.set_text("교통비\r\n세부내역\r\n및 기타사항");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "517", "547", "80", "15", null, null, this);
            obj.set_taborder("89");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "56", "696", "128", "5", null, null, this);
            obj.set_taborder("90");
            obj.set_text("h 5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "28", null, "104", "51", null, "31", this);
            obj.set_taborder("91");
            obj.set_text("출장계획");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "1141", "359", "20", "335", null, null, this);
            obj.set_taborder("92");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "842", null, "33", "21", null, "283", this);
            obj.set_taborder("101");
            obj.set_text("KM");
            obj.set_cssclass("styFormSubCap");
            obj.style.set_background("transparent left middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("출장승인신청 등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item8","calSHRBSRP_DATE1","value","dsAT_BUTRXM","BSRP_STDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","calSHRBSRP_DATE2","value","dsAT_BUTRXM","BSRP_ENDD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","calSHRSDYT_DATE1","value","dsAT_BUTRXM","SDYT_STDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","calSHRSDYT_DATE2","value","dsAT_BUTRXM","SDYT_ENDD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_TITL_NAME","value","dsAT_BUTRXM","TITL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","rdo_BSRP_CODE","value","dsAT_BUTRXM","BSRP_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","rdo_BSRP_PURC","value","dsAT_BUTRXM","BSRP_PURC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_BSRP_PURE","value","dsAT_BUTRXM","BSRP_PURE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_BSRP_PLAC","value","dsAT_BUTRXM","BSRP_PLAC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","ta_DETL_ETCR","value","dsAT_BUTRXM","DETL_ETCR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","ta_BTCL_RPDT","value","dsAT_BUTRXM","BTCL_RPDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","chk_TRAN_RAIL","value","dsAT_BUTRXM","TRAN_RAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_TRAP_RAIL","value","dsAT_BUTRXM","TRAP_RAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","chk_TRAN_BUSB","value","dsAT_BUTRXM","TRAN_BUSB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edt_TRAP_BUSB","value","dsAT_BUTRXM","TRAP_BUSB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","chk_TRAN_CARM","value","dsAT_BUTRXM","TRAN_CARM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edt_TRAP_CARM","value","dsAT_BUTRXM","TRAP_CARM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","chk_TRAN_AIRB","value","dsAT_BUTRXM","TRAN_AIRB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","edt_TRAP_AIRB","value","dsAT_BUTRXM","TRAP_AIRB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","chk_TRAN_SHIP","value","dsAT_BUTRXM","TRAN_SHIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","edt_TRAP_SHIP","value","dsAT_BUTRXM","TRAP_SHIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","chk_TRAN_CARB","value","dsAT_BUTRXM","TRAN_CARB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","edt_TRAP_CARB","value","dsAT_BUTRXM","TRAP_CARB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","chk_TRAN_ETCR","value","dsAT_BUTRXM","TRAN_ETCR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","edt_TRAP_ETCR","value","dsAT_BUTRXM","TRAP_ETCR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","edt_TRAN_ETCD","value","dsAT_BUTRXM","TRAN_ETCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","edt_BTCL_TRAN","value","dsAT_BUTRXM","BTCL_TRAN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","edt_BTCL_ROOM","value","dsAT_BUTRXM","BTCL_ROOM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","edt_BTCL_DAYP","value","dsAT_BUTRXM","BTCL_DAYP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","edt_BTCL_ETCP","value","dsAT_BUTRXM","BTCL_ETCP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","edt_BTCL_ADDP","value","dsAT_BUTRXM","BTCL_ADDP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","edt_BTCL_LDDP","value","dsAT_BUTRXM","BTCL_LDDP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","edt_BTCL_ALLP","value","dsAT_BUTRXM","BTCL_ALLP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","edt_RCPX_DNSP","value","dsAT_BUTRXM","RCPX_DNSP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","edt_RCPX_PNSP","value","dsAT_BUTRXM","RCPX_PNSP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","edt_RCPX_ALLP","value","dsAT_BUTRXM","RCPX_ALLP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","edt_BSRP_DSTN","value","dsAT_BUTRXM","BSRP_DSTN");
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
        this.addIncludeScript("HATF0050.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HATF0050.xfdl", function() {
        /****************************************************************************************************
        /*
         * @explanation		출장승인신청 등록
         * @category	 	인사관리>출장관리>출장승인신청 등록 
         * @author	   		박정윤
         * @cdate	  		2016.09.12
         * @version 1.0		최초 작성
         * HATC0010.xml - <Created by Code Template generator>
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
        //this.sBUTTONLIST  = "TTFTFTFF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sBUTTONLIST  = "TTFFFTFF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "HATF0050"; 
        this.sDOCUID 	  = "";
        this.stChk        = ""; //로딩상태체크(신규, 또는 수정)
        this.sAPPLDATE    = this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"));
        this.sEMPLGUBN     = ""; // 직원 구분
        this.sSTRTCHCK     = ""; // 로딩상태체크(신규, 또는 수정)
        this.sTITLNAME     = "";

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

        	this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
        	this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);
        	this.edtSHREMPL_DEPT.set_value(application.GBL_DEPTNM);
        	
        	/*신청 및 내역에서 선택된 신청서 종류를 setting*/
        	this.sDOCUID = this.parent.sDOCUIDXX;
        	
        	if(this.parent.sAPPRGUBN == "cre"){ /*상신일때*/
        		this.btn_PROC.set_enable(true);
        		this.fn_formNotEnable();
        	}else if(this.parent.sAPPRGUBN == "del"){ /*취소일때*/
        		this.btn_CANC.set_enable(true);
        		this.fn_formNotEnable();
        	}
        	
        	if(this.parent.sAPPRSTAT != "N" && this.parent.sAPPRSTAT != null){
        		this.fn_formNotEnable();
        	}
        	
           	/* 화면 구분값에 따른 적용 */
        	if(this.parent.sAPPRSEQN == null || this.parent.sAPPRSEQN == ""){
        	
        		//사원정보 
        		this.fnc_DatasetClear("dsAT_HARMXM");
        		var sMethodName = "SEARCH01";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsAT_HARMXM=dsAT_HARMXM";
        		var sArgument   = this.fn_CreateArgument(sMethodName);

        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        		//DATASET 설정
        		var nRow = this.dsAT_BUTRXM.addRow();
        		this.dsAT_BUTRXM.setColumn(nRow, "STAT_CODE", "N");  // 진행상태코드 (N: 임시저장)
        		this.dsAT_BUTRXM.setColumn(nRow, "STAT_DATE", this.fnc_SubStr(this.fnc_GetServerDateTime("DATE")));   // 진행상태 일자

        		this.dsAT_BUTRXM.setColumn(nRow, "INST_USID", application.GBL_EMPLNO);   // 작성자
        	
        		this.dsAT_BUTRXM.setColumn(nRow, "BSRP_CODE", "10");
        		this.dsAT_BUTRXM.setColumn(nRow, "BSRP_PURC", "10");
        		
        		this.dsAT_BUTRXM.setColumn(nRow, "TRAN_RAIL", "0");   // 교통편(기차)
        		this.dsAT_BUTRXM.setColumn(nRow, "TRAN_BUSB", "0");   // 교통편(버스)
        		this.dsAT_BUTRXM.setColumn(nRow, "TRAN_CARM", "0");   // 교통편(자가)
        		this.dsAT_BUTRXM.setColumn(nRow, "TRAN_CARB", "0");   // 교통편(회사차)
        		this.dsAT_BUTRXM.setColumn(nRow, "TRAN_AIRB", "0");   // 교통편(비행기)
        		this.dsAT_BUTRXM.setColumn(nRow, "TRAN_SHIP", "0");   // 교통편(배)
        		this.dsAT_BUTRXM.setColumn(nRow, "TRAN_ETCR", "0");   // 교통편(기타)

        		this.dsAT_BUTRXM.setColumn(nRow, "TRAP_RAIL", 0);     // 교통비(기차)
        		this.dsAT_BUTRXM.setColumn(nRow, "TRAP_BUSB", 0);     // 교통비(버스)
        		this.dsAT_BUTRXM.setColumn(nRow, "TRAP_CARM", 0);     // 교통비(자가)
        		this.dsAT_BUTRXM.setColumn(nRow, "TRAP_CARB", 0);     // 교통비(회사차)
        		this.dsAT_BUTRXM.setColumn(nRow, "TRAP_AIRB", 0);     // 교통비(비행기)
        		this.dsAT_BUTRXM.setColumn(nRow, "TRAP_SHIP", 0);     // 교통비(배)
        		this.dsAT_BUTRXM.setColumn(nRow, "TRAP_ETCR", 0);     // 교통비(기타)

        		this.dsAT_BUTRXM.setColumn(nRow, "BTCL_TRAN", 0);     // 출장여비(교통비)
        		this.dsAT_BUTRXM.setColumn(nRow, "BTCL_ROOM", 0);     // 출장여비(숙박비)
        		this.dsAT_BUTRXM.setColumn(nRow, "BTCL_DAYP", 0);     // 출장여비(일비)
        		this.dsAT_BUTRXM.setColumn(nRow, "BTCL_ETCP", 0);     // 출장여비(기타)
        		this.dsAT_BUTRXM.setColumn(nRow, "BTCL_ADDP", 0);     // 출장여비(일반공제)
        		this.dsAT_BUTRXM.setColumn(nRow, "BTCL_LDDP", 0);     // 출장여비(장기출장공제)
        		this.dsAT_BUTRXM.setColumn(nRow, "BTCL_ALLP", 0);     // 출장여비(합계)

        		this.dsAT_BUTRXM.setColumn(nRow, "RCPX_DNSP", 0);     // 해외시장개척비(자료수집비)
        		this.dsAT_BUTRXM.setColumn(nRow, "RCPX_PNSP", 0);     // 해외시장개척비(접대비)
        		this.dsAT_BUTRXM.setColumn(nRow, "RCPX_ALLP", 0);     // 해외시장개척비합계

            	this.dsTM_APPRXH.addRow();
        		this.dsTM_APPRXH.setColumn(0,"DOCU_IDXX","KHR120");
        		this.dsTM_APPRXH.setColumn(0,"EMPL_NUMB",application.GBL_EMPLNO);
        		this.dsTM_APPRXH.setColumn(0,"APPR_STAT","N");
        		this.dsTM_APPRXH.setColumn(0,"SUBJ_NAME","출장승인신청서");
        		this.dsTM_APPRXH.setColumn(0,"DEPT_CODE",application.GBL_DEPTCD);

        		// 신청자 신규 행 추가
        		//this.fn_NewRowSet();
        		//this.fn_Enable();

            	this.edt_TITL_NAME.setFocus();

        	}else{

        		this.fnc_DatasetClear('dsTM_APPRXH');
        		this.fnc_DatasetClear('dsAT_BUTRXM');
        		this.fnc_DatasetClear('dsAT_BUTRXD');
        		var sMethodName = "SEARCH00";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsTM_APPRXH=dsTM_APPRXH dsAT_BUTRXM=dsAT_BUTRXM dsAT_BUTRXD=dsAT_BUTRXD";
        		var sArgument   = this.fn_CreateArgument(sMethodName);

        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            	this.edt_TITL_NAME.setFocus();
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
        	this.parent.fn_goMenu();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {  
        	var iRow = this.dsAT_BUTRXD.addRow();
        	this.dsAT_BUTRXD.set_rowposition(iRow); 
        	this.dsAT_BUTRXD.setColumn(iRow,"DOCU_IDXX",this.sDOCUID);
        	this.dsAT_BUTRXD.setCellPos(this.fnc_GridColumnIndex(this.grdAT_BUTRXD, "BSRP_SEQ1"));
        	this.dsAT_BUTRXD.setFocus();
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
        	
        	this.fnc_DataSetCancel("dsAT_HARMXM");
        	this.fnc_DataSetCancel("dsAT_BUTRXM");
        	this.fnc_DataSetCancel("dsAT_BUTRXD");
        	this.fnc_DataSetCancel("dsTM_APPRXH");
        	this.grdAT_BUTRXD.setFocus();
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsAT_BUTRXM=dsAT_BUTRXM:A dsAT_BUTRXD=dsAT_BUTRXD:A dsTM_APPRXH=dsTM_APPRXH:A";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdAT_BUTRXD.setFocus();
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
        	
        	if (this.fnc_DatasetChangeCheck("dsAT_BUTRXM") || this.fnc_DatasetChangeCheck("dsAT_BUTRXD")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsAT_BUTRXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;	
        	}
        	
        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else if (iSelectRowCount == 1){
        		var sQuestionText = "사원명 (" + this.fnc_Trim(this.dsAT_BUTRXM.getColumn(this.dsAT_BUTRXM.rowposition, "EMPL_NAME")) + ")";
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsAT_BUTRXM") && !this.fnc_DatasetChangeCheck("dsAT_BUTRXD") && !this.fnc_DatasetChangeCheck("dsTM_APPRXH") ) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

            var mRow = this.dsAT_BUTRXM.rowposition;
            var dRow = this.dsAT_BUTRXD.rowposition;

        	var strGubn = this.dsAT_BUTRXM.getColumn(0,"BSRP_CODE");
        	var strDocu = ""	
         
            // 출장신청서, 외근신청서 따로 갈 경우 대비 // KHR123으로 변경 필요
        	if( strGubn == "30"){ // 외근일 경우 KHR123 외근신청서
        	    this.dsTM_APPRXH.setColumn(mRow,"DOCU_IDXX", "KHR120");  
        		this.dsAT_BUTRXM.setColumn(mRow,"DOCU_IDXX", "KHR120");
        		this.dsAT_BUTRXD.setColumn(mRow,"DOCU_IDXX", "KHR120");
        	} else { //국내, 국외 출장일 겨우 KHR120 출장신청서
        	    this.dsTM_APPRXH.setColumn(mRow,"DOCU_IDXX", "KHR120");
        		this.dsAT_BUTRXM.setColumn(mRow,"DOCU_IDXX", "KHR120");
        		this.dsAT_BUTRXD.setColumn(mRow,"DOCU_IDXX", "KHR120");
        	}
        	
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsAT_BUTRXM.getRowCount(); i++) {

        		//변경된 로우만 체크
        		if (this.fnc_ToUpper(this.dsAT_BUTRXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(i, "TITL_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "제목", this.dsAT_BUTRXM, i, this.edt_TITL_NAME, "TITL_NAME");
        			this.edt_TITL_NAME.setFocus();
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(i, "INST_USID"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "작성자", this.dsAT_BUTRXM, i, this.edtSHREMPL_NUMB, "INST_USID");
        			this.edtSHREMPL_NUMB.setFocus();
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(i, "BSRP_STDT"))) < 1) {
        			return this.fnc_CheckPostAction( "TMM072", "출장시작일정", this.dsAT_BUTRXM, i, this.calSHRBSRP_DATE1, "BSRP_STDT");
        			this.calSHRBSRP_DATE1.setFocus();
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(i, "BSRP_ENDD"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "출장종료일정", this.dsAT_BUTRXM, i, this.calSHRBSRP_DATE2, "BSRP_ENDD");
        			this.calSHRBSRP_DATE2.setFocus();
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(i, "BSRP_PLAC"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "출장지", this.dsAT_BUTRXM, i, this.edt_BSRP_PLAC, "BSRP_PLAC");
        			this.edt_BSRP_PLAC.setFocus();
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(i, "BSRP_PURC"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "출장목적", this.dsAT_BUTRXM, i, this.rdo_BSRP_PURC, "BSRP_PURC");
        			this.rdo_BSRP_PURC.setFocus();
        		}
        		
        		if (this.chk_TRAN_AIRB.value == false && this.chk_TRAN_BUSB.value == false && this.chk_TRAN_CARB.value == false 
        			 && this.chk_TRAN_CARM.value == false && this.chk_TRAN_ETCR.value == false && this.chk_TRAN_RAIL.value == false
        			 && this.chk_TRAN_TRIP.value == false) {
        				this.fnc_Message("TMM125", "교통편 확인바랍니다");
        				return;
        			 }
        		
        		if(this.chk_TRAN_ETCR.value == true){
        			if(this.dsAT_BUTRXM.getColumn(0, "TRAN_ETCD") == null){
        		
        				this.fnc_Message("TMM125", "교통편 기타내용을 입력해 주세요");
        				return;
        			}
        			this.edt_TRAN_ETCD.setFocus();
        		}
        		
        		if(nexacro.toNumber(this.dsAT_BUTRXM.getColumn(i,"BSRP_STDT")) > nexacro.toNumber(this.dsAT_BUTRXM.getColumn(i,"BSRP_ENDD"))){
        			this.fnc_Message("TMM125", "출장 시작일이 종료일보다 클 수 없습니다.");
        			return false;
        			this.calSHRBSRP_DATE1.setFocus();
        		}
        		
        		if(nexacro.toNumber(this.dsAT_BUTRXM.getColumn(i,"SDYT_STDT")) > nexacro.toNumber(this.dsAT_BUTRXM.getColumn(i,"SDYT_ENDD"))){
        			this.fnc_Message("TMM125", "연수 시작일이 종료일보다 클 수 없습니다.");
        			return false;
        			this.calSHRSDYT_DATE1.setFocus();
        		}
        		
        		 // 신청자 구분 외부인사일경우 체크
        		 /*var strVal1 = "";
        		 var strVal2 = "";
        		 var chkVal1 = 0;
        		 var chkval2 = 0;
        		 
        		 for(var i=0; i < this.dsAT_BUTRXM.getRowCount(); i++){
        		 
        			strVal1 = this.dsAT_BUTRXM.getColumn(i, "EMPL_CODE");
        			strVal2 = this.dsAT_BUTRXM.getColumn(i, "APLT_EMNR");
        			
        			if(strVal1 == 10){
        				chkVal1++;
        			}
        			
        			if(strVal2 == 10 && this.IsNull(strVal2)){
        				chkVal2++;
        			}
        		 
        		}
        		
        		if(chkVal1 == 0){
        			this.fnc_Message("TMM125", "신청자/사원 구분을 확인하세요");
        			return;
        			
        		}

        		if(chkVal2 > 0){
        			this.fnc_Message("TMM125", "신청자/사원번호를 확인하세요");
        			return;
        			
        		}*/

        		/*SORT_SEQN 값 할당*/		
        		//this.dsAT_BUTRXM.setColumn(i,"SORT_SEQN", i+1);
        	}

        		// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsAT_BUTRXD.getRowCount(); i++) {

        		//변경된 로우만 체크
        		if (this.fnc_ToUpper(this.dsAT_BUTRXD.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_BUTRXD.getColumn(i, "EMPL_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "구분", this.dsAT_BUTRXD, i, this.grdAT_BUTRXD, "EMPL_CODE");
        			this.grdAT_BUTRXD.setFocus();
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_BUTRXD.getColumn(i, "APLT_EMNR"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사번", this.dsAT_BUTRXD, i, this.grdAT_BUTRXD, "APLT_EMNR");
        			this.grdAT_BUTRXD.setFocus();
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_BUTRXD.getColumn(i, "APLT_EMNM"))) < 1) {
        			return this.fnc_CheckPostAction( "TMM072", "성명", this.dsAT_BUTRXD, i, this.grdAT_BUTRXD, "APLT_EMNM");
        			this.grdAT_BUTRXD.setFocus();
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_BUTRXD.getColumn(i, "APLT_OPNM"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "직급", this.dsAT_BUTRXD, i, this.grdAT_BUTRXD, "APLT_OPNM");
        			this.grdAT_BUTRXD.setFocus();
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_BUTRXD.getColumn(i, "APLT_DTNM"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "부서", this.dsAT_BUTRXD, i, this.grdAT_BUTRXD, "APLT_DTNM");
        			this.grdAT_BUTRXD.setFocus();
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
        		sReturnString += " BSRP_SEQ1=" + this.parent.sBSRPSEQ1;
        	
        	} else if (sKind == 'SEARCH01') {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " BSRP_SEQ1=" + this.parent.sBSRPSEQ1;
        		sReturnString += " INST_USID=" + this.edtSHREMPL_NUMB.value;
        	
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);	
        		sReturnString += " BSRP_SEQ2=" + this.dsAT_BUTRXD.getColumn(this.dsAT_BUTRXD.rowposition,"BSRP_SEQ2");
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
        	
        //		this.fnc_Information(this.stInformation, this.dsAT_BUTRXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsAT_BUTRXM.getCaseCount("dataset.getRowLevel(currow)==0"));

        		this.fn_formEnable();

        	}else if (sMethodName == "SEARCH01") {

        		var nRow = this.dsAT_BUTRXD.addRow();
        		
        		this.dsAT_BUTRXD.setColumn(nRow, "APLT_EMNR", application.GBL_EMPLNO);                     // 사번
        		this.dsAT_BUTRXD.setColumn(nRow, "EMPL_CODE", 10);										   // 직원구분 10:임직원 20:외부직원
        		this.dsAT_BUTRXD.setColumn(nRow, "APLT_EMNM", this.dsAT_HARMXM.getColumn(0,"EMPL_NAME"));  // 신청자이름
        		this.dsAT_BUTRXD.setColumn(nRow, "APLT_OPCD", this.dsAT_HARMXM.getColumn(0,"OPOS_CODE"));  // 신청자직급코드
        		this.dsAT_BUTRXD.setColumn(nRow, "APLT_OPNM", this.dsAT_HARMXM.getColumn(0,"OPOS_CDNM"));  // 신청자직급명
        		this.dsAT_BUTRXD.setColumn(nRow, "APLT_DTCD", application.GBL_DEPTCD);					   // 신청자부서코드
        		this.dsAT_BUTRXD.setColumn(nRow, "APLT_DTNM", application.GBL_DEPTNM);					   // 신청자부서명

        		this.dsAT_BUTRXD.setColumn(nRow, "INST_USID", this.edtSHREMPL_NUMB.value);                 // 등록자
        		this.dsAT_BUTRXD.setColumn(nRow, "UPDT_USID", this.edtSHREMPL_NUMB.value);	               // 수정자	

        		this.fn_formEnable();
        	
        	}else if (sMethodName == "SAVE00") {
        		//this.fnc_Information(this.stInformation, 0, "SAVE");
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
        		arrParam[0] = "GRID,grdAT_BUTRXD,dsBUTR_GUBN,EMPL_CODE";
        		//arrParam[1] = "COMBO,rdo_BSRP_CODE,dsSHRDPAY_CODE,0";
        		arrParam[1] = "COMBO,rdo_BSRP_PURC,dsSHRBUTR_PURS,0";
        		//arrParam[0] = "GRID,grdAT_BUTRXD,dsBANK_CODE,BANK_CODE";
                //this.dsWORK_GUBN.filter("COMD_CODE < 3");

        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	}
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/

         /*-----------------------+
         |  업데이트 체크        |
         +------------------------*/
        this.fn_DatasetUpdateChk = function (objDs) 
        {
        	var rowCnt,i,j;
        	var rowType;
        	//삭제된 Row값 유무체크,
        	if(this.objDs.getDeleteRowCount()>0){
        		return true;
        	}
        	
        	if(this.objDs.getCaseCount("getRowType(rowidx)==2 || getRowType(rowidx)==4")>0 ) return ture;
        	
        	return false;
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
         
         /*결재상신/취소*/
         this.fn_apprProcess = function(sGubn){	/* sGubn 값으로 createDoc or deleteDoc 값을 받는다.*/
        	var sXmlStr = "";
        	var sSubject 	= this.dsTM_APPRXH.getColumn(0,"SUBJ_NAME"); 
        		
        	var sEmplNumb = this.fnc_Trim(application.GBL_EMPLNO);
        	var sUserNm   = this.fnc_Trim(application.GBL_USERNM);
        	var sDeptNm   = this.fnc_Trim(application.GBL_DEPTNM);

        		var sApprDocId	= this.sDOCUID + "-" + this.dsTM_APPRXH.getColumn(0,"APPR_SEQN");/*DOCU_IDXX 과 APPR_SEQN 조합*/ 
        	
        	/* 데이터 처리 */
        	
        	//출장일정
        	var strBSRP_STDT  = this.fn_strToDate(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(0,"BSRP_STDT")));
        	var strBSRP_ENDD  = this.fn_strToDate(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(0,"BSRP_ENDD")));
        	var strBSRP_DATE  = strBSRP_STDT + " ~ " + strBSRP_ENDD;
        	
        	//연수일정
        	var strSDYT_STDT  = "";
        	var strSDYT_ENDD  = "";
        	var strSDYT_DATE  = "";
        	if(this.fnc_Length(this.dsAT_BUTRXM.getColumn(0, "SDYT_STDT")) != 0){
        		var strSDYT_STDT  = this.fn_strToDate(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(0,"SDYT_STDT")));
        		var strSDYT_ENDD  = this.fn_strToDate(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(0,"SDYT_ENDD")));
        		var strSDYT_DATE  = strSDYT_STDT + " ~ " + strSDYT_ENDD;
        	}

        	sXmlStr  = "<style>";
        	sXmlStr  += "table { border-collapse:collapse; border-width:1px; border-color:black; border-style:solid;}";
        	sXmlStr  += "td { height:25px; font-size:12px; border-width:1px; border-color:black; border-style:solid;}";
        	sXmlStr  += ".linkTable td {font-size: 12px;}";
        	sXmlStr  += ".label1 { background-color:#DBDBDB; font-weight:bold; text-align:right; padding-right:5px; font-size:12px;}";
        	sXmlStr  += ".label2 { background-color:#FAFAFA; text-align:right; padding-right:5px; font-size:12px;}";
        	sXmlStr  += ".label3 { background-color:#FFFFFF; padding-left: 5px; font-size:12px; height:25px;}";
        	sXmlStr  += ".label4 { background-color:#FFFFFF; text-align:center; font-size:12px; height:30px;}";
        	sXmlStr  += ".label5 { background-color:#FAFAFA; font-weight:bold; text-align:center; font-size:12px;}";
        	sXmlStr  += ".label6 { background-color:#F6E2C8; font-weight:bold; text-align:center; font-size:12px;}";
        	sXmlStr  += ".label7 { background-color:#F6E2C8; font-weight:bold; text-align:right; padding-right: 5px; font-size:12px;}";
        	sXmlStr  += ".label8 { background-color:#FFFFFF; text-align:right; font-size:12px; height:30px;}";
        	sXmlStr  += "</style>";
        	sXmlStr  += "<table width='100%'>";
        	sXmlStr  += "    <col width='15%'>";
        	sXmlStr  += "    <col width='10%'>";
        	sXmlStr  += "    <col width='13%'>";
        	sXmlStr  += "    <col width='10%'>";
        	sXmlStr  += "    <col width='13%'>";
        	sXmlStr  += "    <col width='10%'>";
        	sXmlStr  += "    <col width='14%'>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>작성자</td>";
        	sXmlStr  += "        <td class='label2'>사번</td>";
        	sXmlStr  += "        <td class='label3'>" + sEmplNumb + "</td>";
        	sXmlStr  += "        <td class='label2'>성명</td>";
        	sXmlStr  += "        <td class='label3'>" + sUserNm + "</td>";
        	sXmlStr  += "        <td class='label2'>소속</td>";
        	sXmlStr  += "        <td class='label3' colspan='3'>" + sDeptNm + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>" + "출장기간</td>";
        	sXmlStr  += "        <td class='label2'>" + "출장일정</td>";
        	sXmlStr  += "        <td class='label3' colspan='3'>" + strBSRP_DATE + "</td>";
        	sXmlStr  += "        <td class='label2'>연수일정</td>";
        	sXmlStr  += "        <td class='label3' colspan='3'>" + strSDYT_DATE + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "</table>";
        	sXmlStr  += "<br/>";
        	sXmlStr  += "<table width='100%'>";
        	sXmlStr  += "    <col width='7%'>";
        	sXmlStr  += "    <col width='12%'>";
        	sXmlStr  += "    <col width='15%'>";
        	sXmlStr  += "    <col width='15%'>";
        	sXmlStr  += "    <col width='15%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='16%'>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label6'>순번</td>";
        	sXmlStr  += "        <td class='label6'>구분</td>";
        	sXmlStr  += "        <td class='label6'>사번</td>";
        	sXmlStr  += "        <td class='label6'>성명</td>";
        	sXmlStr  += "        <td class='label6'>직급</td>";
        	sXmlStr  += "        <td class='label6'>부서</td>";
        	sXmlStr  += "        <td class='label6'>전도금</td>";
        	sXmlStr  += "    </tr>";
         	
         	for(i = 0; i < this.dsAT_BUTRXD.rowcount; i++) {        
        		
                sXmlStr  += "    <tr>";
                sXmlStr  += "        <td class='label5'>" + (i+1) + "</td>";
                sXmlStr  += "        <td class='label5'>" + this.fnc_Trim(this.grdAT_BUTRXD.getCellText(i,1)) + "</td>";         /*사원구분*/
                sXmlStr  += "        <td class='label5'>" + this.fnc_Trim(this.dsAT_BUTRXD.getColumn(i, "APLT_EMNR")) + "</td>"; /*신청자사번*/
                sXmlStr  += "        <td class='label5'>" + this.fnc_Trim(this.dsAT_BUTRXD.getColumn(i, "APLT_EMNM")) + "</td>"; /*신청자이름*/
        		sXmlStr  += "        <td class='label5'>" + this.fnc_Trim(this.grdAT_BUTRXD.getCellText(i,4)) + "</td>";		  /*신청자직급*/
                sXmlStr  += "        <td class='label5'>" + this.fnc_Trim(this.dsAT_BUTRXD.getColumn(i, "APLT_DTNM")) + "</td>"; /*신청자부서명*/
                sXmlStr  += "        <td class='label8'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BUTRXD.getColumn(i, "ADNV_AMNT"))) + "</td>"; /*전도금*/
                sXmlStr  += "    </tr>";

            }
         	
            sXmlStr  += "</table>";	
         
            sXmlStr  += "<br/>";
        	sXmlStr  += "<table width='100%'>";
        	sXmlStr  += "    <col width='15%'>";
        	sXmlStr  += "    <col width='9%'>";
        	sXmlStr  += "    <col width='9%'>";
        	sXmlStr  += "    <col width='10%'>";
        	sXmlStr  += "    <col width='10%'>";
        	sXmlStr  += "    <col width='10%'>";
        	sXmlStr  += "    <col width='10%'>";
        	sXmlStr  += "    <col width='14%'>";
        	sXmlStr  += "    <col width='13%'>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>" + "출장구분</td>";
        	sXmlStr  += "        <td class='label3' colspan='4'>" + this.fnc_Trim(this.dsAT_BUTRXM.getColumn(0, "BSRP_CDNM")) + "</td>";
        	sXmlStr  += "        <td class='label1'>" + "출장지</td>";
        	sXmlStr  += "        <td class='label3' colspan='3'>" + this.fnc_Trim(this.dsAT_BUTRXM.getColumn(0, "BSRP_PLAC")) + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>" + "출장목적</td>";
        	sXmlStr  += "        <td class='label3' colspan='8'>" + this.fnc_Trim(this.dsAT_BUTRXM.getColumn(0, "BSRP_PUNM")) + "  " + this.fnc_Trim(this.dsAT_BUTRXM.getColumn(0, "BSRP_PURE")) + " </td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1' rowspan='2'>교통편</td>";
        	sXmlStr  += "        <td class='label2'>철도</td>";
        	sXmlStr  += "        <td class='label8'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(0, "TRAP_RAIL"))) + "원</td>";
        	sXmlStr  += "        <td class='label2'>버스</td>";
        	sXmlStr  += "        <td class='label8'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(0, "TRAP_BUSB"))) + "원</td>";
        	sXmlStr  += "        <td class='label2'>자가차</td>";
        	sXmlStr  += "        <td class='label8'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(0, "TRAP_CARM"))) + "원</td>";
        	sXmlStr  += "        <td class='label2'>출장거리</td>";
        	sXmlStr  += "        <td class='label8'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(0, "BSRP_DSTN"))) + "Km</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label2'>항공</td>";
        	sXmlStr  += "        <td class='label8'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(0, "TRAP_AIRB"))) + "원</td>";
        	sXmlStr  += "        <td class='label2'>선박</td>";
        	sXmlStr  += "        <td class='label8'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(0, "TRAP_SHIP"))) + "원</td>";
        	sXmlStr  += "        <td class='label2'>회사차</td>";
        	sXmlStr  += "        <td class='label8'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(0, "TRAP_CARB"))) + "원</td>";
        	sXmlStr  += "        <td class='label2'>교통기타</td>";
        	sXmlStr  += "        <td class='label8'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(0, "TRAP_ETCR"))) + "원</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1' rowspan='2'>출장여비</td>";
        	sXmlStr  += "        <td class='label2'>교통비</td>";
        	sXmlStr  += "        <td class='label8'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(0, "BTCL_TRAN"))) + "원</td>";
        	sXmlStr  += "        <td class='label2'>숙박비</td>";
        	sXmlStr  += "        <td class='label8'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(0, "BTCL_ROOM"))) + "원</td>";
        	sXmlStr  += "        <td class='label2'>일비</td>";
        	sXmlStr  += "        <td class='label8'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(0, "BTCL_DAYP"))) + "원</td>";
        	sXmlStr  += "        <td class='label2'>기타</td>";
        	sXmlStr  += "        <td class='label8'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(0, "BTCL_ETCP"))) + "원</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label2' colspan='2'>공제액</td>";
        	sXmlStr  += "        <td class='label8'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(0, "BTCL_ADDP"))) + "원</td>";
        	sXmlStr  += "        <td class='label2' colspan='2'>장기출장공제액</td>";
        	sXmlStr  += "        <td class='label8'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(0, "BTCL_LDDP"))) + "원</td>";
        	sXmlStr  += "        <td class='label2'>계</td>";
        	sXmlStr  += "        <td class='label8'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(0, "BTCL_ALLP"))) + "원</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>출장진행비</td>";
        	sXmlStr  += "        <td class='label2' colspan='2'>자료수집비</td>";
        	sXmlStr  += "        <td class='label8'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(0,"RCPX_DNSP"))) + "원</td>";
        	sXmlStr  += "        <td class='label2' colspan='2'>접대비</td>";
        	sXmlStr  += "        <td class='label8'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(0,"RCPX_PNSP"))) + "원</td>";
        	sXmlStr  += "        <td class='label2'>계</td>";
        	sXmlStr  += "        <td class='label8'>" + this.fnc_AddComma(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(0,"RCPX_ALLP"))) + "원</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "     <tr>";
        	sXmlStr  += "        <td class='label1' style='height:60px;'>교통비세부내역<br/>및 기타사항</td>";
        	sXmlStr  += "        <td class='label3' colspan='8'>" + nexacro.replaceAll(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(0, "DETL_ETCR")),"\n","<br>") + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "     <tr>";
        	sXmlStr  += "        <td class='label1' style='height:60px'>출장계획</td>";
        	sXmlStr  += "        <td class='label3' colspan='8'>" + nexacro.replaceAll(this.fnc_Trim(this.dsAT_BUTRXM.getColumn(0, "BTCL_RPDT")),"\n","<br>") + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "</table>"; 

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
         
         /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
         this.fn_EMPGrade = function () {
        	var sEmpKind = "";
        	var nEmpKind1 = 0;
        	var nEmpKind2 = 0;
        	var nEmpKind3 = 0;
        	var nEmpKind4 = 0;
        	
        	for(var i=0;i<this.dsAT_BUTRXD.getRowCount();i++){
        		var ao = this.dsAT_BUTRXD.getColumn(i,"APLT_OPNM");
        		if(ao=="회장"||ao=="부회장"||ao=="사장"||ao=="부사장")
        			nEmpKind1++;	//사장
        		else if(ao=="전무"||ao=="상무"||ao=="대표이사"||ao=="상무이사"||ao=="상무(L4)"||ao=="고문")
        			nEmpKind2++;	//임원
        		else if(ao=="국장"||ao=="부장"||ao=="차장"||ao=="부국장")
        			nEmpKind3++;	//차부국장
        		else
        			nEmpKind4++;	//대리이하
        	}
        	
        	if(nEmpKind1 > 0) sEmpKind = "10";
        	else if(nEmpKind2 > 0) sEmpKind = "20";
        	else if(nEmpKind3 > 0) sEmpKind = "30";
        	else sEmpKind = "40";
        	
        	trace("fn_EMPGrade  sEmpKind : " + sEmpKind);
        	
        	return sEmpKind;
         }
         
         /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
         this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {
        	var arrParam = new Array();
        	
        	if (obj.name == "grdAT_BUTRXD") {	
        		if (sColumnID == "EMPL_NAME" || obj.getCellProperty("body", obj.currentcell, "text") == "bind:APLT_EMNM") {
        			arrParam[0] = "HRM0051"; 
        			arrParam[1] = "";
        			arrParam[2] = "APLT_EMNM";
        			arrParam[3] = "N";
        			arrParam[4] = "grdAT_BUTRXD";
        			arrParam[5] = "APLT_EMNR,APLT_EMNM,APLT_DTCD,APLT_DTNM,APLT_OPCD,APLT_OPNM";  
        			arrParam[6] = "0,1,3,4,5,6";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        			
        		}
        	}else if ((obj.name == "imgHelp_TRAN_CARM")) {	

        		if(this.calSHRBSRP_DATE1.value == "" || this.calSHRBSRP_DATE1.value == null){
        			alert("출장기간 입력 후 클릭 하세요");
        			return;
        		}
        		
        		var objArgument = {
        			 oBSRP_DATE1 : this.calSHRBSRP_DATE1.value
        		};
        		
        		var sOpenStyle  = "modeless=false";           //Open Sytle(되도록 Modal 사용)
        			sOpenStyle += ",autosize=true";           //Autosize true면 width, Height 안먹음
        			sOpenStyle += ",top=-1";                  //원하는 위치(단 -1은 소유창의 Middle)
        			sOpenStyle += ",left=-1";                 //원하는 위치(단 -1은 소유창의 Center)
        			sOpenStyle += ",width=520";                //현재 반응 없음
        			sOpenStyle += ",height=188";              //현재 반응 없음
        			sOpenStyle += ",title=true";              //Form Title Bar Visible 여부
        			//sOpenStyle += ",titletext=유류대 계산";    //Form Title Bar Visible 여부
        			sOpenStyle += ",status=false";            //Form Title Bar Visible 여부
        			sOpenStyle += ",resizable=true";          //Form Title Bar Visible 여부
        		
        		this.fnc_OpenPopup("HATF0070P01", "hat::HATF0070P01.xfdl", objArgument, sOpenStyle, this.fn_popupAfter);
        		
        	} else if ((obj.name == "imgHelp_BTCL_ROOM")) {	

        		if(this.calSHRBSRP_DATE1.value == "" || this.calSHRBSRP_DATE1.value == null){
        			alert("출장기간 입력 후 클릭 하세요");
        			return;
        		}
        		
        		var sEmpKind = this.fn_EMPGrade();
        		
        		var objArgument = {
        			 oBSRP_DATE1 : this.calSHRBSRP_DATE1.value,
        			 oBSRP_DATE2 : this.calSHRBSRP_DATE2.value,
        			 oBSRP_CODE : this.dsAT_BUTRXM.getColumn(0,"BSRP_CODE"),
        			 //oBSRP_CODE : 20,
        			 oBSRP_CNT	: this.dsAT_BUTRXD.getRowCount(),
        			 oEMP_KIND	: sEmpKind
        		};
        		var sOpenStyle  = "modeless=false";           //Open Sytle(되도록 Modal 사용)
        			sOpenStyle += ",autosize=true";           //Autosize true면 width, Height 안먹음
        			sOpenStyle += ",top=-1";                  //원하는 위치(단 -1은 소유창의 Middle)
        			sOpenStyle += ",left=-1";                 //원하는 위치(단 -1은 소유창의 Center)
        			sOpenStyle += ",width=00";                //현재 반응 없음
        			sOpenStyle += ",height=00";              //현재 반응 없음
        			sOpenStyle += ",title=true";              //Form Title Bar Visible 여부
        			//sOpenStyle += ",titletext=숙박비 계산";    //Form Title Bar Visible 여부
        			sOpenStyle += ",status=false";            //Form Title Bar Visible 여부
        			sOpenStyle += ",resizable=true";          //Form Title Bar Visible 여부
        		
        		this.fnc_OpenPopup("HATF0070P02", "hat::HATF0070P02.xfdl", objArgument, sOpenStyle, this.fn_popupAfter);
        		
        	}  else if ((obj.name == "imgHelp_BTCL_DAYP")) {
        	
        		if(this.calSHRBSRP_DATE1.value == "" || this.calSHRBSRP_DATE1.value == null){
        			alert("출장기간 입력 후 클릭 하세요");
        			return;
        		}
        		
        		var sEmpKind = this.fn_EMPGrade();
        		
        		var objArgument = {
        			 oBSRP_DATE1 : this.calSHRBSRP_DATE1.value,
        			 oBSRP_DATE2 : this.calSHRBSRP_DATE2.value,
        			 oBSRP_CODE : this.dsAT_BUTRXM.getColumn(0,"BSRP_CODE"),
        			 //oBSRP_CODE : 20,
        			 oBSRP_CNT	: this.dsAT_BUTRXD.getRowCount(),
        			 oEMP_KIND	: sEmpKind
        		};
        		var sOpenStyle  = "modeless=false";           //Open Sytle(되도록 Modal 사용)
        			sOpenStyle += ",autosize=true";           //Autosize true면 width, Height 안먹음
        			sOpenStyle += ",top=-1";                  //원하는 위치(단 -1은 소유창의 Middle)
        			sOpenStyle += ",left=-1";                 //원하는 위치(단 -1은 소유창의 Center)
        			sOpenStyle += ",width=00";                //현재 반응 없음
        			sOpenStyle += ",height=00";              //현재 반응 없음
        			sOpenStyle += ",title=true";              //Form Title Bar Visible 여부
        			//sOpenStyle += ",titletext=일비 계산";    //Form Title Bar Visible 여부
        			sOpenStyle += ",status=false";            //Form Title Bar Visible 여부
        			sOpenStyle += ",resizable=true";          //Form Title Bar Visible 여부
        		
        		this.fnc_OpenPopup("HATF0070P03", "hat::HATF0070P03.xfdl", objArgument, sOpenStyle, this.fn_popupAfter);
        	}
        }

        /*-----------------+
         |  팝업 CallBack  |
         +-----------------*/
        this.fn_popupAfter = function(sPopupId,Variant) {
        	
        	if (sPopupId == "HATF0070P01") {
        	
        		var sResponse = this.fnc_GetPopupRtn();
        		
        		if (sResponse instanceof Array) {
        		
        			if (!this.IsNull(sResponse)) {
        				this.edt_TRAP_CARM.set_value(sResponse[0]);
        				this.ta_DETL_ETCR.insertText(sResponse[1]);
        				this.edt_BSRP_DSTN.set_value(sResponse[2]);
        			}
        		}
        		this.fn_SUM_BTCL_TRAN();
        		this.fn_SUM_BTCL_ALLP("Tran");
        	} else if (sPopupId == "HATF0070P02") {
        	
        		var sResponse = this.fnc_GetPopupRtn();
        		
        		if (sResponse instanceof Array) {
        		
        			if (!this.IsNull(sResponse)) {
        				this.edt_BTCL_ROOM.set_value(sResponse[0]);
        				this.ta_DETL_ETCR.insertText(sResponse[1]);
        			}
        		}
        		this.fn_SUM_BTCL_ALLP("All");
        	} else if (sPopupId == "HATF0070P03") {
        	
        		var sResponse = this.fnc_GetPopupRtn();
        		
        		if (sResponse instanceof Array) {
        		
        			if (!this.IsNull(sResponse)) {
        				this.edt_BTCL_DAYP.set_value(sResponse[0]);
        				this.ta_DETL_ETCR.insertText(sResponse[1]);
        			}
        		}
        		this.fn_SUM_BTCL_ALLP("All");
        	}
        	
        }

        
        /*-----------------------+
         /*전체화면 비활성화    */
         /*------------------------*/
         this.fn_formNotEnable = function(){

        	this.grdAT_BUTRXD.enable = false;          // 그리드 

        	this.edt_TITL_NAME.set_enable(false);
        	this.edtSHREMPL_NUMB.set_enable(false);
        	this.imgHelpSHREMPL_NUMB.set_enable(false);
        	this.edtSHREMPL_NAME.set_enable(false);
        	this.calSHRBSRP_DATE1.set_enable(false);
        	this.calSHRBSRP_DATE2.set_enable(false);
        	this.calSHRSDYT_DATE1.set_enable(false);
        	this.calSHRSDYT_DATE2.set_enable(false);
        	
        	this.rdo_BSRP_CODE.set_enable(false);
        	this.rdo_BSRP_PURC.set_enable(false);
        	this.edt_BSRP_PURE.set_enable(false);
        	this.edt_BSRP_PLAC.set_enable(false);
        	
        	this.chk_TRAN_RAIL.set_enable(false);
        	this.edt_TRAP_RAIL.set_enable(false);
        	this.chk_TRAN_BUSB.set_enable(false);
        	this.edt_TRAP_BUSB.set_enable(false);
        	this.chk_TRAN_CARM.set_enable(false);
        	this.edt_TRAP_CARM.set_enable(false);
        	this.imgHelp_TRAN_CARM.set_enable(false);
        	this.edt_BSRP_DSTN.set_enable(false);
        	this.chk_TRAN_AIRB.set_enable(false);
        	this.edt_TRAP_AIRB.set_enable(false);
        	this.chk_TRAN_SHIP.set_enable(false);
        	this.edt_TRAP_SHIP.set_enable(false);
        	this.chk_TRAN_CARB.set_enable(false);
        	this.edt_TRAP_CARB.set_enable(false);
        	this.chk_TRAN_ETCR.set_enable(false);
        	this.edt_TRAP_ETCR.set_enable(false);
        	this.edt_TRAN_ETCD.set_enable(false);
        	
        	this.edt_BTCL_TRAN.set_enable(false);
        	this.edt_BTCL_ROOM.set_enable(false);
        	this.imgHelp_BTCL_ROOM.set_enable(false);
        	this.edt_BTCL_DAYP.set_enable(false);
        	this.imgHelp_BTCL_DAYP.set_enable(false);
        	this.edt_BTCL_ETCP.set_enable(false);
        	this.edt_BTCL_ADDP.set_enable(false);
        	this.edt_BTCL_LDDP.set_enable(false);
        	this.edt_BTCL_ALLP.set_enable(false);
        	this.edt_RCPX_DNSP.set_enable(false);
        	this.edt_RCPX_PNSP.set_enable(false);
        	this.edt_RCPX_ALLP.set_enable(false);
        	
        	this.ta_DETL_ETCR.set_enable(false);
        	this.ta_BTCL_RPDT.set_enable(false);
         }
         
          /*-----------------------+
         /*전체화면 활성화    */
         /*------------------------*/
         this.fn_formEnable = function(){

        	this.edt_TITL_NAME.set_enable(true);	
        	this.edtSHREMPL_NUMB.set_enable(false);
        	this.imgHelpSHREMPL_NUMB.set_enable(false);
        	this.edtSHREMPL_NAME.set_enable(false);
        	this.calSHRBSRP_DATE1.set_enable(true);
        	this.calSHRBSRP_DATE2.set_enable(true);
        	this.calSHRSDYT_DATE1.set_enable(true);
        	this.calSHRSDYT_DATE2.set_enable(true);
        	
        	this.grdAT_BUTRXD.set_enable(true);
        	
        	//this.rdo_BSRP_CODE.set_enable(false);
        	//this.rdo_BSRP_PURC.set_enable(false);
        	//this.edt_BSRP_PURE.set_enable(false);
        	//this.edt_BSRP_PLAC.set_enable(false);
        	
        	this.chk_TRAN_RAIL.set_enable(true);
        	if(this.chk_TRAN_RAIL.value == true) this.edt_TRAP_RAIL.set_enable(true); else this.edt_TRAP_RAIL.set_enable(false);
        	//this.edt_TRAP_RAIL.set_enable(false);
        	this.chk_TRAN_BUSB.set_enable(true);
        	if(this.chk_TRAN_BUSB.value == true) this.edt_TRAP_BUSB.set_enable(true); else this.edt_TRAP_BUSB.set_enable(false);
        	//this.edt_TRAP_BUSB.set_enable(false);
        	this.chk_TRAN_CARM.set_enable(true);
        	this.edt_TRAP_CARM.set_enable(false);
        	if(this.chk_TRAN_CARM.value == true) this.imgHelp_TRAN_CARM.set_enable(true); else this.imgHelp_TRAN_CARM.set_enable(false);
        	//this.imgHelp_TRAN_CARM.set_enable(false);
        	this.edt_BSRP_DSTN.set_enable(false);
        	this.chk_TRAN_AIRB.set_enable(true);
        	if(this.chk_TRAN_AIRB.value == true) this.edt_TRAP_AIRB.set_enable(true); else this.edt_TRAP_AIRB.set_enable(false);
        	//this.edt_TRAP_AIRB.set_enable(false);
        	this.chk_TRAN_SHIP.set_enable(true);
        	if(this.chk_TRAN_SHIP.value == true) this.edt_TRAP_SHIP.set_enable(true); else this.edt_TRAP_SHIP.set_enable(false);
        	//this.edt_TRAP_SHIP.set_enable(false);
        	this.chk_TRAN_CARB.set_enable(true);
        	if(this.chk_TRAN_CARB.value == true) this.edt_TRAP_CARB.set_enable(true); else this.edt_TRAP_CARB.set_enable(false);
        	//this.edt_TRAP_CARB.set_enable(false);
        	this.chk_TRAN_ETCR.set_enable(true);
        	if(this.chk_TRAN_ETCR.value == true){
        		this.edt_TRAP_ETCR.set_enable(true);
        		this.edt_TRAN_ETCD.set_enable(true);
        	} else {
        		this.edt_TRAP_ETCR.set_enable(false);
        		this.edt_TRAN_ETCD.set_enable(false);
        	}
        	//this.edt_TRAP_ETCR.set_enable(false);
        	//this.edt_TRAN_ETCD.set_enable(false);
        	
        	this.edt_BTCL_TRAN.set_enable(false);
        	this.edt_BTCL_ROOM.set_enable(false);
        	this.imgHelp_BTCL_ROOM.set_enable(true);
        	this.edt_BTCL_DAYP.set_enable(false);
        	this.imgHelp_BTCL_DAYP.set_enable(true);
        	this.edt_BTCL_ETCP.set_enable(true);
        	
        	this.edt_BTCL_ADDP.set_enable(false);
        	this.edt_BTCL_LDDP.set_enable(false);
        	this.edt_BTCL_ALLP.set_enable(false);
        	
        	/*if(this.dsAT_BTCLXM.getColumn(0, "BSRP_CODE") == 2){
        		this.edt_RCPX_DNSP.set_enable(true);
        		this.edt_RCPX_PNSP.set_enable(true);
        	} else {
        		this.edt_RCPX_DNSP.set_enable(false);
        		this.edt_RCPX_PNSP.set_enable(false);
        	}*/
        	this.edt_RCPX_DNSP.set_enable(true);
        	this.edt_RCPX_PNSP.set_enable(true);
        	this.edt_RCPX_ALLP.set_enable(false);
        	
        	this.ta_DETL_ETCR.set_enable(true);
        	this.ta_BTCL_RPDT.set_enable(true);
         }

        
         /*-----------------------+
         |  신청자 행추가 버튼  |
         +------------------------*/
        this.btn_addRow_onclick = function(obj,e)
        {
        	var iRow = this.dsAT_BUTRXD.addRow();

        	this.dsAT_BUTRXD.setColumn(iRow,"BSRP_SEQ1", this.dsAT_BUTRXM.getColumn(0,"BSRP_SEQ1"));
        	this.dsAT_BUTRXD.setColumn(iRow,"INST_USID", this.dsAT_BUTRXM.getColumn(0,application.GBL_EMPLNO));
        	this.dsAT_BUTRXD.setColumn(iRow,"EMPL_CODE", this.dsBsrpCode.getColumn(0,"CODEID"));

        	this.dsAT_BUTRXD.setColumn(iRow,"DOCU_IDXX",this.sDOCUID);
        	this.grdAT_BUTRXD.setCellPos(this.fnc_GridColumnIndex(this.grdAT_BUTRXD, "APLT_EMNR"));
        	
        	this.grdAT_BUTRXD.setFocus();
        }

         /*-----------------------+
         |  신청자 행삭제 버튼  |
         +------------------------*/
        this.btn_delRow_onclick = function(obj,e)
        {
            if(this.dsAT_BUTRXD.rowposition == -1) {
        		alert("목록에서 행삭제할 데이터를 선택하여 주십시오.");
        		return;
            }
            
            if(this.dsAT_BUTRXD.rowcount < 2) {
        		// 자료의 마지막입니다. 
        		alert("자료의 마지막입니다.");
        		return;
            }
            
        	//return this.fnc_Message("TMM002", sQuestionText);
        	this.dsAT_BUTRXD.deleteRow(this.dsAT_BUTRXD.rowposition);
        }

        /*-------------------------------------------+
         |  신청서 신규 작성시 행추가 자동 셋팅  |
         +-------------------------------------------*/
        this.fn_NewRowSet = function()
        {
        	var nRow = this.dsAT_BUTRXD.addRow();
        	
        	this.dsAT_BUTRXD.setColumn(nRow, "EMPL_CODE", 10);										   // 직원구분 10:임직원 20:외부직원
            this.dsAT_BUTRXD.setColumn(nRow, "APLT_EMNR", this.dsAT_HARMXM.getColumn(0,"EMPL_NUMB"));  // 사번
            this.dsAT_BUTRXD.setColumn(nRow, "APLT_EMNM", this.dsAT_HARMXM.getColumn(0,"EMPL_NAME"));  // 신청자이름
        	this.dsAT_BUTRXD.setColumn(nRow, "INST_USID", application.GBL_EMPLNO);					   // 등록자
        	this.dsAT_BUTRXD.setColumn(nRow, "UPDT_USID", application.GBL_EMPLNO);					   // 등록자
        	this.dsAT_BUTRXD.setColumn(nRow, "APLT_OPCD", this.dsAT_HARMXM.getColumn(0,"OPOS_CODE"));  // 직책코드
        	this.dsAT_BUTRXD.setColumn(nRow, "APLT_OPNM", this.dsAT_HARMXM.getColumn(0,"OPOS_CDNM"));  // 직책명
        	this.dsAT_BUTRXD.setColumn(nRow, "APLT_DTCD", application.GBL_DEPTCD);                     // 부서코드
        	this.dsAT_BUTRXD.setColumn(nRow, "APLT_DTNM", application.GBL_DEPTNM);                     // 부서명
        }

        /*-----------------------------------------------------+
         |  DS 신청자구분 값이 변경된 경우 해당값 초기화  |
         +-----------------------------------------------------*/
        this.dsAT_BUTRXD_onvaluechanged = function(obj,e)
        {
             var nRow = this.dsAT_BUTRXD.rowposition;
             var v_strColID = "APLT_EMNR";
             var v_strValue = "";
             var nRow = this.dsAT_BUTRXD.rowposition;

             	
             // 신청자 구분값이 변경된 경우 해당값 초기화
             if(e.columnid == "EMPL_CODE"){
             
        		if(e.newvalue != e.oldvalue){ // 값이 바뀐 경우에만
        		
        		   this.dsAT_BUTRXD.setColumn(nRow, "APLT_EMNR",     "");    //사번
        		   this.dsAT_BUTRXD.setColumn(nRow, "APLT_EMNM",     "");    //성명
        		   this.dsAT_BUTRXD.setColumn(nRow, "APLT_OPCD",     "");    //직급코드
        		   this.dsAT_BUTRXD.setColumn(nRow, "APLT_OPNM",     "");    //직급명
        		   this.dsAT_BUTRXD.setColumn(nRow, "APLT_DTCD",     "");    //부서코드
        		   this.dsAT_BUTRXD.setColumn(nRow, "APLT_DTNM",     "");    //부서명

        		   //this.dsAT_BUTRXD.setColumn(nRow, "BANK_EMPL",     "");    //예금주
        		   //this.dsAT_BUTRXD.setColumn(nRow, "BANK_CODE",     "");    //은행코드
        		   //this.dsAT_BUTRXD.setColumn(nRow, "BANK_CDNM",     "");    //은행명
        		   //this.dsAT_BUTRXD.setColumn(nRow, "BANK_ACNT",     "");    //계좌번호 -- 사용안하기로함
        		   this.dsAT_BUTRXD.setColumn(nRow, "ADNV_AMNT",     "");    //전도금
        		
        		}
             }
        }

        
        /*-------------------------------------------+
         |  DS 신청자 사원인 경우 중복 체크                     |
         +-------------------------------------------*/
        this.dsAT_BUTRXD_cancolumnchange = function(obj,e)
        {
        	var v_strColID = "APLT_EMNR";
        	var v_strValue = "";
        	var nRow = this.dsAT_BUTRXD.rowposition;
        	
        	if(obj.getColumn(nRow, "EMPL_CODE") == "10" && e.columnid == "APLT_EMNR"){

        		if(this.IsNull(e.newvalue)) {
        			return false;
        		}
        		
        		v_strValue = e.newvalue;
        		
        		alert("중복된 사원입니다.");
        		return;
        	}

        }

        /*-------------------------------------------+
         |  문자열 날짜 변환                       |
         +-------------------------------------------*/
        this.fn_strToDate = function(str) {
        	var sDate = "";
        	sDate = str.substr(0,4) + "." + str.substr(4,2) + "." + str.substr(6,2);
        	return sDate;
        }

        /*-------------------------------------------+
         |결재 상신 클릭                            |
         +-------------------------------------------*/
        this.btn_PROC_OnClick = function(obj,e)
        {
        	this.fn_apprProcess("createDoc");
        }

        /*-------------------------------------------+
         |결재 취소 클릭                           |
         +-------------------------------------------*/
        this.btn_CANC_onclick = function(obj,e)
        {
        	this.fn_apprProcess("deleteDoc");
        }

        /*-------------------------------------------+
         |교통편 기타 선택 시 기타 입력 활성화(기타)                           |
         +-------------------------------------------*/
        this.chk_TRAN_ETCR_onchanged = function(obj,e)
        {
        	var tranEtcr = this.dsAT_BUTRXM.getColumn(0,"TRAN_ETCR");
        	
        	if(tranEtcr == "0"){
        		
        		this.dsAT_BUTRXM.setColumn(0,"TRAP_ECTR",0);
        		this.dsAT_BUTRXM.setColumn(0,"TRAN_ETCD","");
        		this.edt_TRAP_ETCR.set_enable(true);
        		this.edt_TRAN_ETCD.set_enable(true);
        	
        	}else if(tranEtcr == "1"){
        	
        		this.dsAT_BUTRXM.setColumn(0,"TRAP_ECTR",0);
        		this.dsAT_BUTRXM.setColumn(0,"TRAN_ETCD","");
        		this.edt_TRAP_ETCR.set_enable(false);
        		this.edt_TRAN_ETCD.set_enable(false);
        		
        		this.fn_SUM_BTCL_TRAN();
        		this.fn_SUM_BTCL_ALLP("Tran");
        	}
        }

        /*-------------------------------------------+
         |교통편 철도 선택 시 금액 입력 활성화   |
         +-------------------------------------------*/
        this.chk_TRAN_RAIL_onchanged = function(obj,e)
        {
        	var tranEtcr = this.dsAT_BUTRXM.getColumn(0,"TRAN_RAIL");

        	if(tranEtcr == "0") {

        		this.dsAT_BUTRXM.setColumn(0,"TRAP_RAIL",0);
        		this.edt_TRAP_RAIL.set_enable(true);
        	
        	}else if(tranEtcr == "1") {
        		
        		this.dsAT_BUTRXM.setColumn(0,"TRAP_RAIL",0);
        		this.edt_TRAP_RAIL.set_enable(false);
        		
        		this.fn_SUM_BTCL_TRAN();
        		this.fn_SUM_BTCL_ALLP("Tran");
        	}
        }

        /*-------------------------------------------+
         |교통편 버스 선택 시 금액 입력 활성화   |
         +-------------------------------------------*/
        this.chk_TRAN_BUSB_onchanged = function(obj,e)
        {
        	var tranEtcr = this.dsAT_BUTRXM.getColumn(0,"TRAN_BUSB");

        	if(tranEtcr == "0") {

        		this.dsAT_BUTRXM.setColumn(0,"TRAP_BUSB",0);
        		this.edt_TRAP_BUSB.set_enable(true);
        	
        	}else if(tranEtcr == "1") {
        		
        		this.dsAT_BUTRXM.setColumn(0,"TRAP_BUSB",0);
        		this.edt_TRAP_BUSB.set_enable(false);

        		this.fn_SUM_BTCL_TRAN();
        		this.fn_SUM_BTCL_ALLP("Tran");
        	}
        }

        /*-------------------------------------------+
         |교통편 자가차 선택 시 금액 입력 활성화   |
         +-------------------------------------------*/
        this.chk_TRAN_CARM_onchanged = function(obj,e)
        {
        	/*var tranEtcr = this.dsAT_BUTRXM.getColumn(0,"TRAN_CARM");

        	if(tranEtcr == "0") {

        		this.dsAT_BUTRXM.setColumn(0,"TRAP_CARM",0);
        		this.edt_TRAP_CARM.set_enable(true);
        		this.imgHelp_TRAN_CARM.set_enable(true);
        	
        	}else if(tranEtcr == "1") {
        		
        		this.dsAT_BUTRXM.setColumn(0,"TRAP_CARM",0);
        		this.edt_TRAP_CARM.set_enable(false);
        		this.imgHelp_TRAN_CARM.set_enable(false);

        	}*/
        	if(e.postvalue == true){
        		this.imgHelp_TRAN_CARM.set_enable(true);
        	} else {
        		this.edt_TRAP_CARM.set_value(0);
        		this.imgHelp_TRAN_CARM.set_enable(false);
        		
        		this.fn_SUM_BTCL_TRAN();
        		this.fn_SUM_BTCL_ALLP("Tran");
        	}
        }

        /*-------------------------------------------+
         |교통편 항공 선택 시 금액 입력 활성화   |
         +-------------------------------------------*/
        this.chk_TRAN_AIRB_onchanged = function(obj,e)
        {
        	var tranEtcr = this.dsAT_BUTRXM.getColumn(0,"TRAN_AIRB");

        	if(tranEtcr == "0") {

        		this.dsAT_BUTRXM.setColumn(0,"TRAP_AIRB",0);
        		this.edt_TRAP_AIRB.set_enable(true);
        	
        	}else if(tranEtcr == "1") {
        		
        		this.dsAT_BUTRXM.setColumn(0,"TRAP_AIRB",0);
        		this.edt_TRAP_AIRB.set_enable(false);
        		
        		this.fn_SUM_BTCL_TRAN();
        		this.fn_SUM_BTCL_ALLP("Tran");
        	}
        }

        /*-------------------------------------------+
         |교통편 선박 선택 시 금액 입력 활성화   |
         +-------------------------------------------*/
        this.chk_TRAN_SHIP_onchanged = function(obj,e)
        {
        	var tranEtcr = this.dsAT_BUTRXM.getColumn(0,"TRAN_SHIP");

        	if(tranEtcr == "0") {

        		this.dsAT_BUTRXM.setColumn(0,"TRAP_SHIP",0);
        		this.edt_TRAP_SHIP.set_enable(true);
        	
        	}else if(tranEtcr == "1") {
        		
        		this.dsAT_BUTRXM.setColumn(0,"TRAP_SHIP",0);
        		this.edt_TRAP_SHIP.set_enable(false);
        		
        		this.fn_SUM_BTCL_TRAN();
        		this.fn_SUM_BTCL_ALLP("Tran");
        	}	
        }

        /*--------------------------------------------+
         |교통편 회사차 선택 시 금액 입력 활성화 |
         +-------------------------------------------*/
        this.chk_TRAN_CARB_onchanged = function(obj,e)
        {
        	var tranCarb = this.dsAT_BUTRXM.getColumn(0,"TRAN_CARB");

        	if(tranCarb == "0") {

        		this.dsAT_BUTRXM.setColumn(0,"TRAP_CARB",0);
        		this.edt_TRAP_CARB.set_enable(true);
        	
        	}else if(tranCarb == "1") {

        		this.dsAT_BUTRXM.setColumn(0,"TRAP_CARB",0);
        		this.edt_TRAP_CARB.set_enable(false);
        		
        		this.fn_SUM_BTCL_TRAN();
        		this.fn_SUM_BTCL_ALLP("Tran");
        	}	
        }

        this.dsAT_BUTRXD_oncolumnchanged = function(obj,e)
        {	
        	if (e.columnid == "APLT_EMNM") {
        		this.fn_HelpDialoge(this.grdAT_BUTRXD, "YES", e.oldvalue, e.columnid);
        	}

        }

        /*-------------------------------------------+
         |  교통비 합계 계산						 |
         +-------------------------------------------*/
        this.fn_SUM_BTCL_TRAN = function()
        {
        	var nTran1 = parseInt(this.edt_TRAP_RAIL.value);
        	var nTran2 = parseInt(this.edt_TRAP_BUSB.value);
        	var nTran3 = parseInt(this.edt_TRAP_CARM.value);
        	var nTran4 = parseInt(this.edt_TRAP_AIRB.value);
        	var nTran5 = parseInt(this.edt_TRAP_SHIP.value);
        	var nTran6 = parseInt(this.edt_TRAP_CARB.value);
        	var nTran7 = parseInt(this.edt_TRAP_ETCR.value);
        	var nTranALL = nTran1+nTran2+nTran3+nTran4+nTran5+nTran6+nTran7;

        	this.edt_BTCL_TRAN.set_value(nTranALL);
        }

        /*-------------------------------------------+
         |  출장여비 합계 계산						 |
         +-------------------------------------------*/
        this.fn_SUM_BTCL_ALLP = function(flag)
        {
        	var nTran = parseInt(this.edt_BTCL_TRAN.value);
        	var nRoom = parseInt(this.edt_BTCL_ROOM.value);
        	var nDayp = parseInt(this.edt_BTCL_DAYP.value);
        	var nEtcp = parseInt(this.edt_BTCL_ETCP.value);
        	var nAddp = 0;
        	var nLddp = 0;
        	
        	if(flag == "Tran"){
        		nAddp = parseInt(this.edt_BTCL_ADDP.value);
        		nLddp = parseInt(this.edt_BTCL_LDDP.value);
        		trace("  HATF0070.fn_SUM_BTCL_ALLP.Tran = "+nAddp+" _ "+nLddp);
        	} else if(flag == "All") {
        		// 공제액, 장기출장공제액 계산
        		var sDetl = "";
        		var sEmpKind = this.fn_EMPGrade();
        		trace("  HATF0070.fn_SUM_BTCL_ALLP.sEmpKind = "+sEmpKind);
        		if(sEmpKind == "30" || sEmpKind == "40"){	// 차부국장대리이하(사장단, 임원 제외)
        			//숙박일수
        			var sDateY = nexacro.toNumber(this.fnc_SubStr(this.calSHRBSRP_DATE1.value,0,4));
        			var sDateM = nexacro.toNumber(this.fnc_SubStr(this.calSHRBSRP_DATE1.value,4,2))-1;
        			var sDateD = nexacro.toNumber(this.fnc_SubStr(this.calSHRBSRP_DATE1.value,6,2));
        			var eDateY = nexacro.toNumber(this.fnc_SubStr(this.calSHRBSRP_DATE2.value,0,4));
        			var eDateM = nexacro.toNumber(this.fnc_SubStr(this.calSHRBSRP_DATE2.value,4,2))-1;
        			var eDateD = nexacro.toNumber(this.fnc_SubStr(this.calSHRBSRP_DATE2.value,6,2));
        			var sDate = new Date(sDateY,sDateM,sDateD);
        			var eDate = new Date(eDateY,eDateM,eDateD);
        			//trace("  HATF0070.fn_SUM_BTCL_ALLP.sDate = "+ sDate);
        			//trace("  HATF0070.fn_SUM_BTCL_ALLP.eDate = "+ eDate);
        			var bDate = eDate.getTime() - sDate.getTime();
        			var bDay_CNT = bDate / (1000*60*60*24);
        			trace("  HATF0070.fn_SUM_BTCL_ALLP.bDay_CNT = "+ bDay_CNT);
        			
        			if(bDay_CNT > 15 && bDay_CNT <= 30){
        				nAddp = (nRoom + nDayp) / bDay_CNT * (bDay_CNT - 15) * 0.1;
        				nLddp = 0;
        				nAddp = Math.floor(nAddp);
        				nLddp = Math.floor(nLddp);
        				sDetl = "\n공제액 : "+this.fnc_AddComma((nRoom + nDayp))+"원 / "+bDay_CNT+"일 * "+(bDay_CNT - 15)+"일 * 10% = "+this.fnc_AddComma(nAddp)+"원";
        			} else if(bDay_CNT > 30){
        				nAddp = (nRoom + nDayp) / bDay_CNT * (30 - 15) * 0.1;
        				nLddp = (nRoom + nDayp) / bDay_CNT * (bDay_CNT - 30) * 0.2;
        				nAddp = Math.floor(nAddp);
        				nLddp = Math.floor(nLddp);
        				sDetl = "\n공제액 : "+this.fnc_AddComma((nRoom + nDayp))+"원 / "+bDay_CNT+"일 * "+(30 - 15)+"일 * 10% = "+this.fnc_AddComma(nAddp)+"원"+
        						"\n장기출장공제액 : "+this.fnc_AddComma((nRoom + nDayp))+"원 / "+bDay_CNT+"일 * "+(bDay_CNT - 30)+"일 * 20% = "+this.fnc_AddComma(nLddp)+"원";
        			}
        			trace("  HATF0070.fn_SUM_BTCL_ALLP.sDetl = "+ sDetl);
        		}
        		this.edt_BTCL_ADDP.set_value(nAddp);
        		this.edt_BTCL_LDDP.set_value(nLddp);
        		this.ta_DETL_ETCR.insertText(sDetl);
        	}
        		
        	var nBtclALL = nTran+nRoom+nDayp+nEtcp-nAddp-nLddp;
        	
        	this.edt_BTCL_ALLP.set_value(nBtclALL);
        }

        /*-------------------------------------------+
         |  해외시장개척비 합계 계산						 |
         +-------------------------------------------*/
        this.fn_SUM_RCPX_ALLP = function()
        {
        	var nDnsp = parseInt(this.edt_RCPX_DNSP.value);
        	var nPnsp = parseInt(this.edt_RCPX_PNSP.value);
        	var nRcpxALL = nDnsp+nPnsp;
        	
        	this.edt_RCPX_ALLP.set_value(nRcpxALL);
        }

        /*-------------------------------------------+
         |  비용입력시 합계금액 자동계산		 |
         +-------------------------------------------*/
        this.edt_TRAP_RAIL_canchange = function(obj,e)
        {
        	this.fn_SUM_BTCL_TRAN();
        	this.fn_SUM_BTCL_ALLP("Tran");
        }

        this.edt_TRAP_BUSB_canchange = function(obj,e)
        {
        	this.fn_SUM_BTCL_TRAN();
        	this.fn_SUM_BTCL_ALLP("Tran");
        }

        this.edt_TRAP_CARM_canchange = function(obj,e)
        {
        	this.fn_SUM_BTCL_TRAN();
        	this.fn_SUM_BTCL_ALLP("Tran");
        }

        this.edt_TRAP_AIRB_canchange = function(obj,e)
        {
        	this.fn_SUM_BTCL_TRAN();
        	this.fn_SUM_BTCL_ALLP("Tran");
        }

        this.edt_TRAP_SHIP_canchange = function(obj,e)
        {
        	this.fn_SUM_BTCL_TRAN();
        	this.fn_SUM_BTCL_ALLP("Tran");
        }

        this.edt_TRAP_CARB_canchange = function(obj,e)
        {
        	this.fn_SUM_BTCL_TRAN();
        	this.fn_SUM_BTCL_ALLP("Tran");
        }

        this.edt_TRAP_ETCR_canchange = function(obj,e)
        {
        	this.fn_SUM_BTCL_TRAN();
        	this.fn_SUM_BTCL_ALLP("Tran");
        }

        this.edt_BTCL_TRAN_canchange = function(obj,e)
        {
        	this.fn_SUM_BTCL_TRAN();
        	this.fn_SUM_BTCL_ALLP("Tran");
        }

        this.edt_BTCL_ROOM_canchange = function(obj,e)
        {
        	this.fn_SUM_BTCL_TRAN();
        	this.fn_SUM_BTCL_ALLP("All");
        }

        this.edt_BTCL_DAYP_canchange = function(obj,e)
        {
        	this.fn_SUM_BTCL_TRAN();
        	this.fn_SUM_BTCL_ALLP("All");
        }

        this.edt_BTCL_ETCP_canchange = function(obj,e)
        {
        	this.fn_SUM_BTCL_TRAN();
        	this.fn_SUM_BTCL_ALLP("Tran");
        }

        this.edt_BTCL_ADDP_canchange = function(obj,e)
        {
        	this.fn_SUM_BTCL_TRAN();
        	this.fn_SUM_BTCL_ALLP("All");
        }

        this.edt_BTCL_LDDP_canchange = function(obj,e)
        {
        	this.fn_SUM_BTCL_TRAN();
        	this.fn_SUM_BTCL_ALLP("All");
        }

        this.calSHRBSRP_DATE1_onchanged = function(obj,e)
        {
        	//trace("calSHRBSRP_DATE1_onchanged");
        	//this.fn_SUM_BTCL_ALLP("All");
        }

        this.calSHRBSRP_DATE2_onchanged = function(obj,e)
        {
        	//trace("calSHRBSRP_DATE1_onchanged");
        	//this.fn_SUM_BTCL_ALLP("All");
        }

        this.edt_RCPX_DNSP_canchange = function(obj,e)
        {
        	this.fn_SUM_RCPX_ALLP();
        }

        this.edt_RCPX_PNSP_canchange = function(obj,e)
        {
        	this.fn_SUM_RCPX_ALLP();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsAT_BUTRXD.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsAT_BUTRXD.addEventHandler("cancolumnchange", this.dsAT_BUTRXD_cancolumnchange, this);
            this.dsAT_BUTRXD.addEventHandler("onvaluechanged", this.dsAT_BUTRXD_onvaluechanged, this);
            this.dsAT_BUTRXD.addEventHandler("oncolumnchanged", this.dsAT_BUTRXD_oncolumnchanged, this);
            this.dsTM_APPRXH.addEventHandler("oncolumnchanged", this.dsHR_GRTINS_oncolumnchanged, this);
            this.dsTM_APPROVAL.addEventHandler("oncolumnchanged", this.dsHR_GRTINS_oncolumnchanged, this);
            this.dsAT_HARMXM.addEventHandler("oncolumnchanged", this.dsHR_GRTINS_oncolumnchanged, this);
            this.dsAT_BUTRXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);
            this.btn_CANC.addEventHandler("onclick", this.btn_CANC_onclick, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.calSHRBSRP_DATE1.addEventHandler("onchanged", this.calSHRBSRP_DATE1_onchanged, this);
            this.calSHRBSRP_DATE2.addEventHandler("onchanged", this.calSHRBSRP_DATE2_onchanged, this);
            this.btn_addRow.addEventHandler("onclick", this.btn_addRow_onclick, this);
            this.btn_delRow.addEventHandler("onclick", this.btn_delRow_onclick, this);
            this.grdAT_BUTRXD.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.chk_TRAN_RAIL.addEventHandler("onchanged", this.chk_TRAN_RAIL_onchanged, this);
            this.chk_TRAN_AIRB.addEventHandler("onchanged", this.chk_TRAN_AIRB_onchanged, this);
            this.edt_TRAP_RAIL.addEventHandler("canchange", this.edt_TRAP_RAIL_canchange, this);
            this.edt_TRAP_AIRB.addEventHandler("canchange", this.edt_TRAP_AIRB_canchange, this);
            this.chk_TRAN_BUSB.addEventHandler("onchanged", this.chk_TRAN_BUSB_onchanged, this);
            this.chk_TRAN_SHIP.addEventHandler("onchanged", this.chk_TRAN_SHIP_onchanged, this);
            this.edt_TRAP_BUSB.addEventHandler("canchange", this.edt_TRAP_BUSB_canchange, this);
            this.edt_TRAP_SHIP.addEventHandler("canchange", this.edt_TRAP_SHIP_canchange, this);
            this.chk_TRAN_CARM.addEventHandler("onchanged", this.chk_TRAN_CARM_onchanged, this);
            this.chk_TRAN_CARB.addEventHandler("onchanged", this.chk_TRAN_CARB_onchanged, this);
            this.edt_TRAP_CARM.addEventHandler("canchange", this.edt_TRAP_CARM_canchange, this);
            this.edt_TRAP_CARB.addEventHandler("canchange", this.edt_TRAP_CARB_canchange, this);
            this.imgHelp_TRAN_CARM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edt_TRAP_ETCR.addEventHandler("canchange", this.edt_TRAP_ETCR_canchange, this);
            this.chk_TRAN_ETCR.addEventHandler("onchanged", this.chk_TRAN_ETCR_onchanged, this);
            this.edt_BTCL_TRAN.addEventHandler("canchange", this.edt_BTCL_TRAN_canchange, this);
            this.edt_BTCL_ADDP.addEventHandler("canchange", this.edt_BTCL_ADDP_canchange, this);
            this.edt_RCPX_DNSP.addEventHandler("canchange", this.edt_RCPX_DNSP_canchange, this);
            this.edt_BTCL_ROOM.addEventHandler("canchange", this.edt_BTCL_ROOM_canchange, this);
            this.edt_BTCL_LDDP.addEventHandler("canchange", this.edt_BTCL_LDDP_canchange, this);
            this.edt_RCPX_PNSP.addEventHandler("canchange", this.edt_RCPX_PNSP_canchange, this);
            this.imgHelp_BTCL_ROOM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edt_BTCL_DAYP.addEventHandler("canchange", this.edt_BTCL_DAYP_canchange, this);
            this.imgHelp_BTCL_DAYP.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edt_BTCL_ETCP.addEventHandler("canchange", this.edt_BTCL_ETCP_canchange, this);

        };

        this.loadIncludeScript("HATF0050.xfdl");
        this.loadPreloadList();
       
    };
}
)();
