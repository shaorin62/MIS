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
                this.set_name("BDMC0010");
                this.set_titletext("부서별예산현황");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTB_CPLDPT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CSTC_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"CSTC_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BDSB_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"BDSB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUDG_ATAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUDG_AT01\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUDG_AT02\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUDG_AT03\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUDG_AT04\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUDG_AT05\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUDG_AT06\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUDG_AT07\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUDG_AT08\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUDG_AT09\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUDG_AT10\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUDG_AT11\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BUDG_AT12\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMK_NOTE\" type=\"STRING\" size=\"100\"/><Column id=\"BADD_ATAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BADD_AT01\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BADD_AT02\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BADD_AT03\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BADD_AT04\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BADD_AT05\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BADD_AT06\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BADD_AT07\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BADD_AT08\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BADD_AT09\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BADD_AT10\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BADD_AT11\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BADD_AT12\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BTOT_ATAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BTOT_AT01\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BTOT_AT02\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BTOT_AT03\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BTOT_AT04\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BTOT_AT05\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BTOT_AT06\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BTOT_AT07\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BTOT_AT08\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BTOT_AT09\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BTOT_AT10\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BTOT_AT11\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BTOT_AT12\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_ATAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AT01\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AT02\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AT03\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AT04\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AT05\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AT06\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AT07\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AT08\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AT09\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AT10\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AT11\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SLIP_AT12\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_ATAL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AT01\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AT02\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AT03\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AT04\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AT05\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AT06\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AT07\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AT08\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AT09\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AT10\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AT11\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMA_AT12\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSHRACCT_UNIT</Col><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsSHRAPPR_YSNO</Col><Col id=\"CODEID\">APPR_YSNO</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "133", "240", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("8");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTB_CPLDPT", "absolute", "8", "154", null, null, "25", "15", this);
            obj.set_binddataset("dsTB_CPLDPT");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("9");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("none");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"89\" band=\"left\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"200\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/><Row size=\"26\" band=\"summ\"/><Row size=\"26\" band=\"summ\"/><Row size=\"26\" band=\"summ\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"코스트센터명\"/><Cell col=\"1\" rowspan=\"2\" text=\"예산과목명\"/><Cell col=\"2\" rowspan=\"2\" text=\"구분\"/><Cell col=\"3\" rowspan=\"2\" text=\"합계\"/><Cell col=\"4\" colspan=\"12\" text=\"월별 예산액\"/><Cell col=\"16\" rowspan=\"2\" text=\"비고\"/><Cell row=\"1\" col=\"4\" text=\"1월\"/><Cell row=\"1\" col=\"5\" text=\"2월\"/><Cell row=\"1\" col=\"6\" text=\"3월\"/><Cell row=\"1\" col=\"7\" text=\"4월\"/><Cell row=\"1\" col=\"8\" text=\"5월\"/><Cell row=\"1\" col=\"9\" text=\"6월\"/><Cell row=\"1\" col=\"10\" text=\"7월\"/><Cell row=\"1\" col=\"11\" text=\"8월\"/><Cell row=\"1\" col=\"12\" text=\"9월\"/><Cell row=\"1\" col=\"13\" text=\"10월\"/><Cell row=\"1\" col=\"14\" text=\"11월\"/><Cell row=\"1\" col=\"15\" text=\"12월\"/></Band><Band id=\"body\"><Cell rowspan=\"5\" edittype=\"none\" style=\"line:0 none #808080,1 solid #f0f0f0ff,1 solid #cacacaff,1 solid #f0f0f0ff;\" text=\"bind:CSTC_NAME\"/><Cell col=\"1\" rowspan=\"5\" edittype=\"none\" style=\"line:0 none #808080,1 solid #f0f0f0ff,1 solid #cacacaff,1 solid #f0f0f0ff;\" text=\"bind:BDSB_NAME\"/><Cell col=\"2\" celltype=\"none\" edittype=\"none\" style=\"background2: ;\" text=\"기본예산\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_ATAL\" mask=\"#,###\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AT01\" mask=\"#,###\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AT02\" mask=\"#,###\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AT03\" mask=\"#,###\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AT04\" mask=\"#,###\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AT05\" mask=\"#,###\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AT06\" mask=\"#,###\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AT07\" mask=\"#,###\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AT08\" mask=\"#,###\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AT09\" mask=\"#,###\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AT10\" mask=\"#,###\"/><Cell col=\"14\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AT11\" mask=\"#,###\"/><Cell col=\"15\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BUDG_AT12\" mask=\"#,###\"/><Cell col=\"16\" rowspan=\"5\" edittype=\"none\" style=\"line:0 none #808080,1 solid #f0f0f0ff,1 solid #cacacaff,1 solid #f0f0f0ff;\" text=\"bind:REMK_NOTE\"/><Cell row=\"1\" col=\"2\" celltype=\"none\" edittype=\"none\" style=\"background2: ;\" text=\"추가예산\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_ATAL\" mask=\"#,###\"/><Cell row=\"1\" col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_AT01\" mask=\"#,###\"/><Cell row=\"1\" col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_AT02\" mask=\"#,###\"/><Cell row=\"1\" col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_AT03\" mask=\"#,###\"/><Cell row=\"1\" col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_AT04\" mask=\"#,###\"/><Cell row=\"1\" col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_AT05\" mask=\"#,###\"/><Cell row=\"1\" col=\"9\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_AT06\" mask=\"#,###\"/><Cell row=\"1\" col=\"10\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_AT07\" mask=\"#,###\"/><Cell row=\"1\" col=\"11\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_AT08\" mask=\"#,###\"/><Cell row=\"1\" col=\"12\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_AT09\" mask=\"#,###\"/><Cell row=\"1\" col=\"13\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_AT10\" mask=\"#,###\"/><Cell row=\"1\" col=\"14\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_AT11\" mask=\"#,###\"/><Cell row=\"1\" col=\"15\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BADD_AT12\" mask=\"#,###\"/><Cell row=\"2\" col=\"2\" celltype=\"none\" edittype=\"none\" style=\"background2: ;\" text=\"총예산\"/><Cell row=\"2\" col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_ATAL\" mask=\"#,###\"/><Cell row=\"2\" col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_AT01\" mask=\"#,###\"/><Cell row=\"2\" col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_AT02\" mask=\"#,###\"/><Cell row=\"2\" col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_AT03\" mask=\"#,###\"/><Cell row=\"2\" col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_AT04\" mask=\"#,###\"/><Cell row=\"2\" col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_AT05\" mask=\"#,###\"/><Cell row=\"2\" col=\"9\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_AT06\" mask=\"#,###\"/><Cell row=\"2\" col=\"10\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_AT07\" mask=\"#,###\"/><Cell row=\"2\" col=\"11\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_AT08\" mask=\"#,###\"/><Cell row=\"2\" col=\"12\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_AT09\" mask=\"#,###\"/><Cell row=\"2\" col=\"13\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_AT10\" mask=\"#,###\"/><Cell row=\"2\" col=\"14\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_AT11\" mask=\"#,###\"/><Cell row=\"2\" col=\"15\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BTOT_AT12\" mask=\"#,###\"/><Cell row=\"3\" col=\"2\" celltype=\"none\" edittype=\"none\" style=\"background2: ;\" text=\"사용실적\"/><Cell row=\"3\" col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_ATAL\" mask=\"#,###\"/><Cell row=\"3\" col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AT01\" mask=\"#,###\"/><Cell row=\"3\" col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AT02\" mask=\"#,###\"/><Cell row=\"3\" col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AT03\" mask=\"#,###\"/><Cell row=\"3\" col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AT04\" mask=\"#,###\"/><Cell row=\"3\" col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AT05\" mask=\"#,###\"/><Cell row=\"3\" col=\"9\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AT06\" mask=\"#,###\"/><Cell row=\"3\" col=\"10\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AT07\" mask=\"#,###\"/><Cell row=\"3\" col=\"11\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AT08\" mask=\"#,###\"/><Cell row=\"3\" col=\"12\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AT09\" mask=\"#,###\"/><Cell row=\"3\" col=\"13\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AT10\" mask=\"#,###\"/><Cell row=\"3\" col=\"14\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AT11\" mask=\"#,###\"/><Cell row=\"3\" col=\"15\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SLIP_AT12\" mask=\"#,###\"/><Cell row=\"4\" col=\"2\" celltype=\"none\" edittype=\"none\" style=\"line:0 none #808080,1 solid #f0f0f0ff,1 solid #cacacaff,1 solid #f0f0f0ff;\" text=\"잔액\"/><Cell row=\"4\" col=\"3\" displaytype=\"number\" edittype=\"none\" style=\"align:right;line:0 none #808080ff,1 solid #f0f0f0ff,1 solid #cacacaff,1 solid #f0f0f0ff;\" text=\"bind:REMA_ATAL\" mask=\"#,###\"/><Cell row=\"4\" col=\"4\" displaytype=\"number\" edittype=\"none\" style=\"align:right;line:0 none #808080ff,1 solid #f0f0f0ff,1 solid #cacacaff,1 solid #f0f0f0ff;\" text=\"bind:REMA_AT01\" mask=\"#,###\"/><Cell row=\"4\" col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:right;line:0 none #808080ff,1 solid #f0f0f0ff,1 solid #cacacaff,1 solid #f0f0f0ff;\" text=\"bind:REMA_AT02\" mask=\"#,###\"/><Cell row=\"4\" col=\"6\" displaytype=\"number\" edittype=\"none\" style=\"align:right;line:0 none #808080ff,1 solid #f0f0f0ff,1 solid #cacacaff,1 solid #f0f0f0ff;\" text=\"bind:REMA_AT03\" mask=\"#,###\"/><Cell row=\"4\" col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;line:0 none #808080ff,1 solid #f0f0f0ff,1 solid #cacacaff,1 solid #f0f0f0ff;\" text=\"bind:REMA_AT04\" mask=\"#,###\"/><Cell row=\"4\" col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"align:right;line:0 none #808080ff,1 solid #f0f0f0ff,1 solid #cacacaff,1 solid #f0f0f0ff;\" text=\"bind:REMA_AT05\" mask=\"#,###\"/><Cell row=\"4\" col=\"9\" displaytype=\"number\" edittype=\"none\" style=\"align:right;line:0 none #808080ff,1 solid #f0f0f0ff,1 solid #cacacaff,1 solid #f0f0f0ff;\" text=\"bind:REMA_AT06\" mask=\"#,###\"/><Cell row=\"4\" col=\"10\" displaytype=\"number\" edittype=\"none\" style=\"align:right;line:0 none #808080ff,1 solid #f0f0f0ff,1 solid #cacacaff,1 solid #f0f0f0ff;\" text=\"bind:REMA_AT07\" mask=\"#,###\"/><Cell row=\"4\" col=\"11\" displaytype=\"number\" edittype=\"none\" style=\"align:right;line:0 none #808080ff,1 solid #f0f0f0ff,1 solid #cacacaff,1 solid #f0f0f0ff;\" text=\"bind:REMA_AT08\" mask=\"#,###\"/><Cell row=\"4\" col=\"12\" displaytype=\"number\" edittype=\"none\" style=\"align:right;line:0 none #808080ff,1 solid #f0f0f0ff,1 solid #cacacaff,1 solid #f0f0f0ff;\" text=\"bind:REMA_AT09\" mask=\"#,###\"/><Cell row=\"4\" col=\"13\" displaytype=\"number\" edittype=\"none\" style=\"align:right;line:0 none #808080ff,1 solid #f0f0f0ff,1 solid #cacacaff,1 solid #f0f0f0ff;\" text=\"bind:REMA_AT10\" mask=\"#,###\"/><Cell row=\"4\" col=\"14\" displaytype=\"number\" edittype=\"none\" style=\"align:right;line:0 none #808080ff,1 solid #f0f0f0ff,1 solid #cacacaff,1 solid #f0f0f0ff;\" text=\"bind:REMA_AT11\" mask=\"#,###\"/><Cell row=\"4\" col=\"15\" displaytype=\"number\" edittype=\"none\" style=\"align:right;line:0 none #808080ff,1 solid #f0f0f0ff,1 solid #cacacaff,1 solid #f0f0f0ff;\" text=\"bind:REMA_AT12\" mask=\"#,###\"/></Band><Band id=\"summary\"><Cell rowspan=\"5\" colspan=\"2\" style=\"align:center;\" text=\"합계\"/><Cell col=\"2\" style=\"align:center;\" text=\"기본예산\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:nexacro.toNumber(dataset.getSum('BUDG_ATAL'), 0)\" mask=\"#,###\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT01')\" mask=\"#,###\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT02')\" mask=\"#,###\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT03')\" mask=\"#,###\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT04')\" mask=\"#,###\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT05')\" mask=\"#,###\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT06')\" mask=\"#,###\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT07')\" mask=\"#,###\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT08')\" mask=\"#,###\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT09')\" mask=\"#,###\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT10')\" mask=\"#,###\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT11')\" mask=\"#,###\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BUDG_AT12')\" mask=\"#,###\"/><Cell col=\"16\" rowspan=\"5\"/><Cell row=\"1\" col=\"2\" style=\"align:center;\" text=\"추가예산\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:nexacro.toNumber(dataset.getSum('BADD_ATAL'), 0)\" mask=\"#,###\"/><Cell row=\"1\" col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BADD_AT01')\" mask=\"#,###\"/><Cell row=\"1\" col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BADD_AT02')\" mask=\"#,###\"/><Cell row=\"1\" col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BADD_AT03')\" mask=\"#,###\"/><Cell row=\"1\" col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BADD_AT04')\" mask=\"#,###\"/><Cell row=\"1\" col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BADD_AT05')\" mask=\"#,###\"/><Cell row=\"1\" col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BADD_AT06')\" mask=\"#,###\"/><Cell row=\"1\" col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BADD_AT07')\" mask=\"#,###\"/><Cell row=\"1\" col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BADD_AT08')\" mask=\"#,###\"/><Cell row=\"1\" col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BADD_AT09')\" mask=\"#,###\"/><Cell row=\"1\" col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BADD_AT10')\" mask=\"#,###\"/><Cell row=\"1\" col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BADD_AT11')\" mask=\"#,###\"/><Cell row=\"1\" col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BADD_AT12')\" mask=\"#,###\"/><Cell row=\"2\" col=\"2\" style=\"align:center;\" text=\"총예산\"/><Cell row=\"2\" col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:nexacro.toNumber(dataset.getSum('BTOT_ATAL'), 0)\" mask=\"#,###\"/><Cell row=\"2\" col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BTOT_AT01')\" mask=\"#,###\"/><Cell row=\"2\" col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BTOT_AT02')\" mask=\"#,###\"/><Cell row=\"2\" col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BTOT_AT03')\" mask=\"#,###\"/><Cell row=\"2\" col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BTOT_AT04')\" mask=\"#,###\"/><Cell row=\"2\" col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BTOT_AT05')\" mask=\"#,###\"/><Cell row=\"2\" col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BTOT_AT06')\" mask=\"#,###\"/><Cell row=\"2\" col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BTOT_AT07')\" mask=\"#,###\"/><Cell row=\"2\" col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BTOT_AT08')\" mask=\"#,###\"/><Cell row=\"2\" col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BTOT_AT09')\" mask=\"#,###\"/><Cell row=\"2\" col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BTOT_AT10')\" mask=\"#,###\"/><Cell row=\"2\" col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BTOT_AT11')\" mask=\"#,###\"/><Cell row=\"2\" col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('BTOT_AT12')\" mask=\"#,###\"/><Cell row=\"3\" col=\"2\" style=\"align:center;\" text=\"사용실적\"/><Cell row=\"3\" col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:nexacro.toNumber(dataset.getSum('SLIP_ATAL'), 0)\" mask=\"#,###\"/><Cell row=\"3\" col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('SLIP_AT01')\" mask=\"#,###\"/><Cell row=\"3\" col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('SLIP_AT02')\" mask=\"#,###\"/><Cell row=\"3\" col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('SLIP_AT03')\" mask=\"#,###\"/><Cell row=\"3\" col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('SLIP_AT04')\" mask=\"#,###\"/><Cell row=\"3\" col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('SLIP_AT05')\" mask=\"#,###\"/><Cell row=\"3\" col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('SLIP_AT06')\" mask=\"#,###\"/><Cell row=\"3\" col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('SLIP_AT07')\" mask=\"#,###\"/><Cell row=\"3\" col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('SLIP_AT08')\" mask=\"#,###\"/><Cell row=\"3\" col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('SLIP_AT09')\" mask=\"#,###\"/><Cell row=\"3\" col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('SLIP_AT10')\" mask=\"#,###\"/><Cell row=\"3\" col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('SLIP_AT11')\" mask=\"#,###\"/><Cell row=\"3\" col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('SLIP_AT12')\" mask=\"#,###\"/><Cell row=\"4\" col=\"2\" style=\"align:center;\" text=\"잔액\"/><Cell row=\"4\" col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:nexacro.toNumber(dataset.getSum('REMA_ATAL'), 0)\" mask=\"#,###\"/><Cell row=\"4\" col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('REMA_AT01')\" mask=\"#,###\"/><Cell row=\"4\" col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('REMA_AT02')\" mask=\"#,###\"/><Cell row=\"4\" col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('REMA_AT03')\" mask=\"#,###\"/><Cell row=\"4\" col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('REMA_AT04')\" mask=\"#,###\"/><Cell row=\"4\" col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('REMA_AT05')\" mask=\"#,###\"/><Cell row=\"4\" col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('REMA_AT06')\" mask=\"#,###\"/><Cell row=\"4\" col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('REMA_AT07')\" mask=\"#,###\"/><Cell row=\"4\" col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('REMA_AT08')\" mask=\"#,###\"/><Cell row=\"4\" col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('REMA_AT09')\" mask=\"#,###\"/><Cell row=\"4\" col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('REMA_AT10')\" mask=\"#,###\"/><Cell row=\"4\" col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('REMA_AT11')\" mask=\"#,###\"/><Cell row=\"4\" col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum('REMA_AT12')\" mask=\"#,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "28", "71", "82", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_text("예산연도");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRBUDG_YEAR", "absolute", "109", "71", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Static("Static00", "absolute", "363", "71", "76", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "431", "71", "103", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchCombo");

            obj = new Static("Static0", "absolute", "28", "97", "82", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("코스트센터");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "685", "71", "76", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("승인구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRAPPR_YSNO", "absolute", "753", "71", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_autoselect("true");

            obj = new Edit("edtSHRCSTC_CODE", "absolute", "109", "97", "80", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCSTC_NAME", "absolute", "191", "97", "21", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCSTC_NAME", "absolute", "214", "97", "120", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "363", "97", "76", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("예산과목");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBDSB_CODE", "absolute", "431", "97", "80", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRBDSB_NAME", "absolute", "513", "97", "21", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBDSB_NAME", "absolute", "536", "97", "120", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_imemode("hangul");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("18");
            obj.set_text("부서별예산현황");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("19");
            obj.set_text("홈 > 예산관리 > 부서예산형황");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("20");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("22");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("23");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("24");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("25");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "573", "129", "80", "25", null, null, this);
            obj.set_taborder("26");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("27");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("28");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("29");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "120", "92", "102", "5", null, null, this);
            obj.set_taborder("30");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "120", "61", "38", "10", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "120", "118", "38", "10", null, null, this);
            obj.set_taborder("32");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "656", "61", "40", "67", null, null, this);
            obj.set_taborder("33");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "334", "61", "40", "67", null, null, this);
            obj.set_taborder("34");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "685", "97", "68", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "753", "97", "80", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "835", "97", "21", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "858", "97", "120", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("부서별예산현황");
            		p.set_scrollbars("none");

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
        this.addIncludeScript("BDMC0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("BDMC0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	BDMC0010 부서별예산현황
         * 
         * # Modification Information
         
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.27		안윤준		Initial Created.
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
        //include "script::lib_script_common.xjs";

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFFTF"; 
        this.sPACKAGENAME = "BDMC0010"; 
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
        	this.calSHRBUDG_YEAR.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("date"), 0, 8));

        	this.fnc_SetReadonly(this.imgHelpSHRDEPT_CODE, true);
        	this.fnc_SetReadonly(this.edtSHRDEPT_NAME, true);
        	this.edtSHRDEPT_CODE.set_value(application.GBL_DEPTCD);
        	this.edtSHRDEPT_NAME.set_value(application.GBL_DEPTNM);
        	
        	if (this.sUSERLAVEL == "1") {

        		this.fnc_SetReadonly(this.imgHelpSHRDEPT_CODE, false);
        		this.fnc_SetReadonly(this.edtSHRDEPT_NAME, false);
        		this.edtSHRDEPT_CODE.set_value("");
        		this.edtSHRDEPT_NAME.set_value("");
        	
        	} 
        	
        	this.grdTB_CPLDPT.setFocus();
        	
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
        this.fn_Search = function (obj,e) {
        	
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsTB_CPLDPT");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTB_CPLDPT=dsTB_CPLDPT";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTB_CPLDPT.setFocus();
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj,e) {

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj,e) {

        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj,e) {

        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e) {

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

        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("", this);
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
        		return this.fnc_SearchCheckPostAction("TMM072", "예산연도", this.calSHRBUDG_YEAR);
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "회계단위", this.cmbSHRACCT_UNIT);
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
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action="    + this.fnc_Quote(sKind); 
        		sReturnString += " BUDG_YEAR=" + this.fnc_Quote(this.fnc_SubStr(this.fnc_Trim(this.calSHRBUDG_YEAR.value), 0, 4));
        		sReturnString += " ACCT_UNIT=" + this.fnc_Quote(this.cmbSHRACCT_UNIT.value);
        		sReturnString += " APPR_YSNO=" + this.fnc_Quote(this.cmbSHRAPPR_YSNO.value);
        		sReturnString += " CSTC_CODE=" + this.fnc_Quote(this.edtSHRCSTC_CODE.value);
        		sReturnString += " BDSB_CODE=" + this.fnc_Quote(this.edtSHRBDSB_CODE.value);
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.edtSHRDEPT_CODE.value);
        		
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

        	if (sMethodName == "SEARCH00") 	{
        	
        		this.fnc_Information(this.stInformation, this.dsTB_CPLDPT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTB_CPLDPT.rowcount); 
        		
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRACCT_UNIT,dsSHRACCT_UNIT,0";
        			arrParam[1] = "COMBO,cmbSHRAPPR_YSNO,dsSHRAPPR_YSNO,0";
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

        	if ((obj.name == "imgHelpSHRCSTC_NAME") || (obj.name == "edtSHRCSTC_NAME")) {

        		if (this.fnc_Length(this.fnc_Trim(this.calSHRBUDG_YEAR.value)) < 1) {
        			return this.fnc_SearchCheckPostAction("TMM072", "예산연도", this.calSHRBUDG_YEAR);
        		}
        		
        		arrParam[0] = "BDM0006";
        		arrParam[1] = this.calSHRBUDG_YEAR.value + ",4,4,4";
        		arrParam[2] = this.fnc_Trim(this.edtSHRCSTC_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRCSTC_NAME";
        		arrParam[5] = "edtSHRCSTC_CODE,edtSHRCSTC_NAME";
        		arrParam[6] = "0,1";

        	} else if ((obj.name == "imgHelpSHRBDSB_NAME") || (obj.name == "edtSHRBDSB_NAME")) {

        		arrParam[0] = "BDM0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.edtSHRBDSB_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtSHRBDSB_NAME";
        		arrParam[5] = "edtSHRBDSB_CODE,edtSHRBDSB_NAME";
        		arrParam[6] = "0,1";
        		
        	} else if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {

                arrParam[0] = "FAM0001";                                
                arrParam[1] = "";                                      
                arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value); 
                arrParam[3] = "N";                                       
                arrParam[4] = "edtSHRDEPT_NAME";                         
                arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";         
                arrParam[6] = "0,1";          
                
        	} 
        	
        	if ( arrParam != '' || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*--------------------------+
         |  조회조건 변경시 처리  |
         +---------------------------*/
        this.fn_clearData = function (obj) {
        	this.dsTB_CPLDPT.clearData();
        	this.stInformation.set_text("");
        	
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
            this.grdTB_CPLDPT.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.calSHRBUDG_YEAR.addEventHandler("onspin", this.fn_clearData, this);
            this.calSHRBUDG_YEAR.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.calSHRBUDG_YEAR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_UNIT.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRAPPR_YSNO.addEventHandler("ontextchanged", this.fn_clearData, this);
            this.cmbSHRAPPR_YSNO.addEventHandler("onitemchanged", this.fn_clearData, this);
            this.cmbSHRAPPR_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCSTC_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCSTC_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRCSTC_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCSTC_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRBDSB_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRBDSB_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRBDSB_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRBDSB_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("BDMC0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
