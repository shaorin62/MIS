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
                this.set_name("Temp00001M");
                this.set_titletext("매체 세금계산서 관리");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTaxstate", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">I</Col><Col id=\"NAME\">수신미승인</Col></Row><Row><Col id=\"CODE\">C</Col><Col id=\"NAME\">수신승인</Col></Row><Row><Col id=\"CODE\">R</Col><Col id=\"NAME\">수신거부</Col></Row><Row><Col id=\"CODE\">O</Col><Col id=\"NAME\">취소완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAUTO_NAME", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDti_type", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">세금계산서</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">수정세금계산서</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">계산서</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">수정계산서</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTax_demand", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">영수</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">청구</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_TCALXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\" value=\"\"/><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"METX_CUNM\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"CUTX_CUNM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_AMTX\" type=\"INT\" size=\"256\"/><Column id=\"TAXX_VATX\" type=\"INT\" size=\"256\"/><Column id=\"SUMM_AMTX\" type=\"INT\" size=\"256\"/><Column id=\"TAXX_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"DIRC_TION\" type=\"STRING\" size=\"256\"/><Column id=\"DOCU_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ATTC_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_CONN\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_SERV\" type=\"STRING\" size=\"256\"/><Column id=\"BUSI_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"OWNR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"DTL1_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL2_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"MOWN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MADD_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MDT1_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"MDT2_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"TSEQ_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"TAXY_MONT\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SEQX_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"DTIX_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_DMND\" type=\"STRING\" size=\"256\"/><Column id=\"ELTR_MLAD\" type=\"STRING\" size=\"256\"/><Column id=\"CCUS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CBIZ_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"COWN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CADD_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"DTIY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CONVERSATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"RETURN_DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"RETURN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"META_STRING\" type=\"STRING\" size=\"256\"/><Column id=\"DTI_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"MELT_MLAD\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDti_type1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">일반</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">영세율</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">일반 위수탁</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">수입</Col></Row><Row><Col id=\"NAME\">영세율 위수탁</Col><Col id=\"CODE\">05</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRECEIVE_STATE", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">C</Col><Col id=\"NAME\">전송</Col></Row><Row><Col id=\"CODE\">E</Col><Col id=\"NAME\">에러</Col></Row><Row><Col id=\"CODE\">T</Col><Col id=\"NAME\">전송중</Col></Row><Row><Col id=\"CODE\">I</Col><Col id=\"NAME\">수신미승인</Col></Row><Row><Col id=\"CODE\">R</Col><Col id=\"NAME\">전송거부</Col></Row><Row><Col id=\"CODE\">O</Col><Col id=\"NAME\">취소완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDTI_STATUS", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">I</Col><Col id=\"NAME\">수신미승인</Col></Row><Row><Col id=\"CODE\">C</Col><Col id=\"NAME\">수신승인</Col></Row><Row><Col id=\"CODE\">R</Col><Col id=\"NAME\">수신거부</Col></Row><Row><Col id=\"CODE\">O</Col><Col id=\"NAME\">취소완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Tab("tabXM", "absolute", "8", "139", null, null, "25", "15", this);
            obj.set_taborder("144");
            obj.set_tabindex("0");
            obj.set_cssclass("styTabControl");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tab0", this.tabXM);
            obj.set_text("위수탁");
            obj.style.set_background("#ffffffff");
            obj.set_scrollbars("none");
            this.tabXM.addChild(obj.name, obj);
            obj = new Button("btnCANC_SEND", "absolute", null, "5", "74", "21", "110", null, this.tabXM.tab0);
            obj.set_taborder("152");
            obj.set_text("전송취소");
            obj.set_cssclass("btn_WF_Module");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Button("btnRSEN_EMAL", "absolute", null, "5", "98", "21", "10", null, this.tabXM.tab0);
            obj.set_taborder("153");
            obj.set_text("이메일 재 발송");
            obj.set_cssclass("btn_WF_Module");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", "190", "21", null, null, this.tabXM.tab0);
            obj.set_taborder("148");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Grid("grdMD_TCALXM", "absolute", "10", "30", null, null, "10", "10", this.tabXM.tab0);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("151");
            obj.set_binddataset("dsMD_TCALXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" text=\"청구일자\"/><Cell col=\"2\" text=\"발행일자\"/><Cell col=\"3\" text=\"최종상태\"/><Cell col=\"4\" text=\"전송상태\"/><Cell col=\"5\" text=\"오류코드\"/><Cell col=\"6\" text=\"세금계산서종류\"/><Cell col=\"7\" text=\"세금계산서분류\"/><Cell col=\"8\" text=\"영수구분\"/><Cell col=\"9\" text=\"공급자사업번호\"/><Cell col=\"10\" text=\"매체사코드\"/><Cell col=\"11\" text=\"공급자 사업장 명\"/><Cell col=\"12\" text=\"공급받는자사업번호\"/><Cell col=\"13\" text=\"광고주코드\"/><Cell col=\"14\" text=\"공급받는자 사업장 명\"/><Cell col=\"15\" text=\"공급가액\"/><Cell col=\"16\" text=\"세액\"/><Cell col=\"17\" text=\"합계\"/><Cell col=\"18\" text=\"취소사유\"/><Cell col=\"19\" text=\"전자세금계산서번호\"/><Cell col=\"20\" text=\"재발송할 이메일\"/><Cell col=\"21\" text=\"매체사 담당자 이메일\"/><Cell col=\"22\" text=\"광고주 담당자 이메일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"none\" text=\"bind:DEND_DATE\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:PRNT_DATE\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:DTI_STATUS\" combodataset=\"dsDTI_STATUS\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:TRAN_STATUS\" combodataset=\"dsRECEIVE_STATE\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"5\" text=\"bind:RETURN_CODE\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"none\" text=\"bind:DTIX_TYPE\" combodataset=\"dsDti_type\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplay=\"edit\"/><Cell col=\"7\" displaytype=\"combo\" text=\"bind:DTIY_TYPE\" combodataset=\"dsDti_type1\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"none\" text=\"bind:TAXX_DMND\" combodataset=\"dsTax_demand\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplay=\"edit\"/><Cell col=\"9\" text=\"bind:METX_CUNM\"/><Cell col=\"10\" text=\"bind:MEDX_CODE\"/><Cell col=\"11\" text=\"bind:MEDX_CDNM\"/><Cell col=\"12\" text=\"bind:CUTX_CUNM\"/><Cell col=\"13\" text=\"bind:CUST_CODE\"/><Cell col=\"14\" text=\"bind:CUST_NAME\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAXX_AMTX\" mask=\"#,###\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAXX_VATX\" mask=\"#,###\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUMM_AMTX\" mask=\"#,###\"/><Cell col=\"18\" edittype=\"text\" text=\"bind:META_STRING\"/><Cell col=\"19\" edittype=\"readonly\" text=\"bind:CONVERSATION_ID\"/><Cell col=\"20\" edittype=\"text\" text=\"bind:SEND_EMAIL\"/><Cell col=\"21\" edittype=\"text\" text=\"bind:MELT_MLAD\"/><Cell col=\"22\" edittype=\"text\" text=\"bind:ELTR_MLAD\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\" style=\"align:center;\" text=\"합계\"/><Cell col=\"15\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;TAXX_AMTX&quot;)\"/><Cell col=\"16\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;TAXX_VATX&quot;)\"/><Cell col=\"17\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;SUMM_AMTX&quot;)\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/></Band></Format></Formats>");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Tabpage("tab1", this.tabXM);
            obj.set_text("수수료");
            obj.style.set_background("#ffffffff");
            obj.set_scrollbars("none");
            this.tabXM.addChild(obj.name, obj);
            obj = new Button("btnCANC_SEND", "absolute", null, "5", "74", "21", "110", null, this.tabXM.tab1);
            obj.set_taborder("13");
            obj.set_text("전송취소");
            obj.set_cssclass("btn_WF_Module");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Button("btnRSEN_EMAL", "absolute", null, "5", "98", "21", "10", null, this.tabXM.tab1);
            obj.set_taborder("14");
            obj.set_text("이메일 재 발송");
            obj.set_cssclass("btn_WF_Module");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", "190", "21", null, null, this.tabXM.tab1);
            obj.set_taborder("10");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Grid("grdMD_TCALXM", "absolute", "10", "30", null, null, "10", "10", this.tabXM.tab1);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("12");
            obj.set_binddataset("dsMD_TCALXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"275\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" text=\"청구일자\"/><Cell col=\"2\" text=\"발행일자\"/><Cell col=\"3\" text=\"최종상태\"/><Cell col=\"4\" text=\"전송상태\"/><Cell col=\"5\" text=\"오류코드\"/><Cell col=\"6\" text=\"적요\"/><Cell col=\"7\" text=\"세금계산서종류\"/><Cell col=\"8\" text=\"세금계산서분류\"/><Cell col=\"9\" text=\"영수구분\"/><Cell col=\"10\" text=\"공급자사업번호\"/><Cell col=\"11\" text=\"매체사코드\"/><Cell col=\"12\" text=\"공급자 사업장 명\"/><Cell col=\"13\" text=\"공급받는자사업번호\"/><Cell col=\"14\" text=\"광고주코드\"/><Cell col=\"15\" text=\"공급받는자 사업장 명\"/><Cell col=\"16\" text=\"공급가액\"/><Cell col=\"17\" text=\"세액\"/><Cell col=\"18\" text=\"합계\"/><Cell col=\"19\" text=\"취소사유\"/><Cell col=\"20\" text=\"전자세금계산서번호\"/><Cell col=\"21\" text=\"매체사 담당자 이메일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" text=\"bind:DEND_DATE\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"none\" text=\"bind:PRNT_DATE\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:DTI_STATUS\" combodataset=\"dsDTI_STATUS\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:TRAN_STATUS\" combodataset=\"dsRECEIVE_STATE\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"5\" text=\"bind:RETURN_CODE\"/><Cell col=\"6\" text=\"bind:MEMO_FILD\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"none\" text=\"bind:DTIX_TYPE\" combodataset=\"dsDti_type\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplay=\"edit\"/><Cell col=\"8\" displaytype=\"combo\" text=\"bind:DTIY_TYPE\" combodataset=\"dsDti_type1\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"9\" displaytype=\"combo\" edittype=\"none\" text=\"bind:TAXX_DMND\" combodataset=\"dsTax_demand\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplay=\"edit\"/><Cell col=\"10\" text=\"bind:CBIZ_NUMB\"/><Cell col=\"11\" text=\"bind:MEDX_CODE\"/><Cell col=\"12\" text=\"bind:CCUS_NAME\"/><Cell col=\"13\" text=\"bind:CUTX_CUNM\"/><Cell col=\"14\" text=\"bind:CUST_CODE\"/><Cell col=\"15\" text=\"bind:CUST_NAME\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAXX_AMTX\" mask=\"#,###\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAXX_VATX\" mask=\"#,###\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUMM_AMTX\" mask=\"#,###\"/><Cell col=\"19\" edittype=\"text\" text=\"bind:META_STRING\"/><Cell col=\"20\" edittype=\"readonly\" text=\"bind:CONVERSATION_ID\"/><Cell col=\"21\" text=\"bind:MELT_MLAD\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\" style=\"align:center;\" text=\"합계\"/><Cell col=\"16\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;TAXX_AMTX&quot;)\"/><Cell col=\"17\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;TAXX_VATX&quot;)\"/><Cell col=\"18\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;SUMM_AMTX&quot;)\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/></Band></Format></Formats>");
            this.tabXM.tab1.addChild(obj.name, obj);

            obj = new Static("spSearchBox01", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("133");
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
            obj.set_text("매체 세금계산서 관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 매체관리 > 회계관리 > 매체세금계산서관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
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

            obj = new Static("Static07", "absolute", "585", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("staSHRYEAR_MNTH", "absolute", "29", "71", "44", "21", null, null, this);
            obj.set_taborder("112");
            obj.set_text("년월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Div("calSHRYEAR_MNTH", "absolute", "71", "71", "100", "21", null, null, this);
            obj.set_taborder("114");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "200", "71", "52", "21", null, null, this);
            obj.set_taborder("116");
            obj.set_text("광고주");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "255", "71", "80", "21", null, null, this);
            obj.set_taborder("118");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_NAME", "absolute", "337", "71", "21", "21", null, null, this);
            obj.set_taborder("119");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "360", "71", "140", "21", null, null, this);
            obj.set_taborder("120");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "529", "71", "67", "21", null, null, this);
            obj.set_taborder("126");
            obj.set_text("매체구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRMEDX_FLAG", "absolute", "597", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("128");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("");

            obj = new Static("Static18", "absolute", "200", "97", "50", "21", null, null, this);
            obj.set_taborder("135");
            obj.set_text("매체사");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMEDX_CODE", "absolute", "255", "97", "80", "21", null, null, this);
            obj.set_taborder("136");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRMEDX_CDNM", "absolute", "337", "97", "21", "21", null, null, this);
            obj.set_taborder("137");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMEDX_CDNM", "absolute", "360", "97", "140", "21", null, null, this);
            obj.set_taborder("138");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "28", "97", "35", "21", null, null, this);
            obj.set_taborder("139");
            obj.set_text("상태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRTAXX_STAT", "absolute", "71", "97", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("140");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("");
            obj.set_innerdataset("@dsTaxstate");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("수신미승인");
            obj.set_value("I");

            obj = new Static("Static09", "absolute", "525", "129", "80", "37", null, null, this);
            obj.set_taborder("142");
            obj.set_text("h37");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "373", "167", "80", "30", null, null, this);
            obj.set_taborder("143");
            obj.set_text("h30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new ListBox("lstCUST_NAME", "absolute", "360", "93", "140", "78", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("145");
            obj.set_innerdataset("dsAUTO_NAME");
            obj.set_codecolumn("CUST_CODE");
            obj.set_datacolumn("CUST_NAME");
            obj.set_visible("false");

            obj = new Button("btnNOTICELIST", "absolute", null, "104", "130", "21", "25", null, this);
            obj.set_taborder("146");
            obj.set_text("스마트빌 공지사항");
            obj.set_cssclass("btn_WF_Module");
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
            		p.set_titletext("매체 세금계산서 관리");

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
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("MACA0060.xfdl", "script::lib_script_common.xjs");
        this.registerScript("MACA0060.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	MACA0060 매체 세금계산서 관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.11.05		최제현		Initial Created.
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
        this.sBUTTONLIST 	= "TTFFFFFF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME 	= "MACA0060"; //해당 Form에서 사용 할 Package 명
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
        	
        	this.calSHRYEAR_MNTH.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ));
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
        this.fn_Save = function (obj) {
        	//기능없음
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
        	// 기능 없음
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

        // 	if ((this.fnc_DatasetChangeCheck("dsMD_TCALXM")) && (this.fnc_Message("TMM023") == false) ) {
        // 		return false;
        // 	}
        	//년월
        	if(this.fnc_IsDate(this.calSHRYEAR_MNTH.fn_GetMonth()) == false){
        		this.fnc_Message("TMM081");
        		return false;
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
        // 	if(this.rdoSUCC_FLAG.index == 0){
        // 		this.fnc_Message("PAC001");
        // 		return false;
        // 	//미완료
        // 	}else if(this.rdoSUCC_FLAG.index == 1){
        // 		// 공통 Head 정보 필수 입력 항목 체크
        // 		for (var i = 0; i < this.dsMD_TCALXM.getRowCount(); i++) {
        // 			var cnt = i + 1;
        // 		
        // 			if (this.fnc_ToUpper(this.dsMD_TCALXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        // 			
        // 			if (this.fnc_Length(this.fnc_Trim(this.dsMD_TCALXM.getColumn(i, "PRNT_DATE"))) < 1) {
        // 				return this.fnc_CheckPostAction("TMM072", "발행일", this.dsMD_TCALXM, i, '', '');
        // 			}
        // 		}
        // 	}

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
        		sReturnString += " YEAR_MNTH=" + this.fnc_Quote(this.calSHRYEAR_MNTH.fn_GetMonth()); 	//년월
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.edtSHRCUST_CODE.value);     //광고주코드
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value);     //광고주코드
        		sReturnString += " MEDX_CODE=" + this.fnc_Quote(this.edtSHRMEDX_CODE.value);    //매체사
        		sReturnString += " MEDX_FLAG=" + this.fnc_Quote(this.cmbSHRMEDX_FLAG.value);    //매체구분
        		sReturnString += " TAXX_STAT=" + this.fnc_Quote(this.cmbSHRTAXX_STAT.value);	//세금계산서 상태
        		sReturnString += " BUSI_FLAG=B"; 	//위탁,수수료구분
        		
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " YEAR_MNTH=" + this.fnc_Quote(this.calSHRYEAR_MNTH.fn_GetMonth()); 	//년월
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.edtSHRCUST_CODE.value);     //광고주코드
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value);     //광고주코드
        		sReturnString += " MEDX_CODE=" + this.fnc_Quote(this.edtSHRMEDX_CODE.value);    //매체사
        		sReturnString += " MEDX_FLAG=" + this.fnc_Quote(this.cmbSHRMEDX_FLAG.value);    //매체구분
        		sReturnString += " TAXX_STAT=" + this.fnc_Quote(this.cmbSHRTAXX_STAT.value);	//세금계산서 상태
        		sReturnString += " BUSI_FLAG=A"; 	//위탁,수수료 구분
        	} else if (sKind == "SEARCH02") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        	} else if (sKind == "DELETE00" || sKind == "DELETE01") {
        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		
        	} else if (sKind == "UPDATE00" || sKind == "UPDATE01") {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		
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

        	if (sMethodName == "SEARCH00" || sMethodName == "SEARCH01") {
        		this.fnc_Information(this.tabXM.tab0.stInformation, this.dsMD_TCALXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "SEARCH02") {
        		//자동완성 세팅
        		this.fn_AutoSetting();
        	}// else if (sMethodName == "SEARCH02" || sMethodName == "SEARCH03") {
        	//	this.fnc_Information(this.tabXM.tab1.stInformation, this.dsMD_TCALXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	//} 
        	else if (sMethodName == "DELETE00" || sMethodName == "DELETE01") {
        		this.fnc_Message("TMM041");
        		this.fn_Search();
        	} else if (sMethodName == "UPDATE00" || sMethodName == "UPDATE01") {
        		this.fnc_Message("MAC004");
        	} else if (sMethodName == "GetCommCode") {
        		//콤보 일경우
        		
        		// 상단 매체구분 콤보
        		this.fnc_GetComboMEDX_FLAG();
        	}	
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
         

        /*---------------------------+
         |   세금계산서 전송 취소 |
         +---------------------------*/
        this.tabXM_tab1_btnCANC_SEND_onclick = function(obj,e)
        {	
        	if (!this.fn_DeleteItemCheck()) return;
        	
        	//위수탁세금계산서 전송취소
        	if(this.tabXM.tabindex==0){
        		if(this.fnc_Message("PAC007")){
        			var sMethodName = "DELETE00";
        			var sInDataSet  = "dsMD_TCALXM=dsMD_TCALXM:U";
        			var sOutDataSet = "";
        			var sArgument   = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        		}
        	//수수료세금계산서 전송취소
        	}else if(this.tabXM.tabindex==1){
        		if(this.fnc_Message("PAC007")){
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
        		}
        	}
        		
        	if(iCNT==0){
        		this.fnc_Message("PCM001");
        		return false;
        	}	
        	
        	if(this.cmbSHRTAXX_STAT.value!='I'){
        		this.fnc_Message("MAC001");
        		return false;
        	}
        	
        	return true;
        }

        /*---------------------------+
         |     이메일 재전송  	  |
         +---------------------------*/
        this.btnRSEN_EMAL_onclick = function(obj,e)
        {
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsMD_TCALXM.getRowCount(); i++) {
        		
        		if (this.dsMD_TCALXM.getColumn(i,"CHEK_FILD") == 0) continue;
        	
        		//위수탁의 경우 메일을 보낼 담당자 이메일 주소를 입력하지 않을 시 return false
        		if(this.tabXM.tabindex == 0 && this.fnc_Length(this.fnc_Trim(this.dsMD_TCALXM.getColumn(i, "SEND_EMAIL"))) < 1){
        			this.fnc_Message("MAC019");
        			return false;
        		//수수료의 경우 매체사 담당자 이메일 주소를 입력하지 않을 시 return false
        		}else if(this.tabXM.tabindex == 1 &&  this.fnc_Length(this.fnc_Trim(this.dsMD_TCALXM.getColumn(i, "MELT_MLAD"))) < 1){
        			this.fnc_Message("MAC020");
        			return false;
        		}
        	}

        	//수신미승인인경우만 이메일 재발송가능
        	if(this.cmbSHRTAXX_STAT.value != 'I'){
        		this.fnc_Message("MAC012");
        		return false;
        	}
        	
        	if(this.cmbSHRTAXX_STAT.value == 'I'){
        		if(this.tabXM.tabindex==0){
        			if(this.fnc_Message("MAC003")){
        				var sMethodName = "UPDATE00";
        				var sInDataSet  = "dsMD_TCALXM=dsMD_TCALXM:U";
        				var sOutDataSet = "";
        				var sArgument   = this.fn_CreateArgument(sMethodName);
        				this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        			}
        		}else if(this.tabXM.tabindex==1){
        			if(this.fnc_Message("MAC003")){
        				var sMethodName = "UPDATE01";
        				var sInDataSet  = "dsMD_TCALXM=dsMD_TCALXM:U";
        				var sOutDataSet = "";
        				var sArgument   = this.fn_CreateArgument(sMethodName);
        				this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        			}
        		}
        	}
        }

        
        /*---------------------------+
         |     세금계산서보기  	  |
         +---------------------------*/
        this.tabXM_tab1_btnVIEW_TAXX_onclick = function(obj,e)
        {
        	
        }

        
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

        this.fn_HelpDialogeSHRMEDX_CODE = function(obj,e)
        {
        	var arrParam = new Array();

        	// 조회조건 - 광고주이름
        	if ((obj.name == 'imgHelpSHRMEDX_CDNM') || (obj.name == 'edtSHRMEDX_CDNM')) {

        		arrParam[0] = 'MCM0009';                                 //Popup ID
        		arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtSHRMEDX_CDNM';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtSHRMEDX_CODE,edtSHRMEDX_CDNM';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1';                                     //Mapping Column Index
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);                                //Mapping Column Index
        	}
        }

        /*----------------------------------+
         |  입력을 위한 상단 매체구분콤보|
         +----------------------------------*/
        //매체구분
        this.fnc_GetComboMEDX_FLAG = function()
        {	
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsMEDX_FLAG"; 			   //받을 Dataset명
        			arrParam1[1] = "MDM0009"; 	  			   //조회 콤보 ID
        			arrParam1[2] = "ALL"; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""					   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,cmbSHRMEDX_FLAG,dsMEDX_FLAG,0";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
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

        this.tabXM_tab0_grdMD_TCALXM_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.tabXM.tab0.grdMD_TCALXM.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsMD_TCALXM.getRowCount(); i++) {
        			this.dsMD_TCALXM.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.tabXM.tab0.grdMD_TCALXM.setCellProperty("Head", 0, "expr", isAllChecked);
        	}
        }
        /*------------------+
         |  자동목록조회  |
         +------------------*/
         //탭 인덱스 변환시
        this.tabXM_onchanged = function(obj,e)
        {	
        	this.fnc_GridSetting(obj.components[e.postindex]);
        	this.fn_Search();
        }

        //콤보값변화시
        this.cmbSHRMEDX_FLAG_canitemchange = function(obj,e)
        {
        	this.fn_Search();
        }

        
        //콤보값변화시
        this.cmbSHRTAXX_STAT_onitemchanged = function(obj,e)
        {
        	if(this.cmbSHRTAXX_STAT.value=='I'){
        		this.tabXM.tab0.btnCANC_SEND.set_visible(true);
        		this.tabXM.tab1.btnCANC_SEND.set_visible(true);
        		this.tabXM.tab0.btnRSEN_EMAL.set_visible(true);
        		this.tabXM.tab1.btnRSEN_EMAL.set_visible(true);
        	}else{
        		this.tabXM.tab0.btnCANC_SEND.set_visible(false);
        		this.tabXM.tab1.btnCANC_SEND.set_visible(false);
        		this.tabXM.tab0.btnRSEN_EMAL.set_visible(false);
        		this.tabXM.tab1.btnRSEN_EMAL.set_visible(false);
        	}
        	this.fn_Search();
        }

        

        this.fn_onItemChanged = function(obj,e)
        {
        	this.fn_Search();
        }

        //이름을 지우면 코드가 지워짐
        this.edtSHRMEDX_CDNM_ontextchanged = function(obj,e)
        {
        	this.edtSHRMEDX_CODE.set_value('');
        }

        
        //------------------------------자동완성시작-----------------------------------

        //모든 거래처명 가져오기
        this.fn_GetCUST_NAME = function (obj) {

        	this.fnc_DatasetClear("dsAUTO_NAME");

        	var sMethodName = "SEARCH02";
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
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.tabXM.addEventHandler("onchanged", this.tabXM_onchanged, this);
            this.tabXM.tab0.btnCANC_SEND.addEventHandler("onclick", this.tabXM_tab1_btnCANC_SEND_onclick, this);
            this.tabXM.tab0.btnRSEN_EMAL.addEventHandler("onclick", this.btnRSEN_EMAL_onclick, this);
            this.tabXM.tab0.grdMD_TCALXM.addEventHandler("onheadclick", this.tabXM_tab0_grdMD_TCALXM_onheadclick, this);
            this.tabXM.tab0.grdMD_TCALXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabXM.tab0.grdMD_TCALXM.addEventHandler("ontextchanged", this.tabXM_tab0_grdMD_CUSTXM_ontextchanged, this);
            this.tabXM.tab0.grdMD_TCALXM.addEventHandler("onkeyup", this.tabXM_tab0_grdMD_TCALXM_onkeyup, this);
            this.tabXM.tab1.btnCANC_SEND.addEventHandler("onclick", this.tabXM_tab1_btnCANC_SEND_onclick, this);
            this.tabXM.tab1.btnRSEN_EMAL.addEventHandler("onclick", this.btnRSEN_EMAL_onclick, this);
            this.tabXM.tab1.grdMD_TCALXM.addEventHandler("onheadclick", this.tabXM_tab0_grdMD_TCALXM_onheadclick, this);
            this.tabXM.tab1.grdMD_TCALXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabXM.tab1.grdMD_TCALXM.addEventHandler("ontextchanged", this.tabXM_tab0_grdMD_CUSTXM_ontextchanged, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.staSHRYEAR_MNTH.addEventHandler("onclick", this.staSHRCOMM_CODE_onclick, this);
            this.calSHRYEAR_MNTH.addEventHandler("onmouseenter", this.fn_onclickSHRYEAR_MNTH, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCUST_NAME.addEventHandler("onclick", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.edtSHRCUST_NAME.addEventHandler("onkeyup", this.edtSHRCUST_NAME_onkeyup, this);
            this.edtSHRCUST_NAME.addEventHandler("ontextchanged", this.edtSHRCUST_NAME_ontextchanged, this);
            this.edtSHRCUST_NAME.addEventHandler("onkeydown", this.edtSHRCUST_NAME_onkeydown, this);
            this.cmbSHRMEDX_FLAG.addEventHandler("onitemchanged", this.fn_onItemChanged, this);
            this.cmbSHRMEDX_FLAG.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRMEDX_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRMEDX_CDNM.addEventHandler("onclick", this.fn_HelpDialogeSHRMEDX_CODE, this);
            this.edtSHRMEDX_CDNM.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRMEDX_CODE, this);
            this.edtSHRMEDX_CDNM.addEventHandler("ontextchanged", this.edtSHRMEDX_CDNM_ontextchanged, this);
            this.cmbSHRTAXX_STAT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRTAXX_STAT.addEventHandler("onitemchanged", this.cmbSHRTAXX_STAT_onitemchanged, this);
            this.lstCUST_NAME.addEventHandler("onitemclick", this.lstCUST_NAME_onitemclick, this);
            this.lstCUST_NAME.addEventHandler("onkeydown", this.lstCUST_NAME_onkeydown, this);
            this.btnNOTICELIST.addEventHandler("onclick", this.btnNOTICELIST_onclick, this);

        };

        this.loadIncludeScript("MACA0060.xfdl");
        this.loadPreloadList();
       
    };
}
)();
