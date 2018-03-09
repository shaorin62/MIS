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
                this.set_titletext("수정세금계산서팝업");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1070,500);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">TAXX_TYPE</Col><Col id=\"DSNAME\">dsTAXX_TYPE</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"DSNAME\">dsTAXX_DEND</Col><Col id=\"CODEID\">TAXX_DEND</Col><Col id=\"HEADFLAG\">EMPTY</Col></Row><Row><Col id=\"CODEID\">AMED_CODE</Col><Col id=\"HEADFLAG\">SELECT</Col><Col id=\"DSNAME\">dsAMEND_CODE</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_SATXXH", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TAXY_MONT\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"DTIX_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_DMND\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_SANB\" type=\"STRING\" size=\"256\"/><Column id=\"AMEND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_AMTX\" type=\"INT\" size=\"256\"/><Column id=\"TAXX_VATX\" type=\"INT\" size=\"256\"/><Column id=\"SUMM_AMTX\" type=\"INT\" size=\"256\"/><Column id=\"DEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"CONVERSATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ISSUE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_TAXX_SANB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPD_MODIFY", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TAXY_MONT\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_NUMB_old\" type=\"STRING\" size=\"256\"/><Column id=\"DTIX_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_DMND\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_SANB\" type=\"STRING\" size=\"256\"/><Column id=\"AMEND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TAXX_AMTX\" type=\"INT\" size=\"256\"/><Column id=\"TAXX_VATX\" type=\"INT\" size=\"256\"/><Column id=\"SUMM_AMTX\" type=\"INT\" size=\"256\"/><Column id=\"DEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"CONVERSATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ISSUE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_TAXX_SANB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTAXX_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">매입세금계산서</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">매출세금계산서</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">매입계산서</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">매출계산서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox", "absolute", "15", "35", null, "95", "15", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "15", "141", "400", "21", null, null, this);
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.style.set_align("middle left");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_taborder("10");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPD_SATXXH", "absolute", "15", "165", null, null, "15", "15", this);
            obj.set_selecttype("cell");
            obj.set_binddataset("dsPD_SATXXH");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.set_tabstop("false");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_autofittype("none");
            obj.set_cssclass("styGrid01");
            obj.set_taborder("6");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"110\"/><Column size=\"122\"/><Column size=\"86\"/><Column size=\"107\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"0\"/><Column size=\"106\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"세금계산서년월\"/><Cell col=\"1\" text=\"세금계산서순번\"/><Cell col=\"2\" text=\"세금계산서종류\"/><Cell col=\"3\" text=\"영수구분\"/><Cell col=\"4\" text=\"세금계산서번호\"/><Cell col=\"5\" text=\"수정코드\"/><Cell col=\"6\" text=\"과세종류\"/><Cell col=\"7\" text=\"광고주코드\"/><Cell col=\"8\" text=\"광고주명\"/><Cell col=\"9\" text=\"금액\"/><Cell col=\"10\" text=\"부가세액\"/><Cell col=\"11\" text=\"합계금액\"/><Cell col=\"12\" text=\"청구일자\"/><Cell col=\"13\" text=\"발행일자\"/><Cell col=\"14\" text=\"비고\"/><Cell col=\"15\" text=\"CONVERSATION_ID\"/><Cell col=\"16\" text=\"당초승인번호\"/><Cell col=\"17\" text=\"승인번호\"/><Cell col=\"18\" text=\"원세금계산서번호\"/></Band><Band id=\"body\"><Cell style=\"background:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');background2:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');\" text=\"bind:TAXY_MONT\"/><Cell col=\"1\" style=\"background:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');background2:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');\" text=\"bind:TAXX_NUMB\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" style=\"background:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');background2:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');\" text=\"bind:DTIX_TYPE\" combodisplay=\"edit\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"background:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');background2:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');\" text=\"bind:TAXX_DMND\" combodisplay=\"edit\"/><Cell col=\"4\" style=\"background:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');background2:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');\" text=\"bind:TAXX_SANB\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" style=\"background:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');background2:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');\" text=\"bind:AMEND_CODE\" combodisplay=\"edit\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"combo\" style=\"background:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');background2:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');\" text=\"bind:TAXX_GUBN\" combodataset=\"dsTAXX_GUBN\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplay=\"edit\"/><Cell col=\"7\" style=\"background:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');background2:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');\" text=\"bind:CUST_CODE\"/><Cell col=\"8\" edittype=\"none\" style=\"background:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');background2:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');\" text=\"bind:CUST_NAME\"/><Cell col=\"9\" edittype=\"expr:comp.parent.getEditMode(currow,this.col)\" style=\"background:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');background2:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');\" text=\"bind:TAXX_AMTX\"/><Cell col=\"10\" edittype=\"expr:comp.parent.getEditMode(currow,this.col)\" style=\"background:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');background2:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');\" text=\"bind:TAXX_VATX\"/><Cell col=\"11\" edittype=\"expr:comp.parent.getEditMode(currow,this.col)\" style=\"background:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');background2:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');\" text=\"bind:SUMM_AMTX\"/><Cell col=\"12\" displaytype=\"date\" edittype=\"date\" style=\"background:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');background2:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');\" text=\"bind:DEND_DATE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"13\" displaytype=\"date\" edittype=\"date\" style=\"background:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');background2:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');\" text=\"bind:PRNT_DATE\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"14\" edittype=\"normal\" style=\"background:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');background2:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');\" text=\"bind:MEMO_FILD\"/><Cell col=\"15\" style=\"background:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');background2:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');\" text=\"bind:CONVERSATION_ID\"/><Cell col=\"16\" style=\"background:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');background2:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');\" text=\"bind:ORI_ISSUE_ID\"/><Cell col=\"17\" style=\"background:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');background2:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');\" text=\"bind:APPROVE_ID\"/><Cell col=\"18\" style=\"background:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');background2:EXPR(ORI_ISSUE_ID == '' ? '#e8fedc':'white');\" text=\"bind:ORI_TAXX_SANB\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\"/><Cell col=\"1\" colspan=\"8\" style=\"align: center;\" text=\"합계\"/><Cell col=\"9\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TAXX_AMTX&quot;)\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;TAXX_VATX&quot;)\"/><Cell col=\"11\" displaytype=\"number\" style=\"align: right;\" expr=\"expr:dataset.getSum(&quot;SUMM_AMTX&quot;)\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "34", "98", "63", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("적요");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "34", "72", "63", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("광고주명");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "34", "46", "103", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("세금계산서번호");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "0", "0", "15", null, null, "0", this);
            obj.set_taborder("25");
            obj.set_text("w15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "16", "36", "30", "41", null, null, this);
            obj.set_taborder("29");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "134", "36", "8", "41", null, null, this);
            obj.set_taborder("30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "492", "130", "80", "35", null, null, this);
            obj.set_taborder("36");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "15", "158", "264", "7", null, null, this);
            obj.set_taborder("37");
            obj.set_text("h 7");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "15", null, null, "15", "18", "0", this);
            obj.set_taborder("38");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRTAXX_SANB", "absolute", "142", "46", "138", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "142", "72", "138", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRMEMO_FILD", "absolute", "142", "98", "138", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_imemode("hangul");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "310", "72", "127", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_text("세금계산서종류");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "436", "36", "8", "41", null, null, this);
            obj.set_taborder("47");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "310", "98", "127", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_text("영수 구분");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRDTIX_TYPE", "absolute", "444", "72", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("51");
            obj.set_type("search");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsPD_SATXXH");
            obj.set_readonly("true");

            obj = new Combo("cmbSHRTAXX_DMND", "absolute", "444", "98", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("52");
            obj.set_type("search");
            obj.set_cssclass("styFormItemCombo");
            obj.getSetter("binddataset").set("dsPD_SATXXH");
            obj.set_readonly("true");

            obj = new Static("Static06", "absolute", "310", "46", "127", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_text("전자세금계산서번호");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCONVERSATION_ID", "absolute", "444", "46", "226", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_imemode("hangul");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Button("btnCREA_MODY", "absolute", null, "138", "130", "23", "15", null, this);
            obj.set_taborder("55");
            obj.set_text("수정세금계산서 생성");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "1055", "1", "15", null, null, "2", this);
            obj.set_taborder("58");
            obj.set_text("w15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "8", "510", "23", "15", null, this);
            obj.set_taborder("59");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "533", "0", "110", "8", null, null, this);
            obj.set_taborder("60");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "533", "31", "110", "4", null, null, this);
            obj.set_taborder("61");
            obj.set_text("h4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", null, "100", "329", "21", "153", null, this);
            obj.set_taborder("62");
            obj.set_text("원세금계산서는 수정하여도 저장되지 않습니다. ");
            obj.set_cssclass("sta_WF_Info");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", null, "74", "329", "21", "153", null, this);
            obj.set_taborder("63");
            obj.set_text("유색 데이터는 원 세금계산서 입니다.");
            obj.set_cssclass("sta_WF_Info");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1070, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("수정세금계산서팝업");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("cmbPBGN_CODE_value","cmbSHRDTIX_TYPE","value","dsPD_SATXXH","DTIX_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","cmbSHRDTIX_TYPE","binddataset","dsPD_SATXXH","DTIX_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","cmbSHRTAXX_DMND","value","dsPD_SATXXH","TAXX_DMND");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cmbSHRTAXX_DMND","binddataset","dsPD_SATXXH","TAXX_DMND");
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
        this.addIncludeScript("PACA0010P01.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PACA0010P01.xfdl", function() {
        /***************************************************************************************************
         *   Form Common Script                                                                            *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                     *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                      *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리              *
         *                                                                                                 *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망   *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/
        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFFFTFF"; //공통기능정의(버튼순으로 T or F)
        this.sPACKAGENAME = "PACA0010P01"; //해당 Form에서 사용 할 Package 명
        this.sALLX_YSNO   = "";
        this.sLoadForm    = "";
        this.sSlipNumb    = "";

        this.edtSHRTAXX_SANB.set_value(this.parent.sTAXX_SANB);
        this.edtSHRCUST_NAME.set_value(this.parent.sCUST_NAME);
        this.edtSHRCONVERSATION_ID.set_value(this.parent.sCONVERSATION_ID);

        
        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
        	this.sUSERAUTH     	= "";
        	this.sFORMCAPTION  	= "";
        	this.sFORMLOCATION 	= "";
        	this.sUSERLAVEL 	= "";
        } else {
        	this.sUSERAUTH     	= this.getOwnerFrame()["sUSERAUTH"];
        	this.sFORMCAPTION  	= this.getOwnerFrame()["sFORMCAPTION"];
        	this.sFORMLOCATION 	= this.getOwnerFrame()["sFORMLOCATION"];
        	this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];
        } 
        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e){
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);
        	
        	this.fn_Search();
        }
         
        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj,e){
        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj,e){
        	
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsPD_SATXXH");

        	var sMethodName = "SEARCH10";
        	var sInDataSet = "";
        	var sOutDataSet = "dsPD_SATXXH=dsPD_SATXXH";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdTA_SLIPXM.setFocus();
        	
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj,e){
        	//기능없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj,e){
        	//기능없음
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj,e){
        	//기능없음
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e){
        	/*수정세금계산서 수정된 데이터 금액 수정용 입니다.
        	** 원 세금계산서나 전자세금계산서 발행된 건은 수정 되지 않습니다.
        	*/
        	
        	if (!this.fn_SaveItemCheck()) return;
        	

        	var sMethodName = "SAVE20";
        	var sInDataSet  = "dsPD_SATXXH=dsPD_SATXXH:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPD_SATXXH.setFocus();
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj,e){

        	this.fnc_ToExcel(this);
        	
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e){
        		//기능없음
        }

        /*-----------------------------------+
         |  10. 화면 종료時 처리 할 사항  |
         +------------------------------------*/
         this.fn_FormUnloadCheckProcess = function (obj,e){

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("",this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        }

        this.fn_FormUnloadProcess = function (obj,e){
        	
        	return this.fnc_FormUnloadCheck(obj, this);
        	
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {

        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        	if (e.keycode == 27) this.fnc_PopupClose("");
        	
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
        /*-------------------+
         /  조회 여부 체크!   /
         +--------------------*/

        this.fn_SearchItemCheck = function (){
        	
        	
        	if (this.fnc_DatasetChangeCheck("dsPD_SATXXH")) {
        		return this.fnc_Message("TMM023");
        	}
        		
        	if(this.fn_nullChk(this.edtSHRTAXX_SANB.value) == ""){
        		return this.fnc_SearchCheckPostAction("TMM001", "세금계산서번호", this.edtSHRTAXX_SANB);
        		return false;
        	}
        	
        	return true;
        	
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function (){

        	return true;
        	
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function (){
        	// 공통 Head & 상세 변경 체크
        	if (this.fnc_DatasetChangeCheck("dsPD_SATXXH") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	var sMESSAGE = "수정세금계산서 금액을 변경하여 정상 발행하려 합니다. \n "
        	var sMESSAGE2 = "원 세금계산서 및 전자세금계산서가 발행된 데이터는 수정되지 않습니다. \n";
        	var sMESSAGE3 = " 저장 하시겠습니까";
        	if(this.fnc_Message("TMM140",sMESSAGE + sMESSAGE2 + sMESSAGE3)){
        		return true ;
        	}else{
        		return false ;
        	}
        	
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind){

        	var sReturnString;

        	if (sKind == "SEARCH10"){
        	
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME); //Package(Action Bean명)
        		sReturnString += " action="     + this.fnc_Quote(sKind); 		     //호출할 Package의 Method명
        		sReturnString += " TAXX_SANB=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRTAXX_SANB.value)); 
        		
        	} else if(sKind == "SAVE10"){
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME); //Package(Action Bean명)
        		sReturnString += " action="     + this.fnc_Quote(sKind); 		     //호출할 Package의 Method명
        	} else if(sKind == "SAVE20"){
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME); //Package(Action Bean명)
        		sReturnString += " action="     + this.fnc_Quote(sKind); 		     //호출할 Package의 Method명
        	}
        	
        	return sReturnString;
        	
        }

        /*------------------------------------+
         |  Transaction 후 처리 해야 할 내용!  |
         +-------------------------------------*/
        this.fn_CallBack = function (sMethodName,ErrorCode,ErrorMSG){
        	
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
        this.fn_PostProcess = function (sMethodName){

        	if (sMethodName == "SEARCH10"){
        		this.fnc_Information(this.stInformation, this.dsPD_SATXXH.rowcount, "SHR"); 
        		this.fnc_Message("TMM018", this.dsPD_SATXXH.rowcount);
        	
        	} else if (sMethodName == "SAVE10"){
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        		
        	} else if (sMethodName == "SAVE20"){
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        		
        	} else if (sMethodName == "GetCommCode") {
        	//콤보 일경우 

        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRDTIX_TYPE,dsTAXX_TYPE,0";
        			arrParam[1] = "COMBO,cmbSHRTAXX_DMND,dsTAXX_DEND,0";
        			arrParam[2] = "GRID,grdPD_SATXXH,dsTAXX_TYPE,DTIX_TYPE";
        			arrParam[3] = "GRID,grdPD_SATXXH,dsTAXX_DEND,TAXX_DMND";
        			arrParam[4] = "GRID,grdPD_SATXXH,dsAMEND_CODE,AMEND_CODE";
        			
        		this.fnc_CommonCodeInnerBind(arrParam);
        	}
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,nOldRow,nRow){
        	//기능없음
        }

        /*----------------------------------------------------------------+
         | Help Popup Open                     |
         +-----------------------------------------------------------------*/
        this.fn_HelpDialoge = function (obj,sFromDs,sOldValue,sColumnID) {

        }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
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

        

        
        /*---------------------------------------+
         |  Form에서 ESC Key 누르면 화면 종료 !  |
         +---------------------------------------*/
        this.comcodenm_OnKeyDown = function (obj,e) {

        	if (e.keycode == 27) this.fn_Confirm();

        }

        /*---------------+
         |  확인 처리 !  |
         +---------------*/
        this.fn_Confirm = function (obj,e) {

        	//var iColumnCount = this.dsTM_NWPOST.getColCount();
        	var arrReturn = new Array(3);

        	// 반환 할 자료(Array) 만들기
        	//arrReturn[0] = this.dsTA_SLIPXM.getColumn(this.dsTA_SLIPXM.rowposition, "SLIP_NUMB");
        		
        	//this.fnc_PopupClose(arrReturn);

        }

        
        this.btnCREA_MODY_onclick = function(obj,e)
        {

        	if (!this.fn_CreateItemCheck()) return;
        	
        	if(!this.fnc_Message("TMM140","수정 세금계산서를 생성하시겠습니까")){ return; }
        	
        	/*수정 사유가 *기재사항의 착오 * 정정 일경우  -row  와 + row  두개 생성 다른경우 - 만 생성 하고 종료 
        	* 박인애 대리 확인 사항
        	*/
        	if(this.fn_nullChk(this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition, "AMEND_CODE")) == "01"){
        		// + 로우 - 로우 생성
        		this.fn_MultiRow();
        	}else{
        		// - 로우 생성
        		this.fn_SingleRow();
        	}
        	
        }

        
        this.fn_CreateItemCheck = function(){

        	if (this.fnc_DatasetChangeCheck("dsPD_SATXXH") == false) {
        		this.fnc_Message("TMM003");
        		return false;
        	}
        	
        	if(this.fn_nullChk(this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition, "AMEND_CODE")) == "" ){
        		this.fnc_Message("TMM300", "수정코드를 선택해야 합니다.");
        		return false;
        	}
        	
        	if(this.fn_nullChk(this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition, "AMEND_CODE")) != "" ){
        		//계산서의 종류가 수정이 아닐경우
        		if(this.fn_nullChk(this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition, "DTIX_TYPE")) == "01"
        		|| this.fn_nullChk(this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition, "DTIX_TYPE")) == "03"){
        			this.fnc_Message("TMM300", "세금계산서 종류가 수정세금계산서를 선택하셔야 합니다.");
        			return false;
        		}
        	}
        	
        	if(this.dsPD_SATXXH.rowcount > 1){
        		this.fnc_Message("TMM300", "이미 수정 세금계산서가 존재 합니다.");
        		return false;
        	}
        	

        	return true;
        }

        this.fn_SingleRow = function(){
        	//현재 세금계산서를 - 혹은 + 로 재 생성 해야 한다.
        	this.dsPD_MODIFY.clearData();
        	
        	// 현재 그리그 내역 복사
        	this.dsPD_MODIFY.set_enableevent(false);
        	this.dsPD_MODIFY.copyData(this.dsPD_SATXXH, true);
        	this.dsPD_MODIFY.set_enableevent(true);
        	
        	var iRow = this.dsPD_SATXXH.rowposition;
        		
        	//원 세금계산서 번호 를 가지고 간다.
        	this.dsPD_MODIFY.setColumn(iRow, "ORI_ISSUE_ID", this.dsPD_SATXXH.getColumn(iRow,"APPROVE_ID"));
        	this.dsPD_MODIFY.setColumn(iRow, "ORI_TAXX_SANB", this.dsPD_SATXXH.getColumn(iRow,"TAXX_SANB"));
        	//금액 리버스
        	this.dsPD_MODIFY.setColumn(iRow, "TAXX_AMTX", this.dsPD_SATXXH.getColumn(iRow,"TAXX_AMTX") * -1);
        	this.dsPD_MODIFY.setColumn(iRow, "TAXX_VATX", this.dsPD_SATXXH.getColumn(iRow,"TAXX_VATX") * -1);
        	this.dsPD_MODIFY.setColumn(iRow, "SUMM_AMTX", this.dsPD_SATXXH.getColumn(iRow,"SUMM_AMTX") * -1);
        	

        	var sMethodName = "SAVE10";
        	var sInDataSet  = "dsPD_MODIFY=dsPD_MODIFY";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPD_SATXXH.setFocus();	
        	
        	this.dsPD_SATXXH.set_updatecontrol(false);
        	var bSucc = this.dsPD_SATXXH.setRowType(iRow, Dataset.ROWTYPE_NORMAL);
        	this.dsPD_SATXXH.set_updatecontrol(true);
        }

        this.fn_MultiRow = function(){

        	this.dsPD_MODIFY.clearData();
        	
        	//현재 내역 복사 
        	this.dsPD_MODIFY.set_enableevent(false);
        	this.dsPD_MODIFY.copyData(this.dsPD_SATXXH, true);
        	this.dsPD_MODIFY.set_enableevent(true);
        	
        	var iRow = this.dsPD_SATXXH.rowposition;
        		
        	//원 세금계산서 번호 를 가지고 간다.
        	this.dsPD_MODIFY.setColumn(iRow, "ORI_ISSUE_ID", this.dsPD_SATXXH.getColumn(iRow,"APPROVE_ID"));
        	this.dsPD_MODIFY.setColumn(iRow, "ORI_TAXX_SANB", this.dsPD_SATXXH.getColumn(iRow,"TAXX_SANB"));
        	//금액 리버스
        	this.dsPD_MODIFY.setColumn(iRow, "TAXX_AMTX", this.dsPD_SATXXH.getColumn(iRow,"TAXX_AMTX") * -1);
        	this.dsPD_MODIFY.setColumn(iRow, "TAXX_VATX", this.dsPD_SATXXH.getColumn(iRow,"TAXX_VATX") * -1);
        	this.dsPD_MODIFY.setColumn(iRow, "SUMM_AMTX", this.dsPD_SATXXH.getColumn(iRow,"SUMM_AMTX") * -1);
        	
        	//추가 row
        	var iAddRow = this.dsPD_MODIFY.insertRow(this.dsPD_SATXXH.rowposition + 1);
        	this.dsPD_MODIFY.set_rowposition(iAddRow);
         	this.dsPD_MODIFY.setColumn(iAddRow, "TAXY_MONT", this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition,"TAXY_MONT"));
         	this.dsPD_MODIFY.setColumn(iAddRow, "TAXX_NUMB", this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition,"TAXX_NUMB"));
         	this.dsPD_MODIFY.setColumn(iAddRow, "CUST_CODE", this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition,"CUST_CODE"));
         	this.dsPD_MODIFY.setColumn(iAddRow, "CUST_NAME", this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition,"CUST_NAME"));
         	this.dsPD_MODIFY.setColumn(iAddRow, "TAXX_AMTX", this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition,"TAXX_AMTX"));
         	this.dsPD_MODIFY.setColumn(iAddRow, "TAXX_VATX", this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition,"TAXX_VATX"));
         	this.dsPD_MODIFY.setColumn(iAddRow, "SUMM_AMTX", this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition,"SUMM_AMTX"));
         	this.dsPD_MODIFY.setColumn(iAddRow, "DEND_DATE", this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition,"DEND_DATE"));
         	this.dsPD_MODIFY.setColumn(iAddRow, "PRNT_DATE", this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition,"PRNT_DATE"));
         	this.dsPD_MODIFY.setColumn(iAddRow, "DTIX_TYPE", this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition,"DTIX_TYPE"));
         	this.dsPD_MODIFY.setColumn(iAddRow, "TAXX_DMND", this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition,"TAXX_DMND"));
         	this.dsPD_MODIFY.setColumn(iAddRow, "TAXX_GUBN", this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition,"TAXX_GUBN"));
         	this.dsPD_MODIFY.setColumn(iAddRow, "AMEND_CODE", this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition,"AMEND_CODE"));
         	this.dsPD_MODIFY.setColumn(iAddRow, "MEMO_FILD", this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition,"MEMO_FILD"));
         	this.dsPD_MODIFY.setColumn(iAddRow, "ORI_ISSUE_ID", this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition,"APPROVE_ID"));
         	this.dsPD_MODIFY.setColumn(iAddRow, "ORI_TAXX_SANB", this.dsPD_SATXXH.getColumn(this.dsPD_SATXXH.rowposition,"TAXX_SANB"));
         	
         	var sMethodName = "SAVE10";
        	var sInDataSet  = "dsPD_MODIFY=dsPD_MODIFY";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPD_SATXXH.setFocus();	
        	
        	this.dsPD_SATXXH.set_updatecontrol(false);
        	var bSucc = this.dsPD_SATXXH.setRowType(iRow, Dataset.ROWTYPE_NORMAL);
        	this.dsPD_SATXXH.set_updatecontrol(true);

        }

        

        //컬럼에 이벤트가 발생한경우
        this.getEditMode = function(row,column) {
        	trace("row=" + row + ", column=" + column);
        	
        	//각 컬럼의 위치 값 변수
        	var iTAXX_AMTX = this.grdPD_SATXXH.getBindCellIndex("body","TAXX_AMTX");	
        	var iTAXX_VATX = this.grdPD_SATXXH.getBindCellIndex("body","TAXX_VATX");	
        	var iSUMM_AMTX = this.grdPD_SATXXH.getBindCellIndex("body","SUMM_AMTX");	

        	//원세금계산서 번호가 있다면 즉 수정세금계산서라면 금액 수정 가능(수정세금계산서는 상세 내역이 없다)
        	if(this.dsPD_SATXXH.getColumn(row, "ORI_ISSUE_ID") != "" ) { 
        		if(column == iTAXX_AMTX || column == iTAXX_VATX || column == iSUMM_AMTX ){
        			return "text"; //edittype을 text로 설정
        		}
        	}

        	return "none"; //edittype을 none으로 설정
        } 

        
        //그리드 금액 수정시 총액 계산 
        this.dsPD_SATXXH_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "TAXX_AMTX" || e.columnid == "TAXX_VATX" ){
        		var iRow = this.dsPD_SATXXH.rowposition;
        		var iTAXX_AMTX = this.dsPD_SATXXH.getColumn(iRow, "TAXX_AMTX");
        		var iTAXX_VATX = this.dsPD_SATXXH.getColumn(iRow, "TAXX_VATX");
        		
        		var iSUMM_AMTX = iTAXX_AMTX + iTAXX_VATX;
        		
        		this.dsPD_SATXXH.setColumn(iRow, "SUMM_AMTX", iSUMM_AMTX);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPD_SATXXH.addEventHandler("oncolumnchanged", this.dsPD_SATXXH_oncolumnchanged, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.grdPD_SATXXH.addEventHandler("oncelldblclick", this.fn_Confirm, this);
            this.edtSHRTAXX_SANB.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.edtSHRMEMO_FILD.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.cmbSHRDTIX_TYPE.addEventHandler("oncloseup", this.cmbMEDA_CODE_oncloseup, this);
            this.cmbSHRDTIX_TYPE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbSHRTAXX_DMND.addEventHandler("oncloseup", this.cmbMEDA_CODE_oncloseup, this);
            this.cmbSHRTAXX_DMND.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.edtSHRCONVERSATION_ID.addEventHandler("onkillfocus", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.btnCREA_MODY.addEventHandler("onclick", this.btnCREA_MODY_onclick, this);

        };

        this.loadIncludeScript("PACA0010P01.xfdl");
        this.loadPreloadList();
       
    };
}
)();
