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
                this.set_name("TMMD0010");
                this.set_titletext("사업장 관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_BRCHXM", this);
            obj._setContents("<ColumnInfo><Column id=\"ENFC_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"STDS_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENFC_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENGL_OFFN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DCLR_OFFC\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DCLR_OFFC_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RPRS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RERN_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BIZR_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CORP_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BUTY_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BUSI_LTNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ESTA_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TELE_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FAXX_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEX_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTL1_ADDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DTL2_ADDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENGL_ADDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TXOF_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TXOF_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CIOF_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CIOF_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HMTX_IDXX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PRNT_OFFN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PBGN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FILE_PATH\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">USEX_YSNO</Col><Col id=\"DSNAME\">dsUSEX_YSNO</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">PBGN_CODE</Col><Col id=\"DSNAME\">dsPBGN_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new MaskEdit("medTXOF_CODE", "absolute", "117", null, "133", "21", null, "50", this);
            obj.set_taborder("77");
            obj.set_type("string");
            obj.set_mask("#####");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsTM_BRCHXM");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medCIOF_CODE", "absolute", "412", null, "133", "21", null, "50", this);
            obj.set_taborder("78");
            obj.set_type("string");
            obj.set_mask("#####");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsTM_BRCHXM");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Shape1", "absolute", "8", null, null, "221", "25", "15", this);
            obj.set_taborder("65");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_BRCHXM", "absolute", "8", "128", null, null, "25", "251", this);
            obj.set_selecttype("row");
            obj.set_binddataset("dsTM_BRCHXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_cellsizebandtype("allband");
            obj.set_taborder("59");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"0\" band=\"left\"/><Column size=\"0\" band=\"left\"/><Column size=\"0\" band=\"left\"/><Column size=\"0\" band=\"left\"/><Column size=\"0\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"160\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"126\"/><Column size=\"117\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"140\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"은행코드\"/><Cell col=\"1\" displaytype=\"text\" text=\"세부은행코드\"/><Cell col=\"2\" displaytype=\"text\" text=\"사업장코드\"/><Cell col=\"3\" displaytype=\"text\" text=\"세부필드명\"/><Cell col=\"4\" displaytype=\"text\" text=\"은행명(Full)\"/><Cell col=\"5\" displaytype=\"text\" text=\"사업장코드\"/><Cell col=\"6\" displaytype=\"text\" text=\"사업장명\"/><Cell col=\"7\" displaytype=\"text\" text=\"사업장구분\"/><Cell col=\"8\" displaytype=\"text\" text=\"대표자\"/><Cell col=\"9\" displaytype=\"text\" text=\"사업자번호\"/><Cell col=\"10\" displaytype=\"text\" text=\"법인번호\"/><Cell col=\"11\" displaytype=\"text\" text=\"업태\"/><Cell col=\"12\" displaytype=\"text\" text=\"종목\"/><Cell col=\"13\" text=\"신고사업장\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left;\" text=\"bind:BANK_CODE\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;\" text=\"bind:BANK_COD1\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;\" text=\"bind:BRAN_CODE\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left;\" text=\"bind:CODD_DESC\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:left;\" text=\"bind:BANK_NAME\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:center\" text=\"bind:ENFC_CODE\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:left\" text=\"bind:ENFC_NAME\"/><Cell col=\"7\" displaytype=\"combo\" style=\"align:center\" text=\"bind:PBGN_CODE\"/><Cell col=\"8\" displaytype=\"text\" style=\"align:left\" text=\"bind:RPRS_NAME\"/><Cell col=\"9\" displaytype=\"text\" style=\"align:center\" text=\"bind:BIZR_NUMB\" mask=\"###-##-#####\"/><Cell col=\"10\" displaytype=\"text\" style=\"align:center\" text=\"bind:CORP_NUMB\" mask=\"######-#######\"/><Cell col=\"11\" displaytype=\"text\" style=\"align:left\" text=\"bind:BUTY_NAME\"/><Cell col=\"12\" displaytype=\"text\" style=\"align:left\" text=\"bind:BUSI_LTNM\"/><Cell col=\"13\" style=\"align:left;\" text=\"bind:DCLR_OFFC_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "105", "400", "21", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("53");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("56");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "35", "221", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnRevision", "absolute", "0", "0", "74", "21", null, null, this.divButtonList);
            obj.set_taborder("1");
            obj.set_text("Revision");
            obj.set_cssclass("styTextButtonBizProc");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Static("Image1", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_text("기준일자");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("58");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSTDS_DATE", "absolute", "96", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_enable("true");
            obj.set_value("null");

            obj = new Static("Static123", "absolute", "620", null, "79", "21", null, "206", this);
            obj.set_text("영문명");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new Static("Static121", "absolute", "324", null, "84", "21", null, "206", this);
            obj.set_text("사업장명");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Static("Static120", "absolute", "27", null, "82", "21", null, "206", this);
            obj.set_text("사업장코드");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("37");
            this.addChild(obj.name, obj);

            obj = new Edit("edtENGL_OFFN", "absolute", "689", null, "130", "21", null, "206", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_BRCHXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("alpha");
            obj.set_maxlength("100");
            obj.set_taborder("2");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSTDS_DATE", "absolute", "998", null, "130", "21", null, "206", this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTM_BRCHXM");
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_cssclass("styFormItemCalendar");
            obj.style.set_align("left middle");

            obj = new Edit("edtENFC_NAME", "absolute", "405", null, "130", "21", null, "206", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_BRCHXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_taborder("1");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static125", "absolute", "904", null, "89", "21", null, "206", this);
            obj.set_text("기준일");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Edit("edtENFC_CODE", "absolute", "109", null, "130", "21", null, "206", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_BRCHXM");
            obj.set_lengthunit("ascii");
            obj.set_enable("false");
            obj.set_imemode("english");
            obj.set_maxlength("10");
            obj.set_taborder("0");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static100", "absolute", "324", null, "84", "21", null, "180", this);
            obj.set_text("법인번호");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Static("Static99", "absolute", "27", null, "82", "21", null, "180", this);
            obj.set_text("사업자번호");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("41");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRPRS_NAME", "absolute", "689", null, "130", "21", null, "180", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_BRCHXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_taborder("6");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medCORP_NUMB", "absolute", "405", null, "130", "21", null, "180", this);
            obj.getSetter("binddataset").set("dsTM_BRCHXM");
            obj.set_mask("######-#######");
            obj.set_taborder("5");
            obj.set_type("string");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medBIZR_NUMB", "absolute", "109", null, "130", "21", null, "180", this);
            obj.getSetter("binddataset").set("dsTM_BRCHXM");
            obj.set_mask("###-##-#####");
            obj.set_taborder("4");
            obj.set_type("string");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medRERN_NUMB", "absolute", "998", null, "130", "21", null, "180", this);
            obj.set_taborder("7");
            obj.set_type("string");
            obj.set_mask("######-#######");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_BRCHXM");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static104", "absolute", "904", null, "89", "21", null, "180", this);
            obj.set_text("주민등록번호");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("38");
            this.addChild(obj.name, obj);

            obj = new Static("Static102", "absolute", "620", null, "79", "21", null, "180", this);
            obj.set_text("대표자");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("39");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "27", null, "82", "21", null, "108", this);
            obj.set_text("주소");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "324", null, "84", "21", null, "154", this);
            obj.set_text("종목");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("42");
            this.addChild(obj.name, obj);

            obj = new Static("Static92", "absolute", "27", null, "82", "21", null, "154", this);
            obj.set_text("업태");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("43");
            this.addChild(obj.name, obj);

            obj = new Static("Static76", "absolute", "904", null, "89", "21", null, "154", this);
            obj.set_text("사용여부");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("44");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", "324", null, "84", "21", null, "24", this);
            obj.set_text("팩스번호");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "620", null, "79", "21", null, "50", this);
            obj.set_text("전화번호");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("46");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "27", null, "82", "21", null, "84", this);
            obj.set_text("영문주소");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("47");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "27", null, "82", "21", null, "128", this);
            obj.set_text("출력이름");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("48");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "27", null, "82", "21", null, "24", this);
            obj.set_text("홈택스ID");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("49");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "324", null, "84", "21", null, "50", this);
            obj.set_text("관할구청");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "27", null, "82", "21", null, "50", this);
            obj.set_text("관할세무소");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("51");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTELE_NUMB", "absolute", "689", null, "130", "21", null, "50", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_BRCHXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("native");
            obj.set_maxlength("20");
            obj.set_taborder("24");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFAXX_NUMB", "absolute", "405", null, "130", "21", null, "24", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_BRCHXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("native");
            obj.set_maxlength("20");
            obj.set_taborder("26");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbUSEX_YSNO", "absolute", "998", null, "130", "21", null, "154", this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTM_BRCHXM");
            obj.set_imemode("none");
            obj.set_taborder("11");
            obj.set_cssclass("styFormItemCombo");
            obj.set_type("search");
            obj.style.set_align("left middle");
            obj.set_index("-1");

            obj = new Calendar("calESTA_DATE", "absolute", "689", null, "130", "21", null, "154", this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTM_BRCHXM");
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Edit("edtDTL2_ADDR", "absolute", "537", null, "282", "21", null, "102", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_BRCHXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_taborder("18");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDTL1_ADDR", "absolute", "264", null, "271", "21", null, "102", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_BRCHXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_taborder("17");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "904", null, "89", "21", null, "128", this);
            obj.set_text("사업장구분");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbPBGN_CODE", "absolute", "998", null, "130", "21", null, "128", this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsTM_BRCHXM");
            obj.set_imemode("none");
            obj.set_taborder("15");
            obj.set_cssclass("styFormItemCombo");
            obj.set_type("search");
            obj.set_enable("true");
            obj.style.set_align("left middle");
            obj.set_index("-1");

            obj = new MaskEdit("medDCLR_OFFC", "absolute", "405", null, "130", "21", null, "128", this);
            obj.set_taborder("61");
            obj.set_type("string");
            obj.set_mask("#####");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.getSetter("binddataset").set("dsTM_BRCHXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDCLR_OFFC", "absolute", "537", null, "21", "21", null, "128", this);
            obj.set_taborder("13");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDCLR_OFFC_NAME", "absolute", "560", null, "259", "21", null, "128", this);
            obj.set_taborder("14");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTM_BRCHXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCIOF_CODE", "absolute", "537", null, "21", "21", null, "50", this);
            obj.set_taborder("23");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "904", null, "89", "71", null, "52", this);
            obj.set_taborder("63");
            obj.set_text("사업장직인");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete", "absolute", "1078", null, "50", "21", null, "26", this);
            obj.set_taborder("28");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgSTMP_FILE", "absolute", "998", null, "130", "71", null, "52", this);
            obj.set_taborder("64");
            obj.set_stretch("fit");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpload", "absolute", "1026", null, "50", "21", null, "26", this);
            obj.set_taborder("27");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHMTX_IDXX", "absolute", "109", null, "130", "21", null, "24", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_BRCHXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("english");
            obj.set_maxlength("50");
            obj.set_taborder("25");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBUTY_NAME", "absolute", "109", null, "130", "21", null, "154", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_BRCHXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_taborder("8");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medPOST_NUMB", "absolute", "109", null, "130", "21", null, "102", this);
            obj.getSetter("binddataset").set("dsTM_BRCHXM");
            obj.set_enable("true");
            obj.set_mask("#####");
            obj.set_type("string");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_taborder("62");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPRNT_OFFN", "absolute", "109", null, "130", "21", null, "128", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_BRCHXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_taborder("12");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtENGL_ADDR", "absolute", "109", null, "710", "21", null, "76", this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsTM_BRCHXM");
            obj.set_lengthunit("ascii");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            obj.set_taborder("19");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpPOST_NUMB", "absolute", "241", null, "21", "21", null, "102", this);
            obj.set_cssclass("sytHelpPopupInput");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpTXOF_CODE", "absolute", "241", null, "21", "21", null, "50", this);
            obj.set_taborder("21");
            obj.set_cssclass("sytHelpPopupInput");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBUSI_LTNM", "absolute", "405", null, "130", "21", null, "154", this);
            obj.set_taborder("9");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_BRCHXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static95", "absolute", "324", null, "84", "21", null, "128", this);
            obj.set_text("대표사업장");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", "620", null, "79", "21", null, "154", this);
            obj.set_text("설립일자");
            obj.set_cssclass("styFormItemCap");
            obj.set_taborder("33");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "226", "71", "76", "21", null, null, this);
            obj.set_taborder("75");
            obj.set_text("사업장명");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRENFC_NAME", "absolute", "294", "71", "180", "21", null, null, this);
            obj.set_taborder("76");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTXOF_NAME", "absolute", "109", null, "130", "21", null, "50", this);
            obj.set_taborder("79");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_BRCHXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCIOF_NAME", "absolute", "405", null, "130", "21", null, "50", this);
            obj.set_taborder("80");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_BRCHXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("81");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("83");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("84");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("85");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("86");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("87");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("88");
            obj.set_text("사업장 관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("89");
            obj.set_text("홈 > 공통관리 > 사업장관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("90");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("91");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("92");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("93");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("94");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("95");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("97");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "573", "466", "80", "15", null, null, this);
            obj.set_taborder("98");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "9", "493", "30", "41", null, null, this);
            obj.set_taborder("99");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 221, 21, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("30");
            		p.set_tabstop("false");
            		p.set_text("");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("사업장 관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtENFC_CODE_value","edtENFC_CODE","value","dsTM_BRCHXM","ENFC_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calSTDS_DATE_value","calSTDS_DATE","value","dsTM_BRCHXM","STDS_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtENFC_NAME_value","edtENFC_NAME","value","dsTM_BRCHXM","ENFC_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtENGL_OFFN_value","edtENGL_OFFN","value","dsTM_BRCHXM","ENGL_OFFN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medDCLR_OFFC_value","medDCLR_OFFC","value","dsTM_BRCHXM","DCLR_OFFC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDCLR_OFFC_NAME_value","edtDCLR_OFFC_NAME","value","dsTM_BRCHXM","DCLR_OFFC_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtRPRS_NAME_value","edtRPRS_NAME","value","dsTM_BRCHXM","RPRS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medRERN_NUMB_value","medRERN_NUMB","value","dsTM_BRCHXM","RERN_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medBIZR_NUMB_value","medBIZR_NUMB","value","dsTM_BRCHXM","BIZR_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medCORP_NUMB_value","medCORP_NUMB","value","dsTM_BRCHXM","CORP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBUTY_NAME_value","edtBUTY_NAME","value","dsTM_BRCHXM","BUTY_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBUSI_LTNM_value","edtBUSI_LTNM","value","dsTM_BRCHXM","BUSI_LTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calESTA_DATE_value","calESTA_DATE","value","dsTM_BRCHXM","ESTA_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTELE_NUMB_value","edtTELE_NUMB","value","dsTM_BRCHXM","TELE_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtFAXX_NUMB_value","edtFAXX_NUMB","value","dsTM_BRCHXM","FAXX_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbUSEX_YSNO_value","cmbUSEX_YSNO","value","dsTM_BRCHXM","USEX_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medPOST_NUMB_value","medPOST_NUMB","value","dsTM_BRCHXM","POST_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDTL1_ADDR_value","edtDTL1_ADDR","value","dsTM_BRCHXM","DTL1_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDTL2_ADDR_value","edtDTL2_ADDR","value","dsTM_BRCHXM","DTL2_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtENGL_ADDR_value","edtENGL_ADDR","value","dsTM_BRCHXM","ENGL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medTXOF_CODE_value","medTXOF_CODE","value","dsTM_BRCHXM","TXOF_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medCIOF_CODE_value","medCIOF_CODE","value","dsTM_BRCHXM","CIOF_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtHMTX_IDXX_value","edtHMTX_IDXX","value","dsTM_BRCHXM","HMTX_IDXX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPRNT_OFFN_value","edtPRNT_OFFN","value","dsTM_BRCHXM","PRNT_OFFN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbPBGN_CODE_value","cmbPBGN_CODE","value","dsTM_BRCHXM","PBGN_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTXOF_NAME_value","edtTXOF_NAME","value","dsTM_BRCHXM","TXOF_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCIOF_NAME_value","edtCIOF_NAME","value","dsTM_BRCHXM","CIOF_NAME");
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
        this.addIncludeScript("TMMC0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMC0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMC0010 사업장 관리
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

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST = 'TTTTTTTF'; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = 'TMMC0010';
        this.sCURROW = 0;               //저장 후 재조회 시 커서위치
        this.arrParamPost = [];

        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {
        	this.sUSERAUTH     = '';
        	this.sFORMCAPTION  = '';
        	this.sFORMLOCATION = '';
        	this.sUSERLAVEL    = '';
        }else{
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

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.calSHRSTDS_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"))); 
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

        	if (!this.fn_SearchItemCheck())	return;
        	this.fnc_DatasetClear("dsTM_BRCHXM");

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTM_BRCHXM=dsTM_BRCHXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_BRCHXM.setFocus();
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var nRow = this.dsTM_BRCHXM.addRow();
        	this.dsTM_BRCHXM.setColumn(nRow, "USEX_YSNO", "1");
        	this.dsTM_BRCHXM.setColumn(nRow, "STDS_DATE", this.fnc_SubStr(this.fnc_GetServerDateTime("DATE")));
        	this.edtENFC_CODE.setFocus();
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsTM_BRCHXM.deleteRow(this.dsTM_BRCHXM.rowposition);
        	this.grdTM_BRCHXM.setFocus();
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj){
        	this.fnc_DataSetCancel("dsTM_BRCHXM");
        	this.grdTM_BRCHXM.setFocus();
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsTM_BRCHXM=dsTM_BRCHXM:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_BRCHXM.setFocus();
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {

        	this.fnc_ToExcel(this.name);
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
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTM_BRCHXM", this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {

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

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRSTDS_DATE.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준일", this.calSHRSTDS_DATE);
        	}

        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	// 선택된 Row Count
        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdTM_BRCHXM);

        	if (iSelectRowCount > 1) {
        		// Multy로 선택되었다면 선택된 Count로 삭제 여부 확인
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else {
        		// 한 건 삭제 처리히 해당 항목에 대한 삭제 여부 확인
        		var sQuestionText = this.dsTM_BRCHXM.getColumn(this.dsTM_BRCHXM.rowposition, "ENFC_NAME");
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTM_BRCHXM")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 필수 입력 항목 체크
        	
        	for (var i = 0; i < this.dsTM_BRCHXM.getRowCount(); i++) {
        	
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_BRCHXM.getColumn(i, "ENFC_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사업장코드", this.dsTM_BRCHXM, i, this.edtENFC_CODE, '');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_BRCHXM.getColumn(i, "ENFC_CODE"))) != 4) {
        			return this.fnc_CheckPostAction("TMM125", "사업장코드(4자리)를 입력하세요.", this.dsTM_BRCHXM, i, this.edtENFC_CODE, '');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_BRCHXM.getColumn(i, "ENFC_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사업장명", this.dsTM_BRCHXM, i, this.edtENFC_NAME, '');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_BRCHXM.getColumn(i, "STDS_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "기준일자", this.dsTM_BRCHXM, i, this.calSTDS_DATE, '');
        		}

        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_BRCHXM.getColumn(i, "PBGN_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "사업장구분", this.dsTM_BRCHXM, i, this.cmbPBGN_CODE, '');
        		}
        		
        /*
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_BRCHXM.getColumn(i, "DCLR_OFFC"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "대표사업장", this.dsTM_BRCHXM, i, this.medDCLR_OFFC, '');
        		}
        		
        		if (!(this.fnc_CustNumberCheck(this.fnc_Trim(this.dsTM_BRCHXM.getColumn(i, "BIZR_NUMB"))))) {
        			return this.fnc_CheckPostAction("TMM125", "정확한 사업자번호를 입력하세요.", this.dsTM_BRCHXM, i, this.medBIZR_NUMB, '');
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_BRCHXM.getColumn(i, "CORP_NUMB"))) != 13) {
        			return this.fnc_CheckPostAction("TMM125", "법인등록번호", this.dsTM_BRCHXM, i, this.medCORP_NUMB, '');
        		}
        */
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
        		sReturnString += " STDS_DATE=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSTDS_DATE.value)); 
        		sReturnString += " ENFC_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRENFC_NAME.value)); 

        	} else if (sKind == 'SAVE00') {
        	
        		sReturnString  = " pgm="    + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        	
        	}

        	return sReturnString;
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	// Service에서 오류 발생 시 처리
        	if (ErrorCode < 0) {
        	
        		if (application.GBL_SESSONCHK == "E0001") {
        			// 비인가 접속이나 Session 단절시 처리
        			this.fnc_ErrorProcess(ErrorCode, ErrorMSG);
        		} else {
        			// Server에서 받은 Message 처리
        			this.fnc_Message("SERVERMSG", ErrorMSG);
        		}
        	} else {
        		// 오류가 없이 정상 처리되었다면...
        		this.fn_PostProcess(sMethodName);
        	}
        }

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == 'SEARCH00') {
        	
        		this.fnc_Information(this.stInformation, this.dsTM_BRCHXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_BRCHXM.getCaseCount("dataset.getRowLevel(currow)==0"));	
        		
        	} else if (sMethodName == 'SAVE00') {
        	
        		this.fn_KeyFieldDisible(this.dsTM_BRCHXM);
        		this.fnc_Information(this.stInformation, this.dsTM_BRCHXM.getCaseCount("getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM103");
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbUSEX_YSNO,dsUSEX_YSNO,0"; //사용여부
        			arrParam[1] = "COMBO,cmbPBGN_CODE,dsPBGN_CODE,0"; //사업장구분
        			arrParam[2] = "GRID,grdTM_BRCHXM,dsPBGN_CODE,PBGN_CODE"; //사업장구분 
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	}
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리    |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        	if (this.fnc_ToUpper(obj.getRowType(obj.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.edtENFC_CODE.set_enable(true);
        		this.calSTDS_DATE.set_enable(true);
        	} else {
        		this.edtENFC_CODE.set_enable(false);
        		this.calSTDS_DATE.set_enable(false);
        	}
        }

        /*---------------+
         |  팝업 Setting  |
         +----------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	if ((obj.name == 'imgHelpPOST_NUMB')) {
        	
        		arrParam[0] = '';
        		arrParam[1] = '';
        		arrParam[2] = '';
        		arrParam[3] = '';
        		arrParam[4] = 'edtDTL2_ADDR';
        		arrParam[5] = 'medPOST_NUMB,edtDTL1_ADDR,edtDTL2_ADDR';
        		arrParam[6] = '0,1,2';
        		this.fn_PostDialogeComponent(this, obj, arrParam);

        	}
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        // Revision Click!!
        this.btnRevision_OnClick = function (obj,e) {

        	this.calSTDS_DATE.set_enable(true); //기준일자 활성
        }

        
        /*------------------------------------+
         |  우편번호 팝업 호출 시 - Component  |
         +-------------------------------------*/
        this.fn_PostDialogeComponent = function (sForm,obj,arrParam) {

        	this.arrParamPost = arrParam;

        	var sResponse;
        	if (obj instanceof Static) {
        		if (this._OpenPopupCheck(eval("this."+this.arrParamPost[4])) == false) return;		
        		// 팝업 처리 여부 결정
        		sResponse = this.fn_PostDialoge(this.arrParamPost); //팝업 화면 호출
        	}
        	
        	// 조회 결과 자료가 없을 때  Componect 초기화
        	if (!this.IsNull(sResponse)) {
        				
        		if (sResponse == 'NoData') {
        			this.fnc_ComponentClear(this.arrParamPost[5]);
        			// 팝업 결과 적용
        		} else if (this.fnc_Length(this.fnc_Trim(sResponse)) > 0) {

        			this._ResultDisplayComp(sResponse, this.arrParamPost[5], this.arrParamPost[6]);
        			// 선택화면에서 취소 시 Componect Value Rollback
        		} else if ((this.fnc_Length(this.fnc_Trim(sResponse)) < 1) || (!(obj instanceof Static))) {
        			this._ComponentDataRollback(this.arrParamPost[4]);
        		}
        	}

        }

        /*--------------------------------------+
         |  우편번호 팝업 호출 후 데이터 바인딩  |
         +---------------------------------------*/
        this.fn_PostDialoge = function (arrParam) {

        	var sOpenStyle  = "modeless=false";   //Open Sytle(되도록 Modal 사용)
        		sOpenStyle += ",autosize=true";   //Autosize true면 width, Height 안먹음
        		sOpenStyle += ",top=-1";          //원하는 위치(단 -1은 소유창의 Middle)
        		sOpenStyle += ",left=-1";         //원하는 위치(단 -1은 소유창의 Center)
        		sOpenStyle += ",width=750";       //현재 반응 없음
        		sOpenStyle += ",height=500";      //현재 반응 없음
        		sOpenStyle += ",title=true";      //Form Title Bar Visible 여부
        		sOpenStyle += ",titletext=";      //Form Title여부
        		sOpenStyle += ",status=false";      //Form Title Bar Visible 여부
        		sOpenStyle += ",resizable=true";      //Form Title Bar Visible 여부
        	
            this.fnc_OpenPopup("comPostPopup", "common::comPostPopup.xfdl", {}, sOpenStyle, "fn_popupAfter");	
        	
        	var obj = eval("this."+arrParam[4]);
        	if (obj instanceof Grid) {
        			eval("this."+arrParam[4]).moveToNextCell();
        	} else {
        		if (this.fnc_Length(this.fnc_Trim(arrParam[4])) > 0) {
        			eval("this."+arrParam[4]).setFocus();
        		}
        	}

        }

        // 팝업 CallBack
        this.fn_popupAfter = function(sPopupId,Variant) {

        	if (sPopupId == "comPostPopup") {
        	
        		//반환 받은 문자열 데이타 형변환(String, Array, Object) 처리
        		var sResponse = this.fnc_GetPopupRtn();

        		if (sResponse instanceof Array) {

        			// 조회 결과 자료가 없을 때  Componect 초기화
        			if (!this.IsNull(sResponse)) {
        				if (sResponse == 'NoData') {
        					this.fnc_ComponentClear(this.arrParamPost[5]);
        					// 팝업 결과 적용
        				} else if (this.fnc_Length(this.fnc_Trim(sResponse)) > 0) {
        					this._ResultDisplayComp(sResponse, this.arrParamPost[5], this.arrParamPost[6]);
        					// 선택화면에서 취소 시 Componect Value Rollback
        				} else if ((this.fnc_Length(this.fnc_Trim(sResponse)) < 1) || (!(obj instanceof Static))) {
        					this._ComponentDataRollback(this.arrParamPost[4]);
        				}
        			}
        		
        		}	

        	}

        } 

        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
         this.fn_HelpDialoge = function (obj,sFromDs,sOldValue) {

        	var arrParam = new Array();
        	
        	// 조회조건 - 대표사업장정보조회(Popup)
        	if ((obj.name == "imgHelpDCLR_OFFC") || (obj.name == "edtDCLR_OFFC_NAME")) {

        		arrParam[0] = "TMM0009";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.medDCLR_OFFC.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtDCLR_OFFC_NAME";
        		arrParam[5] = "medDCLR_OFFC,edtDCLR_OFFC_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        	}
        	
        	// 조회조건 - 주소정보조회(Popup)
        	if ((obj.name == "imgHelpPOST_NUMB") || (obj.name == "edtDTL1_ADDR")) {
        		arrParam[0] = "TMM0010";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.medPOST_NUMB.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtDTL1_ADDR";
        		arrParam[5] = "medPOST_NUMB,edtDTL1_ADDR";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}
        	
        	// 조회조건 - 관할구청정보조회(Popup)
        	if ((obj.name == "imgHelpCIOF_CODE") || (obj.name == "edtCIOF_NAME")) {
        		arrParam[0] = "TMM1000";
        		arrParam[1] = "CIOF_CODE";
        		arrParam[2] = this.fnc_Trim(this.edtCIOF_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtCIOF_NAME";
        		arrParam[5] = "medCIOF_CODE,edtCIOF_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}
        	
        	// 조회조건 - 관할세무소정보조회(Popup)
        	if ((obj.name == "imgHelpTXOF_CODE") || (obj.name == "edtTXOF_NAME")) {
        		arrParam[0] = "TMM1000";
        		arrParam[1] = "TXOF_CODE";
        		arrParam[2] = this.fnc_Trim(this.edtTXOF_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtTXOF_NAME";
        		arrParam[5] = "medTXOF_CODE,edtTXOF_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}

        }
        this.edtTXOF_NAME_oneditclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_BRCHXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.medTXOF_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medCIOF_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.divButtonList.btnRevision.addEventHandler("onclick", this.btnRevision_OnClick, this);
            this.calSHRSTDS_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static123.addEventHandler("onclick", this.Static123_onclick, this);
            this.Static120.addEventHandler("onclick", this.Static120_onclick, this);
            this.edtENGL_OFFN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSTDS_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtENFC_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtENFC_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtRPRS_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medCORP_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medBIZR_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medRERN_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtTELE_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtFAXX_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbUSEX_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calESTA_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDTL2_ADDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDTL1_ADDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDTL1_ADDR.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbPBGN_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medDCLR_OFFC.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpDCLR_OFFC.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtDCLR_OFFC_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDCLR_OFFC_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpCIOF_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btnDelete.addEventHandler("onclick", this.fn_PicFileDown, this);
            this.imgSTMP_FILE.addEventHandler("onclick", this.imgEmployeePicture_onclick, this);
            this.btnUpload.addEventHandler("onclick", this.fn_PicFileDown, this);
            this.edtHMTX_IDXX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBUTY_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medPOST_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPRNT_OFFN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtENGL_ADDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpPOST_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpTXOF_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtBUSI_LTNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgSearchTitle0.addEventHandler("onclick", this.imgSearchTitle0_onclick, this);
            this.edtSHRENFC_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtTXOF_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtTXOF_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtTXOF_NAME.addEventHandler("oneditclick", this.edtTXOF_NAME_oneditclick, this);
            this.edtCIOF_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCIOF_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtCIOF_NAME.addEventHandler("oneditclick", this.edtTXOF_NAME_oneditclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("TMMC0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
