CREATE OR REPLACE FUNCTION UWZ."SF_YEA_YETABS" (
     iYEA_STD_YY       YEA_YETABS.YEA_STD_YY%TYPE  --���س⵵
    ,iYEA_DED_TYPE_CD  YEA_YETABS.YEA_DED_TYPE_CD%TYPE  --���������ڵ�
    ,iYEA_DED_ITEM_CD  YEA_YETABS.YEA_DED_ITEM_CD%TYPE  --�����׸��ڵ�
    ,iYEA_DED_VALUE    VARCHAR2                  --RETURN �� VALUE ���ð�

)
RETURN NUMBER IS
R_VALUE    NUMBER(15,5);
/******************************************************************************
   NAME    :  SF_YEA_YETABS
   PURPOSE :  ���ױٰ�ǥ �ش��ϴ� �׸��� ���� RETURN
******************************************************************************/
BEGIN
   R_VALUE := 0;
   BEGIN
         SELECT CASE WHEN UPPER(iYEA_DED_VALUE) = 'A' THEN YEA_A_VALUE
                     WHEN UPPER(iYEA_DED_VALUE) = 'B' THEN YEA_B_VALUE
                     WHEN UPPER(iYEA_DED_VALUE) = 'C' THEN YEA_C_VALUE
                     WHEN UPPER(iYEA_DED_VALUE) = 'D' THEN YEA_D_VALUE
                     WHEN UPPER(iYEA_DED_VALUE) = 'E' THEN YEA_E_VALUE
                     ELSE 0
                     END
           INTO R_VALUE
           FROM YEA_YETABS
          WHERE YEA_STD_YY = SUBSTR(iYEA_STD_YY,0,4)
            AND YEA_DED_TYPE_CD = iYEA_DED_TYPE_CD
            AND YEA_DED_ITEM_CD = iYEA_DED_ITEM_CD;


   EXCEPTION
      WHEN NO_DATA_FOUND THEN
           R_VALUE :=  R_VALUE;
      WHEN OTHERS THEN
           R_VALUE :=  R_VALUE;
   END;
    RETURN R_VALUE;
END SF_YEA_YETABS;