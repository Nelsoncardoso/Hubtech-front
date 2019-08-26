export function addTaskRequest(data) {
  return {
    type: '@task/ADD_TASK_REQUEST',
    payload: { data },
  };
}

export function setTaskData(data) {
  return {
    type: '@task/SET_TASK_DATA',
    payload: { data },
  };
}

export function addTaskRequestSuccess(task) {
  return {
    type: '@task/ADD_TASK_SUCCESS',
    payload: { task },
  };
}

export function addTaskRequestFailure() {
  return {
    type: '@task/ADD_TASK_REQUEST',
  };
}
