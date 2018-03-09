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
                this.set_name("MACA0050");
                this.set_titletext("세금계산서발송");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_TCALXM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\" value=\"\"/><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"METX_CUNM\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"CUTX_CUNM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_AMTX\" type=\"INT\" size=\"256\"/><Column id=\"TAXX_VATX\" type=\"INT\" size=\"256\"/><Column id=\"SUMM_AMTX\" type=\"INT\" size=\"256\"/><Column id=\"TAXX_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"DIRC_TION\" type=\"STRING\" size=\"256\"/><Column id=\"DOCU_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ATTC_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_CONN\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_SERV\" type=\"STRING\" size=\"256\"/><Column id=\"BUSI_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"OWNR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"DTL1_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL2_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"MOWN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MADD_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MDT1_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"MDT2_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"TSEQ_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"TAXY_MONT\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SEQX_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"DTIX_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_DMND\" type=\"STRING\" size=\"256\"/><Column id=\"ELTR_MLAD\" type=\"STRING\" size=\"256\"/><Column id=\"CCUS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CBIZ_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"COWN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CADD_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MELT_MLAD\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"DTIY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TAXY_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"DEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"RETURN_DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CONVERSATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RETURN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ISSUE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AMEND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DTI_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MBSN_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"MBSN_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CBSN_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"CBSN_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CELT_MLAD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDti_type", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">세금계산서</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">수정세금계산서</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">계산서</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">수정계산서</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTax_demand", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">영수</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">청구</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsAUTO_NAME", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDti_type1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">일반</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">영세율</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">일반 위수탁</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">수입</Col></Row><Row><Col id=\"NAME\">영세율 위수탁</Col><Col id=\"CODE\">05</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRECEIVE_STATE", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">C</Col><Col id=\"NAME\">전송</Col></Row><Row><Col id=\"CODE\">E</Col><Col id=\"NAME\">에러</Col></Row><Row><Col id=\"CODE\">T</Col><Col id=\"NAME\">전송중</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDTI_STATUS", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">I</Col><Col id=\"NAME\">수신미승인</Col></Row><Row><Col id=\"CODE\">C</Col><Col id=\"NAME\">수신승인</Col></Row><Row><Col id=\"CODE\">R</Col><Col id=\"NAME\">수신거부</Col></Row><Row><Col id=\"CODE\">O</Col><Col id=\"NAME\">취소완료</Col></Row></Rows>");
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
            obj.set_text("매체 세금계산서 발송");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 >매체관리>회계관리>세금계산서발송");
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

            obj = new Static("Static11", "absolute", "511", "71", "35", "21", null, null, this);
            obj.set_taborder("122");
            obj.set_text("전송");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("126");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoSUCC_FLAG", "absolute", "558", "71", "171", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdoSUCC_FLAG_innerdataset = new Dataset("rdoSUCC_FLAG_innerdataset", this.rdoSUCC_FLAG);
            rdoSUCC_FLAG_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">완료</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">미완료/오류</Col></Row></Rows>");
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

            obj = new Static("Static00", "absolute", "756", "71", "64", "21", null, null, this);
            obj.set_taborder("144");
            obj.set_text("매체구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRMEDX_FLAG", "absolute", "824", "71", "103", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("145");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("");
            obj.set_value("null");

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
            obj = new Static("stInformation", "absolute", "10", "9", "284", "21", null, null, this.tabXM.tab0);
            obj.set_taborder("140");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Grid("grdMD_TCALXM", "absolute", "10", "30", null, null, "10", "10", this.tabXM.tab0);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("147");
            obj.set_binddataset("dsMD_TCALXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"133\"/><Column size=\"0\"/><Column size=\"148\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" text=\"청구일자\"/><Cell col=\"2\" text=\"발행일자\"/><Cell col=\"3\" text=\"최종상태\"/><Cell col=\"4\" text=\"전송상태\"/><Cell col=\"5\" text=\"상태코드\"/><Cell col=\"6\" text=\"세금계산서종류\"/><Cell col=\"7\" text=\"세금계산서분류\"/><Cell col=\"8\" text=\"영수구분\"/><Cell col=\"9\" text=\"공급자사업번호\"/><Cell col=\"10\" text=\"매체사코드\"/><Cell col=\"11\" text=\"공급자 사업장 명\"/><Cell col=\"12\" text=\"공급받는자사업번호\"/><Cell col=\"13\" text=\"광고주코드\"/><Cell col=\"14\" text=\"공급받는자 사업장 명\"/><Cell col=\"15\" text=\"공급가액\"/><Cell col=\"16\" text=\"세액\"/><Cell col=\"17\" text=\"합계\"/><Cell col=\"18\" text=\"사업유형\"/><Cell col=\"19\" text=\"광고주대표\"/><Cell col=\"20\" text=\"매체구분\"/><Cell col=\"21\" text=\"주소\"/><Cell col=\"22\" text=\"상세주소1\"/><Cell col=\"23\" text=\"상세주소2\"/><Cell col=\"24\" text=\"거래명세서년월\"/><Cell col=\"25\" text=\"거래명세서번호\"/><Cell col=\"26\" text=\"세금계산서년월\"/><Cell col=\"27\" text=\"세금계산서번호\"/><Cell col=\"28\" text=\"개별청약서번호\"/><Cell col=\"29\" text=\"매체사 대표자 성명\"/><Cell col=\"30\" text=\"매체사 주소\"/><Cell col=\"31\" text=\"매체사주소1\"/><Cell col=\"32\" text=\"매체사주소2\"/><Cell col=\"33\" text=\"담당자이메\"/><Cell col=\"34\" text=\"수탁자상호\"/><Cell col=\"35\" text=\"수탁자 사업자번호\"/><Cell col=\"36\" text=\"수탁자대표자성명\"/><Cell col=\"37\" text=\"수탁자주소\"/><Cell col=\"38\" text=\"전자세금계산서번호\"/><Cell col=\"39\" text=\"매체사 담당자 이메일\"/><Cell col=\"40\" text=\"광고주 담당자 이메일\"/><Cell col=\"41\" text=\"광고주 담당자 이메일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:DEND_DATE\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"none\" text=\"bind:PRNT_DATE\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:DTI_STATUS\" combodataset=\"dsDTI_STATUS\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"4\" displaytype=\"combo\" style=\"background2: ;\" text=\"bind:TRAN_STATUS\" combodataset=\"dsRECEIVE_STATE\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"5\" text=\"bind:RETURN_CODE\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"none\" text=\"bind:DTIX_TYPE\" combodataset=\"dsDti_type\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplay=\"edit\"/><Cell col=\"7\" displaytype=\"combo\" text=\"bind:DTIY_TYPE\" combodataset=\"dsDti_type1\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"none\" text=\"bind:TAXX_DMND\" combodataset=\"dsTax_demand\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplay=\"edit\"/><Cell col=\"9\" text=\"bind:METX_CUNM\"/><Cell col=\"10\" text=\"bind:MEDX_CODE\"/><Cell col=\"11\" text=\"bind:MEDX_CDNM\"/><Cell col=\"12\" text=\"bind:CUTX_CUNM\"/><Cell col=\"13\" text=\"bind:CUST_CODE\"/><Cell col=\"14\" text=\"bind:CUST_NAME\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAXX_AMTX\" mask=\"#,###\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAXX_VATX\" mask=\"#,###\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUMM_AMTX\" mask=\"#,###\"/><Cell col=\"18\" text=\"bind:BUSI_FLAG\"/><Cell col=\"19\" text=\"bind:OWNR_NAME\"/><Cell col=\"20\" text=\"bind:MEDX_FLAG\"/><Cell col=\"21\" text=\"bind:ADDR_DESC\"/><Cell col=\"22\" text=\"bind:DTL1_ADDR\"/><Cell col=\"23\" text=\"bind:DTL2_ADDR\"/><Cell col=\"24\" text=\"bind:YEAR_MNTH\"/><Cell col=\"25\" text=\"bind:TSEQ_FILD\"/><Cell col=\"26\" text=\"bind:TAXY_MONT\"/><Cell col=\"27\" text=\"bind:TAXX_NUMB\"/><Cell col=\"28\" text=\"bind:SEQX_FILD\"/><Cell col=\"29\" text=\"bind:MOWN_NAME\"/><Cell col=\"30\" text=\"bind:MADD_DESC\"/><Cell col=\"31\" text=\"bind:MDT1_ADDR\"/><Cell col=\"32\" text=\"bind:MDT2_ADDR\"/><Cell col=\"33\" text=\"bind:ELTR_MLAD\"/><Cell col=\"34\" text=\"bind:CCUS_NAME\"/><Cell col=\"35\" text=\"bind:CBIZ_NUMB\"/><Cell col=\"36\" text=\"bind:COWN_NAME\"/><Cell col=\"37\" text=\"bind:CADD_DESC\"/><Cell col=\"38\" edittype=\"readonly\" text=\"bind:CONVERSATION_ID\"/><Cell col=\"39\" edittype=\"text\" text=\"bind:MELT_MLAD\"/><Cell col=\"40\" edittype=\"text\" text=\"bind:ELTR_MLAD\"/><Cell col=\"41\" edittype=\"text\" text=\"bind:ELTR_MLAD\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\" style=\"align:center;\" text=\"합계\"/><Cell col=\"15\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;TAXX_AMTX&quot;)\"/><Cell col=\"16\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;TAXX_VATX&quot;)\"/><Cell col=\"17\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;SUMM_AMTX&quot;)\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/><Cell col=\"32\"/><Cell col=\"33\"/><Cell col=\"34\"/><Cell col=\"35\"/><Cell col=\"36\"/><Cell col=\"37\"/><Cell col=\"38\"/><Cell col=\"39\"/><Cell col=\"40\"/><Cell col=\"41\"/></Band></Format></Formats>");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Button("btnDELE_TAXX", "absolute", null, "5", "110", "21", "10", null, this.tabXM.tab0);
            obj.set_taborder("148");
            obj.set_text("미완료 처리");
            obj.set_cssclass("btn_WF_Module");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Button("btnSEND_TAXX", "absolute", null, "5", "110", "21", "10", null, this.tabXM.tab0);
            obj.set_taborder("146");
            obj.set_text("세금계산서전송");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("true");
            this.tabXM.tab0.addChild(obj.name, obj);
            obj = new Tabpage("tab1", this.tabXM);
            obj.set_text("수수료");
            obj.style.set_background("#ffffffff");
            obj.set_scrollbars("none");
            this.tabXM.addChild(obj.name, obj);
            obj = new Static("stInformation", "absolute", "10", "9", "174", "21", null, null, this.tabXM.tab1);
            obj.set_taborder("2");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Grid("grdMD_TCALXM", "absolute", "10", "30", null, null, "10", "10", this.tabXM.tab1);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("8");
            obj.set_binddataset("dsMD_TCALXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.getSetter("sCommonGubntaborder").set("4");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"0\"/><Column size=\"128\"/><Column size=\"0\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" text=\"청구일자\"/><Cell col=\"2\" text=\"발행일자\"/><Cell col=\"3\" text=\"최종상태\"/><Cell col=\"4\" text=\"전송상태\"/><Cell col=\"5\" text=\"상태코드\"/><Cell col=\"6\" text=\"세금계산서종류\"/><Cell col=\"7\" text=\"세금계산서분류\"/><Cell col=\"8\" text=\"영수구분\"/><Cell col=\"9\" text=\"공급자사업번호\"/><Cell col=\"10\" text=\"공급자코드\"/><Cell col=\"11\" text=\"공급자 사업장 명\"/><Cell col=\"12\" text=\"공급받는자사업번호\"/><Cell col=\"13\" text=\"매체사코드\"/><Cell col=\"14\" text=\"공급받는자 사업장 명\"/><Cell col=\"15\" text=\"공급가액\"/><Cell col=\"16\" text=\"세액\"/><Cell col=\"17\" text=\"합계\"/><Cell col=\"18\" text=\"사업유형\"/><Cell col=\"19\" text=\"광고주대표\"/><Cell col=\"20\" text=\"매체구분\"/><Cell col=\"21\" text=\"주소\"/><Cell col=\"22\" text=\"상세주소1\"/><Cell col=\"23\" text=\"상세주소2\"/><Cell col=\"24\" text=\"거래명세서년월\"/><Cell col=\"25\" text=\"거래명세서번호\"/><Cell col=\"26\" text=\"세금계산서년월\"/><Cell col=\"27\" text=\"세금계산서번호\"/><Cell col=\"28\" text=\"개별청약서번호\"/><Cell col=\"29\" text=\"매체사 대표자 성명\"/><Cell col=\"30\" text=\"매체사 주소\"/><Cell col=\"31\" text=\"매체사주소1\"/><Cell col=\"32\" text=\"매체사주소2\"/><Cell col=\"33\" text=\"담당자이메\"/><Cell col=\"34\" text=\"수탁자대표자성명\"/><Cell col=\"35\" text=\"수탁자주소\"/><Cell col=\"36\" text=\"광고주코드\"/><Cell col=\"37\" text=\"광고주 사업자번호\"/><Cell col=\"38\" text=\"광고주명\"/><Cell col=\"39\" text=\"담당자메일\"/><Cell col=\"40\" text=\"전자세금계산서번호\"/><Cell col=\"41\" text=\"매체사 담당자 이메일\"/><Cell col=\"42\" text=\"매체사 담당자 이메일\"/><Cell col=\"43\" text=\"광고주 담당자 이메일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:DEND_DATE\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"none\" text=\"bind:PRNT_DATE\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:DTI_STATUS\" combodataset=\"dsDTI_STATUS\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:TRAN_STATUS\" combodataset=\"dsRECEIVE_STATE\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"5\" text=\"bind:RETURN_CODE\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"none\" text=\"bind:DTIX_TYPE\" combodataset=\"dsDti_type\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplay=\"edit\"/><Cell col=\"7\" displaytype=\"combo\" text=\"bind:DTIY_TYPE\" combodataset=\"dsDti_type1\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"none\" text=\"bind:TAXX_DMND\" combodataset=\"dsTax_demand\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplay=\"edit\"/><Cell col=\"9\" text=\"bind:CBIZ_NUMB\"/><Cell col=\"10\" text=\"0000000896\"/><Cell col=\"11\" text=\"bind:CCUS_NAME\"/><Cell col=\"12\" text=\"bind:METX_CUNM\"/><Cell col=\"13\" text=\"bind:MEDX_CODE\"/><Cell col=\"14\" text=\"bind:MEDX_CDNM\"/><Cell col=\"15\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:TAXX_AMTX\" mask=\"#,###\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAXX_VATX\" mask=\"#,###\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUMM_AMTX\" mask=\"#,###\"/><Cell col=\"18\" text=\"bind:BUSI_FLAG\"/><Cell col=\"19\" text=\"bind:OWNR_NAME\"/><Cell col=\"20\" text=\"bind:MEDX_FLAG\"/><Cell col=\"21\" text=\"bind:ADDR_DESC\"/><Cell col=\"22\" text=\"bind:DTL1_ADDR\"/><Cell col=\"23\" text=\"bind:DTL2_ADDR\"/><Cell col=\"24\" text=\"bind:YEAR_MNTH\"/><Cell col=\"25\" text=\"bind:TSEQ_FILD\"/><Cell col=\"26\" text=\"bind:TAXY_MONT\"/><Cell col=\"27\" text=\"bind:TAXX_NUMB\"/><Cell col=\"28\" text=\"bind:SEQX_FILD\"/><Cell col=\"29\" text=\"bind:MOWN_NAME\"/><Cell col=\"30\" text=\"bind:MADD_DESC\"/><Cell col=\"31\" text=\"bind:MDT1_ADDR\"/><Cell col=\"32\" text=\"bind:MDT2_ADDR\"/><Cell col=\"33\" text=\"bind:ELTR_MLAD\"/><Cell col=\"34\" text=\"bind:COWN_NAME\"/><Cell col=\"35\" text=\"bind:CADD_DESC\"/><Cell col=\"36\" text=\"bind:CUST_CODE\"/><Cell col=\"37\" text=\"bind:CUTX_CUNM\"/><Cell col=\"38\" text=\"bind:CUST_NAME\"/><Cell col=\"39\" text=\"bind:MELT_MLAD\"/><Cell col=\"40\" edittype=\"readonly\" text=\"bind:CONVERSATION_ID\"/><Cell col=\"41\" text=\"bind:MELT_MLAD\"/><Cell col=\"42\" text=\"bind:MELT_MLAD\"/><Cell col=\"43\" text=\"bind:ELTR_MLAD\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\" style=\"align:center;\" text=\"합계\"/><Cell col=\"15\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;TAXX_AMTX&quot;)\"/><Cell col=\"16\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;TAXX_AMTX&quot;)\"/><Cell col=\"17\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;SUMM_AMTX&quot;)\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/><Cell col=\"32\"/><Cell col=\"33\"/><Cell col=\"34\"/><Cell col=\"35\"/><Cell col=\"36\"/><Cell col=\"37\"/><Cell col=\"38\"/><Cell col=\"39\"/><Cell col=\"40\"/><Cell col=\"41\"/><Cell col=\"42\"/><Cell col=\"43\"/></Band></Format></Formats>");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Button("btnDELE_TAXX", "absolute", null, "5", "110", "21", "10", null, this.tabXM.tab1);
            obj.set_taborder("9");
            obj.set_text("미완료 처리");
            obj.set_cssclass("btn_WF_Module");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Button("btnSEND_TAXX", "absolute", null, "5", "110", "21", "10", null, this.tabXM.tab1);
            obj.set_taborder("7");
            obj.set_text("세금계산서전송");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("true");
            this.tabXM.tab1.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "516", "0", "80", "30", null, null, this.tabXM.tab1);
            obj.set_taborder("10");
            obj.set_text("h30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.tabXM.tab1.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "525", "103", "80", "37", null, null, this);
            obj.set_taborder("149");
            obj.set_text("h37");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "381", "141", "80", "30", null, null, this);
            obj.set_taborder("150");
            obj.set_text("h30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new ListBox("lstCUST_NAME", "absolute", "341", "93", "140", "78", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("151");
            obj.set_innerdataset("dsAUTO_NAME");
            obj.set_codecolumn("CUST_CODE");
            obj.set_datacolumn("CUST_NAME");
            obj.set_visible("false");


            
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
            		p.set_titletext("세금계산서발송");

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
        this.addIncludeScript("MACA0050.xfdl", "script::lib_script_common.xjs");
        this.registerScript("MACA0050.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	MACA0050 매체 세금계산서 발송
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.11.04		최제현		Initial Created.
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
        this.sPACKAGENAME 	= "MACA0050"; //해당 Form에서 사용 할 Package 명
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
        	this.cmbSHRMEDX_FLAG.set_value('A00A');
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
        		for (var i = 0; i < this.dsMD_TCALXM.getRowCount(); i++) {
        			var cnt = i + 1;
        		
        			if (this.fnc_ToUpper(this.dsMD_TCALXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        			
        			if (this.fnc_Length(this.fnc_Trim(this.dsMD_TCALXM.getColumn(i, "PRNT_DATE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "발행일", this.dsMD_TCALXM, i, '', '');
        			}
        		}
        	}

        	return true;
        }

        this.fn_SaveItemCheckDel = function () {
        	
        	if(this.rdoSUCC_FLAG.index == 1)
        	{
        		this.fnc_Message("PAC004");
        		return  false;
        	}
        	
        	var sDTI_STATUS = this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition, "DTI_STATUS")
        	var sTRAN_STATUS = this.dsMD_TCALXM.getColumn(this.dsMD_TCALXM.rowposition, "TRAN_STATUS")
        	

        	//최소 완료가 수신승인되어야 취소가 가능
        	if((sDTI_STATUS == 'O') && (sTRAN_STATUS == 'C')){
        	
        			return true;
        	}else if((sDTI_STATUS == 'I') && (sTRAN_STATUS == "E")){
        	
        			return true;
        	}else{
        			this.fnc_Message("TMM300","정상처리 된 내역을 전자세금계산서 취소 할 수 없습니다.");
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
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " YEAR_MNTH=" + this.fnc_Quote(this.calSHRYEAR_MNTH.fn_GetMonth()); 	//년월
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.edtSHRCUST_CODE.value);     //광고주코드
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value);     //광고주코드
        		sReturnString += " MEDX_FLAG=" + this.fnc_Quote(this.cmbSHRMEDX_FLAG.value);    //매체구분
        		sReturnString += " EMPL_CODE=" + this.fnc_Quote(application.GBL_EMPLNO);		//사원번호
        		sReturnString += " BUSI_FLAG=B"; 	//위탁,수수료구분
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " YEAR_MNTH=" + this.fnc_Quote(this.calSHRYEAR_MNTH.fn_GetMonth()); 	//년월
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.edtSHRCUST_CODE.value);     //광고주코드
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value);     //광고주코드
        		sReturnString += " MEDX_FLAG=" + this.fnc_Quote(this.cmbSHRMEDX_FLAG.value);    //매체구분
        		sReturnString += " BUSI_FLAG=B"; 	//위탁,수수료 구분
        	} else if (sKind == "SEARCH02") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " YEAR_MNTH=" + this.fnc_Quote(this.calSHRYEAR_MNTH.fn_GetMonth()); 	//년월
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.edtSHRCUST_CODE.value);     //광고주코드
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value);     //광고주코드
        		sReturnString += " MEDX_FLAG=" + this.fnc_Quote(this.cmbSHRMEDX_FLAG.value);    //매체구분
        		sReturnString += " EMPL_CODE=" + this.fnc_Quote(application.GBL_EMPLNO);		//사원번호
        		sReturnString += " BUSI_FLAG=A"; 	//위탁,수수료 구분
        	} else if (sKind == "SEARCH03") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " YEAR_MNTH=" + this.fnc_Quote(this.calSHRYEAR_MNTH.fn_GetMonth()); 	//년월
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.edtSHRCUST_CODE.value);     //광고주코드
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value);     //광고주코드
        		sReturnString += " MEDX_FLAG=" + this.fnc_Quote(this.cmbSHRMEDX_FLAG.value);    //매체구분
        		sReturnString += " BUSI_FLAG=A"; 	//위탁,수수료 구분
        	} else if (sKind == "SEARCH04") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        	} else if (sKind == "SAVE00" || sKind == "SAVE01" || sKind == "SAVE02") {

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
        	} else if (sMethodName == "SEARCH02" || sMethodName == "SEARCH03") {
        		this.fnc_Information(this.tabXM.tab1.stInformation, this.dsMD_TCALXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "SEARCH04") {
        		//자동완성 세팅
        		this.fn_AutoSetting();
        	} else if (sMethodName == "SAVE00" || sMethodName == "SAVE01" || sMethodName == "SAVE02" ) {
        		this.fnc_Information(this.tabXM.tab0.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	}  else if (sMethodName == "GetCommCode") {
        		//콤보 일경우
        		
        		// 상단 매체구분 콤보
        		this.fnc_GetComboMEDX_FLAG();
        	}	
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
         
        /*---------------------------+
         |     세금계산서 전송     |
         +---------------------------*/
        this.btnSEND_TAXX_onclick = function(obj,e)
        {
        	
        	
        	//체크가 되어있으면 부서와 사원을 입력.
        	for(var i = 0;i<this.dsMD_TCALXM.rowcount;i++){
        		
        		if(this.dsMD_TCALXM.getColumn(i,"CHEK_FILD")=='1'){
        		
        			//발송된 세금계산서체크
        			if(this.dsMD_TCALXM.getColumn(i,"TRAN_STATUS")!=''){
        				this.fnc_Message("MAC017");
        				return false;
        			}
        		
        			this.dsMD_TCALXM.setColumn(i, "DEPT_CODE",application.GBL_DEPTCD);
        			this.dsMD_TCALXM.setColumn(i, "DEPT_NAME",application.GBL_DEPTNM);
        			this.dsMD_TCALXM.setColumn(i, "EMPL_CODE",application.GBL_EMPLNO);
        			this.dsMD_TCALXM.setColumn(i, "EMPL_NAME",application.GBL_USERNM);
        		}
        	}

        	
        	if(this.tabXM.tabindex==0){
        		if(this.fnc_Message("PAC006")){
        			var sMethodName = "SAVE00";
        			var sInDataSet  = "dsMD_TCALXM=dsMD_TCALXM:U";
        			var sOutDataSet = "";
        			var sArgument   = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        		}
        	}else if(this.tabXM.tabindex==1){
        		if(this.fnc_Message("PAC006")){
        			var sMethodName = "SAVE01";
        			var sInDataSet  = "dsMD_TCALXM=dsMD_TCALXM:U";
        			var sOutDataSet = "";
        			var sArgument   = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        		}
        	}	
        }

        /*---------------------------+
         |        미발송처리        |
         +---------------------------*/
        this.btnDELE_TAXX_onclick = function(obj,e)
        {
        	if (!this.fn_SaveItemCheckDel()) return;
        	
        			//업데이트 컨트롤을 변경해야 한다.
        		this.dsMD_TCALXM.set_updatecontrol(false);
        	
        		//업데이트컨트롤 선택된 데이터 업데이트로 변경
        		var bSucc = this.dsMD_TCALXM.setRowType(this.dsMD_TCALXM.rowposition, Dataset.ROWTYPE_UPDATE);
        		
        		this.dsMD_TCALXM.set_updatecontrol(true);
        	
        	if(this.fnc_Message("TMM140","전자세금계산서 데이터를 취소합니다. \n  잘못 발행된 데이터를 재발행 가능하도록 변경 하시겠습까?")){
        		var sMethodName = "SAVE02";
        		var sInDataSet  = "dsMD_TCALXM=dsMD_TCALXM:U";
        		var sOutDataSet = "";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        		
        	}
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

        /*--------------------------------+
         |  발행상태 라디오버튼 변경시 |
         +--------------------------------*/
        this.rdoSUCC_FLAG_onitemchanged = function(obj,e)
        {	
        	this.fnc_DatasetClear("dsMD_TCALXM");
        	//완료
        	if(this.rdoSUCC_FLAG.index==0){
        		this.tabXM.tab0.btnSEND_TAXX.set_visible(false);
        		this.tabXM.tab1.btnSEND_TAXX.set_visible(false);
        		this.tabXM.tab0.btnDELE_TAXX.set_visible(true);
        		this.tabXM.tab1.btnDELE_TAXX.set_visible(true);
        	//미완료
        	}else{
        		this.tabXM.tab0.btnSEND_TAXX.set_visible(true);
        		this.tabXM.tab1.btnSEND_TAXX.set_visible(true);
        		this.tabXM.tab0.btnDELE_TAXX.set_visible(false);
        		this.tabXM.tab1.btnDELE_TAXX.set_visible(false);
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

        this.tabXM_onchanged = function(obj,e)
        {	
        	this.fnc_GridSetting(obj.components[e.postindex]);
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

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
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
            this.tabXM.tab0.grdMD_TCALXM.addEventHandler("onheadclick", this.tabXM_tab0_grdMD_TCALXM_onheadclick, this);
            this.tabXM.tab0.grdMD_TCALXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabXM.tab0.grdMD_TCALXM.addEventHandler("ontextchanged", this.tabXM_tab0_grdMD_CUSTXM_ontextchanged, this);
            this.tabXM.tab0.btnDELE_TAXX.addEventHandler("onclick", this.btnDELE_TAXX_onclick, this);
            this.tabXM.tab0.btnSEND_TAXX.addEventHandler("onclick", this.btnSEND_TAXX_onclick, this);
            this.tabXM.tab1.grdMD_TCALXM.addEventHandler("onheadclick", this.tabXM_tab1_grdMD_TCALXM_onheadclick, this);
            this.tabXM.tab1.grdMD_TCALXM.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);
            this.tabXM.tab1.grdMD_TCALXM.addEventHandler("ontextchanged", this.tabXM_tab0_grdMD_CUSTXM_ontextchanged, this);
            this.tabXM.tab1.btnDELE_TAXX.addEventHandler("onclick", this.btnDELE_TAXX_onclick, this);
            this.tabXM.tab1.btnSEND_TAXX.addEventHandler("onclick", this.btnSEND_TAXX_onclick, this);
            this.lstCUST_NAME.addEventHandler("onitemclick", this.lstCUST_NAME_onitemclick, this);
            this.lstCUST_NAME.addEventHandler("onkeydown", this.lstCUST_NAME_onkeydown, this);

        };

        this.loadIncludeScript("MACA0050.xfdl");
        this.loadPreloadList();
       
    };
}
)();
