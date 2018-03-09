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
                this.set_name("PAYD0010");
                this.set_titletext("급여시뮬레이션");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPY_SIMUXM", this);
            obj._setContents("<ColumnInfo><Column id=\"SMUL_SEQN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SMUL_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"STDS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"BGIN_YMTH\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"ENDX_YMTH\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_500X\" size=\"500\" prop=\"default\" type=\"STRING\"/><Column id=\"DISP_SEQN\" type=\"BIGDECIMAL\" size=\"4\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_SIMUBS", this);
            obj._setContents("<ColumnInfo><Column id=\"SMUL_SEQN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EVGD_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"PRAT_CNTT\" size=\"1000\" prop=\"default\" type=\"STRING\"/><Column id=\"PRAD_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_SIMUXA", this);
            obj._setContents("<ColumnInfo><Column id=\"SMUL_SEQN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EVGD_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"OPOS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRAT_CNTT\" size=\"1000\" prop=\"default\" type=\"STRING\"/><Column id=\"PRAD_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" type=\"STRING\" size=\"100\"/><Column id=\"SMB1_AMOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SMB2_AMOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SMB3_AMOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SMA1_AMOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SMA2_AMOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SMA3_AMOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SMC1_AMOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SMC2_AMOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SMC3_AMOT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Rows><Row><Col id=\"CODEID\">CLSD_CODE</Col><Col id=\"DSNAME\">dsCLSD_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows><Row><Col id=\"DSNAME\">dsPRAD_CODE</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"CODEID\">PRAD_CODE</Col></Row><Row><Col id=\"DSNAME\">dsWGEG_CODE</Col><Col id=\"CODEID\">WGEG_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_SIMUXA_TEMP", this);
            obj._setContents("<ColumnInfo><Column id=\"SMUL_SEQN\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EVGD_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"OPOS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRAT_CNTT\" size=\"1000\" prop=\"default\" type=\"STRING\"/><Column id=\"PRAD_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("10");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("11");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("12");
            obj.set_text("급여시뮬레이션");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("13");
            obj.set_text("홈 > 재무관리 > 결산관리 > 재무제표관리 > 월별 손익계산서 조회");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "70", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("대상년도");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("45");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_SIMUXM", "absolute", "8", "128", null, "140", "25", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("dsPY_SIMUXM");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"442\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" text=\"회차\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"시뮬레이션명\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"기준일\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:SMUL_SEQN\" editlimit=\"0\" suppress=\"1\"/><Cell col=\"1\" edittype=\"text\" style=\"align:left;\" text=\"bind:SMUL_NAME\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" style=\"align:center;\" text=\"bind:STDS_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" edittype=\"text\" style=\"align:left;\" text=\"bind:REMK_500X\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("109");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnPROC", "absolute", "8", "35", "110", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("시뮬레이션 처리");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("111");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popINSERT00", "absolute", "1267", "153", "474", "118", null, null, this);
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_WF_insert");
            this.addChild(obj.name, obj);
            obj = new Static("Shape00", "absolute", "9", "9", "456", "67", null, null, this.popINSERT00);
            obj.set_taborder("29");
            obj.set_cssclass("styFormItemBoxOut");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Button("btnClose", "absolute", "403", "84", "62", "24", null, null, this.popINSERT00);
            obj.set_taborder("30");
            obj.set_text("취소");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Button("btnINSERT", "absolute", "338", "84", "62", "24", null, null, this.popINSERT00);
            obj.set_taborder("31");
            obj.set_text("확인");
            obj.set_cssclass("btn_POP_CRUD");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGE_CODE_TO", "absolute", "169", "86", "118", "22", null, null, this.popINSERT00);
            obj.set_taborder("32");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGE_CODE_FROM", "absolute", "25", "86", "118", "22", null, null, this.popINSERT00);
            obj.set_taborder("33");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Static("stInformation01", "absolute", "335", "44", "120", "21", null, null, this.popINSERT00);
            obj.set_taborder("34");
            obj.set_text("으로 복사합니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("left middle");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Static("stInformation00", "absolute", "335", "18", "120", "21", null, null, this.popINSERT00);
            obj.set_taborder("35");
            obj.set_text("의 급여조정 데이터를");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("left middle");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGE_NAME_FROM", "absolute", "212", "18", "118", "21", null, null, this.popINSERT00);
            obj.set_taborder("36");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGE_NAME_TO", "absolute", "212", "44", "118", "21", null, null, this.popINSERT00);
            obj.set_taborder("37");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Static("imgHelpSHRPAYX_DATE_TO", "absolute", "189", "44", "22", "21", null, null, this.popINSERT00);
            obj.set_taborder("38");
            obj.set_cssclass("sytHelpPopup");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Static("imgHelpSHRPAYX_DATE_FROM", "absolute", "189", "18", "22", "21", null, null, this.popINSERT00);
            obj.set_taborder("39");
            obj.set_cssclass("sytHelpPopup");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new MaskEdit("medSHRPAYX_DATE_FROM", "absolute", "110", "18", "77", "21", null, null, this.popINSERT00);
            obj.set_taborder("40");
            obj.set_tabstop("false");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new MaskEdit("medSHRPAYX_DATE_TO", "absolute", "110", "44", "77", "21", null, null, this.popINSERT00);
            obj.set_taborder("41");
            obj.set_tabstop("false");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Static("imgSearchTitle_TO", "absolute", "29", "44", "87", "21", null, null, this.popINSERT00);
            obj.set_taborder("42");
            obj.set_text("대상지급일");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.popINSERT00.addChild(obj.name, obj);
            obj = new Static("imgSearchTitle_FROM", "absolute", "29", "18", "87", "21", null, null, this.popINSERT00);
            obj.set_taborder("43");
            obj.set_text("기준지급일");
            obj.set_cssclass("styFormSearchCapBe");
            obj.style.set_align("left");
            this.popINSERT00.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "1268", "173", "8", "96", null, null, this);
            obj.set_taborder("112");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "1433", "261", "294", "8", null, null, this);
            obj.set_taborder("113");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "1237", "154", "182", "8", null, null, this);
            obj.set_taborder("114");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "1732", "161", "8", "96", null, null, this);
            obj.set_taborder("115");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medSHRPAYX_YYYY", "absolute", "96", "71", "80", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_mask("####");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "885", "268", "80", "35", null, null, this);
            obj.set_taborder("117");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_SIMUBS", "absolute", "8", "303", "309", null, null, "15", this);
            obj.set_taborder("6");
            obj.set_binddataset("dsPY_SIMUBS");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"73\"/><Column size=\"65\"/><Column size=\"129\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" text=\"평가등급\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"조정구분\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_essential\" text=\"조정내용\"/></Band><Band id=\"body\"><Cell edittype=\"none\" style=\"align:left;\" text=\"bind:EVGD_CODE\" editlimit=\"0\" suppress=\"0\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:PRAD_CODE\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:PRAT_CNTT\" mask=\"expr:PRAD_CODE == &quot;2&quot; ? &quot;#,### %&quot; : &quot;#,### 원&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "8", "297", "216", "6", null, null, this);
            obj.set_taborder("119");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "8", "282", "190", "21", null, null, this);
            obj.set_taborder("120");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation2", "absolute", "337", "282", "190", "21", null, null, this);
            obj.set_taborder("121");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "337", "297", "216", "6", null, null, this);
            obj.set_taborder("122");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_SIMUXA", "absolute", "337", "303", null, null, "25", "15", this);
            obj.set_taborder("9");
            obj.set_binddataset("dsPY_SIMUXA");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"66\"/><Column size=\"86\"/><Column size=\"96\"/><Column size=\"74\"/><Column size=\"84\"/><Column size=\"120\"/><Column size=\"169\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" text=\"사원번호\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"직위\"/><Cell col=\"3\" text=\"평가등급\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_essential\" text=\"조정구분\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_essential\" text=\"조정내용\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_edit\" text=\"비고\"/></Band><Band id=\"body\"><Cell style=\"align: ;\" text=\"bind:EMPL_NUMB\" editlimit=\"0\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:EMPL_NAME\"/><Cell col=\"2\" text=\"bind:OPOS_NAME\"/><Cell col=\"3\" text=\"bind:EVGD_CODE\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;\" text=\"bind:PRAD_CODE\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:PRAT_CNTT\" mask=\"expr:PRAD_CODE == &quot;2&quot; ? &quot;#,### %&quot; : &quot;#,### 원&quot;\"/><Cell col=\"6\" edittype=\"text\" text=\"bind:REMK_100X\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow00", "absolute", null, "278", "70", "21", "870", null, this);
            obj.set_taborder("123");
            obj.set_tabstop("false");
            obj.set_text("대상자생성");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "317", "517", "20", "41", null, null, this);
            obj.set_taborder("124");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 474, 118, this.popINSERT00,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_cssclass("pdiv_WF_insert");

            	}
            );
            this.popINSERT00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("급여시뮬레이션");

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
        this.addIncludeScript("PAYD0010.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYD0010.xfdl", function() {
        /***************************************************************************************************
         * # Program:   PAYD0010 급여시뮬레이션
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date           Modifier    Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.11.02     이용관     Initial Created.
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

        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTTTTTTF";
        this.sPACKAGENAME = "PAYD0010";

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

        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
            this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
            this.fnc_GridSetting(this);
            this.fnc_GetComboDs(this.dsCombo);
        	this.medSHRPAYX_YYYY.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,4));
        	this.medSHRPAYX_YYYY.setFocus();

        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();

        }

        /*------------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {

        	if (!this.fn_SearchItemCheck()) return;
        	

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPY_SIMUXM=dsPY_SIMUXM";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

        	var iRow = this.dsPY_SIMUXM.addRow();
        	this.fnc_DatasetClear("dsPY_SIMUBS,dsPY_SIMUXA");
        	this.dsPY_SIMUXM.setColumn( iRow, "STDS_DATE", this.fnc_SubStr(this.fnc_GetServerDateTime("DATE")) );
        	this.grdPY_SIMUXM.setCellPos(this.fnc_GridColumnIndex(this.grdPY_SIMUXM, "SMUL_NAME"));
        	
        	this.grdPY_SIMUXM.setFocus();
        	
        	for (var i = 0; i < this.dsWGEG_CODE.getRowCount(); i++) {
        		var iRow = this.dsPY_SIMUBS.addRow();
        		this.dsPY_SIMUBS.setColumn( iRow, "EVGD_CODE", this.dsWGEG_CODE.getColumn( i, "COMD_CODE" ));
        		this.dsPY_SIMUBS.setColumn( iRow, "PRAD_CODE", "2" );
        	}
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	if (this.fn_DeleteCheck()) {

        		this.dsPY_SIMUXM.deleteRow(this.dsPY_SIMUXM.rowposition);
        		this.grdPY_SIMUXM.setFocus();
        	}

        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsPY_SIMUXM,dsPY_SIMUBS,dsPY_SIMUXA");
        	this.grdPY_SIMUXM.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsPY_SIMUXM=dsPY_SIMUXM:U dsPY_SIMUBS=dsPY_SIMUBS:U dsPY_SIMUXA=dsPY_SIMUXA:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*------------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);

        }

        /*------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {

        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_SIMUXM,dsPY_SIMUBS,dsPY_SIMUXA", this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);

        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e){
        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);

        }

        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsPY_SIMUXM,dsPY_SIMUBS,dsPY_SIMUXA")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}

        	if (this.fnc_Length(this.fnc_Trim(this.medSHRPAYX_YYYY.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "대상년도", this.medSHRPAYX_YYYY);

        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {

        	if (this.dsPY_SIMUXM.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var sQuestionText   = "시뮬레이션명:" + this.fnc_Trim(this.dsPY_SIMUXM.getColumn(this.dsPY_SIMUXM.rowposition, "SMUL_NAME"));
        	
        	return this.fnc_Message("TMM002", sQuestionText);
        	
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsPY_SIMUXM,dsPY_SIMUBS,dsPY_SIMUXA")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	

        	for (var i = 0; i < this.dsPY_SIMUXM.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsPY_SIMUXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_SIMUXM.getColumn(i, "SMUL_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "시뮬레이션명", this.dsPY_SIMUXM, i, this.grdPY_SIMUXM, "SMUL_NAME");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_SIMUXM.getColumn(i, "STDS_DATE"))) < 8) {
        			return this.fnc_CheckPostAction("TMM072", "기준일", this.dsPY_SIMUXM, i, this.grdPY_SIMUXM, "STDS_DATE");
        		}
        	}
        	

        	for (var i = 0; i < this.dsPY_SIMUBS.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsPY_SIMUBS.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_SIMUBS.getColumn(i, "PRAD_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "조정구분", this.dsPY_SIMUBS, i, this.grdPY_SIMUBS, "PRAD_CODE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_SIMUBS.getColumn(i, "PRAT_CNTT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "조정내용", this.dsPY_SIMUBS, i, this.grdPY_SIMUBS, "PRAT_CNTT");
        		}
        		
        	}

        	for (var i = 0; i < this.dsPY_SIMUXA.getRowCount(); i++) {

        		if (this.fnc_ToUpper(this.dsPY_SIMUXA.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_SIMUXA.getColumn(i, "PRAD_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "조정구분", this.dsPY_SIMUXA, i, this.grdPY_SIMUXA, "PRAD_CODE");
        		}

        		if (this.fnc_Length(this.fnc_Trim(this.dsPY_SIMUXA.getColumn(i, "PRAT_CNTT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "조정내용", this.dsPY_SIMUXA, i, this.grdPY_SIMUXA, "PRAT_CNTT");
        		}
        		
        	}
        	
        	
        	return true;
        }

        
        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " STDS_YEAR=" + this.fnc_Quote(this.fnc_Trim(this.medSHRPAYX_YYYY.value));
        		
        	} else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " SMUL_SEQN=" + this.fnc_Quote(this.fnc_Trim(this.dsPY_SIMUXM.getColumn(this.dsPY_SIMUXM.rowposition, "SMUL_SEQN") ));
        		
        	} else if (sKind == "SEARCH02") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " SMUL_SEQN=" + this.fnc_Quote(this.fnc_Trim(this.dsPY_SIMUXM.getColumn(this.dsPY_SIMUXM.rowposition, "SMUL_SEQN") ));
        		sReturnString += " STDS_DATE=" + this.fnc_Quote(this.fnc_Trim(this.dsPY_SIMUXM.getColumn(this.dsPY_SIMUXM.rowposition, "STDS_DATE") ));
        		sReturnString += " OPOS_CODE=" + this.fnc_Quote(this.fnc_Trim(this.dsPY_SIMUBS.getColumn(this.dsPY_SIMUBS.rowposition, "OPOS_CODE") ));
        		sReturnString += " EXPD_CODE=" + this.fnc_Quote(this.fnc_Trim(this.dsPY_SIMUBS.getColumn(this.dsPY_SIMUBS.rowposition, "EXPD_CODE") ));
        		sReturnString += " PRAT_CNTT=" + this.fnc_Quote(this.fnc_Trim(this.dsPY_SIMUBS.getColumn(this.dsPY_SIMUBS.rowposition, "PRAT_CNTT") ));
        		sReturnString += " PRAD_CODE=" + this.fnc_Quote(this.fnc_Trim(this.dsPY_SIMUBS.getColumn(this.dsPY_SIMUBS.rowposition, "PRAD_CODE") ));
        		
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

        	} else if (sKind == "PROC00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " SMUL_SEQN=" + this.fnc_Quote(this.fnc_Trim(this.dsPY_SIMUXM.getColumn(this.dsPY_SIMUXM.rowposition, "SMUL_SEQN") ));
        	
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

        /*-------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SEARCH00") {
        		this.dsPY_SIMUXM.set_rowposition( 0 );
        		this.fnc_Information(this.stInformation, this.dsPY_SIMUXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_SIMUXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        		this.grdPY_SIMUXM.setFocus();
        		
            } else if (sMethodName == "SEARCH01") {
        		this.dsPY_SIMUBS.set_rowposition( 0 );
                this.fnc_Information(this.stInformation1, this.dsPY_SIMUBS.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
                this.fnc_Information(this.stInformation2, this.dsPY_SIMUXA.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");

            } else if (sMethodName == "SEARCH02") {
                this.fnc_Information(this.stInformation2, this.dsPY_SIMUXA_TEMP.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.dsPY_SIMUXA.set_enableevent( false );
        		for (var i = 0; i < this.dsPY_SIMUXA_TEMP.getRowCount(); i++) {
        			var nRow = this.dsPY_SIMUXA.addRow();
        			this.dsPY_SIMUXA.copyRow( nRow, this.dsPY_SIMUXA_TEMP, i );		
        			var nFind = this.dsPY_SIMUBS.findRow( "EVGD_CODE", this.dsPY_SIMUXA_TEMP.getColumn( i, "EVGD_CODE" ));
        			trace("EVGD_CODE =='" + this.dsPY_SIMUXA_TEMP.getColumn( i, "EVGD_CODE" ) + "' findRow=" + nFind);
        			if (nFind != -1) {
        				this.dsPY_SIMUXA.setColumn( nRow, "PRAT_CNTT", this.dsPY_SIMUBS.getColumn( nFind, "PRAT_CNTT" ));
        				this.dsPY_SIMUXA.setColumn( nRow, "PRAD_CODE", this.dsPY_SIMUBS.getColumn( nFind, "PRAD_CODE" ));
        			} else {
        				this.dsPY_SIMUXA.setColumn( nRow, "PRAD_CODE", "2");
        				this.dsPY_SIMUXA.setColumn( nRow, "PRAT_CNTT", "100");
        			}
        		}
        		this.dsPY_SIMUXA.set_enableevent( true );
        		
        	} else if (sMethodName == "SAVE00") {
        		this.fn_KeyFieldDisible(this.dsPY_SIMUXM);
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        		
        	} else if (sMethodName == "PROC00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM071", "시뮬레이션이");
        		this.fn_Search();
        		
        	} else if (sMethodName == "GetCommCode") {
        	
        		var arrParam = new Array();
        			arrParam[0] = "GRID,grdPY_SIMUBS,dsPRAD_CODE,PRAD_CODE";	
        			arrParam[1] = "GRID,grdPY_SIMUXA,dsPRAD_CODE,PRAD_CODE";	
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {
        	
        	if (this.dsPY_SIMUXM.getRowType( e.newrow ) == Dataset.ROWTYPE_INSERT) return;
        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPY_SIMUBS=dsPY_SIMUBS dsPY_SIMUXA=dsPY_SIMUXA";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	if (obj.name == "grdPY_SIMUBS") { // 그리드 사원
                if (this.fnc_getGridHelpColName(obj, sFromDs) == "OPOS_NAME" || sColumnID == "OPOS_NAME" ) { // 직위
                    arrParam[0] = "TMM1000";
                    arrParam[1] = "OPOS_CODE";
                    arrParam[2] = "OPOS_NAME";
                    arrParam[3] = "N";
                    arrParam[4] = "grdPY_SIMUBS";
                    arrParam[5] = "OPOS_CODE,OPOS_NAME";
                    arrParam[6] = "0,1";
                    arrParam[7] = sFromDs;
                    arrParam[8] = sOldValue;
                } else if (this.fnc_getGridHelpColName(obj, sFromDs) == "EXPD_NAME" || sColumnID == "EXPD_NAME" ) { // 수당공제코드
                    arrParam[0] = "PAY0012";
                    arrParam[1] = "1,A,1";
                    arrParam[2] = "EXPD_NAME";
                    arrParam[3] = "N";
                    arrParam[4] = "grdPY_SIMUBS";
                    arrParam[5] = "EXPD_CODE,EXPD_NAME";
                    arrParam[6] = "0,1";
                    arrParam[7] = sFromDs;
                    arrParam[8] = sOldValue;
                }
        	}
        	
        	if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);
        	
        }
        /*-----------------------------------+
         |  dsPY_SIMUBS의 컬럼 값 변경 時  |
         +-----------------------------------*/
        this.dsPY_SIMUBS_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "PRAD_CODE") {
        		this.dsPY_SIMUBS.setColumn( e.row, "PRAT_CNTT", "");
        	}
        }
        /*-----------------------------------+
         |  dsPY_SIMUXA의 컬럼 값 변경 時  |
         +-----------------------------------*/
        this.dsPY_SIMUXA_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "PRAD_CODE") {
        		this.dsPY_SIMUXA.setColumn( e.row, "PRAT_CNTT", "");
        	}	
        }

        /*--------------------+
         |  대상자 버튼 클릭 時  |
         +--------------------*/
        this.btnMove_onclick = function(obj,e)
        {
        	//기존자료 삭제
        	this.dsPY_SIMUXA.deleteAll();

        	var sMethodName = "SEARCH02";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPY_SIMUXA_TEMP=dsPY_SIMUXA";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }
        /*-----------------------------------+
         |  시뮬레이션처리 버튼 클릭 時  |
         +-----------------------------------*/
        this.btnPROC_onclick = function(obj,e)
        {
        	var sQuestionText   = this.fnc_Trim(this.dsPY_SIMUXM.getColumn(this.dsPY_SIMUXM.rowposition, "SMUL_NAME"));
        	
        	if (!this.fnc_Message("HRM073", sQuestionText)) return;

        	var sMethodName = "PROC00";
        	var sInDataSet  = "";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_SIMUXM.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsPY_SIMUBS.addEventHandler("oncolumnchanged", this.dsPY_SIMUBS_oncolumnchanged, this);
            this.dsPY_SIMUXA.addEventHandler("oncolumnchanged", this.dsPY_SIMUXA_oncolumnchanged, this);
            this.dsPY_SIMUXA_TEMP.addEventHandler("oncolumnchanged", this.dsPY_SIMUXA_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.grdPY_SIMUXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.btnPROC.addEventHandler("onclick", this.btnPROC_onclick, this);
            this.popINSERT00.btnClose.addEventHandler("onclick", this.popINSERT_btnClose_OnClick, this);
            this.popINSERT00.btnINSERT.addEventHandler("onclick", this.popINSERT_btnINSERT_OnClick, this);
            this.popINSERT00.edtSHRWAGE_CODE_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT00.edtSHRWAGE_CODE_TO.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popINSERT00.edtSHRWAGE_CODE_FROM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT00.edtSHRWAGE_CODE_FROM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popINSERT00.edtSHRWAGE_NAME_FROM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT00.edtSHRWAGE_NAME_FROM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popINSERT00.edtSHRWAGE_NAME_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT00.edtSHRWAGE_NAME_TO.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popINSERT00.imgHelpSHRPAYX_DATE_TO.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.popINSERT00.imgHelpSHRPAYX_DATE_FROM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.popINSERT00.medSHRPAYX_DATE_FROM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popINSERT00.medSHRPAYX_DATE_TO.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.grdPY_SIMUBS.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.grdPY_SIMUXA.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.btnAddRow00.addEventHandler("onclick", this.btnMove_onclick, this);

        };

        this.loadIncludeScript("PAYD0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
