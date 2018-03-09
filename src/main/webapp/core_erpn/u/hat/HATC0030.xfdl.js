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
                this.set_name("HATC0030");
                this.set_titletext("휴가신청등록");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_APPROVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"documentID\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"documentType\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"HtmlDocument\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"subject\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"recipient\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"creator\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"documentStatus\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"isUsedFile\" size=\"3\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYN\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">WORK_GUBN</Col><Col id=\"DSNAME\">dsWORK_GUBN</Col><Col id=\"HEADFLAG\"/><Col id=\"USEYN\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAT_HDAPXH", this);
            obj._setContents("<ColumnInfo><Column id=\"DOCU_IDXX\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN\" size=\"11\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"TRGT_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"TRGT_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"HOLY_RESN\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"STRT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"HOLY_DAYS\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"ANNU_NUMB\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"ANNU_USED\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"ANNU_REMA\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"OCUR_VADC\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"USEX_VADC\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"USEB_VADC\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"PRMT_NUMB\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"PRMT_REMA\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"CNCL_GUBN\" size=\"5\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAT_HDAPXD", this);
            obj._setContents("<ColumnInfo><Column id=\"DOCU_IDXX\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN\" size=\"11\" prop=\"default\" type=\"STRING\"/><Column id=\"TRGT_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"TRGT_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_GUBN\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_DATE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_TIME\" size=\"5\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAT_ANNUXM", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_YEAR\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"11\" prop=\"default\" type=\"STRING\"/><Column id=\"OUCR_ANDC\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ADJT_ANDC\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_ANDC\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"PROM_ANDC\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"PROM_REMA\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"OCUR_VADC\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"USEX_VADC\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"USEB_VADC\" size=\"10\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAT_HDAPXD_HIST", this);
            obj._setContents("<ColumnInfo><Column id=\"DOCU_IDXX\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN\" size=\"11\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"TRGT_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"TRGT_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"HOLY_RESN\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"STRT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"HOLY_DAYS\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"ANNU_NUMB\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"ANNU_USED\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"ANNU_REMA\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"PRMT_NUMB\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"PRMT_REMA\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"CNCL_GUBN\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_GUBN\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_DATE\" size=\"5\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_TIME\" size=\"5\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_APPRXH", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_BOX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DOCU_IDXX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBJ_NAME\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_STR\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_PROC\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_DATE\" size=\"12\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTime", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"10\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">1</Col><Col id=\"CODEID\">1</Col></Row><Row><Col id=\"DSNAME\">0.5</Col><Col id=\"CODEID\">0.5</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAT_ENDDXM", this);
            obj._setContents("<ColumnInfo><Column id=\"ATTE_YMTH\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDD_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "116", "25", null, this);
            obj.set_taborder("6");
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
            obj.set_taborder("1");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "0", "4", "576", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_text("휴가신청등록");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 1메뉴 > 자금계획관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("4");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "89", null, null, this);
            obj.set_taborder("7");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("8");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("9");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "557", "56", "128", "4", null, null, this);
            obj.set_taborder("10");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "206", "216", "6", null, null, this);
            obj.set_taborder("11");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAT_HDAPXD", "absolute", "8", "212", null, null, "25", "46", this);
            obj.set_taborder("58");
            obj.set_binddataset("dsAT_HDAPXD");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"사원번호\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"휴가날짜\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_essential\" text=\"휴가일수\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_essential\" text=\"휴가구분\"/></Band><Band id=\"body\"><Cell text=\"bind:TRGT_EMPL\"/><Cell col=\"1\" text=\"bind:TRGT_NAME\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" text=\"bind:WORK_DATE\" calendardisplay=\"edit\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"align: ;\" text=\"bind:WORK_TIME\" editdisplay=\"edit\" combodataset=\"dsTime\" combocodecol=\"CODEID\" combodatacol=\"DSNAME\" combodisplay=\"edit\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:WORK_GUBN\" combodisplay=\"edit\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "28", "95", "52", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("신청자");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAPPR_NUMB", "absolute", "98", "95", "80", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpAPPR_NUMB", "absolute", "180", "95", "21", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAPPR_NAME", "absolute", "203", "95", "100", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "332", "95", "52", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_text("대상자");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTRGT_NUMB", "absolute", "386", "95", "80", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpTRGT_NUMB", "absolute", "468", "95", "21", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTRGT_NAME", "absolute", "491", "95", "100", "21", null, null, this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("21");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC", "absolute", "8", "35", "74", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("결재상신");
            obj.set_cssclass("btn_WF_Module");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("23");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CANC", "absolute", "85", "35", "74", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("결재취소");
            obj.set_cssclass("btn_WF_Module");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSubject", "absolute", "98", "69", "493", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "28", "69", "68", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("제목");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "30", "147", "68", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("휴가사유");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHOLY_RESN", "absolute", "98", "147", "449", "21", null, null, this);
            obj.set_taborder("67");
            obj.set_maxlength("66");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "28", "121", "68", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("휴가기간");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSTRT_DATE", "absolute", "98", "121", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("28");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static18", "absolute", "620", "95", "70", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("연차휴가");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "620", "69", "70", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_text("의무연차");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "90", "61", "8", "89", null, null, this);
            obj.set_taborder("31");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static90", "absolute", "8", "187", "176", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("휴가신청 상세내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "1136", "61", "25", "89", null, null, this);
            obj.set_taborder("33");
            obj.set_text("w25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "693", "142", "38", "8", null, null, this);
            obj.set_taborder("34");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "277", "61", "38", "8", null, null, this);
            obj.set_taborder("35");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "697", "95", "55", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("발생");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtANNU_NUMB", "absolute", "758", "95", "70", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "847", "95", "40", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("사용");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtANNU_USED", "absolute", "918", "95", "70", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "1012", "95", "40", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("잔여");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtANNU_REMA", "absolute", "1050", "95", "70", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPRMT_REMA", "absolute", "918", "69", "70", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "847", "69", "64", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_text("촉진대상");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPRMT_NUMB", "absolute", "758", "69", "70", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "697", "69", "64", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_text("촉진기준");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calENDX_DATE", "absolute", "214", "121", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("46");
            obj.set_value("20160101");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static11", "absolute", "591", "61", "40", "89", null, null, this);
            obj.set_taborder("47");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHOLY_DAYS", "absolute", "332", "121", "50", "21", null, null, this);
            obj.set_taborder("48");
            obj.style.set_align("center middle");
            obj.set_enable("false");
            obj.set_enableevent("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "202", "121", "22", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "386", "121", "48", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_text(")일간");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "709", "61", "38", "8", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd1", "absolute", null, "183", "62", "21", "90", null, this);
            obj.set_taborder("52");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel1", "absolute", null, "183", "62", "21", "25", null, this);
            obj.set_taborder("53");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "952", "204", "216", "7", null, null, this);
            obj.set_taborder("54");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "946", "176", "216", "7", null, null, this);
            obj.set_taborder("55");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "560", "176", "80", "35", null, null, this);
            obj.set_taborder("56");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "322", "121", "10", "21", null, null, this);
            obj.set_taborder("57");
            obj.set_text("(");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "97", "168", "38", "8", null, null, this);
            obj.set_taborder("59");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "620", "120", "70", "21", null, null, this);
            obj.set_taborder("60");
            obj.set_text("정기휴가");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "697", "120", "55", "21", null, null, this);
            obj.set_taborder("61");
            obj.set_text("발생");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOCUR_VADC", "absolute", "758", "120", "70", "21", null, null, this);
            obj.set_taborder("62");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "847", "120", "40", "21", null, null, this);
            obj.set_taborder("63");
            obj.set_text("사용");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUSEX_VADC", "absolute", "918", "120", "70", "21", null, null, this);
            obj.set_taborder("64");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "1012", "120", "40", "21", null, null, this);
            obj.set_taborder("65");
            obj.set_text("잔여");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUSEB_VADC", "absolute", "1050", "120", "70", "21", null, null, this);
            obj.set_taborder("66");
            obj.set_enable("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("휴가신청등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","edtSubject","value","dsTM_APPRXH","SUBJ_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtAPPR_NAME","value","dsAT_HDAPXH","APPR_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edtTRGT_NAME","value","dsAT_HDAPXH","TRGT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtAPPR_NUMB","value","dsAT_HDAPXH","APPR_EMPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtTRGT_NUMB","value","dsAT_HDAPXH","TRGT_EMPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edtHOLY_DAYS","value","dsAT_HDAPXH","HOLY_DAYS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","calSTRT_DATE","value","dsAT_HDAPXH","STRT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","calENDX_DATE","value","dsAT_HDAPXH","ENDX_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edtPRMT_NUMB","value","dsAT_HDAPXH","PRMT_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edtPRMT_REMA","value","dsAT_HDAPXH","PRMT_REMA");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edtANNU_NUMB","value","dsAT_HDAPXH","ANNU_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edtANNU_USED","value","dsAT_HDAPXH","ANNU_USED");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","edtANNU_REMA","value","dsAT_HDAPXH","ANNU_REMA");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edtHOLY_RESN","value","dsAT_HDAPXH","HOLY_RESN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edtOCUR_VADC","value","dsAT_HDAPXH","OCUR_VADC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","edtUSEX_VADC","value","dsAT_HDAPXH","USEX_VADC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edtUSEB_VADC","value","dsAT_HDAPXH","USEB_VADC");
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
        this.addIncludeScript("HATC0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HATC0030.xfdl", function() {
        /****************************************************************************************************
        /*
         * @explanation		휴가신청등록
         * @category	 	인사관리>근태신청>휴가신청등록
         * @author	   		이창운
         * @cdate	  		2016.09.20
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
        this.sPACKAGENAME = "HATC0030"; 
        this.sDOCUID 	  = "";
        this.sATTE_YMTH	  = "";
        this.sATTE_GUBN	  = "";
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
        		this.dsTM_APPRXH.setColumn(0,"SUBJ_NAME","휴가/연차 신청");
        		this.dsTM_APPRXH.setColumn(0,"DEPT_CODE",application.GBL_DEPTCD);		
        		
        		this.dsAT_HDAPXH.addRow();
        		
        		this.calSTRT_DATE.set_value(this.fnc_SubStr(iNowDate));
        		this.dsAT_HDAPXH.setColumn(0,"DOCU_IDXX",this.sDOCUID);
        		this.dsAT_HDAPXH.setColumn(0,"APPR_EMPL",application.GBL_EMPLNO);
        		this.dsAT_HDAPXH.setColumn(0,"APPR_NAME",application.GBL_USERNM);
        		this.dsAT_HDAPXH.setColumn(0,"TRGT_EMPL",application.GBL_EMPLNO);
        		this.dsAT_HDAPXH.setColumn(0,"TRGT_NAME",application.GBL_USERNM);		
        		this.calENDX_DATE.set_value(this.fnc_SubStr(iNowDate)); 
        		
        		/*휴가기간 일수*/
        		this.dsAT_HDAPXH.setColumn(0,"HOLY_DAYS",this.fn_daysRange(this.calSTRT_DATE.value, this.calENDX_DATE.value)+1);
        		
        	}else{
        		this.sKeyValue = this.parent.sAPPRSEQN;
        		this.fnc_DatasetClear('dsTM_APPRXH');
        		this.fnc_DatasetClear('dsAT_HDAPXH');
        		this.fnc_DatasetClear('dsAT_HDAPXD');
        		var sMethodName = "SEARCH00";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsAT_HDAPXH=dsAT_HDAPXH dsAT_HDAPXD=dsAT_HDAPXD dsTM_APPRXH=dsTM_APPRXH";
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
        	
        	this.fnc_DataSetCancel("dsAT_HDAPXH");
        	this.fnc_DataSetCancel("dsAT_HDAPXD");
        	this.fnc_DataSetCancel("dsTM_APPRXH");	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsAT_HDAPXH=dsAT_HDAPXH:U dsAT_HDAPXD=dsAT_HDAPXD:U dsTM_APPRXH=dsTM_APPRXH:A";
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
        	
        	if (this.fnc_DatasetChangeCheck("dsAT_HDAPXH") || this.fnc_DatasetChangeCheck("dsAT_HDAPXD")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsAT_HDAPXD.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;	
        	}
        	
        	var sQuestionText = "휴가날짜 (" + this.fnc_Trim(this.dsAT_HDAPXD.getColumn(this.dsAT_HDAPXD.rowposition, "WORK_DATE")) + ")";
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (this.dsAT_HDAPXD.getRowCount() < 1) {
        		this.fnc_Message("TMM003");
        		return false;	
        	}
        	
        	if (!this.fnc_DatasetChangeCheck("dsAT_HDAPXH") && !this.fnc_DatasetChangeCheck("dsAT_HDAPXD") && !this.fnc_DatasetChangeCheck("dsTM_APPRXH") ) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.dsTM_APPRXH.getColumn(0, "SUBJ_NAME"))) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "제목", this.dsTM_APPRXH, 0, this.edtSubject, "SUBJ_NAME");
        	}
        	
        	
        	// 휴가신청 헤더입력사항
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsAT_HDAPXH.getRowCount(); i++) {

        		//변경된 로우만 체크
        		if (this.fnc_ToUpper(this.dsAT_HDAPXH.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_HDAPXH.getColumn(i, "APPR_EMPL"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "신청자", this.dsAT_HDAPXD, i, this.edtAPPR_NAME, "APPR_EMPL");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_HDAPXH.getColumn(i, "TRGT_EMPL"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "대상자", this.dsAT_HDAPXH, i, this.edtTRGT_NAME, "TRGT_EMPL");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_HDAPXH.getColumn(i, "STRT_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "휴가기간시작일", this.dsAT_HDAPXD, i, this.calSTRT_DATE, "STRT_DATE");
        		}
        				
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_HDAPXH.getColumn(i, "ENDX_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "휴가기간종료일", this.dsAT_HDAPXD, i, this.calENDX_DATE, "ENDX_DATE");
        		}
        		
        		if(nexacro.toNumber(this.dsAT_HDAPXH.getColumn(i,"STRT_TIME")) > nexacro.toNumber(this.dsAT_HDAPXH.getColumn(i,"ENDX_TIME"))){
        			this.fnc_Message("TMM125", "시작시간이 종료시간보다 클 수 없습니다.");
        			return false;
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_HDAPXH.getColumn(i, "HOLY_RESN"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "휴가사유", this.dsAT_HDAPXH, i, this.edtHOLY_RESN, "HOLY_RESN");
        		}		
        	}
        	
        	// 휴가신청 상세입력사항
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsAT_HDAPXD.getRowCount(); i++) {

        		//변경된 로우만 체크
        		if (this.fnc_ToUpper(this.dsAT_HDAPXD.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_HDAPXD.getColumn(i, "WORK_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "휴가날짜", this.dsAT_HDAPXD, i, this.grdAT_HDAPXD, "WORK_DATE");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_HDAPXD.getColumn(i, "WORK_TIME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "휴가일수", this.dsAT_HDAPXD, i, this.grdAT_HDAPXD, "WORK_TIME");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsAT_HDAPXD.getColumn(i, "WORK_GUBN"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "휴가구분", this.dsAT_HDAPXD, i, this.grdAT_HDAPXD, "WORK_GUBN");
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
        		sReturnString += " DOCU_IDXX=" + this.parent.sDOCUIDXX;
        		sReturnString += " APPR_SEQN=" + this.parent.sAPPRSEQN; 	
        		sReturnString += " TRGT_EMPL=" + this.dsAT_HDAPXH.getColumn(0,"TRGT_EMPL");
        		sReturnString += " STDS_YEAR=" + String(this.calSTRT_DATE.value).substr(0,4);
        	
        	} else if (sKind == 'SEARCH02') {
        				
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " DOCU_IDXX=" + this.parent.sDOCUIDXX;
        		sReturnString += " APPR_SEQN=" + this.parent.sAPPRSEQN; 	
        		sReturnString += " TRGT_EMPL=" + this.dsAT_HDAPXH.getColumn(0,"TRGT_EMPL");
        		sReturnString += " STDS_YEAR=" + String(this.calSTRT_DATE.value).substr(0,4);
        	
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);	
        		
        	} else if (sKind == "GetCommCode") {
        		var arrParam = new Array();
        		arrParam[0] = "GRID,grdAT_HDAPXD,dsWORK_GUBN,WORK_GUBN"; //SHR 신청서 종류SHR 
        		this.dsWORK_GUBN.filter("COMD_CODE ==4 || COMD_CODE ==6");
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	} else if (sKind == "SEARCH05") {
        	
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
        	
        		//this.fnc_Information(this.stInformation, this.dsAT_OWAPXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		//this.fnc_Message("TMM018", this.dsAT_OWAPXD.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.fn_getUserHolyInfo();
        	} else if (sMethodName == 'SEARCH01') {
        	
        		this.dsAT_HDAPXH.setColumn(0,"ANNU_NUMB",this.dsAT_ANNUXM.getColumn(0,"TOTL_ANDC"));
        		this.dsAT_HDAPXH.setColumn(0,"ANNU_USED",this.dsAT_ANNUXM.getColumn(0,"USEX_ANDC"));
        		this.dsAT_HDAPXH.setColumn(0,"ANNU_REMA",this.dsAT_ANNUXM.getColumn(0,"USEB_ANDC"));
        		this.dsAT_HDAPXH.setColumn(0,"OCUR_VADC",this.dsAT_ANNUXM.getColumn(0,"OCUR_VADC"));
        		this.dsAT_HDAPXH.setColumn(0,"USEX_VADC",this.dsAT_ANNUXM.getColumn(0,"USEX_VADC"));
        		this.dsAT_HDAPXH.setColumn(0,"USEB_VADC",this.dsAT_ANNUXM.getColumn(0,"USEB_VADC"));
        		this.dsAT_HDAPXH.setColumn(0,"PRMT_NUMB",this.dsAT_ANNUXM.getColumn(0,"PROM_ANDC"));
        		this.dsAT_HDAPXH.setColumn(0,"PRMT_REMA",this.dsAT_ANNUXM.getColumn(0,"PROM_REMA"));
        		
        	} else if (sMethodName == 'SEARCH02') {
        		this.fn_findDupDate();
        		
        	} else if (sMethodName == "SAVE00") {
        		//this.fnc_Information(this.stInformation, 0, "SAVE");
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
        		arrParam[0] = "GRID,grdAT_HDAPXD,dsWORK_GUBN,WORK_GUBN"; //SHR 신청서 종류SHR 
        		this.dsWORK_GUBN.filter("COMD_CODE == '4' || COMD_CODE == '6'"); //4:연차, 6:정기휴가
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	} else if (sMethodName == "SEARCH05") {
        		if(this.dsAT_ENDDXM.getColumn(0,"ENDD_YSNO") == "Y"){
        			if(this.sATTE_GUBN == "1"){
        				this.calSTRT_DATE.set_value("");
        			}else{
        				this.calENDX_DATE.set_value("");
        			}
        			this.fnc_Message("TMM125", "해당일 근태가 마감되었습니다.");
        		}else{
        			if(this.sATTE_GUBN == "1"){
        				var days = this.fn_daysRange(this.sATTE_YMTH, this.calENDX_DATE.value);	
        				if(days < 0){
        				}else{
        					this.dsAT_HDAPXH.setColumn(0,"HOLY_DAYS",days+1);
        					this.fn_addHolyDetl(this.sATTE_YMTH, this.calENDX_DATE.value, days+1);
        					//return true;
        				}
        			}else{
        				var days = this.fn_daysRange(this.calSTRT_DATE.value, this.sATTE_YMTH);	
        		
        				if(days < 0){
        				}else{
        					this.dsAT_HDAPXH.setColumn(0,"HOLY_DAYS",days+1);
        					this.fn_addHolyDetl(this.calSTRT_DATE.value, this.sATTE_YMTH, days+1);
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
        	this.grdAT_HDAPXD.enable = false;
        	this.edtSubject.enable = false;
        	this.btnDel1.enable = false;
        	this.edtAPPR_NAME.enable = false;
        	this.edtTRGT_NAME.enable = false;
        	this.calENDX_DATE.enable = false;
        	this.calSTRT_DATE.enable = false;
        	this.edtHOLY_DAYS.enable = false;
        	this.edtHOLY_RESN.enable = false;
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
        	sXmlStr += "  <col width=40%>";
        	sXmlStr += "  <col width=10%>";
        	sXmlStr += "  <col width=40%>";
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td colspan='2' style='text-align: center;'>신청대상자</td>";
        	sXmlStr += "    <td colspan='2' style='text-align: center;'>연차휴가 사용현황</td>";	
        	sXmlStr += "  </tr>";
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td class='label1'>성명</td>";
        	sXmlStr += "    <td class='label3'>" + this.dsAT_HDAPXH.getColumn(0,"TRGT_NAME") + "("+ this.dsAT_HDAPXH.getColumn(0,"TRGT_EMPL") +")</td>";	
        	sXmlStr += "    <td class='label1'>의무연차</td>";
        	sXmlStr += "    <td class='label3'>기준(" + this.dsAT_HDAPXH.getColumn(0,"PRMT_NUMB") + ") / 대상("+ this.dsAT_HDAPXH.getColumn(0,"PRMT_REMA") +") </td>";	
        	sXmlStr += "  </tr>";
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td class='label1'>휴가기간</td>";
        	sXmlStr += "    <td class='label3'>" + this.fn_strToDate(this.dsAT_HDAPXH.getColumn(0,"STRT_DATE")) + " ~ "+ this.fn_strToDate(this.dsAT_HDAPXH.getColumn(0,"ENDX_DATE")) + " ("+ this.dsAT_HDAPXH.getColumn(0,"HOLY_DAYS") +")일간 </td>";	
        	sXmlStr += "    <td class='label1'>연차휴가</td>";
        	sXmlStr += "    <td class='label3'>발생(" + this.dsAT_HDAPXH.getColumn(0,"ANNU_NUMB") + ") / 사용("+ this.dsAT_HDAPXH.getColumn(0,"ANNU_USED") +") / 잔여("+ this.dsAT_HDAPXH.getColumn(0,"ANNU_REMA") + ")</td>";	
        	sXmlStr += "  </tr>";
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td class='label1'>휴가사유</td>";
        	sXmlStr += "    <td class='label2'>" + this.dsAT_HDAPXH.getColumn(0,"HOLY_RESN") + "</td>";	
        	sXmlStr += "    <td class='label1'>정기휴가</td>";
        	sXmlStr += "    <td class='label3'>발생(" + this.dsAT_HDAPXH.getColumn(0,"OCUR_VADC") + ") / 사용("+ this.dsAT_HDAPXH.getColumn(0,"USEX_VADC") +") / 잔여("+ this.dsAT_HDAPXH.getColumn(0,"USEB_VADC") + ")</td>";	
        	sXmlStr += "  </tr>";
        	sXmlStr += "</table>";	
        	sXmlStr += "<table style='width:670px;border:1px'>";
        	sXmlStr += "  <col width=20%>";
        	sXmlStr += "  <col width=20%>";
        	sXmlStr += "  <col width=20%>";
        	sXmlStr += "  <col width=15%>";
        	sXmlStr += "  <col width=25%>";
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td colspan='5'>&nbsp;※휴가신청 상세내역</td>";
        	sXmlStr += "  </tr>";
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
         
         /* 두 날짜의 일수를 구한다. (종료일-시작일*/ 
         this.fn_daysRange = function(calDate1,calDate2){
         
        	var tmpDt1 = String(calDate1);
        	var tmpDt2 = String(calDate2);
        	
        	var dt1 = new Array(tmpDt1.substr(0,4),tmpDt1.substr(4,2),tmpDt1.substr(6,2));
        	var dt2 = new Array(tmpDt2.substr(0,4),tmpDt2.substr(4,2),tmpDt2.substr(6,2));
        	
        	dt1[1] = (Number(dt1[1])-1)+"";
        	dt2[1] = (Number(dt2[1])-1)+"";
        	
        	var sDt = new Date(dt1[0],dt1[1],dt1[2]);
        	var eDt = new Date(dt2[0],dt2[1],dt2[2]);
        	
        	return ((eDt.getTime() - sDt.getTime())/1000/60/60/24);
         }
         
          /* 몇일 후 날짜 구하기*/ 
         this.fn_addDate = function(calDate,days){ 
        	var tmpDt1 = String(calDate);
        	var tmpDays = Number(days);
        	var dt1 = new Array(tmpDt1.substr(0,4),tmpDt1.substr(4,2),tmpDt1.substr(6,2));
        	
        	dt1[1] = (Number(dt1[1])-1)+"";
        	
        	var sDt = new Date(dt1[0],dt1[1],dt1[2]);	
        	sDt.setDate(sDt.getDate()+Number(days));
        	
        	return sDt.getYear() + '' + ((sDt.getMonth()+1)<10?'0'+(sDt.getMonth()+1):(sDt.getMonth()+1)) + '' + (sDt.getDate()<10?'0'+sDt.getDate():sDt.getDate());
         }
         
         /* 휴가신청 상세내역 자동입력 */
         this.fn_addHolyDetl = function(calDate1,calDate2,days){
        	this.dsAT_HDAPXD.deleteAll();
        	var sDupMsg = "";
        	
        	for( var i = 0 ; Number(i) < Number(days) ; i++ )
        	{		
        		var iRow = this.dsAT_HDAPXD.addRow();
        		//this.dsAT_HDAPXD.set_rowposition(iRow); 
        		this.dsAT_HDAPXD.setColumn(iRow,"DOCU_IDXX",this.sDOCUID);
        		this.dsAT_HDAPXD.setColumn(iRow,"APPR_SEQN",this.parent.sAPPRSEQN);
        		this.dsAT_HDAPXD.setColumn(iRow,"TRGT_EMPL",this.dsAT_HDAPXH.getColumn(0,"TRGT_EMPL"));
        		this.dsAT_HDAPXD.setColumn(iRow,"TRGT_NAME",this.dsAT_HDAPXH.getColumn(0,"TRGT_NAME"));
        		this.dsAT_HDAPXD.setColumn(iRow,"WORK_DATE",this.fn_addDate(calDate1,i));
        		this.dsAT_HDAPXD.setColumn(iRow,"WORK_TIME",1);
        	}
        	
        	this.fn_findDupDate();
         }
         
         /* 연차관리 내용 조회*/
         this.fn_getUserAnnuInfo = function(){
        	this.fnc_DatasetClear('dsAT_ANNUXM');

        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsAT_ANNUXM=dsAT_ANNUXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /* 대상자에 대한 과거 사용내역 조회*/
        this.fn_getUserHolyInfo = function(){

        	this.fnc_DatasetClear('dsAT_HDAPXD_HIST');
        	var sMethodName = "SEARCH02";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsAT_HDAPXD_HIST=dsAT_HDAPXD_HIST";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*문자열 날짜전환*/
        this.fn_strToDate = function(str) {
        	var sDate = "";
        	sDate = str.substr(0,4) + "." + str.substr(4,2) + "." + str.substr(6,2);
        	return sDate;
        }

        /*휴가 및 연차 중복입력 찾기*/
        this.fn_findDupDate = function(){

        	var totCnt = this.dsAT_HDAPXD.rowcount; 
        	
        	for( var i = Number(totCnt)-1 ; i >= 0 ; i -- ){
        		var expr = "TRGT_EMPL =='" + this.dsAT_HDAPXD.getColumn(i,"TRGT_EMPL") + "' && WORK_DATE == '" + this.dsAT_HDAPXD.getColumn(i,"WORK_DATE") + "'";
        		var row = this.dsAT_HDAPXD_HIST.findRowExpr(expr);		
        	
        		if(row > -1) {
        			this.fnc_Message("TMM077", this.dsAT_HDAPXD.getColumn(i,"WORK_DATE"));
        			this.dsAT_HDAPXD.deleteRow(i);			
        		}
        		
        		if (this.dsAT_HDAPXD.rowcount == 0){
        		}
        		
        	}
        	
        	var sHOLY_DAYS = 0;
        		
        	for( i = 0 ; i < this.dsAT_HDAPXD.rowcount ; i ++ )
        	{
        		sHOLY_DAYS += Number(this.dsAT_HDAPXD.getColumn(i,"WORK_TIME"));
        	}
        	this.dsAT_HDAPXH.setColumn(0,"HOLY_DAYS",sHOLY_DAYS);
        }

        /*-----------------------+
        |  해당월 근태 마감여부|
        +------------------------*/
        this.fn_getMagamYsno = function()
        {	
        	this.fnc_DatasetClear('dsAT_ENDDXM');

        	var sMethodName = "SEARCH05";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsAT_ENDDXM=dsAT_ENDDXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

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
        	
        	if ((obj.name == "imgHelpAPPR_NUMB") || (obj.name == "edtAPPR_NAME")) {

        		arrParam[0] = "HRM0004"; //HRM0001
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtAPPR_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtAPPR_NAME";
        		arrParam[5] = "edtAPPR_NUMB,edtAPPR_NAME";
        		arrParam[6] = "0,1";
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	} else if ((obj.name == "imgHelpTRGT_NUMB") || (obj.name == "edtTRGT_NAME")) {
        		
        		arrParam[0] = "HRM0004"; //HRM0001
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtTRGT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtTRGT_NAME";
        		arrParam[5] = "edtTRGT_NUMB,edtTRGT_NAME";
        		arrParam[6] = "0,1";
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	} 
        }

        this.btn_PROC_onClick = function(obj,e)
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

        this.btnAdd_onclick = function(obj,e)
        {
        	var iRow = this.dsAT_HDAPXD.addRow();
        	this.dsAT_HDAPXD.set_rowposition(iRow); 
        	this.dsAT_HDAPXD.setColumn(iRow,"DOCU_IDXX",this.sDOCUID);
        	this.dsAT_HDAPXD.setColumn(iRow,"TRGT_EMPL",this.dsAT_HDAPXH.getColumn(0,"TRGT_EMPL"));
        	this.dsAT_HDAPXD.setColumn(iRow,"TRGT_NAME",this.dsAT_HDAPXH.getColumn(0,"TRGT_NAME"));
        }

        this.btnDel_onclick = function(obj,e)
        {
        	if (this.fn_DeleteCheck()) {
        		this.dsAT_HDAPXD.deleteRow(this.dsAT_HDAPXD.rowposition);
        		this.grdAT_HDAPXD.setFocus();
        	}
        }

        this.dsAT_HDAPXH_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "STRT_DATE"){
        		
        		if(e.newvalue != "" && e.newvalue != null){
        		
        			this.sATTE_YMTH = e.newvalue;
        			this.sATTE_GUBN = "1";
        			this.fn_getMagamYsno();
        			
        			if(this.sATTE_GUBN == "1"){
        				var days = this.fn_daysRange(this.sATTE_YMTH, this.calENDX_DATE.value);	
        				if(days < 0){
        					this.fnc_SearchCheckPostAction("TMM042", "휴가기간시작,휴가기간종료", this.calSTRT_DATE);
        					return false;
        				}
        			}else{
        				var days = this.fn_daysRange(this.calSTRT_DATE.value, this.sATTE_YMTH);	
        		
        				if(days < 0){
        					this.fnc_SearchCheckPostAction("TMM042", "휴가기간시작,휴가기간종료", this.calENDX_DATE);
        					return false;
        				}
        			}
        		}
        		return true;
        	}else if(e.columnid == "ENDX_DATE"){
        		
        		if(e.newvalue != "" && e.newvalue != null){
        			this.sATTE_YMTH = e.newvalue;
        			this.sATTE_GUBN = "2";		
        			this.fn_getMagamYsno();		
        		}
        		return true;
        	}else if(e.columnid == "TRGT_EMPL"){
        		
        		if(e.newvalue != "" && e.newvalue != null){
        			this.fn_getMagamYsno();	
        		}
        		return true;
        	}		
        }

        this.dsAT_HDAPXH_oncolumnchanged = function(obj,e)
        {
        	if(e.newvalue != null && e.columnid == "TRGT_EMPL"){		
        		this.fn_getUserAnnuInfo ();
        		this.fn_getUserHolyInfo ();
        		for( var i = 0 ; i < this.dsAT_HDAPXD.rowcount ; i ++ )
        		{
        			this.dsAT_HDAPXD.setColumn(i,"TRGT_EMPL",this.dsAT_HDAPXH.getColumn(0,"TRGT_EMPL"));
        			this.dsAT_HDAPXD.setColumn(i,"TRGT_NAME",this.dsAT_HDAPXH.getColumn(0,"TRGT_NAME"));
        		}
        	}
        }

        
        this.dsAT_HDAPXD_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "WORK_TIME"){
        	
        		var sHOLY_DAYS = 0;
        		
        		for( i = 0 ; i < this.dsAT_HDAPXD.rowcount ; i ++ )
        		{
        			sHOLY_DAYS += Number(this.dsAT_HDAPXD.getColumn(i,"WORK_TIME"));
        		}
        		this.dsAT_HDAPXH.setColumn(0,"HOLY_DAYS",sHOLY_DAYS);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_APPROVAL.addEventHandler("oncolumnchanged", this.dsHR_GRTINS_oncolumnchanged, this);
            this.dsAT_HDAPXH.addEventHandler("cancolumnchange", this.dsAT_HDAPXH_cancolumnchange, this);
            this.dsAT_HDAPXH.addEventHandler("oncolumnchanged", this.dsAT_HDAPXH_oncolumnchanged, this);
            this.dsAT_HDAPXD.addEventHandler("oncolumnchanged", this.dsAT_HDAPXD_oncolumnchanged, this);
            this.dsAT_ANNUXM.addEventHandler("oncolumnchanged", this.dsAT_OWAPXD_oncolumnchanged, this);
            this.dsAT_HDAPXD_HIST.addEventHandler("oncolumnchanged", this.dsAT_OWAPXD_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdAT_HDAPXD.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdAT_HDAPXD.addEventHandler("oncellclick", this.grdAT_HDAPXD_oncellclick, this);
            this.imgHelpAPPR_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtAPPR_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpTRGT_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtTRGT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtTRGT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_PROC.addEventHandler("onclick", this.btn_PROC_onClick, this);
            this.btn_CANC.addEventHandler("onclick", this.btn_CANC_onclick, this);
            this.btnAdd1.addEventHandler("onclick", this.btnAdd_onclick, this);
            this.btnDel1.addEventHandler("onclick", this.btnDel_onclick, this);

        };

        this.loadIncludeScript("HATC0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
