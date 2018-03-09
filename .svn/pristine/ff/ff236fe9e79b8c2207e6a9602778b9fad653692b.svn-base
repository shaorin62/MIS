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
                this.set_name("BDMF0010");
                this.set_titletext("부서별예산현황");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1051,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTB_CPLDPT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_INTL\" type=\"STRING\" size=\"10\"/><Column id=\"ACCT_BFNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDG_ATAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUDG_AT01\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUDG_AT02\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUDG_AT03\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUDG_AT04\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUDG_AT05\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUDG_AT06\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUDG_AT07\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUDG_AT08\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUDG_AT09\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUDG_AT10\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUDG_AT11\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUDG_AT12\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMK_NOTE\" type=\"STRING\" size=\"100\"/><Column id=\"BADD_ATAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BADD_AT01\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BADD_AT02\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BADD_AT03\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BADD_AT04\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BADD_AT05\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BADD_AT06\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BADD_AT07\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BADD_AT08\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BADD_AT09\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BADD_AT10\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BADD_AT11\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BADD_AT12\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BTOT_ATAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BTOT_AT01\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BTOT_AT02\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BTOT_AT03\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BTOT_AT04\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BTOT_AT05\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BTOT_AT06\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BTOT_AT07\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BTOT_AT08\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BTOT_AT09\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BTOT_AT10\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BTOT_AT11\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BTOT_AT12\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_ATAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AT01\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AT02\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AT03\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AT04\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AT05\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AT06\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AT07\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AT08\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AT09\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AT10\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AT11\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AT12\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_ATAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AT01\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AT02\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AT03\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AT04\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AT05\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AT06\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AT07\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AT08\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AT09\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AT10\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AT11\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AT12\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRACCT_GUB1</Col><Col id=\"CODEID\">DIV_CD</Col><Col id=\"HEADFLAG\">Y</Col></Row><Row><Col id=\"CODEID\">BC10</Col><Col id=\"HEADFLAG\">N</Col><Col id=\"DSNAME\">dsBUDG_GUBN</Col></Row><Row><Col id=\"DSNAME\">dsAPPR_YSNO</Col><Col id=\"CODEID\">APPR_YSNO</Col><Col id=\"HEADFLAG\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHRMM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MM\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"MNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MM\">01</Col><Col id=\"MNAME\">1월</Col></Row><Row><Col id=\"MM\">02</Col><Col id=\"MNAME\">2월</Col></Row><Row><Col id=\"MM\">03</Col><Col id=\"MNAME\">3월</Col></Row><Row><Col id=\"MM\">04</Col><Col id=\"MNAME\">4월</Col></Row><Row><Col id=\"MM\">05</Col><Col id=\"MNAME\">5월</Col></Row><Row><Col id=\"MM\">06</Col><Col id=\"MNAME\">6월</Col></Row><Row><Col id=\"MM\">07</Col><Col id=\"MNAME\">7월</Col></Row><Row><Col id=\"MM\">08</Col><Col id=\"MNAME\">8월</Col></Row><Row><Col id=\"MM\">09</Col><Col id=\"MNAME\">9월</Col></Row><Row><Col id=\"MM\">10</Col><Col id=\"MNAME\">10월</Col></Row><Row><Col id=\"MM\">11</Col><Col id=\"MNAME\">11월</Col></Row><Row><Col id=\"MM\">12</Col><Col id=\"MNAME\">12월</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_EXCEL", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTB_CPLREQ", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_INTL\" type=\"STRING\" size=\"10\"/><Column id=\"ACCT_BFNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDG_TYPE\" type=\"STRING\" size=\"8\"/><Column id=\"BUDG_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTB_PJBGXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROJ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PROJ_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_INTL\" type=\"STRING\" size=\"10\"/><Column id=\"ACCT_BFNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDG_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ADDX_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTA_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMK_NOTE\" type=\"STRING\" size=\"200\"/><Column id=\"CONT_STDT\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_EDDT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsACCT_BASE", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_INTL\" type=\"STRING\" size=\"10\"/><Column id=\"ACCT_BFNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDG_GUBN\" type=\"STRING\" size=\"8\"/><Column id=\"BUDG_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_ButtonList", "absolute", null, "31", "455", "27", "8", null, this);
            obj.set_taborder("6");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_tabstop("false");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab0", "absolute", "8", "137", null, null, "8", "8", this);
            obj.set_taborder("5");
            obj.set_tabindex("0");
            obj.style.set_background("white");
            obj.set_cssclass("styTabControl");
            this.addChild(obj.name, obj);
            obj = new Tabpage("TabD1", this.Tab0);
            obj.set_text("부서별예산");
            obj.style.set_background("white");
            obj.set_scrollbars("none");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "5", "0", "240", "23", null, null, this.Tab0.TabD1);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            this.Tab0.TabD1.addChild(obj.name, obj);
            obj = new Grid("grdTB_CPLDPT", "absolute", "0", "21", null, null, "0", "4", this.Tab0.TabD1);
            obj.set_taborder("1");
            obj.set_binddataset("dsTB_CPLDPT");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_cellsizingtype("both");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"200\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"23\" band=\"head\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"23\" band=\"summ\"/><Row size=\"23\" band=\"summ\"/><Row size=\"23\" band=\"summ\"/><Row size=\"23\" band=\"summ\"/><Row size=\"23\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"계정과목\"/><Cell col=\"1\" rowspan=\"2\" text=\"계정명\"/><Cell col=\"2\" rowspan=\"2\" text=\"구분\"/><Cell col=\"3\" rowspan=\"2\" text=\"합계\"/><Cell col=\"4\" colspan=\"4\" text=\"분기별예산액\"/><Cell col=\"8\" rowspan=\"2\" text=\"비고\"/><Cell row=\"1\" col=\"4\" text=\"1분기\"/><Cell row=\"1\" col=\"5\" text=\"2분기\"/><Cell row=\"1\" col=\"6\" text=\"3분기\"/><Cell row=\"1\" col=\"7\" text=\"4분기\"/></Band><Band id=\"body\"><Cell rowspan=\"5\" edittype=\"none\" style=\"align:center;\" text=\"bind:ACCT_INTL\"/><Cell col=\"1\" rowspan=\"5\" edittype=\"none\" style=\"align:left;\" text=\"bind:ACCT_BFNM\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" celltype=\"none\" edittype=\"none\" style=\"align:center;\" text=\"기본예산\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_ATAL\" mask=\"#,###\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AT01\" mask=\"#,###\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AT02\" mask=\"#,###\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AT03\" mask=\"#,###\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AT04\" mask=\"#,###\"/><Cell col=\"8\" rowspan=\"5\" edittype=\"none\" style=\"align:left;\" text=\"bind:REMK_NOTE\"/><Cell row=\"1\" col=\"2\" celltype=\"none\" edittype=\"none\" style=\"align:center;\" text=\"추가예산\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_ATAL\" mask=\"#,###\"/><Cell row=\"1\" col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_AT01\" mask=\"#,###\"/><Cell row=\"1\" col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_AT02\" mask=\"#,###\"/><Cell row=\"1\" col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_AT03\" mask=\"#,###\"/><Cell row=\"1\" col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_AT04\" mask=\"#,###\"/><Cell row=\"2\" col=\"2\" celltype=\"none\" edittype=\"none\" style=\"align:center;\" text=\"총예산\"/><Cell row=\"2\" col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_ATAL\" mask=\"#,###\"/><Cell row=\"2\" col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_AT01\" mask=\"#,###\"/><Cell row=\"2\" col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_AT02\" mask=\"#,###\"/><Cell row=\"2\" col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_AT03\" mask=\"#,###\"/><Cell row=\"2\" col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_AT04\" mask=\"#,###\"/><Cell row=\"3\" col=\"2\" celltype=\"none\" edittype=\"none\" style=\"align:center;\" text=\"사용실적\"/><Cell row=\"3\" col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_ATAL\" mask=\"#,###\"/><Cell row=\"3\" col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AT01\" mask=\"#,###\"/><Cell row=\"3\" col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AT02\" mask=\"#,###\"/><Cell row=\"3\" col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AT03\" mask=\"#,###\"/><Cell row=\"3\" col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AT04\" mask=\"#,###\"/><Cell row=\"4\" col=\"2\" celltype=\"none\" edittype=\"none\" style=\"align:center;\" text=\"잔액\"/><Cell row=\"4\" col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REMA_ATAL\" mask=\"#,###\"/><Cell row=\"4\" col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REMA_AT01\" mask=\"#,###\"/><Cell row=\"4\" col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REMA_AT02\" mask=\"#,###\"/><Cell row=\"4\" col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REMA_AT03\" mask=\"#,###\"/><Cell row=\"4\" col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REMA_AT04\" mask=\"#,###\"/></Band><Band id=\"summary\"><Cell rowspan=\"5\" colspan=\"2\" style=\"align:center;\" text=\"합계\"/><Cell col=\"2\" style=\"align:center;\" text=\"기본예산\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:toNumber(getSum('BUDG_ATAL'),0)\" mask=\"#,###\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:getSum('BUDG_AT01')\" mask=\"#,###\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:getSum('BUDG_AT02')\" mask=\"#,###\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:getSum('BUDG_AT03')\" mask=\"#,###\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:getSum('BUDG_AT04')\" mask=\"#,###\"/><Cell col=\"8\" rowspan=\"5\"/><Cell row=\"1\" col=\"2\" style=\"align:center;\" text=\"추가예산\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:toNumber(getSum('BADD_ATAL'),0)\" mask=\"#,###\"/><Cell row=\"1\" col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:getSum('BADD_AT01')\" mask=\"#,###\"/><Cell row=\"1\" col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:getSum('BADD_AT02')\" mask=\"#,###\"/><Cell row=\"1\" col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"expr:getSum('BADD_AT03')\" mask=\"#,###\"/><Cell row=\"1\" col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"expr:getSum('BADD_AT04')\" mask=\"#,###\"/><Cell row=\"2\" col=\"2\" style=\"align:center;\" text=\"총예산\"/><Cell row=\"2\" col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:toNumber(getSum('BTOT_ATAL'),0)\" mask=\"#,###\"/><Cell row=\"2\" col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:getSum('BTOT_AT01')\" mask=\"#,###\"/><Cell row=\"2\" col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:getSum('BTOT_AT02')\" mask=\"#,###\"/><Cell row=\"2\" col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"expr:getSum('BTOT_AT03')\" mask=\"#,###\"/><Cell row=\"2\" col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"expr:getSum('BTOT_AT04')\" mask=\"#,###\"/><Cell row=\"3\" col=\"2\" style=\"align:center;\" text=\"사용실적\"/><Cell row=\"3\" col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:toNumber(getSum('SLIP_ATAL'),0)\" mask=\"#,###\"/><Cell row=\"3\" col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:getSum('SLIP_AT01')\" mask=\"#,###\"/><Cell row=\"3\" col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:getSum('SLIP_AT02')\" mask=\"#,###\"/><Cell row=\"3\" col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"expr:getSum('SLIP_AT03')\" mask=\"#,###\"/><Cell row=\"3\" col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"expr:getSum('SLIP_AT04')\" mask=\"#,###\"/><Cell row=\"4\" col=\"2\" style=\"align:center;\" text=\"잔액\"/><Cell row=\"4\" col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:toNumber(getSum('REMA_ATAL'),0)\" mask=\"#,###\"/><Cell row=\"4\" col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:getSum('REMA_AT01')\" mask=\"#,###\"/><Cell row=\"4\" col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:getSum('REMA_AT02')\" mask=\"#,###\"/><Cell row=\"4\" col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"expr:getSum('REMA_AT03')\" mask=\"#,###\"/><Cell row=\"4\" col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"expr:getSum('REMA_AT04')\" mask=\"#,###\"/></Band></Format></Formats>");
            this.Tab0.TabD1.addChild(obj.name, obj);
            obj = new Tabpage("TabD2", this.Tab0);
            obj.set_text("프로젝트별예산");
            obj.style.set_background("white");
            this.Tab0.addChild(obj.name, obj);
            obj = new Grid("grdTB_PJBGXM", "absolute", "0", "21", null, null, "0", "4", this.Tab0.TabD2);
            obj.set_taborder("1");
            obj.set_binddataset("dsTB_PJBGXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.getSetter("autofitminwidth").set("900");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\" band=\"left\"/><Column size=\"200\" band=\"left\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/><Row size=\"23\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"프로젝트코드\"/><Cell col=\"1\" text=\"프로젝트명\"/><Cell col=\"2\" text=\"계약시작일\"/><Cell col=\"3\" text=\"계약종료일\"/><Cell col=\"4\" text=\"계정과목\"/><Cell col=\"5\" text=\"계정명\"/><Cell col=\"6\" text=\"기본예산\"/><Cell col=\"7\" text=\"추가예산\"/><Cell col=\"8\" text=\"예산합계\"/><Cell col=\"9\" text=\"실적금액\"/><Cell col=\"10\" text=\"잔액\"/></Band><Band id=\"body\"><Cell edittype=\"none\" style=\"align:center;\" text=\"bind:PROJ_CODE\"/><Cell col=\"1\" edittype=\"none\" style=\"align:left;\" text=\"bind:PROJ_NAME\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"none\" text=\"bind:CONT_STDT\" combodataset=\"dsBUDG_TYPE\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"none\" text=\"bind:CONT_EDDT\" combodataset=\"dsBUDG_TYPE\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" edittype=\"none\" style=\"align:center;\" text=\"bind:ACCT_INTL\"/><Cell col=\"5\" edittype=\"none\" style=\"align:left;\" text=\"bind:ACCT_BFNM\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AMNT\" mask=\"#,###\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:ADDX_AMNT\" mask=\"#,###\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:TOTA_AMNT\" mask=\"#,###\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AMNT\" mask=\"#,###\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REMA_AMNT\" mask=\"#,###\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" style=\"align:center;\" text=\"합계\"/><Cell col=\"2\" style=\"align:center;\"/><Cell col=\"3\" style=\"align:center;\"/><Cell col=\"4\" style=\"align:center;\"/><Cell col=\"5\" style=\"align:center;\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:toNumber(getSum('BUDG_AMNT'),0)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:toNumber(getSum('ADDX_AMNT'),0)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:toNumber(getSum('TOTA_AMNT'),0)\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:toNumber(getSum('SLIP_AMNT'),0)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:toNumber(getSum('REMA_AMNT'),0)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:center;\" expr=\"expr:toNumber(getSum('BUDG_AMNT'),0)\"/><Cell col=\"12\" style=\"align:center;\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:toNumber(getSum('BUDG_AMNT'),0)\" mask=\"#,###\"/><Cell col=\"14\" colspan=\"3\" style=\"align:center;\" text=\"합계\"/></Band></Format></Formats>");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "5", "0", "240", "23", null, null, this.Tab0.TabD2);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            this.Tab0.TabD2.addChild(obj.name, obj);
            obj = new Tabpage("TabD3", this.Tab0);
            obj.set_text("품의예산");
            obj.style.set_background("white");
            this.Tab0.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "5", "0", "240", "23", null, null, this.Tab0.TabD3);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            this.Tab0.TabD3.addChild(obj.name, obj);
            obj = new Grid("grdTB_CPLREQ", "absolute", "0", "21", null, null, "0", "4", this.Tab0.TabD3);
            obj.set_taborder("1");
            obj.set_binddataset("dsTB_CPLREQ");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.getSetter("autofitminwidth").set("900");
            obj.set_autofittype("col");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/><Row size=\"23\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"계정과목\"/><Cell col=\"1\" text=\"계정명\"/><Cell col=\"2\" text=\"예산금액\"/><Cell col=\"3\" text=\"실적금액\"/><Cell col=\"4\" text=\"잔액\"/></Band><Band id=\"body\"><Cell edittype=\"none\" style=\"align:center;\" text=\"bind:ACCT_INTL\" expandshow=\"hide\"/><Cell col=\"1\" edittype=\"none\" style=\"align:left;\" text=\"bind:ACCT_BFNM\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AMNT\" mask=\"#,###\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AMNT\" mask=\"#,###\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REMA_AMNT\" mask=\"#,###\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" style=\"align:center;\" text=\"합계\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:toNumber(getSum('BUDG_AMNT'),0)\" mask=\"#,###\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:toNumber(getSum('SLIP_AMNT'),0)\" mask=\"#,###\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:toNumber(getSum('REMA_AMNT'),0)\" mask=\"#,###\"/></Band></Format></Formats>");
            this.Tab0.TabD3.addChild(obj.name, obj);
            obj = new Tabpage("TabD4", this.Tab0);
            obj.set_text("계정기준");
            obj.style.set_background("white");
            this.Tab0.addChild(obj.name, obj);
            obj = new Grid("grdACCT_BASE", "absolute", "0", "21", null, null, "0", "4", this.Tab0.TabD4);
            obj.set_taborder("0");
            obj.set_binddataset("dsACCT_BASE");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.getSetter("autofitminwidth").set("900");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/><Row size=\"23\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"계정과목\"/><Cell col=\"1\" text=\"계정명\"/><Cell col=\"2\" text=\"예산구분\"/><Cell col=\"3\" text=\"예산금액\"/><Cell col=\"4\" text=\"실적금액\"/><Cell col=\"5\" text=\"잔액\"/></Band><Band id=\"body\"><Cell edittype=\"none\" style=\"align:center;\" text=\"bind:ACCT_INTL\" expandshow=\"hide\" suppress=\"2\"/><Cell col=\"1\" edittype=\"none\" style=\"align:left;\" text=\"bind:ACCT_BFNM\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"expr:theme://images/btn_WF_Search.png\" suppress=\"1\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" style=\"align:left;\" text=\"bind:BUDG_GUBN\" expandshow=\"hide\" combodataset=\"dsBUDG_GUBN\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AMNT\" mask=\"#,###\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AMNT\" mask=\"#,###\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REMA_AMNT\" mask=\"#,###\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" style=\"align:center;\" text=\"합계\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:toNumber(getSum('BUDG_AMNT'),0)\" mask=\"#,###\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:toNumber(getSum('SLIP_AMNT'),0)\" mask=\"#,###\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:toNumber(getSum('REMA_AMNT'),0)\" mask=\"#,###\"/></Band></Format></Formats>");
            this.Tab0.TabD4.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "5", "0", "240", "23", null, null, this.Tab0.TabD4);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            this.Tab0.TabD4.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "62", "8", null, this);
            obj.set_taborder("39");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRAPPR_YSNO", "absolute", "508", "68", "128", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("40");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Static("Static03", "absolute", "433", "68", "75", "22", null, null, this);
            obj.set_taborder("41");
            obj.set_text("승인구분");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_BFNM", "absolute", "638", "92", "185", "22", null, null, this);
            obj.set_taborder("42");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_PROJXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INTL", "absolute", "508", "92", "106", "22", null, null, this);
            obj.set_taborder("44");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTM_PROJXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "433", "92", "75", "22", null, null, this);
            obj.set_taborder("45");
            obj.set_text("계정과목");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "16", "92", "75", "22", null, null, this);
            obj.set_taborder("46");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "224", "92", "185", "22", null, null, this);
            obj.set_taborder("47");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_PROJXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "93", "92", "107", "22", null, null, this);
            obj.set_taborder("49");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTM_PROJXM");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUB1", "absolute", "254", "68", "155", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("50");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new Static("Static00", "absolute", "181", "68", "75", "22", null, null, this);
            obj.set_taborder("51");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBUDG_YEAR", "absolute", "93", "68", "64", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("52");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Static("Static2", "absolute", "16", "68", "75", "22", null, null, this);
            obj.set_taborder("53");
            obj.set_text("예산년도");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_taborder("54");
            obj.set_text("부서별예산현황");
            obj.set_cssclass("styFormTitle");
            obj.style.set_align("middle left");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_taborder("55");
            obj.set_text(">회계관리>사업장등록");
            obj.set_cssclass("styFormLocation");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_NAME", "absolute", "201", "92", "22", "22", null, null, this);
            obj.set_taborder("56");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRACCT_BFNM", "absolute", "615", "92", "22", "22", null, null, this);
            obj.set_taborder("57");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.TabD1,
            	//-- Layout function
            	function(p) {
            		p.set_text("부서별예산");
            		p.style.set_background("white");
            		p.set_scrollbars("none");

            	}
            );
            this.Tab0.TabD1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.TabD2,
            	//-- Layout function
            	function(p) {
            		p.set_text("프로젝트별예산");
            		p.style.set_background("white");

            	}
            );
            this.Tab0.TabD2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.TabD3,
            	//-- Layout function
            	function(p) {
            		p.set_text("품의예산");
            		p.style.set_background("white");

            	}
            );
            this.Tab0.TabD3.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab0.TabD4,
            	//-- Layout function
            	function(p) {
            		p.set_text("계정기준");
            		p.style.set_background("white");

            	}
            );
            this.Tab0.TabD4.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1051, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("부서별예산현황");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","edtSHRACCT_BFNM","value","dsTM_PROJXM","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edtSHRACCT_INTL","value","dsTM_PROJXM","COND_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCUST_NAME_value","edtSHRDEPT_NAME","value","dsTM_PROJXM","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCUST_CODE_value","edtSHRDEPT_CODE","value","dsTM_PROJXM","COND_DEPT");
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
        this.addIncludeScript("BDMF0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("BDMF0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	BDMF0010 부서별예산현황
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.25		황치웅		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
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
        this.sBUTTONLIST  = "TTFFFFTF"; 
        this.sPACKAGENAME = "BDMF0010";
        this.sACCT_GUBN   = "";

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

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
         /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fnc_GridSetting(this);
        	//this.fnc_GridSetting(this.Tab0.TabD1.grdTB_CPLDPT);
        	//this.fnc_GridSetting(this.Tab0.TabD2.grdTB_PJBGXM);
        	//this.fnc_GridSetting(this.Tab0.TabD3.grdTB_CPLREQ);
        	//this.fnc_GridSetting(this.Tab0.TabD4.grdACCT_BASE);

        	// fnc_GridKeyFieldDisable(Tab0.TabD1.grdTB_CPLDPT, "ACCT_BFNM", "edittype", "normal");
        	// fnc_GridKeyFieldDisable(Tab0.TabD1.grdTB_CPLDPT, "ACCT_BFNM", "expandshow", "show");
        	// fnc_GridKeyFieldDisable(Tab0.TabD1.grdTB_CPLDPT, "DEPT_NAME", "edittype", "normal");
        	// fnc_GridKeyFieldDisable(Tab0.TabD1.grdTB_CPLDPT, "DEPT_NAME", "expandshow", "show");

        	this.calSHRBUDG_YEAR.set_value(this.fnc_SubStr(this. fnc_GetServerDateTime("date"), 0, 8)); 

        	/* 메뉴 권한별 처리 */
        	if (this.sUSERLAVEL != "5") {
        	
        		this.imgHelpSHRDEPT_NAME.set_enable(false);
        		this.edtSHRDEPT_NAME.set_enable(false);
        		this.edtSHRDEPT_CODE.set_value(application.GBL_DEPTCD);
        		this.edtSHRDEPT_NAME.set_value(application.GBL_DEPTNM);
        		
        	} else if (this.sUSERLAVEL == "5") {
        	
        		this.imgHelpSHRDEPT_NAME.set_enable(true);
        		this.edtSHRDEPT_NAME.set_enable(true);
        		this.edtSHRDEPT_CODE.set_value("");
        		this.edtSHRDEPT_NAME.set_value("");
        	}

        	this.Tab0.TabD1.grdTB_CPLDPT.setFocus();
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
        	
        	if (!this.fn_SearchItemCheck()) return;

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTB_CPLDPT=dsTB_CPLDPT dsTB_PJBGXM=dsTB_PJBGXM dsTB_CPLREQ=dsTB_CPLREQ dsACCT_BASE=dsACCT_BASE";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.Tab0.TabD1.grdTB_CPLDPT.setFocus();
        	this.calSHRBUDG_YEAR.setFocus();
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

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
        	// 기능없음.
        }

        
        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsTB_CPLDPT,dsTB_CPLREQ,dsTB_PJBGXM,dsACCT_BASE", this);
        	
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj, e);
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

        	if (this.fnc_Length(this.fnc_Trim(this.calSHRBUDG_YEAR.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준년도", this.calSHRBUDG_YEAR);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_GUB1.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "회계단위", this.cmbSHRACCT_GUB1);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.edtSHRDEPT_NAME.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "부서명", this.edtSHRDEPT_NAME);
        	}

        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        }
        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        	
        		var SLIP_DATE = this.fnc_SubStr(this.fnc_Trim(this.calSHRBUDG_YEAR.value), 0, 4) + "1231";

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    + this.fnc_Quote(sKind); 
        		sReturnString += " BUDG_YEAR=" + this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRBUDG_YEAR.value), 0, 4));  //기준년도
        		sReturnString += " ACCT_GUB1=" + this.fnc_Quote(this.cmbSHRACCT_GUB1.value); 										//회계단위
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.edtSHRDEPT_CODE.value); 										//부서코드
        		sReturnString += " ACCT_INTL=" + this.fnc_Quote(this.edtSHRACCT_INTL.value); 										//계정코드
        		sReturnString += " APPR_YSNO=" + this.fnc_Quote(this.cmbSHRAPPR_YSNO.value); 										//승인여부
        		sReturnString += " SLIP_DATE=" + this.fnc_Quote(SLIP_DATE); 														//
        	
        	} 
        	
        	return sReturnString;
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {
        	
        	if (ErrorCode < 0) 	{
        	
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

        	if (sMethodName == "SEARCH00") {
        	
        		this.fnc_Information(this.Tab0.TabD1.stInformation, this.dsTB_CPLDPT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTB_CPLDPT.rowcount); 
        		this.fnc_Information(this.Tab0.TabD2.stInformation, this.dsTB_PJBGXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Information(this.Tab0.TabD3.stInformation, this.dsTB_CPLREQ.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        	} else if (sMethodName == "GetCommCode") {
        		
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_GUB1,dsSHRACCT_GUB1,0";
        			arrParam[1] = "COMBO,cmbSHRAPPR_YSNO,dsAPPR_YSNO,0";
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	}
        	
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {

        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	// 부서
        	if ((obj.name == "imgHelpSHRDEPT_NAME") || (obj.name == "edtSHRDEPT_NAME")) {

        		arrParam[0] = "BDM0002";                                 
        		arrParam[1] = "";                                        
        		arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value); 
        		arrParam[3] = "N";                                       
        		arrParam[4] = "edtSHRDEPT_NAME";                         
        		arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";         
        		arrParam[6] = "0,1";                                     
        	
        		this.fnc_HelpDialogeAction(this, obj, arrParam);

        	//계정과목
        	} else if ((obj.name == "imgHelpSHRACCT_BFNM") || (obj.name == "edtSHRACCT_BFNM")) {

        		arrParam[0] = "BDM0011";                                 
        		arrParam[1] = "";                                        
        		arrParam[2] = this.fnc_Trim(this.edtSHRACCT_BFNM.value); 
        		arrParam[3] = "N";                                       
        		arrParam[4] = "edtSHRACCT_BFNM";                         
        		arrParam[5] = "edtSHRACCT_INTL,edtSHRACCT_BFNM";         
        		arrParam[6] = "0,1";                                     
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);
        	} 
        }
        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*--------------------------+
         |  컬럼값 변경시 처리  |
         +---------------------------*/
        this.fn_ColumnChanged = function (obj,e) {

        	var strColumnID = e.columnid;
        	var nRow = e.row;

        	if (strColumnID == "DEPT_NAME") {
        	
        		this.fn_CodeNameDisplay(this.Tab0.TabD1.grdTB_CPLDPT);
        		return;
        		
        	} else if (strColumnID == "ACCT_BFNM") {
        	
        		this.fn_CodeNameDisplay(this.Tab0.TabD1.grdTB_CPLDPT);
        		return;
        		
        	} else if (strColumnID == "BUDG_AT01"
        		 || strColumnID == "BUDG_AT02"
        		 || strColumnID == "BUDG_AT03"
        		 || strColumnID == "BUDG_AT04"
        		 || strColumnID == "BUDG_AT05"
        		 || strColumnID == "BUDG_AT06"
        		 || strColumnID == "BUDG_AT07"
        		 || strColumnID == "BUDG_AT08"
        		 || strColumnID == "BUDG_AT09"
        		 || strColumnID == "BUDG_AT10"
        		 || strColumnID == "BUDG_AT11"
        		 || strColumnID == "BUDG_AT12") {
        		 
        		var BUDG_AT01 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(nRow, "BUDG_AT01"), 0);
        		var BUDG_AT02 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(nRow, "BUDG_AT02"), 0);
        		var BUDG_AT03 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(nRow, "BUDG_AT03"), 0);
        		var BUDG_AT04 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(nRow, "BUDG_AT04"), 0);
        		var BUDG_AT05 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(nRow, "BUDG_AT05"), 0);
        		var BUDG_AT06 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(nRow, "BUDG_AT06"), 0);
        		var BUDG_AT07 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(nRow, "BUDG_AT07"), 0);
        		var BUDG_AT08 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(nRow, "BUDG_AT08"), 0);
        		var BUDG_AT09 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(nRow, "BUDG_AT09"), 0);
        		var BUDG_AT10 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(nRow, "BUDG_AT10"), 0);
        		var BUDG_AT11 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(nRow, "BUDG_AT11"), 0);
        		var BUDG_AT12 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(nRow, "BUDG_AT12"), 0);

        		var BUDG_ATAL = nexacro.toNumber(BUDG_AT01, 0) + nexacro.toNumber(BUDG_AT02, 0) + nexacro.toNumber(BUDG_AT03, 0) + nexacro.toNumber(BUDG_AT04, 0)
        					  + nexacro.toNumber(BUDG_AT05, 0) + nexacro.toNumber(BUDG_AT06, 0) + nexacro.toNumber(BUDG_AT07, 0) + nexacro.toNumber(BUDG_AT08, 0)
        					  + nexacro.toNumber(BUDG_AT09, 0) + nexacro.toNumber(BUDG_AT10, 0) + nexacro.toNumber(BUDG_AT11, 0) + nexacro.toNumber(BUDG_AT12, 0);

        		this.dsTB_CPLDPT.set_enableevent(false);
        		this.dsTB_CPLDPT.setColumn(nRow, "BUDG_ATAL", BUDG_ATAL);
        		this.dsTB_CPLDPT.set_enableevent(true);

        		return;
        	}
        }

        /*--------------------------+
         |  조회조건 변경시 처리  |
         +---------------------------*/
        this.fn_clearData = function (obj) {

        	this.dsTB_CPLDPT.clearData();
        	this.stInformation.set_text("");
        }

        // 양식다운로드
        this.Div0_btnDown_OnClick = function (obj,e) {

        	var folderName = "upload/sample/";
        	var fileName   = "UpSample_BDMB0040.xls";
        	// FileDownload00 은 화면에 추가한 FileDownLoad 를 지정한다
        	var bSucc = this.fnc_FileDownLoad(this.FileDownload00, folderName, fileName);
        }

        // 엑셀업로드
        this.Div0_btnUp_OnClick = function (obj,e) {

        	var fdEXCEL = new FileDialog();
        	var vfEXCEL = new VirtualFile();

        	fdEXCEL.set_filter("Excel(.xls, .xlsx)|*.xls;*.xlsx|");

        	var vFile = fdEXCEL.open("기간비용등록 엑셀 업로드", FileDialog.LOAD, "%MYDOCUMENT%");
        	if (vFile == null) 	return false;

        	var objExtComm = new ExtCommon();
        	objExtComm.excelImportByIndex(vFile.fullpath, 0, "DS_EXCEL", 0);

        	var arr_colid = new Array();

        	// 그리드컬럼변경시 수정요
        	arr_colid[0]  = "DEPT_CODE"; //부서코드
        	arr_colid[1]  = "DEPT_NAME"; //부서명
        	arr_colid[2]  = "ACCT_INTL"; //계정과목
        	arr_colid[3]  = "ACCT_BFNM"; //계정명
        	arr_colid[4]  = "BUDG_ATAL"; //합계
        	arr_colid[5]  = "BUDG_AT01"; //1월
        	arr_colid[6]  = "BUDG_AT02"; //2월
        	arr_colid[7]  = "BUDG_AT03"; //3월
        	arr_colid[8]  = "BUDG_AT04"; //4월
        	arr_colid[9]  = "BUDG_AT05"; //5월
        	arr_colid[10] = "BUDG_AT06"; //6월
        	arr_colid[11] = "BUDG_AT07"; //7월
        	arr_colid[12] = "BUDG_AT08"; //8월
        	arr_colid[13] = "BUDG_AT09"; //9월
        	arr_colid[14] = "BUDG_AT10"; //10월
        	arr_colid[15] = "BUDG_AT11"; //11월
        	arr_colid[16] = "BUDG_AT12"; //12월
        	arr_colid[17] = "REMK_NOTE"; //비고

        	this.dsTB_CPLDPT.clearData();
        	this.dsTB_CPLDPT.set_enableevent(false);

        	for (var row = 1; row < this.DS_EXCEL.getRowCount(); row++) {
        	
        		if (this.fnc_Length(this.fnc_Trim(this.DS_EXCEL.getColumn(row, 0))) < 1) continue;

        		var nRow = this.dsTB_CPLDPT.addRow();

        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[0], this.fnc_Trim(this.DS_EXCEL.getColumn(row, 0)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[1], this.fnc_Trim(this.DS_EXCEL.getColumn(row, 1)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[2], this.fnc_Trim(this.DS_EXCEL.getColumn(row, 2)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[3], this.fnc_Trim(this.DS_EXCEL.getColumn(row, 3)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[4], this.fnc_Trim(this.DS_EXCEL.getColumn(row, 4)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[5], this.fnc_Trim(this.DS_EXCEL.getColumn(row, 5)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[6], this.fnc_Trim(this.DS_EXCEL.getColumn(row, 6)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[7], this.fnc_Trim(this.DS_EXCEL.getColumn(row, 7)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[8], this.fnc_Trim(this.DS_EXCEL.getColumn(row, 8)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[9], this.fnc_Trim(this.DS_EXCEL.getColumn(row, 9)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[10], this.fnc_Trim(this.DS_EXCEL.getColumn(row, 10)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[11], this.fnc_Trim(this.DS_EXCEL.getColumn(row, 11)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[12], this.fnc_Trim(this.DS_EXCEL.getColumn(row, 12)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[13], this.fnc_Trim(this.DS_EXCEL.getColumn(row, 13)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[14], this.fnc_Trim(this.DS_EXCEL.getColumn(row, 14)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[15], this.fnc_Trim(this.DS_EXCEL.getColumn(row, 15)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[16], this.fnc_Trim(this.DS_EXCEL.getColumn(row, 16)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[17], this.fnc_Trim(this.DS_EXCEL.getColumn(row, 17)));
        	}

        	this.dsTB_CPLDPT.set_enableevent(true);
        	this.stInformation.set_text(((this.DS_EXCEL.getRowCount() - 1) + "건의 데이타를 로드 했습니다."));
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTB_CPLDPT.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTB_CPLDPT.addEventHandler("oncolumnchanged", this.fn_ColumnChanged, this);
            this.dsTB_CPLREQ.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTB_CPLREQ.addEventHandler("oncolumnchanged", this.fn_ColumnChanged, this);
            this.dsTB_PJBGXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsTB_PJBGXM.addEventHandler("oncolumnchanged", this.fn_ColumnChanged, this);
            this.dsACCT_BASE.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsACCT_BASE.addEventHandler("oncolumnchanged", this.fn_ColumnChanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.Tab0.TabD1.grdTB_CPLDPT.addEventHandler("onexpanddown", this.fn_HelpDialogeGrid, this);
            this.Tab0.TabD2.grdTB_PJBGXM.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.Tab0.TabD2.grdTB_PJBGXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.Tab0.TabD3.grdTB_CPLREQ.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.Tab0.TabD3.grdTB_CPLREQ.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.Tab0.TabD4.grdACCT_BASE.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.Tab0.TabD4.grdACCT_BASE.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.cmbSHRAPPR_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_BFNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_BFNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRACCT_INTL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_GUB1.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_GUB1.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.cmbSHRACCT_GUB1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRBUDG_YEAR.addEventHandler("onspin", this.fn_clearData, this);
            this.calSHRBUDG_YEAR.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.imgHelpSHRDEPT_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRACCT_BFNM.addEventHandler("onclick", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("BDMF0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
