const API_BASE_URL = 'http://localhost:3000/api';

module.exports = {
  getLessonData: () => fetch(`${API_BASE_URL}/test/getlesson`, { method: 'POST' }).then(data => data.json()),
  initalizeSession: body => fetch(`${API_BASE_URL}/create`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      files: body,
    }),
  }).then(responseData => responseData.json()),
};

