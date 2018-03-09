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
                this.set_name("FSMB0060P01");
                this.set_titletext("자산분할등록");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1070,763);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFS_ASSPXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SPLT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NUMB\" size=\"17\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSF_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQU_NUMB\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_PRIC\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"UNDP_BALE\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ASAF_NUMB\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TOTL_SPLT\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SPDP_TSUM\" size=\"17\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RCGN_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"APPV_DATE\" size=\"14\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_UNIT\" type=\"STRING\" size=\"8\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFS_ASSPXD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SPLT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQN_NUMB\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"NEWX_DEPT\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"NEWX_DPNM\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SPLT_ASST\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"SPLT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SPLT_NUMB\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SPLT_PRIC\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SPLT_COST\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"UNDP_BALE\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DESC_REMK\" size=\"400\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_UNIT\" type=\"STRING\" size=\"4\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdFS_ASSPXD", "absolute", "15", "187", null, null, "15", "15", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsFS_ASSPXD");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("multirow");
            obj.set_taborder("17");
            obj.set_tabstop("false");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"200\" band=\"left\"/><Column size=\"90\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"257\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"분할자산명\"/><Cell col=\"1\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"신규부서코드\"/><Cell col=\"2\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"신규부서명\"/><Cell col=\"3\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"분할수량\"/><Cell col=\"4\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"분할금액\"/><Cell col=\"5\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"분할단가\"/><Cell col=\"6\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"충당금누계액\"/><Cell col=\"7\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"미상각잔액\"/><Cell col=\"8\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SPLT_NAME\" editlimit=\"100\" editimemode=\"native\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center middle;\" text=\"bind:NEWX_DEPT\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align: left;\" text=\"bind:NEWX_DPNM\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SPLT_NUMB\" editlimit=\"15\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SPLT_PRIC\" editlimit=\"15\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SPLT_COST\" editlimit=\"15\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DPCT_AMOT\" editlimit=\"15\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:UNDP_BALE\" editlimit=\"15\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"normal\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:DESC_REMK\" editlimit=\"100\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"합  계\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;SPLT_NUMB&quot;, 0)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;SPLT_PRIC&quot;, 0)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: right;\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;DPCT_AMOT&quot;, 0)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;UNDP_BALE&quot;, 0)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align: right;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "15", "35", null, "117", "15", null, this);
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskUNDP_BALE", "absolute", "896", "96", "130", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSPXM");
            obj.set_enable("false");
            obj.set_taborder("13");
            obj.set_mask("#,###");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "right");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDESC_REMK", "absolute", "651", "122", "375", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSPXM");
            obj.set_lengthunit("utf8");
            obj.set_imemode("native");
            obj.set_maxlength("100");
            obj.set_taborder("40");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSPLT_DATE", "absolute", "117", "44", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsFS_ASSPXM");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Edit("edtASCL_NAME", "absolute", "651", "70", "135", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSPXM");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_taborder("37");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCLSF_NAME", "absolute", "896", "70", "130", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSPXM");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_taborder("38");
            obj.set_cssclass("styFormItemText");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskACQS_DATE", "absolute", "117", "96", "100", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSPXM");
            obj.set_enable("false");
            obj.set_mask("####-##-##");
            obj.set_taborder("10");
            obj.set_type("string");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskACQU_PRIC", "absolute", "651", "96", "135", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSPXM");
            obj.set_enable("false");
            obj.set_taborder("39");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.set_mask("#,###");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpASST_NUMB", "absolute", "788", "44", "21", "21", null, null, this);
            obj.getSetter("image").set("URL('image::btnHelpPop.bmp')");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("36");
            obj.getSetter("tabstop").set("false");
            obj.getSetter("imagealign").set("left middle");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtASST_NAME", "absolute", "811", "44", "215", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSPXM");
            obj.set_lengthunit("asciii");
            obj.set_imemode("hangul");
            obj.set_maxlength("100");
            obj.set_taborder("4");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskACQU_NUMB", "absolute", "353", "96", "201", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSPXM");
            obj.set_enable("false");
            obj.set_taborder("11");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.set_mask("#,###");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskTOTL_SPLT", "absolute", "117", "122", "100", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSPXM");
            obj.set_enable("false");
            obj.set_taborder("14");
            obj.set_mask("#,###");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskASAF_NUMB", "absolute", "117", "70", "100", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSPXM");
            obj.set_taborder("5");
            obj.style.set_align("right");
            obj.set_enable("false");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSPDP_TSUM", "absolute", "353", "122", "201", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSPXM");
            obj.set_enable("false");
            obj.set_taborder("15");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.set_mask("#,###");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCURR_DEPT", "absolute", "353", "44", "58", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_taborder("1");
            obj.style.set_align("center");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCURR_NAME", "absolute", "435", "44", "119", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_maxlength("100");
            obj.set_taborder("2");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCURR_DEPT", "absolute", "412", "44", "21", "21", null, null, this);
            obj.getSetter("image").set("URL('image::btnHelpPop.bmp')");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("34");
            obj.getSetter("tabstop").set("false");
            obj.getSetter("imagealign").set("left middle");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_CODE", "absolute", "353", "70", "58", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSPXM");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_taborder("6");
            obj.style.set_align("center");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAME", "absolute", "412", "70", "142", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASSPXM");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_imemode("native");
            obj.set_maxlength("100");
            obj.set_taborder("7");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("title01", "absolute", "35", "44", "81", "21", null, null, this);
            obj.set_text("분할일자");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "35", "70", "81", "21", null, null, this);
            obj.set_text("분할후수량");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "35", "96", "81", "21", null, null, this);
            obj.set_text("취득일자");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "35", "122", "81", "21", null, null, this);
            obj.set_text("분할합계");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("30");
            this.addChild(obj.name, obj);

            obj = new Static("title00", "absolute", "246", "44", "102", "21", null, null, this);
            obj.set_text("자산조회부서");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "246", "70", "102", "21", null, null, this);
            obj.set_text("자산부서");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "246", "96", "102", "21", null, null, this);
            obj.set_text("취득수량");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("33");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "246", "122", "102", "21", null, null, this);
            obj.set_text("분할충당금합계");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Static("title02", "absolute", "583", "44", "71", "21", null, null, this);
            obj.set_text("자산번호");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "583", "70", "71", "21", null, null, this);
            obj.set_text("자산분류");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "583", "96", "71", "21", null, null, this);
            obj.set_text("취득금액");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "583", "122", "71", "21", null, null, this);
            obj.set_text("비고");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "815", "70", "81", "21", null, null, this);
            obj.set_text("품목분류");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "815", "96", "81", "21", null, null, this);
            obj.set_text("미상각잔액");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACCT_UNIT", "absolute", "756", "44", "29", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_autoselect("true");
            obj.set_enable("false");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtASST_NUMB", "absolute", "651", "44", "135", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_type("string");
            obj.set_mask("####-####-####");
            obj.set_autoselect("true");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd", "absolute", null, "162", "62", "21", "80", null, this);
            obj.set_taborder("44");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel", "absolute", null, "162", "62", "21", "15", null, this);
            obj.set_taborder("45");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0", "0", "15", "461", null, null, this);
            obj.set_taborder("46");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "27", "0", "307", "22", null, null, this);
            obj.set_taborder("47");
            obj.set_text("개발시 ==>즐겨찾기 버튼 없애주세요");
            obj.style.set_background("crimson");
            obj.style.set_color("#ffffffff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("47");
            obj.set_cssclass("btn_WF_Bookmark");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "1055", "0", "15", "461", null, null, this);
            obj.set_taborder("48");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "16", "62", "30", "63", null, null, this);
            obj.set_taborder("52");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "8", "510", "23", "15", null, this);
            obj.set_taborder("53");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "439", "748", "110", "15", null, null, this);
            obj.set_taborder("54");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "561", "31", "110", "4", null, null, this);
            obj.set_taborder("55");
            obj.set_text("h4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "14", "166", "262", "21", null, null, this);
            obj.set_taborder("56");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.getSetter("class").set("styFormSearchInfo");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "541", "0", "110", "8", null, null, this);
            obj.set_taborder("57");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1070, 763, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("자산분할등록");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("mskUNDP_BALE_value","mskUNDP_BALE","value","dsFS_ASSPXM","UNDP_BALE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDESC_REMK_value","edtDESC_REMK","value","dsFS_ASSPXM","DESC_REMK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("calSPLT_DATE_value","calSPLT_DATE","value","dsFS_ASSPXM","SPLT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtASCL_NAME_value","edtASCL_NAME","value","dsFS_ASSPXM","ASCL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCLSF_NAME_value","edtCLSF_NAME","value","dsFS_ASSPXM","CLSF_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskACQS_DATE_value","mskACQS_DATE","value","dsFS_ASSPXM","ACQS_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskACQU_PRIC_value","mskACQU_PRIC","value","dsFS_ASSPXM","ACQU_PRIC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtASST_NAME_value","edtASST_NAME","value","dsFS_ASSPXM","ASST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskACQU_NUMB_value","mskACQU_NUMB","value","dsFS_ASSPXM","ACQU_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskTOTL_SPLT_value","mskTOTL_SPLT","value","dsFS_ASSPXM","TOTL_SPLT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskASAF_NUMB_value","mskASAF_NUMB","value","dsFS_ASSPXM","ASAF_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskSPDP_TSUM_value","mskSPDP_TSUM","value","dsFS_ASSPXM","SPDP_TSUM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDEPT_CODE_value","edtDEPT_CODE","value","dsFS_ASSPXM","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtDEPT_NAME_value","edtDEPT_NAME","value","dsFS_ASSPXM","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edtACCT_UNIT","value","dsFS_ASSPXM","ACCT_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtASST_NUMB","value","dsFS_ASSPXM","ASST_NUMB");
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
        this.addIncludeScript("FSMB0060P01.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FSMB0060P01.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FSMB0060P01 자산분할등록
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.25		신민규		Initial Created.
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
        this.sBUTTONLIST 	= "TFFFTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME 	= "FSMB0060P01"; //해당 Form에서 사용 할 Package 명
        this.sFORMMODE		= this.parent.sFORMMODE;	//조회 Parameter
        this.sASST_NUMB		= this.parent.sASST_NUMB;	//조회 Parameter
        this.sSPLT_DATE		= this.parent.sSPLT_DATE;	//조회 Parameter

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
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

        	trace("sFORMMODE: " + this.sFORMMODE);

        	if (this.sFORMMODE == "N") {
        		this.sBUTTONLIST = 'TFFFFFTF';
        	}

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);

        	// 수정모드이면 기본항목 설정 후 조회처리
        	if (this.sFORMMODE == "U") {
        		this.calSPLT_DATE.set_value(this.sSPLT_DATE); //분할일자
        		this.edtASST_NUMB.set_value(this.sASST_NUMB); //자산번호
        		this.fn_Search(); //자동조회
        		// 신규모드
        	} else if (this.sFORMMODE == "I") {

        		var iRow = this.dsFS_ASSPXM.addRow();
        		this.dsFS_ASSPXM.setColumn(iRow, "SPLT_DATE", this.fnc_GetServerDateTime("DATE")); //분할일
        		this.dsFS_ASSPXM.setColumn(iRow, "ASAF_NUMB", 1); //분할후수량
        		this.dsFS_ASSPXM.setColumn(iRow, "TOTL_SPLT", 0); //분할합계
        		this.dsFS_ASSPXM.setColumn(iRow, "SPDP_TSUM", 0); //분할충당금합계
        		this.dsFS_ASSPXM.setColumn(iRow, "RCGN_YSNO", "0"); //승인여부
        		this.dsFS_ASSPXM.applyChange();
        		this.calSPLT_DATE.setFocus();
        		// 뷰모드
        	} else {
        		this.calSPLT_DATE.set_value(this.sSPLT_DATE); //분할일자
        		this.edtASST_NUMB.set_value(this.sASST_NUMB); //자산번호
        		this.fn_ComponectEnable(false);
        		this.mskASAF_NUMB.set_enable(false);
        		this.edtDESC_REMK.set_enable(false);
        		
        		this.grdFS_ASSPXD.setCellProperty("body", 0, "edittype", "none");
        		this.grdFS_ASSPXD.setCellProperty("body", 1, "edittype", "none");
        		this.grdFS_ASSPXD.setCellProperty("body", 2, "edittype", "none");
        		this.grdFS_ASSPXD.setCellProperty("body", 6, "edittype", "none");
        		this.fn_Search(); //자동조회
        	}
        }

        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.fnc_PopupClose(false);
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	/****************************************************
        	 조회 처리는 수정 모드로 들어 올 때 말고는 없음으로
        	 굳이 초기화 및 전처리가 필요 없음
        	 *****************************************************/
        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsFS_ASSPXM=dsFS_ASSPXM ";
        	    sOutDataSet += "dsFS_ASSPXD=dsFS_ASSPXD"; //조회 후 돌려 받을 DataSet 명칭
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_ASSPXD.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	if (!this.fn_InputItemCheck()) return;
        	// 입력 전 처리
        	var iRow = this.dsFS_ASSPXD.addRow();

        	this.dsFS_ASSPXD.setColumn(iRow, 'SPLT_NAME', this.fnc_Trim(this.edtASST_NAME.value)); //분할자산명
        	this.dsFS_ASSPXD.setColumn(iRow, 'NEWX_DEPT', this.fnc_Trim(this.edtDEPT_CODE.value)); //신규부서코드
        	this.dsFS_ASSPXD.setColumn(iRow, 'NEWX_DPNM', this.fnc_Trim(this.edtDEPT_NAME.value)); //신규부서명
        	this.dsFS_ASSPXD.setColumn(iRow, 'SPLT_DATE', this.fnc_Trim(this.dsFS_ASSPXM.getColumn(0, "SPLT_DATE"))); //분할일
        	this.dsFS_ASSPXD.setColumn(iRow, 'ASST_NUMB', this.fnc_Trim(this.dsFS_ASSPXM.getColumn(0, "ASST_NUMB"))); //자산번호
        	this.dsFS_ASSPXD.setColumn(iRow, 'SPLT_NUMB', 0); //분할수량
        	this.dsFS_ASSPXD.setColumn(iRow, 'SPLT_COST', 0); //분할단가
        	this.dsFS_ASSPXD.setColumn(iRow, 'SPLT_PRIC', 0); //분할금액
        	this.dsFS_ASSPXD.setColumn(iRow, 'DPCT_AMOT', 0); //충당금누계액
        	this.dsFS_ASSPXD.setColumn(iRow, 'UNDP_BALE', 0); //미상각잔액

        	if (this.dsFS_ASSPXD.getRowCount() > 0) {
        		this.fn_ComponectEnable(false);
        	}

        	this.grdFS_ASSPXD.setFocus();

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) {
        		this.dsFS_ASSPXD.deleteRow(this.dsFS_ASSPXD.rowposition);
        	}
        	// 삭제 처리

        	this.dsFS_ASSPXM.setColumn(0, "TOTL_SPLT", this.dsFS_ASSPXD.getSum("SPLT_PRIC")); //합계 구하기SPLT_NUMB
        	this.dsFS_ASSPXM.setColumn(0, "ASAF_NUMB", this.dsFS_ASSPXD.getSum("SPLT_NUMB")); //분할수량 합계
        	this.dsFS_ASSPXM.setColumn(0, "SPDP_TSUM", this.dsFS_ASSPXD.getSum("DPCT_AMOT")); //분할충당금 합계

        	if (this.dsFS_ASSPXD.getRowCount() > 0) {
        		// Head Key Field 처리
        		this.fn_ComponectEnable(false);
        	} else {
        		this.fn_ComponectEnable(true);
        	}

        	this.grdFS_ASSPXD.setFocus();
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsFS_ASSPXM,dsFS_ASSPXD");

        	this.edtCURR_DEPT.set_value("");
        	this.edtCURR_NAME.set_value("");

        	// Head Key Field 처리
        	if (this.dsFS_ASSPXD.getRowCount() > 0) {
        		this.fn_ComponectEnable(false);
        	} else {
        		this.fn_ComponectEnable(true);
        	}

        	this.grdFS_ASSPXD.setFocus();
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsFS_ASSPXM=dsFS_ASSPXM:U ";
        		sInDataSet += "dsFS_ASSPXD=dsFS_ASSPXD:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this);
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
        	var sMessage = this.fnc_FormUnloadCheck("dsFS_ASSPXM,dsFS_ASSPXD",this);
        	
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function(obj,e) {
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
        /*----------------------+
         |  신규 입력 전 처리 !  |
         +-----------------------*/
        this.fn_InputItemCheck = function () {
        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSPXM.getColumn(0, "SPLT_DATE"))) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "분할일자", this.dsFS_ASSPXM, 0, this.calSPLT_DATE, '');
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSPXM.getColumn(0, "ASST_NUMB"))) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "자산번호", this.dsFS_ASSPXM, 0, this.edtASST_NAME, '');
        	}

        	var iSPLT_NUMB = nexacro.toNumber(this.dsFS_ASSPXD.getSum("SPLT_NUMB"));
        	var iACQU_NUMB = nexacro.toNumber(this.dsFS_ASSPXM.getColumn(0, "ACQU_NUMB"));
        	if (iSPLT_NUMB >= iACQU_NUMB) 
        	{
        		this.fnc_Message("TMM125", "분할자산수량은 취득수량을 초과 할 수 없습니다.");
        		return false;
        	}

        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsFS_ASSPXD.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return;
        	}

        	// 선택된 Row Count
        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdFS_ASSPXD);

        	if (iSelectRowCount > 1) {
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	} else {
        		var sQuestionText = this.dsFS_ASSPXD.getColumn(this.dsFS_ASSPXD.rowposition, "SPLT_NAME");
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsFS_ASSPXM,dsFS_ASSPXD")) {
        		this.fnc_Message("TMM003");
        		this.calSPLT_DATE.setFocus();
        		return false;
        	}

        	if (!this.fnc_IsDate(this.dsFS_ASSPXM.getColumn(0, "SPLT_DATE"))) {
        		return this.fnc_CheckPostAction("TMM072", "분할일자", this.dsFS_ASSPXM, 0, this.calSPLT_DATE, '');
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSPXM.getColumn(0, "ASST_NUMB"))) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "자산번호", this.dsFS_ASSPXM, 0, this.edtASST_NAME, '');
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSPXM.getColumn(0, "ASAF_NUMB"))) < 1 || nexacro.toNumber(this.dsFS_ASSPXM.getColumn(0, "ASAF_NUMB")) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "분할후수량", this.dsFS_ASSPXM, 0, this.mskASAF_NUMB, '');
        	}

        	if (nexacro.toNumber(this.dsFS_ASSPXM.getColumn(0, "ASAF_NUMB")) > nexacro.toNumber(this.dsFS_ASSPXM.getColumn(0, "ACQU_NUMB"))) {
        		return this.fnc_CheckPostAction("TMM042", "분할후수량,취득수량", this.dsFS_ASSPXM, 0, this.mskASAF_NUMB, '');
        	}

        	if (this.dsFS_ASSPXD.getRowCount() < 1) {
        		this.fnc_Message("TMM125", "그리드에 최소 1건 이상의 분할 내역을 입력하세요!");
        		return false;
        	}

        	// 201410.추가
        	// 원 취득수량은 분할후수량+(그리드)총분할수량 넘으면 안된다.
        	var iASAF_NUMB = nexacro.toNumber(this.dsFS_ASSPXM.getColumn(0, "ASAF_NUMB"));
        	var iACQU_NUMB = nexacro.toNumber(this.dsFS_ASSPXM.getColumn(0, "ACQU_NUMB"));
        	var iSPLT_NUMB = nexacro.toNumber(this.dsFS_ASSPXD.getSum("SPLT_NUMB"));

        	if (iASAF_NUMB + iSPLT_NUMB > (iACQU_NUMB + 1)) {
        		return this.fnc_CheckPostAction("TMM125", "분할수량을 확인하세요!", this.dsFS_ASSPXD, 0, this.grdFS_ASSPXD, 'SPLT_NUMB');
        	}

        
        	// 디테일 입력체크
        	for (var i = 0; i < this.dsFS_ASSPXD.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsFS_ASSPXD.getRowType(i) == Dataset.ROWTYPE_NORMAL)) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASSPXD.getColumn(i, 'SPLT_NAME'))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "분할자산명", this.dsFS_ASSPXD, i, this.grdFS_ASSPXD, 'SPLT_NAME');
        		}

        		if (this.fnc_Trim(this.dsFS_ASSPXD.getColumn(i, 'SPLT_NUMB')) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "분할수량", this.dsFS_ASSPXD, i, this.grdFS_ASSPXD, 'SPLT_NUMB');
        		}

        		if (this.fnc_Trim(this.dsFS_ASSPXD.getColumn(i, 'SPLT_PRIC')) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "분할금액", this.dsFS_ASSPXD, i, this.grdFS_ASSPXD, 'SPLT_PRIC');
        		}
        	}

        	// 디테일의 분할금액과 미상각잔액 비교처리 및 분할합계 삽입처리
        	if (nexacro.toNumber(this.dsFS_ASSPXD.getSum("SPLT_PRIC")) > nexacro.toNumber(this.dsFS_ASSPXM.getColumn(0, "ACQU_PRIC"))) {
        		this.fnc_Message("TMM042", "분할합계금액", "취득금액");
        		return false;
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
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " SPLT_DATE=" + this.fnc_Quote(this.fnc_Trim(this.sSPLT_DATE)); //분할일
        		sReturnString += " ASST_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.sASST_NUMB)); //자산번호

        		// 저장 Argument 생성
        	} else if (sKind == 'SAVE00') {
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " sFORMMODE=" + this.fnc_Quote(this.sFORMMODE);
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

        	if (sMethodName == 'SEARCH00') {
        		this.fnc_Information(this.stInformation, this.dsFS_ASSPXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fn_ComponectEnable(false);
        	} else if (sMethodName == 'SAVE00') {
        		this.fnc_Message("TMM103");
        		this.fnc_PopupClose(true);
        	}
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /*------------------------+
         |  Componect Enable 처리  |
         +-------------------------*/
        this.fn_ComponectEnable = function (bEanble) {
        	this.calSPLT_DATE.set_enable(bEanble); //분할일자
        	this.edtASST_NAME.set_enable(bEanble); //자산명
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();

            if ((obj.name == "imgHelpASST_NUMB") || (obj.name == "edtASST_NAME")) {
            
        		if (this.edtASST_NAME.enable == false) return;
            
                arrParam[0] = "FSM0013";                                  //Popup ID
                arrParam[1] = this.fnc_Trim(this.edtCURR_DEPT.value);     // 자료 제한해주도록 기능 보완                                           //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtASST_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtASST_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtDEPT_CODE,edtDEPT_NAME,edtASST_NUMB,edtASST_NAME,mskACQU_NUMB,edtASCL_NAME,edtCLSF_NAME,mskACQS_DATE,mskACQU_PRIC,mskUNDP_BALE,edtACCT_UNIT";          //초기화 및 결과 Mapping Column
                arrParam[6] = "8,9,0,1,16,5,7,12,17,15,19";                                      //Mapping Column Index
                
                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출
                
            } else if ((obj.name == "imgHelpCURR_DEPT") || (obj.name == "edtCURR_NAME")) {
            
        		if (this.edtCURR_NAME.enable == false) return;
            
                arrParam[0] = "FAM0001";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtCURR_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtCURR_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtCURR_DEPT,edtCURR_NAME";          //초기화 및 결과 Mapping Column
                arrParam[6] = "0,1";                                      //Mapping Column Index
                
                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출    

        
        	} else if (obj.name == "grdFS_ASSPXD") {
        		
        		//if (obj.getCellProperty("Body", obj.currentcell, "text") == "bind:NEWX_DPNM") { //GRID내 Help Popup 사용 버그 수정
        		if (this.fnc_getGridHelpColName(obj, sFromDs) == "NEWX_DPNM") {

        			arrParam[0] = "FAM0001"; 							//Popup ID
        			arrParam[1] = ""; 									//조건구분에 대응되는 조회조건 값
        			arrParam[2] = "NEWX_DPNM"; 							//콤보조건구분에 대응되는 컬럼
        			arrParam[3] = "N"; 									//사용 여부 구분 포함 여부 값
        			arrParam[4] = "grdFS_ASSPXD"; 						//현재 포커스 Componect명
        			arrParam[5] = "NEWX_DEPT,NEWX_DPNM"; 		//초기화 및 결과 Mapping Column
        			arrParam[6] = "0,1"; 							//Mapping Column Index
        			arrParam[7] = sFromDs; 								//Grid에서 호출인지 Dataset에서 호출인지 여부
        			arrParam[8] = sOldValue; 							//취소 시 변경 이전의 값
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        			
        		}
        	}

        }

        /*-----------------------------------------------------------------------------------+
         |  분할수량 및 분할금액 입력으로 인한 분할단가 및 미상각잔액 및 충당금누계액 구하기  |
         +------------------------------------------------------------------------------------*/
        this.fn_FieldCalculation = function (obj,e) {
        	// Popup 호출을 위한 처리
        	if (e.columnid == "NEWX_DPNM") {
        		this.fn_HelpDialoge(this.grdFS_ASSPXD, 'YES', e.oldvalue);
        		return;
        	}

        	var iSPLT_nRow = nexacro.toNumber(this.dsFS_ASSPXD.getColumn(e.row, "SPLT_NUMB"));
        	var iSPLT_NUMB = nexacro.toNumber(this.dsFS_ASSPXD.getSum("SPLT_NUMB"));
        	var iACQU_NUMB = nexacro.toNumber(this.dsFS_ASSPXM.getColumn(0, "ACQU_NUMB"));
        	var iACQU_PRIC = nexacro.toNumber(this.dsFS_ASSPXM.getColumn(0, "ACQU_PRIC"));
        	var iASAF_NUMB = 0;
        	trace("----iSPLT_NUMB: " + iSPLT_NUMB);
        	trace("----iACQU_NUMB: " + iACQU_NUMB);

        	// 분할 수량 변경 시 분할 단가 계산 처리
        	if (e.columnid == "SPLT_NUMB") {
        		obj.set_enableevent(false);
        		obj.setColumn(e.row, "SPLT_COST", iCost);
        		obj.set_enableevent(true);

        		// Header분할수 수량 자동 계산 입력
        		if (iACQU_NUMB - iSPLT_NUMB <= 0) {
        			iASAF_NUMB = 1;
        		} else {
        			iASAF_NUMB = iACQU_NUMB - iSPLT_NUMB; //취득수량 - 총 분할수량
        		}
        		trace("----iASAF_NUMB: " + iASAF_NUMB);
        		this.dsFS_ASSPXM.setColumn(0, 'ASAF_NUMB', iASAF_NUMB); //분할후수량

        		// 분할수량에 대한 분할금액 자동계산
        		this.iDiv = nexacro.round(iSPLT_nRow / iACQU_NUMB, 2);

        		trace("----iDiv: " + this.iDiv + " Total: " + nexacro.round(iACQU_PRIC * this.iDiv, 0));
        		obj.setColumn(e.row, 'SPLT_PRIC', nexacro.round(iACQU_PRIC * this.iDiv, 0));
        		// return;
        	}

        	var iTotal = nexacro.toNumber(obj.getColumn(e.row, "SPLT_PRIC"));
        	var iNumber = nexacro.toNumber(obj.getColumn(e.row, "SPLT_NUMB"));
        	var iCost = iTotal;
        	if (iNumber > 0) {
        		iCost = nexacro.round(iTotal / iNumber, 0);
        	}
        	// 수량이 0이 아니면 단가 나누기
        	obj.set_enableevent(false); //Dataset Change Event 제거

        	var iAcquPricMo = nexacro.toNumber(this.dsFS_ASSPXM.getColumn(0, "ACQU_PRIC"));
        	var iUndpBaleMo = nexacro.toNumber(this.dsFS_ASSPXM.getColumn(0, "UNDP_BALE"));
        	var iAcquPricJa = nexacro.toNumber(obj.getColumn(e.row, "SPLT_PRIC"));
        	var iUndpBaleJa = iUndpBaleMo * (iAcquPricJa / iAcquPricMo);
        	obj.setColumn(e.row, 'SPLT_COST', iCost); //분할단가
        	obj.setColumn(e.row, 'UNDP_BALE', Math.floor(iUndpBaleJa)); //미상각잔액
        	obj.setColumn(e.row, 'DPCT_AMOT', iAcquPricJa - Math.floor(iUndpBaleJa)); //충당금 누계액

        	this.dsFS_ASSPXM.setColumn(0, "TOTL_SPLT", this.dsFS_ASSPXD.getSum("SPLT_PRIC")); //분할합계 구하기
        	this.dsFS_ASSPXM.setColumn(0, "SPDP_TSUM", this.dsFS_ASSPXD.getSum("DPCT_AMOT")); //분할충당금 합계 합계 구하기
        	obj.set_enableevent(true); //Dataset Change Event 제거

        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsFS_ASSPXD.addEventHandler("oncolumnchanged", this.fn_FieldCalculation, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.grdFS_ASSPXD.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.mskUNDP_BALE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSPLT_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskACQS_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskACQU_PRIC.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpASST_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtASST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.mskACQU_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskTOTL_SPLT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskASAF_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskSPDP_TSUM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCURR_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpCURR_DEPT.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtASST_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnAdd.addEventHandler("onclick", this.fn_Input, this);
            this.btnDel.addEventHandler("onclick", this.fn_Delete, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FSMB0060P01.xfdl");
        this.loadPreloadList();
       
    };
}
)();
