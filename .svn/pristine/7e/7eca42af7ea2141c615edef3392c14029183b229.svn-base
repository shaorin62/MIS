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
                this.set_name("FCMB0070");
                this.set_titletext("차입금거래현황");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,990,800);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTR_DBPYXD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ACCT_GUB1\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"DBPY_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQN_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DBPY_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DBPY_CUST\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"DBPY_CUNM\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DBPY_KIND\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"FUND_TYPE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"DBPY_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"INTE_RATE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TRAN_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"DBPY_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REPA_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DBPY_BALE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"INTE_AMOT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MAJR_REMK\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_DATE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"APPV_STAT\" size=\"1\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">DIV_CD</Col><Col id=\"DSNAME\">dsSHRACCT_GUB1</Col><Col id=\"HEADFLAG\">A</Col></Row><Row><Col id=\"CODEID\">DBPY_KIND</Col><Col id=\"DSNAME\">dsSHRDBPY_KIND</Col><Col id=\"HEADFLAG\">A</Col></Row><Row><Col id=\"CODEID\">DIV_CD</Col><Col id=\"DSNAME\">dsACCT_GUB1</Col><Col id=\"HEADFLAG\">N</Col></Row><Row><Col id=\"CODEID\">DBPY_KIND</Col><Col id=\"DSNAME\">dsDBPY_KIND</Col><Col id=\"HEADFLAG\">N</Col></Row><Row><Col id=\"CODEID\">FUND_TYPE</Col><Col id=\"DSNAME\">dsFUND_TYPE</Col><Col id=\"HEADFLAG\">N</Col></Row><Row><Col id=\"CODEID\">APPV_STAT</Col><Col id=\"DSNAME\">dsAPPV_STAT</Col><Col id=\"HEADFLAG\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHRACCT_GUB1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF5\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF6\" size=\"255\" type=\"STRING\"/><Column id=\"SORTORDE\" size=\"255\" type=\"BIGDECIMAL\"/><Column id=\"CODDYSNO\" size=\"255\" type=\"STRING\"/><Column id=\"COMNAME\" size=\"255\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSHRDBPY_KIND", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF5\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF6\" size=\"255\" type=\"STRING\"/><Column id=\"SORTORDE\" size=\"255\" type=\"BIGDECIMAL\"/><Column id=\"CODDYSNO\" size=\"255\" type=\"STRING\"/><Column id=\"COMNAME\" size=\"255\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsACCT_GUB1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF5\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF6\" size=\"255\" type=\"STRING\"/><Column id=\"SORTORDE\" size=\"255\" type=\"BIGDECIMAL\"/><Column id=\"CODDYSNO\" size=\"255\" type=\"STRING\"/><Column id=\"COMNAME\" size=\"255\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDBPY_KIND", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF5\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF6\" size=\"255\" type=\"STRING\"/><Column id=\"SORTORDE\" size=\"255\" type=\"BIGDECIMAL\"/><Column id=\"CODDYSNO\" size=\"255\" type=\"STRING\"/><Column id=\"COMNAME\" size=\"255\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsFUND_TYPE", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF5\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF6\" size=\"255\" type=\"STRING\"/><Column id=\"SORTORDE\" size=\"255\" type=\"BIGDECIMAL\"/><Column id=\"CODDYSNO\" size=\"255\" type=\"STRING\"/><Column id=\"COMNAME\" size=\"255\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAPPV_STAT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMCODE\" size=\"255\" type=\"STRING\"/><Column id=\"SUBCODE\" size=\"255\" type=\"STRING\"/><Column id=\"SUBNAME\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF1\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF2\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF3\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF4\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF5\" size=\"255\" type=\"STRING\"/><Column id=\"SUBREF6\" size=\"255\" type=\"STRING\"/><Column id=\"SORTORDE\" size=\"255\" type=\"BIGDECIMAL\"/><Column id=\"CODDYSNO\" size=\"255\" type=\"STRING\"/><Column id=\"COMNAME\" size=\"255\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "8", "109", "400", "23", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTR_DBPYXD", "absolute", "8", "132", null, null, "8", "8", this);
            obj.set_autoenter("none");
            obj.set_binddataset("dsTR_DBPYXD");
            obj.set_cellsizingtype("row");
            obj.set_enable("true");
            obj.set_selecttype("multirow");
            obj.set_taborder("7");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"70\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"147\" band=\"left\"/><Column size=\"130\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"75\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/><Row size=\"23\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"회계단위\"/><Cell col=\"1\" displaytype=\"text\" text=\"차입금번호\"/><Cell col=\"2\" displaytype=\"text\" text=\"차입금명\"/><Cell col=\"3\" displaytype=\"text\" text=\"차입기관\"/><Cell col=\"4\" displaytype=\"text\" text=\"차입종류\"/><Cell col=\"5\" displaytype=\"text\" text=\"자금유형\"/><Cell col=\"6\" displaytype=\"text\" text=\"차입일자\"/><Cell col=\"7\" displaytype=\"text\" text=\"이자율(%)\"/><Cell col=\"8\" displaytype=\"text\" text=\"거래일자\"/><Cell col=\"9\" displaytype=\"text\" text=\"차입금액(A)\"/><Cell col=\"10\" displaytype=\"text\" text=\"상환금액(B)\"/><Cell col=\"11\" displaytype=\"text\" text=\"잔액(A-B)\"/><Cell col=\"12\" displaytype=\"text\" text=\"이자금액\"/><Cell col=\"13\" displaytype=\"text\" text=\"적요\"/><Cell col=\"14\" displaytype=\"text\" text=\"전표번호\"/><Cell col=\"15\" displaytype=\"text\" text=\"승인상태\"/><Cell col=\"16\" displaytype=\"text\" text=\"회계일자\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACCT_GUB1\" combodataset=\"dsACCT_GUB1\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DBPY_NUMB\" mask=\"####-####\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:DBPY_NAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:DBPY_CUNM\"/><Cell col=\"4\" displaytype=\"combo\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DBPY_KIND\" combodataset=\"dsDBPY_KIND\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"5\" displaytype=\"combo\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:FUND_TYPE\" combodataset=\"dsFUND_TYPE\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"6\" displaytype=\"date\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DBPY_DATE\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:INTE_RATE\" mask=\"0.###\"/><Cell col=\"8\" displaytype=\"date\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:TRAN_DATE\"/><Cell col=\"9\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DBPY_AMOT\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:REPA_AMOT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:DBPY_BALE\"/><Cell col=\"12\" displaytype=\"number\" style=\"align: right;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:INTE_AMOT\"/><Cell col=\"13\" displaytype=\"text\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:MAJR_REMK\"/><Cell col=\"14\" displaytype=\"text\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:SLIP_NUMB\"/><Cell col=\"15\" displaytype=\"combo\" style=\"align: center;background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:APPV_STAT\" combodataset=\"dsAPPV_STAT\" combocodecol=\"SUBCODE\" combodatacol=\"SUBNAME\"/><Cell col=\"16\" displaytype=\"date\" style=\"background: EXPR(gfn_Decode(getRowLevel(currow), 0, gfn_Decode(expr_GetRowType(),'insert','#c3d5fdff','update','#fdd9c3ff','default'), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align: left;\" text=\"bind:ACCT_DATE\" calendardisplaynulltype=\"none\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" style=\"align: center;\" text=\"합계\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"3\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"4\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"5\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"6\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"7\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"8\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"9\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;getRowLevel(currow)==0&quot;, &quot;DBPY_AMOT&quot;, 0)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;getRowLevel(currow)==0&quot;, &quot;REPA_AMOT&quot;, 0)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;getRowLevel(currow)==0&quot;, &quot;DBPY_AMOT&quot;, 0) - dataset.getCaseSum(&quot;getRowLevel(currow)==0&quot;, &quot;REPA_AMOT&quot;, 0)\"/><Cell col=\"12\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getCaseSum(&quot;getRowLevel(currow)==0&quot;, &quot;INTE_AMOT&quot;, 0)\"/><Cell col=\"13\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"14\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"15\" displaytype=\"text\" style=\"align: left;\"/><Cell col=\"16\" displaytype=\"text\" style=\"align: left;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "38", "8", null, this);
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "541", "68", "16", "22", null, null, this);
            obj.set_text("~");
            obj.style.set_align("center middle");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRTRAN_DAT1", "absolute", "444", "68", "94", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHRTRAN_DAT2", "absolute", "560", "68", "94", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Edit("edtSHRDBPY_NUMB", "absolute", "733", "68", "80", "22", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_enable("false");
            obj.set_imemode("none");
            obj.set_taborder("4");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgHelpSHRDBPY_NUMB", "absolute", "814", "68", "22", "22", null, null, this);
            obj.set_image("URL('image::btnHelpPop.bmp')");
            obj.getSetter("transparenthittest").set("false");
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_imagealign("left middle");
            obj.style.set_background("#ffffff00 URL('theme://imagesInbus/imgHelpPopup.gif')");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDBPY_NAME", "absolute", "837", "68", "135", "22", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("asciii");
            obj.set_taborder("6");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("차입금거래현황");
            obj.style.set_align("left middle");
            obj.style.set_font("GulimChe,11, bold");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_text("자금관리>차입금거래현황");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "456", "25", "8", null, this);
            obj.set_taborder("22");
            obj.set_url("common::comButtonType01.xfdl");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "16", "68", "60", "22", null, null, this);
            obj.set_text("회계단위");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "197", "68", "60", "22", null, null, this);
            obj.set_text("차입종류");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "382", "68", "60", "22", null, null, this);
            obj.set_text("거래일자");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "671", "68", "60", "22", null, null, this);
            obj.set_text("차입금명");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUB1", "absolute", "77", "68", "110", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("@dsSHRACCT_GUB1");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_cssclass("styFormSearchItem");

            obj = new Combo("cmbSHRDBPY_KIND", "absolute", "259", "68", "110", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@dsSHRDBPY_KIND");
            obj.set_codecolumn("SUBCODE");
            obj.set_datacolumn("SUBNAME");
            obj.set_cssclass("styFormSearchItem");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 990, 800, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("차입금거래현황");
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
        this.addIncludeScript("FCMB0070.xfdl", "script::lib_script_common.xjs");
        this.registerScript("FCMB0070.xfdl", function() {
        /* MiPlatform API와 Component 속성, 메소드를 대체하는 공통함수 */
        // include "import::lib_XConvert.xjs";
        /***************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                           *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                            *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                       *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망             *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                      *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST = 'TTFFFFTF'; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = 'FCMB0070'; //해당 Form에서 사용 할 Package 명

        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {

        	//Quick View 실행 시 설정
        	this.sUSERAUTH     = '';   //사용자별 프로그램 사용 권한
        	this.sFORMCAPTION  = '';   //Form의 Title 정보
        	this.sFORMLOCATION = '';   //Form의 Location 정보
        	this.sUSERLAVEL    = '';   //Form의 Location 정보
        	
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
        this.fn_FormLoadSetting = function (obj,e)
        {
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);

        	// fnc_FormatSlipNumber(grdTR_DBPYXD, "SLIP_NUMB");

        	this.calSHRTRAN_DAT1.set_value((this.fnc_Left(this.fnc_GetServerDateTime("DATE"), 4) + '0101'));
        	this.calSHRTRAN_DAT2.set_value(this.fnc_GetServerDateTime("DATE"));

        	// 전표번호, 승인상태, 회계일자 행 삭제
        	this.grdTR_DBPYXD.deleteContentsCol(13);
        	this.grdTR_DBPYXD.deleteContentsCol(12);
        	this.grdTR_DBPYXD.deleteContentsCol(11);

        	this.cmbSHRACCT_GUB1.setFocus();
        }

        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj,e)
        {
        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj,e)
        {
        	if (!this.fn_SearchItemCheck()) 
        	{
        		return;
        	}
        	this.fnc_DatasetClear('dsTR_DBPYXD'); //기 조회 자료 초기화

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsTR_DBPYXD=dsTR_DBPYXD";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTR_DBPYXD.setFocus(); //재 클릭 방지를 위해 Focus 이동
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj,e)
        {
        	// 기능없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj,e)
        {
        	// 기능없음
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj,e)
        {
        	// 기능없음
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e)
        {
        	// 기능없음
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj,e)
        {
        	this.fnc_ToExcel(this);
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e)
        {
        	// 기능 없음
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsHR_ANDTXM01",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function (obj,e)
        {
        	return this.fnc_FormUnloadCheck("dsTR_DBPYXD", this);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e)
        {
        	//this.fnc_HotKey_new(this, obj, e);
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
        	if (this.fnc_DatasetChangeCheck("dsTR_DBPYXD")) 
        	{
        		if (this.fnc_Message("M1023") == false) 
        		{
        			return false;
        		}
        	}

        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function ()
        {
        	// 기능없음
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function ()
        {
        	// 기능없음
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
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_GUB1=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_GUB1.value)); //회계단위
        		sReturnString += " DBPY_KIND=" + this.fnc_Quote(this.fnc_Trim(this.cmbSHRDBPY_KIND.value)); //차입종류
        		sReturnString += " TRAN_DAT1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRTRAN_DAT1.value)); //거래일자1
        		sReturnString += " TRAN_DAT2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRTRAN_DAT2.value)); //거래일자2
        		sReturnString += " DBPY_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRDBPY_NUMB.value)); //차입금명
        	}

        	return sReturnString;
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG)
        {
        	// Service 후 Progress Bar Close
        	//this.fnc_CloseProgress();

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
        		this.fnc_Information(this.stInformation, this.dsTR_DBPYXD.rowcount, "SHR");
        		this.fnc_Message("M1007", this.dsTR_DBPYXD.rowcount);
        	}
        	else if (sMethodName == "GetCommCode") 
        	{
        		this.cmbSHRACCT_GUB1.set_index(0);
        		this.cmbSHRDBPY_KIND.set_index(0);

        		// var arrParam = new Array();
        		// arrParam[0]  = "COMBO,cmbSHRACCT_GUB1,dsSHRACCT_GUB1,0";	                  //회계단위
        		// arrParam[1]  = "COMBO,cmbSHRDBPY_KIND,dsSHRDBPY_KIND,0";	                  //차입종류
        		// arrParam[2]  = "GRID,grdTR_DBPYXD,dsACCT_GUB1,ACCT_GUB1";                     //회계단위(그리드)
        		// arrParam[3]  = "GRID,grdTR_DBPYXD,dsDBPY_KIND,DBPY_KIND";                     //차입종류(그리드)
        		// arrParam[4]  = "GRID,grdTR_DBPYXD,dsFUND_TYPE,FUND_TYPE";                     //자금유형(그리드)
        		// arrParam[5]  = "GRID,grdTR_DBPYXD,dsAPPV_STAT,APPV_STAT";                     //전표승인상태(그리드)
        		// 
        		// fnc_CommonCodeInnerBind(arrParam);
        	}
        	else if (sMethodName == "CODENAMESEARCH00") 
        	{
        		// 코드명 조회 후 처리
        		this.fnc_MultiRowDisplay(this);
        	}
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-----------------------+
         |  그리드 클릭 시 Sort!  |
         +------------------------*/
        this.fn_GridSort = function (obj,e)
        {
        	this.fnc_GridSort(obj, obj.binddataset, e.col);
        }

        /*---------------------------------+
         |  In Grid Enter Then Next Column  |
         +----------------------------------*/
        this.fn_NextColumn = function (obj,e)
        {
        	obj.moveToNextCell();
        }

        // /*------------------------------------+
        // | Help Popup Open                     |
        // +-------------------------------------*/
        // function fn_HelpDialoge(obj, sFromDs, sOldValue) {
        // 
        // var arrParam = new Array();
        // 
        // //조회 - 차입금(Popup)
        // if ((obj.name == 'imgHelpSHRDBPY_NUMB')||(obj.name == 'edtSHRDBPY_NAME')) {
        // 
        // arrParam[0] = 'TRM0002';
        // arrParam[1] = '';
        // arrParam[2] = fnc_Trim(edtSHRDBPY_NAME.value);
        // arrParam[3] = 'N';
        // arrParam[4] = 'edtSHRDBPY_NAME';
        // arrParam[5] = 'edtSHRDBPY_NUMB,edtSHRDBPY_NAME';
        // arrParam[6] = '0,1';
        // _HelpDialogeAction(this, obj, arrParam);
        // 
        // }
        // }

        
        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj)
        {
        	var sInputValue = "";
        	var sSearchKind = "";
        	var sCommonGubn = "";
        	var sResponse;
        	var sInputValue1 = "";
        	switch (obj.name) 
        	{
        		case "imgHelpSHRDBPY_NUMB":
        			// 조회-계정과목 정보 Popup
        			// if(edtSHRDBPY_NAME.enable==false) return;
        			sSearchKind = "TRM002"; //사용자 코드 조회 POPUP
        			sInputValue = this.fnc_Trim(this.edtSHRDBPY_NAME.value);
        			sCommonGubn = ""; //공통 구분 코드(공통코드 조회가 아니면 null)
        			sResponse = this._HelpDialoge(sSearchKind, sInputValue, ""); //sResponse   = _HelpDialoge(sSearchKind,sInputValue,sCommonGubn);  // Popup Open

        			if (this.fnc_Length(this.fnc_Trim(sResponse)) != 0) 
        			{
        				this.edtSHRDBPY_NUMB.set_value(sResponse[0]); //프로그램 ID
        				this.edtSHRDBPY_NAME.set_value(sResponse[1]); //프로그램 명
        			}

        			break;
        	}
        }

        /*---------------------------------------------------+
         | 코드나 명 입력 후 Lost Focus 시 해당 정보 Display  |
         +----------------------------------------------------*/
        this.fn_CodeNameDisplay = function (obj)
        {
        	// 변화가 없으면 굳이 실행 하지 않는다.
        	if (obj.value == obj.UserData) 
        	{
        		return;
        	}

        	application.GBL_CUROBJ = obj; //현재 선택한 Text Object
        	var sMethodName = "CODENAMESEARCH00";
        	var sInputValue = this.fnc_Trim(obj.value);
        	var sSearchKind = "";
        	var sCommonGubn = "";
        	var sInputValue1 = "";

        	switch (obj.name) 
        	{
        		case "edtSHRDBPY_NAME":
        			// 조회 - 계좌명(Popup)
        			sSearchKind = "TRM002"; //sCommonGubn =  "" ;
        			application.GBL_REVOBJ3 = "edtSHRDBPY_NUMB"; //메뉴 코드 Text Object명
        			application.GBL_REVOBJ4 = "edtSHRDBPY_NAME"; //메뉴 명칭 Text Object명
        			break;
        	}

        	// 조회 서비스 실행
        	this.fnc_CodeNameSearch(this, sMethodName, sSearchKind, sInputValue, sCommonGubn, sInputValue1);
        }

        
        /*----------------+
         |  전표조회 팝업  |
         +-----------------*/
        this.fn_OpenSlip = function (obj,e)
        {
        	// 전표번호 셀을 더블클릭 했을때만 전표조회 처리
        	if (this.fnc_GridColumnIndex(this.grdTR_DBPYXD, "SLIP_NUMB") == e.cell
        		 && this.fnc_Length(this.fnc_Trim(this.dsTR_DBPYXD.getColumn(e.row, "SLIP_NUMB"))) > 0) 
        	{
        		// var sACCT_GUB1 = fnc_Trim(dsTR_DBPYXD.getColumn(e.row,"ACCT_GUB1"));
        		var sSLIP_NUMB = this.fnc_Trim(this.dsTR_DBPYXD.getColumn(e.row, "SLIP_NUMB"));
        		// fnc_OpenSlipReadOnly(sACCT_GUB1, sSLIP_NUMB);
        		trace("SLIP_NUMB: " + sSLIP_NUMB);
        		this.fnc_PopSlipForm(sSLIP_NUMB, "SHR", this.sUSERLAVEL);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.grdTR_DBPYXD.addEventHandler("oncelldblclick", this.fn_OpenSlip, this);
            this.grdTR_DBPYXD.addEventHandler("onenterdown", this.fn_NextColumn, this);
            this.grdTR_DBPYXD.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.calSHRTRAN_DAT1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRTRAN_DAT2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRDBPY_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtSHRDBPY_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDBPY_NAME.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.cmbSHRACCT_GUB1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRDBPY_KIND.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("FCMB0070.xfdl");
        this.loadPreloadList();
       
    };
}
)();
