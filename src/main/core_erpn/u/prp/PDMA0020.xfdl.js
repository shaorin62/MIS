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
                this.set_name("PCMA0020");
                this.set_titletext("계약서관리");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_CONTXH", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"REGI_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"PREP_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"BALA_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"PREP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BALA_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PREP_PAYM\" type=\"STRING\" size=\"256\"/><Column id=\"BALA_PAYM\" type=\"STRING\" size=\"256\"/><Column id=\"DELI_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_STDT\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_EDDT\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PHON_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"EMAL_ADDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_CONTXD", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REGI_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"RANK_TANS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_CONTXD_DTL", this);
            obj._setContents("<ColumnInfo><Column id=\"CONT_IDXX\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REGI_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NUMB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_CONTXH_RPT", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBN_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_STDT\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_EDDT\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"PREP_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"BALA_AMTX\" type=\"STRING\" size=\"256\"/><Column id=\"DELI_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"PREP_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BALA_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PREP_PAYM\" type=\"STRING\" size=\"256\"/><Column id=\"BALA_PAYM\" type=\"STRING\" size=\"256\"/><Column id=\"OUTS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OUTS_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"OUTS_OWNR\" type=\"STRING\" size=\"256\"/><Column id=\"HOME_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HOME_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"HOME_OWNR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdPD_CONTXD", "absolute", "8", null, null, "214", "25", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("19");
            obj.set_binddataset("dsPD_CONTXD");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_tooltiptype("inplace");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"120\"/><Column size=\"190\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"300\"/><Column size=\"150\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"제작사코드\"/><Cell col=\"2\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"제작사\"/><Cell col=\"3\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"등록일\"/><Cell col=\"4\" displaytype=\"text\" text=\"제작번호\"/><Cell col=\"5\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"제작명/계약명\"/><Cell col=\"6\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"금액\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:CUST_CODE\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" text=\"bind:CUST_NAME\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL('theme://images/btn_WF_Search.png')\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:REGI_DATE\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:JOBN_NUMB\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"normal\" text=\"bind:CONT_NAME\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" edittype=\"normal\" editfilter=\"number\" text=\"bind:CONT_AMTX\" editdisplay=\"edit\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" displaytype=\"text\"/><Cell col=\"3\" colspan=\"2\" style=\"align: left;\" text=\"합계\"/><Cell col=\"5\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;CONT_AMTX&quot;)\"/><Cell col=\"7\"/><Cell col=\"8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPD_CONTXD_DTL", "absolute", "8", null, null, "214", "25", "15", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("146");
            obj.set_binddataset("dsPD_CONTXD_DTL");
            obj.set_wheelscrollrow("1");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"계약서ID\"/><Cell col=\"1\" text=\"제작사코드\"/><Cell col=\"2\" text=\"제작사명\"/><Cell col=\"3\" text=\"정산일자\"/><Cell col=\"4\" text=\"제작번호\"/><Cell col=\"5\" text=\"제작건명\"/><Cell col=\"6\" text=\"항목명\"/><Cell col=\"7\" text=\"계약금액\"/><Cell col=\"8\" text=\"계약서번호\"/></Band><Band id=\"body\"><Cell text=\"bind:CONT_IDXX\"/><Cell col=\"1\" text=\"bind:CUST_CODE\"/><Cell col=\"2\" text=\"bind:CUST_NAME\"/><Cell col=\"3\" text=\"bind:REGI_DATE\"/><Cell col=\"4\" text=\"bind:JOBN_NUMB\"/><Cell col=\"5\" text=\"bind:JOBN_NAME\"/><Cell col=\"6\" text=\"bind:CONT_NAME\"/><Cell col=\"7\" displaytype=\"number\" text=\"bind:CONT_AMTX\"/><Cell col=\"8\" text=\"bind:CONT_NUMB\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" displaytype=\"text\"/><Cell col=\"3\" colspan=\"2\" style=\"align: left;\" text=\"합계\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;CONT_AMTX&quot;)\"/><Cell col=\"8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox03", "absolute", "8", null, null, "91", "25", "264", this);
            obj.set_taborder("125");
            obj.set_cssclass("styFormItemBoxOut");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPD_CONTXH", "absolute", "8", "138", null, null, "25", "370", this);
            obj.set_binddataset("dsPD_CONTXH");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_selecttype("row");
            obj.set_taborder("3");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("none");
            obj.set_cssclass("styGrid01");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"25\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"0\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" expr=\"0\"/><Cell col=\"1\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"계약서번호\"/><Cell col=\"2\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"등록일\"/><Cell col=\"3\" displaytype=\"text\" text=\"제작번호\"/><Cell col=\"4\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"계약명\"/><Cell col=\"5\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"제작사명\"/><Cell col=\"6\" displaytype=\"text\" text=\"제작사담당자\"/><Cell col=\"7\" displaytype=\"text\" text=\"제작사 E-mail\"/><Cell col=\"8\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"계약일\"/><Cell col=\"9\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"계약금액\"/><Cell col=\"10\" displaytype=\"text\" text=\"선급금액\"/><Cell col=\"11\" displaytype=\"text\" text=\"잔금\"/><Cell col=\"12\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"납품일\"/><Cell col=\"13\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"계약시작일\"/><Cell col=\"14\" displaytype=\"text\" cssclass=\"Cellgrd_WF_essential\" text=\"계약종료일\"/><Cell col=\"15\" displaytype=\"text\" text=\"비고\"/><Cell col=\"16\" displaytype=\"text\" text=\"선급금 지급기일\"/><Cell col=\"17\" displaytype=\"text\" text=\"잔금 지급기일\"/><Cell col=\"18\" displaytype=\"text\" text=\"선급금 지급방법\"/><Cell col=\"19\" displaytype=\"text\" text=\"잔금 지급방법\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:CONT_NUMB\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:REGI_DATE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:JOBN_NUMB\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:CONT_NAME\"/><Cell col=\"5\" displaytype=\"text\" text=\"bind:CUST_NAME\"/><Cell col=\"6\" displaytype=\"text\" text=\"bind:EMPL_NAME\"/><Cell col=\"7\" displaytype=\"text\" text=\"bind:EMAL_ADDR\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:CONT_DATE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CONT_AMTX\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PREP_AMTX\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BALA_AMTX\"/><Cell col=\"12\" displaytype=\"date\" text=\"bind:DELI_DATE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"13\" displaytype=\"date\" text=\"bind:CONT_STDT\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"14\" displaytype=\"date\" text=\"bind:CONT_EDDT\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"15\" displaytype=\"text\" text=\"bind:MEMO_FILD\"/><Cell col=\"16\" displaytype=\"text\" text=\"bind:PREP_DATE\"/><Cell col=\"17\" displaytype=\"date\" text=\"bind:BALA_DATE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"18\" displaytype=\"text\" text=\"bind:PREP_PAYM\"/><Cell col=\"19\" displaytype=\"text\" text=\"bind:BALA_PAYM\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" displaytype=\"text\"/><Cell col=\"3\" colspan=\"2\" style=\"align: center;\" text=\"합계\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;CONT_AMTX&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;PREP_AMTX&quot;)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;BALA_AMTX&quot;)\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "28", null, "67", "21", null, "299", this);
            obj.set_taborder("25");
            obj.set_text("계약일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static9", "absolute", "28", null, "67", "21", null, "325", this);
            obj.set_taborder("26");
            obj.set_text("계약명");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "349", null, "53", "21", null, "325", this);
            obj.set_taborder("29");
            obj.set_text("금액");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "349", null, "53", "21", null, "299", this);
            obj.set_taborder("30");
            obj.set_text("선급금");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "561", null, "53", "21", null, "299", this);
            obj.set_taborder("34");
            obj.set_text("잔금");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow", "absolute", null, null, "62", "21", "90", "233", this);
            obj.set_taborder("46");
            obj.style.set_imagealign("left");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRow", "absolute", null, null, "62", "21", "25", "233", this);
            obj.set_taborder("47");
            obj.style.set_imagealign("left");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "28", null, "67", "21", null, "273", this);
            obj.set_taborder("49");
            obj.set_text("계약기간");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "561", null, "53", "21", null, "325", this);
            obj.set_taborder("51");
            obj.set_text("납품일");
            obj.set_cssclass("styFormItemCapBE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCONT_NAME", "absolute", "98", null, "220", "21", null, "325", this);
            obj.set_taborder("57");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("255");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_CONTXH");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtCONT_AMTX", "absolute", "425", null, "100", "21", null, "325", this);
            obj.set_mask("#,###");
            obj.set_taborder("58");
            obj.getSetter("inputmode").set("normal");
            obj.getSetter("lengthunit").set("ascii");
            obj.getSetter("maxlength").set("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_CONTXH");
            obj.getSetter("inputtype").set("number");
            obj.set_displaynulltext("0");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPREP_AMTX", "absolute", "425", null, "100", "21", null, "299", this);
            obj.set_taborder("59");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_CONTXH");
            obj.set_inputtype("number");
            obj.set_displaynulltext("0");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBALA_AMTX", "absolute", "658", null, "100", "21", null, "299", this);
            obj.set_taborder("61");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("20");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_CONTXH");
            obj.set_inputtype("number");
            obj.set_displaynulltext("0");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("66");
            obj.set_cssclass("styFormSearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTYPE_NAME", "absolute", "28", "71", "62", "21", null, null, this);
            obj.set_taborder("68");
            obj.set_text("계약일");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTYPE_NAME00", "absolute", "204", "71", "25", "21", null, null, this);
            obj.set_taborder("69");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchMEDA_CODE", "absolute", "869", "71", "55", "21", null, null, this);
            obj.set_taborder("71");
            obj.set_text("제작명");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "333", "71", "83", "21", null, null, this);
            obj.set_taborder("73");
            obj.set_text("계약서번호");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCONT_NUMB", "absolute", "414", "71", "120", "21", null, null, this);
            obj.set_taborder("76");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "564", "71", "57", "21", null, null, this);
            obj.set_taborder("77");
            obj.set_text("제작사");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "619", "71", "80", "21", null, null, this);
            obj.set_taborder("78");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_CODE", "absolute", "701", "71", "25", "21", null, null, this);
            obj.set_taborder("79");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "724", "71", "120", "21", null, null, this);
            obj.set_taborder("80");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSHRCONT_DATE1", "absolute", "83", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("87");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Calendar("calSHRCONT_DATE2", "absolute", "203", "71", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("88");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormSearchItemCalendar");

            obj = new Edit("edtSHRJOBN_NUMB", "absolute", "924", "71", "80", "21", null, null, this);
            obj.set_taborder("89");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRJOBN_NUMB", "absolute", "1006", "71", "25", "21", null, null, this);
            obj.set_taborder("90");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRJOBN_NAME", "absolute", "1029", "71", "115", "21", null, null, this);
            obj.set_taborder("91");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Button("btnCONT_SEND", "absolute", null, "113", "89", "21", "25", null, this);
            obj.set_taborder("92");
            obj.set_text("계약서발송");
            obj.set_cssclass("styTextButtonBizProc");
            obj.style.set_align("center");
            obj.getSetter("UserData").set("P");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "117", "271", "21", null, null, this);
            obj.set_taborder("93");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkBASIC", "absolute", null, "113", "49", "21", "188", null, this);
            obj.set_taborder("95");
            obj.set_text("기본");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkINDIV", "absolute", null, "113", "50", "21", "132", null, this);
            obj.set_taborder("96");
            obj.set_text("개별");
            this.addChild(obj.name, obj);

            obj = new Button("btnCONT_CRET", "absolute", null, null, "74", "21", "177", "233", this);
            obj.set_taborder("97");
            obj.set_text("계약서생성");
            obj.set_cssclass("styTextButtonBizProc");
            obj.getSetter("UserData").set("P");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "773", null, "53", "21", null, "273", this);
            obj.set_taborder("99");
            obj.set_text("비고");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calCONT_DATE", "absolute", "98", null, "100", "21", null, "299", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("100");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsPD_CONTXH");

            obj = new Calendar("calCONT_STDT", "absolute", "98", null, "100", "21", null, "273", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("101");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsPD_CONTXH");

            obj = new Calendar("calDELI_DATE", "absolute", "658", null, "100", "21", null, "325", this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsPD_CONTXH");
            obj.set_taborder("102");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Calendar("calCONT_EDDT", "absolute", "218", null, "100", "21", null, "273", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("106");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");
            obj.getSetter("binddataset").set("dsPD_CONTXH");

            obj = new Static("imgSearchTYPE_NAME01", "absolute", "203", null, "14", "21", null, "273", this);
            obj.set_taborder("107");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "10", "0", null, "29", "441", null, this);
            obj.set_taborder("111");
            obj.set_text("제작계약서관리");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "825", "29", "47", null, this);
            obj.set_taborder("112");
            obj.set_text("홈 > 제작시스템>제작관리>계약관리>계약서관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "579", "23", "25", null, this);
            obj.set_taborder("114");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "606", "0", "37", "60", null, null, this);
            obj.set_taborder("115");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("118");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "75", "61", "8", "41", null, null, this);
            obj.set_taborder("119");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "303", "61", "41", "41", null, null, this);
            obj.set_taborder("120");
            obj.set_text("w40");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "606", "103", "81", "35", null, null, this);
            obj.set_taborder("124");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "9", null, "30", "74", null, "273", this);
            obj.set_taborder("126");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMEMO_FILD", "absolute", "831", null, "309", "21", null, "273", this);
            obj.getSetter("binddataset").set("dsPD_CONTXH");
            obj.set_taborder("129");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.set_maxlength("255");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTYPE_NAME02", "absolute", "188", "71", "14", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("131");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "1162", "0", "25", "717", null, null, this);
            obj.set_taborder("133");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("134");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "0", "0", null, "29", "1137", null, this);
            obj.set_taborder("135");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "1096", "103", "56", "10", null, null, this);
            obj.set_taborder("136");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "606", "347", "81", "15", null, null, this);
            obj.set_taborder("137");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "606", "453", "81", "35", null, null, this);
            obj.set_taborder("138");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation02", "absolute", null, "113", "7", "21", "120", null, this);
            obj.set_taborder("139");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "1061", "99", "12", "23", null, null, this);
            obj.set_taborder("140");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "1048", "99", "12", "23", null, null, this);
            obj.set_taborder("141");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "1010", "460", "12", "23", null, null, this);
            obj.set_taborder("142");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "1023", "460", "12", "23", null, null, this);
            obj.set_taborder("143");
            obj.set_text("w\r\n12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation00", "absolute", null, null, "7", "21", "158", "233", this);
            obj.set_taborder("144");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation01", "absolute", "8", null, "271", "21", null, "235", this);
            obj.set_taborder("145");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "349", null, "77", "21", null, "273", this);
            obj.set_taborder("147");
            obj.set_text("선지급기일");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calPREP_DATE", "absolute", "425", null, "100", "21", null, "273", this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsPD_CONTXH");
            obj.set_taborder("148");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Static("Static21", "absolute", "561", null, "101", "21", null, "273", this);
            obj.set_taborder("149");
            obj.set_text("잔금 지급기일");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Calendar("calBALA_DATE", "absolute", "658", null, "100", "21", null, "273", this);
            this.addChild(obj.name, obj);
            obj.getSetter("binddataset").set("dsPD_CONTXH");
            obj.set_taborder("150");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("styFormItemCalendar");

            obj = new Edit("edtPREP_PAYM", "absolute", "890", null, "116", "21", null, "325", this);
            obj.set_taborder("151");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("255");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_CONTXH");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "773", null, "115", "21", null, "325", this);
            obj.set_taborder("152");
            obj.set_text("선급금 지급방법");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "773", null, "115", "21", null, "301", this);
            obj.set_taborder("153");
            obj.set_text("잔금 지급방법");
            obj.set_cssclass("styFormItemCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBALA_PAYM", "absolute", "890", null, "116", "21", null, "301", this);
            obj.set_taborder("154");
            obj.set_inputmode("upper");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("255");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsPD_CONTXH");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("계약서관리");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edtCONT_NAME","binddataset","dsPD_CONTXH","CONT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtCONT_NAME","value","dsPD_CONTXH","CONT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtCONT_AMTX","binddataset","dsPD_CONTXH","CONT_AMTX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtCONT_AMTX","value","dsPD_CONTXH","CONT_AMTX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtBALA_AMTX","value","dsPD_CONTXH","BALA_AMTX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edtBALA_AMTX","binddataset","dsPD_CONTXH","BALA_AMTX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","calCONT_DATE","binddataset","dsPD_CONTXH","CONT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edtPREP_AMTX","value","dsPD_CONTXH","PREP_AMTX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edtPREP_AMTX","binddataset","dsPD_CONTXH","PREP_AMTX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","calCONT_STDT","binddataset","dsPD_CONTXH","CONT_STDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","calCONT_EDDT","value","dsPD_CONTXH","CONT_EDDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","calCONT_EDDT","binddataset","dsPD_CONTXH","CONT_EDDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","calDELI_DATE","value","dsPD_CONTXH","DELI_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","calDELI_DATE","binddataset","dsPD_CONTXH","DELI_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edtMEMO_FILD","value","dsPD_CONTXH","MEMO_FILD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edtMEMO_FILD","binddataset","dsPD_CONTXH","MEMO_FILD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","calCONT_DATE","value","dsPD_CONTXH","CONT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","calCONT_STDT","value","dsPD_CONTXH","CONT_STDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","calPREP_DATE","value","dsPD_CONTXH","PREP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","calPREP_DATE","binddataset","dsPD_CONTXH","PREP_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","calBALA_DATE","value","dsPD_CONTXH","BALA_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","calBALA_DATE","binddataset","dsPD_CONTXH","BALA_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","edtPREP_PAYM","binddataset","dsPD_CONTXH","PREP_PAYM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","edtPREP_PAYM","value","dsPD_CONTXH","PREP_PAYM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","edtBALA_PAYM","binddataset","dsPD_CONTXH","BALA_PAYM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","edtBALA_PAYM","value","dsPD_CONTXH","BALA_PAYM");
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
        this.addIncludeScript("PDMA0020.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("PDMA0020.xfdl", "script::lib_script_ubireport.xjs");
        this.registerScript("PDMA0020.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PDMA0020 제작 계약서 관리
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.09.19		오세훈		Initial Created.
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
        this.sBUTTONLIST 	= "TTFTTTFT"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME 	= "PDMA0020"; //해당 Form에서 사용 할 Package 명
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
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);

        	//최초 날짜세팅
        	this.calSHRCONT_DATE1.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 )+'01');
        	this.calSHRCONT_DATE2.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ) + this.fnc_GetLastDayOfMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"))));
        	
        	/*
        	this.calCONT_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,8));
        	this.calCONT_STDT.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,8));
        	this.calCONT_EDDT.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ) + this.fnc_GetLastDayOfMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"))));
        	this.calDELI_DATE.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,8));
        	*/
        	
        	
        	/*최초 미생성 계약 관련 데이터 */
        	this.grdPD_CONTXD.set_visible(true);
        	this.btnCONT_CRET.set_visible(true);
        	this.btnAddRow.set_visible(true);
        	this.btnDelRow.set_visible(true);
        	
        	this.grdPD_CONTXD_DTL.set_visible(false);
        		
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
        	this.fnc_DatasetClear("dsPD_CONTXH");

        	//상단 계약서 데이터 조회
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPD_CONTXH=dsPD_CONTXH";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPD_CONTXH.setFocus();

        	//하단 계약기초 데이터 조회
        	this.fnc_DatasetClear("dsPD_CONTXD");

        	var sMethodName = "SEARCH01";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPD_CONTXD=dsPD_CONTXD";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPD_CONTXD.setFocus();
        }

        
        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	var iRow = this.dsPD_CONTXH.insertRow(this.dsPD_CONTXH.rowposition + 1);
        	this.dsPD_CONTXH.set_rowposition(iRow);
        	
        	this.dsPD_CONTXH.setCellPos(this.fnc_GridColumnIndex(this.grdPD_CONTXH, 0));	

        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        	//선택된 데이터 삭제
        	if (!this.fn_DeleteCheck()) return;
        	
        	for(var i = this.dsPD_CONTXH.rowcount; i >= 0; i--){
        		if(this.dsPD_CONTXH.getColumn(i, "CHK") == 1){
        			this.dsPD_CONTXH.deleteRow(i);
        		}
        	}
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
        	
        	if (!this.fn_SaveItemCheck()) return;
        	
        	if(this.fnc_DatasetChangeCheck("dsPD_CONTXH")){
        		var sMethodName = "SAVE00";
        		var sInDataSet  = "dsPD_CONTXH=dsPD_CONTXH:U";
        		var sOutDataSet = "";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}
        	
        	if(this.fnc_DatasetChangeCheck("dsPD_CONTXD")){
        		var sMethodName = "SAVE01";
        		var sInDataSet  = "dsPD_CONTXD=dsPD_CONTXD:U";
        		var sOutDataSet = "";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        		this.grdPD_CONTXD.setFocus();
        	
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
        	if (this.dsPD_CONTXH.getRowCount() < 0) return this.fnc_Message("TMM011");
            if (this.dsPD_CONTXH.rowposition < 0) return;

            this.fnc_DatasetClear("dsPD_CONTXH_RPT");
            
        	var reportfile 	= "/pdm/PDMA0020R01.jrf";
            var dataref 	= new Array();
            var params 		= "";
            
        	dataref[0] 				= new Object();
        	dataref[0].type 		= "TRAN";
        	dataref[0].svcUrl 		= "/core/erp/pdm/PDMA0020_PRINT00.do";
        	dataref[0].inDataset 	= "dsPD_CONTXH=dsPD_CONTXH:U"
        	dataref[0].outDataset 	= "dsPD_CONTXH_RPT=dsPD_CONTXH_RPT";
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
        	if ((this.fnc_DatasetChangeCheck("dsPD_CONTXH")) && (this.fnc_Message("TMM023") == false) ) {
        		return false;
        	}
        	if ((this.fnc_DatasetChangeCheck("dsPD_CONTXD")) && (this.fnc_Message("TMM023") == false) ) {
        		return false;
        	}

        	return true;
        	// 모든 조회 조건이 입력 되면 True를 반환 한다.
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	if (this.dsPD_CONTXH.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var cnt = this.dsPD_CONTXH.rowcount;
        	var chk = 0;
        	for(var i=0; i < cnt; i ++){
        		if(this.dsPD_CONTXH.getColumn(i, "CHK") == "1"){
        			chk += 1;	
        		}
        	}
        	
        	if(chk ==0){this.fnc_Message("PCM001"); return false;}
        	
        	var sQuestionText = "(" + this.fnc_Trim(this.dsPD_CONTXH.getColumn(this.dsPD_CONTXH.rowposition, "CONT_NAME")) + ") 계약서";
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	// 공통 Head & 상세 변경 체크
        	if (this.fnc_DatasetChangeCheck("dsPD_CONTXH") == false && this.fnc_DatasetChangeCheck("dsPD_CONTXD") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	// 공통 Head 정보 필수 입력 항목 체크
        	for (var i = 0; i < this.dsPD_CONTXH.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsPD_CONTXH.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_CONTXH.getColumn(i, "CONT_NUMB"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "계약서번호", this.dsPD_CONTXH, i, '', '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_CONTXH.getColumn(i, "REGI_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "등록일", this.dsPD_CONTXH, i, '', '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_CONTXH.getColumn(i, "CONT_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "계약명", this.dsPD_CONTXH, i, '', '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_CONTXH.getColumn(i, "CUST_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "제작사", this.dsPD_CONTXH, i, '', '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_CONTXH.getColumn(i, "CONT_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "계약일", this.dsPD_CONTXH, i, '', '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_CONTXH.getColumn(i, "CONT_AMTX"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "계약금", this.dsPD_CONTXH, i, '', '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_CONTXH.getColumn(i, "DELI_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "납품일", this.dsPD_CONTXH, i, '', '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_CONTXH.getColumn(i, "CONT_STDT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "계약시작일", this.dsPD_CONTXH, i, '', '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_CONTXH.getColumn(i, "CONT_EDDT"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "계약종료일", this.dsPD_CONTXH, i, '', '');
        		}
        	}
        	
        	// 공통 Detail 정보 필수 입력 항목 체크
        	for (var i = 0; i < this.dsPD_CONTXD.getRowCount(); i++) {
        	
        		if (this.fnc_ToUpper(this.dsPD_CONTXD.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_CONTXD.getColumn(i, "CUST_CODE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "제작사", this.dsPD_CONTXD, i, '', '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_CONTXD.getColumn(i, "CUST_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "제작사명", this.dsPD_CONTXD, i, '', '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_CONTXD.getColumn(i, "REGI_DATE"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "등록일", this.dsPD_CONTXD, i, '', '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_CONTXD.getColumn(i, "CONT_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "제작명/계약명", this.dsPD_CONTXD, i, '', '');
        		}
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_CONTXD.getColumn(i, "CONT_AMTX"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "계약금액", this.dsPD_CONTXD, i, '', '');
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
        		sReturnString += " CONT_DATE1=" + this.fnc_Quote(this.calSHRCONT_DATE1.value); //계약일
        		sReturnString += " CONT_DATE2=" + this.fnc_Quote(this.calSHRCONT_DATE2.value); //계약일
        		sReturnString += " CONT_NUMB=" + this.fnc_Quote(this.edtSHRCONT_NUMB.value); //계약번호
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.edtSHRCUST_CODE.value); //제작사코드
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value); //제작사명
        		sReturnString += " JOBN_NUMB=" + this.fnc_Quote(this.edtSHRJOBN_NUMB.value); //제작번호
        		sReturnString += " JOBN_NAME=" + this.fnc_Quote(this.edtSHRJOBN_NAME.value); //제작명
        	
        	} else if (sKind == "SEARCH01") {
        	
        		sReturnString  = " pgm=" 	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " CONT_DATE1=" + this.fnc_Quote(this.calSHRCONT_DATE1.value); //계약일
        		sReturnString += " CONT_DATE2=" + this.fnc_Quote(this.calSHRCONT_DATE2.value); //계약일
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.edtSHRCUST_CODE.value); //제작사코드
        		sReturnString += " CUST_NAME=" + this.fnc_Quote(this.edtSHRCUST_NAME.value); //제작사명
        		sReturnString += " JOBN_NUMB=" + this.fnc_Quote(this.edtSHRJOBN_NUMB.value); //제작번호
        		sReturnString += " JOBN_NAME=" + this.fnc_Quote(this.edtSHRJOBN_NAME.value); //제작명
        	
        	} else if (sKind == "SEARCH02") {
        	
        		sReturnString  = " pgm=" 	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        		sReturnString += " CONT_NUMB=" + this.fnc_Quote(this.dsPD_CONTXH.getColumn(this.dsPD_CONTXH.rowposition,"CONT_NUMB")); //제작명
        		
        	
        	} else if (sKind == "SAVE00" || sKind == "SAVE01") {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		
        	} else if (sKind == "SAVE02") {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        	} else if (sKind == "PRINT00") {

        		sReturnString = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind);
        		sReturnString += " CONT_NUMB=" + this.fnc_Quote(this.dsPD_CONTXH.getColumn(this.dsPD_CONTXH.rowposition,"CONT_NUMB")); //제작명	
        	}  else if (sKind == "SEND00") {

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
        		this.fnc_Information(this.stInformation, this.dsPD_CONTXH.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");

        		/* 조회시 계약서 생성할 수 있도록 화면 세팅 */
        		this.grdPD_CONTXD.set_visible(true);
        		this.btnCONT_CRET.set_visible(true);
        		this.btnAddRow.set_visible(true);
        		this.btnDelRow.set_visible(true);
        		
        		this.grdPD_CONTXD_DTL.set_visible(false);
        	
        	
        	} else if (sMethodName == "SEARCH01") {
        	
        		this.fnc_Information(this.stInformation01, this.dsPD_CONTXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        	} else if (sMethodName == "SEARCH02") {
        	
        		this.fnc_Information(this.stInformation01, this.dsPD_CONTXD_DTL.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        	} else if (sMethodName == "SAVE01") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");	
        		this.fnc_Message("TMM103");
        	
        	} else if (sMethodName == "SAVE02") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");	
        		this.fnc_Message("TMM103");
        		//계약서 생성 후 엔 재조회
        		this.fn_Search();
        		
        	} else if (sMethodName == "SEND00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");	
        		this.fnc_Message("PDM005");
        	
        	} else if (sMethodName == "GetCommCode") {
        		//콤보 일경우 
        		
        	}	

        }

        
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/

        /*------------------------------------+
         |  검색 조회조건팝업  |
         +-------------------------------------*/
        this.fn_HelpDialogeSHRCUST_NAME = function(obj,e)
        {
        	var arrParam = new Array();

        	// 조회조건 - 제작항목명
        	if ((obj.name == 'imgHelpSHRCUST_CODE') || (obj.name == 'edtSHRCUST_NAME')) {

        		arrParam[0] = 'PDM0006';                                 //Popup ID
        		arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtSHRCUST_NAME';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtSHRCUST_CODE,edtSHRCUST_NAME';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1';                                     //Mapping Column Index
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);                                //Mapping Column Index
        	}
        }

        /*------------------------------------+
         |  검색 조회조건팝업  |
         +-------------------------------------*/
        this.fn_HelpDialogeSHRJOBN_NAME = function(obj,e)
        {
        	var arrParam = new Array();

        	// 조회조건 - 제작항목명
        	if ((obj.name == 'imgHelpSHRJOBN_NUMB') || (obj.name == 'edtSHRJOBN_NAME')) {

        		arrParam[0] = 'PDM0005';                                 //Popup ID
        		arrParam[1] = '';                                        //조건구분에 대응되는 조회조건 값
        		arrParam[2] = this.fnc_Trim(this.edtSHRJOBN_NUMB.value); //콤보조건구분에 대응되는 조회 조건 값
        		arrParam[3] = 'N';                                       //사용 여부 구분 포함 여부 값
        		arrParam[4] = 'edtSHRJOBN_NAME';                         //현재 포커스 Componect명
        		arrParam[5] = 'edtSHRJOBN_NUMB,edtSHRJOBN_NAME';         //초기화 및 결과 Mapping Column
        		arrParam[6] = '0,1';                                     //Mapping Column Index
        		
        		this.fnc_HelpDialogeAction(this, obj, arrParam);                                //Mapping Column Index
        	}
        }

        /*------------------------------------+
         |  하단 데이터 추가 버튼 클릭|
         +-------------------------------------*/
        this.fn_All_Btn_OnClick = function(obj,e)
        {
        	var iRow = this.dsPD_CONTXD.insertRow(this.dsPD_CONTXD.rowposition + 1);
        	this.dsPD_CONTXD.set_rowposition(iRow);
        	this.dsPD_CONTXD.setColumn(iRow, "CONT_AMTX", 0);
        	this.dsPD_CONTXD.setColumn(iRow, "REGI_DATE", this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,8));
        	
        }

        
        /*------------------------------------+
         |  하단 그리드 제작사 추가 팝업|
         +-------------------------------------*/
        this.fn_HelpDialoge = function(obj,sFromDs,sOldValue,sColumnID)
        {
        	
        	var arrParam = new Array();
        	
        	if (obj.name == "grdPD_CONTXD") {
        	
        		if ((this.fnc_getGridHelpColName(obj, sFromDs) == "CUST_NAME") || (sColumnID == "CUST_NAME")) {
        			arrParam[0] = "PDM0001";
        			arrParam[1] = "" ;
        			arrParam[2] = "CUST_NAME";
        			arrParam[3] = "N";
        			arrParam[4] = "grdPD_CONTXD";
        			arrParam[5] = "CUST_CODE,CUST_NAME";
        			arrParam[6] = "0,1";
        			arrParam[7] = sFromDs;
        			arrParam[8] = sOldValue;

        			this.fnc_HelpDialogeAction(this, obj, arrParam);
        		}
        	}
        	
        }
        this.dsPD_CONTXD_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "CUST_NAME" ) this.fn_HelpDialoge(this.grdPD_CONTXD, "YES", e.oldvalue, e.columnid);
        }

        this.btnDelRow_onclick = function(obj,e)
        {
        	//선택된 데이터 삭제
        	if (!this.fn_DeleteCheckDtl()) return;
        	
        	for(var i = this.dsPD_CONTXD.rowcount; i >= 0; i--){
        		if(this.dsPD_CONTXD.getColumn(i, "CHK") == 1){
        			this.dsPD_CONTXD.deleteRow(i);
        		}
        	}	
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheckDtl = function () {
        	if (this.dsPD_CONTXD.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}
        	
        	var cnt = this.dsPD_CONTXD.rowcount;
        	var chk = 0;
        	for(var i=0; i < cnt; i ++){
        		if(this.dsPD_CONTXD.getColumn(i, "CHK") == "1"){
        			chk += 1;	
        		}
        		if(this.dsPD_CONTXD.getColumn(i, "JOBN_NUMB") != ""){
        			this.fnc_Message("TMM300", "제작번호가 있는 데이터를 삭제할 수 없습니다.");
        			return false;
        		}
        	}
        	
        	if(chk ==0){this.fnc_Message("PCM001"); return false;}
        	
        	var sQuestionText = "(" + this.fnc_Trim(this.dsPD_CONTXD.getColumn(this.dsPD_CONTXD.rowposition, "CONT_NAME")) + ") 데이터";
        	return this.fnc_Message("TMM002", sQuestionText);
        }

        
        var isAllChecked = 0;
        this.grdPD_CONTXD_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.grdPD_CONTXD.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsPD_CONTXD.getRowCount(); i++) {
        			this.dsPD_CONTXD.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.grdPD_CONTXD.setCellProperty("Head", 0, "expr", isAllChecked);		
        	}
        }

        var isAllChecked2 = 0;
        this.grdPD_CONTXH_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.grdPD_CONTXH.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked2 = (isAllChecked2 ? 0 : 1);
        		
        		for (var i = 0; i < this.dsPD_CONTXH.getRowCount(); i++) {
        			this.dsPD_CONTXH.setColumn(i, v_Colid, isAllChecked2);
        		}
        		this.grdPD_CONTXH.setCellProperty("Head", 0, "expr", isAllChecked2);
        	}
        }

        this.btnCONT_CRET_onclick = function(obj,e)
        {
        	if (!this.fn_SaveItemCheckCont()) return;
        	
        	var sMethodName = "SAVE02";
        	var sInDataSet  = "dsPD_CONTXD=dsPD_CONTXD:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPD_CONTXH.setFocus();	
        	
        }

        
        this.fn_SaveItemCheckCont = function () {

        	// 공통 Head & 상세 변경 체크
        	if (this.fnc_DatasetChangeCheck("dsPD_CONTXD") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	var cnt = this.dsPD_CONTXD.rowcount;
        	var chk = 0;
        	for(var i=0; i < cnt; i ++){
        		if(this.dsPD_CONTXD.getColumn(i, "CHK") == "1"){
        			chk += 1;	
        		}
        	}
        	
        	if(chk ==0){this.fnc_Message("PCM001"); return false;}
        	
        	for (var i = 0; i < this.dsPD_CONTXD.getRowCount(); i++) {
        		if (this.fnc_ToUpper(this.dsPD_CONTXD.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		
        		//제작번호가 없고 계약순번이 없을경우 return 제작번호가 있을경우 생성 가능
        		if (this.fnc_Length(this.fnc_Trim(this.dsPD_CONTXD.getColumn(i, "JOBN_NUMB"))) < 1 ) {
        			if (this.fnc_Length(this.fnc_Trim(this.dsPD_CONTXD.getColumn(i, "CONT_IDXX"))) < 1 ) {
        				this.fnc_Message("TMM300", "저장되지 않은 계약정보는 계약서 생성을할 수 없습니다.");
        				return false;
        			}
        		}
        	}
        	return true;
        }

        
        //상단의계약서 데이터 셋 상태 변경시 하단의 상세 내역 조회 
        this.dsPD_CONTXH_onrowposchanged = function(obj,e)
        {
        	/* 미생성 계약 관련 데이터 */
        	this.grdPD_CONTXD.set_visible(false);
        	this.btnCONT_CRET.set_visible(false);
        	this.btnAddRow.set_visible(false);
        	this.btnDelRow.set_visible(false);
        	
        	this.grdPD_CONTXD_DTL.set_visible(true);

        	//하단 계약기초 데이터 조회
        	this.fnc_DatasetClear("dsPD_CONTXD_DTL");

        	var sMethodName = "SEARCH02";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPD_CONTXD_DTL=dsPD_CONTXD_DTL";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPD_CONTXD.setFocus();

        }

        this.grdPD_CONTXH_oncellclick = function(obj,e)
        {
        		/* 미생성 계약 관련 데이터 */
        	this.grdPD_CONTXD.set_visible(false);
        	this.btnCONT_CRET.set_visible(false);
        	this.btnAddRow.set_visible(false);
        	this.btnDelRow.set_visible(false);
        	
        	this.grdPD_CONTXD_DTL.set_visible(true);

        	//하단 계약기초 데이터 조회
        	this.fnc_DatasetClear("dsPD_CONTXD_DTL");

        	var sMethodName = "SEARCH02";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsPD_CONTXD_DTL=dsPD_CONTXD_DTL";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPD_CONTXD.setFocus();
        }
        /*----------------+
         | 	견적서 발송  |
         +----------------*/
        this.fn_SendEmail = function(obj,e)
        {
        	if (!this.fn_SaveItemCheckEmail()) return;
        	if(this.fnc_DatasetChangeCheck("dsPD_CONTXH")){
        		var sMethodName = "SEND00";
        		var sInDataSet  = "dsPD_CONTXH=dsPD_CONTXH:U";
        		var sOutDataSet = "";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheckEmail = function () {
        	// 공통 Head & 상세 변경 체크
        	if (this.fnc_DatasetChangeCheck("dsPD_CONTXH") == false && this.fnc_DatasetChangeCheck("dsPD_CONTXH") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	for(var i =0; i <= this.dsPD_CONTXH.rowcount;  i++){
        		if(this.dsPD_CONTXH.getColumn(i, "CHK") == "1"){
        			if(this.fn_nullChk(this.dsPD_CONTXH.getColumn(i, "EMAL_ADDR")) == "" ){
        				this.fnc_Message("TMM300", "제작사 담당자 메일이 없습니다. 메일주소 등록을 하시고 발송하세요");
        				return false;
        			}
        		}
        	}

        	return true;
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
            this.dsPD_CONTXH.addEventHandler("onrowposchanged", this.dsPD_CONTXH_onrowposchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.grdPD_CONTXD.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.grdPD_CONTXD.addEventHandler("onheadclick", this.grdPD_CONTXD_onheadclick, this);
            this.grdPD_CONTXD.addEventHandler("oncellclick", this.grdPD_CONTXD_oncellclick, this);
            this.grdPD_CONTXD_DTL.addEventHandler("oncellclick", this.grdPD_CONTXD_oncellclick, this);
            this.grdPD_CONTXD_DTL.addEventHandler("onheadclick", this.grdPD_CONTXD_onheadclick, this);
            this.grdPD_CONTXD_DTL.addEventHandler("onexpandup", this.fn_HelpDialoge, this);
            this.grdPD_CONTXH.addEventHandler("onheadclick", this.grdPD_CONTXH_onheadclick, this);
            this.grdPD_CONTXH.addEventHandler("oncellclick", this.grdPD_CONTXH_oncellclick, this);
            this.btnAddRow.addEventHandler("onclick", this.fn_All_Btn_OnClick, this);
            this.btnDelRow.addEventHandler("onclick", this.btnDelRow_onclick, this);
            this.imgSearchTYPE_NAME.addEventHandler("onclick", this.imgSearchTitle1_onclick, this);
            this.imgSearchTYPE_NAME00.addEventHandler("onclick", this.imgSearchTitle1_onclick, this);
            this.imgSearchMEDA_CODE.addEventHandler("onclick", this.imgSearchTitle1_onclick, this);
            this.edtSHRCONT_NUMB.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCUST_CODE.addEventHandler("onclick", this.fn_HelpDialogeSHRCUST_NAME, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRCUST_NAME, this);
            this.calSHRCONT_DATE1.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calSHRCONT_DATE2.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRJOBN_NUMB.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRJOBN_NUMB.addEventHandler("onclick", this.fn_HelpDialogeSHRJOBN_NAME, this);
            this.edtSHRJOBN_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRJOBN_NAME, this);
            this.btnCONT_SEND.addEventHandler("onclick", this.fn_SendEmail, this);
            this.btnCONT_CRET.addEventHandler("onclick", this.btnCONT_CRET_onclick, this);
            this.calCONT_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calCONT_STDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calDELI_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calCONT_EDDT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgSearchTYPE_NAME01.addEventHandler("onclick", this.imgSearchTitle1_onclick, this);
            this.imgSearchTYPE_NAME02.addEventHandler("onclick", this.imgSearchTitle1_onclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.calPREP_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.calBALA_DATE.addEventHandler("onsetfocus", this.fn_EditFocus, this);

        };

        this.loadIncludeScript("PDMA0020.xfdl");
        this.loadPreloadList();
       
    };
}
)();
