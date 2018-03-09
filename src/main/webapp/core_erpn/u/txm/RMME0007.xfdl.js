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
                this.set_name("ACMB0055");
                this.set_titletext("지급명세서/영수증 출력");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,480,344);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPRNT_GUBN", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRNT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GUBN_CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"GUBN_CODE\">10</Col><Col id=\"PRNT_NAME\">거주자의 기타소득 원천징수영수증(소득자보관용)</Col></Row><Row><Col id=\"GUBN_CODE\">11</Col><Col id=\"PRNT_NAME\">거주자의 기타소득 원천징수영수증(발행자보관용)</Col></Row><Row><Col id=\"GUBN_CODE\">12</Col><Col id=\"PRNT_NAME\">거주자의 사업소득 원천징수영수증(소득자보관용)</Col></Row><Row><Col id=\"GUBN_CODE\">13</Col><Col id=\"PRNT_NAME\">거주자의 사업소득 원천징수영수증(발행자보관용)</Col></Row><Row><Col id=\"GUBN_CODE\">14</Col><Col id=\"PRNT_NAME\">비거주자의 기타/사업소득 원천징수영수증(소득자보관용)</Col></Row><Row><Col id=\"GUBN_CODE\">15</Col><Col id=\"PRNT_NAME\">비거주자의 기타/사업소득 원천징수영수증(발행자보관용)</Col></Row><Row><Col id=\"GUBN_CODE\">16</Col><Col id=\"PRNT_NAME\">일용근로소득 지급명세서(소득자보관용)</Col></Row><Row><Col id=\"GUBN_CODE\">17</Col><Col id=\"PRNT_NAME\">일용근로소득 지급명세서(지급자보관용)</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsRADIO", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LABEL\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODE\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"LABEL\">전  체</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"LABEL\">소득자성명</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"LABEL\">소득자번호</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTERM", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TERM_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TERM_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"TERM_GUBN\">1</Col><Col id=\"TERM_NAME\">1/4분기</Col></Row><Row><Col id=\"TERM_GUBN\">2</Col><Col id=\"TERM_NAME\">2/4분기</Col></Row><Row><Col id=\"TERM_GUBN\">3</Col><Col id=\"TERM_NAME\">3/4분기</Col></Row><Row><Col id=\"TERM_GUBN\">4</Col><Col id=\"TERM_NAME\">4/4분기</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_GITAMAST", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PERS_YYMM\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"FORI_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"OFFI_NAME\" size=\"40\" prop=\"default\" type=\"STRING\"/><Column id=\"OWNR_NAME\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"JURI_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR_DESC\" size=\"300\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_NUMB\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_JUMN\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"CONP_ADDR\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"GITA_GUBN\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_ADDR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMP_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMP_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"JOBS_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"JOBS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GITA_RMR2\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"GITA_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FORE_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TELE_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_TELE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TERM_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_GITAGETA", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PERS_NUMB\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_YYMM\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"SUPP_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SUPP_KMAK\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"OUTL_KMAK\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"GASE_TOKM\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TAXX_RATE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"GABG_SEKM\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"COMP_SEKM\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"NONS_SEKM\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"JUMI_SEKM\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SEKM_TOKM\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"WORK_DAYS\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"NTAX_AMNT\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_INTEXD", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PERS_NUMB\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SUPP_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_GUBN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_YYMM\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"ACCT_GUBN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"EARN_CODE\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"REAL_GUBN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"FPRO_TYPE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"FPRO_CODE\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"INTE_CODE\" size=\"2\" prop=\"default\" type=\"STRING\"/><Column id=\"STAN_CODE\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"TAXX_CODE\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"INTE_RATE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SUPP_KMAK\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"INTE_STDT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"INTE_EDDT\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"TAXX_RATE\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"GABG_SEKM\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"COMP_SEKM\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"JUMI_SEKM\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"NONS_SEKM\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SEKM_TOKM\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TAKE_DEPT\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"TAKE_USER\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"TAXX_CUTX\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"TAKE_DEPTNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TAKE_USERNM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FORI_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RESI_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_NATI\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_JUMN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"COMP_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_POST\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_ADD1\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_ADD2\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTA_GITAMAST01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"FORI_GUBN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_NANM\" size=\"4000\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_NATI\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"OFFI_NAME\" size=\"40\" prop=\"default\" type=\"STRING\"/><Column id=\"OWNR_NAME\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"BSNS_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"JURI_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"ADDR_DESC\" size=\"301\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_NAME\" size=\"30\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_JUMN\" size=\"4000\" prop=\"default\" type=\"STRING\"/><Column id=\"BIRT_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_ADDR\" size=\"301\" prop=\"default\" type=\"STRING\"/><Column id=\"RESI_GUBN\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"EARN_CODE\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"ACNT_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"REAL_GUBN\" size=\"3\" prop=\"default\" type=\"STRING\"/><Column id=\"PERS_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TAXX_CUTX\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Shape("Shape1", "absolute", "8", "48", "464", "86", null, null, this);
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            obj.getSetter("class").set("RoundRect");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "16", "105", "75", "22", null, null, this);
            obj.getSetter("class").set("styFormSearchCap");
            obj.set_text("출력물 선택");
            obj.style.set_color("#505050ff");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static0", "absolute", "37", "8", "187", "22", null, null, this);
            obj.getSetter("class").set("styFormTitle");
            obj.set_text("지급명세서/영수증 출력");
            obj.style.set_align("middle left");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgFormTitle", "absolute", "8", "8", "22", "22", null, null, this);
            obj.set_image("URL('image::imgFormTitle.bmp')");
            obj.set_taborder("7");
            obj.set_tabstop("false");
            obj.set_imagealign("left middle");
            obj.getSetter("transparenthittest").set("false");
            this.addChild(obj.name, obj);

            obj = new Shape("Shape0", "absolute", "8", "37", "464", "6", null, null, this);
            obj.getSetter("type").set("rectangle");
            obj.getSetter("class").set("Rectangle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbPRNT_GUBN", "absolute", "93", "105", "371", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_codecolumn("GUBN_CODE");
            obj.set_datacolumn("PRNT_NAME");
            obj.set_innerdataset("dsPRNT_GUBN");
            obj.getSetter("class").set("styFormSearchItem");
            obj.set_taborder("3");

            obj = new Button("btnPrint", "absolute", "347", "55", "56", "23", null, null, this);
            obj.set_taborder("5");
            obj.style.set_image("URL('image::btnPrint.bmp')");
            obj.style.set_imagealign("left");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose", "absolute", "408", "55", "56", "23", null, null, this);
            obj.set_taborder("6");
            obj.style.set_image("URL('image::btnClose.bmp')");
            obj.style.set_imagealign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static2", "absolute", "16", "80", "75", "22", null, null, this);
            obj.getSetter("class").set("styFormSearchCap");
            obj.set_text("귀속년도");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("calPERS_YEAR", "absolute", "93", "80", "70", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_type("spin");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.getSetter("class").set("styFormItemCalendar");

            obj = new Static("Static03", "absolute", "16", "56", "75", "22", null, null, this);
            obj.set_text("사업장");
            obj.getSetter("class").set("styFormSearchCapBE");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRACCT_GUBN", "absolute", "93", "56", "160", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("@dsBRANCH_CD");
            obj.set_codecolumn("BRANCH_CD");
            obj.set_datacolumn("BRANCH_NM");
            obj.getSetter("class").set("styFormSearchItem");

            obj = new Static("stTERM_GUBN", "absolute", "176", "80", "75", "22", null, null, this);
            obj.set_text("지급분기");
            obj.getSetter("class").set("styFormSearchCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbTERM_GUBN", "absolute", "253", "81", "211", "22", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_value("1");
            obj.set_text("1/4분기");
            obj.set_innerdataset("dsTERM");
            obj.set_codecolumn("TERM_GUBN");
            obj.set_datacolumn("TERM_NAME");
            obj.getSetter("class").set("styFormSearchItem");
            obj.set_index("0");

            obj = new Static("Static04", "absolute", "8", "142", "464", "194", null, null, this);
            obj.set_text("  출력대상 소득자 선택");
            obj.style.set_border("1 solid black");
            obj.style.set_color("#505050ff");
            obj.style.set_align("left top");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoPRNT_TYPE", "absolute", "16", "164", "448", "164", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_columncount("0");
            obj.set_rowcount("0");
            obj.set_innerdataset("dsRADIO");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("LABEL");
            obj.set_value("0");
            obj.getSetter("class").set("styFormSearchRdo");
            obj.style.set_background("#ebf1ffff");
            obj.style.set_border("1 solid #000000ff");
            obj.style.set_padding("0 10 0 10");
            obj.style.set_bordertype("normal 3 3");
            obj.set_index("0");

            obj = new Edit("edtPERS_NAME", "absolute", "114", "233", "318", "25", null, null, this);
            obj.set_taborder("8");
            obj.getSetter("class").set("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRANGE_STDT", "absolute", "114", "287", "142", "25", null, null, this);
            obj.set_taborder("9");
            obj.getSetter("class").set("styFormSearchItem");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.set_maxlength("8");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "265", "287", "18", "24", null, null, this);
            obj.set_text("∼");
            obj.style.set_background("transparent");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRANGE_EDDT", "absolute", "290", "287", "142", "25", null, null, this);
            obj.set_taborder("10");
            obj.getSetter("class").set("styFormSearchItem");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "center");
            obj.set_maxlength("8");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 480, 344, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("지급명세서/영수증 출력");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("RMME0007.xfdl", "lib::lib_common.xjs");
        this.registerScript("RMME0007.xfdl", function() {
        /************************
        *  공통 Script Include  *
        ************************/
        //include "lib::lib_common.xjs";
        /*********************
        *  화면 변수 선언부  *
        *********************/
        // 조회, 엑셀, 선택, 취소, 닫기
        var sPOPBTNLIST  = "TFTTF";                       //공통기능정의(버튼순으로 T or F)

        var sUSERAUTH     = '';                                //사용자별 프로그램 사용 권한
        var sFORMCAPTION  = '';                                //Form의 Title 정보
        var sFORMLOCATION = '';                                //Form의 Location 정보
        var sUSERLAVEL    = '';                                //Form의 사용  Level
        var sPACKAGENAME  = '';								   //해당 Form에서 사용 할 Package 명 
        var sUSERLAVEL    = '';								   //Form의 사용 Level

        var sPACKAGENAME  = 'erp.u.rmm.e.ab.RMME0007AB';       //해당 Form에서 사용 할 Package 명 

        /**************************************************************************************************
        *                                         공통 Event 처리 부분                                    *
        ***************************************************************************************************/
        /*----------------------------------+
        |  01.화면 종료(닫기) 버튼 클릭 時  |
        ------------------------------------*/
        function fn_End(obj,e) {
        	
        	//화면 종료
        	close();
        	
        }

        /*-----------------------+
        |  02.조회 버튼 클릭 時  |
        +------------------------*/
        function fn_Search(obj,e) {	
        	
        }

        /*-----------------------------+
        |  03.입력(신규) 버튼 클릭 時  |
        +------------------------------*/
        function fn_Input(obj,e) {	

        }

        /*-----------------------------+
        |  04.삭제(제거) 버튼 클릭 時  |
        +------------------------------*/
        function fn_Delete(obj,e) {

        }

        /*-----------------------+
        |  05.취소 버튼 클릭 時  |
        -------------------------*/
        function fn_Cancel(obj,e) {

        }

        /*-----------------------+
        |  06.저장 버튼 클릭 時  |
        -------------------------*/
        function fn_Save(obj,e) {

        }

        /*-----------------------+
        |  07.엑셀 버튼 클릭 時  |
        -------------------------*/
        function fn_ToExcel(obj,e) {
        	
        }

        /*-----------------------+
        |  08.인쇄 버튼 클릭 時  |
        +------------------------*/
        function fn_Print(obj,e) {
        		
        	if (cmbPRNT_GUBN.value == '18' || cmbPRNT_GUBN.value == '19' || cmbPRNT_GUBN.value == '20') {
        		
        		var sMethodName = "PRINT01";                            //서버에서 호출 될 Method 명
        		var sInDataSet  = "";                                   //자료 저장 시 보낼 DataSet 명칭
        		var sOutDataSet = "dsTA_GITAMAST01=dsTA_GITAMAST01 dsTA_INTEXD=dsTA_INTEXD";
        		var sArgument   = fn_CreateArgument(sMethodName);       //조회 시 넘길 Argument 생성
        	
        		fnc_TransactionCall(this, sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	} else {
        	
        		var sMethodName = "PRINT00";                            //서버에서 호출 될 Method 명
        		var sInDataSet  = "";                                   //자료 저장 시 보낼 DataSet 명칭
        		var sOutDataSet = "dsTA_GITAMAST=dsTA_GITAMAST dsTA_GITAGETA=dsTA_GITAGETA";
        		var sArgument   = fn_CreateArgument(sMethodName);       //조회 시 넘길 Argument 생성
        	
        		fnc_TransactionCall(this, sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}
        }

        /*-----------------------------------+
        |  09.최초 화면 Load時 처리 할 사항  |
        +------------------------------------*/
        function fn_FormLoadSetting(obj,e) {
        	
        	//화면 정보 Display 및 Button 권한 설정
        	fnc_GetBranch();      //본지점 콤보 조회
        	
        	dsPRNT_GUBN.rowposition = 0;

            cmbPRNT_GUBN.index = 0;

        	//귀속년도 초기화
        	calPERS_YEAR.value = gfn_Today();
        	
        	stTERM_GUBN.visible  = false;
        	cmbTERM_GUBN.visible = false;	
        	
        }

        /*-----------------------------------+
        |  10.종료 화면 Load時 처리 할 사항  |
        +------------------------------------*/
        function fn_FormUnloadProcess(obj,e) {
        		
        }

        /*-----------------------------------+
        |  11.단축키 처리(Form KeyDown)      |
        +------------------------------------*/
        function fn_HotKey(obj,e) {
        	
        	//Return Key Press時 Next Component focus
        	if ((e.keycode==13) && !(e.fromobject instanceof Grid)) {
        	
        		//Grid를 제외한 곳에서 Enter Key 클릭 시 다음 컴포넌트로 포커스 Set
        		var oFocusComponent = getNextComponent(e.fromobject, true);
        		oFocusComponent.setFocus();	
        		return;
        		
        	}
        	
        	//Control Key가 눌려져 있다면 단축키 처리
        	if (e.ctrlKey) fnc_HotKey(this,e.keycode);
        		
        }

        /*-----------------------------------+
        |  12.Text Box가 Focus를 받을 때     |
        +------------------------------------*/
        function fn_EditFocus(obj) {

        	fnc_EditFocus(obj);
        	
        }

        
        /**************************************************************************************************
        *                                      공통 Function 처리 부분                                    *
        ***************************************************************************************************/

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        function fn_CreateArgument(sKind) {
        	
        	var sReturnString;
        	
        	//조회 Argument 생성
        	if (sKind=='SEARCH00') {
        		
        		sReturnString  = " pgm="             + gfn_Quote(sPACKAGENAME);                  //Pacaage(Action Bean명)
        		sReturnString += " action="          + gfn_Quote(sKind);                         //호출할 Package의 Method명
        	
        	} else if (sKind=='PRINT00') {
        	
        		sReturnString  = " pgm="            + gfn_Quote(sPACKAGENAME);                   //Pacaage(Action Bean명)
        		sReturnString += " action="         + gfn_Quote(sKind);                          //호출할 Package의 Method명
        		sReturnString += " ACCT_GUBN="      + gfn_Quote(gfn_Trim(cmbSHRACCT_GUBN.value));//사업장
        		sReturnString += " PRNT_GUBN="      + gfn_Quote(gfn_Trim(cmbPRNT_GUBN.value));   //인쇄물구분
        		sReturnString += " PERS_YEAR="      + gfn_Quote(gfn_Trim(gfn_SubStr(calPERS_YEAR.value, 0, 4))); //귀속년도    
        		sReturnString += " PERS_NAME="      + gfn_Quote(gfn_Trim(edtPERS_NAME.value));   //소득자    
        		sReturnString += " RANGE_STDT="     + gfn_Quote(gfn_Trim(edtRANGE_STDT.value));  //범위from     
        		sReturnString += " RANGE_EDDT="     + gfn_Quote(gfn_Trim(edtRANGE_EDDT.value));    //범위to
        		
        		if (cmbPRNT_GUBN.value == '16' || cmbPRNT_GUBN.value =='17') {
        			sReturnString += " TERM_GUBN=" 	+ gfn_Quote(gfn_Trim(cmbTERM_GUBN.value));       //지급분기(일용근로소득)
        		} else {
        			sReturnString += " TERM_GUBN=" 	+ gfn_Quote('');                                 //지급분기(일용근로소득)		
        		}
        	
        	} else if (sKind=='PRINT01') {
        	
        		sReturnString  = " pgm="            + gfn_Quote(sPACKAGENAME);                   //Pacaage(Action Bean명)
        		sReturnString += " action="         + gfn_Quote(sKind);                          //호출할 Package의 Method명
        		sReturnString += " ACCT_GUBN="      + gfn_Quote(gfn_Trim(cmbSHRACCT_GUBN.value));//사업장
        		sReturnString += " PRNT_GUBN="      + gfn_Quote(gfn_Trim(cmbPRNT_GUBN.value));   //인쇄물구분   
        		sReturnString += " PERS_YEAR="      + gfn_Quote(gfn_Trim(gfn_SubStr(calPERS_YEAR.value, 0, 4))); //귀속년도    
        		sReturnString += " PERS_NAME="      + gfn_Quote(gfn_Trim(edtPERS_NAME.value));   //소득자    
        		sReturnString += " RANGE_STDT="     + gfn_Quote(gfn_Trim(edtRANGE_STDT.value));  //범위from     
        		sReturnString += " RANGE_EDDT="     + gfn_Quote(gfn_Trim(edtRANGE_EDDT.value));    //범위to
        		
        	}

        	return sReturnString;                                             //생성된 String 반환
        	
        }

        /*------------------------------------+
        |  Transaction 후 처리 해야 할 내용!  |
        +-------------------------------------*/
        function fn_CallBack(sMethodName,ErrorCode,ErrorMSG) {
        	
        	fnc_CloseProgress();                         //Service 후 Progress Bar Close
        	
        	//Service에서 오류 발생 시 처리 
        	if (ErrorCode < 0) {
        		
        		if (GBL_SESSONCHK=="E0001") {
        		
        			//비인가 접속이나 Session 단절시 처리
        			fnc_ErrorProcess(ErrorCode, ErrorMSG);
        			
        		} else {
        			
        			//Server에서 받은 Message 처리
        			fnc_Message("SERVERMSG", ErrorMSG); 
        		}
        		
        	} else {
        		
        		//오류가 없이 정상 처리되었다면...
        		fn_PostProcess(sMethodName);
        		
        	}

        }

        /*------------------------------------+
        |  Transaction 후 Post Process!       |
        +-------------------------------------*/
        function fn_PostProcess(sMethodName) {

        	if (sMethodName=='SEARCH00') {
        		
        		fnc_Information(stInformation, dsEMPL.rowcount, "SHR"); //조회 결과 Display
        		fnc_Message("M1007", dsEMPL.rowcount);                  //정상 종료 메세지

        	} else if (sMethodName=='PRINT00') {
        			
        		//인쇄 할 자료가 있는지 체크
        		if (dsTA_GITAMAST.rowcount<1) {
        			fnc_Message("M1032");     //인쇄자료 없음                           
        			return;
        		}
        		
        		if (cmbPRNT_GUBN.value == '10') { //거주자의 기타소득 원천징수영수증(소득자보관용)			
        		
                    //File Location & File Name
                    GBL_RPTFILEPATH = GBL_REPORTURL + "xui/rpt/";    //Context Root
                    GBL_RPTFILENAME = "rmme0007r1.jrf";                //Report File Name
                    
                    //Parameter
                    GBL_RPTARGUMENT = "sArg1," + gfn_SubStr(calPERS_YEAR.value,0,4) + "년 ^";
                    GBL_RPTARGUMENT = GBL_RPTARGUMENT + "sArg2," + gfn_SubStr(gfn_Today(),0,4) + "년 " + gfn_Space(5) + gfn_SubStr(gfn_Today(),4,2) + "월 " + gfn_Space(5) + gfn_SubStr(gfn_Today(),6,2) + "일 ^";
                    GBL_RPTARGUMENT = GBL_RPTARGUMENT + 'sArg3,' + GBL_REPORTURL + "xui/rpt/JIKIN.png^";
                    GBL_RPTARGUMENT = GBL_RPTARGUMENT + 'sCompany,' + GBL_COMPANY1;
                    
                    //Dataset
                    GBL_RPTDATASET  = "dsTA_GITAMAST,dsTA_GITAGETA";
                    
                    //Dialog Option List
                    var strOpenStyle = "resizable=true openalign='center middle' ";
                    
                    //Report Viewer Call
                    dialog("거주자의 기타소득 원천징수영수증(소득자보관용)", "popup::comReportViewer.xfdl", this, "", strOpenStyle);
        		
        		} else if (cmbPRNT_GUBN.value == '11') { //거주자의 기타소득 원천징수영수증(발행자보관용)			
        		
        			//File Location & File Name
                    GBL_RPTFILEPATH = GBL_REPORTURL + "xui/rpt/";    //Context Root
                    GBL_RPTFILENAME = "rmme0007r2.jrf";                //Report File Name
                    
                    //Parameter
                    GBL_RPTARGUMENT = "sArg1," + gfn_SubStr(calPERS_YEAR.value,0,4) + "년 ^";
                    GBL_RPTARGUMENT = GBL_RPTARGUMENT + "sArg2," + gfn_SubStr(gfn_Today(),0,4) + "년 " + gfn_Space(5) + gfn_SubStr(gfn_Today(),4,2) + "월 " + gfn_Space(5) + gfn_SubStr(gfn_Today(),6,2) + "일 ^";
                    GBL_RPTARGUMENT = GBL_RPTARGUMENT + 'sArg3,' + GBL_REPORTURL + "xui/rpt/JIKIN.png^";
                    GBL_RPTARGUMENT = GBL_RPTARGUMENT + 'sCompany,' + GBL_COMPANY1;
                    
                    //Dataset
                    GBL_RPTDATASET  = "dsTA_GITAMAST,dsTA_GITAGETA";
                    
                    //Dialog Option List
                    var strOpenStyle = "resizable=true openalign='center middle' ";
                    
                    //Report Viewer Call
                    dialog("거주자의 기타소득 원천징수영수증(발행자보관용)", "popup::comReportViewer.xfdl", this, "", strOpenStyle);

        		} 
        		else if (cmbPRNT_GUBN.value == '12') { //거주자의 사업소득 원천징수영수증(소득자보관용)			
        		
        			//File Location & File Name
                    GBL_RPTFILEPATH = GBL_REPORTURL + "xui/rpt/";    //Context Root
                    GBL_RPTFILENAME = "rmme0007r3.jrf";                //Report File Name
                    
                    //Parameter
                    GBL_RPTARGUMENT = "sArg1," + gfn_SubStr(calPERS_YEAR.value,0,4) + "년 ^";
                    GBL_RPTARGUMENT = GBL_RPTARGUMENT + "sArg2," + gfn_SubStr(gfn_Today(),0,4) + "년 " + gfn_Space(5) + gfn_SubStr(gfn_Today(),4,2) + "월 " + gfn_Space(5) + gfn_SubStr(gfn_Today(),6,2) + "일 ^";
                    GBL_RPTARGUMENT = GBL_RPTARGUMENT + 'sArg3,' + GBL_REPORTURL + "xui/rpt/JIKIN.png^";
                    GBL_RPTARGUMENT = GBL_RPTARGUMENT + 'sArg4,' + dsTA_GITAMAST.getColumn(0, "OWNR_NAME") + "^";
                    GBL_RPTARGUMENT = GBL_RPTARGUMENT + 'sCompany,' + GBL_COMPANY1;
                    
                    //Dataset
                    GBL_RPTDATASET  = "dsTA_GITAMAST,dsTA_GITAGETA";
                    
                    //Dialog Option List
                    var strOpenStyle = "resizable=true openalign='center middle' ";
                    
                    //Report Viewer Call
                    dialog("거주자의 사업소득 원천징수영수증(소득자보관용)", "popup::comReportViewer.xfdl", this, "", strOpenStyle);

        		} 
        		else if (cmbPRNT_GUBN.value == '13') { //거주자의 사업소득 원천징수영수증(발행자보관용)			
        		
                    //File Location & File Name
                    GBL_RPTFILEPATH = GBL_REPORTURL + "xui/rpt/";    //Context Root
                    GBL_RPTFILENAME = "rmme0007r4.jrf";                //Report File Name
                    
                    //Parameter
                    GBL_RPTARGUMENT = "sArg1," + gfn_SubStr(calPERS_YEAR.value,0,4) + "년 ^";
                    GBL_RPTARGUMENT = GBL_RPTARGUMENT + "sArg2," + gfn_SubStr(gfn_Today(),0,4) + "년 " + gfn_Space(5) + gfn_SubStr(gfn_Today(),4,2) + "월 " + gfn_Space(5) + gfn_SubStr(gfn_Today(),6,2) + "일 ^";
                    GBL_RPTARGUMENT = GBL_RPTARGUMENT + 'sArg3,' + GBL_REPORTURL + "xui/rpt/JIKIN.png^";
                    GBL_RPTARGUMENT = GBL_RPTARGUMENT + 'sArg4,' + dsTA_GITAMAST.getColumn(0, "OWNR_NAME") + "^";
                    GBL_RPTARGUMENT = GBL_RPTARGUMENT + 'sCompany,' + GBL_COMPANY1;
                    
                    //Dataset
                    GBL_RPTDATASET  = "dsTA_GITAMAST,dsTA_GITAGETA";
                    
                    //Dialog Option List
                    var strOpenStyle = "resizable=true openalign='center middle' ";
                    
                    //Report Viewer Call
                    dialog("거주자의 사업소득 원천징수영수증(발행자보관용)", "popup::comReportViewer.xfdl", this, "", strOpenStyle);

        		} 
        		else if (cmbPRNT_GUBN.value == '14') { //비거주자의 기타사업소득 원천징수영수증(소득자보관용)			
        		
        			//File Location & File Name
                    GBL_RPTFILEPATH = GBL_REPORTURL + "xui/rpt/";    //Context Root
                    GBL_RPTFILENAME = "rmme0007r5.jrf";                //Report File Name
                    
                    //Parameter
                    GBL_RPTARGUMENT = "sArg1," + gfn_SubStr(calPERS_YEAR.value,0,4) + "년 ^";
                    GBL_RPTARGUMENT = GBL_RPTARGUMENT + "sArg2," + gfn_SubStr(gfn_Today(),0,4) + "년 " + gfn_Space(5) + gfn_SubStr(gfn_Today(),4,2) + "월 " + gfn_Space(5) + gfn_SubStr(gfn_Today(),6,2) + "일 ^";
                    GBL_RPTARGUMENT = GBL_RPTARGUMENT + 'sArg3,' + GBL_REPORTURL + "xui/rpt/JIKIN.png^";
                    GBL_RPTARGUMENT = GBL_RPTARGUMENT + 'sCompany,' + GBL_COMPANY1;
                    
                    //Dataset
                    GBL_RPTDATASET  = "dsTA_GITAMAST,dsTA_GITAGETA";
                    
                    //Dialog Option List
                    var strOpenStyle = "resizable=true openalign='center middle' ";
                    
                    //Report Viewer Call
                    dialog("비거주자의 기타사업소득 원천징수영수증(소득자보관용)", "popup::comReportViewer.xfdl", this, "", strOpenStyle);

        		} 
        		else if (cmbPRNT_GUBN.value == '15') { //비거주자의 기타사업소득 원천징수영수증(발행자보관용)			
        		
        			//File Location & File Name
                    GBL_RPTFILEPATH = GBL_REPORTURL + "xui/rpt/";    //Context Root
                    GBL_RPTFILENAME = "rmme0007r6.jrf";                //Report File Name
                    
                    //Parameter
                    GBL_RPTARGUMENT = "sArg1," + gfn_SubStr(calPERS_YEAR.value,0,4) + "년 ^";
                    GBL_RPTARGUMENT = GBL_RPTARGUMENT + "sArg2," + gfn_SubStr(gfn_Today(),0,4) + "년 " + gfn_Space(5) + gfn_SubStr(gfn_Today(),4,2) + "월 " + gfn_Space(5) + gfn_SubStr(gfn_Today(),6,2) + "일 ^";
                    GBL_RPTARGUMENT = GBL_RPTARGUMENT + 'sArg3,' + GBL_REPORTURL + "xui/rpt/JIKIN.png^";
                    GBL_RPTARGUMENT = GBL_RPTARGUMENT + 'sCompany,' + GBL_COMPANY1;
                    
                    //Dataset
                    GBL_RPTDATASET  = "dsTA_GITAMAST,dsTA_GITAGETA";
                    
                    //Dialog Option List
                    var strOpenStyle = "resizable=true openalign='center middle' ";
                    
                    //Report Viewer Call
                    dialog("비거주자의 기타사업소득 원천징수영수증(발행자보관용)", "popup::comReportViewer.xfdl", this, "", strOpenStyle);

        		} 
        		else if (cmbPRNT_GUBN.value == '16') { //일용근로소득 원천징수영수증(소득자보관용)			
        		
        			//File Location & File Name
                    GBL_RPTFILEPATH = GBL_REPORTURL + "xui/rpt/";    //Context Root
                    GBL_RPTFILENAME = "rmme0007r7.jrf";                //Report File Name
                    
                    //Parameter
                    GBL_RPTARGUMENT = "sArg1," + gfn_SubStr(calPERS_YEAR.value,0,4) + "년 ^";
                    GBL_RPTARGUMENT = GBL_RPTARGUMENT + "sArg2," + gfn_SubStr(gfn_Today(),0,4) + "년 " + gfn_Space(5) + gfn_SubStr(gfn_Today(),4,2) + "월 " + gfn_Space(5) + gfn_SubStr(gfn_Today(),6,2) + "일 ^";
                    GBL_RPTARGUMENT = GBL_RPTARGUMENT + 'sArg3,' + GBL_REPORTURL + "xui/rpt/JIKIN.png^";
                    GBL_RPTARGUMENT = GBL_RPTARGUMENT + 'sArg4,' + cmbTERM_GUBN.value + " ^";
                    GBL_RPTARGUMENT = GBL_RPTARGUMENT + 'sCompany,' + GBL_COMPANY1;
                    
                    //Dataset
                    GBL_RPTDATASET  = "dsTA_GITAMAST,dsTA_GITAGETA";
                    
                    //Dialog Option List
                    var strOpenStyle = "resizable=true openalign='center middle' ";
                    
                    //Report Viewer Call
                    dialog("일용근로소득 원천징수영수증(소득자보관용)", "popup::comReportViewer.xfdl", this, "", strOpenStyle);

        		} 
        		else if (cmbPRNT_GUBN.value == '17') { //일용근로소득 원천징수영수증(지급자보관용)			
        		
        			//File Location & File Name
                    GBL_RPTFILEPATH = GBL_REPORTURL + "xui/rpt/";    //Context Root
                    GBL_RPTFILENAME = "rmme0007r8.jrf";                //Report File Name
                    
                    //Parameter
                    GBL_RPTARGUMENT = "sArg1," + gfn_SubStr(calPERS_YEAR.value,0,4) + "년 ^";
                    GBL_RPTARGUMENT = GBL_RPTARGUMENT + "sArg2," + gfn_SubStr(gfn_Today(),0,4) + "년 " + gfn_Space(5) + gfn_SubStr(gfn_Today(),4,2) + "월 " + gfn_Space(5) + gfn_SubStr(gfn_Today(),6,2) + "일 ^";
                    GBL_RPTARGUMENT = GBL_RPTARGUMENT + 'sArg3,' + GBL_REPORTURL + "xui/rpt/JIKIN.png^";
                    GBL_RPTARGUMENT = GBL_RPTARGUMENT + 'sArg4,' + cmbTERM_GUBN.value + " ^";
                    GBL_RPTARGUMENT = GBL_RPTARGUMENT + 'sCompany,' + GBL_COMPANY1;
                    
                    //Dataset
                    GBL_RPTDATASET  = "dsTA_GITAMAST,dsTA_GITAGETA";
                    
                    //Dialog Option List
                    var strOpenStyle = "resizable=true openalign='center middle' ";
                    
                    //Report Viewer Call
                    dialog("일용근로소득 원천징수영수증(지급자보관용)", "popup::comReportViewer.xfdl", this, "", strOpenStyle);

        		} 

        	} else if (sMethodName=='PRINT01') { //이자배당 
        		
        		//인쇄 할 자료가 있는지 체크
        		if (dsTA_GITAMAST01.rowcount<1) {
        			fnc_Message("M1032");     //인쇄자료 없음                           
        			return;
        		}
        		
        		var sPRNT_NAME = '';
        		
        		if (cmbPRNT_GUBN.value == '18') {
        			sPRNT_NAME = '소득자 보관용';
        		} else if (cmbPRNT_GUBN.value == '19') {
        			sPRNT_NAME = '발행자 보관용';
        		} else if (cmbPRNT_GUBN.value == '20') {
        			sPRNT_NAME = '발행자 보고용';
        		} else {
        			sPRNT_NAME = '';	
        		}
        					
        		//File Location & File Name
                GBL_RPTFILEPATH = GBL_REPORTURL + "xui/rpt/";    //Context Root
                GBL_RPTFILENAME = "rmme0007r9.jrf";                //Report File Name
                
                //Parameter
                GBL_RPTARGUMENT = "sArg1," + sPRNT_NAME + " ^";
                GBL_RPTARGUMENT = GBL_RPTARGUMENT + 'sArg2,' + GBL_REPORTURL + "xui/rpt/JIKIN.png";
                
                //Dataset
                GBL_RPTDATASET  = "dsTA_GITAMAST01,dsTA_INTEXD";
                
                //Dialog Option List
                var strOpenStyle = "resizable=true openalign='center middle' ";
                
                //Report Viewer Call
                dialog("이자배당", "popup::comReportViewer.xfdl", this, "", strOpenStyle);
        		
        	} else if (sMethodName=="GetCommCode") {
        	
        		//공통 코드 콤보를 가져오기

        	} else if (sMethodName=="CODENAMESEARCH00") {
        	
        		//코드명 조회 후 처리
        		fnc_MultiRowDisplay(this);

        	} else if (sMethodName=="GetBranch") {
        		//본지점 콤보 가져오기
        		cmbSHRACCT_GUBN.index = 0;

        	}
        }
        /**************************************************************************************************
        *                                사용자 정의  Function 처리 부분                                  *
        ***************************************************************************************************/
        /**************************************************************************************************
        *                                  사용자 정의  Event 처리 부분                                   *
        ***************************************************************************************************/

        /*------------------------------------------------+
        |  선택한 출력물 종류에 따라서 입력필드 보여줌!   |
        +-------------------------------------------------*/
        function cmbPRNT_GUBN_OnChanged(obj,e) {
        	
        	// 데이터 필드 초기화
        	edtPERS_NAME.value = '';
        	edtRANGE_STDT.value = '';
        	edtRANGE_EDDT.value = '';
        		
        	var nGUBN = parseInt(e.postvalue);
        			
        	if(nGUBN == 10 || nGUBN == 11) { // 기타소득 원천징수영수증(소득자보관용) 선택
        	
        		stTERM_GUBN.visible  = false;
        		cmbTERM_GUBN.visible = false;
        			
        	} else if(nGUBN == 12 || nGUBN == 13) { // 사업소득 원천징수영수증(소득자보관용) 선택
        	
        		stTERM_GUBN.visible  = false;
        		cmbTERM_GUBN.visible = false;
        		
        	} else if(nGUBN == 14 || nGUBN == 15) { // 비거주자 기타사업 소득 원천징수영수증(소득자보관용) 선택
        	
        		stTERM_GUBN.visible  = false;
        		cmbTERM_GUBN.visible = false;
        			
        	} else if(nGUBN == 16 || nGUBN == 17) { // 일용근로소득 
        		
        		stTERM_GUBN.visible  = true;
        		cmbTERM_GUBN.visible = true;
        			
        	} else if(nGUBN == 18 || nGUBN == 19 || nGUBN == 20) { // 이자배당
        	
        		stTERM_GUBN.visible  = false;
        		cmbTERM_GUBN.visible = false;
        		
        	}
        	
        }

        /*-----------------------------------------+
        |  출력대상 라디오 버튼 변경 이벤트!   |
        +------------------------------------------*/
        function rdoPRNT_TYPE_onitemchanged(obj,e) {
        	
        	//if (e.postvalue == "0") {	// 전체
        	if (obj.value == "0") {	// 전체
        		edtPERS_NAME.value = "";
        		edtPERS_NAME.enable = false;
        		edtRANGE_STDT.enable = false;
        		edtRANGE_STDT.value = "";
        		edtRANGE_EDDT.enable = false;
        		edtRANGE_EDDT.value = "";
        	
        	//} else if (e.postvalue == "1") {	// 소득자성명
        	} else if (obj.value == "1") {	// 소득자성명
        		
        		edtPERS_NAME.enable = true;
        		edtRANGE_STDT.enable = false;
        		edtRANGE_STDT.value = "";
        		edtRANGE_EDDT.enable = false;
        		edtRANGE_EDDT.value = "";
        		edtPERS_NAME.setFocus();
        	
        	//} else if (e.postvalue == "2") { // 범위
        	} else if (obj.value == "2") { // 범위
        	
        		edtPERS_NAME.enable = false;
        		edtPERS_NAME.value = "";
        		edtRANGE_STDT.enable = true;
        		edtRANGE_EDDT.enable = true;
        		edtRANGE_STDT.setFocus();
        	}
        	
        }

        function rdoPRNT_TYPE_onitemclick(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsPRNT_GUBN.addEventHandler("onrowposchanged", this.dsPRNT_GUBN_OnRowPosChanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.cmbPRNT_GUBN.addEventHandler("onitemchanged", this.cmbPRNT_GUBN_OnChanged, this);
            this.cmbPRNT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btnPrint.addEventHandler("onclick", this.fn_Print, this);
            this.btnClose.addEventHandler("onclick", this.fn_End, this);
            this.cmbSHRACCT_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbTERM_GUBN.addEventHandler("onitemchanged", this.cmbPRNT_GUBN_OnChanged, this);
            this.cmbTERM_GUBN.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.rdoPRNT_TYPE.addEventHandler("onitemchanged", this.rdoPRNT_TYPE_onitemchanged, this);
            this.rdoPRNT_TYPE.addEventHandler("onitemclick", this.rdoPRNT_TYPE_onitemclick, this);

        };

        this.loadIncludeScript("RMME0007.xfdl");

       
    };
}
)();
