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
                this.set_name("TMMA0010");
                this.set_titletext("공통코드관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_CODEXH", this);
            obj._setContents("<ColumnInfo><Column id=\"COMM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"SYST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CDGB_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COCD_LNTH\" type=\"STRING\" size=\"256\"/><Column id=\"RE1F_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"RE1T_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RE1F_CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"RE1F_CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"RE2F_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"RE2T_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RE2F_CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"RE2F_CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"RE3F_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"RE3T_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RE3F_CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"RE3F_CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"RE4F_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"RE4T_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RE4F_CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"RE4F_CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"RE5F_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"RE5T_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RE5F_CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"RE5F_CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"RE6F_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"RE6T_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RE6F_CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"RE6F_CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"RE7F_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"RE7T_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RE7F_CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"RE7F_CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"RE8F_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"RE8T_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RE8F_CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"RE8F_CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"RE9F_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"RE9T_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RE9F_CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"RE9F_CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"R10F_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"R10T_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"R10F_CMCD\" type=\"STRING\" size=\"256\"/><Column id=\"R10F_CMNM\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_100X\" type=\"STRING\" size=\"256\"/><Column id=\"ISET_YSNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYN\" type=\"STRING\" size=\"256\" prop=\"default\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsSHRSYST_CODE</Col><Col id=\"HEADFLAG\">ALL</Col><Col id=\"USEYN\">Y</Col></Row><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsSYST_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"USEYN\">Y</Col></Row><Row><Col id=\"DSNAME\">dsCDGB_CODE</Col><Col id=\"CODEID\">CDGB_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"USEYN\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsREXT_CODE</Col><Col id=\"CODEID\">REXT_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"USEYN\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static41", "absolute", null, "235", "633", "47", "25", null, this);
            obj.set_taborder("257");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Shape1", "absolute", null, "128", "722", "54", "25", null, this);
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_taborder("50");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_text("공통코드명");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("55");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle1", "absolute", "338", "71", "55", "21", null, null, this);
            obj.set_text("시스템");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("56");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCOMM_CDNM", "absolute", "109", "71", "200", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSYST_CODE", "absolute", "393", "71", "200", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_imemode("none");
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("staXxxx0", "absolute", null, "133", "82", "21", "645", null, this);
            obj.set_text("공통코드");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("58");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx1", "absolute", null, "133", "65", "21", "186", null, this);
            obj.set_text("시스템");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("59");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", null, "133", "82", "21", "464", null, this);
            obj.set_text("공통코드명");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("61");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", null, "156", "82", "21", "645", null, this);
            obj.set_text("코드구분");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("62");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", null, "156", "97", "21", "449", null, this);
            obj.set_text("세부코드길이");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("63");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_CODEXH", "absolute", "8", "128", null, null, "767", "15", this);
            obj.set_binddataset("dsTM_CODEXH");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("67");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"226\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"공통코드\"/><Cell col=\"1\" text=\"공통코드명\"/><Cell col=\"2\" text=\"시스템구분\"/></Band><Band id=\"body\"><Cell style=\"cursor:hand;\" text=\"bind:COMM_CODE\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:COMM_CDNM\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:SYST_CODE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", null, "156", "95", "21", "156", null, this);
            obj.set_text("초기세팅여부");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("65");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSYST_CODE", "absolute", null, "133", "154", "21", "42", null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_codecolumn("COMD_CODE");
            obj.set_datacolumn("COMD_CDNM");
            obj.set_type("dropdown");
            obj.set_taborder("4");
            obj.set_cssclass("styFormItemCombo");
            obj.set_index("-1");

            obj = new Edit("edtCOMM_CDNM", "absolute", null, "133", "189", "21", "263", null, this);
            obj.set_taborder("3");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_imemode("none");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOCD_LNTH", "absolute", null, "156", "57", "21", "395", null, this);
            obj.set_taborder("6");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("5");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCDGB_CODE", "absolute", null, "156", "100", "21", "558", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_codecolumn("COMD_CODE");
            obj.set_datacolumn("COMD_CDNM");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTM_CODEXH");

            obj = new CheckBox("chkISET_YSNO", "absolute", null, "156", "16", "21", "139", null, this);
            obj.set_taborder("7");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_cssclass("styFormItemChk");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOMM_CODE", "absolute", null, "133", "100", "21", "558", null, this);
            obj.set_taborder("2");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("107");
            obj.set_text("공통코드관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("108");
            obj.set_text("홈 >공통관리>공통관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("109");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("110");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("111");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("112");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("113");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("117");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("118");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("119");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("120");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "8", "107", "198", "21", null, null, this);
            obj.set_taborder("121");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "317", "103", "82", "25", null, null, this);
            obj.set_taborder("127");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", null, "189", "633", "47", "25", null, this);
            obj.set_taborder("130");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", null, "189", "90", "47", "657", null, this);
            obj.set_taborder("131");
            obj.set_text("항목 1");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 22");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRE1F_CMCD", "absolute", null, "213", "88", "21", "298", null, this);
            obj.set_taborder("183");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            obj.set_readonly("false");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("15");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRE1F_DESC", "absolute", null, "191", "557", "21", "29", null, this);
            obj.set_taborder("185");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbRE1T_CODE", "absolute", null, "213", "120", "21", "466", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("186");
            obj.set_codecolumn("COMD_CODE");
            obj.set_datacolumn("COMD_CDNM");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_index("-1");

            obj = new Static("imgRE1F_CMNM", "absolute", null, "213", "21", "21", "275", null, this);
            obj.set_taborder("181");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRE1F_CMNM", "absolute", null, "213", "244", "21", "29", null, this);
            obj.set_taborder("182");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("15");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", null, "191", "64", "21", "584", null, this);
            obj.set_taborder("199");
            obj.set_text("제목");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", null, "213", "64", "21", "584", null, this);
            obj.set_taborder("200");
            obj.set_text("입력형태");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", null, "213", "64", "21", "385", null, this);
            obj.set_taborder("201");
            obj.set_text("공통코드");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", null, "649", "90", null, "657", "15", this);
            obj.set_taborder("252");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 22");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", null, "649", "633", null, "25", "15", this);
            obj.set_taborder("253");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", null, "259", "64", "21", "385", null, this);
            obj.set_taborder("254");
            obj.set_text("공통코드");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", null, "259", "64", "21", "584", null, this);
            obj.set_taborder("255");
            obj.set_text("입력형태");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", null, "237", "64", "21", "584", null, this);
            obj.set_taborder("256");
            obj.set_text("제목");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", null, "235", "90", "47", "657", null, this);
            obj.set_taborder("258");
            obj.set_text("항목 2");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 22");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", null, "281", "633", "47", "25", null, this);
            obj.set_taborder("259");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", null, "305", "64", "21", "385", null, this);
            obj.set_taborder("260");
            obj.set_text("공통코드");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", null, "305", "64", "21", "584", null, this);
            obj.set_taborder("261");
            obj.set_text("입력형태");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", null, "283", "64", "21", "584", null, this);
            obj.set_taborder("262");
            obj.set_text("제목");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", null, "281", "90", "47", "657", null, this);
            obj.set_taborder("263");
            obj.set_text("항목 3");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 22");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", null, "327", "633", "47", "25", null, this);
            obj.set_taborder("264");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", null, "351", "64", "21", "385", null, this);
            obj.set_taborder("265");
            obj.set_text("공통코드");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", null, "351", "64", "21", "584", null, this);
            obj.set_taborder("266");
            obj.set_text("입력형태");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", null, "329", "64", "21", "584", null, this);
            obj.set_taborder("267");
            obj.set_text("제목");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", null, "327", "90", "47", "657", null, this);
            obj.set_taborder("268");
            obj.set_text("항목 4");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 22");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", null, "373", "633", "47", "25", null, this);
            obj.set_taborder("269");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", null, "397", "64", "21", "385", null, this);
            obj.set_taborder("270");
            obj.set_text("공통코드");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", null, "397", "64", "21", "584", null, this);
            obj.set_taborder("271");
            obj.set_text("입력형태");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", null, "375", "64", "21", "584", null, this);
            obj.set_taborder("272");
            obj.set_text("제목");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", null, "373", "90", "47", "657", null, this);
            obj.set_taborder("273");
            obj.set_text("항목 5");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 22");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", null, "419", "633", "47", "25", null, this);
            obj.set_taborder("274");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", null, "443", "64", "21", "385", null, this);
            obj.set_taborder("275");
            obj.set_text("공통코드");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", null, "443", "64", "21", "584", null, this);
            obj.set_taborder("276");
            obj.set_text("입력형태");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", null, "421", "64", "21", "584", null, this);
            obj.set_taborder("277");
            obj.set_text("제목");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", null, "419", "90", "47", "657", null, this);
            obj.set_taborder("278");
            obj.set_text("항목 6");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 22");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", null, "465", "633", "47", "25", null, this);
            obj.set_taborder("279");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", null, "489", "64", "21", "385", null, this);
            obj.set_taborder("280");
            obj.set_text("공통코드");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static68", "absolute", null, "489", "64", "21", "584", null, this);
            obj.set_taborder("281");
            obj.set_text("입력형태");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", null, "467", "64", "21", "584", null, this);
            obj.set_taborder("282");
            obj.set_text("제목");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", null, "465", "90", "47", "657", null, this);
            obj.set_taborder("283");
            obj.set_text("항목 7");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 22");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", null, "511", "633", "47", "25", null, this);
            obj.set_taborder("284");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", null, "535", "64", "21", "385", null, this);
            obj.set_taborder("285");
            obj.set_text("공통코드");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", null, "535", "64", "21", "584", null, this);
            obj.set_taborder("286");
            obj.set_text("입력형태");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", null, "513", "64", "21", "584", null, this);
            obj.set_taborder("287");
            obj.set_text("제목");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static75", "absolute", null, "511", "90", "47", "657", null, this);
            obj.set_taborder("288");
            obj.set_text("항목 8");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 22");
            this.addChild(obj.name, obj);

            obj = new Static("Static76", "absolute", null, "557", "633", "47", "25", null, this);
            obj.set_taborder("289");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static77", "absolute", null, "581", "64", "21", "385", null, this);
            obj.set_taborder("290");
            obj.set_text("공통코드");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static78", "absolute", null, "581", "64", "21", "584", null, this);
            obj.set_taborder("291");
            obj.set_text("입력형태");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static79", "absolute", null, "559", "64", "21", "584", null, this);
            obj.set_taborder("292");
            obj.set_text("제목");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static80", "absolute", null, "557", "90", "47", "657", null, this);
            obj.set_taborder("293");
            obj.set_text("항목 9");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 22");
            this.addChild(obj.name, obj);

            obj = new Static("Static81", "absolute", null, "603", "633", "47", "25", null, this);
            obj.set_taborder("294");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static82", "absolute", null, "627", "64", "21", "385", null, this);
            obj.set_taborder("295");
            obj.set_text("공통코드");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static83", "absolute", null, "627", "64", "21", "584", null, this);
            obj.set_taborder("296");
            obj.set_text("입력형태");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static84", "absolute", null, "605", "64", "21", "584", null, this);
            obj.set_taborder("297");
            obj.set_text("제목");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static85", "absolute", null, "603", "90", "47", "657", null, this);
            obj.set_taborder("298");
            obj.set_text("항목 10");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("1 0 0 22");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtREMK_100X", "absolute", null, "652", "627", null, "28", "18", this);
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_lengthunit("ascii");
            obj.set_imemode("none");
            obj.set_maxlength("1000");
            obj.set_taborder("48");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRE2F_CMNM", "absolute", null, "259", "244", "21", "29", null, this);
            obj.set_taborder("14");
            obj.set_imemode("none");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("15");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            this.addChild(obj.name, obj);

            obj = new Static("imgRE2F_CMNM", "absolute", null, "259", "21", "21", "275", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRE2F_CMCD", "absolute", null, "259", "88", "21", "298", null, this);
            obj.set_taborder("97");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("15");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRE2F_DESC", "absolute", null, "237", "557", "21", "29", null, this);
            obj.set_taborder("12");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbRE2T_CODE", "absolute", null, "259", "120", "21", "466", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_codecolumn("COMD_CODE");
            obj.set_datacolumn("COMD_CDNM");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_index("-1");

            obj = new Edit("edtRE3F_CMNM", "absolute", null, "305", "244", "21", "29", null, this);
            obj.set_taborder("18");
            obj.set_imemode("none");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("15");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            this.addChild(obj.name, obj);

            obj = new Static("imgRE3F_CMNM", "absolute", null, "305", "21", "22", "275", null, this);
            obj.set_taborder("19");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRE3F_CMCD", "absolute", null, "305", "88", "21", "298", null, this);
            obj.set_taborder("98");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("15");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRE3F_DESC", "absolute", null, "283", "557", "21", "29", null, this);
            obj.set_taborder("16");
            obj.set_imemode("none");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbRE3T_CODE", "absolute", null, "305", "120", "21", "466", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_codecolumn("COMD_CODE");
            obj.set_datacolumn("COMD_CDNM");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_index("-1");

            obj = new Edit("edtRE4F_CMNM", "absolute", null, "351", "244", "21", "29", null, this);
            obj.set_taborder("22");
            obj.set_imemode("none");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("15");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            this.addChild(obj.name, obj);

            obj = new Static("imgRE4F_CMNM", "absolute", null, "351", "21", "22", "275", null, this);
            obj.set_taborder("23");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRE4F_CMCD", "absolute", null, "351", "88", "21", "298", null, this);
            obj.set_taborder("99");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("15");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRE4F_DESC", "absolute", null, "329", "557", "21", "29", null, this);
            obj.set_taborder("20");
            obj.set_imemode("none");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbRE4T_CODE", "absolute", null, "351", "120", "21", "466", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_codecolumn("COMD_CODE");
            obj.set_datacolumn("COMD_CDNM");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_index("-1");

            obj = new Edit("edtRE5F_CMNM", "absolute", null, "397", "244", "21", "29", null, this);
            obj.set_taborder("26");
            obj.set_imemode("none");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("15");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            this.addChild(obj.name, obj);

            obj = new Static("imgRE5F_CMNM", "absolute", null, "397", "21", "22", "275", null, this);
            obj.set_taborder("27");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRE6F_DESC", "absolute", null, "421", "557", "21", "29", null, this);
            obj.set_taborder("28");
            obj.set_imemode("none");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbRE6T_CODE", "absolute", null, "443", "120", "21", "466", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("29");
            obj.set_codecolumn("COMD_CODE");
            obj.set_datacolumn("COMD_CDNM");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_index("-1");

            obj = new Edit("edtRE6F_CMNM", "absolute", null, "443", "244", "21", "29", null, this);
            obj.set_taborder("30");
            obj.set_imemode("none");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("15");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            this.addChild(obj.name, obj);

            obj = new Static("imgRE6F_CMNM", "absolute", null, "443", "21", "22", "275", null, this);
            obj.set_taborder("31");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRE7F_DESC", "absolute", null, "467", "557", "21", "29", null, this);
            obj.set_taborder("32");
            obj.set_imemode("none");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbRE7T_CODE", "absolute", null, "489", "120", "21", "466", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("33");
            obj.set_codecolumn("COMD_CODE");
            obj.set_datacolumn("COMD_CDNM");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_index("-1");

            obj = new Edit("edtRE7F_CMNM", "absolute", null, "489", "244", "21", "29", null, this);
            obj.set_taborder("34");
            obj.set_imemode("none");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("15");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            this.addChild(obj.name, obj);

            obj = new Static("imgRE7F_CMNM", "absolute", null, "489", "21", "22", "275", null, this);
            obj.set_taborder("35");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRE8F_DESC", "absolute", null, "513", "557", "21", "29", null, this);
            obj.set_taborder("36");
            obj.set_imemode("none");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbRE8T_CODE", "absolute", null, "535", "120", "21", "466", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("37");
            obj.set_codecolumn("COMD_CODE");
            obj.set_datacolumn("COMD_CDNM");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_index("-1");

            obj = new Edit("edtRE8F_CMNM", "absolute", null, "535", "244", "21", "29", null, this);
            obj.set_taborder("38");
            obj.set_imemode("none");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("15");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            this.addChild(obj.name, obj);

            obj = new Static("imgRE8F_CMNM", "absolute", null, "535", "21", "22", "275", null, this);
            obj.set_taborder("39");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRE9F_DESC", "absolute", null, "559", "557", "21", "29", null, this);
            obj.set_taborder("40");
            obj.set_imemode("none");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbRE9T_CODE", "absolute", null, "581", "120", "21", "466", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("41");
            obj.set_codecolumn("COMD_CODE");
            obj.set_datacolumn("COMD_CDNM");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_index("-1");

            obj = new Edit("edtRE9F_CMNM", "absolute", null, "581", "244", "21", "29", null, this);
            obj.set_taborder("42");
            obj.set_imemode("none");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("15");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            this.addChild(obj.name, obj);

            obj = new Static("imgRE9F_CMNM", "absolute", null, "581", "21", "22", "275", null, this);
            obj.set_taborder("43");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtR10F_DESC", "absolute", null, "605", "557", "21", "29", null, this);
            obj.set_taborder("44");
            obj.set_imemode("none");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbR10T_CODE", "absolute", null, "627", "120", "21", "466", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_codecolumn("COMD_CODE");
            obj.set_datacolumn("COMD_CDNM");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_index("-1");

            obj = new Edit("edtR10F_CMNM", "absolute", null, "627", "244", "21", "29", null, this);
            obj.set_taborder("46");
            obj.set_imemode("none");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("15");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            this.addChild(obj.name, obj);

            obj = new Static("imgR10F_CMNM", "absolute", null, "627", "21", "22", "275", null, this);
            obj.set_taborder("47");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRE5F_CMCD", "absolute", null, "397", "88", "21", "298", null, this);
            obj.set_taborder("100");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("15");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRE6F_CMCD", "absolute", null, "443", "88", "21", "298", null, this);
            obj.set_taborder("101");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("15");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRE7F_CMCD", "absolute", null, "489", "88", "21", "298", null, this);
            obj.set_taborder("102");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("15");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRE8F_CMCD", "absolute", null, "535", "88", "21", "298", null, this);
            obj.set_taborder("103");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("15");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRE9F_CMCD", "absolute", null, "581", "88", "21", "298", null, this);
            obj.set_taborder("104");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("15");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtR10F_CMCD", "absolute", null, "627", "88", "21", "298", null, this);
            obj.set_taborder("105");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("15");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRE5F_DESC", "absolute", null, "375", "557", "21", "29", null, this);
            obj.set_taborder("24");
            obj.set_imemode("none");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbRE5T_CODE", "absolute", null, "397", "120", "21", "466", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_codecolumn("COMD_CODE");
            obj.set_datacolumn("COMD_CDNM");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_index("-1");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("공통코드관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item16","cmbRE1T_CODE","value","dsTM_CODEXH","RE1T_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edtRE1F_DESC","value","dsTM_CODEXH","RE1F_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","edtRE1F_CMCD","value","dsTM_CODEXH","RE1F_CMCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","edtRE1F_CMCD","","dsTM_CODEXH","RE1F_CMCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","edtRE1F_CMNM","value","dsTM_CODEXH","RE1F_CMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edtCOMM_CODE","value","dsTM_CODEXH","COMM_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cmbSYST_CODE","value","dsTM_CODEXH","SYST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtCOMM_CDNM","value","dsTM_CODEXH","COMM_CDNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","cmbCDGB_CODE","value","dsTM_CODEXH","CDGB_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtCOCD_LNTH","value","dsTM_CODEXH","COCD_LNTH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","chkISET_YSNO","value","dsTM_CODEXH","ISET_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edtRE2F_DESC","value","dsTM_CODEXH","RE2F_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edtRE3F_DESC","value","dsTM_CODEXH","RE3F_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edtRE4F_DESC","value","dsTM_CODEXH","RE4F_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edtRE5F_DESC","value","dsTM_CODEXH","RE5F_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edtRE6F_DESC","value","dsTM_CODEXH","RE6F_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","edtRE7F_DESC","value","dsTM_CODEXH","RE7F_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edtRE8F_DESC","value","dsTM_CODEXH","RE8F_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edtRE9F_DESC","value","dsTM_CODEXH","RE9F_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","edtR10F_DESC","value","dsTM_CODEXH","R10F_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","cmbRE2T_CODE","value","dsTM_CODEXH","RE2T_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","cmbRE4T_CODE","value","dsTM_CODEXH","RE4T_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","cmbRE8T_CODE","value","dsTM_CODEXH","RE8T_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","cmbRE9T_CODE","value","dsTM_CODEXH","RE9T_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","cmbR10T_CODE","value","dsTM_CODEXH","R10T_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","edtRE2F_CMNM","value","dsTM_CODEXH","RE2F_CMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","edtRE3F_CMNM","value","dsTM_CODEXH","RE3F_CMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","edtRE4F_CMNM","value","dsTM_CODEXH","RE4F_CMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","edtRE5F_CMNM","value","dsTM_CODEXH","RE5F_CMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","edtRE6F_CMNM","value","dsTM_CODEXH","RE6F_CMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","edtRE7F_CMNM","value","dsTM_CODEXH","RE7F_CMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","edtRE8F_CMNM","value","dsTM_CODEXH","RE8F_CMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","edtRE9F_CMNM","value","dsTM_CODEXH","RE9F_CMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","edtR10F_CMNM","value","dsTM_CODEXH","R10F_CMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","txtREMK_100X","value","dsTM_CODEXH","REMK_100X");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","cmbRE5T_CODE","value","dsTM_CODEXH","RE5T_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","cmbRE3T_CODE","value","dsTM_CODEXH","RE3T_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","cmbRE6T_CODE","value","dsTM_CODEXH","RE6T_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","cmbRE7T_CODE","value","dsTM_CODEXH","RE7T_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","edtRE2F_CMCD","value","dsTM_CODEXH","RE2F_CMCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","edtRE3F_CMCD","value","dsTM_CODEXH","RE3F_CMCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","edtRE4F_CMCD","value","dsTM_CODEXH","RE4F_CMCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","edtRE5F_CMCD","value","dsTM_CODEXH","RE5F_CMCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","edtRE6F_CMCD","value","dsTM_CODEXH","RE6F_CMCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","edtRE7F_CMCD","value","dsTM_CODEXH","RE7F_CMCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","edtRE8F_CMCD","value","dsTM_CODEXH","RE8F_CMCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","edtRE9F_CMCD","value","dsTM_CODEXH","RE9F_CMCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","edtR10F_CMCD","value","dsTM_CODEXH","R10F_CMCD");
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
        this.addIncludeScript("TMMA0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMA0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMA0010 공통코드관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.26. 김석두(표준화 최종 완료)
         *   2016.09.26. 김준수 주석 수정.
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
        this.sBUTTONLIST  = "TTTTTTTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "TMMA0010";

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

        	/*세부코드관리에서 호출 시*/
        	if(typeof (this.getOwnerFrame()["openParameter"]) != "undefined" && (this.getOwnerFrame()["openParameter"]).length> 0 ) {
        		var openParameter = this.getOwnerFrame()["openParameter"];
        		this.edtSHRCOMM_CDNM.set_value(openParameter[0]);
        		
        		this.fn_Search();
        	}

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
        	this.fnc_DatasetClear("dsTM_CODEXH");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_CODEXH=dsTM_CODEXH";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_CODEXH.setFocus();

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsTM_CODEXH.insertRow(this.dsTM_CODEXH.rowposition + 1);
        	this.dsTM_CODEXH.setColumn(iRow, "ISET_YSNO", "0");
        	this.edtCOMM_CODE.setFocus();

        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) this.dsTM_CODEXH.deleteRow(this.dsTM_CODEXH.rowposition);
        	this.grdTM_CODEXH.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsTM_CODEXH");
        	this.grdTM_CODEXH.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTM_CODEXH=dsTM_CODEXH:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_CODEXH.setFocus();

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
        	// 기능없음.
        }

        /*--------------------------------------+
         |  10.최초 화면 UnLoad時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	 if(e.fromobject instanceof Div) return;
        	 var sMessage = this.fnc_FormUnloadCheck("dsTM_CODEXH", this);

        	 if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }
         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj, e);

        } 

        /*------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {

        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*------------------------------------+
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

        	if (this.fnc_DatasetChangeCheck("dsTM_CODEXH")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	return true;

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsTM_CODEXH") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	for (var i = 0; i < this.dsTM_CODEXH.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsTM_CODEXH.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_CODEXH.getColumn(i, "COMM_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "공통코드", this.dsTM_CODEXH, i, this.edtCOMM_CODE, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_CODEXH.getColumn(i, "SYST_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "시스템", this.dsTM_CODEXH, i, this.cmbSYST_CODE, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_CODEXH.getColumn(i, "COMM_CDNM"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "공통코드명", this.dsTM_CODEXH, i, this.edtCOMM_CDNM, "");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_CODEXH.getColumn(i, "CDGB_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "코드구분", this.dsTM_CODEXH, i, this.cmbCDGB_CODE, "");
        		}	

        		//제목에 따라 입력 형태 필수 체크
        		var sCompId = "";
        		for (var ri = 1; ri < 11 ; ri++) {
        	
        			sCompId = (ri < 10) ? "E" + ri : "" + ri;
        			
        			if (this.dsTM_CODEXH.getColumn(i, "R" + sCompId + "T_CODE") == "01") {

        				//입력형태가 공통코드[01]이면 공통코드 필수 체크
        				if (this.fnc_Length(this.dsTM_CODEXH.getColumn(i, "R" + sCompId + "F_CMCD")) < 1) {
        				
        					var sCOMM_CODE = this.dsTM_CODEXH.getColumn(i, "COMM_CODE");
        					var sCOMM_CDNM = this.dsTM_CODEXH.getColumn(i, "COMM_CDNM");
        					var sMess      = sCOMM_CODE + ":" + sCOMM_CDNM + "의 항목 " + ri + "의 입력형태가 공통코드이면 해당 공통코드";
        					return this.fnc_CheckPostAction("TMM072", sMess, this.dsTM_CODEXH, i, eval("this.edtR" + sCompId + "F_CMNM"), "");

        				}
        				
        			}
        		
        		}	
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (obj) {

        	if (this.dsTM_CODEXH.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	var sQuestionText = "(" + this.fnc_Trim(this.dsTM_CODEXH.getColumn(this.dsTM_CODEXH.rowposition, "COMM_CDNM")) + ") 공통코드";
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {

        		sReturnString  = " pgm=" 	   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " COMM_CDNM=" + this.fnc_Quote(this.edtSHRCOMM_CDNM.value); //공통코드명
        		sReturnString += " SYST_CODE=" + this.fnc_Quote(this.cmbSHRSYST_CODE.value); //시스템

        	} else if (sKind == "SAVE00") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

        	}

        	return sReturnString;

        }

        /*-------------------------------------+
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

        	if (sMethodName == "SEARCH00") {

        		this.fnc_Information(this.stInformation1, this.dsTM_CODEXH.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_CODEXH.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        	} else if (sMethodName == "SAVE00") {

        		this.fnc_Information(this.stInformation1, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_KeyFieldDisible_Head(this.dsTM_CODEXH);

        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        			arrParam[0]  = "COMBO,cmbSHRSYST_CODE,dsSHRSYST_CODE,0";
        			arrParam[1]  = "COMBO,cmbSYST_CODE,dsSYST_CODE,0";
        			arrParam[2]  = "GRID,grdTM_CODEXH,dsSYST_CODE,SYST_CODE";
        			arrParam[3]  = "COMBO,cmbCDGB_CODE,dsCDGB_CODE,0";
        			arrParam[4]  = "COMBO,cmbRE1T_CODE,dsREXT_CODE,0";
        			arrParam[5]  = "COMBO,cmbRE2T_CODE,dsREXT_CODE,0";
        			arrParam[6]  = "COMBO,cmbRE3T_CODE,dsREXT_CODE,0";
        			arrParam[7]  = "COMBO,cmbRE4T_CODE,dsREXT_CODE,0";
        			arrParam[8]  = "COMBO,cmbRE5T_CODE,dsREXT_CODE,0";
        			arrParam[9]  = "COMBO,cmbRE6T_CODE,dsREXT_CODE,0";
        			arrParam[10] = "COMBO,cmbRE7T_CODE,dsREXT_CODE,0";
        			arrParam[11] = "COMBO,cmbRE8T_CODE,dsREXT_CODE,0";
        			arrParam[12] = "COMBO,cmbRE9T_CODE,dsREXT_CODE,0";
        			arrParam[13] = "COMBO,cmbR10T_CODE,dsREXT_CODE,0";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	}

        }

        /*------------------------------------------+
         |  수정 시 Key Field Disibled 처리 - Head  |
         +------------------------------------------*/
        this.fn_KeyFieldDisible_Head = function (obj) {

        	var iRow    = obj.rowposition;
        	var sCompId = "";
        	var iFlag   = false;

        	if (this.fnc_ToUpper(obj.getRowType(iRow)) == Dataset.ROWTYPE_INSERT) {
        		this.edtCOMM_CODE.set_readonly(false);
        	} else {
        		this.edtCOMM_CODE.set_readonly(true);
        	}

        	for (var i = 1; i < 11 ; i++){

        		sCompId  = (i < 10) ? "E"+i : ""+i;

        		//제목이 Null이면 입력형태 ReadOnly
        		iFlag = (this.fnc_Length(obj.getColumn(iRow, "R" + sCompId + "F_DESC")) < 1) ? true : false;
        		eval("this.cmbR" + sCompId + "T_CODE").set_readonly(iFlag);

        		//입력형태가 공통코드[01]가 아니면 
        		iFlag = (obj.getColumn(iRow, "R" + sCompId + "T_CODE") != "01") ? true : false;
        		eval("this.edtR" + sCompId + "F_CMNM").set_readonly(iFlag);

        	}	

        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();
        	
        	if ((obj.name.substring(3,5) == "RE") || (obj.name.substring(3,5) == "R1")) {

        		var sRXXF_CMNM = "edt" + obj.id.substring(3,7) + "_CMNM";
        		var sRXXF_CMCD = "edt" + obj.id.substring(3,7) + "_CMCD"; 

        		arrParam[0] = "TMM1001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(eval("this."+sRXXF_CMNM).value);
        		arrParam[3] = "N";
        		arrParam[4] = sRXXF_CMNM;
        		arrParam[5] = sRXXF_CMCD + "," + sRXXF_CMNM;
        		arrParam[6] = "0,1";

        	} 

        	if (this.fnc_Length(arrParam) > 0) this.fnc_HelpDialogeAction(this, obj, arrParam);

        }

        /***************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                *
         ***************************************************************************************************/
        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                 *
         ***************************************************************************************************/

        /*-----------------------------+
         | 컬럼 값이 변경될 때 처리 |
         +-----------------------------*/
        this.dsTM_CODEXH_oncolumnchanged = function(obj,e) {	

        	if (!(e.columnid.substring(0,2) == "RE" || e.columnid.substring(0,2) == "R1")) return;

        	var sCompId = e.columnid.substring(1, 3);
        	var sColmId = e.columnid.substring(3, 9);
            var sFlag   = false;

        	if (sColmId == "F_DESC") {

        		//제목이 들어온 경우
        		sFlag = (obj.getColumn(obj.rowposition, "R" + sCompId + "F_DESC").length < 1) ? true : false;
        		eval("this.cmbR" + sCompId + "T_CODE").set_readonly(sFlag);

        		if (sFlag == false) return;
        		obj.setColumn(obj.rowposition, "R" + sCompId + "T_CODE", "");
        		obj.setColumn(obj.rowposition, "R" + sCompId + "F_CMCD", "");
        		obj.setColumn(obj.rowposition, "R" + sCompId + "F_CMNM", "");
        		eval("this.edtR" + sCompId + "F_CMCD").set_readonly(sFlag);
        		eval("this.edtR" + sCompId + "F_CMNM").set_readonly(sFlag);

        	} else if (sColmId == "T_CODE") {

        		//입력형태가 들어온 경우
        		sFlag = (obj.getColumn(obj.rowposition, "R" + sCompId + "T_CODE") != "01") ? true : false;
        		eval("this.edtR" + sCompId + "F_CMCD").set_readonly(sFlag);
        		eval("this.edtR" + sCompId + "F_CMNM").set_readonly(sFlag);				

        		if (sFlag == false) return;
        		obj.setColumn(obj.rowposition, "R" + sCompId + "F_CMCD", "");
        		obj.setColumn(obj.rowposition, "R" + sCompId + "F_CMNM", "");

        	}

        }

        /*******************************************************
        *  공통코드 DoubleClick 시 공통코드 세부 호출 처리 *
        ********************************************************/
        this.grdTM_CODEXH_oncelldblclick = function(obj,e) {

        	if (this.grdTM_CODEXH.getBindCellIndex("body","COMM_CODE") == e.col) {

        		var arrParam = new Array();  
        			arrParam[0] = this.dsTM_CODEXH.getColumn(this.dsTM_CODEXH.rowposition, "COMM_CODE");
        		this.fnc_OpenMenu("MTMMA0020", arrParam);

        	}

        }

        /*---------------------------------------------------------+
         |  편의상 공통코드/명 입력 후 EnterKey  시 조회 처리 |
         +---------------------------------------------------------*/
        this.edtSHRCOMM_CDNM_onkeydown = function(obj,e) {
        	
        	if (e.keycode != 13) return;
        	if (this.fnc_Length(this.fnc_Trim(obj.value)) > 0) this.fn_Search();

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_CODEXH.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible_Head, this);
            this.dsTM_CODEXH.addEventHandler("oncolumnchanged", this.dsTM_CODEXH_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.Static41.addEventHandler("onclick", this.Static12_onclick, this);
            this.edtSHRCOMM_CDNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCOMM_CDNM.addEventHandler("onkeydown", this.edtSHRCOMM_CDNM_onkeydown, this);
            this.cmbSHRSYST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static8.addEventHandler("onclick", this.Static8_onclick, this);
            this.grdTM_CODEXH.addEventHandler("oncelldblclick", this.grdTM_CODEXH_oncelldblclick, this);
            this.chkISET_YSNO.addEventHandler("onclick", this.chkSHRXXXX_XXXX0_onclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.Static12.addEventHandler("onclick", this.Static12_onclick, this);
            this.edtRE1F_CMCD.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgRE1F_CMNM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtRE1F_CMNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.Static87.addEventHandler("onclick", this.Static12_onclick, this);
            this.Static46.addEventHandler("onclick", this.Static12_onclick, this);
            this.Static51.addEventHandler("onclick", this.Static12_onclick, this);
            this.Static56.addEventHandler("onclick", this.Static12_onclick, this);
            this.Static61.addEventHandler("onclick", this.Static12_onclick, this);
            this.Static66.addEventHandler("onclick", this.Static12_onclick, this);
            this.Static71.addEventHandler("onclick", this.Static12_onclick, this);
            this.Static76.addEventHandler("onclick", this.Static12_onclick, this);
            this.Static81.addEventHandler("onclick", this.Static12_onclick, this);
            this.txtREMK_100X.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtRE2F_CMNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgRE2F_CMNM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtRE2F_CMCD.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtRE3F_CMNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgRE3F_CMNM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtRE3F_CMCD.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtRE4F_CMNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgRE4F_CMNM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtRE4F_CMCD.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtRE5F_CMNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtRE5F_CMNM.addEventHandler("oneditclick", this.edtRE5F_CMNM_oneditclick, this);
            this.imgRE5F_CMNM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtRE6F_CMNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgRE6F_CMNM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtRE7F_CMNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgRE7F_CMNM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtRE8F_CMNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgRE8F_CMNM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtRE9F_CMNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgRE9F_CMNM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtR10F_DESC.addEventHandler("oneditclick", this.edtR10F_DESC_oneditclick, this);
            this.edtR10F_CMNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgR10F_CMNM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtRE5F_CMCD.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtRE6F_CMCD.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtRE7F_CMCD.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtRE8F_CMCD.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtRE9F_CMCD.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtR10F_CMCD.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("TMMA0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
