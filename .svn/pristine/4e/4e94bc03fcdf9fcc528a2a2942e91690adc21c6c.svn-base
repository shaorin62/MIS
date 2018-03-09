import java.sql.Connection;
import java.sql.ResultSet;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.ArrayUtils;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.support.RequestContextUtils;

import com.ibatis.sqlmap.engine.mapping.statement.RowHandlerCallback;
import com.ibatis.sqlmap.engine.scope.StatementScope;

import core.ifw.cmm.dataaccess.InbusRowHandler;
import core.ifw.log.service.CmmLogManageService;

/**
 * <pre>
 *	IbatisResultSetConcern - iBatis 프레임워크 라이브러리에 AspectJ AOP 적용을 위한 Advice 및 Pointcut 정의<br/>
 * <p><b>NOTE :</b> AspectJ 및 스프링 AOP, 메이븐 빌드를 모두 적용하여야 실제로 ibatis 프레임워크에 aop를 적용 가능합니다.<br/>
 * 또한, 메이븐을 통하여 ibatis-sqlmap-2.3.4.726.jar 라이브러리 또한 별도로 컴파일을 하여야 합니다.<br/>
 * 자세한 내용은 <a href="http://www.eclipse.org/aspectj/">이클립스 AspectJ 프로젝트</a> 및 메이븐 플러그인 사이트인 <a href="http://mojo.codehaus.org/">Codehaus Mojo 사이트</a>를 참고하세요.</p>
 * </pre>
 * 
 * @author	장성환 <jsh@inbus.co.kr>
 * @since	2014. 8. 7.
 * @version	1.0
 * @see		<a href="http://www.eclipse.org/aspectj/">AspectJ Project</a>, <a href="http://mojo.codehaus.org/">Codehaus Mojo Plugins</a>
 * 
 * <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2014. 8. 7.	Genie. J.		Initial Created.
 * ====================================================
 * </pre>
 *
 * Copyright 1998-2014 By INBUS Co,Ltd. All rights reserved.
 */
