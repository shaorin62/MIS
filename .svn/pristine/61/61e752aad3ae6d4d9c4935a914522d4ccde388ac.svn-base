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
                this.set_name("TMMA0050");
                this.set_titletext("공통팝업관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_POPUPH", this);
            obj._setContents("<ColumnInfo><Column id=\"POPP_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"POPP_NAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"POPP_CNTT\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"OWNE_NAME\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"AULU_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"CDRI_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"SERS_GRDC\" size=\"3000\" prop=\"default\" type=\"STRING\"/><Column id=\"SECH_SYNX\" size=\"1000\" prop=\"default\" type=\"STRING\"/><Column id=\"FROM_SYNT\" size=\"1000\" prop=\"default\" type=\"STRING\"/><Column id=\"WHRE_SYNT\" size=\"1000\" prop=\"default\" type=\"STRING\"/><Column id=\"WHRE_ADDX\" size=\"1000\" prop=\"default\" type=\"STRING\"/><Column id=\"USYN_SYNX\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDT_SQLC\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SORT_SYNX\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SECN_CBCT\" size=\"3000\" prop=\"default\" type=\"STRING\"/><Column id=\"POPP_SIZW\" type=\"STRING\" size=\"256\"/><Column id=\"POPP_SIZH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Shape1", "absolute", "340", "138", null, null, "25", "15", this);
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "9", "117", "240", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("22");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_POPUPH", "absolute", "8", "138", "312", null, null, "15", this);
            obj.set_binddataset("dsTM_POPUPH");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("37");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"95\"/><Column size=\"203\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"팝업코드\"/><Cell col=\"1\" displaytype=\"text\" text=\"팝업명\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"bind:POPP_CODE\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:POPP_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "359", "147", "95", "21", null, null, this);
            obj.set_text("팝업코드");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPOPP_CODE", "absolute", "455", "147", "160", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_POPUPH");
            obj.set_lengthunit("utf16");
            obj.set_imemode("none");
            obj.set_maxlength("0");
            obj.set_taborder("0");
            obj.set_inputmode("normal");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "666", "147", "100", "21", null, null, this);
            obj.set_text("팝업타이틀");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPOPP_NAME", "absolute", "759", "147", null, "21", "46", null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_POPUPH");
            obj.set_taborder("1");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "359", "173", "95", "21", null, null, this);
            obj.set_text("팝업정보");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPOPP_CNTT", "absolute", "455", "173", null, "21", "46", null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_POPUPH");
            obj.set_maxlength("0");
            obj.set_taborder("2");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static7", "absolute", "359", "199", "95", "21", null, null, this);
            obj.set_text("소유자");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "666", "199", "100", "21", null, null, this);
            obj.set_text("선택사항");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "359", "225", "95", "21", null, null, this);
            obj.set_text("그리드설정");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtSERS_GRDC", "absolute", "455", "225", null, "85", "46", null, this);
            obj.getSetter("binddataset").set("dsTM_POPUPH");
            obj.set_maxlength("0");
            obj.set_taborder("6");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "359", null, "95", "21", null, "115", this);
            obj.set_text("조건콤보설정");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("33");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "359", null, "95", "21", null, "141", this);
            obj.set_text("정렬구문");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "359", null, "95", "21", null, "188", this);
            obj.set_text("추가구문");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "359", null, "95", "21", null, "214", this);
            obj.set_text("사용여부구문");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtUSYN_SYNX", "absolute", "455", null, null, "21", "46", "214", this);
            obj.getSetter("binddataset").set("dsTM_POPUPH");
            obj.set_taborder("11");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "359", null, "95", "21", null, "261", this);
            obj.set_text("추가조건구문");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtWHRE_ADDX", "absolute", "455", null, null, "42", "46", "240", this);
            obj.getSetter("binddataset").set("dsTM_POPUPH");
            obj.set_taborder("10");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtFROM_SYNT", "absolute", "455", null, null, "42", "46", "334", this);
            obj.getSetter("binddataset").set("dsTM_POPUPH");
            obj.set_taborder("8");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "359", null, "95", "21", null, "355", this);
            obj.set_text("테이블 구문");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtSECH_SYNX", "absolute", "455", "315", null, null, "46", "381", this);
            obj.getSetter("binddataset").set("dsTM_POPUPH");
            obj.set_taborder("7");
            obj.set_cssclass("styFormItemText");
            obj.set_maxlength("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "359", "315", "95", "21", null, null, this);
            obj.set_text("선택구문");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtWHRE_SYNT", "absolute", "455", null, null, "42", "46", "287", this);
            obj.getSetter("binddataset").set("dsTM_POPUPH");
            obj.set_taborder("9");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "359", null, "95", "21", null, "308", this);
            obj.set_text("조건구문");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtSECN_CBCT", "absolute", "455", null, null, "86", "46", "50", this);
            obj.getSetter("binddataset").set("dsTM_POPUPH");
            obj.set_taborder("14");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTEST_CODE", "absolute", "455", null, "60", "21", null, "24", this);
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.set_taborder("15");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTEST_NAME", "absolute", "641", null, "72", "21", null, "24", this);
            obj.set_autoselect("true");
            obj.set_taborder("16");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTEST_GUBN", "absolute", "805", null, "88", "21", null, "24", this);
            obj.set_autoselect("true");
            obj.set_taborder("17");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "359", null, "95", "21", null, "24", this);
            obj.set_text("팝업테스트");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "724", null, "78", "21", null, "24", this);
            obj.set_taborder("38");
            obj.set_text("조회조건값");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpTEST_CODE", "absolute", "517", null, "21", "21", null, "24", this);
            obj.set_taborder("39");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("40");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle6", "absolute", "27", "71", "90", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_text("팝업코드/명");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRPOPP_NAME", "absolute", "115", "71", "200", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOWNE_NAME", "absolute", "455", "199", "160", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_POPUPH");
            obj.set_maxlength("0");
            obj.set_taborder("3");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkAULU_YSNO", "absolute", "776", "199", "120", "21", null, null, this);
            obj.getSetter("binddataset").set("dsTM_POPUPH");
            obj.set_falsevalue("0");
            obj.set_taborder("4");
            obj.set_text("자동조회 처리여부");
            obj.set_truevalue("1");
            obj.set_value("false");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkCDRI_YSNO", "absolute", "928", "199", "150", "21", null, null, this);
            obj.getSetter("binddataset").set("dsTM_POPUPH");
            obj.set_falsevalue("0");
            obj.set_taborder("5");
            obj.set_text("조회조건 필수입력여부");
            obj.set_truevalue("1");
            obj.set_value("false");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtADDT_SQLC", "absolute", "455", null, null, "42", "46", "167", this);
            obj.getSetter("binddataset").set("dsTM_POPUPH");
            obj.set_taborder("12");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtSORT_SYNX", "absolute", "455", null, null, "21", "46", "141", this);
            obj.getSetter("binddataset").set("dsTM_POPUPH");
            obj.set_taborder("13");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("43");
            obj.set_text("공통팝업관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("44");
            obj.set_text("홈 > 공통관리 > 공통관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("45");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("46");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("50");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "35", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("52");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1141", "150", "20", "109", null, null, this);
            obj.set_taborder("53");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("54");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "320", "173", "20", "41", null, null, this);
            obj.set_taborder("55");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "341", "150", "30", "41", null, null, this);
            obj.set_taborder("56");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "8", "132", "216", "6", null, null, this);
            obj.set_taborder("57");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("58");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "548", null, "90", "21", null, "24", this);
            obj.set_taborder("59");
            obj.set_text("팝업미리보기");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Button("btnGridRowCopy0", "absolute", "258", "113", "62", "21", null, null, this);
            obj.set_taborder("60");
            obj.set_text("행복사");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskPOPP_SIZW", "absolute", "946", null, "72", "21", null, "24", this);
            obj.set_taborder("18");
            obj.set_tabstop("true");
            obj.set_mask("+###,###");
            obj.style.set_align("right middle");
            obj.style.setStyleValue("background", "readonly", "#ffffffff");
            obj.style.setStyleValue("border", "readonly", "1 solid #bbbbbbff");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "905", null, "38", "21", null, "24", this);
            obj.set_taborder("61");
            obj.set_text("너비");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "1027", null, "38", "21", null, "24", this);
            obj.set_taborder("62");
            obj.set_text("높이");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskPOPP_SIZH", "absolute", "1069", null, "72", "21", null, "24", this);
            obj.set_taborder("19");
            obj.set_readonly("false");
            obj.set_mask("+###,###");
            obj.style.set_align("right middle");
            obj.style.setStyleValue("background", "readonly", "#ffffffff");
            obj.style.setStyleValue("border", "readonly", "1 solid #bbbbbbff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("공통팝업관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtPOPP_CODE_value","edtPOPP_CODE","value","dsTM_POPUPH","POPP_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPOPP_NAME_value","edtPOPP_NAME","value","dsTM_POPUPH","POPP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPOPP_CNTT_value","edtPOPP_CNTT","value","dsTM_POPUPH","POPP_CNTT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtOWNE_NAME_value","edtOWNE_NAME","value","dsTM_POPUPH","OWNE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkAULU_YSNO_value","chkAULU_YSNO","value","dsTM_POPUPH","AULU_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkCDRI_YSNO_value","chkCDRI_YSNO","value","dsTM_POPUPH","CDRI_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtSERS_GRDC_value","txtSERS_GRDC","value","dsTM_POPUPH","SERS_GRDC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtSORT_SYNX_value","txtSORT_SYNX","value","dsTM_POPUPH","SORT_SYNX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtADDT_SQLC_value","txtADDT_SQLC","value","dsTM_POPUPH","ADDT_SQLC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtSECH_SYNX_value","txtSECH_SYNX","value","dsTM_POPUPH","SECH_SYNX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtWHRE_ADDX_value","txtWHRE_ADDX","value","dsTM_POPUPH","WHRE_ADDX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtFROM_SYNT_value","txtFROM_SYNT","value","dsTM_POPUPH","FROM_SYNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtUSYN_SYNX_value","txtUSYN_SYNX","value","dsTM_POPUPH","USYN_SYNX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtWHRE_SYNT_value","txtWHRE_SYNT","value","dsTM_POPUPH","WHRE_SYNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtSECN_CBCT_value","txtSECN_CBCT","value","dsTM_POPUPH","SECN_CBCT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","mskPOPP_SIZH","value","dsTM_POPUPH","POPP_SIZH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","mskPOPP_SIZW","value","dsTM_POPUPH","POPP_SIZW");
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
        this.addIncludeScript("TMMA0050.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMA0050.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMA0050 공통팝업 관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.26		김준수		주석 수정.
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

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF";  //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "TMMA0050";

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
        	this.fnc_DatasetClear('dsTM_POPUPH'); 

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTM_POPUPH=dsTM_POPUPH";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_POPUPH.setFocus();
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsTM_POPUPH.addRow();
        	this.dsTM_POPUPH.setColumn(iRow, "AULU_YSNO", '1'); //자동조회 여부
        	this.dsTM_POPUPH.setColumn(iRow, "CDRI_YSNO", '0'); //필수입력 여부
        	this.edtPOPP_CODE.setFocus();

        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) {
        		this.dsTM_POPUPH.deleteRow(this.dsTM_POPUPH.rowposition);
        	}
        	this.grdTM_POPUPH.setFocus();
        	
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsTM_POPUPH");
        	this.grdTM_POPUPH.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsTM_POPUPH=dsTM_POPUPH:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_POPUPH.setFocus();
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
        	var sMessage = this.fnc_FormUnloadCheck("dsTM_POPUPH", this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        } 
         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj,e);
        	
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

        	if (this.fnc_DatasetChangeCheck('dsTM_POPUPH')) {
        		return this.fnc_Message("TMM023");
        	}

        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsTM_POPUPH.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	var sQuestionText = this.dsTM_POPUPH.getColumn(this.dsTM_POPUPH.rowposition, "POPP_NAME");
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTM_POPUPH")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTM_POPUPH.getRowCount(); i++) {
        	
        		if (this.dsTM_POPUPH.getRowType(i) == Dataset.ROWTYPE_NORMAL)	{	continue;	}	
        	
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_POPUPH.getColumn(i, "POPP_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "팝업코드", this.dsTM_POPUPH, i, this.edtPOPP_CODE, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_POPUPH.getColumn(i, "POPP_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "팝업타이틀", this.dsTM_POPUPH, i, this.edtPOPP_NAME, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_POPUPH.getColumn(i, "POPP_CNTT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "팝업정보", this.dsTM_POPUPH, i, this.edtPOPP_CNTT, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_POPUPH.getColumn(i, "SERS_GRDC"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "그리드설정", this.dsTM_POPUPH, i, this.txtSERS_GRDC, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_POPUPH.getColumn(i, "SECH_SYNX"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "선택구문", this.dsTM_POPUPH, i, this.txtSECH_SYNX, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_POPUPH.getColumn(i, "FROM_SYNT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "테이블구문", this.dsTM_POPUPH, i, this.txtFROM_SYNT, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_POPUPH.getColumn(i, "WHRE_SYNT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "조건구문", this.dsTM_POPUPH, i, this.txtWHRE_SYNT, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_POPUPH.getColumn(i, "SECN_CBCT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "조건콤보설정", this.dsTM_POPUPH, i, this.txtSECN_CBCT, "");
        		}
        		
        	}

        	return true;
        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == 'SEARCH00') {
        	
        		sReturnString  = " pgm="	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " POPP_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRPOPP_NAME.value)); //팝업코드명	

        	} else if (sKind == 'SAVE00') {
        	
        		sReturnString  = " pgm="    + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        	
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

        	if (sMethodName == 'SEARCH00') {
        	
        		this.fnc_Information(this.stInformation, this.dsTM_POPUPH.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_POPUPH.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == 'SAVE00') {
        	
        		this.fn_KeyFieldDisible(this.dsTM_POPUPH);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        	
        	}
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	this.edtTEST_GUBN.set_value("");
        	this.edtTEST_CODE.set_value("");
        	this.edtTEST_NAME.set_value("");

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        	
        		this.edtPOPP_CODE.set_readonly(false);
        	
        	} else {
        	
        		this.edtPOPP_CODE.set_readonly(true);
        	
        	}
        }

        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        /*---------------+
         |  행 복사 처리 |
         +---------------*/
        this.fn_CopyRow = function (obj,e) {

        	if (this.dsTM_POPUPH.getRowCount() < 1) {
        		this.fnc_Message("BC1013", "복사");
        		return;
        	}

        	var iCopyRow = this.dsTM_POPUPH.rowposition;
        	var iRow = this.dsTM_POPUPH.insertRow(iCopyRow + 1);

        	this.dsTM_POPUPH.copyRow(iRow, this.dsTM_POPUPH, iCopyRow);
        	this.dsTM_POPUPH.setColumn(iRow, "POPP_CODE", "");
        	this.edtPOPP_CODE.setFocus();
        	
        }

        /*------------+
         | 팝업테스트 |
         +------------*/
        this.btnOpenPopupTest = function (obj,e) {

        	if (this.fnc_Length(this.fnc_Trim(this.edtPOPP_CODE.value)) < 1) return;
        	
        	var arrParam = new Array();

        	arrParam[0] = this.edtPOPP_CODE.value; 				  //Popup ID
        	arrParam[1] = this.edtTEST_GUBN.value; 				  //팝업 조건구분에 대응되는 조회조건(?,?)
        	arrParam[2] = this.fnc_Trim(this.edtTEST_NAME.value); //팝업 추가조건구분에 대응되는 조회 조건(사용자 검색어)
        	arrParam[3] = 'N'; 									  //사용 여부 구문 포함 여부(Y/N)
        	arrParam[4] = 'edtTEST_NAME'; 						  //현재 포커스 Componect명(명칭or그리드)
        	arrParam[5] = 'edtTEST_CODE,edtTEST_NAME'; 			  //초기화 및 결과 Mapping Component ID(,)
        	arrParam[6] = '0,1'; 								  //초기화 및 결과 Mapping Query Column Index(,)

        	this.fnc_HelpDialogeAction(this, obj, arrParam); 	   //팝업 호출
        }

        this.edtSHRCOMM_CDNM_onkeydown = function(obj,e) {
        	
        	if (e.keycode != 13) return;
        	if (this.fnc_Length(this.fnc_Trim(obj.value)) > 0) this.fn_Search();
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_POPUPH.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtPOPP_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPOPP_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPOPP_CNTT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.txtSERS_GRDC.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.txtUSYN_SYNX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.txtWHRE_ADDX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.txtFROM_SYNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.txtSECH_SYNX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.txtWHRE_SYNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.txtSECN_CBCT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtTEST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtTEST_NAME.addEventHandler("onkillfocus", this.btnOpenPopupTest, this);
            this.edtTEST_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpTEST_CODE.addEventHandler("onclick", this.btnOpenPopupTest, this);
            this.edtSHRPOPP_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRPOPP_NAME.addEventHandler("onkeydown", this.edtSHRCOMM_CDNM_onkeydown, this);
            this.edtOWNE_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.txtADDT_SQLC.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.txtSORT_SYNX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.btnGridRowCopy0.addEventHandler("onclick", this.fn_CopyRow, this);
            this.mskPOPP_SIZW.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskPOPP_SIZH.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TMMA0050.xfdl");
        this.loadPreloadList();
       
    };
}
)();
