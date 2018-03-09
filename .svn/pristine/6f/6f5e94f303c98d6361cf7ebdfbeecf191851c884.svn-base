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
                this.set_name("GW_IF");
                this.set_classname("GW_IF");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,679,403);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00", "absolute", "8", "8", null, null, "597", "365", this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "276", "37", "164", "55", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 679, 403, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("GW_IF");
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
        this.registerScript("GW_IF.xfdl", function() {

        this.fn_FormLoad = function(obj,e) {

        

        	this.WebBrowser00.set_url("http://172.100.11.130:8230/jsp/gian/gian.jsp?userID=" + userID + "&Document=" + Document);
        //	this.WebBrowser00.set_url("http://172.100.11.130:8230/jsp/gian/gian.jsp?userID=" + userID);

        	//this.WebBrowser00.set_url("http://www.nate.com");
        	this.WebBrowser00.show();
        	trace("load");

        }

        this.WebBrowser00_onloadcompleted = function(obj,e)
        {
        	trace("WebBrowser00_onloadcompleted");
        // 	var arrData = [10,20,30,40,50,60,70,80,90,100,10,20];
        // 	this.WebBrowser00.callMethod("fn_drawChart",arrData);
        }

        this.WebBrowser00_onusernotify = function(obj,e)
        {
        	trace("WebBrowser00_onusernotify");
        }
        this.fn_GWCall = function(obj,e) {

        	var userID = "40060";
        	var Document = "";
        		Document += "		<exchangeableDocument>                                      ";
        		Document += "			<documentInformation>                                   ";
        		Document += "				<documentType>huga</documentType>                   ";
        		Document += "				<documentID>H-21321-20140924090856149</documentID>  ";
        		Document += "				<createTime>2014/09/24 09:08:56</createTime>        ";
        		Document += "				<modifiedTime>2014/09/24 09:08:56</modifiedTime>    ";
        		Document += "				<createSystem>인사</createSystem>                   ";
        		Document += "				<createServer>intra.ktcu.or.kr</createServer>       ";
        		Document += "				<creator>이재원</creator>                           ";
        		Document += "				<deptName>경북회원업무팀</deptName>                 ";
        		Document += "				<subject>휴가원(이재원)</subject>                   ";
        		Document += "				<TIME_TERM />                                       ";
        		Document += "			</documentInformation>                                  ";
        		Document += "			<processInformation>                                    ";
        		Document += "				<destinationSystem>SmartFlow XF</destinationSystem> ";
        		Document += "				<recipient>21321</recipient>                        ";
        		Document += "				<documentStatus>create</documentStatus>             ";
        		Document += "			</processInformation>                                   ";
        		Document += "			<documentDescription>                                   ";
        		Document += "				<work>                                              ";
        		Document += "					<work_manage>                                   ";
        		Document += "						<job_name />                                ";
        		Document += "						<dept_name>경북회원업무팀</dept_name>       ";
        		Document += "					</work_manage>                                  ";
        		Document += "					<work_ref />                                    ";
        		Document += "					                                                ";
        		Document += "					<work_item>                                     ";
        		Document += "						<!-- 휴가종류 -->                           ";
        		Document += "						<hugaType>연차(오후반일)</hugaType>         ";
        		Document += "						<!-- 휴가시작년도 -->                       ";
        		Document += "						<syear>2014</syear>                         ";
        		Document += "						<!-- 휴가시작월 -->                         ";
        		Document += "						<smonth>9</smonth>                          ";
        		Document += "						<!-- 휴가시작일 -->                         ";
        		Document += "						<sday>26</sday>                             ";
        		Document += "						<!-- 휴가종료년도 -->                       ";
        		Document += "						<eyear>2014</eyear>                         ";
        		Document += "						<!-- 휴가종료월 -->                         ";
        		Document += "						<emonth>9</emonth>                          ";
        		Document += "						<!-- 휴가종료일 -->                         ";
        		Document += "						<eday>26</eday>                             ";
        		Document += "						<!-- 휴가일수 -->                           ";
        		Document += "						<totalDay>0.5</totalDay>                    ";
        		Document += "						<!-- 휴가사유 -->                           ";
        		Document += "						<reason>가사</reason>                       ";
        		Document += "						<!-- 기타 -->                               ";
        		Document += "						<etc>기타</etc>                             ";
        		Document += "					</work_item>                                    ";
        		Document += "				</work>                                             ";
        		Document += "			</documentDescription>                                  ";
        		Document += "		</exchangeableDocument>                                     ";	
        		
        	this.WebBrowser00.set_url("http://172.100.11.130:8230/jsp/gian/gian.jsp");

        	var doc = this.WebBrowser00.getProperty("document");

        	var htmlArea1 = doc.callMethod("getElementById" ,"userID");
        	var htmlArea2 = doc.callMethod("getElementById" ,"Document");

        	htmlArea1.setProperty("value", userID);
        	htmlArea2.setProperty("value", Document);

        	var htmlbtn = doc.callMethod("getElementById" ,"popup1");
        	htmlbtn.callMethod("click");

        
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_FormLoad, this);
            this.WebBrowser00.addEventHandler("onloadcompleted", this.WebBrowser00_onloadcompleted, this);
            this.WebBrowser00.addEventHandler("onusernotify", this.WebBrowser00_onusernotify, this);
            this.Button00.addEventHandler("onclick", this.fn_GWCall, this);

        };

        this.loadIncludeScript("GW_IF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
