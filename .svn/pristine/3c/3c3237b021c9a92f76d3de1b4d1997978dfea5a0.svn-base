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
                this._setFormPosition(0,0,790,530);
            }
            this.style.set_background("white");
            this.style.set_border("2 solid #808080ff");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("stGROP_LIST02", "absolute", "8", null, "73", "23", null, "146", this);
            obj.set_taborder("0");
            obj.set_text("   첨부파일");
            obj.style.set_background("sandybrown");
            obj.style.set_color("darkmagenta");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Shape1", "absolute", "8", "8", null, null, "8", "177", this);
            obj.set_taborder("1");
            obj.set_cssclass("styFormItemBoxOut");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx0", "absolute", "11", "11", "100", "25", null, null, this);
            obj.set_taborder("2");
            obj.set_text("제목");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx1", "absolute", "11", "35", "100", "25", null, null, this);
            obj.set_taborder("3");
            obj.set_text("작성자");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx3", "absolute", "110", "11", null, "25", "11", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx02", "absolute", "110", "35", null, "25", "11", null, this);
            obj.set_taborder("88");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx04", "absolute", "11", "59", "100", null, null, "180", this);
            obj.set_taborder("89");
            obj.set_text("내용");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx05", "absolute", "259", "35", "100", "25", null, null, this);
            obj.set_taborder("90");
            obj.set_text("등록일자");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx06", "absolute", "523", "35", "100", "25", null, null, this);
            obj.set_taborder("91");
            obj.set_text("조회수");
            obj.set_cssclass("styFormItemCap");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("staXxxx07", "absolute", "110", "59", null, null, "11", "180", this);
            obj.set_taborder("92");
            obj.set_cssclass("styFormItemEntity");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtBULT_CNTT", "absolute", "112", "61", null, null, "13", "182", this);
            obj.set_taborder("93");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1000");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_NOTICE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtNTCE_SBJT", "absolute", "112", "13", null, "21", "13", null, this);
            obj.set_taborder("94");
            obj.set_imemode("alpha");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_NOTICE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_NAME", "absolute", "112", "37", "146", "21", null, null, this);
            obj.set_taborder("95");
            obj.set_imemode("alpha");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_NOTICE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtINST_DATE", "absolute", "360", "37", "162", "21", null, null, this);
            obj.set_taborder("96");
            obj.set_imemode("alpha");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_NOTICE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEMPL_CONT", "absolute", "624", "37", null, "21", "13", null, this);
            obj.set_taborder("97");
            obj.set_imemode("alpha");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormItemText");
            obj.getSetter("binddataset").set("dsTM_NOTICE");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFL_ATTACH", "absolute", "8", null, null, "140", "8", "8", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("98");
            obj.set_binddataset("dsFL_ATTACH");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_autofittype("col");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"160\"/><Column size=\"86\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"첨부파일\"/><Cell col=\"1\" text=\"다운로드\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" style=\", 1, '#d7f1eeff', 2, '#d9f9aeff',3,'#e6e6e6ff'));align:left;\" text=\"bind:LFIL_NAME\"/><Cell col=\"1\" displaytype=\"button\" edittype=\"button\" text=\"파일 다운로드\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 790, 530, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("comFileUploadDiv");
            		p.style.set_background("white");
            		p.style.set_border("2 solid #808080ff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("txtREMK_100X_value","txtBULT_CNTT","value","dsTM_NOTICE","BULT_CNTT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("edtCOMM_ENNM_value","edtNTCE_SBJT","value","dsTM_NOTICE","NTCE_SBJT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edtEMPL_NAME","value","dsTM_NOTICE","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edtINST_DATE","value","dsTM_NOTICE","INST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edtEMPL_CONT","value","dsTM_NOTICE","EMPL_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("TMMA0220P01.xfdl", "script::lib_script_common.xjs");
        this.registerScript("TMMA0220P01.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	TMMA0210P01 다중첨부 관리 영역
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.07.29		chg			Initial Created. [다중 첨부 로직 있음]
         *   2016.09.26		김준수		주석 수정.
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

        //일반 함수에서는 dsFL_ATTACH 접근시  this.mobjds 로 사용
        this.mobjds = this.parent.dsFL_ATTACH;

        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FileDivInit = function () {

        	//파일업로드팝업창의 후처리에서 이 페이지를 호출하면, 인스턴스를 새로 만들기 때문에
        	//최초 실행됐을때 기록한 값을 가져올수 없다.
        	//업무화면 전역변수에 기록해야 한다.
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
            this.txtBULT_CNTT.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.grdFL_ATTACH.addEventHandler("oncellclick", this.grdFL_ATTACH_oncellclick, this);

        };

        this.loadIncludeScript("TMMA0220P01.xfdl");

       
    };
}
)();
