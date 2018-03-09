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
                this.set_name("sample_approval_if_nds");
                this.set_titletext("정보파트 연동결재 I/F 4건");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">130</Col><Col id=\"name\">퇴직금지급결의서(PAYF0030I01-KHR130)</Col></Row><Row><Col id=\"code\">132</Col><Col id=\"name\">퇴직연금기준임금(DC)(PAYF0110I01-KHR132)</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsTM_APPROVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"documentID\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"documentType\" size=\"8\" prop=\"default\" type=\"STRING\"/><Column id=\"HtmlDocument\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"subject\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"recipient\" size=\"10\" prop=\"default\" type=\"STRING\"/><Column id=\"creator\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"documentStatus\" size=\"150\" prop=\"default\" type=\"STRING\"/><Column id=\"isUsedFile\" size=\"3\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "80", "130", null, "154", "586", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("0");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("6");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_text("정보파트 연동결재 I/F 4건 ");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("staSHRISSU_DATE", "absolute", "108", "161", "70", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("결재종류");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbAPP_CODE", "absolute", "192", "163", "293", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_displayrowcount("20");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_innerdataset("@dsCombo");

            obj = new Static("Static36", "absolute", "88", "61", "8", "41", null, null, this);
            obj.set_taborder("10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("11");
            obj.set_text("h 15");
            obj.style.set_background("#fb7b7b7a");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("12");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("14");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PROC", "absolute", "496", "163", "74", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_text("결재상신");
            obj.set_cssclass("btn_WF_Module");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("staSHRISSU_DATE00", "absolute", "108", "201", "70", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("시퀀스");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "192", "201", null, "20", "79.28%", null, this);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "21.15%", "201", null, "20", "76.66%", null, this);
            obj.set_taborder("16");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "22.24%", "201", null, "20", "73.29%", null, this);
            obj.set_taborder("5");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "27.04%", "201", null, "20", "69.25%", null, this);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("5");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("정보파트 연동결재 I/F 4건");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("sample_approval_if_nds.xfdl", "script::lib_script_common.xjs");
        this.registerScript("sample_approval_if_nds.xfdl", function() {
         /***************************************************************************************************
         * # Program: 	sample_approval_if_nds :: 정보파트 연동결재 I/F 4건 (본문 HTML)
         *   
         * HRME0010I01 (인사발령관리(상세)(전자결재)[I/F]
         * PAYF0030I01 (퇴직금지급결의서(전자결재)[I/F]
         * PAYF0030I02 (임원퇴직금지급결의서(전자결재)[I/F]
         * PAYF0110I01 (퇴직연금기준임금(DC)(전자결재)[I/F]
         *
         * 소스코드의 sXmlStr 만 복사해서 사용.
         *
         * ★★★ 해당 4개 프로그램에서 결재 본문 HTML 사용 후 삭제 처리 해주십시오. ★★★
         * USAGE : 결재 종류 선택 > 시퀀스 00001 부터 입력 > 결재 상신 버튼 클릭
         *         해당 결재 본문 html 미리보기 제공
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.12		KS			Initial Created.
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
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        
        /*-----------------------------------------------+
         | 2. 퇴직금지급결의서 KHR130 결재 본문 HTML |
         +-----------------------------------------------*/
        this.fn_apprProcess130 = function()
        {
        	var sXmlStr = "";
        							
        	/* 개발 시 DOCU_IDXX 과 APPR_SEQN 조합 -> 예제(KHR111-2016092700001) */ 
        	var sApprDocId	= this.Edit00.value + "-" +this.Edit01.value + this.Edit02.value;
        	
        	var sSubject 	= "퇴직금지급결의서(PAYF0030I01::"+sApprDocId; 
        		
        	sXmlStr  = "<style>";
        	sXmlStr  += "table { border-collapse:collapse; border-width:1px; border-color:black; border-style:solid;}";
        	sXmlStr  += "td { height:18px; font-size:12px; border-width:1px; border-color:black; border-style:solid;}";
        	sXmlStr  += ".linkTable td {font-size: 12px;}";
        	sXmlStr  += ".label1 { background-color:#DBDBDB; font-weight:bold; text-align:center; padding-right:5px; font-size:12px; height:18px;}";
        	sXmlStr  += ".label2 { background-color:#FFFFFF; text-align:left; padding-left:10px; font-size:12px; height:18px;}";
        	sXmlStr  += ".label3 { background-color:#FFFFFF; text-align:right; padding-right: 20px; font-size:12px; height:18px;}";
        	sXmlStr  += ".label4 { background-color:#DBDBDB; font-weight:bold; text-align:center; padding-right:5px; font-size:12px; border-top-style:hidden; height:18px;}";
        	sXmlStr  += ".label5 { background-color:#FFFFFF; text-align:center; font-size:12px; height:18px;}";
        	sXmlStr  += ".label6 { text-align:right; font-size:12px; font-weight:bold; padding-right: 20px; padding-top: 3px; height:18px;}";
        	sXmlStr  += ".label7 { text-align:left; font-size:12px; padding-left:30px; padding-top: 3px; padding-bottom: 3px; height:18px;}";
        	sXmlStr  += ".table2 { background-color:#FAFAFA; text-align:center; font-size:12px; margin-left:30px; width:640px;}";
        	sXmlStr  += "</style>";
        	sXmlStr  += "<table width='100%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='30%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='30%'>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>협의사항</td>";
        	sXmlStr  += "        <td class='label2' colspan='3'>" + "data_협의사항" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>근무부서</td>";
        	sXmlStr  += "        <td class='label2'>" + "data_근무부서" + "</td>";
        	sXmlStr  += "        <td class='label1'>직위</td>";
        	sXmlStr  += "        <td class='label2'>" + "data_직위" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>성명</td>";
        	sXmlStr  += "        <td class='label2'>" + "data_성명" + "</td>";
        	sXmlStr  += "        <td class='label1'>주민등록번호</td>";
        	sXmlStr  += "        <td class='label2'>" + "data_주민등록번호" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>현주소</td>";
        	sXmlStr  += "        <td class='label2' colspan='3'>" + "data_현주소" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>근무기간</td>";
        	sXmlStr  += "        <td class='label2'>" + "data_근무기간" + "</td>";
        	sXmlStr  += "        <td class='label1'>근속기간</td>";
        	sXmlStr  += "        <td class='label2'>" + "data_근속기간" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>퇴직기준근무기간</td>";
        	sXmlStr  += "        <td class='label2'>" + "data_퇴직기준근무기간" + "</td>";
        	sXmlStr  += "        <td class='label1'>퇴직기준근속기간</td>";
        	sXmlStr  += "        <td class='label2'>" + "data_퇴직기준근속기간" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "</table>";
        	sXmlStr  += "<br/>";
        	sXmlStr  += "<p>□ 평균임금 정산내역</p>";
            sXmlStr  += "<p class='label7'>1)급여내역-기본급</p>";
        	sXmlStr  += "<table class='table2'>";
        	sXmlStr  += "    <col width='65%'>";
        	sXmlStr  += "    <col width='35%'>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>기간</td>";
        	sXmlStr  += "        <td class='label1' >금액</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label5'>" + "data_기간1" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_금액1" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label5'>" + "data_기간2" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_금액2" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label5'>" + "data_기간3" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_금액3" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label5'>" + "data_기간4" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_금액4" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label3' style='background-color:#DBDBDB;'>"+ "data_총일수" +"</td>";
        	sXmlStr  += "        <td class='label3' style='background-color:#DBDBDB;'>"+ "data_평균" +"</td>";
        	sXmlStr  += "    </tr>";
            sXmlStr  += "</table>";	
            sXmlStr  += "    <br/>";
            sXmlStr  += "<p class='label7'>2)급여내역-연장수당</p>";
            sXmlStr  += "<table class='table2'>";
        	sXmlStr  += "    <col width='65%'>";
        	sXmlStr  += "    <col width='35%'>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>기간</td>";
        	sXmlStr  += "        <td class='label1'>금액</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label5'>" + "data_기간1" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_금액1" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label5'>" + "data_기간2" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_금액2" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label5'>" + "data_기간3" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_금액3" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label5'>" + "data_기간4" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_금액4" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label3' style='background-color:#DBDBDB;'>"+ "총일수" +"</td>";
        	sXmlStr  += "        <td class='label3' style='background-color:#DBDBDB;'>"+ "평균" +"</td>";
        	sXmlStr  += "    </tr>";
            sXmlStr  += "</table>";	
            sXmlStr  += "    <br/>";
            sXmlStr  += "<p style='padding-bottom: 3px;'>3)연차수당, 평균임금</p>";
            sXmlStr  += "<table width='100%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='30%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='30%'>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>지급연차수당</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_지급연차수당" + "</td>";
        	sXmlStr  += "        <td class='label1'>평균연차수당</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_평균연차수당" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label3' colspan='2' style='border-bottom-style:hidden; border-left-style:hidden;'></td>";
        	sXmlStr  += "        <td class='label1'>평균임금</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_평균임금" + "</td>";
        	sXmlStr  += "    </tr>";
            sXmlStr  += "</table>";	
            sXmlStr  += "<br/>";
        	sXmlStr  += "<table width='100%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='30%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='30%'>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>법정퇴직금</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_법정퇴직금" + "</td>";
        	sXmlStr  += "        <td class='label1'>누진개월수</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_누진개월수" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>누진가산금</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_누진가산금" + "</td>";
        	sXmlStr  += "        <td class='label1'>급여성퇴직금</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_급여성퇴직금" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>퇴직급여</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_퇴직급여" + "</td>";
        	sXmlStr  += "        <td class='label1'>퇴직위로금</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_퇴직위로금" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>퇴직소득수입금액</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_퇴직소득수입금액" + "</td>";
        	sXmlStr  += "        <td class='label1'></td>";
        	sXmlStr  += "        <td class='label3'></td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "</table>";
        	sXmlStr  += "<table width='100%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label4' rowspan='2'>공제사항</td>";
        	sXmlStr  += "        <td class='label4'>소득세</td>";
        	sXmlStr  += "        <td class='label4'>지방소득세</td>";
        	sXmlStr  += "        <td class='label4'>국민연금퇴직전환금</td>";
        	sXmlStr  += "        <td class='label4'>공제계</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label3'>" + "data_" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>과세이연 후</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>차인지급액</td>";
        	sXmlStr  += "        <td class='label3' colspan='2'>" + "data_" + "</td>";
        	sXmlStr  += "        <td class='label1'>과세이연금액</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "</table>";
            sXmlStr  += "<br/>";
            sXmlStr  += "<table width='100%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1' rowspan='2'>지급구분</td>";
        	sXmlStr  += "        <td class='label1'>교보생명</td>";
        	sXmlStr  += "        <td class='label1'>우리은행</td>";
        	sXmlStr  += "        <td class='label1'>하나은행</td>";
        	sXmlStr  += "        <td class='label1'>농심기획</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label3'>" + "data_" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "</table>";
        	sXmlStr  += "<p class='label6'>" + "상기와 같이 퇴직금을 청구하오니 지급하여 주시기 바랍니다." + "</p>";
        	sXmlStr  += "<p class='label6'>" + "2016년 10월 13일" + "</p>";
        	trace(sXmlStr);
        	
        	var nRow = this.dsTM_APPROVAL.addRow();
        		
        	this.dsTM_APPROVAL.setColumn(nRow, "documentID", sApprDocId);				/*문서번호*/
        	this.dsTM_APPROVAL.setColumn(nRow, "documentType", this.Edit00.value);		/*문서종류*/
        	this.dsTM_APPROVAL.setColumn(nRow, "HtmlDocument", sXmlStr);				/*결재문서에 그릴HTML*/
        	this.dsTM_APPROVAL.setColumn(nRow, "subject", sSubject);					/*결재문서 제목*/
        	this.dsTM_APPROVAL.setColumn(nRow, "recipient", "gwtest07"); 				/*기안자사번- 샘플로 gwtest07*/
        	this.dsTM_APPROVAL.setColumn(nRow, "creator", "수애");    					/*기안자성명*/
        	this.dsTM_APPROVAL.setColumn(nRow, "documentStatus", "createDoc");			/*결재문서 생성:createDoc, 기안대기문서 삭제:deleteDoc*/
        	this.dsTM_APPROVAL.setColumn(nRow, "isUsedFile", "F");						/*첨부파일여부*/
        		
        	var sMethodName = "sendApproval";
        	var sInDataSet 	= "dsTM_APPROVAL=dsTM_APPROVAL:U"
        	var sOutDataSet = "";
        	var sArgument	= "";
        	
        	this.fnc_TransactionCall(this, "gw", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*--------------------------------------------------+
         | 4. 퇴직연금기준임금(DC) KHR132 결재 본문 HTML |
         +--------------------------------------------------*/
        this.fn_apprProcess132 = function()
        {
        	var sXmlStr = "";
        							
        	/* 개발 시 DOCU_IDXX 과 APPR_SEQN 조합 -> 예제(KHR111-2016092700001) */ 
        	var sApprDocId	= this.Edit00.value + "-" +this.Edit01.value + this.Edit02.value;
        	
        	var sSubject 	= "퇴직연금기준임금(DC)(PAYF0110I01::"+sApprDocId; 
        		
        	sXmlStr  = "<style>";
        	sXmlStr  += "table { border-collapse:collapse; border-width:1px; border-color:black; border-style:solid;}";
        	sXmlStr  += "td { height:20px; font-size:12px; border-width:1px; border-color:black; border-style:solid;}";
        	sXmlStr  += ".linkTable td {font-size: 12px;}";
        	sXmlStr  += ".label1 { background-color:#DBDBDB; font-weight:bold; text-align:center; padding-right:5px; font-size:12px;}";
        	sXmlStr  += ".label2 { background-color:#FFFFFF; text-align:left; padding-left:10px; font-size:12px;}";
        	sXmlStr  += ".label3 { background-color:#FFFFFF; text-align:right; padding-right: 20px; font-size:12px; height:20px;}";
        	sXmlStr  += ".label4 { background-color:#DBDBDB; font-weight:bold; text-align:center; padding-right:5px; font-size:12px; border-top-style:hidden;}";
        	sXmlStr  += ".label5 { background-color:#FFFFFF; text-align:center; font-size:12px;}";
        	sXmlStr  += ".label6 { text-align:right; font-size:12px; font-weight:bold; padding-right: 20px; padding-top: 3px;}";
        	sXmlStr  += ".label7 { text-align:left; font-size:12px; padding-left:30px; padding-top: 3px; padding-bottom: 3px;}";
        	sXmlStr  += ".table2 { background-color:#FAFAFA; text-align:center; font-size:12px; margin-left:30px; width:640px;}";
        	sXmlStr  += "</style>";
        	sXmlStr  += "<table width='100%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='30%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='30%'>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>협의사항</td>";
        	sXmlStr  += "        <td class='label2' colspan='3'>" + "data_협의사항" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>근무부서</td>";
        	sXmlStr  += "        <td class='label2'>" + "data_근무부서" + "</td>";
        	sXmlStr  += "        <td class='label1'>직위</td>";
        	sXmlStr  += "        <td class='label2'>" + "data_직위" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>성명</td>";
        	sXmlStr  += "        <td class='label2'>" + "data_성명" + "</td>";
        	sXmlStr  += "        <td class='label1'>주민등록번호</td>";
        	sXmlStr  += "        <td class='label2'>" + "data_주민등록번호" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>현주소</td>";
        	sXmlStr  += "        <td class='label2' colspan='3'>" + "data_현주소" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>퇴직금정산근무기간</td>";
        	sXmlStr  += "        <td class='label2'>" + "data_퇴직금정산근무기간" + "</td>";
        	sXmlStr  += "        <td class='label1'>정산근속기간</td>";
        	sXmlStr  += "        <td class='label2'>" + "data_정산근속기간" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "</table>";
        	sXmlStr  += "<br/>";
        	sXmlStr  += "<p>□ 평균임금 정산내역</p>";
            sXmlStr  += "<p class='label7'>1)급여내역<p>";
        	sXmlStr  += "<table class='table2'>";
        	sXmlStr  += "    <col width='40%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>기간</td>";
        	sXmlStr  += "        <td class='label1'>기본급</td>";
        	sXmlStr  += "        <td class='label1'>연장수당</td>";
        	sXmlStr  += "        <td class='label1'>금액</td>";
        	sXmlStr  += "    </tr>";
        	
        	for(var i = 0; i < 12; i++){
        		sXmlStr  += "    <tr>";
        		sXmlStr  += "        <td class='label2'>" + "data_기간_" + i + "</td>";
        		sXmlStr  += "        <td class='label3'>" + "data_금액_" + i + "</td>";
        		sXmlStr  += "        <td class='label3'>" + "data_연장수당_" + i+ "</td>";
        		sXmlStr  += "        <td class='label3'>" + "data_금액_" + i + "</td>";
        		sXmlStr  += "    </tr>";
        	}	
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label5'>" + "급여총액" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>" + "평균급여" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_" + "</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_" + "</td>";
        	sXmlStr  += "    </tr>";
            sXmlStr  += "</table>";	
            sXmlStr  += "    <br/>";
            sXmlStr  += "<p class='label7'>2)연차수당, 평균임금</p>";
        	sXmlStr  += "<table class='table2'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='30%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='30%'>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>지급연차수당</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_지급연차수당" + "</td>";
        	sXmlStr  += "        <td class='label1'>평균연차수당</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_평균연차수당" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label3' colspan='2' style='border-bottom-style:hidden; border-left-style:hidden;'></td>";
        	sXmlStr  += "        <td class='label1'>평균임금</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_평균임금" + "</td>";
        	sXmlStr  += "    </tr>";
            sXmlStr  += "</table>";	
            sXmlStr  += "<br/>";
        	sXmlStr  += "<table width='100%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='30%'>";
        	sXmlStr  += "    <col width='20%'>";
        	sXmlStr  += "    <col width='30%'>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>법정퇴직금</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_법정퇴직금" + "</td>";
        	sXmlStr  += "        <td class='label1'>누진개월수</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_누진개월수" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>누진가산금</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_누진가산금" + "</td>";
        	sXmlStr  += "        <td class='label1'>급여성퇴직금</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_급여성퇴직금" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>퇴직급여</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_퇴직급여" + "</td>";
        	sXmlStr  += "        <td class='label1'>퇴직위로금</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_퇴직위로금" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label1'>퇴직소득수입금액</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_퇴직소득수입금액" + "</td>";
        	sXmlStr  += "        <td class='label1'></td>";
        	sXmlStr  += "        <td class='label3'></td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "    <tr>";
        	sXmlStr  += "        <td class='label3' colspan='2' style='border-bottom-style:hidden; border-left-style:hidden;'></td>";
        	sXmlStr  += "        <td class='label1'>차인지급액</td>";
        	sXmlStr  += "        <td class='label3'>" + "data_" + "</td>";
        	sXmlStr  += "    </tr>";
        	sXmlStr  += "</table>"
            sXmlStr  += "<br/>";
        	trace(sXmlStr);
        	
        	var nRow = this.dsTM_APPROVAL.addRow();
        		
        	this.dsTM_APPROVAL.setColumn(nRow, "documentID", sApprDocId);				/*문서번호*/
        	this.dsTM_APPROVAL.setColumn(nRow, "documentType", this.Edit00.value);		/*문서종류*/
        	this.dsTM_APPROVAL.setColumn(nRow, "HtmlDocument", sXmlStr);				/*결재문서에 그릴HTML*/
        	this.dsTM_APPROVAL.setColumn(nRow, "subject", sSubject);					/*결재문서 제목*/
        	this.dsTM_APPROVAL.setColumn(nRow, "recipient", "gwtest07"); 				/*기안자사번- 샘플로 gwtest07*/
        	this.dsTM_APPROVAL.setColumn(nRow, "creator", "수애");    					/*기안자성명*/
        	this.dsTM_APPROVAL.setColumn(nRow, "documentStatus", "createDoc");			/*결재문서 생성:createDoc, 기안대기문서 삭제:deleteDoc*/
        	this.dsTM_APPROVAL.setColumn(nRow, "isUsedFile", "F");						/*첨부파일여부*/
        		
        	var sMethodName = "sendApproval";
        	var sInDataSet 	= "dsTM_APPROVAL=dsTM_APPROVAL:U"
        	var sOutDataSet = "";
        	var sArgument	= "";
        	
        	this.fnc_TransactionCall(this, "gw", sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        

        

        

        /*샘플 구현 코드 (미사용)*/
        this.cmbAPP_CODE_onitemchanged = function(obj,e)
        {
        	var sCode = this.cmbAPP_CODE.value;
        	var Stoday = this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"));
        	
        	this.Edit00.set_value("KHR"+sCode);
        	this.Edit01.set_value(Stoday);		
        }

        this.Edit02_onkeyup = function(obj,e)
        {
        	this.Edit02.set_value(this.fnc_LPad(this.Edit02.value,0,5));
        }

        this.btn_PROC_OnClick = function(obj,e)
        {
        	if (!this.fn_SearchItemCheck()) return;
        	
        	var sCode = this.cmbAPP_CODE.value;
        		
        	switch(sCode)
        	{	
        	
        		case "130":
        			this.fnc_DatasetClear('dsTM_APPROVAL');
        			this.fn_apprProcess130();
        			break;
        			
        		case "132":	
        		    this.fnc_DatasetClear('dsTM_APPROVAL');
        			this.fn_apprProcess132();
        			break;		 
        	}
        }

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

        this.fn_PostProcess = function (sMethodName) {
        	
        	if (sMethodName == "sendApproval") 
        	{
        		var sUrl = "http://dev.nsgportal.net/ekp/user.do?cmd=goNsDraft&cmpID=CK";
        		var sPostData = "&jobID="+this.dsTM_APPROVAL.getColumn(0,"documentType")
        					  + "&docID="+this.dsTM_APPROVAL.getColumn(0, "documentID")
        					  + "&userID="+"gwtest07";
        		
        		if(nexacro.Browser == "Runtime")
        		{
        			system.execBrowser(sUrl+sPostData);
        		} else {
        			window.open(sUrl+sPostData);
        		}
        	}
        }

        this.fn_SearchItemCheck = function () {

        	if (this.fnc_Length(this.fnc_Trim(this.cmbAPP_CODE.value)) < 1) 
        	{
        		return this.fnc_SearchCheckPostAction("TMM072", "결재종류",this.cmbAPP_CODE);
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.Edit00.value)) < 1) 
        	{
        		return this.fnc_SearchCheckPostAction("TMM072", "시퀀스",this.Edit02);
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.Edit01.value)) < 1) 
        	{
        		return this.fnc_SearchCheckPostAction("TMM072", "시퀀스",this.Edit02);
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.Edit02.value)) < 1) 
        	{
        		return this.fnc_SearchCheckPostAction("TMM072", "시퀀스",this.Edit02);
        	}
        	return true;
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.staSHRISSU_DATE.addEventHandler("onclick", this.staSHRISSU_DATE_onclick, this);
            this.cmbAPP_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.cmbAPP_CODE.addEventHandler("onitemchanged", this.cmbAPP_CODE_onitemchanged, this);
            this.btn_PROC.addEventHandler("onclick", this.btn_PROC_OnClick, this);
            this.staSHRISSU_DATE00.addEventHandler("onclick", this.staSHRISSU_DATE_onclick, this);
            this.Edit02.addEventHandler("onkeyup", this.Edit02_onkeyup, this);

        };

        this.loadIncludeScript("sample_approval_if_nds.xfdl");

       
    };
}
)();
