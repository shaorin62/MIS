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
                this.set_name("FAMA0010");
                this.set_titletext("사업장정보등록");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">CNTL_TXOF</Col><Col id=\"DSNAME\">dsCNTL_TXOF</Col><Col id=\"HEADFLAG\">N</Col></Row><Row><Col id=\"DSNAME\">dsOFFI_GUBN</Col><Col id=\"CODEID\">OFFI_GUBN</Col><Col id=\"HEADFLAG\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_OFFICE", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_GUBN\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"OFFI_GUBN\" type=\"STRING\" size=\"8\"/><Column id=\"OFFI_NAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"ENGX_OFFI\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_NAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_NUMB\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_STAT\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_TYPE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_NUMB\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR_DESC\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR_DETL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENGL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TELE_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FAXX_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OFFI_HMPG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CNTL_TXOF\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"HTSX_IDXX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_STDT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_EDDT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OWNR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENGX_OWNR\" type=\"STRING\" size=\"256\"/><Column id=\"JURI_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"VATX_TPYN\" type=\"STRING\" size=\"7\"/><Column id=\"VATX_UTTN\" type=\"STRING\" size=\"7\"/><Column id=\"MAST_OFFI\" type=\"STRING\" size=\"4\"/><Column id=\"MAST_OFNM\" type=\"STRING\" size=\"256\"/><Column id=\"ESTA_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"CLSR_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"OFAR_SQMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"OFAR_PYNG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"5\"/><Column id=\"APPR_NUMB\" type=\"STRING\" size=\"10\"/><Column id=\"EMPL_CONT\" type=\"BIGDECIMAL\" size=\"5\"/><Column id=\"GBN1_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"AREA_GBN1\" type=\"STRING\" size=\"10\"/><Column id=\"GBN1_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GBN2_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"AREA_GBN2\" type=\"STRING\" size=\"10\"/><Column id=\"GBN2_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CIOF_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CIOF_CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "107", "240", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("39");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTM_OFFICE", "absolute", "8", "128", null, null, "25", "277", this);
            obj.set_binddataset("dsTM_OFFICE");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("40");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"60\" band=\"left\"/><Column size=\"170\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"102\" band=\"left\"/><Column size=\"78\" band=\"left\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"314\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"코드\"/><Cell col=\"1\" displaytype=\"text\" text=\"사업장명\"/><Cell col=\"2\" displaytype=\"text\" text=\"구분\"/><Cell col=\"3\" displaytype=\"text\" text=\"사업자번호\"/><Cell col=\"4\" displaytype=\"text\" text=\"법인번호\"/><Cell col=\"5\" displaytype=\"text\" text=\"대표자\"/><Cell col=\"6\" displaytype=\"text\" text=\"업태\"/><Cell col=\"7\" displaytype=\"text\" text=\"업종\"/><Cell col=\"8\" displaytype=\"text\" text=\"우편번호\"/><Cell col=\"9\" displaytype=\"text\" text=\"주소\"/><Cell col=\"10\" displaytype=\"text\" text=\"전화번호\"/><Cell col=\"11\" displaytype=\"text\" text=\"팩스번호\"/><Cell col=\"12\" displaytype=\"text\" text=\"홈페이지\"/><Cell col=\"13\" displaytype=\"text\" text=\"관할세무서\"/><Cell col=\"14\" displaytype=\"text\" text=\"홈택스ID\"/><Cell col=\"15\" text=\"총괄납부승인번호\"/><Cell col=\"16\" displaytype=\"text\" text=\"사업자단위과세승인번호\"/><Cell col=\"17\" displaytype=\"text\" text=\"설립일자\"/><Cell col=\"18\" displaytype=\"text\" text=\"폐업일자\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"bind:ACCT_GUBN\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: left;\" text=\"bind:OFFI_NAME\"/><Cell col=\"2\" displaytype=\"combo\" style=\"align:center middle;\" text=\"bind:OFFI_GUBN\" combodisplaynulltext=\"true\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: center;\" text=\"bind:BSNS_NUMB\" mask=\"expr:comp.parent.fnc_Length(BSNS_NUMB) == 10 ? '###-##-#####' : ''\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: center;\" text=\"bind:JURI_NUMB\" mask=\"expr:comp.parent.fnc_Length(JURI_NUMB) == 13 ? '######-#######' : ''\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:center middle;\" text=\"bind:OWNR_NAME\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: left;\" text=\"bind:BSNS_STAT\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: left;\" text=\"bind:BSNS_TYPE\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: center;\" text=\"bind:POST_NUMB\" mask=\"######\" maskchar=\" \"/><Cell col=\"9\" displaytype=\"text\" style=\"align: left;\" expr=\"expr:comp.parent.fnc_Trim(ADDR_DESC) + ' ' + comp.parent.fnc_Trim(ADDR_DETL)\"/><Cell col=\"10\" displaytype=\"text\" style=\"align: center;\" text=\"bind:TELE_NUMB\"/><Cell col=\"11\" displaytype=\"text\" style=\"align: center;\" text=\"bind:FAXX_NUMB\"/><Cell col=\"12\" displaytype=\"text\" style=\"align: left;\" text=\"bind:OFFI_HMPG\"/><Cell col=\"13\" displaytype=\"combo\" style=\"align: left middle;\" text=\"bind:CNTL_TXOF\" combodisplaynulltext=\"true\"/><Cell col=\"14\" displaytype=\"text\" style=\"align: middle left;\" text=\"bind:HTSX_IDXX\"/><Cell col=\"15\" displaytype=\"text\" text=\"bind:VATX_TPYN\"/><Cell col=\"16\" displaytype=\"text\" text=\"bind:VATX_UTTN\"/><Cell col=\"17\" displaytype=\"date\" style=\"align:center middle;\" text=\"bind:ESTA_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"18\" displaytype=\"date\" style=\"align:center middle;\" text=\"bind:CLSR_DATE\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("41");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHROFFI_NAME", "absolute", "96", "71", "250", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_maxlength("40");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "28", "71", "71", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_text("사업장명");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Shape1", "absolute", "8", null, null, "247", "25", "15", this);
            obj.set_taborder("43");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Edit("edtADDR_DESC", "absolute", "214", null, "286", "21", null, "128", this);
            obj.set_taborder("18");
            obj.set_imemode("hangul");
            obj.set_maxlength("60");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("stBSNS_NUMB", "absolute", "28", null, "80", "21", null, "206", this);
            obj.set_taborder("44");
            obj.set_text("사업자번호");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOWNR_NAME", "absolute", "647", null, "160", "21", null, "206", this);
            obj.set_taborder("7");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "526", null, "97", "21", null, "206", this);
            obj.set_taborder("45");
            obj.set_text("대표자");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "292", null, "69", "21", null, "206", this);
            obj.set_taborder("46");
            obj.set_text("법인번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static6", "absolute", "28", null, "64", "21", null, "180", this);
            obj.set_taborder("47");
            obj.set_text("업태");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBSNS_STAT", "absolute", "109", null, "140", "21", null, "180", this);
            obj.set_taborder("9");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBSNS_TYPE", "absolute", "360", null, "140", "21", null, "180", this);
            obj.set_taborder("10");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static7", "absolute", "292", null, "69", "21", null, "180", this);
            obj.set_taborder("48");
            obj.set_text("업종");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "28", null, "64", "21", null, "128", this);
            obj.set_taborder("49");
            obj.set_text("우편번호");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "28", null, "64", "21", null, "154", this);
            obj.set_taborder("50");
            obj.set_text("전화번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "292", null, "69", "21", null, "154", this);
            obj.set_taborder("51");
            obj.set_text("팩스번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTELE_NUMB", "absolute", "109", null, "140", "21", null, "154", this);
            obj.set_taborder("13");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFAXX_NUMB", "absolute", "360", null, "140", "21", null, "154", this);
            obj.set_taborder("14");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskBSNS_NUMB", "absolute", "110", null, "140", "21", null, "206", this);
            obj.set_taborder("5");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_trimtype("both");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static9", "absolute", "526", null, "97", "21", null, "180", this);
            obj.set_taborder("52");
            obj.set_text("관할세무서");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "526", null, "97", "21", null, "76", this);
            obj.set_taborder("53");
            obj.set_text("홈페이지");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPRNT_NAME", "absolute", "647", null, "231", "21", null, "76", this);
            obj.set_taborder("22");
            obj.set_imemode("alpha");
            obj.set_maxlength("40");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHTSX_IDXX", "absolute", "1001", null, "140", "21", null, "180", this);
            obj.set_taborder("12");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "841", null, "135", "21", null, "180", this);
            obj.set_taborder("54");
            obj.set_text("홈텍스ID");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtADDR_DETL", "absolute", "502", null, "639", "21", null, "128", this);
            obj.set_taborder("19");
            obj.set_imemode("hangul");
            obj.set_maxlength("60");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCNTL_TXOF", "absolute", "647", null, "160", "21", null, "180", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_cssclass("styFormItemText");
            obj.set_type("dropdown");
            obj.set_index("-1");

            obj = new Static("stSUMSHOP_CD", "absolute", "28", null, "80", "21", null, "24", this);
            obj.set_taborder("55");
            obj.set_text("대표사업장");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMAST_OFFI", "absolute", "109", null, "80", "21", null, "24", this);
            obj.set_taborder("37");
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMAST_OFNM", "absolute", "214", null, "286", "21", null, "24", this);
            obj.set_taborder("29");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medJURI_NUMB", "absolute", "360", null, "140", "21", null, "206", this);
            obj.set_taborder("6");
            obj.set_type("string");
            obj.set_mask("######-#######");
            obj.set_trimtype("both");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskPOST_NUMB", "absolute", "109", null, "80", "21", null, "128", this);
            obj.set_taborder("17");
            obj.set_maskchar(" ");
            obj.set_trimtype("both");
            obj.set_enable("true");
            obj.set_type("string");
            obj.set_limitbymask("integer");
            obj.set_readonly("true");
            obj.set_mask("######");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("center middle");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "841", null, "167", "21", null, "154", this);
            obj.set_taborder("56");
            obj.set_text("사업자단위과세승인번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtVATX_UTTN", "absolute", "1001", null, "140", "21", null, "154", this);
            obj.set_taborder("16");
            obj.set_maxlength("7");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "28", null, "64", "21", null, "50", this);
            obj.set_taborder("57");
            obj.set_text("설립일자");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "292", null, "89", "21", null, "50", this);
            obj.set_taborder("58");
            obj.set_text("폐업일자");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "721", null, "103", "21", null, "50", this);
            obj.set_taborder("59");
            obj.set_text("사업장면적(㎡)");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "894", null, "108", "21", null, "50", this);
            obj.set_taborder("60");
            obj.set_text("사업장면적(평)");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calESTA_DATE", "absolute", "109", null, "140", "21", null, "50", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Calendar("calCLSR_DATE", "absolute", "360", null, "140", "21", null, "50", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Static("Static19", "absolute", "894", null, "68", "21", null, "76", this);
            obj.set_taborder("61");
            obj.set_text("정렬순서");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSORT_ORDR", "absolute", "1001", null, "140", "21", null, "76", this);
            obj.set_taborder("23");
            obj.set_imemode("alpha");
            obj.set_inputtype("number");
            obj.set_maxlength("3");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medOFAR_SQMT", "absolute", "828", null, "50", "21", null, "50", this);
            obj.set_taborder("27");
            obj.set_mask("###,###.##");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medOFAR_PYNG", "absolute", "1001", null, "140", "21", null, "50", this);
            obj.set_taborder("28");
            obj.set_mask("###,###.##");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "526", null, "69", "21", null, "50", this);
            obj.set_taborder("62");
            obj.set_text("종업원수");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medEMPL_CONT", "absolute", "647", null, "50", "21", null, "50", this);
            obj.set_taborder("26");
            obj.set_mask("#,###");
            obj.set_trimtype("both");
            obj.set_cssclass("styFormItemText");
            obj.style.set_align("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "12", null, "80", "25", null, "278", this);
            obj.set_taborder("63");
            obj.set_text("지역(대)");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("right middle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "419", null, "73", "25", null, "278", this);
            obj.set_taborder("64");
            obj.set_text("지역(중)");
            obj.set_cssclass("styFormItemCapBE");
            obj.style.set_align("right middle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGBN2_CODE", "absolute", "493", null, "46", "21", null, "282", this);
            obj.set_taborder("34");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGBN2_NAME", "absolute", "604", null, null, "21", "36", "282", this);
            obj.set_taborder("36");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGBN1_CODE", "absolute", "93", null, "44", "21", null, "282", this);
            obj.set_taborder("31");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGBN1_NAME", "absolute", "185", null, "232", "21", null, "282", this);
            obj.set_taborder("33");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAREA_GBN1", "absolute", "138", null, "22", "21", null, "282", this);
            obj.set_taborder("32");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAREA_GBN2", "absolute", "540", null, "39", "21", null, "282", this);
            obj.set_taborder("35");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "526", null, "69", "21", null, "24", this);
            obj.set_taborder("65");
            obj.set_text("대표부서");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_CODE", "absolute", "647", null, "80", "21", null, "24", this);
            obj.set_taborder("38");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAME", "absolute", "752", null, "126", "21", null, "24", this);
            obj.set_taborder("30");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtVATX_TPYN", "absolute", "647", null, "160", "21", null, "154", this);
            obj.set_taborder("15");
            obj.set_maxlength("7");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "526", null, "129", "21", null, "154", this);
            obj.set_taborder("66");
            obj.set_text("총괄납부승인번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbOFFI_GUBN", "absolute", "647", null, "160", "21", null, "232", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_cssclass("styFormItemText");
            obj.set_index("-1");

            obj = new Static("Static21", "absolute", "526", null, "97", "21", null, "232", this);
            obj.set_taborder("67");
            obj.set_text("사업장구분");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOFFI_NAME", "absolute", "360", null, "140", "21", null, "232", this);
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            obj.set_maxlength("40");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "292", null, "69", "21", null, "232", this);
            obj.set_taborder("68");
            obj.set_text("사업장명");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACCT_GUBN", "absolute", "110", null, "140", "21", null, "232", this);
            obj.set_taborder("1");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            obj.set_maxlength("3");
            obj.set_autoselect("true");
            obj.style.set_align("center");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "28", null, "80", "21", null, "232", this);
            obj.set_taborder("69");
            obj.set_text("사업장코드");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpADDR_DESC", "absolute", "191", null, "21", "21", null, "128", this);
            obj.set_taborder("70");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpMANG_ACCT00", "absolute", "162", null, "22", "22", null, "281", this);
            obj.set_taborder("71");
            obj.set_cssclass("sytHelpPopup");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpMAST_OFNM", "absolute", "191", null, "21", "21", null, "24", this);
            obj.set_taborder("72");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpGBN2_NAME", "absolute", "581", null, "22", "22", null, "281", this);
            obj.set_taborder("73");
            obj.set_cssclass("sytHelpPopup");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDEPT_CODE", "absolute", "729", null, "21", "21", null, "24", this);
            obj.set_taborder("74");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "841", null, "135", "21", null, "232", this);
            obj.set_taborder("75");
            obj.set_text("사업장명(영문)");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtENGX_OFFI", "absolute", "1001", null, "140", "21", null, "232", this);
            obj.set_taborder("4");
            obj.set_imemode("hangul");
            obj.set_maxlength("40");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "841", null, "135", "21", null, "206", this);
            obj.set_taborder("76");
            obj.set_text("대표자(영문)");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtENGX_OWNR", "absolute", "1001", null, "140", "21", null, "206", this);
            obj.set_taborder("8");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "28", null, "64", "21", null, "76", this);
            obj.set_taborder("77");
            obj.set_text("관할구청");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCIOF_CODE", "absolute", "109", null, "80", "21", null, "76", this);
            obj.set_taborder("78");
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCIOF_CDNM", "absolute", "191", null, "21", "21", null, "76", this);
            obj.set_taborder("79");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCIOF_CDNM", "absolute", "214", null, "286", "21", null, "76", this);
            obj.set_taborder("21");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("80");
            obj.set_text("사업장정보등록");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("81");
            obj.set_text("홈 > 재무관리 > 재무기준정보");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("82");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("83");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("84");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("85");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("86");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("87");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("88");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("89");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("90");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("91");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("92");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "573", "440", "80", "15", null, null, this);
            obj.set_taborder("93");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "1141", "482", "20", "219", null, null, this);
            obj.set_taborder("94");
            obj.set_text("W\r\n20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "9", "482", "30", "219", null, null, this);
            obj.set_taborder("95");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "28", null, "64", "21", null, "102", this);
            obj.set_taborder("96");
            obj.set_text("영문주소");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtENGL_ADDR", "absolute", "109", null, "1032", "21", null, "102", this);
            obj.set_taborder("20");
            obj.set_imemode("alpha");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_OFFICE");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("사업장정보등록");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtACCT_GUBN_value","edtACCT_GUBN","value","dsTM_OFFICE","ACCT_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtOFFI_NAME_value","edtOFFI_NAME","value","dsTM_OFFICE","OFFI_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbOFFI_GUBN_value","cmbOFFI_GUBN","value","dsTM_OFFICE","OFFI_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtVATX_TPYN_value","edtVATX_TPYN","value","dsTM_OFFICE","VATX_TPYN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edtDEPT_NAME","value","dsTM_OFFICE","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edtDEPT_CODE","value","dsTM_OFFICE","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtAREA_GBN2_value","edtAREA_GBN2","value","dsTM_OFFICE","AREA_GBN2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtAREA_GBN1_value","edtAREA_GBN1","value","dsTM_OFFICE","AREA_GBN1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtGBN1_NAME_value","edtGBN1_NAME","value","dsTM_OFFICE","GBN1_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtGBN1_CODE_value","edtGBN1_CODE","value","dsTM_OFFICE","GBN1_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtGBN2_NAME_value","edtGBN2_NAME","value","dsTM_OFFICE","GBN2_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtGBN2_CODE_value","edtGBN2_CODE","value","dsTM_OFFICE","GBN2_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medEMPL_CONT_value","medEMPL_CONT","value","dsTM_OFFICE","EMPL_CONT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medOFAR_PYNG_value","medOFAR_PYNG","value","dsTM_OFFICE","OFAR_PYNG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medOFAR_SQMT_value","medOFAR_SQMT","value","dsTM_OFFICE","OFAR_SQMT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtSORT_ORDR_value","edtSORT_ORDR","value","dsTM_OFFICE","SORT_ORDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calCLSR_DATE_value","calCLSR_DATE","value","dsTM_OFFICE","CLSR_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calESTA_DATE_value","calESTA_DATE","value","dsTM_OFFICE","ESTA_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtVATX_UTTN_value","edtVATX_UTTN","value","dsTM_OFFICE","VATX_UTTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskPOST_NUMB_value","mskPOST_NUMB","value","dsTM_OFFICE","POST_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("medJURI_NUMB_value","medJURI_NUMB","value","dsTM_OFFICE","JURI_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMAST_OFNM_value","edtMAST_OFNM","value","dsTM_OFFICE","MAST_OFNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtMAST_OFFI_value","edtMAST_OFFI","value","dsTM_OFFICE","MAST_OFFI");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbCNTL_TXOF_value","cmbCNTL_TXOF","value","dsTM_OFFICE","CNTL_TXOF");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtADDR_DETL_value","edtADDR_DETL","value","dsTM_OFFICE","ADDR_DETL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtHTSX_IDXX_value","edtHTSX_IDXX","value","dsTM_OFFICE","HTSX_IDXX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtPRNT_NAME_value","edtPRNT_NAME","value","dsTM_OFFICE","OFFI_HMPG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskBSNS_NUMB_value","mskBSNS_NUMB","value","dsTM_OFFICE","BSNS_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtFAXX_NUMB_value","edtFAXX_NUMB","value","dsTM_OFFICE","FAXX_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtTELE_NUMB_value","edtTELE_NUMB","value","dsTM_OFFICE","TELE_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBSNS_TYPE_value","edtBSNS_TYPE","value","dsTM_OFFICE","BSNS_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBSNS_STAT_value","edtBSNS_STAT","value","dsTM_OFFICE","BSNS_STAT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtOWNR_NAME_value","edtOWNR_NAME","value","dsTM_OFFICE","OWNR_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtADDR_DESC_value","edtADDR_DESC","value","dsTM_OFFICE","ADDR_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edtENGX_OFFI","value","dsTM_OFFICE","ENGX_OFFI");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtENGX_OWNR","value","dsTM_OFFICE","ENGX_OWNR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtCIOF_CODE","value","dsTM_OFFICE","CIOF_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtCIOF_CDNM","value","dsTM_OFFICE","CIOF_CDNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtENGL_ADDR","value","dsTM_OFFICE","ENGL_ADDR");
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
        this.addIncludeScript("FAMA0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FAMA0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FAMA0010 사업장정보등록
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.22		안윤준		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         *********************************** *****************************************************************
         *   Form Common Script
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다. 
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.  
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리  
         *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                         
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ********************************************************************************INBUS*CO*KR********/

        
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST 	= "TTTTTTTF";
        this.sPACKAGENAME 	= "FAMA0010";

        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {

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
        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e){
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GridSetting(this);
        	this.fn_Search();

        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj,e){
        	this.close();
        	
        }

        /*------------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck())	return;
        	this.fnc_DatasetClear("dsTM_OFFICE");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsTM_OFFICE=dsTM_OFFICE";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTM_OFFICE.setFocus();

        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj,e){
        	var nRow = this.dsTM_OFFICE.addRow();
        	this.edtACCT_GUBN.setFocus();
        	
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) this.dsTM_OFFICE.deleteRow(this.dsTM_OFFICE.rowposition);
        	this.grdTM_OFFICE.setFocus();

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsTM_OFFICE");
        	this.grdTM_OFFICE.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsTM_OFFICE=dsTM_OFFICE:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");		
        	this.grdTM_OFFICE.setFocus();

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
        	
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTM_OFFICE", this);
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

        /*------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsTM_OFFICE")) {
        		return this.fnc_Message("TMM023");
        	}
        	
        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsTM_OFFICE.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var sQuestionText  = "코드 : ("+this.grdTM_OFFICE.getCellText(this.grdTM_OFFICE.currentrow, this.grdTM_OFFICE.getBindCellIndex( "body", "ACCT_GUBN"));
        		sQuestionText += ") 사업장명 : ("+this.grdTM_OFFICE.getCellText(this.grdTM_OFFICE.currentrow, this.grdTM_OFFICE.getBindCellIndex( "body", "OFFI_NAME")) + ")";
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsTM_OFFICE")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	for (var i = 0; i < this.dsTM_OFFICE.getRowCount(); i++) {
        		
        		if (this.dsTM_OFFICE.getRowType(i) == Dataset.ROWTYPE_NORMAL)	continue;		
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_OFFICE.getColumn(i, "ACCT_GUBN"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "사업장코드", this.dsTM_OFFICE, i, this.edtACCT_GUBN, "");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_OFFICE.getColumn(i, "OFFI_NAME"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "사업자명", this.dsTM_OFFICE, i, this.edtOFFI_NAME, "");
        		}		

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_OFFICE.getColumn(i, "OFFI_GUBN"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "사업장구분", this.dsTM_OFFICE, i, this.cmbOFFI_GUBN, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_OFFICE.getColumn(i, "BSNS_NUMB"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "사업자번호", this.dsTM_OFFICE, i, this.mskBSNS_NUMB, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_OFFICE.getColumn(i, "CNTL_TXOF"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "관할세무서", this.dsTM_OFFICE, i, this.cmbCNTL_TXOF, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_OFFICE.getColumn(i, "POST_NUMB"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "우편번호", this.dsTM_OFFICE, i, this.mskPOST_NUMB, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_OFFICE.getColumn(i, "CIOF_CODE"))) < 1)	{
        			return this.fnc_CheckPostAction("TMM072", "관할구청", this.dsTM_OFFICE, i, this.edtCIOF_CDNM, "");
        		}

        	}

        	return true;

        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " OFFI_NAME=" + this.fnc_Quote(this.fnc_Trim(this.edtSHROFFI_NAME.value));  //사업장명 

        	} else if (sKind == "SAVE00") {

        		sReturnString  = " pgm="    + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);

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

        	if (sMethodName == "SEARCH00"){

        		this.fnc_Information(this.stInformation, this.dsTM_OFFICE.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTM_OFFICE.getCaseCount("dataset.getRowLevel(currow)==0"));

        	} else if (sMethodName == "SAVE00") {

        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "GetCommCode") {

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbOFFI_GUBN,dsOFFI_GUBN,0";
        			arrParam[1] = "COMBO,cmbCNTL_TXOF,dsCNTL_TXOF,0";
        			arrParam[2] = "GRID,grdTM_OFFICE,dsOFFI_GUBN,OFFI_GUBN";
        			arrParam[3] = "GRID,grdTM_OFFICE,dsCNTL_TXOF,CNTL_TXOF";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	}

        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e){

        	if (e.newrow < 0) return;

        	if (this.fnc_ToUpper(obj.getRowType(e.newrow)) == Dataset.ROWTYPE_INSERT) {
        		this.fnc_SetReadonly(this.edtACCT_GUBN, false);
        		this.fnc_SetReadonly(this.mskBSNS_NUMB, false);
        	} else {
        		this.fnc_SetReadonly(this.edtACCT_GUBN, true);
        		this.fnc_SetReadonly(this.mskBSNS_NUMB, true);
        	}

        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();
            
            if ((obj.name == "imgHelpADDR_DESC")) {
        		
         		arrParam[0] = "COMPOST";  
         		arrParam[1] = "";
         		arrParam[2] = "";
         		arrParam[3] = "N";
         		arrParam[4] = "edtADDR_DESC";
         		arrParam[5] = "mskPOST_NUMB,edtADDR_DESC,edtADDR_DETL"; // 1. 우편번호 2. 주소 3. 상세주소[건물명]
         		arrParam[6] = "";
         		
        	} else if ((obj.name == "imgHelpCIOF_CDNM") || (sColumnID == "CIOF_CDNM")) { // 관할구청
        		
        		arrParam[0] = "FAM0009";
                arrParam[1] = "CIOF_CODE";
                arrParam[2] = this.fnc_Trim(this.edtCIOF_CDNM.value);
                arrParam[3] = "N";
                arrParam[4] = "edtCIOF_CDNM";
                arrParam[5] = "edtCIOF_CODE,edtCIOF_CDNM";
                arrParam[6] = "0,1";
                arrParam[7] = sFromDs;
        		arrParam[8] = sOldValue;

        //     } else if ((obj.name == "imgHelpMANG_ACCT00") || (sColumnID == "GBN1_NAME")) { // 지역(대)
        // 
        //         arrParam[0] = "TMM0006";
        //         arrParam[1] = "D%";
        //         arrParam[2] = this.fnc_Trim(this.edtGBN1_NAME.value);
        //         arrParam[3] = "N";
        //         arrParam[4] = "edtGBN1_NAME";
        //         arrParam[5] = "edtGBN1_CODE,edtAREA_GBN1,edtGBN1_NAME";
        //         arrParam[6] = "0,1,2";
        //         arrParam[7] = sFromDs;
        // 		arrParam[8] = sOldValue;
        // 
        //     } else if ((obj.name == "imgHelpGBN2_NAME") || (sColumnID == "GBN2_NAME")) { // 지역(중)
        // 
        //         arrParam[0] = "TMM0007";
        //         arrParam[1] = "D%";
        //         arrParam[2] = this.fnc_Trim(this.edtGBN2_NAME.value);
        //         arrParam[3] = "N";
        //         arrParam[4] = "edtGBN2_NAME";
        //         arrParam[5] = "edtGBN2_CODE,edtAREA_GBN2,edtGBN2_NAME";
        //         arrParam[6] = "0,1,2";
        //         arrParam[7] = sFromDs;
        // 		arrParam[8] = sOldValue;

            } else if ((obj.name == "imgHelpMAST_OFNM") || (sColumnID == "MAST_OFNM")) { // 대표사업장

                arrParam[0] = "TMM0008";
                arrParam[1] = "D%";
                arrParam[2] = this.fnc_Trim(this.edtMAST_OFNM.value);
                arrParam[3] = "N";
                arrParam[4] = "edtMAST_OFNM";
                arrParam[5] = "edtMAST_OFFI,edtMAST_OFNM";
                arrParam[6] = "0,1";
                arrParam[7] = sFromDs;
        		arrParam[8] = sOldValue;

            } else if((obj.name == "imgHelpDEPT_CODE") || (sColumnID == "DEPT_NAME")) { // 대표부서
        		
        		arrParam[0] = "FAM0001";
                arrParam[1] = "D%";
                arrParam[2] = this.fnc_Trim(this.edtDEPT_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtDEPT_NAME";
                arrParam[5] = "edtDEPT_CODE,edtDEPT_NAME";
                arrParam[6] = "0,1";
                arrParam[7] = sFromDs;
        		arrParam[8] = sOldValue;

            }
            
            if ( arrParam != '' || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);
            
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-----------------------------+
         |  데이터셋 변경 시 팝업호출  |
         +-----------------------------*/
        this.dsTM_OFFICE_oncolumnchanged = function(obj,e) {
        	
        	if ( 	e.columnid == "ADDR_DESC" || e.columnid == "CIOF_CDNM" || e.columnid == "GBN1_NAME" 
        		 || e.columnid == "GBN2_NAME" || e.columnid == "MAST_OFNM" || e.columnid == "DEPT_NAME" ) {
        		
        		this.fn_HelpDialoge(this.components["edt"+e.columnid], "YES", e.oldvalue, e.columnid);
        		
        	} 
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_OFFICE.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTM_OFFICE.addEventHandler("oncolumnchanged", this.dsTM_OFFICE_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.edtSHROFFI_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtADDR_DESC.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtOWNR_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBSNS_STAT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBSNS_TYPE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtTELE_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtFAXX_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskBSNS_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPRNT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtHTSX_IDXX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtADDR_DETL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbCNTL_TXOF.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtMAST_OFFI.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtMAST_OFNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medJURI_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskPOST_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtVATX_UTTN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calESTA_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calCLSR_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSORT_ORDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medOFAR_SQMT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medOFAR_PYNG.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medEMPL_CONT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtGBN2_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtGBN2_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtGBN1_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtGBN1_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtAREA_GBN1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtAREA_GBN2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtVATX_TPYN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbOFFI_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtOFFI_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpADDR_DESC.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpMANG_ACCT00.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpMAST_OFNM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpGBN2_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtENGX_OFFI.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtENGX_OWNR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCIOF_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpCIOF_CDNM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtCIOF_CDNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtENGL_ADDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("FAMA0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
