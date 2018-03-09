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
                this.set_name("Popup00004");
                this.set_titletext("상세(내용많음) 팝업");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,860,332);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_ButtonList", "absolute", null, "296", "139", "24", "14", null, this);
            obj.set_taborder("64");
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
            obj.set_taborder("66");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Edit("edtASST_NAME", "absolute", "368", "24", null, "21", "36", null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_taborder("1");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "274", "24", "95", "21", null, null, this);
            obj.set_text("자산명");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("44");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "35", "24", "97", "21", null, null, this);
            obj.set_text("등록수량");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCLSF_CODE", "absolute", "368", "50", "151", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_maxlength("10");
            obj.set_taborder("3");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCLSF_NAME", "absolute", "544", "50", null, "21", "36", null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_taborder("5");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static6", "absolute", "274", "50", "95", "21", null, null, this);
            obj.set_text("품목분류");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "35", "50", "97", "21", null, null, this);
            obj.set_text("취득일자");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("51");
            this.addChild(obj.name, obj);

            obj = new Edit("edtASCL_NAME", "absolute", "368", "76", "151", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_maxlength("100");
            obj.set_taborder("7");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "535", "76", "98", "21", null, null, this);
            obj.set_text("유휴여부");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("61");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkIDLE_YSNO", "absolute", "615", "76", "117", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_buttonalign("center middle");
            obj.style.set_align("center middle");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "274", "76", "95", "21", null, null, this);
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

            obj = new MaskEdit("mskPRID_DPCT", "absolute", "368", "102", "34", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_taborder("11");
            obj.style.set_align("right middle");
            obj.set_mask("#,###");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskDPCT_RATE", "absolute", "615", "102", "45", "21", null, null, this);
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_taborder("13");
            obj.set_value("MaskEdit3");
            obj.set_mask("!###.#");
            obj.style.set_align("right middle");
            obj.set_enable("false");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskACQU_NUMB", "absolute", "740", "102", null, "21", "36", null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_taborder("14");
            obj.style.set_align("right middle");
            obj.set_mask("#,###");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskPRID_LEGL", "absolute", "486", "102", "33", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_autoselect("true");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "418", "102", "65", "21", null, null, this);
            obj.set_text("세무년수");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("46");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "670", "102", "66", "21", null, null, this);
            obj.set_text("취득수량");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("47");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "535", "102", "98", "21", null, null, this);
            obj.set_text("상각율(%)");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("49");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "274", "102", "95", "21", null, null, this);
            obj.set_text("내용년수");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "35", "128", "97", "21", null, null, this);
            obj.set_text("회계단위");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("53");
            this.addChild(obj.name, obj);

            obj = new Edit("edtASST_STRD", "absolute", "368", "128", "151", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_taborder("16");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDETL_STRD", "absolute", "615", "128", null, "21", "37", null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("25");
            obj.set_taborder("17");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "535", "128", "98", "21", null, null, this);
            obj.set_text("세부규격");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("57");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "274", "128", "95", "21", null, null, this);
            obj.set_text("규격(모델명)");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("58");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "35", "154", "97", "21", null, null, this);
            obj.set_text("단가");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("59");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskACQU_PRIC", "absolute", "368", "154", "151", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_taborder("19");
            obj.style.set_align("right middle");
            obj.set_mask("#,###");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskVATX_AMNT", "absolute", "615", "154", null, "21", "37", null, this);
            obj.set_taborder("20");
            obj.set_mask("#,###");
            obj.set_autoselect("true");
            obj.style.set_align("right middle");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "535", "154", "98", "21", null, null, this);
            obj.set_text("부가세");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "274", "154", "95", "21", null, null, this);
            obj.set_text("취득금액");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("41");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAME", "absolute", "280", "180", "239", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_taborder("23");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbUNIT_CODE", "absolute", "615", "180", null, "21", "37", null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_type("dropdown");
            obj.set_taborder("24");
            obj.set_cssclass("styFormItemText");

            obj = new Static("Static38", "absolute", "535", "180", "98", "21", null, null, this);
            obj.set_text("자산단위");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "35", "180", "97", "21", null, null, this);
            obj.set_text("부서");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("55");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMUFT_NAME", "absolute", "615", "206", null, "21", "37", null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("25");
            obj.set_taborder("28");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCUST_NAME", "absolute", "280", "206", "239", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "535", "206", "98", "21", null, null, this);
            obj.set_text("제조업체");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("39");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "35", "206", "97", "21", null, null, this);
            obj.set_text("구매처");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("42");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NAME", "absolute", "280", "232", "239", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_taborder("31");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbASST_STAT", "absolute", "615", "232", null, "21", "37", null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_enable("false");
            obj.set_type("dropdown");
            obj.set_taborder("32");
            obj.set_cssclass("styFormItemText");

            obj = new Static("Static50", "absolute", "535", "232", "98", "21", null, null, this);
            obj.set_text("자산상태");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("60");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "35", "232", "97", "21", null, null, this);
            obj.set_text("사원");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("62");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDESC_REMK", "absolute", "615", "258", null, "21", "37", null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_taborder("34");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "274", "258", "98", "21", null, null, this);
            obj.set_text("자산비용구분");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("56");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbASST_CSCD", "absolute", "368", "258", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_type("dropdown");
            obj.set_taborder("35");
            obj.set_cssclass("styFormItemText");

            obj = new Static("Static54", "absolute", "535", "258", "95", "21", null, null, this);
            obj.set_text("비고");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("48");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "35", "258", "97", "21", null, null, this);
            obj.set_text("자산취득경로");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("43");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDEPT_CODE", "absolute", "257", "180", "21", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCUST_CODE", "absolute", "257", "206", "21", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpEMPL_NUMB", "absolute", "257", "232", "21", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCLSF_CODE", "absolute", "521", "50", "21", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "15", "245", null, null, this);
            obj.set_taborder("67");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "845", "0", "15", "245", null, null, this);
            obj.set_taborder("68");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "152", "16", "38", "8", null, null, this);
            obj.set_taborder("70");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", "173", "279", "38", "8", null, null, this);
            obj.set_taborder("74");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbDPCT_CYCL", "absolute", "130", "76", "125", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_type("dropdown");
            obj.set_taborder("6");
            obj.set_cssclass("styFormItemText");

            obj = new Combo("cmbDPCT_METH", "absolute", "130", "102", "44", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_type("dropdown");
            obj.set_taborder("9");
            obj.set_cssclass("styFormItemText");

            obj = new Combo("cmbDPCT_CMPT", "absolute", "176", "102", "79", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.getSetter("binddataset").set("dsFS_ASCLXM");
            obj.set_cssclass("styFormItemText");

            obj = new Combo("cmbACCT_UNIT", "absolute", "130", "128", "125", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_type("dropdown");
            obj.set_taborder("15");
            obj.set_cssclass("styFormItemText");

            obj = new MaskEdit("mskACQU_COST", "absolute", "130", "154", "125", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_taborder("18");
            obj.style.set_align("right middle");
            obj.set_mask("#,###");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_CODE", "absolute", "130", "180", "125", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_maxlength("10");
            obj.set_taborder("21");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCUST_CODE", "absolute", "130", "206", "125", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NUMB", "absolute", "130", "232", "125", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_maxlength("10");
            obj.set_taborder("29");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbACQU_CHNL", "absolute", "130", "258", "125", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_enable("false");
            obj.set_type("dropdown");
            obj.set_taborder("33");
            obj.set_cssclass("styFormItemText");

            obj = new MaskEdit("mskASST_CONT", "absolute", "130", "24", "125", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_taborder("0");
            obj.style.set_align("right middle");
            obj.set_mask("#,###");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Calendar("calACQS_DATE", "absolute", "130", "50", "125", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static01", "absolute", "184", "0", "38", "15", null, null, this);
            obj.set_taborder("75");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "782", "288", "64", "8", null, null, this);
            obj.set_taborder("76");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "782", "320", "64", "12", null, null, this);
            obj.set_taborder("77");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 139, 24, this.div_ButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("64");
            		p.set_tabstop("false");
            		p.set_scrollbars("none");

            	}
            );
            this.div_ButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 860, 332, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("상세(내용많음) 팝업");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
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

        this.loadIncludeScript("Popup00004.xfdl");

       
    };
}
)();
