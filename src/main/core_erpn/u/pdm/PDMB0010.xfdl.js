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
                this.set_name("PDMB0010");
                this.set_titletext("제작의뢰서등록");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsAPPR_STAT</Col><Col id=\"CODEID\">APPR_STAT</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsSHRAPPR_STAT</Col><Col id=\"CODEID\">APPR_STAT</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsSHRCLAS_CODE</Col><Col id=\"CODEID\">CLAS_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsCLAS_CODE</Col><Col id=\"CODEID\">CLAS_CODE</Col><Col id=\"HEADFLAG\">SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_JOBNXM", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CTIM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CTIM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQU_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_EMPL\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_EMPL\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_EMPN\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_EMPL\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_EMPN\" type=\"STRING\" size=\"256\"/><Column id=\"MEDA_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEDA_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_LEVL\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"DEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"DOCU_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_SEQN\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"APPR_STAT_PROC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_COMBO", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CLAS_TYPE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"COMB_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMB_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GUBN_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_JOBNXM_RPT", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CTIM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CTIM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQU_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_EMPL\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_EMPL\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_EMPN\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_EMPL\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_EMPN\" type=\"STRING\" size=\"256\"/><Column id=\"MEDA_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEDA_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_LEVL\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"DEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_JOBOXM_RPT", this);
            obj._setContents("<ColumnInfo><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OUTS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OUTS_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_APPRXH", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_BOX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DOCU_IDXX\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQN\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMPL_NAME\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBJ_NAME\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_STR\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_STAT_PROC\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_DATE\" size=\"12\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_APPROVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"documentID\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"documentType\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"HtmlDocument\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"subject\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"recipient\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"creator\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"documentStatus\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"isUsedFile\" size=\"3\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdPD_JOBNXM", "absolute", "8", "154", null, null, "26", "199", this);
            obj.set_binddataset("dsPD_JOBNXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("1");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"250\"/><Column size=\"90\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" rowspan=\"2\" style=\"background: ;\" text=\"제작명\"/><Cell col=\"2\" rowspan=\"2\" style=\"background: ;\" text=\"제작번호\"/><Cell col=\"3\" rowspan=\"2\" style=\"background: ;\" text=\"광고주코드\"/><Cell col=\"4\" rowspan=\"2\" style=\"background: ;\" text=\"광고주명\"/><Cell col=\"5\" rowspan=\"2\" text=\"광고주팀코드\"/><Cell col=\"6\" rowspan=\"2\" text=\"광고주팀명\"/><Cell col=\"7\" rowspan=\"2\" style=\"background: ;\" text=\"제작의뢰일\"/><Cell col=\"8\" rowspan=\"2\" style=\"background: ;\" text=\"제작완료희망일\"/><Cell col=\"9\" rowspan=\"2\" style=\"background: ;\" text=\"제작내용\"/><Cell col=\"10\" rowspan=\"2\" style=\"background: ;\" text=\"제작종류\"/><Cell col=\"11\" rowspan=\"2\" style=\"background: ;\" text=\"제작용도\"/><Cell col=\"12\" rowspan=\"2\" text=\"진행상태\"/><Cell col=\"13\" rowspan=\"2\" text=\"광고주담당자\"/><Cell col=\"14\" rowspan=\"2\" style=\"background: ;\" text=\"기획담당팀코드\"/><Cell col=\"15\" rowspan=\"2\" style=\"background: ;\" text=\"기획&#13;&#10;담당팀명\"/><Cell col=\"16\" rowspan=\"2\" style=\"background: ;\" text=\"기획&#13;&#10;담당자코드\"/><Cell col=\"17\" rowspan=\"2\" style=\"background: ;\" text=\"기획&#13;&#10;담당자명\"/><Cell col=\"18\" rowspan=\"2\" style=\"background: ;\" text=\"제작&#13;&#10;담당팀코드\"/><Cell col=\"19\" rowspan=\"2\" style=\"background: ;\" text=\"제작&#13;&#10;담당팀명\"/><Cell col=\"20\" rowspan=\"2\" style=\"background: ;\" text=\"제작&#13;&#10;담당자코드\"/><Cell col=\"21\" rowspan=\"2\" style=\"background: ;\" text=\"제작&#13;&#10;담당자명\"/><Cell col=\"22\" rowspan=\"2\" text=\"비고\"/><Cell col=\"23\" rowspan=\"2\" text=\"청구일자\"/><Cell col=\"24\" rowspan=\"2\" text=\"규격\"/><Cell col=\"25\" colspan=\"2\" text=\"전자결재\"/><Cell row=\"1\" col=\"25\" displaytype=\"normal\" text=\"결재상태\"/><Cell row=\"1\" col=\"26\" text=\"처리\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:JOBN_NAME\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:JOBN_NUMB\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CUST_CODE\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CUST_NAME\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CTIM_CODE\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CTIM_NAME\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"none\" text=\"bind:REQU_DATE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"none\" text=\"bind:COMP_DATE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"9\" displaytype=\"combo\" edittype=\"none\" text=\"bind:MEDA_CODE\" combodisplay=\"edit\"/><Cell col=\"10\" displaytype=\"combo\" edittype=\"none\" text=\"bind:HIGH_LEVL\" combodataset=\"dsPD_COMBO\" combocodecol=\"COMB_CODE\" combodatacol=\"COMB_NAME\" combodisplay=\"edit\"/><Cell col=\"11\" displaytype=\"combo\" edittype=\"none\" text=\"bind:USEX_TYPE\" combodisplay=\"edit\"/><Cell col=\"12\" displaytype=\"combo\" edittype=\"none\" text=\"bind:STAT_FLAG\" combodisplay=\"edit\"/><Cell col=\"13\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CUST_EMPL\"/><Cell col=\"14\" displaytype=\"normal\" edittype=\"none\" text=\"bind:PLAN_DEPT\"/><Cell col=\"15\" displaytype=\"normal\" edittype=\"none\" text=\"bind:PLAN_NAME\"/><Cell col=\"16\" displaytype=\"normal\" edittype=\"none\" text=\"bind:PLAN_EMPL\"/><Cell col=\"17\" displaytype=\"normal\" edittype=\"none\" text=\"bind:PLAN_EMPN\"/><Cell col=\"18\" displaytype=\"normal\" edittype=\"none\" text=\"bind:PROD_DEPT\"/><Cell col=\"19\" displaytype=\"normal\" edittype=\"none\" text=\"bind:PROD_NAME\"/><Cell col=\"20\" displaytype=\"normal\" edittype=\"none\" text=\"bind:PROD_EMPL\"/><Cell col=\"21\" displaytype=\"normal\" edittype=\"none\" text=\"bind:PROD_EMPN\"/><Cell col=\"22\" displaytype=\"normal\" edittype=\"none\" text=\"bind:MEMO_FILD\"/><Cell col=\"23\" displaytype=\"date\" edittype=\"none\" text=\"bind:DEND_DATE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"24\" displaytype=\"normal\" edittype=\"none\" text=\"bind:JOBN_SIZE\"/><Cell col=\"25\" displaytype=\"combo\" text=\"bind:APPR_STAT\"/><Cell col=\"26\" displaytype=\"expr:APPR_STAT == &quot;&quot; ? &quot;none&quot; : &quot;button&quot;\" edittype=\"expr:APPR_STAT == &quot;&quot; ? &quot;none&quot; : &quot;button&quot;\" text=\"bind:APPR_STAT_PROC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "9", "133", null, "21", "906", null, this);
            obj.set_taborder("6");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("29");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTYPE_NAME", "absolute", "28", "71", "78", "22", null, null, this);
            obj.set_taborder("31");
            obj.set_text("제작의뢰일");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchMEDA_CODE", "absolute", "28", "97", "78", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_text("제작내용");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchHIGH_LEVL", "absolute", "358", "97", "67", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("제작종류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "358", "71", "67", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("광고주");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "426", "71", "80", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_NAME", "absolute", "508", "71", "21", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "531", "71", "140", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "701", "71", "60", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_text("제작명");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRJOBN_NUMB", "absolute", "769", "71", "80", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRJOBN_NAME", "absolute", "851", "71", "25", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRJOBN_NAME", "absolute", "874", "71", "200", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchUSEX_TYPE", "absolute", "519", "97", "60", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_text("제작용도");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRUSEX_TYPE", "absolute", "587", "97", "84", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("47");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_displaynulltext("전체");

            obj = new Static("imgSearchSTAT_FLAG", "absolute", "700", "97", "69", "21", null, null, this);
            obj.set_taborder("48");
            obj.set_text("진행상태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSTAT_FLAG", "absolute", "768", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("49");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_displaynulltext("전체");

            obj = new Combo("cmbSHRMEDA_CODE", "absolute", "108", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("50");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_displaynulltext("전체");

            obj = new Combo("cmbSHRHIGH_LEVL", "absolute", "426", "97", "92", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("51");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_displaynulltext("전체");

            obj = new Static("st_FormTitle", "absolute", "9", "0", "651", "29", null, null, this);
            obj.set_taborder("135");
            obj.set_text("제작의뢰서등록");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "510", "29", "25", null, this);
            obj.set_taborder("136");
            obj.set_text("홈 > 제작시스템>제작관리>제작의뢰>제작의뢰서등록");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("138");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "101", "61", "8", "67", null, null, this);
            obj.set_taborder("139");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Calendar("edtSHRFROM_REQD", "absolute", "108", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("140");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Calendar("edtSHRTO_REQD", "absolute", "228", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("141");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Static("Static55", "absolute", "213", "71", "14", "21", null, null, this);
            obj.set_taborder("142");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("143");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "328", "61", "40", "67", null, null, this);
            obj.set_taborder("144");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "418", "61", "8", "67", null, null, this);
            obj.set_taborder("145");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "671", "61", "40", "67", null, null, this);
            obj.set_taborder("146");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "761", "61", "8", "67", null, null, this);
            obj.set_taborder("147");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "30", "0", this);
            obj.set_taborder("149");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "1161", "0", null, "717", "0", null, this);
            obj.set_taborder("150");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "572", "129", "80", "25", null, null, this);
            obj.set_taborder("151");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox03", "absolute", "8", null, null, "169", "26", "15", this);
            obj.set_taborder("152");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("staCTIM_CODE", "absolute", "1208", null, "80", "21", null, "154", this);
            obj.set_taborder("57");
            obj.set_text("광고주 팀");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staPLAN_DEPT", "absolute", "422", null, "80", "21", null, "128", this);
            obj.set_taborder("58");
            obj.set_text("기획 담당팀");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("staPLAN_EMPL", "absolute", "793", null, "104", "21", null, "128", this);
            obj.set_taborder("59");
            obj.set_text("기획 담당자");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "28", null, "128", "21", null, "128", this);
            obj.set_taborder("60");
            obj.set_text("광고주 팀 & 담당자");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("staREQU_DATE", "absolute", "29", null, "100", "21", null, "102", this);
            obj.set_taborder("63");
            obj.set_text("제작의뢰일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("staPROD_DEPT", "absolute", "422", null, "80", "21", null, "102", this);
            obj.set_taborder("65");
            obj.set_text("제작 담당팀");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("staPROD_EMPL", "absolute", "793", null, "104", "21", null, "102", this);
            obj.set_taborder("66");
            obj.set_text("제작 담당자");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCUST_EMPL", "absolute", "162", null, "199", "21", null, "128", this);
            obj.set_taborder("71");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("255");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_JOBNXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCUST_CODE", "absolute", "218", null, "25", "21", null, "154", this);
            obj.set_taborder("80");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("staCOMP_DATE", "absolute", "29", null, "100", "21", null, "76", this);
            obj.set_taborder("83");
            obj.set_text("제작완료희망일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("staMEMO_FILD", "absolute", "29", null, "100", "21", null, "50", this);
            obj.set_taborder("85");
            obj.set_text("비고");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("staMEDA_CODE", "absolute", "422", null, "80", "21", null, "76", this);
            obj.set_taborder("88");
            obj.set_text("제작내용");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCTIM_CODE", "absolute", "1376", null, "21", "21", null, "154", this);
            obj.set_taborder("91");
            obj.set_cssclass("sytHelpPopup");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpPLAN_DEPT", "absolute", "590", null, "21", "21", null, "128", this);
            obj.set_taborder("94");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpPROD_DEPT", "absolute", "590", null, "21", "21", null, "102", this);
            obj.set_taborder("97");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("staHIGH_LEVL", "absolute", "422", null, "80", "21", null, "50", this);
            obj.set_taborder("99");
            obj.set_text("제작종류");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("staUSEX_TYPE", "absolute", "422", null, "80", "21", null, "24", this);
            obj.set_taborder("100");
            obj.set_text("제작용도");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("staJOBN_SIZE", "absolute", "793", null, "104", "21", null, "76", this);
            obj.set_taborder("104");
            obj.set_text("규격");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("staPERF_DIST", "absolute", "793", null, "104", "21", null, "50", this);
            obj.set_taborder("106");
            obj.set_text("실적분배율등록");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Button("btnPERF_DIST", "absolute", "900", null, "103", "21", null, "50", this);
            obj.set_taborder("107");
            obj.set_text("실적 분배율 등록");
            obj.set_cssclass("styTextButtonBizProc");
            obj.style.set_align("center");
            obj.getSetter("UserData").set("P");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpPLAN_EMPL", "absolute", "982", null, "21", "21", null, "128", this);
            obj.set_taborder("109");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpPROD_EMPL", "absolute", "982", null, "21", "21", null, "102", this);
            obj.set_taborder("112");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJOBN_NAME", "absolute", "508", null, "617", "21", null, "154", this);
            obj.set_taborder("115");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_JOBNXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCUST_CODE", "absolute", "136", null, "80", "21", null, "154", this);
            obj.set_taborder("116");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsPD_JOBNXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCUST_NAME", "absolute", "241", null, "120", "21", null, "154", this);
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_JOBNXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCTIM_CODE", "absolute", "1294", null, "80", "21", null, "154", this);
            obj.set_taborder("118");
            obj.set_imemode("none");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsPD_JOBNXM");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCTIM_NAME", "absolute", "1399", null, "120", "21", null, "154", this);
            obj.set_taborder("119");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_JOBNXM");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPLAN_DEPT", "absolute", "508", null, "80", "21", null, "128", this);
            obj.set_taborder("120");
            obj.set_imemode("none");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsPD_JOBNXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPLAN_NAME", "absolute", "613", null, "120", "21", null, "128", this);
            obj.set_taborder("121");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_JOBNXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPLAN_EMPL", "absolute", "900", null, "80", "21", null, "128", this);
            obj.set_taborder("122");
            obj.set_imemode("none");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsPD_JOBNXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPLAN_EMPN", "absolute", "1005", null, "120", "21", null, "128", this);
            obj.set_taborder("123");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_JOBNXM");
            this.addChild(obj.name, obj);

            obj = new Calendar("calREQU_DATE", "absolute", "136", null, "151", "21", null, "102", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("124");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsPD_JOBNXM");

            obj = new Edit("edtPROD_DEPT", "absolute", "508", null, "80", "21", null, "102", this);
            obj.set_taborder("125");
            obj.set_imemode("none");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsPD_JOBNXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPROD_NAME", "absolute", "613", null, "120", "21", null, "102", this);
            obj.set_taborder("126");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_JOBNXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPROD_EMPL", "absolute", "900", null, "80", "21", null, "102", this);
            obj.set_taborder("127");
            obj.set_imemode("none");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("0");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsPD_JOBNXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPROD_EMPN", "absolute", "1005", null, "120", "21", null, "102", this);
            obj.set_taborder("128");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_JOBNXM");
            this.addChild(obj.name, obj);

            obj = new Calendar("calCOMP_DATE", "absolute", "136", null, "151", "21", null, "76", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("129");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsPD_JOBNXM");

            obj = new Combo("cmbMEDA_CODE", "absolute", "508", null, "225", "21", null, "76", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("130");
            obj.set_type("search");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsPD_JOBNXM");
            obj.set_displaynulltext("선택");

            obj = new Combo("cmbHIGH_LEVL", "absolute", "508", null, "225", "21", null, "50", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("131");
            obj.set_type("search");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsPD_JOBNXM");
            obj.set_innerdataset("@dsPD_COMBO");
            obj.set_datacolumn("COMB_NAME");
            obj.set_codecolumn("COMB_CODE");
            obj.set_displaynulltext("선택");

            obj = new Combo("cmbUSEX_TYPE", "absolute", "508", null, "225", "21", null, "24", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("132");
            obj.set_type("search");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsPD_JOBNXM");
            obj.set_displaynulltext("선택");
            obj.set_index("-1");

            obj = new Edit("edtJOBN_SIZE", "absolute", "900", null, "103", "21", null, "76", this);
            obj.set_taborder("133");
            obj.set_inputmode("normal");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("255");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_JOBNXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMEMO_FILD", "absolute", "136", null, "225", "47", null, "24", this);
            obj.set_taborder("134");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("255");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_JOBNXM");
            this.addChild(obj.name, obj);

            obj = new Static("staJOBN_NAME", "absolute", "422", null, "100", "21", null, "154", this);
            obj.set_taborder("54");
            obj.set_text("제작명");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("staselectCUST_NAME", "absolute", "29", null, "100", "21", null, "154", this);
            obj.set_taborder("55");
            obj.set_text("광고주");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "537", "0", "32", "60", null, null, this);
            obj.set_taborder("153");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("154");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("157");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "8", "148", "216", "6", null, null, this);
            obj.set_taborder("158");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "48.61", "518", "80", "15", null, null, this);
            obj.set_taborder("159");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("staPERF_DIST00", "absolute", "793", null, "101", "21", null, "26", this);
            obj.set_taborder("160");
            obj.set_text("실행예산등록");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Button("btnOUTS_AMTX", "absolute", "900", null, "143", "21", null, "26", this);
            obj.set_taborder("161");
            obj.set_text("외주업체 실행예산 등록");
            obj.set_cssclass("styTextButtonBizProc");
            obj.style.set_align("center");
            obj.getSetter("UserData").set("P");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "861", "97", "70", "21", null, null, this);
            obj.set_taborder("162");
            obj.set_text("결재상태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRAPPR_STAT", "absolute", "929", "97", "145", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("163");
            obj.set_innerdataset("@dsCombo");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("제작의뢰서등록");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","edtCUST_EMPL","value","dsPD_JOBNXM","CUST_EMPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtCUST_EMPL","binddataset","dsPD_JOBNXM","CUST_EMPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtBUTY_NAME_value","edtJOBN_NAME","value","dsPD_JOBNXM","JOBN_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDTL1_ADDR_value","edtCUST_CODE","value","dsPD_JOBNXM","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edtCUST_NAME","value","dsPD_JOBNXM","CUST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtCTIM_CODE","value","dsPD_JOBNXM","CTIM_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtCTIM_NAME","value","dsPD_JOBNXM","CTIM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edtPLAN_DEPT","value","dsPD_JOBNXM","PLAN_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edtPLAN_DEPT","binddataset","dsPD_JOBNXM","PLAN_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edtJOBN_NAME","binddataset","dsPD_JOBNXM","JOBN_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edtCTIM_NAME","binddataset","dsPD_JOBNXM","CTIM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edtCTIM_CODE","binddataset","dsPD_JOBNXM","CTIM_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edtCUST_NAME","binddataset","dsPD_JOBNXM","CUST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edtCUST_CODE","binddataset","dsPD_JOBNXM","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","edtPLAN_NAME","value","dsPD_JOBNXM","PLAN_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edtPLAN_NAME","binddataset","dsPD_JOBNXM","PLAN_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edtPLAN_EMPL","value","dsPD_JOBNXM","PLAN_EMPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","edtPLAN_EMPL","binddataset","dsPD_JOBNXM","PLAN_EMPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edtPLAN_EMPN","value","dsPD_JOBNXM","PLAN_EMPN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edtPLAN_EMPN","binddataset","dsPD_JOBNXM","PLAN_EMPN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calESTA_DATE_value","calREQU_DATE","value","dsPD_JOBNXM","REQU_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","calREQU_DATE","binddataset","dsPD_JOBNXM","REQU_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","edtPROD_DEPT","value","dsPD_JOBNXM","PROD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","edtPROD_DEPT","binddataset","dsPD_JOBNXM","PROD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","edtPROD_NAME","value","dsPD_JOBNXM","PROD_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","edtPROD_NAME","binddataset","dsPD_JOBNXM","PROD_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","edtPROD_EMPL","value","dsPD_JOBNXM","PROD_EMPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","edtPROD_EMPL","binddataset","dsPD_JOBNXM","PROD_EMPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","edtPROD_EMPN","value","dsPD_JOBNXM","PROD_EMPN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","edtPROD_EMPN","binddataset","dsPD_JOBNXM","PROD_EMPN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","calCOMP_DATE","value","dsPD_JOBNXM","COMP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","calCOMP_DATE","binddataset","dsPD_JOBNXM","COMP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("cmbPBGN_CODE_value","cmbMEDA_CODE","value","dsPD_JOBNXM","MEDA_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","cmbMEDA_CODE","binddataset","dsPD_JOBNXM","MEDA_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","cmbHIGH_LEVL","value","dsPD_JOBNXM","HIGH_LEVL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","cmbHIGH_LEVL","binddataset","dsPD_JOBNXM","HIGH_LEVL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","cmbUSEX_TYPE","value","dsPD_JOBNXM","USEX_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","cmbUSEX_TYPE","binddataset","dsPD_JOBNXM","USEX_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","edtJOBN_SIZE","value","dsPD_JOBNXM","JOBN_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","edtJOBN_SIZE","binddataset","dsPD_JOBNXM","JOBN_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","edtMEMO_FILD","value","dsPD_JOBNXM","MEMO_FILD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","edtMEMO_FILD","binddataset","dsPD_JOBNXM","MEMO_FILD");
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
        this.addIncludeScript("PDMB0010.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("PDMB0010.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("PDMB0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PDMB0010 제작의뢰서등록
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.31		오세훈		Initial Created.
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
        //include "script::lib_script_ubireport.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST 	= "TTTTTTTT"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME 	= "PDMB0010"; //해당 Form에서 사용 할 Package 명
        this.sFILE_NAME   	= "";			//파일명
        this.sFILE_PATH   	= "";			//파일경로

        var sAPPRGUBN 	= "";	// 결재처리구분 [ list : 목록, del : 결재취소, show : 조회, cre : 상신 ]
        var sAPPRSEQN 	= "";	// 결재문서 SEQ
        var sAPPRSTAT   = "";   // 결재문서 상태

        
        var sDOCUID = ""; // 제작전자결재

        
        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {

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
        	
        	
        	/*신청 및 내역에서 선택된 신청서 종류를 setting*/
        	this.sDOCUID 	= "KPD101"; // 제작 전자결재

        	//최초 날짜 세팅
        	this.edtSHRFROM_REQD.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 )+'01');
        	this.edtSHRTO_REQD.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ) + this.fnc_GetLastDayOfMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"))));

        	
        	
        	//제작종류 콤보 데이터셋 가져오기
        	this.fn_getHigh_codeCombo();

        	this.fn_Search();

        
        } 
        /*----------------------------------+
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
        	this.fnc_DatasetClear("dsPD_JOBNXM");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPD_JOBNXM=dsPD_JOBNXM dsTM_APPRXH=dsTM_APPRXH";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	this.fnc_GridSetCellFocus(this.grdPD_JOBNXM,"JOBN_NUMB");

        
        }

        
        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	var iRow = this.dsPD_JOBNXM.insertRow(this.dsPD_JOBNXM.rowposition + 1);
        	this.dsPD_JOBNXM.set_rowposition(iRow);
         	this.dsPD_JOBNXM.setColumn(iRow, "REQU_DATE", this.fnc_GetServerDateTime("DATE"));
         	this.dsPD_JOBNXM.setColumn(iRow, "COMP_DATE", this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ) + this.fnc_GetLastDayOfMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"))));
        	this.dsPD_JOBNXM.setColumn(iRow, "STAT_FLAG", "SF01");
        	this.dsPD_JOBNXM.setColumn(iRow, "USEX_TYPE", "1");
        	this.dsPD_JOBNXM.setColumn(iRow, "EMPL_NUMB", application.GBL_EMPLNO);
        	this.dsPD_JOBNXM.setColumn(iRow, "PLAN_DEPT", application.GBL_DEPTCD);
        	this.dsPD_JOBNXM.setColumn(iRow, "PLAN_NAME", application.GBL_DEPTNM);
        	this.dsPD_JOBNXM.setColumn(iRow, "PLAN_EMPL", application.GBL_EMPLNO);
        	this.dsPD_JOBNXM.setColumn(iRow, "PLAN_EMPN", application.GBL_USERNM);
        	
        	//전자결재 관련
        	this.dsPD_JOBNXM.setColumn(iRow,"DOCU_IDXX",this.sDOCUID);
        	this.dsPD_JOBNXM.setColumn(iRow, "APPR_STAT", 'N'); //결재상태: 기안대기
         
         
        	this.fnc_GridSetCellFocus(this.grdPD_JOBNXM,"JOBN_NUMB");
         
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.fn_DeleteCheck()) {
        		for(var i = this.dsPD_JOBNXM.rowcount; i >= 0; i--){
        			if(this.dsPD_JOBNXM.getColumn(i, "CHK") == 1){
        					this.dsPD_JOBNXM.deleteRow(i);
        			}
        		}
        	}
        	
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsPD_JOBNXM");
        	this.grdPD_JOBNXM.setFocus();
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	
        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsPD_JOBNXM=dsPD_JOBNXM:A dsTM_APPRXH=dsTM_APPRXH:A";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPD_JOBNXM.setFocus();

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
        	if (this.dsPD_JOBNXM.getRowCount() < 0) return this.fnc_Message("TMM011");
            if (this.dsPD_JOBNXM.rowposition < 0) return;

            this.fnc_DatasetClear("dsPD_JOBNXM_RPT");
            this.fnc_DatasetClear("dsPD_JOBOXM_RPT");
            

        	var reportfile 	= "/pdm/PDMB0010R01.jrf";
            var dataref 	= new Array();
            var params 		= "";
            
        	dataref[0] 				= new Object();
        	dataref[0].type 		= "TRAN";
        	dataref[0].svcUrl 		= "/core/erp/pdm/PDMB0010_PRINT00.do";
        	dataref[0].inDataset 	= ""
        	dataref[0].outDataset 	= "dsPD_JOBNXM_RPT=dsPD_JOBNXM_RPT dsPD_JOBOXM_RPT=dsPD_JOBOXM_RPT";
        	dataref[0].arg 			= this.fn_CreateArgument("PRINT00");
        	
        	this.fn_UbiReport(reportfile, params, dataref, "");
        	
        }

        
        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e); //2016 06 22 변경
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
        	// 조회 시 검색 조건이 반드시 있어야 하는 경우 해당 조건을 나열하여 체크 한다.
        	if ((this.fnc_DatasetChangeCheck("dsPD_JOBNXM")) && (this.fnc_Message("TMM023") == false) ) {
        		return false;
        	}
        	
        	if(this.fnc_IsDate(this.edtSHRFROM_REQD.value) == false || this.fnc_IsDate(this.edtSHRTO_REQD.value) == false){
        		this.fnc_Message("TMM081");
        		return false;
        	}

        	return true;
        	// 모든 조회 조건이 입력 되면 True를 반환 한다.
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	if (this.dsPD_JOBNXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var cnt = this.dsPD_JOBNXM.rowcount;
        	var chk = 0;
        	for(var i=0; i < cnt; i ++){
        		if(this.dsPD_JOBNXM.getColumn(i, "CHK") == "1"){
        			chk += 1;	
        		}
        	}
        	
        	if(chk ==0){this.fnc_Message("TMM010"); return false;}
        	
        	var sQuestionText = "(" + this.fnc_Trim(this.dsPD_JOBNXM.getColumn(this.dsPD_JOBNXM.rowposition, "JOBN_NAME")) + ") 제작의뢰건";
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	// 공통 Head & 상세 변경 체크
        	if (this.fnc_DatasetChangeCheck("dsPD_JOBNXM") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 공통 Head 정보 필수 입력 항목 체크
        	for (var i = 0; i < this.dsPD_JOBNXM.getRowCount(); i++) {
        		var cnt = i + 1;
        	
        		if (this.fnc_ToUpper(this.dsPD_JOBNXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_JOBNXM.getColumn(i, "JOBN_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "제작명", this.dsPD_JOBNXM, i, this.grdPD_JOBNXM, '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_JOBNXM.getColumn(i, "CUST_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "광고주명", this.dsPD_JOBNXM, i, this.grdPD_JOBNXM, '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_JOBNXM.getColumn(i, "REQU_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "제작의뢰일", this.dsPD_JOBNXM, i, this.grdPD_JOBNXM, '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_JOBNXM.getColumn(i, "COMP_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "제작완료희망일", this.dsPD_JOBNXM, i, this.grdPD_JOBNXM, '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_JOBNXM.getColumn(i, "MEDA_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "제작내용", this.dsPD_JOBNXM, i, this.grdPD_JOBNXM, '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_JOBNXM.getColumn(i, "HIGH_LEVL"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "제작종류", this.dsPD_JOBNXM, i, this.grdPD_JOBNXM, '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_JOBNXM.getColumn(i, "USEX_TYPE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "제작용도", this.dsPD_JOBNXM, i, this.grdPD_JOBNXM, '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_JOBNXM.getColumn(i, "PLAN_DEPT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "기획담당팀", this.dsPD_JOBNXM, i, this.grdPD_JOBNXM, '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_JOBNXM.getColumn(i, "PLAN_EMPL"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "기획담당자", this.dsPD_JOBNXM, i, this.grdPD_JOBNXM, '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_JOBNXM.getColumn(i, "PROD_DEPT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "제작담당팀", this.dsPD_JOBNXM, i, this.grdPD_JOBNXM, '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_JOBNXM.getColumn(i, "PROD_EMPL"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "제작담당자", this.dsPD_JOBNXM, i, this.grdPD_JOBNXM, '');
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
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " FROM_REQD=" + this.fnc_Quote(this.edtSHRFROM_REQD.value); //제작의뢰검색시작일
        		sReturnString += " TO_REQD=" + this.fnc_Quote(this.edtSHRTO_REQD.value);     //제작의뢰검색종료일
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.edtSHRCUST_CODE.value); //광고주코드
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value); //광고주명
        		sReturnString += " JOBN_NUMB=" + this.fnc_Quote(this.edtSHRJOBN_NUMB.value); //제작번호
        		sReturnString += " JOBN_NAME=" + this.fnc_Quote(this.edtSHRJOBN_NAME.value); //제작명
        		sReturnString += " MEDA_CODE=" + this.fnc_Quote(this.cmbSHRMEDA_CODE.value); //제작내용
        		sReturnString += " HIGH_LEVL=" + this.fnc_Quote(this.cmbSHRHIGH_LEVL.value); //제작종류
        		sReturnString += " USEX_TYPE=" + this.fnc_Quote(this.cmbSHRUSEX_TYPE.value); //제작용도
        		sReturnString += " STAT_FLAG=" + this.fnc_Quote(this.cmbSHRSTAT_FLAG.value); //진행상태
        		
        		sReturnString += " APPR_STAT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRAPPR_STAT.value)); //결재상태
        		sReturnString += " DOCU_IDXX="  + this.sDOCUID; // 결재문서 ID
        		//sReturnString += " APPR_SEQN=" + this.sAPPRSEQN; 

        	
        		
        	
        	} else if (sKind == "SEARCH01") {

        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		
            } else if (sKind == "SAVE00" ) {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		
        		// Work 알림 을 위한 정보 아규먼트
        		sReturnString += " SYST_LNCD="  	 + this.fnc_Quote(application.GBL_LANGCD); //사용자언어코드
        		sReturnString += " WORK_USID=" 		 + this.fnc_Quote(application.GBL_USERID); //작업자ID
        		sReturnString += " WKNT_TYCD=" 		 + this.fnc_Quote('PDM010'); // 작업알림유형코드
        		sReturnString += " SOUS_LNKY=" 		 + this.fnc_Quote(this.dsTM_APPRXH.getColumn(this.dsTM_APPRXH.rowposition, "EMPL_NUMB")+'-'+this.dsTM_APPRXH.getColumn(this.dsTM_APPRXH.rowposition, "APPL_DATE")+'-'+this.dsTM_APPRXH.getColumn(this.dsTM_APPRXH.rowposition, "APPL_SEQN")); //출처연결키
        		sReturnString += " WKNT_CNTT=" 		 + this.fnc_Quote(this.dsPD_JOBNXM.getColumn(this.dsPD_JOBNXM.rowposition, "JOBN_NAME") + ' 제작의뢰건이  등록되었습니다.'); // 작업알림내용
        		
        	}  else if (sKind == "SAVE02" ) {

        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " SYST_LNCD="  	 + this.fnc_Quote(application.GBL_LANGCD); //사용자언어코드
        		sReturnString += " WORK_USID=" 		 + this.fnc_Quote(application.GBL_USERID); //작업자ID
        		sReturnString += " WKNT_TYCD=" 		 + this.fnc_Quote('PDM010'); // 작업알림유형코드
        		sReturnString += " SOUS_LNKY=" 		 + this.fnc_Quote(this.dsTM_APPRXH.getColumn(this.dsTM_APPRXH.rowposition, "EMPL_NUMB")+'-'+this.dsTM_APPRXH.getColumn(this.dsTM_APPRXH.rowposition, "APPL_DATE")+'-'+this.dsTM_APPRXH.getColumn(this.dsTM_APPRXH.rowposition, "APPL_SEQN")); //출처연결키
        		sReturnString += " WKNT_CNTT=" 		 + this.fnc_Quote(this.dsPD_JOBNXM.getColumn(this.dsPD_JOBNXM.rowposition, "JOBN_NAME") + ' 제작의뢰건이  등록되었습니다.'); // 작업알림내용
        		
        	}  else if (sKind == "PRINT00" ) {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " JOBN_NUMB=" + this.fnc_Quote(this.dsPD_JOBNXM.getColumn(this.dsPD_JOBNXM.rowposition,"JOBN_NUMB")); //제작번호
        		
        	} 
        	
        	return sReturnString;

        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	if (ErrorCode < 0) {
        		if (application.GBL_SESSONCHK == "E0001") {
        			this.alert("session error");
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
        		this.fnc_Information(this.stInformation, this.dsPD_JOBNXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        		
        	} else if (sMethodName == "SEARCH01") {
        	
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        		
        	
        	} else if (sMethodName == "DELETE00") {
        		//체크 선택된 데이터만 제거
        		var cnt = this.dsPD_JOBNXM.rowcount -1 ;
        		for(var i = cnt; i >= 0  ; i --) {	
        			if(this.dsPD_JOBNXM.getColumn(i, "CHK") == "1"){
        				this.dsPD_JOBNXM.deleteRow(i);	
        			}
        		}
        		
        	} else if (sMethodName == "GetCommCode") {
        		//콤보 일경우 
        		
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRAPPR_STAT,dsSHRAPPR_STAT,0";
        		arrParam[1] = "GRID,grdPD_JOBNXM,dsAPPR_STAT,APPR_STAT";
        		arrParam[2] = "COMBO,cmbSHRMEDA_CODE,dsSHRCLAS_CODE,0";
        		arrParam[3] = "COMBO,cmbMEDA_CODE,dsCLAS_CODE,0";
        		
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        //----------------------------------------------------		
        		// 제작용도 조회용
        		this.fnc_GetComboSearchUSEX_TYPE();
        		// 진행상태 조회용
        		this.fnc_GetComboSearchSTAT_FLAG();
        		
        		// 제작내용 입력용
        		//this.fnc_GetComboMEDA_CODE();
        		
        		
        		// 제작용도 입력용
        		this.fnc_GetComboUSEX_TYPE();
        		
        		// 제작내용 그리드용
        		this.fnc_GetComboGrdMEDA_CODE();

        		// 제작용도 그리드용
        		this.fnc_GetComboGrdUSEX_TYPE();
        		// 진행상태 그리드용
        		this.fnc_GetComboGrdSTAT_FLAG();
        //-----------------------------------------------------		
        		
        	} else if (sMethodName == "sendApproval") {
        		/*결재연동 후처리 - 결재상신때만 해당 문서를 열어준다.*/
        		if(sAPPRGUBN == "createDoc"){
        			this.fnc_ShowApproval(this.sAPPRGUBN, this.dsTM_APPROVAL.getColumn(0, "documentID"), this.dsTM_APPROVAL.getColumn(0, "documentType"));
        		}
        		this.fn_Search();
        	}	
        }

        
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
         
         
         /*------------------------------------+
         |  null 체크
         +-------------------------------------*/
         this.fn_nullChk = function(sValue)
        {
        	if (new String(sValue).valueOf() == "undefined") sValue = "";
        	if (sValue == null) sValue = "";
        	if (("x" + sValue == "xNaN") && (new String(sValue.length).valueOf() == "undefined")) sValue = "";
        	if (sValue.length == 0) sValue = "";
        	return sValue;
        }

        

        
        var isAllChecked = 0;
        this.grdPD_JOBNXM_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.grdPD_JOBNXM.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsPD_JOBNXM.getRowCount(); i++) {
        			this.dsPD_JOBNXM.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.grdPD_JOBNXM.setCellProperty("Head", 0, "expr", isAllChecked);
        	}
        }

        
        //제작내용 콤보 선택시 제작 종류 선택
        this.cmbSHRMEDA_CODE_oncloseup = function(obj,e)
        {
        	this.fnc_GetComboSearchHIGH_LEVL();
        }

        
        //조회를 위한 제작종류
        this.fnc_GetComboSearchHIGH_LEVL = function()
        {
        		//제작내용 선택에 따른 대분류 선택
        		var SHRCLAS_TYPE = this.cmbSHRMEDA_CODE.value

        		var arrParam1 = new Array();
        			arrParam1[0] = "dsSHRHIGH_LEVL"; 			   //받을 Dataset명
        			arrParam1[1] = "PCM0001"; 	  			   //조회 콤보 ID
        			arrParam1[2] = "ALL"; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = SHRCLAS_TYPE	   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,cmbSHRHIGH_LEVL,dsSHRHIGH_LEVL,0";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        //조회를 위한 제작용도 콤보
        this.fnc_GetComboSearchUSEX_TYPE = function()
        {
        	
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsSHRUSEX_TYPE"; 			   //받을 Dataset명
        			arrParam1[1] = "PDM0001"; 	  			   //조회 콤보 ID
        			arrParam1[2] = "ALL"; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""					   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,cmbSHRUSEX_TYPE,dsSHRUSEX_TYPE,0";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        //조회를 위한 진행상태 콤보
        this.fnc_GetComboSearchSTAT_FLAG = function()
        {
        	
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsSHRSTAT_FLAG"; 			   //받을 Dataset명
        			arrParam1[1] = "PDM0002"; 	  			   //조회 콤보 ID
        			arrParam1[2] = "ALL"; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""					   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,cmbSHRSTAT_FLAG,dsSHRSTAT_FLAG,0";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        //조회를 위한 제작내용 콤보박스
        this.fnc_GetComboMEDA_CODE = function()
        {
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsMEDA_CODE"; 			   //받을 Dataset명
        			arrParam1[1] = "PCM0010"; 	  			   //조회 콤보 ID
        			arrParam1[2] = ""; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""						   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,cmbMEDA_CODE,dsMEDA_CODE,0";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        //입력을 위한 제작용도 콤보
        this.fnc_GetComboUSEX_TYPE = function()
        {	
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsUSEX_TYPE"; 			   //받을 Dataset명
        			arrParam1[1] = "PDM0001"; 	  			   //조회 콤보 ID
        			arrParam1[2] = ""; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""					   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,cmbUSEX_TYPE,dsUSEX_TYPE,0";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        //그리드 제작내용 콤보박스
        this.fnc_GetComboGrdMEDA_CODE = function()
        {
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsGRDMEDA_CODE"; 			   //받을 Dataset명
        			arrParam1[1] = "PCM0010"; 	  			   //조회 콤보 ID
        			arrParam1[2] = ""; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""						   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "GRID,grdPD_JOBNXM,dsGRDMEDA_CODE,MEDA_CODE";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        		
        }

        
        //그리드 제작용도 콤보
        this.fnc_GetComboGrdUSEX_TYPE = function()
        {
        	
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsGRDUSEX_TYPE"; 			   //받을 Dataset명
        			arrParam1[1] = "PDM0001"; 	  			   //조회 콤보 ID
        			arrParam1[2] = ""; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""					   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "GRID,grdPD_JOBNXM,dsGRDUSEX_TYPE,USEX_TYPE";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        
        //조회를 위한 진행상태 콤보
        this.fnc_GetComboGrdSTAT_FLAG = function()
        {
        	
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsGRDSTAT_FLAG"; 			   //받을 Dataset명
        			arrParam1[1] = "PDM0002"; 	  			   //조회 콤보 ID
        			arrParam1[2] = "ALL"; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""					   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "GRID,grdPD_JOBNXM,dsGRDSTAT_FLAG,STAT_FLAG";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        

        //콤보 데이터 셋 가져오기 
        this.fn_getHigh_codeCombo = function (obj) {

        	this.fnc_DatasetClear("dsPD_COMBO");

        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPD_COMBO=dsPD_COMBO";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPD_JOBNXM.setFocus();

        }

        this.grdPD_JOBNXM_oncloseup = function(obj,e)
        {
        	this.grdPD_JOBNXM.showEditor(false);
        	
        	var sMEDA_CODE = this.dsPD_JOBNXM.getColumn(e.row, "MEDA_CODE");
        	var sHIGH_LEVL = this.dsPD_JOBNXM.getColumn(e.row, "HIGH_LEVL");
        	
        	
        	if (sMEDA_CODE != this.dsPD_COMBO.lookup("COMB_CODE", sHIGH_LEVL, "CLAS_TYPE"))
        	{
                this.dsPD_JOBNXM.setColumn(e.row, "HIGH_LEVL", "");
        	}
        	
        	this.dsPD_COMBO.filter("");	
        }

        //그리드 콤보 오픈
        this.grdPD_JOBNXM_ondropdown = function(obj,e)
        {
            var sMEDA_CODE = this.dsPD_JOBNXM.getColumn(e.row, "MEDA_CODE");

        	this.dsPD_COMBO.filter("CLAS_TYPE == '" + sMEDA_CODE + "'");
        }

        this.cmbHIGH_LEVL_ondropdown = function(obj,e)
        {
        	var sMEDA_CODE = this.cmbMEDA_CODE.value;
        	this.dsPD_COMBO.filter("CLAS_TYPE == '" + sMEDA_CODE + "' && GUBN_FLAG == 'Y'");
        }

        this.cmbMEDA_CODE_oncloseup = function(obj,e)
        {

        	var sMEDA_CODE = this.cmbMEDA_CODE.value;

        	this.dsPD_COMBO.filter("CLAS_TYPE == '" + sMEDA_CODE + "'");
        	
        	var iRow = this.dsPD_JOBNXM.rowposition
        	var sMEDA_CODE = this.dsPD_JOBNXM.getColumn(iRow, "MEDA_CODE");
        	var sHIGH_LEVL = this.dsPD_JOBNXM.getColumn(iRow, "HIGH_LEVL");
        	
        	if (sMEDA_CODE != this.dsPD_COMBO.lookup("COMB_CODE", sHIGH_LEVL, "CLAS_TYPE"))
        	{
                this.dsPD_JOBNXM.setColumn(iRow, "HIGH_LEVL", "");
        	}
        	this.dsPD_COMBO.filter("");
        }

        

        this.fn_HelpDialogeCUST_CODE = function(obj,e)
        {
        	var arrParam = new Array();

        	// 조회조건 - 제작항목명
        	if ((obj.name == 'imgHelpCUST_CODE') || (obj.name == 'edtCUST_NAME')) {

        		arrParam[0] = 'PDM0001';                                 //Popup ID
        		arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtCUST_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtCUST_NAME';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtCUST_CODE,edtCUST_NAME';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1';                                     //Mapping Column Index
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);                                //Mapping Column Index
        	}
        }

        
        this.fn_HelpDialogeCTIM_CODE = function(obj,e)
        {
        	var arrParam = new Array();

        	// 조회조건 - 제작항목명
        	if ((obj.name == 'imgHelpCTIM_CODE') || (obj.name == 'edtCTIM_NAME')) {

        		arrParam[0] = 'PDM0002';                                 //Popup ID
        		arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtCUST_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtCTIM_NAME';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtCTIM_CODE,edtCTIM_NAME';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1';                                     //Mapping Column Index
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);                                //Mapping Column Index
        	}
        }

        this.fn_HelpDialogePLAN_DEPT = function(obj,e)
        {
        	var arrParam = new Array();

        	if ((obj.name == 'imgHelpPLAN_DEPT') || (obj.name == 'edtPLAN_NAME')) {

        		arrParam[0] = 'PDM0003';                                 //Popup ID
        		arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtPLAN_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtPLAN_NAME';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtPLAN_DEPT,edtPLAN_NAME';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1';                                     //Mapping Column Index
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);                                //Mapping Column Index
        	}
        }

        this.fn_HelpDialogePLAN_EMPL = function(obj,e)
        {
        		var arrParam = new Array();

        	if ((obj.name == 'imgHelpPLAN_EMPL') || (obj.name == 'edtPLAN_EMPN')) {

        		arrParam[0] = 'PDM0004';                                 //Popup ID
        		arrParam[1] = "";   //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtPLAN_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtPLAN_EMPN';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtPLAN_EMPL,edtPLAN_EMPN,edtPLAN_DEPT,edtPLAN_NAME';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1,2,3';                                     //Mapping Column Index
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);                                //Mapping Column Index
        	}
        }

        this.fn_HelpDialogePROD_DEPT = function(obj,e)
        {
        	var arrParam = new Array();

        	if ((obj.name == 'imgHelpPROD_DEPT') || (obj.name == 'edtPROD_NAME')) {

        		arrParam[0] = 'PDM0003';                                 //Popup ID
        		arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtPROD_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtPROD_NAME';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtPROD_DEPT,edtPROD_NAME';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1';                                     //Mapping Column Index
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);                                //Mapping Column Index
        	}
        }

        this.fn_HelpDialogePROD_EMPL = function(obj,e)
        {
        	var arrParam = new Array();

        	if ((obj.name == 'imgHelpPROD_EMPL') || (obj.name == 'edtPROD_EMPN')) {
        	
        		arrParam[0] = 'PDM0004';                                 //Popup ID
        		arrParam[1] = "";  //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtPROD_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtPROD_EMPN';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtPROD_EMPL,edtPROD_EMPN,edtPROD_DEPT,edtPROD_NAME';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1,2,3';                                     //Mapping Column Index
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);                                //Mapping Column Index
        	}	
        }

        
        this.fn_HelpDialogeSHRCUST_CODE = function(obj,e)
        {
        	var arrParam = new Array();

        	// 조회조건 - 제작항목명
        	if ((obj.name == 'imgHelpSHRCUST_NAME') || (obj.name == 'edtSHRCUST_NAME')) {

        		arrParam[0] = 'PDM0001';                                 //Popup ID
        		arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtSHRCUST_NAME';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtSHRCUST_CODE,edtSHRCUST_NAME';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1';                                     //Mapping Column Index
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);                                //Mapping Column Index
        	}
        }

        this.fn_HelpDialogeJOBN_NUMB = function(obj,e)
        {
        	var arrParam = new Array();

        	if ((obj.name == 'imgHelpSHRJOBN_NAME') || (obj.name == 'edtSHRJOBN_NAME')) {

        		arrParam[0] = 'PDM0005';                                 //Popup ID
        		arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtJOBN_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtSHRJOBN_NAME';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtSHRJOBN_NUMB,edtSHRJOBN_NAME';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1';                                     //Mapping Column Index
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);                                //Mapping Column Index
        	}
        }

        

        this.cmbHIGH_LEVL_oncloseup = function(obj,e)
        {
        		this.dsPD_COMBO.filter("");	
        }

        this.fn_CreateSource = function(obj,e)
        {
        	var iCnt = this.dsPD_JOBNXM.rowcount;
        	if(iCnt < 0){
        		this.fnc_Message("PDM001");
        		return ;
        	}
        	
        	var sJOBN_NUMB = this.dsPD_JOBNXM.getColumn(this.dsPD_JOBNXM.rowposition,"JOBN_NUMB");
        	var sJOBN_NAME = this.dsPD_JOBNXM.getColumn(this.dsPD_JOBNXM.rowposition,"JOBN_NAME");
        	
        	if(this.fn_nullChk(sJOBN_NUMB) == ""){
        		this.fnc_Message("TMM300","상단의 제작건을 저장하지 않고서 실적부서를 등록하실 수 없습니다.");
        		return ;
        	}
        	 
        	 //실적 분배율 팝업 생성
        	 var sOpenStyle  = "modeless=false";   //Open Sytle(되도록 Modal 사용)
        		sOpenStyle += ",autosize=true";   //Autosize true면 width, Height 안먹음
        		sOpenStyle += ",top=-1";          //원하는 위치(단 -1은 소유창의 Middle)
        		sOpenStyle += ",left=-1";         //원하는 위치(단 -1은 소유창의 Center)
        		sOpenStyle += ",width=500";       //현재 반응 없음
        		sOpenStyle += ",height=600";      //현재 반응 없음
        		sOpenStyle += ",title=true";      //Form Title Bar Visible 여부
        		sOpenStyle += ",titletext=";      //Form Title여부
        		sOpenStyle += ",status=false";    //Form Title Bar Visible 여부
        		sOpenStyle += ",resizable=true";  //Form Title Bar Visible 여부
        		
        		this.fnc_OpenPopup("PDMB0010P01", "pdm::PDMB0010P01.xfdl", {sJOBN_NUMB : sJOBN_NUMB, sJOBN_NAME : sJOBN_NAME}, sOpenStyle, "fn_JobDialoge_After");	
        }

        
        /*--------------------------------------+
         | 실적분배율 등록  CallBack                |
         +---------------------------------------*/
        this.fn_JobDialoge_After = function(sPopupId,Variant){

        	var rtn = this.fnc_GetPopupRtn();
        	
        	if (rtn instanceof Array) {
        	
        		//var sJOBN_NUMB = rtn[0];      
        		//alert(sJOBN_NUMB);
        	}
        }

        

        this.btnOUTS_AMTX_onclick = function(obj,e)
        {
        	var iCnt = this.dsPD_JOBNXM.rowcount;
        	if(iCnt < 0){
        		this.fnc_Message("PDM001");
        		return ;
        	}
        	
        	var sJOBN_NUMB = this.dsPD_JOBNXM.getColumn(this.dsPD_JOBNXM.rowposition,"JOBN_NUMB");
        	var sJOBN_NAME = this.dsPD_JOBNXM.getColumn(this.dsPD_JOBNXM.rowposition,"JOBN_NAME");
        	
        	if(this.fn_nullChk(sJOBN_NUMB) == ""){
        		this.fnc_Message("TMM300","상단의 제작건을 저장하지 않고서 외주업체 실행예산을 등록하실 수 없습니다.");
        		return ;
        	}
        	
        	//실적 분배율 팝업 생성
        	 var sOpenStyle  = "modeless=false";   //Open Sytle(되도록 Modal 사용)
        		sOpenStyle += ",autosize=true";   //Autosize true면 width, Height 안먹음
        		sOpenStyle += ",top=-1";          //원하는 위치(단 -1은 소유창의 Middle)
        		sOpenStyle += ",left=-1";         //원하는 위치(단 -1은 소유창의 Center)
        		sOpenStyle += ",width=710";       //현재 반응 없음
        		sOpenStyle += ",height=505";      //현재 반응 없음
        		sOpenStyle += ",title=true";      //Form Title Bar Visible 여부
        		sOpenStyle += ",titletext=";      //Form Title여부
        		sOpenStyle += ",status=false";    //Form Title Bar Visible 여부
        		sOpenStyle += ",resizable=true";  //Form Title Bar Visible 여부
        		
        		this.fnc_OpenPopup("PDMB0010P02", "pdm::PDMB0010P02.xfdl", {sJOBN_NUMB : sJOBN_NUMB, sJOBN_NAME : sJOBN_NAME}, sOpenStyle, "fn_JobDialoge_After");	
        }

        this.grdPD_JOBNXM_oncellclick = function(obj,e)
        {
        	var sApprStat = this.dsPD_JOBNXM.getColumn(e.row,"APPR_STAT");
        	var sDocuId	  = this.dsPD_JOBNXM.getColumn(e.row,"DOCU_IDXX");
        	var sApprSeq  = this.dsPD_JOBNXM.getColumn(e.row,"APPR_SEQN");
        		
        	if(sApprStat == "N") sAPPRGUBN = "createDoc";
        	else if(sApprStat == "T") sAPPRGUBN = "deleteDoc";
        	else sAPPRGUBN = "show";
        		
        	if(e.col == 26){
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
        	var i = this.dsPD_JOBNXM.rowposition;
        	var sSubject 	= this.dsPD_JOBNXM.getColumn(i,"JOBN_NAME");
        	var sApprDocId	= this.sDOCUID + "-" + this.dsPD_JOBNXM.getColumn(i,"APPR_SEQN");/*DOCU_IDXX 과 APPR_SEQN 조합*/
        	
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
        	sXmlStr += "  <col width=8%>";
        	sXmlStr += "  <col width=8%>";
        	sXmlStr += "  <col width=8%>";
        	sXmlStr += "  <col width=8%>";
        	sXmlStr += "  <col width=8%>";
        	sXmlStr += "  <col width=8%>";
        	sXmlStr += "  <col width=8%>";
        	sXmlStr += "  <col width=8%>";
        	sXmlStr += "  <col width=8%>";
        	sXmlStr += "  <col width=8%>";
        	sXmlStr += "  <col width=8%>";
        	sXmlStr += "  <col width=8%>";

        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td class='label1'>광고주</td>";
        	sXmlStr += "    <td class='label3' colspan='3'>"+ this.dsPD_JOBNXM.getColumn(i,"CUST_NAME") + "</td>";
        	sXmlStr += "    <td class='label1'>부서</td>";
        	sXmlStr += "    <td class='label3' colspan='3'>"+ this.dsPD_JOBNXM.getColumn(i,"CTIM_NAME") + "</td>";
        	sXmlStr += "    <td class='label1'>담당</td>";
        	sXmlStr += "    <td class='label3' colspan='3'>"+ this.dsPD_JOBNXM.getColumn(i,"CUST_EMPL") + "</td>";
        	sXmlStr += "  </tr>";
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td class='label1'>제작번호</td>";
        	sXmlStr += "    <td class='label3' colspan='3'>"+ this.dsPD_JOBNXM.getColumn(i,"JOBN_NUMB") + "</td>";
        	sXmlStr += "    <td class='label1'>제작의뢰일</td>";
        	sXmlStr += "    <td class='label3' colspan='3'>"+ this.dsPD_JOBNXM.getColumn(i,"REQU_DATE") + "</td>";
        	sXmlStr += "    <td class='label1'>완료예정일</td>";
        	sXmlStr += "    <td class='label3' colspan='3'>"+ this.dsPD_JOBNXM.getColumn(i,"COMP_DATE") + "</td>";
        	sXmlStr += "  </tr>";
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td class='label1'>제작건명</td>";
        	sXmlStr += "    <td class='label3' colspan='11'>"+ this.dsPD_JOBNXM.getColumn(i,"JOBN_NAME") + "</td>";
        	sXmlStr += "  </tr>";
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td class='label1'>기획팀</td>";
        	sXmlStr += "    <td class='label3' colspan='2'>"+ this.dsPD_JOBNXM.getColumn(i,"PLAN_NAME") + "</td>";
        	sXmlStr += "    <td class='label1'>담당</td>";
        	sXmlStr += "    <td class='label3' colspan='2'>"+ this.dsPD_JOBNXM.getColumn(i,"PLAN_EMPN") + "</td>";
        	sXmlStr += "    <td class='label1'>제작팀</td>";
        	sXmlStr += "    <td class='label3' colspan='2'>"+ this.dsPD_JOBNXM.getColumn(i,"PROD_NAME") + "</td>";
        	sXmlStr += "    <td class='label1'>담당</td>";
        	sXmlStr += "    <td class='label3' colspan='2'>"+ this.dsPD_JOBNXM.getColumn(i,"PROD_EMPN") + "</td>";
        	sXmlStr += "  </tr>";
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td class='label1'>규격</td>";
        	sXmlStr += "    <td class='label3' colspan='2'>"+ this.dsPD_JOBNXM.getColumn(i,"JOBN_SIZE") + "</td>";
        	sXmlStr += "    <td class='label1'>제작내용</td>";
        	sXmlStr += "    <td class='label3' colspan='2'>"+ this.dsPD_JOBNXM.getColumn(i,"MEDA_CODE") + "</td>";
        	sXmlStr += "    <td class='label1'>제작종류</td>";
        	sXmlStr += "    <td class='label3' colspan='2'>"+ this.dsPD_JOBNXM.getColumn(i,"HIGH_LEVL") + "</td>";
        	sXmlStr += "    <td class='label1'>제작용도</td>";
        	sXmlStr += "    <td class='label3' colspan='2'>"+ this.dsPD_JOBNXM.getColumn(i,"USEX_TYPE") + "</td>";
        	sXmlStr += "  </tr>";
        	sXmlStr += "  <tr>";
        	sXmlStr += "    <td class='label1'>비고</td>";
        	sXmlStr += "    <td class='label3' colspan='11'>"+ this.dsPD_JOBNXM.getColumn(i,"MEMO_FILD") + "</td>";
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

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTM_APPROVAL.addEventHandler("oncolumnchanged", this.dsHR_GRTINS_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.grdPD_JOBNXM.addEventHandler("oncloseup", this.grdPD_JOBNXM_oncloseup, this);
            this.grdPD_JOBNXM.addEventHandler("ondropdown", this.grdPD_JOBNXM_ondropdown, this);
            this.grdPD_JOBNXM.addEventHandler("oncellclick", this.grdPD_JOBNXM_oncellclick, this);
            this.grdPD_JOBNXM.addEventHandler("onheadclick", this.grdPD_JOBNXM_onheadclick, this);
            this.imgSearchTYPE_NAME.addEventHandler("onclick", this.imgSearchTitle1_onclick, this);
            this.imgSearchMEDA_CODE.addEventHandler("onclick", this.imgSearchTitle1_onclick, this);
            this.imgSearchHIGH_LEVL.addEventHandler("onclick", this.imgSearchTitle1_onclick, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCUST_NAME.addEventHandler("onclick", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.edtSHRJOBN_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRJOBN_NAME.addEventHandler("onclick", this.fn_HelpDialogeJOBN_NUMB, this);
            this.edtSHRJOBN_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeJOBN_NUMB, this);
            this.imgSearchUSEX_TYPE.addEventHandler("onclick", this.imgSearchTitle1_onclick, this);
            this.cmbSHRUSEX_TYPE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgSearchSTAT_FLAG.addEventHandler("onclick", this.imgSearchTitle1_onclick, this);
            this.cmbSHRSTAT_FLAG.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRMEDA_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRMEDA_CODE.addEventHandler("oncloseup", this.cmbSHRMEDA_CODE_oncloseup, this);
            this.cmbSHRHIGH_LEVL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static1.addEventHandler("onclick", this.Static1_onclick, this);
            this.imgHelpCUST_CODE.addEventHandler("onclick", this.fn_HelpDialogeCUST_CODE, this);
            this.imgHelpCTIM_CODE.addEventHandler("onclick", this.fn_HelpDialogeCTIM_CODE, this);
            this.imgHelpPLAN_DEPT.addEventHandler("onclick", this.fn_HelpDialogePLAN_DEPT, this);
            this.imgHelpPROD_DEPT.addEventHandler("onclick", this.fn_HelpDialogePROD_DEPT, this);
            this.btnPERF_DIST.addEventHandler("onclick", this.fn_CreateSource, this);
            this.imgHelpPLAN_EMPL.addEventHandler("onclick", this.fn_HelpDialogePLAN_EMPL, this);
            this.imgHelpPROD_EMPL.addEventHandler("onclick", this.fn_HelpDialogePROD_EMPL, this);
            this.edtJOBN_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCUST_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeCUST_CODE, this);
            this.edtCTIM_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCTIM_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtCTIM_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCTIM_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeCTIM_CODE, this);
            this.edtPLAN_DEPT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPLAN_DEPT.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtPLAN_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPLAN_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogePLAN_DEPT, this);
            this.edtPLAN_EMPL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPLAN_EMPL.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtPLAN_EMPN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPLAN_EMPN.addEventHandler("onkillfocus", this.fn_HelpDialogePLAN_EMPL, this);
            this.calREQU_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPROD_DEPT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPROD_DEPT.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtPROD_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPROD_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogePROD_DEPT, this);
            this.edtPROD_EMPL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPROD_EMPL.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtPROD_EMPN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPROD_EMPN.addEventHandler("onkillfocus", this.fn_HelpDialogePROD_EMPL, this);
            this.calCOMP_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbMEDA_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbMEDA_CODE.addEventHandler("oncloseup", this.cmbMEDA_CODE_oncloseup, this);
            this.cmbHIGH_LEVL.addEventHandler("ondropdown", this.cmbHIGH_LEVL_ondropdown, this);
            this.cmbHIGH_LEVL.addEventHandler("oncloseup", this.cmbHIGH_LEVL_oncloseup, this);
            this.cmbUSEX_TYPE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.staPERF_DIST00.addEventHandler("onclick", this.staPERF_DIST00_onclick, this);
            this.btnOUTS_AMTX.addEventHandler("onclick", this.btnOUTS_AMTX_onclick, this);

        };

        this.loadIncludeScript("PDMB0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
