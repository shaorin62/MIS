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
                this.set_name("MACA0021");
                this.set_titletext("세금계산서입력");
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
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\" value=\"\"/><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"METX_CUNM\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"CUTX_CUNM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_AMTX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TAXX_VATX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SUMM_AMTX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TAXX_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"DIRC_TION\" type=\"STRING\" size=\"256\"/><Column id=\"DOCU_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ATTC_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_CONN\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_SERV\" type=\"STRING\" size=\"256\"/><Column id=\"BUSI_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"OWNR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"DTL1_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL2_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"MOWN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MADD_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MDT1_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"MDT2_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"TSEQ_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"TAXY_MONT\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SEQX_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"DTIX_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DTIY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_DMND\" type=\"STRING\" size=\"256\"/><Column id=\"ENTP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTX_CUNM\" type=\"STRING\" size=\"256\"/><Column id=\"ENTP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRTR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"COMI_FILD\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CVAT_FILD\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CSUM_FILD\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SEND_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_SANB\" type=\"STRING\" size=\"256\"/><Column id=\"CONVERSATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ISSUE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SACH_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TAXY_NUMB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\" value=\"\"/><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"TAXY_MONT\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_AMTX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TAXX_VATX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TAXX_SUMX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_IDXX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_text("매체 세금계산서 입력");
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

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("126");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

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

            obj = new Div("calSHRTAXY_MONT", "absolute", "71", "71", "80", "21", null, null, this);
            obj.set_taborder("142");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

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
            obj = new Static("stInformation", "absolute", "10", "14", "174", "21", null, null, this.tabXM.tab0);
            obj.set_taborder("140");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Static("stInformation00", "absolute", "10", "278", "174", "21", null, null, this.tabXM.tab0);
            obj.set_taborder("154");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Grid("grdMD_TCALXM", "absolute", "10", "35", null, "229", "10", null, this.tabXM.tab0);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("155");
            obj.set_binddataset("dsMD_TCALXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"33\"/><Column size=\"102\"/><Column size=\"102\"/><Column size=\"69\"/><Column size=\"80\"/><Column size=\"73\"/><Column size=\"176\"/><Column size=\"120\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"144\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"107\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"세금계산서 종류\"/><Cell col=\"2\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"세금계산서 분류\"/><Cell col=\"3\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"영수구분\"/><Cell col=\"4\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"발행일\"/><Cell col=\"5\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"청구일\"/><Cell col=\"6\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"내역\"/><Cell col=\"7\" text=\"공급자 사업자번호\"/><Cell col=\"8\" text=\"매체사 코드\"/><Cell col=\"9\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"매체사 명\"/><Cell col=\"10\" text=\"공급받는자 사업자번호\"/><Cell col=\"11\" text=\"광고주 코드\"/><Cell col=\"12\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"광고주 명\"/><Cell col=\"13\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"금액\"/><Cell col=\"14\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"세액\"/><Cell col=\"15\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"합계금액\"/><Cell col=\"16\" text=\"세금계산서번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DTIX_TYPE\" combodataset=\"dsDti_type\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DTIY_TYPE\" combodataset=\"dsDti_type1\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:TAXX_DMND\" combodataset=\"dsTax_demand\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" text=\"bind:PRNT_DATE\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" text=\"bind:DEND_DATE\"/><Cell col=\"6\" edittype=\"text\" text=\"bind:MEMO_FILD\"/><Cell col=\"7\" edittype=\"none\" text=\"bind:METX_CUNM\"/><Cell col=\"8\" edittype=\"text\" text=\"bind:MEDX_CODE\"/><Cell col=\"9\" edittype=\"text\" text=\"bind:MEDX_CDNM\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"10\" edittype=\"none\" text=\"bind:CUTX_CUNM\"/><Cell col=\"11\" edittype=\"text\" text=\"bind:CUST_CODE\"/><Cell col=\"12\" edittype=\"text\" text=\"bind:CUST_NAME\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"text\" text=\"bind:TAXX_AMTX\"/><Cell col=\"14\" displaytype=\"number\" edittype=\"text\" text=\"bind:TAXX_VATX\"/><Cell col=\"15\" displaytype=\"number\" edittype=\"text\" text=\"bind:SUMM_AMTX\"/><Cell col=\"16\" text=\"bind:TAXX_SANB\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\" style=\"align:center;\" text=\"합계\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;TAXX_AMTX&quot;)\"/><Cell col=\"14\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;TAXX_VATX&quot;)\"/><Cell col=\"15\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;SUMM_AMTX&quot;)\"/><Cell col=\"16\"/></Band></Format></Formats>");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Grid("grdMD_TCALXD", "absolute", "10", "299", null, null, "10", "10", this.tabXM.tab0);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("156");
            obj.set_binddataset("dsMD_TCALXD");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"31\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"239\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"발행일\"/><Cell col=\"2\" text=\"청구일\"/><Cell col=\"3\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"내역\"/><Cell col=\"4\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"금액\"/><Cell col=\"5\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"세액\"/><Cell col=\"6\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"합계\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" text=\"bind:PRNT_DATE\"/><Cell col=\"2\" text=\"bind:DEND_DATE\"/><Cell col=\"3\" edittype=\"text\" text=\"bind:MEMO_FILD\"/><Cell col=\"4\" edittype=\"text\" text=\"bind:TAXX_AMTX\"/><Cell col=\"5\" edittype=\"text\" text=\"bind:TAXX_VATX\"/><Cell col=\"6\" edittype=\"text\" text=\"bind:TAXX_SUMX\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" style=\"align:center;\" text=\"합계\"/><Cell col=\"4\" expr=\"expr:dataset.getSum(&quot;TAXX_AMTX&quot;)\"/><Cell col=\"5\" expr=\"expr:dataset.getSum(&quot;TAXX_VATX&quot;)\"/><Cell col=\"6\" expr=\"expr:dataset.getSum(&quot;TAXX_SUMX&quot;)\"/></Band></Format></Formats>");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "400", "264", "80", "35", null, null, this.tabXM.tab0);
            obj.set_taborder("157");
            obj.set_text("h35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Button("btnAddRow", "absolute", null, "275", "62", "21", "75", null, this.tabXM.tab0);
            obj.set_taborder("158");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            obj.style.set_imagealign("left");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Button("btnDelRow", "absolute", null, "275", "62", "21", "10", null, this.tabXM.tab0);
            obj.set_taborder("159");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            obj.style.set_imagealign("left");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Tabpage("tab1", this.tabXM);
            obj.set_text("수수료");
            obj.style.set_background("#ffffffff");
            obj.set_scrollbars("none");
            this.tabXM.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "14", "182", "21", null, null, this.tabXM.tab1);
            obj.set_taborder("2");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "400", "264", "80", "35", null, null, this.tabXM.tab1);
            obj.set_taborder("16");
            obj.set_text("h35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Grid("grdMD_TCALXD", "absolute", "10", "299", null, null, "10", "10", this.tabXM.tab1);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("18");
            obj.set_binddataset("dsMD_TCALXD");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"34\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"239\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"발행일\"/><Cell col=\"2\" text=\"청구일\"/><Cell col=\"3\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"내역\"/><Cell col=\"4\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"금액\"/><Cell col=\"5\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"세액\"/><Cell col=\"6\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"합계\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" text=\"bind:PRNT_DATE\"/><Cell col=\"2\" text=\"bind:DEND_DATE\"/><Cell col=\"3\" edittype=\"text\" text=\"bind:MEMO_FILD\"/><Cell col=\"4\" edittype=\"text\" text=\"bind:TAXX_AMTX\"/><Cell col=\"5\" edittype=\"text\" text=\"bind:TAXX_VATX\"/><Cell col=\"6\" edittype=\"text\" text=\"bind:TAXX_SUMX\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" style=\"align:center;\" text=\"합계\"/><Cell col=\"4\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;TAXX_AMTX&quot;)\"/><Cell col=\"5\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;TAXX_VATX&quot;)\"/><Cell col=\"6\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;TAXX_SUMX&quot;)\"/></Band></Format></Formats>");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("stInformation00", "absolute", "10", "278", "182", "21", null, null, this.tabXM.tab1);
            obj.set_taborder("19");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Grid("grdMD_TCALXM", "absolute", "10", "35", null, "229", "10", null, this.tabXM.tab1);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("10");
            obj.set_binddataset("dsMD_TCALXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"33\"/><Column size=\"102\"/><Column size=\"102\"/><Column size=\"69\"/><Column size=\"80\"/><Column size=\"73\"/><Column size=\"176\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"144\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"107\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"세금계산서 종류\"/><Cell col=\"2\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"세금계산서 분류\"/><Cell col=\"3\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"영수구분\"/><Cell col=\"4\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"발행일\"/><Cell col=\"5\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"청구일\"/><Cell col=\"6\" style=\"background:transparent URL('theme://images/ico_grd_edit.png') left top;\" text=\"내역\"/><Cell col=\"7\" text=\"공급자 사업자번호\"/><Cell col=\"8\" text=\"공급자 명\"/><Cell col=\"9\" text=\"공급받는자 사업자번호\"/><Cell col=\"10\" text=\"매체사 코드\"/><Cell col=\"11\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"매체사 명\"/><Cell col=\"12\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"금액\"/><Cell col=\"13\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"세액\"/><Cell col=\"14\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"합계금액\"/><Cell col=\"15\" text=\"세금계산서번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DTIX_TYPE\" combodataset=\"dsDti_type\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DTIY_TYPE\" combodataset=\"dsDti_type1\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:TAXX_DMND\" combodataset=\"dsTax_demand\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" text=\"bind:PRNT_DATE\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" text=\"bind:DEND_DATE\"/><Cell col=\"6\" edittype=\"text\" text=\"bind:MEMO_FILD\"/><Cell col=\"7\" edittype=\"none\" text=\"bind:ENTX_CUNM\"/><Cell col=\"8\" edittype=\"none\" text=\"bind:ENTP_NAME\"/><Cell col=\"9\" edittype=\"none\" text=\"bind:METX_CUNM\"/><Cell col=\"10\" edittype=\"text\" text=\"bind:MEDX_CODE\"/><Cell col=\"11\" edittype=\"text\" text=\"bind:MEDX_CDNM\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"12\" edittype=\"text\" text=\"bind:TAXX_AMTX\"/><Cell col=\"13\" edittype=\"text\" text=\"bind:TAXX_VATX\"/><Cell col=\"14\" edittype=\"text\" text=\"bind:SUMM_AMTX\"/><Cell col=\"15\" text=\"bind:TAXX_SANB\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\" style=\"align:center;\" text=\"합계\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;TAXX_AMTX&quot;)\"/><Cell col=\"13\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;TAXX_VATX&quot;)\"/><Cell col=\"14\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;SUMM_AMTX&quot;)\"/><Cell col=\"15\"/></Band></Format></Formats>");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Button("btnAddRow", "absolute", null, "275", "62", "21", "75", null, this.tabXM.tab1);
            obj.set_taborder("20");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            obj.style.set_imagealign("left");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Button("btnDelRow", "absolute", null, "275", "62", "21", "10", null, this.tabXM.tab1);
            obj.set_taborder("21");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            obj.style.set_imagealign("left");
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
            		p.set_titletext("세금계산서입력");

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
        this.addIncludeScript("MACA0021.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("MACA0021.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("MACA0021.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	MACA0021 매체 세금계산서 입력
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2017.03.06		최제현		Initial Created.
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
        this.sBUTTONLIST 	= "TTTTTTTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME 	= "MACA0021"; //해당 Form에서 사용 할 Package 명
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
        	this.calSHRTAXY_MONT.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ));
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
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsMD_TCALXM");
        	this.fnc_DatasetClear("dsMD_TCALXD");
        	
        	//탭인덱스가 0이면 위수탁 세금계산서. 1이면 수수료세금계산서
        	if(this.tabXM.tabindex==0){
        		var sMethodName = "SEARCH00";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsMD_TCALXM=dsMD_TCALXM";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}else{
        		var sMethodName = "SEARCH01";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsMD_TCALXM=dsMD_TCALXM";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	var iRow = this.dsMD_TCALXM.insertRow(this.dsMD_TCALXM.rowposition + 1);
        	//var iRow = this.dsMD_TCALXM.addRow();
        	if(this.tabXM.tabindex == 0){
        		this.dsMD_TCALXM.setColumn(iRow,"DTIX_TYPE","01");
        		this.dsMD_TCALXM.setColumn(iRow,"DTIY_TYPE","03");
        		this.dsMD_TCALXM.setColumn(iRow,"TAXX_DMND","02");
        		this.dsMD_TCALXM.setColumn(iRow,"PRNT_DATE",this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,8));
        		this.dsMD_TCALXM.setColumn(iRow,"DEND_DATE",this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,8));
        	}else{
        		this.dsMD_TCALXM.setColumn(iRow,"DTIX_TYPE","01");
        		this.dsMD_TCALXM.setColumn(iRow,"DTIY_TYPE","01");
        		this.dsMD_TCALXM.setColumn(iRow,"TAXX_DMND","02");
        		this.dsMD_TCALXM.setColumn(iRow,"PRNT_DATE",this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,8));
        		this.dsMD_TCALXM.setColumn(iRow,"DEND_DATE",this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,8));
        	}

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	var totalNum = 0;	//체크된 개수
        	
        	for(var i=0 ; i<this.dsMD_TCALXM.rowcount ; i++){
        		if(this.dsMD_TCALXM.getColumn(i,"CHEK_FILD") == '1'){totalNum ++;}
        	}
        	
        	if (this.fn_DeleteCheck(totalNum)) {
        		var rowCnt = this.dsMD_TCALXM.rowcount;
        		for(var i=(rowCnt-1); i>=0; i--){
        			if(this.dsMD_TCALXM.getColumn(i,"CHEK_FILD") == '1'){
        				this.dsMD_TCALXM.deleteRow(i);
        			}
        		}
        	}
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsMD_TCALXM");
        	this.fnc_DataSetCancel("dsMD_TCALXD");
        }

        /*-------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
        	if (!this.fn_SaveItemCheck()) return;
        	
        	if(this.tabXM.tabindex==0){
        		if(this.fnc_DatasetChangeCheck("dsMD_TCALXM") == true){
        			var sMethodName = "SAVE00";
        			var sInDataSet = "dsMD_TCALXM=dsMD_TCALXM:U";
        			var sOutDataSet = "";
        			var sArgument = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		}else{
        			if (!this.fn_SaveItemCheckDtl()) return;
        			
        			var sMethodName = "SAVE02";
        			var sInDataSet = "dsMD_TCALXD=dsMD_TCALXD:U";
        			var sOutDataSet = "";
        			var sArgument = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		}
        	}else{
        		if(this.fnc_DatasetChangeCheck("dsMD_TCALXM") == true){
        			var sMethodName = "SAVE01";
        			var sInDataSet = "dsMD_TCALXM=dsMD_TCALXM:U";
        			var sOutDataSet = "";
        			var sArgument = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		}else{
        			if (!this.fn_SaveItemCheckDtl()) return;
        			
        			var sMethodName = "SAVE03";
        			var sInDataSet = "dsMD_TCALXD=dsMD_TCALXD:U";
        			var sOutDataSet = "";
        			var sArgument = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		}
        	}

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
        	if(this.fnc_DatasetChangeCheck("dsMD_TCALXM") == false) return this.fnc_Message("TMM300","선택된 데이터가 없습니다.");
        	
        	if(this.tabXM.tabindex == 0){

        		if (this.dsMD_TCALXM.getRowCount() < 0) return this.fnc_Message("TMM011");
        		if (this.dsMD_TCALXM.rowposition < 0) return;

        		this.fnc_DatasetClear("dsMD_TCALXH_RPT");
        		this.fnc_DatasetClear("dsMD_TCALXD_RPT");

        		var reportfile 	= "/mac/MACA0021R01.jrf";
        		var dataref 	= new Array();
        		var params 		= "";
        		
        		dataref[0] 				= new Object();
        		dataref[0].type 		= "TRAN";
        		dataref[0].svcUrl 		= "/core/erp/mac/MACA0021_PRINT00.do";
        		dataref[0].inDataset 	= "dsMD_TCALXM=dsMD_TCALXM:U"
        		dataref[0].outDataset 	= "dsMD_TCALXH_RPT=dsMD_TCALXH_RPT dsMD_TCALXD_RPT=dsMD_TCALXD_RPT";
        		dataref[0].arg 			= this.fn_CreateArgument("PRINT00");
        		
        		this.fn_UbiReport(reportfile, params, dataref, "");

        	}else if(this.tabXM.tabindex == 1){

        		if (this.dsMD_TCALXM.getRowCount() < 0) return this.fnc_Message("TMM011");
        		if (this.dsMD_TCALXM.rowposition < 0) return;

        		this.fnc_DatasetClear("dsMD_TCALXH_RPT");
        		this.fnc_DatasetClear("dsMD_TCALXD_RPT");

        		var reportfile 	= "/mac/MACA0021R02.jrf";
        		var dataref 	= new Array();
        		var params 		= "";
        		
        		dataref[0] 				= new Object();
        		dataref[0].type 		= "TRAN";
        		dataref[0].svcUrl 		= "/core/erp/mac/MACA0021_PRINT02.do";
        		dataref[0].inDataset 	= "dsMD_TCALXM=dsMD_TCALXM:U"
        		dataref[0].outDataset 	= "dsMD_TCALXH_RPT=dsMD_TCALXH_RPT dsMD_TCALXD_RPT=dsMD_TCALXD_RPT";
        		dataref[0].arg 			= this.fn_CreateArgument("PRINT02");

        		this.fn_UbiReport(reportfile, params, dataref, "");
        		

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
        	if(this.fnc_IsDate(this.calSHRTAXY_MONT.fn_GetMonth()) == false){
        		this.fnc_Message("TMM081");
        		return false;
        	}
        	
        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (totalNum) {
        	
        	
        	if (totalNum < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	var sQuestionText = "세금계산서 "+ totalNum + "건";

        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*--------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	// 공통 Head & 상세 변경 체크
        	if (this.fnc_DatasetChangeCheck("dsMD_TCALXM") == false && this.fnc_DatasetChangeCheck("dsMD_TCALXD") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	for (var i = 0; i < this.dsMD_TCALXM.getRowCount(); i++) {
        		var cnt = i + 1;
        	
        		if (this.fnc_ToUpper(this.dsMD_TCALXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
         		if (this.fnc_Length(this.fnc_Trim(this.dsMD_TCALXM.getColumn(i, "PRNT_DATE"))) < 1) {
         			return this.fnc_CheckPostAction("TMM072", "발행일", this.dsMD_TCALXM, i, '', '');
         		}
         		
         		if (this.fnc_Length(this.fnc_Trim(this.dsMD_TCALXM.getColumn(i, "DEND_DATE"))) < 1) {
         			return this.fnc_CheckPostAction("TMM072", "청구일", this.dsMD_TCALXM, i, '', '');
         		}
         		
         		if (this.fnc_Length(this.fnc_Trim(this.dsMD_TCALXM.getColumn(i, "MEDX_CDNM"))) < 1) {
         			return this.fnc_CheckPostAction("TMM072", "매체사명", this.dsMD_TCALXM, i, '', '');
         		}
         		
         		if(this.tabXM.tabindex == 0){
        			if (this.fnc_Length(this.fnc_Trim(this.dsMD_TCALXM.getColumn(i, "CUST_NAME"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "광고주명", this.dsMD_TCALXM, i, '', '');
        			}
         		}
         		
         		if (this.fnc_Length(this.fnc_Trim(this.dsMD_TCALXM.getColumn(i, "TAXX_AMTX"))) < 1) {
         			return this.fnc_CheckPostAction("TMM072", "금액", this.dsMD_TCALXM, i, '', '');
         		}
         		
         		if (this.fnc_Length(this.fnc_Trim(this.dsMD_TCALXM.getColumn(i, "TAXX_VATX"))) < 1) {
         			return this.fnc_CheckPostAction("TMM072", "세액", this.dsMD_TCALXM, i, '', '');
         		}
         		
         		if (this.fnc_Length(this.fnc_Trim(this.dsMD_TCALXM.getColumn(i, "SUMM_AMTX"))) < 1) {
         			return this.fnc_CheckPostAction("TMM072", "합계금액", this.dsMD_TCALXM, i, '', '');
         		}
         		
        	}
        	
        	return true;
        }

        this.fn_SaveItemCheckDtl = function () {

        	var iXMRow = this.dsMD_TCALXM.rowposition;
        	//헤더의 값
        	var hTAXX_AMTX = this.fnc_Trim(this.dsMD_TCALXM.getColumn(iXMRow, "TAXX_AMTX")); //금액
        	var hTAXX_VATX = this.fnc_Trim(this.dsMD_TCALXM.getColumn(iXMRow, "TAXX_VATX")); //부가세액
        	
        	//디테일의 합
        	var sTAXX_AMTX = 0;
        	var sTAXX_VATX = 0;
        	for(var i = 0; i < this.dsMD_TCALXD.getRowCount(); i++) {
        		sTAXX_AMTX+=this.dsMD_TCALXD.getColumn(i,"TAXX_AMTX");
        		sTAXX_VATX+=this.dsMD_TCALXD.getColumn(i,"TAXX_VATX");
        	}
        	
        	if(hTAXX_AMTX!=sTAXX_AMTX || hTAXX_VATX!=sTAXX_VATX){
        		this.fnc_Message("MAC026");
        		return false;
        	}
        	
        	for (var i = 0; i < this.dsMD_TCALXD.getRowCount(); i++) {
        		var cnt = i + 1;
        	
        		if (this.fnc_ToUpper(this.dsMD_TCALXD.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
         		if (this.fnc_Length(this.fnc_Trim(this.dsMD_TCALXD.getColumn(i, "TAXX_AMTX"))) < 1) {
         			return this.fnc_CheckPostAction("TMM072", "금액", this.dsMD_TCALXD, i, '', '');
         		}
         		
         		if (this.fnc_Length(this.fnc_Trim(this.dsMD_TCALXD.getColumn(i, "TAXX_VATX"))) < 1) {
         			return this.fnc_CheckPostAction("TMM072", "세액", this.dsMD_TCALXD, i, '', '');
         		}
         		
         		if (this.fnc_Length(this.fnc_Trim(this.dsMD_TCALXD.getColumn(i, "TAXX_SUMX"))) < 1) {
         			return this.fnc_CheckPostAction("TMM072", "합계", this.dsMD_TCALXD, i, '', '');
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
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " TAXY_MONT=" + this.fnc_Quote(this.calSHRTAXY_MONT.fn_GetMonth()); 	//년월
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.edtSHRCUST_CODE.value);     //광고주코드
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value);     //광고주명
        		sReturnString += " BUSI_FLAG=B"; 	//위탁,수수료구분
        	} else if (sKind == "SEARCH01") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " TAXY_MONT=" + this.fnc_Quote(this.calSHRTAXY_MONT.fn_GetMonth()); 	//년월
        		sReturnString += " MEDX_CODE=" + this.fnc_Quote(this.edtSHRMEDX_CODE.value);     //매체사코드
        		sReturnString += " MEDX_CDNM=" + this.fnc_Quote(this.edtSHRMEDX_NAME.value);     //매체사코드
        		sReturnString += " BUSI_FLAG=A"; 	//위탁,수수료 구분
        	//모든 거래처명 가져오기
        	} else if (sKind == "SEARCH02" || sKind == "SEARCH03") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " DEND_DATE=" + this.fnc_Quote(this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition,"DEND_DATE")); 	
        		sReturnString += " TAXY_MONT=" + this.fnc_Quote(this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition,"TAXY_MONT")); 	
        		sReturnString += " TAXX_NUMB=" + this.fnc_Quote(this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition,"TAXX_NUMB"));

        	} else if (sKind == "SEARCH04") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        	} else if (sKind == "SAVE00" || sKind == "SAVE01" || sKind == "SAVE02" || sKind == "SAVE03") {
        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        	}  else if (sKind == "PRINT00") {
        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " TAXY_MONT=" + 
        		this.fnc_Quote(this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition, "TAXY_MONT")); //년월
        		sReturnString += " TAXX_NUMB=" + 
        		this.fnc_Quote(this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition, "TAXX_NUMB")); //헤더의 거래명세서번호
        	} else if (sKind == "PRINT02") {
        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " TAXY_MONT=" + 
        		this.fnc_Quote(this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition, "TAXY_MONT")); //년월
        		sReturnString += " TAXX_NUMB=" + 
        		this.fnc_Quote(this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition, "TAXX_NUMB")); //헤더의 거래명세서번호
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
        		this.fnc_Information(this.tabXM.tab1.stInformation, this.dsMD_TCALXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "SEARCH02") {
        		this.fnc_Information(this.tabXM.tab0.stInformation00, this.dsMD_TCALXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "SEARCH03") {
        		this.fnc_Information(this.tabXM.tab1.stInformation00, this.dsMD_TCALXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "SEARCH04") {
        		//자동완성 세팅
        		this.fn_AutoSetting();
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.tabXM.tab0.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	} else if (sMethodName == "SAVE01") {
        		this.fnc_Information(this.tabXM.tab1.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	} else if (sMethodName == "SAVE02") {
        		this.fnc_Information(this.tabXM.tab0.stInformation00, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	} else if (sMethodName == "SAVE03") {
        		this.fnc_Information(this.tabXM.tab1.stInformation00, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	} else if (sMethodName == "GetCommCode") {
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

        /*---------------------------------+
         | 		   세금계산서 팝업	   |
         +---------------------------------*/
        this.dsMD_TCALXM_oncolumnchanged = function(obj,e)
        {	
        	if (e.columnid == "CUST_NAME" ) this.fn_HelpDialoge(this.tabXM.tab0.grdMD_TCALXM, "YES", e.oldvalue, e.columnid);
        	if (e.columnid == "MEDX_CDNM" ) this.fn_HelpDialoge(this.tabXM.tab0.grdMD_TCALXM, "YES", e.oldvalue, e.columnid);
        	if (e.columnid == "MEDX_CDNM" ) this.fn_HelpDialoge(this.tabXM.tab1.grdMD_TCALXM, "YES", e.oldvalue, e.columnid);
        }

        /*-------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {
        	var arrParam = new Array();
        	
        	if(this.tabXM.tabindex == 0){
        		if ((this.fnc_getGridHelpColName(obj, sFromDs) == "CUST_NAME") || (sColumnID == "CUST_NAME")) {		//매체명팝업
        			arrParam[0] = "MAC0001";
        			arrParam[1] = "";
        			arrParam[2] = "CUST_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "tabXM.tab0.grdMD_TCALXM";
        			arrParam[5] = "CUST_CODE,CUST_NAME,CUTX_CUNM,OWNR_NAME,ADDR_DESC,DTL1_ADDR,DTL2_ADDR";
        			arrParam[6] = "0,1,2,3,4,5,6";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);

        		}else if ((this.fnc_getGridHelpColName(obj, sFromDs) == "MEDX_CDNM") || (sColumnID == "MEDX_CDNM")) {		//방송사팝업

        			arrParam[0] = "MAC0002";
        			arrParam[1] = "";
        			arrParam[2] = "MEDX_CDNM";
        			arrParam[3] = "N";
        			arrParam[4] = "tabXM.tab0.grdMD_TCALXM";
        			arrParam[5] = "MEDX_CODE,MEDX_CDNM,METX_CUNM,MOWN_NAME,MADD_DESC,MDT1_ADDR,MDT2_ADDR";
        			arrParam[6] = "0,1,2,3,4,5,6";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        		}
        	}else if(this.tabXM.tabindex == 1){
        		if ((this.fnc_getGridHelpColName(obj, sFromDs) == "MEDX_CDNM") || (sColumnID == "MEDX_CDNM")) {		//방송사팝업

        			arrParam[0] = "MAC0002";
        			arrParam[1] = "";
        			arrParam[2] = "MEDX_CDNM";
        			arrParam[3] = "N";
        			arrParam[4] = "tabXM.tab1.grdMD_TCALXM";
        			arrParam[5] = "MEDX_CODE,MEDX_CDNM,METX_CUNM,MOWN_NAME,MADD_DESC,MDT1_ADDR,MDT2_ADDR";
        			arrParam[6] = "0,1,2,3,4,5,6";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		
        		}
        	}
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

        this.tabXM_tab1_grdMD_TCALXD_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.tabXM.tab1.grdMD_TCALXD.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked1 = (isAllChecked1 ? 0 : 1);
        		
        		for (var i = 0; i < this.dsMD_TCALXD.getRowCount(); i++) {
        			this.dsMD_TCALXD.setColumn(i, v_Colid, isAllChecked1);
        		}
        		this.tabXM.tab1.grdMD_TCALXD.setCellProperty("Head", 0, "expr", isAllChecked1);
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

        this.tabXM_tab0_grdMD_TCALXD_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.tabXM.tab0.grdMD_TCALXD.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked3 = (isAllChecked3 ? 0 : 1);
        		for (var i = 0; i < this.dsMD_TCALXD.getRowCount(); i++) {
        			this.dsMD_TCALXD.setColumn(i, v_Colid, isAllChecked3);
        		}
        		this.tabXM.tab0.grdMD_TCALXD.setCellProperty("Head", 0, "expr", isAllChecked3);
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
        	if(this.tabXM.tabindex==0){
        		var sMethodName = "SEARCH02";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsMD_TCALXD=dsMD_TCALXD";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}else if(this.tabXM.tabindex==1){
        		var sMethodName = "SEARCH03";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsMD_TCALXD=dsMD_TCALXD";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}

        }

        /*-----------------------+
         | 하단그리드 행추가   |
         +-----------------------*/

        this.btnAddRow_onclick = function(obj,e)
        {
        	//헤더의 데이터를 가져온다.
        	var iXMRow = this.dsMD_TCALXM.rowposition;
        	var sTAXY_MONT = this.fnc_Trim(this.dsMD_TCALXM.getColumn(iXMRow, "TAXY_MONT")); //년월
        	var sTAXX_NUMB = this.fnc_Trim(this.dsMD_TCALXM.getColumn(iXMRow, "TAXX_NUMB")); //세금계산서번호
        	var sCUST_CODE = this.fnc_Trim(this.dsMD_TCALXM.getColumn(iXMRow, "CUST_CODE")); //광고주코드
        	var sMEDX_CODE = this.fnc_Trim(this.dsMD_TCALXM.getColumn(iXMRow, "MEDX_CODE")); //매체사코드
        	var sDEND_DATE = this.fnc_Trim(this.dsMD_TCALXM.getColumn(iXMRow, "DEND_DATE")); //청구일
        	var sPRNT_DATE = this.fnc_Trim(this.dsMD_TCALXM.getColumn(iXMRow, "PRNT_DATE")); //발행일
        	var sMEMO_FILD = this.fnc_Trim(this.dsMD_TCALXM.getColumn(iXMRow, "MEMO_FILD")); //내역
        	
        	//헤더에 데이터가 없으면, return false;
        	if(this.fnc_Length(this.fnc_Trim(sTAXY_MONT)) < 1){
        		this.fnc_Message("MAC025");
        		return false;
        	}
        	
        	var iRow = this.dsMD_TCALXD.insertRow(this.dsMD_TCALXD.rowposition + 1);
        	
        	this.dsMD_TCALXD.setColumn(iRow, "TAXY_MONT", sTAXY_MONT); //년월
        	this.dsMD_TCALXD.setColumn(iRow, "TAXX_NUMB", sTAXX_NUMB); //세금계산서번호
        	this.dsMD_TCALXD.setColumn(iRow, "CUST_CODE", sCUST_CODE); //광고주코드
        	this.dsMD_TCALXD.setColumn(iRow, "MEDX_CODE", sMEDX_CODE); //매체사코드
        	this.dsMD_TCALXD.setColumn(iRow, "DEND_DATE", sDEND_DATE); //청구일
        	this.dsMD_TCALXD.setColumn(iRow, "PRNT_DATE", sPRNT_DATE); //발행일
        	this.dsMD_TCALXD.setColumn(iRow, "MEMO_FILD", sMEMO_FILD); //내역
        }
        /*-----------------------+
         | 하단그리드 행삭제   |
         +-----------------------*/
        this.btnDelRow_onclick = function(obj,e)
        {
        	var totalNum = 0;	//체크된 개수
        	
        	for(var i=0 ; i<this.dsMD_TCALXD.rowcount ; i++){
        		if(this.dsMD_TCALXD.getColumn(i,"CHEK_FILD") == '1'){totalNum ++;}
        	}
        	
        	if (this.fn_DeleteCheckDtl(totalNum)) {
        		var rowCnt = this.dsMD_TCALXD.rowcount;
        		for(var i=(rowCnt-1); i>=0; i--){
        			if(this.dsMD_TCALXD.getColumn(i,"CHEK_FILD") == '1'){
        				this.dsMD_TCALXD.deleteRow(i);
        			}
        		}
        	}
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheckDtl = function (totalNum) {
        	
        	if (totalNum < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	var sQuestionText = "세금계산서 디테일"+ totalNum + "건";

        	return this.fnc_Message("TMM002", sQuestionText);

        }

        
        //자동계산
        this.dsMD_TCALXM_onvaluechanged = function(obj,e)
        {
        	if(e.columnid == "TAXX_AMTX"){
        		//데이터를 가져온다.
        		var iRow = this.dsMD_TCALXM.rowposition;
        		var sTAXX_AMTX = this.dsMD_TCALXM.getColumn(iRow,"TAXX_AMTX");
        		var sTAXX_VATX = Math.floor(sTAXX_AMTX*0.1);
        		this.dsMD_TCALXM.setColumn(iRow,"TAXX_VATX",sTAXX_VATX);
        		this.dsMD_TCALXM.setColumn(iRow,"SUMM_AMTX",sTAXX_AMTX+sTAXX_VATX);
        		
        	}else if(e.columnid == "TAXX_VATX"){
        		var iRow = this.dsMD_TCALXM.rowposition;
        		var sTAXX_AMTX = this.dsMD_TCALXM.getColumn(iRow,"TAXX_AMTX");
        		var sTAXX_VATX = this.dsMD_TCALXM.getColumn(iRow,"TAXX_VATX");
        		this.dsMD_TCALXM.setColumn(iRow,"SUMM_AMTX",sTAXX_AMTX+sTAXX_VATX);
        	}
        }
        //자동계산
        this.dsMD_TCALXD_onvaluechanged = function(obj,e)
        {
        	if(e.columnid == "TAXX_AMTX"){
        		//데이터를 가져온다.
        		var iRow = this.dsMD_TCALXD.rowposition;
        		var sTAXX_AMTX = this.dsMD_TCALXD.getColumn(iRow,"TAXX_AMTX");
        		var sTAXX_VATX = Math.floor(sTAXX_AMTX*0.1);
        		this.dsMD_TCALXD.setColumn(iRow,"TAXX_VATX",sTAXX_VATX);
        		this.dsMD_TCALXD.setColumn(iRow,"TAXX_SUMX",sTAXX_AMTX+sTAXX_VATX);
        		
        	}else if(e.columnid == "TAXX_VATX"){
        		var iRow = this.dsMD_TCALXD.rowposition;
        		var sTAXX_AMTX = this.dsMD_TCALXD.getColumn(iRow,"TAXX_AMTX");
        		var sTAXX_VATX = this.dsMD_TCALXD.getColumn(iRow,"TAXX_VATX");
        		this.dsMD_TCALXD.setColumn(iRow,"TAXX_SUMX",sTAXX_AMTX+sTAXX_VATX);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsMD_TCALXM.addEventHandler("onrowposchanged", this.dsMD_TCALXM_onrowposchanged, this);
            this.dsMD_TCALXM.addEventHandler("oncolumnchanged", this.dsMD_TCALXM_oncolumnchanged, this);
            this.dsMD_TCALXM.addEventHandler("onvaluechanged", this.dsMD_TCALXM_onvaluechanged, this);
            this.dsMD_TCALXD.addEventHandler("onvaluechanged", this.dsMD_TCALXD_onvaluechanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCUST_NAME.addEventHandler("onclick", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.edtSHRCUST_NAME.addEventHandler("onkeyup", this.edtSHRCUST_NAME_onkeyup, this);
            this.edtSHRCUST_NAME.addEventHandler("ontextchanged", this.edtSHRCUST_NAME_ontextchanged, this);
            this.edtSHRCUST_NAME.addEventHandler("onkeydown", this.edtSHRCUST_NAME_onkeydown, this);
            this.staSHRYEAR_MNTH.addEventHandler("onclick", this.staSHRCOMM_CODE_onclick, this);
            this.tabXM.addEventHandler("onchanged", this.tabXM_onchanged, this);
            this.tabXM.tab0.grdMD_TCALXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabXM.tab0.grdMD_TCALXM.addEventHandler("onheadclick", this.tabXM_tab0_grdMD_TCALXM_onheadclick, this);
            this.tabXM.tab0.grdMD_TCALXD.addEventHandler("onheadclick", this.tabXM_tab0_grdMD_TCALXD_onheadclick, this);
            this.tabXM.tab0.grdMD_TCALXD.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabXM.tab0.grdMD_TCALXD.addEventHandler("ontextchanged", this.tabXM_tab0_grdMD_CUSTXM_ontextchanged, this);
            this.tabXM.tab0.btnAddRow.addEventHandler("onclick", this.btnAddRow_onclick, this);
            this.tabXM.tab0.btnDelRow.addEventHandler("onclick", this.btnDelRow_onclick, this);
            this.tabXM.tab1.grdMD_TCALXD.addEventHandler("onheadclick", this.tabXM_tab1_grdMD_TCALXD_onheadclick, this);
            this.tabXM.tab1.grdMD_TCALXD.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabXM.tab1.grdMD_TCALXD.addEventHandler("ontextchanged", this.tabXM_tab0_grdMD_CUSTXM_ontextchanged, this);
            this.tabXM.tab1.grdMD_TCALXM.addEventHandler("onheadclick", this.tabXM_tab1_grdMD_TCALXM_onheadclick, this);
            this.tabXM.tab1.grdMD_TCALXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabXM.tab1.grdMD_TCALXM.addEventHandler("ontextchanged", this.tabXM_tab0_grdMD_CUSTXM_ontextchanged, this);
            this.tabXM.tab1.btnAddRow.addEventHandler("onclick", this.btnAddRow_onclick, this);
            this.tabXM.tab1.btnDelRow.addEventHandler("onclick", this.btnDelRow_onclick, this);
            this.lstCUST_NAME.addEventHandler("onitemclick", this.lstCUST_NAME_onitemclick, this);
            this.lstCUST_NAME.addEventHandler("onkeydown", this.lstCUST_NAME_onkeydown, this);
            this.edtSHRMEDX_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRMEDX_NAME.addEventHandler("onclick", this.fn_HelpDialogeSHRMEDX_CODE, this);
            this.edtSHRMEDX_NAME.addEventHandler("onkeyup", this.edtSHRMEDX_NAME_onkeyup, this);
            this.edtSHRMEDX_NAME.addEventHandler("ontextchanged", this.edtSHRMEDX_NAME_ontextchanged, this);
            this.edtSHRMEDX_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRMEDX_CODE, this);

        };

        this.loadIncludeScript("MACA0021.xfdl");
        this.loadPreloadList();
       
    };
}
)();
