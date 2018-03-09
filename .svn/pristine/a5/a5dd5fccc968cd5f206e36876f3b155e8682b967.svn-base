(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            if (Form == this.constructor) {
                this.set_name("FILEUPLOAD");
                this.set_classname("FILEUPLOAD");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,973,676);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSMS", this);
            obj._setContents("<ColumnInfo><Column id=\"RECV_PHON\" size=\"11\" prop=\"default\" type=\"STRING\"/><Column id=\"SEND_PHON\" size=\"11\" prop=\"default\" type=\"STRING\"/><Column id=\"SEND_USID\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"SMSX_DESC\" size=\"80\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsEV_EMPLXM", this);
            obj._setContents("<ColumnInfo><Column id=\"CHEK_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"EVAL_CODE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"EDPT_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"TITL_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"POSI_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"EMAL_ADDR\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"PHON_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SEND_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SEND_GUBN\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQN_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CELL_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"EVAL_CODE\">2014001100002</Col><Col id=\"EMPL_NUMB\">21108</Col><Col id=\"EMPL_NAME\">정연욱</Col><Col id=\"EDPT_NAME\">사무정보화팀</Col><Col id=\"TITL_NAME\">사원</Col><Col id=\"POSI_NAME\">5급</Col><Col id=\"EMAL_ADDR\">21108@ktcu.or.kr</Col><Col id=\"PHON_NUMB\">01090012706</Col><Col id=\"CELL_NUMB\">01054972803</Col><Col id=\"SEND_DATE\">20150202</Col><Col id=\"SEND_GUBN\">10</Col><Col id=\"SEQN_NUMB\">1</Col><Col id=\"CHEK_YSNO\">0</Col></Row><Row><Col id=\"EVAL_CODE\">2014001100002</Col><Col id=\"EMPL_NUMB\">21411</Col><Col id=\"EMPL_NAME\">강인모</Col><Col id=\"EDPT_NAME\">사무정보화팀</Col><Col id=\"TITL_NAME\">사원</Col><Col id=\"POSI_NAME\">5급</Col><Col id=\"EMAL_ADDR\">21411@ktcu.or.kr</Col><Col id=\"PHON_NUMB\">01089875214</Col><Col id=\"CELL_NUMB\">01054972803</Col><Col id=\"SEND_DATE\">20150202</Col><Col id=\"SEND_GUBN\">10</Col><Col id=\"SEQN_NUMB\">2</Col><Col id=\"CHEK_YSNO\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new TextArea("txtSSMS_MESG", "absolute", "1.03%", "390", null, "228", "63.62%", null, this);
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("80");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Button("btnSmsSend", "absolute", "13.87%", "649", null, "23", "75.85%", null, this);
            obj.set_taborder("3");
            obj.set_text("SMS전송");
            obj.set_cssclass("styTextButtonBizProc");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEV_EMPLXM", "absolute", "37.82%", "397", null, null, "0.62%", "55", this);
            obj.set_cssclass("styGrid01");
            obj.set_taborder("4");
            obj.set_binddataset("dsEV_EMPLXM");
            obj.set_wheelscrollrow("1");
            obj.set_autoenter("select");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellsizebandtype("allband");
            obj.getSetter("autofitminwidth").set("1035");
            obj.set_tooltiptype("inplace");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"72\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"171\"/><Column size=\"123\"/></Columns><Rows><Row size=\"23\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"text\" text=\"부서명\"/><Cell col=\"2\" displaytype=\"text\" text=\"사원번호\"/><Cell col=\"3\" displaytype=\"text\" text=\"사원명\"/><Cell col=\"4\" displaytype=\"text\" text=\"직위\"/><Cell col=\"5\" displaytype=\"text\" text=\"직급\"/><Cell col=\"6\" displaytype=\"text\" text=\"E-MAIL\"/><Cell col=\"7\" displaytype=\"text\" text=\"전화번호(휴대폰)\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;\" text=\"bind:CHEK_YSNO\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:left;background: ;\" text=\"bind:EDPT_NAME\" editlimit=\"50\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center;background: ;\" text=\"bind:EMPL_NUMB\" editlimit=\"10\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left middle;\" text=\"bind:EMPL_NAME\" editlimit=\"50\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:left;background: ;\" text=\"bind:TITL_NAME\" editlimit=\"4\"/><Cell col=\"5\" displaytype=\"text\" style=\"align:left middle;\" text=\"bind:POSI_NAME\" editlimit=\"4\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"normal\" style=\"align:left middle;\" text=\"bind:EMAL_ADDR\" editlimit=\"100\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"normal\" style=\"align:center;background: ;\" text=\"bind:PHON_NUMB\" mask=\"expr:comp.parent.lookupFunc('fnc_Decode').call(comp.parent.lookupFunc('fnc_Length').call(PHON_NUMB), 10, '###-###-####', 11, '###-####-####', '##########')\" editlimit=\"50\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtSSMS_MESG00", "absolute", "1.03%", "22", null, "228", "63.62%", null, this);
            obj.set_taborder("5");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("80");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Button("btnSmsSend00", "absolute", "13.87%", "281", null, "23", "74.51%", null, this);
            obj.set_taborder("6");
            obj.set_text("SMS 단건전송");
            obj.set_cssclass("styTextButtonBizProc");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "51.8%", "140", null, "41", "35.66%", null, this);
            obj.set_taborder("7");
            obj.set_value("21108");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "52%", "82", null, "41", "2.57%", null, this);
            obj.set_taborder("8");
            obj.set_value("01012345678");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "52%", "196", null, "41", "2.57%", null, this);
            obj.set_taborder("9");
            obj.set_value("01022223333");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 973, 676, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FILEUPLOAD");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SMSexample.xfdl", "script::lib_script_common.xjs");
        this.registerScript("SMSexample.xfdl", function() {

        /*************************
        *  공통 Script Include   *
        **************************/
        //include "script::lib_script_common.xjs"

        this.fn_OnSend = function(obj,e)
        {

        
        	if (this.fnc_Length(this.fnc_Trim(this.txtSSMS_MESG.value)) < 1) {
        		this.fnc_Message("M1046", "SMS 내역을 입력하세요");
        		this.txtSSMS_MESG.setFocus();
        		return;
        	}

        	this.fn_DsSMS();

        	var sMethodName = "SENDSMS00";
        	var sInDataSet = "dsSMS=dsSMS:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, 'ComSMS', sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
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

        /*------------------------------------+
        |  Transaction 후 Post Process!       |
        +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SENDSMS00") {
        		this.fnc_Message("M1046", "SMS발신성공"); //[@] 를 정상적으로 생성 하였습니다!
        	}
        }

        /*-------------------------+
        | SMS 데이타셋을 만든다    |
        +--------------------------*/
        this.fn_DsSMS = function () {

        	this.fnc_DatasetClear("dsSMS");

        	for (var i = 0; i < this.dsEV_EMPLXM.getRowCount(); i++) {
        	
        		// 체크된항목은 sms발송
        		if (this.dsEV_EMPLXM.getColumn(i, "CHEK_YSNO") == "1") {
        		 
        			var nRow = this.dsSMS.addRow();
        			this.dsSMS.setColumn(nRow, "SEND_PHON", this.fnc_Replace(this.dsEV_EMPLXM.getColumn(i, "CELL_NUMB"), "-", "")); //보내는 사람
        			this.dsSMS.setColumn(nRow, "SEND_USID", this.dsEV_EMPLXM.getColumn(i, "EMPL_NUMB")); //받는사람ID
        			this.dsSMS.setColumn(nRow, "SMSX_DESC", this.txtSSMS_MESG.value); //메세지
        			this.dsSMS.setColumn(nRow, "RECV_PHON", this.dsEV_EMPLXM.getColumn(i, "PHON_NUMB")); //받는사람
        		
        		}
        		
        	}
        	
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SENDSMS00") {
        	
        		sReturnString  = " pgm=" 			 + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		 + this.fnc_Quote(sKind);
        		
        	}

        	return sReturnString;
        	
        }
        this.fn_OnSendSingle = function(obj,e)
        {
        	if (this.fnc_Length(this.fnc_Trim(this.txtSSMS_MESG00.value)) < 1) {
        		this.fnc_Message("M1046", "SMS 내역을 입력하세요");
        		this.txtSSMS_MESG.setFocus();
        		return;
        	}

        	this.fn_DsSMSingle();

        	var sMethodName = "SENDSMS00";
        	var sInDataSet = "dsSMS=dsSMS:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, 'ComSMS', sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        }

        /*-------------------------+
        | SMS 데이타셋을 만든다    |
        +--------------------------*/
        this.fn_DsSMSingle = function () {

        	this.fnc_DatasetClear("dsSMS");

        	var nRow = this.dsSMS.addRow();
        	this.dsSMS.setColumn(nRow, "SEND_PHON", this.fnc_Replace(this.Edit01.value, "-", "")); //보내는 사람
        	this.dsSMS.setColumn(nRow, "SEND_USID", this.Edit00.value); //받는사람ID
        	this.dsSMS.setColumn(nRow, "SMSX_DESC", this.txtSSMS_MESG00.value); //메세지
        	this.dsSMS.setColumn(nRow, "RECV_PHON", this.fnc_Replace(this.Edit02.value, "-", "")); //받는사람

        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnSmsSend.addEventHandler("onclick", this.fn_OnSend, this);
            this.grdEV_EMPLXM.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.btnSmsSend00.addEventHandler("onclick", this.fn_OnSendSingle, this);

        };

        this.loadIncludeScript("SMSexample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
