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
                this.set_name("HATF0070P03");
                this.set_classname("passwordChange");
                this.set_titletext("일비 계산");
                this._setFormPosition(0,0,721,217);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAT_DAYECT", this);
            obj._setContents("<ColumnInfo><Column id=\"DAIL_APAY\" size=\"10\" type=\"INT\"/><Column id=\"DAIL_BPAY\" size=\"10\" type=\"INT\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsDAYNG", this);
            obj._setContents("<ColumnInfo><Column id=\"DAYNG\" size=\"10\" type=\"INT\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static03", "absolute", "15", "142", "689", "30", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static150", "absolute", "15", "15", "690", "159", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static108", "absolute", "142", "0", "216", "15", null, null, this);
            obj.set_taborder("1");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle", "absolute", "641", "182", "62", "24", null, null, this);
            obj.set_taborder("13");
            obj.set_text("닫기");
            obj.set_cssclass("btn_POP_CRUD");
            obj.getSetter("titletext").set("비밀번호 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnSubmit", "absolute", "576", "182", "62", "24", null, null, this);
            obj.set_taborder("12");
            obj.set_text("등록");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "15", "141", "90", "33", null, null, this);
            obj.set_taborder("15");
            obj.set_text("합계");
            obj.set_cssclass("sta_WF_Label_P");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_totalsum", "absolute", "110", "147", "120", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_value("0");
            obj.set_mask("###,###");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "232", "147", "12", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "705", "8", "15", "135", null, null, this);
            obj.set_taborder("19");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "15", "179", "528", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("해외출장자는 환율 금액 필수 입력 바랍니다.");
            obj.set_cssclass("sta_WF_Info");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "639", "174", "64", "8", null, null, this);
            obj.set_taborder("21");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "639", "206", "64", "12", null, null, this);
            obj.set_taborder("22");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "15", "78", "690", "64", null, null, this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "15", "78", "90", "64", null, null, this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "15", "15", "690", "64", null, null, this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0", "11", "15", "135", null, null, this);
            obj.set_taborder("26");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static151", "absolute", "15", "15", "90", "64", null, null, this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static117", "absolute", "110", "23", "61", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_text("한도액");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_dayng", "absolute", "160", "23", "95", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_value("0");
            obj.set_mask("###,###");
            obj.set_tooltiptext("숙박비한도");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "258", "23", "36", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("원  X");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_person01", "absolute", "294", "23", "35", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_value("0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "332", "23", "37", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("명  X");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "110", "50", "45", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("실비");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_unlimit10", "absolute", "243", "50", "120", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_value("0");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "365", "50", "12", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_night10", "absolute", "160", "50", "46", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "209", "50", "37", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("일  =");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_night01", "absolute", "368", "23", "35", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "110", "86", "61", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_text("한도액");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_exchange", "absolute", "242", "86", "95", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_value("0");
            obj.set_mask("###,###");
            obj.set_tooltiptext("환율");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "340", "86", "63", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("원/＄  X");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_person02", "absolute", "392", "86", "35", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_value("0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "430", "86", "37", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("명  X");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "110", "113", "45", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_text("실비");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_unlimit20", "absolute", "243", "113", "120", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_value("0");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "365", "113", "12", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_night20", "absolute", "160", "113", "46", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "209", "113", "37", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_text("일  =");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_night02", "absolute", "464", "86", "35", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_value("0");
            obj.set_tooltiptext("총일수");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "502", "86", "37", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_text("일");
            this.addChild(obj.name, obj);

            obj = new Combo("com_dayng", "absolute", "160", "86", "65", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_innerdataset("@dsDAYNG");
            obj.set_codecolumn("DAYNG");
            obj.set_datacolumn("DAYNG");
            obj.set_tooltiptype("inplace");
            obj.set_tooltiptext("숙박비(갑/을)");

            obj = new Static("Static27", "absolute", "229", "86", "19", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_text("X");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_BSRP_CODE", "absolute", "23", "17", "58", "123", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_BSRP_CODE_innerdataset = new Dataset("rdo_BSRP_CODE_innerdataset", this.rdo_BSRP_CODE);
            rdo_BSRP_CODE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">국내</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">국외</Col></Row></Rows>");
            obj.set_innerdataset(rdo_BSRP_CODE_innerdataset);
            obj.set_taborder("44");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_enable("false");

            obj = new Static("Static02", "absolute", "408", "23", "37", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_text("일  X");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_disrate01", "absolute", "444", "23", "35", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_value("100");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "482", "23", "37", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_text("%  =");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_dayng_sum01", "absolute", "517", "23", "95", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_value("0");
            obj.set_mask("###,###");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "615", "23", "20", "21", null, null, this);
            obj.set_taborder("48");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "519", "86", "19", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_text("X");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_disrate02", "absolute", "535", "86", "35", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_value("100");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "573", "86", "37", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_text("%  =");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_dayng_sum02", "absolute", "606", "86", "74", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_value("0");
            obj.set_mask("###,###");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "683", "86", "20", "21", null, null, this);
            obj.set_taborder("52");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "461", "50", "95", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_text("영수증증빙한도");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_limit01", "absolute", "558", "50", "95", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_value("0");
            obj.set_mask("###,###");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "656", "50", "49", "21", null, null, this);
            obj.set_taborder("55");
            obj.set_text("원(70%)");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "462", "114", "96", "21", null, null, this);
            obj.set_taborder("56");
            obj.set_text("영수증증빙한도");
            obj.set_cssclass("styFormSubCap");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_limit02", "absolute", "558", "114", "94", "21", null, null, this);
            obj.set_taborder("57");
            obj.set_value("0");
            obj.set_mask("###,###");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "656", "114", "46", "21", null, null, this);
            obj.set_taborder("58");
            obj.set_text("원(70%)");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 721, 217, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("passwordChange");
            		p.set_titletext("일비 계산");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HATF0070P03.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HATF0070P03.xfdl", function() {
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
        this.sBUTTONLIST  = "FTFFFFFF"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME = "HATF0070P03"; //해당 Form에서 사용 할 Package 명
        this.sBSRP_DATE1   = "";
        this.sBSRP_DATE2   = "";
        this.sBSRP_CODE    = "";
        this.sBSRP_CNT	  = "";
        this.sEMP_KIND     = "";
        this.bDay_CNT     = "";

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
        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e){

        	this.sBSRP_DATE1 = this.parent.oBSRP_DATE1;
        	this.sBSRP_DATE2 = this.parent.oBSRP_DATE2;
        	this.sBSRP_CODE = this.parent.oBSRP_CODE;
        	this.sBSRP_CNT = this.parent.oBSRP_CNT;
        	this.sEMP_KIND = this.parent.oEMP_KIND;
        trace("  HATF0070P03.fn_FormLoadSetting.sBSRP_DATE1 = "+this.sBSRP_DATE1);
        trace("  HATF0070P03.fn_FormLoadSetting.sBSRP_DATE2 = "+this.sBSRP_DATE2);
        trace("  HATF0070P03.fn_FormLoadSetting.sBSRP_CODE = "+this.sBSRP_CODE);
        trace("  HATF0070P03.fn_FormLoadSetting.sBSRP_CNT = "+this.sBSRP_CNT);
        trace("  HATF0070P03.fn_FormLoadSetting.sEMP_KIND = "+this.sEMP_KIND);

        	//숙박일수
        	var sDateY = nexacro.toNumber(this.fnc_SubStr(this.sBSRP_DATE1,0,4));
        	var sDateM = nexacro.toNumber(this.fnc_SubStr(this.sBSRP_DATE1,4,2))-1;
        	var sDateD = nexacro.toNumber(this.fnc_SubStr(this.sBSRP_DATE1,6,2));
        	var eDateY = nexacro.toNumber(this.fnc_SubStr(this.sBSRP_DATE2,0,4));
        	var eDateM = nexacro.toNumber(this.fnc_SubStr(this.sBSRP_DATE2,4,2))-1;
        	var eDateD = nexacro.toNumber(this.fnc_SubStr(this.sBSRP_DATE2,6,2));
        	var sDate = new Date(sDateY,sDateM,sDateD);
        	var eDate = new Date(eDateY,eDateM,eDateD);
        	var bDate = eDate.getTime() - sDate.getTime();
        	this.bDay_CNT = (bDate / (1000*60*60*24)) + 1;
        trace("  HATF0070P03.fn_FormLoadSetting.bDay_CNT = "+this.bDay_CNT);

        	this.rdo_BSRP_CODE.set_value(this.sBSRP_CODE);
        	this.fn_formNotEnable();
        	if(this.sBSRP_CODE == "10"){
        		this.mae_person01.set_value(this.sBSRP_CNT);
        		this.mae_night01.set_value(this.bDay_CNT);
        		
        		/*if(this.bDay_CNT >= 16 && this.bDay_CNT <= 30) this.mae_disrate01.set_value(90);
        		else if(this.bDay_CNT > 30) this.mae_disrate01.set_value(80);
        		else this.mae_disrate01.set_value(100);*/
        		this.mae_disrate01.set_value(100);
        		this.mae_disrate02.set_value(0);
        	} else {
        		this.mae_person02.set_value(this.sBSRP_CNT);
        		this.mae_night02.set_value(this.bDay_CNT);
        		
        		/*if(this.bDay_CNT >= 16 && this.bDay_CNT <= 30) this.mae_disrate02.set_value(90);
        		else if(this.bDay_CNT > 30) this.mae_disrate02.set_value(80);
        		else this.mae_disrate02.set_value(100);*/
        		this.mae_disrate01.set_value(0);
        		this.mae_disrate02.set_value(100);
        	}

        	this.fnc_DatasetClear('dsAT_DAYECT');
        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsAT_DAYECT=dsAT_DAYECT";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
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
        	//기능없음
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
        	this.close();
        	//기능없음
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj,e){
        	//기능없음
        }

        /*-----------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj,e){
        	//기능없음
        }

        /*-----------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj,e){
        	//기능없음.
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
         |  11.단축키 처리(Form KeyDown)     |
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
        	//기능없음
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	//기능없음
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	//기능없음
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind){

        	var sReturnString;

        	if (sKind == "SEARCH00"){
        	
        		sReturnString  = " pgm="        + this.fnc_Quote(this.sPACKAGENAME); //Package(Action Bean명)
        		sReturnString += " action="     + this.fnc_Quote(sKind); 		     //호출할 Package의 Method명
        		sReturnString += " BSRP_DATE1=" + this.fnc_Quote(this.fnc_Trim(this.sBSRP_DATE1)); 
        		sReturnString += " BSRP_CODE=" + this.fnc_Quote(this.fnc_Trim(this.sBSRP_CODE)); 
        		sReturnString += " TRGT_CODE=" + this.fnc_Quote(this.fnc_Trim(this.sEMP_KIND)); 
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

        	if (sMethodName == "SEARCH00"){
        		
        		if(this.dsAT_DAYECT.getRowCount() < 1){
        			alert("일비기준 정보가 없습니다.\n관리부서에 문의 바랍니다.");
        			this.fnc_PopupClose("");
        		}

        		if(this.sBSRP_CODE == "10"){
        			this.mae_dayng.set_value(this.dsAT_DAYECT.getColumn(0, "DAIL_APAY"));
        		} else {
        			this.dsDAYNG.addRow();
        			this.dsDAYNG.setColumn(0,"DAYNG",this.dsAT_DAYECT.getColumn(0, "DAIL_APAY"));
        			this.dsDAYNG.addRow();
        			this.dsDAYNG.setColumn(1,"DAYNG",this.dsAT_DAYECT.getColumn(0, "DAIL_BPAY"));
        			
        			this.com_dayng.set_index(0);
        		}
        		
        		this.fn_SUM_BTCL_DAY();
        		this.fn_SUM_TOTAL();
        	}
        	
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,nOldRow,nRow){
        	//기능없음
        }

        this.fn_formNotEnable = function(){
         trace("fn_formNotEnable");
        	
        	if(this.sBSRP_CODE == 10){
        		this.com_dayng.set_enable(false);
        		this.mae_exchange.set_enable(false);
        		this.mae_night02.set_enable(false);
        		this.mae_night20.set_enable(false);
        		this.mae_disrate02.set_enable(false);
        		this.mae_unlimit20.set_enable(false);
        	} else {
        		this.mae_dayng.set_enable(false);
        		this.mae_night01.set_enable(false);
        		this.mae_night10.set_enable(false);
        		this.mae_disrate01.set_enable(false);
        		this.mae_unlimit10.set_enable(false);
        	}
         }

        /**************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/
        /*---------------+
         |  확인 처리 !  |
         +---------------*/
        this.fn_Confirm = function (obj,e) {

        	var arrReturn = new Array(3);
        	var strReturn = "";
        	var snight = "";
        	var sunlimit = "";
        	
        	var nnight1 = 0;
        	var nlimit1 = 0;
        	var nnight2 = 0;
        	var nlimit2 = 0;

        	if(this.sBSRP_CODE == 10 && (this.sEMP_KIND == 30 || this.sEMP_KIND == 40)){
        		nnight1 = parseInt(this.mae_night01.value);
        		nlimit1 = parseInt(this.mae_dayng_sum01.value);	//금액한도체크는 영수증증빙한도가 아닌 한도액으로 제약
        		nnight2 = parseInt(this.mae_night10.value);
        		nlimit2 = parseInt(this.mae_unlimit10.value);
        		
        		if(nnight1 < nnight2){ alert("실비일수를 초과 하였습니다."); return; }
        		if(nlimit1 < nlimit2){ alert("실비한도를 초과 하였습니다."); return; }
        	} else if (this.sBSRP_CODE == 20 && (this.sEMP_KIND == 20 || this.sEMP_KIND == 30 || this.sEMP_KIND == 40)){
        		nnight1 = parseInt(this.mae_night02.value);
        		nlimit1 = parseInt(this.mae_dayng_sum02.value);	//금액한도체크는 영수증증빙한도가 아닌 한도액으로 제약
        		nnight2 = parseInt(this.mae_night20.value);
        		nlimit2 = parseInt(this.mae_unlimit20.value);
        		
        		if(nnight1 < nnight2){ alert("실비일수를 초과 하였습니다."); return; }
        		if(nlimit1 < nlimit2){ alert("실비한도를 초과 하였습니다."); return; }
        	}

        	if(this.sBSRP_CODE == 10){
        trace("fn_Confirm.mae_dayng_sum01 = "+this.mae_dayng_sum01.value);
        		/*if(parseInt(this.mae_dayng_sum01.value) != 0){
        trace("fn_Confirm.mae_dayng_sum02 = "+this.mae_dayng_sum01.value);
        			strReturn += "\n국내(일비) 한도액 : "+this.fnc_AddComma(this.mae_dayng.value)+"원 * "+this.mae_person01.value+"명 * "+this.mae_night01.value+"일 * "+this.mae_disrate01.value+"% = "+this.fnc_AddComma(this.mae_dayng_sum01.value)+"원";
        		}*/
        		if(parseInt(this.mae_unlimit10.value) != 0){
        			strReturn += "\n국내(일비) 실비 : "+this.mae_night10.value+"일 "+this.fnc_AddComma(this.mae_unlimit10.value)+"원";
        		}
        	} else {
        		/*if(parseInt(this.mae_dayng_sum02.value) != 0){
        			strReturn += "\n국외(일비) 한도액 : "+this.fnc_AddComma(this.com_dayng.value)+"USD * "+this.mae_person02.value+"명 * "+this.mae_night02.value+"일 * "+this.mae_disrate02.value+"% = "+this.fnc_AddComma(this.mae_dayng_sum02.value)+"원";
        		}*/
        		if(parseInt(this.mae_unlimit20.value) != 0){
        			strReturn += "\n국외(일비) 실비 : "+this.mae_night20.value+"일 "+this.fnc_AddComma(this.mae_unlimit20.value)+"원 (환율 : "+this.fnc_AddComma(this.mae_exchange.value)+"원/$)";
        		}
        	}
        	
        	sunlimit = this.mae_totalsum.value;

        	trace("fn_Confirm.arrReturn[0] = "+sunlimit);
        	trace("fn_Confirm.arrReturn[1] = "+strReturn);
        	// 반환 할 자료(Array) 만들기
        	arrReturn[0] = sunlimit;
        	arrReturn[1] = strReturn;
        	
        	this.fnc_PopupClose(arrReturn);
        }

        this.fn_SUM_BTCL_DAY = function()
        {
        	if(this.sBSRP_CODE == 10){
        		var ndayng = parseInt(this.mae_dayng.value);
        		var nperson01 = parseInt(this.mae_person01.value);
        		var nnight01 = parseInt(this.mae_night01.value);
        		var ndisrate01 = parseInt(this.mae_disrate01.value);
        		var nlimit = ndayng * nperson01 * nnight01 * ndisrate01 / 100;
        		this.mae_dayng_sum01.set_value(nlimit);
        		this.mae_limit01.set_value(nlimit*70/100);
        	} else {
        		var ndayng = parseInt(this.com_dayng.value);
        		var nexchange = parseInt(this.mae_exchange.value);
        		var nperson02 = parseInt(this.mae_person02.value);
        		var nnight02 = parseInt(this.mae_night02.value);
        		var ndisrate02 = parseInt(this.mae_disrate02.value);
        		var nlimit = ndayng * nexchange * nperson02 * nnight02 * ndisrate02 / 100;
        		this.mae_dayng_sum02.set_value(nlimit);
        		this.mae_limit02.set_value(nlimit*70/100);
        	}
        }

        this.fn_SUM_TOTAL = function()
        {
        	if(this.sBSRP_CODE == 10){
        		var ndayng_sum01 = parseInt(this.mae_dayng_sum01.value);
        		var nunlimit10 = parseInt(this.mae_unlimit10.value);
        		//var nSum = ndayng_sum01 + nunlimit10;
        		var nSum = nunlimit10;
        		this.mae_totalsum.set_value(nSum);
        	} else {
        		var ndayng_sum02 = parseInt(this.mae_dayng_sum02.value);
        		var nunlimit20 = parseInt(this.mae_unlimit20.value);
        		//var nSum = ndayng_sum02 + nunlimit20;
        		var nSum = nunlimit20;
        		this.mae_totalsum.set_value(nSum);
        	}
        }

        this.mae_dayng_ontextchanged = function(obj,e)
        {
        	this.fn_SUM_BTCL_DAY();
        	//this.fn_SUM_TOTAL();
        }

        this.mae_night01_ontextchanged = function(obj,e)
        {
        	this.fn_SUM_BTCL_DAY();
        	//this.fn_SUM_TOTAL();
        }

        this.com_dayng_onitemchanged = function(obj,e)
        {
        	this.fn_SUM_BTCL_DAY();
        	//this.fn_SUM_TOTAL();
        }

        this.mae_exchange_ontextchanged = function(obj,e)
        {
        	this.fn_SUM_BTCL_DAY();
        	//this.fn_SUM_TOTAL();
        }

        this.mae_night02_ontextchanged = function(obj,e)
        {
        	this.fn_SUM_BTCL_DAY();
        	//this.fn_SUM_TOTAL();
        }

        this.mae_disrate01_ontextchanged = function(obj,e)
        {
        	this.fn_SUM_BTCL_DAY();
        }

        this.mae_disrate02_ontextchanged = function(obj,e)
        {
        	this.fn_SUM_BTCL_DAY();
        }

        this.mae_unlimit10_ontextchanged = function(obj,e)
        {
        	this.fn_SUM_TOTAL();
        }

        this.mae_unlimit20_ontextchanged = function(obj,e)
        {
        	this.fn_SUM_TOTAL();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.btnCancle.addEventHandler("onclick", this.fn_End, this);
            this.btnSubmit.addEventHandler("onclick", this.fn_Confirm, this);
            this.mae_dayng.addEventHandler("ontextchanged", this.mae_dayng_ontextchanged, this);
            this.mae_unlimit10.addEventHandler("ontextchanged", this.mae_unlimit10_ontextchanged, this);
            this.mae_night01.addEventHandler("ontextchanged", this.mae_night01_ontextchanged, this);
            this.mae_exchange.addEventHandler("ontextchanged", this.mae_exchange_ontextchanged, this);
            this.mae_unlimit20.addEventHandler("ontextchanged", this.mae_unlimit20_ontextchanged, this);
            this.mae_night02.addEventHandler("ontextchanged", this.mae_night02_ontextchanged, this);
            this.com_dayng.addEventHandler("onitemchanged", this.com_dayng_onitemchanged, this);
            this.mae_disrate01.addEventHandler("ontextchanged", this.mae_disrate01_ontextchanged, this);
            this.mae_disrate02.addEventHandler("ontextchanged", this.mae_disrate02_ontextchanged, this);

        };

        this.loadIncludeScript("HATF0070P03.xfdl");

       
    };
}
)();
