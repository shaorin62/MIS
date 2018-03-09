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
                this.set_name("HRMH0030P01");
                this.set_titletext("근로(연봉)계약서확인(근로(연봉)계약)");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,850,753);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static42", "absolute", "307", "159", "139", "33", null, null, this);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.set_text("내용");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "504", "159", "139", "33", null, null, this);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.set_text("내용");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "701", "159", "134", "33", null, null, this);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.set_text("내용");
            this.addChild(obj.name, obj);

            obj = new Div("Div0", "absolute", null, "51", "205", "21", "15", null, this);
            obj.set_taborder("2");
            obj.style.set_color("black");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "11", "15", "461", null, null, this);
            obj.set_taborder("5");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "835", "17", "15", "640", null, null, this);
            obj.set_taborder("6");
            obj.set_text("w\r\n15");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "718", "701", "96", "16", null, null, this);
            obj.set_taborder("7");
            obj.set_text("h 16");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btn00", "absolute", null, "717", "62", "24", "15", null, this);
            obj.set_taborder("8");
            obj.set_text("승인");
            obj.set_cssclass("btn_POP_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "718", "741", "96", "12", null, null, this);
            obj.set_taborder("9");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("imgFormTitle", "absolute", "15", "49", null, "21", "15", null, this);
            obj.set_taborder("10");
            obj.set_text("본인은 연봉제 관련 제반기준을 숙지하면서 다음과 같이 연봉계약을 체결합니다.");
            obj.set_cssclass("sta_WF_Info");
            this.addChild(obj.name, obj);

            obj = new Static("Shape0", "absolute", "15", "73", "820", "50", null, null, this);
            obj.set_taborder("12");
            obj.set_cssclass("styFormItemBoxOut");
            obj.set_text("본인은 당사의 연봉제도와 평가에 따라 지급되는 연봉에 대해 동의하며, 책정된 연봉을 타인에게 공표하거나 타인의 연봉에 대해서도 알려고 \r\n하지 않겠으며, 이를 위반하는 경우는 어떠한 인사상의 불이익에 대해서도 이의를 제기하지 않을 것을 서약합니다.");
            obj.style.set_padding("10 10 10 10");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "48", "74", "120", "10", null, null, this);
            obj.set_taborder("11");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static90", "absolute", "15", "135", "233", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("1. 연봉계약자");
            obj.set_cssclass("sta_WF_Subtitle03");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "256", "123", "104", "35", null, null, this);
            obj.set_taborder("14");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "408", "28", "56", "25", null, null, this);
            obj.set_taborder("15");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static150", "absolute", "74", "159", "175", "33", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.set_text("내용");
            this.addChild(obj.name, obj);

            obj = new Static("Static151", "absolute", "15", "159", "60", "33", null, null, this);
            obj.set_taborder("17");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_Label_C");
            this.addChild(obj.name, obj);

            obj = new Static("Static152", "absolute", "248", "159", "60", "33", null, null, this);
            obj.set_taborder("19");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label_C");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "445", "159", "60", "33", null, null, this);
            obj.set_taborder("22");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_Label_C");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "642", "159", "60", "33", null, null, this);
            obj.set_taborder("25");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_Label_C");
            this.addChild(obj.name, obj);

            obj = new Static("Static153", "absolute", "15", "158", "820", "2", null, null, this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_LabelLine");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "15", "207", "97", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("2. 계약기간 : ");
            obj.set_cssclass("sta_WF_Subtitle03");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "240", "192", "104", "15", null, null, this);
            obj.set_taborder("30");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "15", "240", "233", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("3. 연봉 구성내역");
            obj.set_cssclass("sta_WF_Subtitle03");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "106", "296", "183", "33", null, null, this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_text("100,000,000");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "15", "264", "92", "33", null, null, this);
            obj.set_taborder("36");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Label_CT");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "106", "264", "183", "33", null, null, this);
            obj.set_taborder("38");
            obj.set_text("기본급");
            obj.set_cssclass("sta_WF_Label_CT");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "288", "264", "183", "33", null, null, this);
            obj.set_taborder("39");
            obj.set_text("시간외 근무수당");
            obj.set_cssclass("sta_WF_Label_CT");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "470", "264", "183", "33", null, null, this);
            obj.set_taborder("40");
            obj.set_text("월지급액");
            obj.set_cssclass("sta_WF_Label_CT");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "248", "228", "104", "35", null, null, this);
            obj.set_taborder("45");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "652", "264", "183", "33", null, null, this);
            obj.set_taborder("47");
            obj.set_text("결정 연봉액");
            obj.set_cssclass("sta_WF_Label_CT");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "15", "263", "820", "2", null, null, this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_LabelLine");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "15", "296", "92", "33", null, null, this);
            obj.set_taborder("48");
            obj.set_text("금액");
            obj.set_cssclass("sta_WF_Label_C");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "288", "296", "183", "33", null, null, this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.set_text("100,000,000");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "470", "296", "183", "33", null, null, this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.set_text("100,000,000");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "652", "296", "183", "33", null, null, this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.set_text("100,000,000");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "15", "333", "820", "21", null, null, this);
            obj.set_taborder("52");
            obj.set_text("상기 연봉금액은 법정근로시간 및 시간외 근로시간을 포함한 총 근로시간에 대하여 산정한 것임.");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Desc01");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "15", "352", "300", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_text("결정연봉 금액 = 월급여(기본급 + 시간외 근무수당) X");
            obj.set_cssclass("sta_WF_Desc01");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "15", "371", "820", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_text("결정 연봉금액은 포괄임금산정 방식에 의하며, 12개월분 기준 연봉임.");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Desc01");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "15", "390", "820", "21", null, null, this);
            obj.set_taborder("55");
            obj.set_text("시간 외 근무수당 : (기본급/209h) X 48h X 150%");
            obj.set_cssclass("sta_WF_Desc01");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "307", "352", "249", "21", null, null, this);
            obj.set_taborder("56");
            obj.set_text("10개월 + 4,944,260(2016년 3,4월 급여)");
            obj.set_cssclass("sta_WF_Desc01");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "15", "422", "233", "21", null, null, this);
            obj.set_taborder("57");
            obj.set_text("4. 연봉 적용 기준");
            obj.set_cssclass("sta_WF_Subtitle03");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "32", "405", "136", "22", null, null, this);
            obj.set_taborder("58");
            obj.set_text("h 22");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "15", "442", "820", "21", null, null, this);
            obj.set_taborder("59");
            obj.set_text("시간외 근무수당은 연장, 야간 및 휴일근로수당에 포함된 것으로 한다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Desc01");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "15", "461", "820", "30", null, null, this);
            obj.set_taborder("60");
            obj.set_text("월급여(기본급 + 시간외 근무수당)는 매 익월 10일에 지급하며, 급여를 일할계산 할 때에는 당월 급여총액을 월소정근무일수(30일)로 나누어 계산한다. \r\n(급여총액/30 X 근무일수)");
            obj.set_cssclass("sta_WF_Desc02");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "15", "492", "820", "21", null, null, this);
            obj.set_taborder("61");
            obj.set_text("연차수당은 별도로 지급한다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Desc01");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "15", "511", "820", "21", null, null, this);
            obj.set_taborder("62");
            obj.set_text("퇴직금은 취업규정에서 정하는 바에 따라 퇴직금을 지급한다.");
            obj.set_cssclass("sta_WF_Desc01");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "15", "534", "820", "30", null, null, this);
            obj.set_taborder("63");
            obj.set_text("회사의 업적평가에 따라 지급되는 연봉이 가(감)급 되는데 대하여 수용할 것이며, 평가결과 지급되는 연봉에 대하여 이의가 있을 경우 본인 연봉의 절대 \r\n수준을 기준으로 이의 제기 할 수 있으나, 단순히 타인과의 상대적 차이를 근거로 이의를 제기하지 않는다.");
            obj.set_cssclass("sta_WF_Desc02");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "15", "565", "820", "21", null, null, this);
            obj.set_taborder("64");
            obj.set_text("이때 이의신청은 연봉 통보를 받는 날로부터 3일 이내에 소속 본부장/팀장에게 서면으로 제기 할 수 있으나, 최종결정은 회사의 결정에 따르기로 한다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Desc01");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "15", "584", "820", "21", null, null, this);
            obj.set_taborder("65");
            obj.set_text("본 사항은 상기 계약기간 동안의 임금에 대해서만 유효하며, 기타 상기에 명기되지 않는 내용은 회사의 제반 규정에 의한다.");
            obj.set_cssclass("sta_WF_Desc01");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "293", "618", "264", "28", null, null, this);
            obj.set_taborder("66");
            obj.set_text("2016.  11.  10.");
            obj.style.set_align("center middle");
            obj.set_cssclass("sta_WF_Subtitle03");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "369", "599", "136", "28", null, null, this);
            obj.set_taborder("67");
            obj.set_text("h 22");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "25", "655", "287", "22", null, null, this);
            obj.set_taborder("68");
            obj.set_text("성명                                  (서명 또는 인)");
            obj.set_cssclass("sta_WF_Subtitle03");
            obj.style.set_border("0 solid #cfd0d1ff,0 solid #cfd0d1ff,1 solid #333333ff,0 solid #cfd0d1ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "600", "655", "235", "52", null, null, this);
            obj.set_taborder("69");
            obj.set_text("서울 특별시 동작구 여의대방로 112\r\n주식회사  농 심 기 획\r\n대표이사  최   성   호");
            obj.set_cssclass("sta_WF_Subtitle03");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "98", "207", "248", "21", null, null, this);
            obj.set_taborder("73");
            obj.set_text("2016.00.00 ~ 2016.00.00");
            obj.style.set_font("underline 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "73", "655", "87", "22", null, null, this);
            obj.set_taborder("74");
            obj.set_text("홍  길  동");
            obj.set_cssclass("sta_WF_Subtitle03");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "281", "9", "287", "22", null, null, this);
            obj.set_taborder("75");
            obj.set_text("연봉근로 계약서");
            obj.set_cssclass("sta_WF_Subtitle03");
            obj.style.set_align("center middle");
            obj.style.set_font("underline bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "336", "0", "120", "12", null, null, this);
            obj.set_taborder("76");
            obj.set_text("h 12");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 205, 21, this.Div0,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_color("black");
            		p.set_scrollbars("none");

            	}
            );
            this.Div0.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 850, 753, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("근로(연봉)계약서확인(근로(연봉)계약)");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.btn00.addEventHandler("onclick", this.fn_Cancel, this);

        };

        this.loadIncludeScript("Popup00008.xfdl");

       
    };
}
)();
