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
                this.set_name("HRMK0020");
                this.set_titletext("증명서신청승인");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYN\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">LADN_CODE</Col><Col id=\"DSNAME\">dsLADN_CODE</Col><Col id=\"USEYN\">ALL</Col><Col id=\"HEADFLAG\">SELECT</Col></Row><Row><Col id=\"CODEID\">CSUS_CODE</Col><Col id=\"DSNAME\">dsCSUS_CODE</Col><Col id=\"USEYN\">ALL</Col><Col id=\"HEADFLAG\">SELECT</Col></Row><Row><Col id=\"CODEID\">APPD_CODE</Col><Col id=\"DSNAME\">dsAPPD_CODE</Col><Col id=\"USEYN\">Y</Col><Col id=\"HEADFLAG\">SELECT</Col></Row><Row><Col id=\"CODEID\">APPD_CODE</Col><Col id=\"DSNAME\">dsAPPD_CODE2</Col><Col id=\"USEYN\">Y</Col><Col id=\"HEADFLAG\">SELECT</Col></Row><Row><Col id=\"CODEID\">APPD_CODE</Col><Col id=\"DSNAME\">dsAPPD_CODE3</Col><Col id=\"USEYN\">Y</Col><Col id=\"HEADFLAG\">SELECT</Col></Row><Row><Col id=\"CODEID\">APPD_CODE</Col><Col id=\"DSNAME\">dsSHRAPPD_CODE</Col><Col id=\"USEYN\">ALL</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">STSD_CODE</Col><Col id=\"DSNAME\">dsSHRSTSD_CODE</Col><Col id=\"USEYN\">ALL</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"CODEID\">STSD_CODE</Col><Col id=\"DSNAME\">dsSTSD_CODE</Col><Col id=\"USEYN\">ALL</Col><Col id=\"HEADFLAG\">SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_CERSIS", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPL_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPL_SEQN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"STSD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"LADN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CSUS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CERS_USEX\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SBMT_ORGT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ISSU_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ISSU_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ISSU_PCNT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPL_PCNT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPL_YEAR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PCOC_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RCGN_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPD_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"STSD_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"LADN_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"KEYVALUE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WODN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SYST_LNCD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WORK_USID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WKNT_EMNR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WKNT_TYCD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SOUS_LNKY\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"WKNT_CNTT\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_APPOXD", this);
            obj._setContents("<ColumnInfo><Column id=\"CSPT_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SRAL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APNT_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APNT_SEQN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APNT_HOCT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APDN_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SECT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox01", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("133");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("0");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("1");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_text("증명서신청승인");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 1메뉴 > 자금계획관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "133", "262", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("신청기간");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "342", "71", "68", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "28", "97", "70", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("발급구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRSTSD_CODE", "absolute", "97", "97", "216", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("38");
            obj.set_displayrowcount("10");
            obj.set_index("0");

            obj = new Static("Static34", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "313", "61", "40", "67", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "616", "61", "40", "67", null, null, this);
            obj.set_taborder("42");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "129", "80", "25", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("45");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "806", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "147", "216", "7", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHR_CERSIS", "absolute", "8", "154", null, "278", "25", null, this);
            obj.set_taborder("108");
            obj.set_binddataset("dsHR_CERSIS");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"117\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"180\"/><Column size=\"240\"/><Column size=\"180\"/><Column size=\"70\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"306\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell cssclass=\"Cellgrd_WF_essential\" text=\"승인구분\"/><Cell col=\"1\" text=\"신청일\"/><Cell col=\"2\" text=\"사원번호\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"소속\"/><Cell col=\"5\" text=\"부서\"/><Cell col=\"6\" text=\"직급\"/><Cell col=\"7\" text=\"직책\"/><Cell col=\"8\" text=\"직위\"/><Cell col=\"9\" text=\"발급구분\"/><Cell col=\"10\" text=\"언어\"/><Cell col=\"11\" text=\"발행년도\"/><Cell col=\"12\" text=\"제출처\"/><Cell col=\"13\" text=\"용도\"/><Cell col=\"14\" text=\"세부용도\"/><Cell col=\"15\" text=\"신청매수\"/><Cell col=\"16\" text=\"인쇄매수\"/><Cell col=\"17\" text=\"담당자연락처\"/><Cell col=\"18\" text=\"발급일\"/><Cell col=\"19\" text=\"발급번호\"/><Cell col=\"20\" text=\"진행상태\"/><Cell col=\"21\" text=\"반려사유\"/><Cell col=\"22\" text=\"WORK알림 사용자언어코드\"/><Cell col=\"23\" text=\"WORK알림 작업자ID\"/><Cell col=\"24\" text=\"WORK알림 알림수신자\"/><Cell col=\"25\" text=\"WORK알림 작업알림유형코드\"/><Cell col=\"26\" text=\"WORK알림 출처연결키\"/><Cell col=\"27\" text=\"WORK알림 작업알림내용\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:APPD_CODE\" combodataset=\"expr:APPD_CODE==3?&quot;dsAPPD_CODE2&quot;:(APPD_CODE==0?&quot;dsAPPD_CODE3&quot;:&quot;dsAPPD_CODE&quot;)\" combocodecol=\"COMD_CODE\" combodatacol=\"COMD_CDNM\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"none\" style=\"align:center;\" text=\"bind:APPL_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:EMPL_NUMB\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:EMPL_NAME\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:SECT_NAME\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:CPOS_NAME\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:DURS_NAME\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:OPOS_NAME\"/><Cell col=\"9\" displaytype=\"combo\" edittype=\"none\" style=\"align:center;\" text=\"bind:STSD_CODE\"/><Cell col=\"10\" displaytype=\"combo\" edittype=\"none\" style=\"align:center;\" text=\"bind:LADN_CODE\"/><Cell col=\"11\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:APPL_YEAR\"/><Cell col=\"12\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:SBMT_ORGT\"/><Cell col=\"13\" displaytype=\"combo\" edittype=\"none\" style=\"align:left;\" text=\"bind:CSUS_CODE\"/><Cell col=\"14\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:CERS_USEX\" expandsize=\"50\"/><Cell col=\"15\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:APPL_PCNT\" editlengthunit=\"ascii\"/><Cell col=\"16\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:ISSU_PCNT\" editlengthunit=\"ascii\"/><Cell col=\"17\" displaytype=\"checkbox\" edittype=\"none\" style=\"align:center;\" text=\"bind:PCOC_YSNO\"/><Cell col=\"18\" displaytype=\"date\" edittype=\"none\" style=\"align:center;\" text=\"bind:ISSU_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"19\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:ISSU_NUMB\"/><Cell col=\"20\" displaytype=\"combo\" edittype=\"none\" text=\"bind:APPD_CODE\"/><Cell col=\"21\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:REMK_100X\" editlimit=\"100\"/><Cell col=\"22\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:SYST_LNCD\"/><Cell col=\"23\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:WORK_USID\"/><Cell col=\"24\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:WKNT_EMNR\"/><Cell col=\"25\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:WKNT_TYCD\"/><Cell col=\"26\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:SOUS_LNKY\"/><Cell col=\"27\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:WKNT_CNTT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "8", "436", "262", "21", null, null, this);
            obj.set_taborder("109");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "573", "432", "80", "25", null, null, this);
            obj.set_taborder("110");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "8", "451", "216", "6", null, null, this);
            obj.set_taborder("111");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHR_APPOXD", "absolute", "8", "457", null, null, "25", "15", this);
            obj.set_taborder("112");
            obj.set_binddataset("dsHR_APPOXD");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"발령일\"/><Cell col=\"1\" text=\"발령구분\"/><Cell col=\"2\" text=\"소속\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직급\"/><Cell col=\"5\" text=\"직책\"/><Cell col=\"6\" text=\"직위\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" style=\"align:center;\" text=\"bind:APNT_DATE\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:APDN_NAME\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:SECT_NAME\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:center;\" text=\"bind:CPOS_NAME\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:center;\" text=\"bind:DURS_NAME\"/><Cell col=\"6\" displaytype=\"text\" style=\"align:center;\" text=\"bind:OPOS_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "8", "129", "216", "7", null, null, this);
            obj.set_taborder("116");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRCHRQ_DATE1", "absolute", "96", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("119");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");
            obj.set_value("null");

            obj = new Static("Static55", "absolute", "198", "71", "14", "21", null, null, this);
            obj.set_taborder("120");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRCHRQ_DATE2", "absolute", "213", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("121");
            obj.set_value("TODAY");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("normal");

            obj = new Combo("cmbSHRAPPD_CODE", "absolute", "411", "97", "205", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("132");
            obj.set_displayrowcount("10");
            obj.set_index("0");

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "411", "71", "80", "21", null, null, this);
            obj.set_taborder("134");
            obj.set_enable("false");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("10");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "493", "71", "21", "21", null, null, this);
            obj.set_taborder("135");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "516", "71", "100", "21", null, null, this);
            obj.set_taborder("136");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "687", "71", "80", "21", null, null, this);
            obj.set_taborder("137");
            obj.set_enable("false");
            obj.set_autoselect("true");
            obj.set_lengthunit("Byet");
            obj.set_maxlength("10");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NUMB", "absolute", "769", "71", "21", "21", null, null, this);
            obj.set_taborder("138");
            obj.getSetter("transparenthittest").set("false");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "792", "71", "100", "21", null, null, this);
            obj.set_taborder("139");
            obj.set_autoselect("true");
            obj.set_lengthunit("Byet");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "645", "71", "68", "21", null, null, this);
            obj.set_taborder("141");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "342", "97", "70", "21", null, null, this);
            obj.set_taborder("142");
            obj.set_text("승인구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("증명서신청승인");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("HRMK0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRMK0020.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	HRMK0020 증명서신청 승인
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.05		jar		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
        /***************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                      *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                       *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망    *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                 *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /*************************
         *  공통 Script Include  *
         *************************/
        //include "script::lib_script_common.xjs"

        /************************
         *  화면 변수 선언부  *
         ************************/
        this.sBUTTONLIST = "TTFFTTFF"; //공통기능정의(버튼순으로 T or F) 1:종료,2:조회,3:입력,4:삭제,5:취소,6:저장,7:엑셀,8:인쇄
        this.sPACKAGENAME = "HRMK0020"; //해당 Form에서 사용 할 Package 명  
        this.sKeyValue = new Array();
        this.sAppdName = "";

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

        /****************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*---------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +--------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	// 화면 정보 Display 및 Button 권한 설정
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.calSHRCHRQ_DATE1.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6)+ '01');
        	this.calSHRCHRQ_DATE2.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE")));
        	this.calSHRCHRQ_DATE1.setFocus();
        	
        	//승인상태 값에 따라 승인구분 콤보 필터 적용
        	this.dsAPPD_CODE.filter("COMD_CODE != '0' && COMD_CODE != 'S' && COMD_CODE != '3'"); // 반려
        	this.dsAPPD_CODE2.filter(""); //발급완료 
        	this.dsAPPD_CODE3.filter("COMD_CODE != 'S' && COMD_CODE != '3'");  //발급요청
        	
         	// 권한설정
        	switch(this.sUSERLAVEL) {
        	
        		case '1':	//관리자
        			this.imgHelpSHRDEPT_CODE.set_enable(true); 	//검색조건 부서 선택
        			this.edtSHRDEPT_NAME.set_enable(true); 		//검색조건 부서명
        			this.imgHelpSHREMPL_NUMB.set_enable(true); 	//검색조건 사원 선택
        			this.edtSHREMPL_NAME.set_enable(true); 		//검색조건 사원명	
        		break;
        			
        		case "2" :	//부문   					
        		break;
        		
        		case "3" :	//부실   					
        		break;
        		
        		case "4" :	//부서
        		break;	
        		
        		case '5':  //개인
        			this.imgHelpSHRDEPT_CODE.set_enable(false);
        			this.edtSHRDEPT_NAME.set_enable(false);
        			this.imgHelpSHREMPL_NUMB.set_enable(false);
        			this.edtSHREMPL_NAME.set_enable(false);   					
        		
        			if (application.GBL_EMPLNO.length > 0) {
        				this.edtSHRDEPT_CODE.set_value(application.GBL_DEPTCD);
        				this.edtSHRDEPT_NAME.set_value(application.GBL_DEPTNM);
        				this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
        				this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);			
        			} else {
        				this.edtSHRDEPT_CODE.set_value(' ');
        				this.edtSHRDEPT_NAME.set_value(' ');
        				this.edtSHREMPL_NUMB.set_value(' ');
        				this.edtSHREMPL_NAME.set_value(' ');
        			}	
        			this.fn_Search();

        			break;
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

        	if (!this.fn_SearchItemCheck()) return;
        	
        	// 조회 전 처리
        	this.fnc_DatasetClear("dsHR_CERSIS,dsHR_APPOXD"); //기 조회 자료 초기화

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsHR_CERSIS=dsHR_CERSIS";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdHR_CERSIS.setFocus(); //재 클릭 방지를 위해 Focus 이동
        	this.grdHR_CERSIS.setCellPos(1);
        }

        /*--------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Input = function (obj) {

        }

        /*---------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Delete = function (obj) {
        	
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         --------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsHR_CERSIS");
        	this.grdHR_CERSIS.setFocus();

        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         --------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	this.sKeyValue[0] = this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "EMPL_NUMB");
        	this.sKeyValue[1] = this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPL_DATE");
        	this.sKeyValue[2] = this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPL_SEQN");
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsHR_CERSIS=dsHR_CERSIS:U";
        	var sOutDataSet = "dsHR_CERSIS=dsHR_CERSIS";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdHR_CERSIS.setFocus(); //재 클릭 방지를 위해 Focus 이동

        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj) {

        	this.fnc_ToExcel(this.name);

        }

        /*--------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Print = function (obj) {
        }

        
        /*---------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +--------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsHR_CERSIS",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	
        	this.fnc_FormUnload(obj,e);

        }  

        /*-------------------------------------+
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

        
        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	
        	if (this.fnc_DatasetChangeCheck("dsHR_CERSIS")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRCHRQ_DATE1.value)) < 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "신청시작일", this.calSHRCHRQ_DATE1);
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRCHRQ_DATE2.value)) < 8) {
        		return this.fnc_SearchCheckPostAction("TMM072", "신청종료일", this.calSHRCHRQ_DATE2);
        	}
        	if (this.fnc_Trim(this.calSHRCHRQ_DATE1.value) > this.fnc_Trim(this.calSHRCHRQ_DATE2.value)) {
        		return this.fnc_SearchCheckPostAction("TMM042", "신청시작일,신청종료일", this.calSHRCHRQ_DATE1);
        	}
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	return true;
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsHR_CERSIS")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsHR_CERSIS.getRowCount(); i++) {
        		
        		if (this.fnc_ToUpper(this.dsHR_CERSIS.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if(this.dsHR_CERSIS.getColumn(i, "APPD_CODE") == "2"){ 
        			if (this.fnc_Length(this.fnc_Trim(this.dsHR_CERSIS.getColumn(i, 'REMK_100X'))) < 1) {
        				this.grdHR_CERSIS.setCellPos(this.grdHR_CERSIS.getBindCellIndex("body", "REMK_100X"));
        				this.grdHR_CERSIS.setFocus();
        				return this.fnc_CheckPostAction("TMM072", "반려사유", this.dsHR_CERSIS, i, this.grdHR_CERSIS, "REMK_100X");
        			}
        		}else if (this.dsHR_CERSIS.getColumn(i, "APPD_CODE") == "" | this.dsHR_CERSIS.getColumn(i, "APPD_CODE") == "undefined" |  this.dsHR_CERSIS.getColumn(i, "APPD_CODE") ==  null ){
        			return this.fnc_Message("PAY010", "승인구분");
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
        	// 증명서 신청 조회 
        	if (sKind == 'SEARCH00') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " APPL_STDT=" 		 + this.fnc_Quote(this.calSHRCHRQ_DATE1.value);
        		sReturnString += " APPL_ENDT=" 		 + this.fnc_Quote(this.calSHRCHRQ_DATE2.value);
        		sReturnString += " DEPT_CODE=" 		 + this.fnc_Quote(this.edtSHRDEPT_CODE.value);
        		sReturnString += " EMPL_NUMB=" 		 + this.fnc_Quote(this.edtSHREMPL_NUMB.value); 
        		sReturnString += " STSD_CODE=" 		 + this.fnc_Quote(this.cmbSHRSTSD_CODE.value);
        		sReturnString += " APPD_CODE=" 		 + this.fnc_Quote(this.cmbSHRAPPD_CODE.value);
        	
        	// 경력 상세 조회
        	} else if (sKind == 'SEARCH01') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " EMPL_NUMB=" 		 + this.fnc_Quote(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "EMPL_NUMB")); 
        	
        	// 증명서 승인 저장
        	} else if (sKind == 'SAVE00') {
        	
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		
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

        /*-------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {
        	
        	if (sMethodName == 'SEARCH00') {
        	
        		this.fnc_Information(this.stInformation, this.dsHR_CERSIS.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsHR_CERSIS.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        	} else if (sMethodName == 'SEARCH01') {
        	
        		this.fnc_Information(this.stInformation1, this.dsHR_APPOXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		   
        	} else if (sMethodName == 'SAVE00') {
        	
        		this.fnc_Information(this.stInformation, 0, "SAVE");		
        		this.fnc_Message("TMM103");
        		this.fn_Search(); 
        		   
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		arrParam[0] = "GRID,grdHR_CERSIS,dsLADN_CODE,LADN_CODE";
        		arrParam[1] = "GRID,grdHR_CERSIS,dsCSUS_CODE,CSUS_CODE";
        		arrParam[2] = "GRID,grdHR_CERSIS,dsSTSD_CODE,STSD_CODE";
        		arrParam[3] = "COMBO,cmbSHRSTSD_CODE,dsSHRSTSD_CODE,0"; 
        		arrParam[4] = "COMBO,cmbSHRAPPD_CODE,dsSHRAPPD_CODE,0"; 		
        		this.fnc_CommonCodeInnerBind(arrParam);
        		this.dsSHRAPPD_CODE.filter("COMD_CODE != 'S'");
        	}
        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) { 

        	if(this.dsHR_CERSIS.rowcount < 1 ) return;
        	
        	if(this.sKeyValue[0] > 0){
        		var iRow = this.dsHR_CERSIS.findRowExpr("EMPL_NUMB == '" + this.sKeyValue[0]  + "'&& APPL_DATE == '" + this.sKeyValue[1] + "'&& APPL_SEQN == '" + this.sKeyValue[2] + "'");
        			
        		this.sKeyValue[0] = "";
        		this.sKeyValue[1] = "";
        		this.sKeyValue[2] = "";
        				
        		if(iRow < 0) iRow = 0;
        			
        		this.dsHR_CERSIS.set_rowposition(iRow);
        	}

        	if(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPD_CODE") == "3" ) {
        		this.grdHR_CERSIS.set_readonly(true);
        	}else if(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPD_CODE") == "2" ) {
        		this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "REMK_100X"), "edittype", "text");
        		this.grdHR_CERSIS.setCellProperty("Head", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "REMK_100X"),"cssclass" ,"Cellgrd_WF_essential");
        		this.grdHR_CERSIS.set_readonly(false);
        	}else{
        		this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "REMK_100X"), "edittype", "none");
        		this.grdHR_CERSIS.setCellProperty("Head", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "REMK_100X"),"cssclass" ,"");
        		this.grdHR_CERSIS.set_readonly(false);
        	}
        	
        	this.fnc_DatasetClear("dsHR_APPOXD");
        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsHR_APPOXD=dsHR_APPOXD";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, "HRMK0010", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
        	
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue) {

        	var arrParam = new Array();

        	// 조회조건 - 부서정보조회(Popup)
        	if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {
        		arrParam[0] = "TMM0004"; 								//Popup ID
        		arrParam[1] = ""; 										//조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = "N"; 										//사용 여부 구분 포함 여부 값
        		arrParam[4] = "edtSHRDEPT_NAME"; 						//현재 포커스 Componect명
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME"; 		//초기화 및 결과 Mapping Column
        		arrParam[6] = "0,1"; 									//Mapping Column Index
        		this.fnc_HelpDialogeAction(this, obj, arrParam); 		//팝업 호출
        	}

        	// 조회조건 - 사원정보조회(Popup)
        	if ((obj.name == "imgHelpSHREMPL_NUMB") || (obj.name == "edtSHREMPL_NAME")) {
        		arrParam[0] = "HRM0001";
        		arrParam[1] = this.edtSHRDEPT_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHREMPL_NAME";
        		arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
        		arrParam[6] = "0,1";
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	}
        	
        	if (obj.name == 'grdHR_CERSIS') {
        		// 입력 그리드 - 자격증면허(ExpandEdit)
        		if (obj.getCellProperty('body', obj.currentcell, 'text') == 'bind:EMPL_NAME') 
        		{
        			arrParam[0] = 'HRM0002';
        			arrParam[1] = this.edtSHRDEPT_CODE.value;
        			arrParam[2] = 'EMPL_NAME';
        			arrParam[3] = 'N';
        			arrParam[4] = 'grdHR_CERSIS';
        			arrParam[5] = 'EMPL_NUMB,EMPL_NAME,STSD_CODE,SECT_NAME,DEPT_NAME,CPOS_NAME,DUTY_NAME,DEPT_CODE,CPOS_CODE,DUTY_CODE';
        			arrParam[6] = '0,1,2,3,4,5,6,7,8,9';
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}
        }

        /*-------------------------------------------------+
         | 그리드 데이터  변경시  필요한 이벤트 |
         +--------------------------------------------------*/
        this.dsHR_CERSIS_onvaluechanged = function(obj,e)
        {
        	if (e.columnid == "APPD_CODE"){
        	
        		//승인구분이 반려일때 반려사유 입력 활성화
        		if(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPD_CODE") == "2" ) {
        			this.sAppdName = "반려";
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "REMK_100X"), "edittype", "text");
        			this.grdHR_CERSIS.setCellProperty("Head", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "REMK_100X"),"cssclass" ,"Cellgrd_WF_essential");
        		}else if(this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPD_CODE") == "1" ) { //발급승인
        			this.sAppdName = "발급승인";
        			this.grdHR_CERSIS.setCellProperty("Body", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "REMK_100X"), "edittype", "none");
        			this.grdHR_CERSIS.setCellProperty("Head", this.fnc_GridColumnIndex(this.grdHR_CERSIS, "REMK_100X"),"cssclass" ,"");
        		}
        		
        		//WORK 알림 저장 값 
        		this.dsHR_CERSIS.setColumn(this.dsHR_CERSIS.rowposition, "SYST_LNCD", application.GBL_LANGCD);
        		this.dsHR_CERSIS.setColumn(this.dsHR_CERSIS.rowposition, "WORK_USID", application.GBL_USERID);
        		this.dsHR_CERSIS.setColumn(this.dsHR_CERSIS.rowposition, "WKNT_EMNR", this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "EMPL_NUMB"));
        		this.dsHR_CERSIS.setColumn(this.dsHR_CERSIS.rowposition, "WKNT_TYCD", "HRM011");
        		this.dsHR_CERSIS.setColumn(this.dsHR_CERSIS.rowposition, "SOUS_LNKY", this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "EMPL_NUMB")+'-'+this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPL_DATE")+'-'+this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "APPL_SEQN"));
        		this.dsHR_CERSIS.setColumn(this.dsHR_CERSIS.rowposition, "WKNT_CNTT", this.dsHR_CERSIS.getColumn(this.dsHR_CERSIS.rowposition, "STSD_NAME") + ' 발급 신청이 '+  this.sAppdName  +'되었습니다.');
        	
        	}
        }

        		
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsHR_CERSIS.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsHR_CERSIS.addEventHandler("onvaluechanged", this.dsHR_CERSIS_onvaluechanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.st_FormTitle.addEventHandler("onclick", this.st_FormTitle_onclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.cmbSHRSTSD_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.grdHR_CERSIS.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdHR_APPOXD.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.calSHRCHRQ_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRCHRQ_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRAPPD_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHREMPL_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("HRMK0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
