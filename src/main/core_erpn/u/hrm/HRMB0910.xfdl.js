﻿(function()
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
                this.set_name("HRMB0910");
                this.set_titletext("인재Pool관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,834);
            }
            this.style.set_background("#ffffffff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsGNDR_CODE</Col><Col id=\"CODEID\">GNDR_CODE</Col><Col id=\"HEADFLAG\">0</Col></Row><Row><Col id=\"DSNAME\">dsRCDI_CODE</Col><Col id=\"CODEID\">RCDI_CODE</Col><Col id=\"HEADFLAG\">0</Col></Row><Row><Col id=\"DSNAME\">dsSCDN_CODE</Col><Col id=\"CODEID\">SCDN_CODE</Col><Col id=\"HEADFLAG\">0</Col></Row><Row><Col id=\"DSNAME\">dsMJRA_CODE</Col><Col id=\"CODEID\">MJRA_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsINDV_CODE</Col><Col id=\"CODEID\">INDV_CODE</Col><Col id=\"HEADFLAG\">0</Col></Row><Row><Col id=\"DSNAME\">dsFITY_CODE</Col><Col id=\"CODEID\">FITY_CODE</Col><Col id=\"HEADFLAG\">0</Col></Row><Row><Col id=\"DSNAME\">dsDGDN_CODE</Col><Col id=\"CODEID\">DGDN_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_RCMSXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SPPT_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"SPPT_NAME\" size=\"30\" type=\"STRING\"/><Column id=\"CCEM_NAME\" size=\"30\" type=\"STRING\"/><Column id=\"ENEE_NAME\" size=\"30\" type=\"STRING\"/><Column id=\"SPPT_PART\" size=\"10\" type=\"STRING\"/><Column id=\"EMPL_BIRT\" size=\"8\" type=\"STRING\"/><Column id=\"GNDR_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"GNDR_NAME\" size=\"10\" type=\"STRING\"/><Column id=\"RCDI_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"RCDI_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"WITW_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"EITW_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" size=\"100\" type=\"STRING\"/><Column id=\"HNPN_TENR\" size=\"20\" type=\"STRING\"/><Column id=\"OHOM_TENR\" size=\"20\" type=\"STRING\"/><Column id=\"ELTR_MLAD\" size=\"50\" type=\"STRING\"/><Column id=\"POST_NUMB\" size=\"6\" type=\"STRING\"/><Column id=\"DTL1_ADDR\" size=\"200\" type=\"STRING\"/><Column id=\"DTL2_ADDR\" size=\"200\" type=\"STRING\"/><Column id=\"FILE_IDXX\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_RCSCHC", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SPPT_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"SCDN_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DGDN_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"DGDN_CDNM\" size=\"255\" type=\"STRING\"/><Column id=\"SCHL_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"SCHL_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"MJRA_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"MAJR_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"MAJR_NAME\" size=\"50\" type=\"STRING\"/><Column id=\"ENIS_DATE\" size=\"6\" type=\"STRING\"/><Column id=\"GRDT_DATE\" size=\"6\" type=\"STRING\"/><Column id=\"SCHL_SEAT\" size=\"200\" type=\"STRING\"/><Column id=\"HISL_YSNO\" size=\"1\" type=\"STRING\"/><Column id=\"SCHL_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"MAJR_CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_RCBFCA", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SPPT_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"WORK_ORGT\" size=\"50\" type=\"STRING\"/><Column id=\"ENCO_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"RETR_DATE\" size=\"8\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"20\" type=\"STRING\"/><Column id=\"DUTY_NAME\" size=\"20\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"20\" type=\"STRING\"/><Column id=\"WOPA_CNTT\" size=\"1000\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"100\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_RCINTW", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SPPT_NUMB\" size=\"10\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"5\" type=\"BIGDECIMAL\"/><Column id=\"INDV_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"LARS_CNTT\" size=\"1000\" type=\"STRING\"/><Column id=\"LARS_CNTT2\" size=\"1000\" type=\"STRING\"/><Column id=\"LARS_CNTT3\" size=\"1000\" type=\"STRING\"/><Column id=\"LARS_CNTT4\" size=\"1000\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_AFILED", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_IDXX\" size=\"100\" type=\"STRING\"/><Column id=\"FILE_PATH\" size=\"100\" type=\"STRING\"/><Column id=\"PFIL_NAME\" size=\"100\" type=\"STRING\"/><Column id=\"LFIL_NAME\" size=\"100\" type=\"STRING\"/><Column id=\"EXTN_NAME\" size=\"10\" type=\"STRING\"/><Column id=\"FILE_SIZE\" size=\"15\" type=\"BIGDECIMAL\"/><Column id=\"FITY_CODE\" size=\"10\" type=\"STRING\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Shape2", "absolute", "240", "128", null, "135", "25", null, this);
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("63");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHR_RCMSXM", "absolute", "8", "128", "212", null, null, "15", this);
            obj.set_binddataset("dsHR_RCMSXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("40");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"70\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"40\"/><Column size=\"66\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"지원번호\"/><Cell col=\"1\" displaytype=\"text\" text=\"성명\"/><Cell col=\"2\" displaytype=\"text\" text=\"생년월일\"/><Cell col=\"3\" displaytype=\"text\" text=\"성별\"/><Cell col=\"4\" displaytype=\"text\" text=\"지원분야\"/><Cell col=\"5\" displaytype=\"text\" text=\"실무면접일\"/><Cell col=\"6\" displaytype=\"text\" text=\"임원면접일\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;\" text=\"bind:SPPT_NUMB\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;\" text=\"bind:SPPT_NAME\"/><Cell col=\"2\" displaytype=\"date\" style=\"align:center;\" text=\"bind:EMPL_BIRT\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"combo\" style=\"align:center;\" text=\"bind:GNDR_CODE\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:center;\" text=\"bind:SPPT_PART\"/><Cell col=\"5\" displaytype=\"date\" style=\"align:center;\" text=\"bind:WITW_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"date\" style=\"align:center;\" text=\"bind:EITW_DATE\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Tab("tab", "absolute", "240", "273", null, null, "25", "15", this);
            obj.set_taborder("21");
            obj.set_tabindex("0");
            obj.set_tabposition("top");
            obj.set_cssclass("styTabControl");
            obj.set_tabjustify("false");
            obj.set_enable("true");
            obj.getSetter("onrowposchanged").set("dsHR_RCMSXM_onrowposchanged");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tab1", this.tab);
            obj.set_text("학력");
            obj.set_taborder("0");
            obj.set_scrollbars("none");
            this.tab.addChild(obj.name, obj);
            obj = new Static("Shape0", "absolute", "1112", "592", "55", "41", null, null, this.tab.tab1);
            obj.set_taborder("52");
            obj.set_cssclass("styFormItemBoxOut");
            this.tab.tab1.addChild(obj.name, obj);
            obj = new Static("Shape1", "absolute", "1114", "594", "51", "37", null, null, this.tab.tab1);
            obj.set_taborder("53");
            obj.set_cssclass("styFormItemBoxOut");
            this.tab.tab1.addChild(obj.name, obj);
            obj = new Static("Shape2", "absolute", "1104", "568", "55", "41", null, null, this.tab.tab1);
            obj.set_taborder("54");
            obj.set_cssclass("styFormItemBoxOut");
            this.tab.tab1.addChild(obj.name, obj);
            obj = new Static("Shape3", "absolute", "1106", "570", "51", "37", null, null, this.tab.tab1);
            obj.set_taborder("55");
            obj.set_cssclass("styFormItemBoxOut");
            this.tab.tab1.addChild(obj.name, obj);
            obj = new Static("Shape4", "absolute", "1088", "576", "55", "41", null, null, this.tab.tab1);
            obj.set_taborder("56");
            obj.set_cssclass("styFormItemBoxOut");
            this.tab.tab1.addChild(obj.name, obj);
            obj = new Static("Shape5", "absolute", "1090", "578", "51", "37", null, null, this.tab.tab1);
            obj.set_taborder("57");
            obj.set_cssclass("styFormItemBoxOut");
            this.tab.tab1.addChild(obj.name, obj);
            obj = new Grid("grdHR_RCSCHC", "absolute", "10", "30", null, null, "10", "10", this.tab.tab1);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("58");
            obj.set_binddataset("dsHR_RCSCHC");
            obj.set_scrollbars("alwayshorz");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"97\"/><Column size=\"90\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"학력\"/><Cell col=\"1\" text=\"학위\"/><Cell col=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"학교명\"/><Cell col=\"3\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"기타학교명\"/><Cell col=\"4\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"계열\"/><Cell col=\"5\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"전공\"/><Cell col=\"6\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"세부전공\"/><Cell col=\"7\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"입학년월\"/><Cell col=\"8\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"졸업년월\"/><Cell col=\"9\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"소재지\"/><Cell col=\"10\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"최종학교여부\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:SCDN_CODE\" combodisplayrowcount=\"10\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DGDN_CODE\"/><Cell col=\"2\" edittype=\"normal\" style=\"align:left;\" text=\"bind:SCHL_CDNM\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:SCHL_NAME\" combodisplayrowcount=\"50\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:MJRA_CODE\"/><Cell col=\"5\" edittype=\"normal\" style=\"align:left;\" text=\"bind:MAJR_CDNM\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:MAJR_NAME\" combodisplayrowcount=\"50\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"text\" text=\"bind:ENIS_DATE\" mask=\"####-##\" maskchar=\"_\" editlimit=\"6\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"text\" text=\"bind:GRDT_DATE\" mask=\"####-##\" maskchar=\"_\" editlimit=\"6\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:SCHL_SEAT\" editlimit=\"0\" combodisplayrowcount=\"200\"/><Cell col=\"10\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:HISL_YSNO\"/></Band></Format></Formats>");
            this.tab.tab1.addChild(obj.name, obj);
            obj = new Button("btndsHR_RCSCHC_Del", "absolute", null, "5", "62", "21", "10", null, this.tab.tab1);
            obj.set_taborder("60");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삭제");
            this.tab.tab1.addChild(obj.name, obj);
            obj = new Button("btndsHR_RCSCHC_Add", "absolute", null, "5", "62", "21", "75", null, this.tab.tab1);
            obj.set_taborder("61");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행추가");
            this.tab.tab1.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "75", "10", "67", null, null, this.tab.tab1);
            obj.set_taborder("62");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tab.tab1.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "580", "0", "80", "30", null, null, this.tab.tab1);
            obj.set_taborder("63");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tab.tab1.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "910", "75", "10", "67", null, null, this.tab.tab1);
            obj.set_taborder("64");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tab.tab1.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", "216", "21", null, null, this.tab.tab1);
            obj.set_taborder("65");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tab.tab1.addChild(obj.name, obj);
            obj = new Tabpage("tab2", this.tab);
            obj.set_text("경력");
            this.tab.addChild(obj.name, obj);
            obj = new Grid("grdHR_RCBFCA", "absolute", "10", "30", null, null, "10", "10", this.tab.tab2);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("0");
            obj.set_binddataset("dsHR_RCBFCA");
            obj.set_scrollbars("alwayshorz");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"근무처\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"입사일\"/><Cell col=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"퇴사일\"/><Cell col=\"3\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"부서명\"/><Cell col=\"4\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"직무\"/><Cell col=\"5\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"직위\"/><Cell col=\"6\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"담당업무\"/><Cell col=\"7\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:WORK_ORGT\" combodisplayrowcount=\"50\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"date\" style=\"align:center;\" text=\"bind:ENCO_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" style=\"align:center;\" text=\"bind:RETR_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:DEPT_NAME\" combodisplayrowcount=\"20\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:DUTY_NAME\" combodisplayrowcount=\"20\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:OPOS_NAME\" combodisplayrowcount=\"20\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:WOPA_CNTT\" maskchar=\"_\" combodisplayrowcount=\"1000\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"text\" style=\"align:left;\" text=\"bind:REMK_100X\" maskchar=\"_\" combodisplayrowcount=\"100\"/></Band></Format></Formats>");
            this.tab.tab2.addChild(obj.name, obj);
            obj = new Button("btndsHR_RCBFCA_Del", "absolute", null, "5", "62", "21", "10", null, this.tab.tab2);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삭제");
            this.tab.tab2.addChild(obj.name, obj);
            obj = new Button("btndsHR_RCBFCA_Add", "absolute", null, "5", "62", "21", "75", null, this.tab.tab2);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행추가");
            this.tab.tab2.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", "216", "21", null, null, this.tab.tab2);
            obj.set_taborder("4");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tab.tab2.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "75", "10", "67", null, null, this.tab.tab2);
            obj.set_taborder("5");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tab.tab2.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "580", "0", "80", "30", null, null, this.tab.tab2);
            obj.set_taborder("6");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tab.tab2.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "910", "75", "10", "67", null, null, this.tab.tab2);
            obj.set_taborder("7");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tab.tab2.addChild(obj.name, obj);
            obj = new Tabpage("tab3", this.tab);
            obj.set_text("면접");
            obj.set_scrollbars("none");
            this.tab.addChild(obj.name, obj);
            obj = new Grid("grdHR_RCINTW", "absolute", "10", "30", null, null, "10", "10", this.tab.tab3);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("192");
            obj.set_binddataset("dsHR_RCINTW");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_scrollbars("alwayshorz");
            obj.set_autofittype("col");
            obj.set_autoupdatetype("none");
            obj.set_autosizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"705\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"구분\"/><Cell col=\"1\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"내용\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" style=\"align:center middle;\" text=\"bind:INDV_CODE\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"textarea\" style=\"align:left;\" text=\"bind:LARS_CNTT\" wordwrap=\"char\" combodisplayrowcount=\"1000\"/></Band></Format></Formats>");
            this.tab.tab3.addChild(obj.name, obj);
            obj = new Button("btndsHR_RCINTW_Del", "absolute", null, "5", "62", "21", "10", null, this.tab.tab3);
            obj.set_taborder("194");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행삭제");
            this.tab.tab3.addChild(obj.name, obj);
            obj = new Button("btndsHR_RCINTW_Add", "absolute", null, "5", "62", "21", "75", null, this.tab.tab3);
            obj.set_taborder("195");
            obj.set_cssclass("btn_WF_Module");
            obj.set_text("행추가");
            this.tab.tab3.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", "216", "21", null, null, this.tab.tab3);
            obj.set_taborder("196");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tab.tab3.addChild(obj.name, obj);
            obj = new Tabpage("tab4", this.tab);
            obj.set_text("파일첨부");
            this.tab.addChild(obj.name, obj);
            obj = new Grid("grdTM_AFILED", "absolute", "10", "30", null, null, "10", "10", this.tab.tab4);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("1");
            obj.set_binddataset("dsTM_AFILED");
            obj.set_scrollbars("alwayshorz");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"392\"/><Column size=\"110\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"파일종류\"/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"업로드/다운로드\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'combo' : 'none'\" style=\"align:center;\" text=\"bind:FITY_CODE\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:LFIL_NAME\"/><Cell col=\"2\" displaytype=\"button\" edittype=\"button\" style=\"align:center;cursor:hand;\" text=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? &quot;업로드&quot; : &quot;다운로드&quot;\"/></Band></Format></Formats>");
            this.tab.tab4.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", "216", "21", null, null, this.tab.tab4);
            obj.set_taborder("4");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tab.tab4.addChild(obj.name, obj);
            obj = new Button("btndsTM_AFILED_Add", "absolute", null, "5", "62", "21", "75", null, this.tab.tab4);
            obj.set_taborder("5");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.tab.tab4.addChild(obj.name, obj);
            obj = new Button("btndsTM_AFILED_Del", "absolute", null, "5", "62", "21", "10", null, this.tab.tab4);
            obj.set_taborder("6");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.tab.tab4.addChild(obj.name, obj);

            obj = new Static("Image1", "absolute", "28", "71", "76", "21", null, null, this);
            obj.set_taborder("168");
            obj.set_text("지원분야");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRSPPT_PART", "absolute", "98", "71", "108", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle6", "absolute", "235", "71", "57", "21", null, null, this);
            obj.set_taborder("172");
            obj.set_text("성명");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRSPPT_NUMB", "absolute", "277", "71", "80", "21", null, null, this);
            obj.set_taborder("173");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.style.setStyleValue("align", "disabled", "center");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRSPPT_NUMB", "absolute", "359", "71", "21", "21", null, null, this);
            obj.set_taborder("174");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRSPPT_NAME", "absolute", "382", "71", "100", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle4", "absolute", "510", "71", "82", "21", null, null, this);
            obj.set_taborder("176");
            obj.set_text("실무면접일");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle01", "absolute", "837", "71", "82", "21", null, null, this);
            obj.set_taborder("178");
            obj.set_text("임원면접일");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgPHOT_FILE", "absolute", "251", "136", "78", "93", null, null, this);
            obj.set_taborder("153");
            obj.style.set_background("#ffffffff");
            obj.set_stretch("fit");
            obj.set_image("URL('theme://images/img_WF_user.png')");
            obj.set_imagealign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "348", "137", "81", "21", null, null, this);
            obj.set_taborder("185");
            obj.set_text("지원번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "348", "161", "81", "21", null, null, this);
            obj.set_taborder("186");
            obj.set_text("지원분야");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "348", "209", "81", "21", null, null, this);
            obj.set_taborder("187");
            obj.set_text("휴대폰");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "348", "185", "81", "21", null, null, this);
            obj.set_taborder("188");
            obj.set_text("실무면접일");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "348", "233", "81", "21", null, null, this);
            obj.set_taborder("189");
            obj.set_text("주소");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSPPT_NUMB", "absolute", "429", "137", "108", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_RCMSXM");
            obj.set_autoskip("false");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSPPT_PART", "absolute", "429", "161", "108", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsHR_RCMSXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHNPN_TENR", "absolute", "429", "209", "108", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_RCMSXM");
            obj.set_autoskip("false");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPOST_NUMB", "absolute", "429", "233", "108", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.getSetter("binddataset").set("dsHR_RCMSXM");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "556", "137", "77", "21", null, null, this);
            obj.set_taborder("195");
            obj.set_text("성명");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "556", "161", "77", "21", null, null, this);
            obj.set_taborder("196");
            obj.set_text("생년월일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "556", "185", "77", "21", null, null, this);
            obj.set_taborder("197");
            obj.set_text("임원면접일");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "766", "209", "77", "21", null, null, this);
            obj.set_taborder("198");
            obj.set_text("Email");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSPPT_NAME", "absolute", "637", "137", "107", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_maxlength("30");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsHR_RCMSXM");
            obj.set_autoselect("true");
            obj.set_imemode("hangul");
            this.addChild(obj.name, obj);

            obj = new Edit("edtELTR_MLAD", "absolute", "834", "209", "316", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsHR_RCMSXM");
            obj.set_autoskip("false");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "766", "137", "77", "21", null, null, this);
            obj.set_taborder("205");
            obj.set_text("한문명");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "766", "161", "77", "21", null, null, this);
            obj.set_taborder("206");
            obj.set_text("성별");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "766", "185", "77", "21", null, null, this);
            obj.set_taborder("207");
            obj.set_text("채용부서");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "975", "137", "77", "21", null, null, this);
            obj.set_taborder("215");
            obj.set_text("영문명");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "975", "161", "77", "21", null, null, this);
            obj.set_taborder("216");
            obj.set_text("채용구분");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRWITW_DATE1", "absolute", "591", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static7", "absolute", "693", "71", "14", "21", null, null, this);
            obj.set_taborder("231");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRWITW_DATE2", "absolute", "708", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHREITW_DATE1", "absolute", "918", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static19", "absolute", "1020", "71", "14", "21", null, null, this);
            obj.set_taborder("234");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHREITW_DATE2", "absolute", "1035", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Edit("edtCCEM_NAME", "absolute", "834", "137", "107", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_maxlength("30");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsHR_RCMSXM");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDEPT_CODE", "absolute", "943", "185", "22", "21", null, null, this);
            obj.set_taborder("238");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAME", "absolute", "966", "185", "184", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_imemode("hangul");
            obj.set_maxlength("256");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDTL1_ADDR", "absolute", "562", "233", "270", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsHR_RCMSXM");
            obj.set_maxlength("200");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpPOST_NUMB", "absolute", "539", "233", "22", "21", null, null, this);
            obj.set_taborder("241");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDTL2_ADDR", "absolute", "834", "233", "316", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_maxlength("200");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsHR_RCMSXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtENEE_NAME", "absolute", "1043", "137", "107", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_maxlength("30");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsHR_RCMSXM");
            obj.set_imemode("alpha");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEMPL_BIRT", "absolute", "637", "161", "107", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.getSetter("binddataset").set("dsHR_RCMSXM");

            obj = new Combo("cmbGNDR_CODE", "absolute", "834", "161", "107", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_cssclass("styFormSearchCombo");
            obj.getSetter("binddataset").set("dsHR_RCMSXM");

            obj = new Combo("cmbRCDI_CODE", "absolute", "1043", "161", "107", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_cssclass("styFormSearchCombo");
            obj.getSetter("binddataset").set("dsHR_RCMSXM");

            obj = new Calendar("calWITW_DATE", "absolute", "429", "185", "108", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.getSetter("binddataset").set("dsHR_RCMSXM");

            obj = new Calendar("calEITW_DATE", "absolute", "637", "185", "107", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.getSetter("binddataset").set("dsHR_RCMSXM");

            obj = new Edit("edtDEPT_CODE", "absolute", "834", "185", "107", "21", null, null, this);
            obj.set_taborder("242");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "556", "209", "77", "21", null, null, this);
            obj.set_taborder("243");
            obj.set_text("집전화번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOHOM_TENR", "absolute", "637", "209", "107", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsHR_RCMSXM");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload", "absolute", "251", "233", "38", "21", null, null, this);
            obj.set_taborder("244");
            obj.getSetter("retry").set("0");
            obj.set_scrollbars("none");
            obj.style.set_buttonsize("38");
            obj.style.set_buttontext("등록");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("imgDelPhoto00", "absolute", "291", "233", "38", "21", null, null, this);
            obj.set_taborder("245");
            obj.set_text("삭제");
            obj.getSetter("class").set("");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("246");
            obj.set_text("인재Pool관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("247");
            obj.set_text("홈 > 인사관리 > 인사관리>인사기본>인재Pool관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("248");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("249");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("250");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("251");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("252");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("253");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("254");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("255");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("256");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "176", "21", null, null, this);
            obj.set_taborder("257");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "197", "103", "104", "25", null, null, this);
            obj.set_taborder("258");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "220", "237", "20", "41", null, null, this);
            obj.set_taborder("259");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "249", "263", "80", "10", null, null, this);
            obj.set_taborder("260");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "241", "129", "10", "41", null, null, this);
            obj.set_taborder("261");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "329", "157", "30", "41", null, null, this);
            obj.set_taborder("262");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 755, 381, this.tab.tab1,
            	//-- Layout function
            	function(p) {
            		p.set_text("학력");
            		p.set_taborder("0");
            		p.set_scrollbars("none");

            	}
            );
            this.tab.tab1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tab.tab2,
            	//-- Layout function
            	function(p) {
            		p.set_text("경력");

            	}
            );
            this.tab.tab2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 755, 357, this.tab.tab3,
            	//-- Layout function
            	function(p) {
            		p.set_text("면접");
            		p.set_scrollbars("none");

            	}
            );
            this.tab.tab3.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tab.tab4,
            	//-- Layout function
            	function(p) {
            		p.set_text("파일첨부");

            	}
            );
            this.tab.tab4.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("인재Pool관리");
            		p.set_scrollbars("none");
            		p.style.set_background("#ffffffff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item10","edtDEPT_CODE","value","dsHR_RCMSXM","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","Tab0.tabHR_MASTXD.calWOTM_BEDE","value","dsHR_MASTXD","WEDG_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","SPPT_NUMB","value","dsHR_RCMSXM","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtSPPT_NAME","value","dsHR_RCMSXM","SPPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtSPPT_PART","value","dsHR_RCMSXM","SPPT_PART");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","edtHNPN_TENR","value","dsHR_RCMSXM","HNPN_TENR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item191","edtELTR_MLAD","value","dsHR_RCMSXM","ELTR_MLAD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edtPOST_NUMB","value","dsHR_RCMSXM","POST_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item242","Tab0.tabHR_MASTXM.chkPBNR_YSNO","value","dsHR_MASTXD","PBNR_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item376","Tab0.tabHR_MASTXM.edtSHOE_SIZE","value","dsHR_MASTXD","SHOE_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item459","Tab0.tabHR_MASTXD.edtENLS_DATE","value","dsHR_MASTXD","ENLS_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item469","Tab0.tabHR_MASTXD.edtLVAM_DATE","value","dsHR_MASTXD","LVAM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item509","Tab0.tabHR_MASTXD.edtRGD2_ADDR","value","dsHR_MASTXD","RGD2_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtCCEM_NAME","value","dsHR_RCMSXM","CCEM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edtDTL1_ADDR","value","dsHR_RCMSXM","DTL1_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edtDTL2_ADDR","value","dsHR_RCMSXM","DTL2_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edtDEPT_NAME","value","dsHR_RCMSXM","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edtSPPT_NUMB","value","dsHR_RCMSXM","SPPT_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtENEE_NAME","value","dsHR_RCMSXM","ENEE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","calEMPL_BIRT","value","dsHR_RCMSXM","EMPL_BIRT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","cmbGNDR_CODE","value","dsHR_RCMSXM","GNDR_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","cmbRCDI_CODE","value","dsHR_RCMSXM","RCDI_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","calWITW_DATE","value","dsHR_RCMSXM","WITW_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","calEITW_DATE","value","dsHR_RCMSXM","EITW_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","edtOHOM_TENR","value","dsHR_RCMSXM","OHOM_TENR");
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
        this.addIncludeScript("HRMB0910.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("HRMB0910.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("HRMB0910.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	HRMB0910 인재Pool관리
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.12		안윤준		Initial Created.
         *   2016.09.29		황치웅		수정.
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
         *  화면 변수 선언부
         *********************/
        this.sBUTTONLIST 	= "TTTTTTTT";
        this.sPACKAGENAME 	= "HRMB0910";
        this.sSERVERDATE  	= this.fnc_SubStr(this.fnc_GetServerDateTime("date"),0,8);
        this.sKeyValue 		= new Array();
        this.sPhotoPath		= "";

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

        /*****************************************************************************************************
         *                                         공통 Event 처리 부분                                      *
         ****************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);

        	this.calSHRWITW_DATE1.set_value(this.fnc_SubStr(this.sSERVERDATE, 0, 4)+"0101");
        	this.calSHRWITW_DATE2.set_value(this.sSERVERDATE);

        	this.tab.tab1.btndsHR_RCSCHC_Add.set_enable(false);
        	this.tab.tab1.btndsHR_RCSCHC_Del.set_enable(false);
        	
        	this.tab.tab2.btndsHR_RCBFCA_Add.set_enable(false);
        	this.tab.tab2.btndsHR_RCBFCA_Del.set_enable(false);
        	
        	this.tab.tab3.btndsHR_RCINTW_Add.set_enable(false);
        	this.tab.tab3.btndsHR_RCINTW_Del.set_enable(false);
        	
        	this.tab.tab4.btndsTM_AFILED_Add.set_enable(false);
        	this.tab.tab4.btndsTM_AFILED_Del.set_enable(false);
        	
        	// 장혜진 과장 8/17 요구사항
        	// 임월면접 날짜 제거
        // 	this.calSHREITW_DATE1.set_value(this.fnc_SubStr(this.sSERVERDATE, 0, 4)+"0101");
        // 	this.calSHREITW_DATE2.set_value(this.sSERVERDATE);

        }

        /*-------------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時    |
         --------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();

        }

        /*--------------------------+
         |  03.조회 버튼 클릭 時    |
         +--------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_searchItemCheck()) return;
        	this.fnc_DatasetClear("dsHR_RCMSXM,dsHR_RCSCHC,dsHR_RCBFCA,dsHR_RCINTW,dsTM_AFILED");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsHR_RCMSXM=dsHR_RCMSXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*-----------------------------------+
         |  04.입력(신규) 버튼 클릭 時    |
         +----------------------------------*/
        this.fn_Input = function (obj) {

        	if (this.fnc_DatasetChangeCheck("dsHR_RCSCHC,dsHR_RCBFCA,dsHR_RCINTW,dsTM_AFILED")) {
        		if (this.fnc_Message("TMM023") == false) {
        			return false;
        		}
        	}
        	
        	this.fn_Cleardataset();
        	this.fnc_Information(this.tab.tab1.stInformation, 0, "SHR");
        	this.fnc_Information(this.tab.tab2.stInformation, 0, "SHR");
        	this.fnc_Information(this.tab.tab3.stInformation, 0, "SHR");
        	this.fnc_Information(this.tab.tab4.stInformation, 0, "SHR");
        	var iRow = this.dsHR_RCMSXM.insertRow(this.dsHR_RCMSXM.rowposition + 1);
        	this.edtSPPT_NAME.setFocus();
        	
        }

        /*-----------------------------------+
         |  05.삭제(제거) 버튼 클릭 時    |
         +----------------------------------*/
        this.fn_Delete = function (obj) {
        	if (this.dsHR_RCMSXM.getRowCount() > 0) {
        		if (this.fn_DeleteCheck()) {
        			this.dsHR_RCMSXM.deleteMultiRows(this.grdHR_RCMSXM.getSelectedDatasetRows());
        		}
        	} else {
        		this.fnc_Message("TMM007");
        	}

        	this.grdHR_RCMSXM.setFocus();
        }

        /*----------------------------+
         |  06.취소 버튼 클릭 時    |
         ----------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsHR_RCMSXM,dsHR_RCSCHC,dsHR_RCBFCA,dsHR_RCINTW,dsTM_AFILED");
        	this.edtSHRSPPT_NUMB.setFocus();

        }

        /*----------------------------+
         |  07.저장 버튼 클릭 時    |
         -----------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	this.sKeyValue[0] = this.dsHR_RCMSXM.getColumn(this.dsHR_RCMSXM.rowposition,"SPPT_NUMB");
            this.sKeyValue[1] = this.dsHR_RCMSXM.getColumn(this.dsHR_RCMSXM.rowposition,"SPPT_NAME");
            this.sKeyValue[2] = this.dsHR_RCMSXM.getColumn(this.dsHR_RCMSXM.rowposition,"EMPL_BIRT");

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsHR_RCMSXM=dsHR_RCMSXM:U dsHR_RCSCHC=dsHR_RCSCHC:U";
        		sInDataSet += "dsHR_RCBFCA=dsHR_RCBFCA:U dsHR_RCINTW=dsHR_RCINTW:U";
        		sInDataSet += "dsTM_AFILED=dsTM_AFILED:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*----------------------------+
         |  08.엑셀 버튼 클릭 時    |
         -----------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);

        }

        /*----------------------------+
         |  09.인쇄 버튼 클릭 時    |
         +----------------------------*/
        this.fn_Print = function (obj) {
        	
        	var reportfile = "/hrm/HRMB0910R01.jrf";
        	var sFILE_PATH 	= this.dsHR_RCMSXM.getColumn(this.dsHR_RCMSXM.rowposition, "FILE_PATH");
        	var sFile       = this.fnc_SubStr(sFILE_PATH, sFILE_PATH.lastIndexOf("/")+1);
        	
        	var params  ="#SPPT_PIC#" +  application.GBL_HTTPURL + "/core/erp/com/ComImageView.do?path=SPPT_PIC&name="+sFile;
        	var dataref = new Array();
        	
        	dataref[0] 				= new Object();
        	dataref[0].type 		= "TRAN";
        	dataref[0].svcUrl 		= "/core/erp/hrm/HRMB0910_SEARCH00.do";
        	dataref[0].inDataset 	= ""
        	dataref[0].outDataset 	= "dsHR_RCMSXM=dsHR_RCMSXM"
        	dataref[0].arg = this.fn_CreateArgument("REPORT00");
        	
        	dataref[1] 				= new Object();
        	dataref[1].type 		= "TRAN";
        	dataref[1].svcUrl		= "/core/erp/hrm/HRMB0910_SEARCH01.do";
        	dataref[1].inDataset 	= ""
        	dataref[1].outDataset 	= "dsHR_RCSCHC=dsHR_RCSCHC dsHR_RCBFCA=dsHR_RCBFCA dsHR_RCINTW=dsHR_RCINTW"
        	dataref[1].arg = this.fn_CreateArgument("SEARCH01");
        	
        	this.fn_UbiReport(reportfile, params, dataref, "");
        }

        /*-----------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항    |
         +----------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsHR_RCMSXM,dsHR_RCSCHC,dsHR_RCBFCA,dsHR_RCINTW,dsTM_AFILED",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);

        }

        /*-------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +-------------------------------------*/
        this.fn_HotKey = function (obj,e){
        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*--------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +-------------------------------------*/
        this.fn_EditFocus = function (obj){
        	this.fnc_EditFocus(obj);

        }
        /****************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*----------------------+
         |  조회 필수 체크!   |
         +---------------------*/
        this.fn_searchItemCheck = function () {
        	if (this.fnc_DatasetChangeCheck("dsHR_RCMSXM,dsHR_RCSCHC,dsHR_RCBFCA,dsHR_RCINTW,dsTM_AFILED")) {
        		if (this.fnc_Message("TMM023") == false) {
        			return false;

        		}
        	}
        	
        	if (this.calSHRWITW_DATE1.value > this.calSHRWITW_DATE2.value) {
        		return this.fnc_SearchCheckPostAction("TMM028", "실무면접시작일,실무면접종료일", this.calSHRWITW_DATE1);
        	}
        	
        	if (this.calSHREITW_DATE1.value > this.calSHREITW_DATE2.value) {
        		return this.fnc_SearchCheckPostAction("TMM028", "임원면접시작일,임원면접종료일", this.calSHREITW_DATE1);
        	}
        	
        	return true;

        }

        /*---------------------+
         |  삭제 여부 체크!  |
         +---------------------*/
        this.fn_DeleteCheck = function (obj) {
        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdHR_RCMSXM);

        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else {
        		var sQuestionText = "성명: " + this.dsHR_RCMSXM.getColumn(this.dsHR_RCMSXM.rowposition, "SPPT_NAME");
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        }

        /*-----------------------+
         |  저장 여부 체크!    |
         +-----------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsHR_RCMSXM,dsHR_RCSCHC,dsHR_RCBFCA,dsHR_RCINTW,dsTM_AFILED")) {
        		this.fnc_Message("TMM003");
        		return false;

        	}

        	for (var i = 0; i < this.dsHR_RCMSXM.getRowCount(); i++) { // 필수 입력 항목 체크 Main

        		if (this.fnc_ToUpper(this.dsHR_RCMSXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_RCMSXM.getColumn(i, "SPPT_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "성명", this.dsHR_RCMSXM, i, this.edtSPPT_NAME, "");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_RCMSXM.getColumn(i, "EMPL_BIRT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "주민번호", this.dsHR_RCMSXM, i, this.calEMPL_BIRT, "");
        		}

        	}

        	for (var i = 0; i < this.dsHR_RCSCHC.getRowCount(); i++) { // TAB(1) 학력

        		if (this.fnc_ToUpper(this.dsHR_RCSCHC.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_RCSCHC.getColumn(i, "SCDN_CODE"))) < 1) {
        			this.tab.set_tabindex(0);
        			return this.fnc_CheckPostAction("TMM072", "학력", this.dsHR_RCSCHC, i, this.tab.tab1.grdHR_RCSCHC, "");
        		}

        
        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_RCSCHC.getColumn(i, "SCHL_CODE"))) < 1
        		&& this.fnc_Length(this.fnc_Trim(this.dsHR_RCSCHC.getColumn(i, "SCHL_NAME"))) < 1) {
        			this.tab.set_tabindex(0);
        			return this.fnc_CheckPostAction("TMM072", "학교명", this.dsHR_RCSCHC, i, this.tab.tab1.grdHR_RCSCHC, "");
        		}

        	}

        	for (var i = 0; i < this.dsHR_RCBFCA.getRowCount(); i++) { // TAB(2) 경력

        		if (this.fnc_ToUpper(this.dsHR_RCBFCA.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_RCBFCA.getColumn(i, "WORK_ORGT"))) < 1) {
        			this.tab.set_tabindex(1);
        			return this.fnc_CheckPostAction("TMM072", "근무처", this.dsHR_RCBFCA, i, this.tab.tab2.grdHR_RCBFCA, "");
        		}

        	}

        	for (var i = 0; i < this.dsHR_RCINTW.getRowCount(); i++) { // TAB(3) 면접

        		if (this.fnc_ToUpper(this.dsHR_RCINTW.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsHR_RCINTW.getColumn(i, "INDV_CODE"))) < 1) {
        			this.tab.set_tabindex(2);
        			return this.fnc_CheckPostAction("TMM072", "구분", this.dsHR_RCINTW, i, this.tab.tab3.grdHR_RCINTW, "");
        		}

        	}

        	return true;

        }

        /*----------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!    |
         +----------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " SPPT_PART=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRSPPT_PART.value)); // 지원분야
        		sReturnString += " SPPT_NUMB=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRSPPT_NUMB.value)); // 지원번호
        		sReturnString += " WITW_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRWITW_DATE1.value)); // 실무면접일1
        		sReturnString += " WITW_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRWITW_DATE2.value)); // 실무면접일2
        		sReturnString += " EITW_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHREITW_DATE1.value)); // 임원면접일1
        		sReturnString += " EITW_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHREITW_DATE2.value)); // 임원면접일2

        	} else if ( sKind == "REPORT00") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " SPPT_NUMB=" 	+ this.fnc_Quote(this.dsHR_RCMSXM.getColumn(this.dsHR_RCMSXM.rowposition, "SPPT_NUMB")); // 지원번호
        		
        	} else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " SPPT_NUMB=" 	+ this.fnc_Quote(this.dsHR_RCMSXM.getColumn(this.dsHR_RCMSXM.rowposition, "SPPT_NUMB")); // 지원번호
        		sReturnString += " FILE_IDXX=" 	+ this.fnc_Quote(this.dsHR_RCMSXM.getColumn(this.dsHR_RCMSXM.rowposition, "FILE_IDXX")); // 파일번호

        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);

        	}
        	
        	return sReturnString;

        }

        /*------------------------=-----------------+
         |  Transaction 후 처리 해야 할 내용!     |
         +------------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {

        	if (ErrorCode < 0) {
        		if (application.GBL_SESSONCHK == "E0001") {
        			this.fnc_ErrorProcess(ErrorCode, ErrorMSG);

        		} else 	{
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
        		this.fnc_Information(this.stInformation, this.dsHR_RCMSXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsHR_RCMSXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        		if ( this.sKeyValue[0] != "" ) {
        			var irow = this.dsHR_RCMSXM.findRow("SPPT_NUMB",this.sKeyValue[0]);
        			this.sKeyValue[0] = "";
        			if(irow<0) irow=0;
        			this.dsHR_RCMSXM.set_rowposition(irow);
        		}
        		
        		if ( this.fnc_Trim(this.sKeyValue[0]) == "" ) {
                    var irow = this.dsHR_RCMSXM.findRowExpr("SPPT_NAME =='"+this.sKeyValue[1]+"'&& EMPL_BIRT =='"+this.sKeyValue[2]+"'");
        			this.sKeyValue[0] = this.sKeyValue[1] = this.sKeyValue[2] = "";
        			if(irow<0) irow = 0;
        			this.dsHR_RCMSXM.set_rowposition(irow);
                }
                
        		if ( this.fnc_Length(this.dsHR_RCMSXM.getColumn(this.dsHR_RCMSXM.rowposition, "FILE_PATH")) > 0 ){
        			var objDate = new Date();
        			var sFILE_PATH 	= this.dsHR_RCMSXM.getColumn(this.dsHR_RCMSXM.rowposition, "FILE_PATH");
        			var sFile 		= this.fnc_SubStr(sFILE_PATH, sFILE_PATH.lastIndexOf("/")+1);
                    this.imgPHOT_FILE.set_image(application.GBL_HTTPURL + "/core/erp/com/ComImageView.do?path=SPPT_PIC&name="  + sFile + "&sTime=" + objDate.getTime());
                    this.FileUpload.style.set_buttontext("변경");
                    
                } else {
        			this.imgPHOT_FILE.set_image("theme://images/img_WF_user.png");
                    this.FileUpload.style.set_buttontext("등록");
                    
                }
                
                this.tab.tab1.btndsHR_RCSCHC_Add.set_enable(true);
        		this.tab.tab1.btndsHR_RCSCHC_Del.set_enable(true);
        		
        		this.tab.tab2.btndsHR_RCBFCA_Add.set_enable(true);
        		this.tab.tab2.btndsHR_RCBFCA_Del.set_enable(true);
        		
        		this.tab.tab3.btndsHR_RCINTW_Add.set_enable(true);
        		this.tab.tab3.btndsHR_RCINTW_Del.set_enable(true);
        		
        		this.tab.tab4.btndsTM_AFILED_Add.set_enable(true);
        		this.tab.tab4.btndsTM_AFILED_Del.set_enable(true);

        	} else if (sMethodName == "REPORT00") {
        	
        	} else if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.tab.tab1.stInformation, this.dsHR_RCSCHC.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Information(this.tab.tab2.stInformation, this.dsHR_RCBFCA.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Information(this.tab.tab3.stInformation, this.dsHR_RCINTW.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Information(this.tab.tab4.stInformation, this.dsTM_AFILED.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");

        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbGNDR_CODE,dsGNDR_CODE,0"; 			// 성별
        			arrParam[1] = "COMBO,cmbRCDI_CODE,dsRCDI_CODE,0"; 			// 채용구분
        			arrParam[2] = "GRID,grdHR_RCMSXM,dsGNDR_CODE,GNDR_CODE"; 	// 그리드(Main) 성별
        			arrParam[3] = "GRID,tab.tab1.grdHR_RCSCHC,dsSCDN_CODE,SCDN_CODE"; 	// 그리드(Tab1) 학력
        			arrParam[4] = "GRID,tab.tab1.grdHR_RCSCHC,dsDGDN_CODE,DGDN_CODE"; 	// 그리드(Tab1) 학위
        			arrParam[5] = "GRID,tab.tab1.grdHR_RCSCHC,dsMJRA_CODE,MJRA_CODE"; 	// 그리드(Tab1) 계열
        			arrParam[6] = "GRID,tab.tab3.grdHR_RCINTW,dsINDV_CODE,INDV_CODE"; 	// 그리드(Tab3) 구분
        			arrParam[7] = "GRID,tab.tab4.grdTM_AFILED,dsFITY_CODE,FITY_CODE"; 	// 그리드(Tab3) 구분
        		this.fnc_CommonCodeInnerBind(arrParam);

        		this.dsFITY_CODE.filter("REF3_FILD == '1'");
         	}

        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	if(obj.readonly == true) return;

        	var arrParam = new Array();

        	if ((obj.name == "imgHelpSHRSPPT_NUMB") || (obj.name == "edtSHRSPPT_NAME")) { // 성명(SHR)
        		arrParam[0] = "HRM0201";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRSPPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRSPPT_NAME";
        		arrParam[5] = "edtSHRSPPT_NUMB,edtSHRSPPT_NAME";
        		arrParam[6] = "0,1";
        		

        	} else if ((obj.name == "imgHelpDEPT_CODE") || (obj.name == "edtDEPT_NAME")) { // 채용부서
        		arrParam[0] = "TMM0004";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtDEPT_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtDEPT_NAME";
        		arrParam[5] = "edtDEPT_CODE,edtDEPT_NAME";
        		arrParam[6] = "0,1";

        	} else if ((obj.name == "imgHelpPOST_NUMB")) {
        		arrParam[0] = "COMPOST";
         		arrParam[1] = "";
         		arrParam[2] = "";
         		arrParam[3] = "N";
         		arrParam[4] = "edtDTL1_ADDR";
         		arrParam[5] = "edtPOST_NUMB,edtDTL1_ADDR,edtDTL2_ADDR";
         		arrParam[6] = "";

        	} else if (obj.name == "grdHR_RCSCHC") {
        		// 입력 그리드 - 학력
        		if (this.fnc_getGridHelpColName(obj, sFromDs) == "SCHL_CDNM") {
        			arrParam[0] = "TMM1000";
        			arrParam[1] = "SCHL_CODE";
        			arrParam[2] = "SCHL_CDNM";
        			arrParam[3] = "N";
        			arrParam[4] = "tab.tab1.grdHR_RCSCHC";
        			arrParam[5] = "SCHL_CODE,SCHL_CDNM";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;

        		} else if (this.fnc_getGridHelpColName(obj, sFromDs) == "MAJR_CDNM") {
        			arrParam[0] = "TMM1000";
        			arrParam[1] = "MAJR_CODE";
        			arrParam[2] = "MAJR_CDNM";
        			arrParam[3] = "N";
        			arrParam[4] = "tab.tab1.grdHR_RCSCHC";
        			arrParam[5] = "MAJR_CODE,MAJR_CDNM";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;

        		}
        	}

        
        	if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);

        }

        /*****************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         *****************************************************************************************************/
        /*-----------------------+
         | Main Data row 변경 시 |
         +----------------------*/
        this.dsHR_RCMSXM_onrowposchanged = function(obj,e) {
        	
        	if (this.fnc_DatasetChangeCheck("dsHR_RCSCHC,dsHR_RCBFCA,dsHR_RCINTW,dsTM_AFILED")) {
        		if (this.fnc_Message("TMM023") == false) {
        			return false;
        		}
        	}
        	
        	if (this.fnc_ToUpper(this.dsHR_RCMSXM.getRowType(this.dsHR_RCMSXM.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.fn_Cleardataset();

        	} else {
        	
        		if ( this.fnc_Length(this.dsHR_RCMSXM.getColumn(obj.rowposition, "FILE_PATH")) > 0 ){
        			var objDate = new Date();
        			var sFILE_PATH 	= this.dsHR_RCMSXM.getColumn(this.dsHR_RCMSXM.rowposition, "FILE_PATH");
        			var sFile 		= this.fnc_SubStr(sFILE_PATH, sFILE_PATH.lastIndexOf("/")+1);
        			this.imgPHOT_FILE.set_image(application.GBL_HTTPURL + "/core/erp/com/ComImageView.do?path=SPPT_PIC&name="  + sFile + "&sTime=" + objDate.getTime());
        			this.FileUpload.style.set_buttontext("변경");
        			
        		} else {
        			this.imgPHOT_FILE.set_image("theme://images/img_WF_user.png");
        			this.FileUpload.style.set_buttontext("등록");
        			
        		}
        		
        		this.DetailQuery();
        		
        	}
        }

        this.fn_Cleardataset = function () {

        	var CleanDS  = "dsHR_RCSCHC"; //학력사항
        		CleanDS += ",dsHR_RCBFCA"; //경력사항
        		CleanDS += ",dsHR_RCINTW"; //가족사항
        		CleanDS += ",dsTM_AFILED"; //자격면허
        	
        	this.fnc_DatasetClear(CleanDS); //기 조회 자료 초기화
        	
        	this.tab.tab1.stInformation.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
        	this.tab.tab2.stInformation.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
        	this.tab.tab3.stInformation.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
        	this.tab.tab4.stInformation.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
        	
        	this.imgPHOT_FILE.set_image("theme://images/img_WF_user.png");
        	this.FileUpload.style.set_buttontext("등록");

        }

        this.DetailQuery = function () {

        	if (this.dsHR_RCMSXM.rowcount < 1) {
        		return;
        	}

        	// dataset을 서버에서 가져온다.
        	var sMethodName  = "SEARCH01";
        	var sInDataSet 	 = "";
        	var sOutDataSet  = "dsHR_RCSCHC=dsHR_RCSCHC "; // 학력
        		sOutDataSet += "dsHR_RCBFCA=dsHR_RCBFCA "; // 경력
        		sOutDataSet += "dsHR_RCINTW=dsHR_RCINTW "; // 면접
        		sOutDataSet += "dsTM_AFILED=dsTM_AFILED "; // 파일첨부
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);

        }

        /*-----------------------+
         | TAB 행추가 버튼 클릭 시 |
         +----------------------*/
        this.Tab_Add_OnClick = function(obj,e) {

        	if ( this.fnc_Length(this.dsHR_RCMSXM.getColumn(this.dsHR_RCMSXM.rowposition, "SPPT_NUMB")) > 0 ){

        		var sSPPT_NUMB = this.dsHR_RCMSXM.getColumn(this.dsHR_RCMSXM.rowposition, "SPPT_NUMB");

        		if ( obj.id == "btndsHR_RCSCHC_Add" ) { // 학력 추가
        			var iRow = this.dsHR_RCSCHC.addRow();
        			this.dsHR_RCSCHC.setColumn(iRow, "SPPT_NUMB", sSPPT_NUMB);
        			this.tab.tab1.grdHR_RCSCHC.setFocus();
        			this.dsHR_RCSCHC.setColumn(iRow, "HISL_YSNO", 0); // 최종학력 0으로 세팅

        		} else if ( obj.id == "btndsHR_RCBFCA_Add" ) { // 경력 추가
        			var iRow = this.dsHR_RCBFCA.addRow();
        			this.dsHR_RCBFCA.setColumn(iRow, "SPPT_NUMB", sSPPT_NUMB);
        			this.tab.tab2.grdHR_RCBFCA.setFocus();

        		} else if ( obj.id == "btndsHR_RCINTW_Add" ) { // 면접 추가
        			if ( this.dsHR_RCINTW.getRowCount() < 4 ) {
        				var iRow = this.dsHR_RCINTW.addRow();
        				this.dsHR_RCINTW.setColumn(iRow, "SPPT_NUMB", sSPPT_NUMB);

        			}
        			this.tab.tab3.grdHR_RCINTW.setFocus();
        			
        		} else if ( obj.id == "btndsTM_AFILED_Add" ) { // 파일첨부
        			var iRow = this.dsTM_AFILED.addRow();
        			this.dsTM_AFILED.setColumn(iRow, "FILE_IDXX", "");
        			this.tab.tab4.grdTM_AFILED.setFocus();
        		}
        	} else {
        	
        		return this.fnc_Message("HRM065"); // 지원자를 먼저 선택하세요.
        	}
        }

        /*-----------------------+
         | TAB 행삭제 버튼 클릭 시 |
         +----------------------*/
        this.Tab_Del_OnClick = function(obj,e) {

        	if ( this.fnc_Length(this.dsHR_RCMSXM.getColumn(this.dsHR_RCMSXM.rowposition, "SPPT_NUMB")) > 0 ){

        		if ( obj.id == "btndsHR_RCSCHC_Del" ) { // 학력 삭제
        			if (this.dsHR_RCSCHC.getRowCount() > 0) {
        				if (this.fn_DeleteCheckTab(this.dsHR_RCSCHC, this.tab.tab1.grdHR_RCSCHC)){
        					this.dsHR_RCSCHC.deleteRow(this.dsHR_RCSCHC.rowposition);
        					this.tab.tab1.grdHR_RCSCHC.setFocus();
        				}
        			}

        		} else if ( obj.id == "btndsHR_RCBFCA_Del" ) { // 경력 삭제
        			if (this.dsHR_RCBFCA.getRowCount() > 0) {
        				if (this.fn_DeleteCheckTab(this.dsHR_RCBFCA, this.tab.tab2.grdHR_RCBFCA)){
        					this.dsHR_RCBFCA.deleteRow(this.dsHR_RCBFCA.rowposition);
        					this.tab.tab2.grdHR_RCBFCA.setFocus();

        				}
        			}

        		} else if ( obj.id == "btndsHR_RCINTW_Del" ) { // 면접 삭제
        			if (this.dsHR_RCINTW.getRowCount() > 0) {
        				if (this.fn_DeleteCheckTab(this.dsHR_RCINTW, this.tab.tab3.grdHR_RCINTW)){
        					this.dsHR_RCINTW.deleteRow(this.dsHR_RCINTW.rowposition);
        					this.tab.tab3.grdHR_RCINTW.setFocus();

        				}
        			}
        			
        		} else if ( obj.id == "btndsTM_AFILED_Del" ) { // 파일첨부 삭제
        			if (this.dsTM_AFILED.getRowCount() > 0) {
        				if (this.fn_DeleteCheckTab(this.dsTM_AFILED, this.tab.tab4.grdTM_AFILED)){
        					this.dsTM_AFILED.deleteRow(this.dsTM_AFILED.rowposition);
        					this.tab.tab4.grdTM_AFILED.setFocus();

        				}
        			}
        		} 
        	}
        }

        /*---------------------+
         | TAB 행삭제 버튼 체크 |
         +--------------------*/
        this.fn_DeleteCheckTab = function(ds,grd) {

        	if ( ds.id == "dsHR_RCSCHC" ) {
        		var sQuestionText = "학교명: " + ds.getColumn(ds.rowposition, "SCHL_CDNM");

        	} else if ( ds.id == "dsHR_RCBFCA" ) {
        		var sQuestionText = "근무처: " + ds.getColumn(ds.rowposition, "WORK_ORGT");

        	} else if ( ds.id == "dsHR_RCINTW" ) {
        		var sQuestionText = "구분: " + ds.getColumn(ds.rowposition, "INDV_CODE");

        	} else if ( ds.id == "dsTM_AFILED" ) {
        		var sQuestionText = "파일종류: " + ds.getColumn(ds.rowposition, "FITY_CODE");

        	}
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*----------------------+
         | TAB 그리드 값 변경 시 |
         +---------------------*/
        this.ds_oncolumnchanged = function(obj,e) {
        	if ( obj.id== "dsHR_RCSCHC") { // 학력
        		if (e.columnid == "SCHL_CDNM" || e.columnid == "MAJR_CDNM") {
        			this.fn_HelpDialoge(this.tab.tab1.grdHR_RCSCHC, "YES" ,e.oldvalue, e.columnid);

        		}
        	}

        	if ( obj.id== "dsHR_RCINTW") { // 면접
        		if ( e.columnid == "INDV_CODE"){
        			for ( var i=0; i<obj.getRowCount(); i++ ) {
        				if ( i != e.row) {
        					if ( obj.getColumn(i, "INDV_CODE") == e.newvalue ){
        						obj.setColumn(e.row, "INDV_CODE", e.oldvalue);
        					}
        				}
        			}
        		}
        	}

        }

        /*-------------------+
         | grd Cell 클릭 함수 |
         +-------------------*/
        this.grd_oncellclick = function(obj,e) {
        	if ( obj.id == "grdHR_RCSCHC" ) { // TAB(1) 학력
        		if ( e.cell == 9 ){ // 최종학교여부 클릭 시
        			for ( var i=0; i<this.dsHR_RCSCHC.getRowCount(); i++ ) {
        				if ( i == e.row ) {
        					this.dsHR_RCSCHC.setColumn(i, "HISL_YSNO", "1");
        				} else {
        					this.dsHR_RCSCHC.setColumn(i, "HISL_YSNO", "0");
        				}
        			}
        		}
        	}

        }

        /*-------------------+
         |  파일첨부 callback |
         +-------------------*/
        this.fn_CallFileUplodCallback = function(robjds,form) {

        	var objds 		= form.dsTM_AFILED;
        	var objmainds 	= form.dsHR_RCMSXM;
        	
        	if ( objmainds.getColumn(objmainds.rowposition, "FILE_IDXX") == "" ) {
        		objmainds.setColumn(objmainds.rowposition, "FILE_IDXX", robjds.getColumn(0, "FILE_IDXX"));
        	} else {
        		for ( var i=0; i<robjds.rowcount; i++ ) {
        			robjds.setColumn(i, "FILE_IDXX", objmainds.getColumn(objmainds.rowposition, "FILE_IDXX"));
        		}
        	}
        	
        	for(i = 0; i < robjds.rowcount; i++){
        		objds.copyRow(objds.rowposition, robjds, i);
        		
        		if(objds.updatecontrol){
        		}else{
        			objds.setRowType(iRow, Dataset.ROWTYPE_INSERT);
        		}
        	}
        	
        }

        /*---------------------+
         |  파일삭제 여부 체크  |
         +---------------------*/
        this.fn_checkDeleteFile = function () {
        	
        	if (this.dsTM_AFILED.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdTM_AFILED);
        	
        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else {
        		var sQuestionText = this.fnc_Trim(this.dsTM_AFILED.getColumn(this.dsTM_AFILED.rowposition, "LFIL_NAME"));
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        	
        }

        /***********************
           첨부파일 Upload 전처리
        ************************/
        this.FileUpload_onfindclick = function(obj,e){

        	if (this.dsHR_RCMSXM.getRowCount() < 1) {
        		this.fnc_Message("TMM141");
        		return false;
        		
        	}
        	
        	if (this.fnc_ToUpper(this.dsHR_RCMSXM.getRowType(this.dsHR_RCMSXM.rowposition)) == Dataset.ROWTYPE_INSERT) {
        		this.fnc_Message("TMM125" ,"먼저 저장 후 등록하세요");
        		return false;
        		
        	}
        	
        }

        /***********************
           첨부파일 Upload
        ************************/
        this.fn_FileUpload = function(obj,e) {

        	if ( e.newvalue != null ) {
        		var FileSub 	= this.fnc_SubStr(e.newvalue, e.newvalue.lastIndexOf("\\")+1);
        		var sExtFile 	= this.fnc_SubStr(FileSub,FileSub.lastIndexOf(".")).toLowerCase(); // 파일확장자
        		
        		if ( sExtFile == ".jpg" || sExtFile == ".png" || sExtFile == ".gif" ) {
        			var sFileUrl  	= application.GBL_HTTPURL + "/core/erp/com/comFile_UploadSingle.do";
        			var sPath 		= "SPPT_PIC/";
        			var iRow  		= this.dsHR_RCMSXM.rowposition;
        			var emplNumb 	= this.dsHR_RCMSXM.getColumn(iRow, "SPPT_NUMB");
        			var sPhyFile 	= emplNumb+sExtFile;
        			var objDate 	= new Date();
        			this.sPhotoPath = sPath+sPhyFile;
        			
        			this.FileUpload.style.set_buttontext("변경");
        			this.FileUpload.upload(sFileUrl + "?sPath=" + sPath + "&sPhyFile=" + sPhyFile + "&sTime=" + objDate.getTime());
        			this.FileUpload.deleteItem(0);     //업로드 후 업로드 항목 초기화
        			this.FileUpload.appendItem();
        			
        		} else {
        			this.fnc_Message("TMM300", "jpg, png, gif 파일만 등록 가능합니다.");
        			return;
        		}
        		
        	}

        }

        /***********************
           첨부파일 업로드 callback
        ************************/
        this.fn_FileUploadCallback = function(obj,e) {

        	if (e.errorcode == "0") {
        	
        		this.dsHR_RCMSXM.set_updatecontrol(false);
        		this.dsHR_RCMSXM.setColumn(this.dsHR_RCMSXM.rowposition, "FILE_PATH", this.sPhotoPath);
        		this.dsHR_RCMSXM.setRowType(this.dsHR_RCMSXM.rowposition, Dataset.ROWTYPE_UPDATE);
        		this.dsHR_RCMSXM.set_updatecontrol(true);
        		
        		var objDate = new Date();
        		var sFILE_PATH 	= this.dsHR_RCMSXM.getColumn(this.dsHR_RCMSXM.rowposition, "FILE_PATH");
        		var sFile       = this.fnc_SubStr(this.sPhotoPath, this.sPhotoPath.lastIndexOf("/")+1);
        		this.imgPHOT_FILE.set_image(application.GBL_HTTPURL + "/core/erp/com/ComImageView.do?path=SPPT_PIC&name=" + sFile + "&sTime=" + objDate.getTime());
        		
        	}

        }

        this.fn_FileUploadError = function(obj,e) {
        	this.dsHR_RCMSXM.setColumn(this.dsHR_RCMSXM.rowposition, "FILE_PATH", "");
        	return;
        	
        }

        

        this.imgDelPhoto00_onclick = function(obj,e) {
        	
        	var sFileUrl  	= application.GBL_HTTPURL + "/core/erp/com/comFile_UploadDelete.do";
        	
        	var sFILE_PATH 	= this.dsHR_RCMSXM.getColumn(this.dsHR_RCMSXM.rowposition, "FILE_PATH");
            var FileSub 	= this.fnc_SubStr(sFILE_PATH, sFILE_PATH.lastIndexOf("\\")+1);
            var sExtFile 	= this.fnc_SubStr(FileSub,FileSub.lastIndexOf(".")); // 파일확장자
            
            
        	var sPath 		= "SPPT_PIC/";
        	var iRow  		= this.dsHR_RCMSXM.rowposition;
        	var emplNumb 	= this.dsHR_RCMSXM.getColumn(iRow, "SPPT_NUMB");
        	var sPhyFile 	= emplNumb+sExtFile;
        	var svcUrl 		= sFileUrl + "?sPath=" + sPath + "&sPhyFile=" + sPhyFile;
        	
        	this.transaction("", svcUrl, "", "", "", "");
        	this.imgPHOT_FILE.set_image("theme://images/img_WF_user.png");
        	this.FileUpload.style.set_buttontext("등록");
        	this.dsHR_RCMSXM.setColumn(this.dsHR_RCMSXM.rowposition,"FILE_PATH","");
        	
        }

        this.tab_tab4_grdTM_AFILED_oncellclick = function(obj,e) {
        	
        	if( obj.getCellText(e.row, e.col) == "업로드" ) {
        	
        		if (this.fnc_Length(this.fnc_Trim(this.dsTM_AFILED.getColumn(e.row, "FITY_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "파일종류", this.dsTM_AFILED, e.row, this.tab.tab4.grdTM_AFILED, "FITY_CODE");
        		}
        		
        		this.fnc_CallFileUplod(1, "", "fn_CallFileUplodCallback");
        	
        	} else if( obj.getCellText(e.row, e.col) == "다운로드" ) {
        	
        		var filePath   = this.dsTM_AFILED.getColumn(e.row,"FILE_PATH");
        		var phyFileNm  = this.dsTM_AFILED.getColumn(e.row,"PFIL_NAME");
        		var realFileNm = this.dsTM_AFILED.getColumn(e.row,"LFIL_NAME");

        		if (this.fnc_Length(filePath) > 0) {
        			this.fnc_FileDownLoad(filePath, phyFileNm, realFileNm);
        		}
        	}
        }

        
        this.imgPHOT_FILE_onclick = function(obj,e) {
        	if (this.fnc_Length(this.fnc_Trim(this.dsHR_RCMSXM.getColumn(this.dsHR_RCMSXM.rowposition, "FILE_PATH"))) < 1) return;
        	
        	var sName 		= "HRMB0010P01";
        	var sFormURL 	= "hrm::HRMB0010P01.xfdl";
        	var sOpenStyle  = "modeless=false";
        		sOpenStyle += ",autosize=true";
        		sOpenStyle += ",top=-1";
        		sOpenStyle += ",left=-1";
        		sOpenStyle += ",width=990";
        		sOpenStyle += ",height=800";
        		sOpenStyle += ",title=true";
        		sOpenStyle += ",titletext=상세보기";
        		sOpenStyle += ",status=false";
        		sOpenStyle += ",resizable=true";
        		
        		var sFILE_PATH 	= this.dsHR_RCMSXM.getColumn(this.dsHR_RCMSXM.rowposition, "FILE_PATH");
        		var sFile 		= this.fnc_SubStr(sFILE_PATH, sFILE_PATH.lastIndexOf("/")+1);
        	

        	var objArgumentList = {
        		 sFILE_PATH : "SPPT_PIC/"
        		,sFILE_NAME : sFile
        		
        	};

        	this.fnc_OpenPopup(sName, sFormURL, objArgumentList, sOpenStyle, "");
        	
        }
        this.FileUpload_onflingstart = function(obj,e) {
        	
        }

        this.tab_onchanged = function(obj,e) {
        	this.fnc_GridSetting(obj.components[e.postindex]);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsHR_RCMSXM.addEventHandler("onrowposchanged", this.dsHR_RCMSXM_onrowposchanged, this);
            this.dsHR_RCSCHC.addEventHandler("oncolumnchanged", this.ds_oncolumnchanged, this);
            this.dsHR_RCINTW.addEventHandler("oncolumnchanged", this.ds_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.tab.addEventHandler("onchanged", this.tab_onchanged, this);
            this.tab.tab1.grdHR_RCSCHC.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.tab.tab1.grdHR_RCSCHC.addEventHandler("oncellclick", this.grd_oncellclick, this);
            this.tab.tab1.btndsHR_RCSCHC_Del.addEventHandler("onclick", this.Tab_Del_OnClick, this);
            this.tab.tab1.btndsHR_RCSCHC_Add.addEventHandler("onclick", this.Tab_Add_OnClick, this);
            this.tab.tab2.btndsHR_RCBFCA_Del.addEventHandler("onclick", this.Tab_Del_OnClick, this);
            this.tab.tab2.btndsHR_RCBFCA_Add.addEventHandler("onclick", this.Tab_Add_OnClick, this);
            this.tab.tab3.btndsHR_RCINTW_Del.addEventHandler("onclick", this.Tab_Del_OnClick, this);
            this.tab.tab3.btndsHR_RCINTW_Add.addEventHandler("onclick", this.Tab_Add_OnClick, this);
            this.tab.tab4.grdTM_AFILED.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.tab.tab4.grdTM_AFILED.addEventHandler("oncellclick", this.tab_tab4_grdTM_AFILED_oncellclick, this);
            this.tab.tab4.btndsTM_AFILED_Add.addEventHandler("onclick", this.Tab_Add_OnClick, this);
            this.tab.tab4.btndsTM_AFILED_Del.addEventHandler("onclick", this.Tab_Del_OnClick, this);
            this.edtSHRSPPT_PART.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRSPPT_PART.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRSPPT_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRSPPT_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRSPPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRSPPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgPHOT_FILE.addEventHandler("onclick", this.imgPHOT_FILE_onclick, this);
            this.Static34.addEventHandler("onclick", this.Static34_onclick, this);
            this.edtSPPT_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSPPT_PART.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtHNPN_TENR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtPOST_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static06.addEventHandler("onclick", this.Static34_onclick, this);
            this.edtSPPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtELTR_MLAD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static11.addEventHandler("onclick", this.Static34_onclick, this);
            this.calSHRWITW_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRWITW_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHREITW_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHREITW_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCCEM_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtDTL1_ADDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpPOST_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtDTL2_ADDR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtENEE_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calEMPL_BIRT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calWITW_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calEITW_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtOHOM_TENR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.FileUpload.addEventHandler("onsuccess", this.fn_FileUploadCallback, this);
            this.FileUpload.addEventHandler("onerror", this.fn_FileUploadError, this);
            this.FileUpload.addEventHandler("onfindclick", this.FileUpload_onfindclick, this);
            this.FileUpload.addEventHandler("onitemchanged", this.fn_FileUpload, this);
            this.imgDelPhoto00.addEventHandler("onclick", this.imgDelPhoto00_onclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("HRMB0910.xfdl");
        this.loadPreloadList();
       
    };
}
)();
