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
                this.set_name("HRMB0020");
                this.set_titletext("개인신상변경요청");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">CGRG_CODE</Col><Col id=\"DSNAME\">dsCGRG_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">CHRC_CODE</Col><Col id=\"DSNAME\">dsCHRC_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsDEDY_CODE</Col><Col id=\"CODEID\">DEDY_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsDEGC_CODE</Col><Col id=\"CODEID\">DEGC_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsHALT_CODE</Col><Col id=\"CODEID\">HALT_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsSVIM_YSNO</Col><Col id=\"CODEID\">SVIM_YSNO</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsREDN_CODE</Col><Col id=\"CODEID\">REDN_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">FREL_CODE</Col><Col id=\"DSNAME\">dsFREL_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_MASTXM", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CCEM_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENEE_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RERN_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REDN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RCMP_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HALT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SVIM_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEDY_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEGC_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HAAD_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HALT_PROW\" size=\"50\" type=\"STRING\"/><Column id=\"RCMP_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"MAMR_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"MNOM_NAME\" size=\"30\" type=\"STRING\"/><Column id=\"HDPP_NAME\" size=\"20\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_MASTRQ", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"CHRQ_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"CHRQ_SEQN\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"EMPL_NAME\" size=\"30\" type=\"STRING\"/><Column id=\"CCEM_NAME\" size=\"30\" type=\"STRING\"/><Column id=\"ENEE_NAME\" size=\"30\" type=\"STRING\"/><Column id=\"RERN_NUMB\" size=\"32\" type=\"STRING\"/><Column id=\"EMPL_BIRT\" size=\"8\" type=\"STRING\"/><Column id=\"GNDR_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"HALT_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DEDY_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DEGC_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"HAAD_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"HALT_PROW\" size=\"50\" type=\"STRING\"/><Column id=\"SVIM_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"REDN_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"RCMP_NUMB\" size=\"15\" type=\"STRING\"/><Column id=\"RCMP_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"MAMR_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"MNOM_NAME\" size=\"30\" type=\"STRING\"/><Column id=\"HDPP_NAME\" size=\"20\" type=\"STRING\"/><Column id=\"CHNG_CNTT\" size=\"500\" type=\"STRING\"/><Column id=\"CGRG_CODE\" size=\"256\" type=\"STRING\"/><Column id=\"CHRC_CODE\" size=\"256\" type=\"STRING\"/><Column id=\"RCGN_DATE\" size=\"256\" type=\"STRING\"/><Column id=\"RJCT_PROW\" size=\"256\" type=\"STRING\"/><Column id=\"FILE_IDXX\" size=\"256\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"256\" type=\"STRING\"/><Column id=\"WKNT_EMNR\" size=\"256\" type=\"STRING\"/><Column id=\"WKNT_DATE\" size=\"256\" type=\"STRING\"/><Column id=\"WKNT_TIME\" size=\"256\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_ATFILE", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LFIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXTN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FITY_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Shape0", "absolute", "8", "128", null, "91", "25", null, this);
            obj.set_taborder("95");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Shape02", "absolute", "8", "244", null, "117", "25", null, this);
            obj.set_taborder("287");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("개인신상변경요청");
            obj.style.set_align("left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "25", null, this);
            obj.set_text("인사관리>인사관리>개인신상변경요청");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            obj.set_taborder("53");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "563", "23", "25", null, this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_scrollbars("none");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "375", "192", "21", null, null, this);
            obj.set_taborder("58");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHR_MASTRQ", "absolute", "8", "396", null, null, "429", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("59");
            obj.set_tabstop("false");
            obj.set_binddataset("dsHR_MASTRQ");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("row");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"97\"/><Column size=\"108\"/><Column size=\"249\"/><Column size=\"93\"/><Column size=\"204\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"신청일\"/><Cell col=\"1\" text=\"승인구분\"/><Cell col=\"2\" text=\"신청내용\"/><Cell col=\"3\" text=\"승인일\"/><Cell col=\"4\" text=\"반려사유\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"none\" style=\"align:center;background: ;\" text=\"bind:CHRQ_DATE\" editlimit=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"none\" text=\"bind:CHRC_CODE\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:REMK_100X\" editimemode=\"hangul\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"none\" text=\"bind:RCGN_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:RJCT_PROW\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle3", "absolute", "28", "71", "57", "21", null, null, this);
            obj.set_taborder("60");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "70", "71", "68", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "140", "71", "22", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_align("top");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "163", "71", "92", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static120", "absolute", "1193", "143", "55", "25", null, null, this);
            obj.set_taborder("62");
            obj.set_text("성명");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static99", "absolute", "28", "137", "103", "25", null, null, this);
            obj.set_taborder("63");
            obj.set_text("장애구분");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NAME_M", "absolute", "1235", "145", "127", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsHR_MASTXM");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "1392", "143", "103", "25", null, null, this);
            obj.set_taborder("100");
            obj.set_text("성명(영문)");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "294", "137", "103", "25", null, null, this);
            obj.set_taborder("101");
            obj.set_text("장애등급");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "294", "163", "103", "25", null, null, this);
            obj.set_taborder("102");
            obj.set_text("중증여부");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtENEE_NAME_M", "absolute", "1473", "145", "127", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsHR_MASTXM");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "1648", "143", "103", "25", null, null, this);
            obj.set_taborder("106");
            obj.set_text("성명(한자)");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "544", "137", "103", "25", null, null, this);
            obj.set_taborder("107");
            obj.set_text("장애유형");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "544", "163", "103", "25", null, null, this);
            obj.set_taborder("108");
            obj.set_text("보훈구분");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCCEM_NAME_M", "absolute", "1729", "145", "127", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsHR_MASTXM");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "1904", "143", "103", "25", null, null, this);
            obj.set_taborder("118");
            obj.set_text("주민등록번호");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "781", "137", "103", "25", null, null, this);
            obj.set_taborder("119");
            obj.set_text("장애인정시기");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("stGROP_LIST", "absolute", "8", "107", "113", "21", null, null, this);
            obj.set_taborder("213");
            obj.set_text("현장애보훈");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", null, "107", "307", "21", "22", null, this);
            obj.set_taborder("214");
            obj.set_text("해당 변경내역에 대한 증빙서류를 첨부하여야 합니다.");
            obj.set_cssclass("sta_WF_Info");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "781", "163", "103", "25", null, null, this);
            obj.set_taborder("223");
            obj.set_text("보훈번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRCMP_NUMB_M", "absolute", "875", "163", "140", "21", null, null, this);
            obj.set_taborder("225");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.style.set_align("left");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsHR_MASTXM");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calHAAD_DATE_M", "absolute", "875", "137", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("228");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsHR_MASTXM");
            obj.set_enable("true");
            obj.set_readonly("true");

            obj = new Combo("cmbDEGC_CODE_M", "absolute", "612", "137", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("229");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_enable("true");
            obj.set_readonly("true");

            obj = new Combo("cmbREDN_CODE_M", "absolute", "612", "163", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("230");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.getSetter("binddataset").set("dsHR_MASTXM");
            obj.set_index("-1");

            obj = new Combo("cmbDEDY_CODE_M", "absolute", "375", "137", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("231");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.getSetter("binddataset").set("dsHR_MASTXM");

            obj = new Combo("cmbSVIM_YSNO_M", "absolute", "375", "163", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("232");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.getSetter("binddataset").set("dsHR_MASTXM");
            obj.set_index("-1");

            obj = new Combo("cmbHALT_CODE_M", "absolute", "125", "137", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("233");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_enable("true");
            obj.set_readonly("true");

            obj = new Static("stGROP_LIST00", "absolute", "8", "223", "116", "21", null, null, this);
            obj.set_taborder("255");
            obj.set_text("변경요청내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation01", "absolute", "-824", "-552", "600", "23", null, null, this);
            obj.set_taborder("279");
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("stGROP_LIST02", "absolute", null, "375", "73", "21", "336", null, this);
            obj.set_taborder("281");
            obj.set_text("증빙");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddFile", "absolute", null, "371", "74", "21", "101", null, this);
            obj.set_taborder("16");
            obj.set_text("파일첨부");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelFile", "absolute", null, "371", "74", "21", "25", null, this);
            obj.set_taborder("17");
            obj.set_text("파일삭제");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_ATFILE", "absolute", null, "396", "384", null, "25", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("284");
            obj.set_binddataset("dsTM_ATFILE");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"270\"/><Column size=\"90\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"파일명\"/><Cell col=\"1\" text=\"다운로드\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" style=\", 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align:left;\" text=\"bind:LFIL_NAME\"/><Cell col=\"1\" displaytype=\"button\" edittype=\"button\" style=\"cursor:hand;\" text=\"다운로드\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnChangeReq", "absolute", "8", "35", "74", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("변경요청");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btnReqCancel", "absolute", "85", "35", "74", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_text("요청취소");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medRERN_NUMB_M", "absolute", "1985", "145", "129", "21", null, null, this);
            obj.set_taborder("286");
            obj.set_type("string");
            obj.set_mask("######-#######");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsHR_MASTXM");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staHALT_CODE", "absolute", "28", "279", "103", "21", null, null, this);
            obj.set_taborder("292");
            obj.set_text("장애구분");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NAME", "absolute", "1236", "288", "127", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staENEE_NAME", "absolute", "1393", "286", "103", "25", null, null, this);
            obj.set_taborder("294");
            obj.set_text("성명(영문)");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_color("#515151ff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staDEDY_CODE", "absolute", "294", "279", "103", "21", null, null, this);
            obj.set_taborder("295");
            obj.set_text("장애등급");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("staSVIM_YSNO", "absolute", "294", "305", "103", "21", null, null, this);
            obj.set_taborder("296");
            obj.set_text("중증여부");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtENEE_NAME", "absolute", "1474", "288", "127", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staCCEM_NAME", "absolute", "1649", "286", "103", "25", null, null, this);
            obj.set_taborder("298");
            obj.set_text("성명(한자)");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staDEGC_CODE", "absolute", "544", "279", "103", "21", null, null, this);
            obj.set_taborder("299");
            obj.set_text("장애유형");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("staREDN_CODE", "absolute", "544", "305", "103", "21", null, null, this);
            obj.set_taborder("300");
            obj.set_text("보훈구분");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCCEM_NAME", "absolute", "1730", "288", "127", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staRERN_NUMB", "absolute", "1905", "286", "103", "25", null, null, this);
            obj.set_taborder("302");
            obj.set_text("주민등록번호");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staHAAD_DATE", "absolute", "781", "279", "103", "21", null, null, this);
            obj.set_taborder("303");
            obj.set_text("장애인정시기");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("staRCMP_NUMB", "absolute", "781", "305", "103", "21", null, null, this);
            obj.set_taborder("304");
            obj.set_text("보훈번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRCMP_NUMB", "absolute", "875", "305", "140", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");
            this.addChild(obj.name, obj);

            obj = new Calendar("calHAAD_DATE", "absolute", "875", "279", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");

            obj = new Combo("cmbREDN_CODE", "absolute", "612", "305", "127", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_cssclass("styFormSearchCombo");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");

            obj = new Combo("cmbDEDY_CODE", "absolute", "375", "279", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_cssclass("styFormSearchCombo");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");

            obj = new Combo("cmbSVIM_YSNO", "absolute", "375", "305", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_cssclass("styFormSearchCombo");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");

            obj = new Combo("cmbHALT_CODE", "absolute", "125", "279", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_cssclass("styFormSearchCombo");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");

            obj = new Static("Static67", "absolute", "28", "253", "103", "21", null, null, this);
            obj.set_taborder("312");
            obj.set_text("신청일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Calendar("calCHRQ_DATE", "absolute", "125", "253", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");

            obj = new Static("Static68", "absolute", "294", "253", "103", "21", null, null, this);
            obj.set_taborder("314");
            obj.set_text("신청내용");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtREMK_100X", "absolute", "375", "253", "640", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medRERN_NUMB", "absolute", "1986", "288", "129", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_type("string");
            obj.set_mask("######-#######");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbDEGC_CODE", "absolute", "612", "279", "127", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_cssclass("styFormSearchCombo");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");

            obj = new Static("Static00", "absolute", "28", "163", "103", "25", null, null, this);
            obj.set_taborder("315");
            obj.set_text("장애원인");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "28", "189", "103", "25", null, null, this);
            obj.set_taborder("319");
            obj.set_text("보훈지정일자");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "294", "189", "103", "25", null, null, this);
            obj.set_taborder("320");
            obj.set_text("유공자관계");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "544", "189", "103", "25", null, null, this);
            obj.set_taborder("321");
            obj.set_text("유공자");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "781", "189", "103", "25", null, null, this);
            obj.set_taborder("322");
            obj.set_text("해당지청");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbMAMR_CODE_M", "absolute", "375", "189", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("324");
            obj.set_readonly("true");
            obj.set_cssclass("styFormSearchCombo");
            obj.getSetter("binddataset").set("dsHR_MASTXM");

            obj = new Edit("edtHDPP_NAME_M", "absolute", "875", "189", "140", "21", null, null, this);
            obj.set_taborder("326");
            obj.set_readonly("true");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsHR_MASTXM");
            this.addChild(obj.name, obj);

            obj = new Static("staRCMP_DATE", "absolute", "28", "331", "103", "21", null, null, this);
            obj.set_taborder("329");
            obj.set_text("보훈지정일자");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("staMAMR_CODE", "absolute", "294", "331", "103", "21", null, null, this);
            obj.set_taborder("330");
            obj.set_text("유공자관계");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("staMNOM_NAME", "absolute", "544", "331", "103", "21", null, null, this);
            obj.set_taborder("331");
            obj.set_text("유공자");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("staHDPP_NAME", "absolute", "781", "331", "103", "21", null, null, this);
            obj.set_taborder("332");
            obj.set_text("해당지청");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbMAMR_CODE", "absolute", "375", "331", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_readonly("false");
            obj.set_cssclass("styFormSearchCombo");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");
            obj.set_displayrowcount("10");

            obj = new Edit("edtHDPP_NAME", "absolute", "875", "331", "140", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_readonly("false");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");
            this.addChild(obj.name, obj);

            obj = new Static("staHALT_PROW", "absolute", "28", "305", "103", "21", null, null, this);
            obj.set_taborder("337");
            obj.set_text("장애원인");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHALT_PROW_M", "absolute", "125", "163", "140", "21", null, null, this);
            obj.set_taborder("341");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsHR_MASTXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHALT_PROW", "absolute", "125", "305", "140", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");
            this.addChild(obj.name, obj);

            obj = new Calendar("calRCMP_DATE_M", "absolute", "125", "189", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("343");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsHR_MASTXM");

            obj = new Calendar("calRCMP_DATE", "absolute", "125", "331", "140", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_readonly("false");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");

            obj = new Edit("edtMNOM_NAME_M", "absolute", "612", "189", "140", "21", null, null, this);
            obj.set_taborder("345");
            obj.set_readonly("true");
            obj.set_maxlength("30");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("left");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsHR_MASTXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMNOM_NAME", "absolute", "612", "331", "127", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_readonly("false");
            obj.set_maxlength("30");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsHR_MASTRQ");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("346");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("347");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("348");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("349");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("350");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "62", "61", "8", "41", null, null, this);
            obj.set_taborder("351");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "255", "61", "40", "41", null, null, this);
            obj.set_taborder("352");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("353");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("354");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("357");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("staEMPL_NAME", "absolute", "1194", "286", "55", "25", null, null, this);
            obj.set_taborder("358");
            obj.set_text("성명");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            obj.style.set_color("#515151ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "9", "140", "30", "41", null, null, this);
            obj.set_taborder("359");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "573", "219", "80", "25", null, null, this);
            obj.set_taborder("360");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "573", "361", "80", "35", null, null, this);
            obj.set_taborder("361");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "8", "390", "216", "6", null, null, this);
            obj.set_taborder("362");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "758", "412", "20", "41", null, null, this);
            obj.set_taborder("363");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("개인신상변경요청");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edtEMPL_NAME_M","value","dsHR_MASTXM","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtENEE_NAME_M","value","dsHR_MASTXM","ENEE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtCCEM_NAME_M","value","dsHR_MASTXM","CCEM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","medRERN_NUMB_M","value","dsHR_MASTXM","RERN_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","cmbHALT_CODE_M","value","dsHR_MASTXM","HALT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","cmbDEDY_CODE_M","value","dsHR_MASTXM","DEDY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","cmbDEGC_CODE_M","value","dsHR_MASTXM","DEGC_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","calHAAD_DATE_M","value","dsHR_MASTXM","HAAD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","cmbSVIM_YSNO_M","value","dsHR_MASTXM","SVIM_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","cmbREDN_CODE_M","value","dsHR_MASTXM","REDN_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edtRCMP_NUMB_M","value","dsHR_MASTXM","RCMP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","medRERN_NUMB_M","value","dsHR_MASTXM","RERN_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edtEMPL_NAME","value","dsHR_MASTRQ","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","edtENEE_NAME","value","dsHR_MASTRQ","ENEE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edtCCEM_NAME","value","dsHR_MASTRQ","CCEM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","edtRCMP_NUMB","value","dsHR_MASTRQ","RCMP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","calHAAD_DATE","value","dsHR_MASTRQ","HAAD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","cmbREDN_CODE","value","dsHR_MASTRQ","REDN_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","cmbDEDY_CODE","value","dsHR_MASTRQ","DEDY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","cmbSVIM_YSNO","value","dsHR_MASTRQ","SVIM_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","cmbHALT_CODE","value","dsHR_MASTRQ","HALT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","calCHRQ_DATE","value","dsHR_MASTRQ","CHRQ_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edtREMK_100X","value","dsHR_MASTRQ","REMK_100X");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","medRERN_NUMB","value","dsHR_MASTRQ","RERN_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","cmbDEGC_CODE","value","dsHR_MASTRQ","DEGC_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","cmbMAMR_CODE_M","value","dsHR_MASTXM","MAMR_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","edtHDPP_NAME_M","value","dsHR_MASTXM","HDPP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","cmbMAMR_CODE","value","dsHR_MASTRQ","MAMR_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","edtHDPP_NAME","value","dsHR_MASTRQ","HDPP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","edtHALT_PROW_M","value","dsHR_MASTXM","HALT_PROW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edtHALT_PROW","value","dsHR_MASTRQ","HALT_PROW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","calRCMP_DATE_M","value","dsHR_MASTXM","RCMP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","calRCMP_DATE","value","dsHR_MASTRQ","RCMP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","edtMNOM_NAME_M","value","dsHR_MASTXM","MNOM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","edtMNOM_NAME","value","dsHR_MASTRQ","MNOM_NAME");
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
        this.addIncludeScript("HRMB0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRMB0020.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	HRMB0020 개인신상변경요청
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.23		안윤준		Initial Created.
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
         /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /************************
         *  화면 변수 선언부  *
         ************************/
        this.sBUTTONLIST 	= "TTTTTTTF";
        this.sPACKAGENAME 	= "HRMB0020";
        this.sSAVE_CODE 	= "";			//저장(""),변경요청("R"),변경요청취소("C") 구분코드
        this.sKeyValue 		= new Array();

        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {
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

        /****************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*---------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +--------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_SetReadonly(this.edtSHREMPL_NUMB, true);
        	
        	if ( this.sUSERLAVEL == "5" ) {
        		this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
        		this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);
        		this.edtSHREMPL_NAME.set_enable(false);
        		this.imgHelpSHREMPL_NUMB.set_enable(false);
        		this.fn_Search();
        		
        	} else {
        		this.edtSHREMPL_NAME.set_enable(true);
        		this.imgHelpSHREMPL_NUMB.set_enable(true);
        		this.edtSHREMPL_NAME.setFocus();
        		
        	}
        	
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

        	if (!this.fn_searchItemCheck()) return;
        	
        	this.fnc_DatasetClear("dsHR_MASTXM,dsHR_MASTRQ,dsTM_ATFILE");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsHR_MASTXM=dsHR_MASTXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
        	
        		sMethodName = "SEARCH01";
        		sInDataSet 	= "";
        		sOutDataSet = "dsHR_MASTRQ=dsHR_MASTRQ";
        		sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*--------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Input = function (obj) {
        	
        	if (this.fnc_Length(this.edtSHREMPL_NUMB.value) < 1) {
        		this.fnc_Message("HRM035");
        		return;
        	}
        	
        	this.fnc_DatasetClear("dsTM_ATFILE");
        	
        	var iRow = this.dsHR_MASTRQ.mergeData(this.dsHR_MASTXM)-1;
        	
        	this.dsHR_MASTRQ.set_rowposition(iRow);
        	this.grdHR_MASTRQ.setCellPos(this.fnc_GridColumnIndex(this.grdHR_MASTRQ, 0));
        	
        	this.dsHR_MASTRQ.setColumn(iRow, "EMPL_NUMB", this.edtSHREMPL_NUMB.value); 				//사원번호
        	this.dsHR_MASTRQ.setColumn(iRow, "CHRQ_DATE", this.fnc_GetServerDateTime("DATE")); 	//변경요청일
        	this.dsHR_MASTRQ.setColumn(iRow, "CHRC_CODE", "S");									//승인구분
        	this.dsHR_MASTRQ.setColumn(iRow, "CHRQ_SEQN", this.fnc_GetSequence("HR_MSTCRQ","CHRQ_SEQN",this.edtSHREMPL_NUMB.value,"")); 								//일련번호
        	this.dsHR_MASTRQ.setColumn(iRow, "CGRG_CODE", "MASTXM");							//변경요청구분코드 
        	
        	//컴포넌트 활성화
        	this.edtHALT_PROW.set_readonly(false);
        	this.calRCMP_DATE.set_readonly(false);
        	this.cmbMAMR_CODE.set_readonly(false);
        	this.edtMNOM_NAME.set_readonly(false);
        	this.edtHDPP_NAME.set_readonly(false);
        	
        	this.calCHRQ_DATE.set_readonly(true);
        	this.edtREMK_100X.set_readonly(false);
        	this.btnChangeReq.set_enable(false);
        	this.btnReqCancel.set_enable(false);
        	this.div_ButtonList.btnDelete.set_enable(true);
          
        	this.edtCCEM_NAME.set_readonly(false);
        	this.medRERN_NUMB.set_readonly(false);
        	this.edtREMK_100X.set_readonly(false);
        	this.edtEMPL_NAME.set_readonly(false);
        	this.edtENEE_NAME.set_readonly(false);
        	this.medRERN_NUMB.set_readonly(false);
        	this.cmbHALT_CODE.set_readonly(false);
        	this.cmbDEDY_CODE.set_readonly(false);
        	this.cmbDEGC_CODE.set_readonly(false);
        	this.calHAAD_DATE.set_readonly(false);
        	this.cmbSVIM_YSNO.set_readonly(false);
        	this.cmbREDN_CODE.set_readonly(false);
        	this.edtRCMP_NUMB.set_readonly(false); 
        	
        	this.dsHR_MASTRQ.set_updatecontrol(false);
        	this.dsHR_MASTRQ.setRowType(iRow, Dataset.ROWTYPE_INSERT);
        	this.dsHR_MASTRQ.set_updatecontrol(true);
        	
        	this.grdTM_ATFILE.set_readonly(false);
        	
        	this.edtREMK_100X.setFocus();
        }

        /*---------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()){
        		this.dsHR_MASTRQ.deleteRow(this.dsHR_MASTRQ.rowposition);
        		this.fnc_DatasetClear("dsTM_ATFILE");
        		this.fn_KeyFieldDisible();
        		
        	}
        	
        	this.grdHR_MASTRQ.setFocus();
        	
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         --------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsHR_MASTXM");
        	this.grdHR_MASTRQ.setFocus();
        	
        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	this.sKeyValue[0] = this.dsHR_MASTRQ.getColumn(this.dsHR_MASTRQ.rowposition,"CHRQ_SEQN");
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsHR_MASTRQ=dsHR_MASTRQ:U dsTM_ATFILE=dsTM_ATFILE:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         --------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);

        }

        /*--------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +-------------------------*/
        this.fn_Print = function (obj){
        	
        }

        /*------------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsHR_MASTRQ,dsHR_MASTXM,dsTM_ATFILE", this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        } 
         
        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
        	
        }

        
        /*-------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +-------------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        	
        }

        /*-------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +-------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);

        }

        /****************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*---------------------+
         |  조회 필수 체크!  |
         +---------------------*/
        this.fn_searchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsHR_MASTRQ,dsHR_MASTXM,dsTM_ATFILE")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.edtSHREMPL_NUMB.value) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "사원번호", "", "", this.edtSHREMPL_NAME, "");
        	}
        	
        	return true;
        	
        }

        /*---------------------+
         |  삭제 여부 체크!  |
         +---------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsHR_MASTRQ.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var sQuestionText = "요청일:" + this.fnc_Trim(this.dsHR_MASTRQ.getColumn(this.dsHR_MASTRQ.rowposition, "CHRQ_DATE"));
        	return this.fnc_Message("TMM002", sQuestionText);
          
        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsHR_MASTRQ,dsTM_ATFILE")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	return true;
        	
        }

        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind); 
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.edtSHREMPL_NUMB.value);
        		
        	} else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind); 
        		sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(this.edtSHREMPL_NUMB.value);
        		
        	} else if (sKind == "SEARCH04") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind); 
        		sReturnString += " CGRG_CODE=MASTXM";
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.dsHR_MASTRQ.getColumn(this.dsHR_MASTRQ.rowposition, "EMPL_NUMB"));
        		sReturnString += " FILE_IDXX=" + this.fnc_Quote(this.dsHR_MASTRQ.getColumn(this.dsHR_MASTRQ.rowposition, "FILE_IDXX"));
        		sReturnString += " CHRQ_DATE=" + this.fnc_Quote(this.dsHR_MASTRQ.getColumn(this.dsHR_MASTRQ.rowposition, "CHRQ_DATE"));
        		sReturnString += " CHRQ_SEQN=" + this.fnc_Quote(this.dsHR_MASTRQ.getColumn(this.dsHR_MASTRQ.rowposition, "CHRQ_SEQN"));
        		
        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm=" 	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);

        		if ( this.sSAVE_CODE == "R" || this.sSAVE_CODE == "C" ) {
        			sReturnString += " SYST_LNCD=" + this.fnc_Quote(application.GBL_LANGCD); //사용자언어코드
        			sReturnString += " WORK_USID=" + this.fnc_Quote(application.GBL_USERID); //작업자ID
        			sReturnString += " WKNT_TYCD=" + this.fnc_Quote("HRM020"); // 작업알림유형코드
        			sReturnString += " SOUS_LNKY=" + this.fnc_Quote(this.dsHR_MASTRQ.getColumn(this.dsHR_MASTRQ.rowposition, "EMPL_NUMB")+"-"+this.dsHR_MASTRQ.getColumn(this.dsHR_MASTRQ.rowposition, "CHRQ_DATE")+"-"+this.dsHR_MASTRQ.getColumn(this.dsHR_MASTRQ.rowposition, "CHRQ_SEQN")); //출처연결키
        			sReturnString += " WKNT_CNTT=" + this.fnc_Quote("개인신상변경요청 신청이 등록되었습니다."); // 작업알림내용
        		}
        		sReturnString += " SAVE_CODE=" + this.fnc_Quote(this.sSAVE_CODE); // 작업알림내용
        		
        	}

        	return sReturnString;
        	
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

        	if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.stInformation, this.dsHR_MASTRQ.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsHR_MASTRQ.getCaseCount("dataset.getRowLevel(currow)==0"));
        		this.grdHR_MASTRQ.setFocus();
        		
        		if ( this.sKeyValue[0] != "" ) {
        			var irow = this.dsHR_MASTRQ.findRow("CHRQ_SEQN",this.sKeyValue[0]);
        			this.sKeyValue[0] = "";
        			if(irow<0) irow=0;
        			this.dsHR_MASTRQ.set_rowposition(irow);
        		}
        		
        	} else if (sMethodName == "SAVE00")	{
        	 
        		if (this.sSAVE_CODE == "R") {
        			this.fnc_Message("HRM040", true);
        			this.sSAVE_CODE = "";
        			this.fn_KeyFieldDisible();
        			
        		} else if (this.sSAVE_CODE == "C") {
        			this.fnc_Message("HRM041", true);
        			this.sSAVE_CODE = "";
        			this.fn_KeyFieldDisible();
        			
        		} else {
        			this.fnc_Information(this.stInformation, 0, "SAVE");		
        			this.fnc_Message("TMM103");
        			this.fn_KeyFieldDisible();
        			
        		}
        		this.fn_Search();

        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		var arrInt   = 0;
        			arrParam[arrInt++] = "COMBO,cmbHALT_CODE_M,dsHALT_CODE,0"; 
        			arrParam[arrInt++] = "COMBO,cmbDEDY_CODE_M,dsDEDY_CODE,0"; 
        			arrParam[arrInt++] = "COMBO,cmbDEGC_CODE_M,dsDEGC_CODE,0"; 
        			arrParam[arrInt++] = "COMBO,cmbREDN_CODE_M,dsREDN_CODE,0"; 
        			arrParam[arrInt++] = "COMBO,cmbSVIM_YSNO_M,dsSVIM_YSNO,0"; 
        			arrParam[arrInt++] = "COMBO,cmbHALT_CODE,dsHALT_CODE,0"; 
        			arrParam[arrInt++] = "COMBO,cmbDEDY_CODE,dsDEDY_CODE,0"; 
        			arrParam[arrInt++] = "COMBO,cmbDEGC_CODE,dsDEGC_CODE,0"; 
        			arrParam[arrInt++] = "COMBO,cmbREDN_CODE,dsREDN_CODE,0"; 
        			arrParam[arrInt++] = "COMBO,cmbSVIM_YSNO,dsSVIM_YSNO,0"; 
        			arrParam[arrInt++] = "GRID,grdHR_MASTRQ,dsCHRC_CODE,CHRC_CODE"; 
        			arrParam[arrInt++] = "GRID,grdHR_MASTRQ,dsCGRG_CODE,CGRG_CODE"; 
        			arrParam[arrInt++] = "COMBO,cmbMAMR_CODE_M,dsFREL_CODE,0"; 
        			arrParam[arrInt++] = "COMBO,cmbMAMR_CODE,dsFREL_CODE,0"; 
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	}
        	
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {
        	
        	this.dsHR_MASTRQ.set_enableevent(false);
        	this.dsHR_MASTXM.set_enableevent(false);
        	for ( var i=0; i<this.dsHR_MASTRQ.getColCount(); i++ ) {
        		if ( typeof eval("this.sta"+this.dsHR_MASTRQ.getColID(i)) == "undefined" ) {
        			continue;
        		} else {
        			if ( this.fnc_Quote(this.dsHR_MASTRQ.getColumn(this.dsHR_MASTRQ.rowposition, this.dsHR_MASTRQ.getColID(i))) 
        			  == this.fnc_Quote(this.dsHR_MASTXM.getColumn(0, this.dsHR_MASTRQ.getColID(i)))){
        				eval("this.sta"+this.dsHR_MASTRQ.getColID(i)).style.set_color("#515151ff");
        			} else {
        				eval("this.sta"+this.dsHR_MASTRQ.getColID(i)).style.set_color("#e74343ff");
        			}
        		}
        	}
        	this.dsHR_MASTRQ.set_enableevent(true);
        	this.dsHR_MASTXM.set_enableevent(true);
        	
        	//승인구분이 S(임시저장)이 아닌경우 전체 readonly
        	switch (this.dsHR_MASTRQ.getColumn(this.dsHR_MASTRQ.rowposition, "CHRC_CODE")) {
        		case "S" :	//임시저장
        			this.edtHALT_PROW.set_readonly(false);
        			this.calRCMP_DATE.set_readonly(false);
        			this.cmbMAMR_CODE.set_readonly(false);
        			this.edtMNOM_NAME.set_readonly(false);
        			this.edtHDPP_NAME.set_readonly(false);
        			
        			this.edtCCEM_NAME.set_readonly(false);
        			this.medRERN_NUMB.set_readonly(false); 
        			this.edtREMK_100X.set_readonly(false);
        			this.edtEMPL_NAME.set_readonly(false);
        			this.edtENEE_NAME.set_readonly(false);
        			this.medRERN_NUMB.set_readonly(false);
        			this.cmbHALT_CODE.set_readonly(false);
        			this.cmbDEDY_CODE.set_readonly(false);
        			this.cmbDEGC_CODE.set_readonly(false);
        			this.calHAAD_DATE.set_readonly(false);
        			this.cmbSVIM_YSNO.set_readonly(false);
        			this.cmbREDN_CODE.set_readonly(false);
        			this.edtRCMP_NUMB.set_readonly(false);  

        			this.calCHRQ_DATE.set_readonly(true);
        			this.edtREMK_100X.set_readonly(false);
        		
        			if ( this.fnc_ToUpper(this.dsHR_MASTRQ.getRowType(this.dsHR_MASTRQ.rowposition)) == "INSERT" ) {	
        				//신규입력행에는 확인요청 버튼을 막음
        				
        				this.btnChangeReq.set_enable(false);
        				
        			} else {
        				this.btnChangeReq.set_enable(true);
        				
        			}
        			this.btnReqCancel.set_enable(false);
        			
        			this.div_ButtonList.btnDelete.set_enable(true);
        			
        			this.btnAddFile.set_enable(true);
        			this.btnDelFile.set_enable(true);
        								 
        			this.grdTM_ATFILE.set_readonly(false);
        			break;
        			
        		case "0" : //변경요청
        			this.edtHALT_PROW.set_readonly(true);
        			this.calRCMP_DATE.set_readonly(true);
        			this.cmbMAMR_CODE.set_readonly(true);
        			this.edtMNOM_NAME.set_readonly(true);
        			this.edtHDPP_NAME.set_readonly(true);
        			
        			this.edtCCEM_NAME.set_readonly(true);
        			this.medRERN_NUMB.set_readonly(true);
        			this.calCHRQ_DATE.set_readonly(true);
        			this.edtREMK_100X.set_readonly(true);
        			this.edtEMPL_NAME.set_readonly(true);
        			this.edtENEE_NAME.set_readonly(true);
        			this.medRERN_NUMB.set_readonly(true);
        			this.cmbHALT_CODE.set_readonly(true);
        			this.cmbDEDY_CODE.set_readonly(true);
        			this.cmbDEGC_CODE.set_readonly(true);
        			this.calHAAD_DATE.set_readonly(true);
        			this.cmbSVIM_YSNO.set_readonly(true);
        			this.cmbREDN_CODE.set_readonly(true);
        			this.edtRCMP_NUMB.set_readonly(true);  

        			this.calCHRQ_DATE.set_readonly(true);
        			this.edtREMK_100X.set_readonly(true); 
        			
        			this.btnChangeReq.set_enable(false);
        			this.btnReqCancel.set_enable(true);
        			
        			this.div_ButtonList.btnDelete.set_enable(false);
        			
        			this.btnAddFile.set_enable(false);
        			this.btnDelFile.set_enable(false);
        			
        			this.grdTM_ATFILE.set_readonly(true);
        			break;
        			
        		case "1" : //승인
        			this.edtHALT_PROW.set_readonly(true);
        			this.calRCMP_DATE.set_readonly(true);
        			this.cmbMAMR_CODE.set_readonly(true);
        			this.edtMNOM_NAME.set_readonly(true);
        			this.edtHDPP_NAME.set_readonly(true);
        			
        			this.edtCCEM_NAME.set_readonly(true);
        			this.medRERN_NUMB.set_readonly(true);
        			this.calCHRQ_DATE.set_readonly(true);
        			this.edtREMK_100X.set_readonly(true);
        			this.edtEMPL_NAME.set_readonly(true);
        			this.edtENEE_NAME.set_readonly(true);
        			this.medRERN_NUMB.set_readonly(true);
        			this.cmbHALT_CODE.set_readonly(true);
        			this.cmbDEDY_CODE.set_readonly(true);
        			this.cmbDEGC_CODE.set_readonly(true);
        			this.calHAAD_DATE.set_readonly(true);
        			this.cmbSVIM_YSNO.set_readonly(true);
        			this.cmbREDN_CODE.set_readonly(true);
        			this.edtRCMP_NUMB.set_readonly(true);  
        		
        			this.calCHRQ_DATE.set_readonly(true);
        			this.edtREMK_100X.set_readonly(true); 
        			
        			this.btnChangeReq.set_enable(false);
        			this.btnReqCancel.set_enable(false);
        			
        			this.div_ButtonList.btnDelete.set_enable(false);
        			
        			this.btnAddFile.set_enable(false);
        			this.btnDelFile.set_enable(false);
        			
        			this.grdTM_ATFILE.set_readonly(true);
        			break;
        			
        		case "2" : //반려		
        			this.edtHALT_PROW.set_readonly(true);
        			this.calRCMP_DATE.set_readonly(true);
        			this.cmbMAMR_CODE.set_readonly(true);
        			this.edtMNOM_NAME.set_readonly(true);
        			this.edtHDPP_NAME.set_readonly(true);
        			
        			this.edtCCEM_NAME.set_readonly(true);
        			this.medRERN_NUMB.set_readonly(true);
        			this.calCHRQ_DATE.set_readonly(true);
        			this.edtREMK_100X.set_readonly(true);
        			this.edtEMPL_NAME.set_readonly(true);
        			this.edtENEE_NAME.set_readonly(true);
        			this.medRERN_NUMB.set_readonly(true);
        			this.cmbHALT_CODE.set_readonly(true);
        			this.cmbDEDY_CODE.set_readonly(true);
        			this.cmbDEGC_CODE.set_readonly(true);
        			this.calHAAD_DATE.set_readonly(true);
        			this.cmbSVIM_YSNO.set_readonly(true);
        			this.cmbREDN_CODE.set_readonly(true);
        			this.edtRCMP_NUMB.set_readonly(true);  

        			this.calCHRQ_DATE.set_readonly(true);
        			this.edtREMK_100X.set_readonly(true); 
        			
        			this.btnChangeReq.set_enable(false);
        			this.btnReqCancel.set_enable(false);
        			
        			this.div_ButtonList.btnDelete.set_enable(false);
        			
        			this.btnAddFile.set_enable(false);
        			this.btnDelFile.set_enable(false);

        			this.grdTM_ATFILE.set_readonly(true);
        			break;
        			
        		default :
        			this.calCHRQ_DATE.set_readonly(true);
        			this.edtREMK_100X.set_readonly(true);  
        			
        			this.btnChangeReq.set_enable(false);
        			this.btnReqCancel.set_enable(false);
        			
        			this.div_ButtonList.btnDelete.set_enable(false); 
        			
        			this.btnAddFile.set_enable(false);
        			this.btnDelFile.set_enable(false);

        			this.grdTM_ATFILE.set_readonly(true);
        			
        			break;
        		
        	}
        	
        	this.dsTM_ATFILE_search04();
        	
        }

        /*----------------------+
         |  DATASET ROW 변경 전 |
         +----------------------*/
        this.dsHR_MASTRQ_canrowposchange = function(obj,e) {
        	if (this.fnc_DatasetChangeCheck("dsHR_MASTRQ")) {
        		if (this.fnc_Message("TMM023") == false)  { 
        			return false;
        		} else {
        			return true;
        		}
        	}
        }

        
        /***************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue) {

        	var arrParam = new Array();
        	
        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
        		arrParam[0] = "HRM0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        		if ( this.fnc_Length(this.edtSHREMPL_NUMB.value) > 0 ) this.fn_Search();
        		
        	}

        }

        /*----------------------+
         |  변경요청 버튼 클릭 時 |
         +----------------------*/
        this.fn_btnChangeReq_OnClick = function(obj,e) {
        	
        	var row = this.dsHR_MASTRQ.rowposition;
        	
        	if (row < 0) {
        		this.fnc_Message("TMM010");   //Message 처리 후
        		this.grdHR_MASTRQ.setFocus();          
        		return;
        	}

        	/*
        		//증빙파일이 있는 지 체크
        		if (dtlTM_ATFILE.getRowCount() < 1) {
        			//해당 변경내역에 대한 증빙서류를 첨부하여야 합니다!
        			this.fnc_Message("HRM044");
        			btnAddFile.focus();
        			return false;
        		}
        	*/
        			
        	if ( this.fnc_Message("HRM015")) {
        		this.dsHR_MASTRQ.setColumn(row, "CHRC_CODE", "0");
        		this.sSAVE_CODE = "R";	//변경요청
        		this.fn_Save();
        	}
        }

        /*----------------------+
         |  요청취소 버튼 클릭 時 |
         +----------------------*/
        this.fn_btnReqCancel_OnClick = function(obj,e) {
        	
        	var row = this.dsHR_MASTRQ.rowposition;
        	
        	if (row < 0) {
        		this.fnc_Message("TMM010");   //Message 처리 후
        		this.grdHR_MASTRQ.setFocus();          
        		return;
        	}

        	if ( this.fnc_Message("HRM016")) {
        		this.dsHR_MASTRQ.setColumn(row, "CHRC_CODE", "S");
        		this.sSAVE_CODE = "C";	//요청취소
        		this.fn_Save();
        	}
        }

        /*--------------+
         |  성명 변경 시 |
         +--------------*/
        this.edtSHREMPL_NAME_onchar = function(obj,e) {
        	this.fnc_DatasetClear("dsHR_MASTXM,dsHR_MASTRQ,dsTM_ATFILE");
        	this.edtSHREMPL_NUMB.set_value("");
        	
        }

        /*-----------+
         |  파일 검색 |
         +-----------*/
        this.dsTM_ATFILE_search04 = function(){
        	var sMethodName = "SEARCH04";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTM_ATFILE=dsTM_ATFILE";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
        	
        }

        /*--------------------------+
         |  파일첨부&파일삭제 클릭 시 |
         +--------------------------*/
        this.btnFile_onclick = function(obj,e) {
        	
        	if (this.fnc_Length(this.edtSHREMPL_NUMB.value) < 1 || this.dsHR_MASTRQ.getRowCount() < 1) {
        		this.fnc_Message("HRM035");
        		return;
        	}
        	
        	if ( obj.name == "btnAddFile" ) {
        		this.fnc_CallFileUplod(5, "", "fn_CallFileUplodCallback");
        		
        	} else if ( obj.name == "btnDelFile" ) {
        		if (this.fn_checkDeleteFile()) this.dsTM_ATFILE.deleteMultiRows(this.grdTM_ATFILE.getSelectedDatasetRows());
        		
        	}
        	
        }

        /*-------------------+
         |  파일첨부 callback |
         +-------------------*/
        this.fn_CallFileUplodCallback = function(robjds,form) {

        	var objds 		= form.dsTM_ATFILE;
        	var objmainds 	= form.dsHR_MASTRQ;
        	
        	if ( objmainds.getColumn(objmainds.rowposition, "FILE_IDXX") == "" ) {
        		objmainds.setColumn(objmainds.rowposition, "FILE_IDXX", robjds.getColumn(0, "FILE_IDXX"));
        	} else {
        		for ( var i=0; i<robjds.rowcount; i++ ) {
        			robjds.setColumn(i, "FILE_IDXX", objmainds.getColumn(objmainds.rowposition, "FILE_IDXX"));
        		}
        	}
        	
        	for(i = 0; i < robjds.rowcount; i++){
        		var iRow = objds.addRow();
        		objds.copyRow(iRow, robjds, i);
        		objds.setColumn(iRow, "FITY_CODE", "HRM001-01");
        				
        		if(objds.updatecontrol){
        		}else{
        			objds.setRowType(iRow, Dataset.ROWTYPE_INSERT);
        		}
        	}
        	
        // 아래 주석은 동일 파일 존재 유무에 따른 로직	
        // 	var oCount  	= [];
        // 	var nCount		= [];
        // 	objds.set_enableevent(false);
        // 	robjds.set_enableevent(false);
        // 	for ( var i=0; i<objds.rowcount; i++ ) {
        // 		for ( var j=0; j<robjds.rowcount; j++){
        // 			if ( objds.getColumn(i, "LFIL_NAME") == robjds.getColumn(j, "LFIL_NAME")) {
        // 				oCount.push(i);
        // 				nCount.push(j);
        // 			}
        // 		}
        // 	}
        // 	objds.set_enableevent(true);
        // 	robjds.set_enableevent(false);
        //
        // 	if ( oCount.length > 0 ){
        // 		if ( confirm("동일한 파일이 존재합니다.기존 파일을 삭제 하시겠습니까?") ){
        // 			for ( var i = oCount.length-1; i >= 0; i--) {
        // 				objds.deleteRow(oCount[i]);
        // 				
        // 			}
        // 		} else {
        // 			for ( var i = nCount.length-1; i >= 0; i--) {
        // 				robjds.deleteRow(nCount[i]);
        // 				
        // 			}
        // 		}
        // 	}
        // 	
        // 	if ( robjds.rowcount > 0 ) {
        // 		objmainds.setColumn(objmainds.rowposition, "FILE_IDXX", robjds.getColumn(0, "FILE_IDXX"));
        // 		for ( var i=0; i<objds.rowcount; i++ ) {
        // 			objds.setColumn(i, "FILE_IDXX", robjds.getColumn(0, "FILE_IDXX"));
        // 			
        // 		}
        // 		
        // 		for(i = 0; i < robjds.rowcount; i++){
        // 			var iRow = objds.addRow();
        // 			objds.copyRow(iRow, robjds, i);
        // 			
        // 			if(objds.updatecontrol){
        // 			}else{
        // 				objds.setRowType(iRow, Dataset.ROWTYPE_INSERT);
        // 			}
        // 		}
        // 	}
        	
        }

        /*---------------------+
         |  파일삭제 여부 체크  |
         +---------------------*/
        this.fn_checkDeleteFile = function () {
        	
        	if (this.dsTM_ATFILE.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdTM_ATFILE);
        	
        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else {
        		var sQuestionText = this.dsTM_ATFILE.getColumn(this.dsTM_ATFILE.rowposition, "LFIL_NAME");
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        	
        }

        /*-----------------------+
         |  그리드 Cell 클릭 함수 |
         +-----------------------*/
        this.grdTM_ATFILE_oncellclick = function(obj,e) {
        	if( obj.getCellText(e.row, e.col) == "다운로드" ) {
        		var filePath   = this.dsTM_ATFILE.getColumn(e.row,"FILE_PATH");
        		var phyFileNm  = this.dsTM_ATFILE.getColumn(e.row,"PFIL_NAME");
        		var realFileNm = this.dsTM_ATFILE.getColumn(e.row,"LFIL_NAME");

        		if (this.fnc_Length(filePath) > 0) {
        			this.fnc_FileDownLoad(filePath, phyFileNm, realFileNm);
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsHR_MASTRQ.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsHR_MASTRQ.addEventHandler("canrowposchange", this.dsHR_MASTRQ_canrowposchange, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onchar", this.edtSHREMPL_NAME_onchar, this);
            this.Static120.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtEMPL_NAME_M.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static10.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtENEE_NAME_M.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static13.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtCCEM_NAME_M.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static19.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtRCMP_NUMB_M.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calHAAD_DATE_M.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnAddFile.addEventHandler("onclick", this.btnFile_onclick, this);
            this.btnDelFile.addEventHandler("onclick", this.btnFile_onclick, this);
            this.grdTM_ATFILE.addEventHandler("oncellclick", this.grdTM_ATFILE_oncellclick, this);
            this.btnChangeReq.addEventHandler("onclick", this.fn_btnChangeReq_OnClick, this);
            this.btnReqCancel.addEventHandler("onclick", this.fn_btnReqCancel_OnClick, this);
            this.medRERN_NUMB_M.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.staENEE_NAME.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtENEE_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.staCCEM_NAME.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtCCEM_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.staRERN_NUMB.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtRCMP_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calHAAD_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static67.addEventHandler("onclick", this.Static120_onclick, this);
            this.calCHRQ_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtREMK_100X.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medRERN_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtHDPP_NAME_M.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtHDPP_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtHALT_PROW_M.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtHALT_PROW.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calRCMP_DATE_M.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calRCMP_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtMNOM_NAME_M.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtMNOM_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.staEMPL_NAME.addEventHandler("onclick", this.Static120_onclick, this);

        };

        this.loadIncludeScript("HRMB0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
