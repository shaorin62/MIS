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
                this.set_name("PAYF0050");
                this.set_titletext("퇴직금정산내역");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSNAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CODEID\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"HEADFLAG\" size=\"256\" prop=\"default\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODEID\">RERE_CODE</Col><Col id=\"DSNAME\">dsRERE_CODE</Col><Col id=\"HEADFLAG\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsPY_RTPROC", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPL_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"EMPL_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"DEPT_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"RECE_SEQN\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"RSTR_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"REND_DATE\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"CALC_GUBN\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PFIR_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"PBUS_NUMB\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MIDL_RPAY\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MINT_RPAY\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MITA_RPAY\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FINL_RPAY\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FINT_RPAY\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FITA_RPAY\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TOTL_RPAY\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TLNT_RPAY\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TLTA_RPAY\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MIDL_ISDT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MIDL_STDT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MIDL_ENDT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MIDL_PYDT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"MICT_MONT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MIEX_MONT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MIAD_MONT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"MICT_YEAR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FINL_ISDT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FINL_STDT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FINL_ENDT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FINL_PYDT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"FICT_MONT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FIEX_MONT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FIAD_MONT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"FICT_YEAR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_ISDT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_STDT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TOTL_ENDT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TLCT_MONT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TLEX_MONT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TLAD_MONT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TLOL_MONT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TLCT_YEAR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BEFO_STDT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BEFO_ENDT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"BFCT_MONT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BFEX_MONT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BFAD_MONT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BFCT_YEAR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AFTR_STDT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AFTR_ENDT\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AFCT_MONT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AFEX_MONT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AFAD_MONT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AFCT_YEAR\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"AFRD_AMOT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CSYD_AMOT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"STAN_ASST\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BFST_ASST\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BFYA_STAD\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BFYA_CTAX\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"BEFO_CTAX\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AFST_ASST\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AFYA_STAD\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AFCS_ASST\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AFCC_TAXX\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AFYA_CTAX\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"AFTR_CTAX\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TLST_ASST\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TLYA_STAD\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TLCS_ASST\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TLCC_TAXX\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TLYA_CTAX\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TOTL_CTAX\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TOTL_PPTX\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TLSR_TAMT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TAPS_TAMT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TAPF_NAME\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"TAPB_NUMB\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TAPA_NUMB\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TAPD_DATE\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TAPD_AMOT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TAPT_RPAY\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"TAPT_TAMT\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SURE_ITAX\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SURE_RTAX\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"SURE_FTAX\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PORE_ITAX\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PORE_RTAX\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"PORE_FTAX\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DEDU_ITAX\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DEDU_RTAX\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DEDU_FTAX\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"DEDU_TOT \" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CLOS_YSNO\" size=\"256\" prop=\"default\" type=\"BIGDECIMAL\"/><Column id=\"CALC_REIN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CWYC_DDUC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONV_WAGE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"COWA_DDUC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REIN_STAS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONV_CLTX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CLCR_TXAM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TAXX_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SPUE_CLTX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SURE_TAMT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_cssclass("styFormSearchBox");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle5", "absolute", "204", "71", "150", "21", null, null, this);
            obj.set_text("퇴직사유");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCap");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPY_RTPROC", "absolute", "8", "128", null, null, "25", "15", this);
            obj.set_binddataset("dsPY_RTPROC");
            obj.set_cellsizingtype("both");
            obj.set_enable("true");
            obj.getSetter("autofitminwidth").set("1035");
            obj.set_taborder("2");
            obj.set_tabstop("true");
            obj.set_tooltiptype("inplace");
            obj.getSetter("usecontextmenu").set("true");
            obj.set_useselcolor("true");
            obj.set_visible("true");
            obj.set_wheelscrollrow("1");
            obj.set_cssclass("styGrid01");
            obj._setContents("<Formats><Format id=\"Default\"><Columns><Column size=\"120\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"35\"/><Column size=\"79\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"106\"/><Column size=\"114\"/><Column size=\"74\"/><Column size=\"81\"/><Column size=\"82\"/><Column size=\"99\"/><Column size=\"100\"/><Column size=\"95\"/><Column size=\"80\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"105\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"80\"/><Column size=\"104\"/><Column size=\"91\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"95\"/><Column size=\"82\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" displaytype=\"text\" text=\"부서명\"/><Cell col=\"1\" rowspan=\"3\" displaytype=\"text\" text=\"사원번호\"/><Cell col=\"2\" rowspan=\"3\" displaytype=\"text\" text=\"사원명\"/><Cell col=\"3\" rowspan=\"3\" displaytype=\"text\" text=\"회차\"/><Cell col=\"4\" rowspan=\"3\" displaytype=\"text\" text=\"퇴직사유\"/><Cell col=\"5\" rowspan=\"2\" colspan=\"2\" displaytype=\"text\" text=\"귀속연도\"/><Cell col=\"7\" colspan=\"4\" displaytype=\"text\" text=\"퇴직급여현황\"/><Cell col=\"11\" colspan=\"12\" displaytype=\"text\" text=\"근속연수\"/><Cell col=\"23\" colspan=\"8\" displaytype=\"text\" text=\"퇴직소득과세표준계산\"/><Cell col=\"31\" colspan=\"16\" displaytype=\"text\" text=\"퇴직소득세액\"/><Cell col=\"47\" colspan=\"8\" displaytype=\"text\" text=\"이연퇴직소득세액\"/><Cell col=\"55\" colspan=\"10\" displaytype=\"text\" text=\"납부명세\"/><Cell row=\"1\" col=\"7\" colspan=\"2\" displaytype=\"text\" text=\"중간지급\"/><Cell row=\"1\" col=\"9\" colspan=\"2\" displaytype=\"text\" text=\"최종분\"/><Cell row=\"1\" col=\"11\" colspan=\"6\" displaytype=\"text\" text=\"중간지급\"/><Cell row=\"1\" col=\"17\" colspan=\"6\" displaytype=\"text\" text=\"최종분\"/><Cell row=\"1\" col=\"23\" colspan=\"3\" displaytype=\"text\" text=\"정산(합산)\"/><Cell row=\"1\" col=\"26\" colspan=\"5\" displaytype=\"text\" text=\"2016.1.1 이후\"/><Cell row=\"1\" col=\"31\" colspan=\"4\" displaytype=\"text\" text=\"2012.12.31. 이전\"/><Cell row=\"1\" col=\"35\" colspan=\"6\" displaytype=\"text\" text=\"2013.1.1 이후\"/><Cell row=\"1\" col=\"41\" colspan=\"6\" displaytype=\"text\" text=\"2016.1.1 이후\"/><Cell row=\"1\" col=\"47\" rowspan=\"2\" displaytype=\"text\" text=\"신고대상세액\"/><Cell row=\"1\" col=\"48\" colspan=\"5\" displaytype=\"text\" text=\"연금계좌 입금내역\"/><Cell row=\"1\" col=\"53\" rowspan=\"2\" displaytype=\"text\" text=\"퇴직급여\"/><Cell row=\"1\" col=\"54\" rowspan=\"2\" displaytype=\"text\" text=\"퇴직소득세\"/><Cell row=\"1\" col=\"55\" colspan=\"3\" displaytype=\"text\" text=\"신고대상\"/><Cell row=\"1\" col=\"58\" colspan=\"3\" displaytype=\"text\" text=\"이연퇴직\"/><Cell row=\"1\" col=\"61\" colspan=\"4\" displaytype=\"text\" text=\"차감징수\"/><Cell row=\"2\" col=\"5\" displaytype=\"text\" text=\"시작일\"/><Cell row=\"2\" col=\"6\" displaytype=\"text\" text=\"종료일\"/><Cell row=\"2\" col=\"7\" displaytype=\"text\" text=\"퇴직급여\"/><Cell row=\"2\" col=\"8\" displaytype=\"text\" text=\"비과세퇴직\"/><Cell row=\"2\" col=\"9\" displaytype=\"text\" text=\"퇴직급여\"/><Cell row=\"2\" col=\"10\" displaytype=\"text\" text=\"비과세퇴직\"/><Cell row=\"2\" col=\"11\" displaytype=\"text\" text=\"입사일\"/><Cell row=\"2\" col=\"12\" displaytype=\"text\" text=\"기산일\"/><Cell row=\"2\" col=\"13\" displaytype=\"text\" text=\"퇴사일\"/><Cell row=\"2\" col=\"14\" displaytype=\"text\" text=\"지급일\"/><Cell row=\"2\" col=\"15\" text=\"근속월수\"/><Cell row=\"2\" col=\"16\" displaytype=\"text\" text=\"근속연수\"/><Cell row=\"2\" col=\"17\" displaytype=\"text\" text=\"입사일\"/><Cell row=\"2\" col=\"18\" displaytype=\"text\" text=\"기산일\"/><Cell row=\"2\" col=\"19\" displaytype=\"text\" text=\"퇴사일\"/><Cell row=\"2\" col=\"20\" text=\"근속월수\"/><Cell row=\"2\" col=\"21\" text=\"중복월수\"/><Cell row=\"2\" col=\"22\" displaytype=\"text\" text=\"근속연수\"/><Cell row=\"2\" col=\"23\" displaytype=\"text\" text=\"정률공제액\"/><Cell row=\"2\" col=\"24\" displaytype=\"text\" text=\"근속연수공제액\"/><Cell row=\"2\" col=\"25\" displaytype=\"text\" text=\"퇴직소득과세표준\"/><Cell row=\"2\" col=\"26\" displaytype=\"text\" text=\"정산퇴직소득\"/><Cell row=\"2\" col=\"27\" displaytype=\"text\" text=\"근속연수공제\"/><Cell row=\"2\" col=\"28\" displaytype=\"text\" text=\"환산급여\"/><Cell row=\"2\" col=\"29\" displaytype=\"text\" text=\"환산급여별공제\"/><Cell row=\"2\" col=\"30\" displaytype=\"text\" text=\"퇴직소득과세표준\"/><Cell row=\"2\" col=\"31\" displaytype=\"text\" text=\"과세표준\"/><Cell row=\"2\" col=\"32\" displaytype=\"text\" text=\"연평균과세표\"/><Cell row=\"2\" col=\"33\" displaytype=\"text\" text=\"연평균산출세액\"/><Cell row=\"2\" col=\"34\" displaytype=\"text\" text=\"산출세액\"/><Cell row=\"2\" col=\"35\" displaytype=\"text\" text=\"과세표준\"/><Cell row=\"2\" col=\"36\" displaytype=\"text\" text=\"연평균과세표준\"/><Cell row=\"2\" col=\"37\" displaytype=\"text\" text=\"환산과세표준\"/><Cell row=\"2\" col=\"38\" displaytype=\"text\" text=\"환산산출세액\"/><Cell row=\"2\" col=\"39\" displaytype=\"text\" text=\"연평균산출세액\"/><Cell row=\"2\" col=\"40\" displaytype=\"text\" text=\"산출세액\"/><Cell row=\"2\" col=\"41\" displaytype=\"text\" text=\"환산산출세액\"/><Cell row=\"2\" col=\"42\" displaytype=\"text\" text=\"산출세액\"/><Cell row=\"2\" col=\"43\" displaytype=\"text\" text=\"퇴직일이하속하는 과세연도\"/><Cell row=\"2\" col=\"44\" displaytype=\"text\" text=\"특례전용산출세액\"/><Cell row=\"2\" col=\"45\" displaytype=\"text\" text=\"기납부세액\"/><Cell row=\"2\" col=\"46\" displaytype=\"text\" text=\"신고대상세액\"/><Cell row=\"2\" col=\"48\" displaytype=\"text\" text=\"사업자명\"/><Cell row=\"2\" col=\"49\" displaytype=\"text\" text=\"사업자등록번호\"/><Cell row=\"2\" col=\"50\" displaytype=\"text\" text=\"계좌번호\"/><Cell row=\"2\" col=\"51\" displaytype=\"text\" text=\"입금일\"/><Cell row=\"2\" col=\"52\" displaytype=\"text\" text=\"입금액\"/><Cell row=\"2\" col=\"55\" displaytype=\"text\" text=\"소득세\"/><Cell row=\"2\" col=\"56\" displaytype=\"text\" text=\"주민세\"/><Cell row=\"2\" col=\"57\" displaytype=\"text\" text=\"농특세\"/><Cell row=\"2\" col=\"58\" displaytype=\"text\" text=\"소득세\"/><Cell row=\"2\" col=\"59\" displaytype=\"text\" text=\"주민세\"/><Cell row=\"2\" col=\"60\" displaytype=\"text\" text=\"농특세\"/><Cell row=\"2\" col=\"61\" displaytype=\"text\" text=\"소득세\"/><Cell row=\"2\" col=\"62\" displaytype=\"text\" text=\"주민세\"/><Cell row=\"2\" col=\"63\" displaytype=\"text\" text=\"농특세\"/><Cell row=\"2\" col=\"64\" displaytype=\"text\" text=\"계\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left\" text=\"bind:DEPT_NAME\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:center\" text=\"bind:EMPL_NUMB\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:center\" text=\"bind:EMPL_NAME\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:center middle;\" text=\"bind:RECE_SEQN\"/><Cell col=\"4\" displaytype=\"text\" style=\"align:center middle;\" text=\"bind:RERE_CODE\"/><Cell col=\"5\" displaytype=\"date\" style=\"align:center\" text=\"bind:RSTR_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"date\" style=\"align:center\" text=\"bind:REND_DATE\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right\" text=\"bind:MIDL_RPAY\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right\" text=\"bind:MINT_RPAY\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right\" text=\"bind:FINL_RPAY\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right\" text=\"bind:FINT_RPAY\"/><Cell col=\"11\" displaytype=\"date\" style=\"align:center\" text=\"bind:MIDL_ISDT\" calendardisplaynulltype=\"none\"/><Cell col=\"12\" displaytype=\"date\" style=\"align:center\" text=\"bind:MIDL_STDT\" calendardisplaynulltype=\"none\"/><Cell col=\"13\" displaytype=\"date\" style=\"align:center\" text=\"bind:MIDL_ENDT\" calendardisplaynulltype=\"none\"/><Cell col=\"14\" displaytype=\"date\" style=\"align:center\" text=\"bind:MIDL_PYDT\" calendardisplaynulltype=\"none\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:center;\" text=\"expr:nexacro.toNumber(MICT_MONT) == 0 ? &quot;&quot; : MICT_MONT\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:center;\" text=\"expr:nexacro.toNumber(MICT_YEAR) == 0 ? &quot;&quot; : MICT_YEAR\"/><Cell col=\"17\" displaytype=\"date\" style=\"align:center\" text=\"bind:TOTL_ISDT\" calendardisplaynulltype=\"none\"/><Cell col=\"18\" displaytype=\"date\" style=\"align:center\" text=\"bind:TOTL_STDT\" calendardisplaynulltype=\"none\"/><Cell col=\"19\" displaytype=\"date\" style=\"align:center\" text=\"bind:TOTL_ENDT\" calendardisplaynulltype=\"none\"/><Cell col=\"20\" style=\"align:center;\" text=\"bind:TLCT_MONT\"/><Cell col=\"21\" style=\"align:center;\" text=\"bind:TLOL_MONT\"/><Cell col=\"22\" displaytype=\"number\" style=\"align:center;\" text=\"bind:TLCT_YEAR\"/><Cell col=\"23\" displaytype=\"number\" style=\"align:right\" text=\"bind:AFRD_AMOT\"/><Cell col=\"24\" displaytype=\"number\" style=\"align:right\" text=\"bind:CSYD_AMOT\"/><Cell col=\"25\" displaytype=\"number\" style=\"align:right\" text=\"bind:STAN_ASST\"/><Cell col=\"26\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CALC_REIN\"/><Cell col=\"27\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CWYC_DDUC\"/><Cell col=\"28\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CONV_WAGE\"/><Cell col=\"29\" displaytype=\"number\" style=\"align:right;\" text=\"bind:COWA_DDUC\"/><Cell col=\"30\" displaytype=\"number\" style=\"align:right;\" text=\"bind:REIN_STAS\"/><Cell col=\"31\" displaytype=\"number\" style=\"align:right\" text=\"bind:BFST_ASST\"/><Cell col=\"32\" displaytype=\"number\" style=\"align:right\" text=\"bind:BFYA_STAD\"/><Cell col=\"33\" displaytype=\"number\" style=\"align:right\" text=\"bind:BFYA_CTAX\"/><Cell col=\"34\" displaytype=\"number\" style=\"align:right\" text=\"bind:BEFO_CTAX\"/><Cell col=\"35\" displaytype=\"number\" style=\"align:right\" text=\"bind:AFST_ASST\"/><Cell col=\"36\" displaytype=\"number\" style=\"align:right\" text=\"bind:AFYA_STAD\"/><Cell col=\"37\" displaytype=\"number\" style=\"align:right\" text=\"bind:AFCS_ASST\"/><Cell col=\"38\" displaytype=\"number\" style=\"align:right\" text=\"bind:AFCC_TAXX\"/><Cell col=\"39\" displaytype=\"number\" style=\"align:right\" text=\"bind:AFYA_CTAX\"/><Cell col=\"40\" displaytype=\"number\" style=\"align:right\" text=\"bind:AFTR_CTAX\"/><Cell col=\"41\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CONV_CLTX\"/><Cell col=\"42\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CLCR_TXAM\"/><Cell col=\"43\" style=\"align: ;\" text=\"bind:TAXX_YEAR\"/><Cell col=\"44\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPUE_CLTX\"/><Cell col=\"45\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOTL_PPTX\"/><Cell col=\"46\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TAPS_TAMT\"/><Cell col=\"47\" displaytype=\"number\" style=\"align:right\" text=\"bind:SURE_TAMT\"/><Cell col=\"48\" displaytype=\"number\" style=\"align:left middle;\" text=\"bind:TAPF_NAME\"/><Cell col=\"49\" displaytype=\"text\" style=\"align: ;\" text=\"bind:TAPB_NUMB\" mask=\"expr:TAPB_NUMB == &quot;&quot; ? &quot;&quot; : &quot;###-##-#####&quot;\"/><Cell col=\"50\" displaytype=\"text\" style=\"align:left;\" text=\"bind:TAPA_NUMB\"/><Cell col=\"51\" displaytype=\"number\" style=\"align:right\" text=\"bind:TAPD_DATE\"/><Cell col=\"52\" displaytype=\"number\" style=\"align:right\" text=\"bind:TAPD_AMOT\"/><Cell col=\"53\" displaytype=\"number\" style=\"align:right\" text=\"bind:TAPT_RPAY\"/><Cell col=\"54\" displaytype=\"number\" style=\"align:right\" text=\"bind:TAPT_TAMT\"/><Cell col=\"55\" displaytype=\"number\" style=\"align:right\" text=\"bind:SURE_ITAX\"/><Cell col=\"56\" displaytype=\"number\" style=\"align:right\" text=\"bind:SURE_RTAX\"/><Cell col=\"57\" displaytype=\"number\" style=\"align:right\" text=\"bind:SURE_FTAX\"/><Cell col=\"58\" displaytype=\"number\" style=\"align:right\" text=\"bind:PORE_ITAX\"/><Cell col=\"59\" displaytype=\"number\" style=\"align:right\" text=\"bind:PORE_RTAX\"/><Cell col=\"60\" displaytype=\"number\" style=\"align:right\" text=\"bind:PORE_FTAX\"/><Cell col=\"61\" displaytype=\"number\" style=\"align:right\" text=\"bind:DEDU_ITAX\"/><Cell col=\"62\" displaytype=\"number\" style=\"align:right\" text=\"bind:DEDU_RTAX\"/><Cell col=\"63\" displaytype=\"number\" style=\"align:right\" text=\"bind:DEDU_FTAX\"/><Cell col=\"64\" displaytype=\"number\" style=\"align:right\" text=\"bind:DEDU_TOT\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" displaytype=\"text\" style=\"align:center\" text=\"합계\"/><Cell col=\"3\" displaytype=\"text\" style=\"align:left\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:left\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right middle;\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: ;\" text=\"expr:dataset.getSum(&quot;MIDL_RPAY&quot;)\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum(&quot;MINT_RPAY&quot;)\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('FINL_RPAY')\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('FINT_RPAY')\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right middle;\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right middle;\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right middle;\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right middle;\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right middle;\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right middle;\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right middle;\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right middle;\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:right middle;\"/><Cell col=\"20\" displaytype=\"number\" style=\"align:right middle;\"/><Cell col=\"21\" displaytype=\"number\" style=\"align:right middle;\"/><Cell col=\"22\" displaytype=\"number\" style=\"align:right middle;\"/><Cell col=\"23\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('AFRD_AMOT')\"/><Cell col=\"24\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('CSYD_AMOT')\"/><Cell col=\"25\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('STAN_ASST')\"/><Cell col=\"26\" displaytype=\"number\" expr=\"expr:dataset.getSum('CALC_REIN')\"/><Cell col=\"27\" displaytype=\"number\" expr=\"expr:dataset.getSum('CWYC_DDUC')\"/><Cell col=\"28\" displaytype=\"number\" expr=\"expr:dataset.getSum('CONV_WAGE')\"/><Cell col=\"29\" displaytype=\"number\" expr=\"expr:dataset.getSum('COWA_DDUC')\"/><Cell col=\"30\" displaytype=\"number\" expr=\"expr:dataset.getSum('REIN_STAS')\"/><Cell col=\"31\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('BFST_ASST')\"/><Cell col=\"32\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('BFYA_STAD')\"/><Cell col=\"33\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('BFYA_CTAX')\"/><Cell col=\"34\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('BEFO_CTAX')\"/><Cell col=\"35\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('AFST_ASST')\"/><Cell col=\"36\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('AFYA_STAD')\"/><Cell col=\"37\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('AFCS_ASST')\"/><Cell col=\"38\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('AFCC_TAXX')\"/><Cell col=\"39\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('AFYA_CTAX')\"/><Cell col=\"40\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('AFTR_CTAX')\"/><Cell col=\"41\" displaytype=\"number\" expr=\"expr:dataset.getSum('CONV_CLTX')\"/><Cell col=\"42\" displaytype=\"number\" expr=\"expr:dataset.getSum('CLCR_TXAM')\"/><Cell col=\"43\" displaytype=\"number\"/><Cell col=\"44\" displaytype=\"number\" expr=\"expr:dataset.getSum('SPUE_CLTX')\"/><Cell col=\"45\" displaytype=\"number\" expr=\"expr:dataset.getSum('TOTL_PPTX')\"/><Cell col=\"46\" displaytype=\"number\" expr=\"expr:dataset.getSum('SURE_TAMT')\"/><Cell col=\"47\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('TAPS_TAMT')\"/><Cell col=\"48\" displaytype=\"number\" style=\"align:right middle;\"/><Cell col=\"49\" displaytype=\"number\" style=\"align:right middle;\"/><Cell col=\"50\" displaytype=\"number\" style=\"align:right middle;\"/><Cell col=\"51\" displaytype=\"number\" style=\"align:right middle;\"/><Cell col=\"52\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('TAPD_AMOT')\"/><Cell col=\"53\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('TAPT_RPAY')\"/><Cell col=\"54\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('TAPT_TAMT')\"/><Cell col=\"55\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('SURE_ITAX')\"/><Cell col=\"56\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('SURE_RTAX')\"/><Cell col=\"57\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('SURE_FTAX')\"/><Cell col=\"58\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('PORE_ITAX')\"/><Cell col=\"59\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('PORE_RTAX')\"/><Cell col=\"60\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('PORE_FTAX')\"/><Cell col=\"61\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('DEDU_ITAX')\"/><Cell col=\"62\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('DEDU_RTAX')\"/><Cell col=\"63\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('DEDU_FTAX')\"/><Cell col=\"64\" displaytype=\"number\" style=\"align:right middle;\" expr=\"expr:dataset.getSum('DEDU_TOT')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSHRRERE_CODE", "absolute", "272", "71", "130", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_cssclass("styFormSearchCombo");
            obj.set_index("-1");

            obj = new MaskEdit("medSHRBASE_YEAR", "absolute", "96", "71", "80", "21", null, null, this);
            obj.set_mask("####");
            obj.set_taborder("0");
            obj.set_type("string");
            obj.set_cssclass("styFormSearchItem");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("imgSearchTitle0", "absolute", "28", "71", "68", "21", null, null, this);
            obj.set_text("정산년도");
            obj.style.set_align("left");
            obj.set_cssclass("styFormSearchCapBe");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("9");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("10");
            obj.set_text("퇴직금정산내역");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", null, "0", "640", "29", "25", null, this);
            obj.set_taborder("12");
            obj.set_text("홈 > 급여관리 > 퇴직금관리");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "107", "262", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "573", "103", "80", "25", null, null, this);
            obj.set_taborder("14");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("15");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("16");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("17");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", null, null, "15", "31", "0", this);
            obj.set_taborder("18");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("퇴직금정산내역");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::comButtonType01.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PAYF0050.xfdl", "script::lib_script_common.xjs");
        this.registerScript("PAYF0050.xfdl", function() {
        /***************************************************************************************************
         * # Program: 	PAYF0040 퇴직금지급현황
         *
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.28		안윤준		Initial Created.
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

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST 	= "TTFFFFTF"; //버튼순서[종료,조회,입력,삭제,취소,저장,엑셀,인쇄]
        this.sPACKAGENAME 	= "PAYF0050"; //해당 Form에서 사용 할 Package 명
        	
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

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {
        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.fnc_GetComboDs(this.dsCombo);

        	// 조회조건 초기값 세팅
        	this.medSHRBASE_YEAR.set_value(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"), 0, 4));
        	
        }

        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        	
        }

        /*-----------------------+
         |  02.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {
        	
        	if (!this.fn_SearchItemCheck()) return;
        	
        	this.fnc_DatasetClear("dsPY_RTPROC");

        	var sMethodName = "SEARCH00";
        	var sInDataSet 	= "";
        	var sOutDataSet = "dsPY_RTPROC=dsPY_RTPROC";
        	var sArgument 	= this.fn_CreateArgument(sMethodName);
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	this.grdPY_RTPROC.setFocus();
        	
        }

        /*-----------------------------+
         |  03.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	
        }

        /*-----------------------------+
         |  04.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {

        }

        /*-----------------------+
         |  05.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {
        	
        }

        /*-----------------------+
         |  06.저장 버튼 클릭 時  |
         -------------------------*/
        this.fn_Save = function (obj) {

        }

        /*-----------------------+
         |  07.엑셀 버튼 클릭 時  |
         -------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this.name);
        	
        }

        /*-----------------------+
         |  08.인쇄 버튼 클릭 時  |
         +------------------------*/
        this.fn_Print = function (obj) {
        	
        }

        /*-----------------------------------+
         |  10.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {
        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsPY_RTPROC", this);
        	if(!this.fnc_IsEmpty(sMessage)) return sMessage;

        }

        this.fn_FormUnloadProcess = function (obj,e) {
        	this.fnc_FormUnload(obj,e);
        	
        }

        /*-----------------------------------+
         |  11.단축키 처리(Form KeyDown)      |
         +------------------------------------*/
        this.fn_HotKey = function (obj,e) {
        	this.fnc_HotKey(this, e.fromreferenceobject, e);
        	
        }
        /*-----------------------------------+
         |  12.Text Box가 Focus를 받을 때     |
         +------------------------------------*/
        this.fn_EditFocus = function (obj) {
        	this.fnc_EditFocus(obj);
        	
        }

        /**************************************************************************************************
         *                                      공통 Function 처리 부분                                    *
         ***************************************************************************************************/
        /*------------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {

        	if (this.fnc_DatasetChangeCheck("dsPY_RTPROC")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	if (this.fnc_Length(this.fnc_Trim(this.medSHRBASE_YEAR.value)) < 4) {
        		return this.fnc_SearchCheckPostAction("TMM072", "정산년도", this.medSHRBASE_YEAR);
        	}
        	
        	return true;

        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
        this.fn_DeleteCheck = function () {
        	return true;
        	
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {
        	return true;
        	
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {

        	var sReturnString;

        	if (sKind == "SEARCH00") {
        		sReturnString  = " pgm=" 		+ this.fnc_Quote(this.sPACKAGENAME); 
        		sReturnString += " action=" 	+ this.fnc_Quote(sKind); 
        		sReturnString += " BASE_YEAR=" 	+ this.fnc_Quote(this.medSHRBASE_YEAR.value); // 정산년도
        		sReturnString += " RERE_CODE=" 	+ this.fnc_Quote(this.cmbSHRRERE_CODE.value); // 퇴직사유
        	
        	} else if (sKind == "SAVE00") {
        		sReturnString  = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
        	
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

        	if (sMethodName == "SEARCH00") {
        		this.fnc_Information(this.stInformation, this.dsPY_RTPROC.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");
        		this.fnc_Message("TMM018", this.dsPY_RTPROC.getCaseCount("dataset.getRowLevel(currow)==0"));
        	
        	} else if (sMethodName == "GetCommCode") {
        		var arrParam = new Array();
        			arrParam[0] = "COMBO,cmbSHRRERE_CODE,dsRERE_CODE,0"; //퇴직사유
        		this.fnc_CommonCodeInnerBind(arrParam);
        	
        	}
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onclose", this.fn_FormUnloadProcess, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadCheckProcess, this);
            this.cmbSHRRERE_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.medSHRBASE_YEAR.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);

        };

        this.loadIncludeScript("PAYF0050.xfdl");
        this.loadPreloadList();
       
    };
}
)();
