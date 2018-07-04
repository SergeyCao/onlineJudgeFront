export const JUDGE_STATUS = {
  '-1': {
    name: 'Wrong Answer',
    short: 'WA',
    color: 'red',
    type: 'error'
  },
  '0': {
    name: 'Accepted',
    short: 'AC',
    color: 'rgba(19, 206, 102, 0.8)',
    type: 'success'
  },
  '1': {
    name: 'Time Limit Exceeded',
    short: 'TLE',
    color: 'red',
    type: 'error'
  },
  '2': {
    name: 'Time Limit Exceeded',
    short: 'TLE',
    color: 'red',
    type: 'error'
  },
  '3': {
    name: 'Memory Limit Exceeded',
    short: 'MLE',
    color: 'red',
    type: 'error'
  },
  '4': {
    name: 'Runtime Error',
    short: 'RE',
    color: 'red',
    type: 'error'
  },
  '5': {
    name: 'System Error',
    short: 'SE',
    color: 'red',
    type: 'error'
  },
  '6': {
    name: 'Compile Error',
    short: 'CE',
    color: 'rgba(255, 140, 0, 1)',
    type: 'warning'
  },
  '7': {
    name: 'Pending',
    color: 'rgba(255, 140, 0, 1)',
    type: 'warning'
  },
  '8': {
    name: 'Compiling',
    color: 'rgba(255, 140, 0, 1)',
    type: 'warning'
  },
  '9': {
    name: 'Judging',
    color: 'blue',
    type: 'info'
  },
  '10': {
    name: 'Partial Accepted',
    short: 'PAC',
    color: 'blue',
    type: 'info'
  }
}
