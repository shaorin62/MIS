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
                this.set_name("comMessage");
                this.set_classname("comMessage");
                this._setFormPosition(0,0,604,224);
            }
            this.getSetter("inheritanceid").set("");
            this.style.set_border("2 none #ccccccff white");
            this.style.set_bordertype("normal 0 0");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("imgMain", "absolute", "0", "0", "600", "220", null, null, this);
            obj.set_taborder("0");
            obj.set_image("URL('theme://imgForm/imgMsgYN.gif')");
            obj.set_cssclass("styFormImageDisplay");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk", "absolute", "426", "183", "75", "23", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel", "absolute", "503", "183", "75", "23", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("styTextButtonBizProc");
            this.addChild(obj.name, obj);

            obj = new TextArea("edtMessage", "absolute", "236", "25", "340", "145", null, null, this);
            obj.set_taborder("3");
            obj.style.set_border("1px none #bfbfbfb3");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 604, 224, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("comMessage");
            		p.getSetter("inheritanceid").set("");
            		p.style.set_border("2 none #ccccccff white");
            		p.style.set_bordertype("normal 0 0");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("comMessage.xfdl", function() {
        /*******************************************************************************************
         2014.08.01 김석두 (최초 개발)
         본 화면은 시스템의 메시지를 보여주는 화면입니다.
         
         최초 생성 후 오라클 사용자 오류(-20000) 체크 및 Yes/No 체크는 아직 해 보지 않음
         오류 발생 시 바로 신고 요망...(2014.08.01 김석두)
         *******************************************************************************************/

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sMESSAGETYPE = ""; //Message Type

        
        /*---------------------------+
         |  01.Form Load 時 화면 처리 |
         -----------------------------*/
        this.fn_FormLoadSetting = function (obj,e)
        {
        	trace("this.parent.sMessageID="+this.parent.sMessageID);

        	this.fn_FormAlin();
        }

        /*------------------------------------------------------------------+
         |  Message의 Option('OK', 'YN')에 따라 Form의 Control을 재배치한다. |
         --------------------------------------------------------------------*/
        this.fn_FormAlin = function ()
        {
        	// 서버에서 내려온 Error 내용을 그냥 그대로 Display 한다.
        	if (this.sMESSAGEID == "SERVERMSG") 
        	{
        		this.sMESSAGETYPE = "OK";

        		/******************************************************************************
        		 * 하단의 내용을 오라클 9i 오류 시 오후 라인 출처 제거 후 오후 메세지만 처리   *
        		 * 2014. 08. 01 (김석두) - 오라클 10g는 별 의미 없음 - 향후 오류 메세지에 따라 *
        		 * edtMessage.value = sARG1; 이렇게 수정해도 상관 없음                          *
        		 *******************************************************************************/

        		// Oracle User Define Error Check
        		var sPos = this.sARG1.indexOf("ORA-20000");
        		this.sARG1 = this.sARG1.split("\\n").join("\n");
        		this.sARG1 = this.sARG1.split("ORA-20000: ").join("");
        		var sPos2 = this.sARG1.indexOf("ORA-");

        		// 오라클 사용자 정의 에러
        		if (sPos >= 0) 
        		{
        			// 오류 앞 부분만 DISPLAY 처리
        			this.edtMessage.set_value(this.sARG1.substr(0, sPos2));

        			// 일반 오류
        		}
        		else 
        		{
        			if (this.sARG1.trim().length > 0) 
        			{
        				this.edtMessage.set_value(this.sARG1);
        			}
        			else 
        			{
        				this.edtMessage.set_value('시스템에서 지원되지 않는 문자가 포함되어 있습니다.');
        			}
        		}

        		// Message ID에 따른 화면 처리
        	}
        	else 
        	{
        	

        		var iFindRow = application.dsMessage.findRow("MSGE_CODE", this.parent.sMESSAGEID);
        		if(iFindRow < 0){
        			var sMessage = "해당 메시지가 없습니다";
        		}else{
        			trace("iFindRow="+iFindRow);
        			var sMessage = application.dsMessage.getColumn(iFindRow, "MSGE_CNTT");
        			trace("sMessage="+sMessage);
        			var iIndex = sMessage.indexOf("@");
        			trace("iIndex="+iIndex);
        			this.sMESSAGETYPE = application.dsMessage.getColumn(iFindRow, "MSKN_CODE");
        		}

        		if (iIndex == -1) 
        		{
        			this.edtMessage.set_value(sMessage.split("\\n").join("\n"));
        		}
        		else 
        		{
        			this.edtMessage.set_value(this.fn_SetArgument(sMessage, this.parent.sARG1, this.parent.sARG2, this.parent.sARG3, this.parent.sARG4, this.parent.sARG5));
        		}
        	}

        	if (this.sMESSAGETYPE == "OK") 
        	{
        		this.imgMain.set_image("theme://imgForm/imgMsgOK.gif");
        		this.btnOk.set_visible(false);
        		this.btnCancel.Visible = true;
        		this.btnCancel.set_text("확인");
        		this.btnCancel.setFocus();
        	}
        	else 
        	{
        		this.imgMain.set_image("theme://imgForm/imgMsgYN.gif");
        		this.btnOk.set_visible(true);
        		this.btnCancel.set_visible(true);
        		this.btnOk.set_text("예");
        		this.btnCancel.set_text("아니오");
        		this.btnOk.setFocus();
        	}
        }

        // -------------------------------------------------------------------------------------------------
        // Message에 '@'인자 삽입
        // -------------------------------------------------------------------------------------------------
        this.fn_SetArgument = function (sSendMessage,sArg1,sArg2,sArg3,sArg4,sArg5)
        {
        	var sMessage = "";
        	var arrSplit = new Array();
        	var iInner = 0;
        	var sEval = "";

        	arrSplit = sSendMessage.split("@");

        	for (var i = 0; i < arrSplit.length; i++) 
        	{
        		iInner = i + 1;

        		if (iInner < arrSplit.length) 
        		{
        			sEval = eval("sArg" + iInner);
        		}
        		else 
        		{
        			sEval = "";
        		}

        		sMessage += arrSplit[i] + sEval;
        	}

        	return sMessage;
        }

        // -------------------------------------------------------------------------------------------------
        // 확인
        // -------------------------------------------------------------------------------------------------
        this.btnOk_onclick = function (obj,e)
        {
        	this.close(true);
        }

        // -------------------------------------------------------------------------------------------------
        // 취소(MessageType이 'OK'이면 확인)
        // -------------------------------------------------------------------------------------------------
        this.btnCancel_onclick = function (obj,e)
        {
        	if (this.sMESSAGETYPE == "OK") 
        	{
        		this.close(true);
        	}
        	else 
        	{
        		this.close(false);
        	}
        }

        // -------------------------------------------------------------------------------------------------
        // Form에 Key처리
        // -------------------------------------------------------------------------------------------------
        this.fn_KeyDown = function (obj,e)
        {
        	// Esc
        	if (e.keycode == 27) 
        	{
        		if (this.sMESSAGETYPE == "OK") 
        		{
        			this.close(true);
        		}
        		else 
        		{
        			this.close(false);
        		}
        	}
        	else if (e.keycode == 13) 
        	{
        		if (e.fromobject.name == "btnOk") 
        		{
        			this.close(true);
        		}
        		else if (e.fromobject.name == "btnCancel") 
        		{
        			if (this.sMESSAGETYPE == "OK") 
        			{
        				this.close(true);
        			}
        			else 
        			{
        				this.close(false);
        			}
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onkeydown", this.fn_KeyDown, this);
            this.btnOk.addEventHandler("onclick", this.btnOk_onclick, this);
            this.btnCancel.addEventHandler("onclick", this.btnCancel_onclick, this);

        };

        this.loadIncludeScript("comMessage.xfdl");

       
    };
}
)();
