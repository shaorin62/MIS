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
                this.set_name("WFMA0020");
                this.set_titletext("경조금신청등록");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCW_COCOBS", this);
            obj._setContents("<ColumnInfo><Column id=\"COCO_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COCO_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COCO_KIND\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FRCW_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CCBS_BEDE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CCBS_ENDD\" type=\"STRING\" size=\"256\"/><Column id=\"EXCC_AMOT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_PROD\" type=\"STRING\" size=\"256\"/><Column id=\"CCIT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_200X\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCW_COCOAP", this);
            obj._setContents("<ColumnInfo><Column id=\"DOCU_IDXX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COCO_SEQN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COCO_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COCO_KIND\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FRCW_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CCBS_BEDE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"APLT_EMNR\" type=\"STRING\" size=\"256\"/><Column id=\"APPL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"COCO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_PROD\" type=\"STRING\" size=\"256\"/><Column id=\"EXCC_AMOT\" type=\"STRING\" size=\"256\"/><Column id=\"CCIT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COCO_RESN\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"ENCO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_INF1\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_INF2\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_INF3\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_INF4\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_INF5\" type=\"STRING\" size=\"256\"/><Column id=\"PAYX_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJ_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_STAT_STR\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_PROC\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">COCO_KIND</Col><Col id=\"DSNAME\">dsCOCO_KIND</Col><Col id=\"HEADFLAG\">SELECT</Col></Row><Row><Col id=\"CODEID\">FRCW_CODE</Col><Col id=\"DSNAME\">dsFRCW_CODE</Col><Col id=\"HEADFLAG\">SELECT</Col></Row><Row><Col id=\"DSNAME\">dsCCIT_CODE</Col><Col id=\"CODEID\">CCIT_CODE</Col><Col id=\"HEADFLAG\">SELECT</Col></Row><Row><Col id=\"DSNAME\">dsAPPR_STAT</Col><Col id=\"CODEID\">APPR_STAT</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsSHRCOCO_KIND</Col><Col id=\"CODEID\">COCO_KIND</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsSHRFRCW_CODE</Col><Col id=\"CODEID\">FRCW_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsSHRAPPR_STAT</Col><Col id=\"CODEID\">APPR_STAT</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsCOCO_CODE</Col><Col id=\"HEADFLAG\">SELECT</Col><Col id=\"PARAM\">회계단위</Col><Col id=\"USEYSNO\">0</Col><Col id=\"COMBOID\">WFM0003</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_APPRXH", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_BOX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DOCU_IDXX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMPL_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBJ_NAME\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_STR\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_PROC\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_DATE\" size=\"12\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_APPROVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"documentID\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"documentType\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"HtmlDocument\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"subject\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"recipient\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"creator\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"documentStatus\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"isUsedFile\" size=\"3\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("7");
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
            obj.set_text("경조금신청등록");
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

            obj = new Static("stInformation", "absolute", "8", "144", "262", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "50", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("신청일");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("9");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "103", "61", "8", "67", null, null, this);
            obj.set_taborder("10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "129", "80", "35", null, null, this);
            obj.set_taborder("11");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("12");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("13");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("14");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "694", "56", "128", "4", null, null, this);
            obj.set_taborder("15");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "158", "216", "6", null, null, this);
            obj.set_taborder("16");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCW_COCOAP", "absolute", "8", "164", null, null, "25", "184", this);
            obj.set_taborder("17");
            obj.set_binddataset("dsCW_COCOAP");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"78\"/><Column size=\"73\"/><Column size=\"73\"/><Column size=\"76\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" text=\"신청일\"/><Cell col=\"1\" style=\"background: ;\" text=\"사원번호\"/><Cell col=\"2\" text=\"작성자\"/><Cell col=\"3\" text=\"경조대상자\"/><Cell col=\"4\" style=\"background: ;\" text=\"소속\"/><Cell col=\"5\" style=\"background: ;\" text=\"부서\"/><Cell col=\"6\" style=\"background: ;\" text=\"직급\"/><Cell col=\"7\" style=\"background: ;\" text=\"직위\"/><Cell col=\"8\" style=\"background: ;\" text=\"경조종류\"/><Cell col=\"9\" text=\"가족관계\"/><Cell col=\"10\" text=\"재직기간\"/><Cell col=\"11\" text=\"경조일\"/><Cell col=\"12\" text=\"경조금액\"/><Cell col=\"13\" displaytype=\"normal\" text=\"결재상태\"/><Cell col=\"14\" text=\"처리\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" style=\"align: ;\" text=\"bind:APPL_DATE\" mask=\"yyyy.MM.dd\"/><Cell col=\"1\" style=\"align: ;\" text=\"bind:APLT_EMNR\"/><Cell col=\"2\" style=\"align: ;\" text=\"bind:EMPL_NAME\"/><Cell col=\"3\" style=\"align: ;\" text=\"bind:EMP_INF1\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:EMP_INF2\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:EMP_INF3\"/><Cell col=\"6\" style=\"align: ;\" text=\"bind:EMP_INF4\"/><Cell col=\"7\" style=\"align: ;\" text=\"bind:EMP_INF5\"/><Cell col=\"8\" displaytype=\"combo\" style=\"align: ;\" text=\"bind:COCO_KIND\"/><Cell col=\"9\" displaytype=\"combo\" text=\"bind:FRCW_CODE\"/><Cell col=\"10\" text=\"bind:WORK_PROD\"/><Cell col=\"11\" displaytype=\"date\" text=\"bind:COCO_DATE\" mask=\"yyyy.MM.dd\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:EXCC_AMOT\" mask=\"###,###\"/><Cell col=\"13\" displaytype=\"combo\" text=\"bind:APPR_STAT\"/><Cell col=\"14\" displaytype=\"expr:APPR_STAT == &quot;&quot;? &quot;none&quot; : &quot;button&quot;\" edittype=\"expr:APPR_STAT == &quot;&quot;? &quot;none&quot; : &quot;button&quot;\" text=\"bind:APPR_STAT_PROC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRAPPL_DATE1", "absolute", "111", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Static("Static55", "absolute", "213", "71", "14", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRAPPL_DATE2", "absolute", "228", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Static("Static03", "absolute", "328", "61", "40", "67", null, null, this);
            obj.set_taborder("21");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "425", "71", "80", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "507", "71", "21", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_cssclass("sytHelpPopup");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "530", "71", "100", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "357", "71", "52", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "630", "61", "40", "67", null, null, this);
            obj.set_taborder("26");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "659", "71", "101", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("작성자/대상자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "764", "71", "80", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "846", "71", "21", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_cssclass("sytHelpPopup");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "869", "71", "100", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "28", "97", "90", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("경조대상자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRAPLT_EMNM", "absolute", "111", "97", "217", "21", null, null, this);
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "357", "97", "70", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("결재상태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRAPPR_STAT", "absolute", "425", "97", "205", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.set_innerdataset("@dsCombo");
            obj.set_index("-1");

            obj = new Static("spSearchBox03", "absolute", "8", null, null, "154", "25", "15", this);
            obj.set_taborder("35");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "28", null, "80", "21", null, "139", this);
            obj.set_taborder("37");
            obj.set_text("신청일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "28", null, "80", "21", null, "113", this);
            obj.set_taborder("39");
            obj.set_text("경조일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", "28", null, "80", "21", null, "87", this);
            obj.set_taborder("41");
            obj.set_text("경조명");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static76", "absolute", "28", null, "80", "21", null, "61", this);
            obj.set_taborder("43");
            obj.set_text("경조사유");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "581", "533", "80", "15", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "293", null, null, "21", "814", "139", this);
            obj.set_taborder("45");
            obj.set_text("경조대상자");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "634", null, null, "21", "493", "139", this);
            obj.set_taborder("47");
            obj.set_text("소속");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMP_INF5", "absolute", "702", null, "184", "21", null, "139", this);
            obj.set_taborder("63");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", "939", null, null, "21", "188", "139", this);
            obj.set_taborder("49");
            obj.set_text("부서");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMP_INF3", "absolute", "1007", null, "134", "21", null, "139", this);
            obj.set_taborder("64");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "1141", "549", "20", "152", null, null, this);
            obj.set_taborder("50");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Calendar("calAPPL_DATE", "absolute", "96", null, "100", "21", null, "139", this);
            this.addChild(obj.name, obj);
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_readonly("true");
            obj.set_taborder("61");

            obj = new Calendar("calCOCO_DATE", "absolute", "96", null, "100", "21", null, "113", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("38");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Combo("cmbCOCO_CODE", "absolute", "96", null, "144", "21", null, "87", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("40");
            obj.set_innerdataset("@dsUserCombo");
            obj.set_index("-1");

            obj = new TextArea("txtCOCO_RESN", "absolute", "96", null, "1045", "58", null, "24", this);
            obj.set_taborder("42");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpAPLT_EMNR", "absolute", "458", null, "21", "21", null, "139", this);
            obj.set_taborder("51");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "634", null, null, "21", "493", "113", this);
            obj.set_taborder("52");
            obj.set_text("직위");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMP_INF21", "absolute", "702", null, "184", "21", null, "113", this);
            obj.set_taborder("65");
            obj.set_password("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "939", null, null, "21", "168", "113", this);
            obj.set_taborder("53");
            obj.set_text("입사일");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "634", null, null, "21", "473", "87", this);
            obj.set_taborder("54");
            obj.set_text("경조용품");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "939", null, null, "21", "168", "87", this);
            obj.set_taborder("55");
            obj.set_text("재직기간");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMP_INF34", "absolute", "1007", null, "134", "21", null, "87", this);
            obj.set_taborder("70");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "293", null, null, "21", "834", "113", this);
            obj.set_taborder("56");
            obj.set_text("직급");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMP_INF19", "absolute", "376", null, "205", "21", null, "113", this);
            obj.set_taborder("66");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "293", null, null, "21", "814", "87", this);
            obj.set_taborder("57");
            obj.set_text("경조금액");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMP_INF0", "absolute", "376", null, "80", "21", null, "139", this);
            obj.set_taborder("62");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMP_INF1", "absolute", "481", null, "100", "21", null, "139", this);
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCCIT_CODE", "absolute", "702", null, "184", "21", null, "87", this);
            this.addChild(obj.name, obj);
            var cmbCCIT_CODE_innerdataset = new Dataset("cmbCCIT_CODE_innerdataset", this.cmbCCIT_CODE);
            cmbCCIT_CODE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">선택3</Col></Row></Rows>");
            obj.set_innerdataset(cmbCCIT_CODE_innerdataset);
            obj.set_taborder("69");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("true");
            obj.set_readonly("true");

            obj = new Calendar("calENCO_DATE", "absolute", "1007", null, "134", "21", null, "113", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("71");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");

            obj = new MaskEdit("edtEXCC_AMOT", "absolute", "376", null, "205", "21", null, "87", this);
            obj.set_taborder("72");
            obj.set_readonly("true");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("경조금신청등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","calAPPL_DATE","value","dsCW_COCOAP","APPL_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","calCOCO_DATE","value","dsCW_COCOAP","COCO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","cmbCOCO_CODE","value","dsCW_COCOAP","COCO_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","txtCOCO_RESN","value","dsCW_COCOAP","COCO_RESN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtEMP_INF0","value","dsCW_COCOAP","APLT_EMNR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edtEMP_INF1","value","dsCW_COCOAP","EMP_INF1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edtEMP_INF19","value","dsCW_COCOAP","EMP_INF4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edtEMP_INF4","value","dsCW_COCOAP","EMP_INF2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edtEMP_INF3","value","dsCW_COCOAP","EMP_INF3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","edtEMP_INF34","value","dsCW_COCOAP","WORK_PROD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","cmbCCIT_CODE","value","dsCW_COCOAP","CCIT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edtEMP_INF5","value","dsCW_COCOAP","EMP_INF2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","edtEMP_INF21","value","dsCW_COCOAP","EMP_INF5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","calENCO_DATE","value","dsCW_COCOAP","ENCO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edtEXCC_AMOT","value","dsCW_COCOAP","EXCC_AMOT");
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
        this.addIncludeScript("WFMA0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("WFMA0020.xfdl", function() {
         /***************************************************************************************************
         * # Program : 경조금신청등록
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.09		정한균		Initial Created.
         *   
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
         *****************************************************************************INBUS*CO*KR************/
         
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTT"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "WFMA0020";
        this.sKeyValue 		= new Array();

        var sDOCUID 	= ""; // 결재문서 ID
        var sAPPRGUBN 	= "";	// 결재처리구분 [ list : 목록, del : 결재취소, show : 조회, cre : 상신 ]
        var sAPPRSEQN 	= "";	// 결재문서 SEQ
        var sAPPRSTAT   = "";   // 결재문서 상태

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
        	this.fnc_GetUserComboDs(this.dsUserCombo);

        	/*신청 및 내역에서 선택된 신청서 종류를 setting*/
        	this.sDOCUID = "KHR140";
        	
        	/*권한에 따라 사원번호 수정 가능여부 결정*/
        	/*개발을 위해 권한 level을 1로 셋팅*/
        	//this.sUSERLAVEL = 1;
        	
        	switch(this.sUSERLAVEL){
        		case 1: 	//전체
        			this.imgHelpSHREMPL_NUMB.set_enable(true); 	//검색조건 사원 선택
        			this.edtSHREMPL_NAME.set_enable(true); 		//검색조건 사원명
        			break;
        	}
        	
        	this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
        	this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);

        	
        	this.calSHRAPPL_DATE1.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 6)+"01");
        	this.calSHRAPPL_DATE2.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8));

        	
        	
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
        	this.fnc_DatasetClear('dsCW_COCOAP');
        	this.fnc_DatasetClear('dsTM_APPRXH');
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsCW_COCOAP=dsCW_COCOAP dsTM_APPRXH=dsTM_APPRXH";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdCW_COCOAP.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	
        	var iRow = this.dsCW_COCOAP.insertRow(this.dsCW_COCOAP.rowposition + 1);
        	this.dsCW_COCOAP.set_rowposition(iRow);
        	
        	this.dsCW_COCOAP.setColumn(iRow,"DOCU_IDXX",this.sDOCUID);
        	this.dsCW_COCOAP.setColumn(iRow, "APPL_DATE", this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8));
        	this.dsCW_COCOAP.setColumn(iRow, "EMPL_NUMB", application.GBL_EMPLNO);
        	this.dsCW_COCOAP.setColumn(iRow, "COCO_DATE", this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8));
        	this.dsCW_COCOAP.setColumn(iRow, "INST_USID", application.GBL_USERID);
        	this.dsCW_COCOAP.setColumn(iRow, "APPR_STAT", 'N'); //결재상태: 기안대기
        	
        	this.grdCW_COCOAP.setCellPos(this.fnc_GridColumnIndex(this.grdCW_COCOAP, 0));
        	this.grdCW_COCOAP.setFocus();
        	this.edtEMP_INF1.setFocus();
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	
        	if (this.fn_DeleteCheck()) this.dsCW_COCOAP.deleteRow(this.dsCW_COCOAP.rowposition);
        	this.grdCW_COCOAP.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsCW_COCOAP");
        	this.grdCW_COCOAP.setFocus();
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	this.sKeyValue[0] = this.dsCW_COCOAP.getColumn(this.dsCW_COCOAP.rowposition,"COCO_SEQN");
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsCW_COCOAP=dsCW_COCOAP:A dsTM_APPRXH=dsTM_APPRXH:A";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdCW_COCOAP.setFocus();
        	
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
         |  10.화면 Close 時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsCW_COCOAP", this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        } 
         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj, e);
        	
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
        	
        	if (this.fnc_DatasetChangeCheck("dsCW_COCOAP")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRAPPL_DATE1.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "신청기간 FROM", this.calSHRAPPL_DATE1);
        	}
        	if(this.fnc_Length(this.fnc_Trim(this.calSHRAPPL_DATE2.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "신청기간 TO", this.calSHRAPPL_DATE2);
        	}
        	
        	if (this.calSHRAPPL_DATE1.value > this.calSHRAPPL_DATE2.value) {
        		return this.fnc_SearchCheckPostAction("TMM042", "신청기간 FROM,신청기간 TO", this.calSHRAPPL_DATE1);
        	}	

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        	if (this.dsCW_COCOAP.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	if (this.dsCW_COCOAP.getColumn(this.dsCW_COCOAP.rowposition, "APPR_STAT") != "N"){
        		this.fnc_Message("TMM902");
        		return false;
        	}
        	
        	
        	var sQuestionText = this.dsCW_COCOAP.getColumn(this.dsCW_COCOAP.rowposition, "EMP_INF1")+"님의 경조금 신청";
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsCW_COCOAP") && !this.fnc_DatasetChangeCheck("dsTM_APPRXH") ) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsCW_COCOAP.getRowCount(); i++) {
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_COCOAP.getColumn(i, "APLT_EMNR"))) < 1) {
        			return this.fnc_SearchCheckPostAction("TMM072", "경조대상자", this.edtEMP_INF1);
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_COCOAP.getColumn(i, "COCO_DATE"))) < 1) {
        			return this.fnc_SearchCheckPostAction("TMM072", "경조일", this.calCOCO_DATE);
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_COCOAP.getColumn(i, "COCO_CODE"))) < 1) {
        			return this.fnc_SearchCheckPostAction("TMM072", "경조명", this.cmbCOCO_CODE);
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsCW_COCOAP.getColumn(i, "COCO_RESN"))) < 1) {
        			return this.fnc_SearchCheckPostAction("TMM072", "경조사유", this.txtCOCO_RESN);
        		}
        	
        	}

        	return true;
        	
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == 'SEARCH00') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " APPL_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRAPPL_DATE1.value)); //신청일1
        		sReturnString += " APPL_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRAPPL_DATE2.value)); //신청일2
        		sReturnString += " DEPT_CODE="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); //부서
        		sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); //작성자
        		sReturnString += " EMP_INF1="   + this.fnc_Quote(this.fnc_Trim(this.edtSHRAPLT_EMNM.value)); //경조대상자 성명
        		sReturnString += " APPR_STAT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRAPPR_STAT.value)); //결재상태
        		sReturnString += " DOCU_IDXX="  + this.sDOCUID; // 결재문서 ID
        		//sReturnString += " APPR_SEQN=" + this.sAPPRSEQN; 

        	} else if (sKind == 'SEARCH01') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " COCO_CODE=" 		 + this.fnc_Quote(this.fnc_Trim(this.cmbCOCO_CODE.value)); //경조일련번호

        	} else if (sKind == 'SAVE00') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		
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
        	
        		this.fnc_Information(this.stInformation, this.dsCW_COCOAP.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsCW_COCOAP.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        		if ( this.sKeyValue[0] != "" ) {
        			var irow = this.dsCW_COCOAP.findRow("COCO_SEQN",this.sKeyValue[0]);
        			this.sKeyValue[0] = "";
        			if(irow<0) irow=0;
        			this.dsCW_COCOAP.set_rowposition(irow);
        		}
        		
        	} else if (sMethodName == 'SEARCH01') { //경조명 선택시 경조금액, 경조용품, 경조적용시작일, 경조종류, 가족관계 정보를 가져옴
        	
        		this.fnc_Information(this.stInformation, this.dsCW_COCOBS.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		//this.fnc_Message("TMM018", this.dsCW_COCOBS.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        		//this.fnc_Message("TMM125" , this.dsCW_COCOBS.getColumn(0, "CCIT_CODE"));
        		this.edtEXCC_AMOT.set_value(this.dsCW_COCOBS.getColumn(0, "EXCC_AMOT"));
        		this.dsCW_COCOAP.setColumn(this.dsCW_COCOAP.rowposition, "CCIT_CODE", this.dsCW_COCOBS.getColumn(0, "CCIT_CODE"));
        		this.dsCW_COCOAP.setColumn(this.dsCW_COCOAP.rowposition, "COCO_KIND", this.dsCW_COCOBS.getColumn(0, "COCO_KIND"));
        		this.dsCW_COCOAP.setColumn(this.dsCW_COCOAP.rowposition, "FRCW_CODE", this.dsCW_COCOBS.getColumn(0, "FRCW_CODE"));
        		this.dsCW_COCOAP.setColumn(this.dsCW_COCOAP.rowposition, "CCBS_BEDE", this.dsCW_COCOBS.getColumn(0, "CCBS_BEDE"));
        		
        	} else if (sMethodName == 'SAVE00') {
        	
        		this.fn_KeyFieldDisible(this.dsCW_COCOAP);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        		
        	} else if (sMethodName == "sendApproval") {
        		/*결재연동 후처리 - 결재상신때만 해당 문서를 열어준다.*/
        		if(sAPPRGUBN == "createDoc"){
        			this.fnc_ShowApproval(this.sAPPRGUBN, this.dsTM_APPROVAL.getColumn(0, "documentID"), this.dsTM_APPROVAL.getColumn(0, "documentType"));
        			/*
        			var sUrl = "http://dev.nsgportal.net/ekp/user.do?cmd=goNsDraft&cmpID=CK";
        			var sPostData = "&jobID="+this.dsTM_APPROVAL.getColumn(0,"documentType")
        						+ "&docID="+this.dsTM_APPROVAL.getColumn(0, "documentID")
        						+ "&userID="+"gwtest07"; //application.GBL_EMPLNO;
        			
        			if(nexacro.Browser == "Runtime"){  //런타임 모드일때
        				system.execBrowser(sUrl+sPostData);
        			}else{								//브라우저일때
        				window.open(sUrl+sPostData);
        			}
        			*/
        		}

        			
        		this.fn_Search();
        			
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRAPPR_STAT,dsSHRAPPR_STAT,0";
        		arrParam[1] = "COMBO,cmbCCIT_CODE,dsCCIT_CODE,0";
        		arrParam[2] = "GRID,grdCW_COCOAP,dsCOCO_KIND,COCO_KIND";
        		arrParam[3] = "GRID,grdCW_COCOAP,dsFRCW_CODE,FRCW_CODE";
        		arrParam[4] = "GRID,grdCW_COCOAP,dsAPPR_STAT,APPR_STAT";
        		
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	} else if (sMethodName == "GetUserComboCode") {
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbCOCO_CODE,dsCOCO_CODE,0";
        		this.fnc_UserComboInnerBind(arrParam);	
        	}

        }

        
        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	if(obj.readonly == true) return;

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

        	} else if ((obj.name == "imgHelpAPLT_EMNR") || (obj.name == "edtEMP_INF1")) { // 사원정보조회SHR(Popup)
        		arrParam[0] = "HRM0002";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtEMP_INF1.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtEMP_INF1";
        		arrParam[5] = "edtEMP_INF0,edtEMP_INF1,edtEMP_INF5,edtEMP_INF3,edtEMP_INF19,edtEMP_INF21,calENCO_DATE,edtEMP_INF34";
        		arrParam[6] = "0,1,5,3,19,21,28,34";

        	}
        	
        	if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) { 
        	var apprStatus = this.fnc_ToUpper(obj.getColumn(obj.rowposition, "APPR_STAT"));
        	var rowStatus = obj.getRowType(obj.rowposition);
        	
        	if ( apprStatus == "N" || rowStatus == Dataset.ROWTYPE_INSERT) {
        		this.calCOCO_DATE.enable = true;
        		this.cmbCOCO_CODE.enable = true;
        		this.txtCOCO_RESN.enable = true;
        		this.imgHelpAPLT_EMNR.enableevent = true;
        		this.edtEMP_INF1.enable = true;
        	} else {
        		this.calCOCO_DATE.enable = false;
        		this.cmbCOCO_CODE.enable = false;
        		this.txtCOCO_RESN.enable = false;
        		this.edtEMP_INF1.enable = false;
        	}
        	
        }

        /*--------------------------------------+
         |  경조명 선택시 경조용품과 경조금액을 자동 설정해준다.  |
         +--------------------------------------*/

        this.cmbCOCO_CODE_onitemchanged = function(obj,e)
        {
        	if(obj.index == 0){
        		this.edtEXCC_AMOT.set_value("");
        		this.dsCW_COCOAP.setColumn(this.dsCW_COCOAP.rowposition, "CCIT_CODE", "");
        		this.dsCW_COCOAP.setColumn(this.dsCW_COCOAP.rowposition, "COCO_KIND", "");
        		this.dsCW_COCOAP.setColumn(this.dsCW_COCOAP.rowposition, "FRCW_CODE", "");
        		this.dsCW_COCOAP.setColumn(this.dsCW_COCOAP.rowposition, "CCBS_BEDE", "");
        	}
        	else
        		this.fnSearch01();
        }

        
        /*-------------------------+
         |  경조용품과 경조금액 검색  |
         +-------------------------*/
        this.fnSearch01 = function(){
        	this.fnc_DatasetClear("dsCW_COCOBS");
        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsCW_COCOBS=dsCW_COCOBS";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        
        this.grdCW_COCOAP_oncellclick = function(obj,e)
        {
        	var sApprStat = this.dsCW_COCOAP.getColumn(e.row,"APPR_STAT");
        	var sDocuId	  = this.dsCW_COCOAP.getColumn(e.row,"DOCU_IDXX");
        	var sApprSeq  = this.dsCW_COCOAP.getColumn(e.row,"APPR_SEQN");
        	var rowStatus = this.dsCW_COCOAP.getRowType(e.row);
        		
        	//alert(e.row + "/" + sDocuId + "-" + sApprSeq);
        	
        	if (rowStatus == Dataset.ROWTYPE_INSERT) {
        		return false;
        	}
        		
        	if(sApprStat == "N") sAPPRGUBN = "createDoc";
        	else if(sApprStat == "T") sAPPRGUBN = "deleteDoc";
        	else sAPPRGUBN = "show";
        	
        	//alert(sApprStat+"/"+sDocuId+"/"+sApprSeq);
        		
        	if(e.col == 14){
        		if(sApprStat == "N" || sApprStat == "T"){
        			this.fn_apprProcess(sAPPRGUBN);
        		
        		} else{
        			/*결재상태가 진행중이거나 완료일 때는 결재문서 pdf 를 보여준다.*/
        			this.sAPPRGUBN = "show";
        			var bPerm = (this.sUSERLAVEL == "5") ? false : true;
        			this.fnc_ShowApproval(this.sAPPRGUBN, sDocuId + "-" + sApprSeq, "", true);
        			/*
        			var sUrl = "http://dev.nsgportal.net/ekp/user.do?cmd=goNsSapOpenDoc&perm=false&cmpID=CK";
        			var sPostData = "&documentId="+sDocuId+"-"+sApprSeq
        						+ "&userID="+"gwtest07"; //application.GBL_EMPLNO;
        			
        			if(nexacro.Browser == "Runtime"){  //런타임 모드일때
        				system.execBrowser(sUrl+sPostData);
        			}else{								//브라우저일때
        				window.open(sUrl+sPostData);
        			}
        			*/
        		}
        		
        		
        	}	
        }

        /*결재상신/취소*/
        this.fn_apprProcess = function(sGubn){	/* sGubn 값으로 createDoc or deleteDoc 값을 받는다.*/
        	var sXmlStr = "";
        	var i = this.dsCW_COCOAP.rowposition;
        	var sSubject 	= this.dsCW_COCOAP.getColumn(i,"SUBJ_NAME"); 						
        	var sApprDocId	= this.sDOCUID + "-" + this.dsCW_COCOAP.getColumn(i,"APPR_SEQN");/*DOCU_IDXX 과 APPR_SEQN 조합*/ 
        	
        	//alert(this.dsCW_COCOAP.getColumn(i,"APPR_SEQN")+"/"+this.dsCW_COCOAP.getColumn(i,"EMP_INF1"));
        	
        	var excc_amot = this.dsCW_COCOAP.getColumn(i,"EXCC_AMOT");
        	var excc_amot2 = " 원정";
        	
        	if(this.fnc_IsEmpty(excc_amot))
        		excc_amot = "";
        	else{
        		excc_amot2 = this.fnc_NumberToKorean(excc_amot) + " 원정 (\\"+excc_amot+")";
        		excc_amot = "금 "+ this.fnc_NumberToKorean(excc_amot) + " 원정 (\\"+ excc_amot +")";
        	}
        	//alert(sApprDocId + ": " + sSubject);
        	
        	sXmlStr  = "<style>td {border:1px solid black; Font-size:12px;  height:30px;}";
        	sXmlStr += ".label1 { background-color:#cccccc; font-weight:bold; text-align: center; }";
        	sXmlStr += ".label2 { padding-left: 5px; }";
        	sXmlStr += ".label3 { text-align: center; }";
        	sXmlStr += ".label4 { text-align: left; padding-left: 400px; font-weight:bold;}";
        	sXmlStr += ".label5 { text-align: left; padding-left: 50px; font-weight:bold;}";
        	sXmlStr += ".label6 { text-align: left; padding-left: 500px; font-weight:bold;}";
        	sXmlStr += ".label7 { text-align: left; padding-left: 530px; font-weight:bold;}";
        	sXmlStr += ".label8 { font-size:18px; font-weight:bold; text-decoration:underline; padding-left: 255px; }";
        	
        	sXmlStr += "</style>";
        	sXmlStr += "<table style='width:670px;border:1px'>";
        	sXmlStr += "  <col width=10%>";
        	sXmlStr += "  <col width=20%>";
        	sXmlStr += "  <col width=25%>";
        	sXmlStr += "  <col width=10%>";
        	sXmlStr += "  <col width=10%>";
        	sXmlStr += "  <col width=10%>";
        	sXmlStr += "  <col width=15%>";
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td class='label1'>경조금 신청금액</td>";
        	sXmlStr += "    <td class='label3' colspan='6'> "+ excc_amot + "</td>";
        	sXmlStr += "  </tr>";
        	sXmlStr += "  <tr>";
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td class='label1'>경조사항</td>";
        	sXmlStr += "    <td class='label3' colspan='2'>"+ this.dsCW_COCOAP.getColumn(i,"SUBJ_NAME") + "</td>";
        	sXmlStr += "    <td class='label1'>발생일자</td>";
        	sXmlStr += "    <td class='label3' colspan='3'>"+ this.fn_ChangeDisplayType("date", this.dsCW_COCOAP.getColumn(i,"COCO_DATE")) + "</td>";
        	sXmlStr += "  </tr>";
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td class='label1' rowspan='4'>신청인</td>";
        	sXmlStr += "    <td class='label1'>소속</td>";
        	sXmlStr += "    <td class='label3'>"+ this.dsCW_COCOAP.getColumn(i,"EMP_INF3") + "</td>";
        	sXmlStr += "    <td class='label1'>직위</td>";
        	sXmlStr += "    <td class='label3'>"+ this.dsCW_COCOAP.getColumn(i,"EMP_INF5") + "</td>";
        	sXmlStr += "    <td class='label1'>성명</td>";
        	sXmlStr += "    <td class='label3'>"+ this.dsCW_COCOAP.getColumn(i,"EMP_INF1") + "</td>";
        	sXmlStr += "  </tr>";
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td class='label1'>주소</td>";
        	sXmlStr += "    <td class='label3' colspan='5'>"+ this.dsCW_COCOAP.getColumn(i,"EMP_INF7") + "</td>";
        	sXmlStr += "  </tr>";
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td class='label1'>주민등록번호</td>";
        	sXmlStr += "    <td class='label3' colspan='2'>"+ this.fn_ChangeDisplayType("jumin", this.dsCW_COCOAP.getColumn(i,"EMP_INF6")) + "</td>";
        	sXmlStr += "    <td class='label1'>사번</td>";
        	sXmlStr += "    <td class='label3' colspan='2'>"+ this.dsCW_COCOAP.getColumn(i,"APLT_EMNR") + "</td>";
        	sXmlStr += "  </tr>";
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td class='label1'>입사년월일</td>";
        	sXmlStr += "    <td class='label3' colspan='5'>"+ this.fn_ChangeDisplayType("date", this.dsCW_COCOAP.getColumn(i,"ENCO_DATE")) + "</td>";
        	sXmlStr += "  </tr>";
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td colspan='7'><br/>"; 
        	sXmlStr += "    	<span class='label5'>(주)농심기획 경조금 지급규정에 의거 경조금을 지급받고자 별지증명서류를 첨부하여 신청하오니 </span> <BR/><BR/>";
        	sXmlStr += "    	<span class='label5'>지급하여 주시기 바랍니다.</span><BR/><BR/><BR/>";
        	sXmlStr += "    	<span class='label7'>"+ this.fn_ChangeDisplayType("date", this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8)) +"</span><BR/><BR/>";
        	sXmlStr += "    	<span class='label6'>소속 : " + this.dsCW_COCOAP.getColumn(i,"EMP_INF3")+"</span><BR/><BR/>";
        	sXmlStr += "    	<span class='label6'>직위 : " + this.dsCW_COCOAP.getColumn(i,"EMP_INF5")+"</span><BR/><BR/>";
        	sXmlStr += "    	<span class='label6'>성명 : " + this.dsCW_COCOAP.getColumn(i,"EMP_INF1")+"</span><BR/><br/><BR/>";
        	sXmlStr += "    </td>";
        	sXmlStr += "  </tr>";
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td colspan='7'><br/>"; 
        	sXmlStr += "    	<span class='label8'>경 조 금 영 수 증 </span> <BR/> <BR/> <BR/>";
        	sXmlStr += "    	<span class='label5'>일금  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        	sXmlStr += "    						 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        	sXmlStr += 			excc_amot2 + "</span><BR/><BR/>";
        	sXmlStr += "    	<span class='label5'>위 금액을 (주)농심기획 경조금 지급규정에 의한 경조금을 정히 영수함 </span> <BR/><BR/>";
        	sXmlStr += "    	<span class='label7'>"+ this.fn_ChangeDisplayType("date", this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 8)) +"</span><BR/><BR/>";
        	sXmlStr += "    	<span class='label4'>수령인 (신청인) 소속 : " + this.dsCW_COCOAP.getColumn(i,"EMP_INF3")+"</span><BR/><BR/>";
        	sXmlStr += "    	<span class='label6'>직위 : " + this.dsCW_COCOAP.getColumn(i,"EMP_INF5")+"</span><BR/><BR/>";
        	sXmlStr += "    	<span class='label6'>성명 : " + this.dsCW_COCOAP.getColumn(i,"EMP_INF1")+"</span><BR/><br/><BR/>";
        	sXmlStr += "    	<span class='label5'>주식회사 농심기획 귀중</span> <BR/><BR/><BR/>";
        	sXmlStr += "    </td>";
        	sXmlStr += "  </tr>";
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

        this.fn_ChangeDisplayType = function (type,val) { 
        	var rtnVal;
        	if (type == "date"){
        		rtnVal = this.fnc_SubStr(val, 0, 4) + "년 " + this.fnc_SubStr(val, 4, 2) + "월 " + this.fnc_SubStr(val, 6, 2) + "일";
        	}else if (type == "jumin"){
        		rtnVal = this.fnc_SubStr(val, 0, 6) + "-" + this.fnc_SubStr(val, 6, 7);
        	}
        	
        	return rtnVal;
        }

        this.fn_EditFocus = function (obj) {

        	this.fnc_EditFocus(obj);
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsCW_COCOAP.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTM_APPROVAL.addEventHandler("oncolumnchanged", this.dsHR_GRTINS_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdCW_COCOAP.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdCW_COCOAP.addEventHandler("oncellclick", this.grdCW_COCOAP_oncellclick, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static31.addEventHandler("onclick", this.Static31_onclick, this);
            this.cmbCOCO_CODE.addEventHandler("onitemchanged", this.cmbCOCO_CODE_onitemchanged, this);
            this.imgHelpAPLT_EMNR.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtEMP_INF1.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtEMP_INF1.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("WFMA0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
