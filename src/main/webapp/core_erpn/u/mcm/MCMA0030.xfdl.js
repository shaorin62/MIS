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
                this.set_name("MCMA0030");
                this.set_titletext("매체사관리");
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
            obj._setContents("<ColumnInfo><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"GUBN_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"MDIA_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"MDIA_TVIN\" type=\"STRING\" size=\"256\"/><Column id=\"MDIA_RADI\" type=\"STRING\" size=\"256\"/><Column id=\"MDIA_DMBX\" type=\"STRING\" size=\"256\"/><Column id=\"MDIA_CATV\" type=\"STRING\" size=\"256\"/><Column id=\"MDIA_NPAP\" type=\"STRING\" size=\"256\"/><Column id=\"MDIA_MAGN\" type=\"STRING\" size=\"256\"/><Column id=\"MDIA_ITNT\" type=\"STRING\" size=\"256\"/><Column id=\"MDIA_OTDR\" type=\"STRING\" size=\"256\"/><Column id=\"MPPR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MPPR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF1_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF2_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF3_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF4_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF5_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MELT_MLAD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_RMEDXM_01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"MDIM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MDIM_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"OFIC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OFIC_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"GUBN_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"REF1_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF2_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF3_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF4_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF5_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_RMEDXM_02", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"MDIM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MDIM_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"OFIC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OFIC_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"GUBN_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"REF1_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF2_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF3_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF4_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"REF5_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"HIGH_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMdiaCombo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MDIA_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MDIA_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MDIA_NAME\">전체</Col></Row><Row><Col id=\"MDIA_NAME\">TV</Col><Col id=\"MDIA_CODE\">MDIA_TVIN</Col></Row><Row><Col id=\"MDIA_NAME\">라디오</Col><Col id=\"MDIA_CODE\">MDIA_RADI</Col></Row><Row><Col id=\"MDIA_NAME\">DMB</Col><Col id=\"MDIA_CODE\">MDIA_DMBX</Col></Row><Row><Col id=\"MDIA_NAME\">CATV</Col><Col id=\"MDIA_CODE\">MDIA_CATV</Col></Row><Row><Col id=\"MDIA_NAME\">인쇄</Col><Col id=\"MDIA_CODE\">MDIA_PRNT</Col></Row><Row><Col id=\"MDIA_NAME\">인터넷</Col><Col id=\"MDIA_CODE\">MDIA_ITNT</Col></Row><Row><Col id=\"MDIA_NAME\">옥외</Col><Col id=\"MDIA_CODE\">MDIA_OTDR</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsKBNT_LIST", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BROD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"MDIM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MDIM_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"OFIC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OFIC_CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAUTO_NAME", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGubnCombo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GUBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GUBN_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GUBN_NAME\"/><Col id=\"GUBN_CODE\"/></Row><Row><Col id=\"GUBN_NAME\">KOBANET</Col><Col id=\"GUBN_CODE\">A</Col></Row><Row><Col id=\"GUBN_NAME\">SBS</Col><Col id=\"GUBN_CODE\">B</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_MEDX_MAIL", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HIGH_CODE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"COMB_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMB_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_CUSTMN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEQN_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHSN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TELE_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"HNPN_TENR\" type=\"STRING\" size=\"256\"/><Column id=\"ELTR_MLAD\" type=\"STRING\" size=\"256\"/><Column id=\"MJCH_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_GUBN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsEMPL_GUBN</Col><Col id=\"CODEID\">EMPL_GUBN</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("st_FormTitle", "absolute", "8", "0", null, "29", "8", null, this);
            obj.set_text("매체사관리");
            obj.style.set_align("left");
            obj.set_cssclass("styFormTitle");
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "-1", "555", "29", "25", null, this);
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
            obj.set_taborder("0");
            obj.set_text("매체사정보관리");
            obj.set_cssclass("styTextButtonBizProc");
            obj.style.set_align("center");
            obj.getSetter("UserData").set("P");
            this.divButtonList.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "24", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "28", "71", "90", "21", null, null, this);
            obj.set_text("매체구분");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("55");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "548", "71", "150", "21", null, null, this);
            obj.set_autoselect("true");
            obj.set_lengthunit("ascii");
            obj.set_imemode("hangul");
            obj.set_taborder("0");
            obj.set_cssclass("styFormSearchItem");
            obj.set_inputmode("normal");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_CUSTXM", "absolute", "8", "128", null, null, "25", "387", this);
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
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"102\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"117\"/><Column size=\"37\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"매체사코드\"/><Cell col=\"1\" text=\"매체사명\"/><Cell col=\"2\" text=\"매체사구분\"/><Cell col=\"3\" text=\"관계사구분\"/><Cell col=\"4\" text=\"법인개인구분\"/><Cell col=\"5\" text=\"사업자번호\"/><Cell col=\"6\" text=\"주민등록번호\"/><Cell col=\"7\" text=\"대표자성명\"/><Cell col=\"8\" text=\"업태\"/><Cell col=\"9\" text=\"업종\"/><Cell col=\"10\" text=\"우편번호구분주소\"/><Cell col=\"11\" text=\"상세1주소\"/><Cell col=\"12\" text=\"상세2주소\"/><Cell col=\"13\" text=\"전화번호\"/><Cell col=\"14\" text=\"전자메일주소\"/><Cell col=\"15\" text=\"거래시작일자\"/><Cell col=\"16\" text=\"거래종료일자\"/><Cell col=\"17\" text=\"종사업장번호\"/><Cell col=\"18\" text=\"사용\"/></Band><Band id=\"body\"><Cell text=\"bind:CUST_CODE\"/><Cell col=\"1\" style=\"font:9 굴림체;cursor:pointer;\" text=\"bind:CUST_NAME\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:RETY_CDNM\"/><Cell col=\"3\" displaytype=\"normal\" text=\"bind:CUTY_CDNM\"/><Cell col=\"4\" text=\"bind:CITY_CDNM\"/><Cell col=\"5\" text=\"bind:BIZR_NUMB\"/><Cell col=\"6\" text=\"bind:RERN_NUMB\"/><Cell col=\"7\" text=\"bind:OWNR_NAME\"/><Cell col=\"8\" text=\"bind:BSNS_STAT\"/><Cell col=\"9\" text=\"bind:BSNS_TYPE\"/><Cell col=\"10\" text=\"bind:POST_NUMB\"/><Cell col=\"11\" text=\"bind:ADDR_DESC\"/><Cell col=\"12\" text=\"bind:DTL1_ADDR\"/><Cell col=\"13\" text=\"bind:TELE_NUMB\"/><Cell col=\"14\" text=\"bind:ELTR_MLAD\"/><Cell col=\"15\" text=\"bind:OPEN_DATE\"/><Cell col=\"16\" text=\"bind:CLOS_DATE\"/><Cell col=\"17\" text=\"bind:CORP_NUMB\"/><Cell col=\"18\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USEX_YSNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Tab("tabXM", "absolute", "8", null, null, "362", "25", "15", this);
            obj.set_taborder("10");
            obj.set_cssclass("styTabControl");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tab1", this.tabXM);
            obj.set_taborder("43");
            obj.set_text("코바넷매체코드");
            obj.getSetter("position").set("absolute");
            obj.set_scrollbars("none");
            obj.style.set_background("#ffffffff");
            this.tabXM.addChild(obj.name, obj);
            obj = new Grid("grdMD_RMEDXM_01", "absolute", "10", "30", null, "125", "10", null, this.tabXM.tab1);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsMD_RMEDXM_01");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"0\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"74\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" text=\"매체코드\"/><Cell col=\"2\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"매체명\"/><Cell col=\"3\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" cssclass=\"Cellgrd_WF_essential\" text=\"방송사코드\"/><Cell col=\"4\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" cssclass=\"Cellgrd_WF_essential\" text=\"방송국명\"/><Cell col=\"5\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" cssclass=\"Cellgrd_WF_essential\" text=\"매체코드\"/><Cell col=\"6\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" cssclass=\"Cellgrd_WF_essential\" text=\"매체\"/><Cell col=\"7\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" cssclass=\"Cellgrd_WF_essential\" text=\"본지사코드\"/><Cell col=\"8\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" cssclass=\"Cellgrd_WF_essential\" text=\"본지사명\"/><Cell col=\"9\" displaytype=\"text\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"코바넷코드\"/><Cell col=\"10\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"사용\"/><Cell col=\"11\" text=\"매체사코드\"/><Cell col=\"12\" text=\"코바넷구분\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;background: ;\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" text=\"bind:CUST_CODE\"/><Cell col=\"2\" edittype=\"none\" text=\"bind:CUST_NAME\" expandshow=\"hide\" expandsize=\"20\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"expand\" style=\"align:center;background: ;\" text=\"bind:BROD_CODE\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"text\" style=\"align:center;background: ;\" text=\"bind:BROD_CDNM\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"expand\" style=\"align: ;\" text=\"bind:MDIM_CODE\" editlimit=\"15\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"text\" style=\"align: ;\" text=\"bind:MDIM_CDNM\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"expand\" style=\"align: ;\" text=\"bind:OFIC_CODE\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"text\" style=\"align: ;\" text=\"bind:OFIC_CDNM\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"none\" style=\"align: ;\" text=\"bind:KBNT_CODE\" editlimit=\"100\" editimemode=\"native\"/><Cell col=\"10\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USEX_YSNO\"/><Cell col=\"11\" text=\"bind:HIGH_CODE\"/><Cell col=\"12\" text=\"bind:GUBN_FLAG\"/></Band></Format></Formats>");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("stInformation2", "absolute", "113", "9", "240", "21", null, null, this.tabXM.tab1);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("stInformation3", "absolute", "77", "164", null, "21", "834", null, this.tabXM.tab1);
            obj.set_taborder("9");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Grid("grdMD_RMEDXM_02", "absolute", "0.87%", "185", null, "138", "0.87%", null, this.tabXM.tab1);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("10");
            obj.set_binddataset("dsMD_RMEDXM_02");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"0\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" text=\"매체코드\"/><Cell col=\"2\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"매체명\"/><Cell col=\"3\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" cssclass=\"Cellgrd_WF_essential\" text=\"방송사코드\"/><Cell col=\"4\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" cssclass=\"Cellgrd_WF_essential\" text=\"방송국명\"/><Cell col=\"5\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" cssclass=\"Cellgrd_WF_essential\" text=\"매체코드\"/><Cell col=\"6\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" cssclass=\"Cellgrd_WF_essential\" text=\"매체\"/><Cell col=\"7\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" cssclass=\"Cellgrd_WF_essential\" text=\"본지사코드\"/><Cell col=\"8\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" cssclass=\"Cellgrd_WF_essential\" text=\"본지사명\"/><Cell col=\"9\" displaytype=\"text\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"SBS코드\"/><Cell col=\"10\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"사용\"/><Cell col=\"11\" text=\"매체사코드\"/><Cell col=\"12\" text=\"코바넷구분\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;background: ;\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" text=\"bind:CUST_CODE\"/><Cell col=\"2\" edittype=\"none\" text=\"bind:CUST_NAME\" expandshow=\"hide\" expandsize=\"20\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"expand\" style=\"align:center;background: ;\" text=\"bind:BROD_CODE\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"text\" style=\"align:center;background: ;\" text=\"bind:BROD_CDNM\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"expand\" style=\"align: ;\" text=\"bind:MDIM_CODE\" editlimit=\"15\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"text\" style=\"align: ;\" text=\"bind:MDIM_CDNM\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"expand\" style=\"align: ;\" text=\"bind:OFIC_CODE\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"text\" style=\"align: ;\" text=\"bind:OFIC_CDNM\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"none\" style=\"align: ;\" text=\"bind:KBNT_CODE\" editlimit=\"100\" editimemode=\"native\"/><Cell col=\"10\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USEX_YSNO\"/><Cell col=\"11\" text=\"bind:HIGH_CODE\"/><Cell col=\"12\" text=\"bind:GUBN_FLAG\"/></Band></Format></Formats>");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "9", "24", "48", "6", null, null, this.tabXM.tab1);
            obj.set_taborder("12");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static90", "absolute", "10", "9", "79", "21", null, null, this.tabXM.tab1);
            obj.set_taborder("13");
            obj.set_text("KOBANET");
            obj.set_cssclass("sta_WF_Subtitle");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "89", "-9", "12", "23", null, null, this.tabXM.tab1);
            obj.set_taborder("15");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "102", "-9", "12", "23", null, null, this.tabXM.tab1);
            obj.set_taborder("16");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "9", "179", "48", "6", null, null, this.tabXM.tab1);
            obj.set_taborder("17");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "10", "164", "79", "21", null, null, this.tabXM.tab1);
            obj.set_taborder("18");
            obj.set_text("SBS");
            obj.set_cssclass("sta_WF_Subtitle");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "54", "146", "12", "23", null, null, this.tabXM.tab1);
            obj.set_taborder("20");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "67", "146", "12", "23", null, null, this.tabXM.tab1);
            obj.set_taborder("21");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "491", "155", "80", "30", null, null, this.tabXM.tab1);
            obj.set_taborder("22");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Tabpage("tab0", this.tabXM);
            obj.set_taborder("43");
            obj.set_text("매체채널");
            obj.getSetter("position").set("absolute");
            obj.set_scrollbars("none");
            obj.style.set_background("#ffffffff");
            this.tabXM.addChild(obj.name, obj);
            obj = new Grid("grdMD_CUSTXM", "absolute", "10", "30", null, null, "10", "10", this.tabXM.tab0);
            obj.set_autoenter("TRUE");
            obj.set_binddataset("dsMD_CUSTXM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj.set_tabstop("true");
            obj.set_autosizingtype("none");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"102\" band=\"left\"/><Column size=\"150\" band=\"left\"/><Column size=\"103\" band=\"left\"/><Column size=\"180\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"41\"/><Column size=\"0\"/><Column size=\"162\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"코바넷구분\"/><Cell col=\"2\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"매체/채널명\"/><Cell col=\"3\" displaytype=\"text\" style=\"background: ;\" text=\"매체코드\"/><Cell col=\"4\" displaytype=\"text\" style=\"background: ;\" text=\"청구지\"/><Cell col=\"5\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"TV\"/><Cell col=\"6\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"RD\"/><Cell col=\"7\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"DMB\"/><Cell col=\"8\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"CATV\"/><Cell col=\"9\" displaytype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"신문\"/><Cell col=\"10\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"잡지\"/><Cell col=\"11\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"인터넷\"/><Cell col=\"12\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"옥외\"/><Cell col=\"13\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"사용\"/><Cell col=\"14\" text=\"청구지코드\"/><Cell col=\"15\" text=\"매체사 담당자 이메일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:GUBN_FLAG\" combodataset=\"dsGubnCombo\" combocodecol=\"GUBN_CODE\" combodatacol=\"GUBN_NAME\" combodisplay=\"edit\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"text\" style=\"background: ;\" text=\"bind:CUST_NAME\" combodataset=\"dsGUBNCombo\" combocodecol=\"GUBN_CODE\" combodatacol=\"GUBN_NAME\"/><Cell col=\"3\" displaytype=\"normal\" style=\"background: ;\" text=\"bind:CUST_CODE\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" style=\"background: ;\" text=\"bind:HIGH_NAME\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"background: ;\" text=\"bind:MDIA_TVIN\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"background: ;\" text=\"bind:MDIA_RADI\"/><Cell col=\"7\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"background: ;\" text=\"bind:MDIA_DMBX\"/><Cell col=\"8\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:MDIA_CATV\"/><Cell col=\"9\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"background: ;\" text=\"bind:MDIA_NPAP\"/><Cell col=\"10\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:MDIA_MAGN\"/><Cell col=\"11\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:MDIA_ITNT\"/><Cell col=\"12\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:MDIA_OTDR\"/><Cell col=\"13\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USEX_YSNO\"/><Cell col=\"14\" text=\"bind:HIGH_CODE\"/><Cell col=\"15\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:MELT_MLAD\" combodataset=\"dsMD_MEDX_MAIL\" combocodecol=\"COMB_CODE\" combodatacol=\"COMB_NAME\"/></Band></Format></Formats>");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Button("btnDelRow01", "absolute", null, "5", "62", "21", "10", null, this.tabXM.tab0);
            obj.set_taborder("3");
            obj.style.set_imagealign("left");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Button("btnAddRow01", "absolute", null, "5", "62", "21", "75", null, this.tabXM.tab0);
            obj.set_taborder("138");
            obj.set_text("행추가");
            obj.style.set_imagealign("left");
            obj.set_cssclass("btn_WF_Module");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "12", "9", "262", "21", null, null, this.tabXM.tab0);
            obj.set_taborder("6");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Tabpage("tab2", this.tabXM);
            obj.set_text("매체사 담당자");
            this.tabXM.addChild(obj.name, obj);
            obj = new Grid("grdMD_CUSTMN", "absolute", "10", "30", null, null, "9", "10", this.tabXM.tab2);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("0");
            obj.set_binddataset("dsMD_CUSTMN");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"0\"/><Column size=\"55\"/><Column size=\"80\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"73\"/><Column size=\"80\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주코드\"/><Cell col=\"2\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"담당자 구분\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_essential\" text=\"매체사명\"/><Cell col=\"4\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"순번\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_essential\" text=\"계약 담당자명\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_edit\" text=\"전화번호\"/><Cell col=\"7\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"휴대전화번호\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_essential\" text=\"담당자이메일주소\"/><Cell col=\"9\" cssclass=\"Cellgrd_WF_edit\" text=\"대표담당자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" text=\"bind:CUST_CODE\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:EMPL_GUBN\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:CUST_NAME\"/><Cell col=\"4\" text=\"bind:SEQN_NUMB\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:CHSN_NAME\"/><Cell col=\"6\" edittype=\"normal\" text=\"bind:TELE_NUMB\"/><Cell col=\"7\" text=\"bind:HNPN_TENR\"/><Cell col=\"8\" edittype=\"normal\" text=\"bind:ELTR_MLAD\"/><Cell col=\"9\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:MJCH_YSNO\"/></Band></Format></Formats>");
            this.tabXM.tab2.addChild(obj.name, obj);
            obj = new Button("btnAddRow01", "absolute", null, "5", "62", "21", "75", null, this.tabXM.tab2);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            obj.style.set_imagealign("left");
            this.tabXM.tab2.addChild(obj.name, obj);
            obj = new Button("btnDelRow02", "absolute", null, "5", "62", "21", "10", null, this.tabXM.tab2);
            obj.set_taborder("2");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            obj.style.set_imagealign("left");
            this.tabXM.tab2.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "12", "9", "262", "21", null, null, this.tabXM.tab2);
            obj.set_taborder("3");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabXM.tab2.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle02", "absolute", "246", "71", "67", "21", null, null, this);
            obj.set_taborder("107");
            obj.set_text("매체사명");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRHIGH_NAME", "absolute", "314", "71", "150", "21", null, null, this);
            obj.set_taborder("108");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_inputmode("normal");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRMDIA_FLAG", "absolute", "97", "71", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("109");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_innerdataset("@dsMdiaCombo");
            obj.set_datacolumn("MDIA_NAME");
            obj.set_codecolumn("MDIA_CODE");
            obj.set_index("0");

            obj = new Static("imgSearchTitle01", "absolute", "493", "71", "51", "21", null, null, this);
            obj.set_taborder("110");
            obj.set_text("매체명");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle03", "absolute", "726", "71", "79", "21", null, null, this);
            obj.set_taborder("111");
            obj.set_text("사업자번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBIZR_NUMB", "absolute", "807", "71", "150", "21", null, null, this);
            obj.set_taborder("112");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("113");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("114");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
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

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("118");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("119");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("120");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "89", "61", "8", "41", null, null, this);
            obj.set_taborder("121");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("122");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("123");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "217", "61", "40", "41", null, null, this);
            obj.set_taborder("124");
            obj.set_text("w 40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "8", "122", "216", "6", null, null, this);
            obj.set_taborder("131");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "198", "21", null, null, this);
            obj.set_taborder("132");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("133");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "573", "330", "80", "37", null, null, this);
            obj.set_taborder("135");
            obj.set_text("h 37");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("137");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "499", "368", "80", "30", null, null, this);
            obj.set_taborder("138");
            obj.set_text("h 30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "9", "413", "10", "67", null, null, this);
            obj.set_taborder("139");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1151", "418", "10", "75", null, null, this);
            obj.set_taborder("140");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "613", "691", "80", "10", null, null, this);
            obj.set_taborder("141");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new ListBox("lstCUST_NAME", "absolute", "26.45%", "93", "150", "78", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("143");
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
            obj = new Layout("default", "", 1031, 336, this.tabXM.tab1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("43");
            		p.set_text("코바넷매체코드");
            		p.getSetter("position").set("absolute");
            		p.set_scrollbars("none");
            		p.style.set_background("#ffffffff");

            	}
            );
            this.tabXM.tab1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1031, 336, this.tabXM.tab0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("43");
            		p.set_text("매체채널");
            		p.getSetter("position").set("absolute");
            		p.set_scrollbars("none");
            		p.style.set_background("#ffffffff");

            	}
            );
            this.tabXM.tab0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabXM.tab2,
            	//-- Layout function
            	function(p) {
            		p.set_text("매체사 담당자");

            	}
            );
            this.tabXM.tab2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("매체사관리");
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
        this.addIncludeScript("MCMA0030.xfdl", "script::lib_script_common.xjs");
        this.registerScript("MCMA0030.xfdl", function() {
         /***************************************************************************************************
        * # Program : MCMA0030 매체사관리 
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.02		조민희 	Initial Created.
         *   2016.10.06		최제현 	Check and Revise.
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
         *****************************************************************************INBUS*CO*KR************/

        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /************************
         *  화면 변수 선언부  *
         ************************/
        this.sBUTTONLIST  = "TTFFTTTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME = "MCMA0030";

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
        	this.fnc_GetComboDs(this.dsCombo);
        	this.fn_GetCUST_NAME();
        	this.fn_Search();
        	
        }

        /*------------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時|
         -------------------------------------*/
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
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsTA_CUSTXM=dsTA_CUSTXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

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

        	var tab_index = this.tabXM.tabindex;
        	
        	if(tab_index == '1'){
        		this.fn_DataSetCancelTab0();
        	}else if(tab_index == '0'){
        		this.fn_DataSetCancelTab1();
        	}else if(tab_index == '2'){
        		this.fn_DataSetCancelTab2();
        	}
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時|
         -------------------------*/
        this.fn_Save = function (obj) {

        	var tab_index = this.tabXM.tabindex;
        	
        	if(tab_index == '1'){
        		this.fn_SaveTab0();
        	}else if(tab_index == '0'){
        		this.fn_SaveTab01();
        		this.fn_SaveTab02();
        	}else if(tab_index == '2'){
        		this.fn_SaveTab03();
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
        	if(this.tabXM.tabindex == '0'){
        		if (this.fnc_DatasetChangeCheck("dsTA_CUSTXM")||this.fnc_DatasetChangeCheck("dsMD_RMEDXM_01")||this.fnc_DatasetChangeCheck("dsMD_RMEDXM_02")) {
        			if (this.fnc_Message("TMM023") == false) return false;
        		}
        	}else if(this.tabXM.tabindex == '1'){
        		if (this.fnc_DatasetChangeCheck("dsTA_CUSTXM")||this.fnc_DatasetChangeCheck("dsMD_CUSTXM")) {
        			if (this.fnc_Message("TMM023") == false) return false;
        		}
        	}
        	return true;

        }

        
        /*--------------------+
         |  저장 여부 체크! |
         +--------------------*/
        this.fn_SaveItemCheck = function (tab_index) {

        	if(tab_index == '1'){	// 매체채널
        	
        		if (this.fnc_DatasetChangeCheck("dsMD_CUSTXM") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        		}

        		for (var i = 0; i < this.dsMD_CUSTXM.getRowCount(); i++) {
        		
        			if (this.fnc_ToUpper(this.dsMD_CUSTXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        			if (this.fnc_Length(this.fnc_Trim(this.dsMD_CUSTXM.getColumn(i, "CUST_NAME"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "매체/채널명", this.dsMD_CUSTXM, i, this.dsMD_CUSTXM.getColumn(i, "CUST_NAME"), "");
        			}	
        		}

        		return true;
        	}
        }

        
        /*---------------------+
         |  삭제 여부 체크!  |
         +---------------------*/
        this.fn_DeleteCheck = function (btnName,totalNum) {
        	if(btnName == 'btnDelRow01'){
        		if (totalNum < 1) {
        			this.fnc_Message("TMM007");
        			return false;
        		}

        		var grdMD_CUSTXM = this.tabXM.tab0.grdMD_CUSTXM;
        		var sQuestionText  = "매체명 : ("+grdMD_CUSTXM.getCellText(grdMD_CUSTXM.currentrow, grdMD_CUSTXM.getBindCellIndex( "body", "CUST_NAME" )) + ")";
        			
        		if(totalNum > 1){
        			sQuestionText += " 외 "+ (totalNum-1) + "건"
        		}
        	
        		return this.fnc_Message("TMM002", sQuestionText);
        		
        	}else if(btnName == 'btnDelRow02'){
        		if (totalNum < 1) {
        			this.fnc_Message("TMM007");
        			return false;
        		}

        		var grdMD_CUSTMN = this.tabXM.tab2.grdMD_CUSTMN;
        		var sQuestionText  = "담당자명 : ("+grdMD_CUSTMN.getCellText(grdMD_CUSTMN.currentrow, grdMD_CUSTMN.getBindCellIndex( "body", "CHSN_NAME" )) + ")";
        			
        		if(totalNum > 1){
        			sQuestionText += " 외 "+ (totalNum-1) + "건"
        		}
        	
        		return this.fnc_Message("TMM002", sQuestionText);
        	}
        }

        /*------------------------------------------+ 
         |  Service 호출 시 넘어 갈 Argument 생성! |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {

        		sReturnString  = " pgm=" 	   + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " MDIA_CODE=" + this.fnc_Quote(this.cmbSHRMDIA_FLAG.value); //매체구분
         		sReturnString += " HIGH_NAME=" + this.fnc_Quote(this.edtSHRHIGH_NAME.value); //매체사명
         		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value); //매체명
         		sReturnString += " BIZR_NUMB=" + this.fnc_Quote(this.edtSHRBIZR_NUMB.value); //사업자번호

        	} else if (sKind == "SEARCH01") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.dsTA_CUSTXM.getColumn(this.dsTA_CUSTXM.rowposition, "CUST_CODE")); // 매체코드(상단 그리드)
        		sReturnString += " MDIA_CODE=" + this.fnc_Quote(this.cmbSHRMDIA_FLAG.value); //매체구분
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value); //매체명
        	} else if (sKind == "SEARCH02") {
        	
        		var nRow = this.dsTA_CUSTXM.rowposition;
        		var cust_code = this.dsTA_CUSTXM.getColumn(nRow, "CUST_CODE"); // 매체사코드(상단 그리드)

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(cust_code); // 매체코드(상단 그리드)
        		sReturnString += " MDIA_CODE=" + this.fnc_Quote(this.cmbSHRMDIA_FLAG.value); //매체구분
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value); //매체명
        	} else if (sKind == "SEARCH03") {
        	
        		var nRow = this.dsTA_CUSTXM.rowposition;
        		var cust_code = this.dsTA_CUSTXM.getColumn(nRow, "CUST_CODE"); // 매체사코드(상단 그리드)

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(cust_code); // 매체코드(상단 그리드)
        		sReturnString += " MDIA_CODE=" + this.fnc_Quote(this.cmbSHRMDIA_FLAG.value); //매체구분
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value); //매체명
        	} else if (sKind == "SEARCH04") {
        	
        		var nRow = this.dsTA_CUSTXM.rowposition;
        		var cust_code = this.dsTA_CUSTXM.getColumn(nRow, "CUST_CODE"); // 매체사코드(상단 그리드)
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(cust_code); // 매체코드(상단 그리드)
        		
        	} else if (sKind == "SEARCH05") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

        	} else if (sKind == "SAVE01") {

        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);

        	}  else if (sKind == "SAVE02") {

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

        		this.fnc_Information(this.stInformation, this.dsTA_CUSTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsTA_CUSTXM.getCaseCount("dataset.getRowLevel(currow)==0"));
        		
        	} else if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.tabXM.tab0.stInformation , this.dsMD_CUSTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_getmedx_codemail();
        	} else if (sMethodName == "SEARCH02") {
        		this.fnc_Information(this.tabXM.tab1.stInformation2 , this.dsMD_RMEDXM_01.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fn_searchTab1_SBS();
        	} else if (sMethodName == "SEARCH03") {
        		this.fnc_Information(this.tabXM.tab1.stInformation3 , this.dsMD_RMEDXM_02.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "SEARCH04") {
        		this.fnc_Information(this.tabXM.tab2.stInformation , this.dsMD_CUSTMN.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "SEARCH05") {
        		//자동완성 세팅
        		this.fn_AutoSetting();
        	} else if (sMethodName == "SAVE01") {
        		this.fnc_Information(this.tabXM.tab0.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_searchTab0();
        	} else if (sMethodName == "SAVE02") {
        		this.fnc_Information(this.tabXM.tab1.stInformation2, 0, "SAVE");
        		this.fn_searchTab1();
        		this.fnc_Message("TMM103");
        	} else if (sMethodName == "SAVE03") {
        		this.fnc_Information(this.tabXM.tab1.stInformation3, 0, "SAVE");
        		this.fn_searchTab1_SBS();
        		this.fnc_Message("TMM103");
        	}  else if (sMethodName == "SAVE04") {
        		this.fnc_Information(this.tabXM.tab1.stInformation3, 0, "SAVE");
        		this.fn_searchTab2();
        		this.fnc_Message("TMM103");
        	} else if (sMethodName == "GetCommCode") {	
        		
        		var arrParam = new Array();
        		arrParam[0] = "GRID,tabXM.tab2.grdMD_CUSTMN,dsEMPL_GUBN,EMPL_GUBN";
        		
        		this.fnc_CommonCodeInnerBind(arrParam);
        		
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

        
        /*----------------------------+
         |  탭 클릭 시				  |
         +----------------------------*/
        this.tabXM_onchanged = function(obj,e)
        {	
        	this.fnc_GridSetting(obj.components[e.postindex]);
        	//탭인덱스가 0이면 코바넷매체코드 조회 1이면 매체채널조회
        	if(this.tabXM.tabindex==0){
        		this.fn_searchTab1();
        		this.fn_searchTab1_SBS();
        	}else if(this.tabXM.tabindex==1){
        		this.fn_searchTab0();
        	}else if(this.tabXM.tabindex==2){
        		this.fn_searchTab2();
        	}
        }

        /*-----------------------------------------------------------+
         |  상단 행 선택 시 해당되는 하단 데이터 필터링 - Head  |
         +-----------------------------------------------------------*/
        this.dsTA_CUSTXM_onrowposchanged = function(obj,e)
        {
        	if(this.dsTA_CUSTXM.rowcount == 0) return;
        	var tab_index = this.tabXM.tabindex;
        	this.fn_validation(tab_index);
        }

        /*-----------------------------+
         | 활성화된 탭 체크 후 조회 |
         +-----------------------------*/
        this.fn_validation = function(tab_index){
        	//하단그리드
        	if(tab_index == '1'){this.fn_searchTab0();}
        	else if(tab_index == '0'){this.fn_searchTab1();}
        	else if(tab_index == '2'){this.fn_searchTab2();}
        }

        /*-----------------------------+
         | 매체채널(TAB0) 조회	   |
         +-----------------------------*/
        this.fn_searchTab0 = function()	{
        	this.fnc_DatasetClear("dsMD_CUSTXM");

        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsMD_CUSTXM=dsMD_CUSTXM";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.tabXM.tab0.grdMD_CUSTXM.setFocus();
        }

        /*-----------------------------+
         | 코바넷 매체코드(TAB1) 조회	   |
         +-----------------------------*/
        this.fn_searchTab1 = function()	{
        	this.fnc_DatasetClear("dsMD_RMEDXM_01");

        	var sMethodName = "SEARCH02";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsMD_RMEDXM_01=dsMD_RMEDXM_01";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*-----------------------------+
         | SBS 매체코드(TAB1) 조회	   |
         +-----------------------------*/
        this.fn_searchTab1_SBS = function()	{
        	this.fnc_DatasetClear("dsMD_RMEDXM_02");

        	var sMethodName = "SEARCH03";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsMD_RMEDXM_02=dsMD_RMEDXM_02";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*-----------------------------+
         | 매체사 담당자(TAB2) 조회	   |
         +-----------------------------*/
        this.fn_searchTab2 = function()	{
        	this.fnc_DatasetClear("dsMD_CUSTMN");

        	var sMethodName = "SEARCH04";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsMD_CUSTMN=dsMD_CUSTMN";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*----------------------------+
         |  매체채널(TAB0) 행 추가  |
         +----------------------------*/
        this.tabXM_tab0_btnAddRow_onclick = function(obj,e)
        {
        	var iXMRow = this.dsTA_CUSTXM.rowposition;
        	var HIGH_CODE = this.fnc_Trim(this.dsTA_CUSTXM.getColumn(iXMRow, "CUST_CODE"));
        	var HIGH_NAME = this.fnc_Trim(this.dsTA_CUSTXM.getColumn(iXMRow, "CUST_NAME"));

        	var iRow = this.dsMD_CUSTXM.addRow();
        	this.dsMD_CUSTXM.setColumn(iRow, "HIGH_CODE", HIGH_CODE); //청구지코드
        	this.dsMD_CUSTXM.setColumn(iRow, "HIGH_NAME", HIGH_NAME); //청구지명
        	this.dsMD_CUSTXM.setColumn(iRow, "USEX_YSNO", '1');//사용구분
        	this.dsMD_CUSTXM.setColumn(iRow, "MDIA_FLAG", 'B');//광고주구분
        	this.tabXM.tab0.grdMD_CUSTXM.setFocus();
        }

        /*-----------------------------------+
         |  코바넷매체코드(TAB1) 행 추가  |
         +-----------------------------------*/
        this.tabXM_tab1_btnAddRow_onclick = function(obj,e)
        {	
        	var iXMRow = this.dsTA_CUSTXM.rowposition;
        	var HIGH_CODE = this.fnc_Trim(this.dsTA_CUSTXM.getColumn(iXMRow, "CUST_CODE"));
        	
        	var iRow = this.dsMD_RMEDXM_01.addRow();
        	this.dsMD_RMEDXM_01.setColumn(iRow, "USEX_YSNO", '1');
        	this.dsMD_RMEDXM_01.setColumn(iRow, "HIGH_CODE",HIGH_CODE);
        }

        /*----------------------------+
         |  담당자(TAB2) 행 추가  |
         +----------------------------*/
        this.tabXM_tab2_btnAddRow_onclick = function(obj,e)
        {
        	var iXMRow = this.dsTA_CUSTXM.rowposition;
        	var CUST_CODE = this.fnc_Trim(this.dsTA_CUSTXM.getColumn(iXMRow, "CUST_CODE"));
        	var CUST_NAME = this.fnc_Trim(this.dsTA_CUSTXM.getColumn(iXMRow, "CUST_NAME"));

        	var iRow = this.dsMD_CUSTMN.addRow();
        	this.dsMD_CUSTMN.setColumn(iRow, "CUST_CODE", CUST_CODE); //청구지코드
        	this.dsMD_CUSTMN.setColumn(iRow, "CUST_NAME", CUST_NAME); //청구지명
        	this.tabXM.tab2.grdMD_CUSTMN.setFocus();
        }

        /*-----------------------------------+
         |  SBS매체코드(TAB1) 행 추가      |
         +-----------------------------------*/
        this.tabXM_tab1_btnAddRow00_onclick = function(obj,e)
        {
        	var iXMRow = this.dsTA_CUSTXM.rowposition;
        	var HIGH_CODE = this.fnc_Trim(this.dsTA_CUSTXM.getColumn(iXMRow, "CUST_CODE"));
        	
        	var iRow = this.dsMD_RMEDXM_02.addRow();
        	this.dsMD_RMEDXM_02.setColumn(iRow, "USEX_YSNO", '1');
        	this.dsMD_RMEDXM_02.setColumn(iRow, "HIGH_CODE",HIGH_CODE);
        }

        
        /*----------------------------+
         |  매체채널(TAB0) 행 삭제  |
         +----------------------------*/
        this.tabXM_tab0_btnDelRow_onclick = function(obj,e)
        {
        	var btnName = obj.name;
        	var totalNum = 0;	//체크된 개수
        	
        	for(var i=0 ; i<this.dsMD_CUSTXM.rowcount ; i++){
        		if(this.dsMD_CUSTXM.getColumn(i,"CHEK_FILD") == '1'){totalNum ++;}
        	}
        	
        	if (this.fn_DeleteCheck(btnName,totalNum)) {
        		var rowCnt = this.dsMD_CUSTXM.rowcount;
        		for(var i=(rowCnt-1); i>=0; i--){
        			if(this.dsMD_CUSTXM.getColumn(i,"CHEK_FILD") == '1'){
        				this.dsMD_CUSTXM.deleteRow(i);
        			}
        		}
        	}
        }

        /*----------------------------+
         |  담당자(TAB2) 행 삭제  |
         +----------------------------*/
        this.tabXM_tab2_btnDelRow_onclick = function(obj,e)
        {
        	var btnName = obj.name;
        	var totalNum = 0;	//체크된 개수
        	
        	for(var i=0 ; i<this.dsMD_CUSTMN.rowcount ; i++){
        		if(this.dsMD_CUSTMN.getColumn(i,"CHEK_FILD") == '1'){totalNum ++;}
        	}
        	
        	if (this.fn_DeleteCheck(btnName,totalNum)) {
        		var rowCnt = this.dsMD_CUSTMN.rowcount;
        		for(var i=(rowCnt-1); i>=0; i--){
        			if(this.dsMD_CUSTMN.getColumn(i,"CHEK_FILD") == '1'){
        				this.dsMD_CUSTMN.deleteRow(i);
        			}
        		}
        	}
        }

        /*----------------------------+
         |  매체채널(TAB0) 저장 	  |
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

        /*----------------------------------------------------+
         |  코바넷매체코드(TAB1) _ 상단그리드  저장 	  |
         +----------------------------------------------------*/
        this.fn_SaveTab01 = function(){
        	
        	if (this.fnc_DatasetChangeCheck("dsMD_RMEDXM_01") == false) {
        		return false;
        	}
        	
        	for (var i = 0; i < this.dsMD_RMEDXM_01.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsMD_RMEDXM_01.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsMD_RMEDXM_01.getColumn(i, "BROD_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "방송사 코드", this.dsMD_RMEDXM_01, i, this.dsMD_RMEDXM_01.getColumn(this.dsMD_RMEDXM_01.rowposition,"BROD_CODE"), "");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsMD_RMEDXM_01.getColumn(i, "MDIM_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "매체코드", this.dsMD_RMEDXM_01, i, this.dsMD_RMEDXM_01.getColumn(this.dsMD_RMEDXM_01.rowposition,"MDIM_CODE"), "");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsMD_RMEDXM_01.getColumn(i, "OFIC_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "본지사코드", this.dsMD_RMEDXM_01, i, this.dsMD_RMEDXM_01.getColumn(this.dsMD_RMEDXM_01.rowposition,"OFIC_CODE"), "");
        		}
        		
        	}
        	
        	var sMethodName = "SAVE02";
        	var sInDataSet  = "dsMD_RMEDXM_01=dsMD_RMEDXM_01:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*----------------------------------------------------+
         |  코바넷매체코드(TAB1) _ 하단그리드  저장 	  |
         +----------------------------------------------------*/
        this.fn_SaveTab02 = function(){
        	
        	if (this.fnc_DatasetChangeCheck("dsMD_RMEDXM_02") == false) {
        		return false;
        	}
        	
        	for (var i = 0; i < this.dsMD_RMEDXM_02.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsMD_RMEDXM_02.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsMD_RMEDXM_02.getColumn(i, "BROD_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "방송사 코드", this.dsMD_RMEDXM_02, i, this.dsMD_RMEDXM_02.getColumn(this.dsMD_RMEDXM_02.rowposition,"BROD_CODE"), "");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsMD_RMEDXM_02.getColumn(i, "MDIM_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "매체코드", this.dsMD_RMEDXM_02, i, this.dsMD_RMEDXM_02.getColumn(this.dsMD_RMEDXM_02.rowposition,"MDIM_CODE"), "");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsMD_RMEDXM_02.getColumn(i, "OFIC_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "본지사코드", this.dsMD_RMEDXM_02, i, this.dsMD_RMEDXM_02.getColumn(this.dsMD_RMEDXM_02.rowposition,"OFIC_CODE"), "");
        		}
        		
        	}
        	
        	var sMethodName = "SAVE03";
        	var sInDataSet  = "dsMD_RMEDXM_02=dsMD_RMEDXM_02:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*--------------------------------------------+
         |  담당자 (TAB2) _ 하단그리드  저장 	  |
         +--------------------------------------------*/
        this.fn_SaveTab03 = function(){
        	
        	if (this.fnc_DatasetChangeCheck("dsMD_CUSTMN") == false) {
        		return false;
        	}
        	
        	for (var i = 0; i < this.dsMD_CUSTMN.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsMD_CUSTMN.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsMD_CUSTMN.getColumn(i, "EMPL_GUBN"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "담당자 구분", this.dsMD_CUSTMN, i, this.dsMD_CUSTMN.getColumn(this.dsMD_CUSTMN.rowposition,"EMPL_GUBN"), "");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsMD_CUSTMN.getColumn(i, "CUST_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "매체사", this.dsMD_CUSTMN, i, this.dsMD_CUSTMN.getColumn(this.dsMD_CUSTMN.rowposition,"CUST_NAME"), "");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsMD_CUSTMN.getColumn(i, "CHSN_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "담당자명", this.dsMD_CUSTMN, i, this.dsMD_CUSTMN.getColumn(this.dsMD_CUSTMN.rowposition,"CHSN_NAME"), "");
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsMD_CUSTMN.getColumn(i, "ELTR_MLAD"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "담당자 이메일 주소", this.dsMD_CUSTMN, i, this.dsMD_CUSTMN.getColumn(this.dsMD_CUSTMN.rowposition,"ELTR_MLAD"), "");
        		}
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsMD_CUSTMN.getColumn(i, "ELTR_MLAD"))) > 0) {
        			if (this.fnc_IsEmail(this.dsMD_CUSTMN.getColumn(i, "ELTR_MLAD")) == false) {
        				this.tabXM.set_tabindex(2);
        				return this.fnc_CheckPostAction("TMM300", "E-Mail 주소가 올바르지 않습니다.", this.dsMD_CUSTMN, i, this.tabXM.tab2.grdMD_CUSTMN, "ELTR_MLAD");
        			}
        		}

        // 		if (this.dsMD_CUSTMN.getCaseCount("MJCH_YSNO=='1'") > 1 || this.dsMD_CUSTMN.getCaseCount("MJCH_YSNO=='1'") < 1) {
        // 			this.tabXM.set_tabindex(2);
        // 			this.fnc_Message("TMM125", "한명의 대표담당자를 선택하세요");
        // 			return false;
        // 		}
        		
        	}
        	
        	
        	var sMethodName = "SAVE04";
        	var sInDataSet  = "dsMD_CUSTMN=dsMD_CUSTMN:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*----------------------------+
         |  매체채널(TAB0) 취소 	  |
         +----------------------------*/
        this.fn_DataSetCancelTab0 = function(){

        	this.fnc_DataSetCancel("dsMD_CUSTXM");
        	this.tabXM.tab0.grdMD_CUSTXM.setFocus();

        }

        /*---------------------------------+
         |  코바넷매체코드(TAB1) 취소   |
         +---------------------------------*/
        this.fn_DataSetCancelTab1 = function(){

        	this.fnc_DataSetCancel("dsMD_RMEDXM_01");
        	this.fnc_DataSetCancel("dsMD_RMEDXM_02");
        	this.tabXM.tab1.grdMD_RMEDXM_01.setFocus();
        	
        }

        /*------------------------+
         |  담당자(TAB2) 취소    |
         +------------------------*/
        this.fn_DataSetCancelTab2 = function(){
        	this.fnc_DataSetCancel("dsMD_CUSTMN");
        	
        }

        /*---------------------------------+
         | 		 매체채널 팝업	 	   |
         +---------------------------------*/
        this.dsMD_CUSTXM_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "MPPR_NAME" ) this.fn_HelpDialoge(this.tabXM.tab0.grdMD_CUSTXM, "YES", e.oldvalue, e.columnid);
        	else if (e.columnid == "MDIA_NPAP" ) this.fn_HelpDialoge(this.tabXM.tab0.grdMD_CUSTXM, "YES", e.oldvalue, e.columnid);
        }

        /*---------------------------------+
         | 		 코바넷매체코드 팝업	   |
         +---------------------------------*/
        this.dsMD_RMEDXM_01_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "BROD_CDNM" ) this.fn_HelpDialoge(this.tabXM.tab1.grdMD_RMEDXM_01, "YES", e.oldvalue, e.columnid);
        	if (e.columnid == "MDIM_CDNM" ) this.fn_HelpDialoge(this.tabXM.tab1.grdMD_RMEDXM_01, "YES", e.oldvalue, e.columnid);
        	if (e.columnid == "OFIC_CDNM" ) this.fn_HelpDialoge(this.tabXM.tab1.grdMD_RMEDXM_01, "YES", e.oldvalue, e.columnid);
        }

        /*---------------------------------+
         | 		 SBS매체코드 팝업	   |
         +---------------------------------*/
        this.dsMD_RMEDXM_02_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "BROD_CDNM" ) this.fn_HelpDialoge(this.tabXM.tab1.grdMD_RMEDXM_02, "YES", e.oldvalue, e.columnid);
        	if (e.columnid == "MDIM_CDNM" ) this.fn_HelpDialoge(this.tabXM.tab1.grdMD_RMEDXM_02, "YES", e.oldvalue, e.columnid);
        	if (e.columnid == "OFIC_CDNM" ) this.fn_HelpDialoge(this.tabXM.tab1.grdMD_RMEDXM_02, "YES", e.oldvalue, e.columnid);
        }

        /*-------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        	var arrParam = new Array();

        	if (obj.name == "grdMD_CUSTXM") {
        		if ((this.fnc_getGridHelpColName(obj, sFromDs) == "MPPR_CODE") || (sColumnID == "MPPR_CODE")) {		//MPP팝업
        			
        			arrParam[0] = "MCM0001";
        			arrParam[1] = "";
        			arrParam[2] = "MPPR_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "tabXM.tab0.grdMD_CUSTXM";
        			arrParam[5] = "MPPR_CODE,MPPR_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	} else if (obj.name == "grdMD_RMEDXM_01") {
        		if ((this.fnc_getGridHelpColName(obj, sFromDs) == "CUST_NAME") || (sColumnID == "CUST_NAME")) {		//매체명팝업
        			arrParam[0] = "MCM0010";
        			arrParam[1] = "";
        			arrParam[2] = "CUST_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "tabXM.tab1.grdMD_RMEDXM_01";
        			arrParam[5] = "CUST_CODE,CUST_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);

        		}else if ((this.fnc_getGridHelpColName(obj, sFromDs) == "BROD_CODE") || (sColumnID == "BROD_CDNM")) {		//방송사팝업

        			arrParam[0] = "MCM0012";
        			arrParam[1] = "";
        			arrParam[2] = "BROD_CDNM";
        			arrParam[3] = "N";
        			arrParam[4] = "tabXM.tab1.grdMD_RMEDXM_01";
        			arrParam[5] = "BROD_CODE,BROD_CDNM";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        		}else if ((this.fnc_getGridHelpColName(obj, sFromDs) == "MDIM_CODE") || (sColumnID == "MDIM_CDNM")) {		//매체팝업

        			arrParam[0] = "MCM0013";
        			arrParam[1] = "";
        			arrParam[2] = "MDIM_CDNM";
        			arrParam[3] = "N";
        			arrParam[4] = "tabXM.tab1.grdMD_RMEDXM_01";
        			arrParam[5] = "MDIM_CODE,MDIM_CDNM";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        		}else if ((this.fnc_getGridHelpColName(obj, sFromDs) == "OFIC_CODE") || (sColumnID == "OFIC_CDNM")) {		//본지사명팝업
        			arrParam[0] = "MCM0014";
        			arrParam[1] = "";
        			arrParam[2] = "OFIC_CDNM";
        			arrParam[3] = "N";
        			arrParam[4] = "tabXM.tab1.grdMD_RMEDXM_01";
        			arrParam[5] = "OFIC_CODE,OFIC_CDNM";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        		
        	} else if (obj.name == "grdMD_RMEDXM_02") {
        		if ((this.fnc_getGridHelpColName(obj, sFromDs) == "CUST_NAME") || (sColumnID == "CUST_NAME")) {		//매체명팝업
        			arrParam[0] = "MCM0010";
        			arrParam[1] = "";
        			arrParam[2] = "CUST_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "tabXM.tab1.grdMD_RMEDXM_02";
        			arrParam[5] = "CUST_CODE,CUST_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);

        		}else if ((this.fnc_getGridHelpColName(obj, sFromDs) == "BROD_CODE") || (sColumnID == "BROD_CDNM")) {		//방송사팝업

        			arrParam[0] = "MCM0012";
        			arrParam[1] = "";
        			arrParam[2] = "BROD_CDNM";
        			arrParam[3] = "N";
        			arrParam[4] = "tabXM.tab1.grdMD_RMEDXM_02";
        			arrParam[5] = "BROD_CODE,BROD_CDNM";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        		}else if ((this.fnc_getGridHelpColName(obj, sFromDs) == "MDIM_CODE") || (sColumnID == "MDIM_CDNM")) {		//매체팝업

        			arrParam[0] = "MCM0013";
        			arrParam[1] = "";
        			arrParam[2] = "MDIM_CDNM";
        			arrParam[3] = "N";
        			arrParam[4] = "tabXM.tab1.grdMD_RMEDXM_02";
        			arrParam[5] = "MDIM_CODE,MDIM_CDNM";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        		}else if ((this.fnc_getGridHelpColName(obj, sFromDs) == "OFIC_CODE") || (sColumnID == "OFIC_CDNM")) {		//본지사명팝업
        			arrParam[0] = "MCM0014";
        			arrParam[1] = "";
        			arrParam[2] = "OFIC_CDNM";
        			arrParam[3] = "N";
        			arrParam[4] = "tabXM.tab1.grdMD_RMEDXM_02";
        			arrParam[5] = "OFIC_CODE,OFIC_CDNM";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}
        }

        
        /*--------------------------------+
         |  매체채널 전체 선택 / 해제  |
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

        /*---------------------------------------+
         |  코바넷매체코드 전체 선택 / 해제  |
         +---------------------------------------*/
        this.tabXM_tab1_grdMD_RMEDXM_01_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.tabXM.tab1.grdMD_RMEDXM_01.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsMD_RMEDXM_01.getRowCount(); i++) {
        			this.dsMD_RMEDXM_01.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.tabXM.tab1.grdMD_RMEDXM_01.setCellProperty("Head", 0, "expr", isAllChecked);
        	}
        }

        /*---------------------------------------+
         |     SBS매체코드 전체 선택 / 해제   |
         +---------------------------------------*/
        this.tabXM_tab1_grdMD_RMEDXM_02_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.tabXM.tab1.grdMD_RMEDXM_02.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsMD_RMEDXM_02.getRowCount(); i++) {
        			this.dsMD_RMEDXM_02.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.tabXM.tab1.grdMD_RMEDXM_02.setCellProperty("Head", 0, "expr", isAllChecked);
        	}
        }

        /*---------------------------------------+
         |     매체 담당자 전체 선택 / 해제   |
         +---------------------------------------*/
        this.tabXM_tab2_grdMD_CUSTMN_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.tabXM.tab2.grdMD_CUSTMN.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		for (var i = 0; i < this.dsMD_CUSTMN.getRowCount(); i++) {
        			this.dsMD_CUSTMN.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.tabXM.tab2.grdMD_CUSTMN.setCellProperty("Head", 0, "expr", isAllChecked);
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

        /*-------------------------------+
         |  조회조건 콤보 값 변경 時  |
         +-------------------------------*/
        this.fn_onItemChanged = function(obj,e)
        {
        	this.fn_Search();
        }

        //KeyUp Event 상하 키를 누를 때마다 하단그리드 조회
        this.grdTA_CUSTXM_onkeyup = function(obj,e)
        {
        	//탭인덱스가 0이면 코바넷매체코드 조회 1이면 매체채널조회
        	if(this.tabXM.tabindex==0){
        		this.fn_searchTab1();
        		this.fn_searchTab1_SBS();
        	}else{
        		this.fn_searchTab0();
        	}
        }

        /*-------------------------------+
         | 		   매체사정보관리	 	 |
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

        this.edtSHRMEDX_NAME_onkeyup = function(obj,e)
        {
        	if(e.keycode==40 || e.keycode == 38)
        	{
        		this.lstCUST_NAME.setFocus();
        		this.lstCUST_NAME.set_index(0);
        	}
        }

        
        this.lstCUST_NAME_onitemclick = function(obj,e)
        {
        	this.edtSHRHIGH_NAME.set_value(e.itemtext);
        	this.lstCUST_NAME.set_visible(false);
        }

        
        this.lstCUST_NAME_onkeydown = function(obj,e)
        {	
        	if(e.keycode == 13)
        	{
        		this.edtSHRHIGH_NAME.set_value(this.lstCUST_NAME.text);
        		this.lstCUST_NAME.set_visible(false);
        		this.fn_Search();
        	}	
        }

        

        
        this.edtSHRMEDX_NAME_ontextchanged = function(obj,e)
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

        this.fnc_getmedx_codemail = function()
        {
        		this.fnc_DatasetClear("dsMD_MEDX_MAIL");
        	
        		this.dsMD_MEDX_MAIL.insertRow(0);
        		this.dsMD_MEDX_MAIL.setColumn(0, "HIGH_CODE", 
        		this.grdTA_CUSTXM.getCellText(this.grdTA_CUSTXM.currentrow,this.grdTA_CUSTXM.getBindCellIndex( "body", "CUST_CODE" )));
        		
        		var sMethodName = "SEARCH06";
        		var sInDataSet  = "dsMD_MEDX_MAIL=dsMD_MEDX_MAIL:A";
        		var sOutDataSet = "dsMD_MEDX_MAIL=dsMD_MEDX_MAIL";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        this.tabXM_tab0_grdMD_CUSTXM_ondropdown = function(obj,e)
        {
        	var sHIGH_CODE = this.dsMD_CUSTXM.getColumn(e.row, "HIGH_CODE");
         	this.dsMD_MEDX_MAIL.filter("HIGH_CODE == '" + sHIGH_CODE + "'");
        }

        this.dsMD_CUSTMN_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "MJCH_YSNO") {
        		for (var i = 0; i < this.dsMD_CUSTMN.getRowCount(); i++) {
        			if (i != e.row && e.newvalue == "1") this.dsMD_CUSTMN.setColumn(i, "MJCH_YSNO", "0");
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_CUSTXM.addEventHandler("onrowposchanged", this.dsTA_CUSTXM_onrowposchanged, this);
            this.dsMD_CUSTXM.addEventHandler("oncolumnchanged", this.dsMD_CUSTXM_oncolumnchanged, this);
            this.dsMD_RMEDXM_01.addEventHandler("oncolumnchanged", this.dsMD_RMEDXM_01_oncolumnchanged, this);
            this.dsMD_RMEDXM_01.addEventHandler("onvaluechanged", this.dsMD_RMEDXM_01_onvaluechanged, this);
            this.dsMD_RMEDXM_02.addEventHandler("oncolumnchanged", this.dsMD_RMEDXM_02_oncolumnchanged, this);
            this.dsMD_RMEDXM_02.addEventHandler("onvaluechanged", this.dsMD_RMEDXM_02_onvaluechanged, this);
            this.dsMD_CUSTMN.addEventHandler("oncolumnchanged", this.dsMD_CUSTMN_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.divButtonList.btnCreateParameter.addEventHandler("onclick", this.btnCreateParameter_onclick, this);
            this.imgSearchTitle0.addEventHandler("onclick", this.imgSearchTitle0_onclick, this);
            this.edtSHRCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCUST_NAME.addEventHandler("onkeydown", this.fn_onKeyDown, this);
            this.grdTA_CUSTXM.addEventHandler("oncelldblclick", this.grdTM_CODEXH_oncelldblclick, this);
            this.grdTA_CUSTXM.addEventHandler("onkeyup", this.grdTA_CUSTXM_onkeyup, this);
            this.tabXM.addEventHandler("onchanged", this.tabXM_onchanged, this);
            this.tabXM.tab1.grdMD_RMEDXM_01.addEventHandler("oncelldblclick", this.fn_OpenSlip, this);
            this.tabXM.tab1.grdMD_RMEDXM_01.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabXM.tab1.grdMD_RMEDXM_01.addEventHandler("ontextchanged", this.tabXM_tab1_grdMD_RMEDXM_01_ontextchanged, this);
            this.tabXM.tab1.grdMD_RMEDXM_01.addEventHandler("onkillfocus", this.tabXM_tab1_grdMD_RMEDXM_01_onkillfocus, this);
            this.tabXM.tab1.grdMD_RMEDXM_01.addEventHandler("onmove", this.tabXM_tab1_grdMD_RMEDXM_01_onmove, this);
            this.tabXM.tab1.grdMD_RMEDXM_01.addEventHandler("onheadclick", this.tabXM_tab1_grdMD_RMEDXM_01_onheadclick, this);
            this.tabXM.tab1.grdMD_RMEDXM_02.addEventHandler("oncelldblclick", this.fn_OpenSlip, this);
            this.tabXM.tab1.grdMD_RMEDXM_02.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabXM.tab1.grdMD_RMEDXM_02.addEventHandler("onheadclick", this.tabXM_tab1_grdMD_RMEDXM_02_onheadclick, this);
            this.tabXM.tab0.grdMD_CUSTXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabXM.tab0.grdMD_CUSTXM.addEventHandler("ontextchanged", this.tabXM_tab0_grdMD_CUSTXM_ontextchanged, this);
            this.tabXM.tab0.grdMD_CUSTXM.addEventHandler("onheadclick", this.tabXM_tab0_grdMD_CUSTXM_onheadclick, this);
            this.tabXM.tab0.grdMD_CUSTXM.addEventHandler("ondropdown", this.tabXM_tab0_grdMD_CUSTXM_ondropdown, this);
            this.tabXM.tab0.btnDelRow01.addEventHandler("onclick", this.tabXM_tab0_btnDelRow_onclick, this);
            this.tabXM.tab0.btnAddRow01.addEventHandler("onclick", this.tabXM_tab0_btnAddRow_onclick, this);
            this.tabXM.tab2.grdMD_CUSTMN.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.tabXM.tab2.grdMD_CUSTMN.addEventHandler("onheadclick", this.tabXM_tab2_grdMD_CUSTMN_onheadclick, this);
            this.tabXM.tab2.btnAddRow01.addEventHandler("onclick", this.tabXM_tab2_btnAddRow_onclick, this);
            this.tabXM.tab2.btnDelRow02.addEventHandler("onclick", this.tabXM_tab2_btnDelRow_onclick, this);
            this.imgSearchTitle02.addEventHandler("onclick", this.imgSearchTitle0_onclick, this);
            this.edtSHRHIGH_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRHIGH_NAME.addEventHandler("onkeydown", this.fn_onKeyDown, this);
            this.edtSHRHIGH_NAME.addEventHandler("onkeyup", this.edtSHRMEDX_NAME_onkeyup, this);
            this.edtSHRHIGH_NAME.addEventHandler("ontextchanged", this.edtSHRMEDX_NAME_ontextchanged, this);
            this.cmbSHRMDIA_FLAG.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRMDIA_FLAG.addEventHandler("onitemchanged", this.fn_onItemChanged, this);
            this.imgSearchTitle01.addEventHandler("onclick", this.imgSearchTitle0_onclick, this);
            this.imgSearchTitle03.addEventHandler("onclick", this.imgSearchTitle0_onclick, this);
            this.edtSHRBIZR_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRBIZR_NUMB.addEventHandler("onkeydown", this.fn_onKeyDown, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.lstCUST_NAME.addEventHandler("onitemclick", this.lstCUST_NAME_onitemclick, this);
            this.lstCUST_NAME.addEventHandler("onkeydown", this.lstCUST_NAME_onkeydown, this);

        };

        this.loadIncludeScript("MCMA0030.xfdl");
        this.loadPreloadList();
       
    };
}
)();
