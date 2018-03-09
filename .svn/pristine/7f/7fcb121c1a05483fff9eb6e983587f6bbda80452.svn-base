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
                this.set_name("FSMB0060");
                this.set_titletext("자산분할관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFS_ASSPXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SPLT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ASCL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSF_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ACQU_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_PRIC\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"UNDP_BALE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ASAF_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TOTL_SPLT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RCGN_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"APPV_DATE\" size=\"14\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_EMPL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"APPV_EMNM\" type=\"STRING\" size=\"100\" prop=\"default\"/><Column id=\"CHEK_YSNO\" type=\"STRING\" size=\"1\" prop=\"default\"/><Column id=\"SPDP_TSUM\" type=\"BIGDECIMAL\" size=\"22\" prop=\"default\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFS_ASSPXD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SPLT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQN_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SPLT_ASST\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"SPLT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"NEWX_DPNM\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SPLT_COST\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SPLT_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SPLT_PRIC\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DPCT_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"UNDP_BALE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DESC_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">USIG_YSNO</Col><Col id=\"DSNAME\">dsSHRRCGN_YSNO</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("90");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "133", "262", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("9");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "8", "462", "262", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("13");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "8", "35", "253", "21", null, null, this);
            obj.set_taborder("31");
            obj.style.set_color("black");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnCANC", "absolute", "77", "0", "74", "21", null, null, this.Div0);
            obj.set_taborder("0");
            obj.set_text("확정취소");
            obj.set_cssclass("styTextButtonBizProc");
            this.Div0.addChild(obj.name, obj);
            obj = new Button("btnAPPL", "absolute", "0", "0", "74", "21", null, null, this.Div0);
            obj.set_taborder("1");
            obj.set_text("분할확정");
            obj.set_cssclass("styTextButtonBizProc");
            this.Div0.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRASST_NUMB", "absolute", "209", "97", "21", "21", null, null, this);
            obj.set_taborder("57");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtSHRASST_NUMB", "absolute", "98", "97", "109", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_type("string");
            obj.set_mask("####-####-####");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.getSetter("binddataset").set("dsFS_ASSTXM");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "378", "71", "72", "21", null, null, this);
            obj.set_taborder("59");
            obj.set_text("승인여부");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "609", "71", "72", "21", null, null, this);
            obj.set_taborder("60");
            obj.set_text("부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "609", "97", "72", "21", null, null, this);
            obj.set_taborder("61");
            obj.set_text("품목분류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "28", "97", "72", "21", null, null, this);
            obj.set_taborder("62");
            obj.set_text("자산번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("title01", "absolute", "28", "71", "72", "21", null, null, this);
            obj.set_taborder("63");
            obj.set_text("조회기간");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "818", "71", "218", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_imemode("hangul");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "678", "71", "115", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_lengthunit("utf8");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRASST_NAME", "absolute", "232", "97", "348", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCLSF_NAME", "absolute", "818", "97", "218", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCLSF_CODE", "absolute", "678", "97", "115", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_lengthunit("utf8");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRRCGN_YSNO", "absolute", "447", "71", "133", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_cssclass("styFormSearchItem");

            obj = new Calendar("calSHRSPLT_DAT2", "absolute", "226", "71", "108", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static64", "absolute", "207", "71", "20", "21", null, null, this);
            obj.set_taborder("73");
            obj.set_text("~");
            obj.set_cssclass("styFormSearch");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRSPLT_DAT1", "absolute", "98", "71", "108", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("imgHelpSHRDEPT_CODE", "absolute", "795", "71", "21", "21", null, null, this);
            obj.set_taborder("76");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCLSF_CODE", "absolute", "795", "97", "21", "21", null, null, this);
            obj.set_taborder("77");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("78");
            obj.set_text("자산분할관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("79");
            obj.set_text("홈 > 자산관리 > 자산분할관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("80");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("81");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("83");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("84");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("85");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("86");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("87");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("88");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("89");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFS_ASSPXD", "absolute", "8", "483", null, null, "25", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("91");
            obj.set_binddataset("dsFS_ASSPXD");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\" band=\"left\"/><Column size=\"200\" band=\"left\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"190\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"분할자산번호\"/><Cell col=\"1\" displaytype=\"text\" text=\"분할자산명\"/><Cell col=\"2\" displaytype=\"text\" text=\"부서명\"/><Cell col=\"3\" displaytype=\"text\" text=\"분할수량\"/><Cell col=\"4\" displaytype=\"text\" text=\"분할금액\"/><Cell col=\"5\" text=\"충당금누계액\"/><Cell col=\"6\" text=\"미상각잔액\"/><Cell col=\"7\" displaytype=\"text\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SPLT_ASST\" mask=\"expr:ASST_NUMB.toString().length == 0 ? &quot;&quot; : &quot;####-####-####&quot;\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SPLT_NAME\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;\" text=\"bind:NEWX_DPNM\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SPLT_NUMB\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SPLT_PRIC\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DPCT_AMOT\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:UNDP_BALE\"/><Cell col=\"7\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:DESC_REMK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFS_ASSPXM", "absolute", "8", "154", null, "304", "25", null, this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("92");
            obj.set_binddataset("dsFS_ASSPXM");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"45\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"0\" band=\"left\"/><Column size=\"110\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"200\" band=\"left\"/><Column size=\"100\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"105\"/><Column size=\"101\"/><Column size=\"75\"/><Column size=\"110\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" displaytype=\"text\" text=\"분할일자\"/><Cell col=\"2\" displaytype=\"text\" text=\"자산분류\"/><Cell col=\"3\" displaytype=\"text\" text=\"품목분류\"/><Cell col=\"4\" text=\"자산번호\"/><Cell col=\"5\" displaytype=\"text\" text=\"자산명\"/><Cell col=\"6\" displaytype=\"text\" text=\"부서명\"/><Cell col=\"7\" displaytype=\"text\" text=\"취득일자\"/><Cell col=\"8\" text=\"취득수량\"/><Cell col=\"9\" displaytype=\"text\" text=\"취득금액\"/><Cell col=\"10\" displaytype=\"text\" text=\"미상각잔액\"/><Cell col=\"11\" text=\"분할후수량\"/><Cell col=\"12\" displaytype=\"text\" text=\"분할합계\"/><Cell col=\"13\" displaytype=\"text\" text=\"확정여부\"/><Cell col=\"14\" text=\"확정일자\"/><Cell col=\"15\" text=\"확정자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_YSNO\"/><Cell col=\"1\" displaytype=\"date\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SPLT_DATE\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASCL_NAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CLSF_NAME\"/><Cell col=\"4\" text=\"bind:ASST_NUMB\" mask=\"expr:ASST_NUMB.toString().length == 0 ? &quot;&quot; : &quot;####-####-####&quot;\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: left;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASST_NAME\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"7\" displaytype=\"date\" style=\"align:center middle;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQS_DATE\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ACQU_NUMB\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQU_PRIC\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:UNDP_BALE\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ASAF_NUMB\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:TOTL_SPLT\"/><Cell col=\"13\" displaytype=\"checkbox\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:RCGN_YSNO\"/><Cell col=\"14\" displaytype=\"date\" text=\"bind:APPV_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"15\" text=\"bind:APPV_EMNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("96");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "573", "129", "80", "25", null, null, this);
            obj.set_taborder("97");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "8", "148", "216", "6", null, null, this);
            obj.set_taborder("98");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", null, "133", "247", "20", "20", null, this);
            obj.set_taborder("99");
            obj.set_text("더블클릭(Double-Click) 시 수정화면 실행");
            obj.set_cssclass("sta_WF_Info");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "573", "458", "80", "25", null, null, this);
            obj.set_taborder("100");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "8", "477", "216", "6", null, null, this);
            obj.set_taborder("101");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("102");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 253, 21, this.Div0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("31");
            		p.style.set_color("black");
            		p.set_scrollbars("none");

            	}
            );
            this.Div0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("자산분할관리");
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
        this.addIncludeScript("FSMB0060.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FSMB0060.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	FSMB0060 자산분할관리
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
        this.sBUTTONLIST = "TTTTTTTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "FSMB0060"; //해당 Form에서 사용 할 Package 명

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

        // 저장후 포커스 위치 찾기 GUBUN_PROC00, LAST_PROC00
        // fn_KeyFieldDisible 반영으로 인한 변수 두개 사용. 전표처리후에는 fn_Key필드 재조회 막기위함
        this.aKeyValue = new Array(4); //저장후 Focus를 위함
        this.sPOSTGUBN = '';
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

        	this.calSHRSPLT_DAT1.set_value((this.fnc_Left(this.fnc_GetServerDateTime("DATE"), 4) + "0101"));
        	this.calSHRSPLT_DAT2.set_value(this.fnc_GetServerDateTime("DATE"));
        	this.calSHRSPLT_DAT1.setFocus();
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

        	this.fnc_DatasetClear("dsFS_ASSPXM,dsFS_ASSPXD"); //기 조회 자료 초기화

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsFS_ASSPXM=dsFS_ASSPXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_ASSPXM.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	/***************************************************************************************
        	 본 화면은 신규 및 수정이 불가 화면으로 변경 가능한 자료는 삭제밖에 없음
        	 그런 이유로 삭제된 Row가 없으면 저장 할 필요 없음
        	 ****************************************************************************************/
        	if (this.dsFS_ASSPXM.getDeletedRowCount() > 0) {
        		this.fnc_Message("TMM125", '변경(삭제)된 자료가 있습니다.\n저장 후 입력 작업을 실행 하세요!');
        		return;
        	}

        	var strName = "FSMB0060P01";
        	var strFormURL = "fsm::FSMB0060P01.xfdl";
        	
        	var sOpenStyle  = "modeless=false";           //Open Sytle(되도록 Modal 사용)
        		sOpenStyle += ",autosize=true";           //Autosize true면 width, Height 안먹음
        		sOpenStyle += ",top=-1";                  //원하는 위치(단 -1은 소유창의 Middle)
        		sOpenStyle += ",left=-1";                 //원하는 위치(단 -1은 소유창의 Center)
        		sOpenStyle += ",width=1051";                //현재 반응 없음
        		sOpenStyle += ",height=834";              //현재 반응 없음
        		sOpenStyle += ",title=true";              //Form Title Bar Visible 여부
        		sOpenStyle += ",titletext=자산분할일괄등록";    //Form Title Bar Visible 여부
        		sOpenStyle += ",status=false";            //Form Title Bar Visible 여부
        		sOpenStyle += ",resizable=true";          //Form Title Bar Visible 여부
        		
        	var objArgumentList = { 
        		 sFORMMODE : "I"
        		,sASST_NUMB : ""
        		,sSPLT_DATE : ""
        		
        	};
        	
        	this.fnc_OpenPopup(strName, strFormURL, objArgumentList, sOpenStyle, "fn_popupAfter");

        }

        /*------------------+
         |  팝업 Callback!  |
         +------------------*/
        this.fn_popupAfter = function(sPopupId,Variant) {

        	var sResponse = this.fnc_GetPopupRtn();
        	
        	if (sPopupId == "FSMB0060P01") {	// 일괄등록
        	
        		if (this.fnc_Length(this.fnc_Trim(sResponse)) > 0) this.fn_Search();
        		
        	} else if (sPopupId == "FSMB0010P02") {	// 자산번호
        	
        		if (this.fnc_Length(this.fnc_Trim(sResponse)) == 0) return;

        		this.tabFS_ASSTXM.tab1.edtCLSF_CODE.set_value(sResponse[10]);   //프로그램 ID
        		this.tabFS_ASSTXM.tab1.edtCLSF_NAME.set_value(sResponse[0]);    //프로그램 명
        		this.tabFS_ASSTXM.tab1.edtASCL_NAME.set_value(sResponse[3]);
        		this.tabFS_ASSTXM.tab1.cmbDPCT_METH.set_value(sResponse[16]);
        		this.tabFS_ASSTXM.tab1.cmbDPCT_CMPT.set_value(sResponse[12]);     //상각완료기준
        		this.tabFS_ASSTXM.tab1.mskPRID_DPCT.set_value(sResponse[7]);
        		this.tabFS_ASSTXM.tab1.mskPRID_LEGL.set_value(sResponse[7]);
        		this.tabFS_ASSTXM.tab1.mskDPCT_RATE.set_value(sResponse[8]);
        		this.tabFS_ASSTXM.tab1.cmbDPCT_CYCL.set_value(sResponse[17]);
        		this.tabFS_ASSTXM.tab1.edtASST_DTLX.set_value(sResponse[19]);
        			
        	}
        	
        }

        
        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) {
        		this.dsFS_ASSPXM.deleteRow(this.dsFS_ASSPXM.rowposition);
        	}
        	
        	this.fn_KeyFieldDisible();
        // 	// 1건이면 재조회를 타지 않기 때문에 임의로 디테일을 클리어 시켜준다.
        // 	if (this.dsFS_ASSPXM.getRowCount() < 1) {
        // 		this.fnc_DatasetClear("dsFS_ASSPXD");
        // 	}
        	this.grdFS_ASSPXM.setFocus();
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	this.fnc_DataSetCancel("dsFS_ASSPXM");
        	this.grdFS_ASSPXM.setFocus();
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	this.aKeyValue[0] = this.dsFS_ASSPXM.getColumn(this.dsFS_ASSPXM.rowposition, "ASST_NUMB");
        	// 저장후 선택줄 호출을 위한 변수 선언
        	this.sPOSTGUBN = "GUBUN_PROC00";
        	//trace("-----aKeyValue: " + this.aKeyValue + "--- sPOSTGUBN: " + this.sPOSTGUBN);

        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsFS_ASSPXM=dsFS_ASSPXM:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_ASSPXM.setFocus();
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
        	var sMessage = this.fnc_FormUnloadCheck("dsFS_ASSPXM, dsFS_ASSPXD",this);
        	
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
        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function (){

        	if (this.fnc_DatasetChangeCheck("dsFS_ASSPXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	if (!this.fnc_IsDate(this.calSHRSPLT_DAT1.value)) {
        		return this.fnc_SearchCheckPostAction("TMM072", "조회기간(시작일)", this.calSHRSPLT_DAT1);
        	}

        	if (!this.fnc_IsDate(this.calSHRSPLT_DAT2.value)) {
        		return this.fnc_SearchCheckPostAction("TMM072", "조회기간(종료일)", this.calSHRSPLT_DAT2);
        	}

        	if (this.fnc_Trim(this.calSHRSPLT_DAT1.value) > this.fnc_Trim(this.calSHRSPLT_DAT2.value)) {
        		return this.fnc_SearchCheckPostAction("TMM042", "시작일,종료일", this.calSHRSPLT_DAT2);
        	}

        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsFS_ASSPXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	if (this.fnc_Trim(this.dsFS_ASSPXM.getColumn(this.dsFS_ASSPXM.rowposition, "RCGN_YSNO")) == "1") {
        		this.fnc_Message("TMM107", "확정여부", "확정");
        		return false;
        	}

        	var sQuestionText = this.dsFS_ASSPXM.getColumn(this.dsFS_ASSPXM.rowposition, "ASST_NUMB") + " ";
        	sQuestionText += this.dsFS_ASSPXM.getColumn(this.dsFS_ASSPXM.rowposition, "ASST_NAME");
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsFS_ASSPXM")) {
        		this.fnc_Message("TMM003");
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
        	if (sKind == "SEARCH00") {
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " SPLT_DAT1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSPLT_DAT1.value)); //조회기간1
        		sReturnString += " SPLT_DAT2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSPLT_DAT2.value)); //조회기간2
        		sReturnString += " RCGN_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRRCGN_YSNO.value)); //승인여부
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); //부서코드
        		sReturnString += " CLSF_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCLSF_CODE.value)); //품목분류
        		sReturnString += " ASST_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRASST_NUMB.value)); //자산번호

        		// 디테일 조회 Argument 생성
        	} else if (sKind == "SEARCH01") {
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " SPLT_DATE=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_ASSPXM.getColumn(this.dsFS_ASSPXM.rowposition, "SPLT_DATE"))); //분할일
        		sReturnString += " ASST_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_ASSPXM.getColumn(this.dsFS_ASSPXM.rowposition, "ASST_NUMB"))); //자산번호

        		// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);

        		// 승인
        	} else if (sKind == 'APPL00') {
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " SPLT_DAT1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSPLT_DAT1.value)); //조회기간1
        		sReturnString += " SPLT_DAT2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSPLT_DAT2.value)); //조회기간2
        		sReturnString += " RCGN_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRRCGN_YSNO.value)); //승인여부
        		sReturnString += " DEPT_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); //부서코드
        		sReturnString += " CLSF_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCLSF_CODE.value)); //품목분류
        		sReturnString += " ASST_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRASST_NUMB.value)); //자산번호
        		sReturnString += " SPLT_DATE=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_ASSPXM.getColumn(this.dsFS_ASSPXM.rowposition, "SPLT_DATE"))); //분할일
        		sReturnString += " ASST_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_ASSPXM.getColumn(this.dsFS_ASSPXM.rowposition, "ASST_NUMB"))); //자산번호
        	} else if (sKind == 'CANC00') {
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " SPLT_DAT1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSPLT_DAT1.value)); //조회기간1
        		sReturnString += " SPLT_DAT2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRSPLT_DAT2.value)); //조회기간2
        		sReturnString += " RCGN_YSNO=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRRCGN_YSNO.value)); //승인여부
        		sReturnString += " CLSF_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCLSF_CODE.value)); //품목분류
        		sReturnString += " ASST_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRASST_NUMB.value)); //자산번호
        		sReturnString += " SPLT_DATE=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_ASSPXM.getColumn(this.dsFS_ASSPXM.rowposition, "SPLT_DATE"))); //분할일
        		sReturnString += " ASST_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.dsFS_ASSPXM.getColumn(this.dsFS_ASSPXM.rowposition, "ASST_NUMB"))); //자산번호
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

        	if (sMethodName == "SEARCH00") {
        		this.fnc_Information(this.stInformation, this.dsFS_ASSPXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsFS_ASSPXM.rowcount);

        		if (this.sPOSTGUBN == "GUBUN_PROC00") {
        			//trace("~~~~~~~~~~~~~~~~~ 저장시에만 변경해줌");
        			this.sPOSTGUBN = "LAST_PROC00";
        		}
        	} else if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.stInformation1, this.dsFS_ASSPXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");

        		if (this.sPOSTGUBN == "LAST_PROC00") {
        			var iRow = 0;
        			iRow = this.dsFS_ASSPXM.findRowExpr("ASST_NUMB=='" + this.aKeyValue[0] + "' ");
        			//trace("----------iRow: " + iRow);

        			if (iRow < 0) iRow = 0;

        			this.dsFS_ASSPXM.clearSelect();
        			this.dsFS_ASSPXM.selectRow(iRow);
        			this.dsFS_ASSPXM.set_rowposition(iRow);

        			this.sPOSTGUBN = ""; //구분자 초기화
        			//trace("~~~~~sPOSTGUBN: " + this.sPOSTGUBN);
        		}
        	} else if (sMethodName == 'SAVE00') {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	} else if (sMethodName == 'APPL00') {
        		this.fnc_Message("TMM125", "분할확정이 완료되었습니다.");
        		this.fn_Search();
        	} else if (sMethodName == 'CANC00') {
        		this.fnc_Message("TMM125", "확정취소가 완료되었습니다.");
        		this.fn_Search();
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        		
        		arrParam[0] = "COMBO,cmbSHRRCGN_YSNO,dsSHRRCGN_YSNO,0";
        		
        		this.fnc_CommonCodeInnerBind(arrParam);	    

        	}

        }

        
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*--------------+
         |  디테일 조회  |
         +---------------*/
        this.fn_KeyFieldDisible = function (obj,e) {

        	if (this.dsFS_ASSPXM.getRowCount() < 1) return;

        	this.fnc_DatasetClear("dsFS_ASSPXD");

        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsFS_ASSPXD=dsFS_ASSPXD";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_ASSPXM.setFocus();
        }

        
        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();

            if ((obj.name == "imgHelpSHRASST_NUMB") || (obj.name == "edtSHRASST_NAME")) {
            
                arrParam[0] = "FSM0011";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtSHRASST_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtSHRASST_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtSHRASST_NUMB,edtSHRASST_NAME";          //초기화 및 결과 Mapping Column
                arrParam[6] = "0,1";                                      //Mapping Column Index
                
                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출
                
            } else if ((obj.name == "imgHelpSHRCLSF_CODE") || (obj.name == "edtSHRCLSF_NAME")) {
            
                arrParam[0] = "FSM0001";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtSHRCLSF_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtSHRCLSF_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtSHRCLSF_CODE,edtSHRCLSF_NAME";          //초기화 및 결과 Mapping Column
                arrParam[6] = "10,0";                                      //Mapping Column Index
                
                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출
                    
            } else if ((obj.name == "imgHelpSHRDEPT_CODE") || (obj.name == "edtSHRDEPT_NAME")) {            

                arrParam[0] = "FAM0001";                                  //Popup ID
                arrParam[1] = "";                                          //조건구분에 대응되는 조회조건 값
                arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
                arrParam[3] = "N";                                          //사용 여부 구분 포함 여부 값
                arrParam[4] = "edtSHRDEPT_NAME";                          //현재 포커스 Componect명
                arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";          //초기화 및 결과 Mapping Column
                arrParam[6] = "0,1";                                      //Mapping Column Index
                
                this.fnc_HelpDialogeAction(this, obj, arrParam); //팝업 호출
                
        	}
        }

        /*----------------+
         |  수정모드 팝업  |
         +-----------------*/
        this.fn_CsttUpdate = function (obj,e) {

        	var iRow = this.dsFS_ASSPXM.rowposition;

        	if (this.dsFS_ASSPXM.getColumn(iRow, "RCGN_YSNO") == "1") {
        		this.fnc_Message("TMM125", '확정된 자료는 수정이 불가 합니다!');
        		return;
        	}
        	//trace("iRow:" + iRow);

        	var strName = "FSMB0060P01";
        	var strFormURL = "fsm::FSMB0060P01.xfdl";
        	
        	var sOpenStyle  = "modeless=false";           //Open Sytle(되도록 Modal 사용)
        		sOpenStyle += ",autosize=true";           //Autosize true면 width, Height 안먹음
        		sOpenStyle += ",top=-1";                  //원하는 위치(단 -1은 소유창의 Middle)
        		sOpenStyle += ",left=-1";                 //원하는 위치(단 -1은 소유창의 Center)
        		sOpenStyle += ",width=990";                //현재 반응 없음
        		sOpenStyle += ",height=800";              //현재 반응 없음
        		sOpenStyle += ",title=true";              //Form Title Bar Visible 여부
        		sOpenStyle += ",titletext=자산분할일괄등록";    //Form Title Bar Visible 여부
        		sOpenStyle += ",status=false";            //Form Title Bar Visible 여부
        		sOpenStyle += ",resizable=true";          //Form Title Bar Visible 여부		

        	var objArgumentList = {
        		 sFORMMODE : "U"
        		,sASST_NUMB : this.dsFS_ASSPXM.getColumn(iRow, "ASST_NUMB")
        		,sSPLT_DATE : this.dsFS_ASSPXM.getColumn(iRow, "SPLT_DATE")
        		
        	};

        	this.fnc_OpenPopup(strName, strFormURL, objArgumentList, sOpenStyle, "fn_popupAfter");
        	
        }

        

        /*--------------------------------+
         |  분할변동확정 및 취소 버튼 클릭 時  |
         ----------------------------------*/
        this.fn_AppCan = function (obj,e) {

        	if (!this.fn_AppCanCheck(obj)) return;

        	this.aKeyValue[0] = this.dsFS_ASSPXM.getColumn(this.dsFS_ASSPXM.rowposition, "ASST_NUMB");
        	// 저장후 선택줄 호출을 위한 변수 선언
        	this.sPOSTGUBN = "GUBUN_PROC00";
        	//trace("-----aKeyValue: " + this.aKeyValue + "--- sPOSTGUBN: " + this.sPOSTGUBN);

        	var sMethodName = this.fnc_Replace(obj.name, "btn", "") + "00";
        	var sInDataSet = "dsFS_ASSPXM=dsFS_ASSPXM:U";
        	var sOutDataSet = "dsFS_ASSPXM=dsFS_ASSPXM dsFS_ASSPXD=dsFS_ASSPXD";
        	var sArgument = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_ASSPXM.setFocus();
        }

        /*-----------------------------------------+
         |  분할변동확정 및 취소시 중복 체크 방지 처리  |
         ------------------------------------------*/
        this.fn_AppCanCheck = function (obj) {

        	if (this.dsFS_ASSPXM.getCaseCount("CHEK_YSNO=='1'") == 0) {
        		this.fnc_Message("TMM010");
        		return;
        	}

        	var iCaseCount;

        	if (obj.name == "btnAPPL") {
        		iCaseCount = this.dsFS_ASSPXM.getCaseCount("CHEK_YSNO == '1' && RCGN_YSNO == '1' ");
        		//trace("-----btnAPPL iCaseCount:" + iCaseCount);

        		if (iCaseCount > 0) {
        			this.fnc_Message("TMM125", "이미 변동확정하신 자료가 체크 되었습니다.");
        			return;
        		}
        	} else {
        		iCaseCount = this.dsFS_ASSPXM.getCaseCount("CHEK_YSNO == '1' && RCGN_YSNO == '0' ");

        		if (iCaseCount > 0) {
        			this.fnc_Message("TMM125", "미변동확정된 자료가 체크 되었습니다.");
        			return;
        		}
        	}

        	return true;
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsFS_ASSPXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.Div0.btnCANC.addEventHandler("onclick", this.fn_AppCan, this);
            this.Div0.btnAPPL.addEventHandler("onclick", this.fn_AppCan, this);
            this.imgHelpSHRASST_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRASST_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRASST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRASST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCLSF_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCLSF_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCLSF_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRRCGN_YSNO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRSPLT_DAT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRSPLT_DAT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDEPT_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRCLSF_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdFS_ASSPXM.addEventHandler("oncelldblclick", this.fn_CsttUpdate, this);

        };

        this.loadIncludeScript("FSMB0060.xfdl");
        this.loadPreloadList();
       
    };
}
)();
