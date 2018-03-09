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
                this.set_scrollbars("autovert");
                this._setFormPosition(0,0,850,753);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPY_REGSAL", this);
            obj._setContents("<ColumnInfo><Column id=\"STDS_DATE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"BASC_ANSL\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"BSLY_AMOT\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"OVER_AMOT\" type=\"STRING\" size=\"256\"/><Column id=\"PBN1_AMOT\" type=\"STRING\" size=\"256\"/><Column id=\"PBN2_AMOT\" type=\"STRING\" size=\"256\"/><Column id=\"PBN3_AMOT\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_100X\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CNCF_DATE\" type=\"STRING\" size=\"100\"/><Column id=\"EMPL_NUMB\" type=\"STRING\" size=\"100\"/><Column id=\"CNTR_YMTH\" type=\"STRING\" size=\"100\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"100\"/><Column id=\"UPDP_USID\" type=\"STRING\" size=\"100\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHR_CNTRXA", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CNTR_YMTH\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CNTD_CODE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_CODE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"DURS_CODE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_CODE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"OPOS_NAME\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CNTR_BEDE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CNTR_ENDD\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"BSLY_AMOT\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"OVER_AMOT\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"MTPY_AMOT\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"PBNR_YSNO\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"PBNR_ENDD\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"PBN1_AMOT\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"PBN2_AMOT\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"PBN3_AMOT\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YPAY_AMOT\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"RCGN_YSNO\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"REMK_100X\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CNCF_YSNO\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"CNCF_DATE\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"OWNR_NAME\" size=\"15\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static21", "absolute", "181", "655", "131", "22", null, null, this);
            obj.set_taborder("88");
            obj.set_text("(서명 또는 인)");
            obj.set_cssclass("sta_WF_Subtitle03");
            obj.style.set_color("darkgray");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("staEMPL_NAME", "absolute", "307", "159", "139", "33", null, null, this);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("staOPOS_NAME", "absolute", "504", "159", "139", "33", null, null, this);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("staEMPL_NUMB", "absolute", "701", "159", "134", "33", null, null, this);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
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

            obj = new Button("btn_APPRO", "absolute", "737", "717", "62", "24", null, null, this);
            obj.set_taborder("8");
            obj.set_text("승인");
            obj.set_cssclass("btn_POP_CRUD");
            obj.set_visible("false");
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

            obj = new Static("Shape0", "absolute", "15", "73", "820", "55", null, null, this);
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

            obj = new Static("staDEPT_NAME", "absolute", "74", "159", "175", "33", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
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

            obj = new Static("Static04", "absolute", "444", "159", "62", "33", null, null, this);
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

            obj = new Static("Static15", "absolute", "15", "264", "94", "33", null, null, this);
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

            obj = new Static("Static20", "absolute", "15", "296", "94", "33", null, null, this);
            obj.set_taborder("48");
            obj.set_text("금액");
            obj.set_cssclass("sta_WF_Label_C");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "15", "333", "820", "21", null, null, this);
            obj.set_taborder("52");
            obj.set_text("상기 연봉금액은 법정근로시간 및 시간외 근로시간을 포함한 총 근로시간에 대하여 산정한 것임.");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Desc01");
            this.addChild(obj.name, obj);

            obj = new Static("staPBNR_GUBUN", "absolute", "15", "352", "812", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_text("결정연봉 금액 = 월급여(기본급 + 시간외 근무수당) X ");
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

            obj = new Static("Static32", "absolute", "15", "462", "820", "35", null, null, this);
            obj.set_taborder("60");
            obj.set_text("월급여(기본급 + 시간외 근무수당)는 매 익월 10일에 지급하며, 급여를 일할계산 할 때에는 당월 급여총액을 월소정근무일수(30일)로 나누어 계산한다. \r\n(급여총액/30 X 근무일수)");
            obj.set_cssclass("sta_WF_Desc02");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "15", "496", "820", "21", null, null, this);
            obj.set_taborder("61");
            obj.set_text("연차수당은 별도로 지급한다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Desc01");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "15", "515", "820", "21", null, null, this);
            obj.set_taborder("62");
            obj.set_text("퇴직금은 취업규정에서 정하는 바에 따라 퇴직금을 지급한다.");
            obj.set_cssclass("sta_WF_Desc01");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "15", "535", "820", "35", null, null, this);
            obj.set_taborder("63");
            obj.set_text("회사의 업적평가에 따라 지급되는 연봉이 가(감)급 되는데 대하여 수용할 것이며, 평가결과 지급되는 연봉에 대하여 이의가 있을 경우 본인 연봉의 \r\n절대수준을 기준으로 이의 제기 할 수 있으나, 단순히 타인과의 상대적 차이를 근거로 이의를 제기하지 않는다.");
            obj.set_cssclass("sta_WF_Desc02");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "15", "569", "820", "21", null, null, this);
            obj.set_taborder("64");
            obj.set_text("이때 이의신청은 연봉 통보를 받는 날로부터 3일 이내에 소속 본부장/팀장에게 서면으로 제기 할 수 있으나, 최종결정은 회사의 결정에 따르기로 한다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Desc01");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "15", "588", "820", "21", null, null, this);
            obj.set_taborder("65");
            obj.set_text("본 사항은 상기 계약기간 동안의 임금에 대해서만 유효하며, 기타 상기에 명기되지 않는 내용은 회사의 제반 규정에 의한다.");
            obj.set_cssclass("sta_WF_Desc01");
            this.addChild(obj.name, obj);

            obj = new Static("staDate", "absolute", "293", "614", "264", "28", null, null, this);
            obj.set_taborder("66");
            obj.style.set_align("center middle");
            obj.set_cssclass("sta_WF_Subtitle03");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "369", "604", "136", "28", null, null, this);
            obj.set_taborder("67");
            obj.set_text("h 22");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("staOWNR_NAME", "absolute", "600", "655", "235", "52", null, null, this);
            obj.set_taborder("69");
            obj.set_text("서울 특별시 동작구 여의대방로 112\r\n주식회사  농 심 기 획\r\n대표이사  ");
            obj.set_cssclass("sta_WF_Subtitle03");
            this.addChild(obj.name, obj);

            obj = new Static("staCNTR_PERIOD", "absolute", "98", "207", "270", "21", null, null, this);
            obj.set_taborder("73");
            obj.style.set_font("underline 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("staEMPL_SIGN", "absolute", "73", "654", "87", "22", null, null, this);
            obj.set_taborder("74");
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

            obj = new Static("staBSLY_AMOT", "absolute", "106", "296", "183", "33", null, null, this);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("staOVER_AMOT", "absolute", "288", "296", "183", "33", null, null, this);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("staMTPY_AMOT", "absolute", "470", "296", "183", "33", null, null, this);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("staYPAY_AMOT", "absolute", "652", "296", "183", "33", null, null, this);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtBSLY_AMOT", "absolute", "106", "296", "183", "33", null, null, this);
            obj.set_taborder("83");
            obj.set_mask("###,###");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("background", "disabled", "white");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtOVER_AMOT", "absolute", "288", "296", "183", "33", null, null, this);
            obj.set_taborder("84");
            obj.set_mask("###,###");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("background", "disabled", "white");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtMTPY_AMOT", "absolute", "470", "296", "183", "33", null, null, this);
            obj.set_taborder("85");
            obj.set_mask("###,###");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("background", "disabled", "white");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edtYPAY_AMOT", "absolute", "652", "296", "183", "33", null, null, this);
            obj.set_taborder("86");
            obj.set_mask("###,###");
            obj.style.set_align("center middle");
            obj.style.setStyleValue("background", "disabled", "white");
            obj.style.setStyleValue("color", "disabled", "black");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "25", "655", "215", "22", null, null, this);
            obj.set_taborder("87");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Subtitle03");
            obj.style.set_border("0 solid #cfd0d1ff,0 solid #cfd0d1ff,1 solid #333333ff,0 solid #cfd0d1ff");
            this.addChild(obj.name, obj);

            obj = new Static("staEMPL_SIGN_NM", "absolute", "236", "650", "74", "27", null, null, this);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_Subtitle03");
            obj.style.set_border("0 solid #cfd0d1ff,0 solid #cfd0d1ff,1 solid #333333ff,0 solid #cfd0d1ff");
            obj.style.set_font("bold italic 16 굴림");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "16", "584", "136", "8", null, null, this);
            obj.set_taborder("90");
            obj.set_text("h 22");
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
            		p.set_scrollbars("autovert");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","staDEPT_NAME","text","dsHR_CNTRXA","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","staEMPL_NAME","text","dsHR_CNTRXA","EMPL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","staOPOS_NAME","text","dsHR_CNTRXA","OPOS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","staEMPL_NUMB","text","dsHR_CNTRXA","EMPL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edtBSLY_AMOT","value","dsHR_CNTRXA","BSLY_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edtOVER_AMOT","value","dsHR_CNTRXA","OVER_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edtMTPY_AMOT","value","dsHR_CNTRXA","MTPY_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edtYPAY_AMOT","value","dsHR_CNTRXA","YPAY_AMOT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HRML0030P01.xfdl", "script::lib_script_common.xjs");
        this.registerScript("HRML0030P01.xfdl", function() {

        /****************************************************************************************************
        /*
         * @explanation		근로(연봉)계약서확인(계약서)
         * @category	 	인사관리>인사관리>근로(연봉)계약서확인(계약서)
         * @author	   	    문석기
         * @cdate	  		2016.09.06
         * @version 1.0		최초 작성
         * HRML0030P01.xml - <Created by Code Template generator>
         *
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                           *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                            *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리                       *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망             *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                      *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890
         ***************************************************************************************************/
         
        /*************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sEMPL_NUMB = this.parent.sEMPL_NUMB;    //조회 Parameter
        this.sCNTR_YMTH = this.parent.sCNTR_YMTH;    //계약서 확인날짜
        this.sPBNR_YSNO = this.parent.sPBNR_YSNO;    //수습여부
        this.sMODE = this.parent.sMODE;         //팝업모드 
        this.sForm = "0";                         //최초 조회여부
        this.sPACKAGENAME = "HRML0030P01"; 
        this.sAPPR_YSNO;

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
        	 this.sUSERAUTH     = ""; 
        	 this.sFORMCAPTION  = ""; 
        	 this.sFORMLOCATION = "";
        	 this.sUSERLAVEL    = "";
        } else {
        	 this.sUSERAUTH     = this.getOwnerFrame()["sUSERAUTH"];
        	 this.sFORMCAPTION  = this.getOwnerFrame()["sFORMCAPTION"];
        	 this.sFORMLOCATION = this.getOwnerFrame()["sFORMLOCATION"];
        	 this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];
        }

        /***************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	
        	//권한
        	switch (this.sUSERLAVEL) 
          	{
          		case "1" : 	//전체
        		break;
        	
        		case "2" :	//부문   					
        		break;
        		
        		case "3" :	//부실   					
        		break;
        		
        		case "4" :	//부서
        		break;	
        	
        		case "5" :	//개인
        		break;
        			
        		default :
        		break;
          	}
          	
          	this.fn_Search();
          	
        }

        /*-----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {

        	this.close();
        	
        }

        /*------------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {
        	if (!this.fn_SearchItemCheck()) return;
        	this.fnc_DatasetClear("dsHR_CNTRXA");

        	var sMethodName = "SEARCH00";
        	var sInDataSet  = "";
        	var sOutDataSet = "dsHR_CNTRXA=dsHR_CNTRXA";
        	var sArgument   = this.fn_CreateArgument(sMethodName);

        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {  
        	//기능없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	//기능없음
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	//기능없음
        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        	if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet  = "dsPY_REGSAL=dsPY_REGSAL:U";
        	var sOutDataSet = "";
        	var sArgument   = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*------------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	//기능없음
        }

        /*------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능없음
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsHR_CNTRXA", this);

        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;
        	
        } 
         
        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
        	
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e){

        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        	
        }

        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {

        	this.fnc_EditFocus(obj);
        	
        }

        /***************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	return true;
        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	return true;
        }
        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	this.dsPY_REGSAL.setColumn(0, "STDS_DATE", this.dsHR_CNTRXA.getColumn(0, "CNTR_YMTH")+"01");
        	this.dsPY_REGSAL.setColumn(0, "BASC_ANSL", this.dsHR_CNTRXA.getColumn(0, "YPAY_AMOT"));
        	this.dsPY_REGSAL.setColumn(0, "BSLY_AMOT", this.dsHR_CNTRXA.getColumn(0, "BSLY_AMOT"));
        	this.dsPY_REGSAL.setColumn(0, "OVER_AMOT", this.dsHR_CNTRXA.getColumn(0, "OVER_AMOT"));
        	this.dsPY_REGSAL.setColumn(0, "PBN1_AMOT", this.dsHR_CNTRXA.getColumn(0, "PBN1_AMOT"));
        	this.dsPY_REGSAL.setColumn(0, "PBN2_AMOT", this.dsHR_CNTRXA.getColumn(0, "PBN2_AMOT"));
        	this.dsPY_REGSAL.setColumn(0, "PBN3_AMOT", this.dsHR_CNTRXA.getColumn(0, "PBN3_AMOT"));
        	this.dsPY_REGSAL.setColumn(0, "REMK_100X", this.dsHR_CNTRXA.getColumn(0, "REMK_100X"));
        	this.dsPY_REGSAL.setColumn(0, "EMPL_NUMB", this.dsHR_CNTRXA.getColumn(0, "EMPL_NUMB"));
        	this.dsPY_REGSAL.setColumn(0, "CNTR_YMTH", this.dsHR_CNTRXA.getColumn(0, "CNTR_YMTH"));
        	
        	//개발용, 운영에서는 EMPL_NUMB 이 입력,수정자 -- 쿼리에서도 입력 수정자 수정해야함.	
        	this.dsPY_REGSAL.setColumn(0, "INST_USID", application.GBL_EMPLNO);
        	this.dsPY_REGSAL.setColumn(0, "UPDP_USID", application.GBL_EMPLNO);
        	
        	return true;
        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
        		sReturnString += " EMPL_NUMB=" + this.fnc_Quote(this.fnc_Trim(this.sEMPL_NUMB));
        		sReturnString += " CNTR_YMTH=" + this.fnc_Quote(this.fnc_Trim(this.sCNTR_YMTH));     
        		
        	// 저장 Argument 생성
        	} else if (sKind == "SAVE00") {
        	
        		sReturnString  = " pgm="       + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action="    + this.fnc_Quote(sKind);
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
        		//계약기간 설정
        		var sCNTR_BEDE = this.fnc_GetMaskFormat(this.dsHR_CNTRXA.getColumn(0, "CNTR_BEDE"), "@@@@. @@. @@");
        		var sCNTR_ENDD = this.fnc_GetMaskFormat(this.dsHR_CNTRXA.getColumn(0, "CNTR_ENDD"), "@@@@. @@. @@");
        		this.staCNTR_PERIOD.set_text(sCNTR_BEDE + " ~ " + sCNTR_ENDD);
        		
        		//계약서확인여부 확인
        		this.sCNCF_YSNO = this.dsHR_CNTRXA.getColumn(0, "CNCF_YSNO");

        		//승인
        		if(this.sCNCF_YSNO == "1") {
        			//계약서 날짜 세팅
        			var sCNCF_DATE = this.fnc_GetMaskFormat(this.dsHR_CNTRXA.getColumn(0, "CNCF_DATE"), "@@@@. @@. @@");
        			this.staDate.set_text(sCNCF_DATE);
        			//성명 세팅
        			this.fn_SignSet();
        			//인장 세팅
        			this.staEMPL_SIGN_NM.set_text(this.dsHR_CNTRXA.getColumn(0, "EMPL_NAME"));
        		//미승인
        		}else {
        			//계약서 날짜 세팅
        			var objDate = this.fnc_GetServerDateTime("DATE");
        			var sStaDate = this.fnc_GetMaskFormat(objDate, "@@@@. @@. @@");
        			this.staDate.set_text(sStaDate);
        			//성명 세팅
        			this.fn_SignSet();
        			//버튼세팅
        			//본인여부 확인 
        			if(this.sEMPL_NUMB == application.GBL_EMPLNO) {
        				//승인버튼 
        				this.btn_APPRO.set_visible(true);
        			}
        			//테스트하기 위함. 삭제예정
        			this.btn_APPRO.set_visible(true);
        		}
        		
        		//폼 세팅
        		this.fn_FormSetting();
        		
        	} else if (sMethodName == "SAVE00") {
        		this.btn_APPRO.set_visible(false);
        		this.fn_Search();
        		
        	} 
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
        /*-----------------------+
         |  화면 Setting  |
         +------------------------*/
        this.fn_FormSetting = function () {

        	if(this.sAPPR_YSNO != "1" ){
        		//수습 세팅 
        		if(this.sPBNR_YSNO == "1") {
        			this.fn_CalAmot();
        		}else {
        			this.staPBNR_GUBUN.set_text(this.staPBNR_GUBUN.text +"12개월");
        		}
        	}	
        		
        	var sModeChk = this.sMODE;
        	if(sModeChk == "PRINT") {
        		this.fn_Print();
        	} 

        }

        /*-----------------------+
         |  성명 Setting  |
         +------------------------*/
        this.fn_SignSet = function () {
        	//성명 세팅
        	var sEmplSign = this.dsHR_CNTRXA.getColumn(0, "EMPL_NAME");
        	var sStaEmpl_SIGN;
        	for(i=0;i<sEmplSign.length;i++){
        		var sEMPL_SIGN = sEmplSign.substr(i,1);
        		if(i == 0) {
        			sStaEmpl_SIGN = sEMPL_SIGN;
        		} else {
        			sStaEmpl_SIGN = sStaEmpl_SIGN + " " + sEMPL_SIGN;
        		}
        	}
        	this.staEMPL_SIGN.set_text(sStaEmpl_SIGN);
        	
        	//대표자명 세팅
        	var sOWNR_NAME = this.dsHR_CNTRXA.getColumn(0, "OWNR_NAME");
        	var sStaOWNR_NAME = this.staOWNR_NAME.text;
        	
        	if(this.sAPPR_YSNO != "1" ){
        		for(i=0;i<sOWNR_NAME.length;i++){
        			var sOWNR_NAME2 = sOWNR_NAME.substr(i,1);
        			if(i == 0) {
        				sStaOWNR_NAME = sStaOWNR_NAME + sOWNR_NAME2;
        			} else {
        				sStaOWNR_NAME = sStaOWNR_NAME + " " + sOWNR_NAME2;
        			}
        		}
        	}
        		
        	this.staOWNR_NAME.set_text(sStaOWNR_NAME);
        	
        }
        /*--------------------------------------------+
         |  수습사원 계약년월	수습 월 계산 |
         | 기본급개월수 = (계약종료월 - 계약시작월 +1 ) - 수습개월수(수습월월봉 값체크)
         +--------------------------------------------*/
         this.fn_CalAmot = function (){
        	//변수 선언
        	var sPbnrEndd = this.fnc_Trim(this.dsHR_CNTRXA.getColumn(0, "PBNR_ENDD"));					//수습급여종료일
        	var sCntrBede = this.fnc_Trim(this.dsHR_CNTRXA.getColumn(0, "CNTR_BEDE"));					//계약시작일
        	var sCntrEndd = this.fnc_Trim(this.dsHR_CNTRXA.getColumn(0, "CNTR_ENDD"));					//계약종료일
        	
        	var sPbn1Amot = this.fnc_Trim(this.dsHR_CNTRXA.getColumn(0, "PBN1_AMOT"));	//수습1개월월봉
        	var sPbn2Amot = this.fnc_Trim(this.dsHR_CNTRXA.getColumn(0, "PBN2_AMOT"));	//수습2개월월봉
        	var sPbn3Amot = this.fnc_Trim(this.dsHR_CNTRXA.getColumn(0, "PBN3_AMOT"));	//수습3개월월봉 
        	
        	var sCntrBedeYear = nexacro.toNumber(sCntrBede.substr(0,4)); //계약시작년도
        	var sCntrBedeMonth = nexacro.toNumber(sCntrBede.substr(4,2)); //계약시작월
        	
        	var sCntrPeriod = this.fn_DiffMonth(sCntrEndd, sCntrBede) + 1; //계약기간
        	var sPbnAmot = 0; //수습기간동안 받은 총급여
        	var sPbnrPeriod; //수습월 텍스트
        	if(!this.fnc_IsEmpty(sPbn1Amot) && !this.IsNull(sPbn1Amot)) {
        		sPbnAmot = nexacro.toNumber(sPbn1Amot);
        		sPbnrPeriod = sCntrBedeMonth;
        		sCntrPeriod = nexacro.toNumber(sCntrPeriod) - 1;
        		
        		if(!this.fnc_IsEmpty(sPbn2Amot) && !this.IsNull(sPbn2Amot)) {
        			sPbnAmot = sPbnAmot + nexacro.toNumber(sPbn2Amot);
        			sPbnrPeriod = sPbnrPeriod + "," +(sCntrBedeMonth+1);
        			sCntrPeriod = nexacro.toNumber(sCntrPeriod) - 1;
        			
        			if(!this.fnc_IsEmpty(sPbn3Amot) && !this.IsNull(sPbn3Amot)) {
        				sPbnAmot = sPbnAmot + nexacro.toNumber(sPbn3Amot);
        				sPbnrPeriod = sPbnrPeriod + "," +(sCntrBedeMonth+2);
        				sCntrPeriod = nexacro.toNumber(sCntrPeriod) - 1;
        			}
        		}
        	}
        	var sPbnAmotComma = sPbnAmot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        	
        	this.staPBNR_GUBUN.set_text(this.staPBNR_GUBUN.text + sCntrPeriod + "개월 + " + sPbnAmotComma + "(" + sCntrBedeYear + " 년 "+sPbnrPeriod+"월 급여)");
         }
         /*--------------------------------------------+
         |  주어진 두 날짜의 월 차이를 계산			  |
         +--------------------------------------------*/
        this.fn_DiffMonth = function (sDate,eDate) {
        	
        	if (this.fnc_Length(sDate) != 8 || this.fnc_Length(eDate) != 8) return -1;
        	
        	var strtYear = nexacro.toNumber(this.fnc_SubStr(sDate,0,4));
        	var strtMonth = nexacro.toNumber(this.fnc_SubStr(sDate,4,2))-1;

        	var endYear = nexacro.toNumber(this.fnc_SubStr(eDate,0,4));
        	var endMonth = nexacro.toNumber(this.fnc_SubStr(eDate,4,2))-1;
        	
        	var diffMonth = (endYear - strtYear)* 12 + (endMonth - strtMonth);
        	
        	return Math.abs(diffMonth);
        }
        /*--------------------------------------------+
         |  인쇄함수		  |
         +--------------------------------------------*/
        this.fn_Print = function () {
        	var bSucc;
        	bSucc = system.print(this, false, "middle", "center", true);
        }
        /*--------------------------------------------+
         |  승인버튼		  |
         +--------------------------------------------*/
        this.btn_APPRO_onclick = function(obj,e)
        {
        	this.sAPPR_YSNO = "1";
        	this.fn_Save();
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.btn_APPRO.addEventHandler("onclick", this.btn_APPRO_onclick, this);
            this.Static27.addEventHandler("onclick", this.Static27_onclick, this);
            this.staOWNR_NAME.addEventHandler("onclick", this.Static41_onclick, this);
            this.staCNTR_PERIOD.addEventHandler("onclick", this.staCNTR_PERIOD_onclick, this);
            this.edtOVER_AMOT.addEventHandler("oneditclick", this.edtOVER_AMOT_oneditclick, this);

        };

        this.loadIncludeScript("HRML0030P01.xfdl");

       
    };
}
)();
