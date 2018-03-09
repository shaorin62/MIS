DROP TRIGGER UWZ.TM_APPRXH_TR;

CREATE OR REPLACE TRIGGER UWZ.TM_APPRXH_TR
AFTER UPDATE
ON UWZ.TM_APPRXH 
REFERENCING NEW AS NEW OLD AS OLD
FOR EACH ROW
DECLARE                                     
                 
BEGIN         
          

--<DOCLINE> *****************************************************************************                             
--<DOCLINE>   TITLE       : 결재문서 승인처리                 
--<DOCLINE>   PROJECT     :                             
--<DOCLINE>   AUTHOR      : 공통사용                             
--<DOCLINE>   PROGRAM_ID  : TM_APPRXH_TR                            
--<DOCLINE>   ARGUMENT    :                       
--<DOCLINE>   RETURN      :                              
--<DOCLINE>   COMMENT     :                             
--<DOCLINE>   HISTORY     :                           
--<DOCLINE> *****************************************************************************                    
                   
             
--***************************************************************************************                  
--INSERT                   
--***************************************************************************************                  
--KHR110    시간외근무신청서                                            AT_OWAPXD
--KHR111    휴가사용신청서                                              AT_HDAPXD  
--KHR112    휴가취소신청서                                              AT_HDCPXD       
--KHR143    연수지원신청서                                              CW_TRAPXM       
--***************************************************************************************                 
                 
    IF :NEW.APPR_STAT = 'Y' THEN   
                 
        --시간외근무신청서   O             
        IF :NEW.DOCU_IDXX = 'KHR110'  THEN                
           BEGIN                 
              AT_OWAPXD_PRC(:NEW.DOCU_IDXX, :NEW.APPR_SEQN);                  
           END;                 
        END IF; 
        
         --휴가사용신청서   O             
        IF :NEW.DOCU_IDXX = 'KHR111'  THEN                
           BEGIN                 
              AT_HDAPXH_PRC   (:NEW.DOCU_IDXX, :NEW.APPR_SEQN);                  
           END;                 
        END IF; 
        
         --휴가취소신청서   O             
        IF :NEW.DOCU_IDXX = 'KHR112'  THEN                
           BEGIN                 
              AT_HDCPXH_PRC   (:NEW.DOCU_IDXX, :NEW.APPR_SEQN);                  
           END;                 
        END IF; 
        
        --연수지원신청서   O
        IF :NEW.DOCU_IDXX = 'KHR143'  THEN                
           BEGIN                 
              CW_TRSPXM_PRC(:NEW.DOCU_IDXX, :NEW.APPR_SEQN);                  
           END;                 
        END IF;  
                 
        
         
    END IF;     
    
    
    /*******************************************************************************
        작  성  자 : 권미영
        작  성  일 : 2016.10.06
        내      용 : 인터페이스 전자결재 연동 후처리 호출
    ********************************************************************************/
    BEGIN                 
            PKG_IFAPPRSTAT_PROC.SP_APPRSTAT_PROC(
                        :NEW.DOCU_IDXX      /* 문서ID */
                      , :NEW.APPR_SEQN      /* 결재일련번호 */
                      , :NEW.APPR_STAT      /* 결재상태 */
                      , :NEW.ENDX_DATE      /* 결재완료일자 */
            );                  
    END;                 
                 
                      
                   
END;
/
