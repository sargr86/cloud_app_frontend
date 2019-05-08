import {environment} from '../../../environments/environment';

export const API_HOST = environment.apiHost;
export const TEXTAREA_AUTOSIZE_MIN_ROWS = 5;
export const TEXTAREA_AUTOSIZE_MAX_ROWS = 10;
export const UPLOADS_FOLDER = `${API_HOST}uploads/`;

export const FILE_TYPES = ['Master', 'Transactional'];

