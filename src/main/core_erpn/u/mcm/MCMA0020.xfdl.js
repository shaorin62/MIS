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
                this.set_name("MCMA0020");
                this.set_titletext("광고주관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTA_CUSTXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"BIZR_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"RERN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"OWNR_NAME\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_STAT\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_TYPE\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_NUMB\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"POST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_DESC\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"DTL1_ADDR\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"DTL2_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TELE_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"ELTR_MLAD\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"SACH_EMNR\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SACH_EMNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"OPEN_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"CLOS_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"USEX_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUTY_CODE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"CUTY_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"RETY_CODE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"RETY_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCH_EMNR\" type=\"STRING\" size=\"256\"/><Column id=\"ACCH_EMNM\" type=\"STRING\" size=\"256\"/><Column id=\"CITY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CITY_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_NUMB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_CUSTXM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"GUBN_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"MDIA_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"MDIA_TVIN\" type=\"STRING\" size=\"256\"/><Column id=\"MDIA_RADI\" type=\"STRING\" size=\"256\"/><Column id=\"MDIA_DMBX\" type=\"STRING\" size=\"256\"/><Column id=\"MDIA_CATV\" type=\"STRING\" size=\"256\"/><Column id=\"MDIA_NPAP\" type=\"STRING\" size=\"256\"/><Column id=\"MDIA_MAGN\" type=\"STRING\" size=\"256\"/><Column id=\"MDIA_ITNT\" type=\"STRING\" size=\"256\"/><Column id=\"MDIA_OTDR\" type=\"STRING\" size=\"256\"/><Column id=\"MPPR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MPPR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF1_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF2_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF3_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF4_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF5_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGUBNCombo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GUBN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GUBN_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GUBN_CODE\">0</Col><Col id=\"GUBN_NAME\">팀</Col></Row><Row><Col id=\"GUBN_NAME\">사업부</Col><Col id=\"GUBN_CODE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_CATEXM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CATE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"ETCX_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF1_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF2_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF3_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF4_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF5_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_KBNTXM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_KBNTXM00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SBSX_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAUTO_NAME", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "6", "0", null, "29", "10", null, this);
            obj.set_text("광고주관리");
            obj.style.set_align("left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "555", "29", "25", null, this);
            obj.set_text("공통관리>기준정보");
            obj.style.set_align("right middle");
            obj.set_cssclass("styFormLocation");
            obj.set_taborder("53");
            this.addChild(obj.name, obj);

            obj = new Div("divButtonList", "absolute", "8", "31", "573", "27", null, null, this);
            obj.set_taborder("38");
            obj.set_tabstop("false");
            obj.set_text("");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btnCreateParameter", "absolute", "0", "4", "110", "21", null, null, this.divButtonList);
            obj.set_taborder("1");
            obj.set_text("광고주정보관리");
            obj.set_cssclass("styTextButtonBizProc");
            obj.style.set_align("center");
            obj.getSetter("UserData").set("P");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "42", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "28", "71", "84", "21", null, null, this);
            obj.set_text("광고주명");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("55");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "96", "71", "150", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");
            obj.set_inputmode("normal");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_CUSTXM", "absolute", "8", "127", null, null, "25", "362", this);
            obj.set_binddataset("dsTA_CUSTXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("67");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"180\"/><Column size=\"81\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"82\"/><Column size=\"126\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"37\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"광고주코드\"/><Cell col=\"1\" text=\"광고주명\"/><Cell col=\"2\" text=\"광고주구분\"/><Cell col=\"3\" text=\"관계사구분\"/><Cell col=\"4\" text=\"법인개인구분\"/><Cell col=\"5\" text=\"사업자번호\"/><Cell col=\"6\" text=\"주민등록번호\"/><Cell col=\"7\" text=\"대표자성명\"/><Cell col=\"8\" text=\"업태\"/><Cell col=\"9\" text=\"업종\"/><Cell col=\"10\" text=\"우편번호구분주소\"/><Cell col=\"11\" text=\"상세1주소\"/><Cell col=\"12\" text=\"상세2주소\"/><Cell col=\"13\" text=\"전화번호\"/><Cell col=\"14\" text=\"전자메일주소\"/><Cell col=\"15\" text=\"거래시작일자\"/><Cell col=\"16\" text=\"거래종료일자\"/><Cell col=\"17\" text=\"종사업장번호\"/><Cell col=\"18\" text=\"사용\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:CUST_CODE\"/><Cell col=\"1\" style=\"font:9 굴림체;cursor:pointer;\" text=\"bind:CUST_NAME\"/><Cell col=\"2\" style=\"align: ;\" text=\"bind:RETY_CDNM\"/><Cell col=\"3\" displaytype=\"normal\" text=\"bind:CUTY_CDNM\"/><Cell col=\"4\" text=\"bind:CITY_CDNM\"/><Cell col=\"5\" text=\"bind:BIZR_NUMB\"/><Cell col=\"6\" text=\"bind:RERN_NUMB\"/><Cell col=\"7\" text=\"bind:OWNR_NAME\"/><Cell col=\"8\" text=\"bind:BSNS_STAT\"/><Cell col=\"9\" text=\"bind:BSNS_TYPE\"/><Cell col=\"10\" text=\"bind:POST_NUMB\"/><Cell col=\"11\" text=\"bind:ADDR_DESC\"/><Cell col=\"12\" text=\"bind:DTL1_ADDR\"/><Cell col=\"13\" text=\"bind:TELE_NUMB\"/><Cell col=\"14\" text=\"bind:ELTR_MLAD\"/><Cell col=\"15\" text=\"bind:OPEN_DATE\"/><Cell col=\"16\" text=\"bind:CLOS_DATE\"/><Cell col=\"17\" text=\"bind:CORP_NUMB\"/><Cell col=\"18\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:USEX_YSNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle02", "absolute", "274", "71", "85", "21", null, null, this);
            obj.set_taborder("107");
            obj.set_text("사업자번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBIZR_NUMB", "absolute", "356", "71", "150", "21", null, null, this);
            obj.set_taborder("108");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("109");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "-125", "8", "717", null, null, this);
            obj.set_taborder("110");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("111");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("112");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("113");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("114");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("115");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("116");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("117");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("119");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("120");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("121");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "246", "61", "40", "41", null, null, this);
            obj.set_taborder("122");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "348", "61", "8", "41", null, null, this);
            obj.set_taborder("123");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "573", "102", "80", "25", null, null, this);
            obj.set_taborder("124");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "8", "121", "216", "6", null, null, this);
            obj.set_taborder("125");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "8", "106", "187", "21", null, null, this);
            obj.set_taborder("126");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Tab("tabXM", "absolute", "8", null, null, "337", "25", "15", this);
            obj.set_taborder("132");
            obj.set_tabindex("0");
            obj.set_cssclass("styTabControl");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tab2", this.tabXM);
            obj.set_text("코바넷");
            this.tabXM.addChild(obj.name, obj);
            obj = new Grid("grdMD_KBNTXM", "absolute", "10", "30", "550", null, null, "10", this.tabXM.tab2);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("4");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj.set_binddataset("dsMD_KBNTXM");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"200\"/><Column size=\"180\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"광고주코드\"/><Cell col=\"1\" text=\"광고주명\"/><Cell col=\"2\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"코바넷코드\"/></Band><Band id=\"body\"><Cell text=\"bind:CUST_CODE\"/><Cell col=\"1\" text=\"bind:CUST_NAME\"/><Cell col=\"2\" edittype=\"text\" text=\"bind:KBNT_CODE\"/></Band></Format></Formats>");
            this.tabXM.tab2.addChild(obj.name, obj);
            obj = new Grid("grdMD_KBNTXM00", "absolute", "580", "30", null, null, "24", "10", this.tabXM.tab2);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("5");
            obj.set_binddataset("dsMD_KBNTXM00");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"100\" band=\"left\"/><Column size=\"200\" band=\"left\"/><Column size=\"180\" band=\"left\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" style=\"background: ;\" text=\"광고주코드\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" text=\"광고주명\"/><Cell col=\"2\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" cssclass=\"Cellgrd_WF_essential\" text=\"미디어크리에이트 운영코드\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" style=\"align:center;background: ;\" text=\"bind:CUST_CODE\"/><Cell col=\"1\" displaytype=\"normal\" style=\"align:center;background: ;\" text=\"bind:CUST_NAME\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"text\" style=\"align:center;background: ;\" text=\"bind:SBSX_CODE\"/></Band></Format></Formats>");
            this.tabXM.tab2.addChild(obj.name, obj);
            obj = new Static("Static93", "absolute", "10", "9", "174", "21", null, null, this.tabXM.tab2);
            obj.set_taborder("8");
            obj.set_text("KOBANET");
            obj.set_cssclass("sta_WF_Subtitle");
            this.tabXM.tab2.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "580", "9", "174", "21", null, null, this.tabXM.tab2);
            obj.set_taborder("9");
            obj.set_text("SBS");
            obj.set_cssclass("sta_WF_Subtitle");
            this.tabXM.tab2.addChild(obj.name, obj);
            obj = new Tabpage("tab1", this.tabXM);
            obj.set_text("카테고리");
            obj.style.set_background("#ffffffff");
            obj.set_scrollbars("none");
            this.tabXM.addChild(obj.name, obj);
            obj = new Grid("grdMD_CATEXM", "absolute", "10", "30", null, null, "10", "10", this.tabXM.tab1);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("5");
            obj.set_binddataset("dsMD_CATEXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"105\" band=\"left\"/><Column size=\"177\" band=\"left\"/><Column size=\"100\"/><Column size=\"191\"/><Column size=\"94\"/><Column size=\"178\"/><Column size=\"92\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" displaytype=\"text\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주코드\"/><Cell col=\"2\" displaytype=\"text\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주명\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" text=\"카테고리코드\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"카테고리명\"/><Cell col=\"5\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"담당부서코드\"/><Cell col=\"6\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"담당부서명\"/><Cell col=\"7\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"등록일자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;background: ;\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" displaytype=\"normal\" style=\"align:center;background: ;\" text=\"bind:CUST_CODE\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"align:center;background: ;\" text=\"bind:CUST_NAME\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" style=\"align: ;\" text=\"bind:CATE_CODE\" editlimit=\"15\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"text\" style=\"align: ;\" text=\"bind:CATE_NAME\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"normal\" style=\"align: ;\" text=\"bind:DEPT_CODE\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"text\" editfilter=\"none\" style=\"align: ;\" text=\"bind:DEPT_NAME\"/><Cell col=\"7\" displaytype=\"date\" edittype=\"readonly\" style=\"align: ;\" text=\"bind:STAR_DATE\" editlimit=\"100\" editimemode=\"native\" calendardisplaynulltype=\"nulltext\"/></Band></Format></Formats>");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Button("btnDelRow", "absolute", null, "5", "62", "21", "10", null, this.tabXM.tab1);
            obj.set_taborder("6");
            obj.set_text("행삭제");
            obj.style.set_imagealign("left");
            obj.set_cssclass("btn_WF_Module");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Button("btnAddRow", "absolute", null, "5", "62", "21", "75", null, this.tabXM.tab1);
            obj.set_taborder("7");
            obj.set_text("행추가");
            obj.style.set_imagealign("left");
            obj.set_cssclass("btn_WF_Module");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", "262", "21", null, null, this.tabXM.tab1);
            obj.set_taborder("8");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Tabpage("tab0", this.tabXM);
            obj.set_text("광고주팀");
            obj.set_scrollbars("none");
            this.tabXM.addChild(obj.name, obj);
            obj = new Grid("grdMD_CUSTXM", "absolute", "10", "30", null, null, "10", "10", this.tabXM.tab0);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("4");
            obj.set_binddataset("dsMD_CUSTXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"111\" band=\"left\"/><Column size=\"103\" band=\"left\"/><Column size=\"157\"/><Column size=\"159\"/><Column size=\"111\"/><Column size=\"173\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" displaytype=\"text\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"구분\"/><Cell col=\"2\" displaytype=\"text\" style=\"background: ;\" text=\"코드\"/><Cell col=\"3\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"CIC/사업부\"/><Cell col=\"4\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주팀명\"/><Cell col=\"5\" displaytype=\"text\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주코드\"/><Cell col=\"6\" displaytype=\"text\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주명\"/><Cell col=\"7\" displaytype=\"text\" cssclass=\"Cellgrd_WF_edit\" text=\"사용\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"text\" text=\"CIC/사업부코드\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" style=\"background: ;\" text=\"bind:GUBN_FLAG\" editdisplay=\"edit\" combodataset=\"dsGUBNCombo\" combocodecol=\"GUBN_CODE\" combodatacol=\"GUBN_NAME\" combodisplay=\"edit\"/><Cell col=\"2\" displaytype=\"normal\" style=\"background: ;\" text=\"bind:CUST_CODE\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"normal\" style=\"background: ;\" text=\"bind:SUBX_NAME\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\" suppress=\"0\" suppressalign=\"middle\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"text\" style=\"background: ;\" text=\"bind:CUST_NAME\"/><Cell col=\"5\" displaytype=\"normal\" style=\"background: ;\" text=\"bind:HIGH_CODE\"/><Cell col=\"6\" displaytype=\"normal\" style=\"background: ;\" text=\"bind:HIGH_NAME\"/><Cell col=\"7\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"background: ;\" text=\"bind:USEX_YSNO\"/><Cell col=\"8\" displaytype=\"text\" text=\"bind:SUBX_CODE\"/></Band></Format></Formats>");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", "168", "21", null, null, this.tabXM.tab0);
            obj.set_taborder("5");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Button("btnAddRow", "absolute", null, "5", "62", "21", "75", null, this.tabXM.tab0);
            obj.set_taborder("6");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Button("btnDelRow", "absolute", null, "5", "62", "21", "10", null, this.tabXM.tab0);
            obj.set_taborder("7");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.tabXM.tab0.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "588", "14", "80", "30", null, null, this);
            obj.set_taborder("133");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "37", "355", "80", "10", null, null, this);
            obj.set_taborder("135");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "669", "355", "80", "37", null, null, this);
            obj.set_taborder("136");
            obj.set_text("h 37");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "9", "443", "10", "67", null, null, this);
            obj.set_taborder("137");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "1151", "443", "10", "75", null, null, this);
            obj.set_taborder("138");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "613", "691", "80", "10", null, null, this);
            obj.set_taborder("139");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "499", "393", "80", "30", null, null, this);
            obj.set_taborder("140");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new ListBox("lstCUST_NAME", "absolute", "96", "93", "150", "78", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("141");
            obj.set_innerdataset("dsAUTO_NAME");
            obj.set_codecolumn("CUST_CODE");
            obj.set_datacolumn("CUST_NAME");
            obj.set_visible("false");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 573, 27, this.divButtonList,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("38");
            		p.set_tabstop("false");
            		p.set_text("");
            		p.set_scrollbars("none");

            	}
            );
            this.divButtonList.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabXM.tab2,
            	//-- Layout function
            	function(p) {
            		p.set_text("코바넷");

            	}
            );
            this.tabXM.tab2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabXM.tab1,
            	//-- Layout function
            	function(p) {
            		p.set_text("카테고리");
            		p.style.set_background("#ffffffff");
            		p.set_scrollbars("none");

            	}
            );
            this.tabXM.tab1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabXM.tab0,
            	//-- Layout function
            	function(p) {
            		p.set_text("광고주팀");
            		p.set_scrollbars("none");

            	}
            );
            this.tabXM.tab0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("광고주관리");
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
        this.addIncludeScript("MCMA0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("MCMA0020.xfdl", function() {
         /***************************************************************************************************
         * # Program : MCMA0020 광고주관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.08.30		조민희 	Initial Created.
         *   2016.10.05		최제현 	Check and Revise.
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
         *****************************************************************************INBUS*CO*KR************/

        /*************************
         *  공통 Script Include  *
         *************************/
        //include "script::lib_script_common.xjs"

        /************************
         *  화면 변수 선언부  *
         ************************/
        this.sBUTTONLIST  = "TTFFTTTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "MCMA0020";

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
         |  01.최초 화면 Load時 처리 할 사항|
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fn_GetCUST_NAME();
        	this.fn_Search();

        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時|
         ------------------------------------*/
        this.fn_End = function (obj) {

        	this.close();

        }

        /*------------------------+
         |  03.조회 버튼 클릭 時|
         +------------------------*/
        this.fn_Search = function (obj) {
        	//상단 그리드
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsTA_CUSTXM");
        	this.fnc_DatasetClear("dsMD_CATEXM");
        	this.fnc_DatasetClear("dsMD_KBNTXM");
        	this.fnc_DatasetClear("dsMD_KBNTXM00");
        	this.fnc_DatasetClear("dsMD_CUSTXM");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTA_CUSTXM=dsTA_CUSTXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_CUSTXM.setFocus();
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時|
         +------------------------------*/
        this.fn_Input = function (obj) {
        	//기능없음.
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時|
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	//기능없음.
         }

        /*------------------------+
         |  06.취소 버튼 클릭 時|
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        	this.fnc_DataSetCancel("dsMD_CUSTXM");
        	this.fnc_DataSetCancel("dsMD_CATEXM");
        	this.fnc_DataSetCancel("dsMD_KBNTXM");
        	this.fnc_DataSetCancel("dsMD_KBNTXM00");
        	
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時|
         -------------------------*/
        this.fn_Save = function (obj) {

        	var tab_index = this.tabXM.tabindex;
        	
        	if(tab_index == '2'){			//광고주팀
        		this.fn_SaveTab0();
        	}else if(tab_index == '1'){		//카테고리
        		this.fn_SaveTab1();
        	}else if(tab_index == '0'){		//코바넷광고주코드
        		this.fn_SaveTab2();
        	}
        	
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
        	// 기능없음.
        }

        /*--------------------------------------+
         |  10.최초 화면 UnLoad時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	 if(e.fromobject instanceof Div) return;
        	 var sMessage = this.fnc_FormUnloadCheck("dsTA_CUSTXM", this);

        	 if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }
         
        this.fn_FormUnloadProcess = function (obj,e) {

        	this.fnc_FormUnload(obj, e);

        } 

        /*------------------------------------+
         |  11.단축키 처리(Form KeyDown)     |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {

        	this.fnc_HotKey(this, e.fromreferenceobject, e);

        }

        /*------------------------------------+
         |  12.Text Box가 Focus를 받을 때    |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {

        	this.fnc_EditFocus(obj);

        }

        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*--------------------------+
         |  조회 필수 조건 체크!  |
         +--------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsTA_CUSTXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	} 
        	
        	return true;

        }

        /*-------------------+
         |  저장 여부 체크! |
         +-------------------*/
        this.fn_SaveItemCheck = function (tab_index) {

        	if(tab_index == '2'){	// 광고주팀
        		
        		if (this.fnc_DatasetChangeCheck("dsMD_CUSTXM") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        		}

        		for (var i = 0; i < this.dsMD_CUSTXM.getRowCount(); i++) {
        		
        			if (this.fnc_ToUpper(this.dsMD_CUSTXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        			if (this.fnc_Length(this.fnc_Trim(this.dsMD_CUSTXM.getColumn(i, "GUBN_FLAG"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "구분", this.dsMD_CUSTXM, i, this.dsMD_CUSTXM.getColumn(i,"GUBN_FLAG"), "");
        			}
        			
        			if (this.fnc_Trim(this.dsMD_CUSTXM.getColumn(i, "GUBN_FLAG")) == '1' &&
        				this.fnc_Length(this.fnc_Trim(this.dsMD_CUSTXM.getColumn(i, "CUST_NAME"))) > 0) {
        				this.fnc_Message("MCM005");
        				return false;
        			}
        			
        			if (this.fnc_Trim(this.dsMD_CUSTXM.getColumn(i, "GUBN_FLAG")) == '0' &&
        				this.fnc_Length(this.fnc_Trim(this.dsMD_CUSTXM.getColumn(i, "CUST_NAME"))) < 1) {
        				this.fnc_Message("MCM006");
        				return false;
        			}

        		}

        		return true;
        	}else if(tab_index == '1'){	//카테고리
        		if (this.fnc_DatasetChangeCheck("dsMD_CATEXM") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        		}

        		for (var i = 0; i < this.dsMD_CATEXM.getRowCount(); i++) {
        		
        			if (this.fnc_ToUpper(this.dsMD_CATEXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        			if (this.fnc_Length(this.fnc_Trim(this.dsMD_CATEXM.getColumn(i, "CATE_NAME"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "카테고리명", this.dsMD_CATEXM, i, this.dsMD_CATEXM.getColumn(i,"CATE_NAME"), "");
        			}	
        		}

        		return true;
        	}else if(tab_index == '0'){	//코바넷광고주코드
        	
        		if (this.fnc_DatasetChangeCheck("dsMD_KBNTXM") == false && this.fnc_DatasetChangeCheck("dsMD_KBNTXM00") == false) {
        			this.fnc_Message("TMM003");
        			return false;
        		}
        		
        		if (this.fnc_DatasetChangeCheck("dsMD_KBNTXM") == false) {	//코바넷코드
        			this.fnc_Message("TMM003");
        			return false;
        		}
        		
        		if (this.fnc_DatasetChangeCheck("dsMD_KBNTXM00") == false) {	//SBS코드
        			this.fnc_Message("TMM003");
        			return false;
        		}		
        		return true;
        	}
        }

        /*---------------------+
         |  삭제 여부 체크!  |
         +---------------------*/
        this.fn_DeleteCheck = function (tab_index,totalNum) {
        	if(tab_index == '2'){
        	
        		if (totalNum < 1) {
        			this.fnc_Message("TMM007");
        			return false;
        		}
        		
        		var grdMD_CUSTXM = this.tabXM.tab0.grdMD_CUSTXM;
        		var sQuestionText  = "구분 : ("+grdMD_CUSTXM.getCellText(grdMD_CUSTXM.currentrow, grdMD_CUSTXM.getBindCellIndex( "body", "GUBN_FLAG"));
        			sQuestionText += ") 광고주팀명 : ("+grdMD_CUSTXM.getCellText(grdMD_CUSTXM.currentrow, grdMD_CUSTXM.getBindCellIndex( "body", "CUST_NAME")) + ")";
        			
        		if(totalNum != 0){
        			sQuestionText += " 외 "+ (totalNum-1) + "건"
        		}
        	
        		return this.fnc_Message("TMM002", sQuestionText);
        		
        	}else if(tab_index == '1'){
        	
        		if (totalNum < 1) {
        			this.fnc_Message("TMM007");
        			return false;
        		}
        		
        		var grdMD_CATEXM = this.tabXM.tab1.grdMD_CATEXM;
        		var sQuestionText  = "카테고리명 : ("+grdMD_CATEXM.getCellText(grdMD_CATEXM.currentrow, grdMD_CATEXM.getBindCellIndex( "body", "CATE_NAME"))+")";
        			
        		if(totalNum > 1){
        			sQuestionText += " 외 "+ (totalNum-1) + "건"
        		}
        	
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        }

        /*--------------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +--------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {

        		sReturnString  = " pgm=" 	   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
         		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value); //광고주명
         		sReturnString += " BIZR_NUMB=" + this.fnc_Quote(this.edtSHRBIZR_NUMB.value); //사업자번호

        	} else if (sKind == "SEARCH01") { 
        		
        		var nRow = this.dsTA_CUSTXM.rowposition;
        		var cust_code = this.dsTA_CUSTXM.getColumn(nRow, "CUST_CODE"); // 광고주코드(상단 그리드)
        		
        		
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " HIGH_CODE=" + this.fnc_Quote(cust_code); // 광고주코드(상단 그리드)
        		

        	} else if (sKind == "SEARCH02") {
        		
        		var nRow = this.dsTA_CUSTXM.rowposition;
        		var cust_code = this.dsTA_CUSTXM.getColumn(nRow, "CUST_CODE"); // 광고주코드(상단 그리드)
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(cust_code); // 광고주코드(상단 그리드)
        		

        	} else if (sKind == "SEARCH03") {
        		
        		var nRow = this.dsTA_CUSTXM.rowposition;
        		var cust_code = this.dsTA_CUSTXM.getColumn(nRow, "CUST_CODE"); // 광고주코드(상단 그리드)
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(cust_code); // 광고주코드(상단 그리드)

        	} else if (sKind == "SEARCH04") {
        		var nRow = this.dsTA_CUSTXM.rowposition;
        		var cust_code = this.dsTA_CUSTXM.getColumn(nRow, "CUST_CODE"); // 광고주코드(상단 그리드)
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(cust_code); // 광고주코드(상단 그리드)

        	} else if (sKind == "SEARCH05") {
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

        	} else if (sKind == "SAVE01") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

        	} else if (sKind == "SAVE02") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

        	} else if (sKind == "SAVE03") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

        	} else if (sKind == "SAVE04") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

        	}

        	return sReturnString;

        }

        /*-------------------------------------+
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

        		this.fnc_Information(this.stInformation1, this.dsTA_CUSTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_CUSTXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        	} else if (sMethodName == "SEARCH01") {

        		this.fnc_Information(this.tabXM.tab0.stInformation, this.dsMD_CUSTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.grdTA_CUSTXM.setFocus();
        	} else if (sMethodName == "SEARCH02") {

        		this.fnc_Information(this.tabXM.tab1.stInformation, this.dsMD_CATEXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");

        	} else if (sMethodName == "SEARCH03") {

        		this.fnc_Information(this.tabXM.tab1.stInformation, this.dsMD_CATEXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");

        	} else if (sMethodName == "SEARCH04") {

        		this.fnc_Information(this.tabXM.tab1.stInformation, this.dsMD_CATEXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");

        	} else if (sMethodName == "SEARCH05") {
        		//자동완성 세팅
        		this.fn_AutoSetting();
        	} else if (sMethodName == "SAVE01") {

        		this.fnc_Information(this.tabXM.tab0.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.dsTA_CUSTXM_onrowposchanged(this.dsMD_CUSTXM);

        	} else if (sMethodName == "SAVE02") {

        		this.fnc_Information(this.tabXM.tab1.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.dsTA_CUSTXM_onrowposchanged(this.dsMD_CATEXM);

        	} else if (sMethodName == "SAVE03") {

        		this.fnc_Information(this.tabXM.tab1.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.dsTA_CUSTXM_onrowposchanged(this.dsMD_CATEXM);

        	} else if (sMethodName == "SAVE04") {

        		this.fnc_Information(this.tabXM.tab1.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");

        	} else if (sMethodName == "GetCommCode") {
        	
        	}
        }

        
        /*------------------------------------------+
         |  수정 시 Key Field Disibled 처리 - Head |
         +------------------------------------------*/
        this.fn_KeyFieldDisible_Head = function (obj) {
        	//기능없음.
        }

        
        /***************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                *
         ***************************************************************************************************/
         
         
        /***************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                 *
         ***************************************************************************************************/
         
         
         /*--------------------------+
         |  하단 탭 조회 필수 조건 체크!  |
         +--------------------------*/
        this.fn_SearchItemCheckDtl = function () {

        	 if(this.fnc_DatasetChangeCheck("dsMD_CUSTXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	} else if(this.fnc_DatasetChangeCheck("dsMD_CATEXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	} else if(this.fnc_DatasetChangeCheck("dsMD_KBNTXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	} else if(this.fnc_DatasetChangeCheck("dsMD_KBNTXM00")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if(this.dsTA_CUSTXM.rowcount == 0 ) return false;
        	
        	return true;

        }

        
        /*-----------------------------------------------------------+
         |  상단 행 선택 시 해당되는 하단 데이터 필터링 - Head  |
         +-----------------------------------------------------------*/
        this.dsTA_CUSTXM_onrowposchanged = function(obj,e)
        {
        	var tab_index = this.tabXM.tabindex;
        	this.fn_validation(tab_index);
        }

        /*---------------+
         |  탭 클릭 時  |
         +---------------*/
        this.tabXM_onchanged = function(obj,e)
        {
        	this.fnc_GridSetting(obj.components[e.postindex]);
        	var tab_index = e.postindex;
        	this.fn_validation(tab_index);

        }

        /*-----------------------------+
         | 활성화된 탭 체크 후 조회 |
         +-----------------------------*/
        this.fn_validation = function(tab_index){
        	//하단그리드
        	if(tab_index == '2'){this.fn_searchTab0();}
        	else if(tab_index == '1'){this.fn_searchTab1();}
        	else if(tab_index == '0'){this.fn_searchTab2();}
        }

        /*-----------------------------+
         | 광고주팀(TAB0) 조회	   |
         +-----------------------------*/
        this.fn_searchTab0 = function()	{
        	if (!this.fn_SearchItemCheckDtl()) return;
        	this.fnc_DatasetClear("dsMD_CUSTXM");
        	this.fnc_DatasetClear("dsMD_CATEXM");
        	this.fnc_DatasetClear("dsMD_KBNTXM");
        	this.fnc_DatasetClear("dsMD_KBNTXM00");
        	
        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsMD_CUSTXM=dsMD_CUSTXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.tabXM.tab0.grdMD_CUSTXM.setFocus();
        }

        /*-----------------------------+
         | 카테고리(TAB1) 조회	   |
         +-----------------------------*/
        this.fn_searchTab1 = function()	{
        	if (!this.fn_SearchItemCheckDtl()) return;
        	this.fnc_DatasetClear("dsMD_CUSTXM");
        	this.fnc_DatasetClear("dsMD_CATEXM");
        	this.fnc_DatasetClear("dsMD_KBNTXM");
        	this.fnc_DatasetClear("dsMD_KBNTXM00");

        	var sMethodName = "SEARCH02";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsMD_CATEXM=dsMD_CATEXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*---------------------------------------------+
         | 코바넷광고주코드 KOBANET(TAB2) 조회	   |
         +---------------------------------------------*/
        this.fn_searchTab2 = function()	{
        	if (!this.fn_SearchItemCheckDtl()) return;
        	this.fnc_DatasetClear("dsMD_CUSTXM");
        	this.fnc_DatasetClear("dsMD_CATEXM");
        	this.fnc_DatasetClear("dsMD_KBNTXM");
        	this.fnc_DatasetClear("dsMD_KBNTXM00");

        	var sMethodName = "SEARCH03";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsMD_KBNTXM=dsMD_KBNTXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	this.fn_searchTab2_SBS();
        }

        /*---------------------------------------------+
         | 코바넷광고주코드 SBS(TAB2) 조회	   |
         +---------------------------------------------*/
        this.fn_searchTab2_SBS = function()	{
        	if (!this.fn_SearchItemCheckDtl()) return;
        	this.fnc_DatasetClear("dsMD_CUSTXM");
        	this.fnc_DatasetClear("dsMD_CATEXM");
        	this.fnc_DatasetClear("dsMD_KBNTXM");
        	this.fnc_DatasetClear("dsMD_KBNTXM00");

        	var sMethodName = "SEARCH04";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsMD_KBNTXM00=dsMD_KBNTXM00";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        
        /*--------------------------------------------+
         |  모든 버튼 클릭 時(행추가, 행삭제)     |
         +--------------------------------------------*/
        this.fn_All_Btn_OnClick = function (obj,e) {
        	switch (obj.name) {
        		case "btnAddRow":
        			this.fn_AddRow();
        			break;
        			// 행추가
        		case "btnDelRow":
        			this.fn_DelRow();
        			break;
        			// 행삭제
        	}
        }

        /*----------------------+
         |     행 추가  		|
         +----------------------*/
        this.fn_AddRow = function () {

        	var tab_index = this.tabXM.tabindex;
        	
        	if(tab_index == '2'){
        		this.fn_AddRowTab0();
        	}else if(tab_index == '1'){
        		this.fn_AddRowTab1();
        	}
        	
        }

        /*----------------------------+
         |  광고주팀(TAB0) 행 추가  |
         +----------------------------*/
        this.fn_AddRowTab0 = function() {
        	
        	var iXMRow = this.dsTA_CUSTXM.rowposition;
        	var CUST_CODE = this.fnc_Trim(this.dsTA_CUSTXM.getColumn(iXMRow, "CUST_CODE"));
        	var CUST_NAME = this.fnc_Trim(this.dsTA_CUSTXM.getColumn(iXMRow, "CUST_NAME"));

        	var iRow = this.dsMD_CUSTXM.addRow();
        	this.dsMD_CUSTXM.setColumn(iRow, "HIGH_CODE", CUST_CODE); 	//광고주코드
        	this.dsMD_CUSTXM.setColumn(iRow, "HIGH_NAME", CUST_NAME); 	//광고주명
        	this.dsMD_CUSTXM.setColumn(iRow, "GUBN_FLAG", '0');			//구분
        	this.dsMD_CUSTXM.setColumn(iRow, "USEX_YSNO", '1');			//사용구분
        	this.dsMD_CUSTXM.setColumn(iRow, "MDIA_FLAG", 'A');			//광고주구분
        	this.tabXM.tab0.grdMD_CUSTXM.setFocus();
        }

        /*----------------------------+
         |  카테고리(TAB1) 행 추가  |
         +----------------------------*/
        this.fn_AddRowTab1 = function(){
        	var iXMRow = this.dsTA_CUSTXM.rowposition;
        	var CUST_CODE = this.fnc_Trim(this.dsTA_CUSTXM.getColumn(iXMRow, "CUST_CODE"));
        	var CUST_NAME = this.fnc_Trim(this.dsTA_CUSTXM.getColumn(iXMRow, "CUST_NAME"));

        	var iRow = this.dsMD_CATEXM.addRow();
        	this.dsMD_CATEXM.setColumn(iRow, "CUST_CODE", CUST_CODE); 							//광고주코드
        	this.dsMD_CATEXM.setColumn(iRow, "CUST_NAME", CUST_NAME); 							//광고주명
        	this.dsMD_CATEXM.setColumn(iRow, "USEX_YSNO", '1');									//사용구분
        	this.dsMD_CATEXM.setColumn(iRow, "STAR_DATE", this.fnc_GetServerDateTime("DATE"));	//등록일자
        	this.tabXM.tab1.grdMD_CATEXM.setFocus();
        }

        /*----------------------+
         |     행 삭제  		|
         +----------------------*/
        this.fn_DelRow = function () {
        	var tab_index = this.tabXM.tabindex;
        	
        	if(tab_index == '2'){this.fn_DelRowTab0(tab_index);}
        	else if(tab_index == '1'){this.fn_DelRowTab1(tab_index);}
        	
        }

        /*----------------------------+
         |  광고주팀(TAB0) 행 삭제  |
         +----------------------------*/
        this.fn_DelRowTab0 = function(tab_index){
        	
        	var totalNum = 0;	//체크된 개수
        	for(var i=0 ; i<this.dsMD_CUSTXM.rowcount ; i++){
        		if(this.dsMD_CUSTXM.getColumn(i,"CHEK_FILD") == '1'){totalNum ++;}
        	}
        	if (this.fn_DeleteCheck(tab_index,totalNum)) {
        		var rowCnt = this.dsMD_CUSTXM.rowcount;
        		for(var i=(rowCnt-1); i>=0; i--){
        			if(this.dsMD_CUSTXM.getColumn(i,"CHEK_FILD") == '1'){
        				this.dsMD_CUSTXM.deleteRow(i);
        			}
        		}
        	}
        }

        /*----------------------------+
         |  카테고리(TAB1) 행 삭제  |
         +----------------------------*/
        this.fn_DelRowTab1 = function(tab_index){
        	var totalNum = 0;	//체크된 개수
        	
        	for(var i=0 ; i<this.dsMD_CATEXM.rowcount ; i++){
        		if(this.dsMD_CATEXM.getColumn(i,"CHEK_FILD") == '1'){totalNum ++;}
        	}

        	if (this.fn_DeleteCheck(tab_index,totalNum)) {
        		var rowCnt = this.dsMD_CATEXM.rowcount;
        		for(var i=(rowCnt-1); i>=0; i--){
        			if(this.dsMD_CATEXM.getColumn(i,"CHEK_FILD") == '1'){
        				this.dsMD_CATEXM.deleteRow(i);
        			}
        		}
        	}

        }

        /*----------------------------+
         |  광고주팀(TAB0) 저장 	  |
         +----------------------------*/
        this.fn_SaveTab0 = function(){
        	var tab_index = this.tabXM.tabindex;

        	if (!this.fn_SaveItemCheck(tab_index)) return;

        	var sMethodName = "SAVE01";
        	var sInDataSet  = "dsMD_CUSTXM=dsMD_CUSTXM:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.tabXM.tab0.grdMD_CUSTXM.setFocus();
        }

        /*----------------------------+
         |  카테고리(TAB1) 저장 	  |
         +----------------------------*/
        this.fn_SaveTab1 = function(){
        	var tab_index = this.tabXM.tabindex;
        	if (!this.fn_SaveItemCheck(tab_index)) return;

        	var sMethodName = "SAVE02";
        	var sInDataSet  = "dsMD_CATEXM=dsMD_CATEXM:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.tabXM.tab1.grdMD_CATEXM.setFocus();
        }

        /*------------------------------------+
         |  코바넷광고주코드(TAB2) 저장 	  |
         +------------------------------------*/
        this.fn_SaveTab2 = function(){
        	this.fn_SaveItemCheckForTab2();
        }

        /*---------------------------------------+
         |  코바넷광고주코드 저장 여부 체크! |
         +---------------------------------------*/
        this.fn_SaveItemCheckForTab2 = function () {
        	if (this.fnc_DatasetChangeCheck("dsMD_KBNTXM") == false && this.fnc_DatasetChangeCheck("dsMD_KBNTXM00") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	if (this.fnc_DatasetChangeCheck("dsMD_KBNTXM") == true) {	//코바넷코드
        		this.fn_SaveTab2Grd1();
        	}
        	
        	if (this.fnc_DatasetChangeCheck("dsMD_KBNTXM00") == true) {	//SBS코드
        		this.fn_SaveTab2Grd2();
        	}		
        	
        	return true;
        }

        /*------------------------------------+
         |  코바넷코드(TAB2 / GRID1) 저장	  |
         +------------------------------------*/
        this.fn_SaveTab2Grd1 = function(){
        	
        	var sMethodName = "SAVE03";
        	var sInDataSet  = "dsMD_KBNTXM=dsMD_KBNTXM:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*------------------------------------+
         |  SBS코드(TAB2 / GRID2) 저장	  |
         +------------------------------------*/
        this.fn_SaveTab2Grd2 = function(){
        	
        	var sMethodName = "SAVE04";
        	var sInDataSet  = "dsMD_KBNTXM00=dsMD_KBNTXM00:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        
        /*------------------------------------+
         |  사업부팝업 ( 광고주 팀 탭) 	  |
         +------------------------------------*/
        this.dsMD_CUSTXM_oncolumnchanged = function(obj,e)
        {

        	if (e.columnid == "SUBX_NAME" ) this.fn_HelpDialoge(this.tabXM.tab0.grdMD_CUSTXM, "YES", e.oldvalue, e.columnid);

        }

        /*------------------------------------+
         |  담당부서팝업 ( 카테고리 탭) 	  |
         +------------------------------------*/
        this.dsMD_CATEXM_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "DEPT_NAME" ) this.fn_HelpDialoge(this.tabXM.tab1.grdMD_CATEXM, "YES", e.oldvalue, e.columnid);
        }

        /*-------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	if (obj.name == "grdMD_CUSTXM") {
        		if ((this.fnc_getGridHelpColName(obj, sFromDs) == "SUBX_NAME") || (sColumnID == "SUBX_NAME")) {
        			arrParam[0] = "MCM0001";
        			arrParam[1] = "";
        			arrParam[2] = "HIGH_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "tabXM.tab0.grdMD_CUSTXM";
        			arrParam[5] = "SUBX_CODE,SUBX_NAME";
        			arrParam[6] = "2,3";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}else if(obj.name == "grdMD_CATEXM") {
        		if ((this.fnc_getGridHelpColName(obj, sFromDs) == "DEPT_CODE") || (sColumnID == "DEPT_NAME")) {
        			arrParam[0] = "MCM0002";
        			arrParam[1] = "";
        			arrParam[2] = "DEPT_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "tabXM.tab1.grdMD_CATEXM";
        			arrParam[5] = "DEPT_CODE,DEPT_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}
        }

        /*--------------------------------+
         |  광고주팀 전체 선택 / 해제  |
         +--------------------------------*/
        var isAllChecked = 0;
        this.tabXM_tab0_grdMD_CUSTXM_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.tabXM.tab0.grdMD_CUSTXM.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsMD_CUSTXM.getRowCount(); i++) {
        			this.dsMD_CUSTXM.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.tabXM.tab0.grdMD_CUSTXM.setCellProperty("Head", 0, "expr", isAllChecked);
        	}
        }

        /*--------------------------------+
         |  카테고리 전체 선택 / 해제  |
         +--------------------------------*/
        this.tabXM_tab1_grdMD_CATEXM_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.tabXM.tab1.grdMD_CATEXM.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsMD_CATEXM.getRowCount(); i++) {
        			this.dsMD_CATEXM.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.tabXM.tab1.grdMD_CATEXM.setCellProperty("Head", 0, "expr", isAllChecked);
        	}
        }

        /*----------------------+
         |  조회조건 엔터 時  |
         +----------------------*/
        this.fn_onKeyDown = function(obj,e)
        {
        	if (e.keycode == 13){
        		this.lstCUST_NAME.set_visible(false);
        		this.fn_Search();
        	}
        }

        //KeyUp Event 상하 키를 누를 때마다 하단그리드 조회
        this.grdTA_CUSTXM_onkeyup = function(obj,e)
        {
        	if(e.keycode=='38' || e.keycode=='40'){
        		if(this.tabXM.tabindex == '2'){this.fn_searchTab0();}
        		else if(this.tabXM.tabindex == '1'){this.fn_searchTab1();}
        		else if(this.tabXM.tabindex == '0'){this.fn_searchTab2();}
        	}
        }
        /*-------------------------------+
         | 		   광고주정보관리	 	 |
         +-------------------------------*/
        this.btnCreateParameter_onclick = function(obj,e)
        {

        	var sOpenStyle  = "modeless=false";   //Open Sytle(되도록 Modal 사용)
        		sOpenStyle += ",autosize=false";   //Autosize true면 width, Height 안먹음
        		sOpenStyle += ",top=-1";          //원하는 위치(단 -1은 소유창의 Middle)
        		sOpenStyle += ",left=-1";         //원하는 위치(단 -1은 소유창의 Center)
        		sOpenStyle += ",width=1187";       //현재 반응 없음
        		sOpenStyle += ",height=720";      //현재 반응 없음
        		sOpenStyle += ",title=true";      //Form Title Bar Visible 여
        		sOpenStyle += ",titletext=";      //Form Title여부
        		sOpenStyle += ",status=false";    //Form Title Bar Visible 여부
        		sOpenStyle += ",resizable=true";  //Form Title Bar Visible 여부
        	
        	this.fnc_OpenPopup("FAMA0030", "fam::FAMA0030.xfdl"
        									, {sSLIP_NUMB 	: ""
        									  ,sLoadForm	: ""
        									  ,sUSERLAVEL	: this.sUSERLAVEL
        									  ,sSLIP_LINE	: ""}, sOpenStyle, "");
        }

        //------------------------------자동완성시작-----------------------------------

        //모든 거래처명 가져오기
        this.fn_GetCUST_NAME = function (obj) {

        	this.fnc_DatasetClear("dsAUTO_NAME");

        	var sMethodName = "SEARCH05";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsAUTO_NAME=dsAUTO_NAME";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        
        this.fn_AutoSetting = function(){

        	var iCNT = this.dsAUTO_NAME.getRowCount();
        	var i;

        	for(i=0;i<iCNT;i++)
        	{
        		var text = this.dsAUTO_NAME.getColumn(i,"CLIENT_NAME");
        		var code = this.GetSpliceTextE(text);
        		this.dsAUTO_NAME.setColumn(i,"USEX_CODE",code);
        	}
        }

        
        // 한글 자소를 분리하여 리턴한다.
        var arrFirst = [12593,12594,12596,12599,12600,12601,12609,12610,12611,12613,12614,12615,12616,12617,12618,12619,12620,12621,12622];
        var arrSecond = [12623,12624,12625,12626,12627,12628,12629,12630,12631,12632,12633,12634,12635,12636,12637,12638,12639,12640,12641,12642,12643];
        var arrThird = [0,12593,12594,12595,12596,12597,12598,12599,12601,12602,12603,12604,12605,12606,12607,12608,12609,12610,12612,12613,12614,12615,12616,12618,12619,12620,12621,12622];

        this.GetSpliceTextK = function(strInput)
        {
        	var i;
        	var strOut = "";
        	for(i=0;i<strInput.length;i++)
        	{
        		var nCode = strInput.charCodeAt(i);
        		if(nCode>=44032 && nCode <= 55203)
        		{
        			var nFirst = Math.floor((nCode - 44032) / 588);
        			strOut += String.fromCharCode(arrFirst[nFirst]);
        			var nSecond = Math.floor(((nCode - 44032) % 588) / 28) ;
        			strOut += String.fromCharCode(arrSecond[nSecond]);
        			var nThird = Math.floor((nCode - 44032) % 28) ;
        			if(nThird > 0)
        				strOut += String.fromCharCode(arrThird[nThird]);
        		}
        		else
        			strOut += String.fromCharCode(nCode);
        	}
        	return strOut;
        }

        // 한글 자소를 분리하고 키보드에 매치되는 영문으로 리턴한다.
        var arrFirstE = ["r","R","s","e","E","f","a","q","Q","t","T","d","w","W","c","z","x","v","g"];
        var arrSecondE = ["k","o","i","O","j","p","u","P","h","hk","ho","hl","y","n","nj","np","nl","b","m","ml","l"];
        var arrThirdE = ["","r","R","rt","s","sw","sg","e","f","fr","fa","fq","ft","fx","fv","fg","a","q","qt","t","T","d","w","c","z","x","v","g"];
        var arrAllE = ["r","R","rt","s","sw","sg","e","E","f","fr","fa","fq","ft","fx","fv","fg","a","q","Q","qt","t","T","d","w","W","c","z","x","v","g","k","o","i","O","j","p","u","P","h","hk","ho","hl","y","n","nj","np","nl","b","m","ml","l"];

        this.GetSpliceTextE = function(strInput)
        {
        	var i;
        	var strOutE = "";
        	for(i=0;i<strInput.length;i++)
        	{
        		var nCode = strInput.charCodeAt(i);
        		if(nCode>=44032 && nCode <= 55203)
        		{
        			var nFirst = Math.floor((nCode - 44032) / 588);
        			strOutE += arrFirstE[nFirst];
        			var nSecond = Math.floor(((nCode - 44032) % 588) / 28) ;
        			strOutE += arrSecondE[nSecond];
        			var nThird = Math.floor((nCode - 44032) % 28) ;
        			if(nThird > 0)
        				strOutE += arrThirdE[nThird];
        		}
        		else if(nCode>=12593 && nCode <= 12643)
        		{
        			strOutE += arrAllE[nCode-12593];
        		}
        		else
        		{
        			strOutE += String.fromCharCode(nCode);
        		}
        	}
        	return strOutE;
        }

        this.edtSHRCUST_NAME_onkeyup = function(obj,e)
        {
        	if(e.keycode==40 || e.keycode == 38)
        	{
        		this.lstCUST_NAME.setFocus();
        		this.lstCUST_NAME.set_index(0);
        	}
        }

        
        this.lstCUST_NAME_onitemclick = function(obj,e)
        {
        	this.edtSHRCUST_NAME.set_value(e.itemtext);
        	this.lstCUST_NAME.set_visible(false);
        }

        
        this.lstCUST_NAME_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.edtSHRCUST_NAME.set_value(this.lstCUST_NAME.text);
        		this.lstCUST_NAME.set_visible(false);
        	}	
        }

        

        
        this.edtSHRCUST_NAME_ontextchanged = function(obj,e)
        {
        		
        	this.lstCUST_NAME.set_value("");
        	
        	var text = e.posttext;
        	if(text.length > 0)
        	{
        		var etext = this.GetSpliceTextE(text);

        		var sFilter = "String(USEX_CODE).toUpperCase().indexOf('" + etext.toUpperCase().replace("'","\\'") + "') >= 0";

        		this.dsAUTO_NAME.filter(sFilter);

        		this.lstCUST_NAME.set_visible(true);
        	}
        	else
        	{
        		this.dsAUTO_NAME.filter("USEX_CODE == 0");
        		this.lstCUST_NAME.set_visible(false);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_CUSTXM.addEventHandler("onrowposchanged", this.dsTA_CUSTXM_onrowposchanged, this);
            this.dsMD_CUSTXM.addEventHandler("oncolumnchanged", this.dsMD_CUSTXM_oncolumnchanged, this);
            this.dsMD_CATEXM.addEventHandler("oncolumnchanged", this.dsMD_CATEXM_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.divButtonList.btnCreateParameter.addEventHandler("onclick", this.btnCreateParameter_onclick, this);
            this.imgSearchTitle0.addEventHandler("onclick", this.imgSearchTitle0_onclick, this);
            this.edtSHRCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCUST_NAME.addEventHandler("onkeydown", this.fn_onKeyDown, this);
            this.edtSHRCUST_NAME.addEventHandler("oneditclick", this.edtSHRCUST_NAME_oneditclick, this);
            this.edtSHRCUST_NAME.addEventHandler("onkeyup", this.edtSHRCUST_NAME_onkeyup, this);
            this.edtSHRCUST_NAME.addEventHandler("ontextchanged", this.edtSHRCUST_NAME_ontextchanged, this);
            this.grdTA_CUSTXM.addEventHandler("oncelldblclick", this.grdTM_CODEXH_oncelldblclick, this);
            this.grdTA_CUSTXM.addEventHandler("onkeyup", this.grdTA_CUSTXM_onkeyup, this);
            this.imgSearchTitle02.addEventHandler("onclick", this.imgSearchTitle0_onclick, this);
            this.edtSHRBIZR_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRBIZR_NUMB.addEventHandler("onkeydown", this.fn_onKeyDown, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.tabXM.addEventHandler("onchanged", this.tabXM_onchanged, this);
            this.tabXM.tab2.grdMD_KBNTXM.addEventHandler("oncelldblclick", this.fn_OpenSlip, this);
            this.tabXM.tab2.grdMD_KBNTXM00.addEventHandler("oncelldblclick", this.fn_OpenSlip, this);
            this.tabXM.tab1.grdMD_CATEXM.addEventHandler("onheadclick", this.tabXM_tab1_grdMD_CATEXM_onheadclick, this);
            this.tabXM.tab1.grdMD_CATEXM.addEventHandler("oncelldblclick", this.fn_OpenSlip, this);
            this.tabXM.tab1.grdMD_CATEXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabXM.tab1.btnDelRow.addEventHandler("onclick", this.fn_All_Btn_OnClick, this);
            this.tabXM.tab1.btnAddRow.addEventHandler("onclick", this.fn_All_Btn_OnClick, this);
            this.tabXM.tab0.grdMD_CUSTXM.addEventHandler("onheadclick", this.tabXM_tab0_grdMD_CUSTXM_onheadclick, this);
            this.tabXM.tab0.grdMD_CUSTXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabXM.tab0.btnAddRow.addEventHandler("onclick", this.fn_All_Btn_OnClick, this);
            this.tabXM.tab0.btnDelRow.addEventHandler("onclick", this.fn_All_Btn_OnClick, this);
            this.lstCUST_NAME.addEventHandler("onitemclick", this.lstCUST_NAME_onitemclick, this);
            this.lstCUST_NAME.addEventHandler("onkeydown", this.lstCUST_NAME_onkeydown, this);

        };

        this.loadIncludeScript("MCMA0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
