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
                this.set_name("PACA0010");
                this.set_titletext("세금계산서생성");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">TAXX_TYPE</Col><Col id=\"DSNAME\">dsTAXX_TYPE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsTAXX_DEND</Col><Col id=\"CODEID\">TAXX_DEND</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsTAXX_TYPE2</Col><Col id=\"CODEID\">TAXX_TYPE2</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsSend", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">개별발행</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">선택발행</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">합산발행</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_SUJUMH", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"TAXY_MONT\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_AMTX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TAXX_VATX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SUMM_AMTX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BIZR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"MEDA_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OWNR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"DTL1_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL2_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"SATX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"DTIX_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_DMND\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"RANK_TANS\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_MEMO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_SATXXH", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"TAXY_MONT\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_NUMB\" type=\"INT\" size=\"256\"/><Column id=\"DTIX_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_DMND\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_SANB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_AMTX\" type=\"FLOAT\" size=\"256\"/><Column id=\"TAXX_VATX\" type=\"FLOAT\" size=\"256\"/><Column id=\"SUMM_AMTX\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"MEDA_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BIZR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"OWNR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"DTL1_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL2_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"CONVERSATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ISSUE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_SATXAL", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GUBN_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_AMTX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TAXX_VATX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SUMM_AMTX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BIZR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"MEDA_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OWNR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"DTL1_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL2_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"SATX_NUMB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_SATXXH_RPT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TAX_NUMB1\" type=\"STRING\" size=\"256\"/><Column id=\"TAX_NUMB2\" type=\"STRING\" size=\"256\"/><Column id=\"TAX_NUMB3\" type=\"STRING\" size=\"256\"/><Column id=\"BIZR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OWNR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"BSNS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"DAY\" type=\"STRING\" size=\"256\"/><Column id=\"A0\" type=\"STRING\" size=\"256\"/><Column id=\"A1\" type=\"STRING\" size=\"256\"/><Column id=\"A2\" type=\"STRING\" size=\"256\"/><Column id=\"A3\" type=\"STRING\" size=\"256\"/><Column id=\"A4\" type=\"STRING\" size=\"256\"/><Column id=\"A5\" type=\"STRING\" size=\"256\"/><Column id=\"A6\" type=\"STRING\" size=\"256\"/><Column id=\"A7\" type=\"STRING\" size=\"256\"/><Column id=\"A8\" type=\"STRING\" size=\"256\"/><Column id=\"A9\" type=\"STRING\" size=\"256\"/><Column id=\"A10\" type=\"STRING\" size=\"256\"/><Column id=\"A11\" type=\"STRING\" size=\"256\"/><Column id=\"V1\" type=\"STRING\" size=\"256\"/><Column id=\"V2\" type=\"STRING\" size=\"256\"/><Column id=\"V3\" type=\"STRING\" size=\"256\"/><Column id=\"V4\" type=\"STRING\" size=\"256\"/><Column id=\"V5\" type=\"STRING\" size=\"256\"/><Column id=\"V6\" type=\"STRING\" size=\"256\"/><Column id=\"V7\" type=\"STRING\" size=\"256\"/><Column id=\"V8\" type=\"STRING\" size=\"256\"/><Column id=\"V9\" type=\"STRING\" size=\"256\"/><Column id=\"V10\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_VATX\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_DEND\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_SATXXD_RPT", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"DAY\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_VATX\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_SATXXD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEDA_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_AMTX\" type=\"INT\" size=\"256\"/><Column id=\"TAXX_VATX\" type=\"INT\" size=\"256\"/><Column id=\"PRNT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"TAXY_MONT\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_IDXX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTAXX_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">매입세금계산서</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">매출세금계산서</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">매입계산서</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">매출계산서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdPD_SATXXH", "absolute", "8", "164", null, null, "25", "309", this);
            obj.set_taborder("137");
            obj.set_binddataset("dsPD_SATXXH");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.getSetter("oncolumnchanged").set("dsPD_SUJUMH_oncolumnchanged");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"127\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" style=\"background: ;\" text=\"세금계산서년월\"/><Cell col=\"2\" style=\"background: ;\" text=\"세금계산서순번\"/><Cell col=\"3\" style=\"background: ;\" text=\"세금계산서구분\"/><Cell col=\"4\" style=\"background: ;\" text=\"영수구분\"/><Cell col=\"5\" style=\"background: ;\" text=\"세금계산서분류\"/><Cell col=\"6\" style=\"background: ;\" text=\"세금계산서번호\"/><Cell col=\"7\" style=\"background: ;\" text=\"광고주코드\"/><Cell col=\"8\" style=\"background: ;\" text=\"광고주명\"/><Cell col=\"9\" style=\"background: ;\" text=\"청구금액\"/><Cell col=\"10\" style=\"background: ;\" text=\"부가세액\"/><Cell col=\"11\" style=\"background: ;\" text=\"총금액\"/><Cell col=\"12\" style=\"background: ;\" text=\"청구일자\"/><Cell col=\"13\" style=\"background: ;\" text=\"발행일자\"/><Cell col=\"14\" style=\"background: ;\" text=\"비고\"/><Cell col=\"15\" style=\"background: ;\" text=\"제작내용\"/><Cell col=\"16\" style=\"background: ;\" text=\"사업자번호\"/><Cell col=\"17\" style=\"background: ;\" text=\"대표자명\"/><Cell col=\"18\" style=\"background: ;\" text=\"주소\"/><Cell col=\"19\" style=\"background: ;\" text=\"상세주소\"/><Cell col=\"20\" style=\"background: ;\" text=\"상세주소2\"/><Cell col=\"21\" style=\"background: ;\" text=\"상세건수\"/><Cell col=\"22\" style=\"background: ;\" text=\"전자세금계산서번호\"/><Cell col=\"23\" style=\"background: ;\" text=\"당초승인번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:TAXY_MONT\"/><Cell col=\"2\" displaytype=\"normal\" text=\"bind:TAXX_NUMB\" editdisplay=\"edit\" combodisplay=\"edit\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DTIX_TYPE\" combodisplay=\"edit\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:TAXX_DMND\" combodisplay=\"edit\"/><Cell col=\"5\" displaytype=\"combo\" text=\"bind:TAXX_GUBN\" combodisplay=\"edit\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" style=\"cursor:hand; background:EXPR(ORI_ISSUE_ID == '' ? 'white':'#e8fedc');background2:EXPR(ORI_ISSUE_ID == '' ? 'white':'#e8fedc');\" text=\"bind:TAXX_SANB\"/><Cell col=\"7\" displaytype=\"text\" text=\"bind:CUST_CODE\"/><Cell col=\"8\" displaytype=\"text\" text=\"bind:CUST_NAME\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAXX_AMTX\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAXX_VATX\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUMM_AMTX\"/><Cell col=\"12\" displaytype=\"date\" edittype=\"date\" text=\"bind:DEND_DATE\"/><Cell col=\"13\" displaytype=\"date\" edittype=\"date\" text=\"bind:PRNT_DATE\"/><Cell col=\"14\" displaytype=\"text\" text=\"bind:MEMO_FILD\"/><Cell col=\"15\" displaytype=\"combo\" text=\"bind:MEDA_CODE\"/><Cell col=\"16\" displaytype=\"text\" text=\"bind:BIZR_NUMB\"/><Cell col=\"17\" displaytype=\"text\" text=\"bind:OWNR_NAME\"/><Cell col=\"18\" displaytype=\"text\" text=\"bind:ADDR_DESC\"/><Cell col=\"19\" displaytype=\"text\" text=\"bind:DTL1_ADDR\"/><Cell col=\"20\" displaytype=\"text\" text=\"bind:DTL2_ADDR\"/><Cell col=\"21\" displaytype=\"text\" text=\"bind:CONT_CONT\"/><Cell col=\"22\" displaytype=\"text\" text=\"bind:CONVERSATION_ID\"/><Cell col=\"23\" displaytype=\"text\" text=\"bind:ORI_ISSUE_ID\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\"/><Cell col=\"1\" colspan=\"8\" style=\"align: center;\" text=\"합계\"/><Cell col=\"9\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TAXX_AMTX&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TAXX_VATX&quot;)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;SUMM_AMTX&quot;)\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPD_SATXAL", "absolute", "8", "164", null, null, "25", "13", this);
            obj.set_taborder("138");
            obj.set_binddataset("dsPD_SATXAL");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.getSetter("oncolumnchanged").set("dsPD_SUJUMH_oncolumnchanged");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"127\"/><Column size=\"121\"/><Column size=\"133\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" text=\"구분\"/><Cell col=\"1\" style=\"background: ;\" text=\"광고주코드\"/><Cell col=\"2\" style=\"background: ;\" text=\"광고주명\"/><Cell col=\"3\" style=\"background: ;\" text=\"제작번호\"/><Cell col=\"4\" style=\"background: ;\" text=\"제작명\"/><Cell col=\"5\" style=\"background: ;\" text=\"청구금액\"/><Cell col=\"6\" style=\"background: ;\" text=\"부가세액\"/><Cell col=\"7\" style=\"background: ;\" text=\"합계금액\"/><Cell col=\"8\" style=\"background: ;\" text=\"청구일자\"/><Cell col=\"9\" style=\"background: ;\" text=\"발행일자\"/><Cell col=\"10\" style=\"background: ;\" text=\"광고주사업자번호\"/><Cell col=\"11\" style=\"background: ;\" text=\"비고\"/><Cell col=\"12\" style=\"background: ;\" text=\"제작종류\"/><Cell col=\"13\" style=\"background: ;\" text=\"광고주대표자명\"/><Cell col=\"14\" style=\"background: ;\" text=\"주소\"/><Cell col=\"15\" style=\"background: ;\" text=\"상세주소1\"/><Cell col=\"16\" style=\"background: ;\" text=\"상세주소2\"/><Cell col=\"17\" style=\"background: ;\" text=\"세금계산서번호\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"bind:GUBN_FLAG\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:CUST_CODE\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:CUST_NAME\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:JOBN_NUMB\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:JOBN_NAME\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAXX_AMTX\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAXX_VATX\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUMM_AMTX\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"date\" text=\"bind:DEND_DATE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"9\" displaytype=\"date\" edittype=\"date\" text=\"bind:PRNT_DATE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"10\" displaytype=\"text\" text=\"bind:BIZR_NUMB\"/><Cell col=\"11\" displaytype=\"text\" text=\"bind:MEMO_FILD\"/><Cell col=\"12\" displaytype=\"combo\" text=\"bind:MEDA_CODE\"/><Cell col=\"13\" displaytype=\"text\" text=\"bind:OWNR_NAME\"/><Cell col=\"14\" displaytype=\"text\" text=\"bind:ADDR_DESC\"/><Cell col=\"15\" displaytype=\"text\" text=\"bind:DTL1_ADDR\"/><Cell col=\"16\" displaytype=\"text\" text=\"bind:DTL2_ADDR\"/><Cell col=\"17\" displaytype=\"text\" text=\"bind:SATX_NUMB\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\"/><Cell col=\"1\" colspan=\"4\" style=\"align: center;\" text=\"합계\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TAXX_AMTX&quot;)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TAXX_VATX&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;SUMM_AMTX&quot;)\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPD_SUJUMH", "absolute", "8", "164", null, null, "25", "13", this);
            obj.set_taborder("108");
            obj.set_binddataset("dsPD_SUJUMH");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("none");
            obj.set_fillareatype("none");
            obj.getSetter("oncolumnchanged").set("dsPD_SUJUMH_oncolumnchanged");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"230\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"165\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"140\"/><Column size=\"108\"/><Column size=\"102\"/><Column size=\"171\"/><Column size=\"152\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" style=\"background: ;\" text=\"광고주코드\"/><Cell col=\"2\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주명\"/><Cell col=\"3\" style=\"background: ;\" text=\"세금계산서종류\"/><Cell col=\"4\" style=\"background: ;\" text=\"영수구분\"/><Cell col=\"5\" style=\"background: ;\" text=\"제작번호\"/><Cell col=\"6\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"제작명\"/><Cell col=\"7\" style=\"background: ;\" text=\"세금계산서분류\"/><Cell col=\"8\" style=\"background: ;\" text=\"제작내용\"/><Cell col=\"9\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"청구금액\"/><Cell col=\"10\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"부가세액\"/><Cell col=\"11\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"합계금액\"/><Cell col=\"12\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"청구일자\"/><Cell col=\"13\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"발행일자\"/><Cell col=\"14\" style=\"background: ;\" text=\"비고\"/><Cell col=\"15\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주사업자번호\"/><Cell col=\"16\" style=\"background: ;\" text=\"광고주대표자명\"/><Cell col=\"17\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"주소\"/><Cell col=\"18\" style=\"background: ;\" cssclass=\"Cellgrd_WF_essential\" text=\"상세주소1\"/><Cell col=\"19\" style=\"background: ;\" text=\"상세주소2\"/><Cell col=\"20\" style=\"background: ;\" text=\"그룹구분\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:CUST_CODE\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:CUST_NAME\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DTIX_TYPE\" combodisplay=\"edit\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:TAXX_DMND\" combodisplay=\"edit\"/><Cell col=\"5\" displaytype=\"text\" text=\"bind:JOBN_NUMB\"/><Cell col=\"6\" displaytype=\"text\" text=\"bind:JOBN_NAME\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:TAXX_GUBN\" combodisplay=\"edit\"/><Cell col=\"8\" displaytype=\"combo\" text=\"bind:MEDA_CODE\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAXX_AMTX\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"normal\" style=\"align:right;\" text=\"bind:TAXX_VATX\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUMM_AMTX\"/><Cell col=\"12\" displaytype=\"date\" edittype=\"date\" text=\"bind:DEND_DATE\"/><Cell col=\"13\" displaytype=\"date\" edittype=\"date\" text=\"bind:PRNT_DATE\"/><Cell col=\"14\" displaytype=\"text\" edittype=\"normal\" text=\"bind:MEMO_FILD\"/><Cell col=\"15\" displaytype=\"text\" text=\"bind:BIZR_NUMB\"/><Cell col=\"16\" displaytype=\"text\" text=\"bind:OWNR_NAME\"/><Cell col=\"17\" displaytype=\"text\" text=\"bind:ADDR_DESC\"/><Cell col=\"18\" displaytype=\"text\" text=\"bind:DTL1_ADDR\"/><Cell col=\"19\" displaytype=\"text\" text=\"bind:DTL2_ADDR\"/><Cell col=\"20\" displaytype=\"text\" text=\"bind:RANK_TANS\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\"/><Cell col=\"1\" colspan=\"8\" style=\"align: center;\" text=\"합계\"/><Cell col=\"9\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TAXX_AMTX&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TAXX_VATX&quot;)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;SUMM_AMTX&quot;)\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDELE_TAXX", "absolute", null, "139", "106", "21", "25", null, this);
            obj.set_taborder("136");
            obj.set_text("세금계산서삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "143", "182", "21", null, null, this);
            obj.set_taborder("141");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Button("btnCRET_TAXX", "absolute", null, "139", "106", "21", "25", null, this);
            obj.set_taborder("135");
            obj.set_text("세금계산서생성");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "69", "25", null, this);
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
            obj.set_text("세금계산서생성");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 제작시스템>회계관리>회계관리>세금계산서생성");
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

            obj = new Static("Static30", "absolute", "28", "71", "50", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("청구일");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "67", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "75", "61", "8", "67", null, null, this);
            obj.set_taborder("40");
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

            obj = new Static("Static09", "absolute", "8", "158", "216", "6", null, null, this);
            obj.set_taborder("51");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Calendar("calDEND_DATE1", "absolute", "83", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("109");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Static("Static55", "absolute", "185", "71", "14", "21", null, null, this);
            obj.set_taborder("110");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calDEND_DATE2", "absolute", "200", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("111");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Static("Static03", "absolute", "328", "61", "40", "67", null, null, this);
            obj.set_taborder("112");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "357", "71", "52", "21", null, null, this);
            obj.set_taborder("116");
            obj.set_text("광고주");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "28", "97", "57", "21", null, null, this);
            obj.set_taborder("122");
            obj.set_text("발행");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "357", "97", "70", "21", null, null, this);
            obj.set_taborder("124");
            obj.set_text("제작내용");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRMEDA_CODE", "absolute", "425", "97", "112", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("125");
            obj.set_index("-1");

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "-2", this);
            obj.set_taborder("126");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoSUCC_FLAG", "absolute", "83", "97", "180", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdoSUCC_FLAG_innerdataset = new Dataset("rdoSUCC_FLAG_innerdataset", this.rdoSUCC_FLAG);
            rdoSUCC_FLAG_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">완료</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">미완료</Col></Row></Rows>");
            obj.set_innerdataset(rdoSUCC_FLAG_innerdataset);
            obj.set_taborder("128");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("2");
            obj.set_direction("vertical");
            obj.set_index("2");

            obj = new Edit("edtSHRCUST_CODE", "absolute", "425", "71", "80", "21", null, null, this);
            obj.set_taborder("129");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_NAME", "absolute", "507", "71", "21", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "530", "71", "130", "21", null, null, this);
            obj.set_taborder("131");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "417", "61", "8", "67", null, null, this);
            obj.set_taborder("132");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "645", "129", "80", "35", null, null, this);
            obj.set_taborder("133");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCRET_FLAG", "absolute", null, "139", "108", "21", "155", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("134");
            obj.set_innerdataset("@dsSend");
            obj.set_datacolumn("NAME");
            obj.set_codecolumn("CODE");
            obj.set_value("0");
            obj.set_text("개별발행");
            obj.set_index("0");

            obj = new Grid("grdPD_SATXXD", "absolute", "8", null, null, "271", "25", "13", this);
            obj.set_taborder("139");
            obj.set_binddataset("dsPD_SATXXD");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"광고주코드\"/><Cell col=\"1\" text=\"광고주명\"/><Cell col=\"2\" text=\"제작번호\"/><Cell col=\"3\" text=\"제작건명/품목\"/><Cell col=\"4\" text=\"제작내용\"/><Cell col=\"5\" text=\"금액\"/><Cell col=\"6\" text=\"부가세액\"/><Cell col=\"7\" text=\"발행일자\"/><Cell col=\"8\" text=\"청구일자\"/><Cell col=\"9\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:CUST_CODE\"/><Cell col=\"1\" text=\"bind:CUST_NAME\"/><Cell col=\"2\" text=\"bind:JOBN_NUMB\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:JOBN_NAME\"/><Cell col=\"4\" text=\"bind:MEDA_NAME\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAXX_AMTX\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAXX_VATX\"/><Cell col=\"7\" text=\"bind:PRNT_DATE\"/><Cell col=\"8\" text=\"bind:DEND_DATE\"/><Cell col=\"9\" text=\"bind:MEMO_FILD\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\"/><Cell col=\"1\" colspan=\"3\" style=\"align: center;\" text=\"합계\"/><Cell col=\"4\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TAXX_AMTX&quot;)\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TAXX_VATX&quot;)\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", null, "97", "369", "21", "25", null, this);
            obj.set_taborder("142");
            obj.set_text("세금계산서 번호 더블클릭하여 수정세금계산서 생성 가능합니다.");
            obj.set_cssclass("sta_WF_Info");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "648", "408", "80", "25", null, null, this);
            obj.set_taborder("143");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "1032", "124", "12", "23", null, null, this);
            obj.set_taborder("144");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "1044", "124", "12", "23", null, null, this);
            obj.set_taborder("145");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation02", "absolute", null, "138", "7", "21", "136", null, this);
            obj.set_taborder("146");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", null, "138", "69", "21", "369", null, this);
            obj.set_taborder("147");
            obj.set_text("청구일자");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calDEND_DATE", "absolute", null, "138", "102", "21", "268", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("148");


            
            // Layout Functions
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
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PACA0010.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("PACA0010.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("PACA0010.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PACA0010 제작 세금계산서 생성
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.10		오세훈		Initial Created.
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
        this.sBUTTONLIST 	= "TTFFFTTT"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME 	= "PACA0010"; //해당 Form에서 사용 할 Package 명
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

        	this.calDEND_DATE1.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 )+'01');
        	this.calDEND_DATE2.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ) + this.fnc_GetLastDayOfMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"))));
        	this.calDEND_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,8 ));
        	
        	//최초 삭제 버튼 가리기
        	this.btnCRET_TAXX.set_visible(true);
        	this.cmbCRET_FLAG.set_visible(true);
        	this.calDEND_DATE.set_visible(true);
        	this.Static13.set_visible(true);
        	
        	this.btnDELE_TAXX.set_visible(false);
        	this.grdPD_SATXXH.set_visible(false);
        	this.grdPD_SATXXD.set_visible(false);
        	this.grdPD_SATXAL.set_visible(false);
        	this.grdPD_SUJUMH.set_visible(true);
        	
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
        	this.fnc_DatasetClear("dsPD_SATXAL");
        	this.fnc_DatasetClear("dsPD_SATXXH");
        	this.fnc_DatasetClear("dsPD_SUJUMH");

        	//전체
        	if(this.rdoSUCC_FLAG.index == 0){
        		var sMethodName = "SEARCH02";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsPD_SATXAL=dsPD_SATXAL";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	//완료
        	}else if(this.rdoSUCC_FLAG.index == 1){
        		var sMethodName = "SEARCH01";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsPD_SATXXH=dsPD_SATXXH";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	//미완료
        	}else if(this.rdoSUCC_FLAG.index == 2){
        		var sMethodName = "SEARCH00";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsPD_SUJUMH=dsPD_SUJUMH";
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

        	if(this.rdoSUCC_FLAG.index == 1){
            }else{
        		this.fnc_Message("TMM300", "세금계산서 완료일 경우에만 품목 수정이 가능합니다.");
        		return ;
            }
            
        	if (this.fnc_DatasetChangeCheck("dsPD_SATXXD") == false && this.fnc_DatasetChangeCheck("dsPD_SATXXH") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	if(!this.fnc_Message("TMM140", "세금계산서 품목 또는 영수 구분 을 수정하시겠습니까?. ")){return ;};
        	
        	var sMethodName = "SAVE02";
        	var sInDataSet  = "dsPD_SATXXD=dsPD_SATXXD:U dsPD_SATXXH=dsPD_SATXXH:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPD_SATXXD.setFocus();
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

            if(this.rdoSUCC_FLAG.index == 1){
            }else{
        		this.fnc_Message("TMM300", "세금계산서 완료일 경우에만 출력이 가능합니다.");
        		return ;
            }
        	
        	var iCHK = 0;
        	for(var i=0; i <this.dsPD_SATXXH.rowcount; i++){
        		iCHK += this.dsPD_SATXXH.getColumn(i,"CHK");
        	}
        	
        	if(iCHK == 0 ){this.fnc_Message("TMM300", "선택된 데이터가 없습니다."); return ;};

        	if (this.dsPD_SATXXH.getRowCount() < 0) return this.fnc_Message("TMM011");
            if (this.dsPD_SATXXH.rowposition < 0) return this.fnc_Message("TMM011");

            this.fnc_DatasetClear("dsPD_SATXXH_RPT");
            this.fnc_DatasetClear("dsPD_SATXXD_RPT");
            

        	var reportfile 	= "/pac/PACA0010R01.jrf";
            var dataref 	= new Array();
            var params 		= "";
            
        	dataref[0] 				= new Object();
        	dataref[0].type 		= "TRAN";
        	dataref[0].svcUrl 		= "/core/erp/pac/PACA0010_PRINT00.do";
        	dataref[0].inDataset 	= "dsPD_SATXXH=dsPD_SATXXH:U"
        	dataref[0].outDataset 	= "dsPD_SATXXH_RPT=dsPD_SATXXH_RPT dsPD_SATXXD_RPT=dsPD_SATXXD_RPT";
        	dataref[0].arg 			= this.fn_CreateArgument("PRINT00");
        	
        	this.fn_UbiReport(reportfile, params, dataref, "");
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
        	if ((this.fnc_DatasetChangeCheck("dsPD_SUJUMH")) && (this.fnc_Message("TMM023") == false) ) {
        		return false;
        	}
        	if ((this.fnc_DatasetChangeCheck("dsPD_SATXXH")) && (this.fnc_Message("TMM023") == false) ) {
        		return false;
        	}
        	if ((this.fnc_DatasetChangeCheck("dsPD_SATXAL")) && (this.fnc_Message("TMM023") == false) ) {
        		return false;
        	}
        	
        	
        	if(this.fnc_IsDate(this.calDEND_DATE1.value) == false || this.fnc_IsDate(this.calDEND_DATE2.value) == false){
        		this.fnc_Message("TMM081");
        		return false;
        	}

        	return true;
        	// 모든 조회 조건이 입력 되면 True를 반환 한다.
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	// 공통 Head & 상세 변경 체크
        	if (this.fnc_DatasetChangeCheck("dsPD_SUJUMH") == false && this.fnc_DatasetChangeCheck("dsPD_SATXXH") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	var iCNT = 0;
        	for(var i = 0; i < this.dsPD_SUJUMH.rowcount; i++){
        		if(this.dsPD_SUJUMH.getColumn(i, "CHK") == 1){
        			iCNT += 1;
        		}
        	}
        		
        	if(iCNT==0){
        		this.fnc_Message("PCM001");
        		return  false;
        	}	
        	
        	//전체
        	if(this.rdoSUCC_FLAG.index == 0){
        		this.fnc_Message("PAC001");
        		return false;
        	//완료
        	}else if(this.rdoSUCC_FLAG.index == 1){
        		this.fnc_Message("PAC001");
        		return false;
        	//미완료
        	}else if(this.rdoSUCC_FLAG.index == 2){
        		// 공통 Head 정보 필수 입력 항목 체크
        		for (var i = 0; i < this.dsPD_SUJUMH.getRowCount(); i++) {
        			var cnt = i + 1;
        		
        			if (this.fnc_ToUpper(this.dsPD_SUJUMH.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        			
        			if (this.fnc_Length(this.fnc_Trim(this.dsPD_SUJUMH.getColumn(i, "CUST_CODE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "광고주", this.dsPD_SUJUMH, i, '', '');
        			}
        			if (this.fnc_Length(this.fnc_Trim(this.dsPD_SUJUMH.getColumn(i, "DEND_DATE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "청구일", this.dsPD_SUJUMH, i, '', '');
        			}
        			if (this.fnc_Length(this.fnc_Trim(this.dsPD_SUJUMH.getColumn(i, "PRNT_DATE"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "발행일", this.dsPD_SUJUMH, i, '', '');
        			}
        			if (this.fnc_Length(this.fnc_Trim(this.dsPD_SUJUMH.getColumn(i, "JOBN_NUMB"))) < 1) {
        				return this.fnc_CheckPostAction("TMM072", "제작명", this.dsPD_SUJUMH, i, '', '');
        			}
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
        		sReturnString += " DEND_DATE1=" + this.fnc_Quote(this.calDEND_DATE1.value); 	//제작건 등록일 시작
        		sReturnString += " DEND_DATE2=" + this.fnc_Quote(this.calDEND_DATE2.value);     //제작건 등록일 시작
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.edtSHRCUST_CODE.value);    //광고주코드
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value);    //광고주명
        		sReturnString += " MEDA_CODE=" + this.fnc_Quote(this.cmbSHRMEDA_CODE.value);    	//제작내용조회

        	} else if(sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " DEND_DATE1=" + this.fnc_Quote(this.calDEND_DATE1.value); 	//제작건 등록일 시작
        		sReturnString += " DEND_DATE2=" + this.fnc_Quote(this.calDEND_DATE2.value);     //제작건 등록일 시작
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.edtSHRCUST_CODE.value);    //광고주코드
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value);    //광고주명
        		sReturnString += " MEDA_CODE=" + this.fnc_Quote(this.cmbSHRMEDA_CODE.value);    	//제작내용조회
        	
        	}  else if(sKind == "SEARCH02") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " DEND_DATE1=" + this.fnc_Quote(this.calDEND_DATE1.value); 	//제작건 등록일 시작
        		sReturnString += " DEND_DATE2=" + this.fnc_Quote(this.calDEND_DATE2.value);     //제작건 등록일 시작
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.edtSHRCUST_CODE.value);    //광고주코드
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value);    //광고주명
        		sReturnString += " MEDA_CODE=" + this.fnc_Quote(this.cmbSHRMEDA_CODE.value);    	//제작내용조회
        	
        	}  else if(sKind == "SEARCH03") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " TAXY_MONT=" + this.fnc_Quote(this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition, "TAXY_MONT"));    	//계산서년월
        		sReturnString += " TAXX_NUMB=" + this.fnc_Quote(this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition, "TAXX_NUMB"));    	//계산서번호
        		
        	
        	}  else if (sKind == "SAVE00" || sKind == "SAVE01" || sKind == "SAVE02") {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " CRET_FLAG=" + this.cmbCRET_FLAG.value;  //세금계산서 생성 플래그
        		sReturnString += " DEND_DATE=" + this.calDEND_DATE.value;  //세금계산서 생성 플래그
        		
        	}  else if (sKind == "DELETE00") {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		
        	} else if (sKind == "PRINT00") {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " TAXY_MONT=" + this.fnc_Quote(this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition, "TAXY_MONT")); 	//제작건 등록일 시작
        		sReturnString += " TAXX_NUMB=" + this.fnc_Quote(this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition, "TAXX_NUMB"));     //제작건 등록일 시작
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
        		this.fnc_Information(this.stInformation, this.dsPD_SUJUMH.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.stInformation, this.dsPD_SATXXH.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "SEARCH02") {
        		this.fnc_Information(this.stInformation, this.dsPD_SATXAL.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "SEARCH03") {

        	} else if (sMethodName == "SAVE00" ||  sMethodName == "SAVE01" ||  sMethodName == "SAVE02") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();

        	} else if (sMethodName == "DELETE00") {
        		this.fnc_Message("TMM041");
        		this.fn_Search();

        	} else if (sMethodName == "GetCommCode") {
        		//콤보 일경우 
        		
        		var arrParam = new Array();
        			arrParam[0]  = "GRID,grdPD_SUJUMH,dsTAXX_TYPE,DTIX_TYPE";
        			arrParam[1]  = "GRID,grdPD_SUJUMH,dsTAXX_DEND,TAXX_DMND";
        			arrParam[2]  = "GRID,grdPD_SUJUMH,dsTAXX_TYPE2,TAXX_GUBN";
        			arrParam[3]  = "GRID,grdPD_SATXXH,dsTAXX_TYPE,DTIX_TYPE";
        			arrParam[4]  = "GRID,grdPD_SATXXH,dsTAXX_DEND,TAXX_DMND";
        			arrParam[5]  = "GRID,grdPD_SATXXH,dsTAXX_TYPE2,TAXX_GUBN";
        		this.fnc_CommonCodeInnerBind(arrParam);

        		// 제작내용 조회용
        		this.fnc_GetComboSearchMEDA_CODE();
        		// 제작내용 그리드용 미완료
        		this.fnc_GetComboGrdMEDA_CODE();
        		// 제작내용 그리드용 완료
        		this.fnc_GetComboGrdMEDA_CODE2();
        		// 제작내용 그리드용 전체
        		this.fnc_GetComboGrdMEDA_CODE3();
        	}	
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
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

        

         
         //조회를 위한 제작내용 콤보박스
        this.fnc_GetComboSearchMEDA_CODE = function()
        {
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsSHRMEDA_CODE"; 			   //받을 Dataset명
        			arrParam1[1] = "PCM0010"; 	  			   //조회 콤보 ID
        			arrParam1[2] = "ALL"; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""						   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "COMBO,cmbSHRMEDA_CODE,dsSHRMEDA_CODE,0";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        //그리드 제작내용 콤보박스
        this.fnc_GetComboGrdMEDA_CODE = function()
        {
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsGRDMEDA_CODE"; 			//받을 Dataset명
        			arrParam1[1] = "PCM0010"; 	  			   //조회 콤보 ID
        			arrParam1[2] = ""; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""						   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "GRID,grdPD_SUJUMH,dsGRDMEDA_CODE,MEDA_CODE";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        		
        }

        //그리드 제작내용 콤보박스 완료용
        this.fnc_GetComboGrdMEDA_CODE2 = function()
        {
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsGRDMEDA_CODE"; 			//받을 Dataset명
        			arrParam1[1] = "PCM0010"; 	  			   //조회 콤보 ID
        			arrParam1[2] = ""; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""						   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "GRID,grdPD_SATXXH,dsGRDMEDA_CODE,MEDA_CODE";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        //그리드 제작내용 콤보박스 전체용
        this.fnc_GetComboGrdMEDA_CODE3 = function()
        {
        		var arrParam1 = new Array();
        			arrParam1[0] = "dsGRDMEDA_CODE"; 			//받을 Dataset명
        			arrParam1[1] = "PCM0010"; 	  			   //조회 콤보 ID
        			arrParam1[2] = ""; 			  			   //Head Flags
        			arrParam1[3] = "0"; 		  			   //사용여부
        			arrParam1[4] = ""						   //조회 조건

        		// Bind 처리
        		var arrParam2 = new Array();
        			arrParam2[0] = "GRID,grdPD_SATXAL,dsGRDMEDA_CODE,MEDA_CODE";
        		this.fnc_GetUserComboSingle(arrParam1, arrParam2);
        }

        /*---------------------------+
         |  광고주 조회 팝업 생성 |
         +---------------------------*/
        this.fn_HelpDialogeSHRCUST_CODE = function(obj,e)
        {
        	var arrParam = new Array();

        	// 조회조건 - 제작항목명
        	if ((obj.name == 'imgHelpSHRCUST_NAME') || (obj.name == 'edtSHRCUST_NAME')) {

        		arrParam[0] = 'PDM0001';                                 //Popup ID
        		arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtSHRCUST_NAME';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtSHRCUST_CODE,edtSHRCUST_NAME';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1';                                     //Mapping Column Index
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);                                //Mapping Column Index
        	}
        }

        /*-----------------------------------------------------------+
         |  미완료 제작명세서데이터 부가세 수정시 합계금액변경 |
         +-----------------------------------------------------------*/
        this.dsPD_SUJUMH_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "TAXX_VATX")
        	{
        		var iVAT = this.dsPD_SUJUMH.getColumn(e.row, "TAXX_VATX");
        		var iAMT = this.dsPD_SUJUMH.getColumn(e.row, "TAXX_AMTX");
        		var iSUM = Number(iVAT) + Number(iAMT);
        		
        		this.dsPD_SUJUMH.setColumn(e.row, "SUMM_AMTX", iSUM)
        	}
        }

        /*-----------------------------+
         |  계산서 생성 버튼 클릭시 |
         +-----------------------------*/
        this.btnCRET_TAXX_onclick = function(obj,e)
        {
        	if (!this.fn_SaveItemCheck()) return;

        	//분할 발행
        	if(this.cmbCRET_FLAG.value == 0 ){		
        		if(this.fnc_Message("PAC002")){
        			var sMethodName = "SAVE01";
        			var sInDataSet  = "dsPD_SUJUMH=dsPD_SUJUMH:U";
        			var sOutDataSet = "";
        			var sArgument   = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        		}
        	}else{
        	//합산발행 선택발행
        		if(this.fnc_Message("PAC003")){
        			var sMethodName = "SAVE00";
        			var sInDataSet  = "dsPD_SUJUMH=dsPD_SUJUMH:U";
        			var sOutDataSet = "";
        			var sArgument   = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        		}
        	}
        }

        
        /*-----------------------------+
         |  계산서 삭제 버튼 클릭시 |
         +-----------------------------*/
        this.btn_delete_onclick = function(obj,e)
        {
        	if (!this.fn_DeleteItemCheck()) return;
        	
        	//완료 상태의 경우 삭제
        	if(this.rdoSUCC_FLAG.index == 1)
        	{
        		if(this.fnc_Message("PAC005")){
        			var sMethodName = "DELETE00";
        			var sInDataSet  = "dsPD_SATXXH=dsPD_SATXXH:D";
        			var sOutDataSet = "";
        			var sArgument   = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        		}
        	}
        }

        
        this.fn_DeleteItemCheck = function()
        {
        	//변경된 데이터 체크
        	if (this.fnc_DatasetChangeCheck("dsPD_SATXXH") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	var iCNT = 0;
        	for(var i = 0; i < this.dsPD_SATXXH.rowcount; i++){
        		if(this.dsPD_SATXXH.getColumn(i, "CHK") == 1){
        			iCNT += 1;
        			if(this.fn_nullChk(this.dsPD_SATXXH.getColumn(i, "CONVERSATION_ID")) != ""){
        				this.fnc_Message("TMM300","전자세금계산서가 생성된 데이터는 삭제할 수 없습니다.");
        				return false;
        			}
        		}
        	}
        		
        	if(iCNT==0){
        		this.fnc_Message("PCM001");
        		return  false;
        	}	
        	
        	//전체
        	if(this.rdoSUCC_FLAG.index == 0){
        		this.fnc_Message("PAC004");
        		return false;
        	//완료
        	}else if(this.rdoSUCC_FLAG.index == 1){
        		
        	//미완료
        	}else if(this.rdoSUCC_FLAG.index == 2){
        		this.fnc_Message("PAC001");
        	}

        	return true;
        }

        
        /*--------------------------------+
         |  발행생태 라디오버튼 변경시 |
         +--------------------------------*/
        this.rdoSUCC_FLAG_onitemchanged = function(obj,e)
        {
        	if(this.rdoSUCC_FLAG.index == 0){
        		this.btnCRET_TAXX.set_visible(false);
        		this.cmbCRET_FLAG.set_visible(false);
        		this.calDEND_DATE.set_visible(false);
        		this.Static13.set_visible(false);
        		this.btnDELE_TAXX.set_visible(false);
        		this.grdPD_SUJUMH.set_visible(false);
        		this.grdPD_SATXXH.set_visible(false);
        		this.grdPD_SATXXD.set_visible(false);
        		this.grdPD_SATXAL.set_visible(true);
        		this.fn_Search();
        		
        	}else if(this.rdoSUCC_FLAG.index == 1){
        		this.btnCRET_TAXX.set_visible(false);
        		this.cmbCRET_FLAG.set_visible(false);
        		this.calDEND_DATE.set_visible(false);
        		this.Static13.set_visible(false);
        		this.btnDELE_TAXX.set_visible(true);
        		this.grdPD_SUJUMH.set_visible(false);
        		this.grdPD_SATXXH.set_visible(true);
        		this.grdPD_SATXXD.set_visible(true);
        		this.grdPD_SATXAL.set_visible(false);
        		this.fn_Search();
        		
        	}else if(this.rdoSUCC_FLAG.index == 2){
        		this.btnCRET_TAXX.set_visible(true);
        		this.cmbCRET_FLAG.set_visible(true);
        		this.calDEND_DATE.set_visible(true);
        		this.Static13.set_visible(true);
        		this.btnDELE_TAXX.set_visible(false);
        		this.grdPD_SUJUMH.set_visible(true);
        		this.grdPD_SATXXH.set_visible(false);
        		this.grdPD_SATXXD.set_visible(false);
        		this.grdPD_SATXAL.set_visible(false);
        		this.fn_Search();
        	}
        }

        var isAllChecked = 0;
        this.grdPD_SUJUMH_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.grdPD_SUJUMH.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsPD_SUJUMH.getRowCount(); i++) {
        			this.dsPD_SUJUMH.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.grdPD_SUJUMH.setCellProperty("Head", 0, "expr", isAllChecked);
        	}
        }

        var isAllChecked1 = 0;
        this.grdPD_SATXXH_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.grdPD_SATXXH.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked1 = (isAllChecked1 ? 0 : 1);
        		
        		for (var i = 0; i < this.dsPD_SATXXH.getRowCount(); i++) {
        			this.dsPD_SATXXH.setColumn(i, v_Colid, isAllChecked1);
        		}
        		this.grdPD_SATXXH.setCellProperty("Head", 0, "expr", isAllChecked1);
        	}
        }

        this.dsPD_SATXXH_onrowposchanged = function(obj,e)
        {
        		var sMethodName = "SEARCH03";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsPD_SATXXD=dsPD_SATXXD";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        }

        this.grdPD_SATXXH_oncelldblclick = function(obj,e)
        {
        	
        	var columnName = this.fnc_getColId(obj, e.cell);
        	
        	if(this.fn_nullChk(this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition,"CONVERSATION_ID")) == ""){
        		this.fnc_Message("TMM300","전자세금계산서가 생성되지 않은 데이터는 수정세금계산서를 생성할 수 없습니다.");
        		return ; 
        	}
        	
        	if (columnName != "TAXX_SANB") return;
        	
        	if(this.fn_nullChk(this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition, "DTIX_TYPE")) == "02"
        	|| this.fn_nullChk(this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition, "DTIX_TYPE")) == "04"){
        		
        		this.fnc_Message("TMM300","수정세금계산서는 추가 수정 세금계산서를 생성할 수 없습니다.");
        		return ; 
        		
        	}
        	
        	
        	
        	var sTAXX_SANB = this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition, "TAXX_SANB");
        	var sCUST_NAME = this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition, "CUST_NAME");
        	var sMEMO_FILD = this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition, "MEMO_FILD");
        	var sCONVERSATION_ID = this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition, "CONVERSATION_ID");
        	
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
        		
        		this.fnc_OpenPopup("PACA0010P01", "pac::PACA0010P01.xfdl", {sTAXX_SANB : sTAXX_SANB
        		, sCUST_NAME : sCUST_NAME, sMEMO_FILD : sMEMO_FILD, sCONVERSATION_ID : sCONVERSATION_ID}, sOpenStyle, "fn_Dialoge_After");	

        }

        
        /*--------------------------------------+
         | 제작용으로 저장 팝업 CallBack      |
         +--------------------------------------*/
        this.fn_Dialoge_After = function(sPopupId,Variant){

        	this.fn_Search();
        	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPD_SUJUMH.addEventHandler("oncolumnchanged", this.dsPD_SUJUMH_oncolumnchanged, this);
            this.dsPD_SATXXH.addEventHandler("oncolumnchanged", this.dsPD_SATXXH_oncolumnchanged, this);
            this.dsPD_SATXXH.addEventHandler("onrowposchanged", this.dsPD_SATXXH_onrowposchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdPD_SATXXH.addEventHandler("onheadclick", this.grdPD_SATXXH_onheadclick, this);
            this.grdPD_SATXXH.addEventHandler("oncelldblclick", this.grdPD_SATXXH_oncelldblclick, this);
            this.grdPD_SATXAL.addEventHandler("onheadclick", this.grdPD_SUJUMH_onheadclick, this);
            this.grdPD_SUJUMH.addEventHandler("onheadclick", this.grdPD_SUJUMH_onheadclick, this);
            this.btnDELE_TAXX.addEventHandler("onclick", this.btn_delete_onclick, this);
            this.btnCRET_TAXX.addEventHandler("onclick", this.btnCRET_TAXX_onclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.rdoSUCC_FLAG.addEventHandler("onitemchanged", this.rdoSUCC_FLAG_onitemchanged, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCUST_NAME.addEventHandler("onclick", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.grdPD_SATXXD.addEventHandler("onexpanddown", this.fn_HelpDialoge, this);

        };

        this.loadIncludeScript("PACA0010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
