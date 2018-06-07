import axios from 'axios'

let nextDeviceId = 0

export const FETCH_DEVICES = 'FETCH_DEVICES'
export const FETCH_DEVICES_SUCCESS = 'FETCH_DEVICES_SUCCESS'
export const FETCH_DEVICES_ERROR = 'FETCH_DEVICES_ERROR'
export const ADD_DEVICE = 'ADD_DEVICE'
export const CHANGE_RATING = 'CHANGE_RATING'

export const addDevice = device => ({
  type: ADD_DEVICE,
  id: nextDeviceId++,
  device
})

export function fetchDevices () {
  const request = axios({
    method: 'GET',
    headers: [],
    url: '/api/devices'
  })

  return {
    type: FETCH_DEVICES,
    payload: request
  }
}

export function fetchDevicesSuccess (error) {
  return {
    type: FETCH_DEVICES_SUCCESS,
    payload: error
  }
}

export function fetchDevicesError (error) {
  return {
    type: FETCH_DEVICES_SUCCESS,
    payload: error
  }
}

export function changeRating (starsSelected) {
  return {
    type: CHANGE_RATING,
    payload: starsSelected
  }
}
