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
                this.set_name("comFileUploadDiv");
                this.set_titletext("comFileUploadDiv");
                this._setFormPosition(0,0,400,316);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static14", "absolute", "8", "19", "216", "6", null, null, this);
            obj.set_taborder("4");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stGROP_LIST02", "absolute", "0", "4", "89", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddFile", "absolute", null, "0", "74", "21", "77", null, this);
            obj.set_taborder("1");
            obj.set_text("파일첨부");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelFile", "absolute", null, "0", "74", "21", "0", null, this);
            obj.set_taborder("2");
            obj.set_text("파일삭제");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFL_ATTACH", "absolute", "0", "25", null, null, "0", "0", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("3");
            obj.set_binddataset("dsFL_ATTACH");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"197\"/><Column size=\"124\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"파일명\"/><Cell col=\"1\" text=\"다운로드\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" style=\", 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align:left;\" text=\"bind:LFIL_NAME\"/><Cell col=\"1\" displaytype=\"button\" edittype=\"button\" text=\"파일 다운로드\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 400, 316, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("comFileUploadDiv");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("comFileUploadDiv.xfdl", "script::lib_script_common.xjs");
        this.registerScript("comFileUploadDiv.xfdl", function() {
         /***************************************************************************************************
         * # Program : 다중 첨부파일 관리 영역 
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

        //일반 함수에서는 dsFL_ATTACH 접근시  this.mobjds 로 사용
        this.mobjds = this.parent.dsFL_ATTACH;

        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FileDivInit = function () {

        	//파일업로드팝업창의 후처리에서 이 페이지를 호출하면, 인스턴스를 새로 만들기 때문에
        	//최초 실행됐을때 기록한 값을 가져올수 없다.
        	//업무화면 전역변수에 기록해야 한다.
        	
        	this.objfileds = this.getOwnerFrame().form.dsFL_ATTACH;//파일업로드용 데이타셋은 하드코딩
        	this.grdFL_ATTACH.setBindDataset(this.objfileds);//첨부파일 그리드에 데이타셋 셋팅
        }

        /*-----------------------------------+
        |  파일첨부 버튼 클릭 時  |
        	@parameter :
        	@return :
        +------------------------------------*/
        this.fn_uploadFile = function(obj,e)
        {
        	//업무테이블 로우가 없는 경우 파일첨부 불가
        	if (this.parent.mobjmainds.getRowCount() < 1) {
        		this.fnc_Message("TMM141");
        		return false;
        	}

        	this.fnc_CallFileUplod(5, "txt,xls,xlsx,hwp,pdf,jpg,png,gif,bmp,doc,docx,ppt,pptx","fn_CallFileUplodCallback");//펑션명에 this는 안붙이는 것으로 한다.
        }

        /*-----------------------------------+
        파일업로드 팝업창에서
        임시 fileID와 패스가 생성되었을때

        
        업로드창을 여러번 불러서 파일을 등록하면, 업로드창이 열릴때 마다 fileid가 새로 생성되는데,
        fileid는 기존에 있는 것을 쓰고 거기에 신규 파일을 넣기만 하면된다.
        fileid는 헤더정보이기 때문에, 모든 로우의 fileid는 같아야 한다. 그래서 기준점을 0번 로우값으로 하고
        0번째 로우가 없을 때만 신규 fileid를 사용하고 업무테이블에 fileid를 갱신시킨다.

        div에서 호출한 팝업에서 콜백을 부를 때, 최초 div 컨텍스트를 찾을수 없어서 parent의 변수에 접근한다.
        +------------------------------------*/
        this.fn_CallFileUplodCallback = function(robjds,form){

        	//dataset이 없으면 이 함수가 실행되지 않는다.
        	//tmp에 업로드된 파일리스트가 담긴 dataset object 
        	
        	
        	var objds = form.dsFL_ATTACH;//첨부파일	
        	var objmainds = form.mobjmainds; //업무테이블
        	var objmcolname = form.mcolname; //업무테이블의 fileid 컬럼
        	
        	
        	//파일 아이디는 신규일때만 갱신한다.
        	var fileid = robjds.getColumn(0,"FILE_IDXX");
        	
        	//첨부파일 데이타의 0번째 로우를 기준으로 한다.
        	if(objds.getRowCount()>0 && objds.getColumn(0,"FILE_IDXX").length>0){
        		fileid = objds.getColumn(0,"FILE_IDXX");
        	}else{
        		objmainds.setColumn(objmainds.rowposition,objmcolname,fileid);//업무화면의 데이타셋 컬럼에 입력하는 부분
        	}
        	
        	//팝업창에서 추가된 파일리스트를 추가상태로 복사한다.(copyData를 사용하면 초기상태가된다)
        	for(i=0;i<robjds.rowcount;i++){
        		var iRow = objds.addRow();
        		objds.copyRow(iRow,robjds,i);
        		
        		if(objds.updatecontrol){
        			//copyRow 시
        			//updatecontrol 속성의 값이 'true'이면 복사된 행의 타입은 ROWTYPE_UPDATE가 되고, 'false'이면 ROWTYPE_NORMAL
        		}else{
        			objds.setRowType(iRow,Dataset.ROWTYPE_INSERT);
        		}
        	}
        }

        /*-----------------------------------+
        |  파일삭제 버튼 클릭 時  |
        	@parameter : control
        	@return :
        +------------------------------------*/
        this.fn_deleteFile = function(obj,e)
        {
        	if (this.fn_checkDeleteFile())this.mobjds.deleteRow(this.mobjds.rowposition);
        	this.grdFL_ATTACH.setFocus();
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_checkDeleteFile = function () {
        	
        	if (this.mobjds.getRowCount() < 1) {
        		this.fnc_Message("TMM007");
        		return false;
        	}

        	var sQuestionText = this.mobjds.getColumn(this.mobjds.rowposition, "LFIL_NAME");
        	return this.fnc_Message("TMM002", sQuestionText);

        }

        this.grdFL_ATTACH_oncellclick = function(obj,e)
        {
        	if(this.grdFL_ATTACH.getCellText(e.row,e.col)=="파일 다운로드"){
        		//다운로드 펑션
        		var filePath = this.mobjds.getColumn(e.row,"FILE_PATH");
        		var phyFileNm = this.mobjds.getColumn(e.row,"PFIL_NAME");
        		var realFileNm = this.mobjds.getColumn(e.row,"LFIL_NAME");
        		
        		if(filePath.length > 0) {
        			this.fnc_FileDownLoad(filePath, phyFileNm, realFileNm);
        		}		
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnAddFile.addEventHandler("onclick", this.fn_uploadFile, this);
            this.btnDelFile.addEventHandler("onclick", this.fn_deleteFile, this);
            this.grdFL_ATTACH.addEventHandler("oncellclick", this.grdFL_ATTACH_oncellclick, this);

        };

        this.loadIncludeScript("comFileUploadDiv.xfdl");

       
    };
}
)();
