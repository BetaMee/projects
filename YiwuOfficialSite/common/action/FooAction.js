//同步type
export const SYNC_FOO = "SYNC_FOO";
//错误处理
export const ERROR_FOO = 'ERROR_USER';

/**
 * action辅助函数
 */


//错误处理
const ErrorHandle=(errMsg)=>{
  return {
    type: ERROR_USER,
    errMsg:errMsg
  }
}



/**
 * 同步action
 */
export const DoSyncFoo=()=>{
  return {
    type:SYNC_FOO
  }
}



