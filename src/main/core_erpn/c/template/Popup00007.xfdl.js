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
                this.set_name("Popup00007");
                this.set_titletext("[예외]공통버튼사용한 팝업2");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1070,763);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
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
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"200\" band=\"left\"/><Column size=\"90\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"257\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"분할자산명\"/><Cell col=\"1\" displaytype=\"text\" text=\"신규부서코드\"/><Cell col=\"2\" displaytype=\"text\" text=\"신규부서명\"/><Cell col=\"3\" displaytype=\"text\" text=\"분할수량\"/><Cell col=\"4\" displaytype=\"text\" text=\"분할금액\"/><Cell col=\"5\" displaytype=\"text\" text=\"분할단가\"/><Cell col=\"6\" displaytype=\"text\" text=\"충당금누계액\"/><Cell col=\"7\" displaytype=\"text\" text=\"미상각잔액\"/><Cell col=\"8\" displaytype=\"text\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SPLT_NAME\" editlimit=\"100\" editimemode=\"native\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center middle;\" text=\"bind:NEWX_DEPT\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align: left;\" text=\"bind:NEWX_DPNM\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SPLT_NUMB\" editlimit=\"15\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SPLT_PRIC\" editlimit=\"15\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SPLT_COST\" editlimit=\"15\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DPCT_AMOT\" editlimit=\"15\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:UNDP_BALE\" editlimit=\"15\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"normal\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:DESC_REMK\" editlimit=\"100\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"합  계\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;SPLT_NUMB&quot;, 0)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;SPLT_PRIC&quot;, 0)\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: right;\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;DPCT_AMOT&quot;, 0)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;UNDP_BALE&quot;, 0)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align: right;\"/></Band></Format></Formats>");
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
            		p.set_titletext("[예외]공통버튼사용한 팝업2");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
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

        };

        this.loadIncludeScript("Popup00007.xfdl");
        this.loadPreloadList();
       
    };
}
)();
