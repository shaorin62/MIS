﻿(function()
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
                this.set_name("MACA0020");
                this.set_titletext("세금계산서생성");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsMEDX_FLAG</Col><Col id=\"CODEID\">MEDX_FLAG</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSend", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">분할발행</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">선택발행</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">합산발행</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_TCALXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\" value=\"\"/><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"METX_CUNM\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"CUTX_CUNM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_AMTX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TAXX_VATX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SUMM_AMTX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TAXX_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"DIRC_TION\" type=\"STRING\" size=\"256\"/><Column id=\"DOCU_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ATTC_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_CONN\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_SERV\" type=\"STRING\" size=\"256\"/><Column id=\"BUSI_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"OWNR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"DTL1_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL2_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"MOWN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MADD_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MDT1_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"MDT2_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"TSEQ_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"TAXY_MONT\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SEQX_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"DTIX_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DTIY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_DMND\" type=\"STRING\" size=\"256\"/><Column id=\"ENTP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTX_CUNM\" type=\"STRING\" size=\"256\"/><Column id=\"ENTP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRTR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"COMI_FILD\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CVAT_FILD\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CSUM_FILD\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SEND_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_SANB\" type=\"STRING\" size=\"256\"/><Column id=\"CONVERSATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ISSUE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SACH_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTax_demand", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">영수</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">청구</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDti_type", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">세금계산서</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">수정세금계산서</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">계산서</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">수정계산서</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAUTO_NAME", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAUTO_NAME1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_TCALXH_RPT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\" value=\"\"/><Column id=\"TAXY_MONT\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CUTX_CUNM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"METX_CUNM\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_VATX\" type=\"STRING\" size=\"256\"/><Column id=\"SUMM_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"DEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SACH_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"BIZR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"OWNR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"DTL1_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL2_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"MOWN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MADD_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MDT1_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"MDT2_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTIX_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DTIY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSI_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_DMND\" type=\"STRING\" size=\"256\"/><Column id=\"ENTP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTX_CUNM\" type=\"STRING\" size=\"256\"/><Column id=\"ENTP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_SANB\" type=\"STRING\" size=\"256\"/><Column id=\"CONVERSATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ISSUE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MBSN_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"MBSN_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_TCALXD_RPT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\" value=\"\"/><Column id=\"PRNT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AMNT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"AVAT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"ASUM_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"COMI_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"CVAT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"CSUM_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MBSN_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"MBSN_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_TCALXD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\" value=\"\"/><Column id=\"TAXY_MONT\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AMNT_FILD\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVAT_FILD\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ASUM_FILD\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"COMI_FILD\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CVAT_FILD\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CSUM_FILD\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_IDXX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDti_type1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">일반</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">영세율</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">일반 위수탁</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">수입</Col></Row><Row><Col id=\"NAME\">영세율 위수탁</Col><Col id=\"CODE\">05</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSendFlag", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"NAME\">미발송</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">발송</Col></Row></Rows>");
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
            obj.set_taborder("0");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("1");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_text("매체 세금계산서");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 >매체관리>회계관리>세금계산서 생성");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("47");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("48");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "694", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "180", "71", "52", "21", null, null, this);
            obj.set_taborder("116");
            obj.set_text("광고주");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "510", "71", "35", "21", null, null, this);
            obj.set_taborder("122");
            obj.set_text("발행");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("126");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoSUCC_FLAG", "absolute", "553", "71", "116", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdoSUCC_FLAG_innerdataset = new Dataset("rdoSUCC_FLAG_innerdataset", this.rdoSUCC_FLAG);
            rdoSUCC_FLAG_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">완료</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">미완료</Col></Row></Rows>");
            obj.set_innerdataset(rdoSUCC_FLAG_innerdataset);
            obj.set_taborder("128");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("2");
            obj.set_direction("vertical");
            obj.set_index("2");

            obj = new Edit("edtSHRCUST_CODE", "absolute", "236", "71", "80", "21", null, null, this);
            obj.set_taborder("129");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_NAME", "absolute", "318", "71", "21", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "341", "71", "140", "21", null, null, this);
            obj.set_taborder("131");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("staSHRYEAR_MNTH", "absolute", "28", "71", "44", "21", null, null, this);
            obj.set_taborder("140");
            obj.set_text("년월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Div("calSHRYEAR_MNTH", "absolute", "71", "71", "80", "21", null, null, this);
            obj.set_taborder("142");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "694", "71", "67", "21", null, null, this);
            obj.set_taborder("144");
            obj.set_text("매체구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRMEDX_FLAG", "absolute", "762", "71", "103", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("145");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("");

            obj = new Tab("tabXM", "absolute", "8", "113", null, null, "25", "15", this);
            obj.set_taborder("146");
            obj.set_tabindex("0");
            obj.set_cssclass("styTabControl");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tab0", this.tabXM);
            obj.set_text("위수탁");
            obj.style.set_background("#ffffffff");
            obj.set_scrollbars("none");
            this.tabXM.addChild(obj.name, obj);
            obj = new Button("btnDELE_TAXX00", "absolute", null, "10", "110", "21", "10", null, this.tabXM.tab0);
            obj.set_taborder("144");
            obj.set_text("세금계산서삭제");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "14", "174", "21", null, null, this.tabXM.tab0);
            obj.set_taborder("140");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Combo("cmbCRET_FLAG", "absolute", null, "10", "80", "21", "145", null, this.tabXM.tab0);
            this.tabXM.tab0.addChild(obj.name, obj);
            obj.set_taborder("142");
            obj.set_value("0");
            obj.set_text("분할발행");
            obj.set_innerdataset("@dsSend");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_index("0");
            obj = new Button("btnCRET_TAXX00", "absolute", null, "10", "110", "21", "10", null, this.tabXM.tab0);
            obj.set_taborder("143");
            obj.set_text("세금계산서생성");
            obj.set_cssclass("btn_WF_Module");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Static("stInformation02", "absolute", null, "10", "7", "21", "126", null, this.tabXM.tab0);
            obj.set_taborder("146");
            obj.set_cssclass("sta_WF_line");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "1020", "-4", "12", "23", null, null, this.tabXM.tab0);
            obj.set_taborder("147");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "1007", "-4", "12", "23", null, null, this.tabXM.tab0);
            obj.set_taborder("148");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Calendar("calDEND_DATE", "absolute", null, "10", "100", "21", "228", null, this.tabXM.tab0);
            this.tabXM.tab0.addChild(obj.name, obj);
            obj.set_taborder("149");
            obj = new Static("Static00", "absolute", null, "10", "69", "21", "327", null, this.tabXM.tab0);
            obj.set_taborder("150");
            obj.set_text("청구일자");
            obj.set_cssclass("styFormSearchCap");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Grid("grdMD_TCALXH", "absolute", "10", "35", null, "229", "10", null, this.tabXM.tab0);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("151");
            obj.set_binddataset("dsMD_TCALXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"107\"/><Column size=\"150\"/><Column size=\"105\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"99\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" text=\"청구일자\"/><Cell col=\"2\" text=\"발행일자\"/><Cell col=\"3\" text=\"세금계산서종류\"/><Cell col=\"4\" text=\"세금계산서분류\"/><Cell col=\"5\" text=\"영수구분\"/><Cell col=\"6\" text=\"세금계산서번호\"/><Cell col=\"7\" text=\"내역\"/><Cell col=\"8\" text=\"공급자 사업장 명\"/><Cell col=\"9\" text=\"공급받는자사업번호\"/><Cell col=\"10\" text=\"광고주코드\"/><Cell col=\"11\" text=\"공급받는자 사업장 명\"/><Cell col=\"12\" text=\"공급가액\"/><Cell col=\"13\" text=\"세액\"/><Cell col=\"14\" text=\"합계\"/><Cell col=\"15\" text=\"승인번호\"/><Cell col=\"16\" text=\"전표번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"none\" text=\"bind:DEND_DATE\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:PRNT_DATE\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"none\" text=\"bind:DTIX_TYPE\" combodataset=\"dsDti_type\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplay=\"edit\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:DTIY_TYPE\" combodataset=\"dsDti_type1\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplay=\"edit\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"none\" text=\"bind:TAXX_DMND\" combodataset=\"dsTax_demand\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplay=\"edit\"/><Cell col=\"6\" style=\"background:EXPR(ORI_ISSUE_ID != '' ? '#e8fedc':'white');background2:EXPR(ORI_ISSUE_ID != '' ? '#e8fedc':'white');cursor:hand;\" text=\"bind:TAXX_SANB\"/><Cell col=\"7\" edittype=\"none\" text=\"bind:MEMO_FILD\"/><Cell col=\"8\" edittype=\"none\" text=\"bind:MEDX_CDNM\"/><Cell col=\"9\" edittype=\"none\" text=\"bind:CUTX_CUNM\"/><Cell col=\"10\" edittype=\"none\" text=\"bind:CUST_CODE\"/><Cell col=\"11\" edittype=\"none\" text=\"bind:CUST_NAME\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:TAXX_AMTX\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:TAXX_VATX\"/><Cell col=\"14\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SUMM_AMTX\"/><Cell col=\"15\" edittype=\"readonly\" text=\"bind:APPROVE_ID\"/><Cell col=\"16\" text=\"bind:SACH_NUMB\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\" style=\"align:center;\" text=\"합계\"/><Cell col=\"12\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;TAXX_AMTX&quot;)\"/><Cell col=\"13\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;TAXX_VATX&quot;)\"/><Cell col=\"14\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;SUMM_AMTX&quot;)\"/><Cell col=\"15\"/><Cell col=\"16\"/></Band></Format></Formats>");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Grid("grdMD_TCALXD", "absolute", "10", "289", null, null, "10", "10", this.tabXM.tab0);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("152");
            obj.set_binddataset("dsMD_TCALXD");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"청구일자\"/><Cell col=\"1\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"적요\"/><Cell col=\"2\" text=\"브랜드명\"/><Cell col=\"3\" text=\"공급가액\"/><Cell col=\"4\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"부가세액\"/><Cell col=\"5\" text=\"합계금액\"/><Cell col=\"6\" text=\"COMI_FILD\"/><Cell col=\"7\" text=\"CVAT_FILD\"/><Cell col=\"8\" text=\"CSUM_FILD\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:DEND_DATE\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:MEMO_FILD\"/><Cell col=\"2\" text=\"bind:BRND_NAME\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AMNT_FILD\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"text\" style=\"align:right;\" text=\"bind:AVAT_FILD\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ASUM_FILD\"/><Cell col=\"6\" text=\"bind:COMI_FILD\"/><Cell col=\"7\" text=\"bind:CVAT_FILD\"/><Cell col=\"8\" text=\"bind:CSUM_FILD\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" style=\"align:center;\" text=\"합계\"/><Cell col=\"3\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;AMNT_FILD&quot;)\"/><Cell col=\"4\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;AVAT_FILD&quot;)\"/><Cell col=\"5\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;ASUM_FILD&quot;)\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/></Band></Format></Formats>");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "400", "264", "80", "25", null, null, this.tabXM.tab0);
            obj.set_taborder("153");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Static("stInformation00", "absolute", "10", "268", "174", "21", null, null, this.tabXM.tab0);
            obj.set_taborder("154");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Grid("grdMD_TCALXM", "absolute", "10", "35", null, null, "10", "10", this.tabXM.tab0);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("145");
            obj.set_binddataset("dsMD_TCALXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"150\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"세금계산서종류\"/><Cell col=\"2\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"세금계산서분류\"/><Cell col=\"3\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"영수구분\"/><Cell col=\"4\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"적요\"/><Cell col=\"5\" text=\"공급자사업번호\"/><Cell col=\"6\" text=\"매체사코드\"/><Cell col=\"7\" text=\"공급자 사업장 명\"/><Cell col=\"8\" text=\"공급받는자사업번호\"/><Cell col=\"9\" text=\"광고주코드\"/><Cell col=\"10\" text=\"공급받는자 사업장 명\"/><Cell col=\"11\" text=\"공급가액\"/><Cell col=\"12\" text=\"세액\"/><Cell col=\"13\" text=\"합계\"/><Cell col=\"14\" text=\"사업유형\"/><Cell col=\"15\" text=\"광고주대표\"/><Cell col=\"16\" text=\"매체구분\"/><Cell col=\"17\" text=\"주소\"/><Cell col=\"18\" text=\"상세주소1\"/><Cell col=\"19\" text=\"상세주소2\"/><Cell col=\"20\" text=\"거래명세서년월\"/><Cell col=\"21\" text=\"거래명세서번호\"/><Cell col=\"22\" text=\"세금계산서년월\"/><Cell col=\"23\" text=\"세금계산서번호\"/><Cell col=\"24\" text=\"개별청약서번호\"/><Cell col=\"25\" text=\"매체사 대표자 성명\"/><Cell col=\"26\" text=\"매체사 주소\"/><Cell col=\"27\" text=\"매체사주소1\"/><Cell col=\"28\" text=\"매체사주소2\"/><Cell col=\"29\" text=\"세금계산서헤더번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DTIX_TYPE\" combodataset=\"dsDti_type\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplay=\"edit\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DTIY_TYPE\" expandshow=\"hide\" combodataset=\"dsDti_type1\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplay=\"edit\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:TAXX_DMND\" combodataset=\"dsTax_demand\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplay=\"edit\"/><Cell col=\"4\" edittype=\"text\" text=\"bind:MEMO_FILD\"/><Cell col=\"5\" edittype=\"none\" text=\"bind:METX_CUNM\"/><Cell col=\"6\" edittype=\"none\" text=\"bind:MEDX_CODE\"/><Cell col=\"7\" edittype=\"none\" text=\"bind:MEDX_CDNM\"/><Cell col=\"8\" edittype=\"none\" text=\"bind:CUTX_CUNM\"/><Cell col=\"9\" edittype=\"none\" text=\"bind:CUST_CODE\"/><Cell col=\"10\" edittype=\"none\" text=\"bind:CUST_NAME\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:TAXX_AMTX\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:TAXX_VATX\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SUMM_AMTX\"/><Cell col=\"14\" text=\"bind:BUSI_FLAG\"/><Cell col=\"15\" text=\"bind:OWNR_NAME\"/><Cell col=\"16\" text=\"bind:MEDX_FLAG\"/><Cell col=\"17\" text=\"bind:ADDR_DESC\"/><Cell col=\"18\" text=\"bind:DTL1_ADDR\"/><Cell col=\"19\" text=\"bind:DTL2_ADDR\"/><Cell col=\"20\" text=\"bind:YEAR_MNTH\"/><Cell col=\"21\" text=\"bind:TSEQ_FILD\"/><Cell col=\"22\" text=\"bind:TAXY_MONT\"/><Cell col=\"23\" text=\"bind:TAXX_NUMB\"/><Cell col=\"24\" text=\"bind:SEQX_FILD\"/><Cell col=\"25\" text=\"bind:MOWN_NAME\"/><Cell col=\"26\" text=\"bind:MADD_DESC\"/><Cell col=\"27\" text=\"bind:MDT1_ADDR\"/><Cell col=\"28\" text=\"bind:MDT2_ADDR\"/><Cell col=\"29\" text=\"bind:TRTR_NUMB\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\" style=\"align:center;\" text=\"합계\"/><Cell col=\"11\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;TAXX_AMTX&quot;)\"/><Cell col=\"12\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;TAXX_VATX&quot;)\"/><Cell col=\"13\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;SUMM_AMTX&quot;)\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/></Band></Format></Formats>");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Tabpage("tab1", this.tabXM);
            obj.set_text("수수료");
            obj.style.set_background("#ffffffff");
            obj.set_scrollbars("none");
            this.tabXM.addChild(obj.name, obj);
            obj = new Button("btnCRET_TAXX01", "absolute", null, "10", "110", "21", "10", null, this.tabXM.tab1);
            obj.set_taborder("9");
            obj.set_text("세금계산서생성");
            obj.set_cssclass("btn_WF_Module");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Button("btnDELE_TAXX01", "absolute", null, "10", "110", "21", "10", null, this.tabXM.tab1);
            obj.set_taborder("5");
            obj.set_text("세금계산서삭제");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "14", "182", "21", null, null, this.tabXM.tab1);
            obj.set_taborder("2");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Combo("cmbCRET_FLAG", "absolute", null, "10", "80", "21", "145", null, this.tabXM.tab1);
            this.tabXM.tab1.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_value("0");
            obj.set_text("분할발행");
            obj.set_innerdataset("@dsSend");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_index("0");
            obj = new Static("stInformation02", "absolute", null, "10", "7", "21", "126", null, this.tabXM.tab1);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_line");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Calendar("calDEND_DATE", "absolute", null, "10", "100", "21", "228", null, this.tabXM.tab1);
            this.tabXM.tab1.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj = new Static("Static00", "absolute", null, "10", "69", "21", "327", null, this.tabXM.tab1);
            obj.set_taborder("15");
            obj.set_text("청구일자");
            obj.set_cssclass("styFormSearchCap");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "400", "264", "80", "35", null, null, this.tabXM.tab1);
            obj.set_taborder("16");
            obj.set_text("h35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Grid("grdMD_TCALXH", "absolute", "10", "35", null, "229", "10", null, this.tabXM.tab1);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("17");
            obj.set_binddataset("dsMD_TCALXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"91\"/><Column size=\"80\"/><Column size=\"123\"/><Column size=\"150\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"127\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" text=\"청구일자\"/><Cell col=\"2\" text=\"발행일자\"/><Cell col=\"3\" text=\"세금계산서종류\"/><Cell col=\"4\" text=\"세금계산서분류\"/><Cell col=\"5\" text=\"영수구분\"/><Cell col=\"6\" text=\"세금계산서번호\"/><Cell col=\"7\" text=\"내역\"/><Cell col=\"8\" text=\"공급자사업번호\"/><Cell col=\"9\" text=\"공급자코드\"/><Cell col=\"10\" text=\"공급자 사업장 명\"/><Cell col=\"11\" text=\"공급받는자사업번호\"/><Cell col=\"12\" text=\"매체사코드\"/><Cell col=\"13\" text=\"공급받는자 사업장 명\"/><Cell col=\"14\" text=\"공급가액\"/><Cell col=\"15\" text=\"세액\"/><Cell col=\"16\" text=\"합계\"/><Cell col=\"17\" text=\"사업유형\"/><Cell col=\"18\" text=\"광고주대표\"/><Cell col=\"19\" text=\"매체구분\"/><Cell col=\"20\" text=\"주소\"/><Cell col=\"21\" text=\"상세주소1\"/><Cell col=\"22\" text=\"상세주소2\"/><Cell col=\"23\" text=\"거래명세서년월\"/><Cell col=\"24\" text=\"거래명세서번호\"/><Cell col=\"25\" text=\"세금계산서년월\"/><Cell col=\"26\" text=\"세금계산서번호\"/><Cell col=\"27\" text=\"개별청약서번호\"/><Cell col=\"28\" text=\"매체사 대표자 성명\"/><Cell col=\"29\" text=\"매체사 주소\"/><Cell col=\"30\" text=\"매체사주소1\"/><Cell col=\"31\" text=\"매체사주소2\"/><Cell col=\"32\" text=\"매체사코드\"/><Cell col=\"33\" text=\"매체사 사업자번호\"/><Cell col=\"34\" text=\"매체사명\"/><Cell col=\"35\" text=\"승인번호\"/><Cell col=\"36\" text=\"전표번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"none\" text=\"bind:DEND_DATE\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:PRNT_DATE\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"none\" text=\"bind:DTIX_TYPE\" combodataset=\"dsDti_type\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplay=\"edit\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:DTIY_TYPE\" combodataset=\"dsDti_type1\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplay=\"edit\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"none\" text=\"bind:TAXX_DMND\" combodataset=\"dsTax_demand\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplay=\"edit\"/><Cell col=\"6\" style=\"background:EXPR(ORI_ISSUE_ID != '' ? '#e8fedc':'white');background2:EXPR(ORI_ISSUE_ID != '' ? '#e8fedc':'white');cursor:hand;\" text=\"bind:TAXX_SANB\"/><Cell col=\"7\" edittype=\"none\" text=\"bind:MEMO_FILD\"/><Cell col=\"8\" text=\"bind:ENTX_CUNM\"/><Cell col=\"9\" text=\"bind:ENTP_CODE\"/><Cell col=\"10\" text=\"bind:ENTP_NAME\"/><Cell col=\"11\" text=\"bind:METX_CUNM\"/><Cell col=\"12\" text=\"bind:MEDX_CODE\"/><Cell col=\"13\" text=\"bind:MEDX_CDNM\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAXX_AMTX\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAXX_VATX\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUMM_AMTX\"/><Cell col=\"17\" text=\"bind:BUSI_FLAG\"/><Cell col=\"18\" text=\"bind:OWNR_NAME\"/><Cell col=\"19\" text=\"bind:MEDX_FLAG\"/><Cell col=\"20\" text=\"bind:ADDR_DESC\"/><Cell col=\"21\" text=\"bind:DTL1_ADDR\"/><Cell col=\"22\" text=\"bind:DTL2_ADDR\"/><Cell col=\"23\" text=\"bind:YEAR_MNTH\"/><Cell col=\"24\" text=\"bind:TSEQ_FILD\"/><Cell col=\"25\" text=\"bind:TAXY_MONT\"/><Cell col=\"26\" text=\"bind:TAXX_NUMB\"/><Cell col=\"27\" text=\"bind:SEQX_FILD\"/><Cell col=\"28\" text=\"bind:MOWN_NAME\"/><Cell col=\"29\" text=\"bind:MADD_DESC\"/><Cell col=\"30\" text=\"bind:MDT1_ADDR\"/><Cell col=\"31\" text=\"bind:MDT2_ADDR\"/><Cell col=\"32\" text=\"bind:MEDX_CODE\"/><Cell col=\"33\" text=\"bind:METX_CUNM\"/><Cell col=\"34\" text=\"bind:MEDX_CDNM\"/><Cell col=\"35\" edittype=\"readonly\" text=\"bind:APPROVE_ID\"/><Cell col=\"36\" text=\"bind:SACH_NUMB\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\" style=\"align:center;\" text=\"합계\"/><Cell col=\"14\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;TAXX_AMTX&quot;)\"/><Cell col=\"15\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;TAXX_VATX&quot;)\"/><Cell col=\"16\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;SUMM_AMTX&quot;)\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/><Cell col=\"32\"/><Cell col=\"33\"/><Cell col=\"34\"/><Cell col=\"35\"/><Cell col=\"36\"/></Band></Format></Formats>");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Grid("grdMD_TCALXD", "absolute", "10", "299", null, null, "10", "10", this.tabXM.tab1);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("18");
            obj.set_binddataset("dsMD_TCALXD");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"청구일자\"/><Cell col=\"1\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"적요\"/><Cell col=\"2\" text=\"브랜드명\"/><Cell col=\"3\" text=\"AMNT_FILD\"/><Cell col=\"4\" text=\"AVAT_FILD\"/><Cell col=\"5\" text=\"ASUM_FILD\"/><Cell col=\"6\" text=\"공급가액\"/><Cell col=\"7\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"부가세액\"/><Cell col=\"8\" text=\"합계금액\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" text=\"bind:DEND_DATE\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:MEMO_FILD\"/><Cell col=\"2\" text=\"bind:BRND_NAME\"/><Cell col=\"3\" text=\"bind:AMNT_FILD\"/><Cell col=\"4\" text=\"bind:AVAT_FILD\"/><Cell col=\"5\" text=\"bind:ASUM_FILD\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:COMI_FILD\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"text\" style=\"align:right;\" text=\"bind:CVAT_FILD\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CSUM_FILD\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" style=\"align:center;\" text=\"합계\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;COMI_FILD&quot;)\"/><Cell col=\"7\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;CVAT_FILD&quot;)\"/><Cell col=\"8\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;CSUM_FILD&quot;)\"/></Band></Format></Formats>");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("stInformation00", "absolute", "10", "278", "182", "21", null, null, this.tabXM.tab1);
            obj.set_taborder("19");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Grid("grdMD_TCALXM", "absolute", "10", "35", null, null, "10", "10", this.tabXM.tab1);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("10");
            obj.set_binddataset("dsMD_TCALXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"127\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"세금계산서종류\"/><Cell col=\"2\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"세금계산서분류\"/><Cell col=\"3\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"영수구분\"/><Cell col=\"4\" edittype=\"text\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"적요\"/><Cell col=\"5\" text=\"공급자사업번호\"/><Cell col=\"6\" text=\"공급자코드\"/><Cell col=\"7\" text=\"공급자 사업장 명\"/><Cell col=\"8\" text=\"공급받는자사업번호\"/><Cell col=\"9\" text=\"매체사코드\"/><Cell col=\"10\" text=\"공급받는자 사업장 명\"/><Cell col=\"11\" text=\"공급가액\"/><Cell col=\"12\" text=\"세액\"/><Cell col=\"13\" text=\"합계\"/><Cell col=\"14\" text=\"사업유형\"/><Cell col=\"15\" text=\"광고주대표\"/><Cell col=\"16\" text=\"매체구분\"/><Cell col=\"17\" text=\"주소\"/><Cell col=\"18\" text=\"상세주소1\"/><Cell col=\"19\" text=\"상세주소2\"/><Cell col=\"20\" text=\"거래명세서년월\"/><Cell col=\"21\" text=\"거래명세서번호\"/><Cell col=\"22\" text=\"세금계산서년월\"/><Cell col=\"23\" text=\"세금계산서번호\"/><Cell col=\"24\" text=\"개별청약서번호\"/><Cell col=\"25\" text=\"매체사 대표자 성명\"/><Cell col=\"26\" text=\"매체사 주소\"/><Cell col=\"27\" text=\"매체사주소1\"/><Cell col=\"28\" text=\"매체사주소2\"/><Cell col=\"29\" text=\"매체사코드\"/><Cell col=\"30\" text=\"매체사 사업자번호\"/><Cell col=\"31\" text=\"매체사명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DTIX_TYPE\" combodataset=\"dsDti_type\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplay=\"edit\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DTIY_TYPE\" combodataset=\"dsDti_type1\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplay=\"edit\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:TAXX_DMND\" combodataset=\"dsTax_demand\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplay=\"edit\"/><Cell col=\"4\" edittype=\"text\" text=\"bind:MEMO_FILD\"/><Cell col=\"5\" text=\"bind:ENTX_CUNM\"/><Cell col=\"6\" text=\"bind:ENTP_CODE\"/><Cell col=\"7\" text=\"bind:ENTP_NAME\"/><Cell col=\"8\" text=\"bind:METX_CUNM\"/><Cell col=\"9\" text=\"bind:MEDX_CODE\"/><Cell col=\"10\" text=\"bind:MEDX_CDNM\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAXX_AMTX\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAXX_VATX\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUMM_AMTX\"/><Cell col=\"14\" text=\"bind:BUSI_FLAG\"/><Cell col=\"15\" text=\"bind:OWNR_NAME\"/><Cell col=\"16\" text=\"bind:MEDX_FLAG\"/><Cell col=\"17\" text=\"bind:ADDR_DESC\"/><Cell col=\"18\" text=\"bind:DTL1_ADDR\"/><Cell col=\"19\" text=\"bind:DTL2_ADDR\"/><Cell col=\"20\" text=\"bind:YEAR_MNTH\"/><Cell col=\"21\" text=\"bind:TSEQ_FILD\"/><Cell col=\"22\" text=\"bind:TAXY_MONT\"/><Cell col=\"23\" text=\"bind:TAXX_NUMB\"/><Cell col=\"24\" text=\"bind:SEQX_FILD\"/><Cell col=\"25\" text=\"bind:MOWN_NAME\"/><Cell col=\"26\" text=\"bind:MADD_DESC\"/><Cell col=\"27\" text=\"bind:MDT1_ADDR\"/><Cell col=\"28\" text=\"bind:MDT2_ADDR\"/><Cell col=\"29\" text=\"bind:MEDX_CODE\"/><Cell col=\"30\" text=\"bind:METX_CUNM\"/><Cell col=\"31\" text=\"bind:MEDX_CDNM\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\" style=\"align:center;\" text=\"합계\"/><Cell col=\"11\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;TAXX_AMTX&quot;)\"/><Cell col=\"12\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;TAXX_VATX&quot;)\"/><Cell col=\"13\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;SUMM_AMTX&quot;)\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/></Band></Format></Formats>");
            this.tabXM.tab1.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "477", "103", "80", "37", null, null, this);
            obj.set_taborder("147");
            obj.set_text("h37");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "477", "141", "80", "35", null, null, this);
            obj.set_taborder("148");
            obj.set_text("h35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new ListBox("lstCUST_NAME", "absolute", "341", "93", "140", "78", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("149");
            obj.set_innerdataset("dsAUTO_NAME");
            obj.set_codecolumn("CUST_CODE");
            obj.set_datacolumn("CUST_NAME");
            obj.set_visible("false");

            obj = new Static("Static08", "absolute", "180", "71", "52", "21", null, null, this);
            obj.set_taborder("150");
            obj.set_text("매체사");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMEDX_CODE", "absolute", "236", "71", "80", "21", null, null, this);
            obj.set_taborder("151");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRMEDX_NAME", "absolute", "318", "71", "21", "21", null, null, this);
            obj.set_taborder("152");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMEDX_NAME", "absolute", "341", "71", "140", "21", null, null, this);
            obj.set_taborder("153");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("154");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabXM.tab0,
            	//-- Layout function
            	function(p) {
            		p.set_text("위수탁");
            		p.style.set_background("#ffffffff");
            		p.set_scrollbars("none");

            	}
            );
            this.tabXM.tab0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tabXM.tab1,
            	//-- Layout function
            	function(p) {
            		p.set_text("수수료");
            		p.style.set_background("#ffffffff");
            		p.set_scrollbars("none");

            	}
            );
            this.tabXM.tab1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("세금계산서생성");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("MACA0020.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("MACA0020.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("MACA0020.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	MACA0020 매체 세금계산서 생성
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.24		최제현		Initial Created.
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
        //include "script::lib_script_ubireport.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST 	= "TTFFFTTT"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME 	= "MACA0020"; //해당 Form에서 사용 할 Package 명
        this.sFILE_NAME   	= "";			//파일명
        this.sFILE_PATH   	= "";			//파일경로

        if(this.getOwnerFrame()["sUSERAUTH"] == undefined) {

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
         **************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
          	this.fnc_GetComboDs(this.dsCombo);
        	
        	this.Static08.set_visible(false);
        	this.edtSHRMEDX_CODE.set_visible(false);
        	this.imgHelpSHRMEDX_NAME.set_visible(false);
        	this.edtSHRMEDX_NAME.set_visible(false);
        	
        	this.tabXM.tab0.calDEND_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,8 ));
        	this.tabXM.tab1.calDEND_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,8 ));
        	this.calSHRYEAR_MNTH.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ));
        	this.rdoSUCC_FLAG.set_index(1);
        	this.fn_GetCUST_NAME();
         	this.fn_Search();

        } 
        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        }

        /*------------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {
        	this.tabXM.tab0.calDEND_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,8 ));
        	this.tabXM.tab1.calDEND_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,8 ));
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsMD_TCALXM");
        	
        	//탭인덱스가 0이면 위수탁 세금계산서. 1이면 수수료세금계산서
        	if(this.tabXM.tabindex==0){
        		//완료
        		if(this.rdoSUCC_FLAG.index == 0){
        			var sMethodName = "SEARCH01";
        			var sInDataSet  = "";
        			var sOutDataSet = "dsMD_TCALXM=dsMD_TCALXM";
        			var sArgument = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		
        		//미완료
        		}else if(this.rdoSUCC_FLAG.index == 1){
        			var sMethodName = "SEARCH00";
        			var sInDataSet  = "";
        			var sOutDataSet = "dsMD_TCALXM=dsMD_TCALXM";
        			var sArgument = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		}	
        	}else{
        		//완료
        		if(this.rdoSUCC_FLAG.index == 0){
        			var sMethodName = "SEARCH03";
        			var sInDataSet  = "";
        			var sOutDataSet = "dsMD_TCALXM=dsMD_TCALXM";
        			var sArgument = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		
        		//미완료
        		}else if(this.rdoSUCC_FLAG.index == 1){
        			var sMethodName = "SEARCH02";
        			var sInDataSet  = "";
        			var sOutDataSet = "dsMD_TCALXM=dsMD_TCALXM";
        			var sArgument = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		}	
        	}
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	//기능없음
        	
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	//기능없음
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        //세금계산서 디테일 update처리
        this.fn_Save = function (obj) {
        	if (!this.fn_SaveItemCheckDtl()) return;
        	
        	var sMethodName = "UPDATE00";
        	var sInDataSet = "dsMD_TCALXD=dsMD_TCALXD:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	if(this.tabXM.tabindex == 0){
        		if(this.rdoSUCC_FLAG.index == 0){
        			if (this.dsMD_TCALXM.getRowCount() < 0) return this.fnc_Message("TMM011");
        			if (this.dsMD_TCALXM.rowposition < 0) return;

        			this.fnc_DatasetClear("dsMD_TCALXH_RPT");
        			this.fnc_DatasetClear("dsMD_TCALXD_RPT");

        			var reportfile 	= "/mac/MACA0020R01.jrf";
        			var dataref 	= new Array();
        			var params 		= "";
        			
        			dataref[0] 				= new Object();
        			dataref[0].type 		= "TRAN";
        			dataref[0].svcUrl 		= "/core/erp/mac/MACA0020_PRINT00.do";
        			dataref[0].inDataset 	= "dsMD_TCALXD=dsMD_TCALXD:U"
        			dataref[0].outDataset 	= "dsMD_TCALXH_RPT=dsMD_TCALXH_RPT dsMD_TCALXD_RPT=dsMD_TCALXD_RPT";
        			dataref[0].arg 			= this.fn_CreateArgument("PRINT00");
        			
        			this.fn_UbiReport(reportfile, params, dataref, "");
        		}
        	}else if(this.tabXM.tabindex == 1){
        		if(this.rdoSUCC_FLAG.index == 0){
        		
        			if (this.dsMD_TCALXM.getRowCount() < 0) return this.fnc_Message("TMM011");
        			if (this.dsMD_TCALXM.rowposition < 0) return;

        			this.fnc_DatasetClear("dsMD_TCALXH_RPT");
        			this.fnc_DatasetClear("dsMD_TCALXD_RPT");

        			var reportfile 	= "/mac/MACA0020R02.jrf";
        			var dataref 	= new Array();
        			var params 		= "";
        			
        			dataref[0] 				= new Object();
        			dataref[0].type 		= "TRAN";
        			dataref[0].svcUrl 		= "/core/erp/mac/MACA0020_PRINT02.do";
        			dataref[0].inDataset 	= ""
        			dataref[0].outDataset 	= "dsMD_TCALXH_RPT=dsMD_TCALXH_RPT dsMD_TCALXD_RPT=dsMD_TCALXD_RPT";
        			dataref[0].arg 			= this.fn_CreateArgument("PRINT02");

        			this.fn_UbiReport(reportfile, params, dataref, "");
        		
        		}
        	}
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function (obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e); //2016 06 22 변경
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
        this.fn_SearchItemCheck = function () {
        	// 조회 시 검색 조건이 반드시 있어야 하는 경우 해당 조건을 나열하여 체크 한다.

        	if ((this.fnc_DatasetChangeCheck("dsMD_TCALXM")) && (this.fnc_Message("TMM023") == false) ) {
        		return false;
        	}
        	//년월
        	if(this.fnc_IsDate(this.calSHRYEAR_MNTH.fn_GetMonth()) == false){
        		this.fnc_Message("TMM081");
        		return false;
        	}
        	
        	if(this.rdoSUCC_FLAG.index==-1){
        		
        	}
        	
        	return true;
        	// 모든 조회 조건이 입력 되면 True를 반환 한다.
        }

        /*--------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	// 공통 Head & 상세 변경 체크
        	if (this.fnc_DatasetChangeCheck("dsMD_TCALXM") == false && this.fnc_DatasetChangeCheck("dsMD_TCALXM") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	var iCNT = 0;
        	for(var i = 0; i < this.dsMD_TCALXM.rowcount; i++){
        		if(this.dsMD_TCALXM.getColumn(i, "CHEK_FILD") == 1){
        			iCNT += 1;
        		}
        	}
        		
        	if(iCNT==0){
        		this.fnc_Message("PCM001");
        		return  false;
        	}	
        	
        	//완료
        	if(this.rdoSUCC_FLAG.index == 0){
        		this.fnc_Message("PAC001");
        		return false;
        	//미완료
        	}else if(this.rdoSUCC_FLAG.index == 1){
        		// 공통 Head 정보 필수 입력 항목 체크
        		if(this.fn_nullChk(this.cmbSHRMEDX_FLAG.value) == ""){
        			this.fnc_Message("TMM300","매체구분 전체상태에서는 세금계산서를 생성할 수 없습니다.");
        			return false;
        		}
        		
        		return false;
        		
        		for (var i = 0; i < this.dsMD_TCALXM.getRowCount(); i++) {
        			var cnt = i + 1;
        		
        			if (this.fnc_ToUpper(this.dsMD_TCALXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        			
        // 			if (this.fnc_Length(this.fnc_Trim(this.dsMD_TCALXM.getColumn(i, "DEND_DATE"))) < 1) {
        // 				return this.fnc_CheckPostAction("TMM072", "발행일", this.dsMD_TCALXM, i, '', '');
        // 			}
        		}
        	}

        	return true;
        }

        this.fn_SaveItemCheckDtl = function () {
        	// 공통 Head & 상세 변경 체크
        	if (this.fnc_DatasetChangeCheck("dsMD_TCALXD") == false) {
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
        	if (sKind == "SEARCH00"|| sKind == "SEARCH01") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " YEAR_MNTH=" + this.fnc_Quote(this.calSHRYEAR_MNTH.fn_GetMonth()); 	//년월
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.edtSHRCUST_CODE.value);     //광고주코드
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value);     //광고주명
        		sReturnString += " MEDX_FLAG=" + this.fnc_Quote(this.cmbSHRMEDX_FLAG.value);    //매체구분
        		sReturnString += " BUSI_FLAG=B"; 	//위탁,수수료구분
        	} else if (sKind == "SEARCH02" || sKind == "SEARCH03") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " YEAR_MNTH=" + this.fnc_Quote(this.calSHRYEAR_MNTH.fn_GetMonth()); 	//년월
        		sReturnString += " MEDX_CODE=" + this.fnc_Quote(this.edtSHRMEDX_CODE.value);     //매체사코드
        		sReturnString += " MEDX_CDNM=" + this.fnc_Quote(this.edtSHRMEDX_NAME.value);     //매체사코드
        		sReturnString += " MEDX_FLAG=" + this.fnc_Quote(this.cmbSHRMEDX_FLAG.value);    //매체구분
        		sReturnString += " BUSI_FLAG=A"; 	//위탁,수수료 구분
        	} else if (sKind == "SEARCH04") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        	} else if (sKind == "SEARCH05" || sKind == "SEARCH06") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " MEDX_FLAG=" + this.fnc_Quote(this.cmbSHRMEDX_FLAG.value);    //매체구분
        		sReturnString += " DEND_DATE=" + this.fnc_Quote(this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition,"DEND_DATE")); 	
        		sReturnString += " YEAR_MNTH=" + this.fnc_Quote(this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition,"YEAR_MNTH")); 	
        		sReturnString += " TAXX_NUMB=" + this.fnc_Quote(this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition,"TAXX_NUMB"));
        		
        		
        	} else if (sKind == "SAVE00" || sKind == "SAVE01" || sKind == "SAVE04" ) {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " DEND_DATE=" + this.fnc_Quote(this.tabXM.tab0.calDEND_DATE.value);
        		sReturnString += " MEDX_FLAG=" + this.fnc_Quote(this.cmbSHRMEDX_FLAG.value);
        	} else if (sKind == "SAVE02" || sKind == "SAVE03" || sKind == "SAVE05" ) {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " DEND_DATE=" + this.fnc_Quote(this.tabXM.tab1.calDEND_DATE.value);
        		sReturnString += " MEDX_FLAG=" + this.fnc_Quote(this.cmbSHRMEDX_FLAG.value);
        		
        	} else if (sKind == "UPDATE00") {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		
        	} else if (sKind == "DELETE00" || sKind == "DELETE01") {
        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		
        	} else if (sKind == "PRINT00") {
        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " TAXY_MONT=" + 
        		this.fnc_Quote(this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition, "YEAR_MNTH")); //년월
        		sReturnString += " TAXX_NUMB=" + 
        		this.fnc_Quote(this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition, "TAXX_NUMB")); //헤더의 거래명세서번호
        		sReturnString += " MEDX_FLAG=" + 
        		this.fnc_Quote(this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition, "MEDX_FLAG")); //년월
        	} else if (sKind == "PRINT02") {
        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " TAXY_MONT=" + 
        		this.fnc_Quote(this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition, "YEAR_MNTH")); //년월
        		sReturnString += " TAXX_NUMB=" + 
        		this.fnc_Quote(this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition, "TAXX_NUMB")); //헤더의 거래명세서번호
        		sReturnString += " MEDX_FLAG=" + 
        		this.fnc_Quote(this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition, "MEDX_FLAG")); //년월
        	}

        	return sReturnString;

        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG) {
        	if (ErrorCode < 0) {
        		if (application.GBL_SESSONCHK == "E0001") {
        			this.alert("session error");
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
        		this.fnc_Information(this.tabXM.tab0.stInformation, this.dsMD_TCALXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.tabXM.tab0.stInformation, this.dsMD_TCALXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "SEARCH02" || sMethodName == "SEARCH03") {
        		this.fnc_Information(this.tabXM.tab1.stInformation, this.dsMD_TCALXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "SEARCH04") {
        		//자동완성 세팅
        		this.fn_AutoSetting();
        	} else if (sMethodName == "SEARCH05") {
        		this.fnc_Information(this.tabXM.tab0.stInformation00, this.dsMD_TCALXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	}  else if (sMethodName == "SEARCH06") {
        		this.fnc_Information(this.tabXM.tab1.stInformation00, this.dsMD_TCALXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "SAVE00" ||  sMethodName == "SAVE01" || sMethodName == "SAVE04") {
        		this.fnc_Information(this.tabXM.tab0.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	} else if (sMethodName == "SAVE02" ||  sMethodName == "SAVE03" || sMethodName == "SAVE05") {
        		this.fnc_Information(this.tabXM.tab1.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	} else if (sMethodName == "UPDATE00") {
        		this.fnc_Information(this.tabXM.tab0.stInformation00, 0, "SAVE");
        		this.fnc_Information(this.tabXM.tab1.stInformation00, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	} else if (sMethodName == "DELETE00" || sMethodName == "DELETE01") {
        		this.fnc_Message("TMM041");
        		this.fn_Search();

        	} else if (sMethodName == "GetCommCode") {

        				//콤보 일경우 
        		
        		var arrParam = new Array();
        		arrParam[0] = "COMBO,cmbSHRMEDX_FLAG,dsMEDX_FLAG,0";
        		
        		this.fnc_CommonCodeInnerBind(arrParam);
        	}	
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
         

        /*---------------------------+
         |  광고주 조회 팝업 생성 |
         +---------------------------*/
        this.fn_HelpDialogeSHRCUST_CODE = function(obj,e)
        {
        	var arrParam = new Array();

        	// 조회조건 - 광고주이름
        	if ((obj.name == 'imgHelpSHRCUST_NAME') || (obj.name == 'edtSHRCUST_NAME')) {

        		arrParam[0] = 'MCM0005';                                 //Popup ID
        		arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtSHRCUST_NAME';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtSHRCUST_CODE,edtSHRCUST_NAME';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1';                                     //Mapping Column Index
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);                                //Mapping Column Index
        	}
        }

        /*---------------------------+
         |  매체사 조회 팝업 생성 |
         +---------------------------*/
        this.fn_HelpDialogeSHRMEDX_CODE = function(obj,e)
        {
        	var arrParam = new Array();

        	// 조회조건 - 매체사명
        	if ((obj.name == 'imgHelpSHRMEDX_NAME') || (obj.name == 'edtSHRMEDX_NAME')) {

        		arrParam[0] = 'MCM0009';                                 //Popup ID
        		arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRMEDX_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtSHRMEDX_NAME';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtSHRMEDX_CODE,edtSHRMEDX_NAME';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1';                                     //Mapping Column Index
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);                                //Mapping Column Index
        	}
        }

        /*-----------------------------+
         |  계산서 생성 버튼 클릭시 |
         +-----------------------------*/
        this.btnCRET_TAXX00_onclick = function(obj,e)
        {
        	if (!this.fn_SaveItemCheck()) return;
        	
        	//위수탁 분할 발행
        	if(this.tabXM.tab0.cmbCRET_FLAG.value == 0 ){		
        		if(this.fnc_Message("PAC002")){
        			var sMethodName = "SAVE00";
        			var sInDataSet  = "dsMD_TCALXM=dsMD_TCALXM:U";
        			var sOutDataSet = "";
        			var sArgument   = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        		}
        	}else if(this.tabXM.tab0.cmbCRET_FLAG.value == 1){
        	//위수탁 선택발행
        		if(this.fnc_Message("PAC003")){
        			var sMethodName = "SAVE01";
        			var sInDataSet  = "dsMD_TCALXM=dsMD_TCALXM:U";
        			var sOutDataSet = "";
        			var sArgument   = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        		}
        	}else if(this.tabXM.tab0.cmbCRET_FLAG.value == 2){
        	//위수탁 합산발행
        		if(this.fnc_Message("PAC003")){
        			var sMethodName = "SAVE04";
        			var sInDataSet  = "dsMD_TCALXM=dsMD_TCALXM:U";
        			var sOutDataSet = "";
        			var sArgument   = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        		}
        	}
        }

        this.btnCRET_TAXX01_onclick = function(obj,e)
        {
        	if (!this.fn_SaveItemCheck()) return;
        	
        	//수수료 분할 발행
        	if(this.tabXM.tab1.cmbCRET_FLAG.value == 0 ){		
        		if(this.fnc_Message("PAC002")){
        			var sMethodName = "SAVE02";
        			var sInDataSet  = "dsMD_TCALXM=dsMD_TCALXM:U";
        			var sOutDataSet = "";
        			var sArgument   = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        		}
        	}else if(this.tabXM.tab1.cmbCRET_FLAG.value == 1){
        	//수수료 선택발행
        		if(this.fnc_Message("PAC003")){
        			var sMethodName = "SAVE03";
        			var sInDataSet  = "dsMD_TCALXM=dsMD_TCALXM:U";
        			var sOutDataSet = "";
        			var sArgument   = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        		}
        	}else if(this.tabXM.tab1.cmbCRET_FLAG.value == 2){
        		if(this.fnc_Message("PAC003")){
        			var sMethodName = "SAVE05";
        			var sInDataSet  = "dsMD_TCALXM=dsMD_TCALXM:U";
        			var sOutDataSet = "";
        			var sArgument   = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        		}
        	}
        }

        /*-----------------------------+
         |  계산서 삭제 버튼 클릭시 |
         +-----------------------------*/
        //위수탁 세금계산서 삭제
        this.btn_delete00_onclick = function(obj,e)
        {
        	if (!this.fn_DeleteItemCheck()) return;
        	
        	//완료 상태의 경우 삭제
        	if(this.rdoSUCC_FLAG.index == 0)
        	{
        		if(this.fnc_Message("PAC005")){
        			var sMethodName = "DELETE00";
        			var sInDataSet  = "dsMD_TCALXM=dsMD_TCALXM:U";
        			var sOutDataSet = "";
        			var sArgument   = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        		}
        	}
        }
        //수수료 세금계산서 삭제
        this.btn_delete01_onclick = function(obj,e)
        {
        	if (!this.fn_DeleteItemCheck()) return;
        	
        	//완료 상태의 경우 삭제
        	if(this.rdoSUCC_FLAG.index == 0)
        	{
        		if(this.fnc_Message("PAC005")){
        			var sMethodName = "DELETE01";
        			var sInDataSet  = "dsMD_TCALXM=dsMD_TCALXM:U";
        			var sOutDataSet = "";
        			var sArgument   = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        		}
        	}
        }

        this.fn_DeleteItemCheck = function()
        {
        	//변경된 데이터 체크
        	if (this.fnc_DatasetChangeCheck("dsMD_TCALXM") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	var iCNT = 0;
        	for(var i = 0; i < this.dsMD_TCALXM.rowcount; i++){
        		if(this.dsMD_TCALXM.getColumn(i, "CHEK_FILD") == 1){
        			iCNT += 1;
        			//발송되었으면 삭제 X
        			if(this.dsMD_TCALXM.getColumn(i, "SEND_FLAG") == 1){
        				this.fnc_Message("MAC011");
        				return false;
        			}
        		}
        	}
        		
        	if(iCNT==0){
        		this.fnc_Message("PCM001");
        		return  false;
        	}	
        	//완료
        	if(this.rdoSUCC_FLAG.index == 0){
        		
        	//미완료
        	}else if(this.rdoSUCC_FLAG.index == 1){
        		this.fnc_Message("PAC001");
        	}
        	return true;
        }

        
        /*--------------------------------+
         |  발행상태 라디오버튼 변경시 |
         +--------------------------------*/
        this.rdoSUCC_FLAG_onitemchanged = function(obj,e)
        {	
        	this.fnc_DatasetClear("dsMD_TCALXM");
        	
        	if(this.rdoSUCC_FLAG.index==0){
        		this.tabXM.tab0.btnCRET_TAXX00.set_visible(false);
        		this.tabXM.tab0.cmbCRET_FLAG.set_visible(false);
        		this.tabXM.tab0.calDEND_DATE.set_visible(false);
        		this.tabXM.tab0.Static00.set_visible(false);
        		this.tabXM.tab0.btnDELE_TAXX00.set_visible(true);
        		this.tabXM.tab1.btnCRET_TAXX01.set_visible(false);
        		this.tabXM.tab1.cmbCRET_FLAG.set_visible(false);
        		this.tabXM.tab1.btnDELE_TAXX01.set_visible(true);
        		this.tabXM.tab1.calDEND_DATE.set_visible(false);
        		this.tabXM.tab1.Static00.set_visible(false);
        		this.tabXM.tab0.grdMD_TCALXM.set_visible(false);
        		this.tabXM.tab0.grdMD_TCALXH.set_visible(true);
        		this.tabXM.tab0.grdMD_TCALXD.set_visible(true);
        		this.tabXM.tab1.grdMD_TCALXM.set_visible(false);
        		this.tabXM.tab1.grdMD_TCALXH.set_visible(true);
        		this.tabXM.tab1.grdMD_TCALXD.set_visible(true);
        		this.tabXM.tab0.stInformation00.set_visible(true);
        		this.tabXM.tab1.stInformation00.set_visible(true);
        		this.tabXM.tab0.grdMD_TCALXM.setCellProperty('Body',
        		this.tabXM.tab0.grdMD_TCALXM.getBindCellIndex( "body", "TAXX_DMND" ),'edittype','none');
        		this.tabXM.tab0.grdMD_TCALXM.setCellProperty('Body',
        		this.tabXM.tab0.grdMD_TCALXM.getBindCellIndex( "body", "DTIX_TYPE" ),'edittype','none');
        		this.tabXM.tab1.grdMD_TCALXM.setCellProperty('Body',
        		this.tabXM.tab1.grdMD_TCALXM.getBindCellIndex( "body", "TAXX_DMND" ),'edittype','none');
        		this.tabXM.tab1.grdMD_TCALXM.setCellProperty('Body',
        		this.tabXM.tab1.grdMD_TCALXM.getBindCellIndex( "body", "DTIX_TYPE" ),'edittype','none');
        		
        	}else{
        		this.tabXM.tab0.btnCRET_TAXX00.set_visible(true);
        		this.tabXM.tab0.cmbCRET_FLAG.set_visible(true);
        		this.tabXM.tab0.btnDELE_TAXX00.set_visible(false);
        		this.tabXM.tab0.calDEND_DATE.set_visible(true);
        		this.tabXM.tab0.Static00.set_visible(true);
        		this.tabXM.tab1.btnCRET_TAXX01.set_visible(true);
        		this.tabXM.tab1.cmbCRET_FLAG.set_visible(true);
        		this.tabXM.tab1.btnDELE_TAXX01.set_visible(false);
        		this.tabXM.tab1.calDEND_DATE.set_visible(true);
        		this.tabXM.tab1.Static00.set_visible(true);
        		this.tabXM.tab0.grdMD_TCALXM.set_visible(true);
        		this.tabXM.tab0.grdMD_TCALXH.set_visible(false);
        		this.tabXM.tab0.grdMD_TCALXD.set_visible(false);
        		this.tabXM.tab1.grdMD_TCALXM.set_visible(true);
        		this.tabXM.tab1.grdMD_TCALXH.set_visible(false);
        		this.tabXM.tab1.grdMD_TCALXD.set_visible(false);
        		this.tabXM.tab0.stInformation00.set_visible(false);
        		this.tabXM.tab1.stInformation00.set_visible(false);
        		this.tabXM.tab0.grdMD_TCALXM.setCellProperty('Body',
        		this.tabXM.tab0.grdMD_TCALXM.getBindCellIndex( "body", "TAXX_DMND" ),'edittype','combo');
        		this.tabXM.tab0.grdMD_TCALXM.setCellProperty('Body',
        		this.tabXM.tab0.grdMD_TCALXM.getBindCellIndex( "body", "DTIX_TYPE" ),'edittype','combo');
        		this.tabXM.tab1.grdMD_TCALXM.setCellProperty('Body',
        		this.tabXM.tab1.grdMD_TCALXM.getBindCellIndex( "body", "TAXX_DMND" ),'edittype','combo');
        		this.tabXM.tab1.grdMD_TCALXM.setCellProperty('Body',
        		this.tabXM.tab1.grdMD_TCALXM.getBindCellIndex( "body", "DTIX_TYPE" ),'edittype','combo');
        	}	
        	this.fn_Search();
        }

        /*------------------+
         |  전체선택/해제 |
         +------------------*/
         
        var isAllChecked = 0;

        this.tabXM_tab1_grdMD_TCALXM_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.tabXM.tab1.grdMD_TCALXM.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsMD_TCALXM.getRowCount(); i++) {
        			this.dsMD_TCALXM.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.tabXM.tab1.grdMD_TCALXM.setCellProperty("Head", 0, "expr", isAllChecked);
        	}
        }

        var isAllChecked1 = 0;

        this.tabXM_tab1_grdMD_TCALXH_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.tabXM.tab1.grdMD_TCALXH.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked1 = (isAllChecked1 ? 0 : 1);
        		
        		for (var i = 0; i < this.dsMD_TCALXM.getRowCount(); i++) {
        			this.dsMD_TCALXM.setColumn(i, v_Colid, isAllChecked1);
        		}
        		this.tabXM.tab1.grdMD_TCALXH.setCellProperty("Head", 0, "expr", isAllChecked1);
        	}
        }

        var isAllChecked2 = 0;
        this.tabXM_tab0_grdMD_TCALXM_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.tabXM.tab0.grdMD_TCALXM.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked2 = (isAllChecked2 ? 0 : 1);
        		
        		for (var i = 0; i < this.dsMD_TCALXM.getRowCount(); i++) {
        			this.dsMD_TCALXM.setColumn(i, v_Colid, isAllChecked2);
        		}
        		this.tabXM.tab0.grdMD_TCALXM.setCellProperty("Head", 0, "expr", isAllChecked2);
        	}
        }

        var isAllChecked3 = 0;
        this.tabXM_tab0_grdMD_TCALXH_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.tabXM.tab0.grdMD_TCALXH.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked3 = (isAllChecked3 ? 0 : 1);
        		
        		for (var i = 0; i < this.dsMD_TCALXM.getRowCount(); i++) {
        			this.dsMD_TCALXM.setColumn(i, v_Colid, isAllChecked3);
        		}
        		this.tabXM.tab0.grdMD_TCALXH.setCellProperty("Head", 0, "expr", isAllChecked3);
        	}
        }

        this.tabXM_onchanged = function(obj,e)
        {	
        	this.fnc_GridSetting(obj.components[e.postindex]);
        	if(this.tabXM.tabindex==0){
        		this.Static52.set_visible(true);
        		this.edtSHRCUST_CODE.set_visible(true);
        		this.imgHelpSHRCUST_NAME.set_visible(true);
        		this.edtSHRCUST_NAME.set_visible(true);
        		this.Static08.set_visible(false);
        		this.edtSHRMEDX_CODE.set_visible(false);
        		this.imgHelpSHRMEDX_NAME.set_visible(false);
        		this.edtSHRMEDX_NAME.set_visible(false);
        	}else if(this.tabXM.tabindex==1){
        		this.Static08.set_visible(true);
        		this.edtSHRMEDX_CODE.set_visible(true);
        		this.imgHelpSHRMEDX_NAME.set_visible(true);
        		this.edtSHRMEDX_NAME.set_visible(true);
        		this.Static52.set_visible(false);
        		this.edtSHRCUST_CODE.set_visible(false);
        		this.imgHelpSHRCUST_NAME.set_visible(false);
        		this.edtSHRCUST_NAME.set_visible(false);
        	}
        	
        	this.fn_Search();
        }

        this.cmbSHRMEDX_FLAG_canitemchanged = function(obj,e)
        {
        	this.fn_Search();
        }

        //------------------------------자동완성시작-----------------------------------

        //모든 거래처명 가져오기
        this.fn_GetCUST_NAME = function (obj) {

        	this.fnc_DatasetClear("dsAUTO_NAME");

        	var sMethodName = "SEARCH04";
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
        	this.edtSHRCUST_CODE.set_value(e.itemvalue);
        	this.lstCUST_NAME.set_visible(false);
        }

        
        this.lstCUST_NAME_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.edtSHRCUST_NAME.set_value(this.lstCUST_NAME.text);
        		this.edtSHRCUST_CODE.set_value(this.lstCUST_NAME.value);
        		this.lstCUST_NAME.set_visible(false);
        		this.fn_Search();
        	}	
        }

        

        
        this.edtSHRCUST_NAME_ontextchanged = function(obj,e)
        {
        	//명이 지워지면 코드가 지워짐
        	if(this.edtSHRCUST_NAME.value=='')
        	this.edtSHRCUST_CODE.set_value('');
        		
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

        

        

        this.edtSHRCUST_NAME_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.lstCUST_NAME.set_visible(false);
        		this.fn_Search();
        	}	
        }
        /*----------------------------+
         |  세금계산서 디테일 조회 |
         +----------------------------*/

        this.dsMD_TCALXM_onrowposchanged = function(obj,e)
        {	
        	if(this.rdoSUCC_FLAG.index==0){
        		if(this.tabXM.tabindex=='0'){
        			var sMethodName = "SEARCH05";
        			var sInDataSet  = "";
        			var sOutDataSet = "dsMD_TCALXD=dsMD_TCALXD";
        			var sArgument = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		}else if(this.tabXM.tabindex=='1'){
        			var sMethodName = "SEARCH06";
        			var sInDataSet  = "";
        			var sOutDataSet = "dsMD_TCALXD=dsMD_TCALXD";
        			var sArgument = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		}
        	}
        }

        /*--------------------------------+
         |  위수탁 수정세금계산서 팝업 |
         +--------------------------------*/

        this.tabXM_tab0_grdMD_TCALXH_oncelldblclick = function(obj,e)
        {
        	
        	var columnName = this.fnc_getColId(obj, e.cell);
        	
        	if (columnName != "TAXX_SANB") return;
        	
        	if(this.fn_nullChk(this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition, "DTIX_TYPE")) == "02"
        	|| this.fn_nullChk(this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition, "DTIX_TYPE")) == "04"){
        		
        		this.fnc_Message("TMM300","수정세금계산서는 추가 수정 세금계산서를 생성할 수 없습니다.");
        		return ; 
        		
        	}

        	if(this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition,"APPROVE_ID")==''){
        		this.fnc_Message("MAC016");
        		return false;
        	}
        	
        	var sTAXX_SANB = this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition, "TAXX_SANB");
        	var sCUST_NAME = this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition, "CUST_NAME");
        	var sMEMO_FILD = this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition, "MEMO_FILD");
        	var sCONVERSATION_ID = this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition, "CONVERSATION_ID");
        	var sAPPROVE_ID = this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition, "APPROVE_ID");

        	// 수정세금계산서 생성 팝업
        	 var sOpenStyle  = "modeless=false";   //Open Sytle(되도록 Modal 사용)
        		sOpenStyle += ",autosize=true";   //Autosize true면 width, Height 안먹음
        		sOpenStyle += ",top=-1";          //원하는 위치(단 -1은 소유창의 Middle)
        		sOpenStyle += ",left=-1";         //원하는 위치(단 -1은 소유창의 Center)
        		sOpenStyle += ",width=1100";       //현재 반응 없음
        		sOpenStyle += ",height=505";      //현재 반응 없음
        		sOpenStyle += ",title=true";      //Form Title Bar Visible 여부
        		sOpenStyle += ",titletext=";      //Form Title여부
        		sOpenStyle += ",status=false";    //Form Title Bar Visible 여부
        		sOpenStyle += ",resizable=true";  //Form Title Bar Visible 여부
        		
        	this.fnc_OpenPopup("MACA0020P01", "mac::MACA0020P01.xfdl", {sTAXX_SANB : sTAXX_SANB
        	, sCUST_NAME : sCUST_NAME, sMEMO_FILD : sMEMO_FILD, sCONVERSATION_ID : sCONVERSATION_ID, sAPPROVE_ID : sAPPROVE_ID}, sOpenStyle, "fn_Dialoge_After");	

        }

        /*--------------------------------+
         |  수수료 수정세금계산서 팝업 |
         +--------------------------------*/

        this.tabXM_tab1_grdMD_TCALXH_oncelldblclick = function(obj,e)
        {
        	
        	var columnName = this.fnc_getColId(obj, e.cell);
        	
        	if (columnName != "TAXX_SANB") return;
        	
        	if(this.fn_nullChk(this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition, "DTIX_TYPE")) == "02"
        	|| this.fn_nullChk(this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition, "DTIX_TYPE")) == "04"){
        		
        		this.fnc_Message("TMM300","수정세금계산서는 추가 수정 세금계산서를 생성할 수 없습니다.");
        		return ; 
        		
        	}
        	
        	if(this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition,"APPROVE_ID")==''){
        		this.fnc_Message("MAC016");
        		return false;
        	}
        	
        	
        	var sTAXX_SANB = this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition, "TAXX_SANB");
        	var sMEDX_CDNM = this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition, "MEDX_CDNM");
        	var sMEMO_FILD = this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition, "MEMO_FILD");
        	var sCONVERSATION_ID = this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition, "CONVERSATION_ID");
        	var sAPPROVE_ID = this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition, "APPROVE_ID");

        	// 수정세금계산서 생성 팝업
        	 var sOpenStyle  = "modeless=false";   //Open Sytle(되도록 Modal 사용)
        		sOpenStyle += ",autosize=true";   //Autosize true면 width, Height 안먹음
        		sOpenStyle += ",top=-1";          //원하는 위치(단 -1은 소유창의 Middle)
        		sOpenStyle += ",left=-1";         //원하는 위치(단 -1은 소유창의 Center)
        		sOpenStyle += ",width=1100";       //현재 반응 없음
        		sOpenStyle += ",height=505";      //현재 반응 없음
        		sOpenStyle += ",title=true";      //Form Title Bar Visible 여부
        		sOpenStyle += ",titletext=";      //Form Title여부
        		sOpenStyle += ",status=false";    //Form Title Bar Visible 여부
        		sOpenStyle += ",resizable=true";  //Form Title Bar Visible 여부
        		
        	this.fnc_OpenPopup("MACA0020P02", "mac::MACA0020P02.xfdl", {sTAXX_SANB : sTAXX_SANB
        	, sMEDX_CDNM : sMEDX_CDNM, sMEMO_FILD : sMEMO_FILD, sCONVERSATION_ID : sCONVERSATION_ID, sAPPROVE_ID : sAPPROVE_ID}, sOpenStyle, "fn_Dialoge_After");	

        }

        
        /*--------------------------------------+
         | 매체용으로 저장 팝업 CallBack      |
         +---------------------------------------*/
        this.fn_Dialoge_After = function(sPopupId,Variant){

        	this.fn_Search();
        	
        }

          /*------------------------------------+
         |  null 체크
         +-------------------------------------*/
         this.fn_nullChk = function(sValue)
        {
        	if (new String(sValue).valueOf() == "undefined") sValue = "";
        	if (sValue == null) sValue = "";
        	if (("x" + sValue == "xNaN") && (new String(sValue.length).valueOf() == "undefined")) sValue = "";
        	if (sValue.length == 0) sValue = "";
        	return sValue;
        }

        

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsMD_TCALXM.addEventHandler("onrowposchanged", this.dsMD_TCALXM_onrowposchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.rdoSUCC_FLAG.addEventHandler("onitemchanged", this.rdoSUCC_FLAG_onitemchanged, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCUST_NAME.addEventHandler("onclick", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.edtSHRCUST_NAME.addEventHandler("onkeyup", this.edtSHRCUST_NAME_onkeyup, this);
            this.edtSHRCUST_NAME.addEventHandler("ontextchanged", this.edtSHRCUST_NAME_ontextchanged, this);
            this.edtSHRCUST_NAME.addEventHandler("onkeydown", this.edtSHRCUST_NAME_onkeydown, this);
            this.staSHRYEAR_MNTH.addEventHandler("onclick", this.staSHRCOMM_CODE_onclick, this);
            this.calSHRYEAR_MNTH.addEventHandler("onmouseenter", this.fn_onclickSHRYEAR_MNTH, this);
            this.cmbSHRMEDX_FLAG.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRMEDX_FLAG.addEventHandler("onitemchanged", this.cmbSHRMEDX_FLAG_canitemchanged, this);
            this.tabXM.addEventHandler("onchanged", this.tabXM_onchanged, this);
            this.tabXM.tab0.btnDELE_TAXX00.addEventHandler("onclick", this.btn_delete00_onclick, this);
            this.tabXM.tab0.btnCRET_TAXX00.addEventHandler("onclick", this.btnCRET_TAXX00_onclick, this);
            this.tabXM.tab0.grdMD_TCALXH.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabXM.tab0.grdMD_TCALXH.addEventHandler("ontextchanged", this.tabXM_tab0_grdMD_CUSTXM_ontextchanged, this);
            this.tabXM.tab0.grdMD_TCALXH.addEventHandler("onkeyup", this.grdMD_TCALXH_oncellclick, this);
            this.tabXM.tab0.grdMD_TCALXH.addEventHandler("oncelldblclick", this.tabXM_tab0_grdMD_TCALXH_oncelldblclick, this);
            this.tabXM.tab0.grdMD_TCALXH.addEventHandler("onheadclick", this.tabXM_tab0_grdMD_TCALXH_onheadclick, this);
            this.tabXM.tab0.grdMD_TCALXD.addEventHandler("onheadclick", this.tabXM_tab0_grdMD_TCALXM_onheadclick, this);
            this.tabXM.tab0.grdMD_TCALXD.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabXM.tab0.grdMD_TCALXD.addEventHandler("ontextchanged", this.tabXM_tab0_grdMD_CUSTXM_ontextchanged, this);
            this.tabXM.tab0.grdMD_TCALXM.addEventHandler("onheadclick", this.tabXM_tab0_grdMD_TCALXM_onheadclick, this);
            this.tabXM.tab0.grdMD_TCALXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabXM.tab0.grdMD_TCALXM.addEventHandler("ontextchanged", this.tabXM_tab0_grdMD_CUSTXM_ontextchanged, this);
            this.tabXM.tab1.btnCRET_TAXX01.addEventHandler("onclick", this.btnCRET_TAXX01_onclick, this);
            this.tabXM.tab1.btnDELE_TAXX01.addEventHandler("onclick", this.btn_delete01_onclick, this);
            this.tabXM.tab1.calDEND_DATE.addEventHandler("onchanged", this.calPRNT_DATE_onchanged, this);
            this.tabXM.tab1.grdMD_TCALXH.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabXM.tab1.grdMD_TCALXH.addEventHandler("ontextchanged", this.tabXM_tab0_grdMD_CUSTXM_ontextchanged, this);
            this.tabXM.tab1.grdMD_TCALXH.addEventHandler("onkeyup", this.grdMD_TCALXH_oncellclick, this);
            this.tabXM.tab1.grdMD_TCALXH.addEventHandler("oncelldblclick", this.tabXM_tab1_grdMD_TCALXH_oncelldblclick, this);
            this.tabXM.tab1.grdMD_TCALXH.addEventHandler("onheadclick", this.tabXM_tab1_grdMD_TCALXH_onheadclick, this);
            this.tabXM.tab1.grdMD_TCALXD.addEventHandler("onheadclick", this.tabXM_tab0_grdMD_TCALXM_onheadclick, this);
            this.tabXM.tab1.grdMD_TCALXD.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabXM.tab1.grdMD_TCALXD.addEventHandler("ontextchanged", this.tabXM_tab0_grdMD_CUSTXM_ontextchanged, this);
            this.tabXM.tab1.grdMD_TCALXM.addEventHandler("onheadclick", this.tabXM_tab1_grdMD_TCALXM_onheadclick, this);
            this.tabXM.tab1.grdMD_TCALXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabXM.tab1.grdMD_TCALXM.addEventHandler("ontextchanged", this.tabXM_tab0_grdMD_CUSTXM_ontextchanged, this);
            this.lstCUST_NAME.addEventHandler("onitemclick", this.lstCUST_NAME_onitemclick, this);
            this.lstCUST_NAME.addEventHandler("onkeydown", this.lstCUST_NAME_onkeydown, this);
            this.edtSHRMEDX_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRMEDX_NAME.addEventHandler("onclick", this.fn_HelpDialogeSHRMEDX_CODE, this);
            this.edtSHRMEDX_NAME.addEventHandler("onkeyup", this.edtSHRMEDX_NAME_onkeyup, this);
            this.edtSHRMEDX_NAME.addEventHandler("ontextchanged", this.edtSHRMEDX_NAME_ontextchanged, this);
            this.edtSHRMEDX_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRMEDX_CODE, this);

        };

        this.loadIncludeScript("MACA0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
