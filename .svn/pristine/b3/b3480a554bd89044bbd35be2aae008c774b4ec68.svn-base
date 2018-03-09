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
                this.set_name("BDMC0230");
                this.set_titletext("품의예산실적현황");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTB_CPLREQ", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_INTL\" type=\"STRING\" size=\"10\"/><Column id=\"ACCT_BFNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDG_TYPE\" type=\"STRING\" size=\"8\"/><Column id=\"CPLT_SEQN\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"REQU_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"BUDG_STYM\" type=\"STRING\" size=\"6\"/><Column id=\"BUDG_ENYM\" type=\"STRING\" size=\"6\"/><Column id=\"BUDG_AMNT\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"SLIP_AMNT\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"REMA_AMNT\" type=\"BIGDECIMAL\" size=\"17\"/><Column id=\"REQU_REMK\" type=\"STRING\" size=\"200\"/><Column id=\"REQU_NUMB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRACCT_GUB1</Col><Col id=\"CODEID\">DIV_CD</Col><Col id=\"HEADFLAG\">B</Col></Row><Row><Col id=\"DSNAME\">dsBUDG_TYPE</Col><Col id=\"CODEID\">BC09</Col><Col id=\"HEADFLAG\">B</Col></Row><Row><Col id=\"DSNAME\">dsSHRBUDG_TYPE</Col><Col id=\"CODEID\">BC09</Col><Col id=\"HEADFLAG\">A</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHRACCT_GUB1", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODDYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHRMM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MM\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"MNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MM\">01</Col><Col id=\"MNAME\">1월</Col></Row><Row><Col id=\"MM\">02</Col><Col id=\"MNAME\">2월</Col></Row><Row><Col id=\"MM\">03</Col><Col id=\"MNAME\">3월</Col></Row><Row><Col id=\"MM\">04</Col><Col id=\"MNAME\">4월</Col></Row><Row><Col id=\"MM\">05</Col><Col id=\"MNAME\">5월</Col></Row><Row><Col id=\"MM\">06</Col><Col id=\"MNAME\">6월</Col></Row><Row><Col id=\"MM\">07</Col><Col id=\"MNAME\">7월</Col></Row><Row><Col id=\"MM\">08</Col><Col id=\"MNAME\">8월</Col></Row><Row><Col id=\"MM\">09</Col><Col id=\"MNAME\">9월</Col></Row><Row><Col id=\"MM\">10</Col><Col id=\"MNAME\">10월</Col></Row><Row><Col id=\"MM\">11</Col><Col id=\"MNAME\">11월</Col></Row><Row><Col id=\"MM\">12</Col><Col id=\"MNAME\">12월</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsBUDG_TYPE", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODDYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHRBUDG_TYPE", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODDYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAPPR_YSNO", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\"/><Col id=\"SUBNAME\">전체</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/><Col id=\"SUBREF3\"/><Col id=\"SUBREF4\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">0</Col><Col id=\"SUBNAME\">미승인</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/><Col id=\"SUBREF3\"/><Col id=\"SUBREF4\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">1</Col><Col id=\"SUBNAME\">승인</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/><Col id=\"SUBREF3\"/><Col id=\"SUBREF4\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_SLIPNT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SLIP_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_GUB2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CURR_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_CHAX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SLIP_DAEX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CURR_AMNT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FORI_CHAX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FORI_DAEX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EVID_DOCU\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_NAME\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAM1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RECE_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RECE_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_PGBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DISP_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ5\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE_SEQ6\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GW_STATUS\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUPP_AMNT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TRNS_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_SIZE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdTB_CPLREQ", "absolute", "8", "156", null, "276", "8", null, this);
            obj.set_binddataset("dsTB_CPLREQ");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("6");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"200\" band=\"left\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"109\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/><Row size=\"23\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"부서코드\"/><Cell col=\"1\" text=\"부서명\"/><Cell col=\"2\" text=\"처리일자\"/><Cell col=\"3\" text=\"예산유형\"/><Cell col=\"4\" text=\"예산내용\"/><Cell col=\"5\" text=\"계정과목\"/><Cell col=\"6\" text=\"계정명\"/><Cell col=\"7\" text=\"시작연월\"/><Cell col=\"8\" text=\"종료연월\"/><Cell col=\"9\" text=\"예산금액\"/><Cell col=\"10\" text=\"실적금액\"/><Cell col=\"11\" text=\"잔액금액\"/><Cell col=\"12\" text=\"품의번호\"/></Band><Band id=\"body\"><Cell edittype=\"none\" style=\"align:center;\" text=\"bind:DEPT_CODE\" editlimit=\"0\"/><Cell col=\"1\" edittype=\"none\" style=\"align:left;\" text=\"bind:DEPT_NAME\" editlimit=\"0\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://imagesInbus\\imgHelpPopup.gif')\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"none\" text=\"bind:REQU_DATE\" mask=\"yyyy-MM-dd\" editlimit=\"0\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"none\" text=\"bind:BUDG_TYPE\" editlimit=\"0\" combodataset=\"dsBUDG_TYPE\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"4\" edittype=\"none\" style=\"align:left;\" text=\"bind:REQU_REMK\" editlimit=\"0\"/><Cell col=\"5\" edittype=\"none\" style=\"align:center;\" text=\"bind:ACCT_INTL\" editlimit=\"0\"/><Cell col=\"6\" edittype=\"none\" style=\"align:left;\" text=\"bind:ACCT_BFNM\" editlimit=\"0\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://imagesInbus\\imgHelpPopup.gif')\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" editfilter=\"none\" style=\"align:center;\" text=\"bind:BUDG_STYM\" mask=\"@@@@-@@\" editlimit=\"0\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"none\" editfilter=\"none\" style=\"align:center;\" text=\"bind:BUDG_ENYM\" mask=\"@@@@-@@\" editlimit=\"0\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AMNT\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AMNT\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REMA_AMNT\" mask=\"#,###\" editlimit=\"0\"/><Cell col=\"12\" edittype=\"none\" style=\"align:center;\" text=\"bind:REQU_NUMB\" mask=\"9999-999999-9999\"/></Band><Band id=\"summary\"><Cell colspan=\"5\" style=\"align:center;\" text=\"합계\"/><Cell col=\"5\" style=\"align:center;\"/><Cell col=\"6\" style=\"align:center;\"/><Cell col=\"7\" style=\"align:center;\"/><Cell col=\"8\" style=\"align:center;\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:nexacro.toNumber(dataset.getSum('BUDG_AMNT'), 0)\" mask=\"#,###\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:nexacro.toNumber(dataset.getSum('SLIP_AMNT'), 0)\" mask=\"#,###\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:nexacro.toNumber(dataset.getSum('REMA_AMNT'), 0)\" mask=\"#,###\"/><Cell col=\"12\" style=\"align:center;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "455", "27", "8", null, this);
            obj.set_taborder("8");
            obj.set_url("common::comButtonType01.xfdl");
            obj.set_scrollbars("none");
            obj.set_tabstop("false");
            obj.set_cssclass("styFormButtonList");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "48", "349", "25", null, null, this);
            obj.set_taborder("25");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation2", "absolute", "8", "440", "240", "23", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_SLIPNT", "absolute", "8", "464", null, null, "8", "8", this);
            obj.set_taborder("7");
            obj.set_tabstop("true");
            obj.set_binddataset("dsTA_SLIPNT");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"160\" band=\"left\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"333\"/><Column size=\"160\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/><Row size=\"23\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"기표번호\"/><Cell col=\"1\" displaytype=\"text\" text=\"회계일자\"/><Cell col=\"2\" displaytype=\"text\" text=\"계정과목\"/><Cell col=\"3\" displaytype=\"text\" text=\"금액\"/><Cell col=\"4\" displaytype=\"text\" text=\"적요\"/><Cell col=\"5\" displaytype=\"text\" text=\"귀속부서\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"bind:DISP_NUMB\" mask=\"##-########-####-####\"/><Cell col=\"1\" displaytype=\"date\" style=\"align: center;\" text=\"bind:APPR_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"bind:ACCT_NAME\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLIP_AMNT\" mask=\"#,###\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: left;\" text=\"bind:REMK_NAME\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: left;\" text=\"bind:DEPT_NAME\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align: left;\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SLIP_CHAX&quot;)\" mask=\"#,###\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: left;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "62", "8", null, this);
            obj.set_taborder("26");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "16", "68", "75", "22", null, null, this);
            obj.set_taborder("27");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUB1", "absolute", "93", "68", "153", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("28");
            obj.set_autoselect("true");
            obj.set_innerdataset("@dsSHRACCT_GUB1");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchItem");

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "93", "92", "109", "22", null, null, this);
            obj.set_taborder("29");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTM_PROJXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "226", "92", "160", "22", null, null, this);
            obj.set_taborder("30");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_PROJXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "16", "92", "75", "22", null, null, this);
            obj.set_taborder("31");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "411", "92", "75", "22", null, null, this);
            obj.set_taborder("32");
            obj.set_text("계정과목");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INTL", "absolute", "485", "92", "106", "22", null, null, this);
            obj.set_taborder("33");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTM_PROJXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_BFNM", "absolute", "615", "92", "160", "22", null, null, this);
            obj.set_taborder("34");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_PROJXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "411", "68", "75", "22", null, null, this);
            obj.set_taborder("35");
            obj.set_text("기준일자");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "800", "92", "75", "22", null, null, this);
            obj.set_taborder("36");
            obj.set_text("예산유형");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRBUDG_TYPE", "absolute", "874", "92", "140", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("37");
            obj.set_autoselect("true");
            obj.set_innerdataset("@dsSHRBUDG_TYPE");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchItem");

            obj = new Calendar("calSHRSLIP_DATE", "absolute", "485", "68", "129", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("38");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Static("Static2", "absolute", "800", "68", "75", "22", null, null, this);
            obj.set_taborder("39");
            obj.set_text("승인여부");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRAPPR_YSNO", "absolute", "874", "68", "140", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("40");
            obj.set_innerdataset("dsAPPR_YSNO");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("imgHelpSHRDEPT_NAME", "absolute", "203", "92", "22", "22", null, null, this);
            obj.set_taborder("41");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRACCT_BFNM", "absolute", "592", "92", "22", "22", null, null, this);
            obj.set_taborder("42");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("imgFormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_taborder("43");
            obj.set_text("품의예산실적현황");
            obj.set_cssclass("styFormTitle");
            obj.style.set_align("middle left");
            this.addChild(obj.name, obj);

            obj = new Static("staFormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_taborder("44");
            obj.set_text(">회계관리>사업장등록");
            obj.set_cssclass("styFormLocation");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "133", "240", "23", null, null, this);
            obj.set_taborder("45");
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("middle left");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "8", "122", null, "3", "8", null, this);
            obj.set_taborder("46");
            obj.set_cssclass("sytSearchBoxShadow");
            obj.style.set_background("#ffffff00 URL('theme://imagesInbus/imgSearchShadow.png') stretch");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("품의예산실적현황");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("edtCUST_CODE_value","edtSHRDEPT_CODE","value","dsTM_PROJXM","COND_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCUST_NAME_value","edtSHRDEPT_NAME","value","dsTM_PROJXM","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edtSHRACCT_INTL","value","dsTM_PROJXM","COND_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtSHRACCT_BFNM","value","dsTM_PROJXM","DEPT_NAME");
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
        this.addIncludeScript("BDMC0230.xfdl", "script::lib_script_common.xjs");
        this.registerScript("BDMC0230.xfdl", function() {
        /* MiPlatform API와 Component 속성, 메소드를 대체하는 공통함수 */
        /***************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                      *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                       *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망     *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                 *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /************************
         *  공통 Script Include  *
         ************************/
         //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST = 'TTFFFFTF'; //공통기능정의(종료,조회,입력,삭제,취소,저장,엑셀,인쇄)
        this.sUSERAUTH = ''; //사용자별 프로그램 사용 권한
        this.sFORMCAPTION = ''; //Form의 Title 정보
        this.sFORMLOCATION = ''; //Form의 Location 정보
        this.sUSERLAVEL = '';
        this.sPACKAGENAME = 'BDMC0230'; //해당 Form에서 사용 할 Package 명

        this.sACCT_GUBN = '';

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e)
        {
        	// 화면 정보 Display 및 Button 권한 설정
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GridSetting(this);

        	//this.fnc_GridKeyFieldDisable(this.grdTB_CPLREQ, "ACCT_BFNM", "edittype", "normal");
        	//this.fnc_GridKeyFieldDisable(this.grdTB_CPLREQ, "ACCT_BFNM", "expandshow", "show");
        	//this.fnc_GridKeyFieldDisable(this.grdTB_CPLREQ, "DEPT_NAME", "edittype", "normal");
        	//this.fnc_GridKeyFieldDisable(this.grdTB_CPLREQ, "DEPT_NAME", "expandshow", "show");
        	// 
        	// fnc_GridKeyFieldDisable(grdTB_CPLREQ, "BUDG_TYPE", "edittype", "combo");

        	// fnc_GridKeyFieldDisable(grdTB_CPLREQ, "BUDG_STYM", "edittype", "mask");
        	// fnc_GridKeyFieldDisable(grdTB_CPLREQ, "BUDG_ENYM", "edittype", "mask");

        	this.calSHRSLIP_DATE.set_value(this.fnc_SubStr(this. fnc_GetServerDateTime(), 0, 8)); //조회 초기값

        	/* 메뉴 권한별 처리 */
        	if (this.sUSERLAVEL != '5') 
        	{
        		this.imgHelpSHRDEPT_NAME.set_enable(false);
        		this.edtSHRDEPT_NAME.set_enable(false);
        		this.edtSHRDEPT_CODE.set_value(application.GBL_DEPTCD);
        		this.edtSHRDEPT_NAME.set_value(application.GBL_DEPTNM);
        	}
        	else if (this.sUSERLAVEL == '5') 
        	{
        		this.imgHelpSHRDEPT_NAME.set_enable(true);
        		this.edtSHRDEPT_NAME.set_enable(true);
        		this.edtSHRDEPT_CODE.set_value("");
        		this.edtSHRDEPT_NAME.set_value("");
        	}

        	this.grdTB_CPLREQ.setFocus();

        	this.fn_Search();
        }

        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj,e)
        {
        	// 화면 종료
        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj,e)
        {
        	// 조회 필수 입력 여부  체크
        	if (!this.fn_SearchItemCheck()) 
        	{
        		return;
        	}

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTB_CPLREQ=dsTB_CPLREQ";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	// grdTB_CPLREQ.setFocus();                                   //재 클릭 방지를 위해 Focus 이동
        	this.cmbSHRACCT_GUB1.setFocus();
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj,e)
        {
        	var nRow = this.dsTB_CPLREQ.addRow();
        	this.dsTB_CPLREQ.setColumn(nRow, 'REQU_DATE', this.fnc_SubStr(this.fnc_GetServerDateTime(), 0, 8));
        	this.dsTB_CPLREQ.setColumn(nRow, 'BUDG_STYM', this.fnc_SubStr(this.fnc_GetServerDateTime(), 0, 6));
        	this.dsTB_CPLREQ.setColumn(nRow, 'BUDG_ENYM', this.fnc_SubStr(this.fnc_GetServerDateTime(), 0, 6));

        	this.dsTB_CPLREQ.setColumn(nRow, 'BUDG_TYPE', this.dsBUDG_TYPE.getColumn(0, 'SUBCODE'));

        	this.grdTB_CPLREQ.setFocus(); //재 클릭 방지를 위해 Focus 이동
        	this.grdTB_CPLREQ.setCellPos(this.fnc_GridColumnIndex(this.grdTB_CPLREQ, "DEPT_NAME"));
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj,e)
        {
        	// 삭제 할 자료가 있는지 여부를 체크
        	if (this.dsTB_CPLREQ.getRowCount() > 0) 
        	{
        		if (this.fn_DeleteCheck()) 
        		{
        			this.dsTB_CPLREQ.deleteSelectedRows();
        		}
        		// 삭제 여부 확인
        	}
        	else 
        	{
        		this.fnc_Message("M1003"); //삭제 자료 없음 정보 Display
        	}

        	this.grdTB_CPLREQ.setFocus(); //Record 삭제 후 Grid로 Focus
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj,e)
        {
        	this.fnc_DataSetCancel(this.dsTB_CPLREQ); //취소 할 DataSet의 이름을 입력한다.
        	this.grdTB_CPLREQ.setFocus(); //취소 후 Grid로 Focus
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e)
        {
        	if (!this.fn_SaveItemCheck()) 
        	{
        		return;
        	}

        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsTB_CPLREQ=dsTB_CPLREQ:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	// fn_search();

        	this.grdTB_CPLREQ.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj,e)
        {
        	
        	this.fnc_ToExcel(this.name); //Export 할 화면 Call
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e)
        {
        	// 기능없음.
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e)
        {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTB_CPLREQ", this);
        	
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        }

        this.fn_FormUnloadProcess = function (obj,e)
        {
        	
        	this.fnc_FormUnload(obj, e);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e)
        {
        	// Return Key Press時 Next Component focus
        	if (e.keycode == 13) 
        	{
        		if (e.fromobject instanceof this.grdTA_SLIPNT) 
        		{
        			e.fromobject.moveToNextCell();
        		}
        		else 
        		{
        			var oFocusComponent = this.getNextComponent(e.fromobject, true);
        			oFocusComponent.setFocus();
        			return;
        		}
        	}

        	// Control Key가 눌려져 있다면 단축키 처리
        	if (e.ctrlKey) 
        	{
        		this.fnc_HotKey(this, e.keycode);
        	}
        }
        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj)
        {
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/

        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function ()
        {
        	/*if (this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_GUB1.value)) < 1) 
        	{
        		this.fnc_Message("M1005", '회계단위');
        		this.cmbSHRACCT_GUB1.setFocus();
        		return false;
        	}*/

        	/*if (this.fnc_Length(this.fnc_Trim(this.calSHRSLIP_DATE.value)) < 1) 
        	{
        		this.fnc_Message("M1005", '기준일자');
        		this.calSHRSLIP_DATE.setFocus();
        		return false;
        	}*/

        	return true;
        	// 모든 조회 조건이 입력 되면 True를 반환 한다.
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function ()
        {
        	// 선택된 Row Count
        	var iSelectRowCount = this.fnc_SelectRowCount(this.dsTB_CPLREQ);
        	trace("iSelectRowCount::" + iSelectRowCount);
        	if (iSelectRowCount > 1) 
        	{
        		// Multy로 선택되었다면 선택된 Count로 삭제 여부 확인
        		return this.fnc_Message("M1010", iSelectRowCount);
        	}
        	else 
        	{
        		// 한 건 삭제 처리히 해당 항목에 대한 삭제 여부 확인
        		var sQuestionText = '부서코드 (' + this.fnc_Trim(this.dsTB_CPLREQ.getColumn(this.dsTB_CPLREQ.rowposition, "DEPT_CODE")) + ')';
        		sQuestionText += ' 계정과목 (' + this.grdTB_CPLREQ.getCellText(this.dsTB_CPLREQ.rowposition, this.fnc_GridColumnIndex(this.grdTB_CPLREQ, "ACCT_INTL")) + ')';
        		sQuestionText += ' 예산유형 (' + this.grdTB_CPLREQ.getCellText(this.dsTB_CPLREQ.rowposition, this.fnc_GridColumnIndex(this.grdTB_CPLREQ, "BUDG_TYPE")) + ')';
        		sQuestionText += ' 순번 (' + this.grdTB_CPLREQ.getCellText(this.dsTB_CPLREQ.rowposition, this.fnc_GridColumnIndex(this.grdTB_CPLREQ, "CPLT_SEQN")) + ')';

        		return this.fnc_Message("M1004", sQuestionText);
        	}
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function ()
        {
        	// 변경된 자료가 있는지 체크
        	if (!this.fnc_DatasetChangeCheck(this.dsTB_CPLREQ)) 
        	{
        		// 저장 할 자료가 없음
        		this.fnc_Message("M1006");
        		return false;
        	}

        	if (!this.fn_SearchItemCheck()) 
        	{
        		return;
        	}

        
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsTB_CPLREQ.getRowCount(); i++) 
        	{
        		// if (gfn_ToUpper(GetRowType(dsTB_CPLREQ,i)) == "NORMAL") continue;
        		if (this.fnc_ToUpper(this.dsTB_CPLREQ(this.dsTB_CPLREQ, i)) != "NORMAL") 
        		{
        			if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLREQ.getColumn(i, 'DEPT_NAME'))) < 1) 
        			{
        				return this.fnc_CheckPostAction("M1005", "부서명", this.dsTB_CPLREQ, i, this.grdTB_CPLREQ, 'DEPT_NAME');
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLREQ.getColumn(i, 'DEPT_CODE'))) < 1) 
        			{
        				return this.fnc_CheckPostAction("M1005", "부서코드", this.dsTB_CPLREQ, i, this.grdTB_CPLREQ, 'DEPT_CODE');
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLREQ.getColumn(i, 'BUDG_TYPE'))) < 1) 
        			{
        				return this.fnc_CheckPostAction("M1005", "예산유형", this.dsTB_CPLREQ, i, this.grdTB_CPLREQ, 'BUDG_TYPE');
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLREQ.getColumn(i, 'REQU_REMK'))) < 1) 
        			{
        				return this.fnc_CheckPostAction("M1005", "예산내용", this.dsTB_CPLREQ, i, this.grdTB_CPLREQ, 'REQU_REMK');
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLREQ.getColumn(i, 'ACCT_BFNM'))) < 1) 
        			{
        				return this.fnc_CheckPostAction("M1005", "계정과목명", this.dsTB_CPLREQ, i, this.grdTB_CPLREQ, 'ACCT_BFNM');
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLREQ.getColumn(i, 'ACCT_INTL'))) < 1) 
        			{
        				return this.fnc_CheckPostAction("M1005", "계정과목", this.dsTB_CPLREQ, i, this.grdTB_CPLREQ, 'ACCT_INTL');
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLREQ.getColumn(i, 'BUDG_STYM'))) < 1) 
        			{
        				return this.fnc_CheckPostAction("M1005", "예산시작년월", this.dsTB_CPLREQ, i, this.grdTB_CPLREQ, 'BUDG_STYM');
        			}

        			if (!this.fnc_IsDate(this.fnc_Trim(this.dsTB_CPLREQ.getColumn(i, 'BUDG_STYM')) + '01')) 
        			{
        				return this.fnc_CheckPostAction("M1046", "예산시작년월 입력 데이터를 확인 하십시요.", this.dsTB_CPLREQ, i, this.grdTB_CPLREQ, 'BUDG_STYM');
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLREQ.getColumn(i, 'BUDG_ENYM'))) < 1) 
        			{
        				return this.fnc_CheckPostAction("M1005", "예산종료년월", this.dsTB_CPLREQ, i, this.grdTB_CPLREQ, 'BUDG_ENYM');
        			}

        			if (!this.fnc_IsDate(this.fnc_Trim(this.dsTB_CPLREQ.getColumn(i, 'BUDG_ENYM')) + '01')) 
        			{
        				return this.fnc_CheckPostAction("M1046", "예산종료년월 입력 데이터를 확인 하십시요.", this.dsTB_CPLREQ, i, this.grdTB_CPLREQ, 'BUDG_ENYM');
        			}

        			if (this.fnc_Trim(this.dsTB_CPLREQ.getColumn(i, 'BUDG_ENYM')) < this.fnc_Trim(this.dsTB_CPLREQ.getColumn(i, 'BUDG_STYM'))) 
        			{
        				return this.fnc_CheckPostAction("M1046", "시작월은 종료일 이전이어야 합니다..", this.dsTB_CPLREQ, i, this.grdTB_CPLREQ, 'BUDG_STYM');
        			}

        			if (nexacro.toNumber(this.fnc_Trim(this.dsTB_CPLREQ.getColumn(i, 'BUDG_AMNT')), 0) == 0) 
        			{
        				return this.fnc_CheckPostAction("M1005", "예산금액", this.dsTB_CPLREQ, i, this.grdTB_CPLREQ, 'BUDG_AMNT');
        			}
        		}
        	}
        	return true;
        	// Validation Check Sign Return
        }
        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind)
        {
        	var sReturnString;
        	var SLIP_DATE = this.fnc_SubStr(this.calSHRSLIP_DATE.value, 0, 8);

        	// 조회 Argument 생성
        	if (sKind == 'SEARCH00') 
        	{
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); //Pacaage(Action Bean명)
        		sReturnString += " action=" + this.fnc_Quote(sKind); //호출할 Package의 Method명
        		sReturnString += " SLIP_DATE=" + this.fnc_Quote(SLIP_DATE); //기준일자
        		sReturnString += " ACCT_GUB1=" + this.fnc_Quote(this.cmbSHRACCT_GUB1.value); //회계단위
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.edtSHRDEPT_CODE.value); //부서코드
        		sReturnString += " ACCT_INTL=" + this.fnc_Quote(this.edtSHRACCT_INTL.value); //계정과목
        		sReturnString += " BUDG_TYPE=" + this.fnc_Quote(this.cmbSHRBUDG_TYPE.value); //계정과목
        		sReturnString += " APPR_YSNO=" + this.fnc_Quote(this.cmbSHRAPPR_YSNO.value); //계정과목
        	}
        	else if (sKind == 'SEARCH01') 
        	{
        		var ACCT_INTL = this.dsTB_CPLREQ.getColumn(this.dsTB_CPLREQ.rowposition, 'ACCT_INTL');
        		var DEPT_CODE = this.dsTB_CPLREQ.getColumn(this.dsTB_CPLREQ.rowposition, 'DEPT_CODE');
        		var REQU_NUMB = this.dsTB_CPLREQ.getColumn(this.dsTB_CPLREQ.rowposition, 'REQU_NUMB');

        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); //Pacaage(Action Bean명)
        		sReturnString += " action=" + this.fnc_Quote(sKind); //호출할 Package의 Method명
        		sReturnString += " ACCT_GUB1=" + this.fnc_Quote(this.cmbSHRACCT_GUB1.value); //회계단위
        		sReturnString += " ACCT_INTL=" + this.fnc_Quote(ACCT_INTL); //계정코드
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(DEPT_CODE); //사용부서
        		sReturnString += " REQU_NUMB=" + this.fnc_Quote(REQU_NUMB); //품의번호
        		sReturnString += " APPR_YSNO=" + this.fnc_Quote(this.cmbSHRAPPR_YSNO.value); //승인여부
        		sReturnString += " SLIP_DATE=" + this.fnc_Quote(SLIP_DATE); //기준일자
        	}

        	return sReturnString;
        	// 생성된 String 반환
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG)
        {
        	//this.fnc_CloseProgress(); //Service 후 Progress Bar Close

        	// Service에서 오류 발생 시 처리
        	if (ErrorCode < 0) 
        	{
        		if (application.GBL_SESSONCHK == "E0001") 
        		{
        			// 비인가 접속이나 Session 단절시 처리
        			this.fnc_ErrorProcess(ErrorCode, ErrorMSG);
        		}
        		else 
        		{
        			// Server에서 받은 Message 처리
        			this.fnc_Message("SERVERMSG", ErrorMSG);
        		}
        	}
        	else 
        	{
        		// 오류가 없이 정상 처리되었다면...
        		this.fn_PostProcess(sMethodName);
        	}
        }

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName)
        {
        	if (sMethodName == 'SEARCH00') 
        	{
        		this.fnc_Information(this.stInformation, this.dsTB_CPLREQ.rowcount, "SHR"); //조회 결과 Display
        		this.fnc_Message("M1007", this.dsTB_CPLREQ.rowcount); //정상 종료 메세지
        	}
        	else if (sMethodName == 'SEARCH01') 
        	{
        		this.fnc_Information(this.stInformation2, this.dsTA_SLIPNT.rowcount, "SHR"); //fnc_Message("M1007", dsTA_SLIPNT.rowcount);                  //정상 종료 메세지
        	}
        	else if (sMethodName == 'SAVE00') 
        	{
        		this.fnc_Information(this.stInformation, 0, "SAVE"); //저장 결과 Display
        		this.fnc_Message("M1008"); //fn_KeyFieldDisible(dsTB_CPLREQ,0,dsTB_CPLREQ.rowposition);

        		this.fn_Search();
        	}
        	else if (sMethodName == 'GetCommCode') 
        	{
        		this.cmbSHRACCT_GUB1.set_index(0);
        		this.cmbSHRBUDG_TYPE.set_index(0);
        		this.cmbSHRAPPR_YSNO.set_index(0);
        	}
        	else if (sMethodName == "CODENAMESEARCH00") 
        	{
        		// 코드명 조회 후 처리
        		this.fnc_MultiRowDisplay(this);
        	}
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e)
        {
        	// 시작
        	var nRow = e.newrow;
        	var nOldRow = e.oldrow;

        	this.dsTA_SLIPNT.clearData();

        	if (nRow == -1) 
        	{
        		return;
        	}

        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTA_SLIPNT=dsTA_SLIPNT";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	// if (gfn_ToUpper(GetRowType(obj,e.newrow))== "INSERT") {
        	// 
        	// }
        	// else {
        	// 
        	// }
        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj)
        {
        	var sInputValue = "";
        	var sSearchKind = "";
        	var sCommonGubn = "";
        	var sResponse;
        	switch (obj.name) 
        	{
        		case "imgHelpSHRDEPT_NAME":
        			// 부서

        			sSearchKind = "DEPT06"; //부서조회 POPUP
        			sInputValue = this.fnc_Trim(this.edtSHRDEPT_NAME.value); //검색 조건 Text
        			sCommonGubn = ""; //공통 구분 코드(공통코드 조회가 아니면 null)
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, this.edtSHRDEPT_NAME); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        			{
        				this.edtSHRDEPT_CODE.set_value(sResponse[0]); //부서
        				this.edtSHRDEPT_NAME.set_value(sResponse[1]); //부서명
        			}
        			break;
        		case "imgHelpSHRACCT_BFNM":
        			// 계정과목

        			// var sACCT_YEAR = gfn_SubStr(gfn_Trim(calSHRBUDG_YMFR.value), 0, 4);
        			var sACCT_YEAR = this.fnc_SubStr(this.fnc_Trim(this.calSHRSLIP_DATE.value), 0, 4);

        			sSearchKind = "ACCT12"; //계정과목 POPUP
        			sInputValue = this.fnc_Trim(this.edtSHRACCT_BFNM.value); //검색 조건 Text
        			sCommonGubn = sACCT_YEAR; //공통 구분 코드(공통코드 조회가 아니면 null)
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, this.edtSHRACCT_BFNM); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        			{
        				this.edtSHRACCT_INTL.set_value(sResponse[0]); //계정과목
        				this.edtSHRACCT_BFNM.set_value(sResponse[1]); //계정과목명
        			}
        			break;
        		case "grdTB_CPLREQ":
        			// 그리드 expnad 클릭

        			var dsObj = this.objects[obj.binddataset];

        			dsObj.set_enableevent(false);
        			obj.updateToDataset();
        			var columnID = this.fnc_getColId(obj, obj.currentcell);
        			var nRow = dsObj.rowposition;
        			var sACCT_YEAR = this.fnc_SubStr(dsObj.getColumn(nRow, 'REQU_DATE'), 0, 4);

        			trace('currentcell columnID ---- ' + columnID);

        			if (columnID == 'DEPT_NAME') 
        			{
        				sSearchKind = "DEPT06"; //사용자 코드 조회 POPUP
        				sCommonGubn = ''; //공통 구분 코드(공통코드 조회가 아니면 null)
        				sInputValue = dsObj.getColumn(nRow, 'DEPT_NAME');
        				sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, obj); //Popup Open

        				if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        				{
        					dsObj.setColumn(nRow, 'DEPT_CODE', sResponse[0]);
        					dsObj.setColumn(nRow, 'DEPT_NAME', sResponse[1]);
        				}
        			}

        			else if (columnID == 'ACCT_BFNM') 
        			{
        				sSearchKind = "ACCT12"; //사용자 코드 조회 POPUP
        				sCommonGubn = sACCT_YEAR; //공통 구분 코드(공통코드 조회가 아니면 null)
        				sInputValue = dsObj.getColumn(nRow, 'ACCT_BFNM');
        				sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, obj); //Popup Open

        				if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        				{
        					dsObj.setColumn(nRow, 'ACCT_INTL', sResponse[0]);
        					dsObj.setColumn(nRow, 'ACCT_BFNM', sResponse[1]);
        				}
        			}

        			dsObj.set_enableevent(true);

        			break;
        	}
        }

        /*---------------------------------------------------+
         | 코드나 명 입력 후 Lost Focus 시 해당 정보 Display  |
         +----------------------------------------------------*/
        this.fn_CodeNameDisplay = function (obj)
        {
        	trace("fn_CodeNameDisplay --");
        	trace("fn_CodeNameDisplay --  obj.value  " + obj.value);
        	trace("fn_CodeNameDisplay --  obj.UserData  " + obj.UserData);

        
        	// 그리드가 아니면서 변화가 없으면 굳이 실행 하지 않는다.
        	if (!(obj instanceof this.grdTA_SLIPNT) && obj.value == obj.UserData) 
        	{
        		return;
        	}

        	// GBL_CUROBJ  = this.all[obj.name];       //현재 선택한 Text Object
        	application.GBL_CUROBJ = obj; //현재 선택한 Text Object
        	var sMethodName = "CODENAMESEARCH00";
        	var sInputValue = this.fnc_Trim(obj.value);
        	var sSearchKind = "";
        	var sCommonGubn = "";
        	switch (obj.name) 
        	{
        		case "grdTB_CPLREQ":
        			// 그리드일때

        			var dsObj = this.objects[obj.binddataset];

        			dsObj.set_enableevent(false);

        			var columnID = this.fnc_getColId(obj, obj.currentcell);
        			var nRow = dsObj.rowposition;

        			trace('currentcell columnID ---- ' + columnID);

        			if (columnID == 'DEPT_NAME') 
        			{
        				sSearchKind = "DEPT06"; //팝업ID
        				sCommonGubn = ''; //기준연도
        				sInputValue = dsObj.getColumn(nRow, 'DEPT_NAME');
        				application.GBL_REVOBJ1 = "DEPT_CODE"; //부서 코드 Text Object명
        				application.GBL_REVOBJ2 = "DEPT_NAME"; //부서 명칭 Text Object명
        			}
        			else if (columnID == 'ACCT_BFNM') 
        			{
        				var sACCT_YEAR = this.fnc_SubStr(dsObj.getColumn(nRow, 'REQU_DATE'), 0, 4);

        				sSearchKind = "ACCT12"; //팝업ID
        				sCommonGubn = sACCT_YEAR; //기준연도
        				sInputValue = dsObj.getColumn(nRow, 'ACCT_BFNM');
        				application.GBL_REVOBJ1 = "ACCT_INTL"; //계정과목
        				application.GBL_REVOBJ2 = "ACCT_BFNM"; //계정과목명
        			}

        			dsObj.set_enableevent(true);

        			break;
        		case "edtSHRDEPT_NAME":
        			// 
        			sSearchKind = "DEPT06";
        			application.GBL_REVOBJ1 = "edtSHRDEPT_CODE"; //부서 코드
        			application.GBL_REVOBJ2 = "edtSHRDEPT_NAME"; //부서 코드명
        			break;
        		case "edtSHRACCT_BFNM":
        			// 
        			var sACCT_YEAR = this.fnc_SubStr(this.fnc_Trim(this.calSHRBUDG_YMFR.value), 0, 4);

        			sSearchKind = "ACCT12";
        			sCommonGubn = sACCT_YEAR; //기준연도
        			application.GBL_REVOBJ1 = "edtSHRACCT_INTL"; //계정과목
        			application.GBL_REVOBJ2 = "edtSHRACCT_BFNM"; //계정과목명
        			break;
        	}

        	// 조회 서비스 실행
        	this.fnc_CodeNameSearch(this, sMethodName, sSearchKind, sInputValue, sCommonGubn);
        }
        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-----------------------+
         |  그리드 클릭 시 Sort!  |
         +------------------------*/
        this.fn_GridSort = function (obj,e)
        {
        	// 특정 Head 클릭 시 해당 항목으로 Sort(만약 특정 컬럼을 누를때만 소트하고자 한다면 nCell로 조건)
        	this.fnc_GridSort(obj, obj.binddataset, e.col);
        }

        /*--------------------------+
         |  컬럼값 변경시 처리  |
         +---------------------------*/
        this.fn_ColumnChanged = function (obj,e)
        {
        	// var strColumnID = e.columnid;
        	// var nRow = e.row;
        	// 
        	// if (strColumnID =='DEPT_NAME')
        	// {
        	// fn_CodeNameDisplay(grdTB_CPLREQ);
        	// return;
        	// }
        	// else if (strColumnID =='ACCT_BFNM')
        	// {
        	// fn_CodeNameDisplay(grdTB_CPLREQ);
        	// return;
        	// }
        	// 
        }

        /*--------------------------+
         |  조회조건 변경시 처리  |
         +---------------------------*/
        this.fn_clearData = function (obj)
        {
        	trace('fn_clearData --- name : ' + obj.name);

        	this.dsTB_CPLREQ.clearData();
        	this.stInformation.set_text('');
        }

        /*-----------------------+
         |  전표상세조회 |
         +------------------------*/
        this.grdTA_SLIPNT_OnCellDblClick = function (obj,e)
        {
        	var sSlipNumb = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, 'SLIP_NUMB');
        	var sGwxxStat = this.dsTA_SLIPNT.getColumn(this.dsTA_SLIPNT.rowposition, 'GW_STATUS');

        	this.fnc_PopSlipForm(sSlipNumb, "", this.sUSERLAVEL, sGwxxStat);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTB_CPLREQ.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTB_CPLREQ.addEventHandler("oncolumnchanged", this.fn_ColumnChanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.grdTB_CPLREQ.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.grdTB_CPLREQ.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdTA_SLIPNT.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.grdTA_SLIPNT.addEventHandler("oncelldblclick", this.grdTA_SLIPNT_OnCellDblClick, this);
            this.cmbSHRACCT_GUB1.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_GUB1.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.cmbSHRACCT_GUB1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.edtSHRACCT_INTL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_BFNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_BFNM.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.cmbSHRBUDG_TYPE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRAPPR_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRACCT_BFNM.addEventHandler("onclick", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("BDMC0230.xfdl");
        this.loadPreloadList();
       
    };
}
)();
