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
                this.set_name("FSMC0030");
                this.set_titletext("자산처분명세서");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFS_ASCHXM", this);
            obj.set_keystring("ASCH_GUBN,ASCL_NAME,LARG_NAME");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ASCH_GUBN\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"LARG_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CHNG_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQU_ENDX\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_ENDX\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"UNDP_BALE\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DSPS_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DSPS_GILS\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SLIP_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ASST_GUBN</Col><Col id=\"DSNAME\">dsSHRASST_GUBN</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">ASCH_GUBN</Col><Col id=\"DSNAME\">dsSHRASCH_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "159", "262", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("13");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFS_ASCHXM", "absolute", "8", "180", null, null, "25", "15", this);
            obj.set_autoenter("select");
            obj.set_binddataset("dsFS_ASCHXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_tabstop("false");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj.set_taborder("10");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"70\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"170\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"102\"/><Column size=\"102\"/><Column size=\"102\"/><Column size=\"102\"/><Column size=\"102\"/><Column size=\"120\"/><Column size=\"232\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"변동구분\"/><Cell col=\"1\" displaytype=\"text\" text=\"자산분류\"/><Cell col=\"2\" displaytype=\"text\" text=\"품목(대분류)\"/><Cell col=\"3\" displaytype=\"text\" text=\"자산번호\"/><Cell col=\"4\" displaytype=\"text\" text=\"자산명\"/><Cell col=\"5\" displaytype=\"text\" text=\"부서\"/><Cell col=\"6\" displaytype=\"text\" text=\"변동일자\"/><Cell col=\"7\" displaytype=\"text\" text=\"취득가&#13;&#10;전월말잔액\"/><Cell col=\"8\" displaytype=\"text\" text=\"상각누계&#13;&#10;전월말잔액\"/><Cell col=\"9\" displaytype=\"text\" text=\"미상각&#13;&#10;전월말잔액\"/><Cell col=\"10\" displaytype=\"text\" text=\"처분가액\"/><Cell col=\"11\" displaytype=\"text\" text=\"처분손익\"/><Cell col=\"12\" displaytype=\"text\" text=\"전표번호\"/><Cell col=\"13\" displaytype=\"text\" text=\"적요\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, 'default', 2, 'default',3,'#e6e6e6ff'));\" text=\"bind:ASCH_GUBN\" suppress=\"1\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASCL_NAME\" suppress=\"2\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:LARG_NAME\" subsumtext=\"expr:comp.parent.fnc_Decode(dataset.getRowLevel(currow), 2, dataset.getColumn(currow - 2, 'ASCL_NAME') + ' 소계 ')\" suppress=\"3\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:center;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASST_NUMB\" subsumtext=\"expr:comp.parent.fnc_Decode(dataset.getRowLevel(currow), 1, dataset.getColumn(currow - 1, 'LARG_NAME') + ' 소계 ')\" mask=\"expr:ASST_NUMB.toString().length == 0 ? &quot;&quot; : &quot;####-####-####&quot;\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:ASST_NAME\" subsumtext=\" \"/><Cell col=\"5\" displaytype=\"text\" style=\"background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:DEPT_NAME\" subsumtext=\" \"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" style=\"align: center;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CHNG_DATE\" subsumtext=\" \" mask=\"expr:CHNG_DATE.toString().length == 0 ? &quot;&quot; : &quot;####-##-##&quot;\" calendardisplaynulltype=\"default\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQU_ENDX\"/><Cell col=\"8\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DPCT_ENDX\"/><Cell col=\"9\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:UNDP_BALE\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DSPS_AMOT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align: right;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DSPS_GILS\"/><Cell col=\"12\" displaytype=\"text\" edittype=\"none\" style=\"align:center;background:EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SLIP_NUMB\" subsumtext=\" \" mask=\"expr:SLIP_NUMB.toString().length == 0 ? &quot;&quot; : &quot;##-########-####&quot;\"/><Cell col=\"13\" displaytype=\"text\" style=\"background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:DESC_REMK\" subsumtext=\" \"/></Band><Band id=\"summary\"><Cell colspan=\"7\" displaytype=\"text\" style=\"align: center;\" text=\"합    계\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;ACQU_ENDX&quot;, 0)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;DPCT_ENDX&quot;, 0)\"/><Cell col=\"9\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;UNDP_BALE&quot;, 0)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;DSPS_AMOT&quot;, 0)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;DSPS_GILS&quot;, 0)\"/><Cell col=\"12\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"13\" displaytype=\"text\" style=\"align: left;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "95", "25", null, this);
            obj.set_taborder("17");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRCHNG_DAT1", "absolute", "325", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static27", "absolute", "430", "71", "14", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRCHNG_DAT2", "absolute", "446", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Combo("cmbSHRASCH_GUBN", "absolute", "644", "71", "130", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_cssclass("styFormSearchItem");
            obj.set_index("-1");

            obj = new Edit("edtSHRASCL_CODE", "absolute", "103", "97", "108", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRASCL_NAME", "absolute", "236", "97", "310", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "103", "123", "108", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "236", "123", "310", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCLSF_CODE", "absolute", "644", "97", "107", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCLSF_NAME", "absolute", "776", "97", "210", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRASST_GUBN", "absolute", "103", "71", "131", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("title01", "absolute", "28", "71", "91", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("고정/부외");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "28", "97", "91", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("자산분류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "255", "71", "84", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("변동일자");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "575", "71", "84", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("변동구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "575", "97", "84", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("품목분류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "28", "123", "91", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRASCL_CODE", "absolute", "213", "97", "22", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "213", "123", "22", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCLSF_CODE", "absolute", "753", "97", "22", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("sytHelpPopup");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("28");
            obj.set_text("홈 > 자산관리 > 자산처분명세서");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("29");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("30");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("31");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("33");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("34");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("38");
            obj.set_text("자산처분명세서");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("39");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "640", "56", "128", "4", null, null, this);
            obj.set_taborder("40");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "9", "70", "30", "67", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "431", "144", "38", "10", null, null, this);
            obj.set_taborder("42");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "431", "118", "102", "5", null, null, this);
            obj.set_taborder("43");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "431", "92", "102", "5", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "431", "61", "38", "10", null, null, this);
            obj.set_taborder("45");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("46");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "8", "174", "216", "6", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "573", "155", "80", "25", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("자산처분명세서");
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
        this.addIncludeScript("FSMC0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FSMC0030.xfdl", function() {
        /***************************************************************************************************
         * # Program:	FSMC0030 자산처분명세서
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.26		양현덕		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                      *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                       *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망    *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                 *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /**************************
         *  공통 Script Include  *
         *************************/
        //include "script::lib_script_common.xjs"

        /************************
         *  화면 변수 선언부  *
         ************************/
        this.sBUTTONLIST  = "TTFFFFTF"; //종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "FSMC0030";

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
         *                                         공통 Event 처리 부분                                 *
         **************************************************************************************************/
         /*--------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
         this.fn_FormLoadSetting = function (obj,e) {
        	
        	//전표 MASK
        	this.fnc_FormatSlipNumber(this.grdFS_ASCHXM, "SLIP_NUMB");

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	
        	var sDate = this.fnc_GetServerDateTime("DATE");
        	
        	this.calSHRCHNG_DAT1.set_value(this.fnc_Trim(this.fnc_SubStr(sDate,0, 4)) + "0101");
        	this.calSHRCHNG_DAT2.set_value(sDate);
        	this.cmbSHRASST_GUBN.setFocus();

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
        	this.fnc_DatasetClear("dsFS_ASCHXM"); 
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsFS_ASCHXM=dsFS_ASCHXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_ASCHXM.setFocus();

        }

        /*--------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Input = function (obj) {
        	//기능없음
        }

        /*--------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Delete = function (obj) {
        	//기능없음
        }
        	
        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj) {
        	//기능없음
        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {
        	//기능없음
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
        	//기능없음
        }

        /*---------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {
        	
        	if(e.fromobject instanceof Div) return;
        	
        	var sMessage = this.fnc_FormUnloadCheck("dsFS_ASCHXM", this);
        	
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj, e);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)    |
         +-----------------------------------*/
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
         /*-------------------------+
         |  조회 필수 조건 체크!  |
         +--------------------------*/
        this.fn_SearchItemCheck = function () {
        	
        	if (this.fnc_DatasetChangeCheck("dsFS_ASCHXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;	
        	}
        	
        	if (this.fnc_Trim(this.cmbSHRASST_GUBN.value) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "고정/부외", this.cmbSHRASST_GUBN);
        	}
        	
        	if (this.fnc_Trim(this.calSHRCHNG_DAT1.value) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "변동일자(시작일)", this.calSHRCHNG_DAT1);
        	}
        	
        	if (this.fnc_Trim(this.calSHRCHNG_DAT2.value) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "변동일자(종료일)", this.calSHRCHNG_DAT2);
        	}
        	
        	if (this.fnc_Trim(this.calSHRCHNG_DAT1.value) > this.fnc_Trim(this.calSHRCHNG_DAT2.value)) {
        		return this.fnc_SearchCheckPostAction("TMM022", "변동시작일,변동종료일", this.calSHRCHNG_DAT2);
        	}

        	return true;

        }

        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {
        	
        	var sReturnString;

        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " ASST_GUBN=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRASST_GUBN.value)); //고정/부외
        		sReturnString += " CHNG_DAT1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRCHNG_DAT1.value)); //변동일자1
        		sReturnString += " CHNG_DAT2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRCHNG_DAT2.value)); //변동일자2
        		sReturnString += " ASCH_GUBN=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRASCH_GUBN.value)); //변동구분
        		sReturnString += " ASCL_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRASCL_CODE.value)); //자산분류
        		sReturnString += " CLSF_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCLSF_CODE.value)); //품목분류
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); //부서
        		
        	}

        	return sReturnString;
        	
        }

        /*--------------------+
         |  삭제 여부 체크! |
         +--------------------*/
        this.fn_DeleteCheck = function (){
        	//기능없음
        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function (){
        	//기능없음
        }

        /*---------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +---------------------------------------*/
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
        	
        	if (sMethodName == "SEARCH00") {
        		
        		this.fnc_Information(this.stInformation, this.dsFS_ASCHXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR"); //조회 결과 Display
        		this.fnc_Message("TMM018", this.dsFS_ASCHXM.rowcount);
        	
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		
        		arrParam[0]  = "COMBO,cmbSHRASST_GUBN,dsSHRASST_GUBN,0"; //고정/부외
        		arrParam[1]  = "COMBO,cmbSHRASCH_GUBN,dsSHRASCH_GUBN,0"; //변동구분		

        		var sFilterRequirement = "(REF2_FILD == 'DSPS' && REF6_FILD != 'X')|| COMD_CDNM == '전체'";

        		this.dsSHRASCH_GUBN.filter(sFilterRequirement);
        		
        		this.fnc_CommonCodeInnerBind(arrParam);		
        		
        	}

        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();

            if ((obj.name == "imgHelpSHRASCL_CODE") || (obj.name == "edtSHRASCL_NAME")) {
            
                arrParam[0] = "FSM0002";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRASCL_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRASCL_NAME";
                arrParam[5] = "edtSHRASCL_CODE,edtSHRASCL_NAME";
                arrParam[6] = "0,1";
                    
                this.fnc_HelpDialogeAction(this, obj, arrParam); 
                
            } else if ((obj.name == "imgHelpSHRCLSF_CODE") || (obj.name == "edtSHRCLSF_NAME")) {
            
                arrParam[0] = "FSM0001";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRCLSF_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRCLSF_NAME";
                arrParam[5] = "edtSHRCLSF_CODE,edtSHRCLSF_NAME";
                arrParam[6] = "10,0";
                
                this.fnc_HelpDialogeAction(this, obj, arrParam);
                
            } else if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {
            
                arrParam[0] = "FAM0001";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRDEPT_NAME";
                arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
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
        /*-------------------+
         |  전표조회 팝업  |
         +-------------------*/
         /*
        this.fn_OpenSlip = function (obj:Grid, e:nexacro.GridClickEventInfo) {
        	
        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASCHXM.getColumn(e.row, "SLIP_NUMB"))) < 1) return;
        	
        	if (this.fnc_GridColumnIndex(this.grdFS_ASCHXM, "SLIP_NUMB") == e.cell) {
        		
        		var sSLIP_NUMB = this.fnc_Trim(this.dsFS_ASCHXM.getColumn(e.row, "SLIP_NUMB"));
        		this.fnc_PopSlipForm(sSLIP_NUMB, "SHR", this.sUSERLAVEL);
        		
        	}
        	
        }
        */

        this.grdFS_ASCHXM_oncelldblclick = function(obj,e) {

        	var columnName = this.fnc_getColId(obj, e.cell);
        	
        	
            
        	if (columnName == "SLIP_NUMB") {
        	    
        	    var sSlipNumb = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "SLIP_NUMB");
        	    var sSlipLine = this.dsFS_ASCHXM.getColumn(this.dsFS_ASCHXM.rowposition, "SLIP_LINE");
        	    if(this.fnc_Length(this.fnc_Trim(sSlipNumb)) > 0 ) {
        			this.fnc_ViewSlipForm(sSlipNumb, "SHR", this.sUSERLAVEL, "", sSlipLine); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
        		}	
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdFS_ASCHXM.addEventHandler("oncelldblclick", this.grdFS_ASCHXM_oncelldblclick, this);
            this.calSHRCHNG_DAT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRCHNG_DAT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRASCH_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRASCL_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRASCL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRASCL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCLSF_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCLSF_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCLSF_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRASST_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRASCL_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRCLSF_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FSMC0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
