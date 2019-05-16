import {DropzoneConfigInterface} from 'ngx-dropzone-wrapper';

export const USER_PROFILE_IMG_DROPZONE_CONFIG: DropzoneConfigInterface = {
    url: '{not_provided}',
    maxFilesize: 1,
    acceptedFiles: 'image/*',
    autoProcessQueue: false,
    uploadMultiple: false,
    maxFiles: 1,
    addRemoveLinks: true
};

export const FILE_IMPORT_DROPZONE_CONFIG: DropzoneConfigInterface = {
    url: '{not_provided}',
    maxFilesize: 1,
    acceptedFiles: '.csv,.xls,.xlsx', // '.csv,.xls'
    autoProcessQueue: false,
    uploadMultiple: true,
    maxFiles: 10,
    addRemoveLinks: true
};
