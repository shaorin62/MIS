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
                this.set_name("PACA0020");
                this.set_titletext("전자세금계산서발행");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"DSNAME\">dsSUPB_TYPE</Col><Col id=\"CODEID\">SUPB_TYPE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsDIRE_TION</Col><Col id=\"CODEID\">DIRE_TION</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsTAXX_TYPE</Col><Col id=\"CODEID\">TAXX_TYPE</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsTAXX_TYPE2</Col><Col id=\"CODEID\">TAXX_TYPE2</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsTAXX_DEND</Col><Col id=\"CODEID\">TAXX_DEND</Col><Col id=\"HEADFLAG\"/></Row><Row><Col id=\"DSNAME\">dsAMED_CODE</Col><Col id=\"CODEID\">AMED_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_SATXXH", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CONVERSATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SUPBUY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DIRECTION\" type=\"STRING\" size=\"256\"/><Column id=\"INTERFACE_BATCH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DTI_WDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DTI_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DTI_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"TAX_DEMAND\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_COM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_COM_REGNO\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_REP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_COM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_COM_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_COM_CLASSIFY\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_COM_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_TEL_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"BYR_COM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BYR_COM_REGNO\" type=\"STRING\" size=\"256\"/><Column id=\"BYR_REP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BYR_COM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BYR_COM_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BYR_COM_CLASSIFY\" type=\"STRING\" size=\"256\"/><Column id=\"BYR_COM_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"BYR_DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BYR_EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BYR_TEL_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"BYR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_AMOUNT\" type=\"FLOAT\" size=\"256\"/><Column id=\"TAX_AMOUNT\" type=\"FLOAT\" size=\"256\"/><Column id=\"TOTAL_AMOUNT\" type=\"FLOAT\" size=\"256\"/><Column id=\"DTT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"AMEND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ISSUE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TAXY_MONT\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"META_STRING\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_TICKET\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsXXSB_DTI_MAIN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CONVERSATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DTI_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"SUPBUY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DIRECTION\" type=\"STRING\" size=\"256\"/><Column id=\"DTI_WDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DTI_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DTI_TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"TAX_DEMAND\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_COM_REGNO\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_REP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_COM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_COM_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_COM_CLASSIFY\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_COM_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_TEL_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"BYR_COM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BYR_COM_REGNO\" type=\"STRING\" size=\"256\"/><Column id=\"BYR_REP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BYR_COM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BYR_COM_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BYR_COM_CLASSIFY\" type=\"STRING\" size=\"256\"/><Column id=\"BYR_COM_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"BYR_DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BYR_EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BYR_TEL_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"BYR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_AMOUNT\" type=\"FLOAT\" size=\"256\"/><Column id=\"TAX_AMOUNT\" type=\"FLOAT\" size=\"256\"/><Column id=\"TOTAL_AMOUNT\" type=\"FLOAT\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"CREATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TAXY_MONT\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AMEND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RETURN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RETURN_DESCRIPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_SATXXD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CONVERSATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SUPBUY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DIRECTION\" type=\"STRING\" size=\"256\"/><Column id=\"DTI_LINE_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_MD\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"SUP_AMOUNT\" type=\"FLOAT\" size=\"256\"/><Column id=\"TAX_AMOUNT\" type=\"FLOAT\" size=\"256\"/><Column id=\"FOREIGN_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_CUST_MAIL", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\" prop=\"default\"/><Column id=\"COMB_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMB_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdXXSB_DTI_MAIN", "absolute", "8", "137", null, null, "25", "15", this);
            obj.set_taborder("123");
            obj.set_binddataset("dsXXSB_DTI_MAIN");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"122\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"145\"/><Column size=\"146\"/><Column size=\"126\"/><Column size=\"127\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell style=\"background: ;\" text=\"CONVERSATION_ID\"/><Cell col=\"1\" style=\"background: ;\" text=\"최종상태\"/><Cell col=\"2\" style=\"background: ;\" text=\"전송상태\"/><Cell col=\"3\" style=\"background: ;\" text=\"매입매출구분\"/><Cell col=\"4\" style=\"background: ;\" text=\"정발행역발행구분\"/><Cell col=\"5\" style=\"background: ;\" text=\"세금계산서일자\"/><Cell col=\"6\" style=\"background: ;\" text=\"세금계산서종류\"/><Cell col=\"7\" style=\"background: ;\" text=\"세금계산서분류\"/><Cell col=\"8\" style=\"background: ;\" text=\"영수구분\"/><Cell col=\"9\" style=\"background: ;\" text=\"공급가액\"/><Cell col=\"10\" style=\"background: ;\" text=\"세액\"/><Cell col=\"11\" style=\"background: ;\" text=\"총금액\"/><Cell col=\"12\" style=\"background: ;\" text=\"비고\"/><Cell col=\"13\" style=\"background: ;\" text=\"공급자사업자등록번호\"/><Cell col=\"14\" style=\"background: ;\" text=\"공급자대표자명\"/><Cell col=\"15\" style=\"background: ;\" text=\"공급자상호\"/><Cell col=\"16\" style=\"background: ;\" text=\"공급자업태\"/><Cell col=\"17\" style=\"background: ;\" text=\"공급자업종\"/><Cell col=\"18\" style=\"background: ;\" text=\"공급자주소\"/><Cell col=\"19\" style=\"background: ;\" text=\"공급자담당부서명\"/><Cell col=\"20\" style=\"background: ;\" text=\"공급자담당자명\"/><Cell col=\"21\" style=\"background: ;\" text=\"공급자담당자전화번호\"/><Cell col=\"22\" style=\"background: ;\" text=\"공급자담당자이메일\"/><Cell col=\"23\" style=\"background: ;\" text=\"공급받는자사업자등록번호\"/><Cell col=\"24\" style=\"background: ;\" text=\"공급받는자대표자성명\"/><Cell col=\"25\" style=\"background: ;\" text=\"공급받는자상호\"/><Cell col=\"26\" style=\"background: ;\" text=\"공급받는자업태\"/><Cell col=\"27\" style=\"background: ;\" text=\"공급받는자업종\"/><Cell col=\"28\" style=\"background: ;\" text=\"공급받는자주소\"/><Cell col=\"29\" style=\"background: ;\" text=\"공급받는자담당부서명\"/><Cell col=\"30\" style=\"background: ;\" text=\"공급받는자담당자명\"/><Cell col=\"31\" style=\"background: ;\" text=\"공급받는자담당자전화번호\"/><Cell col=\"32\" style=\"background: ;\" text=\"공급받는자담당자 이메일\"/><Cell col=\"33\" style=\"background: ;\" text=\"수정코드\"/><Cell col=\"34\" style=\"background: ;\" text=\"오류코드\"/><Cell col=\"35\" style=\"background: ;\" text=\"오류메시지\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" style=\"background:EXPR(AMEND_CODE != '' ? '#e8fedc':'white');background2:EXPR(AMEND_CODE != '' ? '#e8fedc':'white');\" text=\"bind:CONVERSATION_ID\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:DTI_STATUS\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:TRAN_STATUS\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:SUPBUY_TYPE\" combodisplay=\"edit\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:DIRECTION\" combodisplay=\"edit\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:DTI_WDATE\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DTI_TYPE\" combodisplay=\"edit\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"none\" text=\"bind:DTI_TYPE2\" combodisplay=\"edit\"/><Cell col=\"8\" displaytype=\"combo\" text=\"bind:TAX_DEMAND\" combodisplay=\"edit\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUP_AMOUNT\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAX_AMOUNT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOTAL_AMOUNT\"/><Cell col=\"12\" displaytype=\"text\" text=\"bind:REMARK\"/><Cell col=\"13\" displaytype=\"text\" text=\"bind:SUP_COM_REGNO\"/><Cell col=\"14\" displaytype=\"text\" text=\"bind:SUP_REP_NAME\"/><Cell col=\"15\" displaytype=\"text\" text=\"bind:SUP_COM_NAME\"/><Cell col=\"16\" displaytype=\"text\" text=\"bind:SUP_COM_TYPE\"/><Cell col=\"17\" displaytype=\"text\" text=\"bind:SUP_COM_CLASSIFY\"/><Cell col=\"18\" displaytype=\"text\" text=\"bind:SUP_COM_ADDR\"/><Cell col=\"19\" displaytype=\"text\" text=\"bind:SUP_DEPT_NAME\"/><Cell col=\"20\" displaytype=\"text\" text=\"bind:SUP_EMP_NAME\"/><Cell col=\"21\" displaytype=\"text\" text=\"bind:SUP_TEL_NUM\"/><Cell col=\"22\" displaytype=\"text\" text=\"bind:SUP_EMAIL\"/><Cell col=\"23\" displaytype=\"text\" text=\"bind:BYR_COM_REGNO\"/><Cell col=\"24\" displaytype=\"text\" text=\"bind:BYR_REP_NAME\"/><Cell col=\"25\" displaytype=\"text\" text=\"bind:BYR_COM_NAME\"/><Cell col=\"26\" displaytype=\"text\" text=\"bind:BYR_COM_TYPE\"/><Cell col=\"27\" displaytype=\"text\" text=\"bind:BYR_COM_CLASSIFY\"/><Cell col=\"28\" displaytype=\"text\" text=\"bind:BYR_COM_ADDR\"/><Cell col=\"29\" displaytype=\"text\" text=\"bind:BYR_DEPT_NAME\"/><Cell col=\"30\" displaytype=\"text\" edittype=\"normal\" text=\"bind:BYR_EMP_NAME\"/><Cell col=\"31\" displaytype=\"text\" edittype=\"normal\" text=\"bind:BYR_TEL_NUM\"/><Cell col=\"32\" displaytype=\"text\" edittype=\"normal\" text=\"bind:BYR_EMAIL\"/><Cell col=\"33\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:AMEND_CODE\" combodisplay=\"edit\"/><Cell col=\"34\" displaytype=\"text\" text=\"bind:RETURN_CODE\"/><Cell col=\"35\" displaytype=\"text\" edittype=\"text\" text=\"bind:RETURN_DESCRIPTION\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\"/><Cell col=\"1\" colspan=\"8\" style=\"align: center;\" text=\"합계\"/><Cell col=\"9\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;SUP_AMOUNT&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TAX_AMOUNT&quot;)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TOTAL_AMOUNT&quot;)\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnCRET_TAXX", "absolute", null, "110", "110", "23", "25", null, this);
            obj.set_taborder("120");
            obj.set_text("세금계산서발행");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPD_SATXXH", "absolute", "8", "137", null, null, "25", "15", this);
            obj.set_taborder("118");
            obj.set_binddataset("dsPD_SATXXH");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\" band=\"left\"/><Column size=\"110\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"127\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"175\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"249\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"137\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"125\"/><Column size=\"119\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"179\"/><Column size=\"151\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" style=\"background: ;\" text=\"매입매출구분\"/><Cell col=\"2\" style=\"background: ;\" text=\"정발행역발행구분\"/><Cell col=\"3\" style=\"background: ;\" text=\"선택항목묶음값\"/><Cell col=\"4\" style=\"background: ;\" text=\"세금계산서일자\"/><Cell col=\"5\" style=\"background: ;\" text=\"세금계산서종류\"/><Cell col=\"6\" style=\"background: ;\" text=\"세금계산서분류\"/><Cell col=\"7\" style=\"background: ;\" text=\"영수구분\"/><Cell col=\"8\" style=\"background: ;\" text=\"관리번호\"/><Cell col=\"9\" style=\"background: ;\" text=\"공급자스마트빌ID\"/><Cell col=\"10\" style=\"background: ;\" text=\"공급가액\"/><Cell col=\"11\" style=\"background: ;\" text=\"세액\"/><Cell col=\"12\" style=\"background: ;\" text=\"총금액\"/><Cell col=\"13\" style=\"background: ;\" text=\"거래명세서구분\"/><Cell col=\"14\" style=\"background: ;\" text=\"비고\"/><Cell col=\"15\" style=\"background: ;\" text=\"공급자사업자번호\"/><Cell col=\"16\" style=\"background: ;\" text=\"공급자대표자성명\"/><Cell col=\"17\" style=\"background: ;\" text=\"공급자상호\"/><Cell col=\"18\" style=\"background: ;\" text=\"공급자업태\"/><Cell col=\"19\" style=\"background: ;\" text=\"공급자업종\"/><Cell col=\"20\" style=\"background: ;\" text=\"공급자주소\"/><Cell col=\"21\" style=\"background: ;\" text=\"공급자담당부서명\"/><Cell col=\"22\" style=\"background: ;\" text=\"공급자담당자명\"/><Cell col=\"23\" style=\"background: ;\" text=\"공급자담당자전화번호\"/><Cell col=\"24\" style=\"background: ;\" text=\"공급자담당자이메일\"/><Cell col=\"25\" style=\"background: ;\" text=\"공급받는자스마트빌ID\"/><Cell col=\"26\" style=\"background: ;\" text=\"공급받는자사업자등록번호\"/><Cell col=\"27\" style=\"background: ;\" text=\"공급받는자대표자성명\"/><Cell col=\"28\" style=\"background: ;\" text=\"공급받는자상호\"/><Cell col=\"29\" style=\"background: ;\" text=\"공급받는자업태\"/><Cell col=\"30\" style=\"background: ;\" text=\"공급받는자업종\"/><Cell col=\"31\" style=\"background: ;\" text=\"공급받는자주소\"/><Cell col=\"32\" style=\"background: ;\" text=\"공급받는자담당부서명\"/><Cell col=\"33\" style=\"background: ;\" text=\"공급받는자담당자명\"/><Cell col=\"34\" style=\"background: ;\" text=\"공급받는자전화번호\"/><Cell col=\"35\" style=\"background: ;\" text=\"공급받는자담당자이메일\"/><Cell col=\"36\" style=\"background: ;\" text=\"수정코드\"/><Cell col=\"37\" style=\"background: ;\" text=\"당초승인번호\"/><Cell col=\"38\" style=\"background: ;\" text=\"세금계산서년월\"/><Cell col=\"39\" style=\"background: ;\" text=\"세금계산서번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"none\" text=\"bind:SUPBUY_TYPE\" editdisplay=\"edit\" combodisplay=\"edit\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"none\" text=\"bind:DIRECTION\" combodisplay=\"edit\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:INTERFACE_BATCH_ID\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"date\" text=\"bind:DTI_WDATE\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"none\" text=\"bind:DTI_TYPE\" combodisplay=\"edit\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:DTI_TYPE2\" combodisplay=\"edit\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"none\" text=\"bind:TAX_DEMAND\" combodisplayrowcount=\"-1\" combodisplay=\"edit\"/><Cell col=\"8\" displaytype=\"text\" style=\"background:EXPR(ORI_ISSUE_ID != '' ? '#e8fedc':'white');background2:EXPR(ORI_ISSUE_ID != '' ? '#e8fedc':'white');\" text=\"bind:SEQ_ID\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"normal\" text=\"bind:SUP_COM_ID\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUP_AMOUNT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAX_AMOUNT\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOTAL_AMOUNT\"/><Cell col=\"13\" displaytype=\"text\" text=\"bind:DTT_YN\"/><Cell col=\"14\" displaytype=\"text\" text=\"bind:REMARK\"/><Cell col=\"15\" displaytype=\"text\" text=\"bind:SUP_COM_REGNO\"/><Cell col=\"16\" displaytype=\"text\" text=\"bind:SUP_REP_NAME\"/><Cell col=\"17\" displaytype=\"text\" text=\"bind:SUP_COM_NAME\"/><Cell col=\"18\" displaytype=\"text\" text=\"bind:SUP_COM_TYPE\"/><Cell col=\"19\" displaytype=\"text\" text=\"bind:SUP_COM_CLASSIFY\"/><Cell col=\"20\" displaytype=\"text\" text=\"bind:SUP_COM_ADDR\"/><Cell col=\"21\" displaytype=\"text\" edittype=\"normal\" text=\"bind:SUP_DEPT_NAME\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"22\" displaytype=\"text\" edittype=\"normal\" text=\"bind:SUP_EMP_NAME\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"23\" displaytype=\"text\" edittype=\"normal\" text=\"bind:SUP_TEL_NUM\"/><Cell col=\"24\" displaytype=\"text\" edittype=\"normal\" text=\"bind:SUP_EMAIL\"/><Cell col=\"25\" displaytype=\"text\" text=\"bind:BYR_COM_ID\"/><Cell col=\"26\" displaytype=\"text\" text=\"bind:BYR_COM_REGNO\"/><Cell col=\"27\" displaytype=\"text\" text=\"bind:BYR_REP_NAME\"/><Cell col=\"28\" displaytype=\"text\" text=\"bind:BYR_COM_NAME\"/><Cell col=\"29\" displaytype=\"text\" text=\"bind:BYR_COM_TYPE\"/><Cell col=\"30\" displaytype=\"text\" text=\"bind:BYR_COM_CLASSIFY\"/><Cell col=\"31\" displaytype=\"text\" text=\"bind:BYR_COM_ADDR\"/><Cell col=\"32\" displaytype=\"text\" text=\"bind:BYR_DEPT_NAME\"/><Cell col=\"33\" displaytype=\"text\" edittype=\"normal\" text=\"bind:BYR_EMP_NAME\"/><Cell col=\"34\" displaytype=\"text\" edittype=\"normal\" text=\"bind:BYR_TEL_NUM\"/><Cell col=\"35\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:BYR_EMAIL\" combodataset=\"dsPD_CUST_MAIL\" combocodecol=\"COMB_CODE\" combodatacol=\"COMB_NAME\"/><Cell col=\"36\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:AMEND_CODE\" combodisplay=\"edit\"/><Cell col=\"37\" displaytype=\"text\" text=\"bind:ORI_ISSUE_ID\"/><Cell col=\"38\" displaytype=\"text\" text=\"bind:TAXY_MONT\"/><Cell col=\"39\" displaytype=\"text\" text=\"bind:TAXX_NUMB\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\"/><Cell col=\"1\" colspan=\"9\" style=\"align: center;\" text=\"합계\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;SUP_AMOUNT&quot;)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TAX_AMOUNT&quot;)\"/><Cell col=\"12\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TOTAL_AMOUNT&quot;)\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDELE_TAXX", "absolute", null, "110", "86", "23", "25", null, this);
            obj.set_taborder("124");
            obj.set_text("미완료 처리");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

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
            obj.set_text("전자세금계산서발행");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("3");
            obj.set_text("홈 > 제작시스템>회계관리>회계관리>전자세금계산서발송");
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

            obj = new Static("stInformation", "absolute", "8", "116", "262", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "41", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("년월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("39");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "62", "61", "8", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "34", null, null, this);
            obj.set_taborder("44");
            obj.set_text("h 35");
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

            obj = new Static("Static07", "absolute", "611", "56", "128", "4", null, null, this);
            obj.set_taborder("49");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Div("calTAXY_MONT", "absolute", "70", "71", "112", "21", null, null, this);
            obj.set_taborder("110");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "179", "71", "51", "21", null, null, this);
            obj.set_taborder("111");
            obj.set_text("광고주");
            obj.set_cssclass("styFormSearchCap");
            obj.style.set_align("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "235", "71", "80", "21", null, null, this);
            obj.set_taborder("112");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_NAME", "absolute", "317", "71", "21", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "340", "71", "130", "21", null, null, this);
            obj.set_taborder("114");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoSUCC_FLAG", "absolute", "568", "71", "124", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdoSUCC_FLAG_innerdataset = new Dataset("rdoSUCC_FLAG_innerdataset", this.rdoSUCC_FLAG);
            rdoSUCC_FLAG_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">발행</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">미발행</Col></Row></Rows>");
            obj.set_innerdataset(rdoSUCC_FLAG_innerdataset);
            obj.set_taborder("115");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_value("1");
            obj.set_index("1");

            obj = new Static("Static11", "absolute", "499", "71", "65", "21", null, null, this);
            obj.set_taborder("116");
            obj.set_text("발행구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("전자세금계산서발행");

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
        this.addIncludeScript("PACA0020.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PACA0020.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PACA0020 전자세금계산서발행
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.11.04		오세훈		Initial Created.
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
        this.sBUTTONLIST 	= "TTFFFFTT"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME 	= "PACA0020"; //해당 Form에서 사용 할 Package 명
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

        	//최소 미전송 상태 
        	this.btnCRET_TAXX.set_visible(true);
        	this.btnDELE_TAXX.set_visible(false);
        	
        	this.grdPD_SATXXH.set_visible(true);
        	this.grdXXSB_DTI_MAIN.set_visible(false);
        	
        	this.calTAXY_MONT.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ));
        	
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
        	this.fnc_DatasetClear("dsPD_SATXXH");
        	this.fnc_DatasetClear("dsXXSB_DTI_MAIN");
        	
        	//완료
        	if(this.rdoSUCC_FLAG.index == 0){
        		var sMethodName = "SEARCH01";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsXXSB_DTI_MAIN=dsXXSB_DTI_MAIN";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	//미완료
        	}else if(this.rdoSUCC_FLAG.index == 1){
        		var sMethodName = "SEARCH00";
        		var sInDataSet  = "";
        		var sOutDataSet = "dsPD_SATXXH=dsPD_SATXXH dsXXSB_DTI_ITEM=dsXXSB_DTI_ITEM";
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
        	if ((this.fnc_DatasetChangeCheck("dsPD_SATXXH")) && (this.fnc_Message("TMM023") == false) ) {
        		return false;
        	}
        	if ((this.fnc_DatasetChangeCheck("dsXXSB_DTI_MAIN")) && (this.fnc_Message("TMM023") == false) ) {
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
        	if (this.fnc_DatasetChangeCheck("dsPD_SATXXH") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	var iCNT = 0;
        	for(var i = 0; i < this.dsPD_SATXXH.rowcount; i++){
        		if(this.dsPD_SATXXH.getColumn(i, "CHK") == 1){
        			iCNT += 1;
        		}
        	}
        		
        	if(iCNT==0){
        		this.fnc_Message("PCM001");
        		return  false;
        	}	
        	
        	if(this.rdoSUCC_FLAG.index == 0)
        	{
        		this.fnc_Message("PAC001");
        		return  false;
        	}
        	
        	return true;
        }

        this.fn_SaveItemCheckDel = function () {
        	
        	if(this.rdoSUCC_FLAG.index == 1)
        	{
        		this.fnc_Message("PAC004");
        		return  false;
        	}
        	
        	var sDTI_STATUS = this.dsXXSB_DTI_MAIN.getColumn(this.dsXXSB_DTI_MAIN.rowposition, "DTI_STATUS")
        	var sTRAN_STATUS = this.dsXXSB_DTI_MAIN.getColumn(this.dsXXSB_DTI_MAIN.rowposition, "TRAN_STATUS")
        	

        	//최소 완료가 수신승인되어야 취소가 가능
        	if((sDTI_STATUS == "취소완료") && (sTRAN_STATUS == "수신승인")){
        	
        			return true;
        	}else if((sDTI_STATUS == "수신미승인") && (sTRAN_STATUS == "에러")){
        	
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
        		sReturnString += " TAXY_MONT=" + this.fnc_Quote(this.calTAXY_MONT.fn_GetMonth()); //세금계산서년월
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.edtSHRCUST_CODE.value);    //광고주코드
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value);    //광고주명

        	} else if(sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " TAXY_MONT=" + this.fnc_Quote(this.calTAXY_MONT.fn_GetMonth()); //세금계산서년월
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.edtSHRCUST_CODE.value);    //광고주코드
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value);    //광고주명
        	
        	}  else if(sKind == "SEARCH02") {
        	
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        	
        	}  else if (sKind == "SAVE00") {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		
        	}  else if (sKind == "SAVE01") {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		
        	}  else if (sKind == "DELETE00") {

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

        	if (sMethodName == "SEARCH00") {
        		this.fnc_Information(this.stInformation, this.dsPD_SATXXH.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        		this.fnc_getcust_codemail();
        		
        	} else if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.stInformation, this.dsXXSB_DTI_MAIN.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        	} else if (sMethodName == "SEARCH02") {
        	
        		
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	} else if (sMethodName == "SAVE01") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	} else if (sMethodName == "DELETE00") {
        		this.fnc_Message("TMM041");
        		this.fn_Search();

        	} else if (sMethodName == "GetCommCode") {
        		//콤보 일경우 
        		
        		var arrParam = new Array();
        			arrParam[0]  = "GRID,grdPD_SATXXH,dsSUPB_TYPE,SUPBUY_TYPE";
        			arrParam[1]  = "GRID,grdPD_SATXXH,dsDIRE_TION,DIRECTION";
        			arrParam[2]  = "GRID,grdPD_SATXXH,dsTAXX_TYPE,DTI_TYPE";
        			arrParam[3]  = "GRID,grdPD_SATXXH,dsTAXX_TYPE2,DTI_TYPE2";
        			arrParam[4]  = "GRID,grdPD_SATXXH,dsTAXX_DEND,TAX_DEMAND";
        			arrParam[5]  = "GRID,grdPD_SATXXH,dsAMED_CODE,AMEND_CODE";
        			arrParam[6]  = "GRID,grdXXSB_DTI_MAIN,dsSUPB_TYPE,SUPBUY_TYPE";
        			arrParam[7]  = "GRID,grdXXSB_DTI_MAIN,dsDIRE_TION,DIRECTION";
        			arrParam[8]  = "GRID,grdXXSB_DTI_MAIN,dsTAXX_TYPE,DTI_TYPE";
        			arrParam[9]  = "GRID,grdXXSB_DTI_MAIN,dsTAXX_TYPE2,DTI_TYPE2";
        			arrParam[10]  = "GRID,grdXXSB_DTI_MAIN,dsTAXX_DEND,TAX_DEMAND";
        			arrParam[11]  = "GRID,grdXXSB_DTI_MAIN,dsAMED_CODE,AMEND_CODE";
        		this.fnc_CommonCodeInnerBind(arrParam);

        
        	}	
        }

        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
         

        this.rdoSUCC_FLAG_onitemchanged = function(obj,e)
        {
        	//완료
        	if(this.rdoSUCC_FLAG.index == 0){
        		this.btnCRET_TAXX.set_visible(false);
        		this.btnDELE_TAXX.set_visible(true);
        		this.grdPD_SATXXH.set_visible(false);
        		this.grdXXSB_DTI_MAIN.set_visible(true);
        		this.fn_Search();
        	//미완료
        	}else if(this.rdoSUCC_FLAG.index == 1){
        		this.btnCRET_TAXX.set_visible(true);
        		this.btnDELE_TAXX.set_visible(false);
        		this.grdPD_SATXXH.set_visible(true);
        		this.grdXXSB_DTI_MAIN.set_visible(false);
        		this.fn_Search();
        	}
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
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);         //Mapping Column Index
        	}
        }

        /*---------------------------+
         |  전자세금계산서 생성
         +---------------------------*/
        this.btnCRET_TAXX_onclick = function(obj,e)
        {
        	if (!this.fn_SaveItemCheck()) return;
        	
        	if(this.fnc_Message("PAC006")){
        		var sMethodName = "SAVE00";
        		var sInDataSet  = "dsPD_SATXXH=dsPD_SATXXH:U";
        		var sOutDataSet = "";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        	}	
        }

        /*---------------------------+
         |  헤더부분 클릭이벤트
         +---------------------------*/
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

        var isAllChecked = 0;
        this.grdXXSB_DTI_MAIN_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.grdXXSB_DTI_MAIN.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsXXSB_DTI_MAIN.getRowCount(); i++) {
        			this.dsXXSB_DTI_MAIN.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.grdXXSB_DTI_MAIN.setCellProperty("Head", 0, "expr", isAllChecked);
        	}	
        }

        this.grdPD_SATXXH_onexpandup = function(obj,sFromDs,sOldValue,sColumnID)
        {
        	var arrParam = new Array();
        	
        	if (obj.name == "grdPD_SATXXH") {	

        		if ((obj.getCellProperty("Body", obj.currentcell, "text") == "bind:SUP_DEPT_NAME") || (sColumnID == "SUP_DEPT_NAME")) {
        			arrParam[0] = "PDM0003";
        			arrParam[1] = "";
        			arrParam[2] = "SUP_DEPT_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPD_SATXXH";
        			arrParam[5] = "SUP_DEPT_NAME";
        			arrParam[6] = "1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}

        		if ((obj.getCellProperty("Body", obj.currentcell, "text") == "bind:SUP_EMP_NAME") || (sColumnID == "SUP_EMP_NAME")) {
        			arrParam[0] = "MDM0001";
        			arrParam[1] = "";
        			arrParam[2] = "SUP_EMP_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPD_SATXXH";
        			arrParam[5] = "SUP_EMP_NAME";
        			arrParam[6] = "1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;
        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}
        }

        this.dsPD_SATXXH_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "SUP_DEPT_NAME" ) this.grdPD_SATXXH_onexpandup(this.grdPD_SATXXH, "YES", e.oldvalue, e.columnid);
        	if (e.columnid == "SUP_EMP_NAME" ) this.grdPD_SATXXH_onexpandup(this.grdPD_SATXXH, "YES", e.oldvalue, e.columnid);
        }

        this.btnDELE_TAXX_onclick = function(obj,e)
        {
        	if (!this.fn_SaveItemCheckDel()) return;
        	
        			//업데이트 컨트롤을 변경해야 한다.
        		this.dsXXSB_DTI_MAIN.set_updatecontrol(false);
        	
        		//업데이트컨트롤 선택된 데이터 업데이트로 변경
        		var bSucc = this.dsXXSB_DTI_MAIN.setRowType(this.dsXXSB_DTI_MAIN.rowposition, Dataset.ROWTYPE_UPDATE);
        		
        		this.dsXXSB_DTI_MAIN.set_updatecontrol(true);
        	
        	if(this.fnc_Message("TMM140","전자세금계산서 데이터를 취소합니다. \n  잘못 발행된 데이터를 재발행 가능하도록 변경 하시겠습까?")){
        		var sMethodName = "SAVE01";
        		var sInDataSet  = "dsXXSB_DTI_MAIN=dsXXSB_DTI_MAIN:U";
        		var sOutDataSet = "";
        		var sArgument   = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        		
        	}
        	
        }

        
        this.fnc_getcust_codemail = function()
        {
        		this.fnc_DatasetClear("dsPD_CUST_MAIL");
        		
        		for(var  i = 0; i < this.dsPD_SATXXH.rowcount; i++){
        			this.dsPD_CUST_MAIL.insertRow(i);
        			this.dsPD_CUST_MAIL.setColumn(i, "CUST_CODE", this.dsPD_SATXXH.getColumn(i,"CUST_CODE"));
        		}
        		
        		if(this.dsPD_CUST_MAIL.rowcount > 1){
        			var sMethodName = "SEARCH02";
        			var sInDataSet  = "dsPD_CUST_MAIL=dsPD_CUST_MAIL:A";
        			var sOutDataSet = "dsPD_CUST_MAIL=dsPD_CUST_MAIL";
        			var sArgument = this.fn_CreateArgument(sMethodName);
        			this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		}
        }

        
        this.grdPD_SATXXH_ondropdown = function(obj,e)
        {
        	var sCUST_CODE = this.dsPD_SATXXH.getColumn(e.row, "CUST_CODE");

        	this.dsPD_CUST_MAIL.filter("CUST_CODE == '" + sCUST_CODE + "'");	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPD_SATXXH.addEventHandler("oncolumnchanged", this.dsPD_SATXXH_oncolumnchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.grdXXSB_DTI_MAIN.addEventHandler("onheadclick", this.grdXXSB_DTI_MAIN_onheadclick, this);
            this.btnCRET_TAXX.addEventHandler("onclick", this.btnCRET_TAXX_onclick, this);
            this.grdPD_SATXXH.addEventHandler("onheadclick", this.grdPD_SATXXH_onheadclick, this);
            this.grdPD_SATXXH.addEventHandler("onexpandup", this.grdPD_SATXXH_onexpandup, this);
            this.grdPD_SATXXH.addEventHandler("oncloseup", this.grdPD_SATXXH_oncloseup, this);
            this.grdPD_SATXXH.addEventHandler("ondropdown", this.grdPD_SATXXH_ondropdown, this);
            this.btnDELE_TAXX.addEventHandler("onclick", this.btnDELE_TAXX_onclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCUST_NAME.addEventHandler("onclick", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.rdoSUCC_FLAG.addEventHandler("onitemchanged", this.rdoSUCC_FLAG_onitemchanged, this);

        };

        this.loadIncludeScript("PACA0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
