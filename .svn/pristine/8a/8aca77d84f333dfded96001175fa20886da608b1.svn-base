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
                this.set_name("BDMB0110");
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
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRACCT_GUB1</Col><Col id=\"CODEID\">DIV_CD</Col><Col id=\"HEADFLAG\">B</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHRACCT_GUB1", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODDYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHRMM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MM\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"MNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MM\">01</Col><Col id=\"MNAME\">1월</Col></Row><Row><Col id=\"MM\">02</Col><Col id=\"MNAME\">2월</Col></Row><Row><Col id=\"MM\">03</Col><Col id=\"MNAME\">3월</Col></Row><Row><Col id=\"MM\">04</Col><Col id=\"MNAME\">4월</Col></Row><Row><Col id=\"MM\">05</Col><Col id=\"MNAME\">5월</Col></Row><Row><Col id=\"MM\">06</Col><Col id=\"MNAME\">6월</Col></Row><Row><Col id=\"MM\">07</Col><Col id=\"MNAME\">7월</Col></Row><Row><Col id=\"MM\">08</Col><Col id=\"MNAME\">8월</Col></Row><Row><Col id=\"MM\">09</Col><Col id=\"MNAME\">9월</Col></Row><Row><Col id=\"MM\">10</Col><Col id=\"MNAME\">10월</Col></Row><Row><Col id=\"MM\">11</Col><Col id=\"MNAME\">11월</Col></Row><Row><Col id=\"MM\">12</Col><Col id=\"MNAME\">12월</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_EXCEL", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAPPR_YSNO", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\"/><Col id=\"SUBNAME\">전체</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/><Col id=\"SUBREF3\"/><Col id=\"SUBREF4\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">0</Col><Col id=\"SUBNAME\">미승인</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/><Col id=\"SUBREF3\"/><Col id=\"SUBREF4\"/></Row><Row><Col id=\"COMCODE\"/><Col id=\"SUBCODE\">1</Col><Col id=\"SUBNAME\">승인</Col><Col id=\"SUBREF1\"/><Col id=\"SUBREF2\"/><Col id=\"SUBREF3\"/><Col id=\"SUBREF4\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "133", "240", "23", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTB_CPLDPT", "absolute", "8", "156", null, null, "8", "8", this);
            obj.set_binddataset("dsTB_CPLDPT");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("5");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"89\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"23\" band=\"head\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"20\"/><Row size=\"23\" band=\"summ\"/><Row size=\"23\" band=\"summ\"/><Row size=\"23\" band=\"summ\"/><Row size=\"23\" band=\"summ\"/><Row size=\"23\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"부서코드\"/><Cell col=\"1\" rowspan=\"2\" text=\"부서명\"/><Cell col=\"2\" rowspan=\"2\" text=\"계정과목\"/><Cell col=\"3\" rowspan=\"2\" text=\"계정명\"/><Cell col=\"4\" rowspan=\"2\" text=\"구분\"/><Cell col=\"5\" rowspan=\"2\" text=\"합계\"/><Cell col=\"6\" colspan=\"12\" text=\"월별예산액\"/><Cell col=\"18\" rowspan=\"2\" text=\"비고\"/><Cell row=\"1\" col=\"6\" text=\"1월\"/><Cell row=\"1\" col=\"7\" text=\"2월\"/><Cell row=\"1\" col=\"8\" text=\"3월\"/><Cell row=\"1\" col=\"9\" text=\"4월\"/><Cell row=\"1\" col=\"10\" text=\"5월\"/><Cell row=\"1\" col=\"11\" text=\"6월\"/><Cell row=\"1\" col=\"12\" text=\"7월\"/><Cell row=\"1\" col=\"13\" text=\"8월\"/><Cell row=\"1\" col=\"14\" text=\"9월\"/><Cell row=\"1\" col=\"15\" text=\"10월\"/><Cell row=\"1\" col=\"16\" text=\"11월\"/><Cell row=\"1\" col=\"17\" text=\"12월\"/></Band><Band id=\"body\"><Cell rowspan=\"5\" edittype=\"none\" style=\"align:center;\" text=\"bind:DEPT_CODE\"/><Cell col=\"1\" rowspan=\"5\" edittype=\"none\" style=\"align:left;\" text=\"bind:DEPT_NAME\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://imagesInbus\\imgHelpPopup.gif')\"/><Cell col=\"2\" rowspan=\"5\" edittype=\"none\" style=\"align:center;\" text=\"bind:ACCT_INTL\"/><Cell col=\"3\" rowspan=\"5\" edittype=\"none\" style=\"align:left;\" text=\"bind:ACCT_BFNM\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://imagesInbus\\imgHelpPopup.gif')\"/><Cell col=\"4\" celltype=\"none\" edittype=\"none\" style=\"align:center;\" text=\"기본예산\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_ATAL\" mask=\"#,###\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AT01\" mask=\"#,###\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AT02\" mask=\"#,###\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AT03\" mask=\"#,###\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AT04\" mask=\"#,###\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AT05\" mask=\"#,###\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AT06\" mask=\"#,###\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AT07\" mask=\"#,###\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AT08\" mask=\"#,###\"/><Cell col=\"14\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AT09\" mask=\"#,###\"/><Cell col=\"15\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AT10\" mask=\"#,###\"/><Cell col=\"16\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AT11\" mask=\"#,###\"/><Cell col=\"17\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AT12\" mask=\"#,###\"/><Cell col=\"18\" rowspan=\"5\" edittype=\"none\" style=\"align:left;\" text=\"bind:REMK_NOTE\"/><Cell row=\"1\" col=\"4\" celltype=\"none\" edittype=\"none\" style=\"align:center;\" text=\"추가예산\"/><Cell row=\"1\" col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_ATAL\" mask=\"#,###\"/><Cell row=\"1\" col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_AT01\" mask=\"#,###\"/><Cell row=\"1\" col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_AT02\" mask=\"#,###\"/><Cell row=\"1\" col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_AT03\" mask=\"#,###\"/><Cell row=\"1\" col=\"9\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_AT04\" mask=\"#,###\"/><Cell row=\"1\" col=\"10\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_AT05\" mask=\"#,###\"/><Cell row=\"1\" col=\"11\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_AT06\" mask=\"#,###\"/><Cell row=\"1\" col=\"12\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_AT07\" mask=\"#,###\"/><Cell row=\"1\" col=\"13\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_AT08\" mask=\"#,###\"/><Cell row=\"1\" col=\"14\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_AT09\" mask=\"#,###\"/><Cell row=\"1\" col=\"15\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_AT10\" mask=\"#,###\"/><Cell row=\"1\" col=\"16\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_AT11\" mask=\"#,###\"/><Cell row=\"1\" col=\"17\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_AT12\" mask=\"#,###\"/><Cell row=\"2\" col=\"4\" celltype=\"none\" edittype=\"none\" style=\"align:center;\" text=\"총예산\"/><Cell row=\"2\" col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_ATAL\" mask=\"#,###\"/><Cell row=\"2\" col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_AT01\" mask=\"#,###\"/><Cell row=\"2\" col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_AT02\" mask=\"#,###\"/><Cell row=\"2\" col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_AT03\" mask=\"#,###\"/><Cell row=\"2\" col=\"9\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_AT04\" mask=\"#,###\"/><Cell row=\"2\" col=\"10\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_AT05\" mask=\"#,###\"/><Cell row=\"2\" col=\"11\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_AT06\" mask=\"#,###\"/><Cell row=\"2\" col=\"12\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_AT07\" mask=\"#,###\"/><Cell row=\"2\" col=\"13\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_AT08\" mask=\"#,###\"/><Cell row=\"2\" col=\"14\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_AT09\" mask=\"#,###\"/><Cell row=\"2\" col=\"15\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_AT10\" mask=\"#,###\"/><Cell row=\"2\" col=\"16\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_AT11\" mask=\"#,###\"/><Cell row=\"2\" col=\"17\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_AT12\" mask=\"#,###\"/><Cell row=\"3\" col=\"4\" celltype=\"none\" edittype=\"none\" style=\"align:center;\" text=\"사용실적\"/><Cell row=\"3\" col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_ATAL\" mask=\"#,###\"/><Cell row=\"3\" col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AT01\" mask=\"#,###\"/><Cell row=\"3\" col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AT02\" mask=\"#,###\"/><Cell row=\"3\" col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AT03\" mask=\"#,###\"/><Cell row=\"3\" col=\"9\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AT04\" mask=\"#,###\"/><Cell row=\"3\" col=\"10\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AT05\" mask=\"#,###\"/><Cell row=\"3\" col=\"11\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AT06\" mask=\"#,###\"/><Cell row=\"3\" col=\"12\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AT07\" mask=\"#,###\"/><Cell row=\"3\" col=\"13\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AT08\" mask=\"#,###\"/><Cell row=\"3\" col=\"14\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AT09\" mask=\"#,###\"/><Cell row=\"3\" col=\"15\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AT10\" mask=\"#,###\"/><Cell row=\"3\" col=\"16\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AT11\" mask=\"#,###\"/><Cell row=\"3\" col=\"17\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AT12\" mask=\"#,###\"/><Cell row=\"4\" col=\"4\" celltype=\"none\" edittype=\"none\" style=\"align:center;\" text=\"잔액\"/><Cell row=\"4\" col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REMA_ATAL\" mask=\"#,###\"/><Cell row=\"4\" col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REMA_AT01\" mask=\"#,###\"/><Cell row=\"4\" col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REMA_AT02\" mask=\"#,###\"/><Cell row=\"4\" col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REMA_AT03\" mask=\"#,###\"/><Cell row=\"4\" col=\"9\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REMA_AT04\" mask=\"#,###\"/><Cell row=\"4\" col=\"10\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REMA_AT05\" mask=\"#,###\"/><Cell row=\"4\" col=\"11\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REMA_AT06\" mask=\"#,###\"/><Cell row=\"4\" col=\"12\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REMA_AT07\" mask=\"#,###\"/><Cell row=\"4\" col=\"13\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REMA_AT08\" mask=\"#,###\"/><Cell row=\"4\" col=\"14\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REMA_AT09\" mask=\"#,###\"/><Cell row=\"4\" col=\"15\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REMA_AT10\" mask=\"#,###\"/><Cell row=\"4\" col=\"16\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REMA_AT11\" mask=\"#,###\"/><Cell row=\"4\" col=\"17\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:REMA_AT12\" mask=\"#,###\"/></Band><Band id=\"summary\"><Cell rowspan=\"5\" colspan=\"4\" style=\"align:center;\" text=\"합계\"/><Cell col=\"4\" style=\"align:center;\" text=\"기본예산\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:nexacro.toNumber(dataset.getSum('BUDG_ATAL'), 0)\" mask=\"#,###\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT01')\" mask=\"#,###\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT02')\" mask=\"#,###\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT03')\" mask=\"#,###\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT04')\" mask=\"#,###\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT05')\" mask=\"#,###\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT06')\" mask=\"#,###\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT07')\" mask=\"#,###\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT08')\" mask=\"#,###\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT09')\" mask=\"#,###\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT10')\" mask=\"#,###\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT11')\" mask=\"#,###\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT12')\" mask=\"#,###\"/><Cell col=\"18\" rowspan=\"5\"/><Cell row=\"1\" col=\"4\" style=\"align:center;\" text=\"추가예산\"/><Cell row=\"1\" col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:nexacro.toNumber(dataset.getSum('BADD_ATAL'), 0)\" mask=\"#,###\"/><Cell row=\"1\" col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BADD_AT01')\" mask=\"#,###\"/><Cell row=\"1\" col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BADD_AT02')\" mask=\"#,###\"/><Cell row=\"1\" col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BADD_AT03')\" mask=\"#,###\"/><Cell row=\"1\" col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BADD_AT04')\" mask=\"#,###\"/><Cell row=\"1\" col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BADD_AT05')\" mask=\"#,###\"/><Cell row=\"1\" col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BADD_AT06')\" mask=\"#,###\"/><Cell row=\"1\" col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BADD_AT07')\" mask=\"#,###\"/><Cell row=\"1\" col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BADD_AT08')\" mask=\"#,###\"/><Cell row=\"1\" col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BADD_AT09')\" mask=\"#,###\"/><Cell row=\"1\" col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BADD_AT10')\" mask=\"#,###\"/><Cell row=\"1\" col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BADD_AT11')\" mask=\"#,###\"/><Cell row=\"1\" col=\"17\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BADD_AT12')\" mask=\"#,###\"/><Cell row=\"2\" col=\"4\" style=\"align:center;\" text=\"총예산\"/><Cell row=\"2\" col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:nexacro.toNumber(dataset.getSum('BTOT_ATAL'), 0)\" mask=\"#,###\"/><Cell row=\"2\" col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BTOT_AT01')\" mask=\"#,###\"/><Cell row=\"2\" col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BTOT_AT02')\" mask=\"#,###\"/><Cell row=\"2\" col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BTOT_AT03')\" mask=\"#,###\"/><Cell row=\"2\" col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BTOT_AT04')\" mask=\"#,###\"/><Cell row=\"2\" col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BTOT_AT05')\" mask=\"#,###\"/><Cell row=\"2\" col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BTOT_AT06')\" mask=\"#,###\"/><Cell row=\"2\" col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BTOT_AT07')\" mask=\"#,###\"/><Cell row=\"2\" col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BTOT_AT08')\" mask=\"#,###\"/><Cell row=\"2\" col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BTOT_AT09')\" mask=\"#,###\"/><Cell row=\"2\" col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BTOT_AT10')\" mask=\"#,###\"/><Cell row=\"2\" col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BTOT_AT11')\" mask=\"#,###\"/><Cell row=\"2\" col=\"17\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BTOT_AT12')\" mask=\"#,###\"/><Cell row=\"3\" col=\"4\" style=\"align:center;\" text=\"사용실적\"/><Cell row=\"3\" col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:nexacro.toNumber(dataset.getSum('SLIP_ATAL'), 0)\" mask=\"#,###\"/><Cell row=\"3\" col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('SLIP_AT01')\" mask=\"#,###\"/><Cell row=\"3\" col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('SLIP_AT02')\" mask=\"#,###\"/><Cell row=\"3\" col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('SLIP_AT03')\" mask=\"#,###\"/><Cell row=\"3\" col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('SLIP_AT04')\" mask=\"#,###\"/><Cell row=\"3\" col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('SLIP_AT05')\" mask=\"#,###\"/><Cell row=\"3\" col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('SLIP_AT06')\" mask=\"#,###\"/><Cell row=\"3\" col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('SLIP_AT07')\" mask=\"#,###\"/><Cell row=\"3\" col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('SLIP_AT08')\" mask=\"#,###\"/><Cell row=\"3\" col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('SLIP_AT09')\" mask=\"#,###\"/><Cell row=\"3\" col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('SLIP_AT10')\" mask=\"#,###\"/><Cell row=\"3\" col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('SLIP_AT11')\" mask=\"#,###\"/><Cell row=\"3\" col=\"17\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('SLIP_AT12')\" mask=\"#,###\"/><Cell row=\"4\" col=\"4\" style=\"align:center;\" text=\"잔액\"/><Cell row=\"4\" col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:nexacro.toNumber(dataset.getSum('REMA_ATAL'), 0)\" mask=\"#,###\"/><Cell row=\"4\" col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('REMA_AT01')\" mask=\"#,###\"/><Cell row=\"4\" col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('REMA_AT02')\" mask=\"#,###\"/><Cell row=\"4\" col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('REMA_AT03')\" mask=\"#,###\"/><Cell row=\"4\" col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('REMA_AT04')\" mask=\"#,###\"/><Cell row=\"4\" col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('REMA_AT05')\" mask=\"#,###\"/><Cell row=\"4\" col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('REMA_AT06')\" mask=\"#,###\"/><Cell row=\"4\" col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('REMA_AT07')\" mask=\"#,###\"/><Cell row=\"4\" col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('REMA_AT08')\" mask=\"#,###\"/><Cell row=\"4\" col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('REMA_AT09')\" mask=\"#,###\"/><Cell row=\"4\" col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('REMA_AT10')\" mask=\"#,###\"/><Cell row=\"4\" col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('REMA_AT11')\" mask=\"#,###\"/><Cell row=\"4\" col=\"17\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('REMA_AT12')\" mask=\"#,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "455", "27", "8", null, this);
            obj.set_taborder("6");
            obj.set_url("common::comButtonType01.xfdl");
            obj.set_scrollbars("none");
            obj.set_tabstop("false");
            obj.set_cssclass("styFormButtonList");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "48", "349", "25", null, null, this);
            obj.set_taborder("25");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "62", "8", null, this);
            obj.set_taborder("32");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "16", "68", "75", "22", null, null, this);
            obj.set_taborder("33");
            obj.set_text("예산년도");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBUDG_YEAR", "absolute", "93", "68", "65", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Static("Static00", "absolute", "181", "68", "60", "22", null, null, this);
            obj.set_taborder("35");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUB1", "absolute", "248", "68", "160", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("36");
            obj.set_autoselect("true");
            obj.set_innerdataset("@dsSHRACCT_GUB1");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchItem");

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "93", "92", "106", "22", null, null, this);
            obj.set_taborder("37");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTM_PROJXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "223", "92", "185", "22", null, null, this);
            obj.set_taborder("39");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_PROJXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "16", "92", "75", "22", null, null, this);
            obj.set_taborder("40");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "443", "92", "75", "22", null, null, this);
            obj.set_taborder("41");
            obj.set_text("계정과목");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_INTL", "absolute", "519", "92", "106", "22", null, null, this);
            obj.set_taborder("42");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsTM_PROJXM");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_BFNM", "absolute", "649", "92", "185", "22", null, null, this);
            obj.set_taborder("44");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_PROJXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "443", "68", "75", "22", null, null, this);
            obj.set_taborder("45");
            obj.set_text("승인구분");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRAPPR_YSNO", "absolute", "519", "68", "129", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("46");
            obj.set_innerdataset("dsAPPR_YSNO");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new Static("imgFormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_taborder("47");
            obj.set_text("부서별예산현황");
            obj.set_cssclass("styFormTitle");
            obj.style.set_align("middle left");
            this.addChild(obj.name, obj);

            obj = new Static("staFormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_taborder("48");
            obj.set_text(">회계관리>사업장등록");
            obj.set_cssclass("styFormLocation");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_NAME", "absolute", "200", "92", "22", "22", null, null, this);
            obj.set_taborder("49");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRACCT_BFNM", "absolute", "626", "92", "22", "22", null, null, this);
            obj.set_taborder("50");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Image0", "absolute", "8", "122", null, "3", "8", null, this);
            obj.set_taborder("51");
            obj.set_cssclass("sytSearchBoxShadow");
            obj.style.set_background("#ffffff00 URL('theme://imagesInbus/imgSearchShadow.png') stretch");
            this.addChild(obj.name, obj);


            
            // Layout Functions
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
        this.addIncludeScript("BDMB0110.xfdl", "script::lib_script_common.xjs");
        this.registerScript("BDMB0110.xfdl", function() {
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
        this.sPACKAGENAME = 'BDMB0110'; //해당 Form에서 사용 할 Package 명

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

        	//this.fnc_GridKeyFieldDisable(this.grdTB_CPLDPT, "ACCT_BFNM", "edittype", "normal");
        	//this.fnc_GridKeyFieldDisable(this.grdTB_CPLDPT, "ACCT_BFNM", "expandshow", "show");
        	//this.fnc_GridKeyFieldDisable(this.grdTB_CPLDPT, "DEPT_NAME", "edittype", "normal");
        	//this.fnc_GridKeyFieldDisable(this.grdTB_CPLDPT, "DEPT_NAME", "expandshow", "show");

        	this.calSHRBUDG_YEAR.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("date"), 0, 8)); //조회 초기값

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

        	this.grdTB_CPLDPT.setFocus();

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
        	var sOutDataSet = "dsTB_CPLDPT=dsTB_CPLDPT";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	// grdTB_CPLDPT.setFocus();                                   //재 클릭 방지를 위해 Focus 이동
        	this.calSHRBUDG_YEAR.setFocus();
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj,e)
        {
        	var nRow = this.dsTB_CPLDPT.addRow();
        	this.grdTB_CPLDPT.setFocus(); //재 클릭 방지를 위해 Focus 이동
        	this.grdTB_CPLDPT.setCellPos(this.fnc_GridColumnIndex(this.grdTB_CPLDPT, "DEPT_NAME"));
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj,e)
        {
        	// 삭제 할 자료가 있는지 여부를 체크
        	if (this.dsTB_CPLDPT.getRowCount() > 0) 
        	{
        		if (this.fn_DeleteCheck()) 
        		{
        			this.dsTB_CPLDPT.deleteRow(this.dsTB_CPLDPT.rowposition);
        		}
        		// 삭제 여부 확인
        	}
        	else 
        	{
        		this.fnc_Message("M1003"); //삭제 자료 없음 정보 Display
        	}

        	this.grdTB_CPLDPT.setFocus(); //Record 삭제 후 Grid로 Focus
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj,e)
        {
        	this.fnc_DataSetCancel("dsTB_CPLDPT"); //취소 할 DataSet의 이름을 입력한다.
        	this.grdTB_CPLDPT.setFocus(); //취소 후 Grid로 Focus
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
        	var sInDataSet = "dsTB_CPLDPT=dsTB_CPLDPT:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	// fn_search();

        	this.grdTB_CPLDPT.setFocus(); //재 클릭 방지를 위해 Focus 이동
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
        	var sMessage = this.fnc_FormUnloadCheck("dsTB_CPLDPT", this);
        	
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
        		if (e.fromobject instanceof this.grdTB_CPLDPT)
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
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRBUDG_YEAR.value)) < 1) 
        	{
        		this.fnc_Message("M1005", '예산년도');
        		this.calSHRBUDG_YEAR.setFocus();
        		return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_GUB1.value)) < 1) 
        	{
        		this.fnc_Message("M1005", '회계단위');
        		this.cmbSHRACCT_GUB1.setFocus();
        		return false;
        	}

        	return true;
        	// 모든 조회 조건이 입력 되면 True를 반환 한다.
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function ()
        {
        	// 선택된 Row Count
        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdTB_CPLDPT);
        	trace("iSelectRowCount::" + iSelectRowCount);
        	if (iSelectRowCount > 1) 
        	{
        		// Multy로 선택되었다면 선택된 Count로 삭제 여부 확인
        		return this.fnc_Message("M1010", iSelectRowCount);
        	}
        	else 
        	{
        		// 한 건 삭제 처리히 해당 항목에 대한 삭제 여부 확인
        		var sQuestionText = '부서코드 (' + this.fnc_Trim(this.dsTB_CPLDPT.getColumn(this.dsTB_CPLDPT.rowposition, "DEPT_CODE")) + ')';
        		sQuestionText += ' 계정과목 (' + this.grdTB_CPLDPT.getCellText(0, this.fnc_GridColumnIndex(this.grdTB_CPLDPT, "ACCT_INTL")) + ')';

        		return this.fnc_Message("M1004", sQuestionText);
        	}
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function ()
        {
        	// 변경된 자료가 있는지 체크
        	if (!this.fnc_DatasetChangeCheck("dsTB_CPLDPT")) 
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
        	for (var i = 0; i < this.dsTB_CPLDPT.getRowCount(); i++) 
        	{
        		// if (gfn_ToUpper(GetRowType(dsTB_CPLDPT,i)) == "NORMAL") continue;
        		if (this.fnc_ToUpper(this.dsTB_CPLDPT.getRowType(this.dsTB_CPLDPT, i)) != "NORMAL") 
        		{
        			if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLDPT.getColumn(i, 'DEPT_NAME'))) < 1) 
        			{
        				return this.fnc_CheckPostAction("M1005", "부서명", this.dsTB_CPLDPT, i, this.grdTB_CPLDPT, 'DEPT_NAME');
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLDPT.getColumn(i, 'DEPT_CODE'))) < 1) 
        			{
        				return this.fnc_CheckPostAction("M1005", "부서코드", this.dsTB_CPLDPT, i, this.grdTB_CPLDPT, 'DEPT_CODE');
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLDPT.getColumn(i, 'ACCT_BFNM'))) < 1) 
        			{
        				return this.fnc_CheckPostAction("M1005", "계정과목명", this.dsTB_CPLDPT, i, this.grdTB_CPLDPT, 'ACCT_BFNM');
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLDPT.getColumn(i, 'ACCT_INTL'))) < 1) 
        			{
        				return this.fnc_CheckPostAction("M1005", "계정과목", this.dsTB_CPLDPT, i, this.grdTB_CPLDPT, 'ACCT_INTL');
        			}

        			if (nexacro.toNumber(this.fnc_Trim(this.dsTB_CPLDPT.getColumn(i, 'BUDG_ATAL')), 0) == 0) 
        			{
        				return this.fnc_CheckPostAction("M1005", "예산액", this.dsTB_CPLDPT, i, this.grdTB_CPLDPT, 'BUDG_AT01');
        			}

        			if (this.fnc_Length(this.fnc_Trim(this.dsTB_CPLDPT.getColumn(i, 'REMK_NOTE'))) < 1) 
        			{
        				return this.fnc_CheckPostAction("M1005", "비고", this.dsTB_CPLDPT, i, this.grdTB_CPLDPT, 'REMK_NOTE');
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

        	// 조회 Argument 생성
        	if (sKind == 'SEARCH00') 
        	{
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); //Pacaage(Action Bean명)
        		sReturnString += " action=" + this.fnc_Quote(sKind); //호출할 Package의 Method명
        		sReturnString += " BUDG_YEAR=" + this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRBUDG_YEAR.value), 0, 4)); //기준년도
        		sReturnString += " ACCT_GUB1=" + this.fnc_Quote(this.cmbSHRACCT_GUB1.value); //회계단위
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.edtSHRDEPT_CODE.value); //부서코드
        		sReturnString += " ACCT_INTL=" + this.fnc_Quote(this.edtSHRACCT_INTL.value); //계정과목
        		sReturnString += " APPR_YSNO=" + this.fnc_Quote(this.cmbSHRAPPR_YSNO.value); //계정과목

        		// 저장 Argument 생성
        	}
        	else if (sKind == 'SAVE00') 
        	{
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME); //Pacaage(Action Bean명)
        		sReturnString += " action=" + this.fnc_Quote(sKind); //호출할 Package의 Method명
        		sReturnString += " BUDG_YEAR=" + this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRBUDG_YEAR.value), 0, 4)); //기준년도
        		sReturnString += " ACCT_GUB1=" + this.fnc_Quote(this.cmbSHRACCT_GUB1.value); //회계단위
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.edtSHRDEPT_CODE.value); //부서코드
        		sReturnString += " ACCT_INTL=" + this.fnc_Quote(this.edtSHRACCT_INTL.value); //계정과목
        	}

        	return sReturnString;
        	// 생성된 String 반환
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG)
        {
        	//this.fnc_CloseProgress.call(); //Service 후 Progress Bar Close

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
        		this.fnc_Information(this.stInformation, this.dsTB_CPLDPT.rowcount, "SHR"); //조회 결과 Display
        		this.fnc_Message("M1007", this.dsTB_CPLDPT.rowcount); //정상 종료 메세지
        	}
        	else if (sMethodName == 'SAVE00') 
        	{
        		this.fnc_Information(this.stInformation, 0, "SAVE"); //저장 결과 Display
        		this.fnc_Message("M1008"); //fn_KeyFieldDisible(dsTB_CPLDPT,0,dsTB_CPLDPT.rowposition);

        		this.fn_Search();
        	}
        	else if (sMethodName == 'GetCommCode') 
        	{
        		this.cmbSHRACCT_GUB1.set_index(0);
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

        	if (nRow == -1) 
        	{
        		return;
        	}
        	// 끝

        	if (this.fnc_ToUpper(this.dsTB_CPLDPT.getRowType(obj, e.newrow)) == "INSERT") 
        	{
        	}
        	else 
        	{
        	}
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

        			var sACCT_YEAR = this.fnc_SubStr(this.fnc_Trim(this.calSHRBUDG_YEAR.value), 0, 4);

        			sSearchKind = "ACCT08"; //계정과목 POPUP
        			sInputValue = this.fnc_Trim(this.edtSHRACCT_BFNM.value); //검색 조건 Text
        			sCommonGubn = sACCT_YEAR; //공통 구분 코드(공통코드 조회가 아니면 null)
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, sCommonGubn, this.edtSHRACCT_BFNM); //Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        			{
        				this.edtSHRACCT_INTL.set_value(sResponse[0]); //계정과목
        				this.edtSHRACCT_BFNM.set_value(sResponse[1]); //계정과목명
        			}
        			break;
        		case "grdTB_CPLDPT":
        			// 그리드 expnad 클릭

        			var dsObj = this.objects[obj.binddataset];

        			dsObj.set_enableevent(false);
        			obj.updateToDataset();
        			var columnID = this.fnc_getColId(obj, obj.currentcell);
        			var nRow = dsObj.rowposition;
        			var sACCT_YEAR = this.fnc_SubStr(this.fnc_Trim(this.calSHRBUDG_YEAR.value), 0, 4);

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
        				sSearchKind = "ACCT08"; //사용자 코드 조회 POPUP
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
        	if (!(obj instanceof this.grdTB_CPLDPT) && obj.value == obj.UserData) 
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
        		case "grdTB_CPLDPT":
        			// 그리드일때

        			var dsObj = this.objects[obj.binddataset];

        			dsObj.set_enableevent(false);

        			var columnID = this.fnc_getColId(obj, obj.currentcell);
        			var nRow = dsObj.rowposition;

        			trace('currentcell columnID ---- ' + columnID);

        			if (columnID == 'DEPT_NAME') 
        			{
        				sSearchKind = "DEPT06"; //팝업ID
        				sCommonGubn = ''; //기준년도
        				sInputValue = dsObj.getColumn(nRow, 'DEPT_NAME');
        				application.GBL_REVOBJ1 = "DEPT_CODE"; //부서 코드 Text Object명
        				application.GBL_REVOBJ2 = "DEPT_NAME"; //부서 명칭 Text Object명
        			}
        			else if (columnID == 'ACCT_BFNM') 
        			{
        				var sACCT_YEAR = this.fnc_SubStr(this.fnc_Trim(this.calSHRBUDG_YEAR.value), 0, 4);

        				sSearchKind = "ACCT08"; //팝업ID
        				sCommonGubn = sACCT_YEAR; //기준년도
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
        			var sACCT_YEAR = this.fnc_SubStr(this.fnc_Trim(this.calSHRBUDG_YEAR.value), 0, 4);

        			sSearchKind = "ACCT08";
        			sCommonGubn = sACCT_YEAR; //기준년도
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
        	this.fnc_GridSort(obj, obj.binddataset, e.col, e.cell);
        }

        /*--------------------------+
         |  컬럼값 변경시 처리  |
         +---------------------------*/
        this.fn_ColumnChanged = function (obj,e)
        {
        	var strColumnID = e.columnid;
        	var nRow = e.row;

        	if (strColumnID == 'DEPT_NAME') 
        	{
        		this.fn_CodeNameDisplay(this.grdTB_CPLDPT);
        		return;
        	}
        	else if (strColumnID == 'ACCT_BFNM') 
        	{
        		this.fn_CodeNameDisplay(this.grdTB_CPLDPT);
        		return;
        	}

        	else if (strColumnID == 'BUDG_AT01'
        		 || strColumnID == 'BUDG_AT02'
        		 || strColumnID == 'BUDG_AT03'
        		 || strColumnID == 'BUDG_AT04'
        		 || strColumnID == 'BUDG_AT05'
        		 || strColumnID == 'BUDG_AT06'
        		 || strColumnID == 'BUDG_AT07'
        		 || strColumnID == 'BUDG_AT08'
        		 || strColumnID == 'BUDG_AT09'
        		 || strColumnID == 'BUDG_AT10'
        		 || strColumnID == 'BUDG_AT11'
        		 || strColumnID == 'BUDG_AT12') 
        	{
        		var BUDG_AT01 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(nRow, 'BUDG_AT01'), 0);
        		var BUDG_AT02 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(nRow, 'BUDG_AT02'), 0);
        		var BUDG_AT03 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(nRow, 'BUDG_AT03'), 0);
        		var BUDG_AT04 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(nRow, 'BUDG_AT04'), 0);
        		var BUDG_AT05 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(nRow, 'BUDG_AT05'), 0);
        		var BUDG_AT06 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(nRow, 'BUDG_AT06'), 0);
        		var BUDG_AT07 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(nRow, 'BUDG_AT07'), 0);
        		var BUDG_AT08 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(nRow, 'BUDG_AT08'), 0);
        		var BUDG_AT09 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(nRow, 'BUDG_AT09'), 0);
        		var BUDG_AT10 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(nRow, 'BUDG_AT10'), 0);
        		var BUDG_AT11 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(nRow, 'BUDG_AT11'), 0);
        		var BUDG_AT12 = nexacro.toNumber(this.dsTB_CPLDPT.getColumn(nRow, 'BUDG_AT12'), 0);

        		var BUDG_ATAL = nexacro.toNumber(BUDG_AT01, 0) + nexacro.toNumber(BUDG_AT02, 0) + nexacro.toNumber(BUDG_AT03, 0) + nexacro.toNumber(BUDG_AT04, 0)
        			 + nexacro.toNumber(BUDG_AT05, 0) + nexacro.toNumber(BUDG_AT06, 0) + nexacro.toNumber(BUDG_AT07, 0) + nexacro.toNumber(BUDG_AT08, 0)
        			 + nexacro.toNumber(BUDG_AT09, 0) + nexacro.toNumber(BUDG_AT10, 0) + nexacro.toNumber(BUDG_AT11, 0) + nexacro.toNumber(BUDG_AT12, 0);

        		this.dsTB_CPLDPT.set_enableevent(false);
        		this.dsTB_CPLDPT.setColumn(nRow, 'BUDG_ATAL', BUDG_ATAL);
        		this.dsTB_CPLDPT.set_enableevent(true);

        		return;
        	}
        }

        /*--------------------------+
         |  조회조건 변경시 처리  |
         +---------------------------*/
        this.fn_clearData = function (obj)
        {
        	trace('fn_clearData --- name : ' + obj.name);

        	this.dsTB_CPLDPT.clearData();
        	this.stInformation.set_text('');
        }

        // 양식다운로드
        this.Div0_btnDown_OnClick = function (obj,e)
        {
        	var folderName = "upload/sample/";
        	var fileName = "UpSample_BDMB0040.xls";
        	// FileDownload00 은 화면에 추가한 FileDownLoad 를 지정한다
        	var bSucc = this.fnc_FileDownLoad(this.FileDownload00, folderName, fileName);
        }

        // 엑셀업로드
        this.Div0_btnUp_OnClick = function (obj,e)
        {
        	var fdEXCEL = new FileDialog();
        	var vfEXCEL = new VirtualFile();

        	fdEXCEL.set_filter("Excel(.xls, .xlsx)|*.xls;*.xlsx|");

        	var vFile = fdEXCEL.open("기간비용등록 엑셀 업로드", FileDialog.LOAD, "%MYDOCUMENT%");

        	if (vFile == null) 
        	{
        		return false;
        	}

        	var objExtComm = new ExtCommon();

        	objExtComm.excelImportByIndex(vFile.fullpath, 0, "DS_EXCEL", 0);

        	var arr_colid = new Array();

        	// 그리드컬럼변경시 수정요
        	arr_colid[0] = "DEPT_CODE"; //부서코드
        	arr_colid[1] = "DEPT_NAME"; //부서명
        	arr_colid[2] = "ACCT_INTL"; //계정과목
        	arr_colid[3] = "ACCT_BFNM"; //계정명
        	arr_colid[4] = "BUDG_ATAL"; //합계
        	arr_colid[5] = "BUDG_AT01"; //1월
        	arr_colid[6] = "BUDG_AT02"; //2월
        	arr_colid[7] = "BUDG_AT03"; //3월
        	arr_colid[8] = "BUDG_AT04"; //4월
        	arr_colid[9] = "BUDG_AT05"; //5월
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

        	for (var i = 1; i < this.DS_EXCEL.getRowCount(); i++) 
        	{
        		if (this.fnc_Length(this.fnc_Trim(this.DS_EXCEL.getColumn(i, 0))) < 1) 
        		{
        			continue;
        		}

        		var nRow = this.dsTB_CPLDPT.addRow();

        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[0], this.fnc_Trim(this.DS_EXCEL.getColumn(i, 0)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[1], this.fnc_Trim(this.DS_EXCEL.getColumn(i, 1)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[2], this.fnc_Trim(this.DS_EXCEL.getColumn(i, 2)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[3], this.fnc_Trim(this.DS_EXCEL.getColumn(i, 3)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[4], this.fnc_Trim(this.DS_EXCEL.getColumn(i, 4)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[5], this.fnc_Trim(this.DS_EXCEL.getColumn(i, 5)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[6], this.fnc_Trim(this.DS_EXCEL.getColumn(i, 6)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[7], this.fnc_Trim(this.DS_EXCEL.getColumn(i, 7)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[8], this.fnc_Trim(this.DS_EXCEL.getColumn(i, 8)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[9], this.fnc_Trim(this.DS_EXCEL.getColumn(i, 9)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[10], this.fnc_Trim(this.DS_EXCEL.getColumn(i, 10)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[11], this.fnc_Trim(this.DS_EXCEL.getColumn(i, 11)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[12], this.fnc_Trim(this.DS_EXCEL.getColumn(i, 12)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[13], this.fnc_Trim(this.DS_EXCEL.getColumn(i, 13)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[14], this.fnc_Trim(this.DS_EXCEL.getColumn(i, 14)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[15], this.fnc_Trim(this.DS_EXCEL.getColumn(i, 15)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[16], this.fnc_Trim(this.DS_EXCEL.getColumn(i, 16)));
        		this.dsTB_CPLDPT.setColumn(nRow, arr_colid[17], this.fnc_Trim(this.DS_EXCEL.getColumn(i, 17)));
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
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.grdTB_CPLDPT.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.grdTB_CPLDPT.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.calSHRBUDG_YEAR.addEventHandler("onspin", this.fn_clearData, this);
            this.calSHRBUDG_YEAR.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_GUB1.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_GUB1.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.cmbSHRACCT_GUB1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.edtSHRACCT_INTL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_BFNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_BFNM.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.cmbSHRAPPR_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRACCT_BFNM.addEventHandler("onclick", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("BDMB0110.xfdl");
        this.loadPreloadList();
       
    };
}
)();
