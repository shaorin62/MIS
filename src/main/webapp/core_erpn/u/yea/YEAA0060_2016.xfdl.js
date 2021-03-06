﻿(function()
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
                this.set_name("YEAA0060_2016");
                this.set_titletext("개인자료등록현황(2016)");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">CADN_CODE</Col><Col id=\"DSNAME\">dsCADN_CODE</Col><Col id=\"HEADFLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_90016", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_COMM_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_COMD_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_COMD_NM\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RE1F_VALUE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RE2F_VALUE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RE3F_VALUE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RE4F_VALUE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RE5F_VALUE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_RE6F_VALUE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_USE_YN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_ASIS_CD\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsYEA_INCDEC", this);
            obj._setContents("<ColumnInfo><Column id=\"YEA_DEPT_NAME\" size=\"4000\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NO\" size=\"12\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_EMP_NM\" size=\"20\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR025\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PRC_STR001\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_PRC_STR002\" size=\"1\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_FAMI_CNT001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAMI_CNT002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAMI_CNT003\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAMI_CNT004\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAMI_CNT005\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_FAMI_CNT006\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_SUM001\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_SUM002\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM011\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM012\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM013\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM014\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM015\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM016\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM017\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM018\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM019\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM020\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM021\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM022\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM023\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_SUM003\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_SUM004\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_SUM005\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_SUM006\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM034\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM035\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM036\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM037\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM038\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM043\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM044\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM045\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM046\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM047\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM071\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM072\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_STR010\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR011\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR012\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR013\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR014\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR015\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_SUM007\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM052\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM053\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM054\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM055\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM056\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM057\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM058\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM059\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM060\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM061\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM063\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM064\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_SUM008\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM067\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM068\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM069\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM073\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM074\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_STR001\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR002\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR009\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR003\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_STR004\" size=\"100\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_STD_YY\" size=\"6\" prop=\"default\" type=\"STRING\"/><Column id=\"YEA_INC_NUM077\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM078\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM079\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM080\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_SUM009\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM088\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/><Column id=\"YEA_INC_NUM089\" size=\"22\" prop=\"default\" type=\"DECIMAL\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdYEA_INCDEC", "absolute", "0", "25", null, null, "0", "0", this);
            obj.set_taborder("0");
            obj.set_binddataset("dsYEA_INCDEC");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"104\" band=\"left\"/><Column size=\"62\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"96\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"108\"/><Column size=\"80\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"103\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"40\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"text\" text=\"부서명\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"text\" text=\"사원번호\"/><Cell col=\"2\" rowspan=\"2\" displaytype=\"text\" text=\"사원명\"/><Cell col=\"3\" displaytype=\"text\" text=\"입력마감\"/><Cell col=\"4\" displaytype=\"text\" text=\"확정여부\"/><Cell col=\"5\" rowspan=\"2\" displaytype=\"text\" text=\"정산구분\"/><Cell col=\"6\" colspan=\"6\" displaytype=\"text\" text=\"부양가족\"/><Cell col=\"12\" colspan=\"4\" displaytype=\"text\" text=\"연금보험료\"/><Cell col=\"16\" colspan=\"4\" displaytype=\"text\" text=\"보험료\"/><Cell col=\"20\" colspan=\"11\" displaytype=\"text\" text=\"주택자금\"/><Cell col=\"31\" rowspan=\"2\" displaytype=\"text\" text=\"개인&#10;연금저축\"/><Cell col=\"32\" rowspan=\"2\" displaytype=\"text\" text=\"공제부금\"/><Cell col=\"33\" rowspan=\"2\" displaytype=\"text\" text=\"주택&#10;마련저축\"/><Cell col=\"34\" colspan=\"3\" displaytype=\"text\" text=\"투자조합출자\"/><Cell col=\"37\" colspan=\"5\" displaytype=\"text\" text=\"신용카드등\"/><Cell col=\"42\" rowspan=\"2\" displaytype=\"text\" text=\"우리사주&#10;출연금\" wordwrap=\"true\"/><Cell col=\"43\" rowspan=\"2\" displaytype=\"text\" text=\"고용유지&#10;기업근로자&#10;소득공제\"/><Cell col=\"44\" rowspan=\"2\" displaytype=\"text\" text=\"장기집합&#10;투자증권&#10;저축\"/><Cell col=\"45\" colspan=\"8\" displaytype=\"text\" text=\"외국납부세액\"/><Cell col=\"53\" rowspan=\"2\" displaytype=\"text\" text=\"자녀\"/><Cell col=\"54\" rowspan=\"2\" displaytype=\"text\" text=\"6세이하\"/><Cell col=\"55\" rowspan=\"2\" displaytype=\"text\" text=\"출산입양\"/><Cell col=\"56\" rowspan=\"2\" displaytype=\"text\" text=\"연금계좌\"/><Cell col=\"57\" colspan=\"2\" displaytype=\"text\" text=\"특별세액공제-보험료\"/><Cell col=\"59\" colspan=\"2\" displaytype=\"text\" text=\"특별세액공제-의료비\"/><Cell col=\"61\" colspan=\"9\" displaytype=\"text\" text=\"특별세액공제-교육비\"/><Cell col=\"70\" colspan=\"5\" displaytype=\"text\" text=\"특별세액공제-기부금\"/><Cell col=\"75\" rowspan=\"2\" displaytype=\"text\" text=\"주택자금차입&#10;이자세액공제\" wordwrap=\"true\"/><Cell col=\"76\" rowspan=\"2\" displaytype=\"text\" text=\"월세액\"/><Cell col=\"77\" colspan=\"5\" displaytype=\"text\" text=\"외국인근로자\"/><Cell row=\"1\" col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell row=\"1\" col=\"4\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell row=\"1\" col=\"6\" displaytype=\"text\" text=\"배우자\"/><Cell row=\"1\" col=\"7\" displaytype=\"text\" text=\"부양가족\"/><Cell row=\"1\" col=\"8\" displaytype=\"text\" text=\"경로자\"/><Cell row=\"1\" col=\"9\" displaytype=\"text\" text=\"장애인\"/><Cell row=\"1\" col=\"10\" displaytype=\"text\" text=\"부녀자\"/><Cell row=\"1\" col=\"11\" displaytype=\"text\" text=\"한부모\"/><Cell row=\"1\" col=\"12\" displaytype=\"text\" text=\"국민연금(전)\"/><Cell row=\"1\" col=\"13\" displaytype=\"text\" text=\"국민연금(현)\"/><Cell row=\"1\" col=\"14\" displaytype=\"text\" text=\"연금보험(전)\"/><Cell row=\"1\" col=\"15\" displaytype=\"text\" text=\"연금보험(현)\"/><Cell row=\"1\" col=\"16\" displaytype=\"text\" text=\"건강보험(전)\"/><Cell row=\"1\" col=\"17\" displaytype=\"text\" text=\"건강보험(현)\"/><Cell row=\"1\" col=\"18\" displaytype=\"text\" text=\"고용보험(전)\"/><Cell row=\"1\" col=\"19\" displaytype=\"text\" text=\"고용보험(현)\"/><Cell row=\"1\" col=\"20\" displaytype=\"text\" text=\"임차차입금&#10;(대출기관)\"/><Cell row=\"1\" col=\"21\" displaytype=\"text\" text=\"임차차입금&#10;(거주자)\"/><Cell row=\"1\" col=\"22\" displaytype=\"text\" text=\"저당차입금1\"/><Cell row=\"1\" col=\"23\" displaytype=\"text\" text=\"저당차입금2\"/><Cell row=\"1\" col=\"24\" displaytype=\"text\" text=\"저당차입금3\"/><Cell row=\"1\" col=\"25\" displaytype=\"text\" text=\"저당차입금4\"/><Cell row=\"1\" col=\"26\" displaytype=\"text\" text=\"저당차입금5\"/><Cell row=\"1\" col=\"27\" displaytype=\"text\" text=\"저당차입금6\"/><Cell row=\"1\" col=\"28\" displaytype=\"text\" text=\"저당차입금7\"/><Cell row=\"1\" col=\"29\" displaytype=\"text\" text=\"저당차입금8\"/><Cell row=\"1\" col=\"30\" displaytype=\"text\" text=\"저당차입금9\"/><Cell row=\"1\" col=\"34\" displaytype=\"text\" text=\"2013년\"/><Cell row=\"1\" col=\"35\" displaytype=\"text\" text=\"2014년\"/><Cell row=\"1\" col=\"36\" displaytype=\"text\" text=\"2015년 이후\"/><Cell row=\"1\" col=\"37\" displaytype=\"text\" text=\"신용카드\"/><Cell row=\"1\" col=\"38\" displaytype=\"text\" text=\"직불카드\"/><Cell row=\"1\" col=\"39\" displaytype=\"text\" text=\"현금영수증\"/><Cell row=\"1\" col=\"40\" displaytype=\"text\" text=\"전통시장\"/><Cell row=\"1\" col=\"41\" displaytype=\"text\" text=\"대중교통\"/><Cell row=\"1\" col=\"45\" displaytype=\"text\" text=\"납세액(외화)\"/><Cell row=\"1\" col=\"46\" displaytype=\"text\" text=\"납세액(원화)\"/><Cell row=\"1\" col=\"47\" displaytype=\"text\" text=\"납세국명\"/><Cell row=\"1\" col=\"48\" displaytype=\"text\" text=\"납부일\"/><Cell row=\"1\" col=\"49\" displaytype=\"text\" text=\"신청서제출일\"/><Cell row=\"1\" col=\"50\" displaytype=\"text\" text=\"국외근무처\"/><Cell row=\"1\" col=\"51\" displaytype=\"text\" text=\"근무기간\"/><Cell row=\"1\" col=\"52\" displaytype=\"text\" text=\"직책\"/><Cell row=\"1\" col=\"57\" displaytype=\"text\" text=\"보장성보험\"/><Cell row=\"1\" col=\"58\" displaytype=\"text\" text=\"장애인보험\"/><Cell row=\"1\" col=\"59\" displaytype=\"text\" text=\"본인/경로/&#10;장애/난임\"/><Cell row=\"1\" col=\"60\" displaytype=\"text\" text=\"일반의료비\"/><Cell row=\"1\" col=\"61\" displaytype=\"text\" text=\"본인\"/><Cell row=\"1\" col=\"62\" displaytype=\"text\" text=\"취학전아동\"/><Cell row=\"1\" col=\"63\" displaytype=\"text\" text=\"취학전교육비\"/><Cell row=\"1\" col=\"64\" displaytype=\"text\" text=\"초중고학생\"/><Cell row=\"1\" col=\"65\" displaytype=\"text\" text=\"초중고교육비\"/><Cell row=\"1\" col=\"66\" displaytype=\"text\" text=\"대학생\"/><Cell row=\"1\" col=\"67\" displaytype=\"text\" text=\"대학생교육비\"/><Cell row=\"1\" col=\"68\" displaytype=\"text\" text=\"장애인\"/><Cell row=\"1\" col=\"69\" displaytype=\"text\" text=\"장애인교육비\"/><Cell row=\"1\" col=\"70\" displaytype=\"text\" text=\"정치자금\"/><Cell row=\"1\" col=\"71\" displaytype=\"text\" text=\"법정기부금\"/><Cell row=\"1\" col=\"72\" displaytype=\"text\" text=\"우리사주기부금\"/><Cell row=\"1\" col=\"73\" displaytype=\"text\" text=\"지정기부금&#10;(종교단체외)\"/><Cell row=\"1\" col=\"74\" displaytype=\"text\" text=\"지정기부금&#10;(종교단체)\"/><Cell row=\"1\" col=\"77\" displaytype=\"text\" text=\"입국목적\"/><Cell row=\"1\" col=\"78\" displaytype=\"text\" text=\"근로제공일\"/><Cell row=\"1\" col=\"79\" displaytype=\"text\" text=\"만료일\"/><Cell row=\"1\" col=\"80\" displaytype=\"text\" text=\"신청서접수일\"/><Cell row=\"1\" col=\"81\" displaytype=\"text\" text=\"신청서제출일\"/><Cell row=\"1\" col=\"82\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left;background2: ;\" text=\"bind:YEA_DEPT_NM\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center;background2: ;\" text=\"bind:YEA_EMP_NO\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center;background2: ;\" text=\"bind:YEA_EMP_NM\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;background2: ;\" text=\"bind:YEA_INC_STR025\"/><Cell col=\"4\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center;background2: ;\" text=\"bind:YEA_PRC_STR001\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" style=\"align:center;background2: ;\" text=\"bind:YEA_PRC_STR002\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAMI_CNT001\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAMI_CNT002\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAMI_CNT003\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAMI_CNT004\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAMI_CNT005\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_FAMI_CNT006\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM001\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM002\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_SUM001\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_SUM002\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM011\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM012\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM013\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM014\"/><Cell col=\"20\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM015\"/><Cell col=\"21\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM016\"/><Cell col=\"22\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM017\"/><Cell col=\"23\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM018\"/><Cell col=\"24\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM019\"/><Cell col=\"25\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM020\"/><Cell col=\"26\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM021\"/><Cell col=\"27\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM077\"/><Cell col=\"28\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM078\"/><Cell col=\"29\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM079\"/><Cell col=\"30\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM080\"/><Cell col=\"31\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM022\"/><Cell col=\"32\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM023\"/><Cell col=\"33\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM003\"/><Cell col=\"34\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM005\"/><Cell col=\"35\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM006\"/><Cell col=\"36\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM009\"/><Cell col=\"37\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM034\"/><Cell col=\"38\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM035\"/><Cell col=\"39\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM036\"/><Cell col=\"40\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM037\"/><Cell col=\"41\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM038\"/><Cell col=\"42\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM043\"/><Cell col=\"43\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM045\"/><Cell col=\"44\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM047\"/><Cell col=\"45\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM071\"/><Cell col=\"46\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM072\"/><Cell col=\"47\" displaytype=\"number\" style=\"align:left;background2: ;\" text=\"bind:YEA_INC_STR010\"/><Cell col=\"48\" displaytype=\"number\" style=\"align:left;background2: ;\" text=\"bind:YEA_INC_STR011\"/><Cell col=\"49\" displaytype=\"number\" style=\"align:left;background2: ;\" text=\"bind:YEA_INC_STR012\"/><Cell col=\"50\" displaytype=\"number\" style=\"align:left;background2: ;\" text=\"bind:YEA_INC_STR013\"/><Cell col=\"51\" displaytype=\"number\" style=\"align:left;background2: ;\" text=\"bind:YEA_INC_STR014\"/><Cell col=\"52\" displaytype=\"number\" style=\"align:left;background2: ;\" text=\"bind:YEA_INC_STR015\"/><Cell col=\"53\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM048\"/><Cell col=\"54\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM088\"/><Cell col=\"55\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM089\"/><Cell col=\"56\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_SUM007\"/><Cell col=\"57\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM052\"/><Cell col=\"58\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM053\"/><Cell col=\"59\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM054\"/><Cell col=\"60\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM055\"/><Cell col=\"61\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM056\"/><Cell col=\"62\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM057\"/><Cell col=\"63\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM058\"/><Cell col=\"64\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM059\"/><Cell col=\"65\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM060\"/><Cell col=\"66\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM061\"/><Cell col=\"67\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM062\"/><Cell col=\"68\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM063\"/><Cell col=\"69\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM064\"/><Cell col=\"70\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_SUM008\"/><Cell col=\"71\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM067\"/><Cell col=\"72\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM044\"/><Cell col=\"73\" style=\"align:right;\" text=\"bind:YEA_INC_NUM068\"/><Cell col=\"74\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM069\"/><Cell col=\"75\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM073\"/><Cell col=\"76\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:YEA_INC_NUM074\"/><Cell col=\"77\" displaytype=\"text\" style=\"align:left;background2: ;\" text=\"bind:YEA_INC_STR001\"/><Cell col=\"78\" displaytype=\"date\" style=\"align:center;background2: ;\" text=\"bind:YEA_INC_STR002\" calendardisplaynulltype=\"none\"/><Cell col=\"79\" displaytype=\"date\" style=\"align:center;background2: ;\" text=\"bind:YEA_INC_STR009\" calendardisplaynulltype=\"none\"/><Cell col=\"80\" displaytype=\"date\" style=\"align:center;background2: ;\" text=\"bind:YEA_INC_STR003\" calendardisplaynulltype=\"none\"/><Cell col=\"81\" displaytype=\"date\" style=\"align:center;background2: ;\" text=\"bind:YEA_INC_STR004\" calendardisplaynulltype=\"none\"/><Cell col=\"82\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "0", "4", "168", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "19", "216", "6", null, null, this);
            obj.set_taborder("4");
            obj.set_text("h 6");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "467", "0", "80", "25", null, null, this);
            obj.set_taborder("5");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("개인자료등록현황(2016)");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("YEAA0060_2016.xfdl", "script::lib_script_common.xjs");
        this.addIncludeScript("YEAA0060_2016.xfdl", "script::lib_script_common_YEA.xjs");
        this.registerScript("YEAA0060_2016.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	YEAA0060 개인자료등록확인
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.31		안윤준		Initial Created.
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
        //include "script::lib_script_common_YEA.xjs";			  //연말정산용 추가!!!
        /**********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST  = "TTFTTTTF";
        this.sPACKAGENAME = "YEAA0060_2016";

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
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
         	//this.fnc_GetComboDs(this.dsCombo);	
         	
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
        	this.fnc_DatasetClear("dsYEA_INCDEC");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsYEA_INCDEC=dsYEA_INCDEC";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");

        }

        /*------------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	// 기능 없음
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	//if (this.fn_DeleteCheck()) this.dsYEA_INCDEC.deleteMultiRows(this.grdYEA_INCDEC.getSelectedDatasetRows());
        	if (this.fn_DeleteCheck()) this.dsYEA_INCDEC.deleteRow(this.dsYEA_INCDEC.rowposition);
        	
        	this.grdYEA_INCDEC.setFocus();
        	
        }

        /*------------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	this.fnc_DataSetCancel("dsYEA_INCDEC");
        	this.grdYEA_INCDEC.setFocus();

        }

        /*------------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {
            
            if (!this.fn_SaveItemCheck()) return;
        	
        	var sMethodName = "SAVE00";
        	var sInDataSet = "dsYEA_INCDEC=dsYEA_INCDEC:U ";
        	var sOutDataSet = "";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME,sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdYEA_INCDEC.setFocus();

        }

        /*------------------------+
         |  08.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);

        }

        /*------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	// 기능 없음	
        }

        /*------------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsYEA_INCDEC", this);
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
        	if (this.fnc_DatasetChangeCheck("dsYEA_INCDEC")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.fnc_Length(this.fnc_Trim(this.parent.spnSHRYEA_STD_YY.value)) < 1) {
        		return this.fnc_SearchCheckPostAction("TMM072", "기준년도", this.calSHRPASE_STDT);
        	}

        	return true;

        }

        /*-------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	if (this.fnc_DatasetChangeCheck("dsYEA_INCDEC")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	var iSelectRowCount = this.fnc_SelectRowCount(this.grdYEA_INCDEC);
        	
        	if(this.dsYEA_INCDEC.getColumn(this.dsYEA_INCDEC.rowposition, "YEA_INC_STR025") == "1" || this.dsYEA_INCDEC.getColumn(this.dsYEA_INCDEC.rowposition, "YEA_PRC_STR001") == "1"){
        		this.fnc_Message("YEA016");
        		return false;
        	}

        	//if (iSelectRowCount > 1) { YEA_INC_STR025   YEA_PRC_STR001
            //    return this.fnc_Confirm("선택된 자료 [ " + iSelectRowCount + " ] 건을 삭제 하시겠습니까?");
        	//} else {
        		var sQuestionText = "사원명 : " + this.dsYEA_INCDEC.getColumn(this.dsYEA_INCDEC.rowposition, "YEA_EMP_NM");
        		return this.fnc_Confirm("[ " + sQuestionText + " ] 자료를 삭제 하시겠습니까?");
        	//}
        }

        /*-------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
            if (!this.fnc_DatasetChangeCheck("dsYEA_INCDEC")) {
        		this.fnc_Message("TMM003");
        		return false;
        	}

        	return true;

        }

        /*-----------------------------------------+
        |  Service 호출 시 넘어 갈 Argument 생성!  |
        +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 		    	+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		    + this.fnc_Quote(sKind);
        		sReturnString += " YEA_STD_YY=" 		+ this.fnc_Quote(this.fnc_Trim(this.fnc_SubStr(this.parent.spnSHRYEA_STD_YY.value,0 ,4))); 
        		sReturnString += " YEA_DEPT_CD=" 		+ this.fnc_Quote(this.fnc_Trim(this.parent.edtSHRYEA_DEPT_CD.value));    //부서코드
        		sReturnString += " YEA_EMP_NO=" 		+ this.fnc_Quote(this.fnc_Trim(this.parent.edtSHRYEA_EMP_NO.value));    //사번
        		sReturnString += " YEA_INOFFICE_CD=" 	+ this.fnc_Quote(this.fnc_Trim(this.parent.cmbSHRYEA_INOFFICE_CD.value));    //재직구분
        				
        	// 저장 Argument 생성
        	} else if (sKind == 'SAVE00') {	
        		sReturnString  = " pgm=" 			+ this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" 		+ this.fnc_Quote(sKind);
        	
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
        		this.fnc_Information(this.stInformation, this.dsYEA_INCDEC.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsYEA_INCDEC.getCaseCount("dataset.getRowLevel(currow)==0"));
        				
        		for (var nRow = 0; nRow < this.dsYEA_INCDEC.rowcount; nRow++) {
        			this.dsYEA_INCDEC.setColumn(nRow, "YEA_INC_STR026", application.GBL_HTTPURL + this.dsYEA_INCDEC.getColumn(nRow, "YEA_INC_STR026"));
        		}
        		
        		this.dsYEA_INCDEC.applyChange();
                
        	} else if (sMethodName == "SAVE00") {
        		this.fnc_Information(this.stInformation, 0, "SAVE");
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        		
        	/*} else if (sMethodName == "GetCommCode") {
        		var arrParam 		= new Array();
        		var arrInt   		= 0;
        		arrParam[arrInt++]  = "GRID,grdYEA_INCDEC,dsCADN_CODE,YEA_PRC_STR002";
        		this.fnc_CommonCodeInnerBind(arrParam);
        		*/
        	}

        }

        /*--------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj) {
        	// 기능 없음
        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         *****************************************************************************************************/

        /*------------------------+
         |  그리드 셀클릭 시 |
         +------------------------*/
        /*this.grdYEA_INCDEC_oncellclick = function(obj:Grid, e:nexacro.GridClickEventInfo) {
        	var sColumnID = this._GetBindColumnNameByIndex(obj, e.col);
        	
        	if ( sColumnID == "YEA_INC_STR026" ) {
        		
        		var sFILE_IDXX = eval("this." + obj.binddataset).getColumn(e.row, "YEA_INC_STR048");		//PDF파일 물리파일명
        		var sFILE_PATH = eval("this." + obj.binddataset).getColumn(e.row, "YEA_INC_STR049");		//PDF파일 파일경로
        		var sPFIL_NAME = eval("this." + obj.binddataset).getColumn(e.row, "YEA_INC_STR050");		//PDF파일 논리파일명
        		
        		if ( this.fnc_Length(this.fnc_Trim(sFILE_PATH)) < 1 || this.fnc_Length(this.fnc_Trim(sPFIL_NAME)) < 1 ) {
        			this.fnc_Alert("다운로드 대상 정보가 부족합니다. 다운로드 할 수 없습니다.");
        			return;
        		}
        		
        		window.open("/core/erp/com/ComImageView.do?path=" + sFILE_PATH + "&name=" + sFILE_IDXX, "winViewPDF", "status=no,toolbar=no,scrollbars=no,width=840,height=610");
        	}
        }*/

        /*------------------------+
         |  그리드헤더클릭 시 |
         +------------------------*/
        this.grdYEA_INCDEC_onheadclick = function(obj,e) {
        	var sColumnID = this._GetBindColumnNameByIndex(obj, e.col);
        	var sCheckedValue = "";
        	
        	if (
        		obj.getCellProperty("Head", e.cell, "edittype") == "checkbox"
        		&& ( sColumnID == "YEA_INC_STR025" || sColumnID == "YEA_PRC_STR001")	//입력마감 또는 확정여부
        	) {
        	
        		if (obj.getCellProperty("Head", e.cell, "text") == "1") {
        			sCheckedValue = "0";
        		} else {
        			sCheckedValue = "1";
        		}
        		
        		obj.setCellProperty("Head", e.cell, "text", sCheckedValue);
        		for (var nRow = 0; nRow < eval("this." + obj.binddataset).rowcount; nRow++) {
        			eval("this." + obj.binddataset).setColumn(nRow, sColumnID, sCheckedValue);
        		}
        	}
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsYEA_INCDEC.addEventHandler("onrowposchanged", this.YEA_INCDEC_onrowposchanged, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);

        };

        this.loadIncludeScript("YEAA0060_2016.xfdl");

       
    };
}
)();
