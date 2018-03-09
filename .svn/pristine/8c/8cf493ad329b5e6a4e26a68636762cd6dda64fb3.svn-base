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
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_CODEXH", this);
            obj._setContents("<ColumnInfo><Column id=\"COMM_CODE\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"COMM_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"COMM_ENNM\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"SYST_CODE\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"UPER_CODE\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_LENG\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REFR_NAM1\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"REFR_NAM2\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"REFR_NAM3\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"REFR_NAM4\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"REFR_NAM5\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"REFR_NAM6\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"OLDX_CODE\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"OWNE_NAME\" size=\"20\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_CODEXD", this);
            obj._setContents("<ColumnInfo><Column id=\"COMM_CODE\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"COMD_CODE\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"COMD_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"COMD_ENNM\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"REFR_FLD1\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"REFR_FLD2\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"REFR_FLD3\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"REFR_FLD4\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"REFR_FLD5\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"REFR_FLD6\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SORT_ORDR\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"USIG_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsSHRSYST_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">SYST_CODE</Col><Col id=\"DSNAME\">dsSYST_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Shape3", "absolute", "504", null, null, "177", "8", "8", this);
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new Static("Shape2", "absolute", "506", null, null, "173", "10", "10", this);
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_taborder("30");
            this.addChild(obj.name, obj);

            obj = new Static("Shape1", "absolute", "8", null, "487", "257", null, "8", this);
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Static("Shape0", "absolute", "10", null, "483", "253", null, "10", this);
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "604", null, null, "25", "12", "132", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("33");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOMD_NAME", "absolute", "606", null, null, "21", "13", "134", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_taborder("19");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "8", "109", "240", "23", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation2", "absolute", "504", "109", "240", "23", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRowHead", "absolute", "358", "107", "68", "23", null, null, this);
            obj.set_taborder("91");
            obj.set_cssclass("styCommBtnAddRow");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRowSub", "absolute", null, "107", "68", "23", "78", null, this);
            obj.set_taborder("94");
            obj.set_cssclass("styCommBtnAddRow");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRowSub", "absolute", null, "107", "68", "23", "8", null, this);
            obj.set_taborder("95");
            obj.set_cssclass("styCommBtnDeleteRow");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRowHead", "absolute", "428", "107", "68", "23", null, null, this);
            obj.set_taborder("92");
            obj.set_cssclass("styCommBtnDeleteRow");
            this.addChild(obj.name, obj);

            obj = new Static("imgFormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("공통코드관리");
            obj.style.set_align("left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Static("staLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_text("공통관리>공통관리");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            obj.set_taborder("41");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "31", "573", "27", null, null, this);
            obj.set_taborder("98");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "455", "27", "8", null, this);
            obj.set_taborder("2");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_url("common::comButtonType01.xfdl");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "38", "8", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("43");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "16", "68", "84", "22", null, null, this);
            obj.set_text("공통코드/명");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("44");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle1", "absolute", "500", "68", "52", "22", null, null, this);
            obj.set_text("시스템");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCOMM_NAME", "absolute", "106", "68", "281", "22", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSYST_CODE", "absolute", "553", "68", "149", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_imemode("none");
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("staXxxx0", "absolute", "12", null, "97", "25", null, "236", this);
            obj.set_text("공통코드");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("48");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx1", "absolute", "12", null, "97", "25", null, "212", this);
            obj.set_text("공통코드명");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("49");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx3", "absolute", "108", null, "143", "25", null, "236", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("50");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOMM_CODE", "absolute", "110", null, "139", "21", null, "238", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_lengthunit("ascii");
            obj.set_imemode("alpha");
            obj.set_maxlength("15");
            obj.set_taborder("3");
            obj.set_inputmode("upper");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx2", "absolute", "108", null, "383", "25", null, "212", this);
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "250", null, "101", "25", null, "236", this);
            obj.set_text("시스템");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("53");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "350", null, "141", "25", null, "236", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOMM_NAME", "absolute", "110", null, "380", "21", null, "214", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_taborder("5");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "12", null, "97", "25", null, "188", this);
            obj.set_text("영문명");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("56");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "108", null, "383", "25", null, "188", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("57");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOMM_ENNM", "absolute", "110", null, "380", "21", null, "190", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_lengthunit("ascii");
            obj.set_imemode("alpha");
            obj.set_maxlength("50");
            obj.set_taborder("6");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "12", null, "97", "25", null, "164", this);
            obj.set_text("상위코드");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("59");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "108", null, "143", "25", null, "164", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("60");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUPER_CODE", "absolute", "110", null, "139", "21", null, "166", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_lengthunit("ascii");
            obj.set_imemode("alpha");
            obj.set_maxlength("15");
            obj.set_taborder("7");
            obj.set_cssclass("styFormItemText");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Static("Static6", "absolute", "250", null, "101", "25", null, "164", this);
            obj.set_text("세부코드길이");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("62");
            this.addChild(obj.name, obj);

            obj = new Static("Static7", "absolute", "350", null, "141", "25", null, "164", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("63");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "12", null, "97", "25", null, "140", this);
            obj.set_text("소유자");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("64");
            this.addChild(obj.name, obj);

            obj = new Static("Static9", "absolute", "108", null, "143", "25", null, "140", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("65");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOWNE_NAME", "absolute", "110", null, "139", "21", null, "142", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_taborder("9");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "508", null, "96", "25", null, "156", this);
            obj.set_text("세부코드");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("67");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "508", null, "96", "25", null, "132", this);
            obj.set_text("세부코드명");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("68");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "604", null, "143", "25", null, "156", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("69");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOMD_CODE", "absolute", "606", null, "139", "21", null, "158", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            obj.set_lengthunit("ascii");
            obj.set_imemode("alpha");
            obj.set_maxlength("15");
            obj.set_taborder("18");
            obj.set_cssclass("styFormItemText");
            obj.set_inputmode("normal");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "508", null, "96", "25", null, "108", this);
            obj.set_text("세부영문명");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("71");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "604", null, null, "25", "12", "108", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("72");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOMD_ENNM", "absolute", "606", null, null, "21", "13", "110", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            obj.set_lengthunit("ascii");
            obj.set_imemode("alpha");
            obj.set_maxlength("100");
            obj.set_taborder("20");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("stREFR_FLD1", "absolute", "508", null, "96", "25", null, "84", this);
            obj.set_text("보조필드 1");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("74");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "604", null, "168", "25", null, "84", this);
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("75");
            this.addChild(obj.name, obj);

            obj = new Edit("edtREFR_FLD1", "absolute", "606", null, "164", "21", null, "86", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_taborder("21");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "871", null, null, "25", "12", "84", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("78");
            this.addChild(obj.name, obj);

            obj = new Edit("edtREFR_FLD2", "absolute", "873", null, null, "21", "13", "86", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_taborder("22");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("stREFR_FLD3", "absolute", "508", null, "96", "25", null, "60", this);
            obj.set_text("보조필드 3");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("80");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "604", null, "168", "25", null, "60", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("81");
            this.addChild(obj.name, obj);

            obj = new Edit("REFR_FLD3", "absolute", "606", null, "164", "21", null, "62", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_taborder("23");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "871", null, null, "25", "12", "60", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("84");
            this.addChild(obj.name, obj);

            obj = new Edit("edtREFR_FLD4", "absolute", "873", null, null, "21", "13", "62", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_taborder("24");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("stREFR_FLD5", "absolute", "508", null, "96", "25", null, "36", this);
            obj.set_text("보조필드 5");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("86");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "604", null, "168", "25", null, "36", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("87");
            this.addChild(obj.name, obj);

            obj = new Edit("edtREFR_FLD5", "absolute", "606", null, "164", "21", null, "38", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_taborder("25");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "871", null, null, "25", "12", "36", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("90");
            this.addChild(obj.name, obj);

            obj = new Edit("edtREFR_FLD6", "absolute", "873", null, null, "21", "13", "38", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_taborder("26");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "508", null, "96", "25", null, "12", this);
            obj.set_text("정렬순서");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("37");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "604", null, "168", "25", null, "12", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("38");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "771", null, "100", "25", null, "12", this);
            obj.set_text("사용여부");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("39");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "871", null, null, "25", "12", "12", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSHRXXXX_XXXX0", "absolute", "872", null, null, "21", "17", "15", this);
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            obj.set_falsevalue("0");
            obj.set_taborder("97");
            obj.set_truevalue("1");
            obj.set_value("false");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Combo("cobSYST_CODE", "absolute", "351", null, "139", "21", null, "239", this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_codecolumn("COMD_CODE");
            obj.set_datacolumn("COMD_NAME");
            obj.set_type("dropdown");
            obj.set_taborder("4");
            obj.set_cssclass("styFormItemCombo");
            obj.set_index("-1");

            obj = new MaskEdit("mskCODE_LENG", "absolute", "352", null, "138", "21", null, "166", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_taborder("8");
            obj.set_value("madXXXX_XXXX0");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSORT_ORDR", "absolute", "606", null, "164", "21", null, "14", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            obj.set_lengthunit("ascii");
            obj.set_imemode("english");
            obj.set_maxlength("15");
            obj.set_inputtype("number");
            obj.set_taborder("27");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "250", null, "101", "25", null, "140", this);
            obj.set_text("구(기존) 코드");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("55");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "350", null, "141", "25", null, "140", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("58");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOLDX_CODE", "absolute", "352", null, "138", "21", null, "142", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_lengthunit("ascii");
            obj.set_imemode("alpha");
            obj.set_maxlength("15");
            obj.set_taborder("10");
            obj.set_inputmode("upper");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "12", null, "97", "57", null, "12", this);
            obj.set_text("비고");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("66");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "108", null, "383", "57", null, "12", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("70");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_CODEXH", "absolute", "8", "132", "488", null, null, "273", this);
            obj.set_binddataset("dsTM_CODEXH");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("93");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"83\"/><Column size=\"160\"/><Column size=\"147\"/><Column size=\"78\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"공통코드\"/><Cell col=\"1\" displaytype=\"text\" text=\"공통코드명\"/><Cell col=\"2\" displaytype=\"text\" text=\"영문명\"/><Cell col=\"3\" displaytype=\"text\" text=\"시스템\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"bind:COMM_CODE\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:COMM_NAME\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;\" text=\"bind:COMM_ENNM\"/><Cell col=\"3\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:SYST_CODE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_CODEXD", "absolute", "504", "132", null, null, "8", "193", this);
            obj.set_binddataset("dsTM_CODEXD");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_cellsizebandtype("allband");
            obj.set_selecttype("row");
            obj.set_taborder("96");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"65\" band=\"left\"/><Column size=\"150\" band=\"left\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"세부코드\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;\" text=\"세부필드명\"/><Cell col=\"2\" displaytype=\"text\" text=\"영문명\"/><Cell col=\"3\" displaytype=\"text\" text=\"정렬\"/><Cell col=\"4\" displaytype=\"text\" text=\"사용\"/><Cell col=\"5\" displaytype=\"text\" text=\"보조필드 1\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:center;\" text=\"보조필드 2\"/><Cell col=\"7\" displaytype=\"text\" text=\"보조필드 3\"/><Cell col=\"8\" displaytype=\"text\" text=\"보조필드 4\"/><Cell col=\"9\" displaytype=\"text\" text=\"보조필드 5\"/><Cell col=\"10\" displaytype=\"text\" text=\"보조필드 6\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left middle;\" text=\"bind:COMD_CODE\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left middle;\" text=\"bind:COMD_NAME\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left middle;\" text=\"bind:COMD_ENNM\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SORT_ORDR\"/><Cell col=\"4\" displaytype=\"checkbox\" style=\"align:center;\" text=\"bind:USIG_YSNO\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:left middle;\" text=\"bind:REFR_FLD1\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:left middle;\" text=\"bind:REFR_FLD2\"/><Cell col=\"7\" displaytype=\"text\" style=\"align:left middle;\" text=\"bind:REFR_FLD3\"/><Cell col=\"8\" displaytype=\"text\" style=\"align:left middle;\" text=\"bind:REFR_FLD4\"/><Cell col=\"9\" displaytype=\"text\" style=\"align:left middle;\" text=\"bind:REFR_FLD5\"/><Cell col=\"10\" displaytype=\"text\" style=\"align:left middle;\" text=\"bind:REFR_FLD6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtDESC_REMK", "absolute", "110", null, "380", "53", null, "14", this);
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("1000");
            obj.set_taborder("17");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "108", null, "143", "25", null, "116", this);
            obj.getSetter("binddataset").set("dsTM_CODEXD");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("85");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit0", "absolute", "110", null, "139", "21", null, "118", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_taborder("11");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "350", null, "141", "25", null, "116", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("42");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit1", "absolute", "352", null, "138", "21", null, "118", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_taborder("12");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "108", null, "143", "25", null, "92", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("51");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit2", "absolute", "110", null, "139", "21", null, "94", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_taborder("13");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "350", null, "141", "25", null, "92", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("76");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit3", "absolute", "352", null, "138", "21", null, "94", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_taborder("14");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "108", null, "143", "25", null, "68", this);
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("46");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit4", "absolute", "110", null, "139", "21", null, "70", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_taborder("15");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "350", null, "141", "25", null, "68", this);
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemEntity");
            obj.set_taborder("61");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit5", "absolute", "352", null, "138", "21", null, "70", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_CODEXH");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_taborder("16");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "8", "98", null, "3", "8", null, this);
            obj.set_taborder("99");
            obj.set_cssclass("sytSearchBoxShadow");
            obj.style.set_background("#ffffff00 URL('theme://imagesInbus/imgSearchShadow.png') stretch");
            this.addChild(obj.name, obj);

            obj = new Static("stREFR_FLD6", "absolute", "771", null, "100", "25", null, "36", this);
            obj.set_text("보조필드 6");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("89");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "12", null, "96", "25", null, "116", this);
            obj.set_text("보조필드명 1");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("82");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "250", null, "100", "25", null, "116", this);
            obj.set_text("보조필드명 2");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "12", null, "96", "25", null, "92", this);
            obj.set_text("보조필드명 3");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("47");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "250", null, "100", "25", null, "92", this);
            obj.set_text("보조필드명 4");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("73");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "12", null, "96", "25", null, "68", this);
            obj.set_text("보조필드명 5");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("88");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "250", null, "100", "25", null, "68", this);
            obj.set_text("보조필드명 6");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("79");
            this.addChild(obj.name, obj);

            obj = new Static("stREFR_FLD2", "absolute", "771", null, "100", "25", null, "84", this);
            obj.set_text("보조필드 2");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("77");
            this.addChild(obj.name, obj);

            obj = new Static("stREFR_FLD4", "absolute", "771", null, "100", "25", null, "60", this);
            obj.set_text("보조필드 4");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("83");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("공통코드관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtCOMD_NAME_value","edtCOMD_NAME","value","dsTM_CODEXD","COMD_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCOMM_CODE_value","edtCOMM_CODE","value","dsTM_CODEXH","COMM_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("staXxxx2_value","staXxxx2","value","dsTM_CODEXH","COMM_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCOMM_NAME_value","edtCOMM_NAME","value","dsTM_CODEXH","COMM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCOMM_ENNM_value","edtCOMM_ENNM","value","dsTM_CODEXH","COMM_ENNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtUPER_CODE_value","edtUPER_CODE","value","dsTM_CODEXH","UPER_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtOWNE_NAME_value","edtOWNE_NAME","value","dsTM_CODEXH","OWNE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCOMD_CODE_value","edtCOMD_CODE","value","dsTM_CODEXD","COMD_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCOMD_ENNM_value","edtCOMD_ENNM","value","dsTM_CODEXD","COMD_ENNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static19_value","Static19","value","dsTM_CODEXD","COMD_ENNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtREFR_FLD1_value","edtREFR_FLD1","value","dsTM_CODEXD","REFR_FLD1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtREFR_FLD2_value","edtREFR_FLD2","value","dsTM_CODEXD","REFR_FLD2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("REFR_FLD3_value","REFR_FLD3","value","dsTM_CODEXD","REFR_FLD3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtREFR_FLD4_value","edtREFR_FLD4","value","dsTM_CODEXD","REFR_FLD4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtREFR_FLD5_value","edtREFR_FLD5","value","dsTM_CODEXD","REFR_FLD5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtREFR_FLD6_value","edtREFR_FLD6","value","dsTM_CODEXD","REFR_FLD6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("chkSHRXXXX_XXXX0_value","chkSHRXXXX_XXXX0","value","dsTM_CODEXD","USIG_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cobSYST_CODE_value","cobSYST_CODE","value","dsTM_CODEXH","SYST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskCODE_LENG_value","mskCODE_LENG","value","dsTM_CODEXH","CODE_LENG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSORT_ORDR_value","edtSORT_ORDR","value","dsTM_CODEXD","SORT_ORDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtOLDX_CODE_value","edtOLDX_CODE","value","dsTM_CODEXH","OLDX_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("txtDESC_REMK_value","txtDESC_REMK","value","dsTM_CODEXH","DESC_REMK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static37_value","Static37","value","dsTM_CODEXD","COMD_ENNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit0_value","Edit0","value","dsTM_CODEXH","REFR_NAM1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit1_value","Edit1","value","dsTM_CODEXH","REFR_NAM2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit2_value","Edit2","value","dsTM_CODEXH","REFR_NAM3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit3_value","Edit3","value","dsTM_CODEXH","REFR_NAM4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit4_value","Edit4","value","dsTM_CODEXH","REFR_NAM5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Static47_value","Static47","value","dsTM_CODEXH","REFR_NAM4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("Edit5_value","Edit5","value","dsTM_CODEXH","REFR_NAM6");
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
        this.addIncludeScript("TMMA0011.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMA0011.xfdl", function() {
        /****************************************************************************************************
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
        this.sBUTTONLIST  = "TTFFTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "TMMA0010"; //해당 Form에서 사용 할 Package 명

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
        	this.fnc_DatasetClear("dsTM_CODEXH,dsTM_CODEXD");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTM_CODEXH=dsTM_CODEXH";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_CODEXH.setFocus();
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능없음.
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능없음.
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsTM_CODEXH,dsTM_CODEXD");
        	this.grdTM_CODEXH.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsTM_CODEXH=dsTM_CODEXH:U dsTM_CODEXD=dsTM_CODEXD:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
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
        	 var sMessage = this.fnc_FormUnloadCheck("dsTM_CODEXH,dsTM_CODEXD", this);

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

        	if (this.fnc_DatasetChangeCheck('dsTM_CODEXH,dsTM_CODEXD')) {
        		if (this.fnc_Message("M1023") == false) return false;
        	}

        	return true;
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	// 공통 Head & 상세 변경 체크
        	if (this.fnc_DatasetChangeCheck("dsTM_CODEXH,dsTM_CODEXD") == false) {
        		this.fnc_Message("M1006");
        		return false;
        	}

        	// 공통 Head 정보 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTM_CODEXH.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsTM_CODEXH.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_CODEXH.getColumn(i, "COMM_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("M1005", "공통코드", this.dsTM_CODEXH, i, this.edtCOMM_CODE, '');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_CODEXH.getColumn(i, "SYST_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("M1005", "시스템", this.dsTM_CODEXH, i, this.cobSYST_CODE, '');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_CODEXH.getColumn(i, "COMM_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("M1005", "공통코드명", this.dsTM_CODEXH, i, this.edtCOMM_NAME, '');
        		}
        	}

        	// 공통 상세 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTM_CODEXD.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsTM_CODEXD.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_CODEXD.getColumn(i, "COMD_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("M1005", "세부코드", this.dsTM_CODEXD, i, this.edtCOMD_CODE, '');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_CODEXD.getColumn(i, "COMD_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("M1005", "세부코드명", this.dsTM_CODEXD, i, this.edtCOMD_NAME, '');
        		}
        	}

        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (obj) {

        	// 공통 Head 코드 삭제 처리
        	if (obj == "dsTM_CODEXH") {
        	
        		if (this.dsTM_CODEXH.getRowCount() < 1) {
        			this.fnc_Message("M1003");
        			return false;
        		}

        		if (this.dsTM_CODEXD.getRowCount() > 0) {
        			this.fnc_Message("M1046", "세부코드가 존재하는 공통코드는 삭제할 수 없습니다.");
        			return false;
        		}

        		var sQuestionText = "(" + this.fnc_Trim(this.dsTM_CODEXH.getColumn(this.dsTM_CODEXH.rowposition, "COMM_NAME")) + ") 공통코드";
        		return this.fnc_Message("M1004", sQuestionText);
        	
        	} else if (obj == "dsTM_CODEXD") {
        	
        		if (this.dsTM_CODEXD.getRowCount() < 1) {
        			this.fnc_Message("M1003");
        			return false;
        		}

        		var sQuestionText = "(" + this.fnc_Trim(this.dsTM_CODEXH.getColumn(this.dsTM_CODEXH.rowposition, "COMM_NAME")) + ") 공통코드의";
        		sQuestionText += " (" + this.fnc_Trim(this.dsTM_CODEXD.getColumn(this.dsTM_CODEXD.rowposition, "COMD_NAME")) + ") 세부항목코드 ";
        		return this.fnc_Message("M1004", sQuestionText);
        		
        	}
        	
        }

        /*------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 공통코드조회
        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm=" 			 + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		 + this.fnc_Quote(sKind);
        		sReturnString += " edtSHRCOMM_NAME=" + this.fnc_Quote(this.edtSHRCOMM_NAME.value); //공통코드명
        		sReturnString += " cmbSHRSYST_CODE=" + this.fnc_Quote(this.cmbSHRSYST_CODE.value); //시스템

        	// 공통세부코드
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm=" 			 + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		 + this.fnc_Quote(sKind);
        		sReturnString += " sCOMM_CODE=" 	 + this.fnc_Quote(this.dsTM_CODEXH.getColumn(this.dsTM_CODEXH.rowposition, "COMM_CODE")); //공통코드

        	// 공통코드 및 세부코드 저장
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm=" 			 + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		 + this.fnc_Quote(sKind);
        	
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
        		
        	} else if (sMethodName == "SEARCH01") {
        	
        		this.fnc_Information(this.stInformation2, this.dsTM_CODEXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	
        	} else if (sMethodName == "SAVE00") {
        	
        		this.fnc_Information(this.stInformation1, 0, "SAVE");
        		this.fnc_Information(this.stInformation2, 0, "SAVE");
        		this.fnc_Message("M1008");

        		this.fn_KeyFieldDisible_Head(this.dsTM_CODEXH);
        		this.fn_KeyFieldDisible_Sub(this.dsTM_CODEXD);
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRSYST_CODE,dsSHRSYST_CODE,0";
        		arrParam[1] = "COMBO,cobSYST_CODE,dsSYST_CODE,0";
        		arrParam[2] = "GRID,grdTM_CODEXH,dsSYST_CODE,SYST_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	}
        }

        /*------------------------------------------+
         |  수정 시 Key Field Disibled 처리 - Head  |
         +------------------------------------------*/
        this.fn_KeyFieldDisible_Head = function (obj) {

        	if (this.dsTM_CODEXH.getRowCount() < 1) return;
        	
        		this.fn_RefCaptionDisplay(obj, obj.rowposition);

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        	
        		this.edtCOMM_CODE.set_readonly(false);
        		this.fnc_DatasetClear("dsTM_CODEXD");
        	
        	} else {
        	
        		this.edtCOMM_CODE.set_readonly(true);
        		this.fnc_DatasetClear("dsTM_CODEXD");

        		var sMethodName = "SEARCH01";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsTM_CODEXD=dsTM_CODEXD";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	}
        }

        /*-------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible_Sub = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT)  {
        	
        		this.edtCOMD_CODE.set_readonly(false);
        	
        	} else {
        	
        		this.edtCOMD_CODE.set_readonly(true);
        	
        	}
        }

        /***************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        /*------------------+
         |  공통 코드 추가  |
         +------------------*/
        this.fn_AddRow = function (obj,e) {

        	// 공통 Head 코드 추가
        	if (obj.name == "btnAddRowHead") {
        	
        		var iRow = this.dsTM_CODEXH.addRow();
        		//this.dsTM_CODEXH.setColumn(iRow, "SYST_CODE", this.dsSYST_CODE.getColumn(0, "SUBCODE"));
        		this.dsTM_CODEXH.setColumn(iRow, "CODE_LENG", 4);
        		this.edtCOMM_CODE.setFocus();
        		this.fnc_DatasetClear("dsTM_CODEXD");

        	// 공통 Sub(세부) 코드 추가
        	} else if (obj.name == "btnAddRowSub") {
        	
        		var iRow = this.dsTM_CODEXD.addRow();
        		this.dsTM_CODEXD.setColumn(iRow, "COMM_CODE", this.dsTM_CODEXH.getColumn(this.dsTM_CODEXH.rowposition, "COMM_CODE"));
        		this.dsTM_CODEXD.setColumn(iRow, "USIG_YSNO", "1");
        		this.dsTM_CODEXD.setColumn(iRow, "SORT_ORDR", 0);
        		this.edtCOMD_CODE.setFocus();
        	
        	}
        }

        /*------------------+
         |  공통 코드 삭제  |
         +------------------*/
        this.fn_DeleteRow = function (obj,e) {

        	// 공통 Head 코드 삭제
        	if (obj.name == "btnDelRowHead") {
        	
        		if (this.fn_DeleteCheck("dsTM_CODEXH")) {
        			this.dsTM_CODEXH.deleteRow(this.dsTM_CODEXH.rowposition);
        		}
        		this.grdTM_CODEXH.setFocus();

        	// 공통 Sub(세부) 코드 추가
        	} else if (obj.name == "btnDelRowSub") {
        	
        		if (this.fn_DeleteCheck("dsTM_CODEXD")) {
        			this.dsTM_CODEXD.deleteRow(this.dsTM_CODEXD.rowposition);
        		}
        		this.grdTM_CODEXD.setFocus();
        	}
        }

        /*------------------------------------------------------------------+
         |  공통코드 및 세부 코드 변경 후 다른 Row 이동 체크(저장 후 이동)  |
         +------------------------------------------------------------------*/
        this.dsTM_CODEXH_CanRowPosChange = function (obj,e) {

        	if (e.newrow < 0 || e.oldrow < 0) return;

        	if (this.dsTM_CODEXH.getRowType(e.oldrow) == Dataset.ROWTYPE_NORMAL || this.dsTM_CODEXH.getRowType(e.oldrow) == Dataset.ROWTYPE_EMPTY) {
        		if (this.fnc_DatasetChangeCheck("dsTM_CODEXD") == false) return;
        	} else {
        		if (this.fnc_DatasetChangeCheck("dsTM_CODEXH,dsTM_CODEXD") == false) return;
        	}
        	
        	if (this.fnc_Message("M1023") == false) {
        		return false;
        	} else {
        		this.fnc_DataSetCancel("dsTM_CODEXH,dsTM_CODEXD");
        	}
        }

        /*-------------------------+
         |  보조필드 Caption 처리  |
         +-------------------------*/
        this.fn_RefCaptionDisplay = function (obj,nRow) {

        	var sTitle = "";
        	// 세부코드의 보조 필드 타이틀 수정 처리
        	for (var i = 1; i < 7; i++) {
        	
        		sTitle = this.fnc_Trim(this.dsTM_CODEXH.getColumn(nRow, "REFR_NAM" + i));

        		if (this.fnc_Length(sTitle) > 0) {
        		
        			eval("this.stREFR_FLD"+i+"").set_text(sTitle);
        			this.grdTM_CODEXD.setCellProperty("Head", this.fnc_GridColumnIndex(this.grdTM_CODEXD, "REFR_FLD" + i), "text", sTitle);
        		
        		} else {
        		
        			eval("this.stREFR_FLD"+i+"").set_text(("보조필드 " + i));
        			this.grdTM_CODEXD.setCellProperty("Head", this.fnc_GridColumnIndex(this.grdTM_CODEXD, "REFR_FLD" + i), "text", "보조필드 " + i);
        		
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_CODEXH.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible_Head, this);
            this.dsTM_CODEXH.addEventHandler("canrowposchange", this.dsTM_CODEXH_CanRowPosChange, this);
            this.dsTM_CODEXD.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible_Sub, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btnAddRowHead.addEventHandler("onclick", this.fn_AddRow, this);
            this.btnAddRowSub.addEventHandler("onclick", this.fn_AddRow, this);
            this.btnDelRowSub.addEventHandler("onclick", this.fn_DeleteRow, this);
            this.btnDelRowHead.addEventHandler("onclick", this.fn_DeleteRow, this);
            this.edtSHRCOMM_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRSYST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.txtDESC_REMK.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("TMMA0011.xfdl");
        this.loadPreloadList();
       
    };
}
)();
