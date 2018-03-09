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
            obj = new Dataset("dsEV_EMPLXM", this);
            obj._setContents("<ColumnInfo><Column id=\"CHEK_YSNO\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"EVAL_CODE\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NUMB\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"EDPT_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"TITL_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"POSI_NAME\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"EMAL_ADDR\" size=\"50\" prop=\"default\" type=\"STRING\"/><Column id=\"PHON_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"SEND_DATE\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"SEND_GUBN\" size=\"4\" prop=\"default\" type=\"STRING\"/><Column id=\"SEQN_NUMB\" size=\"22\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CELL_NUMB\" size=\"20\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"EVAL_CODE\">2014001100002</Col><Col id=\"EMPL_NUMB\">h40030</Col><Col id=\"EMPL_NAME\">정연욱</Col><Col id=\"EDPT_NAME\">사무정보화팀</Col><Col id=\"TITL_NAME\">사원</Col><Col id=\"POSI_NAME\">5급</Col><Col id=\"EMAL_ADDR\">h40030@ktcu.or.kr</Col><Col id=\"PHON_NUMB\">01090012706</Col><Col id=\"CELL_NUMB\">01054972803</Col><Col id=\"SEND_DATE\">20150202</Col><Col id=\"SEND_GUBN\">10</Col><Col id=\"SEQN_NUMB\">1</Col><Col id=\"CHEK_YSNO\">0</Col></Row><Row><Col id=\"EVAL_CODE\">2014001100002</Col><Col id=\"EMPL_NUMB\">h40024</Col><Col id=\"EMPL_NAME\">강인모</Col><Col id=\"EDPT_NAME\">사무정보화팀</Col><Col id=\"TITL_NAME\">사원</Col><Col id=\"POSI_NAME\">5급</Col><Col id=\"EMAL_ADDR\">21411@ktcu.or.kr</Col><Col id=\"PHON_NUMB\">01089875214</Col><Col id=\"CELL_NUMB\">01054972803</Col><Col id=\"SEND_DATE\">20150202</Col><Col id=\"SEND_GUBN\">10</Col><Col id=\"SEQN_NUMB\">2</Col><Col id=\"CHEK_YSNO\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMail", this);
            obj._setContents("<ColumnInfo><Column id=\"Subject\" size=\"200\" prop=\"default\" type=\"STRING\"/><Column id=\"Contents\" size=\"3000\" prop=\"default\" type=\"STRING\"/><Column id=\"Receiver\" size=\"500\" prop=\"default\" type=\"STRING\"/><Column id=\"Sender\" size=\"50\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdEV_EMPLXM", "absolute", "32.89%", "413", null, null, "5.55%", "39", this);
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

            obj = new Edit("Edit00", "absolute", "41.93%", "140", null, "41", "12.85%", null, this);
            obj.set_taborder("7");
            obj.set_value("메일테스트단일건");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "42.14%", "82", null, "41", "45.73%", null, this);
            obj.set_taborder("8");
            obj.set_value("h40030");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "42.14%", "196", null, "41", "12.44%", null, this);
            obj.set_taborder("9");
            obj.set_value("하하하하하하하하하하하");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtEMAL_MESG", "absolute", "2.77%", "240", null, null, "69.58%", "238", this);
            obj.set_taborder("10");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1000");
            obj.set_cssclass("styFormItemText");
            this.addChild(obj.name, obj);

            obj = new Button("btnEmailSend", "absolute", "12.54%", null, null, "23", "78.62%", "164", this);
            obj.set_taborder("11");
            obj.set_text("이메일전송");
            obj.set_cssclass("styTextButtonBizProc");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Button("btnEmailSingleSend", "absolute", "98", "160", "118", "23", null, null, this);
            obj.set_taborder("12");
            obj.set_text("이메일단건전송");
            obj.set_cssclass("styTextButtonBizProc");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "33.92%", "136", null, "43", "58.79%", null, this);
            obj.getSetter("taborder").set("13");
            obj.set_text("제목");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "33.92%", "192", null, "43", "58.79%", null, this);
            obj.getSetter("taborder").set("14");
            obj.set_text("내용");
            this.addChild(obj.name, obj);

            obj = new Static("st", "absolute", "33.71%", "81", null, "43", "58.99%", null, this);
            obj.getSetter("taborder").set("15");
            obj.set_text("받는사람");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "33.92%", "248", null, "161", "6.17%", null, this);
            obj.getSetter("taborder").set("16");
            obj.set_text("\r\n* 메일전송시 필요한 컬럼은 4개 (제목/내용/수신자/발신자)\r\n\r\n  다중 건 전송시 제목은 dsMail 데이터셋에 추가할때 넣어주면 됩니다.\r\n\r\n  필요시 단일건처럼 edit box를 만들어서 입력해도 상관없습니다.\r\n  \r\n  TransactionCall시 this.sPACKAGENAME 대신 \"ComSMS\"를 넣어줍니다.\r\n \r\n  Button 명으로 구분하여 Mail과 SMS를 같이 사용해도 됩니다.");
            obj.style.set_color("maroon");
            obj.style.set_align("left top");
            obj.style.set_font("bold 9 arial");
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
        this.addIncludeScript("MAILexample.xfdl", "script::lib_script_common.xjs");
        this.registerScript("MAILexample.xfdl", function() {

        /*************************
        *  공통 Script Include   *
        **************************/
        //include "script::lib_script_common.xjs"

        this.fn_OnSend = function(obj,e)
        {

        	if (this.fnc_Length(this.fnc_Trim(this.txtEMAL_MESG.value)) < 1) {
        		this.fnc_Message("M1046", "메일 내용을 입력하세요");
        		this.txtEMAL_MESG.setFocus();
        		return;
        	}
        	
        	// 매일전송 데이타셋을 만든다
        	this.fn_DsMAIL(obj);
        	var sMethodName = "SENDMAIL00";
        	var sInDataSet = "dsMail=dsMail:U";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, "ComSMS", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        }

        /*-------------------------+
        | MAIL 데이타셋을 만든다   |
        +--------------------------*/
        this.fn_DsMAIL = function (obj) {

        	this.fnc_DatasetClear("dsMail");
        	
        	//다중 전송
        	if (obj.name == "btnEmailSend") {
        	
        		for (var i = 0; i < this.dsEV_EMPLXM.getRowCount(); i++) {
        		
        			// 체크된항목은 메일발송
        			if (this.dsEV_EMPLXM.getColumn(i, "CHEK_YSNO") == "1") {
        			
        				var nRow = this.dsMail.addRow();
        				this.dsMail.setColumn(nRow, "Subject", "테스트스트관련공지"); //제목
        				this.dsMail.setColumn(nRow, "Contents", this.txtEMAL_MESG.value); //내용
        				this.dsMail.setColumn(nRow, "Receiver", this.dsEV_EMPLXM.getColumn(i, "EMPL_NUMB")); //받는사람
        				this.dsMail.setColumn(nRow, "Sender", 'h40046');//application.GBL_USERID); //보내는사람 ID
        				
        			}
        			
        		}
        		
        	//단일 전송
        	} else if (obj.name == "btnEmailSingleSend") {
        		
        		var nRow = this.dsMail.addRow();
        		this.dsMail.setColumn(nRow, "Subject",  this.Edit00.value); //제목
        		this.dsMail.setColumn(nRow, "Contents", this.Edit02.value); //내용
        		this.dsMail.setColumn(nRow, "Receiver", this.Edit01.value); //받는사람
        		this.dsMail.setColumn(nRow, "Sender", 'h40046');//application.GBL_USERID); //보내는사람 ID		
        			
        	}
        	
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SENDMAIL00") {
        	
        		sReturnString  = " pgm=" 			 + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		 + this.fnc_Quote(sKind);
        		
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

        /*------------------------------------+
        |  Transaction 후 Post Process!       |
        +-------------------------------------*/
        this.fn_PostProcess = function (sMethodName) {

        	if (sMethodName == "SENDMAIL00") {
        		this.fnc_Message("M1046", "MAIL 발신성공");
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grdEV_EMPLXM.addEventHandler("onheadclick", this.fn_GridSort, this);
            this.btnEmailSend.addEventHandler("onclick", this.fn_OnSend, this);
            this.btnEmailSingleSend.addEventHandler("onclick", this.fn_OnSend, this);

        };

        this.loadIncludeScript("MAILexample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
