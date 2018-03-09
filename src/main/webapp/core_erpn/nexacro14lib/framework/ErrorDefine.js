﻿//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2014 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.co.kr/legal/nexacro-public-license-readme-1.1.html	
//
//==============================================================================

if (this.nexacro) {
	nexacro._errortable = 
		{
		"ko" : 
			{
			"reference_not_define" : ["%0", "가 정의되지 않았습니다. "], 
			"reference_fail_findcolumn" : ["Dataset에서 지정한 Column[", "%0", "] 을 찾지 못했습니다."], 
			"syntax_fail_parse_xml" : ["파싱 중 에러가 발생되었습니다.[", "%0", "]"], 
			"syntax_not_set_samepath" : ["form과 같은 경로로 설정할수 없습니다.[", "%0", "]"], 
			"type_invalid" : ["추가할수 없는 타입입니다.[", "%0", "]"], 
			"type_mismatch" : ["입력 파라미터의 데이터 형식이 일치하지 않습니다. [", "%0", "]"], 

			"range_argument" : ["Argument가 맞지 않습니다.[", "%0", ".", "%1", "]"], 
			"range_outof" : ["입력 파라미터가 유효 범위를 벗어났습니다. [", "%0", "]"], 
			"range_invalide" : ["입력 파라미터가 유효한 값이 아닙니다. [", "%0", "]"], 

			"native_notimplemented" : ["구현되지 않은 기능입니다. [", "%0", "]"], 
			"native_notsupport" : ["HTML5에서 지원되지 않는 객체 또는 속성입니다.", "%0", "[", "%1", "]"], 
			"native_deprecate" : ["해당 기능은 Deprecate 된 기능입니다. [", "%0", "]"], 

			"native_fail_dataset_head" : ["데이타셋의 헤더정보를 로딩하는 중 실패하였습니다."], 
			"native_fail_dataset_recode" : ["데이타셋의 레코드 정보를 로딩하는 중 실패하였습니다."], 
			"native_exist_id" : ["해당 ID를 갖는 Object 가 존재합니다. id = [", "%0", "]"], 
			"native_exist_parent" : ["parent가 이미 존재합니다. "], 
			"native_notexist_parent" : ["parent 가 존재하지 않습니다."], 
			"native_notexist_licensefile" : ["라이센스 화일이 존재하지 않습니다. "], 
			"native_expire_license" : ["라이센스 기간이 [", "%0", "]로 만료되었습니다.    "], 
			"native_invalid_licensefile" : ["라이센스 정보가 유효하지 않습니다. 라이센스를 확인하시기 바랍니다."], 
			"native_license_invaliddomain" : ["라이센스 도메인 정보가 정확하지 않습니다. 도메인 확인이 필요합니다.  [", "%0", "]"], 
			"native_license_fail_parse" : ["라이센스 도메인 정보가 정확하지 않습니다. 라이센스 화일을 분석하는 도중 에러가 발생하였습니다.  [", "%0", "]"], 
			"native_fail_openfile" : ["파일을 열지 못했습니다. [", "%0", "]"], 
			"native_license_invalidservice" : ["해당 서비스를 지원하지 않는 라이센스입니다. 라이센스를 확인하시기 바랍니다. "], 

			"comm_fail_loadinvalidurl" : ["로딩하는 중에 에러가 발생하였습니다. 주소가 정확한지 확인하고 다시 시도하십시오. [", "%0", "]"], 
			"comm_fail_loadinvalidimage" : ["이미지 정보를 찾을 수 없습니다.[", "%0", "]"], 
			"comm_fail_translate_url" : ["경로를 변경하는데 오류가 발생하였습니다.[", "%0", "]"], 
			"comm_fail_loaddetail" : ["로딩하는 중에 에러가 발생하였습니다. 주소가 정확한지 확인하고 다시 시도하십시오. 경로 [", "%0", "] HTTP 에러코드 [", "%1", "]"], 
			"comm_cancel_byuser" : ["사용자에 의해 통신이 중지 되었습니다. [", "%0", "]"], 
			"comm_stop_transaction_byesc" : ["Transaction이 Esc Key에 의해 중단됩니다.  ( 표준이 아닙니다. )"], 
			"comm_http_301" : ["요청한 URI가 새 URI로 변경되었습니다."], 
			"comm_http_302" : ["요청한 URI가 일시적으로 변경되었습니다."], 
			"comm_http_305" : ["요청한 자원은 반드시 Proxy Location을 사용하여 접근해야 합니다."], 
			"comm_http_307" : ["요청한 URI가 일시적으로 변경되었습니다."], 
			"comm_http_400" : ["클라이언트의 잘못된 요청으로 처리할 수 없습니다.\n 주소가 정확한지 확인하고 다시 시도하십시오.  "], 
			"comm_http_401" : ["서버에 로그온 하려는 요청사항이 서버에 들어있는 권한과 맞지 않습니다.    "], 
			"comm_http_402" : ["예약되어 있습니다.   "], 
			"comm_http_403" : ["브라우저가 접근한 디렉토리에 가용한 디폴트 페이지가 없습니다.   "], 
			"comm_http_404" : ["요청한 경로에서 문서를 찾을 수 없습니다.\n 주소가 정확한지 확인하고 다시 시도하십시오. "], 
			"comm_http_405" : ["사이트에서 페이지를 표시할 수 없습니다.  "], 
			"comm_http_406" : ["받아들일 수 없는 요청입니다.  "], 
			"comm_http_407" : ["Proxy 인증이 필요합니다.   "], 
			"comm_http_408" : ["요청시간이 지났습니다."], 
			"comm_http_500" : ["내부서버 오류입니다.   "], 
			"comm_http_503" : ["외부 서비스가 죽었거나 현재 멈춤 상태 입니다.  "], 
			"comm_http_504" : ["게이트웨이의 요청 대기시간을 초과 하였습니다."], 
			"comm_http_499" : ["요청 오류입니다.    "], 
			"comm_http_599" : ["서버 에러입니다.   "], 

			"comm_https_500" : ["SSL VerifyCert 에 실패하였습니다."], 
			"comm_https_501" : ["SSL ProxyInfo 가 변경되었거나 GetProxyInfo 에 실패하였습니다."], 
			"comm_https_502" : ["하나 이상의 오류가 서버에 의해 송신 된 보안 소켓 레이어 (SSL) 인증서에 발견되었습니다."], 
			"comm_https_503" : ["HTTP 프록시 서버는 요청을 처리 할 수 ​​없습니다."], 

			"script_error" : ["스크립트 오류입니다.[", "%[0]", "] "], 

			"msg_access_invalid_file" : ["안전하지 않은 파일에 접근합니다.\n계속 진행하시겠습니까?\n\n[", "%0", "]"], 
			"msg_access_invalid_domain" : ["안전하지 않은 도메인에 접근합니다.\n계속 진행하시겠습니까?\n\n[", "%0", "]"], 
			"msg_permit_folder" : ["이 폴더 및 하위 폴더는 항상 허용"], 
			"msg_permit_domain" : ["이 도메인은 항상 허용"], 

			"msg_update_processing" : ["실행중인 Process[", "%0", "] 가 있어서 Update가 실패하였습니다. \nProcess를 자동 종료하려면 Yes, 직접 종료 후 계속 진행은 No, Restart 후에 Update 적용은 Cancel를 선택합니다."], 
			"msg_reset_sandboxdialog" : ["프로그램 개선에 따라 폴더/도메인 접근 경고창에서 기존에 설정 하였던 허용 여부를 재설정 하여야만 합니다. 고객님의 많은 양해 부탁드립니다."], 

			"msg_start" : ["nexacro platform 을 시작합니다."], 
			"msg_search_proxyserver" : ["프록시 서버 설정 검색중."], 
			"msg_update_engine" : ["엔진 파트를 업데이트 합니다."], 
			"msg_download" : ["ADL 컨텐츠를 다운로딩 합니다."], 
			"msg_elevation_required" : ["요청한 작업을 수행하려면 권한상승이 필요합니다."], 

			"comp_incorrect_file" : ["지정된 화일이 올바르지 않습니다.  "], 
			"comp_fail_loadactivex" : ["ActiveX / Applet 수행시 에러가 발생하였습니다. [", "%0", "]"], 

			"object_push_send_byec" : ["Push 서버가 “Byec”를 보냈거나 서버와의 규약에 따라 종료되었습니다."], 
			"object_push_socket_timeout" : ["타임아웃 처리되었습니다."], 
			"object_push_fail_command_auth" : ["Command Auth Error. 현재 선택된 IP에 대해인증에 오류가 발생하였습니다."], 
			"object_push_fail_all_command_auth" : ["iplist 속성에 등록되어 있는 Push 서버로의 접속이 모두 실패했습니다."], 
			"object_push_fail_data_auth" : ["데이터 전송 채널 인증(authentication)에 오류가 발생하였습니다."], 
			"object_push_fail_connect" : ["서버로의 접속에 실패했습니다."], 
			"object_push_fail_send_receive" : ["패킷 전송(send/recv) 오류가 발생하였습니다."], 
			"object_push_connected_already" : ["이미 서버에 접속되어 있습니다."], 
			"object_push_fail_disconnect" : ["X-PUSH 서버와 접속해제(disconnect) 요청을 실패했습니다."], 
			"object_push_fail_suspend" : ["X-PUSH 서버로부터 메시지 수신중단(suspend) 요청을 실패했습니다."], 
			"object_push_fail_resume" : ["X-PUSH 서버로부터 메시지 수신 재시작(resume) 요청을 실패했습니다."], 
			"object_push_fail_command" : ["X-PUSH 서버로 topic 등록/등록해제 요청을 실패했습니다."], 
			"object_push_notfound_layouturl" : ["메시지 레이아웃 정의 파일을 찾을 수 없습니다."], 
			"object_push_invalid_layouturl" : ["메시지 레이아웃 정의 파일이 유효하지 않습니다."], 
			"object_push_fail_protocol_version" : ["메시지 포맷 버전 정보가 일치하지 않습니다."], 
			"object_push_fail_rect" : ["신뢰성 메시지에 대한 수신응답 전송에 실패했습니다."], 
			"object_push_fail_reqd" : ["미수신 메시지 요청을 실패했습니다."], 
			"object_push_fail_rgst_unrg" : ["X-PUSH 서버로 모바일 DeviceToken 정보 등록요청을 실패했습니다."], 
			"object_push_fail_adui" : ["X-PUSH 서버로 유저 topic 정보 등록요청(reqisterUser)이 실패했습니다."], 
			"object_push_fail_unui" : ["X-PUSH 서버로 유저 topic 정보 등록해제(unregisterUser)요청이 실패했습니다."], 
			"object_push_fail_msgc" : ["미수신 메시지 정보요청을 실패했습니다."], 
			"msg_accessibility_emptyline" : ["빈줄"], 
			"msg_accessibility_emptyframe" : ["빈 프레임"]
		}, 
		"en" : 
			{
			"reference_not_define" : ["%0", "is undefined identifier."], 
			"reference_fail_findcolumn" : ["Cannot found the specified column [", "%0", "] in Dataset."], 
			"syntax_fail_parse_xml" : ["error has occurred while parsing [", "%0", "]"], 
			"syntax_not_set_samepath" : ["Cannot set same path with form.[", "%0", "]"], 
			"type_invalid" : ["Type mismatch.[", "%0", "]"], 
			"type_mismatch" : ["The input parameter type is mismatch. [", "%0", "]"], 

			"range_argument" : ["The input parameter is incorrect.[", "%0", ".", "%1", "]"], 
			"range_outof" : ["The input parameter value is out of range [", "%0", "]"], 
			"range_invalide" : ["The input parameter value is wrong. [", "%0", "]"], 

			"native_notimplemented" : ["not implemented. [", "%0", "]"], 
			"native_notsupport" : ["The [", "%0", "[ object or property does not support in HTML5. [", "%1", "]"], 
			"native_deprecate" : ["Deprecated with . [", "%0", "]"], 

			"native_fail_dataset_head" : ["An error has occurred while loading Dataset header information."], 
			"native_fail_dataset_recode" : ["An error has occurred while loading record information."], 
			"native_exist_id" : ["Object with the ID [", "%0", "] already exists."], 
			"native_exist_parent" : ["parent already exists."], 
			"native_notexist_parent" : ["parent not exist."], 
			"native_notexist_licensefile" : ["not exist license file of application."], 
			"native_expire_license" : ["License period is expired for [", "%0", "]."], 
			"native_invalid_licensefile" : ["invalid license format."], 
			"native_license_invaliddomain" : ["invalid license domain.  [", "%0", "]"], 
			"native_license_fail_parse" : ["An error has occurred while analyzing License file."], 
			"native_fail_openfile" : ["fail open file. [", "%0", "]"], 
			"native_license_invalidservice" : ["check license. "], 

			"comm_fail_loadinvalidurl" : ["fail to invalid url. check url. [", "%0", "]"], 
			"comm_fail_loadinvalidimage" : ["Image Info [", "%0", "] is not found."], 
			"comm_fail_translate_url" : ["URL Translation Failed .[", "%0", "]"], 
			"comm_fail_loaddetail" : ["[", "%0", "] loading has been failed due to following http or socket error code [", "%1", "] "], 
			"comm_cancel_byuser" : ["canceled communication by user. [", "%0", "]"], 
			"comm_stop_transaction_byesc" : ["stop Transaction by esc key. ( no standard ) "], 
			"comm_http_301" : ["Moved Permanently."], 
			"comm_http_302" : ["The requested resource resides temporarily under a different URI."], 
			"comm_http_305" : ["The requested resource MUST be accessed through the proxy given by the Location field."], 
			"comm_http_307" : ["The requested resource resides temporarily under a different URI."], 
			"comm_http_400" : ["Unintelligible Request.  "], 
			"comm_http_401" : ["Unauthorized.    "], 
			"comm_http_402" : ["Payment Required.  "], 
			"comm_http_403" : ["Forbidden.   "], 
			"comm_http_404" : ["failed to find the file in appropriate path. "], 
			"comm_http_405" : ["Server does not support requested method.  "], 
			"comm_http_406" : ["Not Acceptable.  "], 
			"comm_http_407" : ["Proxy authentication required  "], 
			"comm_http_408" : ["Request timeout. "], 
			"comm_http_500" : ["Internal Server Error.  "], 
			"comm_http_503" : ["Service unavailable.  "], 
			"comm_http_504" : ["timed out waiting for gateway"], 
			"comm_http_499" : ["Request Error.    "], 
			"comm_http_599" : ["Server Error.   "], 

			"comm_https_500" : ["SSL VerifyCert failed."], 
			"comm_https_501" : ["SSL ProxyInfo changed or GetProxyInfo failed."], 
			"comm_https_502" : ["One or more errors were found in the Secure Sockets Layer (SSL) certificate sent by the server."], 
			"comm_https_503" : ["HTTP proxy server was unable to process the request."], 

			"script_error" : ["script error.[", "%[0]", "] "], 

			"msg_access_invalid_file" : ["Access to unsafe file. \n Do you want to proceed?\n\n[", "%0", "]"], 
			"msg_access_invalid_domain" : ["Access to unsafe domain. \n Do you want to proceed?\n\n[", "%0", "]"], 
			"msg_permit_folder" : ["Always allow this folder and its subfolders."], 
			"msg_permit_domain" : ["Always allow this domain."], 
			"msg_update_processing" : ["Update has failed as there is a Process [", "%0", "] in execution. Select 'Yes' to quit the Process automatically, 'Retry' to quit the Process manually and preceed, or 'Cancel' to apply the Update after Restart. "], 
			"msg_reset_sandboxdialog" : ["Improve the program based on the folder / domain in Approach Warning windows were previously set should satisfy themselves whether to allow the reset. Thank you for your patience."], 

			"msg_start" : ["Starting nexacro platform"], 
			"msg_search_proxyserver" : ["Searching Proxy Server Settings."], 
			"msg_update_engine" : ["Updating Engine Parts."], 
			"msg_download" : ["Downloading ADL Contents."], 
			"msg_elevation_required" : ["To perform the requested operation, you will need the elevation of privilege."], 

			"comp_incorrect_file" : ["The file is not correct. "], 
			"comp_fail_loadactivex" : ["Failed to execute ActiveX / Applet  [", "%0", "]"], 

			"object_push_send_byec" : ["The push server has sent “Byec”message or the connection has been terminated according to the server protocol."], 
			"object_push_socket_timeout" : ["The connection has been terminated as the timeout for the connection with the server has elapsed."], 
			"object_push_fail_command_auth" : ["The command socket authentication error occurred to the currently selected IP."], 
			"object_push_fail_all_command_auth" : ["All the push servers registered in the iplist attribution has failed to be connected."], 
			"object_push_fail_data_auth" : ["An error occurred in the authentication of the data transfer channel."], 
			"object_push_fail_connect" : ["Connection to the server has failed."], 
			"object_push_fail_send_receive" : ["An error occurred in sending and receiving packets."], 
			"object_push_connected_already" : ["You are already connected with the server."], 
			"object_push_fail_disconnect" : ["Request for disconnecting with the X-PUSH server (disconnect) has failed."], 
			"object_push_fail_suspend" : ["Request for suspending the reception of the message from the X-PUSH server (suspend) has failed."], 
			"object_push_fail_resume" : ["Request for resuming the reception of the message from the X-PUSH server (resume) has failed."], 
			"object_push_fail_command" : ["Request for registering a topic to the X-PUSH server or withdrawing a topic from the X-PUSH server (command) has failed."], 
			"object_push_notfound_layouturl" : ["The message layout definition file cannot found."], 
			"object_push_invalid_layouturl" : ["The message layout definition file is invalid."], 
			"object_push_fail_protocol_version" : ["The information on the message format version does not match."], 
			"object_push_fail_rect" : ["The response to the reliable message has failed to be transmitted."], 
			"object_push_fail_reqd" : ["Request for undelivered messages has failed."], 
			"msg_accessibility_emptyline" : ["empty line"], 
			"msg_accessibility_emptyframe" : ["empty frame"]
		}, 
		"ja" : 
			{
			"reference_not_define" : ["%0", "が定義されていません。"], 
			"reference_fail_findcolumn" : ["Datasetで指定したColumn[", "%0", "]が見つかりません。"], 
			"syntax_fail_parse_xml" : ["構文解析(Parsing)中にエラーが発生しました。[", "%0", "]"], 
			"syntax_not_set_samepath" : ["formと同じパスでは設定できません。[", "%0", "]"], 
			"type_invalid" : ["追加できないタイプです。[", "%0", "]"], 
			"type_mismatch" : ["入力パラメータのデータタイプが一致しません。[", "%0", "]"], 

			"range_argument" : ["引数に誤りがあります。[", "%0", ".", "%1", "]"], 
			"range_outof" : ["入力パラメータが有効範囲を超えています。 [", "%0", "]"], 
			"range_invalide" : ["入力パラメータが不正です。 [", "%0", "]"], 

			"native_notimplemented" : ["サポートされていない機能です。[", "%0", "]"], 
			"native_notsupport" : ["HTML5でサポートされていないオブジェクトまたはプロパティです。", "%0", "[", "%1", "]"], 
			"native_deprecate" : ["該当機能はDeprecateされた機能です。[", "%0", "]"], 

			"native_fail_dataset_head" : ["データセットのヘッダ情報のローディングに失敗しました。"], 
			"native_fail_dataset_recode" : ["データセットのレコード情報のローディングに失敗しました。"], 
			"native_exist_id" : ["該当idを持つオブジェクトが存在します。id = [", "%0", "]"], 
			"native_exist_parent" : ["parentが既に存在します。"], 
			"native_notexist_parent" : ["parentが存在しません。"], 
			"native_notexist_licensefile" : ["ライセンスファイルが存在しません。"], 
			"native_expire_license" : ["ライセンスの有効期間が[", "%0", "]で切れました。"], 
			"native_invalid_licensefile" : ["ライセンス情報が無効です。ライセンスを確認してください。"], 
			"native_license_invaliddomain" : ["ライセンスのドメイン情報が無効です。ドメインを確認してください。　[", "%0", "]"], 
			"native_license_fail_parse" : ["ライセンスのドメイン情報が無効です。ライセンスファイルの分析中にエラーが発生しました。[", "%0", "]"], 
			"native_fail_openfile" : ["ファイルが開けません。[", "%0", "]"], 
			"native_license_invalidservice" : ["該当サービスをサポートしていないライセンスです。ライセンスを確認してください。"], 

			"comm_fail_loadinvalidurl" : ["ローディング中にエラーが発生しました。パスを確認してください。 [", "%0", "]"], 
			"comm_fail_loadinvalidimage" : ["イメージ情報が見つかりません。[", "%0", "]"], 
			"comm_fail_translate_url" : ["パスの変更中にエラーが発生しました。[", "%0", "]"], 
			"comm_fail_loaddetail" : ["ローディング中にエラーが発生しました。パスを確認してください。パス [", "%0", "] HTTP エラーコード [", "%1", "]"], 
			"comm_cancel_byuser" : ["ユーザーにより通信がキャンセルされました。[", "%0", "]"], 
			"comm_stop_transaction_byesc" : ["TransactionがEsc Keyにより中止されます。( 標準ではありません。)"], 
			"comm_http_301" : ["リクエストされたURIが新しいURIに変更されました。"], 
			"comm_http_302" : ["リクエストされたURIが一時的に変更されました。"], 
			"comm_http_305" : ["リクエストされたリソースは、必ずProxy Locationを使用してアクセスする必要があります。"], 
			"comm_http_307" : ["リクエストされたURIが一時的に変更されました。"], 
			"comm_http_400" : ["クライアントの不正なリクエストのため、処理することができません。\n アドレスが正しいことを確認して、再試行してください。"], 
			"comm_http_401" : ["サーバーにログオンするためのリクエストが、サーバーに設定されている権限と一致しません。"], 
			"comm_http_402" : ["予約されています。"], 
			"comm_http_403" : ["ブラウザがアクセスしたディレクトリに利用可能なデフォルトページがありません。"], 
			"comm_http_404" : ["リクエストされたパスでドキュメントが見つけられません。\n アドレスが正しいことを確認して、再試行してください。"], 
			"comm_http_405" : ["サイトでページを表示することができません。"], 
			"comm_http_406" : ["許可されていないリクエストです。"], 
			"comm_http_407" : ["プロキシ認証が必要になります。"], 
			"comm_http_408" : ["リクエスト時間が経ちました。"], 
			"comm_http_500" : ["内部サーバーエラーです。 "], 
			"comm_http_503" : ["外部サービスが起動しないか、現在停止状態です。"], 
			"comm_http_504" : ["ゲートウェイを待ってタイムアウトしました。"], 
			"comm_http_499" : ["リクエストエラーです。"], 
			"comm_http_599" : ["サーバーエラーです。"], 

			"comm_https_500" : ["SSL VerifyCertに失敗しました。"], 
			"comm_https_501" : ["SSL ProxyInfoは変更またはGetProxyInfoに失敗しました。"], 
			"comm_https_502" : ["一つ以上のエラーが、サーバによって送信されたセキュア・ソケット・レイヤー（ SSL）証明書に見出されました。"], 
			"comm_https_503" : ["HTTPプロキシサーバがリクエストを処理できませんでした。"], 

			"script_error" : ["スクリプトエラーです。[", "%[0]", "] "], 

			"msg_access_invalid_file" : ["信用できないファイルにアクセスします。\n続けますか？\n\n[", "%0", "]"], 
			"msg_access_invalid_domain" : ["信用できないドメインにアクセスします。\n続けますか？\n\n[", "%0", "]"], 
			"msg_permit_folder" : ["このフォルダ配下のファイルは、常にアクセス許可"], 
			"msg_permit_domain" : ["このドメインは常にアクセス許容"], 
			"msg_update_processing" : ["実行中のプロセス[", "%0", "]があるため、Updateに失敗しました。実行中のプロセスを自動終了する場合はYes(はい)、実行中のプロセスを直接終了させてから続ける場合はNo(いいえ), 再起動後にアップデートを適用する場合はキャンセルを選択します。"], 
			"msg_reset_sandboxdialog" : ["プログラム改善によりフォルダやドメインへのアクセス警告ウィンドウで設定したアクセス可否の設定値を再設定する必要があります。\nご了承ください。"], 

			"msg_start" : ["nexacro platformをスタートします。"], 
			"msg_search_proxyserver" : ["プロキシサーバー設定を検索中。"], 
			"msg_update_engine" : ["エンジンをアップデートします。"], 
			"msg_download" : ["ADLコンテンツをダウンロードします。"], 
			"msg_elevation_required" : ["要求された操作を実行するには、特権の昇格が必要になります。"], 

			"comp_incorrect_file" : ["指定されたファイルが不正です。"], 
			"comp_fail_loadactivex" : ["ActiveX/Appletの実行時にエラーが発生しました。[", "%0", "]"], 

			"object_push_send_byec" : ["Pushサーバーが “Byec”メッセージを送信したり、サーバーとの規約によって終了しました。"], 
			"object_push_socket_timeout" : ["サーバーとの接続時間が指定された時間を超過して接続が終了しました。"], 
			"object_push_fail_command_auth" : ["Command Auth Error、 現在選択されたIPのCommand socket認証エラーが発生しました。"], 
			"object_push_fail_all_command_auth" : ["iplist属性に登録されたすべてのPushサーバへの接続が失敗しました。"], 
			"object_push_fail_data_auth" : ["データ伝送チャネル認証(authentication)エラーが発生しました。"], 
			"object_push_fail_connect" : ["サーバー接続に失敗しました。"], 
			"object_push_fail_send_receive" : ["パケット送信(send/recv)エラーが発生しました。"], 
			"object_push_connected_already" : ["すでにサーバーに接続されています。"], 
			"object_push_fail_disconnect" : ["X-PUSHサーバーとの接続解除(disconnect)要求に失敗しました。"], 
			"object_push_fail_suspend" : ["X-PUSHサーバーからメッセージ受信停止(suspend)要求に失敗しました。"], 
			"object_push_fail_resume" : ["X-PUSHサーバーからメッセージ受信再開(resume)要求に失敗しました。"], 
			"object_push_fail_command" : ["X-PUSHサーバーでtopic登録/登録解除(command)要求に失敗しました。"], 
			"object_push_notfound_layouturl" : ["メッセージレイアウト定義ファイルを見つけられません。"], 
			"object_push_invalid_layouturl" : ["メッセージレイアウト定義ファイルが有効ではありません。"], 
			"object_push_fail_protocol_version" : ["メッセージフォーマットのバージョン情報が一致しません。"], 
			"object_push_fail_rect" : ["信頼性メッセージの受信応答の送信に失敗しました。"], 
			"object_push_fail_reqd" : ["未受信メッセージの要求に失敗しました。"], 
			"object_push_fail_reqd" : ["미수신 메시지 요청을 실패했습니다."], 

			"msg_accessibility_emptyline" : ["空行"], 
			"msg_accessibility_emptyframe" : ["空のフレーム"]
		}
	};
}