public aspect IbatisResultSetConcern {
	
	private Logger LOGGER = LoggerFactory.getLogger(IbatisResultSetConcern.class);  
	
	// also can inject spring managed bean
	@Resource(name = "cmmLogManageService")
	private CmmLogManageService cmmLogManageService;

	/**
	 * <pre>
	 * ibatis의 쿼리 실행 결과 값 처리 메소드를 처리한다.
	 * <p><b>NOTE :</b> com.ibatis.sqlmap.engine.execution.SqlExecutor.handleResults(..) 함수 실행 시 해당 파라미터를 cutting 하여,<br/>
	 * x-internet 클라이언트의 데이터셋 구성을 위한 사전처리를 진행합니다.
	 * </pre>
	 */
	before(StatementScope statementScope , ResultSet rs , int skipResults , int maxResults, RowHandlerCallback callback)
		: execution(* com.ibatis.sqlmap.engine.execution.SqlExecutor.handleResults(..))
			&& args(statementScope, rs, skipResults, maxResults, callback) {
		
		try {
			
			if (callback.getRowHandler() instanceof InbusRowHandler) {
				InbusRowHandler rowHandler = (InbusRowHandler) callback.getRowHandler();
				rowHandler.parseColumnMetaInfo(rs);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	/**
	 * <pre>
	 * ibatis의 쿼리 실행로그를 저장하기 위한 aspectj 포인트
	 * </pre>
	 */
	before( StatementScope statementScope, Connection conn, String sql, Object [] parameters, int skipResults, int maxResults, RowHandlerCallback callback )
	: execution(* com.ibatis.sqlmap.engine.execution.SqlExecutor.executeQuery(..))
	&& args( statementScope, conn, sql, parameters, skipResults, maxResults, callback ) {
		
		try {
			
			if (LOGGER.isDebugEnabled()) {
				LOGGER.debug(" ---------- QUERY ----------");
				LOGGER.debug(sql);
				LOGGER.debug(" ---------- QUERY ----------");
				LOGGER.debug(" ---------- PARAM ----------");
				LOGGER.debug(ArrayUtils.toString(parameters));
				LOGGER.debug(" ---------- PARAM ----------");
			}
			
			ServletRequestAttributes servletRequestAttribute = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
	        HttpServletRequest request = servletRequestAttribute.getRequest();
			
			String userId = (String) request.getAttribute("GBL_USERID");
			String emplNo = (String) request.getAttribute("GBL_EMPLNO");
			String userIp = (String) request.getAttribute("GBL_LOGINIP");
			String menuId = (String) request.getAttribute("MENU_ID");
			String pgm = (String) request.getAttribute("PGM");
			LOGGER.debug("--- Login ID : " + userId + ", Login IP : " + userIp + ", MENU ID : " + menuId);
			
			// 쿼리 실행 로그를 위한 파라미터
			Map<String, String> logMap = new HashMap<String, String>();
			logMap.put("EXCT_CNTT", sql);
			logMap.put("CAFN_NAME", ArrayUtils.toString(parameters));
			logMap.put("USER_IDXX", userId);
			logMap.put("EMPL_NUMB", emplNo);
			logMap.put("USEX_IPAR", userIp);
			logMap.put("MENU_IDXX", menuId);
			logMap.put("PGM", pgm);
			
	        if (callback.getRowHandler().getClass() == InbusRowHandler.class) {
		        InbusRowHandler rowHandler = (InbusRowHandler) callback.getRowHandler();
		        LOGGER.debug(" ------------ Caller Dao : " + rowHandler.getCallerName());
		        logMap.put("REMK_100X", rowHandler.getCallerName());
	        }
	        
	        WebApplicationContext webApplicationContext = RequestContextUtils.getWebApplicationContext(request);
	        cmmLogManageService = (CmmLogManageService) webApplicationContext.getBean("cmmLogManageService");
	        cmmLogManageService.saveDataAccessLog(logMap);
	        
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	
	
	/**
	 * <pre>
	 * ibatis의 쿼리 실행로그를 저장하기 위한 aspectj 포인트
	 * </pre>
	 */
	before( StatementScope statementScope, Connection conn, String sql, Object [] parameters)
	: execution(* com.ibatis.sqlmap.engine.execution.SqlExecutor.executeUpdate(..))
	&& args( statementScope, conn, sql, parameters) {
		
		try {
				
			if (sql.contains("INSERT INTO TM_OPERXM")) return;
			
			if (LOGGER.isDebugEnabled()) {
				LOGGER.debug(" ---------- QUERY ----------");
				LOGGER.debug(sql);
				LOGGER.debug(" ---------- QUERY ----------");
				LOGGER.debug(" ---------- PARAM ----------");
				LOGGER.debug(ArrayUtils.toString(parameters));
				LOGGER.debug(" ---------- executeUpdate ----------");
			}
				
			
			ServletRequestAttributes servletRequestAttribute = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
	        HttpServletRequest request = servletRequestAttribute.getRequest();
			
	        String userId = (String) request.getAttribute("GBL_USERID");
			String emplNo = (String) request.getAttribute("GBL_EMPLNO");
			String userIp = (String) request.getAttribute("GBL_LOGINIP");
			String menuId = (String) request.getAttribute("MENU_ID");
			String pgm = (String) request.getAttribute("PGM");
			
			LOGGER.debug("--- Login ID : " + userId + ", Login IP : " + userIp + ", MENU ID : " + menuId);
			
			// 쿼리 실행 로그를 위한 파라미터
			Map<String, String> logMap = new HashMap<String, String>();
			logMap.put("EXCT_CNTT", sql);
			logMap.put("CAFN_NAME", ArrayUtils.toString(parameters));
			logMap.put("USER_IDXX", userId);
			logMap.put("EMPL_NUMB", emplNo);
			logMap.put("USEX_IPAR", userIp);
			logMap.put("MENU_IDXX", menuId);
			logMap.put("PGM", pgm);
	        logMap.put("REMK_100X", "");

	        
	        WebApplicationContext webApplicationContext = RequestContextUtils.getWebApplicationContext(request);
	        cmmLogManageService = (CmmLogManageService) webApplicationContext.getBean("cmmLogManageService");
	        cmmLogManageService.saveDataAccessLog(logMap);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	
}

