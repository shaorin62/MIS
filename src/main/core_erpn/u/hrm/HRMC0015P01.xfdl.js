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
                this.set_name("HRMC0015P01");
                this.set_titletext("조회결과");
                this._setFormPosition(0,0,850,600);
            }
            this.style.set_background("white");
            this.style.set_border("2 solid #808080ff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsHR_MASTXM", this);
            obj._setContents("<ColumnInfo><Column id=\"WRDV_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CPOS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PSTP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DUTY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DTLV_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DTGN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SECT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_BIRT\" type=\"STRING\" size=\"256\"/><Column id=\"GNDR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PCOP_JCDT\" type=\"STRING\" size=\"256\"/><Column id=\"ENCO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RETR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRON_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PARE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RERN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"POST_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"DTLX_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"SCDN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MAJR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LBJO_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"LBJO_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"LEDX_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TOPX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOTM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"REDI_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ENCO_FLNB\" type=\"STRING\" size=\"256\"/><Column id=\"SOFD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"WRTY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OPOS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"WODN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MLGN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ADJN_DTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ADDT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ADJN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ADJN_ENDD\" type=\"STRING\" size=\"256\"/><Column id=\"DSPT_DTNM\" type=\"STRING\" size=\"256\"/><Column id=\"DSPT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DSPT_ENDD\" type=\"STRING\" size=\"256\"/><Column id=\"APDN_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LEAV_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LEAV_ENDD\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_AGEX\" type=\"STRING\" size=\"256\"/><Column id=\"MARG_YSNO\" type=\"STRING\" size=\"256\"/><Column id=\"WEAN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TEMT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TEMT_DAT1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_CNQRXD", this);
            obj._setContents("<ColumnInfo><Column id=\"SECH_CLID\" type=\"STRING\" size=\"256\"/><Column id=\"USEX_YSNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdHR_MASTXM", "absolute", "15", "35", null, null, "15", "15", this);
            obj.set_selecttype("row");
            obj.set_binddataset("dsHR_MASTXM");
            obj.set_cellsizingtype("both");
            obj.set_taborder("1");
            obj.set_tabstop("true");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"50\"/><Column size=\"110\"/><Column size=\"106\"/><Column size=\"68\"/><Column size=\"68\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"63\"/><Column size=\"85\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"95\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"97\"/><Column size=\"79\"/><Column size=\"300\"/><Column size=\"95\"/><Column size=\"107\"/><Column size=\"96\"/><Column size=\"96\"/><Column size=\"96\"/><Column size=\"89\"/><Column size=\"300\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"120\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"70\"/><Column size=\"85\"/><Column size=\"85\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"사원번호\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"소속\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직급\"/><Cell col=\"5\" text=\"직위\"/><Cell col=\"6\" text=\"직책\"/><Cell col=\"7\" text=\"직원구분\"/><Cell col=\"8\" text=\"재직구분\"/><Cell col=\"9\" text=\"생년월일\"/><Cell col=\"10\" text=\"성별\"/><Cell col=\"11\" text=\"연령\"/><Cell col=\"12\" text=\"그룹입사일\"/><Cell col=\"13\" text=\"당사입사일\"/><Cell col=\"14\" text=\"정규직전환일\"/><Cell col=\"15\" text=\"정규직근속일자\"/><Cell col=\"16\" text=\"승진일\"/><Cell col=\"17\" text=\"승급일\"/><Cell col=\"18\" text=\"퇴사일\"/><Cell col=\"19\" text=\"주민등록번호\"/><Cell col=\"20\" text=\"우편번호\"/><Cell col=\"21\" text=\"주소\"/><Cell col=\"22\" text=\"학력\"/><Cell col=\"23\" text=\"학교\"/><Cell col=\"24\" text=\"전공\"/><Cell col=\"25\" text=\"결혼여부\"/><Cell col=\"26\" text=\"결혼기념일\"/><Cell col=\"27\" text=\"노조가입여부\"/><Cell col=\"28\" text=\"본적\"/><Cell col=\"29\" text=\"채용방식\"/><Cell col=\"30\" text=\"병역구분\"/><Cell col=\"31\" text=\"겸직부서\"/><Cell col=\"32\" text=\"겸직직책\"/><Cell col=\"33\" text=\"겸직시작일\"/><Cell col=\"34\" text=\"겸직종료일\"/><Cell col=\"35\" text=\"파견부서\"/><Cell col=\"36\" text=\"파견시작일\"/><Cell col=\"37\" text=\"파견종료일\"/><Cell col=\"38\" text=\"휴직사유\"/><Cell col=\"39\" text=\"휴직시작일\"/><Cell col=\"40\" text=\"휴직종료일\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_NUMB\"/><Cell col=\"1\" text=\"bind:EMPL_NAME\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:SECT_NAME\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:CPOS_CODE\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:OPOS_CODE\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:DURS_CODE\"/><Cell col=\"7\" text=\"bind:WRDV_CODE\"/><Cell col=\"8\" text=\"bind:WODN_CODE\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:EMPL_BIRT\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" text=\"bind:GNDR_CODE\"/><Cell col=\"11\" text=\"bind:EMPL_AGEX\"/><Cell col=\"12\" displaytype=\"date\" text=\"bind:PCOP_JCDT\" calendardisplaynulltype=\"none\"/><Cell col=\"13\" displaytype=\"date\" text=\"bind:ENCO_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"14\" displaytype=\"date\" text=\"bind:TEMT_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"15\" text=\"bind:TEMT_DAT1\"/><Cell col=\"16\" displaytype=\"date\" text=\"bind:PRON_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"17\" displaytype=\"date\" text=\"bind:PARE_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"18\" displaytype=\"date\" text=\"bind:RETR_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"19\" text=\"bind:RERN_NUMB\" mask=\"######-#######\"/><Cell col=\"20\" text=\"bind:POST_NUMB\"/><Cell col=\"21\" style=\"align:left;\" text=\"bind:DTLX_ADDR\"/><Cell col=\"22\" style=\"align:left;\" text=\"bind:SCDN_CODE\"/><Cell col=\"23\" style=\"align:left;\" text=\"bind:SCHL_NAME\"/><Cell col=\"24\" style=\"align:left;\" text=\"bind:MAJR_CODE\"/><Cell col=\"25\" style=\"align: ;\" text=\"expr:MARG_YSNO == '1' ? '기혼' : '미혼'\"/><Cell col=\"26\" displaytype=\"date\" style=\"align: ;\" text=\"bind:WEAN_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"27\" text=\"bind:LBJO_YSNO\"/><Cell col=\"28\" style=\"align:left;\" text=\"bind:LEDX_ADDR\"/><Cell col=\"29\" text=\"bind:REDI_CODE\"/><Cell col=\"30\" style=\"align:left;\" text=\"bind:MLGN_CODE\"/><Cell col=\"31\" style=\"align:left;\" text=\"bind:ADJN_DTNM\"/><Cell col=\"32\" style=\"align:left;\" text=\"bind:ADDT_CODE\"/><Cell col=\"33\" displaytype=\"date\" text=\"bind:ADJN_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"34\" displaytype=\"date\" text=\"bind:ADJN_ENDD\" calendardisplaynulltype=\"none\"/><Cell col=\"35\" text=\"bind:DSPT_DTNM\"/><Cell col=\"36\" displaytype=\"date\" text=\"bind:DSPT_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"37\" displaytype=\"date\" text=\"bind:DSPT_ENDD\" calendardisplaynulltype=\"none\"/><Cell col=\"38\" style=\"align:left;\" text=\"bind:APDN_CODE\"/><Cell col=\"39\" displaytype=\"date\" text=\"bind:LEAV_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"40\" displaytype=\"date\" text=\"bind:LEAV_ENDD\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "8", "510", "27", "15", null, this);
            obj.set_taborder("99");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "15", "14", "400", "21", null, null, this);
            obj.set_taborder("100");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_cssclass("styFormSearchInfo");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", null, "4", "15", "461", "0", null, this);
            obj.set_taborder("102");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0", "4", "15", "461", null, null, this);
            obj.set_taborder("103");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "429", "585", "110", "15", null, null, this);
            obj.set_taborder("104");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "533", "31", "110", "4", null, null, this);
            obj.set_taborder("105");
            obj.set_text("h4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "533", "0", "110", "8", null, null, this);
            obj.set_taborder("106");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 850, 600, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("조회결과");
            		p.style.set_background("white");
            		p.style.set_border("2 solid #808080ff");

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
        this.addIncludeScript("HRMC0015P01.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRMC0015P01.xfdl", function() {
         /***************************************************************************************************
         * # Program : 인사정보(조건검색) 메인 그리드 영역 
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.29		chg			Initial Created.
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

        this.sBUTTONLIST  = "TFFFFFTF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "HRMC0015P01"; //해당 Form에서 사용 할 Package 명 

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

        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	
        	this.dsHR_MASTXM.clear();
        	this.dsHR_MASTXM.copyData(this.opener.dsHR_MASTXM);
        	
        	this.dsHR_CNQRXD.clear();
        	this.dsHR_CNQRXD.copyData(this.opener.dsHR_CNQRXD);	

        	if(this.dsHR_CNQRXD.rowcount > 0){
        	
        		this.grdHR_MASTXM.set_enableredraw(false);
        		for(i=0;i<this.dsHR_CNQRXD.rowcount;i++){
        			var v_SECH_CLID = this.dsHR_CNQRXD.getColumn(i,"SECH_CLID");
        			var v_USEX_YSNO = (this.dsHR_CNQRXD.getColumn(i,"USEX_YSNO") == "1")? true:false;
        			
        			if(!v_USEX_YSNO){
        				this.grdHR_MASTXM.deleteContentsCol(this.grdHR_MASTXM.getBindCellIndex("body",v_SECH_CLID));
        				
        			}
        		}
        		this.grdHR_MASTXM.set_enableredraw(true);
        	
        	}
        	
        	this.fnc_Information(this.stInformation, this.dsHR_MASTXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        	
        }

        /*------------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);

        };

        this.loadIncludeScript("HRMC0015P01.xfdl");
        this.loadPreloadList();
       
    };
}
)();
