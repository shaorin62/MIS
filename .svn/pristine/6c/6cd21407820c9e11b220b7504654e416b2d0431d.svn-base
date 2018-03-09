/**
 * core.ifw.cmm.dataaccess.ReloadingSqlMapClientFactoryBean.java
 */
package core.ifw.cmm.dataaccess;

import java.io.IOException;
import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Timer;
import java.util.TimerTask;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantReadWriteLock;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.Resource;
//import org.springframework.orm.ibatis.SqlMapClientFactoryBean;
import org.springframework.beans.factory.DisposableBean;

import com.ibatis.sqlmap.client.SqlMapClient;

import egovframework.rte.psl.orm.ibatis.SqlMapClientFactoryBean;



/**
 * <pre>
 * ReloadingSqlMapClientFactoryBean - iBatis 쿼리 sqlmap 파일 변경시 서버 재시작 없이 자동으로 재로딩합니다.
 * <p>
 * <b>NOTE : </b> 사용시 주의점이 있습니다.
 * </p><p>
 * 1. SqlMap 파일의 경로를 mappingLocations 변수에 설정하여야 합니다. 예를 들어, Spring 설정에서 다음과 같이 적용합니다.<br/>
 * 	&lt;!-- sqlMap 변경파일을 자동으로 리로딩 할 수 있도록 구현된 SqlSessionFactory 사용 -->
 *	&lt;bean id="sqlMapClient" class="core.ifw.cmm.dataaccess.ReloadingSqlMapClientFactoryBean">
 *		&lt;property name="dataSource" ref="dataSource-${Inbus.DbType}" />
 *		&lt;property name="configLocation" value="classpath:/mis/sqlmap/config/sql-map-config.xml"></property>
 *		&lt;property name="mappingLocations">
 *			&lt;list>
 *				&lt;value>classpath*:&#47**&#47*${Inbus.DbType}.xml</value>
 *			&lt;/list>
 *		&lt;/property>
 *		&lt;property name="lobHandler" ref="defaultLobHandler" />
 *	&lt;/bean>
 * </p><p>
 * 2. 변경된 SqlMap 파일만 재로딩하며, 그 이외의 설정파일 변경과는 무관합니다.
 * 따라서 프로젝트 설정파일이나 다른 리소스에 대한 변경은 서버를 재시작하여 적용하여야 합니다.
 * </p>
 * <pre>
 * 
 * @author 장성환 {Genie. J.} [jsh@inbus.co.kr]
 * @since 2015. 05. 21.
 * @version 1.0
 * @see {@link SqlMapClientFactoryBean}, {@link DisposableBean}
 * 
 *      <pre>
 * == Modification Information ==
 * Date		Modifier		Comment
 * ====================================================
 * 2015. 05. 21.	Genie. J.		Initial Created.
 * ====================================================
 * </pre>
 * 
 * Copyright 1998-2015 By INBUS Co,Ltd. All rights reserved.
 */
public class ReloadingSqlMapClientFactoryBean extends SqlMapClientFactoryBean implements DisposableBean {

	private static final Logger logger = LoggerFactory.getLogger(ReloadingSqlMapClientFactoryBean.class);

	private SqlMapClient proxy;
	private Timer timer;
	private TimerTask task;
	private Resource[] mappingLocations;

	/*
	 * 파일 변경 체크 간격. 밀리세컨드 단위이며, 기본으로 10,000밀리세컨드.
	 */
	private int interval = 10000;	// 10 sec

	/*
	 * 파일 감시 쓰레드가 실행중인지 여부.
	 */
	private boolean running = false;

	/*
	 * 파일 감시를 위한 Lock 객체
	 */
	private final ReentrantReadWriteLock rwl = new ReentrantReadWriteLock();
	private final Lock readLock = rwl.readLock();
	private final Lock writeLock = rwl.writeLock();

	/* (non-Javadoc)
	 * @see org.springframework.orm.ibatis.SqlMapClientFactoryBean#setMappingLocations(org.springframework.core.io.Resource[])
	 */
	public void setMappingLocations(Resource[] mappingLocations) {
		super.setMappingLocations(mappingLocations);
		this.mappingLocations = mappingLocations;
	}

	/**
	 * <pre>
	 * 파일 변경여부를 체크할 간격을 설정한다.
	 * </pre>
	 * 
	 * @param interval
	 *            밀리세컨드
	 */
	public void setInterval(int interval) {
		this.interval = interval;
	}

	/**
	 * <pre>
	 * 현재 구현클래스의 상위의 인터페이스 Proxy 객체를 갱신한다.
	 * </pre>
	 *
	 * @throws Exception
	 */
	public void refresh() throws Exception {

		if (logger.isDebugEnabled() || logger.isInfoEnabled()) {
			logger.debug(" --------------- Start reloading sqlMapClient.");
		}

		writeLock.lock();

		try {

			super.afterPropertiesSet();

		} finally {

			writeLock.unlock();
			
		}
		
		if (logger.isDebugEnabled() || logger.isInfoEnabled()) {
			logger.debug(" --------------- Finished reloading sqlMapClient.");
		}
		
	}

