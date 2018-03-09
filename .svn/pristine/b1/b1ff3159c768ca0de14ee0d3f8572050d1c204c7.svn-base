CREATE OR REPLACE FUNCTION UWZ.SF_GET_SELECTINSERT (    
    iATTR_NAME IN VARCHAR2 
)

RETURN CLOB IS RET_NAME CLOB;

/******************************************************************************
   NAME    :  SF_GET_SELECTINSERT
   PURPOSE :  테이블 이름을 주면 INSERT / SELECT 문 생성 후 반환.

   REVISIONS:
   Ver            Date            Author                           Description
   ---  --------------   ---------------  ------------------------------------
   1.0      2016-09-12            김석두              1. Created this function.

   NOTES:
   * 테이블이 없다면 공백 반환.
******************************************************************************/
BEGIN

    FOR CUR IN (SELECT QURY_TEXT
                  FROM (SELECT DECODE(COLUMN_ID, (SELECT MIN(COLUMN_ID) FROM USER_TAB_COLUMNS WHERE TABLE_NAME = A.TABLE_NAME),
                                                  'INSERT INTO ' || A.TABLE_NAME || ' (' || A.COLUMN_NAME || LPAD(' ', 4) || '/* ' ||  B.COMMENTS || ' */',
                                                 (SELECT MAX(COLUMN_ID) FROM USER_TAB_COLUMNS WHERE TABLE_NAME = A.TABLE_NAME),
                                                  LPAD(' ', 22) || ',' ||  A.COLUMN_NAME || ')' || LPAD(' ', 3) || '/* ' ||  B.COMMENTS || ' */',
                                                  LPAD(' ', 22) || ',' ||  A.COLUMN_NAME || LPAD(' ', 4) || '/* ' ||  B.COMMENTS || ' */') AS QURY_TEXT
                               , 1         AS SYNC_SEQN
                               , COLUMN_ID AS COLM_SEQN
                          FROM USER_TAB_COLUMNS A INNER JOIN USER_COL_COMMENTS B ON A.TABLE_NAME  = B.TABLE_NAME AND A.COLUMN_NAME = B.COLUMN_NAME
                         WHERE A.TABLE_NAME = iATTR_NAME
                         UNION ALL
                        SELECT DECODE(COLUMN_ID, (SELECT MIN(COLUMN_ID) FROM USER_TAB_COLUMNS WHERE TABLE_NAME = A.TABLE_NAME),
                                                  LPAD(' ', 15) || 'SELECT  ' ||  A.COLUMN_NAME || LPAD(' ', 4) || '/* ' ||  B.COMMENTS || ' */',
                                                 (SELECT MAX(COLUMN_ID) FROM USER_TAB_COLUMNS WHERE TABLE_NAME = A.TABLE_NAME),
                                                    LPAD(' ', 22) || ',' ||  A.COLUMN_NAME || LPAD(' ', 4) || '/* ' ||  B.COMMENTS || ' */' || CHR(13) || LPAD(' ', 17) || 'FROM ' || A.TABLE_NAME,
                                                  LPAD(' ', 22) || ',' || A.COLUMN_NAME || LPAD(' ', 4) || '/* ' ||  B.COMMENTS || ' */')
                               , 2         AS SYNC_SEQN
                               , COLUMN_ID AS COLM_SEQN
                          FROM USER_TAB_COLUMNS A INNER JOIN USER_COL_COMMENTS B ON A.TABLE_NAME  = B.TABLE_NAME AND A.COLUMN_NAME = B.COLUMN_NAME
                         WHERE A.TABLE_NAME = iATTR_NAME
                       )
                 ORDER BY SYNC_SEQN, COLM_SEQN
    )
    
    LOOP

        IF CUR.QURY_TEXT IS NOT NULL THEN

            BEGIN
                 RET_NAME := RET_NAME || CUR.QURY_TEXT || CHR(10);
            END;

        END IF;

    END LOOP;

    RETURN RET_NAME;
    
END SF_GET_SELECTINSERT;
/