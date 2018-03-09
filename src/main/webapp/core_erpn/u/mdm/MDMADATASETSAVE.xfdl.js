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
                this.set_name("MDME0020");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,1187,717);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMD_MATRXM00", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\" value=\"\"/><Column id=\"CHEK_FILD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"NUMB_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"RMED_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STAX_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDX_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DAYY_WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"HOUR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OSTA_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"OEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_ITMM\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"SECD_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"PRIC_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"AMNT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SIMM_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"OFIC_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"BIGG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BIGG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MIDD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MIDD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SMAL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SMAL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MDIM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PSEQ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OPER_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ISEQ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OSEQ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_ITSQ\" type=\"STRING\" size=\"256\"/><Column id=\"MSEQ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COOP_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"OPER_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"OFER_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"OFIC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"OPER_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ADVR_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ADVR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COLM_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"LCAL_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"HOUR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DAYW_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COOP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COOP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RMED_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RHOU_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"RCON_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"FAIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RBRO_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RARE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RADD_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"RADD_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RSUB_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_MATRXM00_TEMP", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\" value=\"\"/><Column id=\"NUMB_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"RMED_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STAX_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDX_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DAYY_WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"HOUR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OSTA_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"OEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_ITMM\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"SECD_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"PRIC_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"AMNT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SIMM_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"OFIC_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"BIGG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BIGG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MIDD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MIDD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SMAL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SMAL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MDIM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PSEQ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OPER_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ISEQ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OSEQ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_ITSQ\" type=\"STRING\" size=\"256\"/><Column id=\"MSEQ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COOP_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"OPER_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"OFER_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"OFIC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"OPER_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ADVR_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ADVR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COLM_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"LCAL_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"HOUR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DAYW_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COOP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COOP_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_SUBSXM00", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\" value=\"\"/><Column id=\"CHEK_FILD\" size=\"256\" prop=\"default\" type=\"STRING\"/><Column id=\"ENTP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"MDIM_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HOUR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DAYY_WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"PRIC_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"AMNT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SECD_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"OFIC_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"OPER_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"SUBS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ADVR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_WAYY\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_PRID\" type=\"STRING\" size=\"256\"/><Column id=\"ADDX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUSI_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OPER_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"OSEQ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OSEQ_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REPL_PRGM\" type=\"STRING\" size=\"256\"/><Column id=\"PACK_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_SUBSXM00_TEMP", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\" value=\"\"/><Column id=\"NUMB_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"ENTP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"MDIM_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HOUR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DAYY_WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"PRIC_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"AMNT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SECD_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"OFIC_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"OPER_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"SUBS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ADVR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_WAYY\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_PRID\" type=\"STRING\" size=\"256\"/><Column id=\"ADDX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUSI_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OPER_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"OSEQ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OSEQ_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REPL_PRGM\" type=\"STRING\" size=\"256\"/><Column id=\"PACK_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_MATRXM02", this);
            obj._setContents("<ColumnInfo><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"NUMB_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"RMED_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STAX_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDX_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DAYY_WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"HOUR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OSTA_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"OEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_ITMM\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"SECD_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"PRIC_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"AMNT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SIMM_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"OFIC_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"BIGG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BIGG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MIDD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MIDD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SMAL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SMAL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MDIM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PSEQ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OPER_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ISEQ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OSEQ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_ITSQ\" type=\"STRING\" size=\"256\"/><Column id=\"MSEQ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COOP_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"OPER_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"OFER_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"OFIC_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"OPER_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ADVR_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ADVR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COLM_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"LCAL_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"HOUR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DAYW_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COOP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COOP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RMED_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RHOU_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"RCON_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"FAIL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RBRO_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RARE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RADD_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"RADD_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RSUB_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_ETMDXM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHEK_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR_MNTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEQX_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CTIM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CTIM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RMED_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RMED_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"APLY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMPL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HOUR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_MOND\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_TUES\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_WEDN\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_THUR\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_FRID\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_SATU\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_SUND\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"TTST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TTED_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MNST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MNED_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ATCT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"PRCE_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"BRCE_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"AMNT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"SECD_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBS_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ADDX_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"ADDX_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"COMI_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"TRTX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CMTX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"TRTR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"TRTX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"TRCH_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CMTR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CMTX_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CMCH_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CNMD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRMN_SEQX\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_OSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_SSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_MSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT_WKDY\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"BRST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BRED_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_BRSQ\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_DISQ\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_ITSQ\" type=\"STRING\" size=\"256\"/><Column id=\"TRNS_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"AORX_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"INST_USID\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_USID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RARE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RSUB_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RADD_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"RADD_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RCON_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"RINP_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_MATRXM01_TEMP", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\" value=\"\"/><Column id=\"NUMB_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RMED_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OFIC_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OPER_TEAM\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_ITMM\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"SIMM_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"SECD_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"PRIC_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_AMNT\" type=\"STRING\" size=\"256\"/><Column id=\"DISC_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"DISC_AMNT\" type=\"STRING\" size=\"256\"/><Column id=\"BNUS_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"AMNT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"HOUR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ESTA_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DAYY_WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"BNUS_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"SUBS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_MATRXM01", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\" value=\"\"/><Column id=\"NUMB_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RMED_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OFIC_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OPER_TEAM\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_ITMM\" type=\"STRING\" size=\"256\"/><Column id=\"KBNT_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"SIMM_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"SECD_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"PRIC_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_AMNT\" type=\"STRING\" size=\"256\"/><Column id=\"DISC_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"DISC_AMNT\" type=\"STRING\" size=\"256\"/><Column id=\"BNUS_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"AMNT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"HOUR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ESTA_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DAYY_WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"BNUS_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"SUBS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_SUBSXM01", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\" value=\"\"/><Column id=\"NUMB_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"ENTP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"MDIM_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HOUR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DAYY_WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"PRIC_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"TANX_PERC\" type=\"STRING\" size=\"256\"/><Column id=\"JANG_PERC\" type=\"STRING\" size=\"256\"/><Column id=\"JUCX_PERC\" type=\"STRING\" size=\"256\"/><Column id=\"AMNT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SECD_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"GYUL_SELL\" type=\"STRING\" size=\"256\"/><Column id=\"OFIC_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"MANA_TEAM\" type=\"STRING\" size=\"256\"/><Column id=\"SUBS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ADVR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_WAYY\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_PRID\" type=\"STRING\" size=\"256\"/><Column id=\"ADDX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUSI_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OSEQ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OSEQ_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsMD_SUBSXM01_TEMP", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\" value=\"\"/><Column id=\"NUMB_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"ENTP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"MDIM_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"MEDX_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HOUR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DAYY_WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"PRIC_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"TANX_PERC\" type=\"STRING\" size=\"256\"/><Column id=\"JANG_PERC\" type=\"STRING\" size=\"256\"/><Column id=\"JUCX_PERC\" type=\"STRING\" size=\"256\"/><Column id=\"AMNT_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"STAR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BROD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SECD_FILD\" type=\"STRING\" size=\"256\"/><Column id=\"GYUL_SELL\" type=\"STRING\" size=\"256\"/><Column id=\"OFIC_CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"MANA_TEAM\" type=\"STRING\" size=\"256\"/><Column id=\"SUBS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ADVR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_WAYY\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_PRID\" type=\"STRING\" size=\"256\"/><Column id=\"ADDX_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUSI_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OSEQ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQX_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OSEQ_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("grdMD_ODTRXH", "absolute", "8", "128", null, "254", "25", null, this);
            obj.set_taborder("232");
            obj.set_binddataset("dsMD_ODTRXH");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"년월\"/><Cell col=\"2\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"거래번호\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_essential\" text=\"청구지\"/><Cell col=\"5\" text=\"매체구분\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_essential\" text=\"매체\"/><Cell col=\"7\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"대행금액\"/><Cell col=\"8\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"부가세\"/><Cell col=\"9\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"합계\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" editfilter=\"number\" style=\"align: ;\" text=\"bind:YEAR_MNTH\" editlimit=\"6\" editdisplay=\"edit\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"align: ;\" text=\"bind:TRAN_NUMB\" editlimit=\"0\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" style=\"align: ;\" text=\"bind:CUST_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" style=\"align: ;\" text=\"bind:MEDX_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"5\" edittype=\"none\" text=\"bind:COMM_CDNM\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" style=\"align: ;\" text=\"bind:RMED_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"7\" edittype=\"none\" style=\"align: ;\" text=\"bind:AMNT_FILD\"/><Cell col=\"8\" edittype=\"none\" text=\"bind:VATX_FILD\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"none\" text=\"bind:SUMX_FILD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMD_ODTRXD", "absolute", "8", "417", null, "285", "25", null, this);
            obj.set_taborder("233");
            obj.set_binddataset("dsMD_ODTRXD");
            obj.set_wheelscrollrow("1");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"93\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"년월\"/><Cell col=\"2\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"번호\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주\"/><Cell col=\"4\" edittype=\"text\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주팀\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_essential\" text=\"브랜드\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_essential\" text=\"청구지\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_essential\" text=\"매체\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_essential\" text=\"프로그램명\"/><Cell col=\"9\" text=\"방송요일\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_essential\" text=\"금액\"/><Cell col=\"11\" text=\"부가세\"/><Cell col=\"12\" text=\"총액\"/><Cell col=\"13\" text=\"비고\"/><Cell col=\"14\" text=\"등록일자\"/><Cell col=\"15\" text=\"등록자\"/><Cell col=\"16\" text=\"수정일\"/><Cell col=\"17\" text=\"수정자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" editfilter=\"number\" style=\"align: ;\" text=\"bind:YEAR_MNTH\" editlimit=\"6\" editdisplay=\"edit\"/><Cell col=\"2\" edittype=\"none\" style=\"align: ;\" text=\"bind:TSEQ_FILD\" editlimit=\"0\"/><Cell col=\"3\" edittype=\"none\" style=\"align: ;\" text=\"bind:CUST_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"4\" edittype=\"none\" text=\"bind:CTIM_NAME\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"5\" edittype=\"none\" style=\"align: ;\" text=\"bind:BRND_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"6\" edittype=\"none\" style=\"align: ;\" text=\"bind:MEDX_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"7\" edittype=\"none\" style=\"align: ;\" text=\"bind:RMED_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"8\" edittype=\"none\" style=\"align: ;\" text=\"bind:MATT_NAME\" editlimit=\"0\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"none\" text=\"bind:ADVR_DATE\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"none\" text=\"bind:AMNT_FILD\" mask=\"#,###\"/><Cell col=\"11\" text=\"bind:VATX_FILD\"/><Cell col=\"12\" text=\"bind:SUMX_FILD\"/><Cell col=\"13\" edittype=\"none\" text=\"bind:MEMO_FILD\"/><Cell col=\"14\" displaytype=\"date\" edittype=\"none\" text=\"bind:INST_DATE\"/><Cell col=\"15\" edittype=\"none\" text=\"bind:INST_USID\"/><Cell col=\"16\" displaytype=\"date\" edittype=\"none\" text=\"bind:UPDT_DATE\"/><Cell col=\"17\" edittype=\"none\" text=\"bind:UPDT_USID\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("spSearchBox0", "absolute", "8", "60", null, "43", "25", null, this);
            obj.set_taborder("121");
            obj.set_cssclass("styFormSearchBox");
            obj.getSetter("radiusy").set("10");
            obj.getSetter("radiusx").set("10");
            obj.getSetter("type").set("roundrectangle");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormTitle", "absolute", "8", "0", "576", "29", null, null, this);
            obj.set_taborder("0");
            obj.set_text("거래명세서");
            obj.set_cssclass("styFormTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_ButtonList", "absolute", null, "33", "510", "23", "25", null, this);
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.set_scrollbars("none");
            obj.set_cssclass("styFormButtonList");
            obj.set_url("common::comButtonType01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite", "absolute", "8", "0", "18", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "898", "23", "264", "10", null, null, this);
            obj.set_taborder("3");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "538", "0", "32", "60", null, null, this);
            obj.set_taborder("4");
            obj.set_text("h 60");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "0", "8", "717", null, null, this);
            obj.set_taborder("5");
            obj.set_text("w\r\n8");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", null, "0", "25", "717", "0", null, this);
            obj.set_taborder("6");
            obj.set_text("w\r\n25");
            obj.set_cssclass("sta_GID_box");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_FormLocation", "absolute", "522", "0", null, "29", "25", null, this);
            obj.set_taborder("7");
            obj.set_text("매체관리 > 옥외광고");
            obj.set_cssclass("styFormLocation");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "28", "71", "37", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("년월");
            obj.set_cssclass("styFormSearchCapBe");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "215", "71", "51", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("광고주");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_CODE", "absolute", "271", "71", "80", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRCUST_CODE", "absolute", "353", "71", "23", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRCUST_NAME", "absolute", "376", "71", "140", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation1", "absolute", "8", "107", "263", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "572", "103", null, "25", "534", null, this);
            obj.set_taborder("22");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "14", null, "1143", "15", null, "0", this);
            obj.set_taborder("27");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "9", "61", "30", "41", null, null, this);
            obj.set_taborder("122");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "560", "71", "50", "21", null, null, this);
            obj.set_taborder("127");
            obj.set_text("브랜드");
            obj.set_cssclass("styFormSearchCap");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBRND_CODE", "absolute", "615", "71", "80", "21", null, null, this);
            obj.set_taborder("128");
            obj.set_tabstop("false");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("imgHelpSHRBRND_CODE", "absolute", "697", "71", "23", "21", null, null, this);
            obj.set_taborder("129");
            obj.set_cssclass("sytHelpPopup");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSHRBRND_NAME", "absolute", "720", "71", "140", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_imemode("hangul");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_cssclass("styFormSearchItem");
            this.addChild(obj.name, obj);

            obj = new Div("CalSHRYEAR_MNTH", "absolute", "70", "71", "100", "21", null, null, this);
            obj.set_taborder("216");
            obj.set_url("common::comMonthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "637", "56", "128", "4", null, null, this);
            obj.set_taborder("219");
            obj.set_text("h 4");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Static("stInformation", "absolute", "8", "396", "169", "21", null, null, this);
            obj.set_taborder("221");
            obj.set_text("<b v='true'>00</b> 건이 조회 되었습니다.");
            obj.set_usedecorate("true");
            obj.set_cssclass("styFormSearchInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "573", "382", "80", "35", null, null, this);
            obj.set_taborder("223");
            obj.set_text("h 35");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.addChild(obj.name, obj);

            obj = new Button("btnEachCreate", "absolute", null, "392", "74", "21", "239", null, this);
            obj.set_taborder("224");
            obj.set_text("개별생성");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnCustomerCreate", "absolute", null, "392", "98", "21", "25", null, this);
            obj.set_taborder("225");
            obj.set_text("광고주별생성");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Button("btnCreateTRAN_DATE", "absolute", null, "392", "110", "21", "126", null, this);
            obj.set_taborder("230");
            obj.set_text("청구일자동입력");
            obj.set_cssclass("btn_WF_Module");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMD_ODMDXM", "absolute", "8", "417", null, null, "25", "15", this);
            obj.set_binddataset("dsMD_ODMDXM");
            obj.set_cellsizingtype("both");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"70\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_essential\" text=\"년월\"/><Cell col=\"2\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"일련번호\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주\"/><Cell col=\"4\" edittype=\"text\" style=\"background:transparent;\" cssclass=\"Cellgrd_WF_essential\" text=\"광고주팀\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_essential\" text=\"브랜드\"/><Cell col=\"6\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"청구일\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_essential\" text=\"청구지\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_essential\" text=\"매체\"/><Cell col=\"9\" text=\"옥외광고구분\"/><Cell col=\"10\" text=\"광고시작일\"/><Cell col=\"11\" text=\"광고종료일\"/><Cell col=\"12\" text=\"소재명\"/><Cell col=\"13\" style=\"background:transparent URL('theme://images/ico_grd_essential.png') left top;\" text=\"금액\"/><Cell col=\"14\" text=\"수수료율\"/><Cell col=\"15\" text=\"수수료\"/><Cell col=\"16\" text=\"적용일자\"/><Cell col=\"17\" text=\"부서명\"/><Cell col=\"18\" text=\"사원명\"/><Cell col=\"19\" text=\"위수탁부가세\"/><Cell col=\"20\" text=\"수수료부가세\"/><Cell col=\"21\" text=\"비고\"/><Cell col=\"22\" text=\"등록일자\"/><Cell col=\"23\" text=\"등록자\"/><Cell col=\"24\" text=\"위수탁번호\"/><Cell col=\"25\" text=\"수수료번호\"/><Cell col=\"26\" text=\"AOR구분\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHEK_FILD\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" editfilter=\"number\" style=\"align: ;\" text=\"bind:YEAR_MNTH\" editlimit=\"6\" editdisplay=\"edit\"/><Cell col=\"2\" edittype=\"none\" style=\"align: ;\" text=\"bind:SEQX_FILD\" editlimit=\"0\"/><Cell col=\"3\" edittype=\"none\" style=\"align: ;\" text=\"bind:CUST_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"4\" edittype=\"none\" text=\"bind:CTIM_NAME\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"5\" edittype=\"none\" style=\"align: ;\" text=\"bind:BRND_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" text=\"bind:TRAN_DATE\"/><Cell col=\"7\" edittype=\"none\" style=\"align: ;\" text=\"bind:MEDX_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"8\" edittype=\"none\" style=\"align: ;\" text=\"bind:RMED_NAME\" editlimit=\"0\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"9\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:ODAD_FLAG\"/><Cell col=\"10\" displaytype=\"date\" edittype=\"date\" text=\"bind:STAR_DATE\"/><Cell col=\"11\" displaytype=\"date\" edittype=\"date\" text=\"bind:ENDD_DATE\"/><Cell col=\"12\" edittype=\"text\" text=\"bind:MATT_NAME\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"text\" text=\"bind:AMNT_FILD\"/><Cell col=\"14\" displaytype=\"number\" edittype=\"text\" text=\"bind:COMI_RATE\"/><Cell col=\"15\" displaytype=\"number\" edittype=\"text\" text=\"bind:COMI_FILD\"/><Cell col=\"16\" displaytype=\"date\" edittype=\"date\" text=\"bind:APLY_DATE\"/><Cell col=\"17\" edittype=\"text\" text=\"bind:DEPT_NAME\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"18\" edittype=\"text\" text=\"bind:EMPL_NAME\" expandshow=\"show\" expandsize=\"23\"/><Cell col=\"19\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:TRTX_FLAG\" combodataset=\"dsTRTX_FLAGCombo\" combocodecol=\"TRTX_FLAG_CODE\" combodatacol=\"TRTX_FLAG_NAME\"/><Cell col=\"20\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CMTX_FLAG\" combodataset=\"dsCMTX_FLAGCombo\" combocodecol=\"CMTX_FLAG_CODE\" combodatacol=\"CMTX_FLAG_NAME\"/><Cell col=\"21\" edittype=\"text\" text=\"bind:MEMO_FILD\"/><Cell col=\"22\" displaytype=\"date\" edittype=\"date\" text=\"bind:INST_DATE\"/><Cell col=\"23\" edittype=\"text\" text=\"bind:INST_USID\"/><Cell col=\"24\" edittype=\"none\" text=\"bind:TRTR_NUMB\"/><Cell col=\"25\" edittype=\"none\" text=\"bind:CMTR_NUMB\"/><Cell col=\"26\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:AORX_FLAG\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1187, 717, this,
            	//-- Layout function
            	function(p) {
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
            this._addPreloadList("fdl", "common::comMonthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("MDMADATASETSAVE.xfdl", "script::lib_script_common.xjs");
        this.registerScript("MDMADATASETSAVE.xfdl", function() {
        /***************************************************************************************************
         * # Program:	MDME0020 거래명세서
         * 
         * # Modification Information
         * -------------------------------------------------------------------------------------------------
         *   Date			Modifier	Comment
         * -------------------------------------------------------------------------------------------------
         *   2016.10.17		최제현		Initial Created.
         *   
         * -------------------------------------------------------------------------------------------------
         * Copyright 1998-2016 By INBUS Co,Ltd. All rights reserved.
         ****************************************************************************************************
         *   Form Common Script                                                                             *
         *      1) 공통 스크립트 위치 및 명칭은 수정 불가 입니다.                                      *
         *      2) 각 함수에서 필요한 부분의 소스를 수정 하세요.                                       *
         *      3) 해당 프로그램의 기능이 없는 경우 해당 함수의 이름만 놓고 공백 처리               *
         *                                                                                                  *
         *  ★ 위 사항의 변경이 있거나 추가 사항이 있을 경우 반드시 개발 PL과 상의 후 수정 요망    *
         *     현재 총 100 컬럼임 되도록 100 컬럼 안으로 코딩을 하세요                                 *
         123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890

        /************************
         *  공통 Script Include  *
         ************************/
        //include "script::lib_script_common.xjs"

        /*********************
         *  화면 변수 선언부  *
         *********************/
        this.sBUTTONLIST 	= "TTFTTTTT"; //Button 사용여부 순서(종료, 조회, 입력, 삭제, 취소, 저장, 엑셀, 인쇄)
        this.sPACKAGENAME 	= "MDME0020"; //해당 Form에서 사용 할 Package 명

        if (this.getOwnerFrame()["sUSERAUTH"] == undefined) {
        	 //Quick View 실행 시 설정
        	 this.sUSERAUTH     = "";   //사용자별 프로그램 사용 권한
        	 this.sFORMCAPTION  = "";   //Form의 Title 정보
        	 this.sFORMLOCATION = "";   //Form의 Location 정보
        	 this.sUSERLAVEL    = "";   //Form의 Location 정보
        } else {
        	 this.sUSERAUTH     = this.getOwnerFrame()["sUSERAUTH"];
        	 this.sFORMCAPTION  = this.getOwnerFrame()["sFORMCAPTION"];
        	 this.sFORMLOCATION = this.getOwnerFrame()["sFORMLOCATION"];
        	 this.sUSERLAVEL    = this.getOwnerFrame()["sUSERLAVEL"];
        }	

        //this.aKeyValue = new Array(4);

        /**************************************************************************************************
         *                                         공통 Event 처리 부분                                    *
         ***************************************************************************************************/
        /*-----------------------------------+
         |  01.최초 화면 Load時 처리 할 사항  |
         +------------------------------------*/
        this.fn_FormLoadSetting = function (obj,e) {

        	this.fnc_FormLoadSetting(obj, this.sFORMCAPTION, this.sFORMLOCATION, this.sBUTTONLIST, this.sUSERAUTH);
        	this.fnc_GridSetting(this);
        	this.CalSHRYEAR_MNTH.fn_SetMonth(this.fnc_SubStr(this.fnc_GetServerDateTime("DATE"),0,6 ));
        	this.fn_Search();
        }

        /*----------------------------------+
         |  02.화면 종료(닫기) 버튼 클릭 時  |
         ------------------------------------*/
        this.fn_End = function (obj) {
        	this.close();
        }

        /*-----------------------+
         |  03.조회 버튼 클릭 時  |
         +------------------------*/
        this.fn_Search = function (obj) {
        	
        	//개별청약 그리드를 보이도록
        	this.grdMD_ODMDXM.set_visible('true');
        	if (!this.fn_SearchItemCheck()) return;
        	
        	//하단 개별청약 조회
        	this.fnc_DatasetClear('dsMD_ODMDXM'); // 조회 자료 초기화

        	var sMethodName = "SEARCH00";
        	var sInDataSet = "";
        	var sOutDataSet = "dsMD_ODMDXM=dsMD_ODMDXM";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	//상단 거래명세서(헤더)조회
        	this.fnc_DatasetClear('dsMD_ODTRXH'); // 조회 자료 초기화

        	var sMethodName = "SEARCH01";
        	var sInDataSet = "";
        	var sOutDataSet = "dsMD_ODTRXH=dsMD_ODTRXH";
        	var sArgument = this.fn_CreateArgument(sMethodName);
        	
        	this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	
        	this.grdMD_ODTRXH.setFocus();
        }

        /*-----------------------------+
         |  04.입력(신규) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Input = function (obj) {
        	//기능없음.
        }

        /*-----------------------------+
         |  05.삭제(제거) 버튼 클릭 時  |
         +------------------------------*/
        this.fn_Delete = function (obj) {
        	var totalNum = 0;	//체크된 개수
        	
        	//개별청약은 그리드가 보이는 상태일 때만 삭제를 진행
        	if(this.grdMD_ODMDXM.visible){
        		//하단 개별청약 삭제
        		for(var i=0 ; i<this.dsMD_ODMDXM.rowcount ; i++){
        			if(this.dsMD_ODMDXM.getColumn(i,"CHEK_FILD") == '1'){totalNum ++;}
        		}
        		
        		if (this.fn_DeleteCheck(totalNum)) {
        			var rowCnt = this.dsMD_ODMDXM.rowcount;
        			for(var i=(rowCnt-1); i>=0; i--){
        				if(this.dsMD_ODMDXM.getColumn(i,"CHEK_FILD") == '1'){
        					this.dsMD_ODMDXM.deleteRow(i);
        				}
        			}
        		}
        	}
        	
        	var totalNum1 = 0;
        	
        	//상단 거래명세서(헤더)삭제
        	for(var i=0 ; i<this.dsMD_ODTRXH.rowcount ; i++){
        		if(this.dsMD_ODTRXH.getColumn(i,"CHEK_FILD") == '1'){totalNum1 ++;}
        	}
        	
        	if (this.fn_DeleteCheck1(totalNum1)) {
        		var rowCnt = this.dsMD_ODTRXH.rowcount;
        		for(var i=(rowCnt-1); i>=0; i--){
        			if(this.dsMD_ODTRXH.getColumn(i,"CHEK_FILD") == '1'){
        				this.dsMD_ODTRXH.deleteRow(i);
        			}
        		}
        	}
        	
        }

        /*-----------------------+
         |  06.취소 버튼 클릭 時  |
         -------------------------*/
        this.fn_Cancel = function (obj) {

        	//수정 한 부분 취소
        	this.fnc_DataSetCancel("dsMD_ODMDXM");
        	this.fnc_DataSetCancel("dsMD_ODTRXH");
        	this.fnc_DataSetCancel("dsMD_ODTRXD");
        }

        /*-----------------------+
         |  07.저장 버튼 클릭 時  |
         -------------------------*/
        //SAVE00,01은 사용자 정의 Event에서 거래명세서 생성

        this.fn_Save = function (obj) {
        	
        	//개별청약서 데이터 셋이 바뀌었는지 확인
        	if (this.fn_SaveItemCheck()){
        		//개별청약서 삭제 처리
        		var sMethodName = "SAVE02";
        		var sInDataSet = "dsMD_ODMDXM=dsMD_ODMDXM:U";
        		var sOutDataSet = "";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}
        	
        	//거래명세서 데이터 셋이 바뀌었는지 확인
        	if(this.fn_SaveItemCheck1()){
        		//거래명세서(헤더,디테일) 삭제 처리
        		var sMethodName = "SAVE03";
        		var sInDataSet = "dsMD_ODTRXH=dsMD_ODTRXH:U";
        		var sOutDataSet = "";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}
        }

        /*--------------------------+
         |  08.엑셀 버튼 클릭 時  |
         ---------------------------*/
        this.fn_ToExcel = function (obj) {
        	this.fnc_ToExcel(this);
        }

        /*--------------------------+
         |  09.인쇄 버튼 클릭 時  |
         +--------------------------*/
        this.fn_Print = function (obj) {
        }

        /*----------------------------------------+
         |  10.최초 화면 UnLoad時 처리 할 사항  |
         +----------------------------------------*/
        this.fn_FormUnloadCheckProcess = function(obj,e) {

        	if(e.fromobject instanceof Div) return;
        	var sMessage = this.fnc_FormUnloadCheck("dsMD_ODMDXM, dsMD_ODMDXM",this);
        	
        	if(!this.fnc_IsEmpty(sMessage)) return;
        	
        }

        this.fn_FormUnloadProcess = function(obj,e) {
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
        /*-----------------------+
         |  조회 필수 조건 체크!  |
         +------------------------*/
        this.fn_SearchItemCheck = function () {
        	//하단 개별청약 데이터셋 체크
        	if (this.fnc_DatasetChangeCheck("dsMD_ODMDXM")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	//상단 거래명세서(헤더) 데이터셋 체크
        	if (this.fnc_DatasetChangeCheck("dsMD_ODTRXH")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	//하단 거래명세서(상세) 데이터셋 체크
        	if (this.fnc_DatasetChangeCheck("dsMD_ODTRXD")) {
        		if (this.fnc_Message("TMM023") == false) return false;
        	}
        	
        	if (this.CalSHRYEAR_MNTH.fn_GetMonth()==''){
        		this.fnc_Message("TMM008","년월");
        		return false;
        	}
        	
        	return true;
        }

        /*------------------+
         |  삭제 여부 체크!  |
         +-------------------*/
         
         //개별 청약서 삭제여부체크
         this.fn_DeleteCheck = function (totalNum) {
        	//체크가 되어있지 않으면 리턴
        	if(totalNum < 1)
        		return false;
        	
        	var sQuestionText  = "일련번호 : ("+this.grdMD_ODMDXM.getCellText(this.grdMD_ODMDXM.currentrow, this.grdMD_ODMDXM.getBindCellIndex( "body", "SEQX_FILD" )) + ")";
        			
        	if(totalNum > 1){
        		sQuestionText += " 외 "+ (totalNum-1) + "건"
        	}

        	return this.fnc_Message("TMM002", sQuestionText);
        }

        //거래명세서 삭제여부체크
        this.fn_DeleteCheck1 = function (totalNum) {
        	//체크가 되어있지 않으면 리턴
        	if(totalNum < 1)
        		return false;
        		
        	var sQuestionText  = "거래번호 : ("+this.grdMD_ODTRXH.getCellText(this.grdMD_ODTRXH.currentrow, this.grdMD_ODTRXH.getBindCellIndex( "body", "TRAN_NUMB" )) + ")";
        			
        	if(totalNum > 1){
        		sQuestionText += " 외 "+ (totalNum-1) + "건"
        	}

        	return this.fnc_Message("TMM002", sQuestionText);
        }

        /*------------------+
         |  저장 여부 체크!  |
         +-------------------*/
        this.fn_SaveItemCheck = function () {

        	if (!this.fnc_DatasetChangeCheck("dsMD_ODMDXM")) {
        		return false;
        	}
        	
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsMD_ODMDXM.getRowCount(); i++) {
        		if (this.fnc_ToUpper(this.dsMD_ODMDXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;
        		
        		if (this.fnc_Length(this.fnc_Trim(this.dsMD_ODMDXM.getColumn(i, "MEDX_NAME"))) < 1) {
        			return this.fnc_CheckPostAction("TMM072", "청구일", this.dsMD_ODMDXM, i, this.dsMD_ODMDXM.getColumn(this.dsMD_ODMDXM.rowposition,"TRAN_DATE"), '');
        		}
        	}

        	return true;
        }

        this.fn_SaveItemCheck1 = function () {

        	if (!this.fnc_DatasetChangeCheck("dsMD_ODTRXH")) {
        		return false;
        	}
        	return true;
        }

        /*-----------------------------------------+
         |  Service 호출 시 넘어 갈 Argument 생성!  |
         +------------------------------------------*/
        this.fn_CreateArgument = function (sKind) {
        	var sReturnString;

        	// 조회 Argument 생성
        	if (sKind == "SEARCH00" || sKind == "SEARCH01") {
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
         		sReturnString += " YEAR_MNTH=" + this.fnc_Quote(this.fnc_Trim(this.CalSHRYEAR_MNTH.fn_GetMonth())); //년월
        		sReturnString += " CUST_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRCUST_CODE.value)); //광고주
        		sReturnString += " BRND_CODE=" + this.fnc_Quote(this.fnc_Trim(this.edtSHRBRND_CODE.value)); //브랜드

        		// 조회 Argument 생성
        	}if (sKind == "SEARCH02" ) {
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
        		sReturnString += " action=" + this.fnc_Quote(sKind);
         		//그리드에서 년월과 일련번호, 거래명세서 번호를 가져옴.
         		sReturnString += " YEAR_MNTH=" + this.fnc_Quote(this.fnc_Trim(
         		this.grdMD_ODTRXH.getCellText(this.grdMD_ODTRXH.currentrow, this.grdMD_ODTRXH.getBindCellIndex( "body", "YEAR_MNTH")))); //년월
        		sReturnString += " SEQX_FILD=" + this.fnc_Quote(this.fnc_Trim(
        		this.grdMD_ODTRXH.getCellText(this.grdMD_ODTRXH.currentrow, this.grdMD_ODTRXH.getBindCellIndex( "body", "SEQX_FILD")))); //일련번호
        		sReturnString += " TRAN_NUMB=" + this.fnc_Quote(this.fnc_Trim(
        		this.grdMD_ODTRXH.getCellText(this.grdMD_ODTRXH.currentrow, this.grdMD_ODTRXH.getBindCellIndex( "body", "TRAN_NUMB")))); //거래명세서(헤더)번호
        		
        		// 저장 Argument 생성
        	} else if (sKind == "SAVE00" || sKind == "SAVE01" || sKind == "SAVE02" || sKind == "SAVE03") {
        		sReturnString = " pgm=" + this.fnc_Quote(this.sPACKAGENAME);
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
        		this.fnc_Information(this.stInformation, this.dsMD_ODMDXM.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");

        	} if (sMethodName == "SEARCH01") {
        		this.fnc_Information(this.stInformation1, this.dsMD_ODTRXH.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");

        	} if (sMethodName == "SEARCH02") {
        		this.fnc_Information(this.stInformation, this.dsMD_ODTRXD.getCaseCount("dataset.getRowLevel(currow)==0"), "SHR");

        	} else if (sMethodName == "SAVE00" || sMethodName == "SAVE01") {
        		this.fnc_Message("MDM001");
        		this.fn_Search();
        	} else if (sMethodName == "SAVE02" || sMethodName == "SAVE03") {
        		this.fnc_Message("TMM103");
        		this.fn_Search();
        	}
        }

        /*------------------------------------+
         |  수정 시 Key Field Disibled 처리     |
         +-------------------------------------*/
        this.fn_KeyFieldDisible = function (obj,e) {

        }

        /*****************************************************************************************************
         *                                사용자 정의  Function 처리 부분                                  *
         ***************************************************************************************************/

        
        /**************************************************************************************************
         *                                  사용자 정의  Event 처리 부분                                   *
         ***************************************************************************************************/
         

        

        
        /*----------------------+
         |  전체 선택 / 해제  |
         +----------------------*/
        var isAllChecked = 0;
        this.grdMD_ODMDXM_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.grdMD_ODMDXM.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsMD_ODMDXM.getRowCount(); i++) {
        			this.dsMD_ODMDXM.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.dsMD_ODMDXM.setCellProperty("Head", 0, "expr", isAllChecked);
        	}
        }

        
        this.grdMD_ODTRXH_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.grdMD_ODTRXH.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsMD_ODTRXH.getRowCount(); i++) {
        			this.dsMD_ODTRXH.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.dsMD_ODTRXH.setCellProperty("Head", 0, "expr", isAllChecked);
        	}
        }

        this.grdMD_ODTRXD_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var v_Colid = this.grdMD_ODTRXD.getCellProperty("body", e.cell, "text").replace("bind:", "");
        		isAllChecked = (isAllChecked ? 0 : 1);
        		
        		for (var i = 0; i < this.dsMD_ODTRXD.getRowCount(); i++) {
        			this.dsMD_ODTRXD.setColumn(i, v_Colid, isAllChecked);
        		}
        		this.dsMD_ODTRXD.setCellProperty("Head", 0, "expr", isAllChecked);
        	}
        }

        
        /*----------------+
         |     팝업 	  |
         +----------------*/

        /*-------------------------------------+
         | Help Popup Open                     |
         +-------------------------------------*/
         //상단 광고주 팝업
         this.fn_HelpDialogeSHRCUST_CODE = function(obj,e)
        {
        	var arrParam = new Array();
        	arrParam[0] = "MCM0005";                                 
            arrParam[1] = "";                                         
            arrParam[2] = this.fnc_Trim(this.edtSHRCUST_NAME.value); 
            arrParam[3] = "N";                                         
            arrParam[4] = "edtSHRCUST_NAME";                          
            arrParam[5] = "edtSHRCUST_CODE,edtSHRCUST_NAME";   
            arrParam[6] = "0,1";                                     
                
            this.fnc_HelpDialogeAction(this, obj, arrParam);
        }

        //상단 브랜드팝업
        this.fn_HelpDialogeSHRBRND_CODE = function(obj,e)
        {
        	var arrParam = new Array();
            var sName 		= "MDMB0010P02";
        	var sFormURL 	= "mdm::MDMB0010P02.xfdl";
        	var sOpenStyle  = "modeless=false";
        		sOpenStyle += ",autosize=true";
        		sOpenStyle += ",top=-1";
        		sOpenStyle += ",left=-1";
        		sOpenStyle += ",width=990";
        		sOpenStyle += ",height=800";
        		sOpenStyle += ",title=true";
        		sOpenStyle += ",titletext=브랜드조회";
        		sOpenStyle += ",status=false";
        		sOpenStyle += ",resizable=true";
        		var objArgument = {
        		 cust_name : this.edtSHRCUST_NAME.value	//광고주명
        		,key : "SHR"
        	};

        	this.fnc_OpenPopup(sName, sFormURL, objArgument, sOpenStyle, "");
        	
        }

        
        /*----------------------------+
         |   브랜드 팝업 CALLBACK 	  |
         +----------------------------*/
        this.fn_CallBackP02 = function(cust_code,cust_name,brnd_code,brnd_name,key){
        	switch(key){
        		case "SHR":
        			this.edtSHRCUST_CODE.set_value(cust_code);
        			this.edtSHRCUST_NAME.set_value(cust_name);
        			this.edtSHRBRND_CODE.set_value(brnd_code);
        			this.edtSHRBRND_NAME.set_value(brnd_name);
        			break;
        		case "DETAIL":
        			this.edtCUST_CODE.set_value(cust_code);
        			this.edtCUST_NAME.set_value(cust_name);
        			this.edtBRND_CODE.set_value(brnd_code);
        			this.edtBRND_NAME.set_value(brnd_name);
        			break;
        		case "GRID":
        			this.dsMD_ODMDXM.setColumn(this.dsMD_ODMDXM.rowposition,"CUST_CODE",cust_code);
        			this.dsMD_ODMDXM.setColumn(this.dsMD_ODMDXM.rowposition,"CUST_NAME",cust_name);
        			this.dsMD_ODMDXM.setColumn(this.dsMD_ODMDXM.rowposition,"BRND_CODE",brnd_code);
        			this.dsMD_ODMDXM.setColumn(this.dsMD_ODMDXM.rowposition,"BRND_NAME",brnd_name);
        			break;
        	}	
        }

        
        /*----------------------------+
         |   개별 거래명세서 생성   |
         +----------------------------*/
        this.fn_OnClick_EachCreate = function(obj,e)
        {
        	var totalNum = 0;	//체크된 개수
        	
        	for(var i=0 ; i<this.dsMD_ODMDXM.rowcount ; i++){
        		if(this.dsMD_ODMDXM.getColumn(i,"CHEK_FILD") == '1'){totalNum ++;}
        	}
        	
        	//체크한 데이터가 있고, 청구일을 입력했으면
        	if (this.fn_CreateCheck(totalNum) && this.fn_TranDateCheck()) {
        		//거래명세서 생성
        		var sMethodName = "SAVE00";
        		var sInDataSet = "dsMD_ODMDXM=dsMD_ODMDXM:U";
        		var sOutDataSet = "";
        		var sArgument = this.fn_CreateArgument(sMethodName);

        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        	}
        }

        /*---------------------------------+
         |  거래명세서 생성 여부 체크!  |
         +---------------------------------*/
        this.fn_CreateCheck = function (totalNum) {
        	if (totalNum < 1) {
        		this.fnc_Message("MDM002");
        		return false;
        	}
        	return true;
        }

        /*--------------------+
         |  청구일 입력 체크! |
         +-------------------*/
        this.fn_TranDateCheck = function () {
        	// 필수 입력 항목 체크
        	for (var i = 0; i < this.dsMD_ODMDXM.getRowCount(); i++) {
        		if (this.fnc_ToUpper(this.dsMD_ODMDXM.getRowType(i)) == Dataset.ROWTYPE_NORMAL) continue;

        		if (this.fnc_Length(this.fnc_Trim(this.dsMD_ODMDXM.getColumn(i, "TRAN_DATE"))) < 1) {	
        			return this.fnc_CheckPostAction("TMM072", "청구일", this.dsMD_ODMDXM, i, this.dsMD_ODMDXM.getColumn(this.dsMD_ODMDXM.rowposition,"YEAR_MNTH"), '');
        		}
        	}

        	return true;
        }

        /*--------------------------------+
         |   광고주별 거래명세서 생성  |
         +--------------------------------*/
        this.fn_OnClick_CustomerCreate = function(obj,e)
        {

        	var totalNum = 0;	//체크된 개수
        	
        	for(var i=0 ; i<this.dsMD_ODMDXM.rowcount ; i++){
        		if(this.dsMD_ODMDXM.getColumn(i,"CHEK_FILD") == '1'){totalNum ++;}
        	}
        	
        	//체크한 데이터가 있고, 청구일을 입력했으면
        	if (this.fn_CreateCheck(totalNum) && this.fn_TranDateCheck()) {
        		//거래명세서 생성
        		var sMethodName = "SAVE01";
        		var sInDataSet = "dsMD_ODMDXM=dsMD_ODMDXM:U";
        		var sOutDataSet = "";
        		var sArgument = this.fn_CreateArgument(sMethodName);

        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");	
        	}
        }

        /*--------------------------------+
         |   거래명세서 상세내역          |
         +--------------------------------*/
         //상단 거래명세서 헤더 컬럼 클릭 시
        this.dsMD_ODTRXH_onrowposchanged = function(obj,e)
        {	
        	//체크박스는 제외. 삭제 가능하도록
        	if(this.grdMD_ODTRXH.currentcol != '0'){
        		
        		//개별청약 그리드를 보이지 않게 한다.
        		this.grdMD_ODMDXM.set_visible('false');
        		
        		if (!this.fn_SearchItemCheck()) return;
        		//하단 거래명세서(상세) 조회
        		this.fnc_DatasetClear('dsMD_ODTRXD'); // 조회 자료 초기화

        		var sMethodName = "SEARCH02";
        		var sInDataSet = "";
        		var sOutDataSet = "dsMD_ODTRXD=dsMD_ODTRXD";
        		var sArgument = this.fn_CreateArgument(sMethodName);
        		
        		this.fnc_TransactionCall(this, this.sPACKAGENAME, sMethodName, sInDataSet, sOutDataSet, sArgument, "fn_CallBack");
        	}
        }

        
        /*------------------------------------+
         |  이름이 지워지면 코드가 지워짐 |
         +------------------------------------*/

        //광고주
        this.edtSHRCUST_NAME_ontextchanged = function(obj,e)
        {
        	if(this.edtSHRCUST_NAME.value=='')
        	this.edtSHRCUST_CODE.set_value('');
        }

        //브랜드
        this.edtSHRBRND_NAME_ontextchanged = function(obj,e)
        {
        	if(this.edtSHRBRND_NAME.value=='')
        	this.edtSHRBRND_NAME.set_value('');
        }

        
        // 추후 구현
        // this.fn_OnClick_CreateTRAN_DATE = function(obj:Button,  e:nexacro.ClickEventInfo)
        // {
        // 	alert(this.grdMD_ODMDXM.get
        // // 	this.grdMD_ODMDXM.setCellProperty('body',,,);
        // // 	getCellText(this.grdMD_ODTRXH.currentrow, this.grdMD_ODTRXH.getBindCellIndex( "body", "TRAN_NUMB")))
        // }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dsMD_MATRXM00.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsMD_MATRXM00_TEMP.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsMD_SUBSXM00.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsMD_SUBSXM00_TEMP.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsMD_MATRXM02.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsMD_ETMDXM.addEventHandler("oncolumnchanged", this.dsMD_ETMDXM_oncolumnchanged, this);
            this.dsMD_MATRXM01_TEMP.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsMD_MATRXM01.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsMD_SUBSXM01.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.dsMD_SUBSXM01_TEMP.addEventHandler("onrowposchanged", this.fn_KeyFieldDisible, this);
            this.addEventHandler("onkeydown", this.fn_HotKey, this);
            this.addEventHandler("onload", this.fn_FormLoadSetting, this);
            this.addEventHandler("onbeforeclose", this.fn_FormUnloadProcess, this);
            this.grdMD_ODTRXH.addEventHandler("oncellclick", this.dsMD_ODTRXH_onrowposchanged, this);
            this.grdMD_ODTRXH.addEventHandler("onheadclick", this.grdMD_ODTRXH_onheadclick, this);
            this.grdMD_ODTRXD.addEventHandler("onheadclick", this.grdMD_ODTRXD_onheadclick, this);
            this.btn_favorite.addEventHandler("onclick", this.btn_favorite_onclick, this);
            this.edtSHRCUST_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRCUST_CODE.addEventHandler("onclick", this.fn_HelpDialogeSHRCUST_CODE, this);
            this.edtSHRCUST_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.edtSHRBRND_CODE.addEventHandler("onsetfocus", this.fn_EditFocus, this);
            this.imgHelpSHRBRND_CODE.addEventHandler("onclick", this.fn_HelpDialogeSHRBRND_CODE, this);
            this.edtSHRBRND_NAME.addEventHandler("onkillfocus", this.fn_HelpDialoge, this);
            this.CalSHRYEAR_MNTH.addEventHandler("onmouseenter", this.fn_onclickSHRYEAR_MNTH, this);
            this.btnEachCreate.addEventHandler("onclick", this.fn_OnClick_EachCreate, this);
            this.btnCustomerCreate.addEventHandler("onclick", this.fn_OnClick_CustomerCreate, this);
            this.btnCreateTRAN_DATE.addEventHandler("onclick", this.fn_OnClick_CreateTRAN_DATE, this);
            this.grdMD_ODMDXM.addEventHandler("onheadclick", this.grdMD_ODMDXM_onheadclick, this);

        };

        this.loadIncludeScript("MDMADATASETSAVE.xfdl");
        this.loadPreloadList();
       
    };
}
)();
