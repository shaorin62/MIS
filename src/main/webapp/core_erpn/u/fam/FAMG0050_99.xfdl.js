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
                this.set_name("FAMG0050");
                this.set_scrollbars("none");
                this.set_titletext("연결비용내역관리");
                this._setFormPosition(0,0,1187,834);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">ACCT_UNIT</Col><Col id=\"DSNAME\">dsSHRACCT_UNIT</Col><Col id=\"HEADFLAG\">N</Col></Row><Row><Col id=\"CODEID\">TRAN_DATA</Col><Col id=\"HEADFLAG\">N</Col><Col id=\"DSNAME\">dsSHRFILE_ID</Col></Row><Row><Col id=\"DSNAME\">dsCSFS_COMM</Col><Col id=\"CODEID\">CSFS_COMM</Col><Col id=\"HEADFLAG\">N</Col></Row><Row><Col id=\"DSNAME\">dsCSFS_TRST</Col><Col id=\"CODEID\">CSFS_TRST</Col><Col id=\"HEADFLAG\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" type=\"STRING\" size=\"256\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCSFS_COMM", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsNS_CFS_DATA_M", this);
            obj._setContents("<ColumnInfo><Column id=\"TRAN_SEQ\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"FILE_ID\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCOUNT_PERIOD\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"COMP_CODE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CSFS_TRST\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CSFS_TRST_ENABLE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"TRAN_USID\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"TRAN_DATE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"INST_USID\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"INST_DATE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"UPDT_USID\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"UPDT_DATE\" size=\"100\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsNS_CFS_DATA_D", this);
            obj._setContents("<ColumnInfo><Column id=\"TRAN_SEQ\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"FILE_ID\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCOUNT_PERIOD\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"COMP_CODE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SOURCE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQ\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"INSERTED_FLAG\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"IF_REG_DATE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"MODE_FLAG\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"EAI_FLAG\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"EAI_DATE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE1\" size=\"101\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE2\" size=\"102\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE3\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"ATTRIBUTE4\" size=\"104\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE5\" size=\"105\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE6\" size=\"106\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE7\" size=\"107\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE8\" size=\"108\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE9\" size=\"109\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE10\" size=\"110\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE11\" size=\"111\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE12\" size=\"112\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE13\" size=\"113\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE14\" size=\"114\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE15\" size=\"115\" prop=\"default\" type=\"STRING\"/><Column id=\"ATTRIBUTE16\" size=\"116\" prop=\"default\" type=\"STRING\"/><Column id=\"INST_USID\" size=\"117\" prop=\"default\" type=\"STRING\"/><Column id=\"INST_DATE\" size=\"118\" prop=\"default\" type=\"STRING\"/><Column id=\"UPDT_USID\" size=\"119\" prop=\"default\" type=\"STRING\"/><Column id=\"UPDT_DATE\" size=\"120\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "7", "60", null, "43", "25", null, this);
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "197", "400", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("6");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRACCOUNT_PERIOD", "absolute", "312", "71", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_dateformat("yyyy-MM");
            obj.set_taborder("2");
            obj.set_editformat("yyyy-MM");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_type("spin");

            obj = new Static("Static2", "absolute", "27", "71", "70", "21", null, null, this);
            obj.set_text("회계단위");
            obj.style.set_align("left middle");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_UNIT", "absolute", "95", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");

            obj = new Static("Static00", "absolute", "244", "71", "70", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("기준년월");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Button("btnTRAN_DATA", "absolute", null, "35", "74", "21", "1029", null, this);
            obj.set_taborder("19");
            obj.set_text("자료전송");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btnCREATE_DATA", "absolute", null, "35", "74", "21", "1106", null, this);
            obj.set_taborder("20");
            obj.set_text("자료생성");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Grid("grdNS_CFS_DATA_D01", "absolute", "8", "218", null, null, "25", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("27");
            obj.set_tabstop("false");
            obj.set_binddataset("dsTA_MAMNTM");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("none");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"63\" band=\"left\"/><Column size=\"76\" band=\"left\"/><Column size=\"100\"/><Column size=\"206\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"135\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"99\"/><Column size=\"74\"/><Column size=\"186\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" displaytype=\"text\" text=\"전송번호\"/><Cell col=\"3\" displaytype=\"text\" text=\"전송파일\"/><Cell col=\"4\" displaytype=\"text\" text=\"계정과목\"/><Cell col=\"5\" displaytype=\"text\" text=\"계정과목명\"/><Cell col=\"6\" displaytype=\"text\" text=\"금액(현지)\"/><Cell col=\"7\" displaytype=\"text\" text=\"연결법인코드\"/><Cell col=\"8\" displaytype=\"text\" text=\"연결법인코드명\"/><Cell col=\"9\" text=\"전표번호\"/><Cell col=\"10\" displaytype=\"text\" text=\"증빙일\"/><Cell col=\"11\" text=\"전기일\"/><Cell col=\"12\" text=\"거래처코드\"/><Cell col=\"13\" text=\"거래처명\"/><Cell col=\"14\" text=\"적요\"/><Cell col=\"15\" text=\"저장(전송)일자\"/><Cell col=\"16\" text=\"저장(전송)시간\"/><Cell col=\"17\" text=\"저장(전송)인\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" expr=\"expr:currow + 1\"/><Cell col=\"2\" displaytype=\"text\" style=\"align: left;background: EXPR(fnc_Decode(getRowLevel(currow), 0, fnc_Decode(expr_GetRowType(),&quot;insert&quot;,&quot;#c3d5fdff&quot;,&quot;update&quot;,&quot;#fdd9c3ff&quot;,&quot;default&quot;), 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));\" text=\"bind:ACCT_BFNM\"/><Cell col=\"3\" displaytype=\"number\" style=\"align: right;\" text=\"bind:TOTA_AMNT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: right;\" text=\"bind:MONT_02\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: right;\" text=\"bind:MONT_03\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: right;\" text=\"bind:MONT_04\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: right;\" text=\"bind:MONT_06\"/><Cell col=\"8\" displaytype=\"number\" style=\"align: right;\" text=\"bind:QTER_02\"/><Cell col=\"9\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: right;\" text=\"bind:HALF_01\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Shape1", "absolute", "8", "128", null, "65", "25", null, this);
            obj.set_taborder("28");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "261", "163", "91", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("전송상태");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "261", "137", "91", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("기준년월");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "28", "163", "91", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_text("법인코드");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCOMP_CODE", "absolute", "97", "163", "135", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTRAN_SEQ", "absolute", "97", "137", "135", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "28", "137", "91", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_text("I/F 순번");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "416", "193", "80", "25", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Calendar("calUPDT_DATE", "absolute", "577", "137", "135", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("52");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_enable("false");

            obj = new Static("Static01", "absolute", "509", "137", "91", "21", null, null, this);
            obj.set_taborder("55");
            obj.set_text("생성일지");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "743", "137", "91", "21", null, null, this);
            obj.set_taborder("56");
            obj.set_text("생성자");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUPDT_USID", "absolute", "800", "137", "150", "21", null, null, this);
            obj.set_taborder("58");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "509", "163", "91", "21", null, null, this);
            obj.set_taborder("59");
            obj.set_text("전송일시");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calTRAN_DATE", "absolute", "577", "163", "135", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("60");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_enable("false");

            obj = new Static("Static14", "absolute", "743", "163", "91", "21", null, null, this);
            obj.set_taborder("61");
            obj.set_text("전송자");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTRAN_USID", "absolute", "800", "163", "150", "21", null, null, this);
            obj.set_taborder("62");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "-127", "556", "30", "63", null, null, this);
            obj.set_taborder("67");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdNS_CFS_DATA_D00", "absolute", "8", "218", null, null, "25", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("72");
            obj.set_tabstop("false");
            obj.set_binddataset("dsNS_CFS_DATA_D");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\" band=\"left\"/><Column size=\"45\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"파일ID\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" displaytype=\"text\" text=\"법인계정코드\"/><Cell col=\"3\" displaytype=\"text\" text=\"법인계정명\"/><Cell col=\"4\" displaytype=\"text\" text=\"연결법인코드\"/><Cell col=\"5\" text=\"연결법인명\"/><Cell col=\"6\" text=\"거래통화\"/><Cell col=\"7\" text=\"거래통화금액\"/><Cell col=\"8\" text=\"장부통화금액\"/><Cell col=\"9\" text=\"전표번호\"/><Cell col=\"10\" text=\"거래일자\"/><Cell col=\"11\" text=\"회계일자\"/><Cell col=\"12\" text=\"거래처코드\"/><Cell col=\"13\" text=\"적요\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:FILE_ID\"/><Cell col=\"1\" style=\"align:right;\" text=\"bind:SEQ\" expr=\"expr:currow + 1\"/><Cell col=\"2\" displaytype=\"normal\" style=\"align:center;\" text=\"bind:ATTRIBUTE1\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:left;\" text=\"bind:ATTRIBUTE5\"/><Cell col=\"4\" displaytype=\"number\" style=\"align: right;\" text=\"bind:ATTRIBUTE3\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"합계\"/><Cell col=\"4\" displaytype=\"number\" expr=\"expr:nexacro.toNumber(dataset.getSum(&quot;ATTRIBUTE3&quot;), 0)\" mask=\"#,###\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("calACCOUNT_PERIOD", "absolute", "329", "137", "149", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("73");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_enable("false");

            obj = new Combo("cmbCSFS_TRST", "absolute", "329", "163", "149", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("74");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("84");
            obj.set_text("연결비용내역관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("85");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("86");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("87");
            obj.set_text("홈 > 재무관리> 연결결산관리 > 연결매출내역관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("88");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("89");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("90");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static90", "absolute", "9", "107", "191", "21", null, null, this);
            obj.set_taborder("91");
            obj.set_text("연결결산자료 전송상태");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "416", "103", "80", "25", null, null, this);
            obj.set_taborder("92");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("93");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("94");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 834, this,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_titletext("연결비용내역관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edtTRAN_SEQ","value","dsNS_CFS_DATA_M","TRAN_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","calACCOUNT_PERIOD","value","dsNS_CFS_DATA_M","ACCOUNT_PERIOD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","calUPDT_DATE","value","dsNS_CFS_DATA_M","UPDT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtCOMP_CODE","value","dsNS_CFS_DATA_M","COMP_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","cmbCSFS_TRST","value","dsNS_CFS_DATA_M","CSFS_TRST");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","calTRAN_DATE","value","dsNS_CFS_DATA_M","TRAN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edtTRAN_USID","value","dsNS_CFS_DATA_M","TRAN_USID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtUPDT_USID","value","dsNS_CFS_DATA_M","UPDT_USID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","btnTRAN_DATA","enable","dsNS_CFS_DATA_M","CSFS_TRST_ENABLE");
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
        this.addIncludeScript("FAMG0050_99.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("FAMG0050_99.xfdl", "script::lib_gfn.xjs");
        this.addIncludeScript("FAMG0050_99.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("FAMG0050_99.xfdl", function() {
        /***************************************************************************************************
         * # Program:	FAMG0010 연결시산표 관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.09		김기환		Initial Created.
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
        //include "script::lib_gfn.xjs"
        //include "script::lib_script_ubireport.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFFTF"; // 종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄
        this.sPACKAGENAME = "FAMG0010"; 
        this.sSOURCE 	  = ""; 
        this.sCOMP_CODE   = "";
        this.sSEQ		  = "";
        this.sRetValue	  = "";

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
         *                                         공통 Event 처리 부분                                  *
         **************************************************************************************************/
         /*--------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +---------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);

        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	//this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	var sDate = this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"));
        	this.calSHRACCOUNT_PERIOD.set_value((this.fnc_SubStr(sDate, 0, 6)));

        	this.grdNS_CFS_DATA_D00.set_visible(true);
        	this.grdNS_CFS_DATA_D01.set_visible(false);
        	
        	this.cmbSHRACCT_UNIT.setFocus();
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
        	
        	//초기화
        	this.fnc_DatasetClear("dsNS_CFS_DATA_M"); 
        	this.fnc_DatasetClear("dsNS_CFS_DATA_D"); 
        	
        	//트랜잭션
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsNS_CFS_DATA_M=dsNS_CFS_DATA_M";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*---------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능없음
        }

        /*---------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +---------------------------------*/
        this.fn_Delete = function (obj) {
        	// 기능없음
        }

        /*--------------------------+
         |  06.취소 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Cancel = function (obj) {
        	// 기능없음
        }

        /*--------------------------+
         |  07.저장 버튼 클릭 時  |
         ---------------------------*/
        this.fn_Save = function (obj) {
        	// 기능없음
        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this);
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능없음
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +-----------------------------------*/
         
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsNS_CFS_DATA_M", this);
        	var sMessage = this.fnc_FormUnloadCheck("dsNS_CFS_DATA_D", this);
        		
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)    |
         +-----------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*-------------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +-------------------------------------*/
        this.fn_EditFocus = function (obj){
        	this.fnc_EditFocus(obj);
        }

        
        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                  *
         ***************************************************************************************************/
        /*--------------------------+
         |  조회 필수 조건 체크!  |
         +--------------------------*/
        this.fn_SearchItemCheck = function () {

        	if(this.fnc_Length(this.fnc_Trim(this.cmbSHRACCT_UNIT.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "회계단위", this.cmbSHRACCT_UNIT);	
        	}
        	
        	if(this.fnc_Length(this.fnc_Trim(this.calSHRACCOUNT_PERIOD.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "기준연월", this.calSHRACCOUNT_PERIOD);	
        	}
        	
        	if (this.fnc_SubStr(this.fnc_Trim(this.cmbSHRFILE_ID.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM001", "전송데이터", this.cmbSHRFILE_ID);	
        	}
        	
        	return true;
        }

        /*---------------------+
         |  삭제 여부 체크!  |
         +---------------------*/
        this.fn_DeleteCheck = function () {
        	// 기능없음
        	return true;
        }

        /*---------------------+
         |  저장 여부 체크!  |
         +---------------------*/
        this.fn_SaveItemCheck = function () {
        	// 기능없음
        	return true;
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind){
        	
        	var sReturnString;
        	
        	if (sKind == "SEARCH00") {
        		
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value));
        		sReturnString += " COMP_CODE="  + this.fnc_Quote(this.fnc_Trim(this.sCOMP_CODE));
        		sReturnString += " SOURCE="  	+ this.fnc_Quote(this.fnc_Trim(this.sSOURCE));
        		sReturnString += " ACCOUNT_PERIOD=" + this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.calSHRACCOUNT_PERIOD.value, 0, 6)));
        		sReturnString += " FILE_ID="  	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRFILE_ID.value));
        		
        		if(!this.fnc_IsEmpty(this.sSEQ)){
        			sReturnString += " TRAN_SEQ="  	+ this.fnc_Quote(this.fnc_Trim(this.sSEQ));
        		}	
        		
        	} else if ( sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value));
        		sReturnString += " COMP_CODE="  + this.fnc_Quote(this.fnc_Trim(this.sCOMP_CODE));
        		sReturnString += " SOURCE="  	+ this.fnc_Quote(this.fnc_Trim(this.sSOURCE));
        		sReturnString += " TRAN_SEQ="   + this.fnc_Quote(this.fnc_Trim(this.edtTRAN_SEQ.value));
        		sReturnString += " ACCOUNT_PERIOD=" + this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.calSHRACCOUNT_PERIOD.value, 0, 6)));
        		sReturnString += " FILE_ID="    + this.fnc_Quote(this.fnc_Trim(this.cmbSHRFILE_ID.value));

        	} else if ( sKind == "SEARCH02") {
        	
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value));
        		sReturnString += " COMP_CODE="  + this.fnc_Quote(this.fnc_Trim(this.sCOMP_CODE));
        		sReturnString += " TRAN_SEQ="   + this.fnc_Quote(this.fnc_Trim(this.edtTRAN_SEQ.value)); //I/F순번
        		sReturnString += " CSFS_TRST="  + this.fnc_Quote("TRCP"); //전송완료
        		sReturnString += " ACCOUNT_PERIOD=" + this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.calSHRACCOUNT_PERIOD.value, 0, 6)));
        		sReturnString += " FILE_ID="  	+ this.fnc_Quote(this.fnc_Trim(this.cmbSHRFILE_ID.value));

        	} else if ( sKind == "CREATE_DATA") {
        	
        		var ACCOUNT_PERIOD1 = this.fnc_SubStr(this.calSHRACCOUNT_PERIOD.value, 0, 4).concat("0101");
        		var	ACCOUNT_PERIOD2 = this.fnc_SubStr(this.calSHRACCOUNT_PERIOD.value, 0, 6).concat(this.fnc_GetLastDayOfMonth(this.calSHRACCOUNT_PERIOD.value));

        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value));
        		sReturnString += " COMP_CODE="  + this.fnc_Quote(this.fnc_Trim(this.sCOMP_CODE));
        		sReturnString += " SOURCE="  	+ this.fnc_Quote(this.fnc_Trim(this.sSOURCE));
        		sReturnString += " TRAN_SEQ="   + this.fnc_Quote(this.fnc_Trim(this.edtTRAN_SEQ.value));
        		sReturnString += " ACCOUNT_PERIOD=" + this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.calSHRACCOUNT_PERIOD.value, 0, 6)));
        		sReturnString += " ACCOUNT_PERIOD1=" + this.fnc_Quote(this.fnc_Trim(ACCOUNT_PERIOD1));
        		sReturnString += " ACCOUNT_PERIOD2=" + this.fnc_Quote(this.fnc_Trim(ACCOUNT_PERIOD2));
        		sReturnString += " FILE_ID="    + this.fnc_Quote(this.fnc_Trim(this.cmbSHRFILE_ID.value));
        		sReturnString += " CSFS_TRST="  + this.fnc_Quote("TRWT"); //전송대기
        		
        	} else if ( sKind == "TRAN_DATA") {

        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="     + this.fnc_Quote(sKind);
        		sReturnString += " ACCT_UNIT="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRACCT_UNIT.value));
        		sReturnString += " COMP_CODE="  + this.fnc_Quote(this.fnc_Trim(this.sCOMP_CODE));
        		sReturnString += " SOURCE="  	+ this.fnc_Quote(this.fnc_Trim(this.sSOURCE));
        		sReturnString += " TRAN_SEQ="   + this.fnc_Quote(this.fnc_Trim(this.edtTRAN_SEQ.value));
        		sReturnString += " ACCOUNT_PERIOD=" + this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.calSHRACCOUNT_PERIOD.value, 0, 6)));
        		sReturnString += " FILE_ID="    + this.fnc_Quote(this.fnc_Trim(this.cmbSHRFILE_ID.value));
        		sReturnString += " CSFS_TRST="  + this.fnc_Quote("TRCP"); //전송완료
        	
        	}
        	
        	return sReturnString;

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
        	
        		if(this.dsNS_CFS_DATA_M.rowcount < 1)
        		{
        			this.fnc_Information(this.stInformation, this.dsNS_CFS_DATA_M.rowcount, "SHR");
        			this.fnc_Message("TMM018", this.dsNS_CFS_DATA_M.rowcount);
        		}
        		else
        		{
        			//IF 상세 조회
        			this.dsNS_CFS_DATA_M.set_rowposition(0);
        		
        			this.fnc_DatasetClear("dsNS_CFS_DATA_D"); 

        			var sMethodName = "SEARCH01";
        			var sInDataSet  = "";
        			var sOutDataSet = "dsNS_CFS_DATA_D=dsNS_CFS_DATA_D";
        			var sArgument   = this.fn_CreateArgument(sMethodName);

        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		}

        	} else if (sMethodName == "SEARCH01") {
        	
        		this.fnc_Information(this.stInformation, this.dsNS_CFS_DATA_D.rowcount, "SHR");
        		this.fnc_Message("TMM018", this.dsNS_CFS_DATA_D.rowcount);

        	} else if (sMethodName == "SEARCH02") {
        		
        		//완료상태일 경우 전송하지 않고 return
        		if ( this.sRetValue > 0)
        		{
        			this.fnc_Message("FAM005", "전송대기");
        			this.fn_Search();	//조회
        			return;
        		}
        		
        		//자료전송 실행
        		var sSEQ 		= "";
        		
        		var sMethodName = "TRAN_DATA";
        		var sInDataSet  = "";
        		var sOutDataSet = "";
        		var sArgument   = this.fn_CreateArgument(sMethodName);

        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	} else if (sMethodName == "CREATE_DATA") {
        		
        		this.edtTRAN_SEQ.set_value(this.sSEQ);
        		this.fn_Search();	//조회

        	} else if (sMethodName == "TRAN_DATA") {
        		
        		this.fnc_Message("TMM130", "자료전송");
        		this.sSEQ = this.edtTRAN_SEQ.value; //해당 파일순번을 재조회하기 위해
        		this.fn_Search();	//조회

        	} else if (sMethodName == "GetCommCode") {
        	
        		//폼변수 할당
        		this.sSOURCE 	= this.dsCSFS_COMM.getColumn(this.dsCSFS_COMM.findRowExpr("COMD_CODE == 'SOURCE'"), "COMD_CDNM");
        		this.sCOMP_CODE = this.dsCSFS_COMM.getColumn(this.dsCSFS_COMM.findRowExpr("COMD_CODE == 'COMP_CODE'"), "COMD_CDNM");
        		
        		//콤보박스 바인딩처리
        		var arrParam = new Array();			
        		arrParam[0] = "COMBO,cmbSHRACCT_UNIT,dsSHRACCT_UNIT,0";
        		arrParam[1] = "COMBO,cmbSHRFILE_ID,dsSHRFILE_ID,0";
        		arrParam[2] = "COMBO,cmbCSFS_TRST,dsCSFS_TRST,0";
        		
        		this.fnc_CommonCodeInnerBind(arrParam);
        	}
        	/*else if (sMethodName == "GetUserComboCode") {

        		//var arrParam = new Array();
        		
        		//arrParam[0] = "COMBO,cmbSHRACCT_GUBN,dsSHRACCT_GUBN,0";
        			
        		//this.fnc_UserComboInnerBind(arrParam);

        	}
        	*/
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리  |
         +------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {
        	// 기능없음
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        //자료생성 버튼 클릭 시
        this.btnCREATE_DATA_onclick = function(obj,e)
        {
        	//공통 화면변수값 존재여부 체크
        	if( this.fnc_IsEmpty(this.sSOURCE) || this.fnc_IsEmpty(this.sSOURCE) )
        	{
        	
        	}
        	
        	if( this.fnc_IsEmpty(this.sCOMP_CODE) || this.fnc_IsEmpty(this.sCOMP_CODE) )
        	{
        		
        	}

        	var sMsg = "기준연월 "+this.fnc_SubStr(this.calSHRACCOUNT_PERIOD.value,0,4)+"-"+
        			   this.fnc_SubStr(this.calSHRACCOUNT_PERIOD.value,4,2)+" "+
        			   "자료생성 하시겠습니까";
        			   
        	if (!this.fnc_Message("TMM140", sMsg)) {
        		return;
        	}
        	
        	this.sSEQ = "";
        	
        	var sMethodName = "CREATE_DATA";
        	var sInDataSet  = "";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        //자료전송 버튼 클릭 시
        this.btnTRAN_DATA_onclick = function(obj,e)
        {	
        	//전송대기 상태인지 체크
        	if(this.dsNS_CFS_DATA_M.getColumn(0,"CSFS_TRST") != "TRWT")
        	{
        		this.fnc_Message("FAM005", "전송대기");
        		return;
        	}
        	
        	var sMsg = "기준연월 "+this.fnc_SubStr(this.calSHRACCOUNT_PERIOD.value,0,4)+"-"+
        			   this.fnc_SubStr(this.calSHRACCOUNT_PERIOD.value,4,2)+" "+
        			   "자료전송 하시겠습니까";
        			   
        	if (!this.fnc_Message("TMM140", sMsg)) {
        		return;
        	}
        	
        	this.sRetValue = "";
        	
        	var sMethodName = "SEARCH02";
        	var sInDataSet  = "";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        this.cmbFILE_ID_onitemchanged = function(obj,e)
        {	
        	if(e.postindex == 0){
        		this.grdNS_CFS_DATA_D00.set_visible(true);
        		this.grdNS_CFS_DATA_D01.set_visible(false);
        	}else{
        		this.grdNS_CFS_DATA_D00.set_visible(false);
        		this.grdNS_CFS_DATA_D01.set_visible(true);
        	}
        }

        /***************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                	   *
         ***************************************************************************************************/
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.calSHRACCOUNT_PERIOD.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRACCT_UNIT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnTRAN_DATA.addEventHandler("onclick", this.btnTRAN_DATA_onclick, this);
            this.btnCREATE_DATA.addEventHandler("onclick", this.btnCREATE_DATA_onclick, this);
            this.Static16.addEventHandler("onclick", this.Static16_onclick, this);
            this.edtCOMP_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtTRAN_SEQ.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.Static09.addEventHandler("onclick", this.Static09_onclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("FAMG0050_99.xfdl");
        this.loadPreloadList();
       
    };
}
)();
