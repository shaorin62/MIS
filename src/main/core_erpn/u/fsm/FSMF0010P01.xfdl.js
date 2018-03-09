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
                this.set_name("FSMF0010P01");
                this.set_titletext("건설중자산대체등록");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1000,748);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFS_ASTFXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_UNIT\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ASTF_NUMB\" size=\"16\" prop=\"default\" type=\"STRING\"/><Column id=\"ASTF_GUBN\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ASTF_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ASTF_TAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SLIP_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFS_ASTFLS", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHCK\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_GUB1\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"ASTF_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"SSSL_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SSSL_SEQN\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"OCCU_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SOKR_TAMT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SOKR_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DETL_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"OCCU_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CLSF_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSF_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"PROJ_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"PROJ_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DETL_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DETL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SOKR_AMOT2\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFS_ASTFLA", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_GUB1\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ASTF_NUMB\" size=\"16\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ASST_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSF_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CLSF_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"PRID_DPCT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_COST\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ACQU_PRIC\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ASST_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsSHRACCT_UNIT</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdFS_ASTFLS", "absolute", "15", "139", null, "291", "15", null, this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsFS_ASTFLS");
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
            obj.set_taborder("8");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"38\"/><Column size=\"70\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"170\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"선택\"/><Cell col=\"1\" displaytype=\"text\" text=\"회계일자\"/><Cell col=\"2\" displaytype=\"text\" text=\"계정과목\"/><Cell col=\"3\" displaytype=\"text\" text=\"발생금액\"/><Cell col=\"4\" displaytype=\"text\" text=\"기정리액\"/><Cell col=\"5\" text=\"계정잔액\"/><Cell col=\"6\" displaytype=\"text\" text=\"금회대체액\"/><Cell col=\"7\" displaytype=\"text\" text=\"적요\"/><Cell col=\"8\" displaytype=\"text\" text=\"전표번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:CHCK\"/><Cell col=\"1\" displaytype=\"date\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:APPR_DATE\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:ACCT_NAME\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:OCCU_AMOT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SOKR_TAMT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SOKR_AMOT2\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"normal\" editfilter=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SOKR_AMOT\" editlimit=\"15\"/><Cell col=\"7\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:DETL_REMK\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SSSL_NUMB\" mask=\"expr:SSSL_NUMB.toString().length == 0 ? &quot;&quot; : &quot;##-########-####&quot;\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" displaytype=\"text\" style=\"align: center;\" text=\"합    계\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;OCCU_AMOT&quot;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;SOKR_TAMT&quot;)\"/><Cell col=\"5\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;SOKR_AMOT&quot;)\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: left;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", "15", "118", "206", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("27");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFS_ASTFLA", "absolute", "15", "465", null, null, "15", "44", this);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsFS_ASTFLA");
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
            obj.set_taborder("13");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\"/><Column size=\"190\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"109\"/><Column size=\"60\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"자산번호\"/><Cell col=\"1\" displaytype=\"text\" style=\"background:URL('theme://imagesInbus\\imgGridInputBe.png');\" cssclass=\"Cellgrd_WF_essential\" text=\"자산명\"/><Cell col=\"2\" colspan=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"품목분류\"/><Cell col=\"4\" colspan=\"2\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"자산계정\"/><Cell col=\"6\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"단가\"/><Cell col=\"7\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"수량\"/><Cell col=\"8\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"자산금액\"/><Cell col=\"9\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"내용년수\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" style=\"align:center;background:EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ASST_NUMB\" mask=\"expr:ASST_NUMB.toString().length == 0 ? &quot;&quot; : &quot;####-####-####&quot;\" editimemode=\"hangul\" expandshow=\"hide\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:ASST_NAME\" editlimit=\"100\" editimemode=\"hangul\" expandshow=\"expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT? 'show' : 'hide'\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:CLSF_CODE\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:CLSF_NAME\" expandsize=\"13\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:ACCT_INTL\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:ACCT_NAME\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQU_COST\" editlimit=\"15\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQU_NUMB\" editlimit=\"15\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACQU_PRIC\" editlimit=\"15\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:PRID_DPCT\" editlimit=\"15\"/></Band><Band id=\"summary\"><Cell colspan=\"6\" displaytype=\"text\" style=\"align: center;\" text=\"합    계\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;ACQU_COST&quot;)\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;ACQU_NUMB&quot;)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;dataset.getRowLevel(currow)==0&quot;, &quot;ACQU_PRIC&quot;)\"/><Cell col=\"9\" displaytype=\"text\" style=\"align: left;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation01", "absolute", "15", "444", "206", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("26");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd", "absolute", null, "440", "62", "21", "80", null, this);
            obj.set_tabstop("false");
            obj.set_taborder("10");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel", "absolute", null, "440", "62", "21", "15", null, this);
            obj.set_tabstop("false");
            obj.set_taborder("11");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox1", "absolute", "15", "35", null, "69", "15", null, this);
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACCT_DAT1", "absolute", "290", "46", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Static("Static58", "absolute", "395", "46", "14", "21", null, null, this);
            obj.set_text("~");
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACCT_DAT2", "absolute", "408", "46", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Edit("edtSHRACCT_INTL", "absolute", "103", "72", "100", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_taborder("19");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAME", "absolute", "228", "72", "280", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_taborder("4");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "103", "46", "101", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_type("dropdown");
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");

            obj = new Edit("edtSHRPROJ_CODE", "absolute", "616", "46", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_imemode("none");
            obj.set_taborder("18");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRPROJ_NAME", "absolute", "721", "46", "198", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_taborder("3");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Calendar("calASTF_DATE", "absolute", "716", "114", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsFS_ASTFXM");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_taborder("6");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new MaskEdit("mskASTF_TAMT", "absolute", "885", "114", "100", "21", null, null, this);
            obj.set_autoselect("true");
            obj.getSetter("binddataset").set("dsFS_ASTFXM");
            obj.set_enable("false");
            obj.set_taborder("7");
            obj.set_type("number");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.set_mask("#,###");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_COD2", "absolute", "616", "72", "80", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_taborder("20");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRACCT_NAM2", "absolute", "721", "72", "198", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_imemode("native");
            obj.set_taborder("5");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("title01", "absolute", "35", "46", "70", "21", null, null, this);
            obj.set_text("회계단위");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "35", "72", "70", "21", null, null, this);
            obj.set_text("계정과목");
            obj.style.set_color("#4d4d4dff");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Static("title00", "absolute", "646", "114", "70", "21", null, null, this);
            obj.set_text("대체일자");
            obj.style.set_font("bold 9 굴림");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Static("title02", "absolute", "220", "46", "70", "21", null, null, this);
            obj.set_text("조회기간");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "543", "46", "70", "21", null, null, this);
            obj.set_text("프로젝트");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "543", "72", "70", "21", null, null, this);
            obj.set_text("계정과목");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "817", "114", "68", "21", null, null, this);
            obj.set_text("대체총액");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRACCT_INTL", "absolute", "205", "72", "22", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_cssclass("sytHelpPopup");
            obj.set_visible("true");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRPROJ_CODE", "absolute", "698", "46", "21", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_cssclass("sytHelpPopup");
            obj.set_visible("true");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRACCT_COD2", "absolute", "698", "72", "21", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_cssclass("sytHelpPopup");
            obj.set_visible("true");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Button("btnSlipCreate", "absolute", "15", "10", "122", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_tabstop("false");
            obj.set_text("자산대체전표생성");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "0", "15", "760", null, null, this);
            obj.set_taborder("37");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "985", "0", "15", "760", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "887", "736", "64", "12", null, null, this);
            obj.set_taborder("41");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel", "absolute", null, null, "62", "24", "15", "12", this);
            obj.set_taborder("42");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "887", "704", "64", "8", null, null, this);
            obj.set_taborder("43");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "248", "104", "56", "35", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "264", "430", "56", "35", null, null, this);
            obj.set_taborder("45");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "424", "93", "38", "10", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "424", "67", "102", "5", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "424", "36", "38", "10", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "15", "133", "216", "6", null, null, this);
            obj.set_taborder("52");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "15", "459", "216", "6", null, null, this);
            obj.set_taborder("53");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "8", "510", "23", "15", null, this);
            obj.set_taborder("54");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "533", "0", "110", "8", null, null, this);
            obj.set_taborder("55");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "533", "31", "110", "4", null, null, this);
            obj.set_taborder("56");
            obj.set_text("h4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "19", "3", "307", "22", null, null, this);
            obj.set_taborder("57");
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


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1000, 748, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("건설중자산대체등록");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("calASTF_DATE_value","calASTF_DATE","value","dsFS_ASTFXM","ASTF_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("mskASTF_TAMT_value","mskASTF_TAMT","value","dsFS_ASTFXM","ASTF_TAMT");
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
        this.addIncludeScript("FSMF0010P01.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FSMF0010P01.xfdl", function() {
        /***************************************************************************************************
         * # Program:	FSMF0010P01 건설중자산대체관리 팝업
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

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        
        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFTTF"; // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "FSMF0010P01";

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
        /*---------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	//전표 MASK
        	this.fnc_FormatSlipNumber(this.grdFS_ASTFLS, "SSSL_NUMB");

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	
        	var sDate = this.fnc_GetServerDateTime("DATE");
        	this.calSHRACCT_DAT1.set_value(this.fnc_Left(sDate, 6) + "01");
        	this.calSHRACCT_DAT2.set_value(sDate);
        	this.calSHRACCT_DAT1.setFocus();
        	
        	this.fn_HeaderInsert();
        	
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

        	this.fnc_DatasetClear("dsFS_ASTFXM,dsFS_ASTFLS,dsFS_ASTFLA");
        	this.fn_HeaderInsert(); //헤더 신규입력 처리

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsFS_ASTFLS=dsFS_ASTFLS";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdFS_ASTFLS.setFocus();
        	
        }

        /*--------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +--------------------------------*/
        this.fn_Input = function (obj) {

        	if (this.dsFS_ASTFLS.rowposition < 0) {
        		this.fnc_Message("TMM125", "조회후 사용하시기 바랍니다");
        		return;
        	}

        	if (this.dsFS_ASTFLS.getCaseCount("CHCK=='1'") < 1) {
        		this.fnc_Message("TMM125", "선택 체크 후 사용하세요");
        		return false;
        	}

        	var iRow = this.dsFS_ASTFLA.addRow();
        	this.dsFS_ASTFLA.setColumn(iRow, "ACCT_UNIT", this.dsFS_ASTFLS.getColumn(0, "ACCT_UNIT")); //회계단위
        	this.dsFS_ASTFLA.setColumn(iRow, "ASTF_NUMB", ""); //자산대체번호
        	this.dsFS_ASTFLA.setColumn(iRow, "SLIP_LINE", 0); //전표라인번호
        	this.dsFS_ASTFLA.setColumn(iRow, "ACCT_INTL", ""); //계정과목코드
        	this.dsFS_ASTFLA.setColumn(iRow, "ACCT_NAME", ""); //계정과목명
        	this.dsFS_ASTFLA.setColumn(iRow, "DEPT_CODE", ""); //부서코드
        	this.dsFS_ASTFLA.setColumn(iRow, "ASST_NUMB", ""); //자산코드
        	this.dsFS_ASTFLA.setColumn(iRow, "ASST_NAME", ""); //자산명
        	this.dsFS_ASTFLA.setColumn(iRow, "CLSF_CODE", ""); //품목분류코드
        	this.dsFS_ASTFLA.setColumn(iRow, "CLSF_NAME", ""); //품목분류명
        	this.dsFS_ASTFLA.setColumn(iRow, "PRID_DPCT", 0); //내용년수
        	this.dsFS_ASTFLA.setColumn(iRow, "PRID_DPCT", 0); //내용년수
        	this.dsFS_ASTFLA.setColumn(iRow, "ACQU_COST", 0); //단가
        	this.dsFS_ASTFLA.setColumn(iRow, "ACQU_NUMB", 0); //수량
        	this.dsFS_ASTFLA.setColumn(iRow, "ACQU_PRIC", 0); //자산금액
        	this.dsFS_ASTFLA.setColumn(iRow, "ASST_NUMB", ""); //자산금액

        	this.grdFS_ASTFLA.setFocus();
        	this.grdFS_ASTFLA.setCellPos(1);
        	
        }

        /*---------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Delete = function (obj) {
        	
        	if (this.fn_DeleteCheck("dsFS_ASTFLA")) this.dsFS_ASTFLA.deleteRow(this.dsFS_ASTFLA.rowposition);
        	this.grdFS_ASTFLA.setFocus();
        	
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj) {
        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsFS_ASTFXM=dsFS_ASTFXM:U ";
        		sInDataSet += "dsFS_ASTFLS=dsFS_ASTFLS:U ";
        		sInDataSet += "dsFS_ASTFLA=dsFS_ASTFLA:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this);
        }

        /*--------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Print = function (obj) {
        }

        /*---------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {
        	
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsFS_ASTFXM,dsFS_ASTFLS,dsFS_ASTFLA", this);
        	
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj, e);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)   |
         +-----------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);	
        }

        /*----------------------------------+
         |  12.Text Box가 Focus를 받을 때  |
         +----------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                  *
         **************************************************************************************************/
        /*--------------------------+
         |  조회 필수 조건 체크!  |
         +--------------------------*/
        this.fn_SearchItemCheck = function (){

        	if (this.fnc_DatasetChangeCheck("dsFS_ASTFXM,dsFS_ASTFLS, dsFS_ASTFLA")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "회계단위", this.dsFS_ASTFLS, 0, this.cmbSHRACCT_UNIT, "");
        	}

        	if (!this.fnc_IsDate(this.calSHRACCT_DAT1.value)) {
        		return this.fnc_CheckPostAction("TMM072", "조회기간(시작일)", this.dsFS_ASTFLS, 0, this.calSHRACCT_DAT1, "");
        	}

        	if (!this.fnc_IsDate(this.calSHRACCT_DAT2.value)) {
        		return this.fnc_CheckPostAction("TMM072", "조회기간(종료일)", this.dsFS_ASTFLS, 0, this.calSHRACCT_DAT2, "");
        	}

        	if (this.fnc_Trim(this.calSHRACCT_DAT1.value) > this.fnc_Trim(this.calSHRACCT_DAT2.value)) {
        		return this.fnc_CheckPostAction("TMM072", "조회기간(종료일)", this.dsFS_ASTFLS, 0, this.calSHRACCT_DAT2, "");
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.edtSHRACCT_INTL.value)) < 1) {
        		return this.fnc_CheckPostAction("TMM072", "계정과목", this.dsFS_ASTFLS, 0, this.edtSHRACCT_INTL, "");
        	}

        	return true;
        	
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsFS_ASTFLA.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return;
        	}

        	var iSelectRowCount = this.fnc_SelectRowCount(this.dsFS_ASTFLA);

        	if (iSelectRowCount > 1) {
        		
        		return this.fnc_Message("TMM004", iSelectRowCount);
        	
        	} else {
        	
        		var sQuestionText = this.dsFS_ASTFLA.getColumn(this.dsFS_ASTFLA.rowposition, "ASST_NAME");
        		return this.fnc_Message("TMM002", sQuestionText);
        		
        	}
        	
        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsFS_ASTFXM,dsFS_ASTFLS,dsFS_ASTFLA")) {
        		return this.fnc_SearchCheckPostAction("TMM003", "", this.calASTF_DATE);
        	}

        	if (!this.fnc_IsDate(this.dsFS_ASTFXM.getColumn(0, "ASTF_DATE"))) {
        		return this.fnc_CheckPostAction("TMM072", "대체일", this.dsFS_ASTFXM, 0, this.calASTF_DATE, "");
        	}

        	if (this.dsFS_ASTFLS.getCaseCount("CHCK == '1'") < 1) {
        		this.fnc_Message("TMM125", "최소 1건 이상의 건설중자산을 선택하세요!");
        		return false;
        	}

        	if (this.dsFS_ASTFLA.getRowCount() < 1) {
        		this.fnc_Message("TMM125", "최소 1건 이상의 대체자산 내역을 입력하세요!");
        		return false;
        	}

        	if (nexacro.toNumber(this.fnc_Trim(this.dsFS_ASTFXM.getColumn(0, "ASTF_TAMT"))) < 1) {
        		this.fnc_Message("TMM125", "선택하신 건설중 자산의 금회대체액이 없습니다. 금회대체액을 입력해주세요!");
        		return false;
        	}

        	for (var i = 0; i < this.dsFS_ASTFLA.getRowCount(); i++) {
        		if (this.fnc_ToUpper(this.dsFS_ASTFLA.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASTFLA.getColumn(i, "ASST_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "자산번호", this.dsFS_ASTFLA, i, this.grdFS_ASTFLA, "ASST_NUMB");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASTFLA.getColumn(i, "CLSF_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "품목분류", this.dsFS_ASTFLA, i, this.grdFS_ASTFLA, "CLSF_NAME");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASTFLA.getColumn(i, "ASST_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "자산명", this.dsFS_ASTFLA, i, this.grdFS_ASTFLA, "ASST_NAME");
        		}

        		if (nexacro.toNumber(this.dsFS_ASTFLA.getColumn(i, "ACQU_COST")) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "단가", this.dsFS_ASTFLA, i, this.grdFS_ASTFLA, "ACQU_COST");
        		}

        		if (nexacro.toNumber(this.dsFS_ASTFLA.getColumn(i, "ACQU_NUMB")) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "수량", this.dsFS_ASTFLA, i, this.grdFS_ASTFLA, "ACQU_NUMB");
        		}

        		if (nexacro.toNumber(this.dsFS_ASTFLA.getColumn(i, "ACQU_PRIC")) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "자산금액", this.dsFS_ASTFLA, i, this.grdFS_ASTFLA, "ACQU_PRIC");
        		}

        		if (nexacro.toNumber(this.dsFS_ASTFLA.getColumn(i, "PRID_DPCT")) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "내용년수", this.dsFS_ASTFLA, i, this.grdFS_ASTFLA, "PRID_DPCT");
        		}
        	}

        	if (this.dsFS_ASTFLA.getSum("ACQU_PRIC") != this.mskASTF_TAMT.value) {
        		this.fnc_Message("TMM125", "대체총액과 대체자산의 자산금액 합계는 같아야 합니다.");
        		return false;
        	}

        	// CHK된 계정잔액금액 합은 금회대체액의 금액보다 작거나 같아야지만 전표처리 가능
        	if (this.mskASTF_TAMT.value > this.dsFS_ASTFLS.getCaseSum("CHCK == '1'", "SOKR_AMOT2")) {
        		this.fnc_Message("TMM125", "대체총액은 계정잔액보다 클수 없습니다.");
        		return false;
        	}

        	this.dsFS_ASTFXM.setColumn(0, "ACCT_UNIT", this.dsFS_ASTFLS.getColumn(0, "ACCT_UNIT")); //회계단위

        	return true;
        	
        }

        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {
        	
        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)); //회계단위
        		sReturnString += " ACCT_DAT1=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DAT1.value)); //조회기간(시작일)
        		sReturnString += " ACCT_DAT2=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSHRACCT_DAT2.value)); //조회기간(종료일)
        		sReturnString += " ACCT_INTL=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRACCT_INTL.value)); //계정과목
        		sReturnString += " ACCT_INT2=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRACCT_COD2.value)); //계정과목
        		sReturnString += " PROJ_CODE=" 	+ this.fnc_Quote(this.fnc_Trim(this.edtSHRPROJ_CODE.value)); //프로젝트

        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT=" 	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)); //회계단위
        		sReturnString += " ASTF_DATE=" 	+ this.fnc_Quote(this.fnc_Trim(this.calASTF_DATE.value)); //대체일자
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
         |  Transaction 후 Post Process!      |
         +------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {
        		
        		this.fnc_Information(this.stInformation00, this.dsFS_ASTFLS.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsFS_ASTFLS.rowcount);
        		
        	} else if (sMethodName == "SAVE00") {
        	
        		this.fnc_Message("TMM125", "자산대체 전표생성");
        		this.close(true);
        		
        	} else if (sMethodName == "GetCommCode") {
        		
        		var arrParam = new Array();
        			arrParam[0]  = "COMBO,cmbSHRACCT_UNIT,dsSHRACCT_UNIT,0"; //회계단위(조회)
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	}

        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /*----------------+
         |  헤더 인서트  |
         +----------------*/
        this.fn_HeaderInsert = function () {

        	//var firstDate = this.fnc_Left(this.fnc_Today(), 6) + "01";
        	var firstDate = this.fnc_Left(this.fnc_GetServerDateTime("DATE") , 6) + "01";	
        	var rDate = this.fnc_AddDate(firstDate, -1);

        	var iRow = this.dsFS_ASTFXM.addRow();
        	this.dsFS_ASTFXM.setColumn(iRow, "ACCT_UNIT", ""); //회계단위
        	this.dsFS_ASTFXM.setColumn(iRow, "ASTF_NUMB", ""); //자산번호
        	this.dsFS_ASTFXM.setColumn(iRow, "ASTF_GUBN", "CONS");
        	this.dsFS_ASTFXM.setColumn(iRow, "ASTF_DATE", rDate); //대체일

        	this.dsFS_ASTFXM.setColumn(iRow, "ASTF_TAMT", 0); //대체총액
        	this.dsFS_ASTFXM.setColumn(iRow, "SLIP_NUMB", ""); //전표번호
        	this.dsFS_ASTFXM.applyChange();
        	
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*----------------------------------------+
         |  체크박스 선택시 금회대체액 처리!  |
         +----------------------------------------*/
        this.dsFS_ASTFLS_OnColumnChanged = function (obj,e) {
        	
        	if (e.columnid == "CHCK") {
        		
        		if (e.newvalue == "0") {
        			obj.setColumn(e.row, "SOKR_AMOT", 0);
        		} else {
        			var iSokrAmot = nexacro.toNumber(obj.getColumn(e.row, "OCCU_AMOT")) - nexacro.toNumber(obj.getColumn(e.row, "SOKR_TAMT"));
        			obj.setColumn(e.row, "SOKR_AMOT", iSokrAmot);
        		}
        	
        	} else if (e.columnid == "SOKR_AMOT") {
        	
        		this.dsFS_ASTFXM.setColumn(0, "ASTF_TAMT", obj.getCaseSum("CHCK == '1'", "SOKR_AMOT"));
        		
        	}
        	
        	this.dsFS_ASTFXM.setColumn(0, "ASTF_TAMT", obj.getCaseSum("CHCK == '1'", "SOKR_AMOT"));
        	
        }

        /*--------------------+
         | Help Popup Open    |
         +--------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();

            if ((obj.name == "imgHelpSHRPROJ_CODE") || (obj.name == "edtSHRPROJ_NAME")) {
            
                arrParam[0] = "FSM0021";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRPROJ_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRPROJ_NAME";
                arrParam[5] = "edtSHRPROJ_CODE,edtSHRPROJ_NAME";
                arrParam[6] = "0,1";
                
                this.fnc_HelpDialogeAction(this, obj, arrParam);
                
            } else if ((obj.name == "imgHelpSHRACCT_INTL") || (obj.name == "edtSHRACCT_NAME")) {
            
                //arrParam[0] = "FAM0031";
                arrParam[0] = "FAM0037";
                arrParam[1] = "FA280030";
                arrParam[2] = this.fnc_Trim(this.edtSHRACCT_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRACCT_NAME";
                arrParam[5] = "edtSHRACCT_INTL,edtSHRACCT_NAME";
                arrParam[6] = "0,1";
                
                this.fnc_HelpDialogeAction(this, obj, arrParam);
                   
            } else if ((obj.name == "imgHelpSHRACCT_COD2") || (obj.name == "edtSHRACCT_NAM2")) {
            
                arrParam[0] = "FAM0031";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRACCT_NAM2.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRACCT_NAM2";
                arrParam[5] = "edtSHRACCT_COD2,edtSHRACCT_NAM2";
                arrParam[6] = "0,1";
                
                this.fnc_HelpDialogeAction(this, obj, arrParam);
            
        	} else if (obj.name == "grdFS_ASTFLA") {
        		
        		var objDs 	= this.objects[obj.binddataset];
        		var iRow	= objDs.rowposition;

        		// 연결항목조회
        		if (sColumnID == "ASST_NAME" || this.fnc_getColId(obj, obj.currentcell) == "ASST_NAME") {
        		
        			arrParam[0] = "FSM0014";
        			arrParam[1] = "";
        			arrParam[2] = "ASST_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdFS_ASTFLA";
        			arrParam[5] = "ASST_NUMB,ASST_NAME,CLSF_CODE,CLSF_NAME,ACCT_INTL,ACCT_NAME,ACQU_COST,ACQU_NUMB,ACQU_PRIC,PRID_DPCT";
        			arrParam[6] = "0,1,4,5,6,7,8,9,10,11";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        			
        		}
        		
        	}
        	
        }

        /*-------------------+
         |  전표조회 팝업  |
         +-------------------*/
        this.fn_OpenSlip = function (obj,e) {

        	if (this.fnc_Length(this.fnc_Trim(this.dsFS_ASTFLS.getColumn(e.row, "SSSL_NUMB"))) < 1) return;

        	if (this.fnc_GridColumnIndex(this.grdFS_ASTFLS, "SSSL_NUMB") == e.cell) {

        		var sSLIP_NUMB = this.fnc_Trim(this.dsFS_ASTFLS.getColumn(e.row, "SSSL_NUMB"));
        		var sResponse = this.fnc_PopSlipForm(sSLIP_NUMB, "SHR", this.sUSERLAVEL);
        		
        	}
        	
        }

        this.dsFS_ASTFLA_oncolumnchanged = function(obj,e) {

        	if (e.columnid == "ASST_NAME") {
        	
        		this.fn_HelpDialoge(this.grdFS_ASTFLA, "YES", e.oldvalue, e.columnid);

        	}
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsFS_ASTFLS.addEventHandler("oncolumnchanged", this.dsFS_ASTFLS_OnColumnChanged, this);
            this.dsFS_ASTFLA.addEventHandler("oncolumnchanged", this.dsFS_ASTFLA_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.grdFS_ASTFLA.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.btnAdd.addEventHandler("onclick", this.fn_Input, this);
            this.btnDel.addEventHandler("onclick", this.fn_Delete, this);
            this.edtSHRACCT_INTL.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRPROJ_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRPROJ_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.calASTF_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskASTF_TAMT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_COD2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAM2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRACCT_NAM2.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHRACCT_INTL.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRPROJ_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHRACCT_COD2.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.btnSlipCreate.addEventHandler("onclick", this.fn_Save, this);
            this.btnCancel.addEventHandler("onclick", this.fn_Cancel, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FSMF0010P01.xfdl");
        this.loadPreloadList();
       
    };
}
)();
