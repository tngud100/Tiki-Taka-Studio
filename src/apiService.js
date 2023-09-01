import { api } from './main'; // Update this path to match the location of your main file
import $ from "jquery";

export function fetchCalendarData() {
  return $.ajax({
    url: api.defaults.baseURL.replace('http:', 'https:') + '/studio/reserve/CalendarReservate',
    method: 'GET',
    type: 'get', // transmission type
    dataType: 'json',
  });
}