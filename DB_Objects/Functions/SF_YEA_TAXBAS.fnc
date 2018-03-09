CREATE OR REPLACE FUNCTION UWZ."SF_YEA_TAXBAS" (
     iYEA_STD_YYMM      YEA_TAXBAS.YEA_STD_YYMM%TYPE  --기준년월
    ,iYEA_CAL_TYPE_CD   YEA_TAXBAS.YEA_CAL_TYPE_CD%TYPE  --산출구분코드
    ,iYEA_CAL_ITEM_CD   YEA_TAXBAS.YEA_CAL_ITEM_CD%TYPE  --산출항목코드
    ,iYEA_CAL_VALUE     VARCHAR2                  --RETURN 할 VALUE 선택값

)
RETURN NUMBER IS
R_VALUE    NUMBER(20,5);
/******************************************************************************
   NAME    :  SF_YEA_TAXBAS
   PURPOSE :  세액산출근거표 해당하는 항목의 값을 RETURN
******************************************************************************/
BEGIN
   R_VALUE := 0;
   BEGIN
         SELECT CASE WHEN UPPER(iYEA_CAL_VALUE) = 'A' THEN YEA_A_VALUE
                     WHEN UPPER(iYEA_CAL_VALUE) = 'B' THEN YEA_B_VALUE
                     WHEN UPPER(iYEA_CAL_VALUE) = 'C' THEN YEA_C_VALUE
                     WHEN UPPER(iYEA_CAL_VALUE) = 'D' THEN YEA_D_VALUE
                     WHEN UPPER(iYEA_CAL_VALUE) = 'E' THEN YEA_E_VALUE
                     WHEN UPPER(iYEA_CAL_VALUE) = 'F' THEN YEA_F_VALUE
                     WHEN UPPER(iYEA_CAL_VALUE) = 'G' THEN YEA_G_VALUE
                     ELSE 0
                     END
           INTO R_VALUE
           FROM YEA_TAXBAS
          WHERE YEA_STD_YYMM = (
                                SELECT MAX(YEA_STD_YYMM)
                                  FROM YEA_TAXBAS
                                 WHERE SUBSTR(YEA_STD_YYMM,1,4) <=  iYEA_STD_YYMM
                                )
            AND YEA_CAL_TYPE_CD = iYEA_CAL_TYPE_CD
            AND YEA_CAL_ITEM_CD = iYEA_CAL_ITEM_CD;


   EXCEPTION
      WHEN NO_DATA_FOUND THEN
           R_VALUE :=  R_VALUE;
      WHEN OTHERS THEN
           R_VALUE :=  R_VALUE;
   END;
    RETURN R_VALUE;
END SF_YEA_TAXBAS;