	/**
	 * 싱글톤 멤버로 SqlMapClient 원본 대신 프록시로 설정하도록 오버라이드.
	 * @see org.springframework.orm.ibatis.SqlMapClientFactoryBean#afterPropertiesSet()
	 */
	public void afterPropertiesSet() throws Exception {
		super.afterPropertiesSet();
		setRefreshable();
		if (logger.isInfoEnabled()) {
			logger.info("----- Bean : " + ReloadingSqlMapClientFactoryBean.class.getCanonicalName() + " initialized finish.");
		}
	}

	/**
	 * <pre>
	 * Inner 인터페이스를 이용하여 SqlMapClient(실제로는 자기 자신의 클래스)를 Self-Invocation 시킵니다.
	 * </pre>
	 *
	 */
	private void setRefreshable() {

		proxy = (SqlMapClient) Proxy.newProxyInstance(

			SqlMapClient.class.getClassLoader(),
	
			new Class[] { SqlMapClient.class },

			new InvocationHandler() {
	
				public Object invoke(Object proxy, Method method, Object[] args)
						throws Throwable {
					return method.invoke(getParentObject(), args);
				}

		});

		task = new TimerTask() {

			// 모든 리소스들의 Modified Timestamp를 저장할 Map 객체
			private Map<Resource, Long> resTsmpMap = new HashMap<Resource, Long>();

			public void run() {
				
				if (isModified()) {
					
					try {
						refresh();
					} catch (Exception e) {
						logger.error(" --------------- Exception", e);
					}
					
				}
				
			}

			/**
			 * <pre>
			 * 변경된 sqlmap 리소스가 있는지 확인한다.
			 * </pre>
			 *
			 * @return
			 */
			private boolean isModified() {
				
				boolean isModified = false;
				
				if (mappingLocations != null) {
					
					for (int i = 0; i < mappingLocations.length; i++) {
						Resource mappingLocation = mappingLocations[i];
						isModified |= findModifiedResource(mappingLocation);
					}
					
				}
				
				return isModified;
				
			}

			/**
			 * <pre>
			 * 변경된 sqlmap 리소스를 확인합니다.
			 * </pre>
			 *
			 * @param resource 변경여부를 확인할 SqlMap 리소스
			 * @return sqlmap 파일이 변경되었으면 true, 아니면 false를 반환한다.
			 */
			private boolean findModifiedResource(Resource resource) {
				
				boolean isModified = false;
				List<String> modifiedResources = new ArrayList<String>();

				try {
					
					long modified = resource.lastModified();
					
					if (resTsmpMap.containsKey(resource)) {
						
						long lastModified = ((Long) resTsmpMap.get(resource)).longValue();

						if (lastModified != modified) {
							resTsmpMap.put(resource, new Long(modified));
							modifiedResources.add(resource.getDescription());
							isModified = true;
						}

					} else {
						resTsmpMap.put(resource, new Long(modified));
					}

				} catch (IOException e) {
					logger.error(" --------------- Exception : ", e);
				}

				if (isModified) {
					if (logger.isDebugEnabled() || logger.isInfoEnabled()) {
						logger.debug(" --------------- Modified file : " + modifiedResources);
					}
				}

				return isModified;

			}

		};

		timer = new Timer(true);
		
		resetInterval();

	}

	/**
	 * <pre>
	 * 상위 SqlMapClientFactory 객체를 가져온다.
	 * </pre>
	 *
	 * @return SqlMapClientFactory 객체
	 * @throws Exception 예외
	 */
	private Object getParentObject() throws Exception {
		
		// singleton proxy 객체이기 때문에 해당 리소스에 Lock을 걸어야 합니다.
		readLock.lock();
		
		try {
			return super.getObject();
		} finally {
			readLock.unlock();
		}

	}

	/* (non-Javadoc)
	 * @see org.springframework.orm.ibatis.SqlMapClientFactoryBean#getObject()
	 */
	public SqlMapClient getObject() {
		return this.proxy;
	}

	/* (non-Javadoc)
	 * @see org.springframework.orm.ibatis.SqlMapClientFactoryBean#getObjectType()
	 */
	public Class<? extends SqlMapClient> getObjectType() {
		return (this.proxy != null ? this.proxy.getClass() : SqlMapClient.class);
	}

	/* (non-Javadoc)
	 * @see org.springframework.orm.ibatis.SqlMapClientFactoryBean#isSingleton()
	 */
	public boolean isSingleton() {
		// 주의 : SqlMapClient Proxy 객체는 항상 singleton 이어야 한다.
		return true;
	}

	/**
	 * <pre>
	 * 변경 주기 값을 세팅한다.
	 * </pre>
	 *
	 * @param ms 변경하려는 파일 체크 주기.
	 */
	public void setCheckInterval(int ms) {
		interval = ms;
		if (timer != null) {
			resetInterval();
		}
	}

	/**
	 * <pre>
	 * 타이머의 인터벌을 초기화 한다.
	 * </pre>
	 *
	 */
	private void resetInterval() {

		if (running) {
			timer.cancel();
			running = false;
		}

		if (interval > 0) {
			timer.schedule(task, 0, interval);
			running = true;
		}

	}

	/* (non-Javadoc)
	 * @see org.springframework.beans.factory.DisposableBean#destroy()
	 */
	public void destroy() throws Exception {
		timer.cancel();
	}

}
