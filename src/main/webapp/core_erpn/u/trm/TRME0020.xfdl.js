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
                this.set_name("TRME0020");
                this.set_titletext("법인카드 승인내역 및 전표처리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_reversesubsum("True");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">CARD_KIND</Col><Col id=\"DSNAME\">dsSHRCARD_KIND</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"CODEID\">CARD_KIND</Col><Col id=\"DSNAME\">dsCARD_KIND</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsAREA_GUBN</Col><Col id=\"CODEID\">AREA_GUBN</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsBUDG_GUBN</Col><Col id=\"CODEID\">BUDG_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsSHRAREA_GUBN</Col><Col id=\"CODEID\">AREA_GUBN</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsSHRBUDG_GUBN</Col><Col id=\"CODEID\">BUDG_GUBN</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsCSPS_CODE</Col><Col id=\"CODEID\">CSPS_CODE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsAPPR_GUBN</Col><Col id=\"CODEID\">APPR_GUBN</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsSHRCSPS_CODE</Col><Col id=\"CODEID\">CSPS_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsSHRCARD_GUBN</Col><Col id=\"CODEID\">CARD_GUBN</Col><Col id=\"HEADFLAG\">ALL</Col></Row><Row><Col id=\"DSNAME\">dsCARD_GUBN</Col><Col id=\"CODEID\">CARD_GUBN</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsCARD_STAT</Col><Col id=\"CODEID\">CARD_STAT</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_CARDAM", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"CARD_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQU\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"APPR_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SUPP_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CARD_APPR\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"VATX_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CHIN_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CHIN_NUMB\" size=\"13\" prop=\"default\" type=\"STRING\"/><Column id=\"DETL_CODE\" size=\"7\" prop=\"default\" type=\"STRING\"/><Column id=\"CHIN_IDXX\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_TYPE\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"SMOK_CODE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REMK_NOTE\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_TAXX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"EMPL_NUMB\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"RCTI_EMNR\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"HALB_TERM\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"DISP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CANC_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"BUYX_DIST\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"VATX_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"USEX_DETL\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"STAT_CODE\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"DEDU_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"CHIN_TYPE\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"TAXX_CODE\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"USEX_CODE\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"RETN_MSGX\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"USEX_FEEX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"HALB_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CSPS_CODE\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RCTI_EMNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SMOK_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHK_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BUDG_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CSTC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CSTC_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BDSB_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BDSB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LSLI_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_AMNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EMPL_NUMB_DRCR\" type=\"STRING\" size=\"256\"/><Column id=\"CSUS_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUDG_GUBN\" type=\"STRING\" size=\"8\"/><Column id=\"TAX_OK\" type=\"STRING\" size=\"256\"/><Column id=\"RCTI_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BGIN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDX_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BGIN_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"ENDX_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEPP_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"RCTC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RCTC_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RCTC_YSNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMAIN_TA_CARDAM", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"CARD_NUMB\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_SEQU\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"APPR_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_CODE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SUPP_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CARD_APPR\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"VATX_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CHIN_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_INTL\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"CHIN_NUMB\" size=\"13\" prop=\"default\" type=\"STRING\"/><Column id=\"DETL_CODE\" size=\"7\" prop=\"default\" type=\"STRING\"/><Column id=\"CHIN_IDXX\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"VAT_TYPE\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"SMOK_CODE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"REMK_NOTE\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"APPR_TAXX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"EMPL_NUMB\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"RCTI_EMNR\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_NUMB\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"HALB_TERM\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SLIP_LINE\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"CANC_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"BUYX_DIST\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"VATX_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"USEX_DETL\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"STAT_CODE\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"DEDU_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"CHIN_TYPE\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"TAXX_CODE\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"USEX_CODE\" size=\"15\" prop=\"default\" type=\"STRING\"/><Column id=\"RETN_MSGX\" size=\"255\" prop=\"default\" type=\"STRING\"/><Column id=\"USEX_FEEX\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"HALB_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CSPS_CODE\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RCTI_EMNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CUST_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"SMOK_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHK_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BUDG_YSNO\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CSTC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BDSB_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LSLI_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_AMNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EMPL_NUMB_DRCR\" type=\"STRING\" size=\"256\"/><Column id=\"CSUS_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUDG_GUBN\" type=\"STRING\" size=\"8\"/><Column id=\"TAX_OK\" type=\"STRING\" size=\"256\"/><Column id=\"RCTI_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BGIN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDX_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BGIN_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"ENDX_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"RCTC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RCTC_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_ACCTXD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CSUS_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUDG_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"COST_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"TAX_OK\" type=\"STRING\" size=\"256\"/><Column id=\"RCTI_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BGIN_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"ENDX_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"RCTC_YSNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("stInformation", "absolute", "157", "247", "246", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("52");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTA_CARDAM", "absolute", "8", "268", null, null, "25", "244", this);
            obj.set_selecttype("multirow");
            obj.set_autoenter("none");
            obj.set_binddataset("dsTA_CARDAM");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_taborder("21");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_readonly("false");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"130\" band=\"left\"/><Column size=\"75\" band=\"left\"/><Column size=\"65\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"65\"/><Column size=\"140\"/><Column size=\"55\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"75\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" cssclass=\"Cellgrd_WF_edit\" text=\"0\"/><Cell col=\"1\" displaytype=\"text\" text=\"처리상태\"/><Cell col=\"2\" displaytype=\"text\" text=\"카드번호\"/><Cell col=\"3\" displaytype=\"text\" text=\"승인일\"/><Cell col=\"4\" displaytype=\"text\" text=\"승인번호\"/><Cell col=\"5\" text=\"구분\"/><Cell col=\"6\" displaytype=\"text\" text=\"가맹점명\"/><Cell col=\"7\" displaytype=\"text\" text=\"업종\"/><Cell col=\"8\" displaytype=\"text\" text=\"과세구분\"/><Cell col=\"9\" displaytype=\"text\" text=\"승인금액\"/><Cell col=\"10\" displaytype=\"text\" text=\"부가세\"/><Cell col=\"11\" displaytype=\"text\" text=\"공급가액\"/><Cell col=\"12\" displaytype=\"text\" text=\"수정부가세\"/><Cell col=\"13\" text=\"계정코드\"/><Cell col=\"14\" displaytype=\"text\" text=\"계정코드명\"/><Cell col=\"15\" text=\"부서코드\"/><Cell col=\"16\" displaytype=\"text\" text=\"부서\"/><Cell col=\"17\" displaytype=\"text\" text=\"적요\"/><Cell col=\"18\" displaytype=\"text\" text=\"사원\"/><Cell col=\"19\" text=\"거래처코드\"/><Cell col=\"20\" displaytype=\"text\" text=\"거래처\"/><Cell col=\"21\" text=\"코스트센터\"/><Cell col=\"22\" text=\"예산구분\"/><Cell col=\"23\" text=\"예산과목\"/><Cell col=\"24\" displaytype=\"text\" text=\"자동전표번호\"/><Cell col=\"25\" displaytype=\"text\" text=\"전표금액\"/><Cell col=\"26\" displaytype=\"text\" text=\"가맹점사업자번호\"/><Cell col=\"27\" text=\"경과전표&#13;&#10;예외처리 가능\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:Eco.decode(CHK_GUBN, &quot;1&quot;, &quot;text&quot;, &quot;checkbox&quot;)\" edittype=\"expr:Eco.decode(CHK_GUBN, &quot;1&quot;, &quot;none&quot;, &quot;checkbox&quot;)\" style=\"align:center middle;background: ;\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"none\" style=\"align:center;background: ;\" text=\"bind:CSPS_CODE\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" style=\"align:center;background: ;\" text=\"bind:CARD_NUMB\" mask=\"####-####-####-####\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"none\" style=\"align:center;background: ;\" text=\"bind:APPR_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" style=\"align:center;\" text=\"bind:CARD_APPR\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"none\" style=\"align:center;\" text=\"bind:APPR_GUBN\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" style=\"align:left;background: ;\" text=\"bind:CHIN_NAME\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" style=\"align:left;color2: ;\" text=\"bind:BSNS_TYPE\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"none\" style=\"align:left;background: ;\" text=\"bind:VAT_TYPE\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background: ;\" text=\"bind:APPR_AMNT\" editlimit=\"30\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background: ;\" text=\"bind:APPR_TAXX\" editlimit=\"50\" editimemode=\"native\"/><Cell col=\"11\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align:right;background: ;\" text=\"bind:SUPP_AMNT\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background: ;\" text=\"bind:VATX_AMNT\"/><Cell col=\"13\" edittype=\"none\" style=\"align:center;background: ;\" text=\"bind:ACCT_INTL\"/><Cell col=\"14\" displaytype=\"text\" edittype=\"none\" style=\"align:left;background: ;\" text=\"bind:ACCT_NAME\" editimemode=\"native\" expandshow=\"hide\" expandsize=\"20\"/><Cell col=\"15\" edittype=\"none\" style=\"align:center;\" text=\"bind:DEPT_CODE\"/><Cell col=\"16\" displaytype=\"text\" edittype=\"none\" style=\"align:left;background: ;\" text=\"bind:DEPT_NAME\" expandshow=\"hide\" expandsize=\"20\"/><Cell col=\"17\" displaytype=\"text\" edittype=\"none\" style=\"align:left;background: ;\" text=\"bind:REMK_NOTE\" editlimit=\"-1\" editimemode=\"native\"/><Cell col=\"18\" displaytype=\"text\" edittype=\"none\" style=\"align:center;background: ;\" text=\"bind:EMPL_NAME\"/><Cell col=\"19\" edittype=\"none\" style=\"align:center;background: ;\" text=\"bind:CUST_CODE\"/><Cell col=\"20\" displaytype=\"text\" edittype=\"none\" style=\"align:left;background: ;\" text=\"bind:CUST_NAME\" editlimit=\"-1\" editimemode=\"native\" expandshow=\"hide\" expandsize=\"20\"/><Cell col=\"21\" style=\"align:left;\" text=\"bind:CSTC_NAME\"/><Cell col=\"22\" displaytype=\"combo\" edittype=\"none\" style=\"align:left;background: ;\" text=\"bind:BUDG_GUBN\"/><Cell col=\"23\" style=\"align:left;\" text=\"bind:BDSB_NAME\"/><Cell col=\"24\" displaytype=\"text\" edittype=\"none\" style=\"align:center;background: ;\" text=\"bind:DISP_NUMB\"/><Cell col=\"25\" displaytype=\"number\" edittype=\"none\" style=\"align:right;background: ;\" text=\"bind:SLIP_AMNT\" editlimit=\"30\"/><Cell col=\"26\" displaytype=\"text\" edittype=\"none\" style=\"align:center;background: ;\" text=\"bind:CHIN_NUMB\" mask=\"###-##-#####\"/><Cell col=\"27\" displaytype=\"checkbox\" text=\"bind:SEPP_YSNO\"/></Band><Band id=\"summary\"><Cell colspan=\"8\" style=\"align:center;\" text=\"합계\"/><Cell col=\"8\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;APPR_AMNT&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;APPR_TAXX&quot;)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SUPP_AMNT&quot;)\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;VATX_AMNT&quot;)\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum(&quot;SLIP_AMNT&quot;)\"/><Cell col=\"26\"/><Cell col=\"27\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", "9", "35", "211", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Button("btnCheck", "absolute", "468", "35", "74", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_text("범위선택");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCustCheck", "absolute", "541", "35", "110", "21", null, null, this);
            obj.set_taborder("55");
            obj.set_text("거래처체크적용");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Shape0", "absolute", "8", null, null, "145", "25", "15", this);
            obj.set_taborder("56");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox", "absolute", "8", "60", null, "69", "25", null, this);
            obj.set_taborder("57");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCARD_NAME", "absolute", "572", "97", "85", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtSHRCARD_NUMB", "absolute", "413", "97", "134", "21", null, null, this);
            obj.set_taborder("58");
            obj.set_type("string");
            obj.set_mask("####-####-####-####");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "343", "97", "62", "21", null, null, this);
            obj.set_taborder("59");
            obj.set_text("카드번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_NAME", "absolute", "197", "97", "117", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRDEPT_CODE", "absolute", "98", "97", "74", "21", null, null, this);
            obj.set_taborder("60");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static9", "absolute", "28", "97", "62", "21", null, null, this);
            obj.set_taborder("61");
            obj.set_text("관리부서");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NAME", "absolute", "508", "71", "149", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHREMPL_NUMB", "absolute", "413", "71", "70", "21", null, null, this);
            obj.set_taborder("62");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static6", "absolute", "343", "71", "62", "21", null, null, this);
            obj.set_taborder("63");
            obj.set_text("사원");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRAPPR_DATET", "absolute", "216", "71", "98", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHRAPPR_DATEF", "absolute", "98", "71", "98", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");
            obj.set_autoselect("true");

            obj = new Combo("cmbSHRCSPS_CODE", "absolute", "781", "71", "111", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_displayrowcount("20");
            obj.set_cssclass("styFormItemCombo");
            obj.set_index("-1");

            obj = new Static("Static4", "absolute", "687", "71", "88", "21", null, null, this);
            obj.set_taborder("64");
            obj.set_text("전표처리상태");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "28", "71", "62", "21", null, null, this);
            obj.set_taborder("65");
            obj.set_text("승인일자");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Shape01", "absolute", "8", "164", null, "69", "25", null, this);
            obj.set_taborder("49");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Edit("edtALLDEPT_NAME", "absolute", "214", "175", "100", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtALLDEPT_CODE", "absolute", "109", "175", "80", "21", null, null, this);
            obj.set_taborder("66");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("stALLDEPT_NAME", "absolute", "28", "175", "62", "21", null, null, this);
            obj.set_taborder("67");
            obj.set_text("부서");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbALLBUDG_GUBN", "absolute", "683", "217", "72", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_displayrowcount("20");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_visible("false");
            obj.set_index("-1");

            obj = new Static("stALLBUDG_GUBN", "absolute", "612", "217", "62", "21", null, null, this);
            obj.set_taborder("68");
            obj.set_text("예산구분");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtALLREMK_NOTE", "absolute", "920", "201", "227", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "874", "201", "42", "21", null, null, this);
            obj.set_taborder("69");
            obj.set_text("적요");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", null, "243", "62", "21", "311", null, this);
            obj.set_taborder("70");
            obj.set_text("전표일자");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Button("btnCreateSlip", "absolute", null, "243", "74", "21", "101", null, this);
            obj.set_taborder("20");
            obj.set_text("전표처리");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnAPPLY_ALL", "absolute", null, "139", "74", "21", "25", null, this);
            obj.set_taborder("19");
            obj.set_text("일괄적용");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Edit("edtALLACCT_NAME", "absolute", "498", "175", "100", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Edit("edtALLACCT_INTL", "absolute", "401", "175", "72", "21", null, null, this);
            obj.set_taborder("71");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "331", "175", "62", "21", null, null, this);
            obj.set_taborder("72");
            obj.set_text("차변계정");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRDEPT_NAME", "absolute", "174", "97", "21", "21", null, null, this);
            obj.set_taborder("73");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHREMPL_NAME", "absolute", "485", "71", "21", "21", null, null, this);
            obj.set_taborder("74");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgSHRCARD_NUMB", "absolute", "549", "97", "21", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpALLDEPT_NAME", "absolute", "191", "175", "22", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("stACCT_INTL", "absolute", "397", null, "68", "21", null, "129", this);
            obj.set_taborder("75");
            obj.set_text("차변계정");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACCT_INTL", "absolute", "466", null, "80", "21", null, "129", this);
            obj.set_taborder("76");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtACCT_NAME", "absolute", "571", null, "140", "21", null, "129", this);
            obj.set_taborder("34");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "28", null, "66", "21", null, "25", this);
            obj.set_taborder("77");
            obj.set_text("적요");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtREMK_NOTE", "absolute", "109", null, "602", "21", null, "25", this);
            obj.set_taborder("44");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Static("stBUDG_GUBN", "absolute", "397", null, "64", "21", null, "13", this);
            obj.set_taborder("78");
            obj.set_text("예산구분");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbBUDG_GUBN", "absolute", "466", null, "103", "21", null, "13", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_displayrowcount("20");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_visible("false");

            obj = new Static("stDEPT_NAME", "absolute", "28", null, "64", "21", null, "129", this);
            obj.set_taborder("79");
            obj.set_text("부서");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_CODE", "absolute", "109", null, "80", "21", null, "129", this);
            obj.set_taborder("80");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDEPT_NAME", "absolute", "214", null, "156", "21", null, "129", this);
            obj.set_taborder("33");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NUMB", "absolute", "109", null, "80", "21", null, "103", this);
            obj.set_taborder("81");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NAME", "absolute", "214", null, "156", "21", null, "103", this);
            obj.set_taborder("36");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("stEMPL_NUMB", "absolute", "28", null, "78", "21", null, "103", this);
            obj.set_taborder("82");
            obj.set_text("사용자");
            obj.set_cssclass("styFormItemCapBE");
            obj.set_usedecorate("false");
            this.addChild(obj.name, obj);

            obj = new Static("stCUST_NAME", "absolute", "741", null, "78", "21", null, "129", this);
            obj.set_taborder("83");
            obj.set_text("거래처");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCUST_CODE", "absolute", "861", null, "80", "21", null, "129", this);
            obj.set_taborder("84");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCUST_NAME", "absolute", "966", null, "132", "21", null, "129", this);
            obj.set_taborder("35");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "397", null, "64", "21", null, "51", this);
            obj.set_taborder("85");
            obj.set_text("전표번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskDISP_NUMB", "absolute", "466", null, "151", "21", null, "51", this);
            obj.set_taborder("46");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            obj.set_enable("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "460", null, "106", "21", null, "-110", this);
            obj.set_taborder("86");
            obj.set_text("일반전표번호");
            obj.set_cssclass("styFormItemCap");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskLSLI_NUMB", "absolute", "559", null, "137", "21", null, "-110", this);
            obj.set_taborder("48");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "741", null, "62", "21", null, "51", this);
            obj.set_taborder("87");
            obj.set_text("전표금액");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSLIP_AMNT", "absolute", "861", null, "151", "21", null, "51", this);
            obj.set_taborder("47");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "741", null, "118", "21", null, "103", this);
            obj.set_taborder("88");
            obj.set_text("가맹점사업자번호");
            obj.set_cssclass("styFormItemCap");
            obj.set_usedecorate("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCHIN_NUMB", "absolute", "861", null, "237", "21", null, "103", this);
            obj.set_taborder("38");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpDEPT_NAME", "absolute", "191", null, "21", "21", null, "129", this);
            obj.set_taborder("89");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpACCT_NAME", "absolute", "548", null, "21", "21", null, "129", this);
            obj.set_taborder("90");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCUST_NAME", "absolute", "943", null, "21", "21", null, "129", this);
            obj.set_taborder("91");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpEMPL_NAME", "absolute", "191", null, "21", "21", null, "103", this);
            obj.set_taborder("92");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpALLACCT_INTL", "absolute", "475", "175", "21", "21", null, null, this);
            obj.set_taborder("93");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("Shape03", "absolute", "8", null, null, "65", "25", "169", this);
            obj.set_taborder("94");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCARD_APPR", "absolute", "771", null, "100", "21", null, "204", this);
            obj.set_taborder("24");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkVATX_YSNO", "absolute", "1122", null, "16", "21", null, "178", this);
            obj.set_taborder("32");
            obj.set_truevalue("1");
            obj.set_enable("true");
            obj.set_cssclass("chk_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "1040", null, "86", "21", null, "178", this);
            obj.set_taborder("95");
            obj.set_text("부가세여부");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskVATX_AMNT", "absolute", "981", null, "54", "21", null, "178", this);
            obj.set_taborder("31");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "900", null, "84", "21", null, "178", this);
            obj.set_taborder("96");
            obj.set_text("수정부가세");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSUPP_AMNT", "absolute", "771", null, "100", "21", null, "178", this);
            obj.set_taborder("30");
            obj.set_mask("#,###");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "703", null, "62", "21", null, "178", this);
            obj.set_taborder("97");
            obj.set_text("공급가액");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskAPPR_TAXX", "absolute", "574", null, "100", "21", null, "178", this);
            obj.set_taborder("29");
            obj.set_mask("#,###");
            obj.set_cssclass("msk__WF_Readonly");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "519", null, "68", "21", null, "178", this);
            obj.set_taborder("98");
            obj.set_text("부가세");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "350", null, "62", "21", null, "178", this);
            obj.set_taborder("99");
            obj.set_text("승인금액");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkCLOSE_YN", "absolute", "323", null, "16", "21", null, "178", this);
            obj.set_taborder("27");
            obj.set_truevalue("1");
            obj.set_enable("true");
            obj.set_cssclass("chk_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "255", null, "62", "21", null, "178", this);
            obj.set_taborder("100");
            obj.set_text("폐업여부");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskAPPR_AMNT", "absolute", "418", null, "72", "21", null, "178", this);
            obj.set_taborder("28");
            obj.set_mask("#,###");
            obj.set_cssclass("msk__WF_Readonly");
            obj.set_enable("true");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCHIN_NAME", "absolute", "96", null, "130", "21", null, "178", this);
            obj.set_taborder("26");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "28", null, "62", "21", null, "178", this);
            obj.set_taborder("101");
            obj.set_text("가맹점명");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbAPPR_GUBN", "absolute", "981", null, "100", "21", null, "204", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_displayrowcount("20");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_index("-1");

            obj = new Static("Static32", "absolute", "900", null, "84", "21", null, "202", this);
            obj.set_taborder("102");
            obj.set_text("구분");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "703", null, "62", "21", null, "204", this);
            obj.set_taborder("103");
            obj.set_text("승인번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calAPPR_DATE", "absolute", "574", null, "100", "21", null, "204", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");

            obj = new Static("Static30", "absolute", "519", null, "68", "21", null, "204", this);
            obj.set_taborder("104");
            obj.set_text("승인일");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "255", null, "62", "21", null, "204", this);
            obj.set_taborder("105");
            obj.set_text("카드번호");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSTAT", "absolute", "96", null, "16", "21", null, "204", this);
            obj.set_taborder("106");
            obj.set_truevalue("1");
            obj.set_cssclass("styFormItemChk");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCSPS_CODE", "absolute", "114", null, "112", "21", null, "204", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_displayrowcount("20");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.set_readonly("true");

            obj = new Static("Static28", "absolute", "28", null, "62", "21", null, "204", this);
            obj.set_taborder("107");
            obj.set_text("처리상태");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSLIP_DATE", "absolute", null, "243", "103", "21", "200", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new MaskEdit("mskCHIN_NUMB00", "absolute", "323", null, "167", "21", null, "204", this);
            obj.set_taborder("108");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_mask("####-####-####-####");
            obj.set_cssclass("msk_WF_Readonly");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "201", "71", "11", "21", null, null, this);
            obj.set_taborder("109");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("stALLCSTC_CODE", "absolute", "28", "201", "78", "21", null, null, this);
            obj.set_taborder("110");
            obj.set_text("코스트센터");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtALLCSTC_CODE", "absolute", "109", "201", "80", "21", null, null, this);
            obj.set_taborder("111");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpALLCSTC_CODE", "absolute", "191", "201", "21", "21", null, null, this);
            obj.set_taborder("112");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Static("stALLBDSB_CODE", "absolute", "331", "201", "62", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_text("예산과목");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtALLBDSB_CODE", "absolute", "401", "201", "72", "21", null, null, this);
            obj.set_taborder("114");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpALLBDSB_CODE", "absolute", "475", "201", "21", "21", null, null, this);
            obj.set_taborder("115");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtALLBDSB_NAME", "absolute", "498", "201", "100", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_tabstop("false");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stCSTC_CODE", "absolute", "28", null, "78", "21", null, "77", this);
            obj.set_taborder("116");
            obj.set_text("코스트센터");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCSTC_CODE", "absolute", "109", null, "80", "21", null, "77", this);
            obj.set_taborder("117");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpCSTC_CODE", "absolute", "191", null, "21", "21", null, "77", this);
            obj.set_taborder("118");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCSTC_NAME", "absolute", "214", null, "156", "21", null, "77", this);
            obj.set_taborder("39");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("stBDSB_CODE", "absolute", "741", null, "78", "21", null, "77", this);
            obj.set_taborder("119");
            obj.set_text("예산과목");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBDSB_CODE", "absolute", "861", null, "80", "21", null, "77", this);
            obj.set_taborder("120");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("align", "disabled", "center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpBDSB_CODE", "absolute", "943", null, "21", "21", null, "77", this);
            obj.set_taborder("121");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBDSB_NAME", "absolute", "966", null, "132", "21", null, "77", this);
            obj.set_taborder("41");
            obj.set_imemode("hangul");
            obj.set_autoselect("true");
            obj.style.setStyleValue("align", "disabled", "left middle");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Edit("edtALLCSTC_NAME", "absolute", "214", "201", "100", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_tabstop("false");
            obj.set_imemode("hangul");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.setStyleValue("align", "disabled", "left middle");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteSlip", "absolute", null, "243", "74", "21", "25", null, this);
            obj.set_taborder("122");
            obj.set_text("전표삭제");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSLIP_NUMB", "absolute", "619", null, "43", "21", null, "51", this);
            obj.set_taborder("123");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("124");
            obj.set_text("법인카드 승인내역 및 전표처리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("125");
            obj.set_text("홈 > 재무관리 > 자금관리 > 법인카드관리 > 법인카드 승인내역 및 전표처리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("126");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("127");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("128");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("129");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("130");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "8", "56", "128", "4", null, null, this);
            obj.set_taborder("131");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "8", "29", "176", "6", null, null, this);
            obj.set_taborder("132");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("133");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "861", "129", "80", "35", null, null, this);
            obj.set_taborder("134");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("135");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("136");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "416", "118", "38", "10", null, null, this);
            obj.set_taborder("137");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "416", "92", "102", "5", null, null, this);
            obj.set_taborder("138");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "416", "61", "38", "10", null, null, this);
            obj.set_taborder("139");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "8", "143", "101", "21", null, null, this);
            obj.set_taborder("140");
            obj.set_text("일괄적용항목");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation02", "absolute", null, "243", "7", "21", "181", null, this);
            obj.set_taborder("141");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCHIN_NAME", "absolute", "995", "97", "130", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_tabstop("true");
            obj.set_readonly("false");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskSHRCHIN_NUMB", "absolute", "781", "97", "111", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_tabstop("true");
            obj.set_readonly("false");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.style.set_align("center");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "927", "97", "64", "21", null, null, this);
            obj.set_taborder("142");
            obj.set_text("가맹점명");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "687", "97", "80", "21", null, null, this);
            obj.set_taborder("143");
            obj.set_text("사업자번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("stRCTI_EMNR", "absolute", "397", null, "64", "21", null, "103", this);
            obj.set_taborder("144");
            obj.set_text("접대자");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRCTI_EMNR", "absolute", "466", null, "80", "21", null, "103", this);
            obj.set_taborder("145");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpRCTI_EMNM", "absolute", "548", null, "21", "21", null, "103", this);
            obj.set_taborder("146");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRCTI_EMNM", "absolute", "571", null, "140", "21", null, "103", this);
            obj.set_taborder("37");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", "126", "143", "622", "21", null, null, this);
            obj.set_taborder("147");
            obj.set_text("법인카드 사용 비용은 사용일 기준 10일 이내에만 전표 작성이 가능하며, 10일 경과 시 비용 처리가 불가 합니다.");
            obj.set_cssclass("sta_WF_Info");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Info.png') left middle");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation05", "absolute", "113", "147", "10", "13", null, null, this);
            obj.set_taborder("148");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("stBGIN_DATE", "absolute", "28", null, "62", "21", null, "51", this);
            obj.set_taborder("149");
            obj.set_text("기간");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calBGIN_DATE", "absolute", "109", null, "120", "21", null, "51", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("42");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");

            obj = new Calendar("calENDX_DATE", "absolute", "250", null, "120", "21", null, "51", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("43");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.set_tabstop("false");
            obj.set_readonly("true");

            obj = new Static("Static19", "absolute", "234", null, "16", "21", null, "51", this);
            obj.set_taborder("150");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Button("btnBicnet", "absolute", "8", "35", "114", "21", null, null, this);
            obj.set_taborder("151");
            obj.set_text("매입내역 가져오기");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "8", "247", "129", "21", null, null, this);
            obj.set_taborder("152");
            obj.set_text("법인카드 사용내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation01", "absolute", "145", "251", "10", "13", null, null, this);
            obj.set_taborder("153");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", null, "243", "74", "21", "681", null, this);
            obj.set_taborder("154");
            obj.set_text("선택건수");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskCHK_CNT", "absolute", null, "243", "76", "21", "610", null, this);
            obj.set_taborder("155");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", null, "243", "98", "21", "505", null, this);
            obj.set_taborder("156");
            obj.set_text("정리금액합계");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskAMNT_SUM", "absolute", null, "243", "116", "21", "393", null, this);
            obj.set_taborder("157");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_mask("#,###");
            obj.set_cssclass("msk_WF_Readonly");
            obj.style.setStyleValue("align", "disabled", "right");
            obj.getSetter("binddataset").set("dsTA_GITAGETA");
            this.addChild(obj.name, obj);

            obj = new Button("btnSlipPermit", "absolute", "124", "35", "162", "21", null, null, this);
            obj.set_taborder("158");
            obj.set_text("경과비용전표생성 허용처리");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSlipPermitCancel", "absolute", "288", "35", "162", "21", null, null, this);
            obj.set_taborder("159");
            obj.set_text("경과비용전표생성 허용취소");
            obj.set_cssclass("btn_WF_Module");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stALLRCTI_EMNR", "absolute", "612", "175", "62", "21", null, null, this);
            obj.set_taborder("160");
            obj.set_text("접대자");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtALLRCTI_EMNR", "absolute", "670", "175", "80", "21", null, null, this);
            obj.set_taborder("161");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpALLRCTI_EMNM", "absolute", "752", "175", "21", "21", null, null, this);
            obj.set_taborder("162");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtALLRCTI_EMNM", "absolute", "775", "175", "84", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_imemode("hangul");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("stALLBGIN_DATE", "absolute", "874", "175", "42", "21", null, null, this);
            obj.set_taborder("163");
            obj.set_text("기간");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calALLBGIN_DATE", "absolute", "920", "175", "103", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");

            obj = new Static("Static23", "absolute", "1028", "175", "16", "21", null, null, this);
            obj.set_taborder("164");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calALLENDX_DATE", "absolute", "1044", "175", "103", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");

            obj = new Static("Static24", "absolute", "424", "196", "102", "5", null, null, this);
            obj.set_taborder("165");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "424", "222", "38", "10", null, null, this);
            obj.set_taborder("166");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "421", "165", "38", "10", null, null, this);
            obj.set_taborder("167");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "341", "233", "80", "35", null, null, this);
            obj.set_taborder("168");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "360", "548", "80", "10", null, null, this);
            obj.set_taborder("169");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "440", "473", "80", "10", null, null, this);
            obj.set_taborder("170");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stALLRCTC_CODE", "absolute", "612", "201", "62", "21", null, null, this);
            obj.set_taborder("171");
            obj.set_text("광고주");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtALLRCTC_CODE", "absolute", "670", "201", "80", "21", null, null, this);
            obj.set_taborder("172");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpALLRCTC_NAME", "absolute", "752", "201", "21", "21", null, null, this);
            obj.set_taborder("173");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtALLRCTC_NAME", "absolute", "775", "201", "84", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_tabstop("false");
            obj.set_imemode("hangul");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("stRCTC_CODE", "absolute", "397", null, "64", "21", null, "77", this);
            obj.set_taborder("174");
            obj.set_text("광고주");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRCTC_CODE", "absolute", "466", null, "80", "21", null, "77", this);
            obj.set_taborder("175");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpRCTC_NAME", "absolute", "548", null, "21", "21", null, "77", this);
            obj.set_taborder("176");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRCTC_NAME", "absolute", "571", null, "140", "21", null, "77", this);
            obj.set_taborder("40");
            obj.set_tabstop("false");
            obj.set_imemode("hangul");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("법인카드 승인내역 및 전표처리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","cmbCSPS_CODE","value","dsTA_CARDAM","CSPS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","chkSTAT","value","dsTA_CARDAM","CHK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","calAPPR_DATE","value","dsTA_CARDAM","APPR_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","cmbAPPR_GUBN","value","dsTA_CARDAM","APPR_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtCHIN_NAME","value","dsTA_CARDAM","CHIN_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","mskAPPR_AMNT","value","dsTA_CARDAM","APPR_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","chkCLOSE_YN","value","dsTA_CARDAM","CLOSE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","mskAPPR_TAXX","value","dsTA_CARDAM","APPR_TAXX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","mskSUPP_AMNT","value","dsTA_CARDAM","SUPP_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","mskVATX_AMNT","value","dsTA_CARDAM","VATX_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","chkVATX_YSNO","value","dsTA_CARDAM","VATX_YSNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edtCARD_APPR","value","dsTA_CARDAM","CARD_APPR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","mskCHIN_NUMB","value","dsTA_CARDAM","CHIN_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","mskSLIP_AMNT","value","dsTA_CARDAM","SLIP_AMNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","mskLSLI_NUMB","value","dsTA_CARDAM","LSLI_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","edtCUST_NAME","value","dsTA_CARDAM","CUST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","edtCUST_CODE","value","dsTA_CARDAM","CUST_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","edtEMPL_NAME","value","dsTA_CARDAM","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edtEMPL_NUMB","value","dsTA_CARDAM","EMPL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edtDEPT_NAME","value","dsTA_CARDAM","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edtDEPT_CODE","value","dsTA_CARDAM","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","cmbBUDG_GUBN","value","dsTA_CARDAM","BUDG_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","edtREMK_NOTE","value","dsTA_CARDAM","REMK_NOTE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","edtACCT_NAME","value","dsTA_CARDAM","ACCT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edtACCT_INTL","value","dsTA_CARDAM","ACCT_INTL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","mskCHIN_NUMB00","value","dsTA_CARDAM","CARD_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","mskDISP_NUMB","value","dsTA_CARDAM","DISP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","edtCSTC_CODE","value","dsTA_CARDAM","CSTC_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","edtCSTC_NAME","value","dsTA_CARDAM","CSTC_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","edtBDSB_CODE","value","dsTA_CARDAM","BDSB_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","edtBDSB_NAME","value","dsTA_CARDAM","BDSB_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","mskSLIP_NUMB","value","dsTA_CARDAM","DISP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","edtRCTI_EMNR","value","dsTA_CARDAM","RCTI_EMNR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","edtRCTI_EMNM","value","dsTA_CARDAM","RCTI_EMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","calBGIN_DATE","value","dsTA_CARDAM","BGIN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","calENDX_DATE","value","dsTA_CARDAM","ENDX_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","edtRCTC_CODE","value","dsTA_CARDAM","RCTC_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","edtRCTC_NAME","value","dsTA_CARDAM","RCTC_NAME");
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
        this.addIncludeScript("TRME0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TRME0020.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TRME0020 법인카드 승인내역 및 전표처리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.19		권미영		Initial Created.
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
         *  공통 Script Include *
         ************************/

        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부*
         *********************/
        this.sBUTTONLIST  	= "TTFFTTTF";
        this.sPACKAGENAME 	= "TRME0020";
        this.aKeyValue    	= new Array(4);
        this.sSLIP_NUMB 	= "";
        this.sCSTC_CDNE		= "";		//귀속부서별 계정별로 매핑되는 코스트센터가 1개인 경우 [코드 + ',' + 명칭] 리턴

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
             this.sUSERAUTH     = "";
             this.sFORMCAPTION  = "";
             this.sFORMLOCATION = "";
             this.sUSERLAVEL    = "";
             this.sCALLFROM 	= "";
        } else {
             this.sUSERAUTH     = this.getOwnerFrame()["sUSERAUTH"];
             this.sFORMCAPTION  = this.getOwnerFrame()["sFORMCAPTION"];
             this.sFORMLOCATION = this.getOwnerFrame()["sFORMLOCATION"];
             this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];
             this.sCALLFROM     = this.getOwnerFrame()["sCALLFROM"];	// 일반호출이면 공백(""), 대시보드에서 호출이면 "DASHBOARD"
        }

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

            this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
            this.fnc_GridSetting(this);
            this.fnc_GetComboDs(this.dsCombo);
            
            this.fnc_FormatSlipNumber(this.mskDISP_NUMB, "", "Y");
        	this.fnc_FormatSlipNumber(this.mskLSLI_NUMB, "", "Y");
        	this.fnc_FormatSlipNumber(this.mskSLIP_NUMB, "");
        	this.fnc_FormatSlipNumber(this.grdTA_CARDAM, "DISP_NUMB", "Y");
        	//this.fnc_FormatSlipNumber(this.grdTA_CARDAM, "LSLI_NUMB", "Y");
        	
        	var sServerDateTime = this.fnc_GetServerDateTime("DATE");
        	
        	this.calSHRAPPR_DATEF.set_value((this.fnc_SubStr(sServerDateTime, 0, 6) + "01"));
        	this.calSHRAPPR_DATET.set_value(this.fnc_SubStr(sServerDateTime, 0, 8));

        	this.calSLIP_DATE.set_value(this.fnc_SubStr(sServerDateTime, 0, 8));
        	
        	if (this.sUSERLAVEL == "5") {
        		
        		this.fnc_SetReadonly(this.imgHelpSHREMPL_NAME, true);
        		this.fnc_SetReadonly(this.edtSHREMPL_NAME, true);
        		this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
        		this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);
        		
        		this.btnSlipPermit.set_visible(false);
        		this.btnSlipPermitCancel.set_visible(false);
        		
        	} else if (this.sUSERLAVEL == "1") {
        	
        		this.btnSlipPermit.set_visible(true);
        		this.btnSlipPermitCancel.set_visible(false);
        		
        	}
        	
        	this.btnBicnet.set_visible(false);
        	if (this.sUSERLAVEL <= "3") this.btnBicnet.set_visible(true);
        	
        	this.calSHRAPPR_DATEF.setFocus();
        	
        	if (this.sCALLFROM == "DASHBOARD") {
        		
        		this.calSHRAPPR_DATEF.set_value(this.fnc_SubStr(this.fnc_AddMonth(sServerDateTime, -5), 0, 6) + "01");
        		this.cmbSHRCSPS_CODE.set_value(0);	//미사용
        		this.edtSHREMPL_NUMB.set_value(application.GBL_EMPLNO);
        		this.edtSHREMPL_NAME.set_value(application.GBL_USERNM);
        		this.fn_Search();
        		
        	}

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
            
            this.fnc_DatasetClear("dsTA_CARDAM");
            var sMethodName = "SEARCH00";
            var sInDataSet  = "";
            var sOutDataSet = "dsTA_CARDAM=dsTA_CARDAM";
            var sArgument   = this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            this.grdTA_CARDAM.setFocus();
            
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {

             // 기능 없음
        }

        /*------------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

            // 기능 없음
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

            this.fnc_DataSetCancel("dsTA_CARDAM");
            this.grdTA_CARDAM.setFocus();
            
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

            if (!this.fn_SaveItemCheck()) return;
            
            this.aKeyValue[0] = this.dsTA_CARDAM.getColumn(this.dsTA_CARDAM.rowposition, "CARD_NUMB");
            this.aKeyValue[1] = this.dsTA_CARDAM.getColumn(this.dsTA_CARDAM.rowposition, "APPR_DATE");
            this.aKeyValue[2] = this.dsTA_CARDAM.getColumn(this.dsTA_CARDAM.rowposition, "CARD_APPR");
            this.aKeyValue[3] = this.dsTA_CARDAM.getColumn(this.dsTA_CARDAM.rowposition, "APPR_GUBN");

            var sMethodName = "SAVE00";
            var sInDataSet 	= "dsTA_CARDAM=dsTA_CARDAM:U";
            var sOutDataSet = "dsTA_CARDAM=dsTA_CARDAM";
            var sArgument 	= this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            this.grdTA_CARDAM.setFocus();
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

            // 기능 없음
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
            if(e.fromobject instanceof Div) return;
            var sMessage = this.fnc_FormUnloadCheck("dsTA_CARDAM", this);
            if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        }

        this.fn_FormUnloadProcess = function (obj,e) {
            this.fnc_FormUnload(obj,e);
        }

        /*------------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {
            this.fnc_HotKey(this, e.fromreferenceobject, e);
        }

        /*------------------------------------+
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

        	if (this.fnc_DatasetChangeCheck("dsTA_CARDAM")) return this.fnc_Message("TMM023");
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRAPPR_DATEF.value)) < 1)	{
        		return this.fnc_SearchCheckPostAction("TMM072", "승인일자(FROM)", this.calSHRAPPR_DATEF);
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.calSHRAPPR_DATET.value)) < 1)	{
        		return this.fnc_SearchCheckPostAction("TMM072", "승인일자(TO)", this.calSHRAPPR_DATET);
        	}
        	
        	if ((this.fnc_Length(this.fnc_Trim(this.calSHRAPPR_DATEF.value)) == 8) || (this.fnc_Length(this.fnc_Trim(this.calSHRAPPR_DATET.value)) == 8))	{
        		if (this.fnc_Trim(this.calSHRAPPR_DATEF.value) > this.fnc_Trim(this.calSHRAPPR_DATET.value))
        		return this.fnc_SearchCheckPostAction("TMM125", "승인일자(FROM)이 승인일자(TO)보다 큽니다.", this.calSHRAPPR_DATET);
        	}

            return true;
            
        }
        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

            if (!this.fnc_DatasetChangeCheck("dsTA_CARDAM")) {
                this.fnc_Message("TMM003");
                return false;
            }

        	var iChek_Cont = this.dsTA_CARDAM.getCaseCount("CHK == '1'");
        	
            for (var i = 0; i < this.dsTA_CARDAM.rowcount; i++) {
                if (this.fnc_ToUpper(this.dsTA_CARDAM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

                if (this.fnc_Length(this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "DEPT_CODE"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", "부서", this.dsTA_CARDAM, i, (iChek_Cont < 2) ? this.edtDEPT_NAME : edtALLDEPT_NAME, "");
                }

                if (this.fnc_Length(this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "ACCT_INTL"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", "차변계정", this.dsTA_CARDAM, i, (iChek_Cont < 2) ? this.edtACCT_NAME : this.edtALLACCT_NAME, "");
                }

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "EMPL_NUMB"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", "사용자", this.dsTA_CARDAM, i, this.edtEMPL_NAME, "");
                }

        		var sCsus_Ysno = this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "CSUS_YSNO"));
                if ((sCsus_Ysno == "1") && (this.fnc_Length(this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "CSTC_CODE"))) < 1)) {
        			return this.fnc_CheckPostAction("TMM072", this.edtACCT_NAME.value + " 계정은 코스트센터", this.dsTA_CARDAM, i, (iChek_Cont < 2) ? this.edtCSTC_NAME : this.edtALLCSTC_NAME, "");
                }
                
                var sBudg_Ysno = this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "BUDG_YSNO"));
        		
        		if (sBudg_Ysno == "1") {
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "BUDG_GUBN"))) < 1) {
        				this.dsTA_CARDAM.setColumn(i, "BUDG_GUBN", "10");	//NSCOM 부서예산만 사용
        				//return this.fnc_CheckPostAction("TMM072", this.edtACCT_NAME.value + " 계정은 예산구분", this.dsTA_CARDAM, i, (iChek_Cont < 2) ? this.cmbBUDG_GUBN : this.cmbALLBUDG_GUBN, "");
        			}
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "BDSB_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", this.edtACCT_NAME.value + " 계정은 예산과목", this.dsTA_CARDAM, i, (iChek_Cont < 2) ? this.edtBDSB_NAME : this.edtALLBDSB_NAME, "");
        			}
                }

        		var sRcti_Ysno = this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "RCTI_YSNO"));
                if ((sRcti_Ysno == "1") && (this.fnc_Length(this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "RCTI_EMNR"))) < 1)) {
        			return this.fnc_CheckPostAction("TMM072", this.edtACCT_NAME.value + " 계정은 접대자", this.dsTA_CARDAM, i, (iChek_Cont < 2) ? this.edtRCTI_EMNM : this.edtALLRCTI_EMNM, "");
                }
                    
            	var sBgin_Ysno = this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "BGIN_YSNO"));
            	var sEndx_Ysno = this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "ENDX_YSNO"));
                if (sBgin_Ysno == "1" || sEndx_Ysno == "1") {
        			if (this.fnc_IsDate(this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "BGIN_DATE"))) == false) {
        				return this.fnc_CheckPostAction("TMM072", this.edtACCT_NAME.value + " 계정은 기간(F)", this.dsTA_CARDAM, i, (iChek_Cont < 2) ? this.calBGIN_DATE : this.calALLBGIN_DATE, "");
        			}
        			if (this.fnc_IsDate(this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "ENDX_DATE"))) == false) {
        				return this.fnc_CheckPostAction("TMM072", this.edtACCT_NAME.value + " 계정은 기간(T)", this.dsTA_CARDAM, i, (iChek_Cont < 2) ? this.calENDX_DATE : this.calALLENDX_DATE, "");
        			}
                }
                    
        		var sRctc_Ysno = this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "RCTC_YSNO"));
        		
                if ((sRctc_Ysno == "1") && (this.fnc_Length(this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "RCTC_CODE"))) < 1)) {
        			return this.fnc_CheckPostAction("TMM072", this.edtACCT_NAME.value + " 계정은 광고주", this.dsTA_CARDAM, i, (iChek_Cont < 2) ? this.edtRCTC_NAME : this.edtALLRCTC_NAME, "");
                }
                
                if (this.fnc_Length(this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "REMK_NOTE"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", "적요", this.dsTA_CARDAM, i, (iChek_Cont < 2) ? this.edtREMK_NOTE : this.edtALLREMK_NOTE, "");
                }
                
            }
            
            return true;

        }
        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (sStatus) {

        }

        /*----------------------------+
         |  전표생성 필수 조건 체크!  |
         +----------------------------*/
        this.fn_CreateSlipItemCheck = function () {
        	
            if (this.dsTA_CARDAM.rowcount == 0) return false;

            if (this.dsTA_CARDAM.getCaseCount("CHK=='1'") == 0) {
                this.fnc_Message("TMM125", "전표를 생성할 자료를 선택하세요");
                return false;
            }

            if (this.fnc_Length(this.fnc_Trim(this.calSLIP_DATE.value)) < 8) {
                return this.fnc_SearchCheckPostAction("TMM072", "전표일자", this.calSLIP_DATE);
            }

            if (this.fnc_DatasetChangeCheck("dsTA_CARDAM")) {
        		return this.fnc_Message("TMM015", "전표처리");
        	}

            // 필수 입력 항목 체크
            for (var i = 0; i < this.dsTA_CARDAM.rowcount; i++) {
            
                if (this.dsTA_CARDAM.getColumn(i, "CHK") != "1") continue;
                
                var sAppr_Date = this.dsTA_CARDAM.getColumn(i, "APPR_DATE");	//승인일자
                var sSrvr_Date = this.fnc_GetServerDateTime("DATE");			//오늘
                var sSepp_Ysno = this.dsTA_CARDAM.getColumn(i, "SEPP_YSNO");	//전표예외처리가능여부
                
                if (this.sUSERLAVEL == "5") {
        			if (sSepp_Ysno != 1) {
        				if (this.fnc_AddDate(sAppr_Date, 10) < sSrvr_Date) {
        					return this.fnc_CheckPostAction("TMM125", "10일 경과되어 비용처리가 불가합니다. 승인일자[" + sAppr_Date + "]", this.dsTA_CARDAM, i, this.calAPPR_DATE, "");
        				}
        			}
                }
                
                if (this.fnc_Length(this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "DEPT_CODE"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", "부서", this.dsTA_CARDAM, i, this.edtDEPT_NAME, "");
                }
                
                if (this.fnc_Length(this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "ACCT_INTL"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", "차변계정", this.dsTA_CARDAM, i, this.edtACCT_NAME, "");
                }

        		if (this.fnc_Length(this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "EMPL_NUMB"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", "사용자", this.dsTA_CARDAM, i, this.edtEMPL_NAME, "");
                }

        		var sCsus_Ysno = this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "CSUS_YSNO"));
                if ((sCsus_Ysno == "1") && (this.fnc_Length(this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "CSTC_CODE"))) < 1)) {
        			return this.fnc_CheckPostAction("TMM072", this.edtACCT_NAME.value + " 계정은 코스트센터", this.dsTA_CARDAM, i, this.edtCSTC_CODE, "");
                }
                
                var sBudg_Ysno = this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "BUDG_YSNO"));
        		
                if (sBudg_Ysno == "1") {
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "BUDG_GUBN"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", this.edtACCT_NAME.value + " 계정은 예산구분", this.dsTA_CARDAM, i, this.cmbBUDG_GUBN, "");
        			}
        			if (this.fnc_Length(this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "BDSB_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", this.edtACCT_NAME.value + " 계정은 예산과목", this.dsTA_CARDAM, i, this.edtBDSB_NAME, "");
        			}
                }

        		var sRcti_Ysno = this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "RCTI_YSNO"));
                if ((sRcti_Ysno == "1") && (this.fnc_Length(this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "RCTI_EMNR"))) < 1)) {
        			return this.fnc_CheckPostAction("TMM072", this.edtACCT_NAME.value + " 계정은 접대자", this.dsTA_CARDAM, i, this.edtRCTI_EMNM, "");
                }
                    
            	var sBgin_Ysno = this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "BGIN_YSNO"));
            	var sEndx_Ysno = this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "ENDX_YSNO"));
                if (sBgin_Ysno == "1" || sEndx_Ysno == "1") {
        			if (this.fnc_IsDate(this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "BGIN_DATE"))) == false) {
        				return this.fnc_CheckPostAction("TMM072", this.edtACCT_NAME.value + " 계정은 기간(F)", this.dsTA_CARDAM, i, this.calBGIN_DATE, "");
        			}
        			if (this.fnc_IsDate(this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "ENDX_DATE"))) == false) {
        				return this.fnc_CheckPostAction("TMM072", this.edtACCT_NAME.value + " 계정은 기간(T)", this.dsTA_CARDAM, i, this.calENDX_DATE, "");
        			}
                }
                    
        		var sRctc_Ysno = this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "RCTC_YSNO"));
        		
                if ((sRctc_Ysno == "1") && (this.fnc_Length(this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "RCTC_CODE"))) < 1)) {
        			return this.fnc_CheckPostAction("TMM072", this.edtACCT_NAME.value + " 계정은 광고주", this.dsTA_CARDAM, i, this.edtRCTC_NAME, "");
                }
                        
                        
                if (this.fnc_Length(this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "REMK_NOTE"))) < 1) {
                    return this.fnc_CheckPostAction("TMM072", "적요", this.dsTA_CARDAM, i, this.edtREMK_NOTE, "");
                }
                
            }

        
        	this.fnc_DatasetClear("dsMAIN_TA_CARDAM");

            // 선택한 대상만 복사
            //this.dsTA_CARDAM.set_enableevent(false);
            this.dsTA_CARDAM.filter("CHK=='1'");
            this.dsMAIN_TA_CARDAM.copyData(this.dsTA_CARDAM, true);
            this.dsTA_CARDAM.filter("");
            //this.dsTA_CARDAM.set_enableevent(true);
        	
        	return this.fnc_Message("TMM061", "전표일자 [" + this.calSLIP_DATE.text + "]로 선택한 자료의 자동전표");
            
        }

        /*----------------------------+
         |  전표삭제 필수 조건 체크!  |
         +----------------------------*/
        this.fn_DeleteSlipItemCheck = function () {
            
        	var sQuestionText = "회계전표 " + this.mskSLIP_NUMB.text;
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

            var sReturnString;

            if (sKind == "SEARCH00") {
            
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="     + this.fnc_Quote(sKind);
                sReturnString += " APPR_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRAPPR_DATEF.value)); //승인일자FROM
                sReturnString += " APPR_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRAPPR_DATET.value)); //승인일자TO
                sReturnString += " CARD_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRCARD_NUMB.value)); //카드번호
                sReturnString += " CSPS_CODE="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRCSPS_CODE.value)); //전표처리상태
                sReturnString += " DEPT_CODE="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); //부서
                sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); //사원
                sReturnString += " CHIN_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.mskSHRCHIN_NUMB.value)); //사업자번호
                sReturnString += " CHIN_NAME="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRCHIN_NAME.value)); //가맹점명
                sReturnString += " SS_DEPT_CODE="  + this.fnc_Quote(this.fnc_Trim(application.GBL_DEPTCD));
                sReturnString += " SS_EMPL_NUMB="  + this.fnc_Quote(this.fnc_Trim(application.GBL_EMPLNO));

            } else if (sKind == "SAVE00") {
            
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="     + this.fnc_Quote(sKind);
                sReturnString += " APPR_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRAPPR_DATEF.value)); //승인일자FROM
                sReturnString += " APPR_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRAPPR_DATET.value)); //승인일자TO
                sReturnString += " CARD_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRCARD_NUMB.value)); //카드번호
                sReturnString += " CSPS_CODE="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRCSPS_CODE.value)); //전표처리상태

            } else if (sKind == "SAVE01")   {
            
                sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="     + this.fnc_Quote(sKind);
                sReturnString += " APPR_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.calSHRAPPR_DATEF.value)); //승인일자FROM
                sReturnString += " APPR_DATE2=" + this.fnc_Quote(this.fnc_Trim(this.calSHRAPPR_DATET.value)); //승인일자TO
                sReturnString += " CARD_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRCARD_NUMB.value)); //카드번호
                sReturnString += " CSPS_CODE="  + this.fnc_Quote(this.fnc_Trim(this.cmbSHRCSPS_CODE.value)); //전표처리상태
                sReturnString += " DEPT_CODE="  + this.fnc_Quote(this.fnc_Trim(this.edtSHRDEPT_CODE.value)); //부서
                sReturnString += " EMPL_NUMB="  + this.fnc_Quote(this.fnc_Trim(this.edtSHREMPL_NUMB.value)); //사원
            
            } else if (sKind == "PROC00") {
            
        		var sSous_Lnky = this.dsMAIN_TA_CARDAM.getColumn(0, "CARD_NUMB")
        				 + "-" + this.dsMAIN_TA_CARDAM.getColumn(0, "APPR_DATE")
        				 + "-" + this.dsMAIN_TA_CARDAM.getColumn(0, "CARD_APPR");
        					   
                sReturnString  = " pgm="       	+ this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="    	+ this.fnc_Quote(sKind);
                sReturnString += " ACCT_UNIT=" 	+ this.fnc_Quote("10"); //회계단위
                sReturnString += " ACCT_GUBN=" 	+ this.fnc_Quote("100"); //사업장
                sReturnString += " SLIP_DATE=" 	+ this.fnc_Quote(this.fnc_Trim(this.calSLIP_DATE.value)); //전표발행일
                sReturnString += " FORM_IDXX=" 	+ this.fnc_Quote(this.fnc_Trim(this.sPACKAGENAME)); //화면ID
                sReturnString += " EMPL_NUMB=" 	+ this.fnc_Quote(application.GBL_EMPLNO);
        		sReturnString += " DEPT_CODE=" 	+ this.fnc_Quote(application.GBL_DEPTCD);	//작성부서
        		sReturnString += " SLIP_GUBN=" 	+ this.fnc_Quote("TR011");	//법인카드비용전표
        		sReturnString += " TITL_NAME=" 	+ this.fnc_Quote("[법인카드승인] - " + this.calSLIP_DATE.value);
        		sReturnString += " SOUS_LNKY=" 	+ this.fnc_Quote(sSous_Lnky); //출처연결키
        	
        	 } else if (sKind == "PROC01") {
            
                sReturnString  = " pgm="       	+ this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="    	+ this.fnc_Quote(sKind);
                sReturnString += " SLIP_NUMB=" 	+ this.fnc_Quote(this.dsTA_CARDAM.getColumn(this.dsTA_CARDAM.rowposition, "SLIP_NUMB")); //전표번호
        	
        	 } else if (sKind == "PROC02") {
            
                sReturnString  = " pgm="       	+ this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="    	+ this.fnc_Quote(sKind);
                sReturnString += " ITFC_TYPE="	+ this.fnc_Quote("CARD");	//인터페이스유형
        	
        	 } else if (sKind == "SAVE04") {
            
                sReturnString  = " pgm="       	+ this.fnc_Quote(this.sPACKAGENAME);
                sReturnString += " action="    	+ this.fnc_Quote(sKind);
        //         sReturnString += " APPR_DATE="	+ this.fnc_Quote(this.dsTA_CARDAM.getColumn(this.dsTA_CARDAM.rowposition, "APPR_DATE"));
        //         sReturnString += " CARD_NUMB="	+ this.fnc_Quote(this.dsTA_CARDAM.getColumn(this.dsTA_CARDAM.rowposition, "CARD_NUMB"));
        //         sReturnString += " CARD_APPR="	+ this.fnc_Quote(this.dsTA_CARDAM.getColumn(this.dsTA_CARDAM.rowposition, "CARD_APPR"));
        //         sReturnString += " APPR_GUBN="	+ this.fnc_Quote(this.dsTA_CARDAM.getColumn(this.dsTA_CARDAM.rowposition, "APPR_GUBN"));
        	
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

        /*------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

            if (sMethodName == "SEARCH00") {
            
                this.grdTA_CARDAM.setCellProperty("head", this.fnc_GridColumnIndex(this.grdTA_CARDAM, "CHK"), "text", "0");
                this.fnc_Information(this.stInformation, this.dsTA_CARDAM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
                this.fnc_Message("TMM018", this.dsTA_CARDAM.rowcount);
                this.fn_Chk_Sum();
                
        		var iRow = this.dsTA_CARDAM.findRowExpr("CARD_NUMB=='" + this.aKeyValue[0] + "' && APPR_DATE=='" + this.aKeyValue[1] + "'"
        										  + " && CARD_APPR=='" + this.aKeyValue[2] + "' && APPR_GUBN=='" + this.aKeyValue[3] + "'");
         		if (iRow < 0) iRow = 0;
         		
         		//this.grdTA_CARDAM.clearSelect();
         		this.grdTA_CARDAM.selectRow(iRow);
         		this.dsTA_CARDAM.set_rowposition(iRow);
         		
        		this.aKeyValue[0] = "";
        		this.aKeyValue[1] = "";
        		this.aKeyValue[2] = "";	
        		this.aKeyValue[3] = "";	
        		
            } else if (sMethodName == "SAVE00") {

                this.fnc_Information(this.stInformation, 0, "SAVE");
                this.grdTA_CARDAM.setCellProperty("head", this.fnc_GridColumnIndex(this.grdTA_CARDAM, "CHK"), "text", "0");
                this.fnc_Message("TMM103"); 
                this.dsTA_CARDAM.applyChange();
                this.fn_Chk_Sum();
                
            } else if (sMethodName == "SAVE01") {
        		
        		this.fn_Search();
        		
            } else if (sMethodName == "SAVE04") {
        		
        		this.fnc_Message("EVM003"); 
        		this.fn_Search();
        		
            } else if (sMethodName == "PROC00") {
        		
        		//this.fnc_Message("TMM130", "전표생성");
        		this.fn_Search();
                this.fnc_ViewSlipForm(this.sSLIP_NUMB, "REV", this.sUSERLAVEL); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
                
        	} else if (sMethodName == "PROC01") {
        		
        		this.fnc_Message("TMM041"); 
        		this.fn_Search();
                
        	} else if (sMethodName == "PROC02") {
        		
        		this.fnc_Message("TMM125", "매입자료 가져오기가 완료되었습니다"); 
        		//this.fn_Search();
        		
            } else if (sMethodName == "GetCommCode") {
            
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRCSPS_CODE,dsSHRCSPS_CODE,0";
        			arrParam[1] = "COMBO,cmbALLBUDG_GUBN,dsSHRBUDG_GUBN,0";
        			arrParam[2] = "COMBO,cmbCSPS_CODE,dsCSPS_CODE,0";
        			arrParam[3] = "COMBO,cmbAPPR_GUBN,dsAPPR_GUBN,0";
        			arrParam[4] = "COMBO,cmbBUDG_GUBN,dsSHRBUDG_GUBN,0";
         			arrParam[5] = "GRID,grdTA_CARDAM,dsCSPS_CODE,CSPS_CODE";
         			arrParam[6] = "GRID,grdTA_CARDAM,dsAPPR_GUBN,APPR_GUBN";
        			arrParam[7] = "GRID,grdTA_CARDAM,dsBUDG_GUBN,BUDG_GUBN";
        		this.fnc_CommonCodeInnerBind(arrParam);
                
        		//사용중인 것만 표시
        		this.dsSHRBUDG_GUBN.filter("USEX_YSNO != '0'");
        		this.dsBUDG_GUBN.filter("USEX_YSNO != '0'");
            }

        }

        /*------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

            var arrParam = new Array();

            if ((obj.name == "imgHelpSHRDEPT_NAME") ||(obj.name == "edtSHRDEPT_NAME")) { // 조회 Help POPUP START
                
                arrParam[0] = "FAM0001";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRDEPT_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRDEPT_NAME";
                arrParam[5] = "edtSHRDEPT_CODE,edtSHRDEPT_NAME";
                arrParam[6] = "0,1";

            } else if ((obj.name == "imgHelpSHREMPL_NAME") ||(obj.name == "edtSHREMPL_NAME")) {
                
                arrParam[0] = "FAM0012";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHREMPL_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHREMPL_NAME";
                arrParam[5] = "edtSHREMPL_NUMB,edtSHREMPL_NAME";
                arrParam[6] = "0,1";

            } else if ((obj.name == "imgSHRCARD_NUMB") ||(obj.name == "edtSHRCARD_NAME")) {
                
                arrParam[0] = "TRM0031";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtSHRCARD_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtSHRCARD_NAME";
                arrParam[5] = "edtSHRCARD_NUMB,edtSHRCARD_NAME";
                arrParam[6] = "0,1";
        	
        	//일괄적용 항목
        	} else if ((obj.name == "imgHelpALLDEPT_NAME") ||(obj.name == "edtALLDEPT_NAME")) {
        		//일괄적용항목 부서
        		arrParam[0] = "FAM0001";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtALLDEPT_NAME.value);
                arrParam[3] = "Y";
                arrParam[4] = "edtALLDEPT_NAME";
                arrParam[5] = "edtALLDEPT_CODE,edtALLDEPT_NAME";
                arrParam[6] = "0,1";
                arrParam[9] = "fn_HelpPost_AllDeptCode";

            } else if ((obj.name == "imgHelpALLACCT_INTL") || (obj.name == "edtALLACCT_NAME")) {
        		//일괄적용항목 계정과목(작성부서별 사용권한)
        		arrParam[0] = "FAM0030"; //NDS 농심기획 전용
                arrParam[1] = this.calSLIP_DATE.value + "," + application.GBL_DEPTCD + ",D";	//차변계정만
                arrParam[2] = this.fnc_Trim(this.edtALLACCT_NAME.value);
                arrParam[3] = "Y";
                arrParam[4] = "edtALLACCT_NAME";
                arrParam[5] = "edtALLACCT_INTL,edtALLACCT_NAME";
                arrParam[6] = "0,1";
                arrParam[9] = "fn_HelpPost_AllAcctIntl";

            } else if ((obj.name == "imgHelpALLCSTC_CODE") || (obj.name == "edtALLCSTC_NAME")) {
        		//일괄적용항목 코스트센터
        		//NDS 농심기획 전용
        		arrParam[0] = (this.dsTA_ACCTXD.getColumn(0, "COST_GUBN") == "10") ? "BDM0009" : "BDM0010";
        		arrParam[1] = this.calSLIP_DATE.value + ",8,8,8," + this.edtALLDEPT_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtALLCSTC_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtALLCSTC_NAME";
        		arrParam[5] = "edtALLCSTC_CODE,edtALLCSTC_NAME";
        		arrParam[6] = "0,1";        
        		
            } else if ((obj.name == "imgHelpALLBDSB_CODE") || (obj.name == "edtALLBDSB_NAME")) {		
        		//일괄적용항목 예산
        		arrParam[0] = "BDM0007";
        		arrParam[1] = this.fnc_Trim(this.edtALLACCT_INTL.value);
        		arrParam[2] = this.fnc_Trim(this.edtALLBDSB_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtALLBDSB_NAME";
        		arrParam[5] = "edtALLBDSB_CODE,edtALLBDSB_NAME";
        		arrParam[6] = "0,1";
        	
            } else if ((obj.name == "imgHelpALLRCTI_EMNM") ||(obj.name == "edtALLRCTI_EMNM")) {
                //일괄적용항목 접대자
                arrParam[0] = "FAM0012";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtALLRCTI_EMNM.value);
                arrParam[3] = "N";
                arrParam[4] = "edtALLRCTI_EMNM";
                arrParam[5] = "edtALLRCTI_EMNR,edtALLRCTI_EMNM";
                arrParam[6] = "0,1";

            } else if ((obj.name == "imgHelpALLRCTC_NAME") ||(obj.name == "edtALLRCTC_NAME")) {
                //일괄적용항목 광고주
                arrParam[0] = "FAM0152";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtALLRCTC_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtALLRCTC_NAME";
                arrParam[5] = "edtALLRCTC_CODE,edtALLRCTC_NAME";
                arrParam[6] = "0,1";

        	//개별 항목
            } else if ((obj.name == "imgHelpDEPT_NAME") ||(obj.name == "edtDEPT_NAME")) {
        		//부서
        		arrParam[0] = "FAM0001";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtDEPT_NAME.value);
                arrParam[3] = "Y";
                arrParam[4] = "edtDEPT_NAME";
                arrParam[5] = "edtDEPT_CODE,edtDEPT_NAME";
                arrParam[6] = "0,1";
                arrParam[9] = "fn_HelpPost_DeptCode";

            } else if ((obj.name == "imgHelpACCT_NAME") ||(obj.name == "edtACCT_NAME")) {
                //계정과목(작성부서별 사용권한)
                arrParam[0] = "FAM0030"; //NDS 농심기획 전용
                arrParam[1] = this.calSLIP_DATE.value + "," + application.GBL_DEPTCD + ",D";	//차변계정만
                arrParam[2] = this.fnc_Trim(this.edtACCT_NAME.value);
                arrParam[3] = "Y";
                arrParam[4] = "edtACCT_NAME";
                arrParam[5] = "edtACCT_INTL,edtACCT_NAME";
                arrParam[6] = "0,1";
                arrParam[9] = "fn_HelpPost_AcctIntl";

            } else if ((obj.name == "imgHelpEMPL_NAME") ||(obj.name == "edtEMPL_NAME")) {
                //사용자
                arrParam[0] = "FAM0012";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtEMPL_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtEMPL_NAME";
                arrParam[5] = "edtEMPL_NUMB,edtEMPL_NAME";
                arrParam[6] = "0,1";

            } else if ((obj.name == "imgHelpRCTI_EMNM") ||(obj.name == "edtRCTI_EMNM")) {
                //접대자
                arrParam[0] = "FAM0012";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtRCTI_EMNM.value);
                arrParam[3] = "N";
                arrParam[4] = "edtRCTI_EMNM";
                arrParam[5] = "edtRCTI_EMNR,edtRCTI_EMNM";
                arrParam[6] = "0,1";

            } else if ((obj.name == "imgHelpRCTC_NAME") ||(obj.name == "edtRCTC_NAME")) {
                //광고주
                arrParam[0] = "FAM0152";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtRCTC_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtRCTC_NAME";
                arrParam[5] = "edtRCTC_CODE,edtRCTC_NAME";
                arrParam[6] = "0,1";
                
            } else if ((obj.name == "imgHelpCUST_NAME") ||(obj.name == "edtCUST_NAME")) {
                //거래처
                arrParam[0] = "FAM0021";
                arrParam[1] = "";
                arrParam[2] = this.fnc_Trim(this.edtCUST_NAME.value);
                arrParam[3] = "N";
                arrParam[4] = "edtCUST_NAME";
                arrParam[5] = "edtCUST_CODE,edtCUST_NAME";
                arrParam[6] = "0,1";

            } else if ((obj.name == "imgHelpCSTC_CODE") || (obj.name == "edtCSTC_NAME")) {
        		//코스트센터
        		//NDS 농심기획 전용
        		arrParam[0] = (this.dsTA_ACCTXD.getColumn(0, "COST_GUBN") == "10") ? "BDM0009" : "BDM0010";
        		arrParam[1] = this.calSLIP_DATE.value + ",8,8,8," + this.edtDEPT_CODE.value;
        		arrParam[2] = this.fnc_Trim(this.edtCSTC_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtCSTC_NAME";
        		arrParam[5] = "edtCSTC_CODE,edtCSTC_NAME";
        		arrParam[6] = "0,1";        
        		
            } else if ((obj.name == "imgHelpBDSB_CODE") || (obj.name == "edtBDSB_NAME")) {		
        		//예산
        		arrParam[0] = "BDM0007";
        		arrParam[1] = this.fnc_Trim(this.edtACCT_INTL.value);
        		arrParam[2] = this.fnc_Trim(this.edtBDSB_NAME.value);
        		arrParam[3] = "N";
        		arrParam[4] = "edtBDSB_NAME";
        		arrParam[5] = "edtBDSB_CODE,edtBDSB_NAME";
        		arrParam[6] = "0,1";
            }
            
            this.fnc_HelpDialogeAction(this, obj, arrParam);
            
        }

        /*----------------------------------------------------------------------------------+
         |  귀속부서별 계정별로 매핑되는 코스트센터가 1개인 경우 [코드 + ',' + 명칭] 리턴	|
         +----------------------------------------------------------------------------------*/
        this.fn_SetCostCenter = function (sInputGubn,sDept_Code) {
        	
        	this.sCSTC_CDNE = "";
        	
        	// 귀속부서별, 계정의 원가구분별 매핑되는 코스트센터 조회
            var sMethodName = "SEARCH17";
            var sInDataSet  = "";
            var sOutDataSet = "";
            var sArgument  = " pgm="        + this.fnc_Quote("FAMB0030"); 	//회계전표의 서비스 이용
        		sArgument += " action="     + this.fnc_Quote(sMethodName);
        		sArgument += " SLIP_DATE="  + this.fnc_Quote(this.fnc_Trim(this.calSLIP_DATE.value));
        		sArgument += " DEPT_CODE="  + this.fnc_Quote(this.fnc_Trim(sDept_Code));
        		sArgument += " COST_GUBN="  + this.fnc_Quote(this.dsTA_ACCTXD.getColumn(0, "COST_GUBN"));	//계정의 원가구분
            this.fnc_TransactionCall(this, "FAMB0030", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
            
        	//trace(" <<< sCSTC_CDNE >>> " + this.sCSTC_CDNE);
        		
        	if (sInputGubn == "ALL") {	//일괄항목 입력
        	
        		if (this.fnc_Length(this.fnc_Trim(this.sCSTC_CDNE)) > 0 && this.edtALLCSTC_NAME.readonly == false) {
        			
        			var arrCstc = this.fnc_Split(this.sCSTC_CDNE, ",");	//귀속부서별 계정별로 매핑되는 코스트센터가 1개인 경우 [코드 + ',' + 명칭] 리턴 
        			
        			this.edtALLCSTC_CODE.set_value(arrCstc[0]);
        			this.edtALLCSTC_NAME.set_value(arrCstc[1]);
        			
        		} else {
        		
        			this.edtALLCSTC_CODE.set_value("");
        			this.edtALLCSTC_NAME.set_value("");
        			
        		}
        		
        	} else {
        	
        		if (this.fnc_Length(this.fnc_Trim(this.sCSTC_CDNE)) > 0 && this.edtCSTC_NAME.readonly == false) {
        		
        			var arrCstc = this.fnc_Split(this.sCSTC_CDNE, ",");	//귀속부서별 계정별로 매핑되는 코스트센터가 1개인 경우 [코드 + ',' + 명칭] 리턴 
        		
        			this.dsTA_CARDAM.setColumn(this.dsTA_CARDAM.rowposition, "CSTC_CODE", arrCstc[0]);
        			this.dsTA_CARDAM.setColumn(this.dsTA_CARDAM.rowposition, "CSTC_NAME", arrCstc[1]);
        		
        		} else {
        		
        			this.dsTA_CARDAM.setColumn(this.dsTA_CARDAM.rowposition, "CSTC_CODE", "");
        			this.dsTA_CARDAM.setColumn(this.dsTA_CARDAM.rowposition, "CSTC_NAME", "");
        		
        		}
        	}

        }

        /*------------------------------+
         |  일괄적용항목 부서 변경 시	|
         +------------------------------*/
        this.fn_HelpPost_AllDeptCode = function (sRtn) {
        	
        	if (this.fnc_Length(this.fnc_Trim(sRtn)) < 1) return;	
        	var arrRtn = this.fnc_Split(sRtn, ",");
        	var sDept_Code = arrRtn[0];
        	
        	if (this.fnc_Length(this.fnc_Trim(this.edtALLACCT_INTL.value)) > 0) {
        		this.fn_SetCostCenter("ALL", sDept_Code);	// 코스트센터 셋팅
        	}

        }

        /*------------------------------+
         |  일괄적용항목 계정 변경 시	|
         +------------------------------*/
        this.fn_HelpPost_AllAcctIntl = function(sRtn) {
        	
        	if (this.fnc_Length(this.fnc_Trim(sRtn)) < 1) return;
        	
        	var arrRtn = this.fnc_Split(sRtn, ",");
        	
            var sCsus_Ysno = arrRtn[4];	//코스트센터 사용여부
        	
            if (sCsus_Ysno == "1") {
                this.fnc_SetReadonly(this.edtALLCSTC_NAME, false);
                this.stALLCSTC_CODE.set_cssclass("styFormItemCapBE");
                this.edtALLCSTC_CODE.set_value(arrRtn[4]);
                this.edtALLCSTC_NAME.set_value(arrRtn[5]);
            } else {
                this.fnc_SetReadonly(this.edtALLCSTC_NAME, true);
                this.stALLCSTC_CODE.set_cssclass("styFormItemCap");
                this.edtALLCSTC_CODE.set_value("");
                this.edtALLCSTC_NAME.set_value("");    
        	}

            var sBudg_Ysno = arrRtn[2];	//예산 사용여부
        	
            if (sBudg_Ysno == "1") {
                this.fnc_SetReadonly(this.cmbALLBUDG_GUBN, false);
                this.stALLBUDG_GUBN.set_cssclass("styFormItemCapBE");
                this.cmbALLBUDG_GUBN.set_value("10");
                
                this.fnc_SetReadonly(this.edtALLBDSB_NAME, false);
        		this.stALLBDSB_CODE.set_cssclass("styFormItemCapBE");
            } else {
                this.fnc_SetReadonly(this.cmbALLBUDG_GUBN, true);
                this.stALLBUDG_GUBN.set_cssclass("styFormItemCap");
                this.cmbALLBUDG_GUBN.set_value("");
                
                this.fnc_SetReadonly(this.edtALLBDSB_NAME, true);
        		this.stALLBDSB_CODE.set_cssclass("styFormItemCap");
                this.edtALLBDSB_CODE.set_value("");
                this.edtALLBDSB_NAME.set_value("");    
        	}
        	
            this.fn_Search_AcctInfo(arrRtn[0]);	// 계정코드 정보가져오기
        	
        	
            var sRcti_Ysno = this.fnc_Trim(this.dsTA_ACCTXD.getColumn(0, "RCTI_YSNO"));	//접대자 관리항목
        	
            if (sRcti_Ysno == "1") {
        		this.fnc_SetReadonly(this.edtALLRCTI_EMNM, false);
                this.stALLRCTI_EMNR.set_cssclass("styFormItemCapBE");
            } else {
        		this.fnc_SetReadonly(this.edtALLRCTI_EMNM, true);
                this.stALLRCTI_EMNR.set_cssclass("styFormItemCap");
        		this.edtALLRCTI_EMNR.set_value("");
        		this.edtALLRCTI_EMNM.set_value("");
            }
            
            var sBgin_Ysno = this.fnc_Trim(this.dsTA_ACCTXD.getColumn(0, "BGIN_YSNO"));	//시작일자 관리항목
            var sEndx_Ysno = this.fnc_Trim(this.dsTA_ACCTXD.getColumn(0, "ENDX_YSNO"));	//종료일자 관리항목
        	
            if (sBgin_Ysno == "1" || sEndx_Ysno == "1") {
        		this.fnc_SetReadonly(this.calALLBGIN_DATE, false);
        		this.fnc_SetReadonly(this.calALLENDX_DATE, false);
                this.stALLBGIN_DATE.set_cssclass("styFormItemCapBE");
            } else {
        		this.fnc_SetReadonly(this.calALLBGIN_DATE, true);
        		this.fnc_SetReadonly(this.calALLENDX_DATE, true);
                this.stALLBGIN_DATE.set_cssclass("styFormItemCap");
        		this.calBGIN_DATE.set_value("");
        		this.calENDX_DATE.set_value("");
            }
            
            var sRctc_Ysno = this.fnc_Trim(this.dsTA_ACCTXD.getColumn(0, "RCTC_YSNO"));	//광고주 관리항목
        	
            if (sRctc_Ysno == "1") {
        		this.fnc_SetReadonly(this.edtALLRCTC_NAME, false);
                this.stALLRCTC_CODE.set_cssclass("styFormItemCapBE");
            } else {
        		this.fnc_SetReadonly(this.edtALLRCTC_NAME, true);
                this.stALLRCTC_CODE.set_cssclass("styFormItemCap");
        		this.edtALLRCTC_CODE.set_value("");
        		this.edtALLRCTC_NAME.set_value("");
            }
            
            this.fn_SetCostCenter("ALL", this.edtALLDEPT_CODE.value);	// 코스트센터 셋팅
            
        }

        /*------------------+
         |  부서 변경 시	|
         +------------------*/
        this.fn_HelpPost_DeptCode = function (sRtn) {
        	
        	if (this.fnc_Length(this.fnc_Trim(sRtn)) < 1) return;
        	var arrRtn = this.fnc_Split(sRtn, ",");
        	var sDept_Code = arrRtn[0];
        	
        	this.fn_Search_AcctInfo(this.dsTA_CARDAM.getColumn(this.dsTA_CARDAM.rowposition, "ACCT_INTL"));	// 계정코드 정보가져오기
        	this.fn_SetCostCenter("", sDept_Code);	// 코스트센터 셋팅
        	
        }

        /*----------------------+
         |  계정과목 변경 시	|
         +----------------------*/
        this.fn_HelpPost_AcctIntl = function (sRtn) {
        	
        	if (this.fnc_Length(this.fnc_Trim(sRtn)) < 1) return;
        	
        	var arrRtn = this.fnc_Split(sRtn, ",");
        	
        	var iRow = this.dsTA_CARDAM.rowposition;	
        	this.dsTA_CARDAM.setColumn(iRow, "ACCT_INTL", arrRtn[0]);		
        	
        	//코스트센터, 예산 초기화
        	this.dsTA_CARDAM.setColumn(iRow, "CSTC_CODE", "");
        	this.dsTA_CARDAM.setColumn(iRow, "CSTC_NAME", "");
        	this.dsTA_CARDAM.setColumn(iRow, "BUDG_GUBN", "");
        	this.dsTA_CARDAM.setColumn(iRow, "BDSB_CODE", "");
        	this.dsTA_CARDAM.setColumn(iRow, "BDSB_NAME", "");

        	this.fn_Search01(arrRtn[0], iRow);	// 계정코드 정보가져오기	
        	this.fn_SetCostCenter("", this.dsTA_CARDAM.getColumn(iRow, "DEPT_CODE"));	// 코스트센터 셋팅
        	
        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        this.fn_Search_AcctInfo = function (sAcctCode) {
        	
        	this.fnc_DatasetClear("dsTA_ACCTXD");
        	
            var sMethodName = "SEARCH01";
            var sInDataSet 	= "";
            var sOutDataSet = "dsTA_ACCTXD=dsTA_ACCTXD";    
            var sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 	+ this.fnc_Quote(sMethodName); 
        		sReturnString += " ACCT_INTL=" 	+ this.fnc_Quote(sAcctCode); //계정코드
            var sArgument = sReturnString;
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack", false);
            
        }

        this.fn_Search01 = function (sAcctCode,nRow) {
        	
        	this.fn_Search_AcctInfo(sAcctCode);	// 계정코드 정보가져오기
        	
            this.dsTA_CARDAM.set_enableevent(false);
            this.dsTA_CARDAM.set_updatecontrol(false);

            this.dsTA_CARDAM.copyRow(nRow, this.dsTA_ACCTXD, 0);
        	
            // 부가세를 확인한다
            // 20160425 김남호 : 법인카드승인 간이과세자여서 부가세 해제지만 계정변경시 fn_Search01로 다시 부가세 적용됨 수정
            var TAX_OK = this.fnc_Trim(this.dsTA_ACCTXD.getColumn(0, "TAX_OK"));

            if (TAX_OK != "Y") {
            
                this.dsTA_CARDAM.setColumn(nRow, "VATX_YSNO", "");
                this.chkVATX_YSNO.set_visible(false);
                
            } else if (this.dsTA_CARDAM.getColumn(nRow, "CLOSE_YN") != "1" &&
        				nexacro.toNumber(this.dsTA_CARDAM.getColumn(nRow, "VATX_AMNT"), 0) != 0){

        		this.dsTA_CARDAM.setColumn(nRow, "VATX_YSNO", "1");
        		this.chkVATX_YSNO.set_visible(true);
        		
        	} else {

        		this.dsTA_CARDAM.setColumn(nRow, "VATX_YSNO", "");
        		this.chkVATX_YSNO.set_visible(false);
        		
        	}
        	
            if (this.fnc_Trim(this.dsTA_CARDAM.getColumn(nRow, "BUDG_YSNO")) == "1") {
                this.dsTA_CARDAM.setColumn(nRow, "BUDG_GUBN", "10");
            }

            this.dsTA_CARDAM.set_enableevent(true);
            this.dsTA_CARDAM.set_updatecontrol(true);
            
            this.fn_EnableRow(nRow);
            
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        this.dsTA_CARDAM_cancolumnchange = function(obj,e) {
        	
        	if (e.columnid == "CHK") return this.fn_ChkUpdate();
        	return true;
        	
        }

        this.dsTA_CARDAM_oncolumnchanged = function (obj,e) {

            if (e.oldvalue == e.newvalue) return;

        	this.fn_Chk_Sum();
        	
            if (e.columnid == "CHK") {
        		
        		obj.set_updatecontrol(false);
        		obj.setRowType(e.row, Dataset.ROWTYPE_NORMAL);
                obj.set_updatecontrol(true);
                
            } else  if (e.columnid == "BUDG_GUBN") {

                if (e.newvalue == "10") {
                    // 부서예산
                } else {

                }

            } else if (e.columnid == "SUPP_AMNT") {
                
                // 공급가액
                this.dsTA_CARDAM.setColumn(e.row, "VATX_AMNT", nexacro.toNumber(this.dsTA_CARDAM.getColumn(e.row, "APPR_AMNT")) - nexacro.toNumber(this.dsTA_CARDAM.getColumn(e.row, "SUPP_AMNT")));
            
            }

        }

        /*------------------------+
         | 일괄적용 버튼 클릭시  |
         +-------------------------*/
        this.btnAPPLY_ALL_onclick = function (obj,e) {

            if (this.dsTA_CARDAM.rowcount == 0) return false;

            if (this.dsTA_CARDAM.getCaseCount("CHK=='1'") == 0) {
                this.fnc_Message("TMM125", "일괄넣기 할 데이터를 선택하세요");
                return false;
            }
        	
        	this.grdTA_CARDAM.set_enableredraw(false);
            for (var i = 0 ; i < this.dsTA_CARDAM.rowcount; i++) {
                if (this.dsTA_CARDAM.getColumn(i, "CHK") != "1") continue;
                
        		//trace(this.dsTA_CARDAM.getColumn(i, "CARD_NUMB"));
                //this.dsTA_CARDAM.set_enableevent(false);

                // 부가세를 확인한다
                // 20160129 김남호 : 법인카드승인 간이과세자여서 부가세 해제 했는데 일괄적용시 다시 부가세적용됨 수정
                var TAX_OK = this.fnc_Trim(this.dsTA_CARDAM.getColumn(i, "TAX_OK"));

                this.dsTA_CARDAM.setColumn(i, "TAX_OK", TAX_OK); //설정한 간이과세자 정보를 다시 cardam DS에 설정

                if (TAX_OK != "Y") {        
                    this.dsTA_CARDAM.setColumn(i, "VATX_YSNO", "");
                } else if ( this.dsTA_CARDAM.getColumn(i, "CLOSE_YN") != "1" && nexacro.toNumber(this.dsTA_CARDAM.getColumn(i, "VATX_AMNT"), 0) != 0) {
                    this.dsTA_CARDAM.setColumn(i, "VATX_YSNO", "1");
                } else {
        			this.dsTA_CARDAM.setColumn(i, "VATX_YSNO", "");
        		}

                /* 20160212 김남호 : 일괄적용시 접대비 등 부가세제외계정 체크하여 부가세 제외 */
                if (this.dsTA_CARDAM.getColumn(i, "VATX_YSNO") == "1") {
                    this.fn_Search01(this.dsTA_CARDAM.getColumn(i, "ACCT_INTL"), i);
                }

                this.dsTA_CARDAM.setColumn(i, "ACCT_INTL", this.edtALLACCT_INTL.value); //계정과목
                this.dsTA_CARDAM.setColumn(i, "ACCT_NAME", this.edtALLACCT_NAME.value); //계정과목명
                this.dsTA_CARDAM.setColumn(i, "REMK_NOTE", this.edtALLREMK_NOTE.value); //적요
                this.dsTA_CARDAM.setColumn(i, "CSTC_CODE", this.edtALLCSTC_CODE.value);	//코스트센터
                this.dsTA_CARDAM.setColumn(i, "CSTC_NAME", this.edtALLCSTC_NAME.value);
                this.dsTA_CARDAM.setColumn(i, "BUDG_GUBN", this.cmbALLBUDG_GUBN.value); //예산구분
                this.dsTA_CARDAM.setColumn(i, "BDSB_CODE", this.edtALLBDSB_CODE.value);
                this.dsTA_CARDAM.setColumn(i, "BDSB_NAME", this.edtALLBDSB_NAME.value);
                this.dsTA_CARDAM.setColumn(i, "DEPT_CODE", this.edtALLDEPT_CODE.value); //부서코드
                this.dsTA_CARDAM.setColumn(i, "DEPT_NAME", this.edtALLDEPT_NAME.value); //부서명
                this.dsTA_CARDAM.setColumn(i, "RCTI_EMNR", this.edtALLRCTI_EMNR.value); //접대자
                this.dsTA_CARDAM.setColumn(i, "RCTI_EMNM", this.edtALLRCTI_EMNM.value); //접대자명
        		this.dsTA_CARDAM.setColumn(i, "BGIN_DATE", this.calALLBGIN_DATE.value); //기간F
                this.dsTA_CARDAM.setColumn(i, "ENDX_DATE", this.calALLENDX_DATE.value); //기간T
                this.dsTA_CARDAM.setColumn(i, "RCTC_CODE", this.edtALLRCTC_CODE.value); //광고주
                this.dsTA_CARDAM.setColumn(i, "RCTC_NAME", this.edtALLRCTC_NAME.value); //광고주명

                //this.dsTA_CARDAM.set_enableevent(true);
            }
            
        	var e = new nexacro.DSRowPosChangeEventInfo();
        	e.newrow =	this.dsTA_CARDAM.rowposition;
        	this.dsTA_CARDAM_onrowposchanged(this.dsTA_CARDAM, e);

            this.fn_EnableRow(this.dsTA_CARDAM.rowposition);
            
            this.grdTA_CARDAM.set_enableredraw(true);
            
        }

        /*-----------------------+
         | 전표처리 버튼 클릭시  |
         +-----------------------*/
        this.btnCreateSlip_onclick = function (obj,e) {
        	
        	if (!this.fn_CreateSlipItemCheck()) return;

        	this.aKeyValue[0] = this.dsTA_CARDAM.getColumn(this.dsTA_CARDAM.rowposition, "CARD_NUMB");
            this.aKeyValue[1] = this.dsTA_CARDAM.getColumn(this.dsTA_CARDAM.rowposition, "APPR_DATE");
            this.aKeyValue[2] = this.dsTA_CARDAM.getColumn(this.dsTA_CARDAM.rowposition, "CARD_APPR");
            this.aKeyValue[3] = this.dsTA_CARDAM.getColumn(this.dsTA_CARDAM.rowposition, "APPR_GUBN");

            var sMethodName = "PROC00";
            var sInDataSet 	= "dsMAIN_TA_CARDAM=dsMAIN_TA_CARDAM:A";
            var sOutDataSet = "";
            var sArgument 	= this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            this.grdTA_CARDAM.setFocus();
            
        }

        /*-----------------------+
         | 전표삭제 버튼 클릭시  |
         +-----------------------*/
        this.btnDeleteSlip_onclick = function(obj,e) {
        	
        	if (!this.fn_DeleteSlipItemCheck()) return;

        	this.aKeyValue[0] = this.dsTA_CARDAM.getColumn(this.dsTA_CARDAM.rowposition, "CARD_NUMB");
            this.aKeyValue[1] = this.dsTA_CARDAM.getColumn(this.dsTA_CARDAM.rowposition, "APPR_DATE");
            this.aKeyValue[2] = this.dsTA_CARDAM.getColumn(this.dsTA_CARDAM.rowposition, "CARD_APPR");
            this.aKeyValue[3] = this.dsTA_CARDAM.getColumn(this.dsTA_CARDAM.rowposition, "APPR_GUBN");

            var sMethodName = "PROC01";
            var sInDataSet 	= "";
            var sOutDataSet = "";
            var sArgument 	= this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            this.grdTA_CARDAM.setFocus();
            
        }

        /*--------------+
         |	로우변경 시 |
         +--------------*/
        this.dsTA_CARDAM_onrowposchanged = function (obj,e) {

            this.fnc_SetReadonly(this.chkSTAT, true);

            if (e.newrow == -1) return;
            
            this.fn_Search01(this.dsTA_CARDAM.getColumn(e.newrow, "ACCT_INTL"), e.newrow);
            

            var sCsps_Code = this.dsTA_CARDAM.getColumn(e.newrow, "CSPS_CODE");
            
            if (sCsps_Code == "0") {	// 미처리
                this.fnc_SetReadonly(this.chkSTAT, false);
                this.btnDeleteSlip.set_enable(false);

                this.fnc_SetReadonly(this.mskSUPP_AMNT, false);
                this.fnc_SetReadonly(this.chkVATX_YSNO, false);
                this.fnc_SetReadonly(this.edtACCT_NAME, false);
                this.fnc_SetReadonly(this.edtDEPT_NAME, false);
                this.fnc_SetReadonly(this.edtREMK_NOTE, false);
                this.fnc_SetReadonly(this.edtEMPL_NAME, false);
                //this.fnc_SetReadonly(this.cmbBUDG_GUBN, false);

                this.edtEMPL_NAME.style.set_color("");
                this.cmbBUDG_GUBN.style.set_color("");

                //this.fn_EnableRow(e.newrow);
            } else {
                this.fnc_SetReadonly(this.chkSTAT, true);
                this.btnDeleteSlip.set_enable(true);

                this.fnc_SetReadonly(this.mskSUPP_AMNT, true);
                this.fnc_SetReadonly(this.chkVATX_YSNO, true);
                this.fnc_SetReadonly(this.edtACCT_NAME, true);
                this.fnc_SetReadonly(this.edtDEPT_NAME, true);
                this.fnc_SetReadonly(this.edtREMK_NOTE, true);
                this.fnc_SetReadonly(this.edtEMPL_NAME, true);
                //this.fnc_SetReadonly(this.cmbBUDG_GUBN, true);

                this.edtEMPL_NAME.style.set_color("");
                this.cmbBUDG_GUBN.style.set_color("");
                
                this.fnc_SetReadonly(this.edtCSTC_NAME, true);
                this.fnc_SetReadonly(this.cmbBUDG_GUBN, true);
                this.fnc_SetReadonly(this.edtBDSB_NAME, true);
                this.fnc_SetReadonly(this.calBGIN_DATE, true);
                this.fnc_SetReadonly(this.calENDX_DATE, true);
                
            }
            
        	this.grdTA_CARDAM.set_selecttype("multirow");
        	
        }

        /*------------------------------+
         |	그리드 더블클릭 시 전표조회 |
         +------------------------------*/
        this.grdTA_CARDAM_oncelldblclick = function (obj,e) {

            var columnName = this.fnc_getColId(obj, e.cell);	
        	this.fn_SlipPopUp(columnName);
        	
        }

        /*-----------+
         |	전표팝업 |
         +-----------*/
        this.fn_SlipPopUp = function (columnName) {
            
            if (columnName != "LSLI_NUMB" && columnName != "DISP_NUMB") return;
                
        	// 전표번호
        	if (this.fnc_DatasetChangeCheck("dsTA_CARDAM")) {
        		return this.fnc_Message("TMM015", "전표조회");
        	}
        	
        	var gubun = "SHR";
        	var sSlip_Numb = "";
        	var sSlip_Line = "";
        	if (columnName == "DISP_NUMB") {
        		gubun = "REV";
        		sSlip_Numb = this.dsTA_CARDAM.getColumn(this.dsTA_CARDAM.rowposition, "SLIP_NUMB");
        		sSlip_Line = this.dsTA_CARDAM.getColumn(this.dsTA_CARDAM.rowposition, "SLIP_LINE");
        	}
        	
        	if (this.fnc_Length(sSlip_Numb) < 14) return;

        	this.fnc_ViewSlipForm(sSlip_Numb, gubun, this.sUSERLAVEL, "", sSlip_Line); //NEW:직접입력, REV:수정 ,SHR:조회 ,SEM:반자동전표
        	
        	//this.fn_Search();
        	
        }

        
        /*-------------------+
         |	범위선택 클릭 시 |
         +-------------------*/
        this.btnCheck_onclick = function (obj,e) {
           
            if (!this.fn_ChkUpdate()) return;

            this.dsTA_CARDAM.set_enableevent(false);
            this.dsTA_CARDAM.set_updatecontrol(false);

            for (var i = 0; i < this.dsTA_CARDAM.rowcount; i++) {
            
                if (this.grdTA_CARDAM.isSelectedCell(1, "Body", i) == true) {
                    if (this.dsTA_CARDAM.getColumn(i, "CHK_GUBN") != "1") {
                        this.dsTA_CARDAM.setColumn(i, "CHK", 1);
                        this.dsTA_CARDAM.setRowType(i, Dataset.ROWTYPE_NORMAL);
                    }
                }
            }

            this.dsTA_CARDAM.set_updatecontrol(true);
            this.dsTA_CARDAM.set_enableevent(true);

        	//this.fn_Chk_Sum();

        }

        /*-------------------------+
         |	거래처체크적용 클릭 시 |
         +-------------------------*/
        this.btnCustCheck_onclick = function (obj,e) {
            
            if (this.dsTA_CARDAM.getCaseCount("CHK==\"1\"") == 0) {
                this.fnc_Message("TMM125", "데이터를 선택하세요!!");
                return false;
            }

            // 선택한 대상만 복사
            //this.dsTA_CARDAM.set_enableevent(false);
            this.dsTA_CARDAM.filter("CHK==\"1\"");
            this.dsMAIN_TA_CARDAM.copyData(this.dsTA_CARDAM, true);
            this.dsTA_CARDAM.filter("");
            //this.dsTA_CARDAM.set_enableevent(true);

            var sMethodName = "SAVE01";
            var sInDataSet 	= "dsMAIN_TA_CARDAM=dsMAIN_TA_CARDAM:A";
            var sOutDataSet = "dsTA_CARDAM=dsTA_CARDAM";
            var sArgument 	= this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            this.grdTA_CARDAM.setFocus(); //재 클릭 방지를 위해 Focus 이동

        }

        /*------------------+
         |	변경데이터 체크 |
         +------------------*/
        this.fn_ChkUpdate = function () {

        	if (this.fnc_DatasetChangeCheck("dsTA_CARDAM")) {
        		this.fnc_Message("TMM125", "변경된 데이터가 존재합니다. 저장 후 전표를 생성할 자료를 선택하세요");
        		return false;
        	}

        	return true;
        }

        /*-------------------+
         |	전표번호 클릭 시 |
         +-------------------*/
        this.mskDISP_NUMB_oneditclick = function(obj,e) {

        	this.fn_SlipPopUp("DISP_NUMB");

        }

        /*-------------------+
         |	전표번호 클릭 시 |
         +-------------------*/
        this.mskLSLI_NUMB_oneditclick = function(obj,e) {
            
            this.fn_SlipPopUp("LSLI_NUMB");
            
        }

        // 계정관리항목을 확인해서 필드의 enable을 결정한다.
        this.fn_EnableRow = function (nRow) {
            
        	this.dsTA_CARDAM.set_updatecontrol(false);
        	
            var sCsus_Ysno = this.fnc_Trim(this.dsTA_CARDAM.getColumn(nRow, "CSUS_YSNO"));
            
            if (sCsus_Ysno == "1") {
                this.fnc_SetReadonly(this.edtCSTC_NAME, false);
                this.stCSTC_CODE.set_cssclass("styFormItemCapBE");
            } else {
                this.fnc_SetReadonly(this.edtCSTC_NAME, true);
                this.stCSTC_CODE.set_cssclass("styFormItemCap");
                if (this.dsTA_CARDAM.getRowType(nRow) != Dataset.ROWTYPE_NORMAL) {        
        			this.edtCSTC_CODE.set_value("");
        			this.edtCSTC_NAME.set_value("");
        		}
            }
            
            var sBudg_Ysno = this.fnc_Trim(this.dsTA_CARDAM.getColumn(nRow, "BUDG_YSNO"));
            
            if (sBudg_Ysno == "1") {
                this.fnc_SetReadonly(this.cmbBUDG_GUBN, false);
                this.stBUDG_GUBN.set_cssclass("styFormItemCapBE");
                
                this.fnc_SetReadonly(this.edtBDSB_NAME, false);
                this.stBDSB_CODE.set_cssclass("styFormItemCapBE");
            } else {
                this.fnc_SetReadonly(this.cmbBUDG_GUBN, true);
                this.stBUDG_GUBN.set_cssclass("styFormItemCap");
                
                this.fnc_SetReadonly(this.edtBDSB_NAME, true);
                this.stBDSB_CODE.set_cssclass("styFormItemCap");
                
                if (this.dsTA_CARDAM.getRowType(nRow) != Dataset.ROWTYPE_NORMAL) {        
        			this.edtBDSB_CODE.set_value("");
        			this.edtBDSB_NAME.set_value("");
        		}
            }

            var sRcti_Ysno = this.fnc_Trim(this.dsTA_CARDAM.getColumn(nRow, "RCTI_YSNO"));	//접대자 관리항목
        	
            if (sRcti_Ysno == "1") {
        		this.fnc_SetReadonly(this.edtRCTI_EMNM, false);
                this.stRCTI_EMNR.set_cssclass("styFormItemCapBE");
            } else {
        		this.fnc_SetReadonly(this.edtRCTI_EMNM, true);
                this.stRCTI_EMNR.set_cssclass("styFormItemCap");
        		
        		if (this.dsTA_CARDAM.getRowType(nRow) != Dataset.ROWTYPE_NORMAL) {        
        			this.edtRCTI_EMNR.set_value("");
        			this.edtRCTI_EMNM.set_value("");
        		}
            }
            
            var sBgin_Ysno = this.fnc_Trim(this.dsTA_CARDAM.getColumn(nRow, "BGIN_YSNO"));	//시작일자 관리항목
            var sEndx_Ysno = this.fnc_Trim(this.dsTA_CARDAM.getColumn(nRow, "ENDX_YSNO"));	//종료일자 관리항목
        	
            if (sBgin_Ysno == "1" || sEndx_Ysno == "1") {
        		this.fnc_SetReadonly(this.calBGIN_DATE, false);
        		this.fnc_SetReadonly(this.calENDX_DATE, false);
                this.stBGIN_DATE.set_cssclass("styFormItemCapBE");
            } else {
        		this.fnc_SetReadonly(this.calBGIN_DATE, true);
        		this.fnc_SetReadonly(this.calENDX_DATE, true);
                this.stBGIN_DATE.set_cssclass("styFormItemCap");
        		
        		if (this.dsTA_CARDAM.getRowType(nRow) != Dataset.ROWTYPE_NORMAL) {        
        			this.calBGIN_DATE.set_value("");
        			this.calENDX_DATE.set_value("");
        		}
            }
            
            var sRctc_Ysno = this.fnc_Trim(this.dsTA_CARDAM.getColumn(nRow, "RCTC_YSNO"));	//광고주 관리항목

            if (sRctc_Ysno == "1") {
        		this.fnc_SetReadonly(this.edtRCTC_NAME, false);
                this.stRCTC_CODE.set_cssclass("styFormItemCapBE");
            } else {
        		this.fnc_SetReadonly(this.edtRCTC_NAME, true);
                this.stRCTC_CODE.set_cssclass("styFormItemCap");
        		
        		if (this.dsTA_CARDAM.getRowType(nRow) != Dataset.ROWTYPE_NORMAL) {        
        			this.edtRCTC_CODE.set_value("");
        			this.edtRCTC_NAME.set_value("");
        		}
            }
            
            this.dsTA_CARDAM.set_updatecontrol(true);
            
        }

        this.grdTA_CARDAM_onheadclick = function(obj,e) {
        	
        	if ( (obj.getCellProperty("head", e.cell, "edittype") != "checkbox") || (e.cell != obj.getBindCellIndex("body", "CHK")) ) return;
        			
        	if (!this.fn_ChkUpdate()) return;
        	
        	var iCheckValue = 0;
        	var objDataSet = this.objects[obj.binddataset];
        	
        	if (nexacro.toNumber(obj.getCellProperty("head", e.cell, "text"), 0) == 1) {
        		obj.setCellProperty("head", e.cell, "text", "0");
        		iCheckValue = 0;
        	} else {
        		obj.setCellProperty("head", e.cell, "text", "1");
        		iCheckValue = 1;
        	}
        	
        	/* Dataset에 Value 일괄 설정 */
        	objDataSet.set_enableevent(false);
        	objDataSet.set_updatecontrol(false);
        	for (var i=0; i < objDataSet.rowcount; i++) {
        		
        		var sChk_Gubn = this.fnc_Trim(objDataSet.getColumn(i, "CHK_GUBN"));

        		if (sChk_Gubn != "1") {
        			objDataSet.setColumn(i, "CHK", iCheckValue);
        			objDataSet.setRowType(i, Dataset.ROWTYPE_NORMAL);
        		}
        		
        	}
        	objDataSet.set_updatecontrol(true);
        	objDataSet.set_enableevent(true);
        	
        	this.fn_Chk_Sum();
        	
        }

        /*----------------------------+
         |	매입자료 가져오기 클릭 시 |
         +----------------------------*/
        this.btnBicnet_onclick = function(obj,e) {
        	
        	if (!this.fnc_Message("TMM140", "카드사의 법인카드 매입내역 자료를 가져오시겠습니까")) return;
        	
            var sMethodName = "PROC02";
            var sInDataSet 	= "";
            var sOutDataSet = "";
            var sArgument 	= this.fn_CreateArgument(sMethodName);
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        // 선택한건의 합계를 구한다.
        this.fn_Chk_Sum = function () {

        	this.mskCHK_CNT.set_value(0);	//선택건수
        	this.mskAMNT_SUM.set_value(0);  // 정리금액합계

        	for (var row = 0; row < this.dsTA_CARDAM.rowcount; row++) {
        	
        		if (this.dsTA_CARDAM.getColumn(row, "CHK") != "1") continue;

        		var iAmnt_Sum = nexacro.toNumber(this.mskAMNT_SUM.value, 0); // 값을 숫자로 변환. 없으면 0 ㅎㅎ
        		var iAppr_Amnt = nexacro.toNumber(this.dsTA_CARDAM.getColumn(row, "APPR_AMNT"), 0); //청구금액

        		this.mskAMNT_SUM.set_value((iAmnt_Sum + iAppr_Amnt));
        		this.mskCHK_CNT.set_value((nexacro.toNumber(this.mskCHK_CNT.value, 0) + 1));
        	}
        }

        /*------------------------------------+
         |	경과비용전표생성 허용처리 클릭 시 |
         +------------------------------------*/
        this.btnSlipPermit_onclick = function(obj,e) {
        	
        	var sSepp_Ysno = "1";
        	
        	if (!this.fn_SlipPermitCheck(sSepp_Ysno)) return;
        	
            var sMethodName = "SAVE04";
            var sInDataSet 	= "dsMAIN_TA_CARDAM=dsMAIN_TA_CARDAM:A";
            var sOutDataSet = "";
            var sArgument 	= this.fn_CreateArgument(sMethodName);
        		sArgument  += " SEPP_YSNO="	+ this.fnc_Quote(sSepp_Ysno);	//허용
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        }

        /*------------------------------------+
         |	경과비용전표생성 허용취소 클릭 시 |
         +------------------------------------*/
        this.btnSlipPermitCancel_onclick = function(obj,e) {
        	
        	var sSepp_Ysno = "0";
        	
        	if (!this.fn_SlipPermitCheck(sSepp_Ysno)) return;

            this.aKeyValue[0] = this.dsTA_CARDAM.getColumn(this.dsTA_CARDAM.rowposition, "CARD_NUMB");
            this.aKeyValue[1] = this.dsTA_CARDAM.getColumn(this.dsTA_CARDAM.rowposition, "APPR_DATE");
            this.aKeyValue[2] = this.dsTA_CARDAM.getColumn(this.dsTA_CARDAM.rowposition, "CARD_APPR");
            this.aKeyValue[3] = this.dsTA_CARDAM.getColumn(this.dsTA_CARDAM.rowposition, "APPR_GUBN");
            
            var sMethodName = "SAVE04";
            var sInDataSet 	= "dsMAIN_TA_CARDAM=dsMAIN_TA_CARDAM:A";
            var sOutDataSet = "";
            var sArgument 	= this.fn_CreateArgument(sMethodName);
        		sArgument  += " SEPP_YSNO="	+ this.fnc_Quote(sSepp_Ysno);	//허용취소
            this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
            
        }

        /*--------------------------------------+
         | 경과비용전표생성 허용처리 조건 체크  |
         +--------------------------------------*/
        this.fn_SlipPermitCheck = function (sSeppYsno) {

            if (this.fnc_DatasetChangeCheck("dsTA_CARDAM")) return this.fnc_Message("TMM023");
            if (this.sUSERLAVEL != "1") return this.fnc_Message("TMM300", "관리자만 처리가능합니다.");
            
            if (this.dsTA_CARDAM.getCaseCount("CHK=='1'") == 0) {
                this.fnc_Message("TMM125", "처리할 자료를 선택하세요");
                return false;
            }

            var sMsg = "";
            
            if (sSeppYsno == "1") {
        		
        		// 필수 입력 항목 체크
        		for (var i = 0; i < this.dsTA_CARDAM.rowcount; i++) {
            
        			if (this.dsTA_CARDAM.getColumn(i, "CHK") != "1") continue;

        			var sAppr_Date = this.dsTA_CARDAM.getColumn(i, "APPR_DATE");	//승인일자
        			var sSrvr_Date = this.fnc_GetServerDateTime("DATE");			//오늘
        			
        			if (this.fnc_AddDate(sAppr_Date, 10) >= sSrvr_Date) {
        				return this.fnc_CheckPostAction("TMM125", "10일이 경과되지 않은 법인카드 사용내역입니다. 승인일자[" + sAppr_Date + "]", this.dsTA_CARDAM, i, this.calAPPR_DATE, "");
        			}
        		}		
        		
        		sMsg = "전표생성 허용처리";		
        		
        	} else {
        		
        		
        		// 필수 입력 항목 체크
        		for (var i = 0; i < this.dsTA_CARDAM.rowcount; i++) {
            
        			if (this.dsTA_CARDAM.getColumn(i, "CHK") != "1") continue;

        			var sSepp_Ysno = this.dsTA_CARDAM.getColumn(i, "SEPP_YSNO");
        			
        			if (sSepp_Ysno != 1) {
        				return this.fnc_CheckPostAction("TMM125", "경과비용 전표생성 허용처리 되지 않은 건입니다", this.dsTA_CARDAM, i, this.calAPPR_DATE, "");
        			}
        		}
        			
        		sMsg = "전표생성 허용 취소처리";
        		
        	}
        	
        	this.fnc_DatasetClear("dsMAIN_TA_CARDAM");

        	// 선택한 대상만 복사
        	this.dsTA_CARDAM.filter("CHK=='1'");
        	this.dsMAIN_TA_CARDAM.copyData(this.dsTA_CARDAM, true);
        	for (var i = 0; i <= this.dsMAIN_TA_CARDAM.rowcount; i++) {
        		this.dsMAIN_TA_CARDAM.setColumn(i, "SEPP_YSNO", sSeppYsno);
        	}
        	this.dsTA_CARDAM.filter("");
        		
        	return this.fnc_Message("TMM061", sMsg);
        	
        }
            
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsTA_CARDAM.addEventHandler("onrowposchanged", this.dsTA_CARDAM_onrowposchanged, this);
            this.dsTA_CARDAM.addEventHandler("oncolumnchanged", this.dsTA_CARDAM_oncolumnchanged, this);
            this.dsTA_CARDAM.addEventHandler("cancolumnchange", this.dsTA_CARDAM_cancolumnchange, this);
            this.dsMAIN_TA_CARDAM.addEventHandler("onrowposchanged", this.dsTA_CARDAM_onrowposchanged, this);
            this.dsMAIN_TA_CARDAM.addEventHandler("oncolumnchanged", this.dsTA_CARDAM_oncolumnchanged, this);
            this.dsTA_ACCTXD.addEventHandler("oncolumnchanged", this.dsTA_SLIPRF_oncolumnchanged, this);
            this.dsTA_ACCTXD.addEventHandler("onrowposchanged", this.dsTA_SLIPRF_onrowposchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.grdTA_CARDAM.addEventHandler("onheadclick", this.grdTA_CARDAM_onheadclick, this);
            this.grdTA_CARDAM.addEventHandler("oncelldblclick", this.grdTA_CARDAM_oncelldblclick, this);
            this.btnCheck.addEventHandler("onclick", this.btnCheck_onclick, this);
            this.btnCustCheck.addEventHandler("onclick", this.btnCustCheck_onclick, this);
            this.edtSHRCARD_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCARD_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRCARD_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRDEPT_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHREMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHREMPL_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRAPPR_DATET.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRAPPR_DATEF.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRCSPS_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtALLDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtALLDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.btnCreateSlip.addEventHandler("onclick", this.btnCreateSlip_onclick, this);
            this.btnAPPLY_ALL.addEventHandler("onclick", this.btnAPPLY_ALL_onclick, this);
            this.edtALLACCT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtALLACCT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpSHRDEPT_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpSHREMPL_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgSHRCARD_NUMB.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpALLDEPT_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtACCT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtACCT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtREMK_NOTE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbBUDG_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtDEPT_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtEMPL_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtEMPL_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtCUST_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskDISP_NUMB.addEventHandler("oneditclick", this.mskDISP_NUMB_oneditclick, this);
            this.mskCHIN_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpDEPT_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpACCT_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpCUST_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpEMPL_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.imgHelpALLACCT_INTL.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtCARD_APPR.addEventHandler("onkillfocus", this.fn_CodeNameDisplay, this);
            this.edtCARD_APPR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskVATX_AMNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskSUPP_AMNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskAPPR_TAXX.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskAPPR_AMNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCHIN_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbAPPR_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calAPPR_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbCSPS_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCHIN_NUMB00.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpALLCSTC_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtALLBDSB_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpALLBDSB_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtALLBDSB_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtCSTC_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpCSTC_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtCSTC_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtCSTC_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtBDSB_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpBDSB_CODE.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtBDSB_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtBDSB_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtALLCSTC_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.btnDeleteSlip.addEventHandler("onclick", this.btnDeleteSlip_onclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtSHRCHIN_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskSHRCHIN_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpRCTI_EMNM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtRCTI_EMNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtRCTI_EMNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.calBGIN_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calENDX_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnBicnet.addEventHandler("onclick", this.btnBicnet_onclick, this);
            this.mskCHK_CNT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskCHK_CNT.addEventHandler("ontextchanged", this.TAXX_OnChanged, this);
            this.mskAMNT_SUM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.mskAMNT_SUM.addEventHandler("ontextchanged", this.TAXX_OnChanged, this);
            this.btnSlipPermit.addEventHandler("onclick", this.btnSlipPermit_onclick, this);
            this.btnSlipPermitCancel.addEventHandler("onclick", this.btnSlipPermitCancel_onclick, this);
            this.imgHelpALLRCTI_EMNM.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtALLRCTI_EMNM.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtALLRCTI_EMNM.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.calALLBGIN_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calALLENDX_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpALLRCTC_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtALLRCTC_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtALLRCTC_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.imgHelpRCTC_NAME.addEventHandler("onclick", this.fn_HelpDialoge, this);
            this.edtRCTC_NAME.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtRCTC_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("TRME0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
