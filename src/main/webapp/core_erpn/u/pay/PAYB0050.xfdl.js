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
                this.set_name("PAYB0050");
                this.set_titletext("성과급관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">WGEG_CODE</Col><Col id=\"DSNAME\">dsWGEG_CODE</Col><Col id=\"HEADFLAG\">E</Col></Row><Row><Col id=\"DSNAME\">dsEVAL_DTGN</Col><Col id=\"CODEID\">EVAL_DTGN</Col><Col id=\"HEADFLAG\">E</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsUserCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMBOID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"USEYSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PARAM\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"COMBOID\">EVM0020</Col><Col id=\"DSNAME\">dsSHREVAL_NAME</Col><Col id=\"HEADFLAG\">EMPTY</Col><Col id=\"PARAM\"/><Col id=\"USEYSNO\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPMBU_CONF", this);
            obj._setContents("<ColumnInfo><Column id=\"SYNT_EACD\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BSBN_RATE\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"BVGN_RATE\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"PVGN_RATE\" type=\"BIGDECIMAL\" size=\"15\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_BONYRT", this);
            obj._setContents("<ColumnInfo><Column id=\"SYNT_EACD\" size=\"8\" prop=\"default\" type=\"\"/><Column id=\"EVGD_CODE\" size=\"10\" prop=\"default\" type=\"\"/><Column id=\"EVAL_DTGN\" size=\"10\" prop=\"default\" type=\"\"/><Column id=\"BONU_RATE\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_EVBONU", this);
            obj._setContents("<ColumnInfo><Column id=\"SYNT_EACD\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BSLY_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BSBN_RATE\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BVGD_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"BVGP_RATE\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PVGD_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"PVGP_RATE\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BONU_AMOT\" size=\"15\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PAYR_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"PAYX_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"WAGE_CODE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OPOS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BVGN_RATE\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"PVGN_RATE\" type=\"BIGDECIMAL\" size=\"15\"/><Column id=\"WADE_YSNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("edtSHRWAGE_CODE", "absolute", "177", "76", "150", "22", null, null, this);
            obj.set_taborder("25");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "8", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_EVBONU", "absolute", "245", "132", null, null, "8", "8", this);
            obj.set_selecttype("row");
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsPY_EVBONU");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("200");
            obj.set_taborder("3");
            obj.set_tabstop("false");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"58\"/><Column size=\"64\"/><Column size=\"91\"/><Column size=\"91\"/><Column size=\"60\"/><Column size=\"103\"/><Column size=\"70\"/><Column size=\"40\"/><Column size=\"74\"/><Column size=\"40\"/><Column size=\"74\"/><Column size=\"70\"/><Column size=\"103\"/><Column size=\"57\"/><Column size=\"85\"/><Column size=\"57\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"text\" text=\"사번\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"text\" text=\"성명\"/><Cell col=\"2\" rowspan=\"2\" text=\"부서\"/><Cell col=\"3\" rowspan=\"2\" text=\"직위\"/><Cell col=\"4\" rowspan=\"2\" cssclass=\"Cellgrd_WF_edit\" text=\"부서구분\"/><Cell col=\"5\" rowspan=\"2\" displaytype=\"text\" style=\"background: ;\" text=\"기본급\"/><Cell col=\"6\" rowspan=\"2\" text=\"표준&#13;&#10;지급율(%)\"/><Cell col=\"7\" colspan=\"2\" displaytype=\"text\" style=\"background: ;\" text=\"조직평가\"/><Cell col=\"9\" colspan=\"2\" text=\"개인평가\"/><Cell col=\"11\" rowspan=\"2\" text=\"개인&#13;&#10;지급율(%)\"/><Cell col=\"12\" rowspan=\"2\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_edit\" text=\"성과상여 지급액\"/><Cell col=\"13\" rowspan=\"2\" text=\"급여&#13;&#10;반영여부\"/><Cell col=\"14\" rowspan=\"2\" text=\"지급일\"/><Cell col=\"15\" rowspan=\"2\" text=\"급여&#13;&#10;마감여부\"/><Cell row=\"1\" col=\"7\" text=\"등급\"/><Cell row=\"1\" col=\"8\" text=\"지급율(%)\"/><Cell row=\"1\" col=\"9\" text=\"등급\"/><Cell row=\"1\" col=\"10\" text=\"지급율(%)\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:center;background: ;\" text=\"bind:EMPL_NUMB\" editlengthunit=\"ascii\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;background: ;\" text=\"bind:EMPL_NAME\" editlimit=\"20\" editimemode=\"native\" editlengthunit=\"ascii\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left;\" text=\"bind:OPOS_NAME\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" style=\"align:left;\" text=\"bind:EVAL_DTGN\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;\" text=\"bind:BSLY_AMOT\" editlengthunit=\"ascii\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BSBN_RATE\" mask=\"#,###\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" style=\"align:center;\" text=\"bind:BVGD_CODE\" editlengthunit=\"ascii\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:BVGP_RATE\" mask=\"#,###\"/><Cell col=\"9\" style=\"align:center;\" text=\"bind:PVGD_CODE\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PVGP_RATE\" mask=\"#,###\"/><Cell col=\"11\" style=\"align:right;\" expr=\"expr:( BVGP_RATE * ( BVGN_RATE / 100 ) ) + ( PVGP_RATE * ( PVGN_RATE / 100 ) )\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"masknumber\" editfilter=\"number\" style=\"align:right;\" text=\"bind:BONU_AMOT\" editlengthunit=\"ascii\"/><Cell col=\"13\" displaytype=\"checkbox\" text=\"bind:PAYR_YSNO\"/><Cell col=\"14\" displaytype=\"date\" style=\"align:center;\" text=\"bind:PAYX_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"15\" displaytype=\"checkbox\" style=\"align:center;\" text=\"bind:WADE_YSNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "16", null, this);
            obj.set_text("급여관리 > 급여관리");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "31", "455", "23", "8", null, this);
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle7", "absolute", "40", "71", "47", "22", null, null, this);
            obj.set_text("평가명");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "109", "248", "23", null, null, this);
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_BONYRT", "absolute", "8", "132", "230", null, null, "8", this);
            obj.set_taborder("26");
            obj.set_binddataset("dsPY_BONYRT");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_tooltiptype("inplace");
            obj.style.set_border("2 solid #858585ff,0 none #808080ff,1 solid #d9d9d9ff,0 none #808080ff");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"69\"/><Column size=\"59\"/><Column size=\"99\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"평가등급\"/><Cell col=\"1\" text=\"부서구분\"/><Cell col=\"2\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"지급율(%)\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"none\" style=\"align:center;\" text=\"bind:EVGD_CODE\"/><Cell col=\"1\" displaytype=\"combo\" style=\"align:left;\" text=\"bind:EVAL_DTGN\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:BONU_RATE\" mask=\"#,##0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("28");
            obj.set_text("성과상여관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("29");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("30");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHREVAL_NAME", "absolute", "102", "71", "290", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("31");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("0");

            obj = new Button("btn_PROC01", "absolute", "121", "35", "74", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("급여반영");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnPayCancle", "absolute", "198", "35", "74", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("급여취소");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC00", "absolute", "8", "35", "110", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("성과상여 계산처리");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popPROC01", "absolute", "230", "728", "323", "90", null, null, this);
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_WF_insert");
            this.addChild(obj.name, obj);
            obj = new Static("Shape0", "absolute", "9", "9", "305", "39", null, null, this.popPROC01);
            obj.set_taborder("38");
            obj.set_cssclass("styFormItemBoxOut");
            this.popPROC01.addChild(obj.name, obj);
            obj = new Static("Static68", "absolute", "29", "18", "75", "21", null, null, this.popPROC01);
            obj.set_taborder("39");
            obj.set_text("지급일");
            obj.set_cssclass("styFormItemCapBE");
            this.popPROC01.addChild(obj.name, obj);
            obj = new Button("btnClose", "absolute", "252", "56", "62", "24", null, null, this.popPROC01);
            obj.set_taborder("40");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            this.popPROC01.addChild(obj.name, obj);
            obj = new Button("btnPayAply", "absolute", "175", "56", "74", "24", null, null, this.popPROC01);
            obj.set_taborder("41");
            obj.set_text("급여반영");
            obj.set_cssclass("btn_POP_CRUD");
            this.popPROC01.addChild(obj.name, obj);
            obj = new Static("imgHelpSHRPAYX_DATE", "absolute", "166", "18", "21", "21", null, null, this.popPROC01);
            obj.set_taborder("42");
            obj.set_cssclass("sytHelpPopup");
            this.popPROC01.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGE_NAME", "absolute", "189", "18", "100", "21", null, null, this.popPROC01);
            obj.set_taborder("43");
            this.popPROC01.addChild(obj.name, obj);
            obj = new MaskEdit("medSHRPAYX_DATE", "absolute", "83", "18", "80", "21", null, null, this.popPROC01);
            obj.set_taborder("44");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.popPROC01.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGE_CODE", "absolute", "16", "56", "60", "22", null, null, this.popPROC01);
            obj.set_taborder("45");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.popPROC01.addChild(obj.name, obj);
            obj = new Edit("edtSHRWAGP_CODE", "absolute", "86", "56", "50", "22", null, null, this.popPROC01);
            obj.set_taborder("46");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_visible("false");
            this.popPROC01.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "200", "729", "182", "8", null, null, this);
            obj.set_taborder("35");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "200", "808", "350", "8", null, null, this);
            obj.set_taborder("36");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "231", "748", "8", "96", null, null, this);
            obj.set_taborder("37");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "544", "748", "8", "96", null, null, this);
            obj.set_taborder("38");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popPROC00", "absolute", "6", "864", "706", "90", null, null, this);
            obj.set_scrollbars("none");
            obj.set_cssclass("pdiv_WF_insert");
            this.addChild(obj.name, obj);
            obj = new Static("Shape0", "absolute", "9", "9", "689", "39", null, null, this.popPROC00);
            obj.set_taborder("47");
            obj.set_cssclass("styFormItemBoxOut");
            this.popPROC00.addChild(obj.name, obj);
            obj = new Static("Static68", "absolute", "29", "18", "101", "21", null, null, this.popPROC00);
            obj.set_taborder("48");
            obj.set_text("표준지급율(%)");
            obj.set_cssclass("styFormItemCapBE");
            this.popPROC00.addChild(obj.name, obj);
            obj = new Button("btnPROC00_Close", "absolute", "636", "56", "62", "24", null, null, this.popPROC00);
            obj.set_taborder("49");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            this.popPROC00.addChild(obj.name, obj);
            obj = new Button("btnCALC", "absolute", "502", "56", "131", "24", null, null, this.popPROC00);
            obj.set_taborder("50");
            obj.set_text("성과상여 계산처리");
            obj.set_cssclass("btn_POP_CRUD");
            this.popPROC00.addChild(obj.name, obj);
            obj = new MaskEdit("medBSBN_RATE", "absolute", "18.98%", "19", "70", "21", null, null, this.popPROC00);
            obj.set_taborder("56");
            obj.set_mask("### %");
            this.popPROC00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "245", "18", "133", "21", null, null, this.popPROC00);
            obj.set_taborder("57");
            obj.set_text("조직평가 반영율(%)");
            obj.set_cssclass("styFormItemCapBE");
            this.popPROC00.addChild(obj.name, obj);
            obj = new MaskEdit("medBVGN_RATE", "absolute", "54.11%", "19", "70", "21", null, null, this.popPROC00);
            obj.set_taborder("58");
            obj.set_mask("### %");
            this.popPROC00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "477", "18", "133", "21", null, null, this.popPROC00);
            obj.set_taborder("59");
            obj.set_text("개인평가 반영율(%)");
            obj.set_cssclass("styFormItemCapBE");
            this.popPROC00.addChild(obj.name, obj);
            obj = new MaskEdit("medPVGN_RATE", "absolute", "86.97%", "19", "70", "21", null, null, this.popPROC00);
            obj.set_taborder("60");
            obj.set_mask("### %");
            this.popPROC00.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "-24", "865", "182", "8", null, null, this);
            obj.set_taborder("39");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "-24", "944", "350", "8", null, null, this);
            obj.set_taborder("40");
            obj.set_text("h8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "7", "884", "8", "96", null, null, this);
            obj.set_taborder("41");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "704", "884", "8", "96", null, null, this);
            obj.set_taborder("42");
            obj.set_text("w8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "248", "109", "248", "23", null, null, this);
            obj.set_taborder("43");
            obj.set_text("* 00건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.style.set_align("middle left");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 323, 90, this.popPROC01,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_cssclass("pdiv_WF_insert");

            	}
            );
            this.popPROC01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 706, 90, this.popPROC00,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_cssclass("pdiv_WF_insert");

            	}
            );
            this.popPROC00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("성과급관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","popINSERT00.medBSBN_RATE","value","dsPMBU_CONF","BSBN_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","popINSERT00.medBVGN_RATE","value","dsPMBU_CONF","BVGN_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","popINSERT00.medPVGN_RATE","value","dsPMBU_CONF","PVGN_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","popPROC00.medBSBN_RATE","value","dsPMBU_CONF","BSBN_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","popPROC00.medBVGN_RATE","value","dsPMBU_CONF","BVGN_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","popPROC00.medPVGN_RATE","value","dsPMBU_CONF","PVGN_RATE");
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
        this.addIncludeScript("PAYB0050.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYB0050.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYB0050 성과상여등록
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.18		고민주		Initial Created.
         *   2016.12.22		황치웅		수정.
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
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFTTTF";
        this.sPACKAGENAME = "PAYB0050";

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
        	this.fnc_GetUserComboDs(this.dsUserCombo);
        	
        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPY_BONYRT=dsPY_BONYRT";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	var sMethodName = "SEARCH02";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPMBU_CONF=dsPMBU_CONF";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		
        	this.cmbSHREVAL_NAME.setFocus();

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
        	this.fnc_DatasetClear("dsPY_BONYRT,dsPY_EVBONU");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPY_BONYRT=dsPY_BONYRT";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	var sMethodName = "SEARCH01";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPY_EVBONU=dsPY_EVBONU";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        	var sMethodName = "SEARCH02";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPMBU_CONF=dsPMBU_CONF";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	this.grdPY_BONYRT.setFocus();
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsPY_BONYRT,dsPY_EVBONU");
        	this.grdPY_BONURT.setFocus();
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;

        	var sMethodName = "SAVE00";
        	var sInDataSet 	= "dsPY_EVBONU=dsPY_EVBONU:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_BONURT.setFocus();

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
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_BONYRT,dsPY_EVBONU", this);

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

        	if (this.fnc_DatasetChangeCheck("dsPY_BONYRT,dsPY_EVBONU")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHREVAL_NAME.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "평가명", this.cmbSHREVAL_NAME);
        	}
        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	return true;

        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsPY_EVBONU")) {
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

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " SYNT_EACD=" 		 + this.fnc_Quote(this.fnc_Trim(this.cmbSHREVAL_NAME.value));
        		
        	} else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " SYNT_EACD=" 		 + this.fnc_Quote(this.fnc_Trim(this.cmbSHREVAL_NAME.value));
        		
        	} else if (sKind == "SEARCH02") {
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " SYNT_EACD=" 		 + this.fnc_Quote(this.fnc_Trim(this.cmbSHREVAL_NAME.value));
        		sReturnString += " EVAL_NAME=" 		 + this.fnc_Quote(this.fnc_Trim(this.cmbSHREVAL_NAME.text));
        		
        	} else if (sKind == "PROC00") {
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);
        		sReturnString += " SYNT_EACD=" 		 + this.fnc_Quote(this.fnc_Trim(this.cmbSHREVAL_NAME.value));

        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm="             + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="          + this.fnc_Quote(sKind);

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
        		this.fnc_Information(this.stInformation, this.dsPY_BONYRT.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");

        	} else if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.stInformation1, this.dsPY_EVBONU.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_EVBONU.getCaseCount("dataset.getRowLevel(currow)==0"));

        	} else if (sMethodName == "SEARCH02") {

        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		
        	} else if (sMethodName == "PROC00") {
        		this.fnc_Message("HRM071", "성과상여 계산이");
        		this.fn_Search();
        		
        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "GRID,grdPY_BONYRT,dsWGEG_CODE,EVGD_CODE";
        			arrParam[1] = "GRID,grdPY_BONYRT,dsEVAL_DTGN,EVAL_DTGN";
        			arrParam[2] = "GRID,grdPY_EVBONU,dsEVAL_DTGN,EVAL_DTGN";
        		this.fnc_CommonCodeInnerBind(arrParam);

        	} else if (sMethodName == "GetUserComboCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHREVAL_NAME,dsSHREVAL_NAME,0";
        		this.fnc_UserComboInnerBind(arrParam);
        		
        		this.dsSHREVAL_NAME.filter('CLSE_YSNO==1');
        	}

        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /*-----------------------+
         |  팝업 Setting  |
         +------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue) {

        	var arrParam = new Array();
        	if ((obj.name == "imgHelpSHRPAYX_DATE") || (obj.name == "edtSHRWAGE_NAME")) {
        		arrParam[0] = "PAY0001";
        		arrParam[1] = "";
        		arrParam[2] = this.fnc_Trim(this.popPROC01.edtSHRWAGE_NAME.value);
        		arrParam[3] = "Y";
        		arrParam[4] = "popPROC01.edtSHRWAGE_NAME";
        		arrParam[5] = "popPROC01.medSHRPAYX_DATE,popPROC01.edtSHRWAGE_CODE,popPROC01.edtSHRWAGE_NAME,popPROC01.edtSHRWAGP_CODE";
        		arrParam[6] = "0,1,2,5";
        		arrParam[9] = "fn_CommPopupPost";

        	}

        	if ( arrParam != "" || this.fnc_Length(arrParam) != 0 ) this.fnc_HelpDialogeAction(this, obj, arrParam);

        }

        this.fn_CommPopupPost = function(sResponse) {
        	this.btn_PROC01_onclick();
        	var sArrRtn = this.fnc_Split(sResponse, ",");
        	this.popPROC01.medSHRPAYX_DATE.set_value(sArrRtn[0]);
        	this.popPROC01.edtSHRWAGE_CODE.set_value(sArrRtn[1]);
        	this.popPROC01.edtSHRWAGP_CODE.set_value(sArrRtn[2]);
        	this.popPROC01.edtSHRWAGE_NAME.set_value(sArrRtn[3]);

        }
        /*----------------------------------------+
         |  성과상여 계산처리 처리 버튼 클릭  |
         +----------------------------------------*/
        this.btn_PROC00_onclick = function(obj,e) {

        	if (this.fnc_Length(this.fnc_Trim(this.cmbSHREVAL_NAME.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "평가명", this.cmbSHREVAL_NAME);
        	}

        	var sMethodName = "SEARCH02";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPMBU_CONF=dsPMBU_CONF";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);

        	var nX 	= system.clientToScreenX(this.btn_PROC00, 0);;
        		nX -= system.clientToScreenX(application.mainframe,0);
        	var nY 	= system.clientToScreenY(this.btn_PROC00, this.btn_PROC00.getOffsetHeight());
        		nY -= system.clientToScreenY(application.mainframe,0);
        	
        	this.popPROC00.trackPopup(nX, nY - 2);
        	this.popPROC00.medBSBN_RATE.setFocus();		
        }

        /*--------------------------------------------------------+
         |  성과상여 계산처리 POPUP DIV의 닫기 버튼 클릭  時 |
         +--------------------------------------------------------*/
        this.popPROC00_btnPROC00_Close_onclick = function(obj,e) {
        	this.popPROC00.closePopup();
        }
        /*------------------------------------------------------------+
         |  성과상여 계산처리 POPUP DIV의 계산처리 버튼 클릭  時 |
         +------------------------------------------------------------*/
        this.popPROC00_btnCALC_onclick = function(obj,e) {

        	if (!this.fnc_Message("HRM073", "성과상여 계산")) return;
        	
        	var sMethodName = "PROC00";
        	var sInDataSet  = "dsPMBU_CONF=dsPMBU_CONF:A dsPY_BONYRT=dsPY_BONYRT:U";
        	var sOutDataSet = "";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*--------------------------------------------------------------+
         |  데이터셋(dsPY_EVBONU)의 컬럼 값 변경 전 이벤트 발생 時 |
         +--------------------------------------------------------------*/
        this.dsPY_EVBONU_cancolumnchange = function(obj,e) {

        	if (this.fnc_DatasetChangeCheck("dsPY_BONYRT")) {
        		this.fnc_Message("TMM125", "성과상여의 지급율이 변경되어 [성과상여 계산처리] 후에 작업하세요.");
        		return false;
        	}
        	return true;
        }
        /*--------------------------------------------------------------+
         |  데이터셋(dsPY_EVBONU)의 컬럼 값 변경 時 |
         +--------------------------------------------------------------*/
        this.dsPY_EVBONU_oncolumnchanged = function(obj,e) {

        	if (e.columnid == "EVAL_DTGN")	{	//평가부서구분 
        		var nFind = this.dsPY_BONYRT.findRowExpr( "EVGD_CODE == '" + obj.getColumn( e.row, "BVGD_CODE" ) + "' && EVAL_DTGN == '" + e.newvalue + "' " );
        		if (nFind != -1) {
        			obj.setColumn( e.row, "BVGP_RATE", this.dsPY_BONYRT.getColumn( nFind, "BONU_RATE"));		
        		} else {
        			obj.setColumn( e.row, "BVGP_RATE", 0);
        		}
        		
        		var nFind = this.dsPY_BONYRT.findRowExpr( "EVGD_CODE == '" + obj.getColumn( e.row, "PVGD_CODE" ) + "' && EVAL_DTGN == '" + e.newvalue + "' " );
        		if (nFind != -1) {
        			obj.setColumn( e.row, "PVGP_RATE", this.dsPY_BONYRT.getColumn( nFind, "BONU_RATE"));		
        		} else {
        			obj.setColumn( e.row, "PVGP_RATE", 0);
        		}		
        		
        		var nBVGP_RATE = ( obj.getColumn( e.row, "BVGP_RATE" ) * ( obj.getColumn( e.row, "BVGN_RATE" ) / 100 ) ) / 100;
        		var nPVGP_RATE = ( obj.getColumn( e.row, "PVGP_RATE" ) * ( obj.getColumn( e.row, "PVGN_RATE" ) / 100 ) ) / 100;
        		var nBONU_AMOT = Math.floor((obj.getColumn( e.row, "BSLY_AMOT" ) * ( obj.getColumn( e.row, "BSBN_RATE" ) / 100 ) * ( nBVGP_RATE + nPVGP_RATE )));
        		
        		obj.setColumn( e.row, "BONU_AMOT", nBONU_AMOT);
        	}
        }

        
        /*------------+
         |  급여반영 |
         +------------*/
        this.btn_PROC01_onclick = function(obj,e) {
        	var nX 	= system.clientToScreenX(this.btn_PROC01, 0);;
        		nX -= system.clientToScreenX(application.mainframe,0);
        	var nY 	= system.clientToScreenY(this.btn_PROC01, this.btn_PROC01.getOffsetHeight());
        		nY -= system.clientToScreenY(application.mainframe,0);

        	this.popPROC01.trackPopup(nX, nY - 2);

        }

        /*-------------------+
         |  닫기 버튼 클릭 |
         +-------------------*/
        this.btnClose_onclick = function(obj,e) {
        	this.popPROC01.closePopup();
        }

        /*---------------------+
         |  급여 반영/취소 클릭 |
         +---------------------*/
        this.popINSERT_btnPay_onclick = function(obj,e) {

        	if ( obj.name == "btnPayAply" ) {
        		if ( this.fnc_Length(this.popPROC01.medSHRPAYX_DATE.value) == 0 ){
        			return this.fnc_SearchCheckPostAction("TMM072", "지급일", this.popPROC01.edtSHRWAGE_NAME);
        		}

        		this.dsPY_EVBONU.set_enableevent(false);
        		for ( var i=0; i<this.dsPY_EVBONU.getRowCount(); i++ ) {
        			this.dsPY_EVBONU.setColumn(i, "PAYR_YSNO", "1");
        			this.dsPY_EVBONU.setColumn(i, "PAYX_DATE", this.popPROC01.medSHRPAYX_DATE.value);
        			this.dsPY_EVBONU.setColumn(i, "WAGE_CODE", this.popPROC01.edtSHRWAGE_CODE.value);
        		}
        		this.dsPY_EVBONU.set_enableevent(true);
        		
        		this.fn_Save();
        		
        	} else if ( obj.name == "btnPayCancle" ) {
        		
        		if (!this.fnc_Message("EVM005", "급여반영을 취소")) {
        			return false;
        		}
        		this.dsPY_EVBONU.set_enableevent(false);
        		for ( var i=0; i<this.dsPY_EVBONU.getRowCount(); i++ ) {
        			if ( this.dsPY_EVBONU.getColumn(i, "WADE_YSNO") == "0" ){
        				this.dsPY_EVBONU.setColumn(i, "PAYR_YSNO", "0");
        				this.dsPY_EVBONU.setColumn(i, "PAYX_DATE", "");
        				this.dsPY_EVBONU.setColumn(i, "WAGE_CODE", "");
        				
        			} else { // 마감일경우
        				this.dsPY_EVBONU.set_rowposition(i);
        				this.fnc_DataSetCancel("dsPY_EVBONU");
        				this.dsPY_EVBONU.set_enableevent(true);
        				return this.fnc_Message("PAY071", this.dsPY_EVBONU.getColumn(i, "EMPL_NAME"));
        				
        			}
        		}
        		this.dsPY_EVBONU.set_enableevent(true);
        		
        		this.fn_Save();
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPY_EVBONU.addEventHandler("cancolumnchange", this.dsPY_EVBONU_cancolumnchange, this);
            this.dsPY_EVBONU.addEventHandler("oncolumnchanged", this.dsPY_EVBONU_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.edtSHRWAGE_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRWAGE_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.cmbSHREVAL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHREVAL_NAME.addEventHandler("onitemchanged", this.fn_Search, this);
            this.btn_PROC01.addEventHandler("onclick", this.btn_PROC01_onclick, this);
            this.btnPayCancle.addEventHandler("onclick", this.popINSERT_btnPay_onclick, this);
            this.btn_PROC00.addEventHandler("onclick", this.btn_PROC00_onclick, this);
            this.popPROC01.btnClose.addEventHandler("onclick", this.btnClose_onclick, this);
            this.popPROC01.btnPayAply.addEventHandler("onclick", this.popINSERT_btnPay_onclick, this);
            this.popPROC01.imgHelpSHRPAYX_DATE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.popPROC01.edtSHRWAGE_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popPROC01.edtSHRWAGE_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popPROC01.medSHRPAYX_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popPROC01.edtSHRWAGE_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popPROC01.edtSHRWAGE_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popPROC01.edtSHRWAGP_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.popPROC01.edtSHRWAGP_CODE.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.popPROC00.btnPROC00_Close.addEventHandler("onclick", this.popPROC00_btnPROC00_Close_onclick, this);
            this.popPROC00.btnCALC.addEventHandler("onclick", this.popPROC00_btnCALC_onclick, this);

        };

        this.loadIncludeScript("PAYB0050.xfdl");
        this.loadPreloadList();
       
    };
}
)();
