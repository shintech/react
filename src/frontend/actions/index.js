export const FETCH_DEVICES = 'FETCH_DEVICES'
export const FETCH_DEVICES_SUCCESS = 'FETCH_DEVICES_SUCCESS'
export const FETCH_DEVICES_ERROR = 'FETCH_DEVICES_ERROR'
export const ADD_DEVICE = 'ADD_DEVICE'
export const ADD_DEVICE_SUCCESS = 'ADD_DEVICE_SUCCESS'
export const ADD_DEVICE_ERROR = 'ADD_DEVICE_ERROR'
export const CHANGE_RATING = 'CHANGE_RATING'

export async function addDevice (device, devices) {
  let json

  try {
    let result = await fetch('/api/devices', {
      body: JSON.stringify(device),
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    })

    json = await result.json()
  } catch (err) {
    throw new Error(err.message)
  }

  return {
    type: ADD_DEVICE,
    json,
    devices
  }
}

export function addDeviceSuccess (message) {
  return {
    type: ADD_DEVICE_SUCCESS,
    payload: message
  }
}

export function addDeviceError (error) {
  return {
    type: ADD_DEVICE_ERROR,
    payload: error
  }
}

export async function fetchDevices () {
  let response = await fetch('/api/devices', {
    method: 'GET',
    headers: []
  })

  let json = await response.json()

  return {
    type: FETCH_DEVICES,
    payload: json.response,
    meta: json.meta
  }
}

export function fetchDevicesSuccess (message) {
  return {
    type: FETCH_DEVICES_SUCCESS,
    payload: message
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
