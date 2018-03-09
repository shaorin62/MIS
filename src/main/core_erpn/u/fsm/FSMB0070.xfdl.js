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
                this.set_name("FSMB0070");
                this.set_titletext("자산수리이력관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFS_ASRPXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RPRQ_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQN_NUMB\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RPRQ_DESC\" size=\"500\" prop=\"default\" type=\"STRING\"/><Column id=\"REPR_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"REPR_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"REPR_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REPR_VDER\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"RPAR_DESC\" size=\"500\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSF_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQU_PRIC\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">USIG_YSNO</Col><Col id=\"DSNAME\">dsSHRREPR_YSNO</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "133", "262", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("20");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFS_ASRPXM", "absolute", "8", "154", null, null, "25", "194", this);
            obj.set_autoenter("none");
            obj.set_binddataset("dsFS_ASRPXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("5");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj.set_tabstop("true");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"78\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"110\" band=\"left\"/><Column size=\"160\" band=\"left\"/><Column size=\"175\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"175\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"수리의뢰일\"/><Cell col=\"1\" displaytype=\"text\" text=\"자산분류\"/><Cell col=\"2\" displaytype=\"text\" text=\"품목분류\"/><Cell col=\"3\" text=\"자산번호\"/><Cell col=\"4\" displaytype=\"text\" text=\"자산명\"/><Cell col=\"5\" displaytype=\"text\" text=\"수리의뢰내역\"/><Cell col=\"6\" displaytype=\"text\" text=\"완료여부\"/><Cell col=\"7\" displaytype=\"text\" text=\"수리금액\"/><Cell col=\"8\" displaytype=\"text\" text=\"수리내역\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:RPRQ_DATE\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASCL_NAME\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CLSF_NAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:center;\" text=\"bind:ASST_NUMB\" mask=\"expr:ASST_NUMB.toString().length == 0 ? &quot;&quot; : &quot;####-####-####&quot;\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASST_NAME\"/><Cell col=\"5\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:RPRQ_DESC\"/><Cell col=\"6\" displaytype=\"checkbox\" style=\"align:center middle;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:REPR_YSNO\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:REPR_AMOT\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:RPAR_DESC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("21");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRRPRQ_DAT1", "absolute", "98", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static64", "absolute", "201", "71", "14", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("~");
            obj.set_cssclass("styFormSearch");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRRPRQ_DAT2", "absolute", "218", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Combo("cmbSHRREPR_YSNO", "absolute", "434", "71", "113", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchItem");

            obj = new Edit("edtSHRCLSF_CODE", "absolute", "633", "71", "105", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_lengthunit("utf8");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCLSF_NAME", "absolute", "763", "71", "242", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRASST_NAME", "absolute", "233", "97", "314", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("title01", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("조회기간");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "28", "97", "76", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("자산번호");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "339", "71", "104", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("수리완료여부");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "568", "71", "76", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("품목분류");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtSHRASST_NUMB", "absolute", "98", "97", "110", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_type("string");
            obj.set_mask("####-####-####");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.addChild(obj.name, obj);

            obj = new Static("Shape0", "absolute", "8", null, null, "169", "25", "15", this);
            obj.set_taborder("27");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtASST_NUMB", "absolute", "360", null, "120", "21", null, "154", this);
            obj.set_taborder("7");
            obj.set_type("string");
            obj.set_mask("####-####-####");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkREPR_YSNO", "absolute", "122", null, "31", "21", null, "76", this);
            obj.set_taborder("14");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsFS_ASRPXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtREPR_VDER", "absolute", "820", null, null, "21", "46", "76", this);
            obj.set_taborder("17");
            obj.set_imemode("hangul");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASRPXM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskREPR_AMOT", "absolute", "585", null, "130", "21", null, "76", this);
            obj.set_taborder("16");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsFS_ASRPXM");
            this.addChild(obj.name, obj);

            obj = new Calendar("calREPR_DATE", "absolute", "360", null, "119", "21", null, "76", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.getSetter("binddataset").set("dsFS_ASRPXM");

            obj = new Edit("edtRPRQ_DESC", "absolute", "122", null, null, "21", "46", "102", this);
            obj.set_taborder("13");
            obj.set_imemode("hangul");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("500");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASRPXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDESC_REMK", "absolute", "122", null, null, "21", "46", "24", this);
            obj.set_taborder("61");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("500");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASRPXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtASST_NAME", "absolute", "505", null, "210", "21", null, "154", this);
            obj.set_taborder("8");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASRPXM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskACQU_PRIC", "absolute", "820", null, "130", "21", null, "128", this);
            obj.set_taborder("12");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.getSetter("binddataset").set("dsFS_ASRPXM");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskACQS_DATE", "absolute", "585", null, "130", "21", null, "128", this);
            obj.set_taborder("11");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsFS_ASRPXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCLSF_NAME", "absolute", "360", null, "120", "21", null, "128", this);
            obj.set_taborder("10");
            obj.set_lengthunit("utf8");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsFS_ASRPXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtASCL_NAME", "absolute", "122", null, "120", "21", null, "128", this);
            obj.set_taborder("9");
            obj.set_lengthunit("utf8");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsFS_ASRPXM");
            this.addChild(obj.name, obj);

            obj = new Calendar("calRPRQ_DATE", "absolute", "122", null, "120", "21", null, "154", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.getSetter("binddataset").set("dsFS_ASRPXM");

            obj = new Static("Static0", "absolute", "28", null, "103", "21", null, "152", this);
            obj.set_taborder("28");
            obj.set_text("수리의뢰일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "279", null, "81", "21", null, "154", this);
            obj.set_taborder("29");
            obj.set_text("자산번호");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "28", null, "67", "21", null, "128", this);
            obj.set_taborder("30");
            obj.set_text("자산분류");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "517", null, "80", "21", null, "128", this);
            obj.set_taborder("31");
            obj.set_text("취득일자");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "752", null, "83", "21", null, "128", this);
            obj.set_taborder("32");
            obj.set_text("취득금액");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "279", null, "81", "21", null, "128", this);
            obj.set_taborder("33");
            obj.set_text("품목분류");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "28", null, "103", "21", null, "102", this);
            obj.set_taborder("34");
            obj.set_text("수리의뢰내역");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "28", null, "86", "21", null, "76", this);
            obj.set_taborder("35");
            obj.set_text("수리완료여부");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "279", null, "81", "21", null, "76", this);
            obj.set_taborder("36");
            obj.set_text("수리완료일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "517", null, "80", "21", null, "76", this);
            obj.set_taborder("37");
            obj.set_text("수리금액");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "752", null, "83", "21", null, "76", this);
            obj.set_taborder("38");
            obj.set_text("수리업체");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "28", null, "103", "21", null, "52", this);
            obj.set_taborder("40");
            obj.set_text("수리내역");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "28", null, "67", "21", null, "27", this);
            obj.set_taborder("41");
            obj.set_text("비고");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRASST_NUMB", "absolute", "210", "97", "22", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCLSF_CODE", "absolute", "740", "71", "22", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpASST_NUMB", "absolute", "482", null, "22", "22", null, "153", this);
            obj.set_taborder("44");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("45");
            obj.set_text("자산수리이력관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("46");
            obj.set_text("홈 > 자산관리 > 자산수리이력관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("47");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("48");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("50");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("52");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("53");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("54");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "433", "118", "38", "10", null, null, this);
            obj.set_taborder("55");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "433", "92", "102", "5", null, null, this);
            obj.set_taborder("56");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "433", "61", "38", "10", null, null, this);
            obj.set_taborder("57");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("58");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "148", "216", "6", null, null, this);
            obj.set_taborder("59");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "129", "80", "25", null, null, this);
            obj.set_taborder("60");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRPAR_DESC", "absolute", "122", null, null, "21", "46", "50", this);
            obj.set_taborder("39");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("500");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsFS_ASRPXM");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("자산수리이력관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtRPAR_DESC_value","edtRPAR_DESC","value","dsFS_ASRPXM","RPAR_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calRPRQ_DATE_value","calRPRQ_DATE","value","dsFS_ASRPXM","RPRQ_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtASCL_NAME_value","edtASCL_NAME","value","dsFS_ASRPXM","ASCL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCLSF_NAME_value","edtCLSF_NAME","value","dsFS_ASRPXM","CLSF_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskACQS_DATE_value","mskACQS_DATE","value","dsFS_ASRPXM","ACQS_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskACQU_PRIC_value","mskACQU_PRIC","value","dsFS_ASRPXM","ACQU_PRIC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtASST_NAME_value","edtASST_NAME","value","dsFS_ASRPXM","ASST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDESC_REMK_value","edtDESC_REMK","value","dsFS_ASRPXM","DESC_REMK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRPRQ_DESC_value","edtRPRQ_DESC","value","dsFS_ASRPXM","RPRQ_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calREPR_DATE_value","calREPR_DATE","value","dsFS_ASRPXM","REPR_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskREPR_AMOT_value","mskREPR_AMOT","value","dsFS_ASRPXM","REPR_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtREPR_VDER_value","edtREPR_VDER","value","dsFS_ASRPXM","REPR_VDER");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkREPR_YSNO_value","chkREPR_YSNO","value","dsFS_ASRPXM","REPR_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","edtASST_NUMB","value","dsFS_ASRPXM","ASST_NUMB");
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
        this.addIncludeScript("FSMB0070.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FSMB0070.xfdl", function() {
        /***************************************************************************************************
         * # Program:	FSMB0070 자산수리이력관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.26		신민규		Initial Created.
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

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST 	= "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME 	= "FSMB0070"; //해당 Form에서 사용 할 Package 명

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
        	 //Quick View 실행 시 설정
        	 this.sUSERAUTH     = "";   //사용자별 프로그램 사용 권한
        	 this.sFORMCAPTION  = "";   //Form의 Title 정보
        	 this.sFORMLOCATION = "";   //Form의 Location 정보
        	 this.sUSERLAVEL    = "";   //Form의 Location 정보
        } else {
        	 this.sUSERAUTH     = this.getOwnerFrame()["sUSERAUTH"];
        	 this.sFORMCAPTION  = this.getOwnerFrame()["sFORMCAPTION"];
        	 this.sFORMLOCATION = this.getOwnerFrame()["sFORMLOCATION"];
        	 this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];
        }	

        this.aKeyValue = new Array(4);

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.calSHRRPRQ_DAT1.set_value((this.fnc_Left(this.fnc_GetServerDateTime("DATE"), 4) + "0101"));
        	this.calSHRRPRQ_DAT2.set_value(this.fnc_GetServerDateTime("DATE"));
        	this.calSHRRPRQ_DAT1.setFocus();
        	
        }

        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;

        	this.fnc_DatasetClear('dsFS_ASRPXM'); //기 조회 자료 초기화

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsFS_ASRPXM=dsFS_ASRPXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_ASRPXM.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsFS_ASRPXM.addRow();
        	this.dsFS_ASRPXM.setColumn(iRow, "RPRQ_DATE", this.fnc_GetServerDateTime("DATE")); //수리의뢰일자
        	this.dsFS_ASRPXM.setColumn(iRow, "REPR_YSNO", "0"); //완료여부
        	this.calRPRQ_DATE.setFocus();
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) {
        		this.dsFS_ASRPXM.deleteRow(this.dsFS_ASRPXM.rowposition);
        	}
        	this.grdFS_ASRPXM.setFocus();
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsFS_ASRPXM");
        	this.grdFS_ASRPXM.setFocus();
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	this.aKeyValue[0] = this.dsFS_ASRPXM.getColumn(this.dsFS_ASRPXM.rowposition, "ASST_NUMB");
        	this.aKeyValue[1] = this.dsFS_ASRPXM.getColumn(this.dsFS_ASRPXM.rowposition, "RPRQ_DATE");

        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASRPXM.getColumn(this.dsFS_ASRPXM.rowposition, "SEQN_NUMB"))) > 0) {
        		this.aKeyValue[2] = this.dsFS_ASRPXM.getColumn(this.dsFS_ASRPXM.rowposition, "SEQN_NUMB"); //조회시 가져옴.
        	} else {
        		this.aKeyValue[2] = 1; //신규생성은 1. PKG에서 생성함.
        	}
        	//trace("-----aKeyValue[0] : " + this.aKeyValue[0] + " aKeyValue[1] : " + this.aKeyValue[1] + " aKeyValue[2] : " + this.aKeyValue[2]);

        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsFS_ASRPXM=dsFS_ASRPXM:U";
        	var sOutDataSet = "dsFS_ASRPXM=dsFS_ASRPXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_ASRPXM.setFocus();
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this);
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsFS_ASRPXM",this);
        	
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function(obj,e) {
        	this.fnc_FormUnload(obj,e);
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
        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsFS_ASRPXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	if (!this.fnc_IsDate(this.calSHRRPRQ_DAT1.value)) {
        		return this.fnc_SearchCheckPostAction("TMM072", "조회기간(시작일)", this.calSHRRPRQ_DAT1);
        	}

        	if (!this.fnc_IsDate(this.calSHRRPRQ_DAT2.value)) {
        		return this.fnc_SearchCheckPostAction("TMM072", "조회기간(종료일)", this.calSHRRPRQ_DAT2);
        	}

        	if (this.fnc_Trim(this.calSHRRPRQ_DAT1.value) > this.fnc_Trim(this.calSHRRPRQ_DAT2.value)) {
        		return this.fnc_SearchCheckPostAction("TMM042", "시작일,종료일", this.calSHRRPRQ_DAT2);
        	}

        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsFS_ASRPXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return;
        	}

        	if (this.fnc_Trim(this.dsFS_ASRPXM.getColumn(this.dsFS_ASRPXM.rowposition, "REPR_YSNO")) == "1") {
        		this.fnc_Message("TMM107", "완료여부", "완료");
        		return;
        	}

        	var sQuestionText = this.dsFS_ASRPXM.getColumn(this.dsFS_ASRPXM.rowposition, "ASST_NUMB") + " ";
        	sQuestionText += this.dsFS_ASRPXM.getColumn(this.dsFS_ASRPXM.rowposition, "ASST_NAME") + "의 수리이력";
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsFS_ASRPXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsFS_ASRPXM.getRowCount(); i++) {
        		if (this.fnc_ToUpper(this.dsFS_ASRPXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (!this.fnc_IsDate(this.dsFS_ASRPXM.getColumn(i, "RPRQ_DATE"))) {
        			return this.fnc_CheckPostAction("TMM072", "수리의뢰일", this.dsFS_ASRPXM, i, this.calRPRQ_DATE, '');
        		}
        /*
        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASRPXM.getColumn(i, "ASST_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "자산번호", this.dsFS_ASRPXM, i, this.edtASST_NAME, '');
        		}
        */
        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASRPXM.getColumn(i, "RPRQ_DESC"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "수리의뢰내역", this.dsFS_ASRPXM, i, this.edtRPRQ_DESC, '');
        		}

        		// 수리완료여부에 따른 필수값 처리
        		if (this.fnc_Trim(this.dsFS_ASRPXM.getColumn(i, "REPR_YSNO")) == "1") {
        			if (!this.fnc_IsDate(this.dsFS_ASRPXM.getColumn(i, "REPR_DATE"))) {
        				return this.fnc_CheckPostAction("TMM072", "수리완료일", this.dsFS_ASRPXM, i, this.calREPR_DATE, '');
        			}

        			if (this.fnc_Trim(this.dsFS_ASRPXM.getColumn(i, "REPR_AMOT")) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "수리금액", this.dsFS_ASRPXM, i, this.mskREPR_AMOT, '');
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASRPXM.getColumn(i, "REPR_VDER"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "수리업체", this.dsFS_ASRPXM, i, this.edtREPR_VDER, '');
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASRPXM.getColumn(i, "RPAR_DESC"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "수리내역", this.dsFS_ASRPXM, i, this.edtRPAR_DESC, '');
        			}
        		}
        		
        		if((this.fnc_Trim(this.dsFS_ASRPXM.getColumn(i, "REPR_DATE")) < this.fnc_Trim(this.dsFS_ASRPXM.getColumn(i, "ACQS_DATE")) )&& (this.fnc_Trim(this.dsFS_ASRPXM.getColumn(i, "REPR_YSNO")) == "1"))
        		{
        		 //return this.fnc_CheckPostAction("TMM072", "수리완료일", this.dsFS_ASRPXM, i, this.calREPR_DATE, '');
        		 this.fnc_Message("TMM125", "수리완료일이 자산취득일 이전입니다.");
        		 return false;
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
        	if (sKind == "SEARCH00") {
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " RPRQ_DAT1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRRPRQ_DAT1.value)); //조회기간1
        		sReturnString += " RPRQ_DAT2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRRPRQ_DAT2.value)); //조회기간2
        		sReturnString += " REPR_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRREPR_YSNO.value)); //수리완료여부
        		sReturnString += " CLSF_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCLSF_CODE.value)); //품목분류
        		sReturnString += " ASST_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRASST_NUMB.value)); //자산번호

        		// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " RPRQ_DAT1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRRPRQ_DAT1.value)); //조회기간1
        		sReturnString += " RPRQ_DAT2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRRPRQ_DAT2.value)); //조회기간2
        		sReturnString += " REPR_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRREPR_YSNO.value)); //수리완료여부
        		sReturnString += " CLSF_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCLSF_CODE.value)); //품목분류
        		sReturnString += " ASST_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRASST_NUMB.value)); //자산번호
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

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {
        		this.fnc_Information(this.stInformation, this.dsFS_ASRPXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsFS_ASRPXM.rowcount);

        		if (this.fnc_Length(this.fnc_Trim(this.aKeyValue[0])) > 0) {
        			var iRow = this.dsFS_ASRPXM.findRowExpr("ASST_NUMB=='" + this.aKeyValue[0] + "' && RPRQ_DATE=='" + this.aKeyValue[1] + "' && SEQN_NUMB=='" + this.aKeyValue[2] + "'");

        			this.grdFS_ASRPXM.clearSelect();
        			this.grdFS_ASRPXM.selectRow(iRow);
        			this.dsFS_ASRPXM.set_rowposition(iRow);

        			this.aKeyValue[0] = "";
        			this.aKeyValue[1] = "";
        			this.aKeyValue[2] = "";
        		}
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	} else if (sMethodName == "GetCommCode") {
        	
        		 var arrParam = new Array();
        		 
        		 arrParam[0]  = "COMBO,cmbSHRREPR_YSNO,dsSHRREPR_YSNO,0";
        		 
        		 this.fnc_CommonCodeInnerBind(arrParam);				
        	}
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {

        	if (this.fnc_ToUpper(obj.getRowType(e.newrow)) == Dataset.ROWTYPE_INSERT) {
        		this.calRPRQ_DATE.set_enable(true);
        		this.edtASST_NAME.set_enable(true);
        	} else {
        		this.calRPRQ_DATE.set_enable(false);
        		this.edtASST_NAME.set_enable(false);
        	}

        	// 수리 완료 여부에 따라 수리 내역 입력 여부 변경
        	if (this.fnc_Trim(obj.getColumn(e.newrow, "REPR_YSNO")) == "1") {
        		this.fn_ComponentEnable(true);
        	} else {
        		this.fn_ComponentEnable(false);
        	}
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /*------------------------------------------------+
         |   수리 완료 상태에 따른 컴퍼넌트 수정 여부 설정 |
         +-------------------------------------------------*/
        this.fn_ComponentEnable = function (bBoolean) {
        	this.calREPR_DATE.set_enable(bBoolean); //수리완료일
        	this.mskREPR_AMOT.set_enable(bBoolean); //수리금액
        	this.edtREPR_VDER.set_enable(bBoolean); //수리업체
        	this.edtRPAR_DESC.set_enable(bBoolean); //수리내역
        	
        	if(bBoolean == false){
        	
        	this.calREPR_DATE.set_value('');
        	this.mskREPR_AMOT.set_value('');
        	this.edtREPR_VDER.set_value('');
        	this.edtRPAR_DESC.set_value('');
        	
        	}
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();

            if ((obj.name == "imgHelpSHRCLSF_CODE") || (obj.name == "edtSHRCLSF_NAME")) {
            
                arrParam[0] = "FSM0001";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtSHRCLSF_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtSHRCLSF_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtSHRCLSF_CODE,edtSHRCLSF_NAME";          //초기화 및 결과 Mapping Column
                arrParam[6] = "10,0";                                      //Mapping Column Index
                
                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출
                
            } else if ((obj.name == "imgHelpSHRASST_NUMB") || (obj.name == "edtSHRASST_NAME")) {
            
                arrParam[0] = "FSM0011";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtSHRASST_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtSHRASST_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtSHRASST_NUMB,edtSHRASST_NAME";          //초기화 및 결과 Mapping Column
                arrParam[6] = "0,1";                                      //Mapping Column Index
                
                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출 
                   
            } else if ((obj.name == "imgHelpASST_NUMB") || (obj.name == "edtASST_NAME")) {
            
        		if (this.edtASST_NAME.enable == false || this.dsFS_ASRPXM.rowcount < 1) return;
            
                arrParam[0] = "FSM0013";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtASST_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtASST_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtASST_NUMB,edtASST_NAME,edtASCL_NAME,edtCLSF_NAME,mskACQS_DATE,mskACQU_PRIC";          //초기화 및 결과 Mapping Column
                arrParam[6] = "0,1,5,7,12,17";                                      //Mapping Column Index
                
                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출    
            }
         
        }

        /*-------------------------------------------+
         |  수리완료여부에 따른 컴포넌트 활성화 처리  |
         +--------------------------------------------*/
        this.dsFS_ASRPXM_OnColumnChanged = function (obj,e) {

        	if (e.columnid == "REPR_YSNO") {
        		if (e.newvalue == "1") {
        			this.fn_ComponentEnable(true);
        		} else {
        			this.fn_ComponentEnable(false);
        		}
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsFS_ASRPXM.addEventHandler("oncolumnchanged", this.dsFS_ASRPXM_OnColumnChanged, this);
            this.dsFS_ASRPXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.calSHRRPRQ_DAT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRRPRQ_DAT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRREPR_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCLSF_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCLSF_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCLSF_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRASST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRASST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRASST_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtASST_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.chkREPR_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtREPR_VDER.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskREPR_AMOT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calREPR_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calREPR_DATE.addEventHandler("oneditclick", this.calREPR_DATE_oneditclick, this);
            this.edtRPRQ_DESC.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDESC_REMK.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtASST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtASST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.mskACQU_PRIC.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskACQS_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCLSF_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtASCL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calRPRQ_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRASST_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRCLSF_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpASST_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtRPAR_DESC.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("FSMB0070.xfdl");
        this.loadPreloadList();
       
    };
}
)();
