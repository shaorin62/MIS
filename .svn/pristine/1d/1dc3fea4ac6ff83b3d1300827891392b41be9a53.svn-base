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
                this.set_name("FSMB0010P03");
                this.set_titletext("자산일괄등록");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,860,332);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFS_ASSTXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ASST_CONT\" size=\"22\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSF_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSF_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DPCT_METH\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"PRID_DPCT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_RATE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_CYCL\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_UNIT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_STRD\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DETL_STRD\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQU_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_COST\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_PRIC\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"UNIT_CODE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"BUYX_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"MUFT_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"BARX_CODE\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_STAT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQU_CHNL\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DPCT_STAT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"SAVG_VALU\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"UNDP_BALE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ASST_CSCD\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"BEFO_ASST\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"BEFO_DEPT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"IDLE_YSNO\" type=\"STRING\" size=\"1\" prop=\"default\"/><Column id=\"PRID_LEGL\" type=\"BIGDECIMAL\" size=\"22\" prop=\"default\"/><Column id=\"DPCT_CMPT\" type=\"STRING\" size=\"4\" prop=\"default\"/><Column id=\"VATX_AMNT\" type=\"BIGDECIMAL\" size=\"22\" prop=\"default\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">DPCT_METH</Col><Col id=\"DSNAME\">dsDPCT_METH</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">DPCT_CYCL</Col><Col id=\"DSNAME\">dsDPCT_CYCL</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">UNIT_CODE</Col><Col id=\"DSNAME\">dsUNIT_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">ASST_STAT</Col><Col id=\"DSNAME\">dsASST_STAT</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsACCT_UNIT</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">ACQU_CHNL</Col><Col id=\"DSNAME\">dsACQU_CHNL</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">ASST_CSCD</Col><Col id=\"DSNAME\">dsASST_CSCD</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsDPCT_CMPT</Col><Col id=\"CODEID\">DPCT_CMPT</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDPCT_RATE", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STDS_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PRID_DPCT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AMOT_RT01\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AMOT_RT02\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_ButtonList", "absolute", null, "296", "139", "24", "14", null, this);
            obj.set_taborder("63");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnEnd", "absolute", null, "0", "62", "24", "0", null, this.div_ButtonList);
            obj.set_taborder("4");
            obj.set_cssclass("btn_POP_CRUD");
            obj.set_visible("true");
            obj.style.set_cursor("hand");
            obj.set_text("닫기");
            this.div_ButtonList.addChild(obj.name, obj);
            obj = new Button("btnSave", "absolute", null, "0", "62", "24", "65", null, this.div_ButtonList);
            obj.set_taborder("5");
            obj.set_cssclass("btn_POP_CRUD");
            obj.set_visible("true");
            obj.style.set_cursor("hand");
            obj.set_text("저장");
            this.div_ButtonList.addChild(obj.name, obj);

            obj = new Static("Shape01", "absolute", "15", "15", null, "273", "15", null, this);
            obj.set_taborder("64");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Edit("edtASST_NAME", "absolute", "396", "24", null, "21", "19", null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_taborder("1");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "302", "24", "95", "21", null, null, this);
            obj.set_text("자산명");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("44");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "35", "24", "97", "21", null, null, this);
            obj.set_text("등록수량");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCLSF_CODE", "absolute", "396", "50", "151", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_maxlength("10");
            obj.set_taborder("3");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCLSF_NAME", "absolute", "576", "50", null, "21", "18", null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_taborder("5");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static6", "absolute", "302", "50", "95", "21", null, null, this);
            obj.set_text("품목분류");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "35", "50", "97", "21", null, null, this);
            obj.set_text("취득일자");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("51");
            this.addChild(obj.name, obj);

            obj = new Edit("edtASCL_NAME", "absolute", "396", "76", "151", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_maxlength("100");
            obj.set_taborder("7");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "553", "76", "98", "21", null, null, this);
            obj.set_text("유휴여부");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("61");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkIDLE_YSNO", "absolute", "633", "76", "117", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_buttonalign("center middle");
            obj.style.set_align("center middle");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "302", "76", "95", "21", null, null, this);
            obj.set_text("자산분류");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "35", "76", "97", "21", null, null, this);
            obj.set_text("상각주기");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("37");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "35", "102", "97", "21", null, null, this);
            obj.set_text("상각방법");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("38");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskPRID_DPCT", "absolute", "396", "102", "34", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_taborder("11");
            obj.style.set_align("right middle");
            obj.set_mask("#,###");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskDPCT_RATE", "absolute", "633", "102", "45", "21", null, null, this);
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_taborder("13");
            obj.set_value("MaskEdit3");
            obj.set_mask("!###.#");
            obj.style.set_align("right middle");
            obj.set_enable("false");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskACQU_NUMB", "absolute", "758", "102", null, "21", "18", null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_taborder("14");
            obj.style.set_align("right middle");
            obj.set_mask("#,###");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskPRID_LEGL", "absolute", "514", "102", "33", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_autoselect("true");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "446", "102", "65", "21", null, null, this);
            obj.set_text("세무년수");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("46");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "688", "102", "66", "21", null, null, this);
            obj.set_text("취득수량");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("47");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "553", "102", "98", "21", null, null, this);
            obj.set_text("상각율(%)");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("49");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "302", "102", "95", "21", null, null, this);
            obj.set_text("내용년수");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "35", "128", "97", "21", null, null, this);
            obj.set_text("회계단위");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("53");
            this.addChild(obj.name, obj);

            obj = new Edit("edtASST_STRD", "absolute", "396", "128", "151", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_taborder("16");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDETL_STRD", "absolute", "633", "128", null, "21", "19", null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("25");
            obj.set_taborder("17");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "553", "128", "98", "21", null, null, this);
            obj.set_text("세부규격");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("57");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "302", "128", "95", "21", null, null, this);
            obj.set_text("규격(모델명)");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("58");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "35", "154", "97", "21", null, null, this);
            obj.set_text("단가");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("59");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskACQU_PRIC", "absolute", "396", "154", "151", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_taborder("19");
            obj.style.set_align("right middle");
            obj.set_mask("#,###");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskVATX_AMNT", "absolute", "633", "154", null, "21", "19", null, this);
            obj.set_taborder("20");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "553", "154", "98", "21", null, null, this);
            obj.set_text("부가세");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "302", "154", "95", "21", null, null, this);
            obj.set_text("취득금액");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("41");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAME", "absolute", "308", "180", "239", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_taborder("23");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbUNIT_CODE", "absolute", "633", "180", null, "21", "19", null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_type("dropdown");
            obj.set_taborder("24");
            obj.set_cssclass("styFormItemText");

            obj = new Static("Static38", "absolute", "553", "180", "98", "21", null, null, this);
            obj.set_text("자산단위");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "35", "180", "97", "21", null, null, this);
            obj.set_text("부서");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("55");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMUFT_NAME", "absolute", "633", "206", null, "21", "19", null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("25");
            obj.set_taborder("28");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCUST_NAME", "absolute", "308", "206", "239", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "553", "206", "98", "21", null, null, this);
            obj.set_text("제조업체");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("39");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "35", "206", "97", "21", null, null, this);
            obj.set_text("구매처");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("42");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NAME", "absolute", "308", "232", "239", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_taborder("31");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbASST_STAT", "absolute", "633", "232", null, "21", "19", null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_enable("false");
            obj.set_type("dropdown");
            obj.set_taborder("32");
            obj.set_cssclass("styFormItemText");

            obj = new Static("Static50", "absolute", "553", "232", "98", "21", null, null, this);
            obj.set_text("자산상태");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("60");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "35", "232", "97", "21", null, null, this);
            obj.set_text("사원");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("62");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDESC_REMK", "absolute", "633", "258", null, "21", "19", null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_taborder("35");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "302", "258", "98", "21", null, null, this);
            obj.set_text("자산비용구분");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("56");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbASST_CSCD", "absolute", "396", "258", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_type("dropdown");
            obj.set_taborder("34");
            obj.set_cssclass("styFormItemText");

            obj = new Static("Static54", "absolute", "553", "258", "95", "21", null, null, this);
            obj.set_text("비고");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("48");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "35", "258", "97", "21", null, null, this);
            obj.set_text("자산취득경로");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("43");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDEPT_CODE", "absolute", "287", "180", "21", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCUST_CODE", "absolute", "287", "206", "21", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpEMPL_NUMB", "absolute", "287", "232", "21", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCLSF_CODE", "absolute", "551", "50", "21", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "15", "245", null, null, this);
            obj.set_taborder("65");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "845", "0", "15", "245", null, null, this);
            obj.set_taborder("66");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "152", "16", "38", "8", null, null, this);
            obj.set_taborder("67");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", "173", "279", "38", "8", null, null, this);
            obj.set_taborder("68");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbDPCT_CYCL", "absolute", "130", "76", "155", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_type("dropdown");
            obj.set_taborder("6");
            obj.set_cssclass("styFormItemText");

            obj = new Combo("cmbDPCT_METH", "absolute", "130", "102", "64", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_type("dropdown");
            obj.set_taborder("9");
            obj.set_cssclass("styFormItemText");

            obj = new Combo("cmbDPCT_CMPT", "absolute", "195", "102", "89", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.getSetter("binddataset").set("dsFS_ASCLXM");
            obj.set_cssclass("styFormItemText");

            obj = new Combo("cmbACCT_UNIT", "absolute", "130", "128", "155", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_type("dropdown");
            obj.set_taborder("15");
            obj.set_cssclass("styFormItemText");

            obj = new MaskEdit("mskACQU_COST", "absolute", "130", "154", "155", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_taborder("18");
            obj.style.set_align("right middle");
            obj.set_mask("#,###");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_CODE", "absolute", "130", "180", "155", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_maxlength("10");
            obj.set_taborder("21");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCUST_CODE", "absolute", "130", "206", "155", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NUMB", "absolute", "130", "232", "155", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_maxlength("10");
            obj.set_taborder("29");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbACQU_CHNL", "absolute", "130", "258", "155", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_enable("false");
            obj.set_type("dropdown");
            obj.set_taborder("33");
            obj.set_cssclass("styFormItemText");

            obj = new MaskEdit("mskASST_CONT", "absolute", "130", "24", "155", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_taborder("0");
            obj.style.set_align("right middle");
            obj.set_mask("#,###");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Calendar("calACQS_DATE", "absolute", "130", "50", "155", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static01", "absolute", "184", "0", "38", "15", null, null, this);
            obj.set_taborder("69");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "782", "288", "64", "8", null, null, this);
            obj.set_taborder("70");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "782", "320", "64", "12", null, null, this);
            obj.set_taborder("71");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 139, 24, this.div_ButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("63");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");

            	}
            );
            this.div_ButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 860, 332, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("자산일괄등록");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtASST_NAME_value","edtASST_NAME","value","dsFS_ASSTXM","ASST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calACQS_DATE_value","calACQS_DATE","value","dsFS_ASSTXM","ACQS_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCLSF_CODE_value","edtCLSF_CODE","value","dsFS_ASSTXM","CLSF_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCLSF_NAME_value","edtCLSF_NAME","value","dsFS_ASSTXM","CLSF_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbDPCT_METH_value","cmbDPCT_METH","value","dsFS_ASSTXM","DPCT_METH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtASCL_NAME_value","edtASCL_NAME","value","dsFS_ASSTXM","ASCL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskPRID_DPCT_value","mskPRID_DPCT","value","dsFS_ASSTXM","PRID_DPCT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskDPCT_RATE_value","mskDPCT_RATE","value","dsFS_ASSTXM","DPCT_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbDPCT_CYCL_value","cmbDPCT_CYCL","value","dsFS_ASSTXM","DPCT_CYCL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbACCT_UNIT_value","cmbACCT_UNIT","value","dsFS_ASSTXM","ACCT_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtASST_STRD_value","edtASST_STRD","value","dsFS_ASSTXM","ASST_STRD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDETL_STRD_value","edtDETL_STRD","value","dsFS_ASSTXM","DETL_STRD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskACQU_NUMB_value","mskACQU_NUMB","value","dsFS_ASSTXM","ACQU_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskACQU_COST_value","mskACQU_COST","value","dsFS_ASSTXM","ACQU_COST");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskACQU_PRIC_value","mskACQU_PRIC","value","dsFS_ASSTXM","ACQU_PRIC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDEPT_CODE_value","edtDEPT_CODE","value","dsFS_ASSTXM","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDEPT_NAME_value","edtDEPT_NAME","value","dsFS_ASSTXM","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbUNIT_CODE_value","cmbUNIT_CODE","value","dsFS_ASSTXM","UNIT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEMPL_NUMB_value","edtEMPL_NUMB","value","dsFS_ASSTXM","EMPL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtEMPL_NAME_value","edtEMPL_NAME","value","dsFS_ASSTXM","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMUFT_NAME_value","edtMUFT_NAME","value","dsFS_ASSTXM","MUFT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbACQU_CHNL_value","cmbACQU_CHNL","value","dsFS_ASSTXM","ACQU_CHNL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDESC_REMK_value","edtDESC_REMK","value","dsFS_ASSTXM","DESC_REMK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbASST_STAT_value","cmbASST_STAT","value","dsFS_ASSTXM","ASST_STAT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskASST_CONT_value","mskASST_CONT","value","dsFS_ASSTXM","ASST_CONT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbASST_CSCD_value","cmbASST_CSCD","value","dsFS_ASSTXM","ASST_CSCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","chkIDLE_YSNO","value","dsFS_ASSTXM","IDLE_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","mskPRID_LEGL","value","dsFS_ASSTXM","PRID_LEGL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","mskVATX_AMNT","value","dsFS_ASSTXM","VATX_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","edtCUST_CODE","value","dsFS_ASSTXM","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edtCUST_NAME","value","dsFS_ASSTXM","CUST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbDPCT_CMPT_value","cmbDPCT_CMPT","value","dsFS_ASSTXM","DPCT_CMPT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("FSMB0010P03.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FSMB0010P03.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FSMD0020 자산일괄등록 팝업
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         * 	2016.07.28		오혜성		Initial Created.
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
         ********************************************************************************INBUS*CO*KR********/
        /* FSMB0010 처럼 저장시 변동처리에 확정처리 완료됨
         --원소스는 자산등록후 변동처리에 신규 저장후 확정 처리 해야지만 감가상각처리 할 수 있었음
         --자산등록 삭제시 변동처리화면에서 확정취소> 삭제> 저장 후 자산등록 화면에서 삭제>저장 해야함
         */

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        this.sBUTTONLIST 	= "";
        this.sACCT_YEAR 	= "";
        this.sPACKAGENAME 	= "FSMB0010P03";
        this.sPACKAGENAMERate = "FSMB0010";

        /*********************
         *  화면 변수 선언부  *
         *********************/
        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
        	this.sUSERAUTH = "";
        	this.sFORMCAPTION = "";
        	this.sFORMLOCATION = "";
        	this.sUSERLAVEL = "";
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
        this.fn_FormLoadSetting = function (obj,e) {
        		
        	this.fnc_GetComboDs(this.dsCombo);
        	this.sACCT_YEAR = this.fnc_Left(this.fnc_GetServerDateTime("DATE"), 4);
        	this.fn_Input();

        }

        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {

        	this.fnc_PopupClose("");
        	
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {
        	//기능없음
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsFS_ASSTXM.addRow();
        	this.dsFS_ASSTXM.setColumn(iRow, "ACQS_DATE", this.fnc_GetServerDateTime("DATE")); //취득일자
        	this.dsFS_ASSTXM.setColumn(iRow, "DPCT_STAT", ""); //dsFS_ASSTXM.setColumn(iRow, 'ASST_STAT', "WAIT");       //자산상태(초기값은WAIT : 대기)
        	this.dsFS_ASSTXM.setColumn(iRow, "ASST_STAT", "USIG"); //자산상태(사용중)//2014.11 변경 사용중
        	this.dsFS_ASSTXM.setColumn(iRow, "ACQU_CHNL", "MANU"); //취득경로(초기값은MANU : 수기등록)
        	this.dsFS_ASSTXM.setColumn(iRow, "SAVG_VALU", 0); //잔존가액
        	this.dsFS_ASSTXM.setColumn(iRow, "PRID_DPCT", 0); //내용년수
        	this.dsFS_ASSTXM.setColumn(iRow, "PRID_LEGL", 0); //세무년수
        	this.dsFS_ASSTXM.setColumn(iRow, "DPCT_RATE", 0.00); //상각율
        	this.dsFS_ASSTXM.setColumn(iRow, "ACQU_NUMB", 0); //취득수량
        	this.dsFS_ASSTXM.setColumn(iRow, "ACQU_COST", 0); //단가
        	this.dsFS_ASSTXM.setColumn(iRow, "ACQU_PRIC", 0); //취득금액
        	this.dsFS_ASSTXM.setColumn(iRow, "UNDP_BALE", 0); //미상각잔액
        	this.dsFS_ASSTXM.setColumn(iRow, "ACCT_UNIT", "10"); //회계단위
        	this.dsFS_ASSTXM.setColumn(iRow, "PRID_LEGL", 0); //세무년수
        	this.mskASST_CONT.setFocus();
        	this.dsFS_ASSTXM.applyChange();

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	//기능없음
        }

        /*---------------+
         |  취소 처리 !  |
         +---------------*/
        this.fn_Cancel = function (obj,e) {

        	this.fnc_PopupClose("");

        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE03";
        	var sInDataSet 	= "dsFS_ASSTXM=dsFS_ASSTXM:U";
        	var sOutDataSet = "";
        	var sArgument	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAMERate, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	//기능없음
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능 없음
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj,e);

        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        /*---------------------------------------+
         |  Form에서 ESC Key 누르면 화면 종료 !  |
         +---------------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	
        	if (e.keycode == 27) this.fn_Cancel();
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        	
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsFS_ASSTXM")) {

        		return this.fnc_SearchCheckPostAction("TMM003", "", this.mskASST_CONT);

        	}

        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(0, "ASST_CONT"))) < 1 || 
        		nexacro.toNumber(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(0, "ASST_CONT"))) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "등록수량(양수)", this.dsFS_ASSTXM, 0, this.mskASST_CONT, '');
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(0, "ASST_NAME"))) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "자산명", this.dsFS_ASSTXM, 0, this.edtASST_NAME, '');
        	}

        	if (!this.fnc_IsDate(this.dsFS_ASSTXM.getColumn(0, "ACQS_DATE"))) {
        		return this.fnc_CheckPostAction("TMM072", "취득일자", this.dsFS_ASSTXM, 0, this.calACQS_DATE, '');
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(0, "CLSF_CODE"))) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "품목분류", this.dsFS_ASSTXM, 0, this.edtCLSF_NAME, '');
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(0, "DPCT_CYCL"))) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "상각주기", this.dsFS_ASSTXM, 0, this.cmbDPCT_CYCL, '');
        	}

        	// 미상각이 아니면 무조건 체크
        	if (this.fnc_Trim(this.dsFS_ASSTXM.getColumn(0, "DPCT_CYCL")) != "NONE") {

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(0, "DPCT_METH"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "상각방법", this.dsFS_ASSTXM, 0, this.cmbDPCT_METH, '');
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(0, "DPCT_CMPT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "상각완료기준", this.dsFS_ASSTXM, 0, this.cmbDPCT_CMPT, '');
        		}

        		if (this.fnc_Trim(this.dsFS_ASSTXM.getColumn(0, "PRID_DPCT")) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "내용년수", this.dsFS_ASSTXM, 0, this.mskPRID_DPCT, '');
        		}

        		if (this.fnc_Trim(this.dsFS_ASSTXM.getColumn(0, "PRID_LEGL")) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "세무년수", this.dsFS_ASSTXM, 0, this.mskPRID_LEGL, '');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(0, "DPCT_RATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "상각율(%)", this.dsFS_ASSTXM, 0, this.mskDPCT_RATE, '');
        		}

        	}

        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(0, "ACCT_UNIT"))) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "회계단위", this.dsFS_ASSTXM, 0, this.cmbACCT_UNIT, '');
        	}

        	if (this.fnc_Trim(this.dsFS_ASSTXM.getColumn(0, "ACQU_NUMB")) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "취득수량", this.dsFS_ASSTXM, 0, this.mskACQU_NUMB, '');
        	}

        	if (this.fnc_Trim(this.dsFS_ASSTXM.getColumn(0, "ACQU_COST")) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "단가", this.dsFS_ASSTXM, 0, this.mskACQU_COST, '');
        	}

        	if (this.fnc_Trim(this.dsFS_ASSTXM.getColumn(0, "ACQU_PRIC")) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "취득금액", this.dsFS_ASSTXM, 0, this.mskACQU_PRIC, '');
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(0, "DEPT_CODE"))) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "부서", this.dsFS_ASSTXM, 0, this.edtDEPT_NAME, '');
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(0, "CUST_CODE"))) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "구매처", this.dsFS_ASSTXM, 0, this.edtCLSF_NAME, '');
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(0, "EMPL_NUMB"))) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "사원", this.dsFS_ASSTXM, 0, this.edtEMPL_NAME, '');
        	}
        	
        	return true;

        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SAVE03") {

        		sReturnString  = " pgm="    + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);

        	} else if (sKind == "SEARCH02") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " STDS_YEAR=" + this.fnc_Quote(this.sACCT_YEAR); 
        		sReturnString += " PRID_DPCT=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_ASSTXM.getColumn(this.dsFS_ASSTXM.rowposition, "PRID_DPCT"))); 

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
        	
        	} else {

        		this.fn_PostProcess(sMethodName);

        	}

        }

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SAVE03") {

        		this.fnc_Message("TMM103");
        		this.fnc_PopupClose(true);

        	} else if (sMethodName == "GetCommCode") {
        	
        		 var arrParam = new Array();
        		 
        			arrParam[0]  = "COMBO,cmbDPCT_METH,dsDPCT_METH,0";	//상각방법(입력)
        			arrParam[1]  = "COMBO,cmbDPCT_CYCL,dsDPCT_CYCL,0";	//상각주기(입력)
        			arrParam[2]  = "COMBO,cmbUNIT_CODE,dsUNIT_CODE,0";	//자산단위(입력)
        			arrParam[3]  = "COMBO,cmbASST_STAT,dsASST_STAT,0";	//자산상태(입력)
        			arrParam[4]  = "COMBO,cmbACCT_UNIT,dsACCT_UNIT,0";	//회계단위(입력)
        			arrParam[5]  = "COMBO,cmbACQU_CHNL,dsACQU_CHNL,0";	//자산취득경로(입력)
        			arrParam[6]  = "COMBO,cmbASST_CSCD,dsASST_CSCD,0";	//자산비용구분(입력)
        			arrParam[7]  = "COMBO,cmbDPCT_CMPT,dsDPCT_CMPT,0";	
        		 
        		this.fnc_CommonCodeInnerBind(arrParam);

        	} else if (sMethodName == "SEARCH02") {

        		// 상각율 조회. 상각방법
        		var sDPCT_METH = this.fnc_Trim(this.dsFS_ASSTXM.getColumn(this.dsFS_ASSTXM.rowposition, "DPCT_METH"));

        		if (sDPCT_METH == "STRT") {

        			// 정액법
        			this.mskDPCT_RATE.set_value(this.dsDPCT_RATE.getColumn(this.dsDPCT_RATE.rowposition, "AMOT_RT01"));

        		} else if (sDPCT_METH == "DMNS") {

        			// 정률법
        			this.mskDPCT_RATE.set_value(this.dsDPCT_RATE.getColumn(this.dsDPCT_RATE.rowposition, "AMOT_RT02"));

        		}

        		this.mskDPCT_RATE.set_enable(false);

        	}

        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();
            
            if ((obj.name == "imgHelpCLSF_CODE") || (obj.name == "edtCLSF_NAME")) {
            
                arrParam[0] = "FSM0001";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtCLSF_NAME.value);
                arrParam[3] = "N";                                   
                arrParam[4] = "edtCLSF_NAME";                        
                arrParam[5] = "edtCLSF_CODE,edtCLSF_NAME,edtASCL_NAME,cmbDPCT_METH,cmbDPCT_CMPT,mskPRID_DPCT,mskPRID_LEGL,mskDPCT_RATE,cmbDPCT_CYCL";          //초기화 및 결과 Mapping Column
                arrParam[6] = "10,0,3,16,12,7,7,8,17";   
                this.fnc_HelpDialogeAction(this, obj, arrParam);
                
            } else if ((obj.name == "imgHelpDEPT_CODE") || (obj.name == "edtDEPT_NAME")) {
            
                arrParam[0] = "FAM0001";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtDEPT_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtDEPT_NAME";
                arrParam[5] = "edtDEPT_CODE,edtDEPT_NAME";
                arrParam[6] = "0,1";
                this.fnc_HelpDialogeAction(this, obj, arrParam);
                 
            } else if ((obj.name == "imgHelpEMPL_NUMB") || (obj.name == "edtEMPL_NAME")) {
            
                arrParam[0] = "FAM0012";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtEMPL_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtEMPL_NAME";
                arrParam[5] = "edtEMPL_NUMB,edtEMPL_NAME";
                arrParam[6] = "0,1";
                this.fnc_HelpDialogeAction(this, obj, arrParam);
                           
            } else if ((obj.name == "imgHelpCUST_CODE") || (obj.name == "edtCUST_NAME")) {
            
                arrParam[0] = "FAM0021";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtCUST_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtCUST_NAME";
                arrParam[5] = "edtCUST_CODE,edtCUST_NAME";
                arrParam[6] = "0,1";
                this.fnc_HelpDialogeAction(this, obj, arrParam);

        	}

        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*------------------------------------------------------------------------------------------+
         |  신규입력시 미상각잔액을 취득가액 AND 단가및 취득수량 AND 상각주기에 따른 상각상태 처리!  |
         +-------------------------------------------------------------------------------------------*/
        this.dsFS_ASSTXM_OnColumnChanged = function (obj,e){

        	obj.set_enableevent(false);

        	if ((e.columnid == "ACQU_NUMB") || (e.columnid == "ACQU_COST")) {

        		var iTotAmt = obj.getColumn(e.row, "ACQU_NUMB") * obj.getColumn(e.row, "ACQU_COST");
        		obj.setColumn(e.row, "ACQU_PRIC", iTotAmt);
        		obj.setColumn(e.row, "UNDP_BALE", iTotAmt);
        		obj.setColumn(e.row, "VATX_AMNT", iTotAmt * 0.1);

        	} else if (e.columnid == "ACQU_PRIC") {

        		obj.setColumn(e.row, "UNDP_BALE", e.newvalue);

        	} else if (e.columnid == "DPCT_CYCL") {

        		if ( e.newvalue == 'NONE' || this.IsNull(e.newvalue) ) {

        			obj.setColumn(e.row, "DPCT_STAT", "NOTG"); 
        			obj.setColumn(e.row, "DPCT_METH", "");
        			obj.setColumn(e.row, "DPCT_CMPT", "");
        			obj.setColumn(e.row, "PRID_DPCT", "");
        			obj.setColumn(e.row, "DPCT_RATE", "");
        			obj.setColumn(e.row, "PRID_LEGL", "");

        			this.cmbDPCT_METH.set_enable(false);
        			this.cmbDPCT_CMPT.set_enable(false);
        			this.mskPRID_DPCT.set_enable(false);
        			this.mskPRID_LEGL.set_enable(false);
        			
        		} else {

        			obj.setColumn(e.row, "DPCT_STAT", "INPR");

        			this.cmbDPCT_METH.set_enable(true);
        			this.cmbDPCT_CMPT.set_enable(true);
        			this.mskPRID_DPCT.set_enable(true);
        			this.mskPRID_LEGL.set_enable(true);
        		}
        	} else if (e.columnid == "DPCT_METH") {
        		
        		if (e.newvalue == 'STRT') {
        			// 정액법이면
        			obj.setColumn(e.row, "DPCT_RATE", 0);
        			this.mskDPCT_RATE.set_enable(false); 

        		} else {

        			this.fn_DpctMeth();

        		}

        	} else if (e.columnid == "PRID_DPCT") {

        		this.fn_DpctMeth();

        	}

        	obj.set_enableevent(true);

        }

        
        /*-----------------------+
         |  상각율 조회  |
         +------------------------*/
        this.fn_DpctMeth = function () {

        	// 조회 값이 없으면 조회 할 필요 없음
        	if (this.dsFS_ASSTXM.rowcount < 1) return;
        	this.dsDPCT_RATE.clearData();

        	var sMethodName = "SEARCH02";
        	var sInDataSet = "";
        	var sOutDataSet = "dsDPCT_RATE=dsDPCT_RATE";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAMERate, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsFS_ASSTXM.addEventHandler("oncolumnchanged", this.dsFS_ASSTXM_OnColumnChanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.div_ButtonList.btnEnd.addEventHandler("onclick", this.fn_End, this);
            this.div_ButtonList.btnSave.addEventHandler("onclick", this.fn_Save, this);
            this.edtASST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCLSF_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCLSF_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCLSF_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtASCL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.chkIDLE_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskPRID_DPCT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskDPCT_RATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskACQU_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskPRID_LEGL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtASST_STRD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDETL_STRD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskACQU_PRIC.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskVATX_AMNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbUNIT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtMUFT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtEMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbASST_STAT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDESC_REMK.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbASST_CSCD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpCUST_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpEMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpCLSF_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.cmbDPCT_CYCL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbDPCT_METH.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbDPCT_CMPT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskACQU_COST.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbACQU_CHNL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calACQS_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("FSMB0010P03.xfdl");

       
    };
}
)();
