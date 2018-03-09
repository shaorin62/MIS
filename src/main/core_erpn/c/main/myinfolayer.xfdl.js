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
                this.set_name("RC_COM");
                this.set_scrollbars("none");
                this.set_titletext("[공통]우측 나의정보popupdiv");
                this._setFormPosition(0,0,305,784);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTM_WKNTXM", this);
            obj._setContents("<ColumnInfo><Column id=\"WKNT_TYCD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"WKNT_CNTT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"INUS_EMNR\" type=\"STRING\" size=\"256\"/><Column id=\"INUS_EMNR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"WKNT_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsGWNotice", this);
            obj._setContents("<ColumnInfo><Column id=\"ATCL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REG_EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATT_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0", "0", "305", null, null, "0", this);
            obj.set_taborder("20");
            obj.set_cssclass("sty_WF_Myinfo");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "25", "17", "38", "38", null, null, this);
            obj.set_taborder("1");
            obj.set_image("URL('theme://images/img_WF_user1.png')");
            obj.set_stretch("fixaspectratio");
            obj.set_cssclass("img_MF_photo");
            this.addChild(obj.name, obj);

            obj = new Static("staUserInfoR", "absolute", "73", "24", "207", "24", null, null, this);
            obj.set_taborder("2");
            obj.set_text("홍길동과장 / 경영지원팀");
            obj.set_cssclass("sta_MF_text2");
            obj.style.set_color("#555555ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "28", "538", "129", "24", null, null, this);
            obj.set_taborder("15");
            obj.set_text("WORK알림");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text4");
            obj.style.set_align("left middle");
            obj.style.set_font("bold antialias 11 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "6", "378", "299", "151", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_mybox2");
            this.addChild(obj.name, obj);

            obj = new Grid("grdNoticeList", "absolute", "21", "411", "279", "116", null, null, this);
            obj.set_cssclass("grd_MF_notice");
            obj.set_taborder("17");
            obj.set_binddataset("dsGWNotice");
            obj.set_selecttype("area");
            obj.set_autofittype("col");
            obj.set_fillareatype("linerow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"15\"/><Column size=\"310\"/></Columns><Rows><Row size=\"27\"/></Rows><Band id=\"body\"><Cell style=\"background:transparent URL('theme://images/bg_MF_bullet.png') center middle;background2:transparent URL('theme://images/bg_MF_bullet.png') center middle;\"/><Cell col=\"1\" style=\"color:#555555ff;\" text=\"bind:TITLE\"/></Band></Format><Format id=\"solution_format\"><Columns><Column size=\"15\"/><Column size=\"310\"/></Columns><Rows><Row size=\"27\"/></Rows><Band id=\"body\"><Cell style=\"background:transparent URL('theme://images/bg_MF_bullet.png') center middle;background2:transparent URL('theme://images/bg_MF_bullet.png') center middle;\"/><Cell col=\"1\" style=\"color:#555555ff;\" text=\"bind:NTCE_SBJT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnNoticeMore", "absolute", "233", "386", "54", "24", null, null, this);
            obj.set_taborder("18");
            obj.set_text("더보기+");
            obj.set_cssclass("btn_MF_button2");
            obj.style.set_color("#848e9fff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "28", "385", "97", "24", null, null, this);
            obj.set_taborder("19");
            obj.set_text("공지사항");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text8");
            obj.style.set_align("left middle");
            obj.style.set_font("bold antialias 11 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "30", "310", "250", "55", null, null, this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_mybox1");
            this.addChild(obj.name, obj);

            obj = new Static("staYrlyHcnt", "absolute", "55", "331", "97", "32", null, null, this);
            obj.set_taborder("11");
            obj.set_text("7<fs v='11'>일</fs><ff v='Dotum'><fc v='#d0d0d0ff'>/</fc></ff>15<fs v='11'>일</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text4");
            obj.style.set_color("#738fdfff");
            obj.style.set_font("antialias 18 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("staRegrHcnt", "absolute", "174", "331", "97", "32", null, null, this);
            obj.set_taborder("12");
            obj.set_text("3<fs v='11'>일</fs><ff v='Dotum'><fc v='#d0d0d0ff'>/</fc></ff>5<fs v='11'>일</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_text4");
            obj.style.set_color("#738fdfff");
            obj.style.set_font("antialias 18 Malgun Gothic");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "174", "310", "80", "24", null, null, this);
            obj.set_taborder("13");
            obj.set_text("정기휴가");
            obj.set_cssclass("sta_MF_text2");
            obj.style.set_color("#555555ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "55", "310", "80", "24", null, null, this);
            obj.set_taborder("10");
            obj.set_text("연차휴가");
            obj.set_cssclass("sta_MF_text2");
            obj.style.set_color("#555555ff");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "17", "62", "277", "248", null, null, this);
            obj.set_taborder("21");
            obj.style.set_background("#ffffffff");
            obj.set_scrollbars("none");
            obj.set_url("main::workcalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02", "absolute", "25", "570", "275", "199", null, null, this);
            obj.set_cssclass("grd_MF_Workalarm");
            obj.set_taborder("23");
            obj.set_binddataset("dsTM_WKNTXM");
            obj.set_selecttype("area");
            obj.set_fillareatype("linerow");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"38\"/><Column size=\"223\"/></Columns><Rows><Row size=\"19\"/><Row size=\"19\"/><Row size=\"12\"/></Rows><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"image\" style=\"background:stretch;background2:stretch;selectbackground:URL('theme://images/bg_WF_workpop3.png') stretch;backgroundimage:bind:FILE_INFO;\" text=\"theme://images/bg_WF_workpop4.png\"/><Cell col=\"1\" style=\"padding:0 0 0 10;\" text=\"expr:INUS_EMNR_NAME +' ['  +  WKNT_DATE.substr(0,4) + '-' +   WKNT_DATE.substr(4,2) + '-' + WKNT_DATE.substr(6,2) +']'\"/><Cell row=\"1\" col=\"1\" style=\"padding:0 0 0 10;color:#5578daff;color2:#5578daff;selectcolor:#5578daff;\" text=\"expr:WKNT_CNTT.length &gt; 18 ? WKNT_CNTT.substr(0,16) + &quot;..&quot; :  WKNT_CNTT\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\" style=\"padding:0 0 0 10;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 305, 784, this,
            	//-- Layout function
            	function(p) {
            		p.set_scrollbars("none");
            		p.set_titletext("[공통]우측 나의정보popupdiv");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "main::workcalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("myinfolayer.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("myinfolayer.xfdl", "script::lib_script_theme.xjs");
        this.addIncludeScript("myinfolayer.xfdl", "script::lib_script_dashboard.xjs");
        this.registerScript("myinfolayer.xfdl", function() {

        //include "script::lib_script_common.xjs"
        //include "script::lib_script_theme.xjs"
        //include "script::lib_script_dashboard.xjs"

        

        this.fn_FormLoadSetting = function(obj,e)
        {
        	
        	// 테마 설정 적용
        	//this.fnc_ThemeSetting(this);
        	//this.fnc_InfoLayerThemeSet(this);
        	
        	// 사용자명 기본 정보 표시
        	var sInfo = application.GBL_USERNM + application.GBL_OPOSNM;
        	sInfo += " / " + application.GBL_DEPTNM;
        	this.staUserInfoR.set_text(sInfo);
        	
        	// 개인 연차/정기휴가 일수 표시
        	this.fn_SetHolidayInfo();
        	
        	// 알람리스트 CAll 2016.11.24 남상기
        	this.fn_schSearch(); 
        	
        	if (application._SVCENV == "CUSTOMER") {
        		
        		this.btnNoticeMore.set_visible(false);
        		// 농심기획 공지사항 목록(그룹웨어)
        		this.fn_GwNoticeList();
        		
        	} else if (application._SVCENV == "SOLUTION") {
        		
        		this.btnNoticeMore.set_visible(true);
        		
        		// 솔루션 공지사항 목록 조회
        		this.grdNoticeList.set_formatid("solution_format");
        		this.fn_NoticeList();
        		
        	}
        	
        }

        /*---------------------------------------+
         |  Transaction 처리
         +---------------------------------------*/
        this.fn_TransactionCall = function(pMethodName) {

        	var sPackageName = "";
        	var sMethodName = "";
        	var sInDataSet = "";
        	var sOutDataSet = "";
        	var sArgument = "";
        	

        	switch (pMethodName) {
        	
        		//현재기준 알람 리스트 조회
        		case "SEARCH00": 

        			this.fnc_DatasetClear("dsTM_WKNTXM");
        			
        			sPackageName = "ComWorkAlarm";
        			sMethodName = pMethodName;
        			sInDataSet  = "";
        			sOutDataSet = "dsTM_WKNTXM=dsTM_WKNTXM";
        			sArgument   = this.fn_CreateArgument(sMethodName);

        			break;
        		
        		//그룹웨어 공지사항 조회
        		case "GWNotice": 

        			this.fnc_DatasetClear("dsGWNotice ");
        			sPackageName = "ComNotice";
        			sMethodName = pMethodName;
        			sInDataSet  = "";
        			sOutDataSet = "dsGWNotice=dsGWNotice";
        			sArgument   = this.fn_CreateArgument(sMethodName);

        			break;
        		
        		//솔루션 공지사항 조회
        		case "NoticeList": 

        			this.fnc_DatasetClear("dsGWNotice ");
        			sPackageName = "ComNotice";
        			sMethodName = pMethodName;
        			sInDataSet  = "";
        			sOutDataSet = "dsGWNotice=dsNoticeList";
        			sArgument   = this.fn_CreateArgument(sMethodName);

        			break;
        		
        		
        	}
        	
        	//Transaction Call!!
        	this.fnc_TransactionCall(this, sPackageName, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == 'SEARCH00') {
        		
        		// 알림 조회
        		sReturnString  = " pgm="		+ this.fnc_Quote("ComWorkAlarm");
        		sReturnString += " action="		+ this.fnc_Quote(sKind);
        	
        	} else if (sKind == "GWNotice") {
        		
        		// 농심 그룹웨어 공지사항 조회
        		sReturnString  = " pgm="		+ this.fnc_Quote("ComNotice");
        		sReturnString += " action="		+ this.fnc_Quote(sKind);
        		
        	} else if (sKind == "NoticeList") {
        		
        		// 공통 공지사항 조회
        		// 농심 그룹웨어 공지사항 조회
        		sReturnString  = " pgm="		+ this.fnc_Quote("ComNotice");
        		sReturnString += " action="		+ this.fnc_Quote(sKind);
        		
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

        /*-------------------------------------+
         |  Transaction 후 Post Process!       |
         +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {
        	
        	if (sMethodName == "SEARCH00") {
        		
        		for(var i = 0; i < this.dsTM_WKNTXM.getRowCount(); i++)
        		{
        			//사진정보 셋
        			var v = this.fnc_GetProfileImageURL(this.dsTM_WKNTXM.getColumn(i, "INUS_EMNR"));
        		    this.dsTM_WKNTXM.addColumn("FILE_INFO", "String", "256");
        		    this.dsTM_WKNTXM.setColumn(i, "FILE_INFO", v);
        		}
        		
        	} else if (sMethodName == "GWNotice") {
        		
        		// 공지사항은 최대 4건만 표시
        		if (this.dsGWNotice.rowcount > 4) {
        			this.dsGWNotice.filter("currow < 4");
        		}
        		
        	} else if (sMethodName == "NoticeList") {
        		
        		// 솔루션 적용 시 공통 공지사항 목록 조회 후처리
        		
        	
        	}

        }

        /**
         * 알람 목록 조회
         */
        this.fn_schSearch = function(){
        	
        	this.fn_TransactionCall("SEARCH00");
        }

        
        /**
         * 사용자 연차/정기휴가 일수 표시
         */
        this.fn_SetHolidayInfo = function() {

        	var dsObj = application.dsHolidayInfo;
        	
        	if (dsObj.getRowCount() > 0) {
        		
        		var yearTotal = dsObj.getColumn(0, "APLY_ANDC");	// 연차 발생일수
        		var yearUsed = dsObj.getColumn(0, "USEX_ANDC");	// 연차 사용일수
        		var vacnTotal = dsObj.getColumn(0, "OCUR_VADC");	// 정기 발생일수
        		var vacnUsed = dsObj.getColumn(0, "USEX_VADC");	// 정기 사용일수
        		var dutyCnt = dsObj.getColumn(0, "PROM_ANDC");		// 연차 의무사용일수
        	
        		var templateStr = "$USED<fs v='11'>일</fs><ff v='Dotum'><fc v='#d0d0d0ff'>/</fc></ff>$TOTAL<fs v='11'>일</fs>";
        		
        		var yearText = templateStr.replace("$USED", yearUsed);
        		yearText = yearText.replace("$TOTAL", yearTotal);
        		
        		var vacantText = templateStr.replace("$USED", vacnUsed);
        		vacantText = vacantText.replace("$TOTAL", vacnTotal);
        		
        		this.staYrlyHcnt.set_text(yearText);
        		this.staRegrHcnt.set_text(vacantText);
        	
        	}
        }

        
        /**
         * 공지사항 목록을 조회한다.
         */
        this.fn_GwNoticeList = function() {

        	// 농심기획 공지사항 목록(그룹웨어)
        	this.fn_TransactionCall("GWNotice");

        }

        
        /**
         * 솔루션 공지사항 목록 조회
         */
        this.fn_NoticeList = function() {

        	// 솔루션 공지사항 목록 조회
        	this.fn_TransactionCall("NoticeList");

        }

        
        /**
         * 공지사항 제목 클릭 시 해당 내용 포털 게시판 연결
         */
        this.grdNoticeList_oncellclick = function(obj,e)
        {
        	// 농심기획 처리
        	if (application._SVCENV == "CUSTOMER") {
        	
        		var sPostData = this.dsGWNotice.getColumn(this.dsGWNotice.rowposition, "ATCL_NO");
        		
        		//var openUrl = application.GBL_GROUPWAREURL + "/ekp/board/atcl.do?cmd=viewAtcl&atclReq.newList=Y&atclReq.atclNo="+addParam;
        		var openUrl = "http://www.nsgportal.net" + "/ekp/board/atcl.do?cmd=viewAtcl&atclReq.newList=Y&atclReq.atclNo=";
        		
        		if (nexacro.Browser == "Runtime") {  	//런타임모드
        			system.execBrowser(openUrl + sPostData);
        		} else {								//브라우저
        			window.open(openUrl + sPostData);
        		}
        		
        	} else if (application._SVCENV == "SOLUTION") {
        		
        		var noticeSeq = this.dsGWNotice.getColumn(this.dsGWNotice.rowposition, "SRAL_NUMB");
        		var oLinkParam = new Object();
        		oLinkParam.SRAL_NUMB = noticeSeq;
        		
        		this.fn_OpenLinkMenu("MTMMA0210", oLinkParam);
        		
        	}
        	
        }

        
        /**
         * 공지사항 더보기 버튼 클릭 시
         */
        this.btnNoticeMore_onclick = function(obj,e)
        {
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.ImageViewer00.addEventHandler("onclick", this.ImageViewer00_onclick, this);
            this.grdNoticeList.addEventHandler("oncellclick", this.grdNoticeList_oncellclick, this);
            this.btnNoticeMore.addEventHandler("onclick", this.btnNoticeMore_onclick, this);

        };

        this.loadIncludeScript("myinfolayer.xfdl");
        this.loadPreloadList();
       
    };
}
)();
