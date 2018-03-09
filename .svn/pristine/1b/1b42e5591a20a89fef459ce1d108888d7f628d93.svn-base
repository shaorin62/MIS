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
                this.set_name("web_test");
                this.set_classname("web_test");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00", "absolute", "1.46%", "141", null, "350", "31.74%", null, this);
            obj.set_taborder("0");
            obj.style.set_border("1 solid #385d8aff");
            this.addChild(obj.name, obj);

            obj = new Button("btn02", "absolute", "13", "81", "235", "51", null, null, this);
            obj.set_taborder("1");
            obj.set_text("2. 임베딩전달\r\ntarget : iframe, (크롬브라우저 미지원)");
            this.addChild(obj.name, obj);

            obj = new Button("btn01", "absolute", "13", "5", "234", "51", null, null, this);
            obj.set_taborder("2");
            obj.set_text("1. 팝업형태전달\r\ntarget : _blank");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("web_test");
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
        this.registerScript("GW_IF_new.xfdl", function() {
        var userID = "40060";   //로그인 사번
        var Document = "";
        	Document += "		<exchangeableDocument>                                      ";  //고정
        	Document += "			<documentInformation>                                   ";  //고정
        	Document += "				<documentType>huga</documentType>                   ";    //연계양식 구분(휴가원:huga)
        	Document += "				<documentID>H-21321-20140924090856149</documentID>  ";    //연계 Key(휴가자사번, 일련번호)
        	Document += "				<createTime>2014/09/24 09:08:56</createTime>        ";    //전송시간
        	Document += "				<modifiedTime>2014/09/24 09:08:56</modifiedTime>    ";    //수정시간(상동)
        	Document += "				<createSystem>인사</createSystem>                   ";    //고정(인사시스템)
        	Document += "				<createServer>intra.ktcu.or.kr</createServer>       ";    //고정(인사 URL 경로)
        	Document += "				<creator>이재원</creator>                           ";    //기안자명-로그사원명
        	Document += "				<deptName>경북회원업무팀</deptName>                 ";    //기안자부서 - 로그인 부서명
        	Document += "				<subject>휴가원(이재원)</subject>                   ";    //기안문 제목
        	Document += "				<TIME_TERM />                                       ";    //고정
        	Document += "			</documentInformation>                                  ";    //고정
        	Document += "			<processInformation>                                    ";    //고정
        	Document += "				<destinationSystem>SmartFlow XF</destinationSystem> ";    //고정
        	Document += "				<recipient>21321</recipient>                        ";    //로그인 사번
        	Document += "				<documentStatus>create</documentStatus>             ";    //고정
        	Document += "			</processInformation>                                   ";    //고정
        	Document += "			<documentDescription>                                   ";    //고정
        	Document += "				<work>                                              ";    //고정
        	Document += "					<work_manage>                                   ";    //양식별 고정
        	Document += "						<job_name />                                ";    //고정
        	Document += "						<dept_name>경북회원업무팀</dept_name>       ";    //기안자 부서
        	Document += "					</work_manage>                                  ";    //양식별 고정
        	Document += "					<work_ref />                                    ";    //양식별 고정
        	Document += "					<work_item>                                     ";    //고정
        	Document += "						<hugaType>연차(오후반일)</hugaType>         ";    //휴가종류
        	Document += "						<syear>2014</syear>                         ";    //휴가시작년도
        	Document += "						<smonth>9</smonth>                          ";    //휴가시작월
        	Document += "						<sday>26</sday>                             ";    //휴가시작일
        	Document += "						<eyear>2014</eyear>                         ";    //휴가종료년도
        	Document += "						<emonth>9</emonth>                          ";    //휴가종료월
        	Document += "						<eday>26</eday>                             ";    //휴가종료일
        	Document += "						<totalDay>0.5</totalDay>                    ";    //휴가일수
        	Document += "						<reason>가사</reason>                       ";    //휴가사유
        	Document += "						<etc>기타</etc>                             ";    //비고
        	Document += "					</work_item>                                    ";    //고정
        	Document += "				</work>                                             ";    //고정
        	Document += "			</documentDescription>                                  ";    //고정
        	Document += "		</exchangeableDocument>                                     ";    //고정

        /* WebBrowser컴포넌트 없이 post 전달 */
        this.btn01_onclick = function(obj,e)
        {
        	if(nexacro.Browser == "Runtime"){
        		alert("웹브라우저 환경에서 동작가능합니다.");
        		return;
        	}

        	var reportParam = {userID:userID,Document:Document}; //POST로 넘겨줄값(SERVER VAR VS CLIENT VALUE)
        	this.frmSubmit(document, 'http://172.21.52.21/jsp/gian/gian2.jsp', reportParam,"_blank");
        }

        /* WebBrowser컴포넌트 임베딩형태 post 전달 (*제약:하나의폼에 한개의 webbrowser컴포넌트만 되도록 설계됨/크롬브라우저는 브라우저특성-불가)*/
        this.btn02_onclick = function(obj,e)
        {
        	if(nexacro.Browser == "Runtime"){
        		alert("웹브라우저 환경에서 동작가능합니다.");
        		return;
        	}
        	
        	//WebBrowser컴포넌트에 띄우기 위해서는 target에 고유한 ID을 입력합니다. (ex:wb0)
        	var reportParam = {userID:userID,Document:Document}; //POST로 넘겨줄값
        	this.frmSubmit(document, 'http://nate.com', reportParam, "wb0", this.WebBrowser00);
        }

        /* 
         * 함수 : html form 태그 동적생성후 post값을 설정된 url로 submit함 
         * 동적 Submit 사용예 (Runtime환경 구동불가)
         * objDoc : document (dom Object)
         * submitSrc : submit 대상 src
         * param  : {param1:'abc',param2:'123'}
         * target : _self || _blank
         * objWebBrowser : 임베딩할 webBrowser컴포넌트 object
         */
        this.frmSubmit = function(objDoc,submitSrc,param,target,objWebBrowser)
        {
        	var frm;
        	
        	if(target != "_self" && target != "_blank"){
        		document.getElementById(objWebBrowser._unique_id).setAttribute( 'name', target );
        		document.getElementById(objWebBrowser._unique_id).setAttribute( 'id', target );
        		//브라우저 name attribure추가함 (*ie경우 예외처리존재)
        		if (nexacro.Browser == "IE" && nexacro.BrowserVersion <= 9) {
        			document.getElementById(objWebBrowser._unique_id + "_WebBrowser").contentWindow.name = target;
        		}
        	}
        	
        	if(objDoc.getElementById("dummy") == null){
        		frm = this.create_form(objDoc,'dummy', 'POST', submitSrc, target);
        	}else{
        		frm = objDoc.getElementById("dummy");
        	}
        	
        	var paramCnt = 0;
        	if (nexacro.Browser == "IE" && nexacro.BrowserVersion <= 9) {
        		//Object.keys 함수 추가
        		if (!Object.keys) {
        		  Object.keys = function(param) {
        			var keys = [];

        			for (var i in param) {
        			  if (param.hasOwnProperty(i)) {
        				keys.push(i);
        			  }
        			}
        			return keys;
        		  };
        		}
        	}
        	
        	paramCnt = Object.keys(param).length;

        	for(var i=0;i<paramCnt;i++)
        	{
        		var key = Object.keys(param)[i];
        		this.add_input(objDoc,frm,key,param[key]);
        	}
        	objDoc.body.insertBefore(frm,null);
        	frm.submit();

        	//동적생성한 form 삭제
        	objDoc.body.removeChild(frm);
        }

        // 동적으로 form 생성
        this.create_form = function(objDoc,nm,mt,ac,tg) 
        {    
        	var fm = objDoc.createElement("form");
        	fm.name = nm;
        	fm.id = nm;
        	fm.method = mt;
        	fm.action = ac;
        	fm.target = tg;
        	return fm;
        }

        // 동적으로 input 객체 생성
        this.add_input = function(objDoc,fm,nm,vu)
        {    
        	var input = objDoc.createElement("input");
        	input.type = "hidden";
        	input.name = nm;
        	input.value =  vu;
        	fm.insertBefore(input,null);
        	return fm;
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn02.addEventHandler("onclick", this.btn02_onclick, this);
            this.btn01.addEventHandler("onclick", this.btn01_onclick, this);

        };

        this.loadIncludeScript("GW_IF_new.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